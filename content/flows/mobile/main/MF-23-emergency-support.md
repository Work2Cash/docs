---
id: MF-23
title: Emergency Support
type: main-flow
audience: Non-technical team, Junior mobile developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Mobile Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Mobile Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: SF-05, SF-08, SF-10, MF-16, MF-12, MF-10
---

# MF-23 — Emergency Support

## In plain English

Creates a high-priority support path for urgent task, safety, payment, contact, or no-show situations.

In normal use, show safety guidance and platform-support limitation, then select emergency category, then attach evidence where useful, then create high-priority support session or ticket, then wake/alert support/admin where operationally possible, then user sees waiting or connected state, then support handles, escalates, or links to report/dispute. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

Creates a high-priority support path for urgent task, safety, payment, contact, or no-show situations. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- Authenticated user
- Support live chat/ticket system
- FCM admin/support alert
- Media upload where evidence is attached
- SF-05 Media Upload
- SF-08 Report / Dispute
- SF-10 Status Recovery / Resume
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| User taps Emergency Support from active task, chat, report issue, or support screen. | This condition starts MF-23. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Emergency Support | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Authenticated user | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Support live chat/ticket system | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| FCM admin/support alert | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Media upload where evidence is attached | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-05 Media Upload | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-08 Report / Dispute | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **User/System:** Show safety guidance and platform-support limitation.
2. **System:** Select emergency category.
3. **User/System:** Attach evidence where useful.
4. **System:** Create high-priority support session or ticket.
5. **User/System:** Wake/alert support/admin where operationally possible.
6. **System:** User sees waiting or connected state.
7. **User/System:** Support handles, escalates, or links to report/dispute.

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
| Emergency chat connected | MF-23 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Priority ticket opened | MF-23 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Report/dispute opened | MF-23 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Escalated | MF-23 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Resolved | MF-23 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-23 reaches the ending that requires MF-16 Support Live Chat; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-16 Support Live Chat | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-23 reaches the ending that requires MF-12 Cancellation / No-Show; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-12 Cancellation / No-Show | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-23 reaches the ending that requires MF-10 Active Task Execution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-10 Active Task Execution | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| No support agent online | A clear blocked or failed state; no unconfirmed success is shown. | Priority ticket fallback | User sees expected response message and ticket state. The flow re-enters at the last valid checkpoint. |
| Issue is a formal dispute | A clear blocked or failed state; no unconfirmed success is shown. | SF-08 Report / Dispute | Support routes to structured report instead of informal resolution. The flow re-enters at the last valid checkpoint. |
| Evidence upload fails | A clear blocked or failed state; no unconfirmed success is shown. | SF-05 Media Upload | User can retry or continue with text description. The flow re-enters at the last valid checkpoint. |

## Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
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
| 1 | Emergency Support | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Safety Guidance | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Category | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Evidence | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Priority Chat | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Show safety guidance and platform-support limitation.; Select emergency category.; Attach evidence where useful.; Create high-priority support session or ticket.; Wake/alert support/admin where operationally possible.; User sees waiting or connected state.; Support handles, escalates, or links to report/dispute..
- [ ] Recovery: No support agent online.
- [ ] Recovery: Issue is a formal dispute.
- [ ] Recovery: Evidence upload fails.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
