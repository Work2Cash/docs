# Work2Cash Admin Team Build Brief v1

## Purpose

This Markdown brief is the execution companion for `documents/build-plan-admin-v1.html`.

The admin dashboard is an operational control center. It follows mobile outcomes and backend state. It must not invent shortcuts that bypass product rules.

## Required Reading Order

1. `documents/main-enterprise-architecture-v1.html`
2. `documents/admin-flow-catalogue-v1.html`
3. `documents/mobile-flow-catalogue-v1.html`
4. `documents/api-socket-contract-specification-v1.html`
5. `documents/data-model-prisma-schema-planning-v1.html`
6. `documents/build-plan-admin-v1.html`
7. `documents/qa-go-live-readiness-checklist-v1.html`

## Architecture Rules

- Use a clean feature/module structure for Next.js.
- Separate routes, page views, components, API clients/server actions, domain types and view models.
- Build one admin module at a time.
- Keep files under 400-500 lines.
- Every high-impact action must capture actor, reason, target, requestId and timestamp.
- Every page/action must respect RBAC.

## UI State Rules

- GET/fetch operations must show skeletonized table/detail views.
- POST/PATCH actions must show a blur overlay with a spinning Work2Cash logo.
- Tables must support loading, empty, error, pagination and filter reset states.
- Action modals must include confirmation, reason capture where needed, error state and audit expectation.

## Admin Module Order

1. Admin auth, TOTP and RBAC shell.
2. Dashboard, list/detail primitives and user management.
3. KYC review and request re-verification.
4. Task monitoring and media moderation.
5. Finance, transactions, receipts, ledger and escrow review.
6. Reports, disputes, warning/strike/risk and rating moderation.
7. Payout batches and wallet support.
8. Support live chat, emergency support, announcements, config, audit and monitoring.

## Non-Negotiable Product Rules

- Admin must not reassign tasks under any condition.
- Admin can observe matching and task status, but cannot manually choose a replacement Tasker.
- Controlled force-cancel must be audited and permissioned.
- Task Owner wallet support is handled through support/admin review; Task Owner cannot withdraw directly.
- Disputes/reports are structured. Support live chat is separate.
- No direct database controls in the UI.
- No unguarded exports.

## Commit Standard

Use focused commits only.

Examples:

```text
feat(admin-auth): add TOTP challenge flow
feat(admin-kyc): implement KYC review queue
feat(admin-finance): add payout batch approval screen
fix(admin-task): prevent reassignment action exposure
```

## AI Agent Task Template

```text
Task ID:
Team: Admin Frontend
Admin flow IDs:
Depends on:
Required documents:
Implementation scope:
Routes/modules likely affected:
API dependencies:
RBAC permissions:
Audit requirements:
Acceptance criteria:
Tests required:
Do not do:
Commit message:
```
