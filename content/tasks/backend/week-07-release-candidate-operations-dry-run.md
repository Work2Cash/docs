---
id: BE-WEEK-07
title: Backend Week 7 — Release Candidate Preparation and Operational Dry Runs
type: build-task-week
team: Backend
week: 7
days: 5
status: planned
version: 1.0
last_reviewed: 2026-07-17
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
---

# Backend Week 7 — Release Candidate Preparation and Operational Dry Runs

> Canonical Phase 3 source pack. Edit the relevant day inside this weekly file; generated weekly human and agent execution plans inherit from it.

## Day 1 of 5 — Monday

### BE-W7D1 — Release candidate backend preparation

```task-metadata
id: BE-W7D1
title: Release candidate backend preparation
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, BE-W6D5, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W7D1
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Freeze API contracts, generate OpenAPI, migration notes and environment checklist.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Frontend RC prep. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: chore(release): prepare backend release candidate

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
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
| BE-W6D5 | Provides hardening review required before this task can be accepted. | BE-W6D5 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Frontend RC prep. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Release candidate backend preparation.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Freeze API contracts, generate OpenAPI, migration notes and environment checklist.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: chore(release): prepare backend release candidate

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

Sentry and approved monitoring services where applicable, Shorebird or the approved release-distribution path. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: chore(release): prepare backend release candidate
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Release candidate backend preparation outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: chore(release): prepare backend release candidate
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

- BE-W7D2 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`chore(release): prepare backend release candidate`

## Day 2 of 5 — Tuesday

### BE-W7D2 — Backup and restore dry run

```task-metadata
id: BE-W7D2
title: Backup and restore dry run
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, BE-W7D1, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W7D2
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Run Postgres backup, object storage upload, restore to staging/temp database and evidence capture.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Backup storage configured. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: chore(ops): prove backup restore flow

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
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
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W7D1 | Provides release candidate backend preparation required before this task can be accepted. | BE-W7D1 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Backup storage configured. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Backup and restore dry run.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Run Postgres backup, object storage upload, restore to staging/temp database and evidence capture.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: chore(ops): prove backup restore flow

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
- [ ] The output rule is satisfied: chore(ops): prove backup restore flow
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Backup and restore dry run outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: chore(ops): prove backup restore flow
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

- BE-W7D3 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`chore(ops): prove backup restore flow`

## Day 3 of 5 — Wednesday

### BE-W7D3 — Payout and finance dry run

```task-metadata
id: BE-W7D3
title: Payout and finance dry run
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, BE-W7D2, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W7D3
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Run payout batch, ledger consistency, reconciliation, failed/partial transfer and disputed Tasker exclusion tests.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Finance provider staging. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: test(finance): validate payout batch dry run

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
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
| BE-W7D2 | Provides backup and restore dry run required before this task can be accepted. | BE-W7D2 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Finance provider staging. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Payout and finance dry run.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Run payout batch, ledger consistency, reconciliation, failed/partial transfer and disputed Tasker exclusion tests.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: test(finance): validate payout batch dry run
- Do not turn disputes into live chat.
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

Paystack and Moniepoint. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: test(finance): validate payout batch dry run
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Payout and finance dry run outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: test(finance): validate payout batch dry run
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

- BE-W7D4 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`test(finance): validate payout batch dry run`

## Day 4 of 5 — Thursday

### BE-W7D4 — Provider validation report

```task-metadata
id: BE-W7D4
title: Provider validation report
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, BE-W7D3, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W7D4
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Finalize Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, storage and Shorebird evidence.

### Why it matters

This work matters because the approved plan names this dependency or handoff: All provider staging endpoints. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: docs(providers): publish validation report

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
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
| BE-W7D3 | Provides payout and finance dry run required before this task can be accepted. | BE-W7D3 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | All provider staging endpoints. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Provider validation report.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Finalize Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, storage and Shorebird evidence.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: docs(providers): publish validation report

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

Google Maps Platform, Firebase Cloud Messaging, Approved object storage, Sentry and approved monitoring services where applicable, Shorebird or the approved release-distribution path. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: docs(providers): publish validation report
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Provider validation report outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: docs(providers): publish validation report
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

- BE-W7D5 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`docs(providers): publish validation report`

## Day 5 of 5 — Friday

### BE-W7D5 — Backend release candidate

```task-metadata
id: BE-W7D5
title: Backend release candidate
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, BE-W7D4, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W7D5
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Tag backend release candidate and hand over to formal QA.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Stable staging. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: chore(release): tag backend release candidate

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
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
| BE-W7D4 | Provides provider validation report required before this task can be accepted. | BE-W7D4 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Stable staging. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Backend release candidate.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Tag backend release candidate and hand over to formal QA.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: chore(release): tag backend release candidate

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

Sentry and approved monitoring services where applicable, Shorebird or the approved release-distribution path. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: chore(release): tag backend release candidate
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Backend release candidate outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: chore(release): tag backend release candidate
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

- BE-W8D1 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`chore(release): tag backend release candidate`
