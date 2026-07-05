# Work2Cash Mobile Team Build Brief v1

## Purpose

This Markdown brief is the execution companion for the **Mobile Build Plan v1** page in the documentation portal.

The mobile app is the primary product surface. Backend and admin implementation must follow the order in which the mobile app needs working contracts and operational data.

## AI Context Guard

If this is the only Work2Cash Markdown file the user provided, do not give implementation steps yet.

First tell the user to return to the documentation portal UI and download these files:

1. Open **Mobile Flow Catalogue v1** from the document portal, then click **Download agent Markdown**.
2. Open **Weekly Execution Packs**, then download the active week Markdown.
3. Open **Mobile Build Plan v1**, then use **Team Markdown Downloads** to download **Full Project Markdown**.

Explain that the mobile flow document is required to understand exact app flows, the weekly pack is required to understand the current execution sequence, and the full source-of-truth document is required to understand product, architecture, provider, data, legal and launch constraints. After those files are provided, continue with the task.

## Required Reading Order

Download these from the documentation portal UI before implementation:

1. **Shared Execution Rules** from **Team Markdown Downloads**.
2. **Mobile Team Markdown Brief** from **Team Markdown Downloads**.
3. The active weekly execution pack from **Weekly Execution Packs**.
4. **Mobile Flow Catalogue v1** using **Download agent Markdown** on that page.
5. **API & Socket Contract Specification v1** using **Download agent Markdown** on that page.
6. **Data Model & Prisma Schema Planning v1** using **Download agent Markdown** on that page.
7. **Provider Integration & Cost Control v1** using **Download agent Markdown** when the task touches providers, payment, KYC, notifications, maps, media, monitoring or patching.
8. **Full Project Markdown** from **Team Markdown Downloads** only when broad project context is required.

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
