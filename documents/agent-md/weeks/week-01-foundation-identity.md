# Work2Cash Week 1 - Foundation, Identity And Contract Availability

## Purpose

This is the focused AI-agent execution pack for Week 1 of the Work2Cash build plan.

Use this file with:

- `../downloads/shared-ai-agent-execution-rules-v1.md`
- the relevant team brief in `../downloads/`
- the specific contract/model/provider Markdown document needed for the task

Do not load the full HTML documents for normal implementation work.

## Dates

- Start: Mon 6 Jul 2026
- End: Fri 10 Jul 2026
- Build model: 8 weeks development + 2 weeks testing

## Week Goal

Create the shared project foundations and unblock mobile/admin with stable auth, profile, PIN, session, admin auth and dashboard contracts.

## Week Exit Condition

Mobile can complete app entry/auth/profile shell; admin can enter protected dashboard shell; backend has stable response/error shapes and OpenAPI shell.

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
| W1D1 | Mon 6 Jul 2026 | Project setup, architecture, design system | Create Flutter feature-first structure, app shell, routing, environment config, design tokens, shared loading/error widgets. | None beyond health/version stubs. | Commit app foundation only. |
| W1D2 | Tue 7 Jul 2026 | First launch and onboarding | Implement splash, first launch decision, app update check placeholder, onboarding entry, auth route guards. | /version, /me stub. | No task features yet. |
| W1D3 | Wed 8 Jul 2026 | Registration and login | Implement email/phone registration, login, OTP screens, Google/Apple entry points, password recovery screens. | /auth/register, /auth/login, /auth/otp/send, /auth/otp/verify, /auth/social/google, /auth/social/apple. | Facebook excluded. |
| W1D4 | Thu 9 Jul 2026 | Profile, mode, PIN, sessions | Implement complete profile, mode switch, PIN setup/verify/reset, device/session management. | /me, /me/profile, /me/mode, /me/security-pin/*, /me/sessions. | Use the accepted mode field consistently. |
| W1D5 | Fri 10 Jul 2026 | Task Owner home and notification shell | Implement Task Owner home, notification center shell, skeleton states, empty states, app-wide POST/PATCH blur overlay. | /notifications, /me/notification-preferences. | Home can use mock/stub task summaries until task APIs land. |


## Backend Tasks

| Day | Date | Workstream | Execution Scope | Dependency | Commit / Output Rule |
| --- | --- | --- | --- | --- | --- |
| W1D1 | Mon 6 Jul 2026 | Repo foundation and contracts | Create NestJS hexagonal structure, Prisma baseline, response/error shapes, OpenAPI shell, health/version endpoints. | Unblocks mobile/admin scaffolding. | docs(backend): publish initial API contract shell |
| W1D2 | Tue 7 Jul 2026 | Auth contract stubs | Implement auth/profile/PIN/session DTOs and stub handlers with stable response shapes. | Unblocks mobile auth screens. | feat(auth): add auth contract stubs |
| W1D3 | Wed 8 Jul 2026 | Auth implementation | Implement register, login, OTP email-first/SMS fallback, refresh rotation, social auth adapter shell. | Supports mobile registration/login. | feat(auth): implement registration and login |
| W1D4 | Thu 9 Jul 2026 | Profile, mode, PIN, sessions | Implement /me, profile update, mode, PIN setup/verify/reset, device/session revoke. | Supports mobile profile/security. | feat(identity): implement profile pin and sessions |
| W1D5 | Fri 10 Jul 2026 | Admin auth and dashboard stubs | Implement admin auth/TOTP stubs, dashboard summary stub, RBAC model seed. | Unblocks admin shell. | feat(admin): add auth and dashboard stubs |


## Admin Tasks

| Day | Date | Workstream | Execution Scope | Dependency | Output Rule |
| --- | --- | --- | --- | --- | --- |
| W1D1 | Mon 6 Jul 2026 | Admin project foundation | Create Next.js structure, auth layout, design tokens, table/detail/action modal primitives. | None | Follow Work2Cash design system. |
| W1D2 | Tue 7 Jul 2026 | Admin auth shell | Implement login, TOTP challenge, session guard, protected layout. | /admin/auth/login, /admin/auth/totp/verify. | Depends on backend admin auth stubs. |
| W1D3 | Wed 8 Jul 2026 | Dashboard shell | Implement dashboard layout with empty/skeleton cards for users, KYC, tasks, finance and use-case health. | /admin/dashboard stub. | No fake operational decisions. |
| W1D4 | Thu 9 Jul 2026 | RBAC UI primitives | Implement permission gate, forbidden state, reason/audit confirmation modal. | /admin/roles, /admin/permissions stubs. | Used by all admin flows. |
| W1D5 | Fri 10 Jul 2026 | List/detail primitives | Implement reusable list, search, filter, pagination, detail panel and export placeholder. | Shared list/detail response shape. | Foundation for AF-03 to AF-24. |


## Cross-Team Dependency Rule

Mobile controls implementation order. Backend must publish contracts/stubs before mobile needs them. Admin follows the operational data created by mobile flows and persisted by backend.

## AI Agent Prompt Template

```text
Read these Markdown files only:
- documents/downloads/shared-ai-agent-execution-rules-v1.md
- documents/downloads/[team]-team-build-brief-v1.md
- documents/agent-md/weeks/week-01-foundation-identity.md
- documents/agent-md/[specific-source-document].md

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
