# Work2Cash Admin — Week 2: Tasker Activation, Task Creation and Funding

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Build the flows that allow Taskers to become eligible and Task Owners to create, locate, attach media to and fund tasks.

## Before the week starts

The Admin Week 1 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | ADM-W2D1 — User management | ADM-W1D5 | Implement user list/detail with profile, mode, wallets summary, sessions, risk summary. | `feat(admin): user management` |
| Day 2 — Tuesday | ADM-W2D2 — KYC Review Operations | ADM-W2D1 | An authorized operations reviewer can find a KYC case, understand the applicant and attempt history, approve or reject it, request re-verification or escalate risk, while every privileged action is permission-checked and audited. | `feat(admin-kyc): implement governed kyc review workflow` |
| Day 3 — Wednesday | ADM-W2D3 — Catalog management | ADM-W2D2 | Implement categories/types list, create/edit, disable/archive, audit reason. | `feat(admin): catalog management` |
| Day 4 — Thursday | ADM-W2D4 — Task monitor foundation | ADM-W2D3 | Implement task list/detail shell with status, owner, tasker, payment, location and media placeholders. | `feat(admin): task monitor foundation` |
| Day 5 — Friday | ADM-W2D5 — Media moderation | ADM-W2D4 | Implement media review, remove/reject reason and audit action. | `feat(admin): media moderation` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — ADM-W2D1: User management

> **Day 1 starts only after:** ADM-W1D5.  
> **Day 1 finishes only when:** Implement user list/detail with profile, mode, wallets summary, sessions, risk summary.

**Today's goal:** Implement user list/detail with profile, mode, wallets summary, sessions, risk summary.

**Why today:** ADM-W2D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W1D5 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-01. This does not block today's approved construction scope.

### Build in this order

1. Implement user list/detail with profile, mode, wallets summary, sessions, risk summary.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-01.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Consumes data from mobile auth/profile.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Required references: CONTRACT-001, AF-03.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete User management outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement user list/detail with profile, mode, wallets summary, sessions, risk summary.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): user management`

**What comes next:** ADM-W2D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W2D1 — User management**.

Expected result: Implement user list/detail with profile, mode, wallets summary, sessions, risk summary.

Why this task matters: ADM-W2D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: AF-03, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W1D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-01.

#### Implement

- Implement user list/detail with profile, mode, wallets summary, sessions, risk summary.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-01.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Consumes data from mobile auth/profile.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete User management outcome in the target environment using non-production data.
- [ ] Implement user list/detail with profile, mode, wallets summary, sessions, risk summary.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): user management`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — ADM-W2D2: KYC Review Operations

> **Day 2 starts only after:** ADM-W2D1.  
> **Day 2 finishes only when:** An authorized operations reviewer can find a KYC case, understand the applicant and attempt history, approve or reject it, request re-verification or escalate risk, while every privileged action is permission-checked and audited.

**Today's goal:** An authorized operations reviewer can find a KYC case, understand the applicant and attempt history, approve or reject it, request re-verification or escalate risk, while every privileged action is permission-checked and audited.

**Why today:** Tasker activation cannot be trusted if review decisions are unclear, unaudited or expose unnecessary identity data. This task turns approved AF-04 behavior into a safe daily operations tool.

**Status:** planned

### Before you start

- ADM-W2D1 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-02. This does not block today's approved construction scope.

### Build in this order

1. Implement KYC queue filters, pagination, loading, empty, error and retry states.
2. Implement case detail with profile summary, masked identifiers, verification versions and attempt history.
3. Implement approve, reject, request re-verification and risk escalation actions.
4. Require permission checks, reason capture and consequence confirmation before mutations.

### Technical rules

- Do not: Editing submitted identity evidence or rewriting attempt history.
- Do not: Showing full identity numbers or unrestricted evidence in queue rows.
- Do not: Bypassing RBAC because a control is hidden in the UI.
- Required references: AF-04, ASF-02, ASF-05, ASF-11.

### Tests for today

- [ ] Component tests for queue, detail, empty, loading, error and stale-state views.
- [ ] RBAC tests for route access, action visibility and backend denial handling.
- [ ] Review one case for each supported outcome using staging role accounts.

### End-of-day result

- [ ] An authorized operations reviewer can find a KYC case, understand the applicant and attempt history, approve or reject it, request re-verification or escalate risk, while every privileged action is permission-checked and audited.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin-kyc): implement governed kyc review workflow`

**What comes next:** The next day can use this accepted result.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W2D2 — KYC Review Operations**.

Expected result: An authorized operations reviewer can find a KYC case, understand the applicant and attempt history, approve or reject it, request re-verification or escalate risk, while every privileged action is permission-checked and audited.

Why this task matters: Tasker activation cannot be trusted if review decisions are unclear, unaudited or expose unnecessary identity data. This task turns approved AF-04 behavior into a safe daily operations tool.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: AF-04, ASF-02, ASF-05, ASF-11.

#### Before changing code

- Confirm ADM-W2D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-02.

#### Implement

- Implement KYC queue filters, pagination, loading, empty, error and retry states.
- Implement case detail with profile summary, masked identifiers, verification versions and attempt history.
- Implement approve, reject, request re-verification and risk escalation actions.
- Require permission checks, reason capture and consequence confirmation before mutations.

#### Guardrails

- Do not: Editing submitted identity evidence or rewriting attempt history.
- Do not: Showing full identity numbers or unrestricted evidence in queue rows.
- Do not: Bypassing RBAC because a control is hidden in the UI.
- Do not: Automatically approving provider success without the approved review rule.

#### Verify

- [ ] Component tests for queue, detail, empty, loading, error and stale-state views.
- [ ] RBAC tests for route access, action visibility and backend denial handling.
- [ ] Review one case for each supported outcome using staging role accounts.
- [ ] An authorized operations reviewer can find a KYC case, understand the applicant and attempt history, approve or reject it, request re-verification or escalate risk, while every privileged action is permission-checked and audited.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin-kyc): implement governed kyc review workflow`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — ADM-W2D3: Catalog management

> **Day 3 starts only after:** ADM-W2D2.  
> **Day 3 finishes only when:** Implement categories/types list, create/edit, disable/archive, audit reason.

**Today's goal:** Implement categories/types list, create/edit, disable/archive, audit reason.

**Why today:** ADM-W2D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W2D2 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-02. This does not block today's approved construction scope.

### Build in this order

1. Implement categories/types list, create/edit, disable/archive, audit reason.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-02.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Supports mobile task creation.
- Required references: CONTRACT-001, AF-11.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Catalog management outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement categories/types list, create/edit, disable/archive, audit reason.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): catalog management`

**What comes next:** ADM-W2D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W2D3 — Catalog management**.

Expected result: Implement categories/types list, create/edit, disable/archive, audit reason.

Why this task matters: ADM-W2D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: AF-11, CONTRACT-001, DATA-001.

#### Before changing code

- Confirm ADM-W2D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-02.

#### Implement

- Implement categories/types list, create/edit, disable/archive, audit reason.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-02.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Supports mobile task creation.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Catalog management outcome in the target environment using non-production data.
- [ ] Implement categories/types list, create/edit, disable/archive, audit reason.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): catalog management`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — ADM-W2D4: Task monitor foundation

> **Day 4 starts only after:** ADM-W2D3.  
> **Day 4 finishes only when:** Implement task list/detail shell with status, owner, tasker, payment, location and media placeholders.

**Today's goal:** Implement task list/detail shell with status, owner, tasker, payment, location and media placeholders.

**Why today:** ADM-W2D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W2D3 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-03. This does not block today's approved construction scope.

### Build in this order

1. Implement task list/detail shell with status, owner, tasker, payment, location and media placeholders.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-03.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Consumes mobile task draft/payment/media states.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Required references: CONTRACT-001, AF-05.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Task monitor foundation outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement task list/detail shell with status, owner, tasker, payment, location and media placeholders.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): task monitor foundation`

**What comes next:** ADM-W2D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W2D4 — Task monitor foundation**.

Expected result: Implement task list/detail shell with status, owner, tasker, payment, location and media placeholders.

Why this task matters: ADM-W2D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: AF-05, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W2D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-03.

#### Implement

- Implement task list/detail shell with status, owner, tasker, payment, location and media placeholders.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-03.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Consumes mobile task draft/payment/media states.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Do not add admin task reassignment.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Task monitor foundation outcome in the target environment using non-production data.
- [ ] Implement task list/detail shell with status, owner, tasker, payment, location and media placeholders.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): task monitor foundation`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — ADM-W2D5: Media moderation

> **Day 5 starts only after:** ADM-W2D4.  
> **Day 5 finishes only when:** Implement media review, remove/reject reason and audit action.

**Today's goal:** Implement media review, remove/reject reason and audit action.

**Why today:** ADM-W3D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W2D4 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** ADM-INT-02. This does not block today's approved construction scope.

### Build in this order

1. Implement media review, remove/reject reason and audit action.
2. Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-02.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Supports proof media governance.
- Use `mode`; do not introduce `activeMode`.
- Required references: CONTRACT-001, AF-13.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Media moderation outcome in the target environment using non-production data.

### End-of-day result

- [ ] Implement media review, remove/reject reason and audit action.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): media moderation`

**What comes next:** ADM-W3D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W2D5 — Media moderation**.

Expected result: Implement media review, remove/reject reason and audit action.

Why this task matters: ADM-W3D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: AF-13, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W2D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ADM-INT-02.

#### Implement

- Implement media review, remove/reject reason and audit action.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-02.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Supports proof media governance.
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Media moderation outcome in the target environment using non-production data.
- [ ] Implement media review, remove/reject reason and audit action.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): media moderation`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Admin daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
