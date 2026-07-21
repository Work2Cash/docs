---
id: AF-09
title: Withdrawal and Payout Batch Operations
type: main-flow
audience: Non-technical team, Junior admin developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Admin Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Admin Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: ASF-10, ASF-03, ASF-04, ASF-05, AF-08, AF-14, AF-18
generated_from: content/flows/admin/main/AF-09-withdrawal-and-payout-batch-operations.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/admin/main/AF-09-withdrawal-and-payout-batch-operations.md` and rerun `node scripts/generate-flow-docs.js`.

# AF-09 — Withdrawal and Payout Batch Operations

## In plain English

This flow manages Tasker withdrawal requests and bulk payout batches. Work2Cash pays eligible Tasker withdrawal requests on the 14th and 28th of each month.

In normal use, admin opens withdrawal queue, then system shows pending withdrawal requests, eligible taskers, held payouts and disputed exclusions, then admin creates or opens the payout batch for the 14th or 28th, then system groups eligible requests by provider rail and validates balances, then admin reviews batch totals, exclusions, fees and failed validations, then admin confirms bulk payout action, then system sends payout instructions through paystack or moniepoint and records provider responses, then admin reviews batch result and retries failed safe items where allowed. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

This flow manages Tasker withdrawal requests and bulk payout batches. Work2Cash pays eligible Tasker withdrawal requests on the 14th and 28th of each month. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- Tasker withdrawal requests
- No active issue/dispute for payout eligibility
- Paystack/Moniepoint payout rails
- ASF-10
- ASF-03 List/Search/Filter
- ASF-04 Record Detail Review
- ASF-05 Reason and Audit Confirmation
- ASF-10 Provider Reconciliation
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens withdrawal queue or scheduled payout batch day arrives. | This condition starts AF-09. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Withdrawal and Payout Batch Operations | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Tasker withdrawal requests | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| No active issue/dispute for payout eligibility | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Paystack/Moniepoint payout rails | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-10 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 List/Search/Filter | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-10 Provider Reconciliation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **Admin/System:** Admin opens withdrawal queue.
2. **System:** System shows pending withdrawal requests, eligible Taskers, held payouts and disputed exclusions.
3. **Admin/System:** Admin creates or opens the payout batch for the 14th or 28th.
4. **System:** System groups eligible requests by provider rail and validates balances.
5. **Admin/System:** Admin reviews batch totals, exclusions, fees and failed validations.
6. **System:** Admin confirms bulk payout action.
7. **Admin/System:** System sends payout instructions through Paystack or Moniepoint and records provider responses.
8. **System:** Admin reviews batch result and retries failed safe items where allowed.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Payment, wallet, escrow or payout record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

## Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

## Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Batch paid | AF-09 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Batch partially paid | AF-09 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Batch failed | AF-09 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Items held for dispute/admin approval | AF-09 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-09 reaches the ending that requires AF-08 Finance Reconciliation; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-08 Finance Reconciliation | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-09 reaches the ending that requires AF-14 Risk Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-14 Risk Review | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-09 reaches the ending that requires AF-18 Audit Log Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-18 Audit Log Review | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Tasker has active dispute | A clear blocked or failed state; no unconfirmed success is shown. | Payout item is held until admin authorization | Non-disputed Taskers remain payable The flow re-enters at the last valid checkpoint. |
| Bulk transfer partially fails | A clear blocked or failed state; no unconfirmed success is shown. | ASF-10 reconciles item-by-item provider response | Successful items are not duplicated The flow re-enters at the last valid checkpoint. |
| Admin tries payout outside policy | A clear blocked or failed state; no unconfirmed success is shown. | ASF-02 and ASF-05 enforce permission and reason | Action is blocked or audited The flow re-enters at the last valid checkpoint. |

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
| 1 | Withdrawal Queue | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Payout Batch | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Batch Review | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Bulk Transfer | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Batch Result | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Admin opens withdrawal queue.; System shows pending withdrawal requests, eligible Taskers, held payouts and disputed exclusions.; Admin creates or opens the payout batch for the 14th or 28th.; System groups eligible requests by provider rail and validates balances.; Admin reviews batch totals, exclusions, fees and failed validations.; Admin confirms bulk payout action.; System sends payout instructions through Paystack or Moniepoint and records provider responses.; Admin reviews batch result and retries failed safe items where allowed..
- [ ] Recovery: Tasker has active dispute.
- [ ] Recovery: Bulk transfer partially fails.
- [ ] Recovery: Admin tries payout outside policy.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
