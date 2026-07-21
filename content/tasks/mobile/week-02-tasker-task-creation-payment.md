---
id: MOB-WEEK-02
title: Mobile Week 2 — Tasker Activation, Task Creation and Funding
type: build-task-week
team: Mobile
week: 2
days: 5
status: planned
version: 1.0
last_reviewed: 2026-07-17
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Risk and Compliance, QA
authority: Approved MF-05 and SF-03 behavior with approved KYC contracts
---

# Mobile Week 2 — Tasker Activation, Task Creation and Funding

> Canonical Phase 3 source pack. Edit the relevant day inside this weekly file; generated weekly human and agent execution plans inherit from it.

## Day 1 of 5 — Monday

### MOB-W2D1 — Tasker Activation and KYC

```task-metadata
id: MOB-W2D1
title: Tasker Activation and KYC
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Risk and Compliance, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved MF-05 and SF-03 behavior with approved KYC contracts
related: MF-05, SF-03, BE-W2D1, PILOT-KYC-CONTRACT-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W2D1
```

### Outcome in plain English

A signed-in user can enter Tasker mode, complete the required profile and KYC steps, understand every pending or failed state, leave safely and resume later from the backend's authoritative checkpoint.

### Why it matters

Taskers must be verified before they can accept work. This card gives the user a clear, recoverable activation experience without letting the app invent approval or expose sensitive identity data.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned mobile developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Risk and Compliance, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 2, Day 1 — 13 July 2026 legacy planning date |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-05 — Tasker Activation | Defines entry, steps, endings, next actions and recovery. |
| SF-03 — Tasker KYC | Defines reusable verification inputs, outputs and return behavior. |
| BE-W2D1 — Tasker and KYC APIs | Provides authoritative profile, submission and status contracts. |
| KYC Review Contract Group pilot v0.2 | Defines the exact backend states the UI must present. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| MOB-W1D5 | Activation begins after the Mobile identity, profile, routing and permission foundation. | The prior Mobile construction chain through MOB-W1D5 is accepted. |
| Approved KYC copy and evidence rules | KYC screens handle sensitive data and regulated decisions. | Product and Risk/Compliance accept the visible copy and masking behavior. |
| Provider SDK or hosted-flow decision | Determines capture and return handling. | Mobile and Backend leads record the chosen integration and recovery callback. |

### Integration and acceptance gates

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W2D1 | Supplies authoritative KYC state and real staging handlers. It does not block contract-compatible Mobile construction. | Mobile contract tests match BE-W2D1, then success and recovery paths pass against staging without local approval truth. |

### Required inputs

- MF-05 and SF-03 agent Markdown.
- BE-W2D1 OpenAPI or approved contract examples.
- Approved screen design/copy for profile, NIN/BVN, face capture, pending, rejected and re-verification states.
- Camera and network permission behavior.
- Non-production test identities and media.

### Implementation scope

- Add Tasker activation entry and progress summary.
- Implement required Tasker profile fields and validation.
- Implement NIN/BVN entry, face capture and consent/error states.
- Present pending, approved, rejected and re-verification-required states from backend data.
- Resume from the last authoritative checkpoint after app restart, provider return or network failure.
- Prevent task browsing/acceptance until the backend reports approved eligibility.

### Explicitly out of scope

- Approving KYC locally or deriving approval from a provider redirect.
- Persisting raw identity values or unrestricted proof media in logs or analytics.
- Paid-provider auto-refresh loops.
- Task discovery and acceptance UI beyond the locked-state handoff.
- Inventing backend status values or response fields.

### Expected modules or files

- Mobile Tasker activation and KYC feature areas.
- Routing and status-recovery integration.
- Camera/permission and provider-return adapters.
- State-management, API-client and presentation tests.

### Security, permissions and audit

- Mask identity values after entry and prevent sensitive screenshots/logging where supported.
- Explain camera use before requesting permission and provide settings recovery after denial.
- Keep evidence URLs private and short-lived.
- Treat backend status as authoritative and do not cache an approval as permanent local truth.
- Never display another user's KYC evidence.

### Provider dependencies

The UI may use the approved Smile ID integration path, but it must return to REST status recovery. If the provider is unavailable, show a clear pending/retry state without repeatedly triggering paid checks.

### Verbal execution guide

Start from the approved MF-05 entry and show the user's current activation checkpoint. Collect only the missing profile information, then run the reusable SF-03 KYC steps. Submit through BE-W2D1, display the returned state, and stop at a clear ending such as pending, approved, rejected or re-verification required. On every return or retry, reload authoritative status before deciding what the user sees next.

### Acceptance criteria

- [ ] Every MF-05 entry and ending is visible and understandable.
- [ ] Required profile, identity and face-capture inputs validate before submission.
- [ ] The app resumes the correct step after termination, network loss or provider return.
- [ ] Pending, rejection and re-verification states explain the next action.
- [ ] Task browsing/acceptance remains locked until backend eligibility is approved.
- [ ] Sensitive values and evidence do not appear in logs, analytics or unrelated screens.

### Required automated tests

- State-management tests for every KYC status and next action.
- Widget tests for validation, masking, loading, error and permission recovery.
- API-client contract tests against BE-W2D1 examples.
- Navigation tests for interruption, app restart and provider return.
- Regression test proving local state cannot unlock Tasker work.

### Required manual tests

- Complete success, rejection and re-verification journeys on a supported Android device.
- Deny camera permission, recover through settings and resume.
- Kill the app during submission and confirm correct REST recovery.
- Test slow/offline provider return without duplicate submission.
- Verify TalkBack labels, focus order and error announcements.

### Evidence to attach

- Screen recording of the happy path and one recovery path.
- Test output and device/build details.
- Redacted screenshots for every terminal state.
- Network evidence showing status recovery after provider return.
- QA defect links or acceptance record.

### Definition of done

- [ ] Scope and acceptance criteria are complete.
- [ ] Automated and manual tests pass with evidence.
- [ ] Product, Risk/Compliance, Backend and QA accept the result.
- [ ] No sensitive-data or local-approval finding remains open.
- [ ] Documentation and task status are updated from evidence.

### Blockers and escalation

Record missing contracts, designs, copy, provider access or device capability with an owner and next decision. Escalate contract conflicts to the Backend and Technical leads, product-copy conflicts to Product/Risk, and provider issues to Infrastructure. Do not fill gaps with invented behavior.

### What this unlocks

Approved Taskers can proceed to discovery and acceptance work. ADM-W2D2 also receives real activation submissions for its KYC review workflow.

### Carry-over rule

Carry over only the unfinished provider/device/recovery portion with its evidence gap named. A visually complete screen is not done while authoritative status recovery or the eligibility lock is missing.

### Commit message

`feat(mobile-kyc): implement tasker activation and recovery`

## Day 2 of 5 — Tuesday

### MOB-W2D2 — Catalog and task draft

```task-metadata
id: MOB-W2D2
title: Catalog and task draft
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-06, MOB-W2D1, BE-W2D2, CONTRACT-001, DATA-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W2D2
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Implement category/type selection, task description, amount, required arrival time and draft saving.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /catalog/categories, /catalog/task-types, /task-owner/tasks/drafts. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Launch categories: Home, Errands, Office, Support.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 2, Day 2 — Tue 14 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-02-tasker-task-creation-payment.md, W2D2 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-06 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| MOB-W2D1 | Provides tasker activation and kyc required before this task can be accepted. | MOB-W2D1 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /catalog/categories, /catalog/task-types, /task-owner/tasks/drafts. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W2D2 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for MF-06 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Catalog and task draft.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement category/type selection, task description, amount, required arrival time and draft saving.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Launch categories: Home, Errands, Office, Support.

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
- [ ] The output rule is satisfied: Launch categories: Home, Errands, Office, Support.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Catalog and task draft outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Launch categories: Home, Errands, Office, Support.
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

- MOB-W2D3 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): catalog and task draft`

## Day 3 of 5 — Wednesday

### MOB-W2D3 — Location and media

```task-metadata
id: MOB-W2D3
title: Location and media
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-06, SF-04, SF-05, SF-09, MOB-W2D2, BE-W2D3, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W2D3
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Implement GPS/manual address, geocode, pin confirmation, permission recovery, proof media upload UI.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /location/geocode, /location/confirm-pin, /task-owner/tasks/{taskId}/media. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Task site must be in Nigeria.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
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
| SF-09 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| MOB-W2D2 | Provides catalog and task draft required before this task can be accepted. | MOB-W2D2 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /location/geocode, /location/confirm-pin, /task-owner/tasks/{taskId}/media. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W2D3 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for MF-06, SF-04, SF-05, SF-09 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Location and media.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement GPS/manual address, geocode, pin confirmation, permission recovery, proof media upload UI.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Task site must be in Nigeria.

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

Google Maps Platform, Approved object storage. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Task site must be in Nigeria.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Location and media outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Task site must be in Nigeria.
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

- MOB-W2D4 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): location and media`

## Day 4 of 5 — Thursday

### MOB-W2D4 — Payment and escrow funding

```task-metadata
id: MOB-W2D4
title: Payment and escrow funding
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-06, SF-06, SF-07, SF-10, MOB-W2D3, BE-W2D4, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W2D4
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Implement payment review, task amount + fee breakdown, Paystack/Moniepoint redirect/status, payment pending/recovery.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /payment-intent, /payments/verify, task status endpoint. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Do not mark paid from redirect alone.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
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
| SF-10 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| MOB-W2D3 | Provides location and media required before this task can be accepted. | MOB-W2D3 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /payment-intent, /payments/verify, task status endpoint. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W2D4 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for MF-06, SF-06, SF-07, SF-10 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Payment and escrow funding.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement payment review, task amount + fee breakdown, Paystack/Moniepoint redirect/status, payment pending/recovery.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Do not mark paid from redirect alone.
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
- [ ] The output rule is satisfied: Do not mark paid from redirect alone.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Payment and escrow funding outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Do not mark paid from redirect alone.
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

- MOB-W2D5 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): payment and escrow funding`

## Day 5 of 5 — Friday

### MOB-W2D5 — Broadcast and direct offer

```task-metadata
id: MOB-W2D5
title: Broadcast and direct offer
type: build-task
audience: Junior mobile developers, QA, AI agents
owner: Mobile Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: MF-06, MF-08, MOB-W2D4, BE-W2D5, CONTRACT-001, DATA-001, PROVIDER-001
delivery_stage: mobile-backend-construction
stage_order: 2
legacy_slot: W2D5
```

### Outcome in plain English

When accepted, the Mobile team will have delivered this demonstrable outcome: Implement funded task publish, favorites entry, direct offer send path, offer pending/expired states.

### Why it matters

This work matters because the approved plan names this dependency or handoff: /broadcast, /favorites/taskers, /direct-offers. Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: Direct offers are REST/FCM, not socket-based.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Mobile |
| Owner | Mobile Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, QA |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | Stage 2 — Mobile and Backend Construction |
| Scheduled slot | Week 2, Day 5 — Fri 17 Jul 2026 legacy planning date |
| Legacy row | documents/agent-md/weeks/week-02-tasker-task-creation-payment.md, W2D5 |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| MF-06 | Defines approved behavior, states or handoffs that this task must preserve. |
| MF-08 | Defines approved behavior, states or handoffs that this task must preserve. |
| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |
| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |
| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| MOB-W2D4 | Provides payment and escrow funding required before this task can be accepted. | MOB-W2D4 is accepted, or its explicitly required contract/stub and evidence are available. |
| Legacy dependency | /broadcast, /favorites/taskers, /direct-offers. | The named contract, state, environment or prior outcome is demonstrably available. |

### Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| BE-W2D5 | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |

### Required inputs

- Agent Markdown for MF-06, MF-08 or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for Broadcast and direct offer.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

### Implementation scope

- Implement funded task publish, favorites entry, direct offer send path, offer pending/expired states.
- Preserve the dependency and output rule from the approved legacy row.
- Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome.
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

### Explicitly out of scope

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Direct offers are REST/FCM, not socket-based.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
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

Firebase Cloud Messaging. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.

### Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

### Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: Direct offers are REST/FCM, not socket-based.
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

### Required automated tests

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] API/socket contract tests for every named dependency.
- [ ] Navigation or integration test proving interruption resumes from backend truth.

### Required manual tests

- [ ] Run the complete Broadcast and direct offer outcome in the target environment using non-production data.
- [ ] Exercise one dependency failure and confirm recovery does not show false success.
- [ ] Verify the legacy output rule: Direct offers are REST/FCM, not socket-based.
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

- MOB-W3D1 can consume this task's accepted output or handoff.

### Carry-over rule

Move this task to `carried-over` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

### Commit message

`feat(mobile): broadcast and direct offer`
