---
id: ADM-WEEK-06
title: Admin Frontend Week 6 — Hardening, Security and Performance
type: build-task-week
team: Admin Frontend
week: 6
days: 5
status: planned
version: 1.0
last_reviewed: 2026-07-17
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
---

# Admin Frontend Week 6 — Hardening, Security and Performance

> Canonical Phase 3 source pack. Edit the relevant day inside this weekly file; generated weekly human and agent execution plans inherit from it.

## Day 1 of 5 — Monday

### ADM-W6D1 — Admin hardening

```task-metadata
id: ADM-W6D1
title: Admin hardening
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, ADM-W5D5, ADM-INT-05, BE-W6D1, MOB-W6D1, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W6D1
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Fix defects, tighten RBAC, audit reasons, empty/error/loading states.

### Why it matters

This work matters because the approved plan names this dependency or handoff: All admin contracts. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: No new modules.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 6, Day 1 — Mon 10 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-06-hardening-security-performance.md, W6D1 |

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
| ADM-W5D5 | Provides audit logs and analytics required before this task can be accepted. | ADM-W5D5 is accepted, or its explicitly required contract/stub and evidence are available. |
| ADM-INT-05 | Provides an approved prerequisite. | ADM-INT-05 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | All admin contracts. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W6D1 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |
| MOB-W6D1 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Admin hardening.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Fix defects, tighten RBAC, audit reasons, empty/error/loading states.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No new modules.

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

Smile ID, Sentry and approved monitoring services where applicable. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: No new modules.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Admin hardening outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: No new modules.
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

- ADM-W6D2 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): admin hardening`

## Day 2 of 5 — Tuesday

### ADM-W6D2 — Admin performance and table QA

```task-metadata
id: ADM-W6D2
title: Admin performance and table QA
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, ADM-W6D1, BE-W6D2, MOB-W6D2, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W6D2
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Test large lists, filters, pagination and detail loading.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Staging admin API. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Skeletons for fetch; overlay for actions.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 6, Day 2 — Tue 11 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-06-hardening-security-performance.md, W6D2 |

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
| ADM-W6D1 | Provides admin hardening required before this task can be accepted. | ADM-W6D1 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Staging admin API. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W6D2 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |
| MOB-W6D2 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Admin performance and table QA.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Test large lists, filters, pagination and detail loading.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Skeletons for fetch; overlay for actions.

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

Google Maps Platform, Sentry and approved monitoring services where applicable. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Skeletons for fetch; overlay for actions.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Admin performance and table QA outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Skeletons for fetch; overlay for actions.
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

- ADM-W6D3 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): admin performance and table qa`

## Day 3 of 5 — Wednesday

### ADM-W6D3 — Security and permission review

```task-metadata
id: ADM-W6D3
title: Security and permission review
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, ADM-W6D2, BE-W6D3, MOB-W6D3, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W6D3
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Validate TOTP, RBAC, forbidden states, high-impact confirmations and audit capture.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Stable admin auth/RBAC APIs. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: No unguarded admin actions.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 6, Day 3 — Wed 12 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-06-hardening-security-performance.md, W6D3 |

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
| ADM-W6D2 | Provides admin performance and table qa required before this task can be accepted. | ADM-W6D2 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Stable admin auth/RBAC APIs. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W6D3 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |
| MOB-W6D3 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Security and permission review.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Validate TOTP, RBAC, forbidden states, high-impact confirmations and audit capture.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No unguarded admin actions.

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

Termii when SMS fallback is required. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: No unguarded admin actions.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Security and permission review outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: No unguarded admin actions.
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

- ADM-W6D4 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): security and permission review`

## Day 4 of 5 — Thursday

### ADM-W6D4 — Operational workflow review

```task-metadata
id: ADM-W6D4
title: Operational workflow review
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, ADM-W6D3, BE-W6D4, MOB-W6D4, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W6D4
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Run KYC, task monitor, force cancel, reports, finance, payout and support workflows end to end.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Stable backend staging. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: No admin reassignment under any condition.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 6, Day 4 — Thu 13 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-06-hardening-security-performance.md, W6D4 |

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
| ADM-W6D3 | Provides security and permission review required before this task can be accepted. | ADM-W6D3 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Stable backend staging. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W6D4 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |
| MOB-W6D4 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Operational workflow review.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Run KYC, task monitor, force cancel, reports, finance, payout and support workflows end to end.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No admin reassignment under any condition.
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

Smile ID, Paystack and Moniepoint, Sentry and approved monitoring services where applicable. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: No admin reassignment under any condition.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Operational workflow review outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: No admin reassignment under any condition.
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

- ADM-W6D5 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): operational workflow review`

## Day 5 of 5 — Friday

### ADM-W6D5 — Hardening review

```task-metadata
id: ADM-W6D5
title: Hardening review
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, ADM-W6D4, BE-W6D5, MOB-W6D5, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W6D5
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Close major admin defects and create release-candidate blocker list.

### Why it matters

This work matters because the approved plan names this dependency or handoff: All admin modules. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Only scoped fixes after review.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 6, Day 5 — Fri 14 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-06-hardening-security-performance.md, W6D5 |

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
| ADM-W6D4 | Provides operational workflow review required before this task can be accepted. | ADM-W6D4 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | All admin modules. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W6D5 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |
| MOB-W6D5 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Hardening review.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Close major admin defects and create release-candidate blocker list.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Only scoped fixes after review.

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

Smile ID, Sentry and approved monitoring services where applicable. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Only scoped fixes after review.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Hardening review outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Only scoped fixes after review.
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

- ADM-W7D1 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): hardening review`
