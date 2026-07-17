---
id: AF-03
title: User Management
type: main-flow
audience: Non-technical team, Junior admin developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Admin Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Admin Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: AF-01, ASF-02, ASF-03, ASF-04, ASF-05, AF-04, AF-06, AF-10, AF-14
generated_from: content/flows/admin/main/AF-03-user-management.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/admin/main/AF-03-user-management.md` and rerun `node scripts/generate-flow-docs.js`.

# AF-03 — User Management

## In plain English

This flow lets admins inspect users, understand whether they are Task Owners, Taskers or both, review sessions/devices, and apply account-level controls.

In normal use, admin opens the users list, then admin searches or filters by name, phone, email, role, status, trust/risk state or kyc state, then admin opens a user record, then system shows profile, task owner wallet, tasker wallet, sessions, devices, task history, reports and risk events, then admin chooses a permitted action such as view sessions, disable device, suspend/reactivate account or add support note, then system requests reason when the action is high-impact, then system applies the action and records it in the audit log. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

This flow lets admins inspect users, understand whether they are Task Owners, Taskers or both, review sessions/devices, and apply account-level controls. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- AF-01
- ASF-02
- ASF-03
- ASF-04
- ASF-05
- ASF-02 RBAC Permission Gate
- ASF-03 List/Search/Filter
- ASF-04 Record Detail Review
- ASF-05 Reason and Audit Confirmation
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens Users from dashboard, search, support context, report context, or task detail. | This condition starts AF-03. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for User Management | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| AF-01 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-02 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-02 RBAC Permission Gate | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 List/Search/Filter | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **Admin/System:** Admin opens the users list.
2. **System:** Admin searches or filters by name, phone, email, role, status, trust/risk state or KYC state.
3. **Admin/System:** Admin opens a user record.
4. **System:** System shows profile, Task Owner wallet, Tasker wallet, sessions, devices, task history, reports and risk events.
5. **Admin/System:** Admin chooses a permitted action such as view sessions, disable device, suspend/reactivate account or add support note.
6. **System:** System requests reason when the action is high-impact.
7. **Admin/System:** System applies the action and records it in the audit log.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | System requests reason when the action is high-impact. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Authentication or session record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Rating, review or favorite record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

## Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

## Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| User reviewed | AF-03 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| User status changed | AF-03 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| No action taken | AF-03 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Case escalated | AF-03 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-03 reaches the ending that requires AF-04 KYC Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-04 KYC Review | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-03 reaches the ending that requires AF-06 Report Resolution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-06 Report Resolution | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-03 reaches the ending that requires AF-10 Wallet Support; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-10 Wallet Support | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-03 reaches the ending that requires AF-14 Risk Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-14 Risk Review | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| User cannot be found | A clear blocked or failed state; no unconfirmed success is shown. | ASF-03 filters and search states guide admin | Admin can clear filters or escalate to support The flow re-enters at the last valid checkpoint. |
| Suspension is attempted without reason | A clear blocked or failed state; no unconfirmed success is shown. | ASF-05 blocks save | No account state changes until reason is supplied The flow re-enters at the last valid checkpoint. |
| Admin lacks account-control permission | A clear blocked or failed state; no unconfirmed success is shown. | ASF-02 blocks action | Admin can still view permitted read-only data The flow re-enters at the last valid checkpoint. |

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
- Use `mode`; do not introduce `activeMode`.

## Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Users List | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | User Detail | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Sessions and Devices | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Status Action | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Audit Result | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Admin opens the users list.; Admin searches or filters by name, phone, email, role, status, trust/risk state or KYC state.; Admin opens a user record.; System shows profile, Task Owner wallet, Tasker wallet, sessions, devices, task history, reports and risk events.; Admin chooses a permitted action such as view sessions, disable device, suspend/reactivate account or add support note.; System requests reason when the action is high-impact.; System applies the action and records it in the audit log..
- [ ] Recovery: User cannot be found.
- [ ] Recovery: Suspension is attempted without reason.
- [ ] Recovery: Admin lacks account-control permission.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
