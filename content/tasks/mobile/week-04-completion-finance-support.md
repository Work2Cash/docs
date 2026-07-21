---
id: MOB-WEEK-04
title: Mobile Week 4 — Completion, Exceptions, Trust and Finance
type: build-task-week
team: Mobile
week: 4
days: 5
status: planned
version: 1.0
last_reviewed: 2026-07-17
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
---

# Mobile Week 4 — Completion, Exceptions, Trust and Finance

> Canonical Phase 3 source pack. Edit the relevant day inside this weekly file; generated weekly human and agent execution plans inherit from it.

## Day 1 of 5 — Monday

### MOB-W4D1 — Completion and settlement

```task-metadata
id: MOB-W4D1
title: Completion and settlement
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-14, SF-05, MOB-W3D5, BE-W4D1, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W4D1
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Implement completion proof upload, request completion, Task Owner approval, settlement pending/held states.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /completion-proof, /request-completion, /confirm-completion, wallets summary. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Dispute can hold affected payout only.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 4, Day 1 — Mon 27 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-04-completion-finance-support.md, W4D1 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-14 | Defines approved behavior, states or handoffs that this task must preserve. |
| SF-05 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| MOB-W3D5 | Provides chat, tracking, masked call entry required before this task can be accepted. | MOB-W3D5 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /completion-proof, /request-completion, /confirm-completion, wallets summary. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W4D1 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for MF-14, SF-05 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Completion and settlement.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement completion proof upload, request completion, Task Owner approval, settlement pending/held states.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Dispute can hold affected payout only.
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

Paystack and Moniepoint, Approved object storage. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Dispute can hold affected payout only.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Completion and settlement outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Dispute can hold affected payout only.
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

- MOB-W4D2 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): completion and settlement`

## Day 2 of 5 — Tuesday

### MOB-W4D2 — Cancellation, no-show, report

```task-metadata
id: MOB-W4D2
title: Cancellation, no-show, report
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-12, SF-08, MOB-W4D1, BE-W4D2, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W4D2
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Implement cancellation/no-show flows, warning/strike messaging, report/dispute creation and status.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /cancel, /reports, /reports/{reportId}. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Penalty rules shown before confirmation.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 4, Day 2 — Tue 28 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-04-completion-finance-support.md, W4D2 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-12 | Defines approved behavior, states or handoffs that this task must preserve. |
| SF-08 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| MOB-W4D1 | Provides completion and settlement required before this task can be accepted. | MOB-W4D1 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /cancel, /reports, /reports/{reportId}. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W4D2 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for MF-12, SF-08 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Cancellation, no-show, report.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement cancellation/no-show flows, warning/strike messaging, report/dispute creation and status.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Penalty rules shown before confirmation.
- Do not turn disputes into live chat.

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

Smile ID. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Penalty rules shown before confirmation.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Cancellation, no-show, report outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Penalty rules shown before confirmation.
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

- MOB-W4D3 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): cancellation no show report`

## Day 3 of 5 — Wednesday

### MOB-W4D3 — Ratings, favorites, reviews

```task-metadata
id: MOB-W4D3
title: Ratings, favorites, reviews
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-15, MF-22, MOB-W4D2, BE-W4D3, CONTRACT-001, DATA-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W4D3
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Implement post-completion rating, review, add favorite, report review entry.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /ratings, /favorites/taskers. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: One rating per actor per completed task.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 4, Day 3 — Wed 29 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-04-completion-finance-support.md, W4D3 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-15 | Defines approved behavior, states or handoffs that this task must preserve. |
| MF-22 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| MOB-W4D2 | Provides cancellation, no-show, report required before this task can be accepted. | MOB-W4D2 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /ratings, /favorites/taskers. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W4D3 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for MF-15, MF-22 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Ratings, favorites, reviews.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement post-completion rating, review, add favorite, report review entry.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: One rating per actor per completed task.

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
- [ ] The output rule is satisfied: One rating per actor per completed task.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Ratings, favorites, reviews outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: One rating per actor per completed task.
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

- MOB-W4D4 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): ratings favorites reviews`

## Day 4 of 5 — Thursday

### MOB-W4D4 — Wallet and withdrawal

```task-metadata
id: MOB-W4D4
title: Wallet and withdrawal
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-13, SF-07, SF-12, MOB-W4D3, BE-W4D4, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W4D4
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Implement wallets, ledger, payout account setup, PIN-confirmed withdrawal, batch-date status.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /wallets, /ledger, /tasker/payout-account, /tasker/withdrawals. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Payout batches: 14th and 28th.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
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
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| MOB-W4D3 | Provides ratings, favorites, reviews required before this task can be accepted. | MOB-W4D3 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /wallets, /ledger, /tasker/payout-account, /tasker/withdrawals. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W4D4 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for MF-13, SF-07, SF-12 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Wallet and withdrawal.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement wallets, ledger, payout account setup, PIN-confirmed withdrawal, batch-date status.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Payout batches: 14th and 28th.
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

Paystack and Moniepoint. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Payout batches: 14th and 28th.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Wallet and withdrawal outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Payout batches: 14th and 28th.
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

- MOB-W4D5 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): wallet and withdrawal`

## Day 5 of 5 — Friday

### MOB-W4D5 — Support and emergency

```task-metadata
id: MOB-W4D5
title: Support and emergency
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-16, MF-23, MOB-W4D4, BE-W4D5, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W4D5
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Implement support live chat, emergency support, ticket/report linking, support attachment flow.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /support/sessions, /support/emergency, /support socket. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: No dispute live chat; support chat is separate.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 4, Day 5 — Fri 31 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-04-completion-finance-support.md, W4D5 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-16 | Defines approved behavior, states or handoffs that this task must preserve. |
| MF-23 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| MOB-W4D4 | Provides wallet and withdrawal required before this task can be accepted. | MOB-W4D4 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /support/sessions, /support/emergency, /support socket. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W4D5 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for MF-16, MF-23 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Support and emergency.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement support live chat, emergency support, ticket/report linking, support attachment flow.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No dispute live chat; support chat is separate.

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

Approved object storage. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: No dispute live chat; support chat is separate.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Support and emergency outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: No dispute live chat; support chat is separate.
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

- MOB-W5D1 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): support and emergency`
