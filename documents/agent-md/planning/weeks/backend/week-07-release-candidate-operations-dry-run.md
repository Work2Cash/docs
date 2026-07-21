# Work2Cash Backend — Week 7: Release Candidate Preparation and Operational Dry Runs

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Prepare Mobile, Admin and Backend release candidates while running provider, payout, monitoring, backup and support dry runs.

## Before the week starts

The Backend Week 6 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | BE-W7D1 — Release candidate backend preparation | BE-W6D5 | Freeze API contracts, generate OpenAPI, migration notes and environment checklist. | `chore(release): prepare backend release candidate` |
| Day 2 — Tuesday | BE-W7D2 — Backup and restore dry run | BE-W7D1 | Run Postgres backup, object storage upload, restore to staging/temp database and evidence capture. | `chore(ops): prove backup restore flow` |
| Day 3 — Wednesday | BE-W7D3 — Payout and finance dry run | BE-W7D2 | Run payout batch, ledger consistency, reconciliation, failed/partial transfer and disputed Tasker exclusion tests. | `test(finance): validate payout batch dry run` |
| Day 4 — Thursday | BE-W7D4 — Provider validation report | BE-W7D3 | Finalize Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, storage and Shorebird evidence. | `docs(providers): publish validation report` |
| Day 5 — Friday | BE-W7D5 — Backend release candidate | BE-W7D4 | Tag backend release candidate and hand over to formal QA. | `chore(release): tag backend release candidate` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — BE-W7D1: Release candidate backend preparation

> **Day 1 starts only after:** BE-W6D5.  
> **Day 1 finishes only when:** Freeze API contracts, generate OpenAPI, migration notes and environment checklist.

**Today's goal:** Freeze API contracts, generate OpenAPI, migration notes and environment checklist.

**Why today:** BE-W7D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W6D5 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Freeze API contracts, generate OpenAPI, migration notes and environment checklist.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: chore(release): prepare backend release candidate
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Release candidate backend preparation outcome in the target environment using non-production data.

### End-of-day result

- [ ] Freeze API contracts, generate OpenAPI, migration notes and environment checklist.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `chore(release): prepare backend release candidate`

**What comes next:** BE-W7D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W7D1 — Release candidate backend preparation**.

Expected result: Freeze API contracts, generate OpenAPI, migration notes and environment checklist.

Why this task matters: BE-W7D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W6D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Freeze API contracts, generate OpenAPI, migration notes and environment checklist.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: chore(release): prepare backend release candidate

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Release candidate backend preparation outcome in the target environment using non-production data.
- [ ] Freeze API contracts, generate OpenAPI, migration notes and environment checklist.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`chore(release): prepare backend release candidate`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — BE-W7D2: Backup and restore dry run

> **Day 2 starts only after:** BE-W7D1.  
> **Day 2 finishes only when:** Run Postgres backup, object storage upload, restore to staging/temp database and evidence capture.

**Today's goal:** Run Postgres backup, object storage upload, restore to staging/temp database and evidence capture.

**Why today:** BE-W7D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W7D1 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Run Postgres backup, object storage upload, restore to staging/temp database and evidence capture.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: chore(ops): prove backup restore flow
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Backup and restore dry run outcome in the target environment using non-production data.

### End-of-day result

- [ ] Run Postgres backup, object storage upload, restore to staging/temp database and evidence capture.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `chore(ops): prove backup restore flow`

**What comes next:** BE-W7D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W7D2 — Backup and restore dry run**.

Expected result: Run Postgres backup, object storage upload, restore to staging/temp database and evidence capture.

Why this task matters: BE-W7D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W7D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Run Postgres backup, object storage upload, restore to staging/temp database and evidence capture.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: chore(ops): prove backup restore flow

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Backup and restore dry run outcome in the target environment using non-production data.
- [ ] Run Postgres backup, object storage upload, restore to staging/temp database and evidence capture.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`chore(ops): prove backup restore flow`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — BE-W7D3: Payout and finance dry run

> **Day 3 starts only after:** BE-W7D2.  
> **Day 3 finishes only when:** Run payout batch, ledger consistency, reconciliation, failed/partial transfer and disputed Tasker exclusion tests.

**Today's goal:** Run payout batch, ledger consistency, reconciliation, failed/partial transfer and disputed Tasker exclusion tests.

**Why today:** BE-W7D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W7D2 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Run payout batch, ledger consistency, reconciliation, failed/partial transfer and disputed Tasker exclusion tests.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: test(finance): validate payout batch dry run
- Do not turn disputes into live chat.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Payout and finance dry run outcome in the target environment using non-production data.

### End-of-day result

- [ ] Run payout batch, ledger consistency, reconciliation, failed/partial transfer and disputed Tasker exclusion tests.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `test(finance): validate payout batch dry run`

**What comes next:** BE-W7D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W7D3 — Payout and finance dry run**.

Expected result: Run payout batch, ledger consistency, reconciliation, failed/partial transfer and disputed Tasker exclusion tests.

Why this task matters: BE-W7D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W7D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Run payout batch, ledger consistency, reconciliation, failed/partial transfer and disputed Tasker exclusion tests.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: test(finance): validate payout batch dry run
- Do not turn disputes into live chat.
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Payout and finance dry run outcome in the target environment using non-production data.
- [ ] Run payout batch, ledger consistency, reconciliation, failed/partial transfer and disputed Tasker exclusion tests.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`test(finance): validate payout batch dry run`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — BE-W7D4: Provider validation report

> **Day 4 starts only after:** BE-W7D3.  
> **Day 4 finishes only when:** Finalize Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, storage and Shorebird evidence.

**Today's goal:** Finalize Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, storage and Shorebird evidence.

**Why today:** BE-W7D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W7D3 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Finalize Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, storage and Shorebird evidence.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: docs(providers): publish validation report
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Provider validation report outcome in the target environment using non-production data.

### End-of-day result

- [ ] Finalize Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, storage and Shorebird evidence.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `docs(providers): publish validation report`

**What comes next:** BE-W7D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W7D4 — Provider validation report**.

Expected result: Finalize Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, storage and Shorebird evidence.

Why this task matters: BE-W7D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W7D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Finalize Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, storage and Shorebird evidence.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: docs(providers): publish validation report

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Provider validation report outcome in the target environment using non-production data.
- [ ] Finalize Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, storage and Shorebird evidence.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`docs(providers): publish validation report`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — BE-W7D5: Backend release candidate

> **Day 5 starts only after:** BE-W7D4.  
> **Day 5 finishes only when:** Tag backend release candidate and hand over to formal QA.

**Today's goal:** Tag backend release candidate and hand over to formal QA.

**Why today:** BE-W8D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W7D4 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Tag backend release candidate and hand over to formal QA.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: chore(release): tag backend release candidate
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Backend release candidate outcome in the target environment using non-production data.

### End-of-day result

- [ ] Tag backend release candidate and hand over to formal QA.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `chore(release): tag backend release candidate`

**What comes next:** BE-W8D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W7D5 — Backend release candidate**.

Expected result: Tag backend release candidate and hand over to formal QA.

Why this task matters: BE-W8D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W7D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Tag backend release candidate and hand over to formal QA.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: chore(release): tag backend release candidate

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Backend release candidate outcome in the target environment using non-production data.
- [ ] Tag backend release candidate and hand over to formal QA.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`chore(release): tag backend release candidate`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Backend daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
