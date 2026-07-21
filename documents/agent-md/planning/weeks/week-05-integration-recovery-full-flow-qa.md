# Work2Cash Week 5 — Operational Integration, Recovery and Full-Flow QA

> Junior-developer overview. Open your team weekly Markdown for all five days and the agent instructions embedded under each day.

## Week outcome

Complete secondary flows, operational admin coverage, provider validation, recovery behavior and end-to-end flow QA.

## Before the week starts

The same team's Week 4 exit result is accepted or any carry-over is explicitly recorded.

This numbered week is a position inside each team's plan. The approved delivery order still applies: Admin construction, Mobile and Backend construction, Admin Integration, then cross-platform hardening.

## Day 1 of 5 — Monday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W5D1 — Wallet/refund support](admin/week-05-integration-recovery-full-flow-qa.md#day-1-of-5) | Implement wallet support flow for Task Owner excess funds and Tasker payout holds. | `feat(admin): wallet refund support` |
| Backend | [BE-W5D1 — Admin operational APIs](backend/week-05-integration-recovery-full-flow-qa.md#day-1-of-5) | Implement admin users, tasks, finance, reports, media, ratings, config APIs. | `feat(admin): implement operational APIs` |
| Mobile | [MOB-W5D1 — Settings and notification preferences](mobile/week-05-integration-recovery-full-flow-qa.md#day-1-of-5) | Complete settings, notification preferences, session revoke, security copy, critical notification rules. | `feat(mobile): settings and notification preferences` |

## Day 2 of 5 — Tuesday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W5D2 — Notifications/announcements](admin/week-05-integration-recovery-full-flow-qa.md#day-2-of-5) | Implement announcement composer and channel selection. | `feat(admin): notifications announcements` |
| Backend | [BE-W5D2 — Referral and notification APIs](backend/week-05-integration-recovery-full-flow-qa.md#day-2-of-5) | Implement referral reward tracking, notifications list/read, announcements. | `feat(growth): implement referral and notifications` |
| Mobile | [MOB-W5D2 — Referral and rebook](mobile/week-05-integration-recovery-full-flow-qa.md#day-2-of-5) | Implement referral code/share/pending reward, rebook from completed task, direct offer/public repost path. | `feat(mobile): referral and rebook` |

## Day 3 of 5 — Wednesday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W5D3 — Remote config and coverage](admin/week-05-integration-recovery-full-flow-qa.md#day-3-of-5) | Implement platform config, ETA guard, media size, payout dates and coverage controls. | `feat(admin): remote config and coverage` |
| Backend | [BE-W5D3 — Provider hardening](backend/week-05-integration-recovery-full-flow-qa.md#day-3-of-5) | Validate Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, object storage in staging. | `fix(providers): harden staging integrations` |
| Mobile | [MOB-W5D3 — Offline/recovery polish](mobile/week-05-integration-recovery-full-flow-qa.md#day-3-of-5) | Implement app resume recovery, socket reconnect recovery, payment/KYC return recovery, consistent empty/error/offline states. | `feat(mobile): offline recovery polish` |

## Day 4 of 5 — Thursday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W5D4 — Use-case health and monitoring](admin/week-05-integration-recovery-full-flow-qa.md#day-4-of-5) | Implement use-case health, queue/provider status, backup status screens. | `feat(admin): use case health and monitoring` |
| Backend | [BE-W5D4 — Operations/monitoring](backend/week-05-integration-recovery-full-flow-qa.md#day-4-of-5) | Implement use-case health, queue audit, provider request logs, metrics, backup status. | `feat(ops): implement use case health and monitoring` |
| Mobile | [MOB-W5D4 — Provider integration QA](mobile/week-05-integration-recovery-full-flow-qa.md#day-4-of-5) | Run integrated tests against staging providers, FCM, payment sandbox, KYC sandbox, map/geocode and media upload. | `feat(mobile): provider integration qa` |

## Day 5 of 5 — Friday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W5D5 — Audit logs and analytics](admin/week-05-integration-recovery-full-flow-qa.md#day-5-of-5) | Implement audit log review and basic operational analytics/reports. | `feat(admin): audit logs and analytics` |
| Backend | [BE-W5D5 — Integrated defect pass](backend/week-05-integration-recovery-full-flow-qa.md#day-5-of-5) | Fix defects from mobile/admin full-flow QA, contract mismatches, state recovery issues. | `fix(integration): resolve full flow defects` |
| Mobile | [MOB-W5D5 — Full mobile flow QA](mobile/week-05-integration-recovery-full-flow-qa.md#day-5-of-5) | Run happy path and exception path for all mobile flows MF-01 to MF-24. | `feat(mobile): full mobile flow qa` |

## End-of-week result

All planned flows have working happy paths and documented exception paths on staging with defect lists by flow or module.

- Demonstrate the working result and one failure/recovery path.
- Record tests and commit identifiers for completed days.
- Carry unfinished work on the original task; do not duplicate it.
