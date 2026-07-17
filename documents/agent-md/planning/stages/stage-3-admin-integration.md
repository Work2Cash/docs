# Work2Cash Stage 3 — Admin Integration

> This is a generated coordination pack. Each linked weekly day section contains the executable scope, tests, evidence and agent prompt.

## Stage identity and status

| Field | Value |
| --- | --- |
| Order | 3 of 4 |
| Owner | Project Lead |
| Status | Planned; not formally active |
| Task count | 5 |
| Teams | Admin |

## Outcome in plain English

Replace Admin fixtures with real permissioned Backend contracts and persisted Mobile outcomes, domain by domain.

## Start conditions

- The Project or Technical Lead formally selects this stage as active.
- Every earlier stage's exit evidence is accepted.
- Each card's start dependencies are ready.
- Later integration gates remain visible but do not block construction unless this is their owning stage.

## Admin tasks

| ID | Weekly day section | Status | Start dependencies | Later integration gates | Flow references |
| --- | --- | --- | --- | --- | --- |
| ADM-INT-01 | [Identity and User Management Integration](../weeks/admin/integration-week-admin-integration.md#day-1-of-5) | planned | ADM-W2D1, BE-W1D5, BE-W5D1, MOB-W1D4 | None | AF-01, AF-02, AF-03 |
| ADM-INT-02 | [KYC, Catalog and Media Integration](../weeks/admin/integration-week-admin-integration.md#day-2-of-5) | planned | ADM-INT-01, ADM-W2D5 | None | AF-04, AF-11, AF-13 |
| ADM-INT-03 | [Task Monitoring, Matching and Execution Integration](../weeks/admin/integration-week-admin-integration.md#day-3-of-5) | planned | ADM-INT-02, ADM-W3D5, BE-W3D5, MOB-W3D5 | None | AF-05, AF-07, AF-14 |
| ADM-INT-04 | [Reports, Finance and Payout Integration](../weeks/admin/integration-week-admin-integration.md#day-4-of-5) | planned | ADM-INT-03, ADM-W4D5, BE-W4D4, MOB-W4D4 | None | AF-06, AF-08, AF-10, AF-22, AF-24 |
| ADM-INT-05 | [Support, Configuration and Operations Integration](../weeks/admin/integration-week-admin-integration.md#day-5-of-5) | planned | ADM-INT-04, ADM-W5D5, BE-W5D4, MOB-W5D2 | None | AF-09, AF-10, AF-12, AF-15, AF-16, AF-18, AF-19, AF-20, AF-21, AF-23 |

## Stage exit

All five Admin integration cards pass real-contract, stale-state, authorization, audit and end-to-end recovery checks.

- Every claimed completion has the weekly day's test and reviewer evidence.
- Blocked or carried-over cards name the exact failed start dependency or integration gate.
- No calendar date or legacy week label is used as proof of progress.
