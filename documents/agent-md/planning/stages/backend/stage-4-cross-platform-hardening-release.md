# Work2Cash Stage 4 — Backend Focused Execution Pack

> Coordination view generated from 15 canonical Backend cards assigned to Cross-Platform Hardening and Release. Execute work from the linked team-week day, not from this stage summary.

## Stage context

- Goal: Run cross-platform integration, security, performance, recovery, release-candidate and freeze work after Admin integration.
- Exit: Release evidence, operational dry runs, critical-defect decisions and the controlled build freeze are accepted.
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
| BE-W6D1 | [Security and idempotency hardening](../../weeks/backend/week-06-hardening-security-performance.md#day-1-of-5) | planned | BE-W5D5 | None | FLOW-LIB-001 |
| BE-W6D2 | [Performance/load pass](../../weeks/backend/week-06-hardening-security-performance.md#day-2-of-5) | planned | BE-W6D1 | None | FLOW-LIB-001 |
| BE-W6D3 | [Provider recovery hardening](../../weeks/backend/week-06-hardening-security-performance.md#day-3-of-5) | planned | BE-W6D2 | None | FLOW-LIB-001 |
| BE-W6D4 | [Security review fixes](../../weeks/backend/week-06-hardening-security-performance.md#day-4-of-5) | planned | BE-W6D3 | None | FLOW-LIB-001 |
| BE-W6D5 | [Hardening review](../../weeks/backend/week-06-hardening-security-performance.md#day-5-of-5) | planned | BE-W6D4 | None | FLOW-LIB-001 |
| BE-W7D1 | [Release candidate backend preparation](../../weeks/backend/week-07-release-candidate-operations-dry-run.md#day-1-of-5) | planned | BE-W6D5 | None | FLOW-LIB-001 |
| BE-W7D2 | [Backup and restore dry run](../../weeks/backend/week-07-release-candidate-operations-dry-run.md#day-2-of-5) | planned | BE-W7D1 | None | FLOW-LIB-001 |
| BE-W7D3 | [Payout and finance dry run](../../weeks/backend/week-07-release-candidate-operations-dry-run.md#day-3-of-5) | planned | BE-W7D2 | None | FLOW-LIB-001 |
| BE-W7D4 | [Provider validation report](../../weeks/backend/week-07-release-candidate-operations-dry-run.md#day-4-of-5) | planned | BE-W7D3 | None | FLOW-LIB-001 |
| BE-W7D5 | [Backend release candidate](../../weeks/backend/week-07-release-candidate-operations-dry-run.md#day-5-of-5) | planned | BE-W7D4 | None | FLOW-LIB-001 |
| BE-W8D1 | [Stabilization sprint](../../weeks/backend/week-08-stabilization-freeze.md#day-1-of-5) | planned | BE-W7D5 | None | FLOW-LIB-001 |
| BE-W8D2 | [Final backend defect pass](../../weeks/backend/week-08-stabilization-freeze.md#day-2-of-5) | planned | BE-W8D1 | None | FLOW-LIB-001 |
| BE-W8D3 | [Go-live rehearsal](../../weeks/backend/week-08-stabilization-freeze.md#day-3-of-5) | planned | BE-W8D2 | None | FLOW-LIB-001 |
| BE-W8D4 | [Backend handover](../../weeks/backend/week-08-stabilization-freeze.md#day-4-of-5) | planned | BE-W8D3 | None | FLOW-LIB-001 |
| BE-W8D5 | [Backend build freeze](../../weeks/backend/week-08-stabilization-freeze.md#day-5-of-5) | planned | BE-W8D4 | None | FLOW-LIB-001 |

## Execution rule

- Confirm start dependencies before construction.
- Treat later integration gates as separately owned acceptance work.
- Attach tests and reviewer evidence before status changes.
- Carry the original day assignment with the exact evidence gap; never duplicate it.
