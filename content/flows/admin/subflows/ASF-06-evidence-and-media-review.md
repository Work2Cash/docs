---
id: ASF-06
title: Evidence and Media Review
type: reusable-subflow
audience: Non-technical team, Junior admin developers, Product, QA, AI agents
owner: Admin Lead
reviewers: Technical Lead, Admin Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Admin Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: AF-04, AF-05, AF-06, AF-13, AF-14
---

# ASF-06 — Evidence and Media Review

## In plain English

Lets the admin inspect task proof, completion proof, report evidence, and unsafe uploads. Repairs disputes where the written report is not enough by letting operations inspect photos, videos and metadata.

## Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in ASF-06 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

## Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| AF-04 — Tasker and KYC Review | When the caller needs evidence and media review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-05 — Task Operations Monitoring | When the caller needs evidence and media review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-06 — Task Report and Dispute Resolution | When the caller needs evidence and media review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-13 — Task Media Moderation | When the caller needs evidence and media review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-14 — Risk, Trust, Warning and Strike Review | When the caller needs evidence and media review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-04, AF-05, AF-06, AF-13, AF-14 | When the caller needs evidence and media review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

## Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| Calling-flow context, actor/session and relevant authoritative record | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

## Steps

1. **Caller:** The calling flow passes the current record, actor context and requested operation.
2. **System/Actor:** The system validates access and performs Lets the admin inspect task proof, completion proof, report evidence, and unsafe uploads..
3. **System/Actor:** The subflow returns a confirmed success result or a safe failure/recovery result to the caller.

## Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Confirmed success, safe failure/retry or abandoned result | Calling flow | Confirmed terminal result returned by ASF-06. |

## Success return behavior

ASF-06 returns to the calling flow at its next approved step. The caller refreshes authoritative state before presenting the result.

## Failure return behavior

- Repairs disputes where the written report is not enough by letting operations inspect photos, videos and metadata.
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

- [ ] Every named caller can enter ASF-06 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

## Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.
