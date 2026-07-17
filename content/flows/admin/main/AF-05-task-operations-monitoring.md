---
id: AF-05
title: Task Operations Monitoring
type: main-flow
audience: Non-technical team, Junior admin developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Admin Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Admin Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: ASF-03, ASF-04, ASF-06, ASF-07, AF-06, AF-07, AF-08, AF-13, AF-19
---

# AF-05 — Task Operations Monitoring

## In plain English

This flow gives admins a live operational view of tasks across creation, funding, acceptance, en route, arrived, in progress, completed, cancelled and disputed states.

In normal use, admin opens the task monitor, then admin filters by task state, city/zone, category, payment state, task owner, tasker, risk flag or date, then admin opens a task detail page, then system shows task summary, timeline, accepted tasker, arrival commitment, location, payment/escrow state, proof media and communication audit signals, then admin reviews current risk or operational blockage, then admin may force cancel a task where policy permits, with elevated permission, reason, note, impact preview, notifications and audit, then admin escalates to support, report resolution, finance, media review or risk review where needed. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

This flow gives admins a live operational view of tasks across creation, funding, acceptance, en route, arrived, in progress, completed, cancelled and disputed states. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- Mobile task lifecycle
- Payment funding state
- Location and media records
- ASF-03
- ASF-04
- ASF-06
- ASF-03 List/Search/Filter
- ASF-04 Record Detail Review
- ASF-06 Evidence and Media Review
- ASF-07 Status Change
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens task monitor from dashboard, search, report, support case, or finance record. | This condition starts AF-05. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Task Operations Monitoring | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Mobile task lifecycle | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Payment funding state | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Location and media records | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-06 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 List/Search/Filter | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-06 Evidence and Media Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-07 Status Change | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **Admin/System:** Admin opens the task monitor.
2. **System:** Admin filters by task state, city/zone, category, payment state, Task Owner, Tasker, risk flag or date.
3. **Admin/System:** Admin opens a task detail page.
4. **System:** System shows task summary, timeline, accepted Tasker, arrival commitment, location, payment/escrow state, proof media and communication audit signals.
5. **Admin/System:** Admin reviews current risk or operational blockage.
6. **System:** Admin may force cancel a task where policy permits, with elevated permission, reason, note, impact preview, notifications and audit.
7. **Admin/System:** Admin escalates to support, report resolution, finance, media review or risk review where needed.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
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
| Task reviewed | AF-05 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Task escalated | AF-05 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Task operational action completed | AF-05 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-05 reaches the ending that requires AF-06 Report Resolution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-06 Report Resolution | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-05 reaches the ending that requires AF-07 Support Chat; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-07 Support Chat | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-05 reaches the ending that requires AF-08 Finance; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-08 Finance | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-05 reaches the ending that requires AF-13 Media Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-13 Media Review | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-05 reaches the ending that requires AF-19 Use Case Health; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-19 Use Case Health | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Task state looks stuck | A clear blocked or failed state; no unconfirmed success is shown. | ASF-04 shows timeline and last backend use case result | Admin can escalate to AF-19 Use Case Health The flow re-enters at the last valid checkpoint. |
| Proof media missing | A clear blocked or failed state; no unconfirmed success is shown. | ASF-06 shows media requirement state | Admin can contact support or move to dispute resolution The flow re-enters at the last valid checkpoint. |
| Payment funded but task not progressing | A clear blocked or failed state; no unconfirmed success is shown. | AF-08 finance and AF-07 support flows handle follow-up | Admin can resolve user-facing blockage The flow re-enters at the last valid checkpoint. |
| Task must be force-cancelled | A clear blocked or failed state; no unconfirmed success is shown. | Elevated permission + ASF-05 reason/audit + policy impact preview | Task is cancelled without bypassing wallet, escrow, penalty, refund or notification rules The flow re-enters at the last valid checkpoint. |
| Replacement Tasker is needed | A clear blocked or failed state; no unconfirmed success is shown. | Admin reassignment is blocked | Tasker cancellation or Task Owner rejection returns task to matching/broadcasting where policy allows; admin cannot choose replacement Tasker The flow re-enters at the last valid checkpoint. |

## Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

## Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not treat a frontend payment redirect as final payment proof or introduce card-entry-first UX.
- Do not introduce paid-provider auto-refresh loops; use backend-controlled status and recovery.
- Do not turn disputes into live chat; preserve structured evidence and decisions.
- Do not add admin task reassignment; only the approved controlled actions are allowed.

## Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Task Monitor | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Task Detail | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Timeline and Location | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Operational Action | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Escalation | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

## Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

## Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

## Required tests

- [ ] Happy path: Admin opens the task monitor.; Admin filters by task state, city/zone, category, payment state, Task Owner, Tasker, risk flag or date.; Admin opens a task detail page.; System shows task summary, timeline, accepted Tasker, arrival commitment, location, payment/escrow state, proof media and communication audit signals.; Admin reviews current risk or operational blockage.; Admin may force cancel a task where policy permits, with elevated permission, reason, note, impact preview, notifications and audit.; Admin escalates to support, report resolution, finance, media review or risk review where needed..
- [ ] Recovery: Task state looks stuck.
- [ ] Recovery: Proof media missing.
- [ ] Recovery: Payment funded but task not progressing.
- [ ] Recovery: Task must be force-cancelled.
- [ ] Recovery: Replacement Tasker is needed.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
