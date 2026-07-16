---
id: CONTRACT-KYC-REVIEW
title: KYC Review Contract Group
type: api-contract-group
audience: Junior admin developers, Backend, QA, Product, AI agents
owner: Backend Team
reviewers: Technical Lead, Admin Lead, Product Lead, QA
status: pilot-draft-with-gaps
version: 0.1
last_reviewed: 2026-07-17
authority: API and Socket Contract Specification v1
related: AF-04 Tasker and KYC Review, SF-03 Tasker KYC, KycVerification, TaskerProfile
generated_from: content/pilots/contracts/kyc-review-contract-group.md
do_not_edit: true
---

> Generated agent document. Edit `content/pilots/contracts/kyc-review-contract-group.md` and rerun `node scripts/generate-pilot-docs.js`.

# KYC Review Contract Group

## In plain English

These contracts give the admin dashboard enough verified information to review a Tasker's KYC case and apply an authorized outcome. The current contract names the user-detail and request-reverification paths, but exact approve, reject, queue and reconciliation paths remain gaps that must be resolved before implementation.

## Why this group exists

AF-04 cannot be implemented safely from screen assumptions. Backend and admin must agree on permissions, safe response data, state conflicts, reason capture, audit behavior and provider reconciliation.

## Contract status summary

| Capability | Current contract status | Required action |
| --- | --- | --- |
| View linked user and KYC context | Named: `GET /admin/users/{userId}` | Define the exact safe KYC summary/detail fields. |
| Request KYC re-verification | Named: `POST /admin/kyc/{kycId}/request-reverification` | Define DTO, permission, errors, idempotency and audit response. |
| List/filter KYC queue | Missing exact accepted path | Add formally to the API contract and OpenAPI before frontend implementation. |
| View a dedicated KYC case | Missing exact accepted path | Decide whether user detail is sufficient or add a dedicated detail contract. |
| Approve KYC | Missing exact accepted path | Add formally; do not invent a frontend path. |
| Reject KYC | Missing exact accepted path | Add formally; do not invent a frontend path. |
| Reconcile Smile ID status | Missing exact accepted admin path | Add a cost-guarded provider reconciliation contract or route through AF-19. |

## Shared access and safety rules

| Rule | Requirement |
| --- | --- |
| Authentication | Valid admin access token and active admin session. |
| View permission | KYC view permission; sensitive evidence may require an additional permission. |
| Decision permission | Separate approve, reject, re-verification or escalation permission as accepted by RBAC design. |
| TOTP | Required for high-impact decisions if the final RBAC policy classifies them accordingly. |
| Sensitive data | Return only minimum operational KYC data; never return provider secrets or unnecessary raw identifiers/biometric payloads. |
| Audit | Mutation responses must identify the resulting status and audit record/request ID. |
| State conflict | Reject stale mutations with the current status/version so the admin refreshes before retrying. |
| Idempotency | Mutations require an idempotency key or equivalent duplicate-action protection. |

## GET /admin/users/{userId}

### Business purpose

Returns the permission-gated user, Tasker and KYC context required to enter AF-04 from User Management.

### Preconditions

- The user exists.
- The admin has access to User Management and KYC summary fields.
- More sensitive evidence remains behind an additional controlled access path.

### Minimum KYC review response shape

```json
{
  "data": {
    "userId": "usr_123",
    "accountStatus": "ACTIVE",
    "taskerProfile": {
      "taskerProfileId": "tpr_123",
      "isActive": false,
      "kycStatus": "PENDING"
    },
    "kycSummary": {
      "kycId": "kyc_123",
      "provider": "SMILE_ID",
      "identifierType": "NIN",
      "status": "PENDING",
      "submittedAt": "2026-07-17T08:00:00Z",
      "providerResultAvailable": true,
      "evidenceAccessAvailable": true
    }
  },
  "meta": {
    "requestId": "req_123"
  }
}
```

The final response must use the repository-wide response standard and may redact fields according to permission.

### Expected errors

| Code | Condition | Admin behavior |
| --- | --- | --- |
| UNAUTHORIZED | Admin session is missing or expired. | Return to admin authentication without exposing case data. |
| FORBIDDEN | Admin lacks user/KYC view permission. | Show a clear forbidden state. |
| NOT_FOUND | User does not exist or is not visible to the role. | Show safe not-found behavior. |
| DEPENDENCY_UNAVAILABLE | Required protected evidence summary cannot be loaded. | Keep the case read-only and provide retry/escalation. |

## POST /admin/kyc/{kycId}/request-reverification

### Business purpose

Records that the Tasker must correct and resubmit KYC information before activation can continue.

### Request requirements

| Field | Requirement |
| --- | --- |
| `reasonCode` | Required stable reason value. |
| `note` | Required human-readable guidance that does not expose provider internals. |
| `requiredSteps` | Accepted resubmission steps, such as identifier correction or biometric recapture. |
| `expectedVersion` | Current case version/status guard to prevent stale overwrite. |
| `Idempotency-Key` | Required duplicate-action protection. |

```json
{
  "reasonCode": "BIOMETRIC_RECAPTURE_REQUIRED",
  "note": "Please repeat the live face capture in good lighting.",
  "requiredSteps": ["FACE_CAPTURE"],
  "expectedVersion": 3
}
```

### Success response

```json
{
  "data": {
    "kycId": "kyc_123",
    "status": "REQUIRES_REVERIFICATION",
    "taskerActive": false,
    "notificationStatus": "QUEUED",
    "auditId": "aud_123"
  },
  "meta": {
    "requestId": "req_123"
  }
}
```

### Expected errors

| Code | Condition | Admin behavior |
| --- | --- | --- |
| FORBIDDEN | Admin lacks the action permission. | Keep the case read-only. |
| VALIDATION_ERROR | Reason, note or required steps are invalid. | Show field-level correction. |
| INVALID_STATE | Current KYC state cannot request re-verification. | Refresh and show the authoritative state. |
| STATE_CONFLICT | Another reviewer changed the case. | Reload before deciding again. |
| DUPLICATE_REQUEST | The same idempotency key was already processed. | Display the original result without applying twice. |

## Missing approve and reject contracts

The current repository does not define accepted exact paths for these actions. Before an admin developer implements approve or reject:

- [ ] Product and Backend agree on the allowed state transitions.
- [ ] Stable endpoint paths are added to the API contract and OpenAPI.
- [ ] Request DTOs include reason/note rules and expected state/version.
- [ ] Response DTOs include resulting KYC status, Tasker activation result, audit ID and notification status.
- [ ] RBAC and TOTP rules are explicit.
- [ ] Idempotency and simultaneous-review behavior are explicit.
- [ ] Privacy and redaction behavior are explicit.
- [ ] QA cases are linked.

## State and side effects

| Action | Records | Side effects |
| --- | --- | --- |
| View context | User, TaskerProfile, KycVerification, safe provider/audit summaries | Evidence-access audit where required. |
| Request re-verification | KycVerification/KycAttempt workflow state, AdminAuditLog | Tasker notification and mobile resubmission requirement. |
| Approve, once contracted | KycVerification, TaskerProfile, AdminAuditLog | Activation eligibility and Tasker notification. |
| Reject, once contracted | KycVerification, TaskerProfile, AdminAuditLog | Tasker remains blocked and receives safe guidance. |
| Reconcile, once contracted | ProviderRequestLog, ProviderWebhookEvent, KycVerification | Safe provider check, job/audit visibility and possible AF-19 handoff. |

## Required contract tests

- [ ] Authentication and every required permission.
- [ ] Redaction of raw identifiers, biometrics and provider secrets.
- [ ] Valid state transitions.
- [ ] Invalid-state and stale-version conflict.
- [ ] Duplicate idempotency key returns the original outcome.
- [ ] Audit record completeness.
- [ ] Notification job creation without making notification delivery the source of truth.
- [ ] Provider delayed/failed/duplicate event behavior.
