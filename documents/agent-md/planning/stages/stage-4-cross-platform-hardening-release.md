# Work2Cash Stage 4 — Cross-Platform Hardening and Release

> This is a generated coordination pack. Each linked weekly day section contains the executable scope, tests, evidence and agent prompt.

## Stage identity and status

| Field | Value |
| --- | --- |
| Order | 4 of 4 |
| Owner | Project Lead |
| Status | Planned; not formally active |
| Task count | 45 |
| Teams | Mobile, Backend, Admin |

## Outcome in plain English

Run cross-platform integration, security, performance, recovery, release-candidate and freeze work after Admin integration.

## Start conditions

- The Project or Technical Lead formally selects this stage as active.
- Every earlier stage's exit evidence is accepted.
- Each card's start dependencies are ready.
- Later integration gates remain visible but do not block construction unless this is their owning stage.

## Mobile tasks

| ID | Weekly day section | Status | Start dependencies | Later integration gates | Flow references |
| --- | --- | --- | --- | --- | --- |
| MOB-W6D1 | [Hardening sprint](../weeks/mobile/week-06-hardening-security-performance.md#day-1-of-5) | planned | MOB-W5D5 | BE-W6D1 | FLOW-LIB-001 |
| MOB-W6D2 | [Performance and device QA](../weeks/mobile/week-06-hardening-security-performance.md#day-2-of-5) | planned | MOB-W6D1 | BE-W6D2 | FLOW-LIB-001 |
| MOB-W6D3 | [Provider recovery flows](../weeks/mobile/week-06-hardening-security-performance.md#day-3-of-5) | planned | MOB-W6D2 | BE-W6D3 | FLOW-LIB-001 |
| MOB-W6D4 | [Security and privacy review](../weeks/mobile/week-06-hardening-security-performance.md#day-4-of-5) | planned | MOB-W6D3 | BE-W6D4 | FLOW-LIB-001 |
| MOB-W6D5 | [Hardening review](../weeks/mobile/week-06-hardening-security-performance.md#day-5-of-5) | planned | MOB-W6D4 | BE-W6D5 | FLOW-LIB-001 |
| MOB-W7D1 | [Release candidate preparation](../weeks/mobile/week-07-release-candidate-operations-dry-run.md#day-1-of-5) | planned | MOB-W6D5 | BE-W7D1 | FLOW-LIB-001 |
| MOB-W7D2 | [Device matrix QA](../weeks/mobile/week-07-release-candidate-operations-dry-run.md#day-2-of-5) | planned | MOB-W7D1 | BE-W7D2 | FLOW-LIB-001 |
| MOB-W7D3 | [Operations dry run support](../weeks/mobile/week-07-release-candidate-operations-dry-run.md#day-3-of-5) | planned | MOB-W7D2 | BE-W7D3 | FLOW-LIB-001 |
| MOB-W7D4 | [Provider validation support](../weeks/mobile/week-07-release-candidate-operations-dry-run.md#day-4-of-5) | planned | MOB-W7D3 | BE-W7D4 | FLOW-LIB-001 |
| MOB-W7D5 | [Mobile release candidate](../weeks/mobile/week-07-release-candidate-operations-dry-run.md#day-5-of-5) | planned | MOB-W7D4 | BE-W7D5 | FLOW-LIB-001 |
| MOB-W8D1 | [Stabilization sprint](../weeks/mobile/week-08-stabilization-freeze.md#day-1-of-5) | planned | MOB-W7D5 | BE-W8D1 | FLOW-LIB-001 |
| MOB-W8D2 | [Final defect pass](../weeks/mobile/week-08-stabilization-freeze.md#day-2-of-5) | planned | MOB-W8D1 | BE-W8D2 | FLOW-LIB-001 |
| MOB-W8D3 | [Go-live rehearsal](../weeks/mobile/week-08-stabilization-freeze.md#day-3-of-5) | planned | MOB-W8D2 | BE-W8D3 | FLOW-LIB-001 |
| MOB-W8D4 | [Handover and store readiness](../weeks/mobile/week-08-stabilization-freeze.md#day-4-of-5) | planned | MOB-W8D3 | BE-W8D4 | FLOW-LIB-001 |
| MOB-W8D5 | [Build freeze](../weeks/mobile/week-08-stabilization-freeze.md#day-5-of-5) | planned | MOB-W8D4 | BE-W8D5 | FLOW-LIB-001 |

## Backend tasks

| ID | Weekly day section | Status | Start dependencies | Later integration gates | Flow references |
| --- | --- | --- | --- | --- | --- |
| BE-W6D1 | [Security and idempotency hardening](../weeks/backend/week-06-hardening-security-performance.md#day-1-of-5) | planned | BE-W5D5 | None | FLOW-LIB-001 |
| BE-W6D2 | [Performance/load pass](../weeks/backend/week-06-hardening-security-performance.md#day-2-of-5) | planned | BE-W6D1 | None | FLOW-LIB-001 |
| BE-W6D3 | [Provider recovery hardening](../weeks/backend/week-06-hardening-security-performance.md#day-3-of-5) | planned | BE-W6D2 | None | FLOW-LIB-001 |
| BE-W6D4 | [Security review fixes](../weeks/backend/week-06-hardening-security-performance.md#day-4-of-5) | planned | BE-W6D3 | None | FLOW-LIB-001 |
| BE-W6D5 | [Hardening review](../weeks/backend/week-06-hardening-security-performance.md#day-5-of-5) | planned | BE-W6D4 | None | FLOW-LIB-001 |
| BE-W7D1 | [Release candidate backend preparation](../weeks/backend/week-07-release-candidate-operations-dry-run.md#day-1-of-5) | planned | BE-W6D5 | None | FLOW-LIB-001 |
| BE-W7D2 | [Backup and restore dry run](../weeks/backend/week-07-release-candidate-operations-dry-run.md#day-2-of-5) | planned | BE-W7D1 | None | FLOW-LIB-001 |
| BE-W7D3 | [Payout and finance dry run](../weeks/backend/week-07-release-candidate-operations-dry-run.md#day-3-of-5) | planned | BE-W7D2 | None | FLOW-LIB-001 |
| BE-W7D4 | [Provider validation report](../weeks/backend/week-07-release-candidate-operations-dry-run.md#day-4-of-5) | planned | BE-W7D3 | None | FLOW-LIB-001 |
| BE-W7D5 | [Backend release candidate](../weeks/backend/week-07-release-candidate-operations-dry-run.md#day-5-of-5) | planned | BE-W7D4 | None | FLOW-LIB-001 |
| BE-W8D1 | [Stabilization sprint](../weeks/backend/week-08-stabilization-freeze.md#day-1-of-5) | planned | BE-W7D5 | None | FLOW-LIB-001 |
| BE-W8D2 | [Final backend defect pass](../weeks/backend/week-08-stabilization-freeze.md#day-2-of-5) | planned | BE-W8D1 | None | FLOW-LIB-001 |
| BE-W8D3 | [Go-live rehearsal](../weeks/backend/week-08-stabilization-freeze.md#day-3-of-5) | planned | BE-W8D2 | None | FLOW-LIB-001 |
| BE-W8D4 | [Backend handover](../weeks/backend/week-08-stabilization-freeze.md#day-4-of-5) | planned | BE-W8D3 | None | FLOW-LIB-001 |
| BE-W8D5 | [Backend build freeze](../weeks/backend/week-08-stabilization-freeze.md#day-5-of-5) | planned | BE-W8D4 | None | FLOW-LIB-001 |

## Admin tasks

| ID | Weekly day section | Status | Start dependencies | Later integration gates | Flow references |
| --- | --- | --- | --- | --- | --- |
| ADM-W6D1 | [Admin hardening](../weeks/admin/week-06-hardening-security-performance.md#day-1-of-5) | planned | ADM-W5D5, ADM-INT-05 | BE-W6D1, MOB-W6D1 | FLOW-LIB-001 |
| ADM-W6D2 | [Admin performance and table QA](../weeks/admin/week-06-hardening-security-performance.md#day-2-of-5) | planned | ADM-W6D1 | BE-W6D2, MOB-W6D2 | FLOW-LIB-001 |
| ADM-W6D3 | [Security and permission review](../weeks/admin/week-06-hardening-security-performance.md#day-3-of-5) | planned | ADM-W6D2 | BE-W6D3, MOB-W6D3 | FLOW-LIB-001 |
| ADM-W6D4 | [Operational workflow review](../weeks/admin/week-06-hardening-security-performance.md#day-4-of-5) | planned | ADM-W6D3 | BE-W6D4, MOB-W6D4 | FLOW-LIB-001 |
| ADM-W6D5 | [Hardening review](../weeks/admin/week-06-hardening-security-performance.md#day-5-of-5) | planned | ADM-W6D4 | BE-W6D5, MOB-W6D5 | FLOW-LIB-001 |
| ADM-W7D1 | [Admin release candidate preparation](../weeks/admin/week-07-release-candidate-operations-dry-run.md#day-1-of-5) | planned | ADM-W6D5 | BE-W7D1, MOB-W7D1 | FLOW-LIB-001 |
| ADM-W7D2 | [Finance and payout dry run](../weeks/admin/week-07-release-candidate-operations-dry-run.md#day-2-of-5) | planned | ADM-W7D1 | BE-W7D2, MOB-W7D2 | FLOW-LIB-001 |
| ADM-W7D3 | [Support and operations dry run](../weeks/admin/week-07-release-candidate-operations-dry-run.md#day-3-of-5) | planned | ADM-W7D2 | BE-W7D3, MOB-W7D3 | FLOW-LIB-001 |
| ADM-W7D4 | [Monitoring and config validation](../weeks/admin/week-07-release-candidate-operations-dry-run.md#day-4-of-5) | planned | ADM-W7D3 | BE-W7D4, MOB-W7D4 | FLOW-LIB-001 |
| ADM-W7D5 | [Admin release candidate](../weeks/admin/week-07-release-candidate-operations-dry-run.md#day-5-of-5) | planned | ADM-W7D4 | BE-W7D5, MOB-W7D5 | FLOW-LIB-001 |
| ADM-W8D1 | [Stabilization sprint](../weeks/admin/week-08-stabilization-freeze.md#day-1-of-5) | planned | ADM-W7D5 | BE-W8D1, MOB-W8D1 | FLOW-LIB-001 |
| ADM-W8D2 | [Final admin defect pass](../weeks/admin/week-08-stabilization-freeze.md#day-2-of-5) | planned | ADM-W8D1 | BE-W8D2, MOB-W8D2 | FLOW-LIB-001 |
| ADM-W8D3 | [Go-live rehearsal](../weeks/admin/week-08-stabilization-freeze.md#day-3-of-5) | planned | ADM-W8D2 | BE-W8D3, MOB-W8D3 | FLOW-LIB-001 |
| ADM-W8D4 | [Admin handover](../weeks/admin/week-08-stabilization-freeze.md#day-4-of-5) | planned | ADM-W8D3 | BE-W8D4, MOB-W8D4 | FLOW-LIB-001 |
| ADM-W8D5 | [Admin build freeze](../weeks/admin/week-08-stabilization-freeze.md#day-5-of-5) | planned | ADM-W8D4 | BE-W8D5, MOB-W8D5 | FLOW-LIB-001 |

## Stage exit

Release evidence, operational dry runs, critical-defect decisions and the controlled build freeze are accepted.

- Every claimed completion has the weekly day's test and reviewer evidence.
- Blocked or carried-over cards name the exact failed start dependency or integration gate.
- No calendar date or legacy week label is used as proof of progress.
