---
id: AF-13
title: Task Media Moderation
type: main-flow
audience: Non-technical team, Junior admin developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Admin Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Admin Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: ASF-06, ASF-05, ASF-07, AF-06, AF-14, AF-19
---

# AF-13 — Task Media Moderation

## In plain English

This flow lets admins review uploaded photos and videos for task proof, completion proof, reports and unsafe content.

In normal use, admin opens media moderation queue, then system shows pending, flagged, removed and reviewed media, then admin opens media preview with linked user, task, report and upload purpose, then admin reviews whether the media is valid, unsafe, unrelated or privacy-sensitive, then admin keeps, removes, flags or escalates the media, then system records decision and updates linked task/report/risk context. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

This flow lets admins review uploaded photos and videos for task proof, completion proof, reports and unsafe content. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- TaskProof/TaskMedia records
- Report evidence
- Permission-controlled media access
- ASF-06 Evidence and Media Review
- ASF-05 Reason and Audit Confirmation
- ASF-07 Status Change
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens media queue or media item from task/report/KYC detail. | This condition starts AF-13. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Task Media Moderation | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| TaskProof/TaskMedia records | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Report evidence | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Permission-controlled media access | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-06 Evidence and Media Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-07 Status Change | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **Admin/System:** Admin opens media moderation queue.
2. **System:** System shows pending, flagged, removed and reviewed media.
3. **Admin/System:** Admin opens media preview with linked user, task, report and upload purpose.
4. **System:** Admin reviews whether the media is valid, unsafe, unrelated or privacy-sensitive.
5. **Admin/System:** Admin keeps, removes, flags or escalates the media.
6. **System:** System records decision and updates linked task/report/risk context.

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
| Media or evidence record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

## Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

## Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Media kept | AF-13 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Media removed | AF-13 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Media flagged | AF-13 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Escalated to dispute/risk | AF-13 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-13 reaches the ending that requires AF-06 Report Resolution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-06 Report Resolution | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-13 reaches the ending that requires AF-14 Risk Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-14 Risk Review | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-13 reaches the ending that requires AF-19 Monitoring; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-19 Monitoring | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Video/photo cannot load | A clear blocked or failed state; no unconfirmed success is shown. | ASF-11 shows retry/error and AF-19 can inspect storage/provider failure | Media review is paused without losing queue context The flow re-enters at the last valid checkpoint. |
| Media is unsafe | A clear blocked or failed state; no unconfirmed success is shown. | ASF-07 remove/flag action applies policy | Risk review can be opened The flow re-enters at the last valid checkpoint. |
| Media affects dispute decision | A clear blocked or failed state; no unconfirmed success is shown. | AF-06 receives reviewed evidence | Dispute can proceed with clearer context The flow re-enters at the last valid checkpoint. |

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
| 1 | Media Queue | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Media Preview | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Safety Review | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Remove or Keep | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Audit Result | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Admin opens media moderation queue.; System shows pending, flagged, removed and reviewed media.; Admin opens media preview with linked user, task, report and upload purpose.; Admin reviews whether the media is valid, unsafe, unrelated or privacy-sensitive.; Admin keeps, removes, flags or escalates the media.; System records decision and updates linked task/report/risk context..
- [ ] Recovery: Video/photo cannot load.
- [ ] Recovery: Media is unsafe.
- [ ] Recovery: Media affects dispute decision.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
