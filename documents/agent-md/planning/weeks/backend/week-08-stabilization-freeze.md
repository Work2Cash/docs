# Work2Cash Backend — Week 8: Stabilization, Go-Live Rehearsal and Build Freeze

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Complete the final defect pass, go-live rehearsal, documentation handover and controlled build freeze before formal testing starts.

## Before the week starts

The Backend Week 7 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | BE-W8D1 — Stabilization sprint | BE-W7D5 | Apply approved release-candidate fixes only. | `fix(release): resolve approved rc defects` |
| Day 2 — Tuesday | BE-W8D2 — Final backend defect pass | BE-W8D1 | Re-test fixed defects, run migrations, queues, sockets, webhooks and financial consistency checks. | `test(release): verify backend critical paths` |
| Day 3 — Wednesday | BE-W8D3 — Go-live rehearsal | BE-W8D2 | Run production-style deployment rehearsal, rollback rehearsal, backup restore proof and provider smoke tests. | `chore(release): run go live rehearsal` |
| Day 4 — Thursday | BE-W8D4 — Backend handover | BE-W8D3 | Finalize runbooks, env checklist, provider escalation notes, monitoring alerts and support handover. | `docs(ops): finalize backend handover` |
| Day 5 — Friday | BE-W8D5 — Backend build freeze | BE-W8D4 | Freeze backend build for formal testing weeks. | `chore(release): freeze backend build` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — BE-W8D1: Stabilization sprint

> **Day 1 starts only after:** BE-W7D5.  
> **Day 1 finishes only when:** Apply approved release-candidate fixes only.

**Today's goal:** Apply approved release-candidate fixes only.

**Why today:** BE-W8D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W7D5 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Apply approved release-candidate fixes only.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: fix(release): resolve approved rc defects
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Stabilization sprint outcome in the target environment using non-production data.

### End-of-day result

- [ ] Apply approved release-candidate fixes only.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `fix(release): resolve approved rc defects`

**What comes next:** BE-W8D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W8D1 — Stabilization sprint**.

Expected result: Apply approved release-candidate fixes only.

Why this task matters: BE-W8D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W7D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Apply approved release-candidate fixes only.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: fix(release): resolve approved rc defects

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Stabilization sprint outcome in the target environment using non-production data.
- [ ] Apply approved release-candidate fixes only.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`fix(release): resolve approved rc defects`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — BE-W8D2: Final backend defect pass

> **Day 2 starts only after:** BE-W8D1.  
> **Day 2 finishes only when:** Re-test fixed defects, run migrations, queues, sockets, webhooks and financial consistency checks.

**Today's goal:** Re-test fixed defects, run migrations, queues, sockets, webhooks and financial consistency checks.

**Why today:** BE-W8D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W8D1 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Re-test fixed defects, run migrations, queues, sockets, webhooks and financial consistency checks.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: test(release): verify backend critical paths
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Final backend defect pass outcome in the target environment using non-production data.

### End-of-day result

- [ ] Re-test fixed defects, run migrations, queues, sockets, webhooks and financial consistency checks.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `test(release): verify backend critical paths`

**What comes next:** BE-W8D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W8D2 — Final backend defect pass**.

Expected result: Re-test fixed defects, run migrations, queues, sockets, webhooks and financial consistency checks.

Why this task matters: BE-W8D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm BE-W8D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Re-test fixed defects, run migrations, queues, sockets, webhooks and financial consistency checks.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: test(release): verify backend critical paths

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Final backend defect pass outcome in the target environment using non-production data.
- [ ] Re-test fixed defects, run migrations, queues, sockets, webhooks and financial consistency checks.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`test(release): verify backend critical paths`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — BE-W8D3: Go-live rehearsal

> **Day 3 starts only after:** BE-W8D2.  
> **Day 3 finishes only when:** Run production-style deployment rehearsal, rollback rehearsal, backup restore proof and provider smoke tests.

**Today's goal:** Run production-style deployment rehearsal, rollback rehearsal, backup restore proof and provider smoke tests.

**Why today:** BE-W8D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W8D2 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Run production-style deployment rehearsal, rollback rehearsal, backup restore proof and provider smoke tests.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: chore(release): run go live rehearsal
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Go-live rehearsal outcome in the target environment using non-production data.

### End-of-day result

- [ ] Run production-style deployment rehearsal, rollback rehearsal, backup restore proof and provider smoke tests.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `chore(release): run go live rehearsal`

**What comes next:** BE-W8D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W8D3 — Go-live rehearsal**.

Expected result: Run production-style deployment rehearsal, rollback rehearsal, backup restore proof and provider smoke tests.

Why this task matters: BE-W8D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W8D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Run production-style deployment rehearsal, rollback rehearsal, backup restore proof and provider smoke tests.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: chore(release): run go live rehearsal

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Go-live rehearsal outcome in the target environment using non-production data.
- [ ] Run production-style deployment rehearsal, rollback rehearsal, backup restore proof and provider smoke tests.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`chore(release): run go live rehearsal`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — BE-W8D4: Backend handover

> **Day 4 starts only after:** BE-W8D3.  
> **Day 4 finishes only when:** Finalize runbooks, env checklist, provider escalation notes, monitoring alerts and support handover.

**Today's goal:** Finalize runbooks, env checklist, provider escalation notes, monitoring alerts and support handover.

**Why today:** BE-W8D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W8D3 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Finalize runbooks, env checklist, provider escalation notes, monitoring alerts and support handover.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: docs(ops): finalize backend handover
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Backend handover outcome in the target environment using non-production data.

### End-of-day result

- [ ] Finalize runbooks, env checklist, provider escalation notes, monitoring alerts and support handover.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `docs(ops): finalize backend handover`

**What comes next:** BE-W8D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W8D4 — Backend handover**.

Expected result: Finalize runbooks, env checklist, provider escalation notes, monitoring alerts and support handover.

Why this task matters: BE-W8D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W8D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Finalize runbooks, env checklist, provider escalation notes, monitoring alerts and support handover.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: docs(ops): finalize backend handover

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Backend handover outcome in the target environment using non-production data.
- [ ] Finalize runbooks, env checklist, provider escalation notes, monitoring alerts and support handover.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`docs(ops): finalize backend handover`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — BE-W8D5: Backend build freeze

> **Day 5 starts only after:** BE-W8D4.  
> **Day 5 finishes only when:** Freeze backend build for formal testing weeks.

**Today's goal:** Freeze backend build for formal testing weeks.

**Why today:** The next accepted task in this team's sequence can proceed with this outcome as evidence.

**Status:** planned

### Before you start

- BE-W8D4 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Freeze backend build for formal testing weeks.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: chore(release): freeze backend build
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Backend build freeze outcome in the target environment using non-production data.

### End-of-day result

- [ ] Freeze backend build for formal testing weeks.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `chore(release): freeze backend build`

**What comes next:** The next accepted task in this team's sequence can proceed with this outcome as evidence.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W8D5 — Backend build freeze**.

Expected result: Freeze backend build for formal testing weeks.

Why this task matters: The next accepted task in this team's sequence can proceed with this outcome as evidence.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W8D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Freeze backend build for formal testing weeks.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: chore(release): freeze backend build

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Backend build freeze outcome in the target environment using non-production data.
- [ ] Freeze backend build for formal testing weeks.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`chore(release): freeze backend build`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Backend daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
