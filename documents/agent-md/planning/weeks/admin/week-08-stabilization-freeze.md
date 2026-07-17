# Work2Cash Admin — Week 8: Stabilization, Go-Live Rehearsal and Build Freeze

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Complete the final defect pass, go-live rehearsal, documentation handover and controlled build freeze before formal testing starts.

## Before the week starts

The Admin Week 7 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | ADM-W8D1 — Stabilization sprint | ADM-W7D5 | Apply approved admin release-candidate fixes only. | `feat(admin): stabilization sprint` |
| Day 2 — Tuesday | ADM-W8D2 — Final admin defect pass | ADM-W8D1 | Re-test fixed defects and critical admin flows. | `feat(admin): final admin defect pass` |
| Day 3 — Wednesday | ADM-W8D3 — Go-live rehearsal | ADM-W8D2 | Run admin operations exactly as launch support and operations team will use them. | `feat(admin): go live rehearsal` |
| Day 4 — Thursday | ADM-W8D4 — Admin handover | ADM-W8D3 | Confirm role permissions, runbooks, support notes, payout notes and moderation notes. | `feat(admin): admin handover` |
| Day 5 — Friday | ADM-W8D5 — Admin build freeze | ADM-W8D4 | Freeze admin build for formal testing weeks. | `feat(admin): admin build freeze` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — ADM-W8D1: Stabilization sprint

> **Day 1 starts only after:** ADM-W7D5.  
> **Day 1 finishes only when:** Apply approved admin release-candidate fixes only.

**Today's goal:** Apply approved admin release-candidate fixes only.

**Why today:** ADM-W8D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W7D5 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W8D1, MOB-W8D1. This does not block today's approved construction scope.

### Build in this order

1. Apply approved admin release-candidate fixes only.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No new modules.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Stabilization sprint outcome in the target environment using non-production data.

### End-of-day result

- [ ] Apply approved admin release-candidate fixes only.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): stabilization sprint`

**What comes next:** ADM-W8D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W8D1 — Stabilization sprint**.

Expected result: Apply approved admin release-candidate fixes only.

Why this task matters: ADM-W8D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W7D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W8D1, MOB-W8D1.

#### Implement

- Apply approved admin release-candidate fixes only.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No new modules.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Stabilization sprint outcome in the target environment using non-production data.
- [ ] Apply approved admin release-candidate fixes only.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): stabilization sprint`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — ADM-W8D2: Final admin defect pass

> **Day 2 starts only after:** ADM-W8D1.  
> **Day 2 finishes only when:** Re-test fixed defects and critical admin flows.

**Today's goal:** Re-test fixed defects and critical admin flows.

**Why today:** ADM-W8D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W8D1 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W8D2, MOB-W8D2. This does not block today's approved construction scope.

### Build in this order

1. Re-test fixed defects and critical admin flows.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Close or classify every admin defect.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Final admin defect pass outcome in the target environment using non-production data.

### End-of-day result

- [ ] Re-test fixed defects and critical admin flows.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): final admin defect pass`

**What comes next:** ADM-W8D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W8D2 — Final admin defect pass**.

Expected result: Re-test fixed defects and critical admin flows.

Why this task matters: ADM-W8D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm ADM-W8D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W8D2, MOB-W8D2.

#### Implement

- Re-test fixed defects and critical admin flows.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Close or classify every admin defect.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Final admin defect pass outcome in the target environment using non-production data.
- [ ] Re-test fixed defects and critical admin flows.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): final admin defect pass`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — ADM-W8D3: Go-live rehearsal

> **Day 3 starts only after:** ADM-W8D2.  
> **Day 3 finishes only when:** Run admin operations exactly as launch support and operations team will use them.

**Today's goal:** Run admin operations exactly as launch support and operations team will use them.

**Why today:** ADM-W8D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W8D2 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W8D3, MOB-W8D3. This does not block today's approved construction scope.

### Build in this order

1. Run admin operations exactly as launch support and operations team will use them.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Document launch rehearsal evidence.
- Do not add admin task reassignment.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Go-live rehearsal outcome in the target environment using non-production data.

### End-of-day result

- [ ] Run admin operations exactly as launch support and operations team will use them.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): go live rehearsal`

**What comes next:** ADM-W8D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W8D3 — Go-live rehearsal**.

Expected result: Run admin operations exactly as launch support and operations team will use them.

Why this task matters: ADM-W8D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm ADM-W8D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W8D3, MOB-W8D3.

#### Implement

- Run admin operations exactly as launch support and operations team will use them.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Document launch rehearsal evidence.
- Do not add admin task reassignment.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Go-live rehearsal outcome in the target environment using non-production data.
- [ ] Run admin operations exactly as launch support and operations team will use them.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): go live rehearsal`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — ADM-W8D4: Admin handover

> **Day 4 starts only after:** ADM-W8D3.  
> **Day 4 finishes only when:** Confirm role permissions, runbooks, support notes, payout notes and moderation notes.

**Today's goal:** Confirm role permissions, runbooks, support notes, payout notes and moderation notes.

**Why today:** ADM-W8D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W8D3 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W8D4, MOB-W8D4. This does not block today's approved construction scope.

### Build in this order

1. Confirm role permissions, runbooks, support notes, payout notes and moderation notes.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Prepare testing-week handover.
- Use `mode`; do not introduce `activeMode`.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Admin handover outcome in the target environment using non-production data.

### End-of-day result

- [ ] Confirm role permissions, runbooks, support notes, payout notes and moderation notes.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): admin handover`

**What comes next:** ADM-W8D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W8D4 — Admin handover**.

Expected result: Confirm role permissions, runbooks, support notes, payout notes and moderation notes.

Why this task matters: ADM-W8D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W8D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W8D4, MOB-W8D4.

#### Implement

- Confirm role permissions, runbooks, support notes, payout notes and moderation notes.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Prepare testing-week handover.
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Admin handover outcome in the target environment using non-production data.
- [ ] Confirm role permissions, runbooks, support notes, payout notes and moderation notes.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): admin handover`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — ADM-W8D5: Admin build freeze

> **Day 5 starts only after:** ADM-W8D4.  
> **Day 5 finishes only when:** Freeze admin build for formal testing weeks.

**Today's goal:** Freeze admin build for formal testing weeks.

**Why today:** The next accepted task in this team's sequence can proceed with this outcome as evidence.

**Status:** planned

### Before you start

- ADM-W8D4 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W8D5, MOB-W8D5. This does not block today's approved construction scope.

### Build in this order

1. Freeze admin build for formal testing weeks.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Only blocker fixes after this point.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Admin build freeze outcome in the target environment using non-production data.

### End-of-day result

- [ ] Freeze admin build for formal testing weeks.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): admin build freeze`

**What comes next:** The next accepted task in this team's sequence can proceed with this outcome as evidence.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W8D5 — Admin build freeze**.

Expected result: Freeze admin build for formal testing weeks.

Why this task matters: The next accepted task in this team's sequence can proceed with this outcome as evidence.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W8D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W8D5, MOB-W8D5.

#### Implement

- Freeze admin build for formal testing weeks.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Only blocker fixes after this point.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Admin build freeze outcome in the target environment using non-production data.
- [ ] Freeze admin build for formal testing weeks.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): admin build freeze`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Admin daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
