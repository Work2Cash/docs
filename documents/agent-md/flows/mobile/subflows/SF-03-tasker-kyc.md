---
id: SF-03
title: Tasker KYC
type: reusable-subflow
audience: Non-technical team, Junior mobile developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Mobile Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Mobile Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: MF-03, MF-05, MF-09, MF-21
generated_from: content/flows/mobile/subflows/SF-03-tasker-kyc.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/mobile/subflows/SF-03-tasker-kyc.md` and rerun `node scripts/generate-flow-docs.js`.

# SF-03 — Tasker KYC

## In plain English

Verifies identity through Smile ID before a user can accept tasks as a Tasker.

## Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in SF-03 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

## Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| MF-03 — Login / Session Recovery | When the caller needs tasker kyc to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-05 — Tasker Activation | When the caller needs tasker kyc to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-09 — Tasker Browse and Accept Task | When the caller needs tasker kyc to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-21 — Tasker Availability and Work Preferences | When the caller needs tasker kyc to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

## Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| None | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

## Steps

1. **Caller:** Explain KYC requirement.
2. **System/Actor:** Collect NIN/BVN reference.
3. **System/Actor:** Capture face/biometric reference.
4. **System/Actor:** Submit to Smile ID.
5. **System/Actor:** Show approved, pending, rejected, expired, or manual review state.

## Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Completed | Calling flow | Confirmed terminal result returned by SF-03. |
| Failed/retry | Calling flow | Confirmed terminal result returned by SF-03. |
| Abandoned | Calling flow | Confirmed terminal result returned by SF-03. |
| Pending where provider review is involved | Calling flow | Confirmed terminal result returned by SF-03. |

## Success return behavior

After success, SF-03 returns control according to: Returns to the calling parent flow. The caller refreshes authoritative state before presenting the result.

## Failure return behavior

- **This subflow fails or is abandoned:** SF-10 Status Recovery / Resume where applicable. The calling flow returns the user to the last valid checkpoint.
- **User lacks required permission/contact/provider response:** SF-09 Permission Recovery or provider retry. The app explains the blocker and offers the safest available path.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

## Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

## Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared mobile subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

## Acceptance criteria

- [ ] Every named caller can enter SF-03 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

## Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.
