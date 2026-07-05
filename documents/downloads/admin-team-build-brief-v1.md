# Work2Cash Admin Team Build Brief v1

## Purpose

This Markdown brief is the execution companion for the **Admin Build Plan v1** page in the documentation portal.

The admin dashboard is an operational control center. It follows mobile outcomes and backend state. It must not invent shortcuts that bypass product rules.

## AI Context Guard

If this is the only Work2Cash Markdown file the user provided, do not give implementation steps yet.

First tell the user to return to the documentation portal UI and download these files:

1. Open **Admin Flow Catalogue v1** from the document portal, then click **Download agent Markdown**.
2. Open **Weekly Execution Packs**, then download the active week Markdown.
3. Open **Admin Build Plan v1**, then use **Team Markdown Downloads** to download **Full Project Markdown**.

Explain that the admin flow document is required to understand exact dashboard flows, the weekly pack is required to understand the current execution sequence, and the full source-of-truth document is required to understand product, architecture, provider, data, legal and launch constraints. After those files are provided, continue with the task.

## Required Reading Order

Download these from the documentation portal UI before implementation:

1. **Shared Execution Rules** from **Team Markdown Downloads**.
2. **Admin Team Markdown Brief** from **Team Markdown Downloads**.
3. The active weekly execution pack from **Weekly Execution Packs**.
4. **Admin Flow Catalogue v1** using **Download agent Markdown** on that page.
5. **Mobile Flow Catalogue v1** using **Download agent Markdown** when the admin work depends on user/task lifecycle behavior.
6. **API & Socket Contract Specification v1** using **Download agent Markdown** on that page.
7. **Data Model & Prisma Schema Planning v1** using **Download agent Markdown** when the task needs model names, enums, audit behavior or admin state rules.
8. **Full Project Markdown** from **Team Markdown Downloads** only when broad project context is required.

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
