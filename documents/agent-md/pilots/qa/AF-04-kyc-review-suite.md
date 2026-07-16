---
id: QA-AF-04
title: AF-04 KYC Review Reference Suite
type: qa-suite
audience: QA, Junior admin/backend developers, Product, AI agents
owner: QA
reviewers: Product Lead, Technical Lead, Admin Lead, Backend Lead
status: pilot-draft-blocked-by-contract-gaps
version: 0.1
last_reviewed: 2026-07-17
authority: AF-04 Tasker and KYC Review and QA Readiness Rules
related: AF-04, KYC Review Contract Group, Tasker Activation and KYC Data Domain
generated_from: content/pilots/qa/AF-04-kyc-review-suite.md
do_not_edit: true
---

> Generated agent document. Edit `content/pilots/qa/AF-04-kyc-review-suite.md` and rerun `node scripts/generate-pilot-docs.js`.

# AF-04 KYC Review Reference Suite

## Purpose

This suite proves that authorized admins can make safe, traceable KYC decisions while unauthorized users, stale reviews, provider delays and sensitive-data exposure are handled correctly.

## Current readiness

The suite can define expected behavior now, but approve, reject, dedicated queue/detail and provider-reconciliation tests remain blocked until their exact API contracts are formally accepted.

## Traceability

| Type | Reference | What is covered |
| --- | --- | --- |
| Flow | AF-04 — Tasker and KYC Review | Entry, review, branches, endings, handoffs and recovery. |
| Contract | KYC Review Contract Group | Auth, permissions, request/response, state conflict and idempotency. |
| Data | TaskerProfile, KycVerification, KycAttempt, ProviderWebhookEvent, AdminAuditLog | State, history, duplicate protection, privacy and audit. |
| Provider | Smile ID | Success, delay, failure and duplicate callback behavior. |

## Shared setup

| Field | Value |
| --- | --- |
| Environment | Staging with Smile ID sandbox or deterministic provider adapter fixture. |
| Builds | Record backend commit, admin build and schema migration version before execution. |
| Admin roles | KYC viewer, KYC reviewer, Risk reviewer and unauthorized admin. |
| Tasker cases | Pending approval, correctable mismatch, verified rejection, provider delay, duplicate callback and already-decided case. |
| Evidence | Screenshots, request IDs, safe provider references, audit IDs, database assertions and notification job IDs. |

## QA-AF04-01 — View a KYC case safely

### Preconditions

- A User, TaskerProfile and pending KycVerification exist.
- The admin has KYC view permission but not unrestricted provider-secret access.

| Step | Action | Expected result | Evidence |
| --- | --- | --- | --- |
| 1 | Sign in through admin login and TOTP. | Protected dashboard session is established. | Session/request ID. |
| 2 | Open the linked user/KYC detail. | Safe profile, status, provider result availability and previous decision context appear. | Screenshot and response. |
| 3 | Inspect displayed identity fields. | Raw NIN/BVN, biometric payloads and provider secrets are absent or properly redacted. | Redaction screenshot and response review. |
| 4 | Check access logging where required. | Evidence/detail access has the required audit trace. | Audit ID. |

### Final expected state

- The KYC record remains unchanged.
- The admin has enough safe context to continue review.
- Sensitive values are not exposed.

## QA-AF04-02 — Approve an eligible Tasker

### Status

Blocked until the approve endpoint, DTO, permission and state-transition contract are accepted.

### Preconditions

- Provider result and evidence satisfy approval policy.
- No blocking RiskFlag exists.
- Admin has approve permission.

| Step | Action | Expected result | Evidence |
| --- | --- | --- | --- |
| 1 | Open the eligible case. | Current status is PENDING and evidence is complete. | Screenshot/request ID. |
| 2 | Select Approve and confirm. | Backend rechecks permission and current state. | Mutation request ID. |
| 3 | Refresh case and Tasker profile. | KYC is APPROVED and Tasker activation reflects all profile rules. | Response/database assertion. |
| 4 | Inspect audit and notification. | One complete audit record exists and one safe notification is queued. | Audit and job IDs. |

## QA-AF04-03 — Request re-verification

### Preconditions

- Pending case has a correctable biometric or identity-input issue.
- Admin has re-verification permission.

| Step | Action | Expected result | Evidence |
| --- | --- | --- | --- |
| 1 | Choose Request Re-verification without a reason. | Submission is blocked with field guidance. | Screenshot. |
| 2 | Provide a stable reason, safe note and required step. | Confirmation preview shows Tasker impact. | Screenshot. |
| 3 | Submit with an idempotency key. | Status becomes REQUIRES_REVERIFICATION and Tasker remains inactive. | Response/request ID. |
| 4 | Repeat the same request with the same key. | Original result is returned; no duplicate audit or notification is created. | Response and record counts. |
| 5 | Inspect Tasker-facing status. | Tasker sees the required next step without provider internals. | Mobile/API evidence. |

## QA-AF04-04 — Reject with reason

### Status

Blocked until the reject endpoint, DTO and permission contract are accepted.

### Preconditions

- Verified evidence satisfies an accepted rejection rule.
- Admin has reject permission.

| Step | Action | Expected result | Evidence |
| --- | --- | --- | --- |
| 1 | Select Reject without a reason. | Submission is blocked. | Screenshot. |
| 2 | Enter accepted reason/note and confirm. | Backend records one valid transition and audit event. | Response and audit ID. |
| 3 | Refresh Tasker profile. | KYC is REJECTED and Tasker remains inactive. | Response/database assertion. |
| 4 | Inspect notification. | Tasker receives safe outcome and next step. | Job/message evidence. |

## QA-AF04-05 — Missing or delayed Smile ID result

### Preconditions

- KYC submission exists but verified callback/status is unavailable.

| Step | Action | Expected result | Evidence |
| --- | --- | --- | --- |
| 1 | Open the case. | Status remains PENDING; UI does not suggest guessed approval/rejection. | Screenshot. |
| 2 | Trigger the accepted reconciliation action when available. | One cost-guarded provider check or queued operation occurs. | Provider request/job ID. |
| 3 | Simulate continued provider delay. | Case remains pending and can hand off to AF-19. | Status and monitoring evidence. |
| 4 | Deliver the verified provider event. | Case refresh shows the verified result without duplicate processing. | Event/request ID. |

## QA-AF04-06 — Duplicate provider callback

| Step | Action | Expected result | Evidence |
| --- | --- | --- | --- |
| 1 | Deliver one valid Smile ID callback. | One ProviderWebhookEvent is processed. | Event ID and record count. |
| 2 | Deliver the same provider event again. | Duplicate is ignored or marked duplicate safely. | Record count and logs. |
| 3 | Inspect KYC and audit state. | No duplicate state transition, admin decision or notification exists. | Database/audit/job assertions. |

## QA-AF04-07 — Permission and redaction matrix

| Actor | View case | View protected evidence | Apply decision | Expected result |
| --- | --- | --- | --- | --- |
| KYC viewer | Yes | According to policy | No | Read-only safe view. |
| KYC reviewer | Yes | According to policy | Accepted KYC actions | Controlled action UI. |
| Risk reviewer | Linked risk context | According to risk policy | Risk actions, not arbitrary KYC mutation unless granted | Clear role boundary. |
| Unauthorized admin | No or safe summary only | No | No | Forbidden state without leakage. |

## QA-AF04-08 — Simultaneous review conflict

| Step | Action | Expected result | Evidence |
| --- | --- | --- | --- |
| 1 | Admin A and Admin B open the same PENDING case. | Both see the same current version. | Responses. |
| 2 | Admin A records an allowed decision. | State and version change once. | Response/audit ID. |
| 3 | Admin B submits the stale decision. | Backend returns state conflict/current truth and applies nothing. | Conflict response and record counts. |
| 4 | Admin B refreshes. | New authoritative state and decision history appear. | Screenshot/response. |

## QA-AF04-09 — Notification failure

| Step | Action | Expected result | Evidence |
| --- | --- | --- | --- |
| 1 | Record an allowed KYC decision while notification adapter is unavailable. | Authoritative KYC decision succeeds once if transaction/outbox rules allow. | Response/audit ID. |
| 2 | Inspect delivery status. | Failed or retryable notification is visible operationally. | Queue/job evidence. |
| 3 | Open mobile/app status. | Backend status shows the decision even without push delivery. | API/mobile evidence. |
| 4 | Restore adapter and retry safely. | One user notification is delivered without duplicating the decision. | Delivery/job evidence. |

## Suite completion checklist

- [ ] Exact queue, detail, approve, reject and reconciliation contracts are accepted.
- [ ] KycAttempt fields and re-verification history are implemented.
- [ ] Every test records environment and build versions.
- [ ] Every pass/fail result includes evidence.
- [ ] Permission and privacy review passes.
- [ ] Provider delay and duplicate behavior passes.
- [ ] Audit fields are complete.
- [ ] Product, QA and Technical Lead accept the suite results.
