# Work2Cash Admin — Week 5: Operational Integration, Recovery and Full-Flow QA

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Complete secondary flows, operational admin coverage, provider validation, recovery behavior and end-to-end flow QA.

## Before the week starts

The Admin Week 4 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | ADM-W5D1 — Wallet/refund support | ADM-W4D5 | Implement wallet support flow for Task Owner excess funds and Tasker payout holds. | `feat(admin): wallet refund support` |
| Day 2 — Tuesday | ADM-W5D2 — Notifications/announcements | ADM-W5D1 | Implement announcement composer and channel selection. | `feat(admin): notifications announcements` |
| Day 3 — Wednesday | ADM-W5D3 — Remote config and coverage | ADM-W5D2 | Implement platform config, ETA guard, media size, payout dates and coverage controls. | `feat(admin): remote config and coverage` |
| Day 4 — Thursday | ADM-W5D4 — Use-case health and monitoring | ADM-W5D3 | Implement use-case health, queue/provider status, backup status screens. | `feat(admin): use case health and monitoring` |
| Day 5 — Friday | ADM-W5D5 — Audit logs and analytics | ADM-W5D4 | Implement audit log review and basic operational analytics/reports. | `feat(admin): audit logs and analytics` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — ADM-W5D1: Wallet/refund support

> **Day 1 starts only after:** ADM-W4D5.  
> **Day 1 finishes only when:** Implement wallet support flow for Task Owner excess funds and Tasker payout holds.

**Today's goal:** Implement wallet support flow for Task Owner excess funds and Tasker payout holds.

**Why today:** ADM-W5D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W4D5 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-04. This does not block today's approved construction scope.

### Build in this order

1. Implement wallet support flow for Task Owner excess funds and Tasker payout holds.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-04.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Task Owner cannot withdraw directly.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Required references: CONTRACT-001, AF-10.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Wallet/refund support outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement wallet support flow for Task Owner excess funds and Tasker payout holds.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): wallet refund support`

**What comes next:** ADM-W5D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W5D1 — Wallet/refund support**.

Expected result: Implement wallet support flow for Task Owner excess funds and Tasker payout holds.

Why this task matters: ADM-W5D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: AF-10, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W4D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-04.

#### Implement

- Implement wallet support flow for Task Owner excess funds and Tasker payout holds.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-04.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Task Owner cannot withdraw directly.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Do not add admin task reassignment.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Wallet/refund support outcome in the target environment using non-production data.
- [ ] Implement wallet support flow for Task Owner excess funds and Tasker payout holds.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): wallet refund support`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — ADM-W5D2: Notifications/announcements

> **Day 2 starts only after:** ADM-W5D1.  
> **Day 2 finishes only when:** Implement announcement composer and channel selection.

**Today's goal:** Implement announcement composer and channel selection.

**Why today:** ADM-W5D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W5D1 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-05. This does not block today's approved construction scope.

### Build in this order

1. Implement announcement composer and channel selection.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-05.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Critical SMS only; FCM/in-app primary.
- Required references: CONTRACT-001, AF-21.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Notifications/announcements outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement announcement composer and channel selection.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): notifications announcements`

**What comes next:** ADM-W5D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W5D2 — Notifications/announcements**.

Expected result: Implement announcement composer and channel selection.

Why this task matters: ADM-W5D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: AF-21, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W5D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-05.

#### Implement

- Implement announcement composer and channel selection.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-05.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Critical SMS only; FCM/in-app primary.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Notifications/announcements outcome in the target environment using non-production data.
- [ ] Implement announcement composer and channel selection.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): notifications announcements`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — ADM-W5D3: Remote config and coverage

> **Day 3 starts only after:** ADM-W5D2.  
> **Day 3 finishes only when:** Implement platform config, ETA guard, media size, payout dates and coverage controls.

**Today's goal:** Implement platform config, ETA guard, media size, payout dates and coverage controls.

**Why today:** ADM-W5D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W5D2 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-05. This does not block today's approved construction scope.

### Build in this order

1. Implement platform config, ETA guard, media size, payout dates and coverage controls.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-05.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: All changes audited.
- Required references: CONTRACT-001, AF-12, AF-16.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Remote config and coverage outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement platform config, ETA guard, media size, payout dates and coverage controls.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): remote config and coverage`

**What comes next:** ADM-W5D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W5D3 — Remote config and coverage**.

Expected result: Implement platform config, ETA guard, media size, payout dates and coverage controls.

Why this task matters: ADM-W5D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: AF-12, AF-16, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W5D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-05.

#### Implement

- Implement platform config, ETA guard, media size, payout dates and coverage controls.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-05.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: All changes audited.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Remote config and coverage outcome in the target environment using non-production data.
- [ ] Implement platform config, ETA guard, media size, payout dates and coverage controls.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): remote config and coverage`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — ADM-W5D4: Use-case health and monitoring

> **Day 4 starts only after:** ADM-W5D3.  
> **Day 4 finishes only when:** Implement use-case health, queue/provider status, backup status screens.

**Today's goal:** Implement use-case health, queue/provider status, backup status screens.

**Why today:** ADM-W5D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W5D3 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-05. This does not block today's approved construction scope.

### Build in this order

1. Implement use-case health, queue/provider status, backup status screens.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-05.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Supports backend health visibility.
- Required references: CONTRACT-001, AF-19, AF-20.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Use-case health and monitoring outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement use-case health, queue/provider status, backup status screens.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): use case health and monitoring`

**What comes next:** ADM-W5D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W5D4 — Use-case health and monitoring**.

Expected result: Implement use-case health, queue/provider status, backup status screens.

Why this task matters: ADM-W5D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: AF-19, AF-20, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W5D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-05.

#### Implement

- Implement use-case health, queue/provider status, backup status screens.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-05.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Supports backend health visibility.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Use-case health and monitoring outcome in the target environment using non-production data.
- [ ] Implement use-case health, queue/provider status, backup status screens.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): use case health and monitoring`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — ADM-W5D5: Audit logs and analytics

> **Day 5 starts only after:** ADM-W5D4.  
> **Day 5 finishes only when:** Implement audit log review and basic operational analytics/reports.

**Today's goal:** Implement audit log review and basic operational analytics/reports.

**Why today:** ADM-W6D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W5D4 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-05. This does not block today's approved construction scope.

### Build in this order

1. Implement audit log review and basic operational analytics/reports.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-05.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Advanced analytics remain deferred.
- Do not add admin task reassignment.
- Required references: CONTRACT-001, AF-18, AF-23.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Audit logs and analytics outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement audit log review and basic operational analytics/reports.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): audit logs and analytics`

**What comes next:** ADM-W6D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W5D5 — Audit logs and analytics**.

Expected result: Implement audit log review and basic operational analytics/reports.

Why this task matters: ADM-W6D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: AF-18, AF-23, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm ADM-W5D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-05.

#### Implement

- Implement audit log review and basic operational analytics/reports.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-05.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Advanced analytics remain deferred.
- Do not add admin task reassignment.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Audit logs and analytics outcome in the target environment using non-production data.
- [ ] Implement audit log review and basic operational analytics/reports.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): audit logs and analytics`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Admin daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
