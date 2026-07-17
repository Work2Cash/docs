---
id: MF-22
title: Ratings and Reviews
type: main-flow
audience: Non-technical team, Junior mobile developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Mobile Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Mobile Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: SF-08, MF-15, MF-24, MF-16
---

# MF-22 — Ratings and Reviews

## In plain English

Collects task-bound ratings after completion and feeds trust, favorites, and moderation.

In normal use, show rating prompt after completion, then task owner rates tasker and may add optional review, then task owner may add tasker to favorites, then tasker rates task owner and may add optional review, then backend enforces one rating per actor per completed task, then ratings update tasker display and task owner trust profile, then reported reviews route to admin moderation. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

Collects task-bound ratings after completion and feeds trust, favorites, and moderation. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- Completed task
- Rating model
- FavoriteTasker model
- Admin review moderation
- SF-08 Report / Dispute
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Task reaches completed/settled state or user opens completed task requiring rating. | This condition starts MF-22. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Ratings and Reviews | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Completed task | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Rating model | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| FavoriteTasker model | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Admin review moderation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-08 Report / Dispute | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **User/System:** Show rating prompt after completion.
2. **System:** Task Owner rates Tasker and may add optional review.
3. **User/System:** Task Owner may add Tasker to Favorites.
4. **System:** Tasker rates Task Owner and may add optional review.
5. **User/System:** Backend enforces one rating per actor per completed task.
6. **System:** Ratings update Tasker display and Task Owner trust profile.
7. **User/System:** Reported reviews route to admin moderation.

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
| Rating submitted | MF-22 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Review submitted | MF-22 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Favorite added | MF-22 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Rating skipped | MF-22 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Review reported | MF-22 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-22 reaches the ending that requires MF-15 Favorites; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-15 Favorites | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-22 reaches the ending that requires MF-24 Rebook / Repeat Task; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-24 Rebook / Repeat Task | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-22 reaches the ending that requires MF-16 Support Live Chat; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-16 Support Live Chat | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| User skips rating | A clear blocked or failed state; no unconfirmed success is shown. | Pending rating state | Rating can be shown later from task history. The flow re-enters at the last valid checkpoint. |
| Review is abusive or false | A clear blocked or failed state; no unconfirmed success is shown. | Report review/admin moderation | Admin can hide/remove while preserving internal audit. The flow re-enters at the last valid checkpoint. |
| Low rating indicates serious issue | A clear blocked or failed state; no unconfirmed success is shown. | SF-08 Report / Dispute | User can open structured report with evidence. The flow re-enters at the last valid checkpoint. |

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
| 1 | Rate Task | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Review Tags | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Optional Review | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Favorite Option | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Submitted | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Show rating prompt after completion.; Task Owner rates Tasker and may add optional review.; Task Owner may add Tasker to Favorites.; Tasker rates Task Owner and may add optional review.; Backend enforces one rating per actor per completed task.; Ratings update Tasker display and Task Owner trust profile.; Reported reviews route to admin moderation..
- [ ] Recovery: User skips rating.
- [ ] Recovery: Review is abusive or false.
- [ ] Recovery: Low rating indicates serious issue.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
