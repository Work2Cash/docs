---
id: AF-06
title: Task Report and Dispute Resolution
type: main-flow
audience: Non-technical team, Junior admin developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Admin Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Admin Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: AF-05, AF-13, AF-14, ASF-06, ASF-05, ASF-07, ASF-09, AF-09, AF-10
generated_from: content/flows/admin/main/AF-06-task-report-and-dispute-resolution.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/admin/main/AF-06-task-report-and-dispute-resolution.md` and rerun `node scripts/generate-flow-docs.js`.

# AF-06 — Task Report and Dispute Resolution

## In plain English

This flow resolves reports linked to tasks, including refusal to approve completion, unsafe behavior, no-show, off-platform solicitation, proof disputes and cancellation disagreements.

In normal use, admin opens the report queue, then admin filters by report type, urgency, linked task, user, state or age, then admin opens report detail, then system shows linked task, task owner, tasker, timeline, media, cancellation/no-show events, penalties and prior warnings/strikes, then admin reviews evidence and policy rules, then admin selects a resolution: uphold report, reject report, apply warning/strike, release escrow, hold payout, request more info or escalate, then system records decision, notifies affected parties and updates related task/wallet/risk states. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

This flow resolves reports linked to tasks, including refusal to approve completion, unsafe behavior, no-show, off-platform solicitation, proof disputes and cancellation disagreements. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- AF-05 Task Monitoring
- AF-13 Media Review
- AF-14 Risk Rules
- ASF-06
- ASF-05
- ASF-06 Evidence and Media Review
- ASF-05 Reason and Audit Confirmation
- ASF-07 Status Change
- ASF-09 Support Assignment
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens Reports from dashboard or from a task/user detail page. | This condition starts AF-06. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Task Report and Dispute Resolution | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| AF-05 Task Monitoring | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| AF-13 Media Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| AF-14 Risk Rules | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-06 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-06 Evidence and Media Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-07 Status Change | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-09 Support Assignment | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **Admin/System:** Admin opens the report queue.
2. **System:** Admin filters by report type, urgency, linked task, user, state or age.
3. **Admin/System:** Admin opens report detail.
4. **System:** System shows linked task, Task Owner, Tasker, timeline, media, cancellation/no-show events, penalties and prior warnings/strikes.
5. **Admin/System:** Admin reviews evidence and policy rules.
6. **System:** Admin selects a resolution: uphold report, reject report, apply warning/strike, release escrow, hold payout, request more info or escalate.
7. **Admin/System:** System records decision, notifies affected parties and updates related task/wallet/risk states.

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
| Report resolved | AF-06 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| More information requested | AF-06 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Escalated | AF-06 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Timed out by policy | AF-06 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-06 reaches the ending that requires AF-09 Payout Batch; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-09 Payout Batch | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-06 reaches the ending that requires AF-10 Wallet Support; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-10 Wallet Support | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-06 reaches the ending that requires AF-14 Risk Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-14 Risk Review | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Report lacks evidence | A clear blocked or failed state; no unconfirmed success is shown. | ASF-09 support can request more information | Report remains pending until evidence or timeout The flow re-enters at the last valid checkpoint. |
| Dispute affects payout | A clear blocked or failed state; no unconfirmed success is shown. | AF-09 payout batch excludes or holds affected Tasker payout | Non-disputed payouts continue normally The flow re-enters at the last valid checkpoint. |
| Decision would penalize a user | A clear blocked or failed state; no unconfirmed success is shown. | ASF-05 reason is required | Decision is auditable The flow re-enters at the last valid checkpoint. |

## Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

## Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not turn disputes into live chat; preserve structured evidence and decisions.
- Do not add admin task reassignment; only the approved controlled actions are allowed.

## Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Reports Queue | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Report Detail | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Evidence Review | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Decision | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Resolution Notice | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Admin opens the report queue.; Admin filters by report type, urgency, linked task, user, state or age.; Admin opens report detail.; System shows linked task, Task Owner, Tasker, timeline, media, cancellation/no-show events, penalties and prior warnings/strikes.; Admin reviews evidence and policy rules.; Admin selects a resolution: uphold report, reject report, apply warning/strike, release escrow, hold payout, request more info or escalate.; System records decision, notifies affected parties and updates related task/wallet/risk states..
- [ ] Recovery: Report lacks evidence.
- [ ] Recovery: Dispute affects payout.
- [ ] Recovery: Decision would penalize a user.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
