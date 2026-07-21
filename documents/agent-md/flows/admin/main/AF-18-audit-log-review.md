---
id: AF-18
title: Audit Log Review
type: main-flow
audience: Non-technical team, Junior admin developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Admin Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Admin Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: ASF-03, ASF-08, ASF-04, AF-03, AF-08, AF-14, AF-17
generated_from: content/flows/admin/main/AF-18-audit-log-review.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/admin/main/AF-18-audit-log-review.md` and rerun `node scripts/generate-flow-docs.js`.

# AF-18 — Audit Log Review

## In plain English

This flow provides traceability for important admin and system actions, including who acted, what changed, when it happened and why.

In normal use, admin opens audit logs, then admin filters by actor, module, action type, date, record id or severity, then admin opens a log detail, then system shows before/after values where available, reason, source ip/session and linked record, then admin exports logs if needed for review, then admin returns to the linked operational flow or closes review. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

This flow provides traceability for important admin and system actions, including who acted, what changed, when it happened and why. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- Audit events from all admin flows
- ASF-03
- ASF-08
- ASF-03 List/Search/Filter
- ASF-04 Record Detail Review
- ASF-08 Export and Report Generation
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens audit logs from settings, record detail, finance, risk or governance review. | This condition starts AF-18. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Audit Log Review | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Audit events from all admin flows | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-08 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 List/Search/Filter | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-08 Export and Report Generation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **Admin/System:** Admin opens audit logs.
2. **System:** Admin filters by actor, module, action type, date, record ID or severity.
3. **Admin/System:** Admin opens a log detail.
4. **System:** System shows before/after values where available, reason, source IP/session and linked record.
5. **Admin/System:** Admin exports logs if needed for review.
6. **System:** Admin returns to the linked operational flow or closes review.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | Admin exports logs if needed for review. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
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
| Audit reviewed | AF-18 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Export generated | AF-18 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Linked record opened | AF-18 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-18 reaches the ending that requires AF-03 User Management; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-03 User Management | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-18 reaches the ending that requires AF-08 Finance; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-08 Finance | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-18 reaches the ending that requires AF-14 Risk Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-14 Risk Review | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-18 reaches the ending that requires AF-17 Admin Users; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-17 Admin Users | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Log list too broad | A clear blocked or failed state; no unconfirmed success is shown. | ASF-03 filters narrow the review | Admin finds the target event The flow re-enters at the last valid checkpoint. |
| Linked record is unavailable | A clear blocked or failed state; no unconfirmed success is shown. | Audit log still preserves action record | Admin can review historical context The flow re-enters at the last valid checkpoint. |
| Export is required | A clear blocked or failed state; no unconfirmed success is shown. | ASF-08 generates controlled export | No database access is needed The flow re-enters at the last valid checkpoint. |

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
| 1 | Audit Logs | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Filters | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Log Detail | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Export | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Review Complete | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Admin opens audit logs.; Admin filters by actor, module, action type, date, record ID or severity.; Admin opens a log detail.; System shows before/after values where available, reason, source IP/session and linked record.; Admin exports logs if needed for review.; Admin returns to the linked operational flow or closes review..
- [ ] Recovery: Log list too broad.
- [ ] Recovery: Linked record is unavailable.
- [ ] Recovery: Export is required.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
