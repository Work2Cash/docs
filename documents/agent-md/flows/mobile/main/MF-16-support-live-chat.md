---
id: MF-16
title: Support Live Chat
type: main-flow
audience: Non-technical team, Junior mobile developers, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Mobile Lead, Backend Lead, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Approved Mobile Flow Catalogue v1 behavior and approved Phase 1 standalone format
related: SF-05, SF-08, SF-10, MF-04, MF-09, MF-12
generated_from: content/flows/mobile/main/MF-16-support-live-chat.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/mobile/main/MF-16-support-live-chat.md` and rerun `node scripts/generate-flow-docs.js`.

# MF-16 — Support Live Chat

## In plain English

Provides real-time help for account, wallet, payment, task, KYC, and operational issues.

In normal use, user selects issue category, then create/open support chat session, then assign support agent where available, then user and support chat in real time, then support may resolve, create ticket, request evidence, or direct user to report/dispute flow, then close support session. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

Provides real-time help for account, wallet, payment, task, KYC, and operational issues. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

- Authenticated user
- Socket connection
- Support/admin availability
- SF-05 Media Upload
- SF-08 Report / Dispute
- SF-10 Status Recovery / Resume
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
| User opens support or app routes user to support after a blocking issue. | This condition starts MF-16. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Support Live Chat | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Authenticated user | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Socket connection | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Support/admin availability | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-05 Media Upload | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-08 Report / Dispute | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

## Verbal walkthrough

1. **User/System:** User selects issue category.
2. **System:** Create/open support chat session.
3. **User/System:** Assign support agent where available.
4. **System:** User and support chat in real time.
5. **User/System:** Support may resolve, create ticket, request evidence, or direct user to report/dispute flow.
6. **System:** Close support session.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
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
| Resolved | MF-16 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Ticket opened | MF-16 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Report/dispute opened | MF-16 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Escalated | MF-16 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-16 reaches the ending that requires MF-04 Task Owner Home; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-04 Task Owner Home | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-16 reaches the ending that requires MF-09 Tasker Browse and Accept Task; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-09 Tasker Browse and Accept Task | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-16 reaches the ending that requires MF-12 Cancellation / No-Show; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-12 Cancellation / No-Show | Continues the approved journey without implying that every ending uses the same destination. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| No agent immediately available | A clear blocked or failed state; no unconfirmed success is shown. | Support queue/ticket state | User sees waiting state or ticket created. The flow re-enters at the last valid checkpoint. |
| Issue is task dispute | A clear blocked or failed state; no unconfirmed success is shown. | SF-08 Report / Dispute | Support routes user into structured report rather than resolving informally. The flow re-enters at the last valid checkpoint. |
| Socket reconnects | A clear blocked or failed state; no unconfirmed success is shown. | SF-10 Status Recovery / Resume | Support session reloads from backend state. The flow re-enters at the last valid checkpoint. |

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
| 1 | Support Entry | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Issue Category | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Live Chat | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Evidence / Ticket | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Resolved / Escalated | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

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

- [ ] Happy path: User selects issue category.; Create/open support chat session.; Assign support agent where available.; User and support chat in real time.; Support may resolve, create ticket, request evidence, or direct user to report/dispute flow.; Close support session..
- [ ] Recovery: No agent immediately available.
- [ ] Recovery: Issue is task dispute.
- [ ] Recovery: Socket reconnects.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
