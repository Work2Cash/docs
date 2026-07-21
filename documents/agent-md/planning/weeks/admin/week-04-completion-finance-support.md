# Work2Cash Admin — Week 4: Completion, Exceptions, Trust and Finance

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Close the task lifecycle with completion, settlement, cancellation, no-show, reports, ratings, favorites, wallet, withdrawal and support.

## Before the week starts

The Admin Week 3 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | ADM-W4D1 — Reports/disputes | ADM-W3D5 | Implement reports queue/detail, linked task evidence, decision actions. | `feat(admin): reports disputes` |
| Day 2 — Tuesday | ADM-W4D2 — Risk/warning/strike | ADM-W4D1 | Implement warning/strike history, trust impact and suspension action with audit. | `feat(admin): risk warning strike` |
| Day 3 — Wednesday | ADM-W4D3 — Ratings/reviews moderation | ADM-W4D2 | Implement ratings list, reported review handling and moderation audit. | `feat(admin): ratings reviews moderation` |
| Day 4 — Thursday | ADM-W4D4 — Finance transactions | ADM-W4D3 | Implement payments, escrow, wallet ledger, receipts and provider reference review. | `feat(admin): finance transactions` |
| Day 5 — Friday | ADM-W4D5 — Payout batches | ADM-W4D4 | Implement withdrawal list, payout batch create/approve/process, partial failure state. | `feat(admin): payout batches` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — ADM-W4D1: Reports/disputes

> **Day 1 starts only after:** ADM-W3D5.  
> **Day 1 finishes only when:** Implement reports queue/detail, linked task evidence, decision actions.

**Today's goal:** Implement reports queue/detail, linked task evidence, decision actions.

**Why today:** ADM-W4D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W3D5 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-04. This does not block today's approved construction scope.

### Build in this order

1. Implement reports queue/detail, linked task evidence, decision actions.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-04.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Follows mobile report/cancellation flows.
- Do not turn disputes into live chat.
- Required references: CONTRACT-001, AF-06.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Reports/disputes outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement reports queue/detail, linked task evidence, decision actions.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): reports disputes`

**What comes next:** ADM-W4D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W4D1 — Reports/disputes**.

Expected result: Implement reports queue/detail, linked task evidence, decision actions.

Why this task matters: ADM-W4D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: AF-06, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W3D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-04.

#### Implement

- Implement reports queue/detail, linked task evidence, decision actions.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-04.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Follows mobile report/cancellation flows.
- Do not turn disputes into live chat.
- Do not add admin task reassignment.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Reports/disputes outcome in the target environment using non-production data.
- [ ] Implement reports queue/detail, linked task evidence, decision actions.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): reports disputes`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — ADM-W4D2: Risk/warning/strike

> **Day 2 starts only after:** ADM-W4D1.  
> **Day 2 finishes only when:** Implement warning/strike history, trust impact and suspension action with audit.

**Today's goal:** Implement warning/strike history, trust impact and suspension action with audit.

**Why today:** ADM-W4D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W4D1 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-04. This does not block today's approved construction scope.

### Build in this order

1. Implement warning/strike history, trust impact and suspension action with audit.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-04.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Apply accepted warning/strike rules.
- Required references: CONTRACT-001, AF-14.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Risk/warning/strike outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement warning/strike history, trust impact and suspension action with audit.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): risk warning strike`

**What comes next:** ADM-W4D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W4D2 — Risk/warning/strike**.

Expected result: Implement warning/strike history, trust impact and suspension action with audit.

Why this task matters: ADM-W4D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: AF-14, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W4D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-04.

#### Implement

- Implement warning/strike history, trust impact and suspension action with audit.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-04.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Apply accepted warning/strike rules.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Risk/warning/strike outcome in the target environment using non-production data.
- [ ] Implement warning/strike history, trust impact and suspension action with audit.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): risk warning strike`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — ADM-W4D3: Ratings/reviews moderation

> **Day 3 starts only after:** ADM-W4D2.  
> **Day 3 finishes only when:** Implement ratings list, reported review handling and moderation audit.

**Today's goal:** Implement ratings list, reported review handling and moderation audit.

**Why today:** ADM-W4D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W4D2 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-04. This does not block today's approved construction scope.

### Build in this order

1. Implement ratings list, reported review handling and moderation audit.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-04.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Follows mobile rating flow.
- Use `mode`; do not introduce `activeMode`.
- Required references: CONTRACT-001, AF-22.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Ratings/reviews moderation outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement ratings list, reported review handling and moderation audit.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): ratings reviews moderation`

**What comes next:** ADM-W4D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W4D3 — Ratings/reviews moderation**.

Expected result: Implement ratings list, reported review handling and moderation audit.

Why this task matters: ADM-W4D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: AF-22, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm ADM-W4D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-04.

#### Implement

- Implement ratings list, reported review handling and moderation audit.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-04.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Follows mobile rating flow.
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Ratings/reviews moderation outcome in the target environment using non-production data.
- [ ] Implement ratings list, reported review handling and moderation audit.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): ratings reviews moderation`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — ADM-W4D4: Finance transactions

> **Day 4 starts only after:** ADM-W4D3.  
> **Day 4 finishes only when:** Implement payments, escrow, wallet ledger, receipts and provider reference review.

**Today's goal:** Implement payments, escrow, wallet ledger, receipts and provider reference review.

**Why today:** ADM-W4D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W4D3 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-04. This does not block today's approved construction scope.

### Build in this order

1. Implement payments, escrow, wallet ledger, receipts and provider reference review.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-04.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Follows mobile payment/settlement.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Required references: CONTRACT-001, AF-08, AF-10, AF-24.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Finance transactions outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement payments, escrow, wallet ledger, receipts and provider reference review.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): finance transactions`

**What comes next:** ADM-W4D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W4D4 — Finance transactions**.

Expected result: Implement payments, escrow, wallet ledger, receipts and provider reference review.

Why this task matters: ADM-W4D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: AF-08, AF-10, AF-24, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W4D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-04.

#### Implement

- Implement payments, escrow, wallet ledger, receipts and provider reference review.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-04.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Follows mobile payment/settlement.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Finance transactions outcome in the target environment using non-production data.
- [ ] Implement payments, escrow, wallet ledger, receipts and provider reference review.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): finance transactions`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — ADM-W4D5: Payout batches

> **Day 5 starts only after:** ADM-W4D4.  
> **Day 5 finishes only when:** Implement withdrawal list, payout batch create/approve/process, partial failure state.

**Today's goal:** Implement withdrawal list, payout batch create/approve/process, partial failure state.

**Why today:** ADM-W5D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W4D4 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-04. This does not block today's approved construction scope.

### Build in this order

1. Implement withdrawal list, payout batch create/approve/process, partial failure state.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-04.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Batch dates 14th and 28th.
- Required references: CONTRACT-001, AF-09.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Payout batches outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement withdrawal list, payout batch create/approve/process, partial failure state.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): payout batches`

**What comes next:** ADM-W5D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W4D5 — Payout batches**.

Expected result: Implement withdrawal list, payout batch create/approve/process, partial failure state.

Why this task matters: ADM-W5D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: AF-09, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W4D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-04.

#### Implement

- Implement withdrawal list, payout batch create/approve/process, partial failure state.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-04.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Batch dates 14th and 28th.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Payout batches outcome in the target environment using non-production data.
- [ ] Implement withdrawal list, payout batch create/approve/process, partial failure state.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): payout batches`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Admin daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
