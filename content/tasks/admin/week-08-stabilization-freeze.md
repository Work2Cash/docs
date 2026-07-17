---
id: ADM-WEEK-08
title: Admin Frontend Week 8 — Stabilization, Go-Live Rehearsal and Build Freeze
type: build-task-week
team: Admin Frontend
week: 8
days: 5
status: planned
version: 1.0
last_reviewed: 2026-07-17
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
---

# Admin Frontend Week 8 — Stabilization, Go-Live Rehearsal and Build Freeze

> Canonical Phase 3 source pack. Edit the relevant day inside this weekly file; generated weekly human and agent execution plans inherit from it.

## Day 1 of 5 — Monday

### ADM-W8D1 — Stabilization sprint

```task-metadata
id: ADM-W8D1
title: Stabilization sprint
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, ADM-W7D5, BE-W8D1, MOB-W8D1, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W8D1
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Apply approved admin release-candidate fixes only.

### Why it matters

This work matters because the approved plan names this dependency or handoff: RC defect list. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: No new modules.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 8, Day 1 — Mon 24 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-08-stabilization-freeze.md, W8D1 |

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
| ADM-W7D5 | Provides admin release candidate required before this task can be accepted. | ADM-W7D5 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | RC defect list. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W8D1 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |
| MOB-W8D1 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Stabilization sprint.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Apply approved admin release-candidate fixes only.
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

Sentry and approved monitoring services where applicable. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

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

- [ ] Run the complete Stabilization sprint outcome in the target environment using non-production data.
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

- ADM-W8D2 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): stabilization sprint`

## Day 2 of 5 — Tuesday

### ADM-W8D2 — Final admin defect pass

```task-metadata
id: ADM-W8D2
title: Final admin defect pass
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, ADM-W8D1, BE-W8D2, MOB-W8D2, CONTRACT-001, DATA-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W8D2
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Re-test fixed defects and critical admin flows.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Stable staging. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Close or classify every admin defect.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 8, Day 2 — Tue 25 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-08-stabilization-freeze.md, W8D2 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| FLOW-LIB-001 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-W8D1 | Provides stabilization sprint required before this task can be accepted. | ADM-W8D1 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Stable staging. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W8D2 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |
| MOB-W8D2 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Final admin defect pass.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Re-test fixed defects and critical admin flows.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Close or classify every admin defect.

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
- [ ] The output rule is satisfied: Close or classify every admin defect.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Final admin defect pass outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Close or classify every admin defect.
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

- ADM-W8D3 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): final admin defect pass`

## Day 3 of 5 — Wednesday

### ADM-W8D3 — Go-live rehearsal

```task-metadata
id: ADM-W8D3
title: Go-live rehearsal
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, ADM-W8D2, BE-W8D3, MOB-W8D3, CONTRACT-001, DATA-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W8D3
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Run admin operations exactly as launch support and operations team will use them.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Production-like staging. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Document launch rehearsal evidence.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 8, Day 3 — Wed 26 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-08-stabilization-freeze.md, W8D3 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| FLOW-LIB-001 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-W8D2 | Provides final admin defect pass required before this task can be accepted. | ADM-W8D2 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Production-like staging. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W8D3 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |
| MOB-W8D3 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Go-live rehearsal.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Run admin operations exactly as launch support and operations team will use them.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Document launch rehearsal evidence.
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

No direct external provider is named by this task. If implementation discovers one, stop and add the governed provider dependency before integration.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Document launch rehearsal evidence.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Go-live rehearsal outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Document launch rehearsal evidence.
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

- ADM-W8D4 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): go live rehearsal`

## Day 4 of 5 — Thursday

### ADM-W8D4 — Admin handover

```task-metadata
id: ADM-W8D4
title: Admin handover
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, ADM-W8D3, BE-W8D4, MOB-W8D4, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W8D4
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Confirm role permissions, runbooks, support notes, payout notes and moderation notes.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Final docs and staging admin. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Prepare testing-week handover.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 8, Day 4 — Thu 27 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-08-stabilization-freeze.md, W8D4 |

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
| ADM-W8D3 | Provides go-live rehearsal required before this task can be accepted. | ADM-W8D3 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Final docs and staging admin. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W8D4 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |
| MOB-W8D4 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Admin handover.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Confirm role permissions, runbooks, support notes, payout notes and moderation notes.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Prepare testing-week handover.
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

Paystack and Moniepoint. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Prepare testing-week handover.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Admin handover outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Prepare testing-week handover.
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

- ADM-W8D5 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): admin handover`

## Day 5 of 5 — Friday

### ADM-W8D5 — Admin build freeze

```task-metadata
id: ADM-W8D5
title: Admin build freeze
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: FLOW-LIB-001, ADM-W8D4, BE-W8D5, MOB-W8D5, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: cross-platform-hardening-release
stage_order: 4
legacy_slot: W8D5
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Freeze admin build for formal testing weeks.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Stable staging. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Only blocker fixes after this point.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 4 — Cross-Platform Hardening and Release |
| Scheduled slot | Week 8, Day 5 — Fri 28 Aug 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-08-stabilization-freeze.md, W8D5 |

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
| ADM-W8D4 | Provides admin handover required before this task can be accepted. | ADM-W8D4 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Stable staging. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W8D5 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |
| MOB-W8D5 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for FLOW-LIB-001 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Admin build freeze.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Freeze admin build for formal testing weeks.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Only blocker fixes after this point.

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

Shorebird or the approved release-distribution path. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Only blocker fixes after this point.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Admin build freeze outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Only blocker fixes after this point.
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

- The next accepted task in this team's sequence can proceed with this outcome as evidence.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): admin build freeze`
