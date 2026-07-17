# Work2Cash Mobile — Week 6: Hardening, Security and Performance

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

Fix integration defects, harden performance, security and provider behavior, improve recovery paths and close major technical gaps.

## Before the week starts

The Mobile Week 5 result is accepted, or its unfinished work is explicitly carried over.

## Five-day map

| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
| Day 1 — Monday | MOB-W6D1 — Hardening sprint | MOB-W5D5 | Fix defects from full flow QA, improve copy, skeletons, submit overlays, retry states. | `feat(mobile): hardening sprint` |
| Day 2 — Tuesday | MOB-W6D2 — Performance and device QA | MOB-W6D1 | Profile lower-end Android performance, image/video upload, socket battery/network behavior. | `feat(mobile): performance and device qa` |
| Day 3 — Wednesday | MOB-W6D3 — Provider recovery flows | MOB-W6D2 | Harden payment return, KYC return, FCM tap recovery, socket reconnect and media upload retry behavior. | `feat(mobile): provider recovery flows` |
| Day 4 — Thursday | MOB-W6D4 — Security and privacy review | MOB-W6D3 | Verify PIN confirmation, permission prompts, private media, exact-address reveal rules and masked-call copy. | `feat(mobile): security and privacy review` |
| Day 5 — Friday | MOB-W6D5 — Hardening review | MOB-W6D4 | Run full mobile smoke test, close major defects and prepare release-candidate checklist. | `feat(mobile): hardening review` |

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

## Day 1 of 5

### Monday — MOB-W6D1: Hardening sprint

> **Day 1 starts only after:** MOB-W5D5.  
> **Day 1 finishes only when:** Fix defects from full flow QA, improve copy, skeletons, submit overlays, retry states.

**Today's goal:** Fix defects from full flow QA, improve copy, skeletons, submit overlays, retry states.

**Why today:** MOB-W6D2 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W5D5 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W6D1. This does not block today's approved construction scope.

### Build in this order

1. Fix defects from full flow QA, improve copy, skeletons, submit overlays, retry states.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Keep commits fix by fix.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Hardening sprint outcome in the target environment using non-production data.

### End-of-day result

- [ ] Fix defects from full flow QA, improve copy, skeletons, submit overlays, retry states.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): hardening sprint`

**What comes next:** MOB-W6D2 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 1

Use only this Day 1 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W6D1 — Hardening sprint**.

Expected result: Fix defects from full flow QA, improve copy, skeletons, submit overlays, retry states.

Why this task matters: MOB-W6D2 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 1 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W5D5 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W6D1.

#### Implement

- Fix defects from full flow QA, improve copy, skeletons, submit overlays, retry states.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Keep commits fix by fix.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Hardening sprint outcome in the target environment using non-production data.
- [ ] Fix defects from full flow QA, improve copy, skeletons, submit overlays, retry states.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): hardening sprint`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 2 of 5

### Tuesday — MOB-W6D2: Performance and device QA

> **Day 2 starts only after:** MOB-W6D1.  
> **Day 2 finishes only when:** Profile lower-end Android performance, image/video upload, socket battery/network behavior.

**Today's goal:** Profile lower-end Android performance, image/video upload, socket battery/network behavior.

**Why today:** MOB-W6D3 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W6D1 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W6D2. This does not block today's approved construction scope.

### Build in this order

1. Profile lower-end Android performance, image/video upload, socket battery/network behavior.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Optimize without changing product rules.
- Use `mode`; do not introduce `activeMode`.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Performance and device QA outcome in the target environment using non-production data.

### End-of-day result

- [ ] Profile lower-end Android performance, image/video upload, socket battery/network behavior.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): performance and device qa`

**What comes next:** MOB-W6D3 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 2

Use only this Day 2 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W6D2 — Performance and device QA**.

Expected result: Profile lower-end Android performance, image/video upload, socket battery/network behavior.

Why this task matters: MOB-W6D3 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 2 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W6D1 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W6D2.

#### Implement

- Profile lower-end Android performance, image/video upload, socket battery/network behavior.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Optimize without changing product rules.
- Use `mode`; do not introduce `activeMode`.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Performance and device QA outcome in the target environment using non-production data.
- [ ] Profile lower-end Android performance, image/video upload, socket battery/network behavior.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): performance and device qa`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 3 of 5

### Wednesday — MOB-W6D3: Provider recovery flows

> **Day 3 starts only after:** MOB-W6D2.  
> **Day 3 finishes only when:** Harden payment return, KYC return, FCM tap recovery, socket reconnect and media upload retry behavior.

**Today's goal:** Harden payment return, KYC return, FCM tap recovery, socket reconnect and media upload retry behavior.

**Why today:** MOB-W6D4 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W6D2 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W6D3. This does not block today's approved construction scope.

### Build in this order

1. Harden payment return, KYC return, FCM tap recovery, socket reconnect and media upload retry behavior.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Document any provider-specific recovery issue.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Provider recovery flows outcome in the target environment using non-production data.

### End-of-day result

- [ ] Harden payment return, KYC return, FCM tap recovery, socket reconnect and media upload retry behavior.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): provider recovery flows`

**What comes next:** MOB-W6D4 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 3

Use only this Day 3 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W6D3 — Provider recovery flows**.

Expected result: Harden payment return, KYC return, FCM tap recovery, socket reconnect and media upload retry behavior.

Why this task matters: MOB-W6D4 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 3 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W6D2 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W6D3.

#### Implement

- Harden payment return, KYC return, FCM tap recovery, socket reconnect and media upload retry behavior.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Document any provider-specific recovery issue.
- Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Provider recovery flows outcome in the target environment using non-production data.
- [ ] Harden payment return, KYC return, FCM tap recovery, socket reconnect and media upload retry behavior.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): provider recovery flows`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 4 of 5

### Thursday — MOB-W6D4: Security and privacy review

> **Day 4 starts only after:** MOB-W6D3.  
> **Day 4 finishes only when:** Verify PIN confirmation, permission prompts, private media, exact-address reveal rules and masked-call copy.

**Today's goal:** Verify PIN confirmation, permission prompts, private media, exact-address reveal rules and masked-call copy.

**Why today:** MOB-W6D5 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W6D3 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W6D4. This does not block today's approved construction scope.

### Build in this order

1. Verify PIN confirmation, permission prompts, private media, exact-address reveal rules and masked-call copy.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No sensitive data leakage in logs or UI.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Security and privacy review outcome in the target environment using non-production data.

### End-of-day result

- [ ] Verify PIN confirmation, permission prompts, private media, exact-address reveal rules and masked-call copy.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): security and privacy review`

**What comes next:** MOB-W6D5 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 4

Use only this Day 4 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W6D4 — Security and privacy review**.

Expected result: Verify PIN confirmation, permission prompts, private media, exact-address reveal rules and masked-call copy.

Why this task matters: MOB-W6D5 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 4 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W6D3 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W6D4.

#### Implement

- Verify PIN confirmation, permission prompts, private media, exact-address reveal rules and masked-call copy.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: No sensitive data leakage in logs or UI.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Security and privacy review outcome in the target environment using non-production data.
- [ ] Verify PIN confirmation, permission prompts, private media, exact-address reveal rules and masked-call copy.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): security and privacy review`

Do not mark the task complete without the required evidence and reviewer acceptance.


## Day 5 of 5

### Friday — MOB-W6D5: Hardening review

> **Day 5 starts only after:** MOB-W6D4.  
> **Day 5 finishes only when:** Run full mobile smoke test, close major defects and prepare release-candidate checklist.

**Today's goal:** Run full mobile smoke test, close major defects and prepare release-candidate checklist.

**Why today:** MOB-W7D1 can consume this task's accepted output or handoff.

**Status:** planned

### Before you start

- MOB-W6D4 is accepted or its required interface is demonstrably ready.

**Later integration or acceptance gate:** BE-W6D5. This does not block today's approved construction scope.

### Build in this order

1. Run full mobile smoke test, close major defects and prepare release-candidate checklist.

### Technical rules

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Create release-candidate blocker list.
- Required references: CONTRACT-001, FLOW-LIB-001.

### Tests for today

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Hardening review outcome in the target environment using non-production data.

### End-of-day result

- [ ] Run full mobile smoke test, close major defects and prepare release-candidate checklist.
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** `feat(mobile): hardening review`

**What comes next:** MOB-W7D1 can consume this task's accepted output or handoff.

### Agent execution prompt for Day 5

Use only this Day 5 section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **MOB-W6D5 — Hardening review**.

Expected result: Run full mobile smoke test, close major defects and prepare release-candidate checklist.

Why this task matters: MOB-W7D1 can consume this task's accepted output or handoff.

#### Required context

1. `AGENTS.md`.
2. Shared Execution Rules.
3. Mobile Team Markdown Brief.
4. The assigned Day 5 section and this embedded prompt.
5. Required references: FLOW-LIB-001, CONTRACT-001, DATA-001, PROVIDER-001.

#### Before changing code

- Confirm MOB-W6D4 is accepted or its required interface is ready.
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: BE-W6D5.

#### Implement

- Run full mobile smoke test, close major defects and prepare release-candidate checklist.

#### Guardrails

- Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.
- Do not violate the legacy output rule: Create release-candidate blocker list.

#### Verify

- [ ] State-management tests for success, loading, empty, failure and recovery.
- [ ] Widget tests for validation, permissions and user-visible business guards.
- [ ] Run the complete Hardening review outcome in the target environment using non-production data.
- [ ] Run full mobile smoke test, close major defects and prepare release-candidate checklist.
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

`feat(mobile): hardening review`

Do not mark the task complete without the required evidence and reviewer acceptance.



## Week complete

- [ ] All five Mobile daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
