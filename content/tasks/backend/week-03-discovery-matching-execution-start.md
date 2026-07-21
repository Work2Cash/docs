---
id: BE-WEEK-03
title: Backend Week 3 — Discovery, Matching and Active Task Start
type: build-task-week
team: Backend
week: 3
days: 5
status: planned
version: 1.0
last_reviewed: 2026-07-17
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
---

# Backend Week 3 — Discovery, Matching and Active Task Start

> Canonical Phase 3 source pack. Edit the relevant day inside this weekly file; generated weekly human and agent execution plans inherit from it.

## Day 1 of 5 — Monday

### BE-W3D1 — Discovery APIs

```task-metadata
id: BE-W3D1
title: Discovery APIs
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-07, MF-09, AF-05, BE-W2D5, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W3D1
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Implement Tasker task list, location filter, nearest-first sorting, limited public preview.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Unblocks mobile Tasker discovery. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: feat(discovery): implement task browsing

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 3, Day 1 — Mon 20 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-03-discovery-matching-execution-start.md, W3D1 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-07 | Defines approved behavior, states or handoffs that this task must preserve. |
| MF-09 | Defines approved behavior, states or handoffs that this task must preserve. |
| AF-05 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W2D5 | Provides broadcast/direct offer apis required before this task can be accepted. | BE-W2D5 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Unblocks mobile Tasker discovery. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for MF-07, MF-09, AF-05 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Discovery APIs.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement Tasker task list, location filter, nearest-first sorting, limited public preview.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(discovery): implement task browsing
- Use `mode`; do not introduce `activeMode`.

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

Google Maps Platform. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: feat(discovery): implement task browsing
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Discovery APIs outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: feat(discovery): implement task browsing
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

- BE-W3D2 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(discovery): implement task browsing`

## Day 2 of 5 — Tuesday

### BE-W3D2 — Interest/accept APIs

```task-metadata
id: BE-W3D2
title: Interest/accept APIs
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-08, MF-09, BE-W3D1, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W3D2
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Implement Tasker interest, arrival confirmation, direct offer accept/decline, eligibility guards.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Unblocks Tasker commitment. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: feat(matching): implement tasker interest and acceptance

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 3, Day 2 — Tue 21 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-03-discovery-matching-execution-start.md, W3D2 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-08 | Defines approved behavior, states or handoffs that this task must preserve. |
| MF-09 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W3D1 | Provides discovery apis required before this task can be accepted. | BE-W3D1 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Unblocks Tasker commitment. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for MF-08, MF-09 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Interest/accept APIs.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement Tasker interest, arrival confirmation, direct offer accept/decline, eligibility guards.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(matching): implement tasker interest and acceptance
- Do not make direct offers socket-based; durable state remains REST/FCM driven.
- Use `mode`; do not introduce `activeMode`.

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

Firebase Cloud Messaging. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: feat(matching): implement tasker interest and acceptance
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Interest/accept APIs outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: feat(matching): implement tasker interest and acceptance
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

- BE-W3D3 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(matching): implement tasker interest and acceptance`

## Day 3 of 5 — Wednesday

### BE-W3D3 — Candidate/selection APIs

```task-metadata
id: BE-W3D3
title: Candidate/selection APIs
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-07, MF-11, AF-05, BE-W3D2, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W3D3
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Implement candidate list with ETA snapshots, Task Owner accept/reject, rejection logging.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Unblocks Task Owner selection. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: feat(matching): implement candidate selection

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 3, Day 3 — Wed 22 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-03-discovery-matching-execution-start.md, W3D3 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-07 | Defines approved behavior, states or handoffs that this task must preserve. |
| MF-11 | Defines approved behavior, states or handoffs that this task must preserve. |
| AF-05 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W3D2 | Provides interest/accept apis required before this task can be accepted. | BE-W3D2 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Unblocks Task Owner selection. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for MF-07, MF-11, AF-05 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Candidate/selection APIs.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement candidate list with ETA snapshots, Task Owner accept/reject, rejection logging.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(matching): implement candidate selection
- Use `mode`; do not introduce `activeMode`.

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

Google Maps Platform. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: feat(matching): implement candidate selection
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Candidate/selection APIs outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: feat(matching): implement candidate selection
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

- BE-W3D4 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(matching): implement candidate selection`

## Day 4 of 5 — Thursday

### BE-W3D4 — Task execution state APIs

```task-metadata
id: BE-W3D4
title: Task execution state APIs
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-10, AF-05, BE-W3D3, CONTRACT-001, DATA-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W3D4
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Implement start journey, arrived, begin, state guards and TaskStatusEvent.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Unblocks active task screen. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: feat(tasks): implement execution state transitions

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 3, Day 4 — Thu 23 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-03-discovery-matching-execution-start.md, W3D4 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-10 | Defines approved behavior, states or handoffs that this task must preserve. |
| AF-05 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W3D3 | Provides candidate/selection apis required before this task can be accepted. | BE-W3D3 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Unblocks active task screen. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for MF-10, AF-05 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Task execution state APIs.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement start journey, arrived, begin, state guards and TaskStatusEvent.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(tasks): implement execution state transitions

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
- [ ] The output rule is satisfied: feat(tasks): implement execution state transitions
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Task execution state APIs outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: feat(tasks): implement execution state transitions
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

- BE-W3D5 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(tasks): implement execution state transitions`

## Day 5 of 5 — Friday

### BE-W3D5 — Socket/chat/tracking

```task-metadata
id: BE-W3D5
title: Socket/chat/tracking
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-10, MF-16, AF-05, AF-07, BE-W3D4, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W3D5
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Implement Socket.IO auth, task rooms, support rooms shell, tracking events, ETA guard, chat persistence queue.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Unblocks active task communication. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: feat(socket): implement task chat and tracking

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 3, Day 5 — Fri 24 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-03-discovery-matching-execution-start.md, W3D5 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-10 | Defines approved behavior, states or handoffs that this task must preserve. |
| MF-16 | Defines approved behavior, states or handoffs that this task must preserve. |
| AF-05 | Defines approved behavior, states or handoffs that this task must preserve. |
| AF-07 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W3D4 | Provides task execution state apis required before this task can be accepted. | BE-W3D4 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Unblocks active task communication. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for MF-10, MF-16, AF-05, AF-07 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Socket/chat/tracking.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement Socket.IO auth, task rooms, support rooms shell, tracking events, ETA guard, chat persistence queue.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(socket): implement task chat and tracking

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

Google Maps Platform. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: feat(socket): implement task chat and tracking
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Socket/chat/tracking outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: feat(socket): implement task chat and tracking
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

- BE-W4D1 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(socket): implement task chat and tracking`
