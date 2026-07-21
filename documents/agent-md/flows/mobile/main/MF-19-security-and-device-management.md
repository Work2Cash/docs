---
id: MF-19
title: Security and Device Management
type: main-flow
audience: Non-technical team, Junior mobile developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Mobile Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Mobile Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: SF-01, SF-10, MF-18, MF-13, SF-12
generated_from: content/flows/mobile/main/MF-19-security-and-device-management.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/mobile/main/MF-19-security-and-device-management.md` and rerun `node scripts/generate-flow-docs.js`.

# MF-19 — Security and Device Management

## In plain English

Protects sensitive actions with a Work2Cash PIN and lets users manage active devices/sessions.

In normal use, open security settings, then create or confirm security pin, then view active devices/sessions, then revoke other sessions where needed, then for sensitive action, enter pin, then backend verifies pin, then action proceeds or rate-limit/cooldown applies, then forgot pin uses otp recovery before setting a new pin. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

Protects sensitive actions with a Work2Cash PIN and lets users manage active devices/sessions. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- Authenticated user
- PIN hash stored securely by backend
- User/Profile APIs
- OTP for PIN reset
- SF-01 OTP Verification
- SF-10 Status Recovery / Resume
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| User opens Security settings or starts a sensitive action. | This condition starts MF-19. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Security and Device Management | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Authenticated user | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| PIN hash stored securely by backend | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| User/Profile APIs | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| OTP for PIN reset | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-01 OTP Verification | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **User/System:** Open Security settings.
2. **System:** Create or confirm security PIN.
3. **User/System:** View active devices/sessions.
4. **System:** Revoke other sessions where needed.
5. **User/System:** For sensitive action, enter PIN.
6. **System:** Backend verifies PIN.
7. **User/System:** Action proceeds or rate-limit/cooldown applies.
8. **System:** Forgot PIN uses OTP recovery before setting a new PIN.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

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
| PIN confirmed | MF-19 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| PIN reset | MF-19 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Sensitive action completed | MF-19 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Sensitive action locked | MF-19 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Session revoked | MF-19 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-19 reaches the ending that requires MF-18 Profile and Settings Management; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-18 Profile and Settings Management | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-19 reaches the ending that requires MF-13 Tasker Withdrawal; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-13 Tasker Withdrawal | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-19 reaches the ending that requires SF-12 Payout Account Setup; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | SF-12 Payout Account Setup | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| PIN forgotten | A clear blocked or failed state; no unconfirmed success is shown. | OTP-based PIN reset | User verifies account and sets a new PIN. The flow re-enters at the last valid checkpoint. |
| Too many failed PIN attempts | A clear blocked or failed state; no unconfirmed success is shown. | Rate limit/cooldown | Sensitive actions are temporarily locked. The flow re-enters at the last valid checkpoint. |
| Device/session revoke attempted | A clear blocked or failed state; no unconfirmed success is shown. | Session management check | User can revoke other sessions and receives security notification. The flow re-enters at the last valid checkpoint. |

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
| 1 | Security | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Create / Enter PIN | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Devices | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Revoke Session | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Security Saved | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: Open Security settings.; Create or confirm security PIN.; View active devices/sessions.; Revoke other sessions where needed.; For sensitive action, enter PIN.; Backend verifies PIN.; Action proceeds or rate-limit/cooldown applies.; Forgot PIN uses OTP recovery before setting a new PIN..
- [ ] Recovery: PIN forgotten.
- [ ] Recovery: Too many failed PIN attempts.
- [ ] Recovery: Device/session revoke attempted.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
