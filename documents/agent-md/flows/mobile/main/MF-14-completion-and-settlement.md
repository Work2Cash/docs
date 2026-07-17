---
id: MF-14
title: Completion and Settlement
type: main-flow
audience: Non-technical team, Junior mobile developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Mobile Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Mobile Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: SF-05, SF-08, MF-15, MF-13, MF-16
generated_from: content/flows/mobile/main/MF-14-completion-and-settlement.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/mobile/main/MF-14-completion-and-settlement.md` and rerun `node scripts/generate-flow-docs.js`.

# MF-14 — Completion and Settlement

## In plain English

Finalizes a task and moves money from escrow according to completion or report outcome.

In normal use, task owner reviews completion proof, then if satisfied, task owner confirms completion, then backend releases escrow to tasker wallet, then commission tier is applied, then both parties can rate, then task owner can favorite tasker, then if refused, open report/dispute and settlement hold applies to affected task. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

Finalizes a task and moves money from escrow according to completion or report outcome. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- Completion proof
- Escrow record
- Wallet ledger
- Rating/favorite system
- SF-05 Media Upload
- SF-08 Report / Dispute
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Tasker requests completion after uploading completion proof. | This condition starts MF-14. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Completion and Settlement | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Completion proof | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Escrow record | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Wallet ledger | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Rating/favorite system | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-05 Media Upload | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-08 Report / Dispute | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **User/System:** Task Owner reviews completion proof.
2. **System:** If satisfied, Task Owner confirms completion.
3. **User/System:** Backend releases escrow to Tasker wallet.
4. **System:** Commission tier is applied.
5. **User/System:** Both parties can rate.
6. **System:** Task Owner can favorite Tasker.
7. **User/System:** If refused, open report/dispute and settlement hold applies to affected task.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | If satisfied, Task Owner confirms completion. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |
| Branch 2 | If refused, open report/dispute and settlement hold applies to affected task. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Payment, wallet, escrow or payout record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Report, risk or moderation record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

## Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

## Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Completed and settled | MF-14 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Settlement held | MF-14 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Refunded/partially refunded | MF-14 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Report resolved | MF-14 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-14 reaches the ending that requires MF-15 Favorites; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-15 Favorites | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-14 reaches the ending that requires MF-13 Tasker Withdrawal; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-13 Tasker Withdrawal | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-14 reaches the ending that requires MF-16 Support Live Chat; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-16 Support Live Chat | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Task Owner refuses approval | A clear blocked or failed state; no unconfirmed success is shown. | SF-08 Report / Dispute | Admin reviews and decides release/refund/partial refund. The flow re-enters at the last valid checkpoint. |
| Ledger posting fails | A clear blocked or failed state; no unconfirmed success is shown. | Wallet reconciliation job | Task remains pending settlement until fixed. The flow re-enters at the last valid checkpoint. |
| Completion proof invalid | A clear blocked or failed state; no unconfirmed success is shown. | SF-08 Report / Dispute or media review | Admin may request evidence or resolve report. The flow re-enters at the last valid checkpoint. |

## Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

## Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not treat a frontend payment redirect as final payment proof or introduce card-entry-first UX.
- Do not introduce paid-provider auto-refresh loops; use backend-controlled status and recovery.

## Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Completion Request | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Review Proof | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Confirm / Report | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Escrow Release | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Rate / Favorite | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

## Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

## Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

## Required tests

- [ ] Happy path: Task Owner reviews completion proof.; If satisfied, Task Owner confirms completion.; Backend releases escrow to Tasker wallet.; Commission tier is applied.; Both parties can rate.; Task Owner can favorite Tasker.; If refused, open report/dispute and settlement hold applies to affected task..
- [ ] Recovery: Task Owner refuses approval.
- [ ] Recovery: Ledger posting fails.
- [ ] Recovery: Completion proof invalid.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
