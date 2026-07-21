---
id: AF-02
title: Admin Dashboard Overview
type: main-flow
audience: Non-technical team, Junior admin developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Admin Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Admin Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: AF-01, ASF-02, ASF-03, ASF-11, AF-03, AF-04, AF-05, AF-08, AF-19
generated_from: content/flows/admin/main/AF-02-admin-dashboard-overview.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/admin/main/AF-02-admin-dashboard-overview.md` and rerun `node scripts/generate-flow-docs.js`.

# AF-02 — Admin Dashboard Overview

## In plain English

This is the central landing page for the web dashboard. It shows platform health, important queues, risk signals and shortcuts into operational modules.

In normal use, dashboard loads platform summary cards, then system shows active tasks, pending kyc, open reports, support chats, withdrawal requests and failed provider events, then admin reviews alerts sorted by urgency, then admin clicks a metric card or alert, then system checks permission for the selected module, then admin is routed to the relevant queue or detail page. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

This is the central landing page for the web dashboard. It shows platform health, important queues, risk signals and shortcuts into operational modules. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

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
- ASF-11
- ASF-02 RBAC Permission Gate
- ASF-03 List, Search, Filter and Pagination
- ASF-11 Empty, Loading and Error Recovery
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Admin successfully logs in or returns to the dashboard from another module. | This condition starts AF-02. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Admin Dashboard Overview | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| AF-01 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-02 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-11 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-02 RBAC Permission Gate | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 List, Search, Filter and Pagination | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-11 Empty, Loading and Error Recovery | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **Admin/System:** Dashboard loads platform summary cards.
2. **System:** System shows active tasks, pending KYC, open reports, support chats, withdrawal requests and failed provider events.
3. **Admin/System:** Admin reviews alerts sorted by urgency.
4. **System:** Admin clicks a metric card or alert.
5. **Admin/System:** System checks permission for the selected module.
6. **System:** Admin is routed to the relevant queue or detail page.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
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
| Admin remains on dashboard | AF-02 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Admin enters a module | AF-02 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Admin is blocked by permission gate | AF-02 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-02 reaches the ending that requires AF-03 User Management; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-03 User Management | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-02 reaches the ending that requires AF-04 KYC Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-04 KYC Review | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-02 reaches the ending that requires AF-05 Task Monitoring; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-05 Task Monitoring | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-02 reaches the ending that requires AF-08 Finance; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-08 Finance | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-02 reaches the ending that requires AF-19 Use Case Health; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-19 Use Case Health | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Dashboard metrics fail to load | A clear blocked or failed state; no unconfirmed success is shown. | ASF-11 shows skeleton then retry/error state | Admin can retry without leaving the dashboard The flow re-enters at the last valid checkpoint. |
| Admin lacks permission for a metric | A clear blocked or failed state; no unconfirmed success is shown. | ASF-02 blocks access | Metric can be hidden or shown read-only based on role The flow re-enters at the last valid checkpoint. |
| Alert points to deleted/changed record | A clear blocked or failed state; no unconfirmed success is shown. | ASF-04 record review shows unavailable state | Admin returns to dashboard or audit log The flow re-enters at the last valid checkpoint. |

## Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

## Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.

## Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Dashboard Overview | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Alert Cards | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Metrics Detail | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Module Drilldown | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Dashboard loads platform summary cards.; System shows active tasks, pending KYC, open reports, support chats, withdrawal requests and failed provider events.; Admin reviews alerts sorted by urgency.; Admin clicks a metric card or alert.; System checks permission for the selected module.; Admin is routed to the relevant queue or detail page..
- [ ] Recovery: Dashboard metrics fail to load.
- [ ] Recovery: Admin lacks permission for a metric.
- [ ] Recovery: Alert points to deleted/changed record.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
