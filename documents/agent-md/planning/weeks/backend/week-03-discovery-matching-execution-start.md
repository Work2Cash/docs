# Work2Cash Backend — Week 3: Discovery, Matching and Active Task Start

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Build public discovery, Tasker interest, Task Owner selection and the first half of active execution.

## Before the week starts

The Backend Week 2 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | BE-W3D1 — Discovery APIs | BE-W2D5 | Implement Tasker task list, location filter, nearest-first sorting, limited public preview. | `feat(discovery): implement task browsing` |
| Day 2 — Tuesday | BE-W3D2 — Interest/accept APIs | BE-W3D1 | Implement Tasker interest, arrival confirmation, direct offer accept/decline, eligibility guards. | `feat(matching): implement tasker interest and acceptance` |
| Day 3 — Wednesday | BE-W3D3 — Candidate/selection APIs | BE-W3D2 | Implement candidate list with ETA snapshots, Task Owner accept/reject, rejection logging. | `feat(matching): implement candidate selection` |
| Day 4 — Thursday | BE-W3D4 — Task execution state APIs | BE-W3D3 | Implement start journey, arrived, begin, state guards and TaskStatusEvent. | `feat(tasks): implement execution state transitions` |
| Day 5 — Friday | BE-W3D5 — Socket/chat/tracking | BE-W3D4 | Implement Socket.IO auth, task rooms, support rooms shell, tracking events, ETA guard, chat persistence queue. | `feat(socket): implement task chat and tracking` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — BE-W3D1: Discovery APIs

> **Day 1 starts only after:** BE-W2D5.  
> **Day 1 finishes only when:** Implement Tasker task list, location filter, nearest-first sorting, limited public preview.

**Today's goal:** Implement Tasker task list, location filter, nearest-first sorting, limited public preview.

**Why today:** BE-W3D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W2D5 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement Tasker task list, location filter, nearest-first sorting, limited public preview.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(discovery): implement task browsing
- Use `mode`; do not introduce `activeMode`.
- Required references: CONTRACT-001, MF-07, MF-09, AF-05.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Discovery APIs outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement Tasker task list, location filter, nearest-first sorting, limited public preview.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(discovery): implement task browsing`

**What comes next:** BE-W3D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W3D1 — Discovery APIs**.

Expected result: Implement Tasker task list, location filter, nearest-first sorting, limited public preview.

Why this task matters: BE-W3D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: MF-07, MF-09, AF-05, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W2D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement Tasker task list, location filter, nearest-first sorting, limited public preview.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(discovery): implement task browsing
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Discovery APIs outcome in the target environment using non-production data.
- [ ] Implement Tasker task list, location filter, nearest-first sorting, limited public preview.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(discovery): implement task browsing`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — BE-W3D2: Interest/accept APIs

> **Day 2 starts only after:** BE-W3D1.  
> **Day 2 finishes only when:** Implement Tasker interest, arrival confirmation, direct offer accept/decline, eligibility guards.

**Today's goal:** Implement Tasker interest, arrival confirmation, direct offer accept/decline, eligibility guards.

**Why today:** BE-W3D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W3D1 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement Tasker interest, arrival confirmation, direct offer accept/decline, eligibility guards.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(matching): implement tasker interest and acceptance
- Do not make direct offers socket-based; durable state remains REST/FCM driven.
- Required references: CONTRACT-001, MF-08, MF-09.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Interest/accept APIs outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement Tasker interest, arrival confirmation, direct offer accept/decline, eligibility guards.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(matching): implement tasker interest and acceptance`

**What comes next:** BE-W3D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W3D2 — Interest/accept APIs**.

Expected result: Implement Tasker interest, arrival confirmation, direct offer accept/decline, eligibility guards.

Why this task matters: BE-W3D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: MF-08, MF-09, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W3D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement Tasker interest, arrival confirmation, direct offer accept/decline, eligibility guards.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(matching): implement tasker interest and acceptance
- Do not make direct offers socket-based; durable state remains REST/FCM driven.
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Interest/accept APIs outcome in the target environment using non-production data.
- [ ] Implement Tasker interest, arrival confirmation, direct offer accept/decline, eligibility guards.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(matching): implement tasker interest and acceptance`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — BE-W3D3: Candidate/selection APIs

> **Day 3 starts only after:** BE-W3D2.  
> **Day 3 finishes only when:** Implement candidate list with ETA snapshots, Task Owner accept/reject, rejection logging.

**Today's goal:** Implement candidate list with ETA snapshots, Task Owner accept/reject, rejection logging.

**Why today:** BE-W3D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W3D2 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement candidate list with ETA snapshots, Task Owner accept/reject, rejection logging.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(matching): implement candidate selection
- Use `mode`; do not introduce `activeMode`.
- Required references: CONTRACT-001, MF-07, MF-11, AF-05.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Candidate/selection APIs outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement candidate list with ETA snapshots, Task Owner accept/reject, rejection logging.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(matching): implement candidate selection`

**What comes next:** BE-W3D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W3D3 — Candidate/selection APIs**.

Expected result: Implement candidate list with ETA snapshots, Task Owner accept/reject, rejection logging.

Why this task matters: BE-W3D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: MF-07, MF-11, AF-05, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W3D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement candidate list with ETA snapshots, Task Owner accept/reject, rejection logging.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(matching): implement candidate selection
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Candidate/selection APIs outcome in the target environment using non-production data.
- [ ] Implement candidate list with ETA snapshots, Task Owner accept/reject, rejection logging.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(matching): implement candidate selection`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — BE-W3D4: Task execution state APIs

> **Day 4 starts only after:** BE-W3D3.  
> **Day 4 finishes only when:** Implement start journey, arrived, begin, state guards and TaskStatusEvent.

**Today's goal:** Implement start journey, arrived, begin, state guards and TaskStatusEvent.

**Why today:** BE-W3D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W3D3 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement start journey, arrived, begin, state guards and TaskStatusEvent.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(tasks): implement execution state transitions
- Required references: CONTRACT-001, MF-10, AF-05.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Task execution state APIs outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement start journey, arrived, begin, state guards and TaskStatusEvent.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(tasks): implement execution state transitions`

**What comes next:** BE-W3D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W3D4 — Task execution state APIs**.

Expected result: Implement start journey, arrived, begin, state guards and TaskStatusEvent.

Why this task matters: BE-W3D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: MF-10, AF-05, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm BE-W3D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement start journey, arrived, begin, state guards and TaskStatusEvent.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(tasks): implement execution state transitions

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Task execution state APIs outcome in the target environment using non-production data.
- [ ] Implement start journey, arrived, begin, state guards and TaskStatusEvent.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(tasks): implement execution state transitions`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — BE-W3D5: Socket/chat/tracking

> **Day 5 starts only after:** BE-W3D4.  
> **Day 5 finishes only when:** Implement Socket.IO auth, task rooms, support rooms shell, tracking events, ETA guard, chat persistence queue.

**Today's goal:** Implement Socket.IO auth, task rooms, support rooms shell, tracking events, ETA guard, chat persistence queue.

**Why today:** BE-W4D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W3D4 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement Socket.IO auth, task rooms, support rooms shell, tracking events, ETA guard, chat persistence queue.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(socket): implement task chat and tracking
- Required references: CONTRACT-001, MF-10, MF-16, AF-05, AF-07.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Socket/chat/tracking outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement Socket.IO auth, task rooms, support rooms shell, tracking events, ETA guard, chat persistence queue.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(socket): implement task chat and tracking`

**What comes next:** BE-W4D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W3D5 — Socket/chat/tracking**.

Expected result: Implement Socket.IO auth, task rooms, support rooms shell, tracking events, ETA guard, chat persistence queue.

Why this task matters: BE-W4D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: MF-10, MF-16, AF-05, AF-07, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W3D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement Socket.IO auth, task rooms, support rooms shell, tracking events, ETA guard, chat persistence queue.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(socket): implement task chat and tracking

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Socket/chat/tracking outcome in the target environment using non-production data.
- [ ] Implement Socket.IO auth, task rooms, support rooms shell, tracking events, ETA guard, chat persistence queue.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(socket): implement task chat and tracking`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Backend daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
