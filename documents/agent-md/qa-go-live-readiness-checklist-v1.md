# QA / Go-Live Readiness Checklist v1

> AI-agent Markdown equivalent of `qa-go-live-readiness-checklist-v1.html`.
>
> Human-readable HTML source: `../qa-go-live-readiness-checklist-v1.html`.
> Use this Markdown version for lower-token AI context. If a task needs visual layout or exact document presentation, use the HTML page.

<div class="section cover">

<div class="brand-row">

<div class="logo">

W2C

</div>

<div>

**Work2Cash**QA / Go-Live Readiness Checklist

</div>

</div>

<div class="cover-main">

<div class="label">

Document 10

</div>

# QA / Go-Live Readiness Checklist

<div class="cover-subtitle">

Final acceptance, testing, operational readiness, rollback and launch decision checklist for Work2Cash.

</div>

<div class="meta-grid">

<div class="meta-card">

Project**Work2Cash**

</div>

<div class="meta-card">

Version**1.0**

</div>

<div class="meta-card">

Date**3 July 2026**

</div>

<div class="meta-card">

Classification**Execution Ready**

</div>

<div class="meta-card">

Build Start**6 Jul 2026**

</div>

<div class="meta-card">

Testing Start**31 Aug 2026**

</div>

<div class="meta-card">

Go-Live Target**14 Sep 2026**

</div>

<div class="meta-card">

Repo Path**documents/qa-go-live-readiness-checklist-v1.html**

</div>

</div>

<div class="badges">

<span class="badge">Go/No-Go</span> <span class="badge">QA Gates</span> <span class="badge">Provider Validation</span> <span class="badge">Rollback</span> <span class="badge">Codex Ready</span>

</div>

</div>

<div class="cover-foot">

<div>

Source of truth: Main Architecture, Flow Catalogues, API Contracts, Data Model, Provider Plan and Build Plans.

</div>

<div>

Protected by docs auth guard when published.

</div>

</div>

</div>

<div class="sticky">

<div class="sticky-inner">

**QA / Go-Live Readiness Checklist v1**

[Sources](#sources) [Gates](#gates) [Testing](#testing) [Providers](#providers) [Blockers](#blockers) [Decision](#decision)

</div>

</div>

<div role="main">

<div class="section toc">

<div class="eyebrow">

Document 10

</div>

## What This Document Is For

This checklist converts the Work2Cash architecture and implementation plans into release gates. A flow is not launch-ready just because screens exist. It is launch-ready only when the user journey, backend state, admin visibility, provider behavior, recovery path, monitoring and support process all pass.

<div class="toc-grid">

[01. Source Documents](#sources) [02. Readiness Gates](#gates) [03. Testing Calendar](#testing) [04. Product Flow Acceptance](#flows) [05. Admin Readiness](#admin) [06. Provider Validation](#providers) [07. Infrastructure Readiness](#infra) [08. Security / Privacy / Legal](#security) [09. Go-Live Blockers](#blockers) [10. Rollback Plan](#rollback) [11. Go/No-Go Decision](#decision) [12. Codex QA Instructions](#codex)

</div>

</div>

<div id="sources" class="section section">

<div class="section-num">

01

</div>

<div class="eyebrow">

Sources

</div>

## Source Documents And Evidence Chain

QA must trace every acceptance decision back to the source documents. If product behavior is unclear, the Main Enterprise Architecture remains the controlling baseline until formally revised.

<div class="table-wrap">

| Document                               | Repo Path                                           | QA Use                                                            |
|----------------------------------------|-----------------------------------------------------|-------------------------------------------------------------------|
| Main Enterprise Architecture v1        | documents/main-enterprise-architecture-v1.html      | Top-level source of truth.                                        |
| Mobile Flow Catalogue v1               | documents/mobile-flow-catalogue-v1.html             | Closed mobile flows and recovery subflows.                        |
| Admin Flow Catalogue v1                | documents/admin-flow-catalogue-v1.html              | Closed admin web flows and operational dependencies.              |
| Flow Alignment Review v1               | documents/flow-alignment-review-v1.html             | Alignment decisions across Figma, mobile, admin and architecture. |
| Legal & User-Facing Documents Pack v1  | documents/legal_user_facing_documents_pack_v1.html  | Combined user-facing policy pack.                                 |
| API & Socket Contract Specification v1 | documents/api-socket-contract-specification-v1.html | REST, socket, webhook, queue and response contracts.              |
| Data Model & Prisma Schema Planning v1 | documents/data-model-prisma-schema-planning-v1.html | Data model and schema execution baseline.                         |
| Provider Integration & Cost Control v1 | documents/provider-integration-cost-control-v1.html | Provider adapters, webhooks, costs and go-live validations.       |
| Mobile Build Plan v1                   | documents/build-plan-mobile-v1.html                 | Mobile-led implementation order.                                  |
| Admin Build Plan v1                    | documents/build-plan-admin-v1.html                  | Admin execution plan following mobile outcomes.                   |
| Backend Build Plan v1                  | documents/build-plan-backend-v1.html                | Backend execution plan following mobile needs.                    |

</div>

<div class="diagram">

<div class="diagram-head">

#### Evidence Chain

Release Proof

</div>

    Architecture decision
      -> Flow catalogue acceptance
      -> API/socket/data model contract
      -> Provider/cost-control rule
      -> Build plan task
      -> QA evidence
      -> Go/no-go decision

Every release decision should have evidence, not just verbal confirmation.

</div>

</div>

<div id="gates" class="section section">

<div class="section-num">

02

</div>

<div class="eyebrow">

Gates

</div>

## Release Readiness Gates

The release moves forward only when each gate has clear evidence. A gate can be passed, failed, or conditionally accepted with named risk and owner.

<div class="table-wrap">

| Gate   | Name                           | Pass Requirement                                                                                                                    | Primary Owner            |
|--------|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| Gate 0 | Documentation Baseline         | All execution documents are published, guarded, linked from the main architecture document and accepted as implementation baseline. | Technical Lead           |
| Gate 1 | Feature Complete               | Mobile, admin and backend have completed planned MVP flows with no known missing core flow.                                         | All Teams                |
| Gate 2 | Integration Complete           | Mobile, admin, backend, sockets, queues, providers, database and object storage work together on staging.                           | All Teams                |
| Gate 3 | Regression Complete            | Testing Week 1 regression passes for auth, KYC, task, payment, matching, finance, reports, support and admin operations.            | QA Coordination          |
| Gate 4 | Operational Readiness          | Backups, restore, monitoring, alerting, runbooks, support process, payout batch process and provider support paths are ready.       | Technical Lead           |
| Gate 5 | Security And Privacy Readiness | Sensitive data, PIN, TOTP, RBAC, webhooks, media permissions, phone masking and logs pass review.                                   | Backend + Admin + Mobile |
| Gate 6 | Release Candidate Approval     | Final mobile/admin/backend release candidates are tested, tagged and deployable.                                                    | Technical Lead           |
| Gate 7 | Go/No-Go Approval              | Final approval is recorded with blocker list, accepted risks, rollback plan and launch owner.                                       | Traceworka               |

</div>

<div class="checklist-block">

#### Gate Evidence Checklist

- <span class="check"></span>
  <div>

  Each gate has an owner and acceptance date.

  </div>
- <span class="check"></span>
  <div>

  Every failed item has severity, owner, expected fix date and linked evidence.

  </div>
- <span class="check"></span>
  <div>

  Every conditional acceptance has a documented risk and business approval.

  </div>
- <span class="check"></span>
  <div>

  No P0 or P1 issue remains open at go-live.

  </div>
- <span class="check"></span>
  <div>

  Known P2 issues have user impact, workaround and post-launch target date.

  </div>

</div>

</div>

<div id="testing" class="section section">

<div class="section-num">

03

</div>

<div class="eyebrow">

Testing

</div>

## Two-Week QA And UAT Calendar

Testing starts after the eight-week build freeze. Week 1 focuses on regression and environment readiness. Week 2 focuses on UAT, recovery, security, provider proof and final go/no-go evidence.

<div class="table-wrap">

| Day  | Date            | Focus                          | Execution Scope                                                                                                             |
|------|-----------------|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| T1D1 | Mon 31 Aug 2026 | Smoke and environment          | Verify staging API/admin/socket/mobile builds, env vars, migrations, seed data and provider sandbox keys.                   |
| T1D2 | Tue 1 Sep 2026  | Identity/KYC regression        | Test registration, login, OTP, social login, profile, PIN, sessions, KYC and admin KYC review.                              |
| T1D3 | Wed 2 Sep 2026  | Task/payment regression        | Test task creation, location, media, payment, webhook, escrow, broadcast and direct offer.                                  |
| T1D4 | Thu 3 Sep 2026  | Matching/execution regression  | Test discovery, interest, accept/reject, start journey, arrived, begin, chat, tracking and completion.                      |
| T1D5 | Fri 4 Sep 2026  | Finance/support regression     | Test wallet, withdrawal, payout batch, report, support live chat, emergency and admin resolution.                           |
| T2D1 | Mon 7 Sep 2026  | UAT round 1                    | Run full user journeys as Task Owner, Tasker and Admin with documented defects.                                             |
| T2D2 | Tue 8 Sep 2026  | Recovery/load/offline          | Test app resume, socket reconnect, payment return, KYC return, provider delays, queue retries and low-end Android behavior. |
| T2D3 | Wed 9 Sep 2026  | Security/privacy/provider      | Test PIN, TOTP, RBAC, webhook signatures, media permissions, phone masking and Sentry scrubbing.                            |
| T2D4 | Thu 10 Sep 2026 | Release candidate verification | Re-run critical happy paths and exception paths after fixes.                                                                |
| T2D5 | Fri 11 Sep 2026 | Go-live decision pack          | Produce go/no-go checklist, known issues, rollback notes, backup restore proof and provider validation proof.               |

</div>

<div class="checklist-block">

#### Daily QA Reporting Requirements

- <span class="check"></span>
  <div>

  List tests completed, tests blocked and tests deferred.

  </div>
- <span class="check"></span>
  <div>

  Record every defect with flow ID, severity, environment, reproduction steps and expected result.

  </div>
- <span class="check"></span>
  <div>

  Attach screenshots, screen recordings, request IDs, provider references or logs where relevant.

  </div>
- <span class="check"></span>
  <div>

  Separate product decision gaps from engineering defects.

  </div>
- <span class="check"></span>
  <div>

  Publish a daily go-live risk summary during both testing weeks.

  </div>

</div>

</div>

<div id="flows" class="section section">

<div class="section-num">

04

</div>

<div class="eyebrow">

Flows

</div>

## Mobile Product Flow Acceptance

Mobile is the primary product surface. Each flow must pass happy path, recovery path, error path and role-permission expectations before it is accepted.

<div class="table-wrap">

| Flow Area              | Acceptance Scope                                                                                                             |
|------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Auth/Profile           | Registration, login, OTP email-first/SMS fallback, Google/Apple login, profile completion, mode switch and session recovery. |
| KYC/Tasker Activation  | Tasker profile, NIN/BVN, biometric capture, status polling, failure recovery and admin review.                               |
| Task Owner Creation    | Category, description, amount, required arrival time, GPS/manual address, geocode, pin confirm and proof media.              |
| Payment/Escrow         | Task amount + fee display, Paystack/Moniepoint redirect/status, webhook confirmation, pending recovery and escrow creation.  |
| Broadcast/Direct Offer | Public broadcast, favorite Tasker direct offer, FCM notification, expiry/decline and fallback to public discovery.           |
| Tasker Discovery       | Visible tasks sorted nearest first, location filter, limited public preview, Nigeria eligibility and arrival confirmation.   |
| Task Owner Selection   | Candidate list, Tasker ETA/profile, accept/reject before movement or within allowed movement window.                         |
| Execution              | Start Journey, I have arrived, Begin Task, chat, voice note metadata, tracking, ETA guard and masked call entry.             |
| Completion             | Tasker proof upload, request completion, Task Owner approval, escrow settlement, rating and favorite.                        |
| Exceptions             | Cancellation, no-show, report/dispute, warning/strike, settlement hold and admin resolution.                                 |
| Wallet/Withdrawal      | Separate Task Owner/Tasker wallets, ledger, Tasker payout account, PIN-confirmed withdrawal, 14th/28th batch status.         |
| Support/Emergency      | Support live chat, emergency support path, ticket linking and clear distinction from disputes.                               |

</div>

<div class="diagram">

<div class="diagram-head">

#### Mobile Flow Acceptance Loop

Closed Flow

</div>

    Start flow
      -> complete primary action
      -> backend persists state
      -> socket/notification updates where needed
      -> app recovers after restart/reconnect
      -> admin can observe or act where required
      -> legal/support copy matches behavior
      -> flow accepted

A mobile flow is not closed until the app can recover from interruption and the admin/backend side can see the correct state.

</div>

</div>

<div id="admin" class="section section">

<div class="section-num">

05

</div>

<div class="eyebrow">

Admin

</div>

## Admin Operations Readiness

Admin readiness means the team can operate the marketplace safely after launch. Admin must not create shortcuts that break accepted product rules.

<div class="table-wrap">

| Admin Area   | Acceptance Scope                                                                           |
|--------------|--------------------------------------------------------------------------------------------|
| Admin Auth   | Login, TOTP, session expiry, forbidden state and logout.                                   |
| Dashboard    | Operational cards, use-case health, provider/queue visibility and skeleton/error states.   |
| Users/KYC    | User detail, Tasker profile, KYC queue, approve/reject/request re-verification.            |
| Tasks/Media  | Task list/detail, status timeline, proof media moderation, no admin reassignment.          |
| Reports/Risk | Reports queue, evidence review, warnings, strikes, trust impact and suspension.            |
| Finance      | Transactions, receipts, ledger, escrow, reconciliation, wallet support and payout batches. |
| Support      | Support live chat queue/session, emergency handling and case linking.                      |
| Config       | Catalog, coverage, ETA guard, media limits, payout dates, notification settings and audit. |
| Audit/RBAC   | Every high-impact action records actor, reason, target, requestId and timestamp.           |

</div>

<div class="checklist-block">

#### Admin Safety Rules

- <span class="check"></span>
  <div>

  Admin must not reassign tasks under any condition.

  </div>
- <span class="check"></span>
  <div>

  Force-cancel, KYC review, wallet support, report resolution and category changes require audit trail.

  </div>
- <span class="check"></span>
  <div>

  Every high-impact action requires reason capture.

  </div>
- <span class="check"></span>
  <div>

  RBAC forbidden states must be tested.

  </div>
- <span class="check"></span>
  <div>

  Tables and detail views must have skeleton, empty, error and retry states.

  </div>

</div>

</div>

<div id="providers" class="section section">

<div class="section-num">

06

</div>

<div class="eyebrow">

Providers

</div>

## Provider And Cost-Control Validation

Provider validation is required before live traffic. Paid providers must be protected by batching, idempotency, retries, alerts and cost limits.

<div class="table-wrap">

| Provider / Area | Validation Test                                                                                                               | Go-Live Rule                             |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|
| Paystack        | Payment intent, bank transfer/redirect flow, signed webhook, duplicate webhook idempotency, verify status and reconciliation. | Required                                 |
| Moniepoint      | Payment/collection flow, webhook verification, status verify, pending/failed reconciliation.                                  | Required                                 |
| Payout batches  | Batch creation, disputed Tasker exclusion, partial failure, retry, audit and export.                                          | Required                                 |
| Smile ID        | KYC start, NIN/BVN, biometric capture reference, callback/status mapping, admin re-verification.                              | Required                                 |
| Google Maps     | Manual address geocode, Nigeria-only task site validation, ETA computation, 5-minute + 10% journey guard.                     | Required                                 |
| FCM             | Device registration, direct offer, task, chat/support and critical notification delivery, tap-to-REST recovery.               | Required                                 |
| Termii          | SMS fallback OTP, rate limit, purpose log and failure path.                                                                   | Required                                 |
| Email           | OTP, receipt/support message templates and delivery event logging.                                                            | Required                                 |
| Sentry          | Backend, mobile and admin errors captured with PII/secrets scrubbed.                                                          | Required                                 |
| Shorebird       | Staging patch test and limitation notes.                                                                                      | Required before mobile release readiness |
| Masked calls    | Proxy number, inbound route, bridge recipient, real number hidden, cost tracked.                                              | Can remain disabled if not validated     |
| Object storage  | Signed upload, private read, media review/remove, size limit enforcement, backup storage path.                                | Required                                 |

</div>

<div class="checklist-block">

#### Cost-Control Checklist

- <span class="check"></span>
  <div>

  Google Maps ETA refresh uses 5-minute guard plus next 10% journey milestone.

  </div>
- <span class="check"></span>
  <div>

  No paid provider is called through uncontrolled auto-refresh loops.

  </div>
- <span class="check"></span>
  <div>

  Termii SMS is fallback after email OTP where appropriate.

  </div>
- <span class="check"></span>
  <div>

  Payment reconciliation jobs do not spam provider APIs.

  </div>
- <span class="check"></span>
  <div>

  Provider usage and cost are visible in admin/monitoring where practical.

  </div>
- <span class="check"></span>
  <div>

  Masked calls can remain disabled if Nigerian proxy-dial validation is incomplete.

  </div>

</div>

</div>

<div id="infra" class="section section">

<div class="section-num">

07

</div>

<div class="eyebrow">

Infrastructure

</div>

## Infrastructure, Backup And Monitoring Readiness

Production readiness requires proof that the system can run, fail visibly, back up data and recover. Self-hosting increases cost control but requires operational discipline.

<div class="table-wrap">

| Area       | Readiness Requirement                                                                                                 |
|------------|-----------------------------------------------------------------------------------------------------------------------|
| Servers    | Staging and production targets provisioned, firewall rules applied, SSH hardened, no public database/Valkey exposure. |
| Postgres   | Migrations applied, indexes reviewed, connection limits known, backup job running and restore tested.                 |
| Valkey     | Queues/cache/socket adapter configured, memory limits monitored, eviction policy understood.                          |
| BullMQ     | Critical queues visible, retries/dead-letter handling configured, stalled jobs observable.                            |
| Storage    | Signed upload and private access tested; backups stored off-server in object/S3-compatible storage.                   |
| Domains    | work2cash.ng, api, socket, admin, staging, api-staging and socket-staging DNS records validated.                      |
| TLS        | HTTPS certificates valid for production and staging subdomains.                                                       |
| Monitoring | Health/readiness, metrics, Sentry, queue/provider logs and alert destinations ready.                                  |
| Backups    | RPO 15 minutes to 1 hour and RTO 2 to 4 hours validated by restore drill.                                             |

</div>

<div class="checklist-block">

#### Backup And Restore Evidence

- <span class="check"></span>
  <div>

  A fresh production-like Postgres backup is created successfully.

  </div>
- <span class="check"></span>
  <div>

  Backup is uploaded to off-server object/S3-compatible storage.

  </div>
- <span class="check"></span>
  <div>

  Restore is tested into staging or a temporary restore database.

  </div>
- <span class="check"></span>
  <div>

  Restore result includes row count or checksum evidence for critical tables.

  </div>
- <span class="check"></span>
  <div>

  RPO and RTO targets are measured and recorded.

  </div>

</div>

</div>

<div id="security" class="section section">

<div class="section-num">

08

</div>

<div class="eyebrow">

Security

</div>

## Security, Privacy And Legal Readiness

Work2Cash handles KYC, location, wallet, task media, phone privacy and payment-related data. Launch cannot proceed if sensitive data protection is uncertain.

<div class="table-wrap">

| Area              | Readiness Requirement                                                                                                    |
|-------------------|--------------------------------------------------------------------------------------------------------------------------|
| Authentication    | JWT/refresh, OTP rate limit, social login, logout and session revoke tested.                                             |
| Sensitive actions | PIN confirmation used for withdrawals and sensitive account actions; OTP used for PIN recovery/contact verification.     |
| Admin             | TOTP, RBAC, audit logging and high-impact action reason capture tested.                                                  |
| Payments          | Webhook signatures, idempotency, reconciliation and provider reference storage tested.                                   |
| Wallet            | Append-only ledger behavior tested; no direct Task Owner withdrawal path.                                                |
| KYC               | Smile ID data access restricted and KYC details scrubbed from logs.                                                      |
| Media             | Proof photos/videos are permission-controlled and exact/private media is not exposed publicly.                           |
| Location          | Exact address shown only after accepted/payment rules are satisfied.                                                     |
| Phone privacy     | Masked call behavior does not expose real phone numbers.                                                                 |
| Legal links       | Terms, privacy, KYC consent, location notice, wallet/payment terms and safety/cancellation policies accessible from app. |

</div>

<div class="checklist-block">

#### Legal/User-Facing Copy Checks

- <span class="check"></span>
  <div>

  Payment wording does not imply funds are released before task completion/settlement.

  </div>
- <span class="check"></span>
  <div>

  Calls wording states: Calls use your normal airtime. Work2Cash protects your phone number.

  </div>
- <span class="check"></span>
  <div>

  Task Owner wallet wording states direct withdrawal requires support.

  </div>
- <span class="check"></span>
  <div>

  Cancellation/no-show penalties, warnings and strikes are shown before confirmation where applicable.

  </div>
- <span class="check"></span>
  <div>

  Referral reward wording states reward is wallet credit after referred user completes 5 paid tasks.

  </div>

</div>

</div>

<div id="blockers" class="section section">

<div class="section-num">

09

</div>

<div class="eyebrow">

Blockers

</div>

## Go-Live Blockers

Any unresolved item in this list blocks production launch unless a formal decision disables the affected feature and proves the rest of the product remains safe.

<div class="table-wrap">

| Area               | Blocking Condition                                                                                                                                         |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Payments           | Paystack or Moniepoint webhook signature verification fails, duplicate webhook handling is unsafe, or frontend redirect is treated as final payment proof. |
| Wallet/Ledger      | Any wallet, escrow, payout, refund or commission ledger mismatch is unresolved.                                                                            |
| KYC                | Smile ID KYC submit/status/admin review path fails or KYC data is exposed to unauthorized users.                                                           |
| Core Task Flow     | Task Owner cannot create/fund/broadcast/direct-offer a task, or Tasker cannot discover/accept/execute/complete a task.                                     |
| Task Status        | Start Journey, I have arrived, Begin Task, completion and cancellation state guards are inconsistent.                                                      |
| Admin Security     | Admin TOTP, RBAC, audit reason capture or high-impact action controls are broken.                                                                          |
| Privacy            | Real phone numbers, private task addresses, KYC details, payment secrets or protected proof media leak.                                                    |
| Socket Reliability | Chat, tracking or support live chat cannot recover from reconnect through REST source of truth.                                                            |
| Notifications      | FCM does not work for direct offer, task, chat/support or critical operational notifications.                                                              |
| Backups            | Postgres backup restore has not been tested successfully before production launch.                                                                         |
| Monitoring         | Sentry, health checks, queue/provider failure visibility and basic alerts are not available.                                                               |
| Legal              | Required user-facing legal/policy links are missing from the app/admin or are materially inconsistent with product behavior.                               |

</div>

<div class="callout red">

**Blocker rule**

No payment, wallet, KYC, privacy, task execution, backup, admin security or core flow blocker should be waived casually. If a blocker is waived, the feature must be disabled or the risk must be explicitly accepted by final approvers.

</div>

</div>

<div id="rollback" class="section section">

<div class="section-num">

10

</div>

<div class="eyebrow">

Rollback

</div>

## Rollback And Incident Response Plan

Rollback must protect money, identity data, task state and user trust. Rollback is not only code reversal; it includes provider state, queues, database state and user communication.

<div class="table-wrap">

| Step | Action                           | Execution Detail                                                                                                              |
|------|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| 1    | Pause launch actions             | Stop new release rollout, pause marketing/public traffic increase and notify internal owners.                                 |
| 2    | Freeze data-sensitive operations | If issue affects payments/wallets, pause payout processing and new risky financial actions.                                   |
| 3    | Route traffic back               | Revert API/admin/mobile configuration to last known stable release or disable affected feature through config where possible. |
| 4    | Preserve evidence                | Export request IDs, provider references, Sentry issues, queue IDs, audit logs and affected user/task IDs.                     |
| 5    | Recover data safely              | Use migrations/restore only with explicit technical approval. Never manually mutate wallet balances outside ledger rules.     |
| 6    | Communicate status               | Prepare user/support messaging for affected flows and expected resolution timeline.                                           |
| 7    | Post-incident review             | Document root cause, fix, regression test and prevention rule before reattempting release.                                    |

</div>

<div class="diagram">

<div class="diagram-head">

#### Rollback Decision Tree

Release Safety

</div>

    Issue found
      -> Is money/wallet/KYC/privacy affected?
          -> yes: pause risky operations first
          -> no: isolate affected feature
      -> preserve logs and provider references
      -> rollback config/code if needed
      -> verify data integrity
      -> communicate status
      -> approve re-release only after regression proof

Financial and privacy issues get priority over feature availability.

</div>

</div>

<div id="decision" class="section section">

<div class="section-num">

11

</div>

<div class="eyebrow">

Decision

</div>

## Final Go/No-Go Decision Pack

The go-live decision should be a written record. It should identify what was tested, what failed, what was fixed, what remains open and who approved launch.

<div class="table-wrap">

| Decision Item              | Required Evidence                                                                                   |
|----------------------------|-----------------------------------------------------------------------------------------------------|
| Release candidate versions | Backend commit/tag, admin build, mobile build, database migration version and environment versions. |
| Gate status                | Gate 0 to Gate 7 pass/fail/conditional status.                                                      |
| Defect summary             | Open defects by severity, owner, workaround and target date.                                        |
| Provider proof             | Payment, KYC, maps, FCM, Termii/email, Sentry, storage and backup validation evidence.              |
| Operational proof          | Support process, payout batch process, monitoring alerts, restore drill and rollback plan.          |
| Legal proof                | Combined legal pack published and app/admin links confirmed.                                        |
| Accepted risks             | Named risks, owner, mitigation and approval.                                                        |
| Final decision             | Go, no-go or delayed launch decision with timestamp and approver.                                   |

</div>

### 30-Day Launch Success Criteria

<div class="table-wrap">

| Metric                            | Target                                                                                                            |
|-----------------------------------|-------------------------------------------------------------------------------------------------------------------|
| Payment success rate              | Above 95% during first 30 days.                                                                                   |
| Escrow ledger mismatch            | 0 mismatches.                                                                                                     |
| Critical unresolved Sentry errors | 0 before launch.                                                                                                  |
| API uptime                        | Above 99% during first 30 days.                                                                                   |
| Task completion                   | Improves week over week.                                                                                          |
| KYC SLA                           | Within 24 hours.                                                                                                  |
| Withdrawal SLA                    | Within 24 hours or next payout batch rule where applicable.                                                       |
| Support SLA                       | First response within 2 business hours.                                                                           |
| Emergency support                 | Priority response target under 15 minutes.                                                                        |
| Privacy/security                  | No confirmed leakage of phone numbers, KYC data, payment secrets, private task addresses or protected task media. |
| Masked call privacy               | Real phone numbers are not exposed during task-bound calls.                                                       |
| Google Maps/API cost              | Spend remains inside approved budget guard.                                                                       |

</div>

<div class="code-block">

<div class="code-title">

Go/No-Go Record Template

</div>

    Decision: GO / NO-GO / DELAYED
    Decision date:
    Release candidate:
    Migration version:
    Gate summary:
    Open P0 issues:
    Open P1 issues:
    Accepted risks:
    Rollback owner:
    Support owner:
    Provider escalation contacts verified:
    Final approver:
    Notes:

</div>

</div>

<div id="codex" class="section section">

<div class="section-num">

12

</div>

<div class="eyebrow">

Codex

</div>

## Codex And AI-Agent QA Instructions

Use the block below when asking Codex or another AI agent to execute a QA task, inspect a flow, write tests or update documentation after a defect is found.

<div class="code-block">

<div class="code-title">

QA AI Task Block

</div>

    Task ID:
    Document:
    Gate or flow:
    Primary owner:
    Evidence required:
    Systems to test:
    Provider dependencies:
    Data setup needed:
    Steps:
    Expected result:
    Failure/blocker criteria:
    Artifacts to attach:
    Commit message if docs/code change is needed:

</div>

<div class="table-wrap">

| Instruction              | Required Behavior                                                                                                                        |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| Use source documents     | Read the relevant flow catalogue, API/socket contract, data model, provider plan and build plan before executing QA changes.             |
| Test one thing at a time | Do not combine unrelated QA fixes or documentation changes in one commit.                                                                |
| Evidence first           | Every pass/fail judgment needs evidence: screenshot, recording, log, requestId, provider reference, test output or written reproduction. |
| Respect product rules    | Do not introduce admin reassignment, Facebook login, card-entry-first payment or dispute live chat while fixing tests.                   |
| Protect data             | Do not paste secrets, OTPs, KYC details, real phone numbers, private addresses or payment payloads into docs or logs.                    |
| Commit standard          | Use clear commits such as test(mobile): cover task execution status recovery or docs(qa): update go-live checklist evidence.             |

</div>

</div>

</div>

<div class="footer-inner">

<div>

#### Work2Cash

QA / Go-Live Readiness Checklist v1 for final launch acceptance.

</div>

<div>

#### Document Location

`documents/qa-go-live-readiness-checklist-v1.html`

</div>

<div>

#### Guard Requirement

Protected HTML documents must include the documentation auth guard script before closing body.

</div>

</div>
