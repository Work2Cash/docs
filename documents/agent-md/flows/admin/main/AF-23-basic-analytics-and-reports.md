---
id: AF-23
title: Basic Analytics and Reports
type: main-flow
audience: Non-technical team, Junior admin developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Admin Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Admin Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: ASF-02, ASF-03, ASF-08, AF-08, AF-18, AF-19
generated_from: content/flows/admin/main/AF-23-basic-analytics-and-reports.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/admin/main/AF-23-basic-analytics-and-reports.md` and rerun `node scripts/generate-flow-docs.js`.

# AF-23 — Basic Analytics and Reports

## In plain English

This flow provides MVP read-only reports for marketplace, finance, trust/safety, support and operations. Advanced analytics remains deferred.

In normal use, admin opens reports dashboard, then admin selects report group: marketplace, finance, trust/safety, support or operations, then system shows read-only metrics for the selected period, then admin filters by date, location, category, provider, status or role where applicable, then admin opens report detail or export preview, then system checks export permission and removes raw sensitive data from export, then admin exports where permitted or returns to dashboard. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

This flow provides MVP read-only reports for marketplace, finance, trust/safety, support and operations. Advanced analytics remains deferred. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- Aggregated operational data
- RBAC export permissions
- Use case logs
- Finance/task/support/report records
- ASF-02 RBAC Permission Gate
- ASF-03 List/Search/Filter
- ASF-08 Export and Report Generation
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens Analytics & Reports from sidebar or dashboard. | This condition starts AF-23. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Basic Analytics and Reports | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Aggregated operational data | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| RBAC export permissions | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Use case logs | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Finance/task/support/report records | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-02 RBAC Permission Gate | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 List/Search/Filter | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-08 Export and Report Generation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **Admin/System:** Admin opens reports dashboard.
2. **System:** Admin selects report group: marketplace, finance, trust/safety, support or operations.
3. **Admin/System:** System shows read-only metrics for the selected period.
4. **System:** Admin filters by date, location, category, provider, status or role where applicable.
5. **Admin/System:** Admin opens report detail or export preview.
6. **System:** System checks export permission and removes raw sensitive data from export.
7. **Admin/System:** Admin exports where permitted or returns to dashboard.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Payment, wallet, escrow or payout record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Report, risk or moderation record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
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
| Report viewed | AF-23 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Export generated | AF-23 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Export blocked | AF-23 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Investigation opened | AF-23 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-23 reaches the ending that requires AF-08 Finance; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-08 Finance | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-23 reaches the ending that requires AF-18 Audit Log Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-18 Audit Log Review | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-23 reaches the ending that requires AF-19 Use Case Health; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-19 Use Case Health | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Admin requests advanced product analytics | A clear blocked or failed state; no unconfirmed success is shown. | MVP scope guard | Advanced analytics remains deferred; basic operational reports continue The flow re-enters at the last valid checkpoint. |
| Export would include sensitive raw data | A clear blocked or failed state; no unconfirmed success is shown. | Export sanitizer/permission gate | Export is blocked or redacted The flow re-enters at the last valid checkpoint. |
| Metrics mismatch source records | A clear blocked or failed state; no unconfirmed success is shown. | AF-19 Use Case Health and AF-08 Finance can be opened | Team investigates data freshness or reconciliation issue The flow re-enters at the last valid checkpoint. |

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
| 1 | Reports Dashboard | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Report Filters | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Report Detail | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
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

- [ ] Happy path: Admin opens reports dashboard.; Admin selects report group: marketplace, finance, trust/safety, support or operations.; System shows read-only metrics for the selected period.; Admin filters by date, location, category, provider, status or role where applicable.; Admin opens report detail or export preview.; System checks export permission and removes raw sensitive data from export.; Admin exports where permitted or returns to dashboard..
- [ ] Recovery: Admin requests advanced product analytics.
- [ ] Recovery: Export would include sensitive raw data.
- [ ] Recovery: Metrics mismatch source records.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
