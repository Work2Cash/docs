# Work2Cash Shared AI Agent Execution Rules v1

## Purpose

Use this file when giving work to Codex or any other AI coding agent. It applies to mobile, admin and backend implementation.

## Source Of Truth

The Main Enterprise Architecture document is the controlling baseline. If another document appears to conflict with it, stop and ask for clarification before implementation.

## General Rules

- Work flow by flow, feature by feature or fix by fix.
- Do not stack unrelated changes in one commit.
- Do not rename business concepts without approval.
- Do not introduce undocumented product behavior.
- Do not store secrets, credentials, OTPs, private user data, KYC payloads, payment payloads or real phone numbers in docs, tests or logs.
- Keep files under 400-500 lines where practical.
- Add tests proportional to risk and blast radius.

## Required Product Decisions

- Nigeria-only launch.
- Task categories: Home, Errands, Office, Support.
- User can be Task Owner and Tasker.
- Use `mode` for current role context.
- Task Owner and Tasker wallets are separate.
- Task Owner cannot withdraw directly.
- Tasker withdrawals are batched on the 14th and 28th.
- Payment providers: Paystack and Moniepoint.
- KYC provider: Smile ID.
- SMS provider: Termii.
- Push provider: FCM.
- Error monitoring: Sentry.
- Remote config lives in admin dashboard.
- Admin TOTP 2FA and RBAC are required.

## Forbidden Assumptions

- Do not add Facebook login.
- Do not add card-entry-first payment UX.
- Do not add admin task reassignment.
- Do not make direct offers socket-based.
- Do not make disputes live chat.
- Do not treat payment redirect as final payment confirmation.
- Do not expose exact addresses or full proof media publicly.
- Do not expose real phone numbers.
- Do not create paid provider auto-refresh loops.

## Standard AI Task Block

```text
Task ID:
Team:
Flow/use case/module:
Depends on:
Required documents:
Implementation scope:
Files likely affected:
API/socket/model/provider dependencies:
Acceptance criteria:
Tests required:
Do not do:
Commit message:
```
