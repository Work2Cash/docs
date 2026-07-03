# Work2Cash Backend Team Build Brief v1

## Purpose

This Markdown brief is the execution companion for `documents/build-plan-backend-v1.html`.

Backend delivery is mobile-led and contract-first. Publish stable DTOs, response shapes, OpenAPI paths, socket event names and stubs early, then replace stubs with real use cases without breaking mobile/admin integration.

## Required Reading Order

1. `documents/main-enterprise-architecture-v1.html`
2. `documents/api-socket-contract-specification-v1.html`
3. `documents/data-model-prisma-schema-planning-v1.html`
4. `documents/provider-integration-cost-control-v1.html`
5. `documents/mobile-flow-catalogue-v1.html`
6. `documents/admin-flow-catalogue-v1.html`
7. `documents/build-plan-backend-v1.html`
8. `documents/qa-go-live-readiness-checklist-v1.html`

## Architecture Rules

- Use NestJS with Hexagonal Architecture.
- Controllers, socket gateways and workers stay thin.
- Use cases own business rules.
- Ports define infrastructure boundaries.
- Prisma repositories, provider SDKs, queues, notification clients and storage clients stay in adapters.
- Every use case must record last used, success/failure, duration and error code for the use-case health dashboard.
- Keep files under 400-500 lines.

## Backend Delivery Order

1. Response/error shapes, OpenAPI shell, health/version, auth/profile/PIN/session stubs.
2. Auth implementation, OTP email-first/SMS fallback, Google/Apple auth, profile, `mode`, PIN and sessions.
3. Tasker profile, KYC, catalog, task draft, geocode, pin confirmation and media upload.
4. Paystack/Moniepoint payment intent, webhooks, escrow and broadcast/direct offer.
5. Task discovery, Tasker interest, Task Owner selection and rejection logging.
6. Task execution states: Start Journey, arrived, begin, chat, tracking and ETA guard.
7. Completion, settlement, cancellation, reports, warning/strike, ratings, favorites and rebook.
8. Wallet, ledger, withdrawal, payout batch, support, emergency support and admin operational APIs.

## Non-Negotiable Product Rules

- Use `mode`, not `activeMode`.
- Do not create any admin reassignment endpoint.
- Direct offers are REST/FCM, not socket-based.
- Durable task state transitions are REST/database-backed.
- Socket.IO is for chat, support live chat, tracking and presence.
- Payment redirect is not final proof. Trust provider webhooks/status verification.
- Wallet changes must have ledger entries and idempotency.
- Google Maps ETA uses 5-minute guard plus next 10% total-journey milestone.
- Sensitive actions use PIN confirmation. OTP is for PIN recovery/contact verification.

## Provider Rules

- Paystack and Moniepoint are the only launch payment providers.
- Smile ID handles KYC.
- Termii is SMS fallback.
- FCM handles push notifications.
- Sentry captures sanitized errors.
- Shorebird is used for Flutter patch readiness.
- Masked calls can remain disabled if provider validation is incomplete.

## Commit Standard

Use focused commits only.

Examples:

```text
feat(auth): implement email-first otp login
feat(tasks): add task execution state transitions
feat(payments): handle moniepoint webhook idempotency
fix(wallet): prevent duplicate escrow release
test(tasks): cover tasker arrived and begin guards
```

## AI Agent Task Template

```text
Task ID:
Team: Backend
Use case IDs:
Depends on:
Required documents:
Implementation scope:
Modules likely affected:
DTOs/events/queues needed:
Data models/migrations needed:
Provider dependencies:
Acceptance criteria:
Tests required:
Do not do:
Commit message:
```
