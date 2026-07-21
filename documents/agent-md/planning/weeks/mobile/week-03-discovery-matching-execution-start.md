# Work2Cash Mobile — Week 3: Discovery, Matching and Active Task Start

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Build public discovery, Tasker interest, Task Owner selection and the first half of active execution.

## Before the week starts

The Mobile Week 2 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | MOB-W3D1 — Tasker discovery | MOB-W2D5 | Implement Tasker task list, nearest-first sorting UI, location filter, limited public task preview. | `feat(mobile): tasker discovery` |
| Day 2 — Tuesday | MOB-W3D2 — Tasker interest and arrival confirmation | MOB-W3D1 | Implement Tasker confirm-arrival-by-required-time, interest submit, direct offer accept/decline. | `feat(mobile): tasker interest and arrival confirmation` |
| Day 3 — Wednesday | MOB-W3D3 — Task Owner candidate selection | MOB-W3D2 | Implement candidates list, ETA/profile summary, accept/reject Tasker, movement-stage rejection copy. | `feat(mobile): task owner candidate selection` |
| Day 4 — Thursday | MOB-W3D4 — Active task status actions | MOB-W3D3 | Implement active task screen and Tasker buttons: Start Journey, I have arrived, Begin Task. | `feat(mobile): active task status actions` |
| Day 5 — Friday | MOB-W3D5 — Chat, tracking, masked call entry | MOB-W3D4 | Implement task chat, voice note metadata flow, live tracking UI, masked call button and proxy number display. | `feat(mobile): chat tracking masked call entry` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — MOB-W3D1: Tasker discovery

> **Day 1 starts only after:** MOB-W2D5.  
> **Day 1 finishes only when:** Implement Tasker task list, nearest-first sorting UI, location filter, limited public task preview.

**Today's goal:** Implement Tasker task list, nearest-first sorting UI, location filter, limited public task preview.

**Why today:** MOB-W3D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W2D5 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W3D1. This does not block today's approved construction scope.

### Build in this order

1. Implement Tasker task list, nearest-first sorting UI, location filter, limited public task preview.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Exact address/media hidden before eligibility.
- Use `mode`; do not introduce `activeMode`.
- Required references: CONTRACT-001, MF-07, MF-09.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Tasker discovery outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement Tasker task list, nearest-first sorting UI, location filter, limited public task preview.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): tasker discovery`

**What comes next:** MOB-W3D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W3D1 — Tasker discovery**.

Expected result: Implement Tasker task list, nearest-first sorting UI, location filter, limited public task preview.

Why this task matters: MOB-W3D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: MF-07, MF-09, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W2D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W3D1.

#### Implement

- Implement Tasker task list, nearest-first sorting UI, location filter, limited public task preview.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Exact address/media hidden before eligibility.
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Tasker discovery outcome in the target environment using non-production data.
- [ ] Implement Tasker task list, nearest-first sorting UI, location filter, limited public task preview.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): tasker discovery`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — MOB-W3D2: Tasker interest and arrival confirmation

> **Day 2 starts only after:** MOB-W3D1.  
> **Day 2 finishes only when:** Implement Tasker confirm-arrival-by-required-time, interest submit, direct offer accept/decline.

**Today's goal:** Implement Tasker confirm-arrival-by-required-time, interest submit, direct offer accept/decline.

**Why today:** MOB-W3D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W3D1 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W3D2. This does not block today's approved construction scope.

### Build in this order

1. Implement Tasker confirm-arrival-by-required-time, interest submit, direct offer accept/decline.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Tasker must be in Nigeria to accept.
- Do not make direct offers socket-based; durable state remains REST/FCM driven.
- Required references: CONTRACT-001, MF-08, MF-09.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Tasker interest and arrival confirmation outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement Tasker confirm-arrival-by-required-time, interest submit, direct offer accept/decline.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): tasker interest and arrival confirmation`

**What comes next:** MOB-W3D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W3D2 — Tasker interest and arrival confirmation**.

Expected result: Implement Tasker confirm-arrival-by-required-time, interest submit, direct offer accept/decline.

Why this task matters: MOB-W3D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: MF-08, MF-09, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W3D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W3D2.

#### Implement

- Implement Tasker confirm-arrival-by-required-time, interest submit, direct offer accept/decline.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Tasker must be in Nigeria to accept.
- Do not make direct offers socket-based; durable state remains REST/FCM driven.
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Tasker interest and arrival confirmation outcome in the target environment using non-production data.
- [ ] Implement Tasker confirm-arrival-by-required-time, interest submit, direct offer accept/decline.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): tasker interest and arrival confirmation`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — MOB-W3D3: Task Owner candidate selection

> **Day 3 starts only after:** MOB-W3D2.  
> **Day 3 finishes only when:** Implement candidates list, ETA/profile summary, accept/reject Tasker, movement-stage rejection copy.

**Today's goal:** Implement candidates list, ETA/profile summary, accept/reject Tasker, movement-stage rejection copy.

**Why today:** MOB-W3D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W3D2 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W3D3. This does not block today's approved construction scope.

### Build in this order

1. Implement candidates list, ETA/profile summary, accept/reject Tasker, movement-stage rejection copy.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Task Owner decides based on ETA.
- Use `mode`; do not introduce `activeMode`.
- Required references: CONTRACT-001, MF-07, MF-11.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Task Owner candidate selection outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement candidates list, ETA/profile summary, accept/reject Tasker, movement-stage rejection copy.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): task owner candidate selection`

**What comes next:** MOB-W3D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W3D3 — Task Owner candidate selection**.

Expected result: Implement candidates list, ETA/profile summary, accept/reject Tasker, movement-stage rejection copy.

Why this task matters: MOB-W3D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: MF-07, MF-11, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W3D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W3D3.

#### Implement

- Implement candidates list, ETA/profile summary, accept/reject Tasker, movement-stage rejection copy.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Task Owner decides based on ETA.
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Task Owner candidate selection outcome in the target environment using non-production data.
- [ ] Implement candidates list, ETA/profile summary, accept/reject Tasker, movement-stage rejection copy.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): task owner candidate selection`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — MOB-W3D4: Active task status actions

> **Day 4 starts only after:** MOB-W3D3.  
> **Day 4 finishes only when:** Implement active task screen and Tasker buttons: Start Journey, I have arrived, Begin Task.

**Today's goal:** Implement active task screen and Tasker buttons: Start Journey, I have arrived, Begin Task.

**Why today:** MOB-W3D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W3D3 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W3D4. This does not block today's approved construction scope.

### Build in this order

1. Implement active task screen and Tasker buttons: Start Journey, I have arrived, Begin Task.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Persist every state transition through REST.
- Use `mode`; do not introduce `activeMode`.
- Required references: CONTRACT-001, MF-10.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Active task status actions outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement active task screen and Tasker buttons: Start Journey, I have arrived, Begin Task.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): active task status actions`

**What comes next:** MOB-W3D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W3D4 — Active task status actions**.

Expected result: Implement active task screen and Tasker buttons: Start Journey, I have arrived, Begin Task.

Why this task matters: MOB-W3D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: MF-10, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm MOB-W3D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W3D4.

#### Implement

- Implement active task screen and Tasker buttons: Start Journey, I have arrived, Begin Task.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Persist every state transition through REST.
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Active task status actions outcome in the target environment using non-production data.
- [ ] Implement active task screen and Tasker buttons: Start Journey, I have arrived, Begin Task.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): active task status actions`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — MOB-W3D5: Chat, tracking, masked call entry

> **Day 5 starts only after:** MOB-W3D4.  
> **Day 5 finishes only when:** Implement task chat, voice note metadata flow, live tracking UI, masked call button and proxy number display.

**Today's goal:** Implement task chat, voice note metadata flow, live tracking UI, masked call button and proxy number display.

**Why today:** MOB-W4D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W3D4 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W3D5. This does not block today's approved construction scope.

### Build in this order

1. Implement task chat, voice note metadata flow, live tracking UI, masked call button and proxy number display.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Socket reconnect must refresh REST state.
- Required references: CONTRACT-001, MF-10, MF-16, SF-10.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Chat, tracking, masked call entry outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement task chat, voice note metadata flow, live tracking UI, masked call button and proxy number display.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): chat tracking masked call entry`

**What comes next:** MOB-W4D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W3D5 — Chat, tracking, masked call entry**.

Expected result: Implement task chat, voice note metadata flow, live tracking UI, masked call button and proxy number display.

Why this task matters: MOB-W4D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: MF-10, MF-16, SF-10, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W3D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W3D5.

#### Implement

- Implement task chat, voice note metadata flow, live tracking UI, masked call button and proxy number display.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Socket reconnect must refresh REST state.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Chat, tracking, masked call entry outcome in the target environment using non-production data.
- [ ] Implement task chat, voice note metadata flow, live tracking UI, masked call button and proxy number display.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): chat tracking masked call entry`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Mobile daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
