# Work2Cash Stage 4 — Mobile Focused Execution Pack

> Coordination view generated from 15 canonical Mobile cards assigned to Cross-Platform Hardening and Release. Execute work from the linked team-week day, not from this stage summary.

## Stage context

- Goal: Run cross-platform integration, security, performance, recovery, release-candidate and freeze work after Admin integration.
- Exit: Release evidence, operational dry runs, critical-defect decisions and the controlled build freeze are accepted.
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
| MOB-W6D1 | [Hardening sprint](../../weeks/mobile/week-06-hardening-security-performance.md#day-1-of-5) | planned | MOB-W5D5 | BE-W6D1 | FLOW-LIB-001 |
| MOB-W6D2 | [Performance and device QA](../../weeks/mobile/week-06-hardening-security-performance.md#day-2-of-5) | planned | MOB-W6D1 | BE-W6D2 | FLOW-LIB-001 |
| MOB-W6D3 | [Provider recovery flows](../../weeks/mobile/week-06-hardening-security-performance.md#day-3-of-5) | planned | MOB-W6D2 | BE-W6D3 | FLOW-LIB-001 |
| MOB-W6D4 | [Security and privacy review](../../weeks/mobile/week-06-hardening-security-performance.md#day-4-of-5) | planned | MOB-W6D3 | BE-W6D4 | FLOW-LIB-001 |
| MOB-W6D5 | [Hardening review](../../weeks/mobile/week-06-hardening-security-performance.md#day-5-of-5) | planned | MOB-W6D4 | BE-W6D5 | FLOW-LIB-001 |
| MOB-W7D1 | [Release candidate preparation](../../weeks/mobile/week-07-release-candidate-operations-dry-run.md#day-1-of-5) | planned | MOB-W6D5 | BE-W7D1 | FLOW-LIB-001 |
| MOB-W7D2 | [Device matrix QA](../../weeks/mobile/week-07-release-candidate-operations-dry-run.md#day-2-of-5) | planned | MOB-W7D1 | BE-W7D2 | FLOW-LIB-001 |
| MOB-W7D3 | [Operations dry run support](../../weeks/mobile/week-07-release-candidate-operations-dry-run.md#day-3-of-5) | planned | MOB-W7D2 | BE-W7D3 | FLOW-LIB-001 |
| MOB-W7D4 | [Provider validation support](../../weeks/mobile/week-07-release-candidate-operations-dry-run.md#day-4-of-5) | planned | MOB-W7D3 | BE-W7D4 | FLOW-LIB-001 |
| MOB-W7D5 | [Mobile release candidate](../../weeks/mobile/week-07-release-candidate-operations-dry-run.md#day-5-of-5) | planned | MOB-W7D4 | BE-W7D5 | FLOW-LIB-001 |
| MOB-W8D1 | [Stabilization sprint](../../weeks/mobile/week-08-stabilization-freeze.md#day-1-of-5) | planned | MOB-W7D5 | BE-W8D1 | FLOW-LIB-001 |
| MOB-W8D2 | [Final defect pass](../../weeks/mobile/week-08-stabilization-freeze.md#day-2-of-5) | planned | MOB-W8D1 | BE-W8D2 | FLOW-LIB-001 |
| MOB-W8D3 | [Go-live rehearsal](../../weeks/mobile/week-08-stabilization-freeze.md#day-3-of-5) | planned | MOB-W8D2 | BE-W8D3 | FLOW-LIB-001 |
| MOB-W8D4 | [Handover and store readiness](../../weeks/mobile/week-08-stabilization-freeze.md#day-4-of-5) | planned | MOB-W8D3 | BE-W8D4 | FLOW-LIB-001 |
| MOB-W8D5 | [Build freeze](../../weeks/mobile/week-08-stabilization-freeze.md#day-5-of-5) | planned | MOB-W8D4 | BE-W8D5 | FLOW-LIB-001 |

## Execution rule

- Confirm start dependencies before construction.
- Treat later integration gates as separately owned acceptance work.
- Attach tests and reviewer evidence before status changes.
- Carry the original day assignment with the exact evidence gap; never duplicate it.
