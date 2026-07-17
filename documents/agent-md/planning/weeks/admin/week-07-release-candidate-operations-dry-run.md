# Work2Cash Admin — Week 7: Release Candidate Preparation and Operational Dry Runs

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Prepare Mobile, Admin and Backend release candidates while running provider, payout, monitoring, backup and support dry runs.

## Before the week starts

The Admin Week 6 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | ADM-W7D1 — Admin release candidate preparation | ADM-W6D5 | Prepare protected admin build, environment config and deployment checklist. | `feat(admin): admin release candidate preparation` |
| Day 2 — Tuesday | ADM-W7D2 — Finance and payout dry run | ADM-W7D1 | Run withdrawal queue, payout batch creation/approval/process and partial failure handling. | `feat(admin): finance and payout dry run` |
| Day 3 — Wednesday | ADM-W7D3 — Support and operations dry run | ADM-W7D2 | Run support live chat, emergency support, reports, KYC review and wallet-support operations. | `feat(admin): support and operations dry run` |
| Day 4 — Thursday | ADM-W7D4 — Monitoring and config validation | ADM-W7D3 | Validate use-case health, queue/provider status, remote config, coverage and audit log visibility. | `feat(admin): monitoring and config validation` |
| Day 5 — Friday | ADM-W7D5 — Admin release candidate | ADM-W7D4 | Generate admin release candidate and handover notes for QA testing. | `feat(admin): admin release candidate` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — ADM-W7D1: Admin release candidate preparation

> **Day 1 starts only after:** ADM-W6D5.  
> **Day 1 finishes only when:** Prepare protected admin build, environment config and deployment checklist.

**Today's goal:** Prepare protected admin build, environment config and deployment checklist.

**Why today:** ADM-W7D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W6D5 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W7D1, MOB-W7D1. This does not block today's approved construction scope.

### Build in this order

1. Prepare protected admin build, environment config and deployment checklist.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No secrets committed.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Admin release candidate preparation outcome in the target environment using non-production data.

### End-of-day result

- [ ] Prepare protected admin build, environment config and deployment checklist.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): admin release candidate preparation`

**What comes next:** ADM-W7D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W7D1 — Admin release candidate preparation**.

Expected result: Prepare protected admin build, environment config and deployment checklist.

Why this task matters: ADM-W7D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W6D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W7D1, MOB-W7D1.

#### Implement

- Prepare protected admin build, environment config and deployment checklist.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No secrets committed.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Admin release candidate preparation outcome in the target environment using non-production data.
- [ ] Prepare protected admin build, environment config and deployment checklist.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): admin release candidate preparation`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — ADM-W7D2: Finance and payout dry run

> **Day 2 starts only after:** ADM-W7D1.  
> **Day 2 finishes only when:** Run withdrawal queue, payout batch creation/approval/process and partial failure handling.

**Today's goal:** Run withdrawal queue, payout batch creation/approval/process and partial failure handling.

**Why today:** ADM-W7D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W7D1 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W7D2, MOB-W7D2. This does not block today's approved construction scope.

### Build in this order

1. Run withdrawal queue, payout batch creation/approval/process and partial failure handling.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Attach payout dry-run evidence.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Finance and payout dry run outcome in the target environment using non-production data.

### End-of-day result

- [ ] Run withdrawal queue, payout batch creation/approval/process and partial failure handling.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): finance and payout dry run`

**What comes next:** ADM-W7D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W7D2 — Finance and payout dry run**.

Expected result: Run withdrawal queue, payout batch creation/approval/process and partial failure handling.

Why this task matters: ADM-W7D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W7D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W7D2, MOB-W7D2.

#### Implement

- Run withdrawal queue, payout batch creation/approval/process and partial failure handling.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Attach payout dry-run evidence.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Finance and payout dry run outcome in the target environment using non-production data.
- [ ] Run withdrawal queue, payout batch creation/approval/process and partial failure handling.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): finance and payout dry run`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — ADM-W7D3: Support and operations dry run

> **Day 3 starts only after:** ADM-W7D2.  
> **Day 3 finishes only when:** Run support live chat, emergency support, reports, KYC review and wallet-support operations.

**Today's goal:** Run support live chat, emergency support, reports, KYC review and wallet-support operations.

**Why today:** ADM-W7D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W7D2 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W7D3, MOB-W7D3. This does not block today's approved construction scope.

### Build in this order

1. Run support live chat, emergency support, reports, KYC review and wallet-support operations.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Confirm support handover steps.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Support and operations dry run outcome in the target environment using non-production data.

### End-of-day result

- [ ] Run support live chat, emergency support, reports, KYC review and wallet-support operations.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): support and operations dry run`

**What comes next:** ADM-W7D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W7D3 — Support and operations dry run**.

Expected result: Run support live chat, emergency support, reports, KYC review and wallet-support operations.

Why this task matters: ADM-W7D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W7D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W7D3, MOB-W7D3.

#### Implement

- Run support live chat, emergency support, reports, KYC review and wallet-support operations.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Confirm support handover steps.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Do not add admin task reassignment.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Support and operations dry run outcome in the target environment using non-production data.
- [ ] Run support live chat, emergency support, reports, KYC review and wallet-support operations.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): support and operations dry run`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — ADM-W7D4: Monitoring and config validation

> **Day 4 starts only after:** ADM-W7D3.  
> **Day 4 finishes only when:** Validate use-case health, queue/provider status, remote config, coverage and audit log visibility.

**Today's goal:** Validate use-case health, queue/provider status, remote config, coverage and audit log visibility.

**Why today:** ADM-W7D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W7D3 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W7D4, MOB-W7D4. This does not block today's approved construction scope.

### Build in this order

1. Validate use-case health, queue/provider status, remote config, coverage and audit log visibility.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Confirm operational dashboard readiness.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Monitoring and config validation outcome in the target environment using non-production data.

### End-of-day result

- [ ] Validate use-case health, queue/provider status, remote config, coverage and audit log visibility.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): monitoring and config validation`

**What comes next:** ADM-W7D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W7D4 — Monitoring and config validation**.

Expected result: Validate use-case health, queue/provider status, remote config, coverage and audit log visibility.

Why this task matters: ADM-W7D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W7D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W7D4, MOB-W7D4.

#### Implement

- Validate use-case health, queue/provider status, remote config, coverage and audit log visibility.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Confirm operational dashboard readiness.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Monitoring and config validation outcome in the target environment using non-production data.
- [ ] Validate use-case health, queue/provider status, remote config, coverage and audit log visibility.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): monitoring and config validation`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — ADM-W7D5: Admin release candidate

> **Day 5 starts only after:** ADM-W7D4.  
> **Day 5 finishes only when:** Generate admin release candidate and handover notes for QA testing.

**Today's goal:** Generate admin release candidate and handover notes for QA testing.

**Why today:** ADM-W8D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W7D4 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W7D5, MOB-W7D5. This does not block today's approved construction scope.

### Build in this order

1. Generate admin release candidate and handover notes for QA testing.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Only approved fixes after RC.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Admin release candidate outcome in the target environment using non-production data.

### End-of-day result

- [ ] Generate admin release candidate and handover notes for QA testing.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): admin release candidate`

**What comes next:** ADM-W8D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W7D5 — Admin release candidate**.

Expected result: Generate admin release candidate and handover notes for QA testing.

Why this task matters: ADM-W8D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W7D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W7D5, MOB-W7D5.

#### Implement

- Generate admin release candidate and handover notes for QA testing.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Only approved fixes after RC.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Admin release candidate outcome in the target environment using non-production data.
- [ ] Generate admin release candidate and handover notes for QA testing.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): admin release candidate`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Admin daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
