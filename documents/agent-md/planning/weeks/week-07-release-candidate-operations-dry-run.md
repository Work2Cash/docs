# Work2Cash Week 7 — Release Candidate Preparation and Operational Dry Runs

> Junior-developer overview. Open your team weekly Markdown for all five days and the agent instructions embedded under each day.

## Week outcome

Prepare Mobile, Admin and Backend release candidates while running provider, payout, monitoring, backup and support dry runs.

## Before the week starts

The same team's Week 6 exit result is accepted or any carry-over is explicitly recorded.

This numbered week is a position inside each team's plan. The approved delivery order still applies: Admin construction, Mobile and Backend construction, Admin Integration, then cross-platform hardening.

## Day 1 of 5 — Monday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W7D1 — Admin release candidate preparation](admin/week-07-release-candidate-operations-dry-run.md#day-1-of-5) | Prepare protected admin build, environment config and deployment checklist. | `feat(admin): admin release candidate preparation` |
| Backend | [BE-W7D1 — Release candidate backend preparation](backend/week-07-release-candidate-operations-dry-run.md#day-1-of-5) | Freeze API contracts, generate OpenAPI, migration notes and environment checklist. | `chore(release): prepare backend release candidate` |
| Mobile | [MOB-W7D1 — Release candidate preparation](mobile/week-07-release-candidate-operations-dry-run.md#day-1-of-5) | Prepare Android release candidate configuration, app icon/name/package, permissions and environment mapping. | `feat(mobile): release candidate preparation` |

## Day 2 of 5 — Tuesday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W7D2 — Finance and payout dry run](admin/week-07-release-candidate-operations-dry-run.md#day-2-of-5) | Run withdrawal queue, payout batch creation/approval/process and partial failure handling. | `feat(admin): finance and payout dry run` |
| Backend | [BE-W7D2 — Backup and restore dry run](backend/week-07-release-candidate-operations-dry-run.md#day-2-of-5) | Run Postgres backup, object storage upload, restore to staging/temp database and evidence capture. | `chore(ops): prove backup restore flow` |
| Mobile | [MOB-W7D2 — Device matrix QA](mobile/week-07-release-candidate-operations-dry-run.md#day-2-of-5) | Test priority Android devices, small screens, low memory, poor network and background app-kill recovery. | `feat(mobile): device matrix qa` |

## Day 3 of 5 — Wednesday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W7D3 — Support and operations dry run](admin/week-07-release-candidate-operations-dry-run.md#day-3-of-5) | Run support live chat, emergency support, reports, KYC review and wallet-support operations. | `feat(admin): support and operations dry run` |
| Backend | [BE-W7D3 — Payout and finance dry run](backend/week-07-release-candidate-operations-dry-run.md#day-3-of-5) | Run payout batch, ledger consistency, reconciliation, failed/partial transfer and disputed Tasker exclusion tests. | `test(finance): validate payout batch dry run` |
| Mobile | [MOB-W7D3 — Operations dry run support](mobile/week-07-release-candidate-operations-dry-run.md#day-3-of-5) | Validate mobile behavior for support live chat, emergency support, reports, payout status and admin-driven outcomes. | `feat(mobile): operations dry run support` |

## Day 4 of 5 — Thursday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W7D4 — Monitoring and config validation](admin/week-07-release-candidate-operations-dry-run.md#day-4-of-5) | Validate use-case health, queue/provider status, remote config, coverage and audit log visibility. | `feat(admin): monitoring and config validation` |
| Backend | [BE-W7D4 — Provider validation report](backend/week-07-release-candidate-operations-dry-run.md#day-4-of-5) | Finalize Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, storage and Shorebird evidence. | `docs(providers): publish validation report` |
| Mobile | [MOB-W7D4 — Provider validation support](mobile/week-07-release-candidate-operations-dry-run.md#day-4-of-5) | Run payment, KYC, maps, FCM, media and Sentry validation from mobile side. | `feat(mobile): provider validation support` |

## Day 5 of 5 — Friday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W7D5 — Admin release candidate](admin/week-07-release-candidate-operations-dry-run.md#day-5-of-5) | Generate admin release candidate and handover notes for QA testing. | `feat(admin): admin release candidate` |
| Backend | [BE-W7D5 — Backend release candidate](backend/week-07-release-candidate-operations-dry-run.md#day-5-of-5) | Tag backend release candidate and hand over to formal QA. | `chore(release): tag backend release candidate` |
| Mobile | [MOB-W7D5 — Mobile release candidate](mobile/week-07-release-candidate-operations-dry-run.md#day-5-of-5) | Generate release candidate build and handover notes for QA testing. | `feat(mobile): mobile release candidate` |

## End-of-week result

Release candidates are available on staging with provider-validation evidence, backup-restore proof and operational handover notes.

- Demonstrate the working result and one failure/recovery path.
- Record tests and commit identifiers for completed days.
- Carry unfinished work on the original task; do not duplicate it.
