---
id: ADM-WEEK-02
title: Admin Frontend Week 2 — Tasker Activation, Task Creation and Funding
type: build-task-week
team: Admin Frontend
week: 2
days: 5
status: planned
version: 1.0
last_reviewed: 2026-07-17
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
---

# Admin Frontend Week 2 — Tasker Activation, Task Creation and Funding

> Canonical Phase 3 source pack. Edit the relevant day inside this weekly file; generated weekly human and agent execution plans inherit from it.

## Day 1 of 5 — Monday

### ADM-W2D1 — User management

```task-metadata
id: ADM-W2D1
title: User management
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: AF-03, ADM-W1D5, ADM-INT-01, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: admin-ui-construction
stage_order: 1
legacy_slot: W2D1
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Implement user list/detail with profile, mode, wallets summary, sessions, risk summary.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /admin/users, /admin/users/{userId}. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Consumes data from mobile auth/profile.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 1 — Admin UI Construction |
| Scheduled slot | Week 2, Day 1 — Mon 13 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-02-tasker-task-creation-payment.md, W2D1 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| AF-03 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-W1D5 | Provides list/detail primitives required before this task can be accepted. | ADM-W1D5 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /admin/users, /admin/users/{userId}. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| ADM-INT-01 | Owns later connection of this fixture-driven Admin UI to authoritative Mobile/Backend outcomes. | The integration card passes real-contract, permission, recovery and end-to-end checks. |

### Required inputs

- Agent Markdown for AF-03 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for User management.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement user list/detail with profile, mode, wallets summary, sessions, risk summary.
- Preserve the dependency and output rule from the approved legacy row.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-01.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Consumes data from mobile auth/profile.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
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

Paystack and Moniepoint, Google Maps Platform. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Consumes data from mobile auth/profile.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete User management outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Consumes data from mobile auth/profile.
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

- ADM-W2D2 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): user management`

## Day 2 of 5 — Tuesday

### ADM-W2D2 — KYC Review Operations

```task-metadata
id: ADM-W2D2
title: KYC Review Operations
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Risk and Compliance, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved AF-04 behavior and approved KYC pilots
related: AF-04, ASF-02, ASF-05, ASF-11, ADM-INT-02, PILOT-KYC-CONTRACT-001, PILOT-KYC-DATA-001
delivery_stage: admin-ui-construction
stage_order: 1
legacy_slot: W2D2
```

### Outcome in plain English

An authorized operations reviewer can find a KYC case, understand the applicant and attempt history, approve or reject it, request re-verification or escalate risk, while every privileged action is permission-checked and audited.

### Why it matters

Tasker activation cannot be trusted if review decisions are unclear, unaudited or expose unnecessary identity data. This task turns approved AF-04 behavior into a safe daily operations tool.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned admin developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Risk and Compliance, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 1 — Admin UI Construction |
| Scheduled slot | Week 2, Day 2 — 14 July 2026 legacy planning date |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| AF-04 — Tasker and KYC Review | Defines the complete queue, review, decision and recovery flow. |
| ASF-02, ASF-05 and ASF-11 | Define permission denial, sensitive-data reveal and empty/loading/error recovery. |
| ADM-INT-02 — KYC, Catalog and Media Integration | Later replaces approved fixtures with authoritative queue, detail, decision and re-verification contracts. |
| KYC contract and data pilots v0.2 | Define exact state, attempt history, permissions and audit expectations. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-W2D1 | Supplies the accepted Admin authentication, RBAC, list/detail and user-management construction chain. | The Stage 1 Admin sequence through ADM-W2D1 is accepted. |
| Approved KYC contract shapes | Queue, detail and decisions need stable fields before UI construction. | Approved pilots and contract-shaped examples cover every supported state. |
| Contract-shaped KYC fixtures | Review needs realistic pending, failed and re-verification data without waiting for Backend. | QA supplies redacted fixtures for every state, permission and recovery branch. |

### Integration and acceptance gates

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| ADM-INT-02 | Owns replacement of KYC fixtures with BE-W2D1 contracts and persisted Mobile submissions. | Real queue, detail, decisions, permission denials, audit references, conflicts and recovery pass on staging. |

### Required inputs

- AF-04 and relevant admin subflow agent Markdown.
- Approved KYC contract and data-domain pilots.
- Approved KYC contract examples and role/permission matrix for fixture construction.
- Approved rejection reasons, risk escalation copy and evidence-display policy.
- Redacted seed data for every supported state.

### Implementation scope

- Implement KYC queue filters, pagination, loading, empty, error and retry states.
- Implement case detail with profile summary, masked identifiers, verification versions and attempt history.
- Implement approve, reject, request re-verification and risk escalation actions.
- Require permission checks, reason capture and consequence confirmation before mutations.
- Refresh the affected queue/detail state from the fixture adapter after every action using the same boundary that Stage 3 will connect to Backend.
- Present conflict and stale-state recovery when another reviewer acts first.
- Keep real API connection and cross-platform end-to-end acceptance in ADM-INT-02.

### Explicitly out of scope

- Editing submitted identity evidence or rewriting attempt history.
- Showing full identity numbers or unrestricted evidence in queue rows.
- Bypassing RBAC because a control is hidden in the UI.
- Automatically approving provider success without the approved review rule.
- Creating new KYC outcomes, endpoint paths or database fields.

### Expected modules or files

- Admin KYC queue and case-detail feature areas.
- RBAC gates, sensitive-data reveal control and confirmed action modals.
- API query/mutation clients and cache-refresh behavior.
- Component, integration, accessibility and permission tests.

### Security, permissions and audit

- Route and action access must enforce backend permissions, not only hidden buttons.
- Sensitive evidence is revealed only when allowed, for a named purpose and with audit where required.
- Decision dialogs show the consequence and require a non-empty reason where specified.
- Stale decisions must fail clearly and reload current state.
- The UI must display the audit reference returned by the backend when available.

### Provider dependencies

The Admin UI does not call Smile ID directly. It displays backend-normalized provider results and must remain usable when the provider is delayed or unavailable.

### Verbal execution guide

Enter through protected admin access, load the permitted fixture-backed queue and select one case. Read the profile, verification version and immutable attempts without exposing more data than needed. Choose an allowed decision, review its consequence, supply the required reason and submit it through the contract-shaped adapter. Then reload the adapter state, show the recorded outcome and return the reviewer to the correct queue. If the case changed, explain the conflict and reopen the latest state. ADM-INT-02 later repeats this behavior against real Backend and Mobile outcomes.

### Acceptance criteria

- [ ] Authorized reviewers can filter and open every supported KYC state.
- [ ] Unauthorized roles receive a clear forbidden state and cannot mutate through direct requests.
- [ ] Case detail distinguishes verification versions and immutable attempts.
- [ ] Approve, reject, re-verification and escalation actions enforce reasons and confirmations.
- [ ] Successful fixture actions refresh contract-shaped state and expose an audit reference shape where applicable.
- [ ] Stale, failed and duplicate actions recover without showing false success.
- [ ] Queue rows and logs do not expose full sensitive identity data.

### Required automated tests

- Component tests for queue, detail, empty, loading, error and stale-state views.
- RBAC tests for route access, action visibility and backend denial handling.
- Integration tests for every decision and re-verification mutation.
- Tests for masking, sensitive-data reveal and audit-reason capture.
- Accessibility tests for tables, dialogs, focus restoration and error announcements.

### Required manual tests

- Review one case for each supported outcome using staging role accounts.
- Attempt direct navigation and mutation as an unauthorized role.
- Trigger a concurrent-review conflict and verify recovery.
- Verify keyboard-only operation and screen-reader labels.
- Confirm list, detail and browser logs do not leak restricted evidence.

### Evidence to attach

- Screen recording of queue-to-decision and concurrent-conflict recovery.
- Permission matrix results for allowed and denied roles.
- Redacted screenshots of queue, detail, confirmation and outcome states.
- Automated-test output, build identifier and audit-log references.
- Product/Risk/Security/QA acceptance record or named open findings.

### Definition of done

- [ ] Scope and acceptance criteria are complete.
- [ ] Automated and manual tests pass with evidence.
- [ ] Product, Risk, Security/Privacy and QA accept the Stage 1 fixture-driven workflow.
- [ ] ADM-INT-02 visibly owns real Backend and Mobile integration; this card does not claim it is complete.
- [ ] No high-risk permission, audit or data-exposure finding remains open.
- [ ] Documentation and task status are updated from evidence.

### Blockers and escalation

Record missing contracts, role definitions, review reasons, seed data or evidence policy with an owner and next decision. Escalate state/contract conflicts to Backend and Technical leads; permission/privacy conflicts to Security/Risk. Never bypass a blocker with a UI-only assumption.

### What this unlocks

ADM-INT-02 can connect an already accepted Admin workflow to authoritative Backend contracts and real Mobile submissions. The fixture-driven workflow also becomes the reference for other high-risk Admin action cards.

### Carry-over rule

Carry over the whole Stage 1 decision path if permission behavior, fixture mutation or audit-shape evidence is incomplete. Real Backend mutation evidence belongs to ADM-INT-02 and must not be claimed by this card.

### Commit message

`feat(admin-kyc): implement governed kyc review workflow`

## Day 3 of 5 — Wednesday

### ADM-W2D3 — Catalog management

```task-metadata
id: ADM-W2D3
title: Catalog management
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: AF-11, ADM-W2D2, ADM-INT-02, CONTRACT-001, DATA-001
delivery_stage: admin-ui-construction
stage_order: 1
legacy_slot: W2D3
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Implement categories/types list, create/edit, disable/archive, audit reason.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /admin/catalog/categories. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Supports mobile task creation.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 1 — Admin UI Construction |
| Scheduled slot | Week 2, Day 3 — Wed 15 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-02-tasker-task-creation-payment.md, W2D3 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| AF-11 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-W2D2 | Provides kyc review required before this task can be accepted. | ADM-W2D2 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /admin/catalog/categories. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| ADM-INT-02 | Owns later connection of this fixture-driven Admin UI to authoritative Mobile/Backend outcomes. | The integration card passes real-contract, permission, recovery and end-to-end checks. |

### Required inputs

- Agent Markdown for AF-11 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Catalog management.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement categories/types list, create/edit, disable/archive, audit reason.
- Preserve the dependency and output rule from the approved legacy row.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-02.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Supports mobile task creation.

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
- [ ] The output rule is satisfied: Supports mobile task creation.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Catalog management outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Supports mobile task creation.
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

- ADM-W2D4 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): catalog management`

## Day 4 of 5 — Thursday

### ADM-W2D4 — Task monitor foundation

```task-metadata
id: ADM-W2D4
title: Task monitor foundation
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: AF-05, ADM-W2D3, ADM-INT-03, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: admin-ui-construction
stage_order: 1
legacy_slot: W2D4
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Implement task list/detail shell with status, owner, tasker, payment, location and media placeholders.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /admin/tasks, /admin/tasks/{taskId}. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Consumes mobile task draft/payment/media states.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 1 — Admin UI Construction |
| Scheduled slot | Week 2, Day 4 — Thu 16 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-02-tasker-task-creation-payment.md, W2D4 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| AF-05 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-W2D3 | Provides catalog management required before this task can be accepted. | ADM-W2D3 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /admin/tasks, /admin/tasks/{taskId}. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| ADM-INT-03 | Owns later connection of this fixture-driven Admin UI to authoritative Mobile/Backend outcomes. | The integration card passes real-contract, permission, recovery and end-to-end checks. |

### Required inputs

- Agent Markdown for AF-05 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Task monitor foundation.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement task list/detail shell with status, owner, tasker, payment, location and media placeholders.
- Preserve the dependency and output rule from the approved legacy row.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-03.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Consumes mobile task draft/payment/media states.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Do not add admin task reassignment.
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

Paystack and Moniepoint, Google Maps Platform, Approved object storage, Sentry and approved monitoring services where applicable. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Consumes mobile task draft/payment/media states.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Task monitor foundation outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Consumes mobile task draft/payment/media states.
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

- ADM-W2D5 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): task monitor foundation`

## Day 5 of 5 — Friday

### ADM-W2D5 — Media moderation

```task-metadata
id: ADM-W2D5
title: Media moderation
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: AF-13, ADM-W2D4, ADM-INT-02, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: admin-ui-construction
stage_order: 1
legacy_slot: W2D5
```

### Outcome in plain English

When accepted, the Admin Frontend team will have delivered this demonstrable outcome: Implement media review, remove/reject reason and audit action.

### Why it matters

This work matters because the approved plan names this dependency or handoff: Task media/admin moderation endpoints. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Supports proof media governance.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 1 — Admin UI Construction |
| Scheduled slot | Week 2, Day 5 — Fri 17 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-02-tasker-task-creation-payment.md, W2D5 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| AF-13 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-W2D4 | Provides task monitor foundation required before this task can be accepted. | ADM-W2D4 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | Task media/admin moderation endpoints. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| ADM-INT-02 | Owns later connection of this fixture-driven Admin UI to authoritative Mobile/Backend outcomes. | The integration card passes real-contract, permission, recovery and end-to-end checks. |

### Required inputs

- Agent Markdown for AF-13 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Media moderation.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement media review, remove/reject reason and audit action.
- Preserve the dependency and output rule from the approved legacy row.
- Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ADM-INT-02.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Supports proof media governance.
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

Approved object storage. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Supports proof media governance.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] Component tests for list/detail/action, loading, empty, error and retry states.
- [ ] RBAC tests for route, control and direct-request denial behavior.
- [ ] Integration tests for each named read or mutation and authoritative refresh.
- [ ] Accessibility and audit-reason tests for privileged operations.

### Required manual tests

- [ ] Run the complete Media moderation outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Supports proof media governance.
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

- ADM-W3D1 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(admin): media moderation`
