# Work2Cash Week 2 - Tasker Activation, Task Creation And Funding

## Purpose

This is the focused AI-agent execution pack for Week 2 of the Work2Cash build plan.

Before using this weekly pack with Codex or any AI agent, download the required Markdown files from the documentation portal UI.

Use this file with:

- **AGENTS.md Usage Guide** from **Team Markdown Downloads**.
- **Shared Execution Rules** from **Team Markdown Downloads**.
- The relevant team brief from **Team Markdown Downloads**.
- The relevant flow catalogue from its portal page using **Download agent Markdown**.
- **Full Project Markdown** from **Team Markdown Downloads** when broad context is required.
- Any specific contract, model, provider or source document needed for the task using **Download agent Markdown** on that document page.

Do not load the full HTML documents for normal implementation work.

## Dates

- Start: Mon 13 Jul 2026
- End: Fri 17 Jul 2026
- Build model: 8 weeks development + 2 weeks testing

## Week Goal

Build the flows that allow Taskers to become eligible and Task Owners to create, locate, upload proof for and fund tasks.

## Week Exit Condition

Tasker activation/KYC, task catalog, task draft, location, media, payment intent and broadcast/direct offer contracts are usable on staging.

## Non-Negotiable Rules For This Week

- Use `mode`, not `activeMode`.
- Do not introduce Facebook login.
- Do not introduce card-entry-first payment flows.
- Do not create admin task reassignment.
- Direct offers remain REST/FCM driven, not socket-based.
- Durable task/payment/KYC/wallet state must be REST/database-backed.
- Sensitive actions use PIN confirmation; OTP is for PIN recovery/contact verification.
- Keep commits feature by feature or fix by fix.

## Mobile Tasks

| Day | Date | Workstream | Execution Scope | Dependency | Output Rule |
| --- | --- | --- | --- | --- | --- |
| W2D1 | Mon 13 Jul 2026 | Tasker activation and KYC | Implement Tasker activation entry, profile setup, KYC NIN/BVN/face capture screens, KYC status polling/recovery. | /tasker/profile, /kyc/start, /kyc/nin-bvn, /kyc/face-capture, /kyc/status. | Tasker cannot browse/accept before approved state. |
| W2D2 | Tue 14 Jul 2026 | Catalog and task draft | Implement category/type selection, task description, amount, required arrival time and draft saving. | /catalog/categories, /catalog/task-types, /task-owner/tasks/drafts. | Launch categories: Home, Errands, Office, Support. |
| W2D3 | Wed 15 Jul 2026 | Location and media | Implement GPS/manual address, geocode, pin confirmation, permission recovery, proof media upload UI. | /location/geocode, /location/confirm-pin, /task-owner/tasks/{taskId}/media. | Task site must be in Nigeria. |
| W2D4 | Thu 16 Jul 2026 | Payment and escrow funding | Implement payment review, task amount + fee breakdown, Paystack/Moniepoint redirect/status, payment pending/recovery. | /payment-intent, /payments/verify, task status endpoint. | Do not mark paid from redirect alone. |
| W2D5 | Fri 17 Jul 2026 | Broadcast and direct offer | Implement funded task publish, favorites entry, direct offer send path, offer pending/expired states. | /broadcast, /favorites/taskers, /direct-offers. | Direct offers are REST/FCM, not socket-based. |


## Backend Tasks

| Day | Date | Workstream | Execution Scope | Dependency | Commit / Output Rule |
| --- | --- | --- | --- | --- | --- |
| W2D1 | Mon 13 Jul 2026 | Tasker/KYC APIs | Implement TaskerProfile, KYC use cases, Smile ID adapter shell, KYC status and admin re-verification. | Unblocks mobile Tasker activation/admin KYC. | feat(kyc): implement tasker activation contracts |
| W2D2 | Tue 14 Jul 2026 | Catalog/task draft APIs | Implement categories/types, task draft, amount validation, required arrival time. | Unblocks mobile task creation. | feat(tasks): implement catalog and task draft |
| W2D3 | Wed 15 Jul 2026 | Location/media APIs | Implement geocode, pin confirmation, task site Nigeria validation, media signed upload/finalize. | Unblocks mobile location/proof. | feat(tasks): implement location and media contracts |
| W2D4 | Thu 16 Jul 2026 | Payment/escrow APIs | Implement payment intent, verify, Paystack/Moniepoint adapter shell, ProviderWebhookEvent, escrow creation. | Unblocks mobile funding. | feat(payments): implement payment and escrow foundation |
| W2D5 | Fri 17 Jul 2026 | Broadcast/direct offer APIs | Implement broadcast, favorites, direct offers, FCM notification job shell. | Unblocks mobile discovery/direct offer. | feat(matching): implement broadcast and direct offers |


## Admin Tasks

| Day | Date | Workstream | Execution Scope | Dependency | Output Rule |
| --- | --- | --- | --- | --- | --- |
| W2D1 | Mon 13 Jul 2026 | User management | Implement user list/detail with profile, mode, wallets summary, sessions, risk summary. | /admin/users, /admin/users/{userId}. | Consumes data from mobile auth/profile. |
| W2D2 | Tue 14 Jul 2026 | KYC review | Implement KYC queues, Tasker detail, approve/reject/request re-verification UI. | /admin/kyc/*, /admin/users/{userId}. | Consumes mobile Tasker activation/KYC outcomes. |
| W2D3 | Wed 15 Jul 2026 | Catalog management | Implement categories/types list, create/edit, disable/archive, audit reason. | /admin/catalog/categories. | Supports mobile task creation. |
| W2D4 | Thu 16 Jul 2026 | Task monitor foundation | Implement task list/detail shell with status, owner, tasker, payment, location and media placeholders. | /admin/tasks, /admin/tasks/{taskId}. | Consumes mobile task draft/payment/media states. |
| W2D5 | Fri 17 Jul 2026 | Media moderation | Implement media review, remove/reject reason and audit action. | Task media/admin moderation endpoints. | Supports proof media governance. |


## Cross-Team Dependency Rule

Mobile controls implementation order. Backend must publish contracts/stubs before mobile needs them. Admin follows the operational data created by mobile flows and persisted by backend.

## AI Agent Prompt Template

```text
Read these Markdown files downloaded from the documentation portal UI only:
- Shared Execution Rules
- [Team] Team Markdown Brief
- This weekly execution pack
- [Specific source document downloaded from its portal page]

Do not read HTML files unless I explicitly provide a section.

Task ID:
Team:
Week:
Day:
Flow/use case/module:
Implementation scope:
Acceptance criteria:
Tests required:
Do not do:
Commit message:
```
