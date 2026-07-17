# Work2Cash Week 4 — Completion, Exceptions, Trust and Finance

> Junior-developer overview. Open your team weekly Markdown for all five days and the agent instructions embedded under each day.

## Week outcome

Close the task lifecycle with completion, settlement, cancellation, no-show, reports, ratings, favorites, wallet, withdrawal and support.

## Before the week starts

The same team's Week 3 exit result is accepted or any carry-over is explicitly recorded.

This numbered week is a position inside each team's plan. The approved delivery order still applies: Admin construction, Mobile and Backend construction, Admin Integration, then cross-platform hardening.

## Day 1 of 5 — Monday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W4D1 — Reports/disputes](admin/week-04-completion-finance-support.md#day-1-of-5) | Implement reports queue/detail, linked task evidence, decision actions. | `feat(admin): reports disputes` |
| Backend | [BE-W4D1 — Completion/settlement](backend/week-04-completion-finance-support.md#day-1-of-5) | Implement completion proof, request completion, confirm completion, commission snapshot, escrow release/hold. | `feat(settlement): implement completion and escrow release` |
| Mobile | [MOB-W4D1 — Completion and settlement](mobile/week-04-completion-finance-support.md#day-1-of-5) | Implement completion proof upload, request completion, Task Owner approval, settlement pending/held states. | `feat(mobile): completion and settlement` |

## Day 2 of 5 — Tuesday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W4D2 — Risk/warning/strike](admin/week-04-completion-finance-support.md#day-2-of-5) | Implement warning/strike history, trust impact and suspension action with audit. | `feat(admin): risk warning strike` |
| Backend | [BE-W4D2 — Cancellation/reports](backend/week-04-completion-finance-support.md#day-2-of-5) | Implement cancellation, no-show, reports, warning/strike, settlement hold use cases. | `feat(risk): implement cancellation reports and penalties` |
| Mobile | [MOB-W4D2 — Cancellation, no-show, report](mobile/week-04-completion-finance-support.md#day-2-of-5) | Implement cancellation/no-show flows, warning/strike messaging, report/dispute creation and status. | `feat(mobile): cancellation no show report` |

## Day 3 of 5 — Wednesday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W4D3 — Ratings/reviews moderation](admin/week-04-completion-finance-support.md#day-3-of-5) | Implement ratings list, reported review handling and moderation audit. | `feat(admin): ratings reviews moderation` |
| Backend | [BE-W4D3 — Ratings/favorites/rebook](backend/week-04-completion-finance-support.md#day-3-of-5) | Implement ratings, review moderation foundation, favorite add/remove, rebook. | `feat(retention): implement ratings favorites and rebook` |
| Mobile | [MOB-W4D3 — Ratings, favorites, reviews](mobile/week-04-completion-finance-support.md#day-3-of-5) | Implement post-completion rating, review, add favorite, report review entry. | `feat(mobile): ratings favorites reviews` |

## Day 4 of 5 — Thursday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W4D4 — Finance transactions](admin/week-04-completion-finance-support.md#day-4-of-5) | Implement payments, escrow, wallet ledger, receipts and provider reference review. | `feat(admin): finance transactions` |
| Backend | [BE-W4D4 — Wallet/withdrawal](backend/week-04-completion-finance-support.md#day-4-of-5) | Implement wallets, ledger, payout account, PIN-confirmed withdrawal, payout batch models. | `feat(finance): implement wallet and withdrawal` |
| Mobile | [MOB-W4D4 — Wallet and withdrawal](mobile/week-04-completion-finance-support.md#day-4-of-5) | Implement wallets, ledger, payout account setup, PIN-confirmed withdrawal, batch-date status. | `feat(mobile): wallet and withdrawal` |

## Day 5 of 5 — Friday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W4D5 — Payout batches](admin/week-04-completion-finance-support.md#day-5-of-5) | Implement withdrawal list, payout batch create/approve/process, partial failure state. | `feat(admin): payout batches` |
| Backend | [BE-W4D5 — Support/emergency](backend/week-04-completion-finance-support.md#day-5-of-5) | Implement support sessions, emergency support, support socket completion, case linking. | `feat(support): implement support and emergency` |
| Mobile | [MOB-W4D5 — Support and emergency](mobile/week-04-completion-finance-support.md#day-5-of-5) | Implement support live chat, emergency support, ticket/report linking, support attachment flow. | `feat(mobile): support and emergency` |

## End-of-week result

A task can finish cleanly or enter a governed exception path; affected wallet, payout, report and admin-review states are visible.

- Demonstrate the working result and one failure/recovery path.
- Record tests and commit identifiers for completed days.
- Carry unfinished work on the original task; do not duplicate it.
