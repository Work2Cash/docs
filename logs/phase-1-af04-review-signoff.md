# Phase 1 AF-04 v0.2 Review and Sign-Off

## Review scope

This review covers the Phase 1 KYC pilot set only. Approval makes the set eligible to serve as the migration reference; it does not claim that Backend, Admin, database migrations or provider integrations are implemented.

| Pilot | Canonical source | Version |
| --- | --- | --- |
| AF-04 main flow | `content/pilots/flows/admin/AF-04-kyc-review.md` | 0.2 |
| KYC contract group | `content/pilots/contracts/kyc-review-contract-group.md` | 0.2 |
| KYC data domain | `content/pilots/data/kyc-domain.md` | 0.2 |
| AF-04 QA suite | `content/pilots/qa/AF-04-kyc-review-suite.md` | 0.2 |

## Decisions requiring review

- [ ] One `/admin/kyc` resource family is accepted for queue, detail and mutations.
- [ ] `expectedVersion` is accepted for simultaneous-review protection.
- [ ] `Idempotency-Key` is required for every KYC mutation.
- [ ] KycStatus is separated from operational KycReviewState.
- [ ] Approval recalculates Tasker eligibility rather than directly toggling activation.
- [ ] Re-verification preserves immutable numbered KycAttempt history.
- [ ] Risk escalation keeps truthful KYC state and hands off to AF-14.
- [ ] Reconciliation is asynchronous, deduplicated and backend-cooldown-controlled.
- [ ] Provider callbacks identify attempts by verified provider/event references.
- [ ] Late callbacks cannot overwrite the current attempt or a later decision.
- [ ] Raw identifiers, biometrics, storage keys, provider secrets and raw provider payloads remain unavailable to normal admin responses.
- [ ] The proposed non-destructive migration/backfill sequence is acceptable.

## Reviewer checklists

### Product Lead

- [ ] Approve/reject/re-verification meanings match intended Tasker outcomes.
- [ ] Reason and Tasker-facing guidance requirements are understandable.
- [ ] All branches return to the correct flow or handoff.

### Backend and Data owners

- [ ] Endpoint boundaries and response shapes are implementable.
- [ ] Transaction, concurrency and idempotency rules are sufficient.
- [ ] TaskerProfile current-case relation works with the complete Prisma schema.
- [ ] Composite uniqueness and backfill rules are safe for PostgreSQL/Prisma.
- [ ] Outbox/audit/provider-event behavior can be implemented atomically where required.

### Admin Lead

- [ ] Queue filters and detail data are sufficient without exposing protected information.
- [ ] `allowedActions` supports permission-aware UI correctly.
- [ ] State conflicts, cooldown and provider failures have usable recovery states.

### Risk and Compliance

- [ ] Approval, rejection, re-verification and risk-escalation boundaries are acceptable.
- [ ] Reason codes and evidence requirements are sufficient for defensible decisions.
- [ ] Retention, evidence access and audit expectations are acceptable or required changes are recorded.

### Security and Privacy

- [ ] Permission split and TOTP-authenticated session rules are acceptable.
- [ ] Sensitive fields and evidence references follow least privilege.
- [ ] Logs, provider request records and failure details cannot leak raw identity data.

### QA

- [ ] The eleven reference cases are executable and traceable.
- [ ] State, permission, privacy, idempotency, concurrency, provider and notification failures are covered.
- [ ] Required staging fixtures and evidence fields are practical.

## Required changes

| Finding | Severity | Source affected | Required correction | Owner | Status |
| --- | --- | --- | --- | --- | --- |
|  | Critical, high, medium or low |  |  |  | Open |

## Sign-off record

| Role | Reviewer | Decision | Date | Conditions or evidence |
| --- | --- | --- | --- | --- |
| Product Lead |  | Approve / Revise |  |  |
| Technical Lead |  | Approve / Revise |  |  |
| Backend Lead |  | Approve / Revise |  |  |
| Data owner |  | Approve / Revise |  |  |
| Admin Lead |  | Approve / Revise |  |  |
| Risk and Compliance |  | Approve / Revise |  |  |
| Security and Privacy |  | Approve / Revise |  |  |
| QA Lead |  | Approve / Revise |  |  |

The registry must remain `draft / pending` until required reviewers approve or every approval condition is resolved and evidenced.
