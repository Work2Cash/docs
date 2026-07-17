---
id: CONTRACT-KYC-REVIEW
title: KYC Review Contract Group
type: api-contract-group
audience: Junior admin developers, Backend, QA, Product, AI agents
owner: Backend Team
reviewers: Technical Lead, Admin Lead, Product Lead, Risk and Compliance, QA
status: pilot-review-ready
version: 0.2
last_reviewed: 2026-07-17
authority: Phase 1 Technical and Product decision for AF-04, subordinate to formal architecture approval
related: AF-04 Tasker and KYC Review, SF-03 Tasker KYC, KycVerification, KycAttempt, AF-14 Risk Review, AF-19 Provider Monitoring
---

# KYC Review Contract Group

## In plain English

These contracts let an authorized admin find a KYC case, read the minimum safe decision context, approve or reject it, request corrected information, escalate it to risk specialists, or ask the backend to reconcile a delayed Smile ID result. The backend—not the screen—owns permission checks, valid state changes, duplicate protection, audit records and Tasker activation.

## Why this group exists

AF-04 is a sensitive cross-team flow. A screen-only description would leave Admin and Backend free to invent different paths, fields and state behavior. This group gives both teams one stable pilot contract and gives QA exact behavior to verify.

This is the accepted Phase 1 reference decision. It must be merged into the general API/OpenAPI source during Phase 4 before production implementation is called contract-complete.

## Contract status summary

| Capability | Accepted Phase 1 contract | Status |
| --- | --- | --- |
| Enter from User Management | `GET /admin/users/{userId}` | Existing path retained. |
| List and filter KYC queue | `GET /admin/kyc` | Defined in this pilot. |
| View one dedicated KYC case | `GET /admin/kyc/{kycId}` | Defined in this pilot. |
| Approve KYC | `POST /admin/kyc/{kycId}/approve` | Defined in this pilot. |
| Reject KYC | `POST /admin/kyc/{kycId}/reject` | Defined in this pilot. |
| Request re-verification | `POST /admin/kyc/{kycId}/request-reverification` | Existing path completed here. |
| Escalate to risk review | `POST /admin/kyc/{kycId}/escalate-risk` | Defined in this pilot. |
| Reconcile provider result | `POST /admin/kyc/{kycId}/reconcile` | Defined as asynchronous and cost-guarded. |

## Shared access and safety rules

| Rule | Requirement |
| --- | --- |
| Authentication | Valid TOTP-authenticated admin session and access token. A fresh step-up challenge is required only when the accepted admin-session policy marks the session stale or the action critical. |
| View permission | `kyc.read`. |
| Protected evidence permission | `kyc.evidence.read`; evidence access is separately audited. |
| Decision permissions | `kyc.approve`, `kyc.reject`, `kyc.reverify`, `kyc.escalate` and `kyc.reconcile` are separate permissions. |
| Sensitive data | Never return raw NIN/BVN values, biometric payloads, evidence storage keys, provider secrets or raw provider payloads. |
| Current truth | Backend KycVerification and KycAttempt state is authoritative. Client labels and provider redirects are not. |
| Concurrency | Every mutation includes `expectedVersion`. A successful mutation increments the KycVerification version exactly once. |
| Idempotency | Every mutation requires `Idempotency-Key`. Repeating the same key and same request returns the original outcome; reusing the key with a different request returns a conflict. |
| Audit | Every decision and reconciliation request records admin actor, action, target, reason, request ID, previous/new state and timestamp. |
| Notification | A notification job may be queued after commit. Delivery failure never rolls back an authoritative KYC decision. |
| Activation | Approving KYC recalculates Tasker eligibility; it does not blindly set `TaskerProfile.isActive = true`. |
| Provider cost control | Reconciliation is explicit, asynchronous, cooldown-controlled and deduplicated. The admin UI must not poll or retry paid provider operations automatically. |

### Shared mutation headers

| Header | Requirement |
| --- | --- |
| `Authorization` | Required admin bearer token. |
| `Idempotency-Key` | Required unique key for the logical action. |
| `X-Request-ID` | Accepted or generated for traceability. |

### Shared decision response

Approve, reject, re-verification and risk escalation return this common shape with action-specific values:

```json
{
  "data": {
    "kycId": "kyc_123",
    "status": "APPROVED",
    "reviewState": "DECIDED",
    "version": 4,
    "taskerActivation": {
      "eligible": true,
      "active": true,
      "blockingReasons": []
    },
    "notificationStatus": "QUEUED",
    "auditId": "aud_123"
  },
  "meta": {
    "requestId": "req_123"
  }
}
```

### Shared mutation errors

| HTTP | Code | Meaning | Admin behavior |
| --- | --- | --- | --- |
| 400 | VALIDATION_ERROR | Required reason, note, steps or version is invalid. | Show field-level correction. |
| 401 | UNAUTHORIZED | Session is absent, expired or no longer valid. | Return to admin authentication. |
| 403 | FORBIDDEN | Admin lacks the exact action permission. | Keep the case read-only. |
| 404 | NOT_FOUND | Case does not exist or is not visible to the role. | Show a safe not-found state. |
| 409 | INVALID_STATE | Current KYC/review state cannot perform the action. | Show current truth and allowed actions. |
| 409 | STATE_CONFLICT | `expectedVersion` is stale. | Refresh the case before deciding again. |
| 409 | IDEMPOTENCY_KEY_REUSED | The key was previously used with a different request. | Generate a new key only for a genuinely new decision. |
| 423 | RISK_HOLD | A blocking risk decision prevents normal approval. | Continue through AF-14. |
| 429 | RECONCILIATION_COOLDOWN | Provider reconciliation is already running or not yet allowed. | Show `reconciliationAvailableAt`; do not auto-retry. |
| 503 | DEPENDENCY_UNAVAILABLE | A required provider/storage dependency is unavailable. | Preserve current state and offer safe retry/escalation. |

## GET /admin/users/{userId}

### Business purpose

Returns permission-gated user, Tasker and KYC summary context when AF-04 is entered from User Management. It is not the dedicated evidence/detail contract.

### Minimum KYC summary response

```json
{
  "data": {
    "userId": "usr_123",
    "accountStatus": "ACTIVE",
    "taskerProfile": {
      "taskerProfileId": "tpr_123",
      "isActive": false,
      "kycStatus": "PENDING",
      "currentKycId": "kyc_123"
    },
    "kycSummary": {
      "kycId": "kyc_123",
      "provider": "SMILE_ID",
      "identifierType": "NIN",
      "status": "PENDING",
      "reviewState": "IN_REVIEW",
      "version": 3,
      "submittedAt": "2026-07-17T08:00:00Z"
    }
  },
  "meta": {
    "requestId": "req_123"
  }
}
```

## GET /admin/kyc

### Business purpose

Returns the operational KYC queue. It supplies summary fields only and never returns protected evidence.

### Query parameters

| Parameter | Requirement |
| --- | --- |
| `status` | Optional KycStatus filter; repeatable or comma-separated according to the repository query standard. |
| `reviewState` | Optional operational review-state filter. |
| `provider` | Optional provider filter. |
| `identifierType` | Optional NIN/BVN route filter. |
| `submittedFrom`, `submittedTo` | Optional ISO-8601 range. |
| `search` | Optional safe search by user ID, Tasker ID, case ID, email or phone according to permission; never raw NIN/BVN. |
| `cursor` | Optional pagination cursor. |
| `limit` | Optional; backend-capped. |
| `sort` | Accepted values: `oldest`, `newest`, `priority`. |

### Queue item

```json
{
  "data": [
    {
      "kycId": "kyc_123",
      "userId": "usr_123",
      "taskerProfileId": "tpr_123",
      "displayName": "Ada O.",
      "status": "PENDING",
      "reviewState": "IN_REVIEW",
      "provider": "SMILE_ID",
      "identifierType": "NIN",
      "latestAttemptNumber": 2,
      "submittedAt": "2026-07-17T08:00:00Z",
      "providerResultAvailable": true,
      "riskHold": false,
      "version": 3
    }
  ],
  "meta": {
    "requestId": "req_123",
    "nextCursor": null
  }
}
```

## GET /admin/kyc/{kycId}

### Business purpose

Returns the complete safe decision context for one case. Protected evidence uses time-limited references only when the admin also has `kyc.evidence.read`.

### Required response groups

| Group | Safe contents |
| --- | --- |
| User and Tasker | IDs, display name, account/Tasker state, profile-completion blockers and activation summary. |
| Verification | Status, review state, provider, identifier type, version, timestamps and allowed actions. |
| Latest attempt | Attempt number/status, safe provider job reference, match outcomes and sanitized failure code. |
| Attempt history | Attempt number, status and timestamps; no raw provider payload. |
| Evidence | Availability and audited time-limited view references only when permitted. |
| Risk | Whether a blocking risk hold exists and the linked risk case ID permitted to the role. |
| Decisions | Safe reason code, actor display/ID, timestamp, resulting state and audit ID. |
| Reconciliation | In-flight state, last request time and `reconciliationAvailableAt`. |

### Allowed actions response

The backend returns action availability so the UI does not recreate state rules:

```json
{
  "allowedActions": {
    "approve": true,
    "reject": true,
    "requestReverification": true,
    "escalateRisk": true,
    "reconcile": false
  }
}
```

`false` means the current state or permission prevents the action. The UI may show an explanation but cannot override it.

## POST /admin/kyc/{kycId}/approve

### Business purpose

Records that the verified evidence satisfies KYC policy and recalculates Tasker activation eligibility.

### Request

```json
{
  "reasonCode": "VERIFIED_IDENTITY_AND_BIOMETRIC_MATCH",
  "note": "Provider result and required evidence reviewed.",
  "expectedVersion": 3
}
```

### Guards and outcome

- Requires `kyc.approve`.
- Allowed only from `PENDING` with a review state that permits a decision.
- Required evidence/provider outcome must be available and no blocking RiskFlag may remain.
- Sets KycVerification to `APPROVED` and review state to `DECIDED`.
- Clears current re-verification steps.
- Recalculates TaskerProfile activation from all profile, restriction and KYC rules.
- Writes one audit record and queues one safe notification.

## POST /admin/kyc/{kycId}/reject

### Business purpose

Records a verified non-correctable policy failure. Correctable evidence problems must use re-verification instead.

### Request

```json
{
  "reasonCode": "IDENTITY_MISMATCH_CONFIRMED",
  "note": "The submitted identity could not be matched under the accepted policy.",
  "expectedVersion": 3
}
```

### Guards and outcome

- Requires `kyc.reject`.
- Allowed only from `PENDING` after required evidence/provider truth is available.
- `reasonCode` and safe Tasker-facing `note` are required.
- Sets KycVerification to `REJECTED` and review state to `DECIDED`.
- Keeps Tasker work access blocked.
- Writes one audit record and queues one safe notification.

## POST /admin/kyc/{kycId}/request-reverification

### Business purpose

Records a correctable problem and tells the Tasker which accepted steps must be repeated.

### Request

```json
{
  "reasonCode": "BIOMETRIC_RECAPTURE_REQUIRED",
  "note": "Please repeat the live face capture in good lighting.",
  "requiredSteps": ["FACE_CAPTURE"],
  "expectedVersion": 3
}
```

### Guards and outcome

- Requires `kyc.reverify`.
- Allowed from `PENDING`, `FAILED` or `REJECTED` only when policy says the issue is correctable.
- Accepted `requiredSteps` are `IDENTIFIER`, `FACE_CAPTURE` and `CONSENT`; at least one is required.
- Sets status to `REQUIRES_REVERIFICATION` and review state to `WAITING_FOR_TASKER`.
- Stores current required steps without deleting previous KycAttempt history.
- A later valid mobile resubmission creates the next numbered KycAttempt and returns the case to `PENDING`.
- Writes one audit record and queues one safe notification.

## POST /admin/kyc/{kycId}/escalate-risk

### Business purpose

Hands suspicious or ambiguous identity behavior to AF-14 without falsely approving or rejecting KYC.

### Request

```json
{
  "reasonCode": "IDENTITY_RISK_REVIEW_REQUIRED",
  "note": "Provider and device signals require specialist review.",
  "expectedVersion": 3
}
```

### Guards and outcome

- Requires `kyc.escalate`.
- Creates or links one open RiskFlag/risk case idempotently.
- Leaves KycStatus unchanged unless a separate approved risk decision changes it.
- Sets review state to `WAITING_FOR_RISK` and keeps Tasker work access blocked.
- Returns the permitted `riskCaseId`, audit ID and updated version.
- AF-14 later returns the case to `IN_REVIEW` or applies an authorized risk outcome.

## POST /admin/kyc/{kycId}/reconcile

### Business purpose

Queues one controlled check of the latest Smile ID attempt when verified provider truth is delayed or inconsistent.

### Request

```json
{
  "reasonCode": "PROVIDER_RESULT_DELAYED",
  "expectedVersion": 3
}
```

### Accepted response — 202

```json
{
  "data": {
    "kycId": "kyc_123",
    "reconciliationJobId": "job_123",
    "status": "PENDING",
    "reviewState": "WAITING_FOR_PROVIDER",
    "version": 4,
    "reconciliationAvailableAt": "2026-07-17T09:05:00Z",
    "auditId": "aud_123"
  },
  "meta": {
    "requestId": "req_123"
  }
}
```

### Guards and outcome

- Requires `kyc.reconcile`.
- Allowed only when the latest attempt has a provider reference and is pending or retryable.
- Creates at most one in-flight reconciliation job per KYC case.
- Backend-configured cooldown is returned as `reconciliationAvailableAt`; the UI must not auto-trigger when it expires.
- The request itself never approves or rejects KYC.
- A worker verifies provider truth, processes it idempotently, updates attempt/case state when allowed and exposes failures to AF-19.
- Provider unavailability preserves the prior authoritative KYC state.

## State and side effects

| Action | Status/review-state effect | Records and side effects |
| --- | --- | --- |
| View queue/detail | No state change. | Reads User, TaskerProfile, KycVerification and KycAttempt; evidence access may create an audit record. |
| Approve | `PENDING` → `APPROVED`; review → `DECIDED`. | Updates verification/version, recalculates Tasker activation, creates AdminAuditLog and notification outbox item. |
| Reject | `PENDING` → `REJECTED`; review → `DECIDED`. | Keeps Tasker inactive, creates AdminAuditLog and notification outbox item. |
| Request re-verification | Reviewable state → `REQUIRES_REVERIFICATION`; review → `WAITING_FOR_TASKER`. | Records required steps, preserves attempts, creates audit and notification. |
| Submit again in mobile flow | `REQUIRES_REVERIFICATION` → `PENDING`; review → `WAITING_FOR_PROVIDER`. | Creates the next immutable numbered KycAttempt. |
| Escalate risk | KycStatus unchanged; review → `WAITING_FOR_RISK`. | Creates/links RiskFlag and audit; no false activation. |
| Reconcile | KycStatus initially unchanged; review → `WAITING_FOR_PROVIDER`. | Creates deduplicated job/provider request and audit; verified worker result may later update state. |

## Required contract tests

- [ ] Queue filters, pagination, ordering and safe search.
- [ ] Dedicated detail shape and protected-evidence permission.
- [ ] Every action-specific permission and TOTP-authenticated session rule.
- [ ] Redaction of raw identifiers, biometrics, storage keys and provider secrets.
- [ ] Valid and invalid state transitions for every mutation.
- [ ] Stale `expectedVersion` returns current truth and applies nothing.
- [ ] Same idempotency key/request returns the original result without duplicate audit or notification.
- [ ] Same idempotency key with a different request returns conflict.
- [ ] Approval recalculates rather than blindly toggles Tasker activation.
- [ ] Re-verification creates the next numbered attempt and preserves history.
- [ ] Risk escalation preserves KYC truth and creates one linked risk case.
- [ ] Reconciliation is asynchronous, cooldown-controlled and limited to one in-flight job.
- [ ] Provider delayed, failed and duplicate event behavior.
- [ ] Notification failure does not roll back the authoritative decision.
- [ ] Audit records contain actor, action, target, reason, previous/new state, request ID and timestamp.

## Phase 4 handoff

- [ ] Merge these accepted pilot paths and DTOs into the general API contract.
- [ ] Add them to OpenAPI with shared schemas and error responses.
- [ ] Confirm final permission-key naming with the RBAC seed/source.
- [ ] Confirm reason-code enums with Product, Risk and Support.
- [ ] Link implementation and contract-test evidence in the registry.
