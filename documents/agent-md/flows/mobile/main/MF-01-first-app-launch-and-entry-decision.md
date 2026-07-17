---
id: MF-01
title: First App Launch and Entry Decision
type: main-flow
audience: Non-technical team, Junior mobile developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Mobile Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Mobile Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: SF-10, MF-02, MF-03, MF-04, MF-05
generated_from: content/flows/mobile/main/MF-01-first-app-launch-and-entry-decision.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/mobile/main/MF-01-first-app-launch-and-entry-decision.md` and rerun `node scripts/generate-flow-docs.js`.

# MF-01 — First App Launch and Entry Decision

## In plain English

Decides whether the user should see onboarding, registration, login, or an authenticated home state.

In normal use, show splash/loading state, then check stored session, then if no session, show onboarding/login/register entry, then if session exists, run status recovery, then route user to home or required recovery subflow. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

Decides whether the user should see onboarding, registration, login, or an authenticated home state. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- Installed app
- Network where available
- Local session storage
- SF-10 Status Recovery / Resume
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| User opens the Work2Cash mobile app. | This condition starts MF-01. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for First App Launch and Entry Decision | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Installed app | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Network where available | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Local session storage | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **User/System:** Show splash/loading state.
2. **System:** Check stored session.
3. **User/System:** If no session, show onboarding/login/register entry.
4. **System:** If session exists, run status recovery.
5. **User/System:** Route user to Home or required recovery subflow.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | If no session, show onboarding/login/register entry. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |
| Branch 2 | If session exists, run status recovery. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Authentication or session record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

## Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

## Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Guest entry screen | MF-01 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Authenticated Home | MF-01 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Offline/retry state | MF-01 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-01 reaches the ending that requires MF-02 Registration; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-02 Registration | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-01 reaches the ending that requires MF-03 Login / Session Recovery; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-03 Login / Session Recovery | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-01 reaches the ending that requires MF-04 Task Owner Home; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-04 Task Owner Home | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-01 reaches the ending that requires MF-05 Tasker Activation; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-05 Tasker Activation | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Session expired | A clear blocked or failed state; no unconfirmed success is shown. | MF-03 Login / Session Recovery | User logs in again and resumes safely. The flow re-enters at the last valid checkpoint. |
| Network unavailable | A clear blocked or failed state; no unconfirmed success is shown. | SF-10 Status Recovery / Resume | App shows offline state and retries. The flow re-enters at the last valid checkpoint. |
| User profile incomplete | A clear blocked or failed state; no unconfirmed success is shown. | SF-02 Complete Profile | User completes missing data before Home. The flow re-enters at the last valid checkpoint. |

## Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
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
| 1 | Splash | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Session Check | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Guest Entry | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Status Recovery | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Home / Login | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Show splash/loading state.; Check stored session.; If no session, show onboarding/login/register entry.; If session exists, run status recovery.; Route user to Home or required recovery subflow..
- [ ] Recovery: Session expired.
- [ ] Recovery: Network unavailable.
- [ ] Recovery: User profile incomplete.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
