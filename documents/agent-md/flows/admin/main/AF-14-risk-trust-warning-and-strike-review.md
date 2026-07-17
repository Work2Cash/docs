---
id: AF-14
title: Risk, Trust, Warning and Strike Review
type: main-flow
audience: Non-technical team, Junior admin developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Admin Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Admin Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: ASF-05, ASF-04, ASF-06, ASF-07, AF-03, AF-06, AF-07, AF-18
generated_from: content/flows/admin/main/AF-14-risk-trust-warning-and-strike-review.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/admin/main/AF-14-risk-trust-warning-and-strike-review.md` and rerun `node scripts/generate-flow-docs.js`.

# AF-14 — Risk, Trust, Warning and Strike Review

## In plain English

This flow reviews policy violations, warnings, strikes, trust score reductions, Tasker restrictions and account suspensions.

In normal use, admin opens risk queue, then system shows users with warnings, strikes, repeated movement-stage rejections, no-shows, off-platform solicitation flags and unsafe behavior reports, then admin opens trust profile, then system shows policy events, linked tasks/reports, previous warnings/strikes and current restrictions, then admin applies or removes allowed action based on policy, then system records warning, strike, restriction, suspension or no-action decision. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

This flow reviews policy violations, warnings, strikes, trust score reductions, Tasker restrictions and account suspensions. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- Penalty policy
- Report outcomes
- Task events
- Communication audit flags
- ASF-05
- ASF-04 Record Detail Review
- ASF-05 Reason and Audit Confirmation
- ASF-06 Evidence Review
- ASF-07 Status Change
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens risk queue from dashboard, report decision, user profile or automated flag. | This condition starts AF-14. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Risk, Trust, Warning and Strike Review | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Penalty policy | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Report outcomes | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Task events | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Communication audit flags | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-06 Evidence Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-07 Status Change | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **Admin/System:** Admin opens risk queue.
2. **System:** System shows users with warnings, strikes, repeated movement-stage rejections, no-shows, off-platform solicitation flags and unsafe behavior reports.
3. **Admin/System:** Admin opens trust profile.
4. **System:** System shows policy events, linked tasks/reports, previous warnings/strikes and current restrictions.
5. **Admin/System:** Admin applies or removes allowed action based on policy.
6. **System:** System records warning, strike, restriction, suspension or no-action decision.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Report, risk or moderation record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
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
| No action | AF-14 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Warning applied | AF-14 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Strike applied | AF-14 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Restriction applied | AF-14 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Account suspended | AF-14 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-14 reaches the ending that requires AF-03 User Management; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-03 User Management | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-14 reaches the ending that requires AF-06 Report Resolution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-06 Report Resolution | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-14 reaches the ending that requires AF-07 Support Chat; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-07 Support Chat | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-14 reaches the ending that requires AF-18 Audit Log Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-18 Audit Log Review | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Three warnings convert into strike | A clear blocked or failed state; no unconfirmed success is shown. | Risk flow evaluates threshold and applies next policy step | Restriction period is updated The flow re-enters at the last valid checkpoint. |
| Tasker reaches Strike 4 | A clear blocked or failed state; no unconfirmed success is shown. | ASF-07 suspension action applies account restriction | Tasker must contact support The flow re-enters at the last valid checkpoint. |
| Task Owner reaches Strike 4 | A clear blocked or failed state; no unconfirmed success is shown. | ASF-07 suspension action applies account restriction | Task Owner must contact support The flow re-enters at the last valid checkpoint. |

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
| 1 | Risk Queue | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Trust Profile | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Policy Events | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Warning or Strike | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Restriction Result | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Admin opens risk queue.; System shows users with warnings, strikes, repeated movement-stage rejections, no-shows, off-platform solicitation flags and unsafe behavior reports.; Admin opens trust profile.; System shows policy events, linked tasks/reports, previous warnings/strikes and current restrictions.; Admin applies or removes allowed action based on policy.; System records warning, strike, restriction, suspension or no-action decision..
- [ ] Recovery: Three warnings convert into strike.
- [ ] Recovery: Tasker reaches Strike 4.
- [ ] Recovery: Task Owner reaches Strike 4.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
