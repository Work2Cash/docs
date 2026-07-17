---
id: ADM-WEEK-01
title: Admin Frontend Week 1 — Foundation, Identity and Contract Availability
type: build-task-week
team: Admin Frontend
week: 1
days: 5
status: planned
version: 1.0
last_reviewed: 2026-07-17
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
---

# Admin Frontend Week 1 — Foundation, Identity and Contract Availability

> Canonical Phase 3 source pack. Edit the relevant day inside this weekly file; generated weekly human and agent execution plans inherit from it.

## Day 1 of 5 — Monday

### ADM-W1D1 — Admin project foundation

```task-metadata
id: ADM-W1D1
title: Admin project foundation
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: AF-01, ADM-INT-01, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: admin-ui-construction
stage_order: 1
legacy_slot: W1D1
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Create Next.js structure, auth layout, design tokens, table/detail/action modal primitives.

### Why it matters

This work matters because the approved plan names this dependency or handoff: None Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Follow Work2Cash design system.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 1 — Admin UI Construction |
| Scheduled slot | Week 1, Day 1 — Mon 6 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-01-foundation-identity.md, W1D1 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| AF-01 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| Legacy dependency | None | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| ADM-INT-01 | Owns later connection of this fixture-driven Admin UI to authoritative Mobile/Backend outcomes. | The integration card passes real-contract, permission, recovery and end-to-end checks. |

### Required inputs

- Agent Markdown for AF-01 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Admin project foundation.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Create Next.js structure, auth layout, design tokens, table/detail/action modal primitives.
- Preserve the dependency and output rule from the approved legacy row.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-01.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Follow Work2Cash design system.

### Expected modules or files

- Relevant Next.js admin feature, protected route and state/query area.
- RBAC gate, table/detail/action primitives required by the scope.
- API/socket adapter named by the scope.
- Component, permission and integration tests.

These are implementation surfaces, not invented repository paths. The implementing team must map them to the actual codebase before editing.

### Security, permissions and audit

- Enforce authorization at the backend boundary and mirror it safely in the client.
- Do not expose secrets, exact addresses, full proof media, real phone numbers, KYC data or payment details outside approved roles and states.
- Record privileged, financial, identity or configuration mutations using the approved audit convention.
- Treat backend/provider persisted state as authoritative after retries, reconnects and app/page reloads.

### Provider dependencies

Google Maps Platform. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Follow Work2Cash design system.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Admin project foundation outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Follow Work2Cash design system.
- [ ] Verify keyboard operation, permitted and forbidden roles, confirmation copy and audit evidence.

### Evidence to attach

- Passing automated-test output with build/commit identifier.
- Redacted screenshots, recordings or request/response examples proving the outcome and one recovery path.
- Dependency, environment and provider validation evidence where applicable.
- Reviewer acceptance, defect links and any residual-risk decision.

### Definition of done

- [ ] Scope and acceptance criteria are complete.
- [ ] Automated and manual tests pass with evidence.
- [ ] Security, permission, audit and provider rules are satisfied.
- [ ] The card is accepted for its stated stage; any later integration gate remains visibly owned and tracked.
- [ ] Documentation, traceability and evidence-based status are updated.

### Blockers and escalation

If a contract, design, environment, provider, permission decision or predecessor is missing, record the blocker, owner, discovery date, impact and next decision. Escalate cross-team contract conflicts to the Technical Lead, product ambiguity to Product, provider/environment issues to Infrastructure and acceptance disputes to the named reviewer. Never hide a blocker by inventing a local substitute.

### What this unlocks

- ADM-W1D2 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): admin project foundation`

## Day 2 of 5 — Tuesday

### ADM-W1D2 — Admin auth shell

```task-metadata
id: ADM-W1D2
title: Admin auth shell
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: AF-01, ASF-01, ASF-02, ADM-W1D1, ADM-INT-01, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: admin-ui-construction
stage_order: 1
legacy_slot: W1D2
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Implement login, TOTP challenge, session guard, protected layout.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /admin/auth/login, /admin/auth/totp/verify. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Depends on backend admin auth stubs.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 1 — Admin UI Construction |
| Scheduled slot | Week 1, Day 2 — Tue 7 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-01-foundation-identity.md, W1D2 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| AF-01 | Defines approved behavior, states or handoffs that this task must preserve. |
| ASF-01 | Defines approved behavior, states or handoffs that this task must preserve. |
| ASF-02 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-W1D1 | Provides admin project foundation required before this task can be accepted. | ADM-W1D1 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /admin/auth/login, /admin/auth/totp/verify. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| ADM-INT-01 | Owns later connection of this fixture-driven Admin UI to authoritative Mobile/Backend outcomes. | The integration card passes real-contract, permission, recovery and end-to-end checks. |

### Required inputs

- Agent Markdown for AF-01, ASF-01, ASF-02 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Admin auth shell.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement login, TOTP challenge, session guard, protected layout.
- Preserve the dependency and output rule from the approved legacy row.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-01.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Depends on backend admin auth stubs.

### Expected modules or files

- Relevant Next.js admin feature, protected route and state/query area.
- RBAC gate, table/detail/action primitives required by the scope.
- API/socket adapter named by the scope.
- Component, permission and integration tests.

These are implementation surfaces, not invented repository paths. The implementing team must map them to the actual codebase before editing.

### Security, permissions and audit

- Enforce authorization at the backend boundary and mirror it safely in the client.
- Do not expose secrets, exact addresses, full proof media, real phone numbers, KYC data or payment details outside approved roles and states.
- Record privileged, financial, identity or configuration mutations using the approved audit convention.
- Treat backend/provider persisted state as authoritative after retries, reconnects and app/page reloads.

### Provider dependencies

Termii when SMS fallback is required. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Depends on backend admin auth stubs.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Admin auth shell outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Depends on backend admin auth stubs.
- [ ] Verify keyboard operation, permitted and forbidden roles, confirmation copy and audit evidence.

### Evidence to attach

- Passing automated-test output with build/commit identifier.
- Redacted screenshots, recordings or request/response examples proving the outcome and one recovery path.
- Dependency, environment and provider validation evidence where applicable.
- Reviewer acceptance, defect links and any residual-risk decision.

### Definition of done

- [ ] Scope and acceptance criteria are complete.
- [ ] Automated and manual tests pass with evidence.
- [ ] Security, permission, audit and provider rules are satisfied.
- [ ] The card is accepted for its stated stage; any later integration gate remains visibly owned and tracked.
- [ ] Documentation, traceability and evidence-based status are updated.

### Blockers and escalation

If a contract, design, environment, provider, permission decision or predecessor is missing, record the blocker, owner, discovery date, impact and next decision. Escalate cross-team contract conflicts to the Technical Lead, product ambiguity to Product, provider/environment issues to Infrastructure and acceptance disputes to the named reviewer. Never hide a blocker by inventing a local substitute.

### What this unlocks

- ADM-W1D3 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): admin auth shell`

## Day 3 of 5 — Wednesday

### ADM-W1D3 — Dashboard shell

```task-metadata
id: ADM-W1D3
title: Dashboard shell
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: AF-02, ADM-W1D2, ADM-INT-01, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: admin-ui-construction
stage_order: 1
legacy_slot: W1D3
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Implement dashboard layout with empty/skeleton cards for users, KYC, tasks, finance and use-case health.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /admin/dashboard stub. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: No fake operational decisions.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 1 — Admin UI Construction |
| Scheduled slot | Week 1, Day 3 — Wed 8 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-01-foundation-identity.md, W1D3 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| AF-02 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-W1D2 | Provides admin auth shell required before this task can be accepted. | ADM-W1D2 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /admin/dashboard stub. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| ADM-INT-01 | Owns later connection of this fixture-driven Admin UI to authoritative Mobile/Backend outcomes. | The integration card passes real-contract, permission, recovery and end-to-end checks. |

### Required inputs

- Agent Markdown for AF-02 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Dashboard shell.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement dashboard layout with empty/skeleton cards for users, KYC, tasks, finance and use-case health.
- Preserve the dependency and output rule from the approved legacy row.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-01.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No fake operational decisions.
- Do not add admin task reassignment.

### Expected modules or files

- Relevant Next.js admin feature, protected route and state/query area.
- RBAC gate, table/detail/action primitives required by the scope.
- API/socket adapter named by the scope.
- Component, permission and integration tests.

These are implementation surfaces, not invented repository paths. The implementing team must map them to the actual codebase before editing.

### Security, permissions and audit

- Enforce authorization at the backend boundary and mirror it safely in the client.
- Do not expose secrets, exact addresses, full proof media, real phone numbers, KYC data or payment details outside approved roles and states.
- Record privileged, financial, identity or configuration mutations using the approved audit convention.
- Treat backend/provider persisted state as authoritative after retries, reconnects and app/page reloads.

### Provider dependencies

Smile ID, Paystack and Moniepoint. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: No fake operational decisions.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Dashboard shell outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: No fake operational decisions.
- [ ] Verify keyboard operation, permitted and forbidden roles, confirmation copy and audit evidence.

### Evidence to attach

- Passing automated-test output with build/commit identifier.
- Redacted screenshots, recordings or request/response examples proving the outcome and one recovery path.
- Dependency, environment and provider validation evidence where applicable.
- Reviewer acceptance, defect links and any residual-risk decision.

### Definition of done

- [ ] Scope and acceptance criteria are complete.
- [ ] Automated and manual tests pass with evidence.
- [ ] Security, permission, audit and provider rules are satisfied.
- [ ] The card is accepted for its stated stage; any later integration gate remains visibly owned and tracked.
- [ ] Documentation, traceability and evidence-based status are updated.

### Blockers and escalation

If a contract, design, environment, provider, permission decision or predecessor is missing, record the blocker, owner, discovery date, impact and next decision. Escalate cross-team contract conflicts to the Technical Lead, product ambiguity to Product, provider/environment issues to Infrastructure and acceptance disputes to the named reviewer. Never hide a blocker by inventing a local substitute.

### What this unlocks

- ADM-W1D4 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): dashboard shell`

## Day 4 of 5 — Thursday

### ADM-W1D4 — RBAC UI primitives

```task-metadata
id: ADM-W1D4
title: RBAC UI primitives
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: ASF-02, ASF-05, ASF-06, ADM-W1D3, ADM-INT-01, CONTRACT-001, DATA-001
delivery_stage: admin-ui-construction
stage_order: 1
legacy_slot: W1D4
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Implement permission gate, forbidden state, reason/audit confirmation modal.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /admin/roles, /admin/permissions stubs. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Used by all admin flows.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 1 — Admin UI Construction |
| Scheduled slot | Week 1, Day 4 — Thu 9 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-01-foundation-identity.md, W1D4 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| ASF-02 | Defines approved behavior, states or handoffs that this task must preserve. |
| ASF-05 | Defines approved behavior, states or handoffs that this task must preserve. |
| ASF-06 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-W1D3 | Provides dashboard shell required before this task can be accepted. | ADM-W1D3 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /admin/roles, /admin/permissions stubs. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| ADM-INT-01 | Owns later connection of this fixture-driven Admin UI to authoritative Mobile/Backend outcomes. | The integration card passes real-contract, permission, recovery and end-to-end checks. |

### Required inputs

- Agent Markdown for ASF-02, ASF-05, ASF-06 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for RBAC UI primitives.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement permission gate, forbidden state, reason/audit confirmation modal.
- Preserve the dependency and output rule from the approved legacy row.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-01.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Used by all admin flows.

### Expected modules or files

- Relevant Next.js admin feature, protected route and state/query area.
- RBAC gate, table/detail/action primitives required by the scope.
- API/socket adapter named by the scope.
- Component, permission and integration tests.

These are implementation surfaces, not invented repository paths. The implementing team must map them to the actual codebase before editing.

### Security, permissions and audit

- Enforce authorization at the backend boundary and mirror it safely in the client.
- Do not expose secrets, exact addresses, full proof media, real phone numbers, KYC data or payment details outside approved roles and states.
- Record privileged, financial, identity or configuration mutations using the approved audit convention.
- Treat backend/provider persisted state as authoritative after retries, reconnects and app/page reloads.

### Provider dependencies

No direct external provider is named by this task. If implementation discovers one, stop and add the governed provider dependency before integration.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Used by all admin flows.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete RBAC UI primitives outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Used by all admin flows.
- [ ] Verify keyboard operation, permitted and forbidden roles, confirmation copy and audit evidence.

### Evidence to attach

- Passing automated-test output with build/commit identifier.
- Redacted screenshots, recordings or request/response examples proving the outcome and one recovery path.
- Dependency, environment and provider validation evidence where applicable.
- Reviewer acceptance, defect links and any residual-risk decision.

### Definition of done

- [ ] Scope and acceptance criteria are complete.
- [ ] Automated and manual tests pass with evidence.
- [ ] Security, permission, audit and provider rules are satisfied.
- [ ] The card is accepted for its stated stage; any later integration gate remains visibly owned and tracked.
- [ ] Documentation, traceability and evidence-based status are updated.

### Blockers and escalation

If a contract, design, environment, provider, permission decision or predecessor is missing, record the blocker, owner, discovery date, impact and next decision. Escalate cross-team contract conflicts to the Technical Lead, product ambiguity to Product, provider/environment issues to Infrastructure and acceptance disputes to the named reviewer. Never hide a blocker by inventing a local substitute.

### What this unlocks

- ADM-W1D5 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): rbac ui primitives`

## Day 5 of 5 — Friday

### ADM-W1D5 — List/detail primitives

```task-metadata
id: ADM-W1D5
title: List/detail primitives
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: ASF-03, ASF-11, ADM-W1D4, ADM-INT-01, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: admin-ui-construction
stage_order: 1
legacy_slot: W1D5
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Implement reusable list, search, filter, pagination, detail panel and export placeholder.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Shared list/detail response shape. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Foundation for AF-03 to AF-24.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 1 — Admin UI Construction |
| Scheduled slot | Week 1, Day 5 — Fri 10 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-01-foundation-identity.md, W1D5 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| ASF-03 | Defines approved behavior, states or handoffs that this task must preserve. |
| ASF-11 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-W1D4 | Provides rbac ui primitives required before this task can be accepted. | ADM-W1D4 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Shared list/detail response shape. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| ADM-INT-01 | Owns later connection of this fixture-driven Admin UI to authoritative Mobile/Backend outcomes. | The integration card passes real-contract, permission, recovery and end-to-end checks. |

### Required inputs

- Agent Markdown for ASF-03, ASF-11 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for List/detail primitives.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement reusable list, search, filter, pagination, detail panel and export placeholder.
- Preserve the dependency and output rule from the approved legacy row.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-01.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Foundation for AF-03 to AF-24.

### Expected modules or files

- Relevant Next.js admin feature, protected route and state/query area.
- RBAC gate, table/detail/action primitives required by the scope.
- API/socket adapter named by the scope.
- Component, permission and integration tests.

These are implementation surfaces, not invented repository paths. The implementing team must map them to the actual codebase before editing.

### Security, permissions and audit

- Enforce authorization at the backend boundary and mirror it safely in the client.
- Do not expose secrets, exact addresses, full proof media, real phone numbers, KYC data or payment details outside approved roles and states.
- Record privileged, financial, identity or configuration mutations using the approved audit convention.
- Treat backend/provider persisted state as authoritative after retries, reconnects and app/page reloads.

### Provider dependencies

Google Maps Platform. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Foundation for AF-03 to AF-24.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete List/detail primitives outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Foundation for AF-03 to AF-24.
- [ ] Verify keyboard operation, permitted and forbidden roles, confirmation copy and audit evidence.

### Evidence to attach

- Passing automated-test output with build/commit identifier.
- Redacted screenshots, recordings or request/response examples proving the outcome and one recovery path.
- Dependency, environment and provider validation evidence where applicable.
- Reviewer acceptance, defect links and any residual-risk decision.

### Definition of done

- [ ] Scope and acceptance criteria are complete.
- [ ] Automated and manual tests pass with evidence.
- [ ] Security, permission, audit and provider rules are satisfied.
- [ ] The card is accepted for its stated stage; any later integration gate remains visibly owned and tracked.
- [ ] Documentation, traceability and evidence-based status are updated.

### Blockers and escalation

If a contract, design, environment, provider, permission decision or predecessor is missing, record the blocker, owner, discovery date, impact and next decision. Escalate cross-team contract conflicts to the Technical Lead, product ambiguity to Product, provider/environment issues to Infrastructure and acceptance disputes to the named reviewer. Never hide a blocker by inventing a local substitute.

### What this unlocks

- ADM-W2D1 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): list detail primitives`
