---
id: MOB-WEEK-03
title: Mobile Week 3 — Discovery, Matching and Active Task Start
type: build-task-week
team: Mobile
week: 3
days: 5
status: planned
version: 1.0
last_reviewed: 2026-07-17
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
---

# Mobile Week 3 — Discovery, Matching and Active Task Start

> Canonical Phase 3 source pack. Edit the relevant day inside this weekly file; generated weekly human and agent execution plans inherit from it.

## Day 1 of 5 — Monday

### MOB-W3D1 — Tasker discovery

```task-metadata
id: MOB-W3D1
title: Tasker discovery
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-07, MF-09, MOB-W2D5, BE-W3D1, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W3D1
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Implement Tasker task list, nearest-first sorting UI, location filter, limited public task preview.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /tasker/tasks, /tasker/tasks/{taskId}. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Exact address/media hidden before eligibility.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 3, Day 1 — Mon 20 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-03-discovery-matching-execution-start.md, W3D1 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-07 | Defines approved behavior, states or handoffs that this task must preserve. |
| MF-09 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| MOB-W2D5 | Provides broadcast and direct offer required before this task can be accepted. | MOB-W2D5 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /tasker/tasks, /tasker/tasks/{taskId}. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W3D1 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for MF-07, MF-09 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Tasker discovery.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement Tasker task list, nearest-first sorting UI, location filter, limited public task preview.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Exact address/media hidden before eligibility.
- Use `mode`; do not introduce `activeMode`.

### Expected modules or files

- Relevant Flutter feature, routing and state-management area.
- API/socket/provider adapter named by the scope.
- Loading, empty, error and recovery presentation.
- Unit, widget and integration tests.

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
- [ ] The output rule is satisfied: Exact address/media hidden before eligibility.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Tasker discovery outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Exact address/media hidden before eligibility.
- [ ] Verify the critical path on a supported Android device with a slow or interrupted network.

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

- MOB-W3D2 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): tasker discovery`

## Day 2 of 5 — Tuesday

### MOB-W3D2 — Tasker interest and arrival confirmation

```task-metadata
id: MOB-W3D2
title: Tasker interest and arrival confirmation
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-08, MF-09, MOB-W3D1, BE-W3D2, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W3D2
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Implement Tasker confirm-arrival-by-required-time, interest submit, direct offer accept/decline.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /interest, /accept, /decline. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Tasker must be in Nigeria to accept.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
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
| MOB-W3D1 | Provides tasker discovery required before this task can be accepted. | MOB-W3D1 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /interest, /accept, /decline. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W3D2 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for MF-08, MF-09 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Tasker interest and arrival confirmation.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement Tasker confirm-arrival-by-required-time, interest submit, direct offer accept/decline.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Tasker must be in Nigeria to accept.
- Do not make direct offers socket-based; durable state remains REST/FCM driven.
- Use `mode`; do not introduce `activeMode`.

### Expected modules or files

- Relevant Flutter feature, routing and state-management area.
- API/socket/provider adapter named by the scope.
- Loading, empty, error and recovery presentation.
- Unit, widget and integration tests.

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
- [ ] The output rule is satisfied: Tasker must be in Nigeria to accept.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Tasker interest and arrival confirmation outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Tasker must be in Nigeria to accept.
- [ ] Verify the critical path on a supported Android device with a slow or interrupted network.

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

- MOB-W3D3 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): tasker interest and arrival confirmation`

## Day 3 of 5 — Wednesday

### MOB-W3D3 — Task Owner candidate selection

```task-metadata
id: MOB-W3D3
title: Task Owner candidate selection
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-07, MF-11, MOB-W3D2, BE-W3D3, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W3D3
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Implement candidates list, ETA/profile summary, accept/reject Tasker, movement-stage rejection copy.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /candidates, /accept-tasker, /reject-tasker. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Task Owner decides based on ETA.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 3, Day 3 — Wed 22 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-03-discovery-matching-execution-start.md, W3D3 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-07 | Defines approved behavior, states or handoffs that this task must preserve. |
| MF-11 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| MOB-W3D2 | Provides tasker interest and arrival confirmation required before this task can be accepted. | MOB-W3D2 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /candidates, /accept-tasker, /reject-tasker. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W3D3 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for MF-07, MF-11 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Task Owner candidate selection.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement candidates list, ETA/profile summary, accept/reject Tasker, movement-stage rejection copy.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Task Owner decides based on ETA.
- Use `mode`; do not introduce `activeMode`.

### Expected modules or files

- Relevant Flutter feature, routing and state-management area.
- API/socket/provider adapter named by the scope.
- Loading, empty, error and recovery presentation.
- Unit, widget and integration tests.

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
- [ ] The output rule is satisfied: Task Owner decides based on ETA.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Task Owner candidate selection outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Task Owner decides based on ETA.
- [ ] Verify the critical path on a supported Android device with a slow or interrupted network.

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

- MOB-W3D4 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): task owner candidate selection`

## Day 4 of 5 — Thursday

### MOB-W3D4 — Active task status actions

```task-metadata
id: MOB-W3D4
title: Active task status actions
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-10, MOB-W3D3, BE-W3D4, CONTRACT-001, DATA-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W3D4
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Implement active task screen and Tasker buttons: Start Journey, I have arrived, Begin Task.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /start-journey, /arrived, /begin. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Persist every state transition through REST.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 3, Day 4 — Thu 23 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-03-discovery-matching-execution-start.md, W3D4 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-10 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| MOB-W3D3 | Provides task owner candidate selection required before this task can be accepted. | MOB-W3D3 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /start-journey, /arrived, /begin. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W3D4 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for MF-10 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Active task status actions.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement active task screen and Tasker buttons: Start Journey, I have arrived, Begin Task.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Persist every state transition through REST.
- Use `mode`; do not introduce `activeMode`.

### Expected modules or files

- Relevant Flutter feature, routing and state-management area.
- API/socket/provider adapter named by the scope.
- Loading, empty, error and recovery presentation.
- Unit, widget and integration tests.

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
- [ ] The output rule is satisfied: Persist every state transition through REST.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Active task status actions outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Persist every state transition through REST.
- [ ] Verify the critical path on a supported Android device with a slow or interrupted network.

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

- MOB-W3D5 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): active task status actions`

## Day 5 of 5 — Friday

### MOB-W3D5 — Chat, tracking, masked call entry

```task-metadata
id: MOB-W3D5
title: Chat, tracking, masked call entry
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-10, MF-16, SF-10, MOB-W3D4, BE-W3D5, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W3D5
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Implement task chat, voice note metadata flow, live tracking UI, masked call button and proxy number display.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /task socket, /tracking socket, /call-sessions, /voice-notes. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Socket reconnect must refresh REST state.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 3, Day 5 — Fri 24 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-03-discovery-matching-execution-start.md, W3D5 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-10 | Defines approved behavior, states or handoffs that this task must preserve. |
| MF-16 | Defines approved behavior, states or handoffs that this task must preserve. |
| SF-10 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| MOB-W3D4 | Provides active task status actions required before this task can be accepted. | MOB-W3D4 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /task socket, /tracking socket, /call-sessions, /voice-notes. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W3D5 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for MF-10, MF-16, SF-10 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Chat, tracking, masked call entry.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement task chat, voice note metadata flow, live tracking UI, masked call button and proxy number display.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Socket reconnect must refresh REST state.

### Expected modules or files

- Relevant Flutter feature, routing and state-management area.
- API/socket/provider adapter named by the scope.
- Loading, empty, error and recovery presentation.
- Unit, widget and integration tests.

These are implementation surfaces, not invented repository paths. The implementing team must map them to the actual codebase before editing.

### Security, permissions and audit

- Enforce authorization at the backend boundary and mirror it safely in the client.
- Do not expose secrets, exact addresses, full proof media, real phone numbers, KYC data or payment details outside approved roles and states.
- Record privileged, financial, identity or configuration mutations using the approved audit convention.
- Treat backend/provider persisted state as authoritative after retries, reconnects and app/page reloads.

### Provider dependencies

Google Maps Platform, Approved object storage. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Socket reconnect must refresh REST state.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Chat, tracking, masked call entry outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Socket reconnect must refresh REST state.
- [ ] Verify the critical path on a supported Android device with a slow or interrupted network.

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

- MOB-W4D1 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): chat tracking masked call entry`
