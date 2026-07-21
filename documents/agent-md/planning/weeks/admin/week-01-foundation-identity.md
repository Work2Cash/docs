# Work2Cash Admin — Week 1: Foundation, Identity and Contract Availability

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Create the shared project foundations and unblock mobile and admin with stable auth, profile, PIN, session, admin auth and dashboard contracts.

## Before the week starts

Repository access, development environment, shared rules and the required approved references are ready.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | ADM-W1D1 — Admin project foundation | Week start conditions | Create Next.js structure, auth layout, design tokens, table/detail/action modal primitives. | `feat(admin): admin project foundation` |
| Day 2 — Tuesday | ADM-W1D2 — Admin auth shell | ADM-W1D1 | Implement login, TOTP challenge, session guard, protected layout. | `feat(admin): admin auth shell` |
| Day 3 — Wednesday | ADM-W1D3 — Dashboard shell | ADM-W1D2 | Implement dashboard layout with empty/skeleton cards for users, KYC, tasks, finance and use-case health. | `feat(admin): dashboard shell` |
| Day 4 — Thursday | ADM-W1D4 — RBAC UI primitives | ADM-W1D3 | Implement permission gate, forbidden state, reason/audit confirmation modal. | `feat(admin): rbac ui primitives` |
| Day 5 — Friday | ADM-W1D5 — List/detail primitives | ADM-W1D4 | Implement reusable list, search, filter, pagination, detail panel and export placeholder. | `feat(admin): list detail primitives` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — ADM-W1D1: Admin project foundation

> **Day 1 starts only after:** Week start conditions.  
> **Day 1 finishes only when:** Create Next.js structure, auth layout, design tokens, table/detail/action modal primitives.

**Today's goal:** Create Next.js structure, auth layout, design tokens, table/detail/action modal primitives.

**Why today:** ADM-W1D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- The current week's start conditions and required repository access are ready.

**Later integration or acceptance gate:** ADM-INT-01. This does not block today's approved construction scope.

### Build in this order

1. Create Next.js structure, auth layout, design tokens, table/detail/action modal primitives.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-01.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Follow Work2Cash design system.
- Required references: CONTRACT-001, AF-01.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Admin project foundation outcome in the target environment using non-production data.

### End-of-day result

- [ ] Create Next.js structure, auth layout, design tokens, table/detail/action modal primitives.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): admin project foundation`

**What comes next:** ADM-W1D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W1D1 — Admin project foundation**.

Expected result: Create Next.js structure, auth layout, design tokens, table/detail/action modal primitives.

Why this task matters: ADM-W1D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: AF-01, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm the week-start conditions, repository access and required environment are ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-01.

#### Implement

- Create Next.js structure, auth layout, design tokens, table/detail/action modal primitives.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-01.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Follow Work2Cash design system.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Admin project foundation outcome in the target environment using non-production data.
- [ ] Create Next.js structure, auth layout, design tokens, table/detail/action modal primitives.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): admin project foundation`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — ADM-W1D2: Admin auth shell

> **Day 2 starts only after:** ADM-W1D1.  
> **Day 2 finishes only when:** Implement login, TOTP challenge, session guard, protected layout.

**Today's goal:** Implement login, TOTP challenge, session guard, protected layout.

**Why today:** ADM-W1D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W1D1 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-01. This does not block today's approved construction scope.

### Build in this order

1. Implement login, TOTP challenge, session guard, protected layout.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-01.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Depends on backend admin auth stubs.
- Required references: CONTRACT-001, AF-01, ASF-01, ASF-02.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Admin auth shell outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement login, TOTP challenge, session guard, protected layout.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): admin auth shell`

**What comes next:** ADM-W1D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W1D2 — Admin auth shell**.

Expected result: Implement login, TOTP challenge, session guard, protected layout.

Why this task matters: ADM-W1D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: AF-01, ASF-01, ASF-02, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W1D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-01.

#### Implement

- Implement login, TOTP challenge, session guard, protected layout.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-01.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Depends on backend admin auth stubs.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Admin auth shell outcome in the target environment using non-production data.
- [ ] Implement login, TOTP challenge, session guard, protected layout.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): admin auth shell`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — ADM-W1D3: Dashboard shell

> **Day 3 starts only after:** ADM-W1D2.  
> **Day 3 finishes only when:** Implement dashboard layout with empty/skeleton cards for users, KYC, tasks, finance and use-case health.

**Today's goal:** Implement dashboard layout with empty/skeleton cards for users, KYC, tasks, finance and use-case health.

**Why today:** ADM-W1D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W1D2 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-01. This does not block today's approved construction scope.

### Build in this order

1. Implement dashboard layout with empty/skeleton cards for users, KYC, tasks, finance and use-case health.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-01.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No fake operational decisions.
- Do not add admin task reassignment.
- Required references: CONTRACT-001, AF-02.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Dashboard shell outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement dashboard layout with empty/skeleton cards for users, KYC, tasks, finance and use-case health.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): dashboard shell`

**What comes next:** ADM-W1D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W1D3 — Dashboard shell**.

Expected result: Implement dashboard layout with empty/skeleton cards for users, KYC, tasks, finance and use-case health.

Why this task matters: ADM-W1D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: AF-02, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W1D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-01.

#### Implement

- Implement dashboard layout with empty/skeleton cards for users, KYC, tasks, finance and use-case health.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-01.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No fake operational decisions.
- Do not add admin task reassignment.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Dashboard shell outcome in the target environment using non-production data.
- [ ] Implement dashboard layout with empty/skeleton cards for users, KYC, tasks, finance and use-case health.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): dashboard shell`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — ADM-W1D4: RBAC UI primitives

> **Day 4 starts only after:** ADM-W1D3.  
> **Day 4 finishes only when:** Implement permission gate, forbidden state, reason/audit confirmation modal.

**Today's goal:** Implement permission gate, forbidden state, reason/audit confirmation modal.

**Why today:** ADM-W1D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W1D3 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-01. This does not block today's approved construction scope.

### Build in this order

1. Implement permission gate, forbidden state, reason/audit confirmation modal.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-01.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Used by all admin flows.
- Required references: CONTRACT-001, ASF-02, ASF-05, ASF-06.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete RBAC UI primitives outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement permission gate, forbidden state, reason/audit confirmation modal.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): rbac ui primitives`

**What comes next:** ADM-W1D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W1D4 — RBAC UI primitives**.

Expected result: Implement permission gate, forbidden state, reason/audit confirmation modal.

Why this task matters: ADM-W1D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: ASF-02, ASF-05, ASF-06, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm ADM-W1D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-01.

#### Implement

- Implement permission gate, forbidden state, reason/audit confirmation modal.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-01.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Used by all admin flows.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete RBAC UI primitives outcome in the target environment using non-production data.
- [ ] Implement permission gate, forbidden state, reason/audit confirmation modal.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): rbac ui primitives`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — ADM-W1D5: List/detail primitives

> **Day 5 starts only after:** ADM-W1D4.  
> **Day 5 finishes only when:** Implement reusable list, search, filter, pagination, detail panel and export placeholder.

**Today's goal:** Implement reusable list, search, filter, pagination, detail panel and export placeholder.

**Why today:** ADM-W2D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W1D4 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-01. This does not block today's approved construction scope.

### Build in this order

1. Implement reusable list, search, filter, pagination, detail panel and export placeholder.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-01.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Foundation for AF-03 to AF-24.
- Required references: CONTRACT-001, ASF-03, ASF-11.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete List/detail primitives outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement reusable list, search, filter, pagination, detail panel and export placeholder.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): list detail primitives`

**What comes next:** ADM-W2D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W1D5 — List/detail primitives**.

Expected result: Implement reusable list, search, filter, pagination, detail panel and export placeholder.

Why this task matters: ADM-W2D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: ASF-03, ASF-11, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W1D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-01.

#### Implement

- Implement reusable list, search, filter, pagination, detail panel and export placeholder.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-01.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Foundation for AF-03 to AF-24.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete List/detail primitives outcome in the target environment using non-production data.
- [ ] Implement reusable list, search, filter, pagination, detail panel and export placeholder.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): list detail primitives`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Admin daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
