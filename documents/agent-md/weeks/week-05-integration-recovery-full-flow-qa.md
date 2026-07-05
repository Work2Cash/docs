# Work2Cash Week 5 - Operational Integration, Recovery And Full Flow QA

## Purpose

This is the focused AI-agent execution pack for Week 5 of the Work2Cash build plan.

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

- Start: Mon 3 Aug 2026
- End: Fri 7 Aug 2026
- Build model: 8 weeks development + 2 weeks testing

## Week Goal

Complete secondary flows, operational admin coverage, provider validation, recovery behavior and end-to-end flow QA.

## Week Exit Condition

All planned flows have working happy paths and documented exception paths on staging with defect lists by flow/module.

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
| W5D1 | Mon 3 Aug 2026 | Settings and notification preferences | Complete settings, notification preferences, session revoke, security copy, critical notification rules. | /me/notification-preferences, /me/sessions. | Sensitive actions require PIN. |
| W5D2 | Tue 4 Aug 2026 | Referral and rebook | Implement referral code/share/pending reward, rebook from completed task, direct offer/public repost path. | Referral endpoints, /rebook, /payment-intent, /direct-offers. | Reward after referred user completes 5 paid tasks. |
| W5D3 | Wed 5 Aug 2026 | Offline/recovery polish | Implement app resume recovery, socket reconnect recovery, payment/KYC return recovery, consistent empty/error/offline states. | /me plus active task/payment/KYC/report status endpoints. | No flow depends only on local memory. |
| W5D4 | Thu 6 Aug 2026 | Provider integration QA | Run integrated tests against staging providers, FCM, payment sandbox, KYC sandbox, map/geocode and media upload. | All provider staging endpoints. | Capture issues for backend/provider hardening. |
| W5D5 | Fri 7 Aug 2026 | Full mobile flow QA | Run happy path and exception path for all mobile flows MF-01 to MF-24. | All mobile API/socket contracts. | Create defect list by flow ID. |


## Backend Tasks

| Day | Date | Workstream | Execution Scope | Dependency | Commit / Output Rule |
| --- | --- | --- | --- | --- | --- |
| W5D1 | Mon 3 Aug 2026 | Admin operational APIs | Implement admin users, tasks, finance, reports, media, ratings, config APIs. | Unblocks admin complete modules. | feat(admin): implement operational APIs |
| W5D2 | Tue 4 Aug 2026 | Referral and notification APIs | Implement referral reward tracking, notifications list/read, announcements. | Unblocks mobile referral/admin announcements. | feat(growth): implement referral and notifications |
| W5D3 | Wed 5 Aug 2026 | Provider hardening | Validate Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, object storage in staging. | Unblocks provider QA. | fix(providers): harden staging integrations |
| W5D4 | Thu 6 Aug 2026 | Operations/monitoring | Implement use-case health, queue audit, provider request logs, metrics, backup status. | Unblocks admin monitoring. | feat(ops): implement use case health and monitoring |
| W5D5 | Fri 7 Aug 2026 | Integrated defect pass | Fix defects from mobile/admin full-flow QA, contract mismatches, state recovery issues. | All teams integration. | fix(integration): resolve full flow defects |


## Admin Tasks

| Day | Date | Workstream | Execution Scope | Dependency | Output Rule |
| --- | --- | --- | --- | --- | --- |
| W5D1 | Mon 3 Aug 2026 | Wallet/refund support | Implement wallet support flow for Task Owner excess funds and Tasker payout holds. | /wallets/{id}/ledger, finance/support endpoints. | Task Owner cannot withdraw directly. |
| W5D2 | Tue 4 Aug 2026 | Notifications/announcements | Implement announcement composer and channel selection. | /admin/announcements. | Critical SMS only; FCM/in-app primary. |
| W5D3 | Wed 5 Aug 2026 | Remote config and coverage | Implement platform config, ETA guard, media size, payout dates and coverage controls. | /admin/config. | All changes audited. |
| W5D4 | Thu 6 Aug 2026 | Use-case health and monitoring | Implement use-case health, queue/provider status, backup status screens. | /admin/use-case-health, /health, /ready, /metrics. | Supports backend health visibility. |
| W5D5 | Fri 7 Aug 2026 | Audit logs and analytics | Implement audit log review and basic operational analytics/reports. | /admin/audit-logs, dashboard/analytics endpoints. | Advanced analytics remain deferred. |


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
