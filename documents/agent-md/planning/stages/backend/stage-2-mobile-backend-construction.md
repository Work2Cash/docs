# Work2Cash Stage 2 — Backend Focused Execution Pack

> Coordination view generated from 25 canonical Backend cards assigned to Mobile and Backend Construction. Execute work from the linked team-week day, not from this stage summary.

## Stage context

- Goal: Build authoritative Backend behavior and Mobile journeys while preserving the contracts already used by Admin fixtures.
- Exit: Backend and Mobile cards through their construction scope have accepted contracts, tests and staging evidence ready for Admin integration.
- Status: Planned; not formally active

## Required context set

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. This focused stage pack.
5. The assigned team-week day and its referenced sources.

## Tasks

| ID | Weekly day section | Status | Start dependencies | Later integration gates | Flow references |
| --- | --- | --- | --- | --- | --- |
| BE-W1D1 | [Repo foundation and contracts](../../weeks/backend/week-01-foundation-identity.md#day-1-of-5) | planned | None | None | FLOW-LIB-001 |
| BE-W1D2 | [Auth contract stubs](../../weeks/backend/week-01-foundation-identity.md#day-2-of-5) | planned | BE-W1D1 | None | MF-01, MF-02, MF-03 |
| BE-W1D3 | [Auth implementation](../../weeks/backend/week-01-foundation-identity.md#day-3-of-5) | planned | BE-W1D2 | None | MF-02, MF-03, SF-01, SF-13 |
| BE-W1D4 | [Profile, mode, PIN, sessions](../../weeks/backend/week-01-foundation-identity.md#day-4-of-5) | planned | BE-W1D3 | None | SF-02, MF-18, MF-19 |
| BE-W1D5 | [Admin auth and dashboard stubs](../../weeks/backend/week-01-foundation-identity.md#day-5-of-5) | planned | BE-W1D4 | None | AF-01, AF-02 |
| BE-W2D1 | [Tasker and KYC APIs](../../weeks/backend/week-02-tasker-task-creation-payment.md#day-1-of-5) | planned | BE-W1D4 | None | MF-05, SF-03, AF-04 |
| BE-W2D2 | [Catalog/task draft APIs](../../weeks/backend/week-02-tasker-task-creation-payment.md#day-2-of-5) | planned | BE-W2D1 | None | MF-06, AF-11 |
| BE-W2D3 | [Location/media APIs](../../weeks/backend/week-02-tasker-task-creation-payment.md#day-3-of-5) | planned | BE-W2D2 | None | MF-06, SF-04, SF-05, AF-13 |
| BE-W2D4 | [Payment/escrow APIs](../../weeks/backend/week-02-tasker-task-creation-payment.md#day-4-of-5) | planned | BE-W2D3 | None | MF-06, SF-06, SF-07, AF-08 |
| BE-W2D5 | [Broadcast/direct offer APIs](../../weeks/backend/week-02-tasker-task-creation-payment.md#day-5-of-5) | planned | BE-W2D4 | None | MF-06, MF-08, AF-21 |
| BE-W3D1 | [Discovery APIs](../../weeks/backend/week-03-discovery-matching-execution-start.md#day-1-of-5) | planned | BE-W2D5 | None | MF-07, MF-09, AF-05 |
| BE-W3D2 | [Interest/accept APIs](../../weeks/backend/week-03-discovery-matching-execution-start.md#day-2-of-5) | planned | BE-W3D1 | None | MF-08, MF-09 |
| BE-W3D3 | [Candidate/selection APIs](../../weeks/backend/week-03-discovery-matching-execution-start.md#day-3-of-5) | planned | BE-W3D2 | None | MF-07, MF-11, AF-05 |
| BE-W3D4 | [Task execution state APIs](../../weeks/backend/week-03-discovery-matching-execution-start.md#day-4-of-5) | planned | BE-W3D3 | None | MF-10, AF-05 |
| BE-W3D5 | [Socket/chat/tracking](../../weeks/backend/week-03-discovery-matching-execution-start.md#day-5-of-5) | planned | BE-W3D4 | None | MF-10, MF-16, AF-05, AF-07 |
| BE-W4D1 | [Completion/settlement](../../weeks/backend/week-04-completion-finance-support.md#day-1-of-5) | planned | BE-W3D5 | None | MF-14 |
| BE-W4D2 | [Cancellation/reports](../../weeks/backend/week-04-completion-finance-support.md#day-2-of-5) | planned | BE-W4D1 | None | MF-12, SF-08, AF-06, AF-14 |
| BE-W4D3 | [Ratings/favorites/rebook](../../weeks/backend/week-04-completion-finance-support.md#day-3-of-5) | planned | BE-W4D2 | None | MF-15, MF-22, MF-24, AF-22 |
| BE-W4D4 | [Wallet/withdrawal](../../weeks/backend/week-04-completion-finance-support.md#day-4-of-5) | planned | BE-W4D3 | None | MF-13, SF-07, SF-12, AF-08, AF-09, AF-10, AF-24 |
| BE-W4D5 | [Support/emergency](../../weeks/backend/week-04-completion-finance-support.md#day-5-of-5) | planned | BE-W4D4 | None | MF-16, MF-23, AF-07 |
| BE-W5D1 | [Admin operational APIs](../../weeks/backend/week-05-integration-recovery-full-flow-qa.md#day-1-of-5) | planned | BE-W4D5 | None | AF-03, AF-05, AF-06, AF-08, AF-13, AF-22 |
| BE-W5D2 | [Referral and notification APIs](../../weeks/backend/week-05-integration-recovery-full-flow-qa.md#day-2-of-5) | planned | BE-W5D1 | None | MF-17, MF-20, AF-15, AF-21 |
| BE-W5D3 | [Provider hardening](../../weeks/backend/week-05-integration-recovery-full-flow-qa.md#day-3-of-5) | planned | BE-W5D2 | None | FLOW-LIB-001 |
| BE-W5D4 | [Operations/monitoring](../../weeks/backend/week-05-integration-recovery-full-flow-qa.md#day-4-of-5) | planned | BE-W5D3 | None | AF-19, AF-20 |
| BE-W5D5 | [Integrated defect pass](../../weeks/backend/week-05-integration-recovery-full-flow-qa.md#day-5-of-5) | planned | BE-W5D4 | None | FLOW-LIB-001 |

## Execution rule

- Confirm start dependencies before construction.
- Treat later integration gates as separately owned acceptance work.
- Attach tests and reviewer evidence before status changes.
- Carry the original day assignment with the exact evidence gap; never duplicate it.
