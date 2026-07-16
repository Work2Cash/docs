---
id: AF-04
title: Tasker and KYC Review
type: main-flow
audience: Non-technical operations, Junior admin developers, Backend, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Admin Lead, Backend Lead, Risk and Compliance, QA
status: pilot-draft
version: 0.1
last_reviewed: 2026-07-17
authority: Main Enterprise Architecture and Admin Flow Catalogue v1
related: AF-03 User Management, ASF-04 Record Detail Review, ASF-05 Reason and Audit, ASF-06 Evidence Review, ASF-07 Status Change, ASF-10 Provider Reconciliation, AF-14 Risk Review, AF-19 Provider Monitoring
generated_from: content/pilots/flows/admin/AF-04-kyc-review.md
do_not_edit: true
---

> Generated agent document. Edit `content/pilots/flows/admin/AF-04-kyc-review.md` and rerun `node scripts/generate-pilot-docs.js`.

# AF-04 — Tasker and KYC Review

## In plain English

An authorized admin reviews a Tasker's identity-verification case and decides whether the Tasker can work, must resubmit information, should be rejected, or needs further manual or risk review. The decision is based on the Tasker profile, submitted identity references, biometric result and Smile ID provider history. Every decision requires the correct permission and an audit record.

## Why this flow exists

Work2Cash must prevent unverified or suspicious people from accepting tasks while giving legitimate Taskers a clear path through delayed, failed or mismatched KYC results.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| KYC admin | Reviews identity evidence and selects an allowed decision. |
| Risk admin | Reviews suspicious identity, device or behavior signals when escalated. |
| Admin dashboard | Shows queues, protected evidence, provider history and controlled actions. |
| Backend | Enforces RBAC, state transitions, reason capture, audit and Tasker activation rules. |
| Smile ID adapter | Supplies provider job status, match outcome and safe failure information. |
| Notification worker | Tells the Tasker the outcome and required next step. |

## Before this flow begins

- A Work2Cash user and TaskerProfile already exist.
- The Tasker has started or submitted KYC through the mobile activation flow.
- A KycVerification record is pending, rejected, failed, requires re-verification or needs manual review.
- Smile ID provider events or status information are available, delayed or explicitly missing.
- The admin is authenticated through admin login and TOTP and has the required KYC permissions.
- Protected KYC evidence is available only through audited, permission-controlled access.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Pending KYC queue | A new verification needs an operational decision. |
| Failed/provider-delay queue | Smile ID returned a failure or has not returned a usable result. |
| User Management Tasker detail | Support, operations or risk opens the Tasker's linked KYC record. |
| Re-verification return | A Tasker resubmits after an earlier request. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Tasker profile and user status | Confirms the account and activation context. | User and TaskerProfile records. |
| NIN or BVN submission status | Shows which accepted identity route was used. | KycVerification metadata and provider request history. |
| Biometric match result | Helps confirm the submitting person matches the identity record. | Smile ID result. |
| Provider job and event history | Explains pending, delayed, failed or duplicate callbacks. | ProviderRequestLog and ProviderWebhookEvent. |
| Previous admin decisions | Prevents contradictory repeated actions. | AdminAuditLog and KYC history. |
| Risk signals | Determines whether normal KYC review is sufficient. | Risk flags, session/device summary and related reports where permitted. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| AF-03 — User Management | Supplies the Tasker account, profile and linked operational context. | User and TaskerProfile can be viewed by the admin's role. |
| ASF-02 — RBAC Permission Gate | Blocks unauthorized viewing or decision actions. | Admin has view permission and the specific action permission. |
| ASF-04 — Record Detail Review | Presents the complete KYC case instead of a queue summary alone. | Linked records load without exposing raw secrets. |
| ASF-05 — Reason and Audit Confirmation | Requires a reason and note for rejection, re-verification or escalation. | Required fields are complete before mutation. |
| ASF-06 — Evidence and Media Review | Displays protected identity evidence where policy allows. | Access is time-limited, audited and role-restricted. |
| ASF-07 — Status Change and Decision Action | Applies an allowed KYC transition consistently. | Current status permits the selected transition. |
| ASF-10 — Provider Reconciliation and Retry | Checks Smile ID when provider results are missing or inconsistent. | Retry or status lookup is safe and cost-controlled. |

## Verbal walkthrough

1. **Admin:** Opens the pending, failed or manual-review KYC queue, or enters from User Management.
2. **Admin dashboard:** Checks the admin session and KYC view permission before showing records.
3. **Admin:** Filters by pending, failed, re-verification, approved, rejected or manual-review status.
4. **Admin:** Opens one Tasker's KYC case.
5. **Backend:** Returns the Tasker profile, safe identity-verification metadata, biometric result, provider history and previous decisions permitted for that role.
6. **Admin:** Reviews the profile information, identity route, biometric match and provider failure reasons.
7. **Admin:** If the provider result is missing or inconsistent, runs controlled reconciliation rather than guessing the outcome.
8. **Backend/provider adapter:** Checks the provider result safely and updates the case only from verified information.
9. **Admin:** Selects approve, reject, request re-verification or escalate to manual/risk review.
10. **Admin dashboard:** Requests a reason and note where the decision is high impact.
11. **Backend:** Rechecks permission and current state, applies one valid transition and writes the audit record.
12. **Backend:** Activates the Tasker only when the approved KYC and profile rules pass; other outcomes keep Tasker work actions blocked.
13. **Notification worker:** Sends the Tasker an outcome and safe next step without exposing provider internals or sensitive data.
14. **Admin dashboard:** Shows the final status and the appropriate return or escalation destination.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Approve | Verified identity and biometric result satisfy policy with no unresolved risk blocker. | KYC becomes approved and Tasker activation may become eligible. | Return to AF-03 User Management or the KYC queue. |
| Reject | Evidence or verified provider result fails an accepted policy rule and cannot be corrected by simple resubmission. | KYC becomes rejected; Tasker work actions remain blocked. | Return to AF-03 and allow support/risk follow-up where required. |
| Request re-verification | Evidence is incomplete, expired, unclear or correctable. | KYC becomes requires-reverification and records the requested correction. | Tasker resubmits through the mobile KYC subflow, then the case returns to AF-04. |
| Manual/risk escalation | Identity mismatch, fraud signal or policy ambiguity needs specialist review. | Case remains blocked in manual/risk review. | Continue to AF-14 — Risk Review. |
| Provider monitoring | Smile ID response is missing, delayed or inconsistent and reconciliation cannot close it. | Case remains pending without false approval or rejection. | Continue to AF-19 — Provider Monitoring. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| User | Read | Supplies account and contact context without exposing credentials. |
| TaskerProfile | Read and conditionally change | `isActive` remains false unless KYC and profile rules pass. |
| KycVerification | Read and change | Moves through pending, approved, rejected, requires-reverification or failed/manual-review handling. |
| KycAttempt | Read and create when a new submission occurs | Preserves attempt history instead of overwriting evidence. |
| ProviderRequestLog | Read | Shows safe request and status history. |
| ProviderWebhookEvent | Read and process idempotently | Prevents duplicate callbacks from applying duplicate decisions. |
| RiskFlag | Read or create on escalation | Preserves identity-risk context for AF-14. |
| AdminAuditLog | Create | Records actor, action, target, reason, request ID and timestamp. |

## Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Notification | Sends approved, rejected, re-verification or pending/manual-review guidance. | Tasker. |
| Provider reconciliation | Checks delayed or inconsistent Smile ID status safely. | KYC use case and AF-19 monitoring. |
| Audit | Records every high-impact decision and evidence access where required. | Audit and governance review. |
| Risk handoff | Creates or links identity-risk context. | AF-14 Risk Review. |
| Activation change | Unlocks Tasker actions only after all approved conditions pass. | Mobile Tasker experience and matching eligibility. |

## Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Tasker approved | Identity requirements passed and no blocking risk remains. | Tasker may become eligible to work after remaining profile rules pass. | Return to User Management or queue. |
| Tasker rejected | The verification failed a non-correctable or policy-defined rule. | Tasker work actions remain blocked and receives an explanation/next step. | Support or risk review if disputed. |
| Re-verification requested | The Tasker can correct or resubmit required information. | Tasker remains blocked until resubmission succeeds. | Mobile KYC subflow returns the case to AF-04. |
| Manual review pending | A specialist decision is still required. | Tasker remains blocked without being falsely rejected. | AF-14 Risk Review. |
| Provider result pending | Provider truth is not available or consistent. | Tasker remains pending. | AF-19 Provider Monitoring and later AF-04 resume. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Normal approval, rejection or recorded re-verification request | AF-03 — User Management or KYC queue | Admin returns to account/queue operations after the decision is safely recorded. |
| Suspicious identity, fraud or device behavior | AF-14 — Risk, Trust, Warning and Strike Review | Risk specialists need the linked evidence and decision context. |
| Missing or inconsistent Smile ID outcome | AF-19 — Use Case and Provider Health Monitoring | Technical operations must investigate provider or worker failure. |
| Tasker resubmits requested information | AF-04 — Tasker and KYC Review | The new attempt requires a fresh controlled review. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Smile ID callback is missing or delayed | Case remains pending with provider status unavailable. | Run ASF-10 reconciliation; if unresolved, open AF-19 without guessing. | Return to the same KYC detail after verified status arrives. |
| Duplicate provider event | No duplicate visible decision should occur. | Idempotency ignores or records the duplicate safely. | Continue with the single authoritative case state. |
| Protected evidence cannot load | Evidence panel shows a permission-safe error. | Retry signed access or escalate storage/provider health; do not approve without required evidence. | Reload the same case when evidence is available. |
| Admin lacks view permission | Queue or protected fields remain unavailable. | Show a clear forbidden state and request the correct role through governance. | Reopen after permission is formally granted. |
| Admin lacks decision permission | Detail may remain read-only; mutation is blocked. | Route to an authorized reviewer without sharing unsafe exports. | Authorized admin continues from the same case. |
| State changed while admin was reviewing | Save returns a conflict/current-state response. | Refresh record and reconsider the decision against current state. | Resume at detail review; never overwrite the newer decision. |
| Decision lacks required reason | Confirmation cannot submit. | Show the required reason/note fields. | Resume at decision confirmation. |
| Notification delivery fails | Decision remains valid; delivery failure is visible operationally. | Queue safe retry and preserve in-app/backend status truth. | Tasker sees current status when the app refreshes. |

## Business rules

- Tasker work actions remain locked until approved KYC and profile activation rules pass.
- KYC evidence and identifiers are sensitive and role-restricted.
- Admin decisions must use verified backend/provider state.
- Rejection, re-verification and escalation require a clear reason and audit trail.
- Provider callbacks and retries must be idempotent.
- Evidence access and high-impact actions must be auditable.
- A delayed provider result produces pending/manual review, not guessed approval or rejection.
- Tasker-facing messages explain the next step without exposing internal provider payloads.

## Forbidden behavior

- Do not approve KYC from a queue summary without required detail.
- Do not expose raw NIN, BVN, biometric payloads, provider secrets or unnecessary KYC data.
- Do not let a frontend-only status activate a Tasker.
- Do not overwrite newer decisions after a stale-review conflict.
- Do not hard-delete KYC history or audit records.
- Do not retry paid provider operations in uncontrolled loops.
- Do not treat disputes as live chat or use this flow to reassign tasks.

## Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | KYC queue | Find pending, failed, re-verification or manual-review cases. | Admin selects a case they may view. |
| 2 | Tasker/KYC detail | Show profile, safe identity metadata, provider history and previous decisions. | Required context loads successfully. |
| 3 | Evidence review | Inspect protected evidence and biometric/provider result. | Admin has sufficient verified information or triggers reconciliation. |
| 4 | Decision confirmation | Select allowed outcome, capture reason/note and preview impact. | Permission and state validation pass. |
| 5 | KYC status result | Show recorded outcome, notification state and handoff. | Admin returns to queue/User Management or escalates. |

## Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| User detail API | `GET /admin/users/{userId}` | Supplies permission-gated user, Tasker and KYC context. |
| Re-verification API | `POST /admin/kyc/{kycId}/request-reverification` | Records a reasoned re-verification decision. |
| Approve/reject APIs | Contract gap: exact accepted paths are not currently specified | Must be added formally before implementation; do not invent paths in frontend code. |
| Provider reconciliation | ASF-10 provider status/retry contracts | Checks Smile ID without unsafe repeated calls. |
| Data | User, TaskerProfile, KycVerification, KycAttempt, ProviderRequestLog, ProviderWebhookEvent, RiskFlag, AdminAuditLog | Persists identity, provider, risk and audit history. |
| Notification | In-app/FCM/email according to policy | Communicates safe outcome and next action. |

## Acceptance criteria

- [ ] An authorized admin can find and open a KYC case with the context required for a decision.
- [ ] Unauthorized admins see a clear forbidden or redacted state.
- [ ] Sensitive identifiers, biometric data and provider secrets are not exposed unnecessarily.
- [ ] Missing or inconsistent Smile ID results remain pending and can be reconciled safely.
- [ ] Approve, reject, request re-verification and escalation enforce valid current-state transitions.
- [ ] High-impact outcomes capture actor, reason, target, request ID and timestamp.
- [ ] Tasker activation remains blocked unless approved KYC and profile rules pass.
- [ ] The Tasker receives a safe outcome and next step.
- [ ] Duplicate provider events and duplicate action submissions do not duplicate state changes.
- [ ] A stale-review conflict cannot overwrite a newer decision.

## Required tests

- [ ] Approved KYC happy path.
- [ ] Rejection with required reason and Tasker notification.
- [ ] Request re-verification and successful resubmission return.
- [ ] Manual/risk escalation.
- [ ] Missing, delayed, failed and duplicate Smile ID event handling.
- [ ] View permission, action permission and protected-field redaction.
- [ ] State conflict from simultaneous review.
- [ ] Duplicate action idempotency.
- [ ] Evidence-access failure and recovery.
- [ ] Notification failure without rolling back the authoritative decision.
- [ ] Audit record completeness.

## Out of scope

- Mobile collection of KYC information, which belongs to the Tasker activation/KYC subflow.
- General user suspension unrelated to the KYC decision.
- Task matching, execution or reassignment.
- Direct editing of provider payloads or database records.
