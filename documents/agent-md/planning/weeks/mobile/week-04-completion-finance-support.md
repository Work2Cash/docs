# Work2Cash Mobile — Week 4: Completion, Exceptions, Trust and Finance

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Close the task lifecycle with completion, settlement, cancellation, no-show, reports, ratings, favorites, wallet, withdrawal and support.

## Before the week starts

The Mobile Week 3 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | MOB-W4D1 — Completion and settlement | MOB-W3D5 | Implement completion proof upload, request completion, Task Owner approval, settlement pending/held states. | `feat(mobile): completion and settlement` |
| Day 2 — Tuesday | MOB-W4D2 — Cancellation, no-show, report | MOB-W4D1 | Implement cancellation/no-show flows, warning/strike messaging, report/dispute creation and status. | `feat(mobile): cancellation no show report` |
| Day 3 — Wednesday | MOB-W4D3 — Ratings, favorites, reviews | MOB-W4D2 | Implement post-completion rating, review, add favorite, report review entry. | `feat(mobile): ratings favorites reviews` |
| Day 4 — Thursday | MOB-W4D4 — Wallet and withdrawal | MOB-W4D3 | Implement wallets, ledger, payout account setup, PIN-confirmed withdrawal, batch-date status. | `feat(mobile): wallet and withdrawal` |
| Day 5 — Friday | MOB-W4D5 — Support and emergency | MOB-W4D4 | Implement support live chat, emergency support, ticket/report linking, support attachment flow. | `feat(mobile): support and emergency` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — MOB-W4D1: Completion and settlement

> **Day 1 starts only after:** MOB-W3D5.  
> **Day 1 finishes only when:** Implement completion proof upload, request completion, Task Owner approval, settlement pending/held states.

**Today's goal:** Implement completion proof upload, request completion, Task Owner approval, settlement pending/held states.

**Why today:** MOB-W4D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W3D5 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W4D1. This does not block today's approved construction scope.

### Build in this order

1. Implement completion proof upload, request completion, Task Owner approval, settlement pending/held states.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Dispute can hold affected payout only.
- Use `mode`; do not introduce `activeMode`.
- Required references: CONTRACT-001, MF-14, SF-05.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Completion and settlement outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement completion proof upload, request completion, Task Owner approval, settlement pending/held states.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): completion and settlement`

**What comes next:** MOB-W4D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W4D1 — Completion and settlement**.

Expected result: Implement completion proof upload, request completion, Task Owner approval, settlement pending/held states.

Why this task matters: MOB-W4D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: MF-14, SF-05, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W3D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W4D1.

#### Implement

- Implement completion proof upload, request completion, Task Owner approval, settlement pending/held states.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Dispute can hold affected payout only.
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Completion and settlement outcome in the target environment using non-production data.
- [ ] Implement completion proof upload, request completion, Task Owner approval, settlement pending/held states.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): completion and settlement`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — MOB-W4D2: Cancellation, no-show, report

> **Day 2 starts only after:** MOB-W4D1.  
> **Day 2 finishes only when:** Implement cancellation/no-show flows, warning/strike messaging, report/dispute creation and status.

**Today's goal:** Implement cancellation/no-show flows, warning/strike messaging, report/dispute creation and status.

**Why today:** MOB-W4D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W4D1 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W4D2. This does not block today's approved construction scope.

### Build in this order

1. Implement cancellation/no-show flows, warning/strike messaging, report/dispute creation and status.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Penalty rules shown before confirmation.
- Do not turn disputes into live chat.
- Required references: CONTRACT-001, MF-12, SF-08.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Cancellation, no-show, report outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement cancellation/no-show flows, warning/strike messaging, report/dispute creation and status.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): cancellation no show report`

**What comes next:** MOB-W4D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W4D2 — Cancellation, no-show, report**.

Expected result: Implement cancellation/no-show flows, warning/strike messaging, report/dispute creation and status.

Why this task matters: MOB-W4D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: MF-12, SF-08, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W4D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W4D2.

#### Implement

- Implement cancellation/no-show flows, warning/strike messaging, report/dispute creation and status.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Penalty rules shown before confirmation.
- Do not turn disputes into live chat.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Cancellation, no-show, report outcome in the target environment using non-production data.
- [ ] Implement cancellation/no-show flows, warning/strike messaging, report/dispute creation and status.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): cancellation no show report`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — MOB-W4D3: Ratings, favorites, reviews

> **Day 3 starts only after:** MOB-W4D2.  
> **Day 3 finishes only when:** Implement post-completion rating, review, add favorite, report review entry.

**Today's goal:** Implement post-completion rating, review, add favorite, report review entry.

**Why today:** MOB-W4D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W4D2 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W4D3. This does not block today's approved construction scope.

### Build in this order

1. Implement post-completion rating, review, add favorite, report review entry.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: One rating per actor per completed task.
- Required references: CONTRACT-001, MF-15, MF-22.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Ratings, favorites, reviews outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement post-completion rating, review, add favorite, report review entry.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): ratings favorites reviews`

**What comes next:** MOB-W4D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W4D3 — Ratings, favorites, reviews**.

Expected result: Implement post-completion rating, review, add favorite, report review entry.

Why this task matters: MOB-W4D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: MF-15, MF-22, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm MOB-W4D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W4D3.

#### Implement

- Implement post-completion rating, review, add favorite, report review entry.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: One rating per actor per completed task.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Ratings, favorites, reviews outcome in the target environment using non-production data.
- [ ] Implement post-completion rating, review, add favorite, report review entry.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): ratings favorites reviews`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — MOB-W4D4: Wallet and withdrawal

> **Day 4 starts only after:** MOB-W4D3.  
> **Day 4 finishes only when:** Implement wallets, ledger, payout account setup, PIN-confirmed withdrawal, batch-date status.

**Today's goal:** Implement wallets, ledger, payout account setup, PIN-confirmed withdrawal, batch-date status.

**Why today:** MOB-W4D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W4D3 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W4D4. This does not block today's approved construction scope.

### Build in this order

1. Implement wallets, ledger, payout account setup, PIN-confirmed withdrawal, batch-date status.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Payout batches: 14th and 28th.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Required references: CONTRACT-001, MF-13, SF-07, SF-12.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Wallet and withdrawal outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement wallets, ledger, payout account setup, PIN-confirmed withdrawal, batch-date status.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): wallet and withdrawal`

**What comes next:** MOB-W4D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W4D4 — Wallet and withdrawal**.

Expected result: Implement wallets, ledger, payout account setup, PIN-confirmed withdrawal, batch-date status.

Why this task matters: MOB-W4D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: MF-13, SF-07, SF-12, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W4D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W4D4.

#### Implement

- Implement wallets, ledger, payout account setup, PIN-confirmed withdrawal, batch-date status.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Payout batches: 14th and 28th.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Wallet and withdrawal outcome in the target environment using non-production data.
- [ ] Implement wallets, ledger, payout account setup, PIN-confirmed withdrawal, batch-date status.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): wallet and withdrawal`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — MOB-W4D5: Support and emergency

> **Day 5 starts only after:** MOB-W4D4.  
> **Day 5 finishes only when:** Implement support live chat, emergency support, ticket/report linking, support attachment flow.

**Today's goal:** Implement support live chat, emergency support, ticket/report linking, support attachment flow.

**Why today:** MOB-W5D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W4D4 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W4D5. This does not block today's approved construction scope.

### Build in this order

1. Implement support live chat, emergency support, ticket/report linking, support attachment flow.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No dispute live chat; support chat is separate.
- Required references: CONTRACT-001, MF-16, MF-23.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Support and emergency outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement support live chat, emergency support, ticket/report linking, support attachment flow.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): support and emergency`

**What comes next:** MOB-W5D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W4D5 — Support and emergency**.

Expected result: Implement support live chat, emergency support, ticket/report linking, support attachment flow.

Why this task matters: MOB-W5D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: MF-16, MF-23, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W4D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W4D5.

#### Implement

- Implement support live chat, emergency support, ticket/report linking, support attachment flow.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No dispute live chat; support chat is separate.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Support and emergency outcome in the target environment using non-production data.
- [ ] Implement support live chat, emergency support, ticket/report linking, support attachment flow.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): support and emergency`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Mobile daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
