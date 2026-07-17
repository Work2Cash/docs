# Work2Cash Backend — Week 4: Completion, Exceptions, Trust and Finance

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Close the task lifecycle with completion, settlement, cancellation, no-show, reports, ratings, favorites, wallet, withdrawal and support.

## Before the week starts

The Backend Week 3 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | BE-W4D1 — Completion/settlement | BE-W3D5 | Implement completion proof, request completion, confirm completion, commission snapshot, escrow release/hold. | `feat(settlement): implement completion and escrow release` |
| Day 2 — Tuesday | BE-W4D2 — Cancellation/reports | BE-W4D1 | Implement cancellation, no-show, reports, warning/strike, settlement hold use cases. | `feat(risk): implement cancellation reports and penalties` |
| Day 3 — Wednesday | BE-W4D3 — Ratings/favorites/rebook | BE-W4D2 | Implement ratings, review moderation foundation, favorite add/remove, rebook. | `feat(retention): implement ratings favorites and rebook` |
| Day 4 — Thursday | BE-W4D4 — Wallet/withdrawal | BE-W4D3 | Implement wallets, ledger, payout account, PIN-confirmed withdrawal, payout batch models. | `feat(finance): implement wallet and withdrawal` |
| Day 5 — Friday | BE-W4D5 — Support/emergency | BE-W4D4 | Implement support sessions, emergency support, support socket completion, case linking. | `feat(support): implement support and emergency` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — BE-W4D1: Completion/settlement

> **Day 1 starts only after:** BE-W3D5.  
> **Day 1 finishes only when:** Implement completion proof, request completion, confirm completion, commission snapshot, escrow release/hold.

**Today's goal:** Implement completion proof, request completion, confirm completion, commission snapshot, escrow release/hold.

**Why today:** BE-W4D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W3D5 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement completion proof, request completion, confirm completion, commission snapshot, escrow release/hold.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(settlement): implement completion and escrow release
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Required references: CONTRACT-001, MF-14.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Completion/settlement outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement completion proof, request completion, confirm completion, commission snapshot, escrow release/hold.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(settlement): implement completion and escrow release`

**What comes next:** BE-W4D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W4D1 — Completion/settlement**.

Expected result: Implement completion proof, request completion, confirm completion, commission snapshot, escrow release/hold.

Why this task matters: BE-W4D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: MF-14, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W3D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement completion proof, request completion, confirm completion, commission snapshot, escrow release/hold.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(settlement): implement completion and escrow release
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Completion/settlement outcome in the target environment using non-production data.
- [ ] Implement completion proof, request completion, confirm completion, commission snapshot, escrow release/hold.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(settlement): implement completion and escrow release`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — BE-W4D2: Cancellation/reports

> **Day 2 starts only after:** BE-W4D1.  
> **Day 2 finishes only when:** Implement cancellation, no-show, reports, warning/strike, settlement hold use cases.

**Today's goal:** Implement cancellation, no-show, reports, warning/strike, settlement hold use cases.

**Why today:** BE-W4D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W4D1 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement cancellation, no-show, reports, warning/strike, settlement hold use cases.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(risk): implement cancellation reports and penalties
- Required references: CONTRACT-001, MF-12, SF-08, AF-06, AF-14.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Cancellation/reports outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement cancellation, no-show, reports, warning/strike, settlement hold use cases.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(risk): implement cancellation reports and penalties`

**What comes next:** BE-W4D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W4D2 — Cancellation/reports**.

Expected result: Implement cancellation, no-show, reports, warning/strike, settlement hold use cases.

Why this task matters: BE-W4D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: MF-12, SF-08, AF-06, AF-14, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W4D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement cancellation, no-show, reports, warning/strike, settlement hold use cases.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(risk): implement cancellation reports and penalties

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Cancellation/reports outcome in the target environment using non-production data.
- [ ] Implement cancellation, no-show, reports, warning/strike, settlement hold use cases.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(risk): implement cancellation reports and penalties`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — BE-W4D3: Ratings/favorites/rebook

> **Day 3 starts only after:** BE-W4D2.  
> **Day 3 finishes only when:** Implement ratings, review moderation foundation, favorite add/remove, rebook.

**Today's goal:** Implement ratings, review moderation foundation, favorite add/remove, rebook.

**Why today:** BE-W4D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W4D2 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement ratings, review moderation foundation, favorite add/remove, rebook.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(retention): implement ratings favorites and rebook
- Use `mode`; do not introduce `activeMode`.
- Required references: CONTRACT-001, MF-15, MF-22, MF-24, AF-22.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Ratings/favorites/rebook outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement ratings, review moderation foundation, favorite add/remove, rebook.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(retention): implement ratings favorites and rebook`

**What comes next:** BE-W4D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W4D3 — Ratings/favorites/rebook**.

Expected result: Implement ratings, review moderation foundation, favorite add/remove, rebook.

Why this task matters: BE-W4D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: MF-15, MF-22, MF-24, AF-22, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm BE-W4D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement ratings, review moderation foundation, favorite add/remove, rebook.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(retention): implement ratings favorites and rebook
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Ratings/favorites/rebook outcome in the target environment using non-production data.
- [ ] Implement ratings, review moderation foundation, favorite add/remove, rebook.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(retention): implement ratings favorites and rebook`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — BE-W4D4: Wallet/withdrawal

> **Day 4 starts only after:** BE-W4D3.  
> **Day 4 finishes only when:** Implement wallets, ledger, payout account, PIN-confirmed withdrawal, payout batch models.

**Today's goal:** Implement wallets, ledger, payout account, PIN-confirmed withdrawal, payout batch models.

**Why today:** BE-W4D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W4D3 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement wallets, ledger, payout account, PIN-confirmed withdrawal, payout batch models.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(finance): implement wallet and withdrawal
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Required references: CONTRACT-001, MF-13, SF-07, SF-12, AF-08, AF-09, AF-10, AF-24.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Wallet/withdrawal outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement wallets, ledger, payout account, PIN-confirmed withdrawal, payout batch models.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(finance): implement wallet and withdrawal`

**What comes next:** BE-W4D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W4D4 — Wallet/withdrawal**.

Expected result: Implement wallets, ledger, payout account, PIN-confirmed withdrawal, payout batch models.

Why this task matters: BE-W4D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: MF-13, SF-07, SF-12, AF-08, AF-09, AF-10, AF-24, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W4D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement wallets, ledger, payout account, PIN-confirmed withdrawal, payout batch models.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(finance): implement wallet and withdrawal
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Wallet/withdrawal outcome in the target environment using non-production data.
- [ ] Implement wallets, ledger, payout account, PIN-confirmed withdrawal, payout batch models.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(finance): implement wallet and withdrawal`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — BE-W4D5: Support/emergency

> **Day 5 starts only after:** BE-W4D4.  
> **Day 5 finishes only when:** Implement support sessions, emergency support, support socket completion, case linking.

**Today's goal:** Implement support sessions, emergency support, support socket completion, case linking.

**Why today:** BE-W5D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W4D4 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement support sessions, emergency support, support socket completion, case linking.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(support): implement support and emergency
- Required references: CONTRACT-001, MF-16, MF-23, AF-07.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Support/emergency outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement support sessions, emergency support, support socket completion, case linking.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(support): implement support and emergency`

**What comes next:** BE-W5D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W4D5 — Support/emergency**.

Expected result: Implement support sessions, emergency support, support socket completion, case linking.

Why this task matters: BE-W5D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: MF-16, MF-23, AF-07, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm BE-W4D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement support sessions, emergency support, support socket completion, case linking.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(support): implement support and emergency

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Support/emergency outcome in the target environment using non-production data.
- [ ] Implement support sessions, emergency support, support socket completion, case linking.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(support): implement support and emergency`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Backend daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
