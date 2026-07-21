---
id: CONTRACT-REFERRAL-001
title: Referral Contract Group
type: api-contract-group
audience: Junior mobile developers, Junior admin developers, Backend, QA, Product, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, Product Lead, Finance, Risk, QA
status: approved-reference
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Repository-owner accepted contract decision for MF-17 and AF-15 based on approved flows and Main Enterprise Architecture v1
related: MF-02 Registration, MF-14 Completion and Settlement, MF-17 Referral, AF-08 Finance, AF-14 Risk Review, AF-15 Referral Management, AF-18 Audit Log Review, ReferralCode, ReferralAttribution, ReferralReward, WalletLedgerEntry
generated_from: content/contracts/referral-contract-group.md
do_not_edit: true
---

> Generated agent document. Edit `content/contracts/referral-contract-group.md` and rerun `node scripts/generate-contract-docs.js`.

# Referral Contract Group

## In plain English

These contracts let a signed-in user see and share their referral code, follow the progress of people attributed to that code, and see whether a reward is pending, held, rejected or credited. A new user's referral code is captured by registration. The backend—not the mobile client—counts paid-task completions, qualifies a reward and posts the wallet credit.

Authorized admins can list and inspect referral attributions, then approve, hold, reject or escalate a reward when manual review is required. Every decision is permission-gated, version-checked, idempotent and audited.

## Why this group exists

MF-17 and AF-15 define approved referral behavior, but the provisional API specification previously left code/share, attribution, progress, reward status and admin review paths undefined. That prevented Mobile, Admin, Backend and QA from implementing the same contract without guessing.

This decision closes only that named gap. It does not claim that the wider Phase 4 contract, schema or OpenAPI migration is complete.

## Contract status summary

| Capability | Accepted contract | Status |
| --- | --- | --- |
| Get the current user's referral code, share link and summary | `GET /referrals/me` | Defined here. |
| List the current user's attributed referrals and progress | `GET /referrals/me/attributions` | Defined here. |
| Attribute a new registration | Optional `referralCode` on `POST /auth/register` | Existing registration path extended here; no separate unauthenticated attribution endpoint. |
| List referral records for Admin | `GET /admin/referrals` | Defined here. |
| Read one referral record for Admin | `GET /admin/referrals/{attributionId}` | Defined here. |
| Approve an eligible reward | `POST /admin/referrals/{attributionId}/approve` | Defined here. |
| Hold a reward | `POST /admin/referrals/{attributionId}/hold` | Defined here. |
| Reject a reward | `POST /admin/referrals/{attributionId}/reject` | Defined here. |
| Escalate suspected abuse | `POST /admin/referrals/{attributionId}/escalate-risk` | Defined here. |
| Credit the reward | No public client or Admin credit endpoint | Backend settlement/worker responsibility only. |
| Realtime updates | No referral socket contract | Durable REST state and normal notification delivery are sufficient. |

Sharing itself uses the device's native share sheet with the `shareUrl` returned by `GET /referrals/me`. Sharing does not create authoritative referral state and therefore has no mutation endpoint.

## Shared access and safety rules

| Rule | Requirement |
| --- | --- |
| Mobile authentication | `GET /referrals/me` and `GET /referrals/me/attributions` require a valid user access token. |
| Registration | `POST /auth/register` may accept a referral code before authentication. Invalid-code responses must not reveal another user's private information. |
| Admin authentication | Every Admin contract requires a valid TOTP-authenticated Admin session. |
| Admin permissions | Reads require `referrals.read`; approve, hold and reject require `referrals.review`; escalation requires `referrals.escalate`. |
| Backend authority | The backend owns attribution, paid-task counting, qualification, reward state and wallet credit. Clients never increment progress or credit a reward. |
| Qualification rule | The reward becomes eligible only after the referred user completes five distinct paid tasks whose settlement is authoritative and not reversed. |
| Duplicate protection | One referred user can have at most one confirmed attribution and one reward for the configured five-paid-task threshold. |
| Self-referral and abuse | The backend blocks or holds self-referral, multi-account and other risk signals without exposing detection details to normal users. |
| Registration immutability | After a confirmed attribution is attached to the new account, the client cannot replace its referral code. |
| Wallet safety | Reward credit writes one immutable wallet-ledger entry using an idempotency key derived from the referral reward, not from a client retry. |
| Concurrency | Admin mutations require `expectedVersion`; stale decisions return `STATE_CONFLICT`. |
| Idempotency | Admin mutations require `Idempotency-Key`. Repeating the same logical request returns the original outcome. |
| Audit | Admin decisions record actor, action, attribution, reason, previous/new state, request ID and timestamp. |
| Privacy | Mobile responses expose only the current user's referral records and a minimized referred-user label. They never expose phone, email, exact address, task details or risk signals. |
| Notification | Notifications are queued after commit. Notification failure never reverses an attribution, decision or wallet credit. |

### Shared Admin mutation headers

| Header | Requirement |
| --- | --- |
| `Authorization` | Required Admin bearer token backed by a valid TOTP-authenticated session. |
| `Idempotency-Key` | Required unique key for the logical decision. |
| `X-Request-ID` | Accepted or generated for traceability. |

### Shared Admin mutation request

```json
{
  "reasonCode": "ELIGIBILITY_VERIFIED",
  "note": "Five settled paid tasks verified.",
  "expectedVersion": 3
}
```

`reasonCode` is required. `note` is optional unless the selected reason or policy requires an explanation. The backend validates allowed reason codes for the requested action.

### Shared Admin mutation response

```json
{
  "data": {
    "attributionId": "rat_123",
    "attributionStatus": "QUALIFIED",
    "reward": {
      "rewardId": "rrw_123",
      "status": "PENDING_CREDIT",
      "walletCreditLedgerEntryId": null
    },
    "version": 4,
    "auditId": "aud_123"
  },
  "meta": {
    "requestId": "req_123"
  }
}
```

### Shared errors

| HTTP | Code | Meaning | Consumer behavior |
| --- | --- | --- | --- |
| 400 | `VALIDATION_ERROR` | Required input, cursor, reason or version is malformed. | Correct the request; do not infer success. |
| 401 | `UNAUTHORIZED` | User or Admin session is absent or invalid. | Return to the appropriate authentication flow. |
| 403 | `FORBIDDEN` | The actor lacks the required permission or ownership. | Keep the record read-only and show a safe denial. |
| 404 | `NOT_FOUND` | The referral record does not exist or is not visible to the actor. | Show a safe not-found state. |
| 409 | `INVALID_STATE` | The requested action is not valid from the authoritative state. | Refresh the record and show allowed actions. |
| 409 | `STATE_CONFLICT` | `expectedVersion` is stale. | Refresh before making a new decision. |
| 409 | `IDEMPOTENCY_KEY_REUSED` | The key was reused with different input. | Use a new key only for a genuinely new action. |
| 422 | `REFERRAL_NOT_ELIGIBLE` | The code or account cannot create a valid attribution. | Continue registration without claiming attribution; show approved generic copy. |
| 423 | `REWARD_HELD` | Risk or manual review blocks credit. | Show pending/held status; do not retry credit from the client. |
| 503 | `DEPENDENCY_UNAVAILABLE` | Wallet, ledger or required backend dependency is unavailable. | Preserve authoritative pending state and allow backend reconciliation. |

## GET /referrals/me

### Business purpose

Returns the signed-in user's referral code, native-share URL and aggregate progress/reward summary for MF-17.

### Success response

```json
{
  "data": {
    "referralCode": "ADA7K9",
    "shareUrl": "https://work2cash.com/r/ADA7K9",
    "summary": {
      "registeredCount": 3,
      "qualifiedCount": 1,
      "pendingRewardCount": 1,
      "creditedRewardCount": 1
    }
  },
  "meta": {
    "requestId": "req_123"
  }
}
```

The backend may create the user's ReferralCode lazily on the first successful request. Repeating the request returns the same active code; it must not create multiple active codes.

## GET /referrals/me/attributions

### Business purpose

Returns only referrals attributed to the signed-in user, including paid-task progress and reward status.

### Query parameters

| Parameter | Requirement |
| --- | --- |
| `status` | Optional attribution/reward status filter. |
| `cursor` | Optional opaque pagination cursor. |
| `limit` | Optional and backend-capped. |

### Success response

```json
{
  "data": [
    {
      "attributionId": "rat_123",
      "referredUserLabel": "A. O.",
      "attributionStatus": "ACTIVE",
      "registeredAt": "2026-07-17T09:00:00Z",
      "progress": {
        "completedPaidTasks": 3,
        "requiredPaidTasks": 5
      },
      "reward": {
        "status": "PENDING",
        "creditedAt": null
      }
    }
  ],
  "meta": {
    "requestId": "req_123",
    "nextCursor": null
  }
}
```

Normal users see `PENDING`, `CREDITED`, `HELD` or `NOT_ELIGIBLE`. They do not receive internal risk reasons, device signals or another user's task history.

## POST /auth/register referral extension

### Business purpose

Captures referral attribution as part of the existing registration transaction without creating a separate unauthenticated attribution endpoint.

### Request extension

```json
{
  "email": "new.user@example.com",
  "phone": "+2348000000000",
  "password": "client-supplied-secret",
  "referralCode": "ADA7K9"
}
```

`referralCode` is optional. The existing registration contract continues to own all other fields and validation.

### Required behavior

- Validate format and code status without returning referrer identity.
- Record the pending code association during registration, but confirm ReferralAttribution only after the new account completes the existing verification requirement.
- Reject self-referral and already-attributed accounts.
- Do not fail valid account creation solely because an optional referral code is invalid; return approved generic referral feedback so the client can explain that registration succeeded without attribution.
- Once confirmed, attribution is immutable through public client contracts.

### Response extension

```json
{
  "referralAttribution": {
    "status": "PENDING_ACCOUNT_VERIFICATION"
  }
}
```

Allowed public values are `PENDING_ACCOUNT_VERIFICATION`, `CONFIRMED` and `NOT_APPLIED`. Internal abuse states are not exposed.

## GET /admin/referrals

### Business purpose

Returns the permission-filtered referral review queue for AF-15.

### Query parameters

| Parameter | Requirement |
| --- | --- |
| `attributionStatus` | Optional attribution-state filter. |
| `rewardStatus` | Optional reward-state filter. |
| `riskStatus` | Optional `none`, `flagged` or `escalated` filter. |
| `search` | Optional safe search by attribution ID, reward ID or permitted user identifier. |
| `cursor` | Optional opaque pagination cursor. |
| `limit` | Optional and backend-capped. |
| `sort` | `oldest`, `newest` or `priority`. |

Queue rows contain IDs, minimized user labels, completed-paid-task count, reward state, risk indicator, timestamps and version. They do not contain raw device signals, full task history or wallet secrets.

## GET /admin/referrals/{attributionId}

### Business purpose

Returns one safe referral decision record with referrer/referred-user summaries, attribution history, authoritative paid-task qualification evidence, reward state, wallet-credit reference, risk-review link and prior decisions.

The backend returns allowed actions so Admin does not recreate state and permission rules:

```json
{
  "allowedActions": {
    "approve": true,
    "hold": true,
    "reject": true,
    "escalateRisk": true
  }
}
```

Paid-task evidence includes only the minimum settlement identifiers, completion timestamps and counted/not-counted reason required for review. Exact addresses, chat, proof media and unrelated payment data are excluded.

## POST /admin/referrals/{attributionId}/approve

Approves a manually reviewed attribution/reward only when five authoritative paid-task settlements qualify and no blocking risk hold remains. The backend moves the reward to `PENDING_CREDIT` and queues idempotent wallet-credit work. It does not synchronously trust the Admin client to mark the wallet credited.

## POST /admin/referrals/{attributionId}/hold

Places the reward in `HELD` with a required reason while evidence, settlement or risk review is incomplete. Qualification progress remains preserved. Holding never creates or reverses a wallet-ledger entry.

## POST /admin/referrals/{attributionId}/reject

Marks the reward `REJECTED` for a confirmed non-qualifying or abusive attribution. It requires a safe reason and cannot reverse an already credited reward; credited-reward correction must use the governed finance/reconciliation process.

## POST /admin/referrals/{attributionId}/escalate-risk

Creates or links the AF-14 risk-review record, moves the referral reward to `HELD`, writes the Admin audit event and returns the permitted risk-case reference. It must not expose internal detection signals to the referrer or referred user.

## State and side effects

| Trigger | Authoritative state effect | Side effects |
| --- | --- | --- |
| Valid account verification with referral code | Creates one confirmed ReferralAttribution. | Updates referral summary; may queue a safe notification. |
| Each authoritative MF-14 settlement | Recalculates distinct paid-task progress exactly once. | When count reaches five, creates one ReferralReward in `PENDING_CREDIT` unless held. |
| Reward qualification | Does not directly trust Mobile or Admin state. | Queues idempotent wallet-credit work. |
| Successful wallet credit | Moves reward to `CREDITED` and stores its WalletLedgerEntry reference. | Queues safe notification; becomes visible through MF-17 and AF-15 reads. |
| Wallet-credit failure | Leaves reward pending/retryable; never reports credited. | Backend reconciliation retries or escalates without a client credit mutation. |
| Admin approve/hold/reject/escalate | Applies one versioned decision. | Writes AdminAuditLog and queues any permitted follow-up. |
| Settled task later reversed | Does not silently delete immutable ledger history. | Routes any required correction through governed finance/risk reconciliation. |

Referral progress is event-driven from authoritative settlement records. The mobile and Admin applications must not poll a paid provider or submit completed-task counts.

## Required contract tests

- [ ] `GET /referrals/me` returns one stable active code and share URL for the authenticated user.
- [ ] A user cannot read another user's referral summary or attributions.
- [ ] Registration without `referralCode` behaves exactly as before.
- [ ] A valid optional code creates one attribution only after account verification.
- [ ] Invalid, self-referral and already-attributed cases do not reveal referrer identity or create duplicate attribution.
- [ ] Five distinct authoritative paid-task settlements qualify exactly one reward.
- [ ] Duplicate settlement events do not increment progress twice or create a second reward.
- [ ] Pending, held, rejected, retry-required and credited states never display false credit.
- [ ] Wallet-credit retries create at most one ledger entry for the reward.
- [ ] Admin list/detail permissions and minimized data are enforced.
- [ ] Every Admin action enforces exact permission, valid state, `expectedVersion`, idempotency and audit.
- [ ] A stale Admin decision returns `STATE_CONFLICT` and preserves current truth.
- [ ] An escalated referral is held and linked to AF-14 without exposing internal risk signals.
- [ ] An already credited reward cannot be rejected or credited again through referral endpoints.
- [ ] No referral socket or public client wallet-credit mutation exists.
