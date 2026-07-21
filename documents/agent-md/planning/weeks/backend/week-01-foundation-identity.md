# Work2Cash Backend — Week 1: Foundation, Identity and Contract Availability

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Create the shared project foundations and unblock mobile and admin with stable auth, profile, PIN, session, admin auth and dashboard contracts.

## Before the week starts

Repository access, development environment, shared rules and the required approved references are ready.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | BE-W1D1 — Repo foundation and contracts | Week start conditions | Create NestJS hexagonal structure, Prisma baseline, response/error shapes, OpenAPI shell, health/version endpoints. | `docs(backend): publish initial API contract shell` |
| Day 2 — Tuesday | BE-W1D2 — Auth contract stubs | BE-W1D1 | Implement auth/profile/PIN/session DTOs and stub handlers with stable response shapes. | `feat(auth): add auth contract stubs` |
| Day 3 — Wednesday | BE-W1D3 — Auth implementation | BE-W1D2 | Implement register, login, OTP email-first/SMS fallback, refresh rotation, social auth adapter shell. | `feat(auth): implement registration and login` |
| Day 4 — Thursday | BE-W1D4 — Profile, mode, PIN, sessions | BE-W1D3 | Implement /me, profile update, mode, PIN setup/verify/reset, device/session revoke. | `feat(identity): implement profile pin and sessions` |
| Day 5 — Friday | BE-W1D5 — Admin auth and dashboard stubs | BE-W1D4 | Implement admin auth/TOTP stubs, dashboard summary stub, RBAC model seed. | `feat(admin): add auth and dashboard stubs` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — BE-W1D1: Repo foundation and contracts

> **Day 1 starts only after:** Week start conditions.  
> **Day 1 finishes only when:** Create NestJS hexagonal structure, Prisma baseline, response/error shapes, OpenAPI shell, health/version endpoints.

**Today's goal:** Create NestJS hexagonal structure, Prisma baseline, response/error shapes, OpenAPI shell, health/version endpoints.

**Why today:** BE-W1D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- The current week's start conditions and required repository access are ready.



### Build in this order

1. Create NestJS hexagonal structure, Prisma baseline, response/error shapes, OpenAPI shell, health/version endpoints.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: docs(backend): publish initial API contract shell
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Repo foundation and contracts outcome in the target environment using non-production data.

### End-of-day result

- [ ] Create NestJS hexagonal structure, Prisma baseline, response/error shapes, OpenAPI shell, health/version endpoints.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `docs(backend): publish initial API contract shell`

**What comes next:** BE-W1D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W1D1 — Repo foundation and contracts**.

Expected result: Create NestJS hexagonal structure, Prisma baseline, response/error shapes, OpenAPI shell, health/version endpoints.

Why this task matters: BE-W1D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm the week-start conditions, repository access and required environment are ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Create NestJS hexagonal structure, Prisma baseline, response/error shapes, OpenAPI shell, health/version endpoints.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: docs(backend): publish initial API contract shell

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Repo foundation and contracts outcome in the target environment using non-production data.
- [ ] Create NestJS hexagonal structure, Prisma baseline, response/error shapes, OpenAPI shell, health/version endpoints.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`docs(backend): publish initial API contract shell`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — BE-W1D2: Auth contract stubs

> **Day 2 starts only after:** BE-W1D1.  
> **Day 2 finishes only when:** Implement auth/profile/PIN/session DTOs and stub handlers with stable response shapes.

**Today's goal:** Implement auth/profile/PIN/session DTOs and stub handlers with stable response shapes.

**Why today:** BE-W1D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W1D1 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement auth/profile/PIN/session DTOs and stub handlers with stable response shapes.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(auth): add auth contract stubs
- Use `mode`; do not introduce `activeMode`.
- Required references: CONTRACT-001, MF-01, MF-02, MF-03.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Auth contract stubs outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement auth/profile/PIN/session DTOs and stub handlers with stable response shapes.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(auth): add auth contract stubs`

**What comes next:** BE-W1D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W1D2 — Auth contract stubs**.

Expected result: Implement auth/profile/PIN/session DTOs and stub handlers with stable response shapes.

Why this task matters: BE-W1D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: MF-01, MF-02, MF-03, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm BE-W1D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement auth/profile/PIN/session DTOs and stub handlers with stable response shapes.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(auth): add auth contract stubs
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Auth contract stubs outcome in the target environment using non-production data.
- [ ] Implement auth/profile/PIN/session DTOs and stub handlers with stable response shapes.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(auth): add auth contract stubs`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — BE-W1D3: Auth implementation

> **Day 3 starts only after:** BE-W1D2.  
> **Day 3 finishes only when:** Implement register, login, OTP email-first/SMS fallback, refresh rotation, social auth adapter shell.

**Today's goal:** Implement register, login, OTP email-first/SMS fallback, refresh rotation, social auth adapter shell.

**Why today:** BE-W1D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W1D2 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement register, login, OTP email-first/SMS fallback, refresh rotation, social auth adapter shell.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(auth): implement registration and login
- Required references: CONTRACT-001, MF-02, MF-03, SF-01, SF-13.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Auth implementation outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement register, login, OTP email-first/SMS fallback, refresh rotation, social auth adapter shell.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(auth): implement registration and login`

**What comes next:** BE-W1D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W1D3 — Auth implementation**.

Expected result: Implement register, login, OTP email-first/SMS fallback, refresh rotation, social auth adapter shell.

Why this task matters: BE-W1D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: MF-02, MF-03, SF-01, SF-13, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W1D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement register, login, OTP email-first/SMS fallback, refresh rotation, social auth adapter shell.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(auth): implement registration and login

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Auth implementation outcome in the target environment using non-production data.
- [ ] Implement register, login, OTP email-first/SMS fallback, refresh rotation, social auth adapter shell.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(auth): implement registration and login`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — BE-W1D4: Profile, mode, PIN, sessions

> **Day 4 starts only after:** BE-W1D3.  
> **Day 4 finishes only when:** Implement /me, profile update, mode, PIN setup/verify/reset, device/session revoke.

**Today's goal:** Implement /me, profile update, mode, PIN setup/verify/reset, device/session revoke.

**Why today:** BE-W1D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W1D3 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement /me, profile update, mode, PIN setup/verify/reset, device/session revoke.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(identity): implement profile pin and sessions
- Use `mode`; do not introduce `activeMode`.
- Required references: CONTRACT-001, SF-02, MF-18, MF-19.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Profile, mode, PIN, sessions outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement /me, profile update, mode, PIN setup/verify/reset, device/session revoke.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(identity): implement profile pin and sessions`

**What comes next:** BE-W1D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W1D4 — Profile, mode, PIN, sessions**.

Expected result: Implement /me, profile update, mode, PIN setup/verify/reset, device/session revoke.

Why this task matters: BE-W1D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: SF-02, MF-18, MF-19, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm BE-W1D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement /me, profile update, mode, PIN setup/verify/reset, device/session revoke.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(identity): implement profile pin and sessions
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Profile, mode, PIN, sessions outcome in the target environment using non-production data.
- [ ] Implement /me, profile update, mode, PIN setup/verify/reset, device/session revoke.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(identity): implement profile pin and sessions`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — BE-W1D5: Admin auth and dashboard stubs

> **Day 5 starts only after:** BE-W1D4.  
> **Day 5 finishes only when:** Implement admin auth/TOTP stubs, dashboard summary stub, RBAC model seed.

**Today's goal:** Implement admin auth/TOTP stubs, dashboard summary stub, RBAC model seed.

**Why today:** BE-W2D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W1D4 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Implement admin auth/TOTP stubs, dashboard summary stub, RBAC model seed.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(admin): add auth and dashboard stubs
- Use `mode`; do not introduce `activeMode`.
- Required references: CONTRACT-001, AF-01, AF-02.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Admin auth and dashboard stubs outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement admin auth/TOTP stubs, dashboard summary stub, RBAC model seed.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): add auth and dashboard stubs`

**What comes next:** BE-W2D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W1D5 — Admin auth and dashboard stubs**.

Expected result: Implement admin auth/TOTP stubs, dashboard summary stub, RBAC model seed.

Why this task matters: BE-W2D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: AF-01, AF-02, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W1D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Implement admin auth/TOTP stubs, dashboard summary stub, RBAC model seed.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(admin): add auth and dashboard stubs
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Admin auth and dashboard stubs outcome in the target environment using non-production data.
- [ ] Implement admin auth/TOTP stubs, dashboard summary stub, RBAC model seed.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): add auth and dashboard stubs`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Backend daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
