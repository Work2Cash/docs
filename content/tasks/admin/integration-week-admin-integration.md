---
id: ADM-INTEGRATION-WEEK
title: Admin Integration Week — Connect Admin to real systems
type: build-task-week
team: Admin Frontend
week: integration
days: 5
status: planned
version: 1.0
last_reviewed: 2026-07-17
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
authority: Approved Stage 3 delivery order and Admin identity/user-management flows
---

# Admin Integration Week — Connect Admin to real systems

> Canonical Phase 3 source pack. Edit the relevant day inside this weekly file; generated weekly human and agent execution plans inherit from it.

## Day 1 of 5 — Monday

### ADM-INT-01 — Identity and User Management Integration

```task-metadata
id: ADM-INT-01
title: Identity and User Management Integration
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved Stage 3 delivery order and Admin identity/user-management flows
related: AF-01, AF-02, AF-03, ADM-W2D1, BE-W1D5, BE-W5D1, MOB-W1D4
delivery_stage: admin-integration
stage_order: 3
legacy_slot: none
```

### Outcome in plain English

The accepted Admin authentication, dashboard and user-management interfaces use real permissioned Backend contracts and reflect persisted Mobile identity, profile, mode, PIN and session outcomes.

### Why it matters

Stage 1 proves that the Admin experience is understandable and usable. This card proves that the same experience is connected to authoritative identity data without weakening permissions or recovery.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA |
| Status | Planned; no date activates this card |
| Delivery stage | Stage 3 — Admin Integration |
| Scheduled slot | No legacy week slot; start after its named Stage 1 and Stage 2 dependencies |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| AF-01, AF-02 and AF-03 | Define Admin entry, dashboard and user-management behavior. |
| ADM-W1D1 through ADM-W2D1 | Supply accepted fixture-driven Admin foundations and user operations. |
| BE-W1D5 and BE-W5D1 | Supply real Admin authentication, dashboard and operational contracts. |
| MOB-W1D4 | Supplies persisted user profile, mode, PIN and session outcomes visible to operations. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-W2D1 | Completes the Stage 1 identity and user-management UI chain. | Its fixture, RBAC, recovery and accessibility evidence is accepted. |
| BE-W1D5 | Supplies Admin authentication and dashboard handlers. | OpenAPI, role accounts and staging handlers pass contract tests. |
| BE-W5D1 | Supplies authoritative operational user queries/actions. | Required user endpoints, audit behavior and seeded data are available. |
| MOB-W1D4 | Produces real profile, mode, PIN and session state. | Mobile and Backend evidence proves the persisted outcomes used by Admin. |

### Integration and acceptance gates

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| Cross-platform identity journey | Proves Mobile changes become safe, accurate Admin state. | Create or change an allowed user state in Mobile, verify it in Admin, exercise denial and stale-state recovery, and retain audit evidence. |

### Required inputs

- Accepted Stage 1 Admin cards, approved contracts, role matrix and redacted staging accounts.
- Backend OpenAPI/examples and Mobile identity outcome evidence.
- Audit, masking, session-expiry and conflict rules.

### Implementation scope

- Replace identity, dashboard and user-management fixtures with production-shaped API adapters.
- Map real loading, empty, forbidden, expired-session, stale and retry behavior.
- Verify every privileged action against Backend authorization and audit responses.
- Remove fixture-only execution paths from release builds while retaining deterministic test fixtures.

### Explicitly out of scope

- Redesigning approved Admin flows or inventing user states.
- Client-only authorization, unrestricted personal data or admin task reassignment.
- Reimplementing Backend or Mobile identity behavior in Admin.

### Expected modules or files

- Admin authentication/session adapter, dashboard queries and user-management API layer.
- RBAC/error mapping, cache invalidation and contract fixtures.
- Component, contract, permission and cross-platform tests.

### Security, permissions and audit

- Backend permission decisions remain authoritative.
- Mask personal and session data by role and purpose.
- Preserve audit actor, reason, previous state, new state and correlation reference.

### Provider dependencies

No new provider is introduced. Any OTP or identity-provider behavior is consumed only through approved Backend contracts.

### Verbal execution guide

Confirm the Stage 1 screens and Stage 2 contracts are accepted. Connect one read path at a time, compare it with the approved fixture shape, then connect permitted mutations and authoritative refresh. Exercise expired sessions, forbidden roles, conflicts and Mobile-originated changes before removing fixture-only release behavior.

### Acceptance criteria

- [ ] Real authentication, dashboard and user-management responses render without redefining approved UI behavior.
- [ ] Mobile-originated identity/profile changes appear after authoritative refresh.
- [ ] Forbidden, expired, stale and failed requests cannot show false success.
- [ ] Privileged actions return and display the required audit reference.

### Required automated tests

- [ ] Contract tests compare real examples with the Stage 1 fixture schema.
- [ ] Permission, session-expiry, cache-refresh and conflict tests pass.
- [ ] Regression tests preserve all AF-01, AF-02 and AF-03 endings.

### Required manual tests

- [ ] Complete one Mobile-to-Admin identity change on staging.
- [ ] Test allowed and forbidden roles, session expiry and a stale update.
- [ ] Verify keyboard access, error announcements and masked data.

### Evidence to attach

- Contract-test output, build identifiers and redacted request/response examples.
- Cross-platform recording and audit references.
- Security, Backend and QA acceptance.

### Definition of done

- [ ] Scope, tests and evidence are complete.
- [ ] Fixture and real-contract shapes agree.
- [ ] Security, privacy, audit and recovery are accepted.
- [ ] ADM-INT-02 can start with the shared integration conventions.

### Blockers and escalation

Record missing contracts, role accounts, seed data or audit behavior with an owner and decision date. Escalate contract conflicts to the Technical and Backend leads and access/privacy conflicts to Security.

### What this unlocks

ADM-INT-02 through ADM-INT-05 can reuse the accepted authentication, error, permission, refresh and audit integration pattern.

### Carry-over rule

Carry the original card with the failed endpoint, state, test and owner named. Do not hide unfinished identity integration inside a later domain card.

### Commit message

`feat(admin-integration): connect identity and user management`

## Day 2 of 5 — Tuesday

### ADM-INT-02 — KYC, Catalog and Media Integration

```task-metadata
id: ADM-INT-02
title: KYC, Catalog and Media Integration
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Risk and Compliance, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved Stage 3 delivery order and KYC/catalog/media flows
related: AF-04, AF-11, AF-13, ADM-W2D2, ADM-W2D3, ADM-W2D5, BE-W2D1, BE-W2D2, BE-W2D3, MOB-W2D1, MOB-W2D2, MOB-W2D3
delivery_stage: admin-integration
stage_order: 3
legacy_slot: none
```

### Outcome in plain English

Admin reviewers use real KYC submissions, catalog records and moderated media produced by Mobile and governed by Backend, with permission, privacy, audit and recovery behavior intact.

### Why it matters

These are sensitive and operationally important domains. Fixture-approved screens are not complete integration until real records, decisions, media access and delayed provider outcomes behave safely.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product, Technical, Backend, Risk, Security and QA leads |
| Status | Planned; no date activates this card |
| Delivery stage | Stage 3 — Admin Integration |
| Scheduled slot | No legacy week slot |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| AF-04, AF-11 and AF-13 | Define KYC, catalog and media operations. |
| ADM-W2D2, ADM-W2D3 and ADM-W2D5 | Supply accepted fixture-driven interfaces. |
| BE-W2D1 through BE-W2D3 | Supply KYC, catalog, location and media authority. |
| MOB-W2D1 through MOB-W2D3 | Produce real submissions and recovery outcomes. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-INT-01 | Supplies the accepted authentication, permission and audit integration pattern. | ADM-INT-01 is accepted. |
| ADM-W2D5 | Completes the relevant Stage 1 Admin UI chain. | KYC, catalog and media fixture evidence is accepted. |
| BE-W2D1, BE-W2D2 and BE-W2D3 | Supply authoritative contracts and records. | OpenAPI, staging handlers, seed data and provider states are available. |
| MOB-W2D1, MOB-W2D2 and MOB-W2D3 | Supply representative real outcomes. | Mobile submission and interruption-recovery evidence is accepted. |

### Integration and acceptance gates

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| Sensitive-domain end to end | Proves submission, review, decision, refresh and recovery across all three platforms. | One KYC decision, one catalog change and one media moderation journey pass on staging with permission and audit evidence. |

### Required inputs

- Accepted Stage 1 cards and approved KYC/data/contract sources.
- Redacted staging records for every state, provider delay and permission level.
- Signed-media, masking, retention and audit rules.

### Implementation scope

- Replace KYC, catalog and media fixtures with authoritative queries and mutations.
- Reconcile pagination, filtering, signed media, conflicts and delayed provider states.
- Preserve reason capture, confirmation, audit references and authoritative refresh.
- Retain fixtures only for automated tests and local deterministic development.

### Explicitly out of scope

- Editing immutable KYC evidence or inventing review/catalog/media outcomes.
- Direct Admin calls to identity providers or unrestricted object storage.
- Paid-provider auto-refresh loops or exposure of full sensitive data.

### Expected modules or files

- Admin KYC, catalog and media API adapters and query keys.
- Sensitive-data reveal, signed-media and mutation-refresh boundaries.
- Contract, permission, accessibility and end-to-end tests.

### Security, permissions and audit

- Require Backend authorization for all reads and mutations.
- Keep KYC and proof media masked, purpose-limited and short-lived.
- Audit every privileged decision with reason and state transition.

### Provider dependencies

Smile ID and object storage remain behind Backend adapters. Admin consumes normalized results and signed access only.

### Verbal execution guide

Start with accepted fixture scenarios, connect their matching reads, and compare every real field and state. Connect mutations only after permissions and audit responses are proven. Run Mobile submissions into each queue, test provider delay and signed-media expiry, then confirm Admin refresh shows authoritative results.

### Acceptance criteria

- [ ] KYC, catalog and media screens use real contracts without losing approved states.
- [ ] Mobile submissions reach the correct Admin queues and details.
- [ ] Decisions, conflicts, provider delays and signed-media expiry recover clearly.
- [ ] Sensitive data and audit rules pass Security and Risk review.

### Required automated tests

- [ ] Contract, mutation-refresh, permission and masking tests pass.
- [ ] Delayed callback, stale record and expired-media recovery tests pass.
- [ ] Fixture schemas remain synchronized with real examples.

### Required manual tests

- [ ] Complete one real staging journey for KYC, catalog and media.
- [ ] Test a forbidden role, concurrent decision and expired media link.
- [ ] Verify keyboard, screen-reader and sensitive-data behavior.

### Evidence to attach

- Redacted cross-platform recordings and request/response examples.
- Contract/security test output and audit references.
- Risk, Security, Backend and QA acceptance.

### Definition of done

- [ ] All three domains pass real-system acceptance.
- [ ] Tests, privacy, audit and recovery evidence are accepted.
- [ ] No release path relies on fixtures.
- [ ] ADM-INT-03 is unblocked.

### Blockers and escalation

Record missing provider states, signed-media behavior, contracts or seed data. Escalate privacy/provider issues to Security/Infrastructure and state conflicts to Technical/Backend leads.

### What this unlocks

Operations can safely act on real identity, catalog and media records, and the team can proceed to task-lifecycle integration.

### Carry-over rule

Name the unfinished domain and exact gate. Do not mark the combined card done while any of KYC, catalog or media integration lacks required evidence.

### Commit message

`feat(admin-integration): connect kyc catalog and media`

## Day 3 of 5 — Wednesday

### ADM-INT-03 — Task Monitoring, Matching and Execution Integration

```task-metadata
id: ADM-INT-03
title: Task Monitoring, Matching and Execution Integration
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Mobile Lead, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved Stage 3 delivery order and task-lifecycle Admin flows
related: AF-05, AF-07, AF-14, ADM-W2D4, ADM-W3D1, ADM-W3D2, ADM-W3D3, BE-W2D5, BE-W3D1, BE-W3D2, BE-W3D3, BE-W3D4, BE-W3D5, MOB-W3D1, MOB-W3D2, MOB-W3D3, MOB-W3D4, MOB-W3D5
delivery_stage: admin-integration
stage_order: 3
legacy_slot: none
```

### Outcome in plain English

Admin can monitor real task creation, discovery, matching and active execution outcomes without taking ownership of participant actions or displaying stale success.

### Why it matters

Task operations cross Mobile, Backend, sockets and Admin. A dedicated integration card prevents early Admin construction from being confused with real-time, persisted operational acceptance.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product, Technical, Backend, Mobile, Security and QA leads |
| Status | Planned; no date activates this card |
| Delivery stage | Stage 3 — Admin Integration |
| Scheduled slot | No legacy week slot |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| AF-05, AF-07 and AF-14 | Define task monitoring, support observation and controlled actions. |
| Stage 1 task-operation cards | Supply accepted list, detail, timeline, matching and confirmation behavior. |
| Backend Week 2 and 3 task cards | Supply authoritative task, matching, execution, chat and tracking state. |
| Mobile Week 3 cards | Supply real participant actions and interruption outcomes. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-INT-02 | Supplies the established Stage 3 integration pattern. | ADM-INT-02 is accepted. |
| ADM-W3D5 | Completes the Stage 1 task-monitoring UI sequence. | Fixture, permission and recovery evidence is accepted. |
| BE-W3D5 | Completes Backend task execution, chat and tracking contracts. | Staging contracts, events and persisted-state recovery pass. |
| MOB-W3D5 | Completes Mobile task execution outcomes. | Real participant journeys and interruption evidence pass. |

### Integration and acceptance gates

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| Full task lifecycle to active execution | Proves REST, events and Admin refresh agree. | A task moves from creation through matching to active execution; Admin shows correct state before and after reconnect, duplicate event and conflict. |

### Required inputs

- Accepted Stage 1 task-operation cards, event/REST contracts and state-transition rules.
- Staging users/tasks covering broadcast, direct offer, interest, selection and active execution.
- Permission, masked-contact and audit rules.

### Implementation scope

- Connect task lists, details, matching, timelines, communication audit and permitted actions.
- Reconcile socket/event hints with authoritative REST refresh.
- Handle duplicates, out-of-order events, stale actions and reconnect.
- Preserve the prohibition on Admin task reassignment.

### Explicitly out of scope

- Moving participant decisions into Admin.
- Admin task reassignment, socket-based direct offers or live-chat disputes.
- Treating socket events as final persisted truth.

### Expected modules or files

- Admin task-operation queries, event adapters and authoritative refresh logic.
- Timeline, matching and controlled-action integrations.
- Contract, event-order, permission and cross-platform tests.

### Security, permissions and audit

- Mask exact locations, phone numbers and proof media by role and task state.
- Enforce every controlled action on Backend and record reason/audit evidence.
- Never expose socket or internal provider secrets.

### Provider dependencies

Maps, FCM, sockets and masked calling are consumed through approved application boundaries; Admin must not call paid providers in refresh loops.

### Verbal execution guide

Create a real task through Mobile, follow it through Backend transitions, and connect each Admin read to the authoritative contract. Add event-driven refresh only after REST state is correct. Exercise matching, active execution, reconnect, duplicate/out-of-order events and a forbidden action, then verify the timeline and audit record.

### Acceptance criteria

- [ ] Real task and matching states render correctly across list, detail and timeline.
- [ ] Events trigger safe refresh and cannot create false persisted state.
- [ ] Mobile actions become visible to Admin after authoritative reconciliation.
- [ ] Controlled actions enforce permissions, reasons and audit.

### Required automated tests

- [ ] Contract and state-transition mapping tests pass.
- [ ] Duplicate, out-of-order, reconnect and stale-action tests pass.
- [ ] Permission and sensitive-data regression tests pass.

### Required manual tests

- [ ] Run one broadcast and one direct-offer journey to active execution.
- [ ] Disconnect/reconnect Admin and trigger a concurrent participant action.
- [ ] Verify denied roles and keyboard-accessible timelines/actions.

### Evidence to attach

- Cross-platform recording, event/REST trace and build identifiers.
- Permission, recovery and audit evidence.
- Mobile, Backend and QA acceptance.

### Definition of done

- [ ] Task-lifecycle integration and all recovery tests pass.
- [ ] No Admin-only state substitutes for Backend truth.
- [ ] Security and audit evidence is accepted.
- [ ] ADM-INT-04 is unblocked.

### Blockers and escalation

Record missing event semantics, contracts, seed journeys or permissions. Escalate state-order conflicts to Technical/Backend leads and flow ambiguity to Product.

### What this unlocks

Operations can observe real task execution safely, and finance/report integration can consume trustworthy lifecycle outcomes.

### Carry-over rule

Carry the exact lifecycle segment and failed acceptance gate. Do not defer an unclear event/state mismatch into hardening.

### Commit message

`feat(admin-integration): connect task monitoring and execution`

## Day 4 of 5 — Thursday

### ADM-INT-04 — Reports, Finance and Payout Integration

```task-metadata
id: ADM-INT-04
title: Reports, Finance and Payout Integration
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Finance Operations, Security and Privacy, QA
status: planned
version: 0.1
last_reviewed: 2026-07-17
authority: Approved Stage 3 delivery order and reports/finance/payout flows
related: AF-06, AF-08, AF-10, AF-22, AF-24, ADM-W4D1, ADM-W4D2, ADM-W4D3, ADM-W4D4, ADM-W4D5, BE-W4D1, BE-W4D2, BE-W4D3, BE-W4D4, MOB-W4D1, MOB-W4D2, MOB-W4D3, MOB-W4D4
delivery_stage: admin-integration
stage_order: 3
legacy_slot: none
```

### Outcome in plain English

Admin reports, disputes, risk actions, finance transactions and payout batches use authoritative lifecycle and ledger records, with safe approval, reconciliation, idempotency and audit behavior.

### Why it matters

Financial and enforcement screens cannot be accepted from fixtures alone. This card proves real money-related state and governed decisions without allowing the frontend to become financial authority.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product, Technical, Backend, Finance Operations, Security and QA leads |
| Status | Planned; no date activates this card |
| Delivery stage | Stage 3 — Admin Integration |
| Scheduled slot | No legacy week slot |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| AF-06, AF-08, AF-10, AF-22 and AF-24 | Define report, risk, finance and payout operations. |
| Admin Week 4 finance/risk cards | Supply accepted fixture-driven interfaces. |
| Backend and Mobile Week 4 cards | Supply real completion, cancellation, report, rating, wallet and withdrawal outcomes. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-INT-03 | Supplies trustworthy task-lifecycle integration. | ADM-INT-03 is accepted. |
| ADM-W4D5 | Completes Stage 1 reports, risk, finance and payout UI. | Fixture, permission and reconciliation evidence is accepted. |
| BE-W4D4 | Supplies lifecycle, reports, ratings, wallet and withdrawal authority. | Ledger, idempotency, audit and staging contracts pass. |
| MOB-W4D4 | Supplies real completion, report, rating and withdrawal outcomes. | Cross-platform staging evidence is accepted. |

### Integration and acceptance gates

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| Financial reconciliation and governed action | Proves Admin reflects Backend ledger truth and cannot duplicate money movement. | Completion-to-settlement, report/risk, withdrawal and payout scenarios reconcile across systems with audit and idempotency evidence. |

### Required inputs

- Accepted Stage 1 cards, financial contracts, ledger rules and permission matrix.
- Redacted staging transactions and payout batches for success, pending, failure and retry.
- Provider reconciliation and incident rules.

### Implementation scope

- Connect reports/disputes, risk enforcement, transactions, withdrawals and payout batches.
- Use Backend-calculated balances, statuses and reconciliation results.
- Implement conflict, pending, duplicate, partial-failure and authoritative-refresh behavior.
- Preserve confirmation, reason, dual-control and audit rules where specified.

### Explicitly out of scope

- Frontend-calculated balances or redirect-based payment proof.
- Direct provider secrets/calls, undocumented manual ledger edits or card-entry-first UX.
- Dispute live chat or hidden permission bypass.

### Expected modules or files

- Admin reports/risk/finance/payout API adapters and reconciliation views.
- Confirmed-action, idempotency/error and audit-reference handling.
- Contract, finance-permission and end-to-end tests.

### Security, permissions and audit

- Backend ledger and provider reconciliation remain authoritative.
- Apply least privilege, reason capture and dual control where required.
- Mask payment identifiers and exclude secrets from logs.

### Provider dependencies

Paystack and Moniepoint remain behind Backend adapters. Admin displays normalized transaction and reconciliation state only.

### Verbal execution guide

Begin with an accepted task lifecycle, create the real financial/report outcomes through Mobile and Backend, then connect Admin reads before mutations. Verify balances and statuses against ledger responses, connect only permitted actions, and exercise pending, duplicate, retry and partial failure. Finish with reconciliation, audit and Finance acceptance.

### Acceptance criteria

- [ ] Real report, risk, transaction, withdrawal and payout states render accurately.
- [ ] No frontend action can create duplicate or unverified money movement.
- [ ] Pending, failed, stale and reconciled states explain the next operational action.
- [ ] Permissions, confirmation, reason and audit requirements pass.

### Required automated tests

- [ ] Contract, ledger-display, idempotency and reconciliation tests pass.
- [ ] Permission, dual-control, stale-state and retry tests pass.
- [ ] Regression test proves redirects are not final payment evidence.

### Required manual tests

- [ ] Run completion-to-settlement, report/risk and withdrawal/payout scenarios.
- [ ] Simulate duplicate submission, delayed provider result and partial failure.
- [ ] Verify restricted roles, redaction and keyboard-accessible confirmations.

### Evidence to attach

- Redacted ledger/reconciliation examples and cross-platform recordings.
- Automated test, audit and provider-sandbox evidence.
- Finance, Security, Backend and QA acceptance.

### Definition of done

- [ ] Every finance/report domain gate passes.
- [ ] Ledger authority, idempotency, permissions and audit are accepted.
- [ ] No release path uses fixture financial truth.
- [ ] ADM-INT-05 is unblocked.

### Blockers and escalation

Record missing ledger contracts, provider states, permissions or seed data. Escalate financial ambiguity to Technical/Finance leads and provider access to Infrastructure.

### What this unlocks

The final support, configuration and operations integration can use trustworthy user, task and finance state.

### Carry-over rule

Carry the exact financial scenario and evidence gap. Never mark the card done with unresolved balance, idempotency or reconciliation behavior.

### Commit message

`feat(admin-integration): connect reports finance and payouts`

## Day 5 of 5 — Friday

### ADM-INT-05 — Support, Configuration and Operations Integration

```task-metadata
id: ADM-INT-05
title: Support, Configuration and Operations Integration
type: build-task
audience: Junior admin developers, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, Infrastructure Lead, Security and Privacy, QA
status: planned
version: 0.2
last_reviewed: 2026-07-17
authority: Approved Stage 3 delivery order and support/configuration/operations flows
related: AF-09, AF-10, AF-12, AF-15, AF-16, AF-18, AF-19, AF-20, AF-21, AF-23, CONTRACT-REFERRAL-001, ADM-W5D5, BE-W4D5, BE-W5D1, BE-W5D2, BE-W5D4, MOB-W4D5, MOB-W5D1, MOB-W5D2
delivery_stage: admin-integration
stage_order: 3
legacy_slot: none
```

### Outcome in plain English

The remaining Admin support, communications, configuration, monitoring and audit tools operate on real Backend and Mobile outcomes, completing Stage 3 before hardening and release work starts.

### Why it matters

Operational completeness requires more than core journeys. Support, notifications, configuration, monitoring and audit must work against real state and fail safely before cross-platform hardening can be meaningful.

### Ownership and status

| Field | Value |
| --- | --- |
| Team | Admin Frontend |
| Owner | Admin Lead or assigned developer |
| Reviewer and acceptor | Product, Technical, Backend, Infrastructure, Security and QA leads |
| Status | Planned; no date activates this card |
| Delivery stage | Stage 3 — Admin Integration |
| Scheduled slot | No legacy week slot |

### Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
| AF-09, AF-10, AF-12, AF-15, AF-16, AF-18 through AF-21 and AF-23 | Define support, referral, communication, configuration, monitoring and audit behavior. |
| CONTRACT-REFERRAL-001 | Defines the permissioned Admin referral reads and decision actions that replace referral fixtures. |
| ADM-W5D5 | Completes the Stage 1 operational UI sequence. |
| Backend Week 4 and 5 operational cards | Supply support, notification, monitoring and audit authority. |
| Mobile support/settings/referral cards | Supply real user preferences, support and notification outcomes. |

### Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
| ADM-INT-04 | Supplies accepted identity, task and finance integration foundations. | ADM-INT-04 is accepted. |
| ADM-W5D5 | Completes all Stage 1 operational Admin interfaces. | Fixture, permission, recovery and accessibility evidence is accepted. |
| BE-W5D4 | Supplies the final Backend operational/monitoring behavior. | Support, notifications, configuration, health and audit contracts pass on staging. |
| MOB-W5D2 | Supplies Mobile settings, support and notification-related outcomes. | Required Mobile outcomes and recovery evidence are accepted. |

### Integration and acceptance gates

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
| Stage 3 operational completion | Proves the portal can support, configure and observe the real platform safely. | Support, notification, configuration, health and audit journeys pass with permissions, cost controls, failure recovery and operational acceptance. |

### Required inputs

- Accepted Stage 1 operational cards and prior Stage 3 integration evidence.
- Backend operational and referral contracts, monitoring fields, audit conventions and role accounts.
- Mobile preference/support outcomes and approved provider cost-control rules.

### Implementation scope

- Connect support, referrals, communications, notifications, configuration, coverage, monitoring, audit and analytics views.
- Implement safe retry, stale configuration, provider delay and partial-outage behavior.
- Verify operational actions refresh authoritative state and return audit evidence.
- Remove fixture-only release paths while retaining deterministic tests.

### Explicitly out of scope

- Live-chat disputes, secret exposure or paid-provider polling loops.
- Client-side configuration authority or undocumented emergency actions.
- Redefining support, notification or monitoring contracts.

### Expected modules or files

- Admin support/configuration/monitoring/audit adapters and query boundaries.
- Provider-status, retry, permission and cache-refresh handling.
- Contract, cost-control, operational and cross-platform tests.

### Security, permissions and audit

- Enforce least privilege for configuration, communication and audit access.
- Never expose provider secrets, real phone numbers or unnecessary support evidence.
- Audit privileged configuration and communication actions with reasons.

### Provider dependencies

FCM, Termii, Sentry, maps and storage are consumed through Backend-normalized state. No automatic paid-provider refresh loop is allowed.

### Verbal execution guide

Use the accepted fixture states as the contract checklist. Connect support and communications, then configuration, health and audit reads. Add permitted mutations with authoritative refresh and audit evidence. Exercise provider delay, partial outage, forbidden roles and stale configuration, then complete an operational dry run before handing the platform to Stage 4.

### Acceptance criteria

- [ ] Real support, notification, configuration, monitoring and audit state renders correctly.
- [ ] Operational actions enforce permissions, reasons, cost controls and audit.
- [ ] Provider delay, partial outage, stale configuration and retry recover clearly.
- [ ] No release path depends on fixtures or exposes secrets/sensitive data.

### Required automated tests

- [ ] Contract, permission, refresh and audit tests pass.
- [ ] Provider-delay, partial-outage and cost-control tests pass.
- [ ] Fixture schemas remain synchronized with real examples.

### Required manual tests

- [ ] Run one support, notification, configuration and monitoring journey on staging.
- [ ] Test restricted roles, provider delay and stale configuration.
- [ ] Complete the Stage 3 operational handoff review.

### Evidence to attach

- Redacted recordings, request/response examples and monitoring/audit references.
- Automated, provider-sandbox and cost-control evidence.
- Infrastructure, Security, Backend and QA acceptance.

### Definition of done

- [ ] All Stage 3 domains are integrated and accepted.
- [ ] Operational, permission, provider and recovery evidence passes.
- [ ] No release path uses fixture state.
- [ ] ADM-W6D1 and Stage 4 are unblocked.

### Blockers and escalation

Record missing operational contracts, provider evidence, permissions or environments. Escalate provider/monitoring issues to Infrastructure and contract/state issues to Technical/Backend leads.

### What this unlocks

ADM-W6D1 and the complete cross-platform hardening, release-candidate and freeze stage can begin.

### Carry-over rule

Carry the exact operational domain and failed gate. Do not start Stage 4 while Stage 3 completion evidence remains missing.

### Commit message

`feat(admin-integration): connect support config and operations`
