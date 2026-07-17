# Work2Cash Admin — Week 3: Discovery, Matching and Active Task Start

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Build public discovery, Tasker interest, Task Owner selection and the first half of active execution.

## Before the week starts

The Admin Week 2 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | ADM-W3D1 — Discovery/matching monitor | ADM-W2D5 | Add task interest, direct offer, candidates, accept/reject timeline to task detail. | `feat(admin): discovery matching monitor` |
| Day 2 — Tuesday | ADM-W3D2 — Active task operations | ADM-W3D1 | Add active status timeline: en route, arrived, in progress, tracking/ETA summary. | `feat(admin): active task operations` |
| Day 3 — Wednesday | ADM-W3D3 — Controlled force cancel | ADM-W3D2 | Implement force-cancel action with permission, reason, impact preview and audit. | `feat(admin): controlled force cancel` |
| Day 4 — Thursday | ADM-W3D4 — Support live chat console | ADM-W3D3 | Implement support queue, conversation view and case linking shell. | `feat(admin): support live chat console` |
| Day 5 — Friday | ADM-W3D5 — Communication audit view | ADM-W3D4 | Show chat/voice/masked call metadata and off-platform flags where permitted. | `feat(admin): communication audit view` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — ADM-W3D1: Discovery/matching monitor

> **Day 1 starts only after:** ADM-W2D5.  
> **Day 1 finishes only when:** Add task interest, direct offer, candidates, accept/reject timeline to task detail.

**Today's goal:** Add task interest, direct offer, candidates, accept/reject timeline to task detail.

**Why today:** ADM-W3D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W2D5 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-03. This does not block today's approved construction scope.

### Build in this order

1. Add task interest, direct offer, candidates, accept/reject timeline to task detail.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-03.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Follows mobile matching flows.
- Do not make direct offers socket-based; durable state remains REST/FCM driven.
- Required references: CONTRACT-001, AF-05.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Discovery/matching monitor outcome in the target environment using non-production data.

### End-of-day result

- [ ] Add task interest, direct offer, candidates, accept/reject timeline to task detail.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): discovery matching monitor`

**What comes next:** ADM-W3D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W3D1 — Discovery/matching monitor**.

Expected result: Add task interest, direct offer, candidates, accept/reject timeline to task detail.

Why this task matters: ADM-W3D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: AF-05, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W2D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-03.

#### Implement

- Add task interest, direct offer, candidates, accept/reject timeline to task detail.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-03.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Follows mobile matching flows.
- Do not make direct offers socket-based; durable state remains REST/FCM driven.
- Do not add admin task reassignment.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Discovery/matching monitor outcome in the target environment using non-production data.
- [ ] Add task interest, direct offer, candidates, accept/reject timeline to task detail.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): discovery matching monitor`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — ADM-W3D2: Active task operations

> **Day 2 starts only after:** ADM-W3D1.  
> **Day 2 finishes only when:** Add active status timeline: en route, arrived, in progress, tracking/ETA summary.

**Today's goal:** Add active status timeline: en route, arrived, in progress, tracking/ETA summary.

**Why today:** ADM-W3D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W3D1 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-03. This does not block today's approved construction scope.

### Build in this order

1. Add active status timeline: en route, arrived, in progress, tracking/ETA summary.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-03.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Admin observes; does not reassign.
- Do not add admin task reassignment.
- Required references: CONTRACT-001, AF-05.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Active task operations outcome in the target environment using non-production data.

### End-of-day result

- [ ] Add active status timeline: en route, arrived, in progress, tracking/ETA summary.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): active task operations`

**What comes next:** ADM-W3D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W3D2 — Active task operations**.

Expected result: Add active status timeline: en route, arrived, in progress, tracking/ETA summary.

Why this task matters: ADM-W3D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: AF-05, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W3D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-03.

#### Implement

- Add active status timeline: en route, arrived, in progress, tracking/ETA summary.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-03.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Admin observes; does not reassign.
- Do not add admin task reassignment.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Active task operations outcome in the target environment using non-production data.
- [ ] Add active status timeline: en route, arrived, in progress, tracking/ETA summary.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): active task operations`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — ADM-W3D3: Controlled force cancel

> **Day 3 starts only after:** ADM-W3D2.  
> **Day 3 finishes only when:** Implement force-cancel action with permission, reason, impact preview and audit.

**Today's goal:** Implement force-cancel action with permission, reason, impact preview and audit.

**Why today:** ADM-W3D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W3D2 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-03. This does not block today's approved construction scope.

### Build in this order

1. Implement force-cancel action with permission, reason, impact preview and audit.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-03.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No admin reassignment under any condition.
- Required references: CONTRACT-001, AF-05, ASF-06.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Controlled force cancel outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement force-cancel action with permission, reason, impact preview and audit.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): controlled force cancel`

**What comes next:** ADM-W3D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W3D3 — Controlled force cancel**.

Expected result: Implement force-cancel action with permission, reason, impact preview and audit.

Why this task matters: ADM-W3D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: AF-05, ASF-06, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm ADM-W3D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-03.

#### Implement

- Implement force-cancel action with permission, reason, impact preview and audit.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-03.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No admin reassignment under any condition.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Controlled force cancel outcome in the target environment using non-production data.
- [ ] Implement force-cancel action with permission, reason, impact preview and audit.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): controlled force cancel`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — ADM-W3D4: Support live chat console

> **Day 4 starts only after:** ADM-W3D3.  
> **Day 4 finishes only when:** Implement support queue, conversation view and case linking shell.

**Today's goal:** Implement support queue, conversation view and case linking shell.

**Why today:** ADM-W3D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W3D3 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-05. This does not block today's approved construction scope.

### Build in this order

1. Implement support queue, conversation view and case linking shell.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-05.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Follows mobile support live chat.
- Required references: CONTRACT-001, AF-07.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Support live chat console outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement support queue, conversation view and case linking shell.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): support live chat console`

**What comes next:** ADM-W3D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W3D4 — Support live chat console**.

Expected result: Implement support queue, conversation view and case linking shell.

Why this task matters: ADM-W3D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: AF-07, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm ADM-W3D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-05.

#### Implement

- Implement support queue, conversation view and case linking shell.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-05.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Follows mobile support live chat.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Support live chat console outcome in the target environment using non-production data.
- [ ] Implement support queue, conversation view and case linking shell.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): support live chat console`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — ADM-W3D5: Communication audit view

> **Day 5 starts only after:** ADM-W3D4.  
> **Day 5 finishes only when:** Show chat/voice/masked call metadata and off-platform flags where permitted.

**Today's goal:** Show chat/voice/masked call metadata and off-platform flags where permitted.

**Why today:** ADM-W4D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W3D4 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-05. This does not block today's approved construction scope.

### Build in this order

1. Show chat/voice/masked call metadata and off-platform flags where permitted.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-05.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Do not expose unnecessary private content.
- Required references: CONTRACT-001, AF-05, AF-14.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Communication audit view outcome in the target environment using non-production data.

### End-of-day result

- [ ] Show chat/voice/masked call metadata and off-platform flags where permitted.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): communication audit view`

**What comes next:** ADM-W4D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W3D5 — Communication audit view**.

Expected result: Show chat/voice/masked call metadata and off-platform flags where permitted.

Why this task matters: ADM-W4D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: AF-05, AF-14, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W3D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-05.

#### Implement

- Show chat/voice/masked call metadata and off-platform flags where permitted.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-05.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Do not expose unnecessary private content.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Communication audit view outcome in the target environment using non-production data.
- [ ] Show chat/voice/masked call metadata and off-platform flags where permitted.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): communication audit view`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Admin daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
