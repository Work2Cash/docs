# Work2Cash Mobile Team Build Brief v1

## Purpose

This Markdown brief is the execution companion for `documents/build-plan-mobile-v1.html`.

The mobile app is the primary product surface. Backend and admin implementation must follow the order in which the mobile app needs working contracts and operational data.

## Required Reading Order

1. `documents/main-enterprise-architecture-v1.html`
2. `documents/mobile-flow-catalogue-v1.html`
3. `documents/api-socket-contract-specification-v1.html`
4. `documents/data-model-prisma-schema-planning-v1.html`
5. `documents/provider-integration-cost-control-v1.html`
6. `documents/build-plan-mobile-v1.html`
7. `documents/qa-go-live-readiness-checklist-v1.html`

## Architecture Rules

- Use Flutter feature-first clean architecture.
- Keep explicit usecase, params, entities, models, repositories, data sources, providers and screens in separate files.
- Use Riverpod for state management, with generated providers/classes where practical.
- Keep each file under 400-500 lines.
- Implement one flow or subflow at a time.
- Do not combine unrelated features in one commit.

## UI State Rules

- GET/fetch operations must show skeletonized versions of the actual view.
- POST/PATCH/critical submit operations must show a blur overlay with a spinning Work2Cash logo.
- Every screen must support loading, empty, error, offline/retry and success states.
- App resume, payment return, KYC return and socket reconnect must refresh from REST source of truth.

## Mobile Flow Order

1. App entry, registration, login and session recovery.
2. Profile, settings, security PIN, device/session management and notification preferences.
3. Task Owner home, Tasker activation, KYC, availability and preferences.
4. Create and fund task with category, location, media and payment.
5. Public discovery, direct offer and Tasker interest/acceptance.
6. Active task execution: Start Journey, I have arrived, Begin Task, chat, tracking and masked call entry.
7. Completion, settlement, cancellation, no-show, reports and task history.
8. Withdrawal, favorites, ratings/reviews and rebook.
9. Support live chat, emergency support and referrals.

## Non-Negotiable Product Rules

- Use `mode`, not `activeMode`.
- Do not add Facebook login.
- Do not design card-entry-first payment flows.
- Do not add dispute live chat. Disputes are structured reports; support live chat is separate.
- Direct offers are REST/FCM driven, not socket-based.
- Sensitive actions use PIN confirmation. OTP is for PIN recovery/contact verification.
- Tasker must update task execution using Start Journey, I have arrived and Begin Task.
- Task Owner wallet cannot withdraw directly.

## Commit Standard

Use focused commits only.

Examples:

```text
feat(mobile-auth): implement login and OTP verification flow
feat(mobile-task): add task location pin confirmation
fix(mobile-payment): recover pending payment status on app resume
test(mobile-task): cover active task status transitions
```

## AI Agent Task Template

```text
Task ID:
Team: Mobile
Flow IDs:
Depends on:
Required documents:
Inputs:
Implementation scope:
Files/modules likely affected:
API/socket dependencies:
Data models needed:
Acceptance criteria:
Tests required:
Do not do:
Commit message:
```
