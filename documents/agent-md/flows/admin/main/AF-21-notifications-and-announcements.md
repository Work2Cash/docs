---
id: AF-21
title: Notifications and Announcements
type: main-flow
audience: Non-technical team, Junior admin developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Admin Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Admin Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: ASF-05, ASF-02, ASF-07, ASF-11, AF-18, AF-19, AF-20
generated_from: content/flows/admin/main/AF-21-notifications-and-announcements.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/admin/main/AF-21-notifications-and-announcements.md` and rerun `node scripts/generate-flow-docs.js`.

# AF-21 — Notifications and Announcements

## In plain English

This flow lets approved admins send operational notices and review notification delivery without using SMS carelessly.

In normal use, admin opens notifications dashboard, then system shows sent, pending, failed and scheduled notifications, then admin creates announcement, then admin selects audience such as all users, task owners, taskers, active-task users, affected incident users, kyc-pending users, location segment or specific user, then admin selects channel: fcm push, in-app notification, email, or termii sms for critical/approved use only, then system shows preview, estimated audience, cost warning where sms applies, and preference impact, then admin confirms send with reason, then system sends, records delivery result, and audits the action. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

This flow lets approved admins send operational notices and review notification delivery without using SMS carelessly. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- FCM
- Email provider
- Termii for critical SMS only
- Notification preferences
- ASF-05
- ASF-02 RBAC Permission Gate
- ASF-05 Reason and Audit Confirmation
- ASF-07 Status Change
- ASF-11 Empty/Loading/Error Recovery
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens Notifications or selects Send Announcement from dashboard quick actions. | This condition starts AF-21. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Notifications and Announcements | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| FCM | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Email provider | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Termii for critical SMS only | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Notification preferences | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-02 RBAC Permission Gate | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-07 Status Change | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-11 Empty/Loading/Error Recovery | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **Admin/System:** Admin opens notifications dashboard.
2. **System:** System shows sent, pending, failed and scheduled notifications.
3. **Admin/System:** Admin creates announcement.
4. **System:** Admin selects audience such as all users, Task Owners, Taskers, active-task users, affected incident users, KYC-pending users, location segment or specific user.
5. **Admin/System:** Admin selects channel: FCM push, in-app notification, email, or Termii SMS for critical/approved use only.
6. **System:** System shows preview, estimated audience, cost warning where SMS applies, and preference impact.
7. **Admin/System:** Admin confirms send with reason.
8. **System:** System sends, records delivery result, and audits the action.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Notification or preference record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
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
| Announcement sent | AF-21 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Scheduled/pending | AF-21 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Partially failed | AF-21 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Blocked | AF-21 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Draft saved | AF-21 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-21 reaches the ending that requires AF-18 Audit Log Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-18 Audit Log Review | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-21 reaches the ending that requires AF-19 Use Case Health; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-19 Use Case Health | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-21 reaches the ending that requires AF-20 Monitoring and Incident Readiness; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-20 Monitoring and Incident Readiness | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Announcement contains sensitive/private data | A clear blocked or failed state; no unconfirmed success is shown. | Validation and review block unsafe content | Admin must rewrite message before sending The flow re-enters at the last valid checkpoint. |
| SMS selected for non-critical message | A clear blocked or failed state; no unconfirmed success is shown. | Cost-control rule blocks or requires stronger approval | SMS spend is protected The flow re-enters at the last valid checkpoint. |
| Delivery partially fails | A clear blocked or failed state; no unconfirmed success is shown. | Delivery result list and AF-19 monitoring show failures | Admin can review retry/escalation without duplicate blasting The flow re-enters at the last valid checkpoint. |

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
| 1 | Notifications | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Create Announcement | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Audience and Channel | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Preview | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Delivery Result | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Admin opens notifications dashboard.; System shows sent, pending, failed and scheduled notifications.; Admin creates announcement.; Admin selects audience such as all users, Task Owners, Taskers, active-task users, affected incident users, KYC-pending users, location segment or specific user.; Admin selects channel: FCM push, in-app notification, email, or Termii SMS for critical/approved use only.; System shows preview, estimated audience, cost warning where SMS applies, and preference impact.; Admin confirms send with reason.; System sends, records delivery result, and audits the action..
- [ ] Recovery: Announcement contains sensitive/private data.
- [ ] Recovery: SMS selected for non-critical message.
- [ ] Recovery: Delivery partially fails.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
