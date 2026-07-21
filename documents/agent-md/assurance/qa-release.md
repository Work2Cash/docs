---
id: ASSURANCE-QA-001
title: QA and Release Assurance
type: assurance-governance-agent-pack
audience: QA, Mobile, Admin, Backend, Infrastructure, Operations, Product and AI agents
owner: QA Lead
reviewers: Technical Lead, Product Lead, Mobile Lead, Admin Lead, Backend Lead, Infrastructure Lead, Operations
status: in-review
version: 1.0
last_reviewed: 2026-07-18
authority: Approved flows, accepted contracts, Phase 4 technical records and evidence-based release policy
generated_from: content/assurance/qa-release.json
do_not_edit: true
---

# QA and Release Assurance

> Generated focused agent pack. Edit `content/assurance/qa-release.json`, then run `node scripts/generate-assurance-docs.js`.

## Purpose

One traceable register for flow acceptance, contracts, providers, security, recovery, UAT, release gates and Go/No-Go evidence.

## How to use this pack

Use only the record required by the assigned task, review or release decision. Migration does not turn Not Run into Passed, a legal draft into approved wording, or an open question into an accepted decision.

## Authority notes

- Documentation migration does not mark any test or release gate as passed.
- Each record becomes authoritative for release only when it identifies the tested build/environment and links concrete evidence.

## Shared controls

- Every main flow requires happy-path, decision-branch and breakpoint/recovery coverage.
- Financial mutations require idempotency, reconciliation and ledger/escrow evidence.
- Sensitive-data surfaces require authorization, minimization and exposure tests.
- Provider suites cover success, delay, failure, duplicate events, fallback and disablement.
- No P0 or P1 defect remains open at Go/No-Go.

---

## QA-AF-01 — AF-01 — Admin Entry Login and TOTP

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-01-admin-entry-login-totp.md |

### In plain English

Verify the approved Admin Entry Login and TOTP behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-01 — Admin Entry Login and TOTP |
| Risk and priority | P1 core flow |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | The AdminUser must already exist through the controlled AF-17 setup path. |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin: Opens the dashboard or a protected admin link. → Dashboard: Checks for a valid admin session; if none exists, it shows the login page and safely remembers an allowed internal destination. → Admin: Enters the admin email and password. → Backend: Verifies the credentials and confirms that the admin account is enabled. → Backend: Creates a limited TOTP challenge but does not create the full dashboard session yet. → Dashboard: Shows the TOTP screen; ASF-11 blocks duplicate submission while verification is in progress. → Admin: Enters the current authenticator code.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: Given an enabled admin with valid credentials, when TOTP also passes, then one authenticated AdminSession is created. Given valid credentials without valid TOTP, no full admin session or protected route is available. Given a disabled admin, no session is created and the response reveals no protected reason details. Given a safe protected route before login, successful login resumes it only after its RBAC check. Given an unsafe return URL, successful login routes to AF-02 instead.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-01 canonical flow source
- ASF-01 Admin Login and TOTP Verification, ASF-11 Empty Loading and Error Recovery, AF-02 Admin Dashboard Overview, AF-17 Admin Users Roles and Permissions
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-02 — AF-02 — Admin Dashboard Overview

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-02-admin-dashboard-overview.md |

### In plain English

Verify the approved Admin Dashboard Overview behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-02 — Admin Dashboard Overview |
| Risk and priority | P1 core flow |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | AF-01 |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Dashboard loads platform summary cards. → System: System shows active tasks, pending KYC, open reports, support chats, withdrawal requests and failed provider events. → Admin/System: Admin reviews alerts sorted by urgency. → System: Admin clicks a metric card or alert. → Admin/System: System checks permission for the selected module. → System: Admin is routed to the relevant queue or detail page.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-02 canonical flow source
- AF-01, ASF-02, ASF-03, ASF-11, AF-03, AF-04, AF-05, AF-08, AF-19
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-03 — AF-03 — User Management

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-03-user-management.md |

### In plain English

Verify the approved User Management behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-03 — User Management |
| Risk and priority | P1 core flow |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | AF-01 |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens the users list. → System: Admin searches or filters by name, phone, email, role, status, trust/risk state or KYC state. → Admin/System: Admin opens a user record. → System: System shows profile, Task Owner wallet, Tasker wallet, sessions, devices, task history, reports and risk events. → Admin/System: Admin chooses a permitted action such as view sessions, disable device, suspend/reactivate account or add support note. → System: System requests reason when the action is high-impact. → Admin/System: System applies the action and records it in the audit log.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-03 canonical flow source
- AF-01, ASF-02, ASF-03, ASF-04, ASF-05, AF-04, AF-06, AF-10, AF-14
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-04 — AF-04 — Tasker and KYC Review

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-04-tasker-and-kyc-review.md |

### In plain English

Verify the approved Tasker and KYC Review behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-04 — Tasker and KYC Review |
| Risk and priority | P0/P1 high-risk path |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | A Work2Cash user and TaskerProfile already exist. |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin: Opens the pending, failed or manual-review KYC queue, or enters from User Management. → Admin dashboard: Checks the admin session and KYC view permission before showing records. → Admin: Filters by pending, failed, re-verification, approved, rejected or manual-review status. → Admin: Opens one Tasker's KYC case. → Backend: Returns the Tasker profile, safe identity-verification metadata, biometric result, provider history and previous decisions permitted for that role. → Admin: Reviews the profile information, identity route, biometric match and provider failure reasons. → Admin: If the provider result is missing or inconsistent, runs controlled reconciliation rather than guessing the outcome.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: An authorized admin can find and open a KYC case with the context required for a decision. Unauthorized admins see a clear forbidden or redacted state. Sensitive identifiers, biometric data and provider secrets are not exposed unnecessarily. Missing or inconsistent Smile ID results remain pending and can be reconciled safely. Approve, reject, request re-verification and escalation enforce valid current-state transitions.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-04 canonical flow source
- AF-03 User Management, ASF-04 Record Detail Review, ASF-05 Reason and Audit, ASF-06 Evidence Review, ASF-07 Status Change, ASF-10 Provider Reconciliation, AF-14 Risk Review, AF-19 Provider Monitoring
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-05 — AF-05 — Task Operations Monitoring

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-05-task-operations-monitoring.md |

### In plain English

Verify the approved Task Operations Monitoring behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-05 — Task Operations Monitoring |
| Risk and priority | P1 core flow |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Mobile task lifecycle |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens the task monitor. → System: Admin filters by task state, city/zone, category, payment state, Task Owner, Tasker, risk flag or date. → Admin/System: Admin opens a task detail page. → System: System shows task summary, timeline, accepted Tasker, arrival commitment, location, payment/escrow state, proof media and communication audit signals. → Admin/System: Admin reviews current risk or operational blockage. → System: Admin may force cancel a task where policy permits, with elevated permission, reason, note, impact preview, notifications and audit. → Admin/System: Admin escalates to support, report resolution, finance, media review or risk review where needed.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-05 canonical flow source
- ASF-03, ASF-04, ASF-06, ASF-07, AF-06, AF-07, AF-08, AF-13, AF-19
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-06 — AF-06 — Task Report and Dispute Resolution

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-06-task-report-and-dispute-resolution.md |

### In plain English

Verify the approved Task Report and Dispute Resolution behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-06 — Task Report and Dispute Resolution |
| Risk and priority | P1 core flow |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | AF-05 Task Monitoring |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens the report queue. → System: Admin filters by report type, urgency, linked task, user, state or age. → Admin/System: Admin opens report detail. → System: System shows linked task, Task Owner, Tasker, timeline, media, cancellation/no-show events, penalties and prior warnings/strikes. → Admin/System: Admin reviews evidence and policy rules. → System: Admin selects a resolution: uphold report, reject report, apply warning/strike, release escrow, hold payout, request more info or escalate. → Admin/System: System records decision, notifies affected parties and updates related task/wallet/risk states.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-06 canonical flow source
- AF-05, AF-13, AF-14, ASF-06, ASF-05, ASF-07, ASF-09, AF-09, AF-10
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-07 — AF-07 — Support Live Chat Operations

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-07-support-live-chat-operations.md |

### In plain English

Verify the approved Support Live Chat Operations behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-07 — Support Live Chat Operations |
| Risk and priority | P1 core flow |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Socket support channel |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Support queue receives a new chat request. → System: Admin accepts or is assigned the conversation. → Admin/System: System displays user profile, recent tasks, payment records, reports and risk notes beside the chat. → System: Admin responds and selects a support category. → Admin/System: Admin may link the chat to a task, report, payment or wallet case. → System: Admin closes the chat with a resolution note or escalates to another admin flow.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-07 canonical flow source
- AF-03, ASF-09, ASF-04, ASF-05, AF-06, AF-08, AF-10, AF-14
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-08 — AF-08 — Finance: Payments, Escrow and Reconciliation

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-08-finance-payments-escrow-and-reconciliation.md |

### In plain English

Verify the approved Finance: Payments, Escrow and Reconciliation behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-08 — Finance: Payments, Escrow and Reconciliation |
| Risk and priority | P0/P1 high-risk path |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Paystack |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens finance dashboard. → System: Admin filters payments by provider, state, task, user, date, amount or webhook status. → Admin/System: Admin opens a payment detail page. → System: System shows provider reference, internal ledger, escrow state, webhook history and task linkage. → Admin/System: Admin compares provider event against Work2Cash ledger. → System: Admin retries safe reconciliation or escalates if manual review is required. → Admin/System: System records the outcome and updates affected task/wallet states where allowed.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-08 canonical flow source
- ASF-10, ASF-03, ASF-04, ASF-08, AF-05, AF-09, AF-10, AF-19
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-09 — AF-09 — Withdrawal and Payout Batch Operations

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-09-withdrawal-and-payout-batch-operations.md |

### In plain English

Verify the approved Withdrawal and Payout Batch Operations behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-09 — Withdrawal and Payout Batch Operations |
| Risk and priority | P0/P1 high-risk path |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Tasker withdrawal requests |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens withdrawal queue. → System: System shows pending withdrawal requests, eligible Taskers, held payouts and disputed exclusions. → Admin/System: Admin creates or opens the payout batch for the 14th or 28th. → System: System groups eligible requests by provider rail and validates balances. → Admin/System: Admin reviews batch totals, exclusions, fees and failed validations. → System: Admin confirms bulk payout action. → Admin/System: System sends payout instructions through Paystack or Moniepoint and records provider responses.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-09 canonical flow source
- ASF-10, ASF-03, ASF-04, ASF-05, AF-08, AF-14, AF-18
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-10 — AF-10 — Wallet, Refund and Excess Funding Support

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-10-wallet-refund-and-excess-funding-support.md |

### In plain English

Verify the approved Wallet, Refund and Excess Funding Support behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-10 — Wallet, Refund and Excess Funding Support |
| Risk and priority | P0/P1 high-risk path |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | AF-03 User Management |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens wallet case queue or a user wallet detail. → System: System shows Task Owner wallet, Tasker wallet, ledger entries, escrow holds and linked tasks. → Admin/System: Admin identifies whether the issue is excess funding, failed funding, refund request, duplicate payment or ledger confusion. → System: Admin reviews provider references and task state. → Admin/System: Admin decides whether to guide user to use funds on tasks, escalate, or request approved manual handling. → System: System records support resolution and audit reason.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-10 canonical flow source
- AF-03, AF-08, ASF-04, ASF-05, ASF-09, ASF-10, AF-07, AF-18
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-11 — AF-11 — Task Catalog Management

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-11-task-catalog-management.md |

### In plain English

Verify the approved Task Catalog Management behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-11 — Task Catalog Management |
| Risk and priority | P1 core flow |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Product approval |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens the task category list. → System: Admin selects a category or creates a new task type. → Admin/System: System shows name, description, icon hint, active state, ordering and pricing guidance fields. → System: Admin edits details and reviews how it affects mobile display. → Admin/System: Admin publishes the change, saves as draft, disables, or archives the category/task type. → System: System records audit log and makes active catalog available to mobile clients.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-11 canonical flow source
- ASF-05, ASF-03, ASF-07, AF-16, AF-18
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-12 — AF-12 — Service Coverage Configuration

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-12-service-coverage-configuration.md |

### In plain English

Verify the approved Service Coverage Configuration behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-12 — Service Coverage Configuration |
| Risk and priority | P1 core flow |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Nigeria-only operating policy |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens coverage dashboard. → System: System shows active country, states/zones, task posting rules and Tasker acceptance rules. → Admin/System: Admin reviews whether a zone is active, restricted or disabled. → System: Admin edits coverage rule within platform policy. → Admin/System: System requests confirmation and reason. → System: Coverage change is published and audited.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-12 canonical flow source
- ASF-05, AF-16, ASF-07, ASF-11, AF-05
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-13 — AF-13 — Task Media Moderation

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-13-task-media-moderation.md |

### In plain English

Verify the approved Task Media Moderation behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-13 — Task Media Moderation |
| Risk and priority | P1 core flow |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | TaskProof/TaskMedia records |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens media moderation queue. → System: System shows pending, flagged, removed and reviewed media. → Admin/System: Admin opens media preview with linked user, task, report and upload purpose. → System: Admin reviews whether the media is valid, unsafe, unrelated or privacy-sensitive. → Admin/System: Admin keeps, removes, flags or escalates the media. → System: System records decision and updates linked task/report/risk context.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-13 canonical flow source
- ASF-06, ASF-05, ASF-07, AF-06, AF-14, AF-19
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-14 — AF-14 — Risk, Trust, Warning and Strike Review

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-14-risk-trust-warning-and-strike-review.md |

### In plain English

Verify the approved Risk, Trust, Warning and Strike Review behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-14 — Risk, Trust, Warning and Strike Review |
| Risk and priority | P0/P1 high-risk path |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Penalty policy |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens risk queue. → System: System shows users with warnings, strikes, repeated movement-stage rejections, no-shows, off-platform solicitation flags and unsafe behavior reports. → Admin/System: Admin opens trust profile. → System: System shows policy events, linked tasks/reports, previous warnings/strikes and current restrictions. → Admin/System: Admin applies or removes allowed action based on policy. → System: System records warning, strike, restriction, suspension or no-action decision.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-14 canonical flow source
- ASF-05, ASF-04, ASF-06, ASF-07, AF-03, AF-06, AF-07, AF-18
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-15 — AF-15 — Referral Management

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-15-referral-management.md |

### In plain English

Verify the approved Referral Management behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-15 — Referral Management |
| Risk and priority | P1 core flow |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Referral code tracking |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens referral dashboard. → System: System shows referred users, completed paid task counts, pending rewards, credited rewards and suspected abuse. → Admin/System: Admin opens a referral record. → System: System shows referrer, referred user, task history and reward state. → Admin/System: Admin reviews eligibility or abuse flag. → System: Admin approves, holds, rejects or escalates reward where manual review is needed.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-15 canonical flow source
- CONTRACT-REFERRAL-001, ASF-03, ASF-04, ASF-05, ASF-07, AF-08, AF-14, AF-18, MF-17
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-16 — AF-16 — Platform Config and Remote Config

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-16-platform-config-and-remote-config.md |

### In plain English

Verify the approved Platform Config and Remote Config behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-16 — Platform Config and Remote Config |
| Risk and priority | P1 core flow |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Technical Lead-approved config list |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens remote config dashboard. → System: System shows config groups, current values, environment, last publisher and effective date. → Admin/System: Admin opens a config detail. → System: Admin edits a value within allowed validation rules. → Admin/System: System shows preview and affected flows. → System: Admin confirms publication with reason. → Admin/System: System publishes config and records audit log.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-16 canonical flow source
- ASF-05, ASF-02, ASF-07, AF-11, AF-12, AF-19, AF-18
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-17 — AF-17 — Admin Users, Roles and Permissions

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-17-admin-users-roles-and-permissions.md |

### In plain English

Verify the approved Admin Users, Roles and Permissions behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-17 — Admin Users, Roles and Permissions |
| Risk and priority | P1 core flow |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | AF-01 |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens admin users list. → System: System shows active, invited, disabled and locked admin accounts. → Admin/System: Admin opens admin user or role detail. → System: Admin reviews permission matrix. → Admin/System: Admin invites, disables, changes role or rotates access where allowed. → System: System requests reason and records audit log.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-17 canonical flow source
- AF-01, ASF-02, ASF-05, ASF-07, AF-18, AF-19
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-18 — AF-18 — Audit Log Review

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-18-audit-log-review.md |

### In plain English

Verify the approved Audit Log Review behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-18 — Audit Log Review |
| Risk and priority | P1 core flow |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Audit events from all admin flows |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens audit logs. → System: Admin filters by actor, module, action type, date, record ID or severity. → Admin/System: Admin opens a log detail. → System: System shows before/after values where available, reason, source IP/session and linked record. → Admin/System: Admin exports logs if needed for review. → System: Admin returns to the linked operational flow or closes review.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-18 canonical flow source
- ASF-03, ASF-08, ASF-04, AF-03, AF-08, AF-14, AF-17
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-19 — AF-19 — Use Case Health and Background Job Monitoring

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-19-use-case-health-and-background-job-monitoring.md |

### In plain English

Verify the approved Use Case Health and Background Job Monitoring behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-19 — Use Case Health and Background Job Monitoring |
| Risk and priority | P1 core flow |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Backend use case tracking |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens use case health dashboard. → System: System shows backend use cases, last run time, success/failure counts, failed responses, BullMQ queue health and provider error rates. → Admin/System: Admin opens a failure detail. → System: System shows request context, affected record, provider response, retry status and last error. → Admin/System: Admin retries safe jobs or escalates to Technical Lead. → System: System records retry result and marks issue resolved or still failing.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-19 canonical flow source
- ASF-04, ASF-10, ASF-08, AF-08, AF-20, AF-18
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-20 — AF-20 — Monitoring, Backup and Incident Readiness

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-20-monitoring-backup-and-incident-readiness.md |

### In plain English

Verify the approved Monitoring, Backup and Incident Readiness behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-20 — Monitoring, Backup and Incident Readiness |
| Risk and priority | P1 core flow |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Self-hosted services |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens monitoring overview. → System: System shows API, socket, database, Valkey, queues, storage, backups, external providers and uptime state. → Admin/System: Admin opens an alert detail. → System: System shows severity, affected service, time started, user impact and recommended checklist. → Admin/System: Admin follows incident checklist or escalates to Technical Lead. → System: Incident notes, status updates and closure summary are recorded.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-20 canonical flow source
- ASF-04, ASF-08, ASF-11, AF-19, AF-07, AF-18
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-21 — AF-21 — Notifications and Announcements

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-21-notifications-and-announcements.md |

### In plain English

Verify the approved Notifications and Announcements behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-21 — Notifications and Announcements |
| Risk and priority | P1 core flow |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | FCM |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens notifications dashboard. → System: System shows sent, pending, failed and scheduled notifications. → Admin/System: Admin creates announcement. → System: Admin selects audience such as all users, Task Owners, Taskers, active-task users, affected incident users, KYC-pending users, location segment or specific user. → Admin/System: Admin selects channel: FCM push, in-app notification, email, or Termii SMS for critical/approved use only. → System: System shows preview, estimated audience, cost warning where SMS applies, and preference impact. → Admin/System: Admin confirms send with reason.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-21 canonical flow source
- ASF-05, ASF-02, ASF-07, ASF-11, AF-18, AF-19, AF-20
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-22 — AF-22 — Ratings and Reviews Management

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-22-ratings-and-reviews-management.md |

### In plain English

Verify the approved Ratings and Reviews Management behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-22 — Ratings and Reviews Management |
| Risk and priority | P1 core flow |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Task-bound ratings |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens ratings and reviews list. → System: Admin filters by rating, actor, task, category, report state, date, review status or risk flag. → Admin/System: Admin opens review detail. → System: System shows linked task, Task Owner, Tasker, rating, review text, tags, report history and trust/risk context. → Admin/System: Admin chooses allowed action: keep, hide/remove, flag for risk, link to report/dispute, warn abusive reviewer, or escalate to support. → System: System requests reason for moderation action. → Admin/System: System records audit log and notifies affected user where policy requires.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-22 canonical flow source
- ASF-05, ASF-03, ASF-04, ASF-07, AF-06, AF-14, AF-18
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-23 — AF-23 — Basic Analytics and Reports

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-23-basic-analytics-and-reports.md |

### In plain English

Verify the approved Basic Analytics and Reports behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-23 — Basic Analytics and Reports |
| Risk and priority | P1 core flow |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Aggregated operational data |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens reports dashboard. → System: Admin selects report group: marketplace, finance, trust/safety, support or operations. → Admin/System: System shows read-only metrics for the selected period. → System: Admin filters by date, location, category, provider, status or role where applicable. → Admin/System: Admin opens report detail or export preview. → System: System checks export permission and removes raw sensitive data from export. → Admin/System: Admin exports where permitted or returns to dashboard.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-23 canonical flow source
- ASF-02, ASF-03, ASF-08, AF-08, AF-18, AF-19
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-AF-24 — AF-24 — Receipt and Transaction Review

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Admin flow acceptance |
| Status | not-run |
| Source | content/flows/admin/main/AF-24-receipt-and-transaction-review.md |

### In plain English

Verify the approved Receipt and Transaction Review behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | AF-24 — Receipt and Transaction Review |
| Risk and priority | P1 core flow |
| Owner | Admin QA with Admin and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Wallet ledger |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Admin/System: Admin opens Receipt & Transactions. → System: Admin searches by transaction ID, task ID, user, provider reference, amount, status or date. → Admin/System: Admin opens transaction detail. → System: System shows receipt summary and linked task, user, wallet, escrow, provider reference and webhook/reconciliation state. → Admin/System: Admin copies receipt reference or exports where permitted. → System: Admin escalates to finance, support or dispute if action is required. → Admin/System: Manual ledger correction is blocked from this screen and routed to wallet/finance action flows.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- AF-24 canonical flow source
- ASF-03, ASF-04, ASF-08, ASF-10, AF-08, AF-10, AF-06, AF-18
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-CONTRACT-01 — Admin operations contract suite

| Field | Value |
| --- | --- |
| Type | contract-suite |
| Domain | Backend contract assurance |
| Status | not-run |
| Source | content/technical/contracts.json and generated OpenAPI |

### In plain English

Verify 32 admin operations contract records against the implementation and generated OpenAPI baseline.

### At a glance

| Field | Value |
| --- | --- |
| Contract domain | Admin operations |
| Records covered | 32 |
| Owner | Backend QA with Mobile/Admin consumer reviewers as applicable |
| Environment | Automated contract test environment and staging |
| Evidence required | Test report, OpenAPI validation, request/response samples, request IDs and defect/retest links |
| Execution status | Not Run |

### Requirements and controls

- Test success, validation, authentication, exact permission, state guards and standard error envelopes.
- Test idempotent duplicates and conflicting key reuse for every mutation that requires idempotency.
- Test concurrency/version conflicts for sensitive Admin and finance decisions.
- Verify persisted records, jobs, events, notifications and audit effects.
- A provisional operation with x-work2cash-gaps cannot pass contract-complete status until those gaps close.

### Dependencies and traceability

- API-104 — DELETE /admin/auth/sessions/{sessionId}
- API-106 — GET /admin/admin-users
- API-128 — GET /admin/audit-logs
- API-103 — GET /admin/auth/sessions
- API-126 — GET /admin/config
- API-114 — GET /admin/dashboard
- API-121 — GET /admin/finance/transactions
- API-113 — GET /admin/permissions

### Open evidence, review or decisions

- Execution evidence and implementation status are not recorded by migration.

---

## QA-CONTRACT-02 — Catalog and coverage contract suite

| Field | Value |
| --- | --- |
| Type | contract-suite |
| Domain | Backend contract assurance |
| Status | not-run |
| Source | content/technical/contracts.json and generated OpenAPI |

### In plain English

Verify 6 catalog and coverage contract records against the implementation and generated OpenAPI baseline.

### At a glance

| Field | Value |
| --- | --- |
| Contract domain | Catalog and coverage |
| Records covered | 6 |
| Owner | Backend QA with Mobile/Admin consumer reviewers as applicable |
| Environment | Automated contract test environment and staging |
| Evidence required | Test report, OpenAPI validation, request/response samples, request IDs and defect/retest links |
| Execution status | Not Run |

### Requirements and controls

- Test success, validation, authentication, exact permission, state guards and standard error envelopes.
- Test idempotent duplicates and conflicting key reuse for every mutation that requires idempotency.
- Test concurrency/version conflicts for sensitive Admin and finance decisions.
- Verify persisted records, jobs, events, notifications and audit effects.
- A provisional operation with x-work2cash-gaps cannot pass contract-complete status until those gaps close.

### Dependencies and traceability

- API-032 — GET /catalog/categories
- API-033 — GET /catalog/task-types
- API-035 — PATCH /admin/catalog/categories/{categoryId}
- API-034 — POST /admin/catalog/categories
- API-037 — POST /admin/catalog/categories/{categoryId}/archive
- API-036 — POST /admin/catalog/categories/{categoryId}/disable

### Open evidence, review or decisions

- Execution evidence and implementation status are not recorded by migration.

---

## QA-CONTRACT-03 — Communication and realtime contract suite

| Field | Value |
| --- | --- |
| Type | contract-suite |
| Domain | Backend contract assurance |
| Status | not-run |
| Source | content/technical/contracts.json and generated OpenAPI |

### In plain English

Verify 15 communication and realtime contract records against the implementation and generated OpenAPI baseline.

### At a glance

| Field | Value |
| --- | --- |
| Contract domain | Communication and realtime |
| Records covered | 15 |
| Owner | Backend QA with Mobile/Admin consumer reviewers as applicable |
| Environment | Automated contract test environment and staging |
| Evidence required | Test report, OpenAPI validation, request/response samples, request IDs and defect/retest links |
| Execution status | Not Run |

### Requirements and controls

- Test success, validation, authentication, exact permission, state guards and standard error envelopes.
- Test idempotent duplicates and conflicting key reuse for every mutation that requires idempotency.
- Test concurrency/version conflicts for sensitive Admin and finance decisions.
- Verify persisted records, jobs, events, notifications and audit effects.
- A provisional operation with x-work2cash-gaps cannot pass contract-complete status until those gaps close.

### Dependencies and traceability

- SOCKET-014 — /presence · presence.heartbeat
- SOCKET-015 — /presence · presence.updated
- SOCKET-010 — /support · support.assignment.updated
- SOCKET-009 — /support · support.message.new
- SOCKET-008 — /support · support.message.send
- SOCKET-007 — /support · support.session.join
- SOCKET-003 — /task · task.chat.new
- SOCKET-004 — /task · task.chat.read

### Open evidence, review or decisions

- Execution evidence and implementation status are not recorded by migration.

---

## QA-CONTRACT-04 — Communication and support contract suite

| Field | Value |
| --- | --- |
| Type | contract-suite |
| Domain | Backend contract assurance |
| Status | not-run |
| Source | content/technical/contracts.json and generated OpenAPI |

### In plain English

Verify 9 communication and support contract records against the implementation and generated OpenAPI baseline.

### At a glance

| Field | Value |
| --- | --- |
| Contract domain | Communication and support |
| Records covered | 9 |
| Owner | Backend QA with Mobile/Admin consumer reviewers as applicable |
| Environment | Automated contract test environment and staging |
| Evidence required | Test report, OpenAPI validation, request/response samples, request IDs and defect/retest links |
| Execution status | Not Run |

### Requirements and controls

- Test success, validation, authentication, exact permission, state guards and standard error envelopes.
- Test idempotent duplicates and conflicting key reuse for every mutation that requires idempotency.
- Test concurrency/version conflicts for sensitive Admin and finance decisions.
- Verify persisted records, jobs, events, notifications and audit effects.
- A provisional operation with x-work2cash-gaps cannot pass contract-complete status until those gaps close.

### Dependencies and traceability

- API-088 — GET /notifications
- API-091 — GET /tasks/{taskId}/call-sessions/active
- API-093 — GET /tasks/{taskId}/communications
- API-089 — POST /notifications/{notificationId}/read
- API-087 — POST /support/emergency
- API-086 — POST /support/sessions
- API-090 — POST /tasks/{taskId}/call-sessions
- API-092 — POST /tasks/{taskId}/call-sessions/{sessionId}/end

### Open evidence, review or decisions

- Execution evidence and implementation status are not recorded by migration.

---

## QA-CONTRACT-05 — Identity and sessions contract suite

| Field | Value |
| --- | --- |
| Type | contract-suite |
| Domain | Backend contract assurance |
| Status | not-run |
| Source | content/technical/contracts.json and generated OpenAPI |

### In plain English

Verify 26 identity and sessions contract records against the implementation and generated OpenAPI baseline.

### At a glance

| Field | Value |
| --- | --- |
| Contract domain | Identity and sessions |
| Records covered | 26 |
| Owner | Backend QA with Mobile/Admin consumer reviewers as applicable |
| Environment | Automated contract test environment and staging |
| Evidence required | Test report, OpenAPI validation, request/response samples, request IDs and defect/retest links |
| Execution status | Not Run |

### Requirements and controls

- Test success, validation, authentication, exact permission, state guards and standard error envelopes.
- Test idempotent duplicates and conflicting key reuse for every mutation that requires idempotency.
- Test concurrency/version conflicts for sensitive Admin and finance decisions.
- Verify persisted records, jobs, events, notifications and audit effects.
- A provisional operation with x-work2cash-gaps cannot pass contract-complete status until those gaps close.

### Dependencies and traceability

- API-018 — DELETE /me/addresses/{addressId}
- API-026 — DELETE /me/sessions/{sessionId}
- API-012 — GET /me
- API-015 — GET /me/addresses
- API-019 — GET /me/notification-preferences
- API-025 — GET /me/sessions
- API-017 — PATCH /me/addresses/{addressId}
- API-020 — PATCH /me/notification-preferences

### Open evidence, review or decisions

- Execution evidence and implementation status are not recorded by migration.

---

## QA-CONTRACT-06 — Matching contract suite

| Field | Value |
| --- | --- |
| Type | contract-suite |
| Domain | Backend contract assurance |
| Status | not-run |
| Source | content/technical/contracts.json and generated OpenAPI |

### In plain English

Verify 7 matching contract records against the implementation and generated OpenAPI baseline.

### At a glance

| Field | Value |
| --- | --- |
| Contract domain | Matching |
| Records covered | 7 |
| Owner | Backend QA with Mobile/Admin consumer reviewers as applicable |
| Environment | Automated contract test environment and staging |
| Evidence required | Test report, OpenAPI validation, request/response samples, request IDs and defect/retest links |
| Execution status | Not Run |

### Requirements and controls

- Test success, validation, authentication, exact permission, state guards and standard error envelopes.
- Test idempotent duplicates and conflicting key reuse for every mutation that requires idempotency.
- Test concurrency/version conflicts for sensitive Admin and finance decisions.
- Verify persisted records, jobs, events, notifications and audit effects.
- A provisional operation with x-work2cash-gaps cannot pass contract-complete status until those gaps close.

### Dependencies and traceability

- API-083 — DELETE /favorites/taskers/{taskerId}
- API-081 — GET /favorites/taskers
- API-046 — GET /task-owner/tasks/{taskId}/candidates
- API-057 — GET /tasker/tasks
- API-082 — POST /favorites/taskers
- API-045 — POST /task-owner/tasks/{taskId}/direct-offers
- API-059 — POST /tasker/tasks/{taskId}/interest

### Open evidence, review or decisions

- Execution evidence and implementation status are not recorded by migration.

---

## QA-CONTRACT-07 — Payments and escrow contract suite

| Field | Value |
| --- | --- |
| Type | contract-suite |
| Domain | Backend contract assurance |
| Status | not-run |
| Source | content/technical/contracts.json and generated OpenAPI |

### In plain English

Verify 3 payments and escrow contract records against the implementation and generated OpenAPI baseline.

### At a glance

| Field | Value |
| --- | --- |
| Contract domain | Payments and escrow |
| Records covered | 3 |
| Owner | Backend QA with Mobile/Admin consumer reviewers as applicable |
| Environment | Automated contract test environment and staging |
| Evidence required | Test report, OpenAPI validation, request/response samples, request IDs and defect/retest links |
| Execution status | Not Run |

### Requirements and controls

- Test success, validation, authentication, exact permission, state guards and standard error envelopes.
- Test idempotent duplicates and conflicting key reuse for every mutation that requires idempotency.
- Test concurrency/version conflicts for sensitive Admin and finance decisions.
- Verify persisted records, jobs, events, notifications and audit effects.
- A provisional operation with x-work2cash-gaps cannot pass contract-complete status until those gaps close.

### Dependencies and traceability

- API-070 — POST /payments/verify
- API-072 — POST /webhooks/moniepoint
- API-071 — POST /webhooks/paystack

### Open evidence, review or decisions

- Execution evidence and implementation status are not recorded by migration.

---

## QA-CONTRACT-08 — Providers, webhooks, queues and jobs contract suite

| Field | Value |
| --- | --- |
| Type | contract-suite |
| Domain | Backend contract assurance |
| Status | not-run |
| Source | content/technical/contracts.json and generated OpenAPI |

### In plain English

Verify 12 providers, webhooks, queues and jobs contract records against the implementation and generated OpenAPI baseline.

### At a glance

| Field | Value |
| --- | --- |
| Contract domain | Providers, webhooks, queues and jobs |
| Records covered | 12 |
| Owner | Backend QA with Mobile/Admin consumer reviewers as applicable |
| Environment | Automated contract test environment and staging |
| Evidence required | Test report, OpenAPI validation, request/response samples, request IDs and defect/retest links |
| Execution status | Not Run |

### Requirements and controls

- Test success, validation, authentication, exact permission, state guards and standard error envelopes.
- Test idempotent duplicates and conflicting key reuse for every mutation that requires idempotency.
- Test concurrency/version conflicts for sensitive Admin and finance decisions.
- Verify persisted records, jobs, events, notifications and audit effects.
- A provisional operation with x-work2cash-gaps cannot pass contract-complete status until those gaps close.

### Dependencies and traceability

- JOB-008 — audit.queue
- JOB-006 — chat.queue
- JOB-003 — kyc.queue
- JOB-007 — maps.queue
- JOB-004 — matching.queue
- JOB-009 — media.queue
- JOB-001 — notification.queue
- JOB-002 — payment.queue

### Open evidence, review or decisions

- Execution evidence and implementation status are not recorded by migration.

---

## QA-CONTRACT-09 — Referral Contract Group contract suite

| Field | Value |
| --- | --- |
| Type | contract-suite |
| Domain | Backend contract assurance |
| Status | not-run |
| Source | content/technical/contracts.json and generated OpenAPI |

### In plain English

Verify 2 referral contract group contract records against the implementation and generated OpenAPI baseline.

### At a glance

| Field | Value |
| --- | --- |
| Contract domain | Referral Contract Group |
| Records covered | 2 |
| Owner | Backend QA with Mobile/Admin consumer reviewers as applicable |
| Environment | Automated contract test environment and staging |
| Evidence required | Test report, OpenAPI validation, request/response samples, request IDs and defect/retest links |
| Execution status | Not Run |

### Requirements and controls

- Test success, validation, authentication, exact permission, state guards and standard error envelopes.
- Test idempotent duplicates and conflicting key reuse for every mutation that requires idempotency.
- Test concurrency/version conflicts for sensitive Admin and finance decisions.
- Verify persisted records, jobs, events, notifications and audit effects.
- A provisional operation with x-work2cash-gaps cannot pass contract-complete status until those gaps close.

### Dependencies and traceability

- API-130 — GET /referrals/me
- API-131 — GET /referrals/me/attributions

### Open evidence, review or decisions

- Execution evidence and implementation status are not recorded by migration.

---

## QA-CONTRACT-10 — Reports and risk contract suite

| Field | Value |
| --- | --- |
| Type | contract-suite |
| Domain | Backend contract assurance |
| Status | not-run |
| Source | content/technical/contracts.json and generated OpenAPI |

### In plain English

Verify 8 reports and risk contract records against the implementation and generated OpenAPI baseline.

### At a glance

| Field | Value |
| --- | --- |
| Contract domain | Reports and risk |
| Records covered | 8 |
| Owner | Backend QA with Mobile/Admin consumer reviewers as applicable |
| Environment | Automated contract test environment and staging |
| Evidence required | Test report, OpenAPI validation, request/response samples, request IDs and defect/retest links |
| Execution status | Not Run |

### Requirements and controls

- Test success, validation, authentication, exact permission, state guards and standard error envelopes.
- Test idempotent duplicates and conflicting key reuse for every mutation that requires idempotency.
- Test concurrency/version conflicts for sensitive Admin and finance decisions.
- Verify persisted records, jobs, events, notifications and audit effects.
- A provisional operation with x-work2cash-gaps cannot pass contract-complete status until those gaps close.

### Dependencies and traceability

- API-125 — GET /admin/ratings
- API-122 — GET /admin/reports
- API-085 — GET /reports/{reportId}
- API-138 — POST /admin/referrals/{attributionId}/escalate-risk
- API-123 — POST /admin/reports/{reportId}/resolve
- API-051 — POST /task-owner/tasks/{taskId}/report
- API-080 — POST /tasks/{taskId}/ratings
- API-084 — POST /tasks/{taskId}/reports

### Open evidence, review or decisions

- Execution evidence and implementation status are not recorded by migration.

---

## QA-CONTRACT-11 — System operations contract suite

| Field | Value |
| --- | --- |
| Type | contract-suite |
| Domain | Backend contract assurance |
| Status | not-run |
| Source | content/technical/contracts.json and generated OpenAPI |

### In plain English

Verify 4 system operations contract records against the implementation and generated OpenAPI baseline.

### At a glance

| Field | Value |
| --- | --- |
| Contract domain | System operations |
| Records covered | 4 |
| Owner | Backend QA with Mobile/Admin consumer reviewers as applicable |
| Environment | Automated contract test environment and staging |
| Evidence required | Test report, OpenAPI validation, request/response samples, request IDs and defect/retest links |
| Execution status | Not Run |

### Requirements and controls

- Test success, validation, authentication, exact permission, state guards and standard error envelopes.
- Test idempotent duplicates and conflicting key reuse for every mutation that requires idempotency.
- Test concurrency/version conflicts for sensitive Admin and finance decisions.
- Verify persisted records, jobs, events, notifications and audit effects.
- A provisional operation with x-work2cash-gaps cannot pass contract-complete status until those gaps close.

### Dependencies and traceability

- API-095 — GET /health
- API-097 — GET /metrics
- API-096 — GET /ready
- API-098 — GET /version

### Open evidence, review or decisions

- Execution evidence and implementation status are not recorded by migration.

---

## QA-CONTRACT-12 — Task creation contract suite

| Field | Value |
| --- | --- |
| Type | contract-suite |
| Domain | Backend contract assurance |
| Status | not-run |
| Source | content/technical/contracts.json and generated OpenAPI |

### In plain English

Verify 5 task creation contract records against the implementation and generated OpenAPI baseline.

### At a glance

| Field | Value |
| --- | --- |
| Contract domain | Task creation |
| Records covered | 5 |
| Owner | Backend QA with Mobile/Admin consumer reviewers as applicable |
| Environment | Automated contract test environment and staging |
| Evidence required | Test report, OpenAPI validation, request/response samples, request IDs and defect/retest links |
| Execution status | Not Run |

### Requirements and controls

- Test success, validation, authentication, exact permission, state guards and standard error envelopes.
- Test idempotent duplicates and conflicting key reuse for every mutation that requires idempotency.
- Test concurrency/version conflicts for sensitive Admin and finance decisions.
- Verify persisted records, jobs, events, notifications and audit effects.
- A provisional operation with x-work2cash-gaps cannot pass contract-complete status until those gaps close.

### Dependencies and traceability

- API-041 — POST /task-owner/tasks/{taskId}/location/confirm-pin
- API-040 — POST /task-owner/tasks/{taskId}/location/geocode
- API-042 — POST /task-owner/tasks/{taskId}/media
- API-043 — POST /task-owner/tasks/{taskId}/payment-intent
- API-038 — POST /task-owner/tasks/drafts

### Open evidence, review or decisions

- Execution evidence and implementation status are not recorded by migration.

---

## QA-CONTRACT-13 — Task execution contract suite

| Field | Value |
| --- | --- |
| Type | contract-suite |
| Domain | Backend contract assurance |
| Status | not-run |
| Source | content/technical/contracts.json and generated OpenAPI |

### In plain English

Verify 14 task execution contract records against the implementation and generated OpenAPI baseline.

### At a glance

| Field | Value |
| --- | --- |
| Contract domain | Task execution |
| Records covered | 14 |
| Owner | Backend QA with Mobile/Admin consumer reviewers as applicable |
| Environment | Automated contract test environment and staging |
| Evidence required | Test report, OpenAPI validation, request/response samples, request IDs and defect/retest links |
| Execution status | Not Run |

### Requirements and controls

- Test success, validation, authentication, exact permission, state guards and standard error envelopes.
- Test idempotent duplicates and conflicting key reuse for every mutation that requires idempotency.
- Test concurrency/version conflicts for sensitive Admin and finance decisions.
- Verify persisted records, jobs, events, notifications and audit effects.
- A provisional operation with x-work2cash-gaps cannot pass contract-complete status until those gaps close.

### Dependencies and traceability

- API-058 — GET /tasker/tasks/{taskId}
- API-120 — POST /admin/tasks/{taskId}/force-cancel
- API-044 — POST /task-owner/tasks/{taskId}/broadcast
- API-050 — POST /task-owner/tasks/{taskId}/cancel
- API-049 — POST /task-owner/tasks/{taskId}/confirm-completion
- API-052 — POST /task-owner/tasks/{taskId}/rebook
- API-060 — POST /tasker/tasks/{taskId}/accept
- API-063 — POST /tasker/tasks/{taskId}/arrived

### Open evidence, review or decisions

- Execution evidence and implementation status are not recorded by migration.

---

## QA-CONTRACT-14 — Task Owner contract suite

| Field | Value |
| --- | --- |
| Type | contract-suite |
| Domain | Backend contract assurance |
| Status | not-run |
| Source | content/technical/contracts.json and generated OpenAPI |

### In plain English

Verify 3 task owner contract records against the implementation and generated OpenAPI baseline.

### At a glance

| Field | Value |
| --- | --- |
| Contract domain | Task Owner |
| Records covered | 3 |
| Owner | Backend QA with Mobile/Admin consumer reviewers as applicable |
| Environment | Automated contract test environment and staging |
| Evidence required | Test report, OpenAPI validation, request/response samples, request IDs and defect/retest links |
| Execution status | Not Run |

### Requirements and controls

- Test success, validation, authentication, exact permission, state guards and standard error envelopes.
- Test idempotent duplicates and conflicting key reuse for every mutation that requires idempotency.
- Test concurrency/version conflicts for sensitive Admin and finance decisions.
- Verify persisted records, jobs, events, notifications and audit effects.
- A provisional operation with x-work2cash-gaps cannot pass contract-complete status until those gaps close.

### Dependencies and traceability

- API-039 — PATCH /task-owner/tasks/{taskId}
- API-047 — POST /task-owner/tasks/{taskId}/accept-tasker
- API-048 — POST /task-owner/tasks/{taskId}/reject-tasker

### Open evidence, review or decisions

- Execution evidence and implementation status are not recorded by migration.

---

## QA-CONTRACT-15 — Tasker contract suite

| Field | Value |
| --- | --- |
| Type | contract-suite |
| Domain | Backend contract assurance |
| Status | not-run |
| Source | content/technical/contracts.json and generated OpenAPI |

### In plain English

Verify 4 tasker contract records against the implementation and generated OpenAPI baseline.

### At a glance

| Field | Value |
| --- | --- |
| Contract domain | Tasker |
| Records covered | 4 |
| Owner | Backend QA with Mobile/Admin consumer reviewers as applicable |
| Environment | Automated contract test environment and staging |
| Evidence required | Test report, OpenAPI validation, request/response samples, request IDs and defect/retest links |
| Execution status | Not Run |

### Requirements and controls

- Test success, validation, authentication, exact permission, state guards and standard error envelopes.
- Test idempotent duplicates and conflicting key reuse for every mutation that requires idempotency.
- Test concurrency/version conflicts for sensitive Admin and finance decisions.
- Verify persisted records, jobs, events, notifications and audit effects.
- A provisional operation with x-work2cash-gaps cannot pass contract-complete status until those gaps close.

### Dependencies and traceability

- API-053 — GET /tasker/profile
- API-055 — PATCH /tasker/preferences
- API-054 — PATCH /tasker/profile
- API-056 — POST /tasker/availability

### Open evidence, review or decisions

- Execution evidence and implementation status are not recorded by migration.

---

## QA-CONTRACT-16 — Tasker activation and KYC contract suite

| Field | Value |
| --- | --- |
| Type | contract-suite |
| Domain | Backend contract assurance |
| Status | not-run |
| Source | content/technical/contracts.json and generated OpenAPI |

### In plain English

Verify 11 tasker activation and kyc contract records against the implementation and generated OpenAPI baseline.

### At a glance

| Field | Value |
| --- | --- |
| Contract domain | Tasker activation and KYC |
| Records covered | 11 |
| Owner | Backend QA with Mobile/Admin consumer reviewers as applicable |
| Environment | Automated contract test environment and staging |
| Evidence required | Test report, OpenAPI validation, request/response samples, request IDs and defect/retest links |
| Execution status | Not Run |

### Requirements and controls

- Test success, validation, authentication, exact permission, state guards and standard error envelopes.
- Test idempotent duplicates and conflicting key reuse for every mutation that requires idempotency.
- Test concurrency/version conflicts for sensitive Admin and finance decisions.
- Verify persisted records, jobs, events, notifications and audit effects.
- A provisional operation with x-work2cash-gaps cannot pass contract-complete status until those gaps close.

### Dependencies and traceability

- API-140 — GET /admin/kyc
- API-141 — GET /admin/kyc/{kycId}
- API-030 — GET /kyc/status
- API-142 — POST /admin/kyc/{kycId}/approve
- API-145 — POST /admin/kyc/{kycId}/escalate-risk
- API-146 — POST /admin/kyc/{kycId}/reconcile
- API-143 — POST /admin/kyc/{kycId}/reject
- API-031 — POST /admin/kyc/{kycId}/request-reverification

### Open evidence, review or decisions

- Execution evidence and implementation status are not recorded by migration.

---

## QA-CONTRACT-17 — Wallets and payouts contract suite

| Field | Value |
| --- | --- |
| Type | contract-suite |
| Domain | Backend contract assurance |
| Status | not-run |
| Source | content/technical/contracts.json and generated OpenAPI |

### In plain English

Verify 9 wallets and payouts contract records against the implementation and generated OpenAPI baseline.

### At a glance

| Field | Value |
| --- | --- |
| Contract domain | Wallets and payouts |
| Records covered | 9 |
| Owner | Backend QA with Mobile/Admin consumer reviewers as applicable |
| Environment | Automated contract test environment and staging |
| Evidence required | Test report, OpenAPI validation, request/response samples, request IDs and defect/retest links |
| Execution status | Not Run |

### Requirements and controls

- Test success, validation, authentication, exact permission, state guards and standard error envelopes.
- Test idempotent duplicates and conflicting key reuse for every mutation that requires idempotency.
- Test concurrency/version conflicts for sensitive Admin and finance decisions.
- Verify persisted records, jobs, events, notifications and audit effects.
- A provisional operation with x-work2cash-gaps cannot pass contract-complete status until those gaps close.

### Dependencies and traceability

- API-073 — GET /tasker/payout-account
- API-076 — GET /tasker/withdrawals
- API-068 — GET /wallets
- API-069 — GET /wallets/{walletId}/ledger
- API-077 — POST /admin/payout-batches
- API-078 — POST /admin/payout-batches/{batchId}/approve
- API-079 — POST /admin/payout-batches/{batchId}/mark-processed
- API-074 — POST /tasker/payout-account

### Open evidence, review or decisions

- Execution evidence and implementation status are not recorded by migration.

---

## QA-REC-02 — PostgreSQL backup and restore

| Field | Value |
| --- | --- |
| Type | assurance-suite |
| Domain | Infrastructure and recovery assurance |
| Status | not-run |
| Source | Phase 5 assurance migration based on approved flows and Phase 4 technical records |

### In plain English

Produce an encrypted off-server backup, restore into isolation and verify schema plus critical finance/audit records.

### At a glance

| Field | Value |
| --- | --- |
| Risk and priority | P0/P1 release gate |
| Owner | Infrastructure and QA |
| Environment | Staging or isolated recovery environment |
| Evidence required | Named build/environment, run log, timestamps, sanitized screenshots/logs, defects and retest result |
| Execution status | Not Run |

### Requirements and controls

- Produce an encrypted off-server backup, restore into isolation and verify schema plus critical finance/audit records.
- A failed P0/P1 result blocks release until fixed and retested or formally rejected from scope.
- Do not use production personal data or secrets as test fixtures.

### Dependencies and traceability

- Relevant Phase 4 technical records
- Approved flows
- Named operational owner

### Open evidence, review or decisions

- No execution evidence recorded.

---

## QA-REC-03 — Queue retry and dead-letter recovery

| Field | Value |
| --- | --- |
| Type | assurance-suite |
| Domain | Infrastructure and recovery assurance |
| Status | not-run |
| Source | Phase 5 assurance migration based on approved flows and Phase 4 technical records |

### In plain English

Verify idempotent retry, terminal failure evidence, alerting and controlled replay for critical workers.

### At a glance

| Field | Value |
| --- | --- |
| Risk and priority | P0/P1 release gate |
| Owner | Infrastructure and QA |
| Environment | Staging or isolated recovery environment |
| Evidence required | Named build/environment, run log, timestamps, sanitized screenshots/logs, defects and retest result |
| Execution status | Not Run |

### Requirements and controls

- Verify idempotent retry, terminal failure evidence, alerting and controlled replay for critical workers.
- A failed P0/P1 result blocks release until fixed and retested or formally rejected from scope.
- Do not use production personal data or secrets as test fixtures.

### Dependencies and traceability

- Relevant Phase 4 technical records
- Approved flows
- Named operational owner

### Open evidence, review or decisions

- No execution evidence recorded.

---

## QA-MF-01 — MF-01 — First App Launch and Entry Decision

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-01-first-app-launch-and-entry-decision.md |

### In plain English

Verify the approved First App Launch and Entry Decision behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-01 — First App Launch and Entry Decision |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Installed app |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Show splash/loading state. → System: Check stored session. → User/System: If no session, show onboarding/login/register entry. → System: If session exists, run status recovery. → User/System: Route user to Home or required recovery subflow.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-01 canonical flow source
- SF-10, MF-02, MF-03, MF-04, MF-05
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-02 — MF-02 — Registration

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-02-registration.md |

### In plain English

Verify the approved Registration behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-02 — Registration |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | SF-01 OTP Verification |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Enter registration details. → System: Run OTP verification. → User/System: Create user account. → System: Check profile completeness. → User/System: If incomplete, run Complete Profile. → System: Route user to Home.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-02 canonical flow source
- SF-01, SF-02, SF-10, MF-04, MF-05
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-03 — MF-03 — Login / Session Recovery

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-03-login-session-recovery.md |

### In plain English

Verify the approved Login / Session Recovery behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-03 — Login / Session Recovery |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Existing account |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Enter login details. → System: Verify credentials/OTP. → User/System: Fetch current user state. → System: Check profile complete. → User/System: If profile incomplete, run Complete Profile. → System: Check selected mode. → User/System: If Tasker mode requires KYC/profile, route to Tasker Activation or KYC status.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-03 canonical flow source
- SF-01, SF-02, SF-03, SF-10, SF-11, SF-13, MF-04, MF-05, MF-06, MF-09
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-04 — MF-04 — Task Owner Home

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-04-task-owner-home.md |

### In plain English

Verify the approved Task Owner Home behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-04 — Task Owner Home |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Authenticated user |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Show active tasks, wallet/credits, notifications, and quick actions. → System: User can post task, view task history, manage favorites, open support, or switch mode. → User/System: App refreshes state from backend on launch/reconnect.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-04 canonical flow source
- SF-10, MF-06, MF-15, MF-16, MF-05
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-05 — MF-05 — Tasker Activation

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-05-tasker-activation.md |

### In plain English

Verify the approved Tasker Activation behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-05 — Tasker Activation |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Authenticated user |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Check profile complete. → System: If incomplete, run Complete Profile. → User/System: Create or continue TaskerProfile. → System: Select task categories/skills. → User/System: Set bio, availability, and travel preferences. → System: Run KYC. → User/System: If approved, set TaskerProfile active.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-05 canonical flow source
- SF-02, SF-03, SF-04, SF-09, MF-09, MF-13
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-06 — MF-06 — Task Owner Create and Fund Task

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-06-task-owner-create-and-fund-task.md |

### In plain English

Verify the approved Task Owner Create and Fund Task behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-06 — Task Owner Create and Fund Task |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | The Task Owner is authenticated. |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: Task Owner: Opens Post Task or resumes an existing draft. → Mobile app: Loads the current approved categories and task types. → Task Owner: Selects a category and task type and describes the work. → Backend: Creates or updates the task draft so progress is not held only in local memory. → Task Owner: Sets the required arrival time. → Task Owner: Uses GPS or enters an address manually. → Backend and maps adapter: Geocode the manual address where necessary, confirm the pin and reject a task site outside Nigeria.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: Given an authenticated Task Owner, when valid task details are entered, the backend saves a recoverable draft. A task site outside Nigeria is rejected before funding. Required proof media must be finalized before the funded task becomes matchable. The Task Owner sees task amount, fee and total before confirming payment. A frontend redirect never marks a task paid without backend verification.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-06 canonical flow source
- SF-04 Location Confirmation, SF-05 Media Upload, SF-06 Payment and Escrow, SF-10 Status Recovery, MF-07 Public Discovery, MF-08 Direct Offer
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-07 — MF-07 — Public Discovery and Tasker Interest

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-07-public-discovery-and-tasker-interest.md |

### In plain English

Verify the approved Public Discovery and Tasker Interest behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-07 — Public Discovery and Tasker Interest |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Funded task |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Task appears in Tasker available tasks list. → System: Taskers browse tasks sorted nearest first. → User/System: Taskers filter by location/category/time. → System: Tasker opens limited task preview. → User/System: Tasker confirms ability to arrive by required time. → System: Backend calculates ETA. → User/System: Task Owner reviews Tasker profile and ETA.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-07 canonical flow source
- SF-04, SF-10, MF-10, MF-11, MF-12
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-08 — MF-08 — Direct Offer to Favorite Tasker

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-08-direct-offer-to-favorite-tasker.md |

### In plain English

Verify the approved Direct Offer to Favorite Tasker behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-08 — Direct Offer to Favorite Tasker |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Funded task |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Backend creates DirectTaskOffer. → System: Tasker receives FCM notification. → User/System: Tasker opens offer. → System: Tasker confirms arrival ability. → User/System: Tasker accepts or declines through API. → System: If accepted, task locks to Tasker. → User/System: If declined/expired, Task Owner can send to another favorite, convert to public discovery, or cancel.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-08 canonical flow source
- SF-10, MF-10, MF-07, MF-12
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-09 — MF-09 — Tasker Browse and Accept Task

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-09-tasker-browse-and-accept-task.md |

### In plain English

Verify the approved Tasker Browse and Accept Task behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-09 — Tasker Browse and Accept Task |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Tasker active |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Confirm TaskerProfile active and KYC approved. → System: Confirm Tasker is in Nigeria. → User/System: Show available tasks sorted nearest first. → System: Tasker filters by location/category/time. → User/System: Tasker opens limited preview. → System: Tasker confirms arrival ability. → User/System: Tasker submits interest or accepts direct offer.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-09 canonical flow source
- SF-03, SF-04, SF-09, MF-10
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-10 — MF-10 — Active Task Execution

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-10-active-task-execution.md |

### In plain English

Verify the approved Active Task Execution behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-10 — Active Task Execution |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Accepted task |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Enable task chat, voice messages, masked calls, and live tracking. → System: Tasker taps Start Journey. → User/System: ETA guard uses 5 minutes plus 10% journey milestone. → System: Tasker taps I have arrived. → User/System: Tasker taps Begin Task. → System: Tasker performs work. → User/System: Tasker uploads proof of work done.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-10 canonical flow source
- SF-05, SF-07, SF-08, SF-10, MF-14, MF-12, MF-16
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-11 — MF-11 — Task Owner Rejection

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-11-task-owner-rejection.md |

### In plain English

Verify the approved Task Owner Rejection behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-11 — Task Owner Rejection |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Tasker interest/acceptance state |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Task Owner taps reject. → System: Select rejection reason. → User/System: Backend checks task state and rejection window. → System: Log TaskOwnerRejection. → User/System: If movement-stage rejection repeats, create warning/risk flag. → System: Task returns to discovery/direct-offer options.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-11 canonical flow source
- SF-08, MF-07, MF-08, MF-12
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-12 — MF-12 — Cancellation / No-Show

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-12-cancellation-no-show.md |

### In plain English

Verify the approved Cancellation / No-Show behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-12 — Cancellation / No-Show |
| Risk and priority | P0/P1 high-risk path |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Task state |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Identify actor and task state. → System: Apply cancellation/no-show policy. → User/System: Apply penalty, warning, strike, or no penalty. → System: Update escrow/wallet state. → User/System: If contested, open report/dispute. → System: Return task to matching or close task depending on state.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-12 canonical flow source
- SF-08, SF-10, MF-07, MF-14, MF-16
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-13 — MF-13 — Tasker Withdrawal

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-13-tasker-withdrawal.md |

### In plain English

Verify the approved Tasker Withdrawal behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-13 — Tasker Withdrawal |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Tasker wallet |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Check Tasker wallet balance. → System: Confirm saved payout account or run payout account setup. → User/System: Validate minimum withdrawal amount: ₦1,000. → System: Confirm withdrawal request with PIN. → User/System: Check active issue/dispute against Tasker. → System: If no active issue, accept withdrawal request. → User/System: If disputed, require admin authorization for affected payout.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-13 canonical flow source
- SF-10, SF-12, MF-04, MF-09
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-14 — MF-14 — Completion and Settlement

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-14-completion-and-settlement.md |

### In plain English

Verify the approved Completion and Settlement behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-14 — Completion and Settlement |
| Risk and priority | P0/P1 high-risk path |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Completion proof |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Task Owner reviews completion proof. → System: If satisfied, Task Owner confirms completion. → User/System: Backend releases escrow to Tasker wallet. → System: Commission tier is applied. → User/System: Both parties can rate. → System: Task Owner can favorite Tasker. → User/System: If refused, open report/dispute and settlement hold applies to affected task.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-14 canonical flow source
- SF-05, SF-08, MF-15, MF-13, MF-16
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-15 — MF-15 — Favorites

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-15-favorites.md |

### In plain English

Verify the approved Favorites behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-15 — Favorites |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Completed task |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Task Owner rates Tasker after completion. → System: Task Owner chooses Add to Favorites. → User/System: Backend creates FavoriteTasker record. → System: Task Owner can later select favorite when creating task. → User/System: Task Owner can remove or block favorite.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-15 canonical flow source
- MF-08, MF-06
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-16 — MF-16 — Support Live Chat

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-16-support-live-chat.md |

### In plain English

Verify the approved Support Live Chat behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-16 — Support Live Chat |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Authenticated user |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: User selects issue category. → System: Create/open support chat session. → User/System: Assign support agent where available. → System: User and support chat in real time. → User/System: Support may resolve, create ticket, request evidence, or direct user to report/dispute flow. → System: Close support session.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-16 canonical flow source
- SF-05, SF-08, SF-10, MF-04, MF-09, MF-12
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-17 — MF-17 — Referral

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-17-referral.md |

### In plain English

Verify the approved Referral behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-17 — Referral |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Authenticated user |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Show referral code/link. → System: User shares referral. → User/System: New user signs up with referral. → System: System tracks referred user activity. → User/System: Reward is granted only after referred user completes 5 paid tasks. → System: Wallet credit is issued.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-17 canonical flow source
- CONTRACT-REFERRAL-001, MF-02, MF-14, MF-04, MF-13, AF-15
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-18 — MF-18 — Profile and Settings Management

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-18-profile-and-settings-management.md |

### In plain English

Verify the approved Profile and Settings Management behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-18 — Profile and Settings Management |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Authenticated user |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Open Profile/Settings. → System: View profile details. → User/System: Edit allowed profile fields. → System: Manage saved addresses. → User/System: Open notification preferences. → System: Open help/support. → User/System: Logout if needed.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-18 canonical flow source
- SF-01, SF-02, SF-10, MF-04, MF-19, MF-20, MF-16
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-19 — MF-19 — Security and Device Management

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-19-security-and-device-management.md |

### In plain English

Verify the approved Security and Device Management behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-19 — Security and Device Management |
| Risk and priority | P0/P1 high-risk path |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Authenticated user |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Open Security settings. → System: Create or confirm security PIN. → User/System: View active devices/sessions. → System: Revoke other sessions where needed. → User/System: For sensitive action, enter PIN. → System: Backend verifies PIN. → User/System: Action proceeds or rate-limit/cooldown applies.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-19 canonical flow source
- SF-01, SF-10, MF-18, MF-13, SF-12
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-20 — MF-20 — Notification Center and Preferences

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-20-notification-center-and-preferences.md |

### In plain English

Verify the approved Notification Center and Preferences behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-20 — Notification Center and Preferences |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Authenticated user |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Open notification center. → System: View all/unread notifications. → User/System: Open a notification. → System: Deep link to related task, payment, support, report, referral, or security screen. → User/System: Mark as read. → System: Open preferences. → User/System: Toggle allowed notification categories.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-20 canonical flow source
- SF-10, MF-04, MF-10, MF-16, MF-18
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-21 — MF-21 — Tasker Availability and Work Preferences

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-21-tasker-availability-and-work-preferences.md |

### In plain English

Verify the approved Tasker Availability and Work Preferences behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-21 — Tasker Availability and Work Preferences |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Approved TaskerProfile |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Confirm TaskerProfile is active and KYC-approved. → System: Set available/unavailable. → User/System: Set working hours. → System: Select preferred task categories. → User/System: Set maximum travel distance within platform cap. → System: Confirm location permission while available. → User/System: Save preferences.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-21 canonical flow source
- SF-03, SF-04, SF-09, MF-09, MF-10
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-22 — MF-22 — Ratings and Reviews

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-22-ratings-and-reviews.md |

### In plain English

Verify the approved Ratings and Reviews behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-22 — Ratings and Reviews |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Completed task |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Show rating prompt after completion. → System: Task Owner rates Tasker and may add optional review. → User/System: Task Owner may add Tasker to Favorites. → System: Tasker rates Task Owner and may add optional review. → User/System: Backend enforces one rating per actor per completed task. → System: Ratings update Tasker display and Task Owner trust profile. → User/System: Reported reviews route to admin moderation.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-22 canonical flow source
- SF-08, MF-15, MF-24, MF-16
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-23 — MF-23 — Emergency Support

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-23-emergency-support.md |

### In plain English

Verify the approved Emergency Support behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-23 — Emergency Support |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Authenticated user |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Show safety guidance and platform-support limitation. → System: Select emergency category. → User/System: Attach evidence where useful. → System: Create high-priority support session or ticket. → User/System: Wake/alert support/admin where operationally possible. → System: User sees waiting or connected state. → User/System: Support handles, escalates, or links to report/dispute.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-23 canonical flow source
- SF-05, SF-08, SF-10, MF-16, MF-12, MF-10
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-MF-24 — MF-24 — Rebook / Repeat Task

| Field | Value |
| --- | --- |
| Type | flow-acceptance-suite |
| Domain | Mobile flow acceptance |
| Status | not-run |
| Source | content/flows/mobile/main/MF-24-rebook-repeat-task.md |

### In plain English

Verify the approved Rebook / Repeat Task behavior without relying on hidden context or unapproved shortcuts.

### At a glance

| Field | Value |
| --- | --- |
| Flow | MF-24 — Rebook / Repeat Task |
| Risk and priority | P1 core flow |
| Owner | Mobile QA with Mobile and Backend reviewers |
| Environment | Staging with sandbox providers and synthetic data |
| Build version | Record the exact Mobile/Admin/API build at execution |
| Preconditions | Completed task |
| Seed data | Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data |
| Evidence required | Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references |
| Execution status | Not Run; update through the release evidence process |

### Requirements and controls

- Happy path: User/System: Open completed task. → System: Tap Rebook. → User/System: App pre-fills task category, task type, description, location, duration, and previous Tasker where available. → System: Task Owner reviews/edits details. → User/System: Set new required arrival time. → System: Upload fresh proof where work condition may have changed. → User/System: Review price and fees.
- Decision branches: Exercise every documented branch and state guard.
- Recovery: Exercise documented errors, retry, re-entry and safe failure.
- Expected result: A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone. A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path. The implementation preserves every approved happy-path step and terminal state. No failure displays success before the authoritative result exists. Every next flow is selected by a stated ending/permission/action condition.
- Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.

### Dependencies and traceability

- MF-24 canonical flow source
- SF-04, SF-05, SF-06, MF-06, MF-08, MF-07
- Assigned Phase 3 task/week where implementation is scheduled

### Open evidence, review or decisions

- No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested.

---

## QA-PERF-01 — Capacity, latency and cost guards

| Field | Value |
| --- | --- |
| Type | assurance-suite |
| Domain | Performance and cost assurance |
| Status | not-run |
| Source | Phase 5 assurance migration based on approved flows and Phase 4 technical records |

### In plain English

Verify API/socket targets, database/Valkey thresholds, queue age, paid provider budgets and no paid polling loops.

### At a glance

| Field | Value |
| --- | --- |
| Risk and priority | P0/P1 release gate |
| Owner | QA with affected owners |
| Environment | Staging or isolated recovery environment |
| Evidence required | Named build/environment, run log, timestamps, sanitized screenshots/logs, defects and retest result |
| Execution status | Not Run |

### Requirements and controls

- Verify API/socket targets, database/Valkey thresholds, queue age, paid provider budgets and no paid polling loops.
- A failed P0/P1 result blocks release until fixed and retested or formally rejected from scope.
- Do not use production personal data or secrets as test fixtures.

### Dependencies and traceability

- Relevant Phase 4 technical records
- Approved flows
- Named operational owner

### Open evidence, review or decisions

- No execution evidence recorded.

---

## QA-PROVIDER-01 — Paystack validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the Paystack integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | Paystack |
| Service domain | Payments - Collections |
| Selection status | selected-unverified |
| Owner | Backend Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Keep payment or payout pending; reconcile authoritative provider state and never report money success early.
- Fallback: Moniepoint when validated and enabled
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-01
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-PROVIDER-02 — Moniepoint validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the Moniepoint integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | Moniepoint |
| Service domain | Payments - Collections |
| Selection status | selected-unverified |
| Owner | Backend Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Keep payment or payout pending; reconcile authoritative provider state and never report money success early.
- Fallback: Paystack when validated and enabled
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-02
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-PROVIDER-03 — Paystack Transfers validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the Paystack Transfers integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | Paystack Transfers |
| Service domain | Payouts |
| Selection status | selected-unverified |
| Owner | Backend Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Keep payment or payout pending; reconcile authoritative provider state and never report money success early.
- Fallback: Moniepoint when validated and enabled
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-03
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-PROVIDER-04 — Moniepoint validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the Moniepoint integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | Moniepoint |
| Service domain | Payouts |
| Selection status | selected-unverified |
| Owner | Backend Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Keep payment or payout pending; reconcile authoritative provider state and never report money success early.
- Fallback: Paystack when validated and enabled
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-04
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-PROVIDER-05 — Smile ID validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the Smile ID integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | Smile ID |
| Service domain | KYC |
| Selection status | selected-unverified |
| Owner | Backend Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Keep KYC pending or route to manual review; never activate a Tasker from client or callback text alone.
- Fallback: No automatic provider swap unless the adapter, product state and operations approval explicitly allow it
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-05
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-PROVIDER-06 — Google Maps Platform validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the Google Maps Platform integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | Google Maps Platform |
| Service domain | Maps |
| Selection status | selected-unverified |
| Owner | Backend Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Use cached coordinates or last permitted ETA and disable paid refresh until the budget/provider guard recovers.
- Fallback: Cached result, manual address/pin confirmation and guarded later retry
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-06
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-PROVIDER-07 — Firebase Cloud Messaging validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the Firebase Cloud Messaging integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | Firebase Cloud Messaging |
| Service domain | Push Notifications |
| Selection status | selected-unverified |
| Owner | Backend Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Persist the notification outcome and allow the app to fetch authoritative state when delivery fails.
- Fallback: No automatic provider swap unless the adapter, product state and operations approval explicitly allow it
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-07
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-PROVIDER-08 — Termii validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the Termii integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | Termii |
| Service domain | SMS |
| Selection status | selected-unverified |
| Owner | Backend Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Persist the notification outcome and allow the app to fetch authoritative state when delivery fails.
- Fallback: Email remains primary; support path for critical account recovery
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-08
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-PROVIDER-09 — Resend validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the Resend integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | Resend |
| Service domain | Email |
| Selection status | candidate |
| Owner | Backend Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Persist the notification outcome and allow the app to fetch authoritative state when delivery fails.
- Fallback: SendGrid after deferred-provider validation
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-09
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-PROVIDER-10 — SendGrid validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the SendGrid integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | SendGrid |
| Service domain | Email |
| Selection status | deferred |
| Owner | Backend Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Persist the notification outcome and allow the app to fetch authoritative state when delivery fails.
- Fallback: Resend
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-10
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-PROVIDER-11 — Sentry validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the Sentry integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | Sentry |
| Service domain | Monitoring |
| Selection status | candidate |
| Owner | Infrastructure Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Sentry failure must produce a visible degraded or retryable state with logged evidence.
- Fallback: No automatic provider swap unless the adapter, product state and operations approval explicitly allow it
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-11
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-PROVIDER-12 — Shorebird validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the Shorebird integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | Shorebird |
| Service domain | Mobile Updates |
| Selection status | selected-unverified |
| Owner | Backend Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Shorebird failure must produce a visible degraded or retryable state with logged evidence.
- Fallback: No automatic provider swap unless the adapter, product state and operations approval explicitly allow it
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-12
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-PROVIDER-13 — Infobip validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the Infobip integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | Infobip |
| Service domain | Masked Calls |
| Selection status | candidate |
| Owner | Backend Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Disable masked calls and retain chat/voice-note alternatives; never reveal real phone numbers.
- Fallback: Feature disablement, then the next validated provider candidate; chat remains available
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-13
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-PROVIDER-14 — Africa's Talking validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the Africa's Talking integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | Africa's Talking |
| Service domain | Masked Calls |
| Selection status | candidate |
| Owner | Backend Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Disable masked calls and retain chat/voice-note alternatives; never reveal real phone numbers.
- Fallback: Feature disablement, then the next validated provider candidate; chat remains available
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-14
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-PROVIDER-15 — Vonage validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the Vonage integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | Vonage |
| Service domain | Masked Calls |
| Selection status | candidate |
| Owner | Backend Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Disable masked calls and retain chat/voice-note alternatives; never reveal real phone numbers.
- Fallback: Feature disablement, then the next validated provider candidate; chat remains available
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-15
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-PROVIDER-16 — Sinch validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the Sinch integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | Sinch |
| Service domain | Masked Calls |
| Selection status | candidate |
| Owner | Backend Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Disable masked calls and retain chat/voice-note alternatives; never reveal real phone numbers.
- Fallback: Feature disablement, then the next validated provider candidate; chat remains available
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-16
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-PROVIDER-17 — DigitalOcean validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the DigitalOcean integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | DigitalOcean |
| Service domain | Hosting |
| Selection status | selected-unverified |
| Owner | Infrastructure Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Enter the relevant incident runbook, protect data integrity and restore only from verified evidence.
- Fallback: No automatic provider swap unless the adapter, product state and operations approval explicitly allow it
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-17
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-PROVIDER-18 — DigitalOcean Spaces or S3-compatible storage validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the DigitalOcean Spaces or S3-compatible storage integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | DigitalOcean Spaces or S3-compatible storage |
| Service domain | Object/Backup Storage |
| Selection status | selected-unverified |
| Owner | Infrastructure Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Enter the relevant incident runbook, protect data integrity and restore only from verified evidence.
- Fallback: No automatic provider swap unless the adapter, product state and operations approval explicitly allow it
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-18
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-PROVIDER-19 — WhoGoHost validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the WhoGoHost integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | WhoGoHost |
| Service domain | Domain |
| Selection status | selected-unverified |
| Owner | Infrastructure Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Enter the relevant incident runbook, protect data integrity and restore only from verified evidence.
- Fallback: No automatic provider swap unless the adapter, product state and operations approval explicitly allow it
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-19
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-PROVIDER-20 — Firebase Analytics validation

| Field | Value |
| --- | --- |
| Type | provider-suite |
| Domain | Provider assurance |
| Status | not-run |
| Source | content/technical/platform.json |

### In plain English

Verify the Firebase Analytics integration, cost guard, failure behavior and operational ownership before it can be production-enabled.

### At a glance

| Field | Value |
| --- | --- |
| Provider | Firebase Analytics |
| Service domain | Analytics |
| Selection status | deferred |
| Owner | Backend Lead |
| Environment | Sandbox first; production only after recorded approval |
| Evidence required | Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval |
| Execution status | Not Run |

### Requirements and controls

- Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.
- Firebase Analytics failure must produce a visible degraded or retryable state with logged evidence.
- Fallback: No automatic provider swap unless the adapter, product state and operations approval explicitly allow it
- Disablement: Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.
- Never use production credentials or personal data in sandbox validation.

### Dependencies and traceability

- PROVIDER-20
- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Open evidence, review or decisions

- Official provider evidence and an executed sandbox run are still required.

---

## QA-REC-01 — Socket reconnect and offline recovery

| Field | Value |
| --- | --- |
| Type | assurance-suite |
| Domain | Recovery assurance |
| Status | not-run |
| Source | Phase 5 assurance migration based on approved flows and Phase 4 technical records |

### In plain English

Verify reconnect, room reauthorization, REST reconciliation, missing-message recovery and safe offline states.

### At a glance

| Field | Value |
| --- | --- |
| Risk and priority | P0/P1 release gate |
| Owner | QA with affected owners |
| Environment | Staging or isolated recovery environment |
| Evidence required | Named build/environment, run log, timestamps, sanitized screenshots/logs, defects and retest result |
| Execution status | Not Run |

### Requirements and controls

- Verify reconnect, room reauthorization, REST reconciliation, missing-message recovery and safe offline states.
- A failed P0/P1 result blocks release until fixed and retested or formally rejected from scope.
- Do not use production personal data or secrets as test fixtures.

### Dependencies and traceability

- Relevant Phase 4 technical records
- Approved flows
- Named operational owner

### Open evidence, review or decisions

- No execution evidence recorded.

---

## RELEASE-00 — Gate 0 — Documentation Baseline

| Field | Value |
| --- | --- |
| Type | release-gate |
| Domain | Release decision |
| Status | not-run |
| Source | Legacy QA and Go-Live Readiness Checklist v1, migrated into the consolidated release register |

### In plain English

All execution documents are published, guarded, linked from the main architecture document and accepted as implementation baseline.

### At a glance

| Field | Value |
| --- | --- |
| Gate | Gate 0 |
| Primary owner | Technical Lead |
| Allowed result | Passed, Failed or Conditionally Accepted with named risk and approver |
| Evidence required | Evidence links, acceptance date, build/environment, blocker list, accepted risks and owner |
| Current result | Not Run / no release evidence attached |

### Requirements and controls

- All execution documents are published, guarded, linked from the main architecture document and accepted as implementation baseline.
- No P0 or P1 defect remains open at Go/No-Go.
- A conditional acceptance names the risk, impact, workaround, owner, approver and follow-up date.
- The Go/No-Go record must identify rollback readiness and launch ownership.

### Dependencies and traceability

- Completed QA suites
- Release candidate build
- Release evidence register

### Open evidence, review or decisions

- No evidence or acceptance decision is recorded by this migration.

---

## RELEASE-01 — Gate 1 — Feature Complete

| Field | Value |
| --- | --- |
| Type | release-gate |
| Domain | Release decision |
| Status | not-run |
| Source | Legacy QA and Go-Live Readiness Checklist v1, migrated into the consolidated release register |

### In plain English

Mobile, admin and backend have completed planned MVP flows with no known missing core flow.

### At a glance

| Field | Value |
| --- | --- |
| Gate | Gate 1 |
| Primary owner | All Teams |
| Allowed result | Passed, Failed or Conditionally Accepted with named risk and approver |
| Evidence required | Evidence links, acceptance date, build/environment, blocker list, accepted risks and owner |
| Current result | Not Run / no release evidence attached |

### Requirements and controls

- Mobile, admin and backend have completed planned MVP flows with no known missing core flow.
- No P0 or P1 defect remains open at Go/No-Go.
- A conditional acceptance names the risk, impact, workaround, owner, approver and follow-up date.
- The Go/No-Go record must identify rollback readiness and launch ownership.

### Dependencies and traceability

- Completed QA suites
- Release candidate build
- Release evidence register

### Open evidence, review or decisions

- No evidence or acceptance decision is recorded by this migration.

---

## RELEASE-02 — Gate 2 — Integration Complete

| Field | Value |
| --- | --- |
| Type | release-gate |
| Domain | Release decision |
| Status | not-run |
| Source | Legacy QA and Go-Live Readiness Checklist v1, migrated into the consolidated release register |

### In plain English

Mobile, admin, backend, sockets, queues, providers, database and object storage work together on staging.

### At a glance

| Field | Value |
| --- | --- |
| Gate | Gate 2 |
| Primary owner | All Teams |
| Allowed result | Passed, Failed or Conditionally Accepted with named risk and approver |
| Evidence required | Evidence links, acceptance date, build/environment, blocker list, accepted risks and owner |
| Current result | Not Run / no release evidence attached |

### Requirements and controls

- Mobile, admin, backend, sockets, queues, providers, database and object storage work together on staging.
- No P0 or P1 defect remains open at Go/No-Go.
- A conditional acceptance names the risk, impact, workaround, owner, approver and follow-up date.
- The Go/No-Go record must identify rollback readiness and launch ownership.

### Dependencies and traceability

- Completed QA suites
- Release candidate build
- Release evidence register

### Open evidence, review or decisions

- No evidence or acceptance decision is recorded by this migration.

---

## RELEASE-03 — Gate 3 — Regression Complete

| Field | Value |
| --- | --- |
| Type | release-gate |
| Domain | Release decision |
| Status | not-run |
| Source | Legacy QA and Go-Live Readiness Checklist v1, migrated into the consolidated release register |

### In plain English

Testing Week 1 regression passes for auth, KYC, task, payment, matching, finance, reports, support and admin operations.

### At a glance

| Field | Value |
| --- | --- |
| Gate | Gate 3 |
| Primary owner | QA Coordination |
| Allowed result | Passed, Failed or Conditionally Accepted with named risk and approver |
| Evidence required | Evidence links, acceptance date, build/environment, blocker list, accepted risks and owner |
| Current result | Not Run / no release evidence attached |

### Requirements and controls

- Testing Week 1 regression passes for auth, KYC, task, payment, matching, finance, reports, support and admin operations.
- No P0 or P1 defect remains open at Go/No-Go.
- A conditional acceptance names the risk, impact, workaround, owner, approver and follow-up date.
- The Go/No-Go record must identify rollback readiness and launch ownership.

### Dependencies and traceability

- Completed QA suites
- Release candidate build
- Release evidence register

### Open evidence, review or decisions

- No evidence or acceptance decision is recorded by this migration.

---

## RELEASE-04 — Gate 4 — Operational Readiness

| Field | Value |
| --- | --- |
| Type | release-gate |
| Domain | Release decision |
| Status | not-run |
| Source | Legacy QA and Go-Live Readiness Checklist v1, migrated into the consolidated release register |

### In plain English

Backups, restore, monitoring, alerting, runbooks, support process, payout batch process and provider support paths are ready.

### At a glance

| Field | Value |
| --- | --- |
| Gate | Gate 4 |
| Primary owner | Technical Lead |
| Allowed result | Passed, Failed or Conditionally Accepted with named risk and approver |
| Evidence required | Evidence links, acceptance date, build/environment, blocker list, accepted risks and owner |
| Current result | Not Run / no release evidence attached |

### Requirements and controls

- Backups, restore, monitoring, alerting, runbooks, support process, payout batch process and provider support paths are ready.
- No P0 or P1 defect remains open at Go/No-Go.
- A conditional acceptance names the risk, impact, workaround, owner, approver and follow-up date.
- The Go/No-Go record must identify rollback readiness and launch ownership.

### Dependencies and traceability

- Completed QA suites
- Release candidate build
- Release evidence register

### Open evidence, review or decisions

- No evidence or acceptance decision is recorded by this migration.

---

## RELEASE-05 — Gate 5 — Security And Privacy Readiness

| Field | Value |
| --- | --- |
| Type | release-gate |
| Domain | Release decision |
| Status | not-run |
| Source | Legacy QA and Go-Live Readiness Checklist v1, migrated into the consolidated release register |

### In plain English

Sensitive data, PIN, TOTP, RBAC, webhooks, media permissions, phone masking and logs pass review.

### At a glance

| Field | Value |
| --- | --- |
| Gate | Gate 5 |
| Primary owner | Backend + Admin + Mobile |
| Allowed result | Passed, Failed or Conditionally Accepted with named risk and approver |
| Evidence required | Evidence links, acceptance date, build/environment, blocker list, accepted risks and owner |
| Current result | Not Run / no release evidence attached |

### Requirements and controls

- Sensitive data, PIN, TOTP, RBAC, webhooks, media permissions, phone masking and logs pass review.
- No P0 or P1 defect remains open at Go/No-Go.
- A conditional acceptance names the risk, impact, workaround, owner, approver and follow-up date.
- The Go/No-Go record must identify rollback readiness and launch ownership.

### Dependencies and traceability

- Completed QA suites
- Release candidate build
- Release evidence register

### Open evidence, review or decisions

- No evidence or acceptance decision is recorded by this migration.

---

## RELEASE-06 — Gate 6 — Release Candidate Approval

| Field | Value |
| --- | --- |
| Type | release-gate |
| Domain | Release decision |
| Status | not-run |
| Source | Legacy QA and Go-Live Readiness Checklist v1, migrated into the consolidated release register |

### In plain English

Final mobile/admin/backend release candidates are tested, tagged and deployable.

### At a glance

| Field | Value |
| --- | --- |
| Gate | Gate 6 |
| Primary owner | Technical Lead |
| Allowed result | Passed, Failed or Conditionally Accepted with named risk and approver |
| Evidence required | Evidence links, acceptance date, build/environment, blocker list, accepted risks and owner |
| Current result | Not Run / no release evidence attached |

### Requirements and controls

- Final mobile/admin/backend release candidates are tested, tagged and deployable.
- No P0 or P1 defect remains open at Go/No-Go.
- A conditional acceptance names the risk, impact, workaround, owner, approver and follow-up date.
- The Go/No-Go record must identify rollback readiness and launch ownership.

### Dependencies and traceability

- Completed QA suites
- Release candidate build
- Release evidence register

### Open evidence, review or decisions

- No evidence or acceptance decision is recorded by this migration.

---

## RELEASE-07 — Gate 7 — Go/No-Go Approval

| Field | Value |
| --- | --- |
| Type | release-gate |
| Domain | Release decision |
| Status | not-run |
| Source | Legacy QA and Go-Live Readiness Checklist v1, migrated into the consolidated release register |

### In plain English

Final approval is recorded with blocker list, accepted risks, rollback plan and launch owner.

### At a glance

| Field | Value |
| --- | --- |
| Gate | Gate 7 |
| Primary owner | Traceworka |
| Allowed result | Passed, Failed or Conditionally Accepted with named risk and approver |
| Evidence required | Evidence links, acceptance date, build/environment, blocker list, accepted risks and owner |
| Current result | Not Run / no release evidence attached |

### Requirements and controls

- Final approval is recorded with blocker list, accepted risks, rollback plan and launch owner.
- No P0 or P1 defect remains open at Go/No-Go.
- A conditional acceptance names the risk, impact, workaround, owner, approver and follow-up date.
- The Go/No-Go record must identify rollback readiness and launch ownership.

### Dependencies and traceability

- Completed QA suites
- Release candidate build
- Release evidence register

### Open evidence, review or decisions

- No evidence or acceptance decision is recorded by this migration.

---

## QA-SEC-01 — Authentication, session and RBAC

| Field | Value |
| --- | --- |
| Type | assurance-suite |
| Domain | Security and privacy assurance |
| Status | not-run |
| Source | Phase 5 assurance migration based on approved flows and Phase 4 technical records |

### In plain English

Verify OTP limits, refresh/logout, PIN recovery, Admin TOTP, exact permissions, denial states and audit records.

### At a glance

| Field | Value |
| --- | --- |
| Risk and priority | P0/P1 release gate |
| Owner | Security and QA |
| Environment | Staging or isolated recovery environment |
| Evidence required | Named build/environment, run log, timestamps, sanitized screenshots/logs, defects and retest result |
| Execution status | Not Run |

### Requirements and controls

- Verify OTP limits, refresh/logout, PIN recovery, Admin TOTP, exact permissions, denial states and audit records.
- A failed P0/P1 result blocks release until fixed and retested or formally rejected from scope.
- Do not use production personal data or secrets as test fixtures.

### Dependencies and traceability

- Relevant Phase 4 technical records
- Approved flows
- Named operational owner

### Open evidence, review or decisions

- No execution evidence recorded.

---

## QA-SEC-02 — Sensitive-data exposure

| Field | Value |
| --- | --- |
| Type | assurance-suite |
| Domain | Security and privacy assurance |
| Status | not-run |
| Source | Phase 5 assurance migration based on approved flows and Phase 4 technical records |

### In plain English

Verify KYC, exact address, full media, phone, payment, provider and secret data are minimized and permission-gated in UI, APIs, logs, analytics and errors.

### At a glance

| Field | Value |
| --- | --- |
| Risk and priority | P0/P1 release gate |
| Owner | Security and QA |
| Environment | Staging or isolated recovery environment |
| Evidence required | Named build/environment, run log, timestamps, sanitized screenshots/logs, defects and retest result |
| Execution status | Not Run |

### Requirements and controls

- Verify KYC, exact address, full media, phone, payment, provider and secret data are minimized and permission-gated in UI, APIs, logs, analytics and errors.
- A failed P0/P1 result blocks release until fixed and retested or formally rejected from scope.
- Do not use production personal data or secrets as test fixtures.

### Dependencies and traceability

- Relevant Phase 4 technical records
- Approved flows
- Named operational owner

### Open evidence, review or decisions

- No execution evidence recorded.

---

## QA-SEC-03 — Webhook and idempotency security

| Field | Value |
| --- | --- |
| Type | assurance-suite |
| Domain | Security and privacy assurance |
| Status | not-run |
| Source | Phase 5 assurance migration based on approved flows and Phase 4 technical records |

### In plain English

Verify raw-body signatures, replay protection, duplicate events, conflicting idempotency keys and transactional side effects.

### At a glance

| Field | Value |
| --- | --- |
| Risk and priority | P0/P1 release gate |
| Owner | Security and QA |
| Environment | Staging or isolated recovery environment |
| Evidence required | Named build/environment, run log, timestamps, sanitized screenshots/logs, defects and retest result |
| Execution status | Not Run |

### Requirements and controls

- Verify raw-body signatures, replay protection, duplicate events, conflicting idempotency keys and transactional side effects.
- A failed P0/P1 result blocks release until fixed and retested or formally rejected from scope.
- Do not use production personal data or secrets as test fixtures.

### Dependencies and traceability

- Relevant Phase 4 technical records
- Approved flows
- Named operational owner

### Open evidence, review or decisions

- No execution evidence recorded.

---

## QA-SEC-04 — Media authorization and retention

| Field | Value |
| --- | --- |
| Type | assurance-suite |
| Domain | Security and privacy assurance |
| Status | not-run |
| Source | Phase 5 assurance migration based on approved flows and Phase 4 technical records |

### In plain English

Verify signed access, actor/state permissions, upload limits, moderation, deletion/retention and non-public storage.

### At a glance

| Field | Value |
| --- | --- |
| Risk and priority | P0/P1 release gate |
| Owner | Security and QA |
| Environment | Staging or isolated recovery environment |
| Evidence required | Named build/environment, run log, timestamps, sanitized screenshots/logs, defects and retest result |
| Execution status | Not Run |

### Requirements and controls

- Verify signed access, actor/state permissions, upload limits, moderation, deletion/retention and non-public storage.
- A failed P0/P1 result blocks release until fixed and retested or formally rejected from scope.
- Do not use production personal data or secrets as test fixtures.

### Dependencies and traceability

- Relevant Phase 4 technical records
- Approved flows
- Named operational owner

### Open evidence, review or decisions

- No execution evidence recorded.

---

## QA-UAT-01 — Task Owner, Tasker and Admin UAT

| Field | Value |
| --- | --- |
| Type | assurance-suite |
| Domain | User acceptance |
| Status | not-run |
| Source | Phase 5 assurance migration based on approved flows and Phase 4 technical records |

### In plain English

Run complete role-based journeys with named representatives, record product gaps separately from defects and capture acceptance decisions.

### At a glance

| Field | Value |
| --- | --- |
| Risk and priority | P0/P1 release gate |
| Owner | QA with affected owners |
| Environment | Staging or isolated recovery environment |
| Evidence required | Named build/environment, run log, timestamps, sanitized screenshots/logs, defects and retest result |
| Execution status | Not Run |

### Requirements and controls

- Run complete role-based journeys with named representatives, record product gaps separately from defects and capture acceptance decisions.
- A failed P0/P1 result blocks release until fixed and retested or formally rejected from scope.
- Do not use production personal data or secrets as test fixtures.

### Dependencies and traceability

- Relevant Phase 4 technical records
- Approved flows
- Named operational owner

### Open evidence, review or decisions

- No execution evidence recorded.

