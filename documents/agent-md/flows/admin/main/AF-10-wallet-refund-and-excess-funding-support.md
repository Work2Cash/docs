---
id: AF-10
title: Wallet, Refund and Excess Funding Support
type: main-flow
audience: Non-technical team, Junior admin developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Admin Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Admin Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: AF-03, AF-08, ASF-04, ASF-05, ASF-09, ASF-10, AF-07, AF-18
generated_from: content/flows/admin/main/AF-10-wallet-refund-and-excess-funding-support.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/admin/main/AF-10-wallet-refund-and-excess-funding-support.md` and rerun `node scripts/generate-flow-docs.js`.

# AF-10 — Wallet, Refund and Excess Funding Support

## In plain English

This flow handles Task Owner wallet support, excess deposit cases, escrow questions and refund-like support cases. Task Owners cannot withdraw directly from the app.

In normal use, admin opens wallet case queue or a user wallet detail, then system shows task owner wallet, tasker wallet, ledger entries, escrow holds and linked tasks, then admin identifies whether the issue is excess funding, failed funding, refund request, duplicate payment or ledger confusion, then admin reviews provider references and task state, then admin decides whether to guide user to use funds on tasks, escalate, or request approved manual handling, then system records support resolution and audit reason. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

This flow handles Task Owner wallet support, excess deposit cases, escrow questions and refund-like support cases. Task Owners cannot withdraw directly from the app. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- AF-03 User Management
- AF-08 Finance
- Wallet ledger
- Support policy
- ASF-04 Record Detail Review
- ASF-05 Reason and Audit Confirmation
- ASF-09 Support Assignment
- ASF-10 Provider Reconciliation
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Support, finance or user management opens a wallet case. | This condition starts AF-10. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Wallet, Refund and Excess Funding Support | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| AF-03 User Management | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| AF-08 Finance | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Wallet ledger | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Support policy | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-09 Support Assignment | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-10 Provider Reconciliation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **Admin/System:** Admin opens wallet case queue or a user wallet detail.
2. **System:** System shows Task Owner wallet, Tasker wallet, ledger entries, escrow holds and linked tasks.
3. **Admin/System:** Admin identifies whether the issue is excess funding, failed funding, refund request, duplicate payment or ledger confusion.
4. **System:** Admin reviews provider references and task state.
5. **Admin/System:** Admin decides whether to guide user to use funds on tasks, escalate, or request approved manual handling.
6. **System:** System records support resolution and audit reason.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Payment, wallet, escrow or payout record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
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
| Case resolved | AF-10 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Manual review pending | AF-10 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| User guided to support policy | AF-10 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Provider reconciliation pending | AF-10 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-10 reaches the ending that requires AF-07 Support Chat; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-07 Support Chat | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-10 reaches the ending that requires AF-08 Finance; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-08 Finance | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-10 reaches the ending that requires AF-18 Audit Log Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-18 Audit Log Review | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| User requests direct Task Owner withdrawal | A clear blocked or failed state; no unconfirmed success is shown. | Policy path explains support-only handling | No direct withdrawal is exposed The flow re-enters at the last valid checkpoint. |
| Ledger and provider amount disagree | A clear blocked or failed state; no unconfirmed success is shown. | ASF-10 reconciliation checks source of truth | Case stays pending until resolved The flow re-enters at the last valid checkpoint. |
| Admin adjustment needed | A clear blocked or failed state; no unconfirmed success is shown. | ASF-05 requires reason and permission | Manual decision is auditable The flow re-enters at the last valid checkpoint. |

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
- Do not add admin task reassignment; only the approved controlled actions are allowed.
- Use `mode`; do not introduce `activeMode`.

## Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Wallet Case Queue | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Ledger Review | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Support Request | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Adjustment Decision | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Case Closed | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Admin opens wallet case queue or a user wallet detail.; System shows Task Owner wallet, Tasker wallet, ledger entries, escrow holds and linked tasks.; Admin identifies whether the issue is excess funding, failed funding, refund request, duplicate payment or ledger confusion.; Admin reviews provider references and task state.; Admin decides whether to guide user to use funds on tasks, escalate, or request approved manual handling.; System records support resolution and audit reason..
- [ ] Recovery: User requests direct Task Owner withdrawal.
- [ ] Recovery: Ledger and provider amount disagree.
- [ ] Recovery: Admin adjustment needed.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
