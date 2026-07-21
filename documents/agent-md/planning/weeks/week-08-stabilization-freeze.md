# Work2Cash Week 8 — Stabilization, Go-Live Rehearsal and Build Freeze

> Junior-developer overview. Open your team weekly Markdown for all five days and the agent instructions embedded under each day.

## Week outcome

Complete the final defect pass, go-live rehearsal, documentation handover and controlled build freeze before formal testing starts.

## Before the week starts

The same team's Week 7 exit result is accepted or any carry-over is explicitly recorded.

This numbered week is a position inside each team's plan. The approved delivery order still applies: Admin construction, Mobile and Backend construction, Admin Integration, then cross-platform hardening.

## Day 1 of 5 — Monday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W8D1 — Stabilization sprint](admin/week-08-stabilization-freeze.md#day-1-of-5) | Apply approved admin release-candidate fixes only. | `feat(admin): stabilization sprint` |
| Backend | [BE-W8D1 — Stabilization sprint](backend/week-08-stabilization-freeze.md#day-1-of-5) | Apply approved release-candidate fixes only. | `fix(release): resolve approved rc defects` |
| Mobile | [MOB-W8D1 — Stabilization sprint](mobile/week-08-stabilization-freeze.md#day-1-of-5) | Apply approved release-candidate fixes and polish only. | `feat(mobile): stabilization sprint` |

## Day 2 of 5 — Tuesday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W8D2 — Final admin defect pass](admin/week-08-stabilization-freeze.md#day-2-of-5) | Re-test fixed defects and critical admin flows. | `feat(admin): final admin defect pass` |
| Backend | [BE-W8D2 — Final backend defect pass](backend/week-08-stabilization-freeze.md#day-2-of-5) | Re-test fixed defects, run migrations, queues, sockets, webhooks and financial consistency checks. | `test(release): verify backend critical paths` |
| Mobile | [MOB-W8D2 — Final defect pass](mobile/week-08-stabilization-freeze.md#day-2-of-5) | Re-test fixed defects and run critical mobile happy paths. | `feat(mobile): final defect pass` |

## Day 3 of 5 — Wednesday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W8D3 — Go-live rehearsal](admin/week-08-stabilization-freeze.md#day-3-of-5) | Run admin operations exactly as launch support and operations team will use them. | `feat(admin): go live rehearsal` |
| Backend | [BE-W8D3 — Go-live rehearsal](backend/week-08-stabilization-freeze.md#day-3-of-5) | Run production-style deployment rehearsal, rollback rehearsal, backup restore proof and provider smoke tests. | `chore(release): run go live rehearsal` |
| Mobile | [MOB-W8D3 — Go-live rehearsal](mobile/week-08-stabilization-freeze.md#day-3-of-5) | Run Task Owner, Tasker and support journeys exactly as launch users will experience them. | `feat(mobile): go live rehearsal` |

## Day 4 of 5 — Thursday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W8D4 — Admin handover](admin/week-08-stabilization-freeze.md#day-4-of-5) | Confirm role permissions, runbooks, support notes, payout notes and moderation notes. | `feat(admin): admin handover` |
| Backend | [BE-W8D4 — Backend handover](backend/week-08-stabilization-freeze.md#day-4-of-5) | Finalize runbooks, env checklist, provider escalation notes, monitoring alerts and support handover. | `docs(ops): finalize backend handover` |
| Mobile | [MOB-W8D4 — Handover and store readiness](mobile/week-08-stabilization-freeze.md#day-4-of-5) | Confirm legal/help links, app permissions, screenshots/test notes and support handover notes. | `feat(mobile): handover and store readiness` |

## Day 5 of 5 — Friday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W8D5 — Admin build freeze](admin/week-08-stabilization-freeze.md#day-5-of-5) | Freeze admin build for formal testing weeks. | `feat(admin): admin build freeze` |
| Backend | [BE-W8D5 — Backend build freeze](backend/week-08-stabilization-freeze.md#day-5-of-5) | Freeze backend build for formal testing weeks. | `chore(release): freeze backend build` |
| Mobile | [MOB-W8D5 — Build freeze](mobile/week-08-stabilization-freeze.md#day-5-of-5) | Freeze mobile build for formal testing weeks. | `feat(mobile): build freeze` |

## End-of-week result

Builds are frozen for the two-week testing window. Only blocker fixes are allowed after this point.

- Demonstrate the working result and one failure/recovery path.
- Record tests and commit identifiers for completed days.
- Carry unfinished work on the original task; do not duplicate it.
