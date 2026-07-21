# Work2Cash Week 2 — Tasker Activation, Task Creation and Funding

> Junior-developer overview. Open your team weekly Markdown for all five days and the agent instructions embedded under each day.

## Week outcome

Build the flows that allow Taskers to become eligible and Task Owners to create, locate, attach media to and fund tasks.

## Before the week starts

The same team's Week 1 exit result is accepted or any carry-over is explicitly recorded.

This numbered week is a position inside each team's plan. The approved delivery order still applies: Admin construction, Mobile and Backend construction, Admin Integration, then cross-platform hardening.

## Day 1 of 5 — Monday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W2D1 — User management](admin/week-02-tasker-task-creation-payment.md#day-1-of-5) | Implement user list/detail with profile, mode, wallets summary, sessions, risk summary. | `feat(admin): user management` |
| Backend | [BE-W2D1 — Tasker and KYC APIs](backend/week-02-tasker-task-creation-payment.md#day-1-of-5) | The backend can create and update a Tasker's activation profile, start identity verification, receive NIN or BVN and face-capture submissions safely, expose the current KYC status and support admin re-verification without losing prior evidence. | `feat(kyc): implement tasker activation contracts` |
| Mobile | [MOB-W2D1 — Tasker Activation and KYC](mobile/week-02-tasker-task-creation-payment.md#day-1-of-5) | A signed-in user can enter Tasker mode, complete the required profile and KYC steps, understand every pending or failed state, leave safely and resume later from the backend's authoritative checkpoint. | `feat(mobile-kyc): implement tasker activation and recovery` |

## Day 2 of 5 — Tuesday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W2D2 — KYC Review Operations](admin/week-02-tasker-task-creation-payment.md#day-2-of-5) | An authorized operations reviewer can find a KYC case, understand the applicant and attempt history, approve or reject it, request re-verification or escalate risk, while every privileged action is permission-checked and audited. | `feat(admin-kyc): implement governed kyc review workflow` |
| Backend | [BE-W2D2 — Catalog/task draft APIs](backend/week-02-tasker-task-creation-payment.md#day-2-of-5) | Implement categories/types, task draft, amount validation, required arrival time. | `feat(tasks): implement catalog and task draft` |
| Mobile | [MOB-W2D2 — Catalog and task draft](mobile/week-02-tasker-task-creation-payment.md#day-2-of-5) | Implement category/type selection, task description, amount, required arrival time and draft saving. | `feat(mobile): catalog and task draft` |

## Day 3 of 5 — Wednesday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W2D3 — Catalog management](admin/week-02-tasker-task-creation-payment.md#day-3-of-5) | Implement categories/types list, create/edit, disable/archive, audit reason. | `feat(admin): catalog management` |
| Backend | [BE-W2D3 — Location/media APIs](backend/week-02-tasker-task-creation-payment.md#day-3-of-5) | Implement geocode, pin confirmation, task site Nigeria validation, media signed upload/finalize. | `feat(tasks): implement location and media contracts` |
| Mobile | [MOB-W2D3 — Location and media](mobile/week-02-tasker-task-creation-payment.md#day-3-of-5) | Implement GPS/manual address, geocode, pin confirmation, permission recovery, proof media upload UI. | `feat(mobile): location and media` |

## Day 4 of 5 — Thursday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W2D4 — Task monitor foundation](admin/week-02-tasker-task-creation-payment.md#day-4-of-5) | Implement task list/detail shell with status, owner, tasker, payment, location and media placeholders. | `feat(admin): task monitor foundation` |
| Backend | [BE-W2D4 — Payment/escrow APIs](backend/week-02-tasker-task-creation-payment.md#day-4-of-5) | Implement payment intent, verify, Paystack/Moniepoint adapter shell, ProviderWebhookEvent, escrow creation. | `feat(payments): implement payment and escrow foundation` |
| Mobile | [MOB-W2D4 — Payment and escrow funding](mobile/week-02-tasker-task-creation-payment.md#day-4-of-5) | Implement payment review, task amount + fee breakdown, Paystack/Moniepoint redirect/status, payment pending/recovery. | `feat(mobile): payment and escrow funding` |

## Day 5 of 5 — Friday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W2D5 — Media moderation](admin/week-02-tasker-task-creation-payment.md#day-5-of-5) | Implement media review, remove/reject reason and audit action. | `feat(admin): media moderation` |
| Backend | [BE-W2D5 — Broadcast/direct offer APIs](backend/week-02-tasker-task-creation-payment.md#day-5-of-5) | Implement broadcast, favorites, direct offers, FCM notification job shell. | `feat(matching): implement broadcast and direct offers` |
| Mobile | [MOB-W2D5 — Broadcast and direct offer](mobile/week-02-tasker-task-creation-payment.md#day-5-of-5) | Implement funded task publish, favorites entry, direct offer send path, offer pending/expired states. | `feat(mobile): broadcast and direct offer` |

## End-of-week result

Tasker activation and KYC, catalog, task draft, location, media, payment intent and broadcast or direct-offer contracts are usable on staging.

- Demonstrate the working result and one failure/recovery path.
- Record tests and commit identifiers for completed days.
- Carry unfinished work on the original task; do not duplicate it.
