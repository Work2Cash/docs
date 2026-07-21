---
id: MF-07
title: Public Discovery and Tasker Interest
type: main-flow
audience: Non-technical team, Junior mobile developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Mobile Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Mobile Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: SF-04, SF-10, MF-10, MF-11, MF-12
---

# MF-07 — Public Discovery and Tasker Interest

## In plain English

Lets eligible Taskers find funded public tasks while Task Owners choose based on profile and ETA.

In normal use, task appears in tasker available tasks list, then taskers browse tasks sorted nearest first, then taskers filter by location/category/time, then tasker opens limited task preview, then tasker confirms ability to arrive by required time, then backend calculates eta, then task owner reviews tasker profile and eta, then task owner accepts or rejects tasker. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

Lets eligible Taskers find funded public tasks while Task Owners choose based on profile and ETA. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- Funded task
- Tasker in Nigeria
- Tasker KYC approved
- Tasker location available
- SF-04 Location, Address and Pin Confirmation
- SF-10 Status Recovery / Resume
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Task Owner chooses public discovery after funding a task. | This condition starts MF-07. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Public Discovery and Tasker Interest | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Funded task | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Tasker in Nigeria | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Tasker KYC approved | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Tasker location available | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-04 Location, Address and Pin Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **User/System:** Task appears in Tasker available tasks list.
2. **System:** Taskers browse tasks sorted nearest first.
3. **User/System:** Taskers filter by location/category/time.
4. **System:** Tasker opens limited task preview.
5. **User/System:** Tasker confirms ability to arrive by required time.
6. **System:** Backend calculates ETA.
7. **User/System:** Task Owner reviews Tasker profile and ETA.
8. **System:** Task Owner accepts or rejects Tasker.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
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
| Tasker accepted | MF-07 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Tasker rejected | MF-07 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Task expires | MF-07 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Task cancelled | MF-07 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-07 reaches the ending that requires MF-10 Active Task Execution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-10 Active Task Execution | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-07 reaches the ending that requires MF-11 Task Owner Rejection; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-11 Task Owner Rejection | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-07 reaches the ending that requires MF-12 Cancellation / No-Show; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-12 Cancellation / No-Show | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Tasker outside Nigeria | A clear blocked or failed state; no unconfirmed success is shown. | SF-04 Location validation | Tasker cannot accept until inside Nigeria. The flow re-enters at the last valid checkpoint. |
| Tasker cannot meet arrival time | A clear blocked or failed state; no unconfirmed success is shown. | Tasker exits flow | Task remains available to other Taskers. The flow re-enters at the last valid checkpoint. |
| Task Owner rejects Tasker | A clear blocked or failed state; no unconfirmed success is shown. | MF-11 Task Owner Rejection | Task returns to discovery or another Tasker selection. The flow re-enters at the last valid checkpoint. |

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
- Use `mode`; do not introduce `activeMode`.

## Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Available Task | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Tasker Interest | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | ETA Review | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Owner Decision | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Accepted / Rejected | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Task appears in Tasker available tasks list.; Taskers browse tasks sorted nearest first.; Taskers filter by location/category/time.; Tasker opens limited task preview.; Tasker confirms ability to arrive by required time.; Backend calculates ETA.; Task Owner reviews Tasker profile and ETA.; Task Owner accepts or rejects Tasker..
- [ ] Recovery: Tasker outside Nigeria.
- [ ] Recovery: Tasker cannot meet arrival time.
- [ ] Recovery: Task Owner rejects Tasker.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
