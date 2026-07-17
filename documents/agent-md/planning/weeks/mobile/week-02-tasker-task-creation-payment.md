# Work2Cash Mobile — Week 2: Tasker Activation, Task Creation and Funding

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Build the flows that allow Taskers to become eligible and Task Owners to create, locate, attach media to and fund tasks.

## Before the week starts

The Mobile Week 1 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | MOB-W2D1 — Tasker Activation and KYC | MOB-W1D5 | A signed-in user can enter Tasker mode, complete the required profile and KYC steps, understand every pending or failed state, leave safely and resume later from the backend's authoritative checkpoint. | `feat(mobile-kyc): implement tasker activation and recovery` |
| Day 2 — Tuesday | MOB-W2D2 — Catalog and task draft | MOB-W2D1 | Implement category/type selection, task description, amount, required arrival time and draft saving. | `feat(mobile): catalog and task draft` |
| Day 3 — Wednesday | MOB-W2D3 — Location and media | MOB-W2D2 | Implement GPS/manual address, geocode, pin confirmation, permission recovery, proof media upload UI. | `feat(mobile): location and media` |
| Day 4 — Thursday | MOB-W2D4 — Payment and escrow funding | MOB-W2D3 | Implement payment review, task amount + fee breakdown, Paystack/Moniepoint redirect/status, payment pending/recovery. | `feat(mobile): payment and escrow funding` |
| Day 5 — Friday | MOB-W2D5 — Broadcast and direct offer | MOB-W2D4 | Implement funded task publish, favorites entry, direct offer send path, offer pending/expired states. | `feat(mobile): broadcast and direct offer` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — MOB-W2D1: Tasker Activation and KYC

> **Day 1 starts only after:** MOB-W1D5.  
> **Day 1 finishes only when:** A signed-in user can enter Tasker mode, complete the required profile and KYC steps, understand every pending or failed state, leave safely and resume later from the backend's authoritative checkpoint.

**Today's goal:** A signed-in user can enter Tasker mode, complete the required profile and KYC steps, understand every pending or failed state, leave safely and resume later from the backend's authoritative checkpoint.

**Why today:** Taskers must be verified before they can accept work. This card gives the user a clear, recoverable activation experience without letting the app invent approval or expose sensitive identity data.

**Status:** planned

### Before you start

- MOB-W1D5 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W2D1. This does not block today's approved construction scope.

### Build in this order

1. Add Tasker activation entry and progress summary.
2. Implement required Tasker profile fields and validation.
3. Implement NIN/BVN entry, face capture and consent/error states.
4. Present pending, approved, rejected and re-verification-required states from backend data.

### Technical rules

- Do not: Approving KYC locally or deriving approval from a provider redirect.
- Do not: Persisting raw identity values or unrestricted proof media in logs or analytics.
- Do not: Paid-provider auto-refresh loops.
- Required references: MF-05, SF-03.

### Tests for today

- [ ] State-management tests for every KYC status and next action.
- [ ] Widget tests for validation, masking, loading, error and permission recovery.
- [ ] Complete success, rejection and re-verification journeys on a supported Android device.

### End-of-day result

- [ ] A signed-in user can enter Tasker mode, complete the required profile and KYC steps, understand every pending or failed state, leave safely and resume later from the backend's authoritative checkpoint.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile-kyc): implement tasker activation and recovery`

**What comes next:** The next day can use this accepted result.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W2D1 — Tasker Activation and KYC**.

Expected result: A signed-in user can enter Tasker mode, complete the required profile and KYC steps, understand every pending or failed state, leave safely and resume later from the backend's authoritative checkpoint.

Why this task matters: Taskers must be verified before they can accept work. This card gives the user a clear, recoverable activation experience without letting the app invent approval or expose sensitive identity data.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: MF-05, SF-03, PROVIDER-001.

#### Before changing code

- Confirm MOB-W1D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W2D1.

#### Implement

- Add Tasker activation entry and progress summary.
- Implement required Tasker profile fields and validation.
- Implement NIN/BVN entry, face capture and consent/error states.
- Present pending, approved, rejected and re-verification-required states from backend data.

#### Guardrails

- Do not: Approving KYC locally or deriving approval from a provider redirect.
- Do not: Persisting raw identity values or unrestricted proof media in logs or analytics.
- Do not: Paid-provider auto-refresh loops.
- Do not: Task discovery and acceptance UI beyond the locked-state handoff.

#### Verify

- [ ] State-management tests for every KYC status and next action.
- [ ] Widget tests for validation, masking, loading, error and permission recovery.
- [ ] Complete success, rejection and re-verification journeys on a supported Android device.
- [ ] A signed-in user can enter Tasker mode, complete the required profile and KYC steps, understand every pending or failed state, leave safely and resume later from the backend's authoritative checkpoint.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile-kyc): implement tasker activation and recovery`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — MOB-W2D2: Catalog and task draft

> **Day 2 starts only after:** MOB-W2D1.  
> **Day 2 finishes only when:** Implement category/type selection, task description, amount, required arrival time and draft saving.

**Today's goal:** Implement category/type selection, task description, amount, required arrival time and draft saving.

**Why today:** MOB-W2D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W2D1 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W2D2. This does not block today's approved construction scope.

### Build in this order

1. Implement category/type selection, task description, amount, required arrival time and draft saving.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Launch categories: Home, Errands, Office, Support.
- Required references: CONTRACT-001, MF-06.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Catalog and task draft outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement category/type selection, task description, amount, required arrival time and draft saving.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): catalog and task draft`

**What comes next:** MOB-W2D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W2D2 — Catalog and task draft**.

Expected result: Implement category/type selection, task description, amount, required arrival time and draft saving.

Why this task matters: MOB-W2D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: MF-06, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm MOB-W2D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W2D2.

#### Implement

- Implement category/type selection, task description, amount, required arrival time and draft saving.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Launch categories: Home, Errands, Office, Support.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Catalog and task draft outcome in the target environment using non-production data.
- [ ] Implement category/type selection, task description, amount, required arrival time and draft saving.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): catalog and task draft`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — MOB-W2D3: Location and media

> **Day 3 starts only after:** MOB-W2D2.  
> **Day 3 finishes only when:** Implement GPS/manual address, geocode, pin confirmation, permission recovery, proof media upload UI.

**Today's goal:** Implement GPS/manual address, geocode, pin confirmation, permission recovery, proof media upload UI.

**Why today:** MOB-W2D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W2D2 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W2D3. This does not block today's approved construction scope.

### Build in this order

1. Implement GPS/manual address, geocode, pin confirmation, permission recovery, proof media upload UI.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Task site must be in Nigeria.
- Required references: CONTRACT-001, MF-06, SF-04, SF-05, SF-09.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Location and media outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement GPS/manual address, geocode, pin confirmation, permission recovery, proof media upload UI.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): location and media`

**What comes next:** MOB-W2D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W2D3 — Location and media**.

Expected result: Implement GPS/manual address, geocode, pin confirmation, permission recovery, proof media upload UI.

Why this task matters: MOB-W2D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: MF-06, SF-04, SF-05, SF-09, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W2D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W2D3.

#### Implement

- Implement GPS/manual address, geocode, pin confirmation, permission recovery, proof media upload UI.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Task site must be in Nigeria.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Location and media outcome in the target environment using non-production data.
- [ ] Implement GPS/manual address, geocode, pin confirmation, permission recovery, proof media upload UI.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): location and media`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — MOB-W2D4: Payment and escrow funding

> **Day 4 starts only after:** MOB-W2D3.  
> **Day 4 finishes only when:** Implement payment review, task amount + fee breakdown, Paystack/Moniepoint redirect/status, payment pending/recovery.

**Today's goal:** Implement payment review, task amount + fee breakdown, Paystack/Moniepoint redirect/status, payment pending/recovery.

**Why today:** MOB-W2D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W2D3 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W2D4. This does not block today's approved construction scope.

### Build in this order

1. Implement payment review, task amount + fee breakdown, Paystack/Moniepoint redirect/status, payment pending/recovery.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Do not mark paid from redirect alone.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Required references: CONTRACT-001, MF-06, SF-06, SF-07, SF-10.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Payment and escrow funding outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement payment review, task amount + fee breakdown, Paystack/Moniepoint redirect/status, payment pending/recovery.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): payment and escrow funding`

**What comes next:** MOB-W2D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W2D4 — Payment and escrow funding**.

Expected result: Implement payment review, task amount + fee breakdown, Paystack/Moniepoint redirect/status, payment pending/recovery.

Why this task matters: MOB-W2D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: MF-06, SF-06, SF-07, SF-10, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W2D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W2D4.

#### Implement

- Implement payment review, task amount + fee breakdown, Paystack/Moniepoint redirect/status, payment pending/recovery.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Do not mark paid from redirect alone.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Payment and escrow funding outcome in the target environment using non-production data.
- [ ] Implement payment review, task amount + fee breakdown, Paystack/Moniepoint redirect/status, payment pending/recovery.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): payment and escrow funding`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — MOB-W2D5: Broadcast and direct offer

> **Day 5 starts only after:** MOB-W2D4.  
> **Day 5 finishes only when:** Implement funded task publish, favorites entry, direct offer send path, offer pending/expired states.

**Today's goal:** Implement funded task publish, favorites entry, direct offer send path, offer pending/expired states.

**Why today:** MOB-W3D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W2D4 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W2D5. This does not block today's approved construction scope.

### Build in this order

1. Implement funded task publish, favorites entry, direct offer send path, offer pending/expired states.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Direct offers are REST/FCM, not socket-based.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Required references: CONTRACT-001, MF-06, MF-08.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Broadcast and direct offer outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement funded task publish, favorites entry, direct offer send path, offer pending/expired states.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): broadcast and direct offer`

**What comes next:** MOB-W3D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W2D5 — Broadcast and direct offer**.

Expected result: Implement funded task publish, favorites entry, direct offer send path, offer pending/expired states.

Why this task matters: MOB-W3D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: MF-06, MF-08, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W2D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W2D5.

#### Implement

- Implement funded task publish, favorites entry, direct offer send path, offer pending/expired states.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Direct offers are REST/FCM, not socket-based.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Do not make direct offers socket-based; durable state remains REST/FCM driven.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Broadcast and direct offer outcome in the target environment using non-production data.
- [ ] Implement funded task publish, favorites entry, direct offer send path, offer pending/expired states.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): broadcast and direct offer`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Mobile daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
