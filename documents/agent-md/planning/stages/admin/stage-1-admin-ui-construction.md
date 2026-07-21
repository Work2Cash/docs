# Work2Cash Stage 1 — Admin Focused Execution Pack

> Coordination view generated from 25 canonical Admin cards assigned to Admin UI Construction. Execute work from the linked team-week day, not from this stage summary.

## Stage context

- Goal: Build the approved Admin flows and states against contract-shaped fixtures without waiting for Mobile or Backend implementation.
- Exit: Admin UI cards pass component, permission, accessibility, fixture-state and recovery tests; real-system integration remains explicitly owned by Stage 3.
- Status: Planned; not formally active

## Required context set

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. This focused stage pack.
5. The assigned team-week day and its referenced sources.

## Tasks

| ID | Weekly day section | Status | Start dependencies | Later integration gates | Flow references |
| --- | --- | --- | --- | --- | --- |
| ADM-W1D1 | [Admin project foundation](../../weeks/admin/week-01-foundation-identity.md#day-1-of-5) | planned | None | ADM-INT-01 | AF-01 |
| ADM-W1D2 | [Admin auth shell](../../weeks/admin/week-01-foundation-identity.md#day-2-of-5) | planned | ADM-W1D1 | ADM-INT-01 | AF-01, ASF-01, ASF-02 |
| ADM-W1D3 | [Dashboard shell](../../weeks/admin/week-01-foundation-identity.md#day-3-of-5) | planned | ADM-W1D2 | ADM-INT-01 | AF-02 |
| ADM-W1D4 | [RBAC UI primitives](../../weeks/admin/week-01-foundation-identity.md#day-4-of-5) | planned | ADM-W1D3 | ADM-INT-01 | ASF-02, ASF-05, ASF-06 |
| ADM-W1D5 | [List/detail primitives](../../weeks/admin/week-01-foundation-identity.md#day-5-of-5) | planned | ADM-W1D4 | ADM-INT-01 | ASF-03, ASF-11 |
| ADM-W2D1 | [User management](../../weeks/admin/week-02-tasker-task-creation-payment.md#day-1-of-5) | planned | ADM-W1D5 | ADM-INT-01 | AF-03 |
| ADM-W2D2 | [KYC Review Operations](../../weeks/admin/week-02-tasker-task-creation-payment.md#day-2-of-5) | planned | ADM-W2D1 | ADM-INT-02 | AF-04, ASF-02, ASF-05, ASF-11 |
| ADM-W2D3 | [Catalog management](../../weeks/admin/week-02-tasker-task-creation-payment.md#day-3-of-5) | planned | ADM-W2D2 | ADM-INT-02 | AF-11 |
| ADM-W2D4 | [Task monitor foundation](../../weeks/admin/week-02-tasker-task-creation-payment.md#day-4-of-5) | planned | ADM-W2D3 | ADM-INT-03 | AF-05 |
| ADM-W2D5 | [Media moderation](../../weeks/admin/week-02-tasker-task-creation-payment.md#day-5-of-5) | planned | ADM-W2D4 | ADM-INT-02 | AF-13 |
| ADM-W3D1 | [Discovery/matching monitor](../../weeks/admin/week-03-discovery-matching-execution-start.md#day-1-of-5) | planned | ADM-W2D5 | ADM-INT-03 | AF-05 |
| ADM-W3D2 | [Active task operations](../../weeks/admin/week-03-discovery-matching-execution-start.md#day-2-of-5) | planned | ADM-W3D1 | ADM-INT-03 | AF-05 |
| ADM-W3D3 | [Controlled force cancel](../../weeks/admin/week-03-discovery-matching-execution-start.md#day-3-of-5) | planned | ADM-W3D2 | ADM-INT-03 | AF-05, ASF-06 |
| ADM-W3D4 | [Support live chat console](../../weeks/admin/week-03-discovery-matching-execution-start.md#day-4-of-5) | planned | ADM-W3D3 | ADM-INT-05 | AF-07 |
| ADM-W3D5 | [Communication audit view](../../weeks/admin/week-03-discovery-matching-execution-start.md#day-5-of-5) | planned | ADM-W3D4 | ADM-INT-05 | AF-05, AF-14 |
| ADM-W4D1 | [Reports/disputes](../../weeks/admin/week-04-completion-finance-support.md#day-1-of-5) | planned | ADM-W3D5 | ADM-INT-04 | AF-06 |
| ADM-W4D2 | [Risk/warning/strike](../../weeks/admin/week-04-completion-finance-support.md#day-2-of-5) | planned | ADM-W4D1 | ADM-INT-04 | AF-14 |
| ADM-W4D3 | [Ratings/reviews moderation](../../weeks/admin/week-04-completion-finance-support.md#day-3-of-5) | planned | ADM-W4D2 | ADM-INT-04 | AF-22 |
| ADM-W4D4 | [Finance transactions](../../weeks/admin/week-04-completion-finance-support.md#day-4-of-5) | planned | ADM-W4D3 | ADM-INT-04 | AF-08, AF-10, AF-24 |
| ADM-W4D5 | [Payout batches](../../weeks/admin/week-04-completion-finance-support.md#day-5-of-5) | planned | ADM-W4D4 | ADM-INT-04 | AF-09 |
| ADM-W5D1 | [Wallet/refund support](../../weeks/admin/week-05-integration-recovery-full-flow-qa.md#day-1-of-5) | planned | ADM-W4D5 | ADM-INT-04 | AF-10 |
| ADM-W5D2 | [Notifications/announcements](../../weeks/admin/week-05-integration-recovery-full-flow-qa.md#day-2-of-5) | planned | ADM-W5D1 | ADM-INT-05 | AF-21 |
| ADM-W5D3 | [Remote config and coverage](../../weeks/admin/week-05-integration-recovery-full-flow-qa.md#day-3-of-5) | planned | ADM-W5D2 | ADM-INT-05 | AF-12, AF-16 |
| ADM-W5D4 | [Use-case health and monitoring](../../weeks/admin/week-05-integration-recovery-full-flow-qa.md#day-4-of-5) | planned | ADM-W5D3 | ADM-INT-05 | AF-19, AF-20 |
| ADM-W5D5 | [Audit logs and analytics](../../weeks/admin/week-05-integration-recovery-full-flow-qa.md#day-5-of-5) | planned | ADM-W5D4 | ADM-INT-05 | AF-18, AF-23 |

## Execution rule

- Confirm start dependencies before construction.
- Treat later integration gates as separately owned acceptance work.
- Attach tests and reviewer evidence before status changes.
- Carry the original day assignment with the exact evidence gap; never duplicate it.
