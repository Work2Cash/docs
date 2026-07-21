---
id: ASF-04
title: Record Detail Review
type: reusable-subflow
audience: Non-technical team, Junior admin developers, Product, QA, AI agents
owner: Admin Lead
reviewers: Technical Lead, Admin Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Admin Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: AF-03, AF-04, AF-05, AF-07, AF-08, AF-09, AF-10, AF-14, AF-15, AF-18, AF-19, AF-20, AF-22, AF-24
---

# ASF-04 — Record Detail Review

## In plain English

Opens the full context of one user, task, payment, withdrawal, report, media item, or provider event. Prevents decisions from being made from summary tables only. It gives the admin enough context before acting.

## Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in ASF-04 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

## Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| AF-03 — User Management | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-04 — Tasker and KYC Review | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-05 — Task Operations Monitoring | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-07 — Support Live Chat Operations | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-08 — Finance: Payments, Escrow and Reconciliation | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-09 — Withdrawal and Payout Batch Operations | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-10 — Wallet, Refund and Excess Funding Support | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-14 — Risk, Trust, Warning and Strike Review | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-15 — Referral Management | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-18 — Audit Log Review | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-19 — Use Case Health and Background Job Monitoring | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-20 — Monitoring, Backup and Incident Readiness | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-22 — Ratings and Reviews Management | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-24 — Receipt and Transaction Review | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| Most review and operations flows | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

## Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| Calling-flow context, actor/session and relevant authoritative record | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

## Steps

1. **Caller:** The calling flow passes the current record, actor context and requested operation.
2. **System/Actor:** The system validates access and performs Opens the full context of one user, task, payment, withdrawal, report, media item, or provider event..
3. **System/Actor:** The subflow returns a confirmed success result or a safe failure/recovery result to the caller.

## Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Confirmed success, safe failure/retry or abandoned result | Calling flow | Confirmed terminal result returned by ASF-04. |

## Success return behavior

ASF-04 returns to the calling flow at its next approved step. The caller refreshes authoritative state before presenting the result.

## Failure return behavior

- Prevents decisions from being made from summary tables only. It gives the admin enough context before acting.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

## Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

## Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared admin subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

## Acceptance criteria

- [ ] Every named caller can enter ASF-04 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

## Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.
