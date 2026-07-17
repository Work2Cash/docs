---
id: AF-07
title: Support Live Chat Operations
type: main-flow
audience: Non-technical team, Junior admin developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Admin Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Admin Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: AF-03, ASF-09, ASF-04, ASF-05, AF-06, AF-08, AF-10, AF-14
---

# AF-07 — Support Live Chat Operations

## In plain English

This flow lets admins handle user support conversations from the web dashboard. It is separate from task-user chat and is used when users need direct support.

In normal use, support queue receives a new chat request, then admin accepts or is assigned the conversation, then system displays user profile, recent tasks, payment records, reports and risk notes beside the chat, then admin responds and selects a support category, then admin may link the chat to a task, report, payment or wallet case, then admin closes the chat with a resolution note or escalates to another admin flow. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

This flow lets admins handle user support conversations from the web dashboard. It is separate from task-user chat and is used when users need direct support. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- Socket support channel
- AF-03 User Management
- ASF-09
- ASF-09 Support Live Chat Assignment
- ASF-04 Record Detail Review
- ASF-05 Reason and Audit Confirmation
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| User opens live support from the mobile app or admin opens a support case from another module. | This condition starts AF-07. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Support Live Chat Operations | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Socket support channel | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| AF-03 User Management | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-09 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-09 Support Live Chat Assignment | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **Admin/System:** Support queue receives a new chat request.
2. **System:** Admin accepts or is assigned the conversation.
3. **Admin/System:** System displays user profile, recent tasks, payment records, reports and risk notes beside the chat.
4. **System:** Admin responds and selects a support category.
5. **Admin/System:** Admin may link the chat to a task, report, payment or wallet case.
6. **System:** Admin closes the chat with a resolution note or escalates to another admin flow.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Support or communication record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

## Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

## Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Chat closed | AF-07 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Chat escalated | AF-07 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| User disconnected | AF-07 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Case linked to another flow | AF-07 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-07 reaches the ending that requires AF-06 Report Resolution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-06 Report Resolution | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-07 reaches the ending that requires AF-08 Finance; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-08 Finance | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-07 reaches the ending that requires AF-10 Wallet Support; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-10 Wallet Support | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-07 reaches the ending that requires AF-14 Risk Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-14 Risk Review | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| No admin is available | A clear blocked or failed state; no unconfirmed success is shown. | Queue remains visible with SLA age | Project Lead can reassign or prioritize The flow re-enters at the last valid checkpoint. |
| User raises payment issue | A clear blocked or failed state; no unconfirmed success is shown. | Admin links chat to AF-08 or AF-10 | Finance context is preserved The flow re-enters at the last valid checkpoint. |
| User reports unsafe behavior | A clear blocked or failed state; no unconfirmed success is shown. | Admin links chat to AF-06 and AF-14 | Risk context is preserved The flow re-enters at the last valid checkpoint. |

## Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

## Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not add admin task reassignment; only the approved controlled actions are allowed.

## Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Support Queue | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Assigned Chat | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | User Context | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Support Action | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Close or Escalate | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Support queue receives a new chat request.; Admin accepts or is assigned the conversation.; System displays user profile, recent tasks, payment records, reports and risk notes beside the chat.; Admin responds and selects a support category.; Admin may link the chat to a task, report, payment or wallet case.; Admin closes the chat with a resolution note or escalates to another admin flow..
- [ ] Recovery: No admin is available.
- [ ] Recovery: User raises payment issue.
- [ ] Recovery: User reports unsafe behavior.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
