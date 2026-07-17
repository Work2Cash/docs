---
id: AF-24
title: Receipt and Transaction Review
type: main-flow
audience: Non-technical team, Junior admin developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Admin Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Admin Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: ASF-03, ASF-04, ASF-08, ASF-10, AF-08, AF-10, AF-06, AF-18
---

# AF-24 — Receipt and Transaction Review

## In plain English

This flow gives admins a dedicated way to find receipts and transaction trails without manually changing ledger entries from the review screen.

In normal use, admin opens receipt & transactions, then admin searches by transaction id, task id, user, provider reference, amount, status or date, then admin opens transaction detail, then system shows receipt summary and linked task, user, wallet, escrow, provider reference and webhook/reconciliation state, then admin copies receipt reference or exports where permitted, then admin escalates to finance, support or dispute if action is required, then manual ledger correction is blocked from this screen and routed to wallet/finance action flows. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

This flow gives admins a dedicated way to find receipts and transaction trails without manually changing ledger entries from the review screen. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- Wallet ledger
- Payment records
- Provider references
- Webhook events
- RBAC export permissions
- ASF-03 List/Search/Filter
- ASF-04 Record Detail Review
- ASF-08 Export and Report Generation
- ASF-10 Provider Reconciliation and Retry
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens Receipt & Transactions or follows a payment/wallet/support link. | This condition starts AF-24. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Receipt and Transaction Review | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Wallet ledger | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Payment records | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Provider references | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Webhook events | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| RBAC export permissions | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 List/Search/Filter | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-08 Export and Report Generation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-10 Provider Reconciliation and Retry | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **Admin/System:** Admin opens Receipt & Transactions.
2. **System:** Admin searches by transaction ID, task ID, user, provider reference, amount, status or date.
3. **Admin/System:** Admin opens transaction detail.
4. **System:** System shows receipt summary and linked task, user, wallet, escrow, provider reference and webhook/reconciliation state.
5. **Admin/System:** Admin copies receipt reference or exports where permitted.
6. **System:** Admin escalates to finance, support or dispute if action is required.
7. **Admin/System:** Manual ledger correction is blocked from this screen and routed to wallet/finance action flows.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | Admin escalates to finance, support or dispute if action is required. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Payment, wallet, escrow or payout record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
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
| Receipt viewed | AF-24 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Reference copied | AF-24 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Export generated | AF-24 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Finance/support/dispute escalated | AF-24 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-24 reaches the ending that requires AF-08 Finance; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-08 Finance | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-24 reaches the ending that requires AF-10 Wallet Support; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-10 Wallet Support | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-24 reaches the ending that requires AF-06 Report Resolution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-06 Report Resolution | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-24 reaches the ending that requires AF-18 Audit Log Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-18 Audit Log Review | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Receipt cannot be found | A clear blocked or failed state; no unconfirmed success is shown. | Search/filter plus provider reference lookup | Admin can refine search or open finance reconciliation The flow re-enters at the last valid checkpoint. |
| Ledger correction is needed | A clear blocked or failed state; no unconfirmed success is shown. | Mutation is blocked from receipt review | Admin routes to AF-08 Finance or AF-10 Wallet Support The flow re-enters at the last valid checkpoint. |
| Sensitive provider payload requested | A clear blocked or failed state; no unconfirmed success is shown. | Data exposure guard | Admin sees only safe operational metadata The flow re-enters at the last valid checkpoint. |

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

## Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Receipts & Transactions | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Transaction Search | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Receipt Detail | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Webhook Status | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Escalate / Export | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Admin opens Receipt & Transactions.; Admin searches by transaction ID, task ID, user, provider reference, amount, status or date.; Admin opens transaction detail.; System shows receipt summary and linked task, user, wallet, escrow, provider reference and webhook/reconciliation state.; Admin copies receipt reference or exports where permitted.; Admin escalates to finance, support or dispute if action is required.; Manual ledger correction is blocked from this screen and routed to wallet/finance action flows..
- [ ] Recovery: Receipt cannot be found.
- [ ] Recovery: Ledger correction is needed.
- [ ] Recovery: Sensitive provider payload requested.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
