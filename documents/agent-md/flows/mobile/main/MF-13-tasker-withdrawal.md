---
id: MF-13
title: Tasker Withdrawal
type: main-flow
audience: Non-technical team, Junior mobile developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Mobile Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Mobile Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: SF-10, SF-12, MF-04, MF-09
generated_from: content/flows/mobile/main/MF-13-tasker-withdrawal.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/mobile/main/MF-13-tasker-withdrawal.md` and rerun `node scripts/generate-flow-docs.js`.

# MF-13 — Tasker Withdrawal

## In plain English

Lets Taskers request earnings withdrawal while Work2Cash batches payouts on agreed payout dates.

In normal use, check tasker wallet balance, then confirm saved payout account or run payout account setup, then validate minimum withdrawal amount: ₦1,000, then confirm withdrawal request with pin, then check active issue/dispute against tasker, then if no active issue, accept withdrawal request, then if disputed, require admin authorization for affected payout, then add eligible request to payout batch, then payout batches run on 14th and 28th, then admin processes bulk transfer through paystack/moniepoint rail. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

Lets Taskers request earnings withdrawal while Work2Cash batches payouts on agreed payout dates. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- Tasker wallet
- Completed/settled earnings
- Saved payout account
- Security PIN
- Payout batch schedule
- Finance admin operations
- SF-10 Status Recovery / Resume
- SF-12 Payout Account Setup
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Tasker opens wallet and taps withdraw. | This condition starts MF-13. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Tasker Withdrawal | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Tasker wallet | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Completed/settled earnings | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Saved payout account | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Security PIN | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Payout batch schedule | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Finance admin operations | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-12 Payout Account Setup | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **User/System:** Check Tasker wallet balance.
2. **System:** Confirm saved payout account or run payout account setup.
3. **User/System:** Validate minimum withdrawal amount: ₦1,000.
4. **System:** Confirm withdrawal request with PIN.
5. **User/System:** Check active issue/dispute against Tasker.
6. **System:** If no active issue, accept withdrawal request.
7. **User/System:** If disputed, require admin authorization for affected payout.
8. **System:** Add eligible request to payout batch.
9. **User/System:** Payout batches run on 14th and 28th.
10. **System:** Admin processes bulk transfer through Paystack/Moniepoint rail.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | If no active issue, accept withdrawal request. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |
| Branch 2 | If disputed, require admin authorization for affected payout. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

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
| Withdrawal queued | MF-13 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Paid | MF-13 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Failed/retry | MF-13 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Flagged/admin review | MF-13 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-13 reaches the ending that requires MF-04 Task Owner Home; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-04 Task Owner Home | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-13 reaches the ending that requires MF-09 Tasker Browse and Accept Task; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-09 Tasker Browse and Accept Task | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Balance below ₦1,000 | A clear blocked or failed state; no unconfirmed success is shown. | Wallet guidance state | User cannot submit withdrawal yet. The flow re-enters at the last valid checkpoint. |
| No payout account exists | A clear blocked or failed state; no unconfirmed success is shown. | SF-12 Payout Account Setup | Tasker adds and confirms payout account before withdrawal. The flow re-enters at the last valid checkpoint. |
| PIN forgotten | A clear blocked or failed state; no unconfirmed success is shown. | MF-19 Security and Device Management | Tasker resets PIN through OTP recovery before sensitive action. The flow re-enters at the last valid checkpoint. |
| Active issue/dispute | A clear blocked or failed state; no unconfirmed success is shown. | Settlement hold / admin authorization | Only affected payout is delayed; non-disputed earnings should settle normally. The flow re-enters at the last valid checkpoint. |
| Bulk transfer fails | A clear blocked or failed state; no unconfirmed success is shown. | Payment reconciliation/finance retry | Withdrawal remains failed/retry/flagged until resolved. The flow re-enters at the last valid checkpoint. |

## Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

## Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Use `mode`; do not introduce `activeMode`.

## Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Tasker Wallet | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Withdraw Amount | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Eligibility Check | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Payout Batch | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Withdrawal Status | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Check Tasker wallet balance.; Confirm saved payout account or run payout account setup.; Validate minimum withdrawal amount: ₦1,000.; Confirm withdrawal request with PIN.; Check active issue/dispute against Tasker.; If no active issue, accept withdrawal request.; If disputed, require admin authorization for affected payout.; Add eligible request to payout batch.; Payout batches run on 14th and 28th.; Admin processes bulk transfer through Paystack/Moniepoint rail..
- [ ] Recovery: Balance below ₦1,000.
- [ ] Recovery: No payout account exists.
- [ ] Recovery: PIN forgotten.
- [ ] Recovery: Active issue/dispute.
- [ ] Recovery: Bulk transfer fails.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
