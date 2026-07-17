# Work2Cash Backend — Week 6: Hardening, Security and Performance

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Fix integration defects, harden performance, security and provider behavior, improve recovery paths and close major technical gaps.

## Before the week starts

The Backend Week 5 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | BE-W6D1 — Security and idempotency hardening | BE-W5D5 | Review auth, PIN, TOTP, webhooks, ledger idempotency, admin audit, rate limits. | `fix(security): harden auth webhooks and idempotency` |
| Day 2 — Tuesday | BE-W6D2 — Performance/load pass | BE-W6D1 | Load test critical endpoints, socket rooms, queues, DB indexes, backup jobs. | `perf(api): optimize critical flows` |
| Day 3 — Wednesday | BE-W6D3 — Provider recovery hardening | BE-W6D2 | Harden payment/KYC/maps/FCM/media retry, timeout, reconciliation and status recovery paths. | `fix(providers): harden recovery paths` |
| Day 4 — Thursday | BE-W6D4 — Security review fixes | BE-W6D3 | Fix findings from webhook, PIN, TOTP, RBAC, media permission, masked-call and log-scrubbing review. | `fix(security): resolve privacy and access findings` |
| Day 5 — Friday | BE-W6D5 — Hardening review | BE-W6D4 | Close major backend defects and produce release-candidate blocker list. | `chore(release): prepare backend blocker list` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — BE-W6D1: Security and idempotency hardening

> **Day 1 starts only after:** BE-W5D5.  
> **Day 1 finishes only when:** Review auth, PIN, TOTP, webhooks, ledger idempotency, admin audit, rate limits.

**Today's goal:** Review auth, PIN, TOTP, webhooks, ledger idempotency, admin audit, rate limits.

**Why today:** BE-W6D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W5D5 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Review auth, PIN, TOTP, webhooks, ledger idempotency, admin audit, rate limits.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: fix(security): harden auth webhooks and idempotency
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Security and idempotency hardening outcome in the target environment using non-production data.

### End-of-day result

- [ ] Review auth, PIN, TOTP, webhooks, ledger idempotency, admin audit, rate limits.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `fix(security): harden auth webhooks and idempotency`

**What comes next:** BE-W6D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W6D1 — Security and idempotency hardening**.

Expected result: Review auth, PIN, TOTP, webhooks, ledger idempotency, admin audit, rate limits.

Why this task matters: BE-W6D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W5D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Review auth, PIN, TOTP, webhooks, ledger idempotency, admin audit, rate limits.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: fix(security): harden auth webhooks and idempotency

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Security and idempotency hardening outcome in the target environment using non-production data.
- [ ] Review auth, PIN, TOTP, webhooks, ledger idempotency, admin audit, rate limits.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`fix(security): harden auth webhooks and idempotency`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — BE-W6D2: Performance/load pass

> **Day 2 starts only after:** BE-W6D1.  
> **Day 2 finishes only when:** Load test critical endpoints, socket rooms, queues, DB indexes, backup jobs.

**Today's goal:** Load test critical endpoints, socket rooms, queues, DB indexes, backup jobs.

**Why today:** BE-W6D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W6D1 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Load test critical endpoints, socket rooms, queues, DB indexes, backup jobs.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: perf(api): optimize critical flows
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Performance/load pass outcome in the target environment using non-production data.

### End-of-day result

- [ ] Load test critical endpoints, socket rooms, queues, DB indexes, backup jobs.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `perf(api): optimize critical flows`

**What comes next:** BE-W6D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W6D2 — Performance/load pass**.

Expected result: Load test critical endpoints, socket rooms, queues, DB indexes, backup jobs.

Why this task matters: BE-W6D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W6D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Load test critical endpoints, socket rooms, queues, DB indexes, backup jobs.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: perf(api): optimize critical flows

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Performance/load pass outcome in the target environment using non-production data.
- [ ] Load test critical endpoints, socket rooms, queues, DB indexes, backup jobs.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`perf(api): optimize critical flows`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — BE-W6D3: Provider recovery hardening

> **Day 3 starts only after:** BE-W6D2.  
> **Day 3 finishes only when:** Harden payment/KYC/maps/FCM/media retry, timeout, reconciliation and status recovery paths.

**Today's goal:** Harden payment/KYC/maps/FCM/media retry, timeout, reconciliation and status recovery paths.

**Why today:** BE-W6D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W6D2 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Harden payment/KYC/maps/FCM/media retry, timeout, reconciliation and status recovery paths.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: fix(providers): harden recovery paths
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Provider recovery hardening outcome in the target environment using non-production data.

### End-of-day result

- [ ] Harden payment/KYC/maps/FCM/media retry, timeout, reconciliation and status recovery paths.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `fix(providers): harden recovery paths`

**What comes next:** BE-W6D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W6D3 — Provider recovery hardening**.

Expected result: Harden payment/KYC/maps/FCM/media retry, timeout, reconciliation and status recovery paths.

Why this task matters: BE-W6D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W6D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Harden payment/KYC/maps/FCM/media retry, timeout, reconciliation and status recovery paths.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: fix(providers): harden recovery paths
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Provider recovery hardening outcome in the target environment using non-production data.
- [ ] Harden payment/KYC/maps/FCM/media retry, timeout, reconciliation and status recovery paths.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`fix(providers): harden recovery paths`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — BE-W6D4: Security review fixes

> **Day 4 starts only after:** BE-W6D3.  
> **Day 4 finishes only when:** Fix findings from webhook, PIN, TOTP, RBAC, media permission, masked-call and log-scrubbing review.

**Today's goal:** Fix findings from webhook, PIN, TOTP, RBAC, media permission, masked-call and log-scrubbing review.

**Why today:** BE-W6D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W6D3 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Fix findings from webhook, PIN, TOTP, RBAC, media permission, masked-call and log-scrubbing review.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: fix(security): resolve privacy and access findings
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Security review fixes outcome in the target environment using non-production data.

### End-of-day result

- [ ] Fix findings from webhook, PIN, TOTP, RBAC, media permission, masked-call and log-scrubbing review.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `fix(security): resolve privacy and access findings`

**What comes next:** BE-W6D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W6D4 — Security review fixes**.

Expected result: Fix findings from webhook, PIN, TOTP, RBAC, media permission, masked-call and log-scrubbing review.

Why this task matters: BE-W6D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W6D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Fix findings from webhook, PIN, TOTP, RBAC, media permission, masked-call and log-scrubbing review.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: fix(security): resolve privacy and access findings

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Security review fixes outcome in the target environment using non-production data.
- [ ] Fix findings from webhook, PIN, TOTP, RBAC, media permission, masked-call and log-scrubbing review.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`fix(security): resolve privacy and access findings`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — BE-W6D5: Hardening review

> **Day 5 starts only after:** BE-W6D4.  
> **Day 5 finishes only when:** Close major backend defects and produce release-candidate blocker list.

**Today's goal:** Close major backend defects and produce release-candidate blocker list.

**Why today:** BE-W7D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- BE-W6D4 is accepted or its required interface is demonstrably ready.



### Build in this order

1. Close major backend defects and produce release-candidate blocker list.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: chore(release): prepare backend blocker list
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Hardening review outcome in the target environment using non-production data.

### End-of-day result

- [ ] Close major backend defects and produce release-candidate blocker list.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `chore(release): prepare backend blocker list`

**What comes next:** BE-W7D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **BE-W6D5 — Hardening review**.

Expected result: Close major backend defects and produce release-candidate blocker list.

Why this task matters: BE-W7D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Backend Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm BE-W6D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.


#### Implement

- Close major backend defects and produce release-candidate blocker list.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: chore(release): prepare backend blocker list

#### Verify

- [ ] Unit tests for approved domain decisions, guards and error paths.
- [ ] Integration tests for persistence and every named contract or event.
- [ ] Run the complete Hardening review outcome in the target environment using non-production data.
- [ ] Close major backend defects and produce release-candidate blocker list.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`chore(release): prepare backend blocker list`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Backend daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
