# Work2Cash Admin — Week 6: Hardening, Security and Performance

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Fix integration defects, harden performance, security and provider behavior, improve recovery paths and close major technical gaps.

## Before the week starts

The Admin Week 5 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | ADM-W6D1 — Admin hardening | ADM-W5D5, ADM-INT-05 | Fix defects, tighten RBAC, audit reasons, empty/error/loading states. | `feat(admin): admin hardening` |
| Day 2 — Tuesday | ADM-W6D2 — Admin performance and table QA | ADM-W6D1 | Test large lists, filters, pagination and detail loading. | `feat(admin): admin performance and table qa` |
| Day 3 — Wednesday | ADM-W6D3 — Security and permission review | ADM-W6D2 | Validate TOTP, RBAC, forbidden states, high-impact confirmations and audit capture. | `feat(admin): security and permission review` |
| Day 4 — Thursday | ADM-W6D4 — Operational workflow review | ADM-W6D3 | Run KYC, task monitor, force cancel, reports, finance, payout and support workflows end to end. | `feat(admin): operational workflow review` |
| Day 5 — Friday | ADM-W6D5 — Hardening review | ADM-W6D4 | Close major admin defects and create release-candidate blocker list. | `feat(admin): hardening review` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — ADM-W6D1: Admin hardening

> **Day 1 starts only after:** ADM-W5D5, ADM-INT-05.  
> **Day 1 finishes only when:** Fix defects, tighten RBAC, audit reasons, empty/error/loading states.

**Today's goal:** Fix defects, tighten RBAC, audit reasons, empty/error/loading states.

**Why today:** ADM-W6D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W5D5 is accepted or its required interface is demonstrably ready.
- ADM-INT-05 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W6D1, MOB-W6D1. This does not block today's approved construction scope.

### Build in this order

1. Fix defects, tighten RBAC, audit reasons, empty/error/loading states.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No new modules.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Admin hardening outcome in the target environment using non-production data.

### End-of-day result

- [ ] Fix defects, tighten RBAC, audit reasons, empty/error/loading states.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): admin hardening`

**What comes next:** ADM-W6D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W6D1 — Admin hardening**.

Expected result: Fix defects, tighten RBAC, audit reasons, empty/error/loading states.

Why this task matters: ADM-W6D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W5D5 is accepted or its required interface is ready.
- Confirm ADM-INT-05 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W6D1, MOB-W6D1.

#### Implement

- Fix defects, tighten RBAC, audit reasons, empty/error/loading states.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No new modules.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Admin hardening outcome in the target environment using non-production data.
- [ ] Fix defects, tighten RBAC, audit reasons, empty/error/loading states.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): admin hardening`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — ADM-W6D2: Admin performance and table QA

> **Day 2 starts only after:** ADM-W6D1.  
> **Day 2 finishes only when:** Test large lists, filters, pagination and detail loading.

**Today's goal:** Test large lists, filters, pagination and detail loading.

**Why today:** ADM-W6D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W6D1 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W6D2, MOB-W6D2. This does not block today's approved construction scope.

### Build in this order

1. Test large lists, filters, pagination and detail loading.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Skeletons for fetch; overlay for actions.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Admin performance and table QA outcome in the target environment using non-production data.

### End-of-day result

- [ ] Test large lists, filters, pagination and detail loading.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): admin performance and table qa`

**What comes next:** ADM-W6D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W6D2 — Admin performance and table QA**.

Expected result: Test large lists, filters, pagination and detail loading.

Why this task matters: ADM-W6D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W6D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W6D2, MOB-W6D2.

#### Implement

- Test large lists, filters, pagination and detail loading.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Skeletons for fetch; overlay for actions.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Admin performance and table QA outcome in the target environment using non-production data.
- [ ] Test large lists, filters, pagination and detail loading.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): admin performance and table qa`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — ADM-W6D3: Security and permission review

> **Day 3 starts only after:** ADM-W6D2.  
> **Day 3 finishes only when:** Validate TOTP, RBAC, forbidden states, high-impact confirmations and audit capture.

**Today's goal:** Validate TOTP, RBAC, forbidden states, high-impact confirmations and audit capture.

**Why today:** ADM-W6D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W6D2 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W6D3, MOB-W6D3. This does not block today's approved construction scope.

### Build in this order

1. Validate TOTP, RBAC, forbidden states, high-impact confirmations and audit capture.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No unguarded admin actions.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Security and permission review outcome in the target environment using non-production data.

### End-of-day result

- [ ] Validate TOTP, RBAC, forbidden states, high-impact confirmations and audit capture.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): security and permission review`

**What comes next:** ADM-W6D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W6D3 — Security and permission review**.

Expected result: Validate TOTP, RBAC, forbidden states, high-impact confirmations and audit capture.

Why this task matters: ADM-W6D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W6D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W6D3, MOB-W6D3.

#### Implement

- Validate TOTP, RBAC, forbidden states, high-impact confirmations and audit capture.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No unguarded admin actions.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Security and permission review outcome in the target environment using non-production data.
- [ ] Validate TOTP, RBAC, forbidden states, high-impact confirmations and audit capture.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): security and permission review`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — ADM-W6D4: Operational workflow review

> **Day 4 starts only after:** ADM-W6D3.  
> **Day 4 finishes only when:** Run KYC, task monitor, force cancel, reports, finance, payout and support workflows end to end.

**Today's goal:** Run KYC, task monitor, force cancel, reports, finance, payout and support workflows end to end.

**Why today:** ADM-W6D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W6D3 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W6D4, MOB-W6D4. This does not block today's approved construction scope.

### Build in this order

1. Run KYC, task monitor, force cancel, reports, finance, payout and support workflows end to end.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No admin reassignment under any condition.
- Do not add admin task reassignment.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Operational workflow review outcome in the target environment using non-production data.

### End-of-day result

- [ ] Run KYC, task monitor, force cancel, reports, finance, payout and support workflows end to end.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): operational workflow review`

**What comes next:** ADM-W6D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W6D4 — Operational workflow review**.

Expected result: Run KYC, task monitor, force cancel, reports, finance, payout and support workflows end to end.

Why this task matters: ADM-W6D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W6D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W6D4, MOB-W6D4.

#### Implement

- Run KYC, task monitor, force cancel, reports, finance, payout and support workflows end to end.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No admin reassignment under any condition.
- Do not add admin task reassignment.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Operational workflow review outcome in the target environment using non-production data.
- [ ] Run KYC, task monitor, force cancel, reports, finance, payout and support workflows end to end.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): operational workflow review`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — ADM-W6D5: Hardening review

> **Day 5 starts only after:** ADM-W6D4.  
> **Day 5 finishes only when:** Close major admin defects and create release-candidate blocker list.

**Today's goal:** Close major admin defects and create release-candidate blocker list.

**Why today:** ADM-W7D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- ADM-W6D4 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W6D5, MOB-W6D5. This does not block today's approved construction scope.

### Build in this order

1. Close major admin defects and create release-candidate blocker list.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Only scoped fixes after review.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Hardening review outcome in the target environment using non-production data.

### End-of-day result

- [ ] Close major admin defects and create release-candidate blocker list.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin): hardening review`

**What comes next:** ADM-W7D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-W6D5 — Hardening review**.

Expected result: Close major admin defects and create release-candidate blocker list.

Why this task matters: ADM-W7D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm ADM-W6D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W6D5, MOB-W6D5.

#### Implement

- Close major admin defects and create release-candidate blocker list.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Only scoped fixes after review.

#### Verify

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Run the complete Hardening review outcome in the target environment using non-production data.
- [ ] Close major admin defects and create release-candidate blocker list.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin): hardening review`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Admin daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
