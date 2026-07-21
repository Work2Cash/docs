---
id: MF-18
title: Profile and Settings Management
type: main-flow
audience: Non-technical team, Junior mobile developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Mobile Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Mobile Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: SF-01, SF-02, SF-10, MF-04, MF-19, MF-20, MF-16
generated_from: content/flows/mobile/main/MF-18-profile-and-settings-management.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/mobile/main/MF-18-profile-and-settings-management.md` and rerun `node scripts/generate-flow-docs.js`.

# MF-18 — Profile and Settings Management

## In plain English

Lets users view and manage profile details, saved addresses, notification preferences, support entry, and logout.

In normal use, open profile/settings, then view profile details, then edit allowed profile fields, then manage saved addresses, then open notification preferences, then open help/support, then logout if needed, then sensitive profile changes use pin and/or verification rules. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

Lets users view and manage profile details, saved addresses, notification preferences, support entry, and logout. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- Authenticated user
- User/Profile APIs
- Security PIN for sensitive changes
- SF-01 OTP Verification
- SF-02 Complete Profile
- SF-10 Status Recovery / Resume
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| User opens Profile or Settings from the mobile app. | This condition starts MF-18. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Profile and Settings Management | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Authenticated user | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| User/Profile APIs | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Security PIN for sensitive changes | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-01 OTP Verification | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-02 Complete Profile | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **User/System:** Open Profile/Settings.
2. **System:** View profile details.
3. **User/System:** Edit allowed profile fields.
4. **System:** Manage saved addresses.
5. **User/System:** Open notification preferences.
6. **System:** Open help/support.
7. **User/System:** Logout if needed.
8. **System:** Sensitive profile changes use PIN and/or verification rules.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | Logout if needed. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Support or communication record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Notification or preference record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
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
| Profile updated | MF-18 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Settings saved | MF-18 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Logout complete | MF-18 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Update blocked/retry | MF-18 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-18 reaches the ending that requires MF-04 Task Owner Home; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-04 Task Owner Home | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-18 reaches the ending that requires MF-19 Security and Device Management; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-19 Security and Device Management | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-18 reaches the ending that requires MF-20 Notification Center and Preferences; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-20 Notification Center and Preferences | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-18 reaches the ending that requires MF-16 Support Live Chat; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-16 Support Live Chat | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Phone or email change requires verification | A clear blocked or failed state; no unconfirmed success is shown. | SF-01 OTP Verification | Contact change is not saved until ownership is verified. The flow re-enters at the last valid checkpoint. |
| Profile becomes incomplete | A clear blocked or failed state; no unconfirmed success is shown. | SF-02 Complete Profile | Required fields are collected before critical actions continue. The flow re-enters at the last valid checkpoint. |
| Session expires while editing | A clear blocked or failed state; no unconfirmed success is shown. | MF-03 Login / Session Recovery | User logs in and resumes safely. The flow re-enters at the last valid checkpoint. |

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
| 1 | Profile | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Edit Details | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Saved Addresses | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Support / Logout | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Saved | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Open Profile/Settings.; View profile details.; Edit allowed profile fields.; Manage saved addresses.; Open notification preferences.; Open help/support.; Logout if needed.; Sensitive profile changes use PIN and/or verification rules..
- [ ] Recovery: Phone or email change requires verification.
- [ ] Recovery: Profile becomes incomplete.
- [ ] Recovery: Session expires while editing.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
