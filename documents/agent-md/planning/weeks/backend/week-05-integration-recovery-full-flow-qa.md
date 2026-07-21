# Work2Cash Backend — Week 5: Operational Integration, Recovery and Full-Flow QA

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Complete secondary flows, operational admin coverage, provider validation, recovery behavior and end-to-end flow QA.

## Before the week starts

The Backend Week 4 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | BE-W5D1 — Admin operational APIs | BE-W4D5 | Implement admin users, tasks, finance, reports, media, ratings, config APIs. | `feat(admin): implement operational APIs` |
| Day 2 — Tuesday | BE-W5D2 — Referral and notification APIs | BE-W5D1 | Implement referral reward tracking, notifications list/read, announcements. | `feat(growth): implement referral and notifications` |
| Day 3 — Wednesday | BE-W5D3 — Provider hardening | BE-W5D2 | Validate Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, object storage in staging. | `fix(providers): harden staging integrations` |
| Day 4 — Thursday | BE-W5D4 — Operations/monitoring | BE-W5D3 | Implement use-case health, queue audit, provider request logs, metrics, backup status. | `feat(ops): implement use case health and monitoring` |
| Day 5 — Friday | BE-W5D5 — Integrated defect pass | BE-W5D4 | Fix defects from mobile/admin full-flow QA, contract mismatches, state recovery issues. | `fix(integration): resolve full flow defects` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — BE-W5D1: Admin operational APIs

> **Day 1 starts only after:** BE-W4D5.  
> **Day 1 finishes only when:** Implement admin users, tasks, finance, reports, media, ratings, config APIs.

**Today's goal:** Implement admin users, tasks, finance, reports, media, ratings, config APIs.

**Why today:** BE-W5D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W4D5 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement admin users, tasks, finance, reports, media, ratings, config APIs.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(admin): implement operational APIs
- Required references: CONTRACT-001, AF-03, AF-05, AF-06, AF-08, AF-13, AF-22.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Admin operational APIs outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement admin users, tasks, finance, reports, media, ratings, config APIs.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): implement operational APIs`

**What comes next:** BE-W5D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W5D1 — Admin operational APIs**.

Expected result: Implement admin users, tasks, finance, reports, media, ratings, config APIs.

Why this task matters: BE-W5D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: AF-03, AF-05, AF-06, AF-08, AF-13, AF-22, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W4D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement admin users, tasks, finance, reports, media, ratings, config APIs.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(admin): implement operational APIs

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Admin operational APIs outcome in the target environment using non-production data.
- [ ] Implement admin users, tasks, finance, reports, media, ratings, config APIs.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): implement operational APIs`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — BE-W5D2: Referral and notification APIs

> **Day 2 starts only after:** BE-W5D1.  
> **Day 2 finishes only when:** Implement referral reward tracking, notifications list/read, announcements.

**Today's goal:** Implement referral reward tracking, notifications list/read, announcements.

**Why today:** BE-W5D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W5D1 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement referral reward tracking, notifications list/read, announcements.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(growth): implement referral and notifications
- Required references: CONTRACT-REFERRAL-001, CONTRACT-001, MF-17, MF-20, AF-15, AF-21.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Referral and notification APIs outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement referral reward tracking, notifications list/read, announcements.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(growth): implement referral and notifications`

**What comes next:** BE-W5D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W5D2 — Referral and notification APIs**.

Expected result: Implement referral reward tracking, notifications list/read, announcements.

Why this task matters: BE-W5D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: MF-17, MF-20, AF-15, AF-21, CONTRACT-REFERRAL-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W5D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement referral reward tracking, notifications list/read, announcements.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(growth): implement referral and notifications

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Referral and notification APIs outcome in the target environment using non-production data.
- [ ] Implement referral reward tracking, notifications list/read, announcements.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(growth): implement referral and notifications`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — BE-W5D3: Provider hardening

> **Day 3 starts only after:** BE-W5D2.  
> **Day 3 finishes only when:** Validate Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, object storage in staging.

**Today's goal:** Validate Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, object storage in staging.

**Why today:** BE-W5D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W5D2 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Validate Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, object storage in staging.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: fix(providers): harden staging integrations
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Provider hardening outcome in the target environment using non-production data.

### End-of-day result

- [ ] Validate Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, object storage in staging.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `fix(providers): harden staging integrations`

**What comes next:** BE-W5D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W5D3 — Provider hardening**.

Expected result: Validate Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, object storage in staging.

Why this task matters: BE-W5D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W5D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Validate Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, object storage in staging.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: fix(providers): harden staging integrations

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Provider hardening outcome in the target environment using non-production data.
- [ ] Validate Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, object storage in staging.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`fix(providers): harden staging integrations`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — BE-W5D4: Operations/monitoring

> **Day 4 starts only after:** BE-W5D3.  
> **Day 4 finishes only when:** Implement use-case health, queue audit, provider request logs, metrics, backup status.

**Today's goal:** Implement use-case health, queue audit, provider request logs, metrics, backup status.

**Why today:** BE-W5D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W5D3 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement use-case health, queue audit, provider request logs, metrics, backup status.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(ops): implement use case health and monitoring
- Required references: CONTRACT-001, AF-19, AF-20.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Operations/monitoring outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement use-case health, queue audit, provider request logs, metrics, backup status.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(ops): implement use case health and monitoring`

**What comes next:** BE-W5D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W5D4 — Operations/monitoring**.

Expected result: Implement use-case health, queue audit, provider request logs, metrics, backup status.

Why this task matters: BE-W5D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: AF-19, AF-20, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W5D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement use-case health, queue audit, provider request logs, metrics, backup status.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(ops): implement use case health and monitoring

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Operations/monitoring outcome in the target environment using non-production data.
- [ ] Implement use-case health, queue audit, provider request logs, metrics, backup status.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(ops): implement use case health and monitoring`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — BE-W5D5: Integrated defect pass

> **Day 5 starts only after:** BE-W5D4.  
> **Day 5 finishes only when:** Fix defects from mobile/admin full-flow QA, contract mismatches, state recovery issues.

**Today's goal:** Fix defects from mobile/admin full-flow QA, contract mismatches, state recovery issues.

**Why today:** BE-W6D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W5D4 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Fix defects from mobile/admin full-flow QA, contract mismatches, state recovery issues.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: fix(integration): resolve full flow defects
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Integrated defect pass outcome in the target environment using non-production data.

### End-of-day result

- [ ] Fix defects from mobile/admin full-flow QA, contract mismatches, state recovery issues.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `fix(integration): resolve full flow defects`

**What comes next:** BE-W6D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W5D5 — Integrated defect pass**.

Expected result: Fix defects from mobile/admin full-flow QA, contract mismatches, state recovery issues.

Why this task matters: BE-W6D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm BE-W5D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Fix defects from mobile/admin full-flow QA, contract mismatches, state recovery issues.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: fix(integration): resolve full flow defects

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Integrated defect pass outcome in the target environment using non-production data.
- [ ] Fix defects from mobile/admin full-flow QA, contract mismatches, state recovery issues.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`fix(integration): resolve full flow defects`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Backend daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
