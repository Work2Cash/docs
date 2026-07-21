# Work2Cash Admin — Integration Week: Connect Admin to real systems

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Replace Admin fixtures with real permissioned Backend contracts and persisted Mobile outcomes, domain by domain.

## Before the week starts

Admin Weeks 1–5, Mobile Weeks 1–5 and Backend Weeks 1–5 are accepted with real contract and staging evidence.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | ADM-INT-01 — Identity and User Management Integration | ADM-W2D1, BE-W1D5, BE-W5D1, MOB-W1D4 | The accepted Admin authentication, dashboard and user-management interfaces use real permissioned Backend contracts and reflect persisted Mobile identity, profile, mode, PIN and session outcomes. | `feat(admin-integration): connect identity and user management` |
| Day 2 — Tuesday | ADM-INT-02 — KYC, Catalog and Media Integration | ADM-INT-01, ADM-W2D5 | Admin reviewers use real KYC submissions, catalog records and moderated media produced by Mobile and governed by Backend, with permission, privacy, audit and recovery behavior intact. | `feat(admin-integration): connect kyc catalog and media` |
| Day 3 — Wednesday | ADM-INT-03 — Task Monitoring, Matching and Execution Integration | ADM-INT-02, ADM-W3D5, BE-W3D5, MOB-W3D5 | Admin can monitor real task creation, discovery, matching and active execution outcomes without taking ownership of participant actions or displaying stale success. | `feat(admin-integration): connect task monitoring and execution` |
| Day 4 — Thursday | ADM-INT-04 — Reports, Finance and Payout Integration | ADM-INT-03, ADM-W4D5, BE-W4D4, MOB-W4D4 | Admin reports, disputes, risk actions, finance transactions and payout batches use authoritative lifecycle and ledger records, with safe approval, reconciliation, idempotency and audit behavior. | `feat(admin-integration): connect reports finance and payouts` |
| Day 5 — Friday | ADM-INT-05 — Support, Configuration and Operations Integration | ADM-INT-04, ADM-W5D5, BE-W5D4, MOB-W5D2 | The remaining Admin support, communications, configuration, monitoring and audit tools operate on real Backend and Mobile outcomes, completing Stage 3 before hardening and release work starts. | `feat(admin-integration): connect support config and operations` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — ADM-INT-01: Identity and User Management Integration

> **Day 1 starts only after:** ADM-W2D1, BE-W1D5, BE-W5D1, MOB-W1D4.  
> **Day 1 finishes only when:** The accepted Admin authentication, dashboard and user-management interfaces use real permissioned Backend contracts and reflect persisted Mobile identity, profile, mode, PIN and session outcomes.

**Today's goal:** The accepted Admin authentication, dashboard and user-management interfaces use real permissioned Backend contracts and reflect persisted Mobile identity, profile, mode, PIN and session outcomes.

**Why today:** Stage 1 proves that the Admin experience is understandable and usable. This card proves that the same experience is connected to authoritative identity data without weakening permissions or recovery.

**Status:** planned

### Before you start

- ADM-W2D1 is accepted or its required interface is demonstrably ready.
- BE-W1D5 is accepted or its required interface is demonstrably ready.
- BE-W5D1 is accepted or its required interface is demonstrably ready.
- MOB-W1D4 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Replace identity, dashboard and user-management fixtures with production-shaped API adapters.
2. Map real loading, empty, forbidden, expired-session, stale and retry behavior.
3. Verify every privileged action against Backend authorization and audit responses.
4. Remove fixture-only execution paths from release builds while retaining deterministic test fixtures.

### Technical rules

- Do not: Redesigning approved Admin flows or inventing user states.
- Do not: Client-only authorization, unrestricted personal data or admin task reassignment.
- Do not: Reimplementing Backend or Mobile identity behavior in Admin.
- Required references: AF-01, AF-02, AF-03.

### Tests for today

- [ ] Contract tests compare real examples with the Stage 1 fixture schema.
- [ ] Permission, session-expiry, cache-refresh and conflict tests pass.
- [ ] Complete one Mobile-to-Admin identity change on staging.

### End-of-day result

- [ ] The accepted Admin authentication, dashboard and user-management interfaces use real permissioned Backend contracts and reflect persisted Mobile identity, profile, mode, PIN and session outcomes.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin-integration): connect identity and user management`

**What comes next:** The next day can use this accepted result.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-INT-01 — Identity and User Management Integration**.

Expected result: The accepted Admin authentication, dashboard and user-management interfaces use real permissioned Backend contracts and reflect persisted Mobile identity, profile, mode, PIN and session outcomes.

Why this task matters: Stage 1 proves that the Admin experience is understandable and usable. This card proves that the same experience is connected to authoritative identity data without weakening permissions or recovery.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: AF-01, AF-02, AF-03.

#### Before changing code

- Confirm ADM-W2D1 is accepted or its required interface is ready.
- Confirm BE-W1D5 is accepted or its required interface is ready.
- Confirm BE-W5D1 is accepted or its required interface is ready.
- Confirm MOB-W1D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Replace identity, dashboard and user-management fixtures with production-shaped API adapters.
- Map real loading, empty, forbidden, expired-session, stale and retry behavior.
- Verify every privileged action against Backend authorization and audit responses.
- Remove fixture-only execution paths from release builds while retaining deterministic test fixtures.

#### Guardrails

- Do not: Redesigning approved Admin flows or inventing user states.
- Do not: Client-only authorization, unrestricted personal data or admin task reassignment.
- Do not: Reimplementing Backend or Mobile identity behavior in Admin.

#### Verify

- [ ] Contract tests compare real examples with the Stage 1 fixture schema.
- [ ] Permission, session-expiry, cache-refresh and conflict tests pass.
- [ ] Complete one Mobile-to-Admin identity change on staging.
- [ ] The accepted Admin authentication, dashboard and user-management interfaces use real permissioned Backend contracts and reflect persisted Mobile identity, profile, mode, PIN and session outcomes.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin-integration): connect identity and user management`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — ADM-INT-02: KYC, Catalog and Media Integration

> **Day 2 starts only after:** ADM-INT-01, ADM-W2D5.  
> **Day 2 finishes only when:** Admin reviewers use real KYC submissions, catalog records and moderated media produced by Mobile and governed by Backend, with permission, privacy, audit and recovery behavior intact.

**Today's goal:** Admin reviewers use real KYC submissions, catalog records and moderated media produced by Mobile and governed by Backend, with permission, privacy, audit and recovery behavior intact.

**Why today:** These are sensitive and operationally important domains. Fixture-approved screens are not complete integration until real records, decisions, media access and delayed provider outcomes behave safely.

**Status:** planned

### Before you start

- ADM-INT-01 is accepted or its required interface is demonstrably ready.
- ADM-W2D5 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Replace KYC, catalog and media fixtures with authoritative queries and mutations.
2. Reconcile pagination, filtering, signed media, conflicts and delayed provider states.
3. Preserve reason capture, confirmation, audit references and authoritative refresh.
4. Retain fixtures only for automated tests and local deterministic development.

### Technical rules

- Do not: Editing immutable KYC evidence or inventing review/catalog/media outcomes.
- Do not: Direct Admin calls to identity providers or unrestricted object storage.
- Do not: Paid-provider auto-refresh loops or exposure of full sensitive data.
- Required references: AF-04, AF-11, AF-13.

### Tests for today

- [ ] Contract, mutation-refresh, permission and masking tests pass.
- [ ] Delayed callback, stale record and expired-media recovery tests pass.
- [ ] Complete one real staging journey for KYC, catalog and media.

### End-of-day result

- [ ] Admin reviewers use real KYC submissions, catalog records and moderated media produced by Mobile and governed by Backend, with permission, privacy, audit and recovery behavior intact.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin-integration): connect kyc catalog and media`

**What comes next:** The next day can use this accepted result.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-INT-02 — KYC, Catalog and Media Integration**.

Expected result: Admin reviewers use real KYC submissions, catalog records and moderated media produced by Mobile and governed by Backend, with permission, privacy, audit and recovery behavior intact.

Why this task matters: These are sensitive and operationally important domains. Fixture-approved screens are not complete integration until real records, decisions, media access and delayed provider outcomes behave safely.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: AF-04, AF-11, AF-13.

#### Before changing code

- Confirm ADM-INT-01 is accepted or its required interface is ready.
- Confirm ADM-W2D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Replace KYC, catalog and media fixtures with authoritative queries and mutations.
- Reconcile pagination, filtering, signed media, conflicts and delayed provider states.
- Preserve reason capture, confirmation, audit references and authoritative refresh.
- Retain fixtures only for automated tests and local deterministic development.

#### Guardrails

- Do not: Editing immutable KYC evidence or inventing review/catalog/media outcomes.
- Do not: Direct Admin calls to identity providers or unrestricted object storage.
- Do not: Paid-provider auto-refresh loops or exposure of full sensitive data.

#### Verify

- [ ] Contract, mutation-refresh, permission and masking tests pass.
- [ ] Delayed callback, stale record and expired-media recovery tests pass.
- [ ] Complete one real staging journey for KYC, catalog and media.
- [ ] Admin reviewers use real KYC submissions, catalog records and moderated media produced by Mobile and governed by Backend, with permission, privacy, audit and recovery behavior intact.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin-integration): connect kyc catalog and media`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — ADM-INT-03: Task Monitoring, Matching and Execution Integration

> **Day 3 starts only after:** ADM-INT-02, ADM-W3D5, BE-W3D5, MOB-W3D5.  
> **Day 3 finishes only when:** Admin can monitor real task creation, discovery, matching and active execution outcomes without taking ownership of participant actions or displaying stale success.

**Today's goal:** Admin can monitor real task creation, discovery, matching and active execution outcomes without taking ownership of participant actions or displaying stale success.

**Why today:** Task operations cross Mobile, Backend, sockets and Admin. A dedicated integration card prevents early Admin construction from being confused with real-time, persisted operational acceptance.

**Status:** planned

### Before you start

- ADM-INT-02 is accepted or its required interface is demonstrably ready.
- ADM-W3D5 is accepted or its required interface is demonstrably ready.
- BE-W3D5 is accepted or its required interface is demonstrably ready.
- MOB-W3D5 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Connect task lists, details, matching, timelines, communication audit and permitted actions.
2. Reconcile socket/event hints with authoritative REST refresh.
3. Handle duplicates, out-of-order events, stale actions and reconnect.
4. Preserve the prohibition on Admin task reassignment.

### Technical rules

- Do not: Moving participant decisions into Admin.
- Do not: Admin task reassignment, socket-based direct offers or live-chat disputes.
- Do not: Treating socket events as final persisted truth.
- Required references: AF-05, AF-07, AF-14.

### Tests for today

- [ ] Contract and state-transition mapping tests pass.
- [ ] Duplicate, out-of-order, reconnect and stale-action tests pass.
- [ ] Run one broadcast and one direct-offer journey to active execution.

### End-of-day result

- [ ] Admin can monitor real task creation, discovery, matching and active execution outcomes without taking ownership of participant actions or displaying stale success.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin-integration): connect task monitoring and execution`

**What comes next:** The next day can use this accepted result.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-INT-03 — Task Monitoring, Matching and Execution Integration**.

Expected result: Admin can monitor real task creation, discovery, matching and active execution outcomes without taking ownership of participant actions or displaying stale success.

Why this task matters: Task operations cross Mobile, Backend, sockets and Admin. A dedicated integration card prevents early Admin construction from being confused with real-time, persisted operational acceptance.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: AF-05, AF-07, AF-14.

#### Before changing code

- Confirm ADM-INT-02 is accepted or its required interface is ready.
- Confirm ADM-W3D5 is accepted or its required interface is ready.
- Confirm BE-W3D5 is accepted or its required interface is ready.
- Confirm MOB-W3D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Connect task lists, details, matching, timelines, communication audit and permitted actions.
- Reconcile socket/event hints with authoritative REST refresh.
- Handle duplicates, out-of-order events, stale actions and reconnect.
- Preserve the prohibition on Admin task reassignment.

#### Guardrails

- Do not: Moving participant decisions into Admin.
- Do not: Admin task reassignment, socket-based direct offers or live-chat disputes.
- Do not: Treating socket events as final persisted truth.

#### Verify

- [ ] Contract and state-transition mapping tests pass.
- [ ] Duplicate, out-of-order, reconnect and stale-action tests pass.
- [ ] Run one broadcast and one direct-offer journey to active execution.
- [ ] Admin can monitor real task creation, discovery, matching and active execution outcomes without taking ownership of participant actions or displaying stale success.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin-integration): connect task monitoring and execution`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — ADM-INT-04: Reports, Finance and Payout Integration

> **Day 4 starts only after:** ADM-INT-03, ADM-W4D5, BE-W4D4, MOB-W4D4.  
> **Day 4 finishes only when:** Admin reports, disputes, risk actions, finance transactions and payout batches use authoritative lifecycle and ledger records, with safe approval, reconciliation, idempotency and audit behavior.

**Today's goal:** Admin reports, disputes, risk actions, finance transactions and payout batches use authoritative lifecycle and ledger records, with safe approval, reconciliation, idempotency and audit behavior.

**Why today:** Financial and enforcement screens cannot be accepted from fixtures alone. This card proves real money-related state and governed decisions without allowing the frontend to become financial authority.

**Status:** planned

### Before you start

- ADM-INT-03 is accepted or its required interface is demonstrably ready.
- ADM-W4D5 is accepted or its required interface is demonstrably ready.
- BE-W4D4 is accepted or its required interface is demonstrably ready.
- MOB-W4D4 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Connect reports/disputes, risk enforcement, transactions, withdrawals and payout batches.
2. Use Backend-calculated balances, statuses and reconciliation results.
3. Implement conflict, pending, duplicate, partial-failure and authoritative-refresh behavior.
4. Preserve confirmation, reason, dual-control and audit rules where specified.

### Technical rules

- Do not: Frontend-calculated balances or redirect-based payment proof.
- Do not: Direct provider secrets/calls, undocumented manual ledger edits or card-entry-first UX.
- Do not: Dispute live chat or hidden permission bypass.
- Required references: AF-06, AF-08, AF-10, AF-22, AF-24.

### Tests for today

- [ ] Contract, ledger-display, idempotency and reconciliation tests pass.
- [ ] Permission, dual-control, stale-state and retry tests pass.
- [ ] Run completion-to-settlement, report/risk and withdrawal/payout scenarios.

### End-of-day result

- [ ] Admin reports, disputes, risk actions, finance transactions and payout batches use authoritative lifecycle and ledger records, with safe approval, reconciliation, idempotency and audit behavior.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin-integration): connect reports finance and payouts`

**What comes next:** The next day can use this accepted result.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-INT-04 — Reports, Finance and Payout Integration**.

Expected result: Admin reports, disputes, risk actions, finance transactions and payout batches use authoritative lifecycle and ledger records, with safe approval, reconciliation, idempotency and audit behavior.

Why this task matters: Financial and enforcement screens cannot be accepted from fixtures alone. This card proves real money-related state and governed decisions without allowing the frontend to become financial authority.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: AF-06, AF-08, AF-10, AF-22, AF-24.

#### Before changing code

- Confirm ADM-INT-03 is accepted or its required interface is ready.
- Confirm ADM-W4D5 is accepted or its required interface is ready.
- Confirm BE-W4D4 is accepted or its required interface is ready.
- Confirm MOB-W4D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Connect reports/disputes, risk enforcement, transactions, withdrawals and payout batches.
- Use Backend-calculated balances, statuses and reconciliation results.
- Implement conflict, pending, duplicate, partial-failure and authoritative-refresh behavior.
- Preserve confirmation, reason, dual-control and audit rules where specified.

#### Guardrails

- Do not: Frontend-calculated balances or redirect-based payment proof.
- Do not: Direct provider secrets/calls, undocumented manual ledger edits or card-entry-first UX.
- Do not: Dispute live chat or hidden permission bypass.

#### Verify

- [ ] Contract, ledger-display, idempotency and reconciliation tests pass.
- [ ] Permission, dual-control, stale-state and retry tests pass.
- [ ] Run completion-to-settlement, report/risk and withdrawal/payout scenarios.
- [ ] Admin reports, disputes, risk actions, finance transactions and payout batches use authoritative lifecycle and ledger records, with safe approval, reconciliation, idempotency and audit behavior.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin-integration): connect reports finance and payouts`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — ADM-INT-05: Support, Configuration and Operations Integration

> **Day 5 starts only after:** ADM-INT-04, ADM-W5D5, BE-W5D4, MOB-W5D2.  
> **Day 5 finishes only when:** The remaining Admin support, communications, configuration, monitoring and audit tools operate on real Backend and Mobile outcomes, completing Stage 3 before hardening and release work starts.

**Today's goal:** The remaining Admin support, communications, configuration, monitoring and audit tools operate on real Backend and Mobile outcomes, completing Stage 3 before hardening and release work starts.

**Why today:** Operational completeness requires more than core journeys. Support, notifications, configuration, monitoring and audit must work against real state and fail safely before cross-platform hardening can be meaningful.

**Status:** planned

### Before you start

- ADM-INT-04 is accepted or its required interface is demonstrably ready.
- ADM-W5D5 is accepted or its required interface is demonstrably ready.
- BE-W5D4 is accepted or its required interface is demonstrably ready.
- MOB-W5D2 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Connect support, referrals, communications, notifications, configuration, coverage, monitoring, audit and analytics views.
2. Implement safe retry, stale configuration, provider delay and partial-outage behavior.
3. Verify operational actions refresh authoritative state and return audit evidence.
4. Remove fixture-only release paths while retaining deterministic tests.

### Technical rules

- Do not: Live-chat disputes, secret exposure or paid-provider polling loops.
- Do not: Client-side configuration authority or undocumented emergency actions.
- Do not: Redefining support, notification or monitoring contracts.
- Required references: CONTRACT-REFERRAL-001, AF-09, AF-10, AF-12, AF-15, AF-16, AF-18, AF-19, AF-20, AF-21.

### Tests for today

- [ ] Contract, permission, refresh and audit tests pass.
- [ ] Provider-delay, partial-outage and cost-control tests pass.
- [ ] Run one support, notification, configuration and monitoring journey on staging.

### End-of-day result

- [ ] The remaining Admin support, communications, configuration, monitoring and audit tools operate on real Backend and Mobile outcomes, completing Stage 3 before hardening and release work starts.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(admin-integration): connect support config and operations`

**What comes next:** The next day can use this accepted result.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **ADM-INT-05 — Support, Configuration and Operations Integration**.

Expected result: The remaining Admin support, communications, configuration, monitoring and audit tools operate on real Backend and Mobile outcomes, completing Stage 3 before hardening and release work starts.

Why this task matters: Operational completeness requires more than core journeys. Support, notifications, configuration, monitoring and audit must work against real state and fail safely before cross-platform hardening can be meaningful.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Admin Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: AF-09, AF-10, AF-12, AF-15, AF-16, AF-18, AF-19, AF-20, AF-21, AF-23, CONTRACT-REFERRAL-001.

#### Before changing code

- Confirm ADM-INT-04 is accepted or its required interface is ready.
- Confirm ADM-W5D5 is accepted or its required interface is ready.
- Confirm BE-W5D4 is accepted or its required interface is ready.
- Confirm MOB-W5D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Connect support, referrals, communications, notifications, configuration, coverage, monitoring, audit and analytics views.
- Implement safe retry, stale configuration, provider delay and partial-outage behavior.
- Verify operational actions refresh authoritative state and return audit evidence.
- Remove fixture-only release paths while retaining deterministic tests.

#### Guardrails

- Do not: Live-chat disputes, secret exposure or paid-provider polling loops.
- Do not: Client-side configuration authority or undocumented emergency actions.
- Do not: Redefining support, notification or monitoring contracts.

#### Verify

- [ ] Contract, permission, refresh and audit tests pass.
- [ ] Provider-delay, partial-outage and cost-control tests pass.
- [ ] Run one support, notification, configuration and monitoring journey on staging.
- [ ] The remaining Admin support, communications, configuration, monitoring and audit tools operate on real Backend and Mobile outcomes, completing Stage 3 before hardening and release work starts.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(admin-integration): connect support config and operations`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Admin daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
