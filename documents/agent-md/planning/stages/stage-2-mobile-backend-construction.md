# Work2Cash Stage 2 — Mobile and Backend Construction

> This is a generated coordination pack. Each linked weekly day section contains the executable scope, tests, evidence and agent prompt.

## Stage identity and status

| Field | Value |
| --- | --- |
| Order | 2 of 4 |
| Owner | Project Lead |
| Status | Planned; not formally active |
| Task count | 50 |
| Teams | Mobile, Backend |

## Outcome in plain English

Build authoritative Backend behavior and Mobile journeys while preserving the contracts already used by Admin fixtures.

## Start conditions

- The Project or Technical Lead formally selects this stage as active.
- Every earlier stage's exit evidence is accepted.
- Each card's start dependencies are ready.
- Later integration gates remain visible but do not block construction unless this is their owning stage.

## Mobile tasks

| ID | Weekly day section | Status | Start dependencies | Later integration gates | Flow references |
| --- | --- | --- | --- | --- | --- |
| MOB-W1D1 | [Project setup, architecture, design system](../weeks/mobile/week-01-foundation-identity.md#day-1-of-5) | planned | None | BE-W1D1 | FLOW-LIB-001 |
| MOB-W1D2 | [First launch and onboarding](../weeks/mobile/week-01-foundation-identity.md#day-2-of-5) | planned | MOB-W1D1 | BE-W1D2 | MF-01, SF-10 |
| MOB-W1D3 | [Registration and login](../weeks/mobile/week-01-foundation-identity.md#day-3-of-5) | planned | MOB-W1D2 | BE-W1D3 | MF-02, MF-03, SF-01, SF-11, SF-13 |
| MOB-W1D4 | [Profile, mode, PIN, sessions](../weeks/mobile/week-01-foundation-identity.md#day-4-of-5) | planned | MOB-W1D3 | BE-W1D4 | SF-02, MF-18, MF-19 |
| MOB-W1D5 | [Task Owner home and notification shell](../weeks/mobile/week-01-foundation-identity.md#day-5-of-5) | planned | MOB-W1D4 | BE-W1D5 | MF-04, MF-20 |
| MOB-W2D1 | [Tasker Activation and KYC](../weeks/mobile/week-02-tasker-task-creation-payment.md#day-1-of-5) | planned | MOB-W1D5 | BE-W2D1 | MF-05, SF-03 |
| MOB-W2D2 | [Catalog and task draft](../weeks/mobile/week-02-tasker-task-creation-payment.md#day-2-of-5) | planned | MOB-W2D1 | BE-W2D2 | MF-06 |
| MOB-W2D3 | [Location and media](../weeks/mobile/week-02-tasker-task-creation-payment.md#day-3-of-5) | planned | MOB-W2D2 | BE-W2D3 | MF-06, SF-04, SF-05, SF-09 |
| MOB-W2D4 | [Payment and escrow funding](../weeks/mobile/week-02-tasker-task-creation-payment.md#day-4-of-5) | planned | MOB-W2D3 | BE-W2D4 | MF-06, SF-06, SF-07, SF-10 |
| MOB-W2D5 | [Broadcast and direct offer](../weeks/mobile/week-02-tasker-task-creation-payment.md#day-5-of-5) | planned | MOB-W2D4 | BE-W2D5 | MF-06, MF-08 |
| MOB-W3D1 | [Tasker discovery](../weeks/mobile/week-03-discovery-matching-execution-start.md#day-1-of-5) | planned | MOB-W2D5 | BE-W3D1 | MF-07, MF-09 |
| MOB-W3D2 | [Tasker interest and arrival confirmation](../weeks/mobile/week-03-discovery-matching-execution-start.md#day-2-of-5) | planned | MOB-W3D1 | BE-W3D2 | MF-08, MF-09 |
| MOB-W3D3 | [Task Owner candidate selection](../weeks/mobile/week-03-discovery-matching-execution-start.md#day-3-of-5) | planned | MOB-W3D2 | BE-W3D3 | MF-07, MF-11 |
| MOB-W3D4 | [Active task status actions](../weeks/mobile/week-03-discovery-matching-execution-start.md#day-4-of-5) | planned | MOB-W3D3 | BE-W3D4 | MF-10 |
| MOB-W3D5 | [Chat, tracking, masked call entry](../weeks/mobile/week-03-discovery-matching-execution-start.md#day-5-of-5) | planned | MOB-W3D4 | BE-W3D5 | MF-10, MF-16, SF-10 |
| MOB-W4D1 | [Completion and settlement](../weeks/mobile/week-04-completion-finance-support.md#day-1-of-5) | planned | MOB-W3D5 | BE-W4D1 | MF-14, SF-05 |
| MOB-W4D2 | [Cancellation, no-show, report](../weeks/mobile/week-04-completion-finance-support.md#day-2-of-5) | planned | MOB-W4D1 | BE-W4D2 | MF-12, SF-08 |
| MOB-W4D3 | [Ratings, favorites, reviews](../weeks/mobile/week-04-completion-finance-support.md#day-3-of-5) | planned | MOB-W4D2 | BE-W4D3 | MF-15, MF-22 |
| MOB-W4D4 | [Wallet and withdrawal](../weeks/mobile/week-04-completion-finance-support.md#day-4-of-5) | planned | MOB-W4D3 | BE-W4D4 | MF-13, SF-07, SF-12 |
| MOB-W4D5 | [Support and emergency](../weeks/mobile/week-04-completion-finance-support.md#day-5-of-5) | planned | MOB-W4D4 | BE-W4D5 | MF-16, MF-23 |
| MOB-W5D1 | [Settings and notification preferences](../weeks/mobile/week-05-integration-recovery-full-flow-qa.md#day-1-of-5) | planned | MOB-W4D5 | BE-W5D1 | MF-18, MF-19, MF-20 |
| MOB-W5D2 | [Referral and rebook](../weeks/mobile/week-05-integration-recovery-full-flow-qa.md#day-2-of-5) | planned | MOB-W5D1 | BE-W5D2 | MF-17, MF-24 |
| MOB-W5D3 | [Offline/recovery polish](../weeks/mobile/week-05-integration-recovery-full-flow-qa.md#day-3-of-5) | planned | MOB-W5D2 | BE-W5D3 | SF-09, SF-10 |
| MOB-W5D4 | [Provider integration QA](../weeks/mobile/week-05-integration-recovery-full-flow-qa.md#day-4-of-5) | planned | MOB-W5D3 | BE-W5D4 | FLOW-LIB-001 |
| MOB-W5D5 | [Full mobile flow QA](../weeks/mobile/week-05-integration-recovery-full-flow-qa.md#day-5-of-5) | planned | MOB-W5D4 | BE-W5D5 | FLOW-LIB-001 |

## Backend tasks

| ID | Weekly day section | Status | Start dependencies | Later integration gates | Flow references |
| --- | --- | --- | --- | --- | --- |
| BE-W1D1 | [Repo foundation and contracts](../weeks/backend/week-01-foundation-identity.md#day-1-of-5) | planned | None | None | FLOW-LIB-001 |
| BE-W1D2 | [Auth contract stubs](../weeks/backend/week-01-foundation-identity.md#day-2-of-5) | planned | BE-W1D1 | None | MF-01, MF-02, MF-03 |
| BE-W1D3 | [Auth implementation](../weeks/backend/week-01-foundation-identity.md#day-3-of-5) | planned | BE-W1D2 | None | MF-02, MF-03, SF-01, SF-13 |
| BE-W1D4 | [Profile, mode, PIN, sessions](../weeks/backend/week-01-foundation-identity.md#day-4-of-5) | planned | BE-W1D3 | None | SF-02, MF-18, MF-19 |
| BE-W1D5 | [Admin auth and dashboard stubs](../weeks/backend/week-01-foundation-identity.md#day-5-of-5) | planned | BE-W1D4 | None | AF-01, AF-02 |
| BE-W2D1 | [Tasker and KYC APIs](../weeks/backend/week-02-tasker-task-creation-payment.md#day-1-of-5) | planned | BE-W1D4 | None | MF-05, SF-03, AF-04 |
| BE-W2D2 | [Catalog/task draft APIs](../weeks/backend/week-02-tasker-task-creation-payment.md#day-2-of-5) | planned | BE-W2D1 | None | MF-06, AF-11 |
| BE-W2D3 | [Location/media APIs](../weeks/backend/week-02-tasker-task-creation-payment.md#day-3-of-5) | planned | BE-W2D2 | None | MF-06, SF-04, SF-05, AF-13 |
| BE-W2D4 | [Payment/escrow APIs](../weeks/backend/week-02-tasker-task-creation-payment.md#day-4-of-5) | planned | BE-W2D3 | None | MF-06, SF-06, SF-07, AF-08 |
| BE-W2D5 | [Broadcast/direct offer APIs](../weeks/backend/week-02-tasker-task-creation-payment.md#day-5-of-5) | planned | BE-W2D4 | None | MF-06, MF-08, AF-21 |
| BE-W3D1 | [Discovery APIs](../weeks/backend/week-03-discovery-matching-execution-start.md#day-1-of-5) | planned | BE-W2D5 | None | MF-07, MF-09, AF-05 |
| BE-W3D2 | [Interest/accept APIs](../weeks/backend/week-03-discovery-matching-execution-start.md#day-2-of-5) | planned | BE-W3D1 | None | MF-08, MF-09 |
| BE-W3D3 | [Candidate/selection APIs](../weeks/backend/week-03-discovery-matching-execution-start.md#day-3-of-5) | planned | BE-W3D2 | None | MF-07, MF-11, AF-05 |
| BE-W3D4 | [Task execution state APIs](../weeks/backend/week-03-discovery-matching-execution-start.md#day-4-of-5) | planned | BE-W3D3 | None | MF-10, AF-05 |
| BE-W3D5 | [Socket/chat/tracking](../weeks/backend/week-03-discovery-matching-execution-start.md#day-5-of-5) | planned | BE-W3D4 | None | MF-10, MF-16, AF-05, AF-07 |
| BE-W4D1 | [Completion/settlement](../weeks/backend/week-04-completion-finance-support.md#day-1-of-5) | planned | BE-W3D5 | None | MF-14 |
| BE-W4D2 | [Cancellation/reports](../weeks/backend/week-04-completion-finance-support.md#day-2-of-5) | planned | BE-W4D1 | None | MF-12, SF-08, AF-06, AF-14 |
| BE-W4D3 | [Ratings/favorites/rebook](../weeks/backend/week-04-completion-finance-support.md#day-3-of-5) | planned | BE-W4D2 | None | MF-15, MF-22, MF-24, AF-22 |
| BE-W4D4 | [Wallet/withdrawal](../weeks/backend/week-04-completion-finance-support.md#day-4-of-5) | planned | BE-W4D3 | None | MF-13, SF-07, SF-12, AF-08, AF-09, AF-10, AF-24 |
| BE-W4D5 | [Support/emergency](../weeks/backend/week-04-completion-finance-support.md#day-5-of-5) | planned | BE-W4D4 | None | MF-16, MF-23, AF-07 |
| BE-W5D1 | [Admin operational APIs](../weeks/backend/week-05-integration-recovery-full-flow-qa.md#day-1-of-5) | planned | BE-W4D5 | None | AF-03, AF-05, AF-06, AF-08, AF-13, AF-22 |
| BE-W5D2 | [Referral and notification APIs](../weeks/backend/week-05-integration-recovery-full-flow-qa.md#day-2-of-5) | planned | BE-W5D1 | None | MF-17, MF-20, AF-15, AF-21 |
| BE-W5D3 | [Provider hardening](../weeks/backend/week-05-integration-recovery-full-flow-qa.md#day-3-of-5) | planned | BE-W5D2 | None | FLOW-LIB-001 |
| BE-W5D4 | [Operations/monitoring](../weeks/backend/week-05-integration-recovery-full-flow-qa.md#day-4-of-5) | planned | BE-W5D3 | None | AF-19, AF-20 |
| BE-W5D5 | [Integrated defect pass](../weeks/backend/week-05-integration-recovery-full-flow-qa.md#day-5-of-5) | planned | BE-W5D4 | None | FLOW-LIB-001 |

## Stage exit

Backend and Mobile cards through their construction scope have accepted contracts, tests and staging evidence ready for Admin integration.

- Every claimed completion has the weekly day's test and reviewer evidence.
- Blocked or carried-over cards name the exact failed start dependency or integration gate.
- No calendar date or legacy week label is used as proof of progress.
