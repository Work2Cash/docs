---
id: BE-WEEK-08
title: Backend Week 8 — Stabilization, Go-Live Rehearsal and Build Freeze
type: build-task-week
team: Backend
week: 8
days: 5
status: planned
version: 1.0
last_reviewed: 2026-07-17
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
---

# Backend Week 8 — Stabilization, Go-Live Rehearsal and Build Freeze

> Canonical Phase 3 source pack. Edit the relevant day inside this weekly file; generated weekly human and agent execution plans inherit from it.

## Day 1 of 5 — Monday

### BE-W8D1 — Stabilization sprint

```task-metadata
id: BE-W8D1
title: Stabilization sprint
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, BE-W7D5, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W8D1
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Apply approved release-candidate fixes only.

### Why it matters

This work matters because the approved plan names this dependency or handoff: RC defect list. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: fix(release): resolve approved rc defects

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 8, Day 1 — Mon 24 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-08-stabilization-freeze.md, W8D1 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| FLOW-LIB-001 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W7D5 | Provides backend release candidate required before this task can be accepted. | BE-W7D5 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | RC defect list. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Stabilization sprint.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Apply approved release-candidate fixes only.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: fix(release): resolve approved rc defects

### Expected modules or files

- Relevant NestJS application/domain module and ports.
- Prisma persistence or migration only where the approved data model requires it.
- REST, socket, queue or provider adapter named by the scope.
- Unit, integration and contract tests.

These are implementation surfaces, not invented repository paths. The implementing team must map them to the actual codebase before editing.

### Security, permissions and audit

- Enforce authorization at the backend boundary and mirror it safely in the client.
- Do not expose secrets, exact addresses, full proof media, real phone numbers, KYC data or payment details outside approved roles and states.
- Record privileged, financial, identity or configuration mutations using the approved audit convention.
- Treat backend/provider persisted state as authoritative after retries, reconnects and app/page reloads.

### Provider dependencies

Sentry and approved monitoring services where applicable. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: fix(release): resolve approved rc defects
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Stabilization sprint outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: fix(release): resolve approved rc defects
- [ ] Verify logs, metrics and persisted state contain no secret or unnecessary sensitive data.

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

- BE-W8D2 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`fix(release): resolve approved rc defects`

## Day 2 of 5 — Tuesday

### BE-W8D2 — Final backend defect pass

```task-metadata
id: BE-W8D2
title: Final backend defect pass
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, BE-W8D1, CONTRACT-001, DATA-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W8D2
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Re-test fixed defects, run migrations, queues, sockets, webhooks and financial consistency checks.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Stable staging. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: test(release): verify backend critical paths

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 8, Day 2 — Tue 25 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-08-stabilization-freeze.md, W8D2 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| FLOW-LIB-001 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W8D1 | Provides stabilization sprint required before this task can be accepted. | BE-W8D1 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Stable staging. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Final backend defect pass.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Re-test fixed defects, run migrations, queues, sockets, webhooks and financial consistency checks.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: test(release): verify backend critical paths

### Expected modules or files

- Relevant NestJS application/domain module and ports.
- Prisma persistence or migration only where the approved data model requires it.
- REST, socket, queue or provider adapter named by the scope.
- Unit, integration and contract tests.

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
- [ ] The output rule is satisfied: test(release): verify backend critical paths
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Final backend defect pass outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: test(release): verify backend critical paths
- [ ] Verify logs, metrics and persisted state contain no secret or unnecessary sensitive data.

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

- BE-W8D3 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`test(release): verify backend critical paths`

## Day 3 of 5 — Wednesday

### BE-W8D3 — Go-live rehearsal

```task-metadata
id: BE-W8D3
title: Go-live rehearsal
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, BE-W8D2, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W8D3
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Run production-style deployment rehearsal, rollback rehearsal, backup restore proof and provider smoke tests.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Production-like staging. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: chore(release): run go live rehearsal

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 8, Day 3 — Wed 26 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-08-stabilization-freeze.md, W8D3 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| FLOW-LIB-001 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W8D2 | Provides final backend defect pass required before this task can be accepted. | BE-W8D2 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Production-like staging. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Go-live rehearsal.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Run production-style deployment rehearsal, rollback rehearsal, backup restore proof and provider smoke tests.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: chore(release): run go live rehearsal

### Expected modules or files

- Relevant NestJS application/domain module and ports.
- Prisma persistence or migration only where the approved data model requires it.
- REST, socket, queue or provider adapter named by the scope.
- Unit, integration and contract tests.

These are implementation surfaces, not invented repository paths. The implementing team must map them to the actual codebase before editing.

### Security, permissions and audit

- Enforce authorization at the backend boundary and mirror it safely in the client.
- Do not expose secrets, exact addresses, full proof media, real phone numbers, KYC data or payment details outside approved roles and states.
- Record privileged, financial, identity or configuration mutations using the approved audit convention.
- Treat backend/provider persisted state as authoritative after retries, reconnects and app/page reloads.

### Provider dependencies

Approved object storage, Shorebird or the approved release-distribution path. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: chore(release): run go live rehearsal
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Go-live rehearsal outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: chore(release): run go live rehearsal
- [ ] Verify logs, metrics and persisted state contain no secret or unnecessary sensitive data.

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

- BE-W8D4 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`chore(release): run go live rehearsal`

## Day 4 of 5 — Thursday

### BE-W8D4 — Backend handover

```task-metadata
id: BE-W8D4
title: Backend handover
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, BE-W8D3, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W8D4
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Finalize runbooks, env checklist, provider escalation notes, monitoring alerts and support handover.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Final docs. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: docs(ops): finalize backend handover

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 8, Day 4 — Thu 27 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-08-stabilization-freeze.md, W8D4 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| FLOW-LIB-001 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W8D3 | Provides go-live rehearsal required before this task can be accepted. | BE-W8D3 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Final docs. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Backend handover.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Finalize runbooks, env checklist, provider escalation notes, monitoring alerts and support handover.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: docs(ops): finalize backend handover

### Expected modules or files

- Relevant NestJS application/domain module and ports.
- Prisma persistence or migration only where the approved data model requires it.
- REST, socket, queue or provider adapter named by the scope.
- Unit, integration and contract tests.

These are implementation surfaces, not invented repository paths. The implementing team must map them to the actual codebase before editing.

### Security, permissions and audit

- Enforce authorization at the backend boundary and mirror it safely in the client.
- Do not expose secrets, exact addresses, full proof media, real phone numbers, KYC data or payment details outside approved roles and states.
- Record privileged, financial, identity or configuration mutations using the approved audit convention.
- Treat backend/provider persisted state as authoritative after retries, reconnects and app/page reloads.

### Provider dependencies

Sentry and approved monitoring services where applicable. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: docs(ops): finalize backend handover
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Backend handover outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: docs(ops): finalize backend handover
- [ ] Verify logs, metrics and persisted state contain no secret or unnecessary sensitive data.

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

- BE-W8D5 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`docs(ops): finalize backend handover`

## Day 5 of 5 — Friday

### BE-W8D5 — Backend build freeze

```task-metadata
id: BE-W8D5
title: Backend build freeze
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, BE-W8D4, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W8D5
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Freeze backend build for formal testing weeks.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Stable staging. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: chore(release): freeze backend build

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 8, Day 5 — Fri 28 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-08-stabilization-freeze.md, W8D5 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| FLOW-LIB-001 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W8D4 | Provides backend handover required before this task can be accepted. | BE-W8D4 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Stable staging. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Backend build freeze.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Freeze backend build for formal testing weeks.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: chore(release): freeze backend build

### Expected modules or files

- Relevant NestJS application/domain module and ports.
- Prisma persistence or migration only where the approved data model requires it.
- REST, socket, queue or provider adapter named by the scope.
- Unit, integration and contract tests.

These are implementation surfaces, not invented repository paths. The implementing team must map them to the actual codebase before editing.

### Security, permissions and audit

- Enforce authorization at the backend boundary and mirror it safely in the client.
- Do not expose secrets, exact addresses, full proof media, real phone numbers, KYC data or payment details outside approved roles and states.
- Record privileged, financial, identity or configuration mutations using the approved audit convention.
- Treat backend/provider persisted state as authoritative after retries, reconnects and app/page reloads.

### Provider dependencies

Shorebird or the approved release-distribution path. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: chore(release): freeze backend build
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Backend build freeze outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: chore(release): freeze backend build
- [ ] Verify logs, metrics and persisted state contain no secret or unnecessary sensitive data.

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

- The next accepted task in this team's sequence can proceed with this outcome as evidence.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`chore(release): freeze backend build`
