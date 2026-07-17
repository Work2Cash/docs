---
id: MF-11
title: Task Owner Rejection
type: main-flow
audience: Non-technical team, Junior mobile developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Mobile Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Mobile Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: SF-08, MF-07, MF-08, MF-12
---

# MF-11 — Task Owner Rejection

## In plain English

Lets the Task Owner reject a Tasker within controlled rules without breaking the task.

In normal use, task owner taps reject, then select rejection reason, then backend checks task state and rejection window, then log taskownerrejection, then if movement-stage rejection repeats, create warning/risk flag, then task returns to discovery/direct-offer options. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

Lets the Task Owner reject a Tasker within controlled rules without breaking the task. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- Tasker interest/acceptance state
- Task not started
- Rejection policy
- SF-08 Report / Dispute where rejection is contested
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Task Owner rejects an interested or accepted Tasker before movement, or within 5 minutes after Tasker marks en route. | This condition starts MF-11. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Task Owner Rejection | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Tasker interest/acceptance state | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Task not started | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Rejection policy | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-08 Report / Dispute where rejection is contested | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **User/System:** Task Owner taps reject.
2. **System:** Select rejection reason.
3. **User/System:** Backend checks task state and rejection window.
4. **System:** Log TaskOwnerRejection.
5. **User/System:** If movement-stage rejection repeats, create warning/risk flag.
6. **System:** Task returns to discovery/direct-offer options.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | If movement-stage rejection repeats, create warning/risk flag. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

## Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

## Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Task returned to matching | MF-11 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Rejection denied | MF-11 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Risk flag/warning recorded | MF-11 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-11 reaches the ending that requires MF-07 Public Discovery and Tasker Interest; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-07 Public Discovery and Tasker Interest | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-11 reaches the ending that requires MF-08 Direct Offer to Favorite Tasker; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-08 Direct Offer to Favorite Tasker | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-11 reaches the ending that requires MF-12 Cancellation / No-Show; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-12 Cancellation / No-Show | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Rejection attempted after allowed window | A clear blocked or failed state; no unconfirmed success is shown. | SF-08 Report / Dispute or support | User must report issue rather than normal reject. The flow re-enters at the last valid checkpoint. |
| Tasker contests movement-stage rejection | A clear blocked or failed state; no unconfirmed success is shown. | SF-08 Report / Dispute | Admin reviews evidence and policy events. The flow re-enters at the last valid checkpoint. |
| Repeated rejection abuse | A clear blocked or failed state; no unconfirmed success is shown. | PolicyEvent / RiskFlag | User warning/risk review is triggered. The flow re-enters at the last valid checkpoint. |

## Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

## Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Use `mode`; do not introduce `activeMode`.

## Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Tasker Profile/ETA | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Reject Tasker | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Select Reason | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Log Rejection | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Return to Matching | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Task Owner taps reject.; Select rejection reason.; Backend checks task state and rejection window.; Log TaskOwnerRejection.; If movement-stage rejection repeats, create warning/risk flag.; Task returns to discovery/direct-offer options..
- [ ] Recovery: Rejection attempted after allowed window.
- [ ] Recovery: Tasker contests movement-stage rejection.
- [ ] Recovery: Repeated rejection abuse.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
