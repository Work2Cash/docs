# Work2Cash Stage 2 — Mobile Focused Execution Pack

> Coordination view generated from 25 canonical Mobile cards assigned to Mobile and Backend Construction. Execute work from the linked team-week day, not from this stage summary.

## Stage context

- Goal: Build authoritative Backend behavior and Mobile journeys while preserving the contracts already used by Admin fixtures.
- Exit: Backend and Mobile cards through their construction scope have accepted contracts, tests and staging evidence ready for Admin integration.
- Status: Planned; not formally active

## Required context set

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. This focused stage pack.
5. The assigned team-week day and its referenced sources.

## Tasks

| ID | Weekly day section | Status | Start dependencies | Later integration gates | Flow references |
| --- | --- | --- | --- | --- | --- |
| MOB-W1D1 | [Project setup, architecture, design system](../../weeks/mobile/week-01-foundation-identity.md#day-1-of-5) | planned | None | BE-W1D1 | FLOW-LIB-001 |
| MOB-W1D2 | [First launch and onboarding](../../weeks/mobile/week-01-foundation-identity.md#day-2-of-5) | planned | MOB-W1D1 | BE-W1D2 | MF-01, SF-10 |
| MOB-W1D3 | [Registration and login](../../weeks/mobile/week-01-foundation-identity.md#day-3-of-5) | planned | MOB-W1D2 | BE-W1D3 | MF-02, MF-03, SF-01, SF-11, SF-13 |
| MOB-W1D4 | [Profile, mode, PIN, sessions](../../weeks/mobile/week-01-foundation-identity.md#day-4-of-5) | planned | MOB-W1D3 | BE-W1D4 | SF-02, MF-18, MF-19 |
| MOB-W1D5 | [Task Owner home and notification shell](../../weeks/mobile/week-01-foundation-identity.md#day-5-of-5) | planned | MOB-W1D4 | BE-W1D5 | MF-04, MF-20 |
| MOB-W2D1 | [Tasker Activation and KYC](../../weeks/mobile/week-02-tasker-task-creation-payment.md#day-1-of-5) | planned | MOB-W1D5 | BE-W2D1 | MF-05, SF-03 |
| MOB-W2D2 | [Catalog and task draft](../../weeks/mobile/week-02-tasker-task-creation-payment.md#day-2-of-5) | planned | MOB-W2D1 | BE-W2D2 | MF-06 |
| MOB-W2D3 | [Location and media](../../weeks/mobile/week-02-tasker-task-creation-payment.md#day-3-of-5) | planned | MOB-W2D2 | BE-W2D3 | MF-06, SF-04, SF-05, SF-09 |
| MOB-W2D4 | [Payment and escrow funding](../../weeks/mobile/week-02-tasker-task-creation-payment.md#day-4-of-5) | planned | MOB-W2D3 | BE-W2D4 | MF-06, SF-06, SF-07, SF-10 |
| MOB-W2D5 | [Broadcast and direct offer](../../weeks/mobile/week-02-tasker-task-creation-payment.md#day-5-of-5) | planned | MOB-W2D4 | BE-W2D5 | MF-06, MF-08 |
| MOB-W3D1 | [Tasker discovery](../../weeks/mobile/week-03-discovery-matching-execution-start.md#day-1-of-5) | planned | MOB-W2D5 | BE-W3D1 | MF-07, MF-09 |
| MOB-W3D2 | [Tasker interest and arrival confirmation](../../weeks/mobile/week-03-discovery-matching-execution-start.md#day-2-of-5) | planned | MOB-W3D1 | BE-W3D2 | MF-08, MF-09 |
| MOB-W3D3 | [Task Owner candidate selection](../../weeks/mobile/week-03-discovery-matching-execution-start.md#day-3-of-5) | planned | MOB-W3D2 | BE-W3D3 | MF-07, MF-11 |
| MOB-W3D4 | [Active task status actions](../../weeks/mobile/week-03-discovery-matching-execution-start.md#day-4-of-5) | planned | MOB-W3D3 | BE-W3D4 | MF-10 |
| MOB-W3D5 | [Chat, tracking, masked call entry](../../weeks/mobile/week-03-discovery-matching-execution-start.md#day-5-of-5) | planned | MOB-W3D4 | BE-W3D5 | MF-10, MF-16, SF-10 |
| MOB-W4D1 | [Completion and settlement](../../weeks/mobile/week-04-completion-finance-support.md#day-1-of-5) | planned | MOB-W3D5 | BE-W4D1 | MF-14, SF-05 |
| MOB-W4D2 | [Cancellation, no-show, report](../../weeks/mobile/week-04-completion-finance-support.md#day-2-of-5) | planned | MOB-W4D1 | BE-W4D2 | MF-12, SF-08 |
| MOB-W4D3 | [Ratings, favorites, reviews](../../weeks/mobile/week-04-completion-finance-support.md#day-3-of-5) | planned | MOB-W4D2 | BE-W4D3 | MF-15, MF-22 |
| MOB-W4D4 | [Wallet and withdrawal](../../weeks/mobile/week-04-completion-finance-support.md#day-4-of-5) | planned | MOB-W4D3 | BE-W4D4 | MF-13, SF-07, SF-12 |
| MOB-W4D5 | [Support and emergency](../../weeks/mobile/week-04-completion-finance-support.md#day-5-of-5) | planned | MOB-W4D4 | BE-W4D5 | MF-16, MF-23 |
| MOB-W5D1 | [Settings and notification preferences](../../weeks/mobile/week-05-integration-recovery-full-flow-qa.md#day-1-of-5) | planned | MOB-W4D5 | BE-W5D1 | MF-18, MF-19, MF-20 |
| MOB-W5D2 | [Referral and rebook](../../weeks/mobile/week-05-integration-recovery-full-flow-qa.md#day-2-of-5) | planned | MOB-W5D1 | BE-W5D2 | MF-17, MF-24 |
| MOB-W5D3 | [Offline/recovery polish](../../weeks/mobile/week-05-integration-recovery-full-flow-qa.md#day-3-of-5) | planned | MOB-W5D2 | BE-W5D3 | SF-09, SF-10 |
| MOB-W5D4 | [Provider integration QA](../../weeks/mobile/week-05-integration-recovery-full-flow-qa.md#day-4-of-5) | planned | MOB-W5D3 | BE-W5D4 | FLOW-LIB-001 |
| MOB-W5D5 | [Full mobile flow QA](../../weeks/mobile/week-05-integration-recovery-full-flow-qa.md#day-5-of-5) | planned | MOB-W5D4 | BE-W5D5 | FLOW-LIB-001 |

## Execution rule

- Confirm start dependencies before construction.
- Treat later integration gates as separately owned acceptance work.
- Attach tests and reviewer evidence before status changes.
- Carry the original day assignment with the exact evidence gap; never duplicate it.
