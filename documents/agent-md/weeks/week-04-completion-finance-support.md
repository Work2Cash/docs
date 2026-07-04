# Work2Cash Week 4 - Completion, Exceptions, Trust And Finance

## Purpose

This is the focused AI-agent execution pack for Week 4 of the Work2Cash build plan.

Use this file with:

- `../downloads/shared-ai-agent-execution-rules-v1.md`
- the relevant team brief in `../downloads/`
- the specific contract/model/provider Markdown document needed for the task

Do not load the full HTML documents for normal implementation work.

## Dates

- Start: Mon 27 Jul 2026
- End: Fri 31 Jul 2026
- Build model: 8 weeks development + 2 weeks testing

## Week Goal

Close the task lifecycle with completion, settlement, cancellation, no-show, reports, ratings, favorites, wallet, withdrawal and support.

## Week Exit Condition

A task can finish cleanly or enter a governed exception path; affected wallet, payout, report and admin review states are visible.

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
| W4D1 | Mon 27 Jul 2026 | Completion and settlement | Implement completion proof upload, request completion, Task Owner approval, settlement pending/held states. | /completion-proof, /request-completion, /confirm-completion, wallets summary. | Dispute can hold affected payout only. |
| W4D2 | Tue 28 Jul 2026 | Cancellation, no-show, report | Implement cancellation/no-show flows, warning/strike messaging, report/dispute creation and status. | /cancel, /reports, /reports/{reportId}. | Penalty rules shown before confirmation. |
| W4D3 | Wed 29 Jul 2026 | Ratings, favorites, reviews | Implement post-completion rating, review, add favorite, report review entry. | /ratings, /favorites/taskers. | One rating per actor per completed task. |
| W4D4 | Thu 30 Jul 2026 | Wallet and withdrawal | Implement wallets, ledger, payout account setup, PIN-confirmed withdrawal, batch-date status. | /wallets, /ledger, /tasker/payout-account, /tasker/withdrawals. | Payout batches: 14th and 28th. |
| W4D5 | Fri 31 Jul 2026 | Support and emergency | Implement support live chat, emergency support, ticket/report linking, support attachment flow. | /support/sessions, /support/emergency, /support socket. | No dispute live chat; support chat is separate. |


## Backend Tasks

| Day | Date | Workstream | Execution Scope | Dependency | Commit / Output Rule |
| --- | --- | --- | --- | --- | --- |
| W4D1 | Mon 27 Jul 2026 | Completion/settlement | Implement completion proof, request completion, confirm completion, commission snapshot, escrow release/hold. | Unblocks settlement. | feat(settlement): implement completion and escrow release |
| W4D2 | Tue 28 Jul 2026 | Cancellation/reports | Implement cancellation, no-show, reports, warning/strike, settlement hold use cases. | Unblocks exception flows/admin reports. | feat(risk): implement cancellation reports and penalties |
| W4D3 | Wed 29 Jul 2026 | Ratings/favorites/rebook | Implement ratings, review moderation foundation, favorite add/remove, rebook. | Unblocks retention flows. | feat(retention): implement ratings favorites and rebook |
| W4D4 | Thu 30 Jul 2026 | Wallet/withdrawal | Implement wallets, ledger, payout account, PIN-confirmed withdrawal, payout batch models. | Unblocks finance flows. | feat(finance): implement wallet and withdrawal |
| W4D5 | Fri 31 Jul 2026 | Support/emergency | Implement support sessions, emergency support, support socket completion, case linking. | Unblocks support flows/admin support. | feat(support): implement support and emergency |


## Admin Tasks

| Day | Date | Workstream | Execution Scope | Dependency | Output Rule |
| --- | --- | --- | --- | --- | --- |
| W4D1 | Mon 27 Jul 2026 | Reports/disputes | Implement reports queue/detail, linked task evidence, decision actions. | /admin/reports, /admin/reports/{id}/resolve. | Follows mobile report/cancellation flows. |
| W4D2 | Tue 28 Jul 2026 | Risk/warning/strike | Implement warning/strike history, trust impact and suspension action with audit. | /admin/users/{id}, /admin/reports/{id}/resolve. | Apply accepted warning/strike rules. |
| W4D3 | Wed 29 Jul 2026 | Ratings/reviews moderation | Implement ratings list, reported review handling and moderation audit. | /admin/ratings. | Follows mobile rating flow. |
| W4D4 | Thu 30 Jul 2026 | Finance transactions | Implement payments, escrow, wallet ledger, receipts and provider reference review. | /admin/finance/transactions. | Follows mobile payment/settlement. |
| W4D5 | Fri 31 Jul 2026 | Payout batches | Implement withdrawal list, payout batch create/approve/process, partial failure state. | /admin/payout-batches/*. | Batch dates 14th and 28th. |


## Cross-Team Dependency Rule

Mobile controls implementation order. Backend must publish contracts/stubs before mobile needs them. Admin follows the operational data created by mobile flows and persisted by backend.

## AI Agent Prompt Template

```text
Read these Markdown files only:
- documents/downloads/shared-ai-agent-execution-rules-v1.md
- documents/downloads/[team]-team-build-brief-v1.md
- documents/agent-md/weeks/week-04-completion-finance-support.md
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
