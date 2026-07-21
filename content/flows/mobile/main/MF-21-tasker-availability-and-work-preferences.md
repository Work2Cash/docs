---
id: MF-21
title: Tasker Availability and Work Preferences
type: main-flow
audience: Non-technical team, Junior mobile developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Mobile Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Mobile Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: SF-03, SF-04, SF-09, MF-09, MF-10
---

# MF-21 — Tasker Availability and Work Preferences

## In plain English

Lets approved Taskers control when they are available and what work they prefer without using auto-accept.

In normal use, confirm taskerprofile is active and kyc-approved, then set available/unavailable, then set working hours, then select preferred task categories, then set maximum travel distance within platform cap, then confirm location permission while available, then save preferences, then tasker can browse tasks sorted nearest first. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

Lets approved Taskers control when they are available and what work they prefer without using auto-accept. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- Approved TaskerProfile
- Location permission
- Task catalog
- Platform travel-radius cap
- SF-03 Tasker KYC
- SF-04 Location, Address and Pin Confirmation
- SF-09 Permission Recovery
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Tasker opens availability or work preferences. | This condition starts MF-21. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Tasker Availability and Work Preferences | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Approved TaskerProfile | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Location permission | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Task catalog | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Platform travel-radius cap | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-03 Tasker KYC | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-04 Location, Address and Pin Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-09 Permission Recovery | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **User/System:** Confirm TaskerProfile is active and KYC-approved.
2. **System:** Set available/unavailable.
3. **User/System:** Set working hours.
4. **System:** Select preferred task categories.
5. **User/System:** Set maximum travel distance within platform cap.
6. **System:** Confirm location permission while available.
7. **User/System:** Save preferences.
8. **System:** Tasker can browse tasks sorted nearest first.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Configuration or preference record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

## Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

## Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Available | MF-21 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Unavailable | MF-21 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Preferences saved | MF-21 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Availability blocked | MF-21 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-21 reaches the ending that requires MF-09 Tasker Browse and Accept Task; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-09 Tasker Browse and Accept Task | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-21 reaches the ending that requires MF-10 Active Task Execution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-10 Active Task Execution | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Tasker not KYC-approved | A clear blocked or failed state; no unconfirmed success is shown. | SF-03 Tasker KYC | Availability remains locked until KYC is approved. The flow re-enters at the last valid checkpoint. |
| Location permission denied | A clear blocked or failed state; no unconfirmed success is shown. | SF-09 Permission Recovery | Tasker cannot be available/active until location is enabled. The flow re-enters at the last valid checkpoint. |
| Auto Accept visible in old design | A clear blocked or failed state; no unconfirmed success is shown. | Deferred feature rule | Auto Accept is not implemented in MVP because Tasker must confirm arrival ability. The flow re-enters at the last valid checkpoint. |

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
| 1 | Availability | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Working Hours | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Preferred Tasks | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Travel Distance | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Available | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Confirm TaskerProfile is active and KYC-approved.; Set available/unavailable.; Set working hours.; Select preferred task categories.; Set maximum travel distance within platform cap.; Confirm location permission while available.; Save preferences.; Tasker can browse tasks sorted nearest first..
- [ ] Recovery: Tasker not KYC-approved.
- [ ] Recovery: Location permission denied.
- [ ] Recovery: Auto Accept visible in old design.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
