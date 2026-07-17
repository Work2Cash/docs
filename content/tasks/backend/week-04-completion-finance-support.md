---
id: BE-WEEK-04
title: Backend Week 4 — Completion, Exceptions, Trust and Finance
type: build-task-week
team: Backend
week: 4
days: 5
status: planned
version: 1.0
last_reviewed: 2026-07-17
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
---

# Backend Week 4 — Completion, Exceptions, Trust and Finance

> Canonical Phase 3 source pack. Edit the relevant day inside this weekly file; generated weekly human and agent execution plans inherit from it.

## Day 1 of 5 — Monday

### BE-W4D1 — Completion/settlement

```task-metadata
id: BE-W4D1
title: Completion/settlement
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-14, BE-W3D5, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W4D1
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Implement completion proof, request completion, confirm completion, commission snapshot, escrow release/hold.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Unblocks settlement. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: feat(settlement): implement completion and escrow release

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 4, Day 1 — Mon 27 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-04-completion-finance-support.md, W4D1 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-14 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W3D5 | Provides socket/chat/tracking required before this task can be accepted. | BE-W3D5 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Unblocks settlement. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for MF-14 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Completion/settlement.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement completion proof, request completion, confirm completion, commission snapshot, escrow release/hold.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(settlement): implement completion and escrow release
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.

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

Paystack and Moniepoint, Sentry and approved monitoring services where applicable. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: feat(settlement): implement completion and escrow release
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Completion/settlement outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: feat(settlement): implement completion and escrow release
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

- BE-W4D2 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(settlement): implement completion and escrow release`

## Day 2 of 5 — Tuesday

### BE-W4D2 — Cancellation/reports

```task-metadata
id: BE-W4D2
title: Cancellation/reports
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-12, SF-08, AF-06, AF-14, BE-W4D1, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W4D2
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Implement cancellation, no-show, reports, warning/strike, settlement hold use cases.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Unblocks exception flows/admin reports. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: feat(risk): implement cancellation reports and penalties

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 4, Day 2 — Tue 28 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-04-completion-finance-support.md, W4D2 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-12 | Defines approved behavior, states or handoffs that this task must preserve. |
| SF-08 | Defines approved behavior, states or handoffs that this task must preserve. |
| AF-06 | Defines approved behavior, states or handoffs that this task must preserve. |
| AF-14 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W4D1 | Provides completion/settlement required before this task can be accepted. | BE-W4D1 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Unblocks exception flows/admin reports. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for MF-12, SF-08, AF-06, AF-14 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Cancellation/reports.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement cancellation, no-show, reports, warning/strike, settlement hold use cases.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(risk): implement cancellation reports and penalties

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

Smile ID. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: feat(risk): implement cancellation reports and penalties
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Cancellation/reports outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: feat(risk): implement cancellation reports and penalties
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

- BE-W4D3 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(risk): implement cancellation reports and penalties`

## Day 3 of 5 — Wednesday

### BE-W4D3 — Ratings/favorites/rebook

```task-metadata
id: BE-W4D3
title: Ratings/favorites/rebook
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-15, MF-22, MF-24, AF-22, BE-W4D2, CONTRACT-001, DATA-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W4D3
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Implement ratings, review moderation foundation, favorite add/remove, rebook.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Unblocks retention flows. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: feat(retention): implement ratings favorites and rebook

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 4, Day 3 — Wed 29 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-04-completion-finance-support.md, W4D3 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-15 | Defines approved behavior, states or handoffs that this task must preserve. |
| MF-22 | Defines approved behavior, states or handoffs that this task must preserve. |
| MF-24 | Defines approved behavior, states or handoffs that this task must preserve. |
| AF-22 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W4D2 | Provides cancellation/reports required before this task can be accepted. | BE-W4D2 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Unblocks retention flows. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for MF-15, MF-22, MF-24, AF-22 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Ratings/favorites/rebook.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement ratings, review moderation foundation, favorite add/remove, rebook.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(retention): implement ratings favorites and rebook
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

No direct external provider is named by this task. If implementation discovers one, stop and add the governed provider dependency before integration.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: feat(retention): implement ratings favorites and rebook
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Ratings/favorites/rebook outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: feat(retention): implement ratings favorites and rebook
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

- BE-W4D4 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(retention): implement ratings favorites and rebook`

## Day 4 of 5 — Thursday

### BE-W4D4 — Wallet/withdrawal

```task-metadata
id: BE-W4D4
title: Wallet/withdrawal
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-13, SF-07, SF-12, AF-08, AF-09, AF-10, AF-24, BE-W4D3, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W4D4
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Implement wallets, ledger, payout account, PIN-confirmed withdrawal, payout batch models.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Unblocks finance flows. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: feat(finance): implement wallet and withdrawal

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 4, Day 4 — Thu 30 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-04-completion-finance-support.md, W4D4 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-13 | Defines approved behavior, states or handoffs that this task must preserve. |
| SF-07 | Defines approved behavior, states or handoffs that this task must preserve. |
| SF-12 | Defines approved behavior, states or handoffs that this task must preserve. |
| AF-08 | Defines approved behavior, states or handoffs that this task must preserve. |
| AF-09 | Defines approved behavior, states or handoffs that this task must preserve. |
| AF-10 | Defines approved behavior, states or handoffs that this task must preserve. |
| AF-24 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W4D3 | Provides ratings/favorites/rebook required before this task can be accepted. | BE-W4D3 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Unblocks finance flows. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for MF-13, SF-07, SF-12, AF-08, AF-09, AF-10, AF-24 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Wallet/withdrawal.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement wallets, ledger, payout account, PIN-confirmed withdrawal, payout batch models.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(finance): implement wallet and withdrawal
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
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
- [ ] The output rule is satisfied: feat(finance): implement wallet and withdrawal
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Wallet/withdrawal outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: feat(finance): implement wallet and withdrawal
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

- BE-W4D5 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(finance): implement wallet and withdrawal`

## Day 5 of 5 — Friday

### BE-W4D5 — Support/emergency

```task-metadata
id: BE-W4D5
title: Support/emergency
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-16, MF-23, AF-07, BE-W4D4, CONTRACT-001, DATA-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W4D5
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Implement support sessions, emergency support, support socket completion, case linking.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Unblocks support flows/admin support. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: feat(support): implement support and emergency

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 4, Day 5 — Fri 31 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-04-completion-finance-support.md, W4D5 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-16 | Defines approved behavior, states or handoffs that this task must preserve. |
| MF-23 | Defines approved behavior, states or handoffs that this task must preserve. |
| AF-07 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W4D4 | Provides wallet/withdrawal required before this task can be accepted. | BE-W4D4 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Unblocks support flows/admin support. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for MF-16, MF-23, AF-07 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Support/emergency.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement support sessions, emergency support, support socket completion, case linking.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(support): implement support and emergency

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
- [ ] The output rule is satisfied: feat(support): implement support and emergency
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Support/emergency outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: feat(support): implement support and emergency
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

- BE-W5D1 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(support): implement support and emergency`
