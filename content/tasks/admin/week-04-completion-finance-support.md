---
id: ADM-WEEK-04
title: Admin Frontend Week 4 — Completion, Exceptions, Trust and Finance
type: build-task-week
team: Admin Frontend
week: 4
days: 5
status: planned
version: 1.0
last_reviewed: 2026-07-17
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
---

# Admin Frontend Week 4 — Completion, Exceptions, Trust and Finance

> Canonical Phase 3 source pack. Edit the relevant day inside this weekly file; generated weekly human and agent execution plans inherit from it.

## Day 1 of 5 — Monday

### ADM-W4D1 — Reports/disputes

```task-metadata
id: ADM-W4D1
title: Reports/disputes
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: AF-06, ADM-W3D5, ADM-INT-04, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: admin-ui-construction
stage_order: 1
legacy_slot: W4D1
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Implement reports queue/detail, linked task evidence, decision actions.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /admin/reports, /admin/reports/{id}/resolve. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Follows mobile report/cancellation flows.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 1 — Admin UI Construction |
| Scheduled slot | Week 4, Day 1 — Mon 27 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-04-completion-finance-support.md, W4D1 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| AF-06 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-W3D5 | Provides communication audit view required before this task can be accepted. | ADM-W3D5 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /admin/reports, /admin/reports/{id}/resolve. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| ADM-INT-04 | Owns later connection of this fixture-driven Admin UI to authoritative Mobile/Backend outcomes. | The integration card passes real-contract, permission, recovery and end-to-end checks. |

### Required inputs

- Agent Markdown for AF-06 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Reports/disputes.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement reports queue/detail, linked task evidence, decision actions.
- Preserve the dependency and output rule from the approved legacy row.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-04.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Follows mobile report/cancellation flows.
- Do not turn disputes into live chat.
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

Google Maps Platform. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Follows mobile report/cancellation flows.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Reports/disputes outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Follows mobile report/cancellation flows.
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

- ADM-W4D2 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): reports disputes`

## Day 2 of 5 — Tuesday

### ADM-W4D2 — Risk/warning/strike

```task-metadata
id: ADM-W4D2
title: Risk/warning/strike
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: AF-14, ADM-W4D1, ADM-INT-04, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: admin-ui-construction
stage_order: 1
legacy_slot: W4D2
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Implement warning/strike history, trust impact and suspension action with audit.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /admin/users/{id}, /admin/reports/{id}/resolve. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Apply accepted warning/strike rules.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 1 — Admin UI Construction |
| Scheduled slot | Week 4, Day 2 — Tue 28 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-04-completion-finance-support.md, W4D2 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| AF-14 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-W4D1 | Provides reports/disputes required before this task can be accepted. | ADM-W4D1 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /admin/users/{id}, /admin/reports/{id}/resolve. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| ADM-INT-04 | Owns later connection of this fixture-driven Admin UI to authoritative Mobile/Backend outcomes. | The integration card passes real-contract, permission, recovery and end-to-end checks. |

### Required inputs

- Agent Markdown for AF-14 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Risk/warning/strike.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement warning/strike history, trust impact and suspension action with audit.
- Preserve the dependency and output rule from the approved legacy row.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-04.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Apply accepted warning/strike rules.

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

Smile ID. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Apply accepted warning/strike rules.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Risk/warning/strike outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Apply accepted warning/strike rules.
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

- ADM-W4D3 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): risk warning strike`

## Day 3 of 5 — Wednesday

### ADM-W4D3 — Ratings/reviews moderation

```task-metadata
id: ADM-W4D3
title: Ratings/reviews moderation
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: AF-22, ADM-W4D2, ADM-INT-04, CONTRACT-001, DATA-001
delivery_stage: admin-ui-construction
stage_order: 1
legacy_slot: W4D3
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Implement ratings list, reported review handling and moderation audit.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /admin/ratings. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Follows mobile rating flow.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 1 — Admin UI Construction |
| Scheduled slot | Week 4, Day 3 — Wed 29 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-04-completion-finance-support.md, W4D3 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| AF-22 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-W4D2 | Provides risk/warning/strike required before this task can be accepted. | ADM-W4D2 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /admin/ratings. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| ADM-INT-04 | Owns later connection of this fixture-driven Admin UI to authoritative Mobile/Backend outcomes. | The integration card passes real-contract, permission, recovery and end-to-end checks. |

### Required inputs

- Agent Markdown for AF-22 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Ratings/reviews moderation.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement ratings list, reported review handling and moderation audit.
- Preserve the dependency and output rule from the approved legacy row.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-04.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Follows mobile rating flow.
- Use `mode`; do not introduce `activeMode`.

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
- [ ] The output rule is satisfied: Follows mobile rating flow.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Ratings/reviews moderation outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Follows mobile rating flow.
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

- ADM-W4D4 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): ratings reviews moderation`

## Day 4 of 5 — Thursday

### ADM-W4D4 — Finance transactions

```task-metadata
id: ADM-W4D4
title: Finance transactions
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: AF-08, AF-10, AF-24, ADM-W4D3, ADM-INT-04, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: admin-ui-construction
stage_order: 1
legacy_slot: W4D4
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Implement payments, escrow, wallet ledger, receipts and provider reference review.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /admin/finance/transactions. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Follows mobile payment/settlement.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 1 — Admin UI Construction |
| Scheduled slot | Week 4, Day 4 — Thu 30 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-04-completion-finance-support.md, W4D4 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| AF-08 | Defines approved behavior, states or handoffs that this task must preserve. |
| AF-10 | Defines approved behavior, states or handoffs that this task must preserve. |
| AF-24 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-W4D3 | Provides ratings/reviews moderation required before this task can be accepted. | ADM-W4D3 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /admin/finance/transactions. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| ADM-INT-04 | Owns later connection of this fixture-driven Admin UI to authoritative Mobile/Backend outcomes. | The integration card passes real-contract, permission, recovery and end-to-end checks. |

### Required inputs

- Agent Markdown for AF-08, AF-10, AF-24 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Finance transactions.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement payments, escrow, wallet ledger, receipts and provider reference review.
- Preserve the dependency and output rule from the approved legacy row.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-04.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Follows mobile payment/settlement.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.

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

Paystack and Moniepoint. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Follows mobile payment/settlement.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Finance transactions outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Follows mobile payment/settlement.
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

- ADM-W4D5 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): finance transactions`

## Day 5 of 5 — Friday

### ADM-W4D5 — Payout batches

```task-metadata
id: ADM-W4D5
title: Payout batches
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: AF-09, ADM-W4D4, ADM-INT-04, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: admin-ui-construction
stage_order: 1
legacy_slot: W4D5
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Implement withdrawal list, payout batch create/approve/process, partial failure state.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /admin/payout-batches/*. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Batch dates 14th and 28th.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 1 — Admin UI Construction |
| Scheduled slot | Week 4, Day 5 — Fri 31 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-04-completion-finance-support.md, W4D5 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| AF-09 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-W4D4 | Provides finance transactions required before this task can be accepted. | ADM-W4D4 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /admin/payout-batches/*. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| ADM-INT-04 | Owns later connection of this fixture-driven Admin UI to authoritative Mobile/Backend outcomes. | The integration card passes real-contract, permission, recovery and end-to-end checks. |

### Required inputs

- Agent Markdown for AF-09 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Payout batches.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement withdrawal list, payout batch create/approve/process, partial failure state.
- Preserve the dependency and output rule from the approved legacy row.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-04.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Batch dates 14th and 28th.

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

Paystack and Moniepoint. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Batch dates 14th and 28th.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Payout batches outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Batch dates 14th and 28th.
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

- ADM-W5D1 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): payout batches`
