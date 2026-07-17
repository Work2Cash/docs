---
id: MOB-WEEK-05
title: Mobile Week 5 — Operational Integration, Recovery and Full-Flow QA
type: build-task-week
team: Mobile
week: 5
days: 5
status: planned
version: 1.0
last_reviewed: 2026-07-17
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
---

# Mobile Week 5 — Operational Integration, Recovery and Full-Flow QA

> Canonical Phase 3 source pack. Edit the relevant day inside this weekly file; generated weekly human and agent execution plans inherit from it.

## Day 1 of 5 — Monday

### MOB-W5D1 — Settings and notification preferences

```task-metadata
id: MOB-W5D1
title: Settings and notification preferences
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-18, MF-19, MF-20, MOB-W4D5, BE-W5D1, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W5D1
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Complete settings, notification preferences, session revoke, security copy, critical notification rules.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /me/notification-preferences, /me/sessions. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Sensitive actions require PIN.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 5, Day 1 — Mon 3 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-05-integration-recovery-full-flow-qa.md, W5D1 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-18 | Defines approved behavior, states or handoffs that this task must preserve. |
| MF-19 | Defines approved behavior, states or handoffs that this task must preserve. |
| MF-20 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| MOB-W4D5 | Provides support and emergency required before this task can be accepted. | MOB-W4D5 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /me/notification-preferences, /me/sessions. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W5D1 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for MF-18, MF-19, MF-20 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Settings and notification preferences.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Complete settings, notification preferences, session revoke, security copy, critical notification rules.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Sensitive actions require PIN.

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
- [ ] The output rule is satisfied: Sensitive actions require PIN.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Settings and notification preferences outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Sensitive actions require PIN.
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

- MOB-W5D2 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): settings and notification preferences`

## Day 2 of 5 — Tuesday

### MOB-W5D2 — Referral and rebook

```task-metadata
id: MOB-W5D2
title: Referral and rebook
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.2
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-17, MF-24, MOB-W5D1, BE-W5D2, CONTRACT-REFERRAL-001, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W5D2
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Implement referral code/share/pending reward, rebook from completed task, direct offer/public repost path.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Referral endpoints, /rebook, /payment-intent, /direct-offers. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Reward after referred user completes 5 paid tasks.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 5, Day 2 — Tue 4 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-05-integration-recovery-full-flow-qa.md, W5D2 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-17 | Defines approved behavior, states or handoffs that this task must preserve. |
| MF-24 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-REFERRAL-001 | Defines the exact mobile referral reads, registration attribution input and server-owned reward behavior. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| MOB-W5D1 | Provides settings and notification preferences required before this task can be accepted. | MOB-W5D1 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Referral endpoints, /rebook, /payment-intent, /direct-offers. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W5D2 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for MF-17, MF-24 or the complete Flow Library when the task spans the platform.
- Approved referral, rebook, payment and direct-offer contract sections named by the scope.
- Accepted designs, copy, permission rules and test data for Referral and rebook.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement referral code/share/pending reward, rebook from completed task, direct offer/public repost path.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Reward after referred user completes 5 paid tasks.
- Do not make direct offers socket-based; durable state remains REST/FCM driven.

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

Paystack and Moniepoint, Firebase Cloud Messaging. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Reward after referred user completes 5 paid tasks.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Referral and rebook outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Reward after referred user completes 5 paid tasks.
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

- MOB-W5D3 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): referral and rebook`

## Day 3 of 5 — Wednesday

### MOB-W5D3 — Offline/recovery polish

```task-metadata
id: MOB-W5D3
title: Offline/recovery polish
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: SF-09, SF-10, MOB-W5D2, BE-W5D3, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W5D3
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Implement app resume recovery, socket reconnect recovery, payment/KYC return recovery, consistent empty/error/offline states.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /me plus active task/payment/KYC/report status endpoints. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: No flow depends only on local memory.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 5, Day 3 — Wed 5 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-05-integration-recovery-full-flow-qa.md, W5D3 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| SF-09 | Defines approved behavior, states or handoffs that this task must preserve. |
| SF-10 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| MOB-W5D2 | Provides referral and rebook required before this task can be accepted. | MOB-W5D2 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /me plus active task/payment/KYC/report status endpoints. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W5D3 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for SF-09, SF-10 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Offline/recovery polish.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement app resume recovery, socket reconnect recovery, payment/KYC return recovery, consistent empty/error/offline states.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No flow depends only on local memory.
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

Smile ID, Paystack and Moniepoint. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: No flow depends only on local memory.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Offline/recovery polish outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: No flow depends only on local memory.
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

- MOB-W5D4 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): offline recovery polish`

## Day 4 of 5 — Thursday

### MOB-W5D4 — Provider integration QA

```task-metadata
id: MOB-W5D4
title: Provider integration QA
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, MOB-W5D3, BE-W5D4, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W5D4
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Run integrated tests against staging providers, FCM, payment sandbox, KYC sandbox, map/geocode and media upload.

### Why it matters

This work matters because the approved plan names this dependency or handoff: All provider staging endpoints. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Capture issues for backend/provider hardening.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 5, Day 4 — Thu 6 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-05-integration-recovery-full-flow-qa.md, W5D4 |

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
| MOB-W5D3 | Provides offline/recovery polish required before this task can be accepted. | MOB-W5D3 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | All provider staging endpoints. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W5D4 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Provider integration QA.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Run integrated tests against staging providers, FCM, payment sandbox, KYC sandbox, map/geocode and media upload.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Capture issues for backend/provider hardening.
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

Smile ID, Paystack and Moniepoint, Google Maps Platform, Firebase Cloud Messaging, Approved object storage. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Capture issues for backend/provider hardening.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Provider integration QA outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Capture issues for backend/provider hardening.
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

- MOB-W5D5 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): provider integration qa`

## Day 5 of 5 — Friday

### MOB-W5D5 — Full mobile flow QA

```task-metadata
id: MOB-W5D5
title: Full mobile flow QA
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, MOB-W5D4, BE-W5D5, CONTRACT-001, DATA-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W5D5
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Run happy path and exception path for all mobile flows MF-01 to MF-24.

### Why it matters

This work matters because the approved plan names this dependency or handoff: All mobile API/socket contracts. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Create defect list by flow ID.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 5, Day 5 — Fri 7 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-05-integration-recovery-full-flow-qa.md, W5D5 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| FLOW-LIB-001 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| MOB-W5D4 | Provides provider integration qa required before this task can be accepted. | MOB-W5D4 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | All mobile API/socket contracts. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W5D5 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Full mobile flow QA.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Run happy path and exception path for all mobile flows MF-01 to MF-24.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Create defect list by flow ID.

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
- [ ] The output rule is satisfied: Create defect list by flow ID.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Full mobile flow QA outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Create defect list by flow ID.
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

- MOB-W6D1 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): full mobile flow qa`
