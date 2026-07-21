# Work2Cash Mobile — Week 8: Stabilization, Go-Live Rehearsal and Build Freeze

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Complete the final defect pass, go-live rehearsal, documentation handover and controlled build freeze before formal testing starts.

## Before the week starts

The Mobile Week 7 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | MOB-W8D1 — Stabilization sprint | MOB-W7D5 | Apply approved release-candidate fixes and polish only. | `feat(mobile): stabilization sprint` |
| Day 2 — Tuesday | MOB-W8D2 — Final defect pass | MOB-W8D1 | Re-test fixed defects and run critical mobile happy paths. | `feat(mobile): final defect pass` |
| Day 3 — Wednesday | MOB-W8D3 — Go-live rehearsal | MOB-W8D2 | Run Task Owner, Tasker and support journeys exactly as launch users will experience them. | `feat(mobile): go live rehearsal` |
| Day 4 — Thursday | MOB-W8D4 — Handover and store readiness | MOB-W8D3 | Confirm legal/help links, app permissions, screenshots/test notes and support handover notes. | `feat(mobile): handover and store readiness` |
| Day 5 — Friday | MOB-W8D5 — Build freeze | MOB-W8D4 | Freeze mobile build for formal testing weeks. | `feat(mobile): build freeze` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — MOB-W8D1: Stabilization sprint

> **Day 1 starts only after:** MOB-W7D5.  
> **Day 1 finishes only when:** Apply approved release-candidate fixes and polish only.

**Today's goal:** Apply approved release-candidate fixes and polish only.

**Why today:** MOB-W8D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W7D5 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W8D1. This does not block today's approved construction scope.

### Build in this order

1. Apply approved release-candidate fixes and polish only.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No new features.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Stabilization sprint outcome in the target environment using non-production data.

### End-of-day result

- [ ] Apply approved release-candidate fixes and polish only.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): stabilization sprint`

**What comes next:** MOB-W8D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W8D1 — Stabilization sprint**.

Expected result: Apply approved release-candidate fixes and polish only.

Why this task matters: MOB-W8D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W7D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W8D1.

#### Implement

- Apply approved release-candidate fixes and polish only.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No new features.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Stabilization sprint outcome in the target environment using non-production data.
- [ ] Apply approved release-candidate fixes and polish only.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): stabilization sprint`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — MOB-W8D2: Final defect pass

> **Day 2 starts only after:** MOB-W8D1.  
> **Day 2 finishes only when:** Re-test fixed defects and run critical mobile happy paths.

**Today's goal:** Re-test fixed defects and run critical mobile happy paths.

**Why today:** MOB-W8D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W8D1 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W8D2. This does not block today's approved construction scope.

### Build in this order

1. Re-test fixed defects and run critical mobile happy paths.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Close or classify every mobile defect.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Final defect pass outcome in the target environment using non-production data.

### End-of-day result

- [ ] Re-test fixed defects and run critical mobile happy paths.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): final defect pass`

**What comes next:** MOB-W8D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W8D2 — Final defect pass**.

Expected result: Re-test fixed defects and run critical mobile happy paths.

Why this task matters: MOB-W8D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm MOB-W8D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W8D2.

#### Implement

- Re-test fixed defects and run critical mobile happy paths.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Close or classify every mobile defect.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Final defect pass outcome in the target environment using non-production data.
- [ ] Re-test fixed defects and run critical mobile happy paths.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): final defect pass`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — MOB-W8D3: Go-live rehearsal

> **Day 3 starts only after:** MOB-W8D2.  
> **Day 3 finishes only when:** Run Task Owner, Tasker and support journeys exactly as launch users will experience them.

**Today's goal:** Run Task Owner, Tasker and support journeys exactly as launch users will experience them.

**Why today:** MOB-W8D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W8D2 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W8D3. This does not block today's approved construction scope.

### Build in this order

1. Run Task Owner, Tasker and support journeys exactly as launch users will experience them.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Document launch rehearsal evidence.
- Use `mode`; do not introduce `activeMode`.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Go-live rehearsal outcome in the target environment using non-production data.

### End-of-day result

- [ ] Run Task Owner, Tasker and support journeys exactly as launch users will experience them.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): go live rehearsal`

**What comes next:** MOB-W8D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W8D3 — Go-live rehearsal**.

Expected result: Run Task Owner, Tasker and support journeys exactly as launch users will experience them.

Why this task matters: MOB-W8D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm MOB-W8D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W8D3.

#### Implement

- Run Task Owner, Tasker and support journeys exactly as launch users will experience them.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Document launch rehearsal evidence.
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Go-live rehearsal outcome in the target environment using non-production data.
- [ ] Run Task Owner, Tasker and support journeys exactly as launch users will experience them.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): go live rehearsal`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — MOB-W8D4: Handover and store readiness

> **Day 4 starts only after:** MOB-W8D3.  
> **Day 4 finishes only when:** Confirm legal/help links, app permissions, screenshots/test notes and support handover notes.

**Today's goal:** Confirm legal/help links, app permissions, screenshots/test notes and support handover notes.

**Why today:** MOB-W8D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W8D3 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W8D4. This does not block today's approved construction scope.

### Build in this order

1. Confirm legal/help links, app permissions, screenshots/test notes and support handover notes.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Prepare testing-week handover.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Handover and store readiness outcome in the target environment using non-production data.

### End-of-day result

- [ ] Confirm legal/help links, app permissions, screenshots/test notes and support handover notes.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): handover and store readiness`

**What comes next:** MOB-W8D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W8D4 — Handover and store readiness**.

Expected result: Confirm legal/help links, app permissions, screenshots/test notes and support handover notes.

Why this task matters: MOB-W8D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W8D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W8D4.

#### Implement

- Confirm legal/help links, app permissions, screenshots/test notes and support handover notes.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Prepare testing-week handover.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Handover and store readiness outcome in the target environment using non-production data.
- [ ] Confirm legal/help links, app permissions, screenshots/test notes and support handover notes.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): handover and store readiness`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — MOB-W8D5: Build freeze

> **Day 5 starts only after:** MOB-W8D4.  
> **Day 5 finishes only when:** Freeze mobile build for formal testing weeks.

**Today's goal:** Freeze mobile build for formal testing weeks.

**Why today:** The next accepted task in this team's sequence can proceed with this outcome as evidence.

**Status:** planned

### Before you start

- MOB-W8D4 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W8D5. This does not block today's approved construction scope.

### Build in this order

1. Freeze mobile build for formal testing weeks.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Only blocker fixes after this point.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Build freeze outcome in the target environment using non-production data.

### End-of-day result

- [ ] Freeze mobile build for formal testing weeks.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): build freeze`

**What comes next:** The next accepted task in this team's sequence can proceed with this outcome as evidence.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W8D5 — Build freeze**.

Expected result: Freeze mobile build for formal testing weeks.

Why this task matters: The next accepted task in this team's sequence can proceed with this outcome as evidence.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W8D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W8D5.

#### Implement

- Freeze mobile build for formal testing weeks.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Only blocker fixes after this point.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Build freeze outcome in the target environment using non-production data.
- [ ] Freeze mobile build for formal testing weeks.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): build freeze`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Mobile daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
