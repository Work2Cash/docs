---
id: MOB-WEEK-07
title: Mobile Week 7 — Release Candidate Preparation and Operational Dry Runs
type: build-task-week
team: Mobile
week: 7
days: 5
status: planned
version: 1.0
last_reviewed: 2026-07-17
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
---

# Mobile Week 7 — Release Candidate Preparation and Operational Dry Runs

> Canonical Phase 3 source pack. Edit the relevant day inside this weekly file; generated weekly human and agent execution plans inherit from it.

## Day 1 of 5 — Monday

### MOB-W7D1 — Release candidate preparation

```task-metadata
id: MOB-W7D1
title: Release candidate preparation
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, MOB-W6D5, BE-W7D1, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W7D1
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Prepare Android release candidate configuration, app icon/name/package, permissions and environment mapping.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Production-like staging config. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Package name ng.work2cash.app.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 7, Day 1 — Mon 17 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-07-release-candidate-operations-dry-run.md, W7D1 |

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
| MOB-W6D5 | Provides hardening review required before this task can be accepted. | MOB-W6D5 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Production-like staging config. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W7D1 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Release candidate preparation.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Prepare Android release candidate configuration, app icon/name/package, permissions and environment mapping.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Package name ng.work2cash.app.

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

Google Maps Platform, Sentry and approved monitoring services where applicable, Shorebird or the approved release-distribution path. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Package name ng.work2cash.app.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Release candidate preparation outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Package name ng.work2cash.app.
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

- MOB-W7D2 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): release candidate preparation`

## Day 2 of 5 — Tuesday

### MOB-W7D2 — Device matrix QA

```task-metadata
id: MOB-W7D2
title: Device matrix QA
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, MOB-W7D1, BE-W7D2, CONTRACT-001, DATA-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W7D2
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Test priority Android devices, small screens, low memory, poor network and background app-kill recovery.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Staging API/socket. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Create device issue list by flow.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 7, Day 2 — Tue 18 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-07-release-candidate-operations-dry-run.md, W7D2 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| FLOW-LIB-001 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| MOB-W7D1 | Provides release candidate preparation required before this task can be accepted. | MOB-W7D1 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Staging API/socket. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W7D2 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Device matrix QA.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Test priority Android devices, small screens, low memory, poor network and background app-kill recovery.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Create device issue list by flow.

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
- [ ] The output rule is satisfied: Create device issue list by flow.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Device matrix QA outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Create device issue list by flow.
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

- MOB-W7D3 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): device matrix qa`

## Day 3 of 5 — Wednesday

### MOB-W7D3 — Operations dry run support

```task-metadata
id: MOB-W7D3
title: Operations dry run support
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, MOB-W7D2, BE-W7D3, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W7D3
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Validate mobile behavior for support live chat, emergency support, reports, payout status and admin-driven outcomes.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Admin/backend staging flows. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Confirm user-facing status copy.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 7, Day 3 — Wed 19 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-07-release-candidate-operations-dry-run.md, W7D3 |

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
| MOB-W7D2 | Provides device matrix qa required before this task can be accepted. | MOB-W7D2 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Admin/backend staging flows. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W7D3 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Operations dry run support.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Validate mobile behavior for support live chat, emergency support, reports, payout status and admin-driven outcomes.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Confirm user-facing status copy.

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

Paystack and Moniepoint. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Confirm user-facing status copy.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Operations dry run support outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Confirm user-facing status copy.
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

- MOB-W7D4 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): operations dry run support`

## Day 4 of 5 — Thursday

### MOB-W7D4 — Provider validation support

```task-metadata
id: MOB-W7D4
title: Provider validation support
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, MOB-W7D3, BE-W7D4, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W7D4
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Run payment, KYC, maps, FCM, media and Sentry validation from mobile side.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Provider staging endpoints. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Attach evidence to provider validation checklist.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 7, Day 4 — Thu 20 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-07-release-candidate-operations-dry-run.md, W7D4 |

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
| MOB-W7D3 | Provides operations dry run support required before this task can be accepted. | MOB-W7D3 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Provider staging endpoints. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W7D4 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Provider validation support.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Run payment, KYC, maps, FCM, media and Sentry validation from mobile side.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Attach evidence to provider validation checklist.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.

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

Smile ID, Paystack and Moniepoint, Google Maps Platform, Firebase Cloud Messaging, Approved object storage, Sentry and approved monitoring services where applicable. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Attach evidence to provider validation checklist.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Provider validation support outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Attach evidence to provider validation checklist.
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

- MOB-W7D5 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): provider validation support`

## Day 5 of 5 — Friday

### MOB-W7D5 — Mobile release candidate

```task-metadata
id: MOB-W7D5
title: Mobile release candidate
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, MOB-W7D4, BE-W7D5, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W7D5
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Generate release candidate build and handover notes for QA testing.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Stable staging backend. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Only approved fixes after RC.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 7, Day 5 — Fri 21 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-07-release-candidate-operations-dry-run.md, W7D5 |

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
| MOB-W7D4 | Provides provider validation support required before this task can be accepted. | MOB-W7D4 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Stable staging backend. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W7D5 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Mobile release candidate.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Generate release candidate build and handover notes for QA testing.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Only approved fixes after RC.

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

Sentry and approved monitoring services where applicable, Shorebird or the approved release-distribution path. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Only approved fixes after RC.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Mobile release candidate outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Only approved fixes after RC.
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

- MOB-W8D1 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): mobile release candidate`
