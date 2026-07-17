# Work2Cash Backend — Week 2: Tasker Activation, Task Creation and Funding

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Build the flows that allow Taskers to become eligible and Task Owners to create, locate, attach media to and fund tasks.

## Before the week starts

The Backend Week 1 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | BE-W2D1 — Tasker and KYC APIs | BE-W1D4 | The backend can create and update a Tasker's activation profile, start identity verification, receive NIN or BVN and face-capture submissions safely, expose the current KYC status and support admin re-verification without losing prior evidence. | `feat(kyc): implement tasker activation contracts` |
| Day 2 — Tuesday | BE-W2D2 — Catalog/task draft APIs | BE-W2D1 | Implement categories/types, task draft, amount validation, required arrival time. | `feat(tasks): implement catalog and task draft` |
| Day 3 — Wednesday | BE-W2D3 — Location/media APIs | BE-W2D2 | Implement geocode, pin confirmation, task site Nigeria validation, media signed upload/finalize. | `feat(tasks): implement location and media contracts` |
| Day 4 — Thursday | BE-W2D4 — Payment/escrow APIs | BE-W2D3 | Implement payment intent, verify, Paystack/Moniepoint adapter shell, ProviderWebhookEvent, escrow creation. | `feat(payments): implement payment and escrow foundation` |
| Day 5 — Friday | BE-W2D5 — Broadcast/direct offer APIs | BE-W2D4 | Implement broadcast, favorites, direct offers, FCM notification job shell. | `feat(matching): implement broadcast and direct offers` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — BE-W2D1: Tasker and KYC APIs

> **Day 1 starts only after:** BE-W1D4.  
> **Day 1 finishes only when:** The backend can create and update a Tasker's activation profile, start identity verification, receive NIN or BVN and face-capture submissions safely, expose the current KYC status and support admin re-verification without losing prior evidence.

**Today's goal:** The backend can create and update a Tasker's activation profile, start identity verification, receive NIN or BVN and face-capture submissions safely, expose the current KYC status and support admin re-verification without losing prior evidence.

**Why today:** MOB-W2D1 can connect Tasker activation and recovery to authoritative backend state.

**Status:** planned

### Before you start

- BE-W1D4 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement Tasker profile and activation-state reads and mutations.
2. Implement KYC start, NIN/BVN submission, face capture and status recovery.
3. Preserve immutable numbered attempts and the active verification version.
4. Implement admin queue, detail, approve, reject, request re-verification and risk escalation contracts defined by the pilot.

### Technical rules

- Do not: Changing approved KYC states, review outcomes or the Tasker activation rule.
- Do not: Storing provider secrets, raw identity numbers or unrestricted evidence in logs.
- Do not: Automatic paid-provider refresh loops.
- Required references: MF-05, SF-03, AF-04.

### Tests for today

- [ ] Unit tests for every permitted and forbidden KYC state transition.
- [ ] Integration tests for user submission, admin decision and re-verification paths.
- [ ] Complete one success, rejection and re-verification journey in staging.

### End-of-day result

- [ ] The backend can create and update a Tasker's activation profile, start identity verification, receive NIN or BVN and face-capture submissions safely, expose the current KYC status and support admin re-verification without losing prior evidence.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(kyc): implement tasker activation contracts`

**What comes next:** MOB-W2D1 can connect Tasker activation and recovery to authoritative backend state.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W2D1 — Tasker and KYC APIs**.

Expected result: The backend can create and update a Tasker's activation profile, start identity verification, receive NIN or BVN and face-capture submissions safely, expose the current KYC status and support admin re-verification without losing prior evidence.

Why this task matters: MOB-W2D1 can connect Tasker activation and recovery to authoritative backend state.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: MF-05, SF-03, AF-04, PROVIDER-001.

#### Before changing code

- Confirm BE-W1D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement Tasker profile and activation-state reads and mutations.
- Implement KYC start, NIN/BVN submission, face capture and status recovery.
- Preserve immutable numbered attempts and the active verification version.
- Implement admin queue, detail, approve, reject, request re-verification and risk escalation contracts defined by the pilot.

#### Guardrails

- Do not: Changing approved KYC states, review outcomes or the Tasker activation rule.
- Do not: Storing provider secrets, raw identity numbers or unrestricted evidence in logs.
- Do not: Automatic paid-provider refresh loops.
- Do not: Making the mobile redirect or provider SDK screen the source of final verification truth.

#### Verify

- [ ] Unit tests for every permitted and forbidden KYC state transition.
- [ ] Integration tests for user submission, admin decision and re-verification paths.
- [ ] Complete one success, rejection and re-verification journey in staging.
- [ ] The backend can create and update a Tasker's activation profile, start identity verification, receive NIN or BVN and face-capture submissions safely, expose the current KYC status and support admin re-verification without losing prior evidence.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(kyc): implement tasker activation contracts`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — BE-W2D2: Catalog/task draft APIs

> **Day 2 starts only after:** BE-W2D1.  
> **Day 2 finishes only when:** Implement categories/types, task draft, amount validation, required arrival time.

**Today's goal:** Implement categories/types, task draft, amount validation, required arrival time.

**Why today:** BE-W2D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W2D1 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement categories/types, task draft, amount validation, required arrival time.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(tasks): implement catalog and task draft
- Required references: CONTRACT-001, MF-06, AF-11.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Catalog/task draft APIs outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement categories/types, task draft, amount validation, required arrival time.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(tasks): implement catalog and task draft`

**What comes next:** BE-W2D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W2D2 — Catalog/task draft APIs**.

Expected result: Implement categories/types, task draft, amount validation, required arrival time.

Why this task matters: BE-W2D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: MF-06, AF-11, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm BE-W2D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement categories/types, task draft, amount validation, required arrival time.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(tasks): implement catalog and task draft

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Catalog/task draft APIs outcome in the target environment using non-production data.
- [ ] Implement categories/types, task draft, amount validation, required arrival time.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(tasks): implement catalog and task draft`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — BE-W2D3: Location/media APIs

> **Day 3 starts only after:** BE-W2D2.  
> **Day 3 finishes only when:** Implement geocode, pin confirmation, task site Nigeria validation, media signed upload/finalize.

**Today's goal:** Implement geocode, pin confirmation, task site Nigeria validation, media signed upload/finalize.

**Why today:** BE-W2D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W2D2 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement geocode, pin confirmation, task site Nigeria validation, media signed upload/finalize.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(tasks): implement location and media contracts
- Required references: CONTRACT-001, MF-06, SF-04, SF-05, AF-13.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Location/media APIs outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement geocode, pin confirmation, task site Nigeria validation, media signed upload/finalize.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(tasks): implement location and media contracts`

**What comes next:** BE-W2D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W2D3 — Location/media APIs**.

Expected result: Implement geocode, pin confirmation, task site Nigeria validation, media signed upload/finalize.

Why this task matters: BE-W2D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: MF-06, SF-04, SF-05, AF-13, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W2D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement geocode, pin confirmation, task site Nigeria validation, media signed upload/finalize.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(tasks): implement location and media contracts

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Location/media APIs outcome in the target environment using non-production data.
- [ ] Implement geocode, pin confirmation, task site Nigeria validation, media signed upload/finalize.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(tasks): implement location and media contracts`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — BE-W2D4: Payment/escrow APIs

> **Day 4 starts only after:** BE-W2D3.  
> **Day 4 finishes only when:** Implement payment intent, verify, Paystack/Moniepoint adapter shell, ProviderWebhookEvent, escrow creation.

**Today's goal:** Implement payment intent, verify, Paystack/Moniepoint adapter shell, ProviderWebhookEvent, escrow creation.

**Why today:** BE-W2D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W2D3 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement payment intent, verify, Paystack/Moniepoint adapter shell, ProviderWebhookEvent, escrow creation.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(payments): implement payment and escrow foundation
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Required references: CONTRACT-001, MF-06, SF-06, SF-07, AF-08.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Payment/escrow APIs outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement payment intent, verify, Paystack/Moniepoint adapter shell, ProviderWebhookEvent, escrow creation.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(payments): implement payment and escrow foundation`

**What comes next:** BE-W2D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W2D4 — Payment/escrow APIs**.

Expected result: Implement payment intent, verify, Paystack/Moniepoint adapter shell, ProviderWebhookEvent, escrow creation.

Why this task matters: BE-W2D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: MF-06, SF-06, SF-07, AF-08, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W2D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement payment intent, verify, Paystack/Moniepoint adapter shell, ProviderWebhookEvent, escrow creation.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(payments): implement payment and escrow foundation
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Payment/escrow APIs outcome in the target environment using non-production data.
- [ ] Implement payment intent, verify, Paystack/Moniepoint adapter shell, ProviderWebhookEvent, escrow creation.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(payments): implement payment and escrow foundation`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — BE-W2D5: Broadcast/direct offer APIs

> **Day 5 starts only after:** BE-W2D4.  
> **Day 5 finishes only when:** Implement broadcast, favorites, direct offers, FCM notification job shell.

**Today's goal:** Implement broadcast, favorites, direct offers, FCM notification job shell.

**Why today:** BE-W3D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W2D4 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement broadcast, favorites, direct offers, FCM notification job shell.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(matching): implement broadcast and direct offers
- Do not make direct offers socket-based; durable state remains REST/FCM driven.
- Required references: CONTRACT-001, MF-06, MF-08, AF-21.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Broadcast/direct offer APIs outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement broadcast, favorites, direct offers, FCM notification job shell.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(matching): implement broadcast and direct offers`

**What comes next:** BE-W3D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W2D5 — Broadcast/direct offer APIs**.

Expected result: Implement broadcast, favorites, direct offers, FCM notification job shell.

Why this task matters: BE-W3D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: MF-06, MF-08, AF-21, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W2D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement broadcast, favorites, direct offers, FCM notification job shell.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(matching): implement broadcast and direct offers
- Do not make direct offers socket-based; durable state remains REST/FCM driven.

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Broadcast/direct offer APIs outcome in the target environment using non-production data.
- [ ] Implement broadcast, favorites, direct offers, FCM notification job shell.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(matching): implement broadcast and direct offers`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Backend daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
