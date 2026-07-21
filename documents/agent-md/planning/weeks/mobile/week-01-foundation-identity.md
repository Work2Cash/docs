# Work2Cash Mobile — Week 1: Foundation, Identity and Contract Availability

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Create the shared project foundations and unblock mobile and admin with stable auth, profile, PIN, session, admin auth and dashboard contracts.

## Before the week starts

Repository access, development environment, shared rules and the required approved references are ready.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | MOB-W1D1 — Project setup, architecture, design system | Week start conditions | Create Flutter feature-first structure, app shell, routing, environment config, design tokens, shared loading/error widgets. | `feat(mobile): project setup architecture design system` |
| Day 2 — Tuesday | MOB-W1D2 — First launch and onboarding | MOB-W1D1 | Implement splash, first launch decision, app update check placeholder, onboarding entry, auth route guards. | `feat(mobile): first launch and onboarding` |
| Day 3 — Wednesday | MOB-W1D3 — Registration and login | MOB-W1D2 | Implement email/phone registration, login, OTP screens, Google/Apple entry points, password recovery screens. | `feat(mobile): registration and login` |
| Day 4 — Thursday | MOB-W1D4 — Profile, mode, PIN, sessions | MOB-W1D3 | Implement complete profile, mode switch, PIN setup/verify/reset, device/session management. | `feat(mobile): profile mode pin sessions` |
| Day 5 — Friday | MOB-W1D5 — Task Owner home and notification shell | MOB-W1D4 | Implement Task Owner home, notification center shell, skeleton states, empty states, app-wide POST/PATCH blur overlay. | `feat(mobile): task owner home and notification shell` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — MOB-W1D1: Project setup, architecture, design system

> **Day 1 starts only after:** Week start conditions.  
> **Day 1 finishes only when:** Create Flutter feature-first structure, app shell, routing, environment config, design tokens, shared loading/error widgets.

**Today's goal:** Create Flutter feature-first structure, app shell, routing, environment config, design tokens, shared loading/error widgets.

**Why today:** MOB-W1D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- The current week's start conditions and required repository access are ready.

**Later integration or acceptance gate:** BE-W1D1. This does not block today's approved construction scope.

### Build in this order

1. Create Flutter feature-first structure, app shell, routing, environment config, design tokens, shared loading/error widgets.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Commit app foundation only.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Project setup, architecture, design system outcome in the target environment using non-production data.

### End-of-day result

- [ ] Create Flutter feature-first structure, app shell, routing, environment config, design tokens, shared loading/error widgets.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): project setup architecture design system`

**What comes next:** MOB-W1D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W1D1 — Project setup, architecture, design system**.

Expected result: Create Flutter feature-first structure, app shell, routing, environment config, design tokens, shared loading/error widgets.

Why this task matters: MOB-W1D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm the week-start conditions, repository access and required environment are ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W1D1.

#### Implement

- Create Flutter feature-first structure, app shell, routing, environment config, design tokens, shared loading/error widgets.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Commit app foundation only.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Project setup, architecture, design system outcome in the target environment using non-production data.
- [ ] Create Flutter feature-first structure, app shell, routing, environment config, design tokens, shared loading/error widgets.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): project setup architecture design system`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — MOB-W1D2: First launch and onboarding

> **Day 2 starts only after:** MOB-W1D1.  
> **Day 2 finishes only when:** Implement splash, first launch decision, app update check placeholder, onboarding entry, auth route guards.

**Today's goal:** Implement splash, first launch decision, app update check placeholder, onboarding entry, auth route guards.

**Why today:** MOB-W1D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W1D1 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W1D2. This does not block today's approved construction scope.

### Build in this order

1. Implement splash, first launch decision, app update check placeholder, onboarding entry, auth route guards.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No task features yet.
- Required references: CONTRACT-001, MF-01, SF-10.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete First launch and onboarding outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement splash, first launch decision, app update check placeholder, onboarding entry, auth route guards.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): first launch and onboarding`

**What comes next:** MOB-W1D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W1D2 — First launch and onboarding**.

Expected result: Implement splash, first launch decision, app update check placeholder, onboarding entry, auth route guards.

Why this task matters: MOB-W1D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: MF-01, SF-10, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm MOB-W1D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W1D2.

#### Implement

- Implement splash, first launch decision, app update check placeholder, onboarding entry, auth route guards.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No task features yet.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete First launch and onboarding outcome in the target environment using non-production data.
- [ ] Implement splash, first launch decision, app update check placeholder, onboarding entry, auth route guards.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): first launch and onboarding`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — MOB-W1D3: Registration and login

> **Day 3 starts only after:** MOB-W1D2.  
> **Day 3 finishes only when:** Implement email/phone registration, login, OTP screens, Google/Apple entry points, password recovery screens.

**Today's goal:** Implement email/phone registration, login, OTP screens, Google/Apple entry points, password recovery screens.

**Why today:** MOB-W1D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W1D2 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W1D3. This does not block today's approved construction scope.

### Build in this order

1. Implement email/phone registration, login, OTP screens, Google/Apple entry points, password recovery screens.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Facebook excluded.
- Required references: CONTRACT-001, MF-02, MF-03, SF-01, SF-11, SF-13.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Registration and login outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement email/phone registration, login, OTP screens, Google/Apple entry points, password recovery screens.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): registration and login`

**What comes next:** MOB-W1D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W1D3 — Registration and login**.

Expected result: Implement email/phone registration, login, OTP screens, Google/Apple entry points, password recovery screens.

Why this task matters: MOB-W1D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: MF-02, MF-03, SF-01, SF-11, SF-13, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W1D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W1D3.

#### Implement

- Implement email/phone registration, login, OTP screens, Google/Apple entry points, password recovery screens.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Facebook excluded.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Registration and login outcome in the target environment using non-production data.
- [ ] Implement email/phone registration, login, OTP screens, Google/Apple entry points, password recovery screens.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): registration and login`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — MOB-W1D4: Profile, mode, PIN, sessions

> **Day 4 starts only after:** MOB-W1D3.  
> **Day 4 finishes only when:** Implement complete profile, mode switch, PIN setup/verify/reset, device/session management.

**Today's goal:** Implement complete profile, mode switch, PIN setup/verify/reset, device/session management.

**Why today:** MOB-W1D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W1D3 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W1D4. This does not block today's approved construction scope.

### Build in this order

1. Implement complete profile, mode switch, PIN setup/verify/reset, device/session management.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Use the accepted mode field consistently.
- Use `mode`; do not introduce `activeMode`.
- Required references: CONTRACT-001, SF-02, MF-18, MF-19.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Profile, mode, PIN, sessions outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement complete profile, mode switch, PIN setup/verify/reset, device/session management.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): profile mode pin sessions`

**What comes next:** MOB-W1D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W1D4 — Profile, mode, PIN, sessions**.

Expected result: Implement complete profile, mode switch, PIN setup/verify/reset, device/session management.

Why this task matters: MOB-W1D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: SF-02, MF-18, MF-19, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm MOB-W1D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W1D4.

#### Implement

- Implement complete profile, mode switch, PIN setup/verify/reset, device/session management.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Use the accepted mode field consistently.
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Profile, mode, PIN, sessions outcome in the target environment using non-production data.
- [ ] Implement complete profile, mode switch, PIN setup/verify/reset, device/session management.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): profile mode pin sessions`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — MOB-W1D5: Task Owner home and notification shell

> **Day 5 starts only after:** MOB-W1D4.  
> **Day 5 finishes only when:** Implement Task Owner home, notification center shell, skeleton states, empty states, app-wide POST/PATCH blur overlay.

**Today's goal:** Implement Task Owner home, notification center shell, skeleton states, empty states, app-wide POST/PATCH blur overlay.

**Why today:** MOB-W2D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W1D4 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W1D5. This does not block today's approved construction scope.

### Build in this order

1. Implement Task Owner home, notification center shell, skeleton states, empty states, app-wide POST/PATCH blur overlay.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Home can use mock/stub task summaries until task APIs land.
- Use `mode`; do not introduce `activeMode`.
- Required references: CONTRACT-001, MF-04, MF-20.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Task Owner home and notification shell outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement Task Owner home, notification center shell, skeleton states, empty states, app-wide POST/PATCH blur overlay.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): task owner home and notification shell`

**What comes next:** MOB-W2D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W1D5 — Task Owner home and notification shell**.

Expected result: Implement Task Owner home, notification center shell, skeleton states, empty states, app-wide POST/PATCH blur overlay.

Why this task matters: MOB-W2D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: MF-04, MF-20, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W1D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W1D5.

#### Implement

- Implement Task Owner home, notification center shell, skeleton states, empty states, app-wide POST/PATCH blur overlay.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Home can use mock/stub task summaries until task APIs land.
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Task Owner home and notification shell outcome in the target environment using non-production data.
- [ ] Implement Task Owner home, notification center shell, skeleton states, empty states, app-wide POST/PATCH blur overlay.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): task owner home and notification shell`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Mobile daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
