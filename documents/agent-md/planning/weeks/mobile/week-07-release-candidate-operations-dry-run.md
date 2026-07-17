# Work2Cash Mobile — Week 7: Release Candidate Preparation and Operational Dry Runs

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Prepare Mobile, Admin and Backend release candidates while running provider, payout, monitoring, backup and support dry runs.

## Before the week starts

The Mobile Week 6 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | MOB-W7D1 — Release candidate preparation | MOB-W6D5 | Prepare Android release candidate configuration, app icon/name/package, permissions and environment mapping. | `feat(mobile): release candidate preparation` |
| Day 2 — Tuesday | MOB-W7D2 — Device matrix QA | MOB-W7D1 | Test priority Android devices, small screens, low memory, poor network and background app-kill recovery. | `feat(mobile): device matrix qa` |
| Day 3 — Wednesday | MOB-W7D3 — Operations dry run support | MOB-W7D2 | Validate mobile behavior for support live chat, emergency support, reports, payout status and admin-driven outcomes. | `feat(mobile): operations dry run support` |
| Day 4 — Thursday | MOB-W7D4 — Provider validation support | MOB-W7D3 | Run payment, KYC, maps, FCM, media and Sentry validation from mobile side. | `feat(mobile): provider validation support` |
| Day 5 — Friday | MOB-W7D5 — Mobile release candidate | MOB-W7D4 | Generate release candidate build and handover notes for QA testing. | `feat(mobile): mobile release candidate` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — MOB-W7D1: Release candidate preparation

> **Day 1 starts only after:** MOB-W6D5.  
> **Day 1 finishes only when:** Prepare Android release candidate configuration, app icon/name/package, permissions and environment mapping.

**Today's goal:** Prepare Android release candidate configuration, app icon/name/package, permissions and environment mapping.

**Why today:** MOB-W7D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W6D5 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W7D1. This does not block today's approved construction scope.

### Build in this order

1. Prepare Android release candidate configuration, app icon/name/package, permissions and environment mapping.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Package name ng.work2cash.app.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Release candidate preparation outcome in the target environment using non-production data.

### End-of-day result

- [ ] Prepare Android release candidate configuration, app icon/name/package, permissions and environment mapping.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): release candidate preparation`

**What comes next:** MOB-W7D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W7D1 — Release candidate preparation**.

Expected result: Prepare Android release candidate configuration, app icon/name/package, permissions and environment mapping.

Why this task matters: MOB-W7D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W6D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W7D1.

#### Implement

- Prepare Android release candidate configuration, app icon/name/package, permissions and environment mapping.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Package name ng.work2cash.app.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Release candidate preparation outcome in the target environment using non-production data.
- [ ] Prepare Android release candidate configuration, app icon/name/package, permissions and environment mapping.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): release candidate preparation`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — MOB-W7D2: Device matrix QA

> **Day 2 starts only after:** MOB-W7D1.  
> **Day 2 finishes only when:** Test priority Android devices, small screens, low memory, poor network and background app-kill recovery.

**Today's goal:** Test priority Android devices, small screens, low memory, poor network and background app-kill recovery.

**Why today:** MOB-W7D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W7D1 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W7D2. This does not block today's approved construction scope.

### Build in this order

1. Test priority Android devices, small screens, low memory, poor network and background app-kill recovery.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Create device issue list by flow.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Device matrix QA outcome in the target environment using non-production data.

### End-of-day result

- [ ] Test priority Android devices, small screens, low memory, poor network and background app-kill recovery.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): device matrix qa`

**What comes next:** MOB-W7D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W7D2 — Device matrix QA**.

Expected result: Test priority Android devices, small screens, low memory, poor network and background app-kill recovery.

Why this task matters: MOB-W7D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm MOB-W7D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W7D2.

#### Implement

- Test priority Android devices, small screens, low memory, poor network and background app-kill recovery.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Create device issue list by flow.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Device matrix QA outcome in the target environment using non-production data.
- [ ] Test priority Android devices, small screens, low memory, poor network and background app-kill recovery.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): device matrix qa`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — MOB-W7D3: Operations dry run support

> **Day 3 starts only after:** MOB-W7D2.  
> **Day 3 finishes only when:** Validate mobile behavior for support live chat, emergency support, reports, payout status and admin-driven outcomes.

**Today's goal:** Validate mobile behavior for support live chat, emergency support, reports, payout status and admin-driven outcomes.

**Why today:** MOB-W7D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W7D2 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W7D3. This does not block today's approved construction scope.

### Build in this order

1. Validate mobile behavior for support live chat, emergency support, reports, payout status and admin-driven outcomes.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Confirm user-facing status copy.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Operations dry run support outcome in the target environment using non-production data.

### End-of-day result

- [ ] Validate mobile behavior for support live chat, emergency support, reports, payout status and admin-driven outcomes.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): operations dry run support`

**What comes next:** MOB-W7D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W7D3 — Operations dry run support**.

Expected result: Validate mobile behavior for support live chat, emergency support, reports, payout status and admin-driven outcomes.

Why this task matters: MOB-W7D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W7D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W7D3.

#### Implement

- Validate mobile behavior for support live chat, emergency support, reports, payout status and admin-driven outcomes.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Confirm user-facing status copy.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Operations dry run support outcome in the target environment using non-production data.
- [ ] Validate mobile behavior for support live chat, emergency support, reports, payout status and admin-driven outcomes.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): operations dry run support`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — MOB-W7D4: Provider validation support

> **Day 4 starts only after:** MOB-W7D3.  
> **Day 4 finishes only when:** Run payment, KYC, maps, FCM, media and Sentry validation from mobile side.

**Today's goal:** Run payment, KYC, maps, FCM, media and Sentry validation from mobile side.

**Why today:** MOB-W7D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W7D3 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W7D4. This does not block today's approved construction scope.

### Build in this order

1. Run payment, KYC, maps, FCM, media and Sentry validation from mobile side.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Attach evidence to provider validation checklist.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Provider validation support outcome in the target environment using non-production data.

### End-of-day result

- [ ] Run payment, KYC, maps, FCM, media and Sentry validation from mobile side.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): provider validation support`

**What comes next:** MOB-W7D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W7D4 — Provider validation support**.

Expected result: Run payment, KYC, maps, FCM, media and Sentry validation from mobile side.

Why this task matters: MOB-W7D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W7D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W7D4.

#### Implement

- Run payment, KYC, maps, FCM, media and Sentry validation from mobile side.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Attach evidence to provider validation checklist.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Provider validation support outcome in the target environment using non-production data.
- [ ] Run payment, KYC, maps, FCM, media and Sentry validation from mobile side.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): provider validation support`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — MOB-W7D5: Mobile release candidate

> **Day 5 starts only after:** MOB-W7D4.  
> **Day 5 finishes only when:** Generate release candidate build and handover notes for QA testing.

**Today's goal:** Generate release candidate build and handover notes for QA testing.

**Why today:** MOB-W8D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W7D4 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W7D5. This does not block today's approved construction scope.

### Build in this order

1. Generate release candidate build and handover notes for QA testing.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Only approved fixes after RC.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Mobile release candidate outcome in the target environment using non-production data.

### End-of-day result

- [ ] Generate release candidate build and handover notes for QA testing.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): mobile release candidate`

**What comes next:** MOB-W8D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W7D5 — Mobile release candidate**.

Expected result: Generate release candidate build and handover notes for QA testing.

Why this task matters: MOB-W8D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W7D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W7D5.

#### Implement

- Generate release candidate build and handover notes for QA testing.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Only approved fixes after RC.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Mobile release candidate outcome in the target environment using non-production data.
- [ ] Generate release candidate build and handover notes for QA testing.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): mobile release candidate`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Mobile daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
