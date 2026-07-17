---
id: MF-03
title: Login / Session Recovery
type: main-flow
audience: Non-technical team, Junior mobile developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Mobile Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Mobile Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: SF-01, SF-02, SF-03, SF-10, SF-11, SF-13, MF-04, MF-05, MF-06, MF-09
generated_from: content/flows/mobile/main/MF-03-login-session-recovery.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/mobile/main/MF-03-login-session-recovery.md` and rerun `node scripts/generate-flow-docs.js`.

# MF-03 — Login / Session Recovery

## In plain English

Authenticates returning users and repairs any incomplete onboarding state left by registration, KYC, or profile setup.

In normal use, enter login details, then verify credentials/otp, then fetch current user state, then check profile complete, then if profile incomplete, run complete profile, then check selected mode, then if tasker mode requires kyc/profile, route to tasker activation or kyc status, then otherwise route to home. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

Authenticates returning users and repairs any incomplete onboarding state left by registration, KYC, or profile setup. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- Existing account
- Auth APIs
- User/Profile APIs
- SF-01 OTP Verification
- SF-02 Complete Profile
- SF-03 Tasker KYC
- SF-10 Status Recovery / Resume
- SF-11 Password Recovery
- SF-13 Google / Apple Social Authentication
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Existing user logs in, session expires, or app resumes with uncertain state. | This condition starts MF-03. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Login / Session Recovery | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Existing account | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Auth APIs | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| User/Profile APIs | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-01 OTP Verification | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-02 Complete Profile | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-03 Tasker KYC | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-11 Password Recovery | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-13 Google / Apple Social Authentication | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **User/System:** Enter login details.
2. **System:** Verify credentials/OTP.
3. **User/System:** Fetch current user state.
4. **System:** Check profile complete.
5. **User/System:** If profile incomplete, run Complete Profile.
6. **System:** Check selected mode.
7. **User/System:** If Tasker mode requires KYC/profile, route to Tasker Activation or KYC status.
8. **System:** Otherwise route to Home.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | If profile incomplete, run Complete Profile. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |
| Branch 2 | If Tasker mode requires KYC/profile, route to Tasker Activation or KYC status. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |
| Branch 3 | Otherwise route to Home. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

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
| Task Owner Home | MF-03 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Tasker Home | MF-03 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Complete Profile | MF-03 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| KYC pending/rejected/manual review | MF-03 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Login failed | MF-03 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-03 reaches the ending that requires MF-04 Task Owner Home; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-04 Task Owner Home | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-03 reaches the ending that requires MF-05 Tasker Activation; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-05 Tasker Activation | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-03 reaches the ending that requires MF-06 Task Owner Create Task; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-06 Task Owner Create Task | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-03 reaches the ending that requires MF-09 Tasker Browse and Accept Task; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-09 Tasker Browse and Accept Task | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Profile incomplete from abandoned registration | A clear blocked or failed state; no unconfirmed success is shown. | SF-02 Complete Profile | Login repairs the abandoned registration flow. The flow re-enters at the last valid checkpoint. |
| Tasker KYC incomplete | A clear blocked or failed state; no unconfirmed success is shown. | SF-03 Tasker KYC | User completes or waits for KYC before Tasker actions. The flow re-enters at the last valid checkpoint. |
| User forgot password | A clear blocked or failed state; no unconfirmed success is shown. | SF-11 Password Recovery | User resets password through OTP recovery and returns to Login. The flow re-enters at the last valid checkpoint. |
| User chooses Google or Apple sign-in | A clear blocked or failed state; no unconfirmed success is shown. | Social login branch | Google/Apple authenticate the user, then Work2Cash runs the same profile/KYC/status checks. The flow re-enters at the last valid checkpoint. |
| Session stale or app was closed during provider callback | A clear blocked or failed state; no unconfirmed success is shown. | SF-10 Status Recovery / Resume | Backend state decides the correct next screen. The flow re-enters at the last valid checkpoint. |

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
| 1 | Login Details | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Verify Login | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | State Check | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Profile/KYC Repair | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Home | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Enter login details.; Verify credentials/OTP.; Fetch current user state.; Check profile complete.; If profile incomplete, run Complete Profile.; Check selected mode.; If Tasker mode requires KYC/profile, route to Tasker Activation or KYC status.; Otherwise route to Home..
- [ ] Recovery: Profile incomplete from abandoned registration.
- [ ] Recovery: Tasker KYC incomplete.
- [ ] Recovery: User forgot password.
- [ ] Recovery: User chooses Google or Apple sign-in.
- [ ] Recovery: Session stale or app was closed during provider callback.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
