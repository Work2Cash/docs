---
id: BE-WEEK-02
title: Backend Week 2 — Tasker Activation, Task Creation and Funding
type: build-task-week
team: Backend
week: 2
days: 5
status: planned
version: 1.0
last_reviewed: 2026-07-17
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, Risk and Compliance, QA
authority: Approved KYC pilots, MF-05, SF-03 and AF-04
---

# Backend Week 2 — Tasker Activation, Task Creation and Funding

> Canonical Phase 3 source pack. Edit the relevant day inside this weekly file; generated weekly human and agent execution plans inherit from it.

## Day 1 of 5 — Monday

### BE-W2D1 — Tasker and KYC APIs

```task-metadata
id: BE-W2D1
title: Tasker and KYC APIs
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, Risk and Compliance, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved KYC pilots, MF-05, SF-03 and AF-04
related: MF-05, SF-03, AF-04, PILOT-KYC-CONTRACT-001, PILOT-KYC-DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W2D1
```

### Outcome in plain English

The backend can create and update a Tasker's activation profile, start identity verification, receive NIN or BVN and face-capture submissions safely, expose the current KYC status and support admin re-verification without losing prior evidence.

### Why it matters

Mobile cannot safely activate a Tasker and Admin cannot review KYC until one backend workflow owns identity state, evidence history and permitted transitions. This task creates that shared authority.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned backend developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, Risk and Compliance, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 2, Day 1 — 13 July 2026 legacy planning date |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-05 — Tasker Activation | Defines the user-visible activation journey and completion conditions. |
| SF-03 — Tasker KYC | Defines the reusable verification inputs, outputs and recovery behavior. |
| AF-04 — Tasker and KYC Review | Defines the admin decision and re-verification behavior. |
| KYC Review Contract Group pilot v0.2 | Defines the exact queue, detail, decision and reconciliation contracts. |
| KYC Data Domain pilot v0.2 | Defines verification versions, immutable attempts, constraints and migration order. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W1D4 | KYC records must belong to an authenticated user with a stable profile. | Identity, profile and session endpoints, access-token guard and user ID are available in staging. |
| Approved KYC contract and data pilots | Prevents the implementation from inventing states, actions or mutable evidence. | Both pilots are approved at v0.2. |
| Smile ID sandbox and credential ownership | Required for real provider submission and callback testing. | Infrastructure Lead records sandbox access and secret location; absence blocks provider integration, not local contract work. |
| Database migration review | KYC evidence is sensitive and versioned. | Data owner approves the migration and rollback sequence before applying it. |

### Integration and acceptance gates

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No later construction gate | This Backend card owns the authoritative KYC contracts and state required by later consumers. | Its own contract, provider, security, migration and staging evidence passes before handoff. |

### Required inputs

- Approved MF-05, SF-03 and AF-04 standalone flow Markdown.
- KYC contract and data-domain pilot Markdown.
- API response/error envelope, authenticated user context and audit conventions.
- Smile ID sandbox documentation and credentials supplied through the approved secret mechanism.
- Test identities and media that contain no real production personal data.

### Implementation scope

- Implement Tasker profile and activation-state reads and mutations.
- Implement KYC start, NIN/BVN submission, face capture and status recovery.
- Preserve immutable numbered attempts and the active verification version.
- Implement admin queue, detail, approve, reject, request re-verification and risk escalation contracts defined by the pilot.
- Reconcile delayed, duplicate and out-of-order provider callbacks idempotently.
- Emit audit records for privileged decisions and sensitive state changes.

### Explicitly out of scope

- Changing approved KYC states, review outcomes or the Tasker activation rule.
- Storing provider secrets, raw identity numbers or unrestricted evidence in logs.
- Automatic paid-provider refresh loops.
- Making the mobile redirect or provider SDK screen the source of final verification truth.
- Adding undocumented endpoint paths or database columns.

### Expected modules or files

- Backend identity and Tasker-profile application modules.
- KYC domain, persistence and provider-adapter modules.
- Admin KYC query and command handlers.
- Database migration, contract tests and provider reconciliation tests.
- OpenAPI definitions for the implemented endpoints.

### Security, permissions and audit

- Only the authenticated user may submit their own KYC data.
- Only permitted admin roles may view evidence or make review decisions.
- List responses must not expose full identity numbers or unrestricted proof media.
- Provider callbacks require signature validation, replay protection and idempotency.
- Every admin decision records actor, reason, previous state, new state and time.

### Provider dependencies

Smile ID is the planned verification provider. Local contract and state-machine work may proceed with an adapter stub, but provider completion requires validated sandbox credentials, callback verification and documented timeout/retry behavior.

### Verbal execution guide

First confirm the identity foundation and approved KYC state model. Then implement the domain transitions and persistence without a provider dependency. Add authenticated user contracts, followed by admin review contracts. Connect the Smile ID adapter behind those contracts, reconcile callbacks idempotently, and finish with security, audit, migration and end-to-end evidence. Mobile and Admin consume the backend state; they do not recreate it.

### Acceptance criteria

- [ ] An authenticated user can create or resume Tasker activation without duplicate active verification records.
- [ ] NIN/BVN and face-capture submissions create immutable, numbered attempts.
- [ ] KYC status returns the authoritative state and actionable next step.
- [ ] Admin approve, reject and re-verification actions enforce permissions and state guards.
- [ ] Duplicate or delayed provider callbacks cannot regress or duplicate a completed decision.
- [ ] Sensitive data is masked in list responses and excluded from logs.
- [ ] OpenAPI and implemented response shapes agree.

### Required automated tests

- Unit tests for every permitted and forbidden KYC state transition.
- Integration tests for user submission, admin decision and re-verification paths.
- Contract tests for response envelopes, error codes and role restrictions.
- Idempotency tests for duplicate submissions and provider callbacks.
- Migration and constraint tests for one active verification and immutable attempts.
- Authorization and sensitive-data exposure tests.

### Required manual tests

- Complete one success, rejection and re-verification journey in staging.
- Simulate a delayed callback and a duplicate callback.
- Confirm a non-KYC admin cannot view evidence or decide a case.
- Confirm mobile and admin clients can recover after interruption using REST state.

### Evidence to attach

- Passing automated-test output and OpenAPI diff.
- Migration apply and rollback evidence.
- Redacted staging request/response examples.
- Audit-log example for each admin outcome.
- Smile ID sandbox validation evidence or a named blocker if access is unavailable.

### Definition of done

- [ ] Scope and acceptance criteria are complete.
- [ ] Automated and manual tests pass with evidence.
- [ ] Security, privacy, audit and migration reviews are accepted.
- [ ] Mobile and Admin leads confirm the contracts unblock their dependent cards.
- [ ] Documentation and task status are updated from evidence.

### Blockers and escalation

If identity foundations, migration approval or sandbox access are missing, record the blocker, owner, discovery date and next decision. Escalate contract/state conflicts to the Technical Lead and privacy/provider-access conflicts to the Security or Infrastructure Lead. Do not silently create substitute behavior.

### What this unlocks

- MOB-W2D1 can connect Tasker activation and recovery to authoritative backend state.
- ADM-W2D2 can operate the KYC queue and decision workflow.
- Later discovery tasks can enforce the rule that only approved Taskers accept work.

### Carry-over rule

If the state machine and local contracts are complete but provider validation is blocked, carry only the provider integration and evidence portion with the blocker named. Do not mark the whole task done or hide the incomplete provider path.

### Commit message

`feat(kyc): implement tasker activation contracts`

## Day 2 of 5 — Tuesday

### BE-W2D2 — Catalog/task draft APIs

```task-metadata
id: BE-W2D2
title: Catalog/task draft APIs
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-06, AF-11, BE-W2D1, CONTRACT-001, DATA-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W2D2
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Implement categories/types, task draft, amount validation, required arrival time.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Unblocks mobile task creation. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: feat(tasks): implement catalog and task draft

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 2, Day 2 — Tue 14 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-02-tasker-task-creation-payment.md, W2D2 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-06 | Defines approved behavior, states or handoffs that this task must preserve. |
| AF-11 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W2D1 | Provides tasker/kyc apis required before this task can be accepted. | BE-W2D1 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Unblocks mobile task creation. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for MF-06, AF-11 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Catalog/task draft APIs.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement categories/types, task draft, amount validation, required arrival time.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(tasks): implement catalog and task draft

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
- [ ] The output rule is satisfied: feat(tasks): implement catalog and task draft
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Catalog/task draft APIs outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: feat(tasks): implement catalog and task draft
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

- BE-W2D3 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(tasks): implement catalog and task draft`

## Day 3 of 5 — Wednesday

### BE-W2D3 — Location/media APIs

```task-metadata
id: BE-W2D3
title: Location/media APIs
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-06, SF-04, SF-05, AF-13, BE-W2D2, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W2D3
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Implement geocode, pin confirmation, task site Nigeria validation, media signed upload/finalize.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Unblocks mobile location/proof. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: feat(tasks): implement location and media contracts

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 2, Day 3 — Wed 15 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-02-tasker-task-creation-payment.md, W2D3 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-06 | Defines approved behavior, states or handoffs that this task must preserve. |
| SF-04 | Defines approved behavior, states or handoffs that this task must preserve. |
| SF-05 | Defines approved behavior, states or handoffs that this task must preserve. |
| AF-13 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W2D2 | Provides catalog/task draft apis required before this task can be accepted. | BE-W2D2 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Unblocks mobile location/proof. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for MF-06, SF-04, SF-05, AF-13 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Location/media APIs.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement geocode, pin confirmation, task site Nigeria validation, media signed upload/finalize.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(tasks): implement location and media contracts

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

Google Maps Platform, Approved object storage. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: feat(tasks): implement location and media contracts
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Location/media APIs outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: feat(tasks): implement location and media contracts
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

- BE-W2D4 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(tasks): implement location and media contracts`

## Day 4 of 5 — Thursday

### BE-W2D4 — Payment/escrow APIs

```task-metadata
id: BE-W2D4
title: Payment/escrow APIs
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-06, SF-06, SF-07, AF-08, BE-W2D3, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W2D4
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Implement payment intent, verify, Paystack/Moniepoint adapter shell, ProviderWebhookEvent, escrow creation.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Unblocks mobile funding. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: feat(payments): implement payment and escrow foundation

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 2, Day 4 — Thu 16 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-02-tasker-task-creation-payment.md, W2D4 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-06 | Defines approved behavior, states or handoffs that this task must preserve. |
| SF-06 | Defines approved behavior, states or handoffs that this task must preserve. |
| SF-07 | Defines approved behavior, states or handoffs that this task must preserve. |
| AF-08 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W2D3 | Provides location/media apis required before this task can be accepted. | BE-W2D3 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Unblocks mobile funding. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for MF-06, SF-06, SF-07, AF-08 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Payment/escrow APIs.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement payment intent, verify, Paystack/Moniepoint adapter shell, ProviderWebhookEvent, escrow creation.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(payments): implement payment and escrow foundation
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

Paystack and Moniepoint. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: feat(payments): implement payment and escrow foundation
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Payment/escrow APIs outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: feat(payments): implement payment and escrow foundation
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

- BE-W2D5 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(payments): implement payment and escrow foundation`

## Day 5 of 5 — Friday

### BE-W2D5 — Broadcast/direct offer APIs

```task-metadata
id: BE-W2D5
title: Broadcast/direct offer APIs
type: build-task
audience: Junior backend developers, QA, AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-06, MF-08, AF-21, BE-W2D4, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W2D5
```

### Outcome in plain English

When accepted, the Backend team will have delivered this demonstrable outcome: Implement broadcast, favorites, direct offers, FCM notification job shell.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Unblocks mobile discovery/direct offer. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: feat(matching): implement broadcast and direct offers

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Backend |
| Owner | Backend Lead or assigned developer |
| Reviewer and acceptor | Technical Lead, Mobile Lead, Admin Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 2, Day 5 — Fri 17 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-02-tasker-task-creation-payment.md, W2D5 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-06 | Defines approved behavior, states or handoffs that this task must preserve. |
| MF-08 | Defines approved behavior, states or handoffs that this task must preserve. |
| AF-21 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| BE-W2D4 | Provides payment/escrow apis required before this task can be accepted. | BE-W2D4 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Unblocks mobile discovery/direct offer. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |

### Required inputs

- Agent Markdown for MF-06, MF-08, AF-21 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Broadcast/direct offer APIs.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement broadcast, favorites, direct offers, FCM notification job shell.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: feat(matching): implement broadcast and direct offers
- Do not make direct offers socket-based; durable state remains REST/FCM driven.

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
- [ ] The output rule is satisfied: feat(matching): implement broadcast and direct offers
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Authorization, idempotency and audit tests wherever the task mutates protected or financial state.
- [ ] Regression test for the legacy output rule and referenced flow endings.

### Required manual tests

- [ ] Run the complete Broadcast/direct offer APIs outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: feat(matching): implement broadcast and direct offers
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

- BE-W3D1 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(matching): implement broadcast and direct offers`
