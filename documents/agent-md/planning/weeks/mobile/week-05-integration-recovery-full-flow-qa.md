# Work2Cash Mobile — Week 5: Operational Integration, Recovery and Full-Flow QA

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Complete secondary flows, operational admin coverage, provider validation, recovery behavior and end-to-end flow QA.

## Before the week starts

The Mobile Week 4 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | MOB-W5D1 — Settings and notification preferences | MOB-W4D5 | Complete settings, notification preferences, session revoke, security copy, critical notification rules. | `feat(mobile): settings and notification preferences` |
| Day 2 — Tuesday | MOB-W5D2 — Referral and rebook | MOB-W5D1 | Implement referral code/share/pending reward, rebook from completed task, direct offer/public repost path. | `feat(mobile): referral and rebook` |
| Day 3 — Wednesday | MOB-W5D3 — Offline/recovery polish | MOB-W5D2 | Implement app resume recovery, socket reconnect recovery, payment/KYC return recovery, consistent empty/error/offline states. | `feat(mobile): offline recovery polish` |
| Day 4 — Thursday | MOB-W5D4 — Provider integration QA | MOB-W5D3 | Run integrated tests against staging providers, FCM, payment sandbox, KYC sandbox, map/geocode and media upload. | `feat(mobile): provider integration qa` |
| Day 5 — Friday | MOB-W5D5 — Full mobile flow QA | MOB-W5D4 | Run happy path and exception path for all mobile flows MF-01 to MF-24. | `feat(mobile): full mobile flow qa` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — MOB-W5D1: Settings and notification preferences

> **Day 1 starts only after:** MOB-W4D5.  
> **Day 1 finishes only when:** Complete settings, notification preferences, session revoke, security copy, critical notification rules.

**Today's goal:** Complete settings, notification preferences, session revoke, security copy, critical notification rules.

**Why today:** MOB-W5D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W4D5 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W5D1. This does not block today's approved construction scope.

### Build in this order

1. Complete settings, notification preferences, session revoke, security copy, critical notification rules.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Sensitive actions require PIN.
- Required references: CONTRACT-001, MF-18, MF-19, MF-20.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Settings and notification preferences outcome in the target environment using non-production data.

### End-of-day result

- [ ] Complete settings, notification preferences, session revoke, security copy, critical notification rules.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): settings and notification preferences`

**What comes next:** MOB-W5D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W5D1 — Settings and notification preferences**.

Expected result: Complete settings, notification preferences, session revoke, security copy, critical notification rules.

Why this task matters: MOB-W5D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: MF-18, MF-19, MF-20, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W4D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W5D1.

#### Implement

- Complete settings, notification preferences, session revoke, security copy, critical notification rules.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Sensitive actions require PIN.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Settings and notification preferences outcome in the target environment using non-production data.
- [ ] Complete settings, notification preferences, session revoke, security copy, critical notification rules.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): settings and notification preferences`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — MOB-W5D2: Referral and rebook

> **Day 2 starts only after:** MOB-W5D1.  
> **Day 2 finishes only when:** Implement referral code/share/pending reward, rebook from completed task, direct offer/public repost path.

**Today's goal:** Implement referral code/share/pending reward, rebook from completed task, direct offer/public repost path.

**Why today:** MOB-W5D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W5D1 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W5D2. This does not block today's approved construction scope.

### Build in this order

1. Implement referral code/share/pending reward, rebook from completed task, direct offer/public repost path.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Reward after referred user completes 5 paid tasks.
- Do not make direct offers socket-based; durable state remains REST/FCM driven.
- Required references: CONTRACT-REFERRAL-001, CONTRACT-001, MF-17, MF-24.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Referral and rebook outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement referral code/share/pending reward, rebook from completed task, direct offer/public repost path.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): referral and rebook`

**What comes next:** MOB-W5D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W5D2 — Referral and rebook**.

Expected result: Implement referral code/share/pending reward, rebook from completed task, direct offer/public repost path.

Why this task matters: MOB-W5D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: MF-17, MF-24, CONTRACT-REFERRAL-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W5D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W5D2.

#### Implement

- Implement referral code/share/pending reward, rebook from completed task, direct offer/public repost path.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Reward after referred user completes 5 paid tasks.
- Do not make direct offers socket-based; durable state remains REST/FCM driven.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Referral and rebook outcome in the target environment using non-production data.
- [ ] Implement referral code/share/pending reward, rebook from completed task, direct offer/public repost path.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): referral and rebook`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — MOB-W5D3: Offline/recovery polish

> **Day 3 starts only after:** MOB-W5D2.  
> **Day 3 finishes only when:** Implement app resume recovery, socket reconnect recovery, payment/KYC return recovery, consistent empty/error/offline states.

**Today's goal:** Implement app resume recovery, socket reconnect recovery, payment/KYC return recovery, consistent empty/error/offline states.

**Why today:** MOB-W5D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W5D2 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W5D3. This does not block today's approved construction scope.

### Build in this order

1. Implement app resume recovery, socket reconnect recovery, payment/KYC return recovery, consistent empty/error/offline states.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No flow depends only on local memory.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Required references: CONTRACT-001, SF-09, SF-10.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Offline/recovery polish outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement app resume recovery, socket reconnect recovery, payment/KYC return recovery, consistent empty/error/offline states.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): offline recovery polish`

**What comes next:** MOB-W5D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W5D3 — Offline/recovery polish**.

Expected result: Implement app resume recovery, socket reconnect recovery, payment/KYC return recovery, consistent empty/error/offline states.

Why this task matters: MOB-W5D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: SF-09, SF-10, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W5D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W5D3.

#### Implement

- Implement app resume recovery, socket reconnect recovery, payment/KYC return recovery, consistent empty/error/offline states.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No flow depends only on local memory.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Offline/recovery polish outcome in the target environment using non-production data.
- [ ] Implement app resume recovery, socket reconnect recovery, payment/KYC return recovery, consistent empty/error/offline states.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): offline recovery polish`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — MOB-W5D4: Provider integration QA

> **Day 4 starts only after:** MOB-W5D3.  
> **Day 4 finishes only when:** Run integrated tests against staging providers, FCM, payment sandbox, KYC sandbox, map/geocode and media upload.

**Today's goal:** Run integrated tests against staging providers, FCM, payment sandbox, KYC sandbox, map/geocode and media upload.

**Why today:** MOB-W5D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W5D3 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W5D4. This does not block today's approved construction scope.

### Build in this order

1. Run integrated tests against staging providers, FCM, payment sandbox, KYC sandbox, map/geocode and media upload.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Capture issues for backend/provider hardening.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Provider integration QA outcome in the target environment using non-production data.

### End-of-day result

- [ ] Run integrated tests against staging providers, FCM, payment sandbox, KYC sandbox, map/geocode and media upload.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): provider integration qa`

**What comes next:** MOB-W5D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W5D4 — Provider integration QA**.

Expected result: Run integrated tests against staging providers, FCM, payment sandbox, KYC sandbox, map/geocode and media upload.

Why this task matters: MOB-W5D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W5D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W5D4.

#### Implement

- Run integrated tests against staging providers, FCM, payment sandbox, KYC sandbox, map/geocode and media upload.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Capture issues for backend/provider hardening.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Provider integration QA outcome in the target environment using non-production data.
- [ ] Run integrated tests against staging providers, FCM, payment sandbox, KYC sandbox, map/geocode and media upload.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): provider integration qa`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — MOB-W5D5: Full mobile flow QA

> **Day 5 starts only after:** MOB-W5D4.  
> **Day 5 finishes only when:** Run happy path and exception path for all mobile flows MF-01 to MF-24.

**Today's goal:** Run happy path and exception path for all mobile flows MF-01 to MF-24.

**Why today:** MOB-W6D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W5D4 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W5D5. This does not block today's approved construction scope.

### Build in this order

1. Run happy path and exception path for all mobile flows MF-01 to MF-24.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Create defect list by flow ID.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Full mobile flow QA outcome in the target environment using non-production data.

### End-of-day result

- [ ] Run happy path and exception path for all mobile flows MF-01 to MF-24.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): full mobile flow qa`

**What comes next:** MOB-W6D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W5D5 — Full mobile flow QA**.

Expected result: Run happy path and exception path for all mobile flows MF-01 to MF-24.

Why this task matters: MOB-W6D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm MOB-W5D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W5D5.

#### Implement

- Run happy path and exception path for all mobile flows MF-01 to MF-24.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Create defect list by flow ID.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Full mobile flow QA outcome in the target environment using non-production data.
- [ ] Run happy path and exception path for all mobile flows MF-01 to MF-24.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): full mobile flow qa`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Mobile daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
