# Backend Build Plan v1

> AI-agent Markdown equivalent of `build-plan-backend-v1.html`.
>
> Human-readable HTML source: `.Backend Build Plan v1`.
> Use this Markdown version for lower-token AI context. If a task needs visual layout or exact document presentation, use the HTML page.

<div class="section cover">

<div class="brand-row">

<div class="logo">

W2C

</div>

<div>

**Work2Cash**Backend Build Execution Plan

</div>

</div>

<div class="cover-main">

<div class="label">

Document 9C

</div>

# Backend Build Execution Plan

<div class="cover-subtitle">

Backend execution plan that delivers APIs, sockets, schemas, providers and admin contracts in the order mobile needs them.

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

Start Date**6 Jul 2026**

</div>

<div class="meta-card">

Build Window**8 Weeks**

</div>

<div class="meta-card">

Testing Window**2 Weeks**

</div>

<div class="meta-card">

Method**Mobile-Led**

</div>

</div>

<div class="badges">

<span class="badge">Codex Ready</span> <span class="badge">Mobile-Led</span> <span class="badge">Dependency Ordered</span> <span class="badge">Day-by-Day</span> <span class="badge">AI Agent Tasks</span>

</div>

</div>

<div class="cover-foot">

<div>

Source of truth: Documents 1, 6, 7, 8 and the Mobile/Admin Flow Catalogues.

</div>

<div>

Portal page: Backend Build Plan v1

</div>

</div>

</div>

<div class="sticky">

<div class="sticky-inner">

**Backend Build Execution Plan v1**

[Principles](#principles) [Dependencies](#dependencies) [Build](#build) [Testing](#testing) [Codex](#codex)

</div>

</div>

<div role="main">

<div class="section toc">

<div class="eyebrow">

Document 9C

</div>

## Backend Follows Mobile Priority

Backend must be contract-first and mobile-led. It should publish stubs and stable DTOs early, then replace stubs with real use cases without breaking mobile/admin integration.

<div class="toc-grid">

[01. Backend Build Principles](#principles) [02. Mobile-Led Availability](#dependencies) [03. Backend Architecture Rules](#architecture) [04. Eight-Week Build Plan](#build) [05. Two-Week Testing Plan](#testing) [06. Codex Execution Instructions](#codex)

</div>

</div>

<div id="principles" class="section section">

<div class="section-num">

01

</div>

<div class="eyebrow">

Principles

</div>

## Backend Build Principles

<div class="table-wrap">

| Rule                   | Execution Requirement                                                                                           |
|------------------------|-----------------------------------------------------------------------------------------------------------------|
| Mobile-led             | Backend APIs must be available in the order mobile needs them, not in arbitrary backend module preference.      |
| Contract-first         | Publish DTOs, response shapes, OpenAPI, socket events and stubs before frontend integration starts.             |
| Hexagonal architecture | Use cases depend on ports. Provider SDKs and Prisma stay inside adapters/repositories.                          |
| Use-case health        | Every use case records last used, success/failure, duration and error code for admin use-case health dashboard. |
| Idempotency            | Payments, webhooks, wallets, task transitions, media finalization, withdrawals and payouts must be idempotent.  |
| Cost control           | No paid provider polling loops. Google Maps uses 5-minute + 10% journey ETA guard.                              |
| Commits                | Commit feature by feature or fix by fix. Do not stack unrelated schema/API/provider changes.                    |

</div>

</div>

<div id="dependencies" class="section section">

<div class="section-num">

02

</div>

<div class="eyebrow">

Availability

</div>

## Mobile-Led Backend Availability

<div class="table-wrap">

| Window    | Backend Availability                    | Contracts/Data                                                                                         | Mobile Impact                                                                   |
|-----------|-----------------------------------------|--------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| W1D1-W1D2 | Contracts and schema foundation         | Response shapes, auth stubs, /me, OpenAPI shell, Prisma initial migrations.                            | Mobile can scaffold auth and app entry without waiting for full business logic. |
| W1D3-W1D5 | Auth/Profile/PIN ready                  | Register, login, OTP, social auth stubs, profile, mode, PIN, sessions, notifications preferences.      | Mobile completes auth/profile/security flows; admin can start auth shell.       |
| W2D1-W2D3 | KYC/Catalog/Task draft ready            | Tasker profile, KYC, catalog, geocode, task draft, media upload contracts.                             | Mobile implements KYC and task creation flows.                                  |
| W2D4-W2D5 | Payment/Broadcast/Direct offer ready    | Payment intent, verify, webhooks sandbox, escrow state, broadcast, direct offer.                       | Mobile implements create-and-fund, public broadcast and direct offer.           |
| W3D1-W3D3 | Discovery/Interest/Selection ready      | Task list/filter, task detail, Tasker interest, candidates, accept/reject tasker.                      | Mobile implements matching and Task Owner decision.                             |
| W3D4-W3D5 | Execution socket/status ready           | Start journey, arrived, begin, tracking, task chat, voice note metadata, masked call stubs.            | Mobile implements active task flow.                                             |
| W4D1-W4D3 | Completion/Reports/Ratings ready        | Completion proof, request completion, approve, reports, cancellation, no-show, ratings, favorites.     | Mobile implements settlement and exception flows.                               |
| W4D4-W4D5 | Wallet/Withdrawal/Support ready         | Wallets, ledger, payout account, withdrawal, support sessions, emergency support.                      | Mobile implements finance/support flows.                                        |
| W5        | Referral/Rebook/Admin integration ready | Referral, rebook, admin operational APIs, use-case health, payout batch operations.                    | Mobile and admin complete integrated workflows.                                 |
| W6        | Hardening ready                         | Provider recovery, security, monitoring, backup, rate limits, idempotency and performance fixes.       | All teams stabilize critical flows and close major integration defects.         |
| W7        | Release-candidate support ready         | OpenAPI freeze, backup restore proof, payout dry run, provider validation report and operational APIs. | All teams prepare release candidates and operational evidence.                  |
| W8        | Freeze support ready                    | Final defect fixes, deployment rehearsal, rollback rehearsal, handover notes and build freeze.         | All teams enter formal testing with stable release candidates.                  |

</div>

<div class="callout red">

**Week 1 rule**

Before the end of Week 1, backend must publish the contracts and stubs needed by mobile and admin for authentication, profile, mode, PIN, sessions, admin auth and dashboard shell. This prevents the frontend teams from blocking on backend uncertainty.

</div>

</div>

<div id="architecture" class="section section">

<div class="section-num">

03

</div>

<div class="eyebrow">

Architecture

</div>

## Backend Architecture Rules

<div class="diagram">

<div class="diagram-head">

#### Backend Delivery Boundary

Hexagonal

</div>

    Controller / Socket Gateway / Worker
      -> DTO validation
      -> Use Case
      -> Port
      -> Adapter
          - Prisma repository
          - Provider adapter
          - Queue adapter
          - Notification adapter

    Use case result
      -> Standard response shape
      -> UseCaseExecutionLog
      -> Audit/outbox where needed

Controllers should stay thin. Use cases own business rules. Adapters own infrastructure details.

</div>

<div class="table-wrap">

| Area            | Required Implementation                                                                                            |
|-----------------|--------------------------------------------------------------------------------------------------------------------|
| Prisma          | Follow Document 7 execution baseline, module ownership and transaction rules.                                      |
| Providers       | Follow Document 8 adapter, webhook, secret and cost-control rules.                                                 |
| Sockets         | Use Socket.IO only for chat, support live chat, tracking and presence. Durable state remains REST/database-backed. |
| Queues          | Use BullMQ for payments, KYC, notifications, maps, wallet, chat persistence, media, reports and audit jobs.        |
| Admin APIs      | Expose list, detail, action, audit and export-safe contracts early enough for admin frontend.                      |
| No reassignment | Do not create any backend use case or admin endpoint that manually reassigns a task to another Tasker.             |

</div>

</div>

<div id="build" class="section section">

<div class="section-num">

04

</div>

<div class="eyebrow">

Build Plan

</div>

## Eight-Week Build Plan By Week

Each week has its own delivery goal and exit condition. The daily rows remain explicit so Codex and other AI agents can execute one scoped task at a time without losing the weekly dependency context.

<div class="eyebrow">

Week 1

</div>

### Week 1 - Foundation, Identity And Contract Availability

**Goal:** Create the shared project foundations and unblock mobile/admin with stable auth, profile, PIN, session, admin auth and dashboard contracts.

**Week exit:** Mobile can complete app entry/auth/profile shell; admin can enter protected dashboard shell; backend has stable response/error shapes and OpenAPI shell.

<div class="table-wrap">

| Day  | Date            | Workstream                     | Execution Scope                                                                                                     | Dependency                          | Commit / Output Rule                               |
|------|-----------------|--------------------------------|---------------------------------------------------------------------------------------------------------------------|-------------------------------------|----------------------------------------------------|
| W1D1 | Mon 6 Jul 2026  | Repo foundation and contracts  | Create NestJS hexagonal structure, Prisma baseline, response/error shapes, OpenAPI shell, health/version endpoints. | Unblocks mobile/admin scaffolding.  | docs(backend): publish initial API contract shell  |
| W1D2 | Tue 7 Jul 2026  | Auth contract stubs            | Implement auth/profile/PIN/session DTOs and stub handlers with stable response shapes.                              | Unblocks mobile auth screens.       | feat(auth): add auth contract stubs                |
| W1D3 | Wed 8 Jul 2026  | Auth implementation            | Implement register, login, OTP email-first/SMS fallback, refresh rotation, social auth adapter shell.               | Supports mobile registration/login. | feat(auth): implement registration and login       |
| W1D4 | Thu 9 Jul 2026  | Profile, mode, PIN, sessions   | Implement /me, profile update, mode, PIN setup/verify/reset, device/session revoke.                                 | Supports mobile profile/security.   | feat(identity): implement profile pin and sessions |
| W1D5 | Fri 10 Jul 2026 | Admin auth and dashboard stubs | Implement admin auth/TOTP stubs, dashboard summary stub, RBAC model seed.                                           | Unblocks admin shell.               | feat(admin): add auth and dashboard stubs          |

</div>

<div class="eyebrow">

Week 2

</div>

### Week 2 - Tasker Activation, Task Creation And Funding

**Goal:** Build the flows that allow Taskers to become eligible and Task Owners to create, locate, upload proof for and fund tasks.

**Week exit:** Tasker activation/KYC, task catalog, task draft, location, media, payment intent and broadcast/direct offer contracts are usable on staging.

<div class="table-wrap">

| Day  | Date            | Workstream                  | Execution Scope                                                                                             | Dependency                                   | Commit / Output Rule                                    |
|------|-----------------|-----------------------------|-------------------------------------------------------------------------------------------------------------|----------------------------------------------|---------------------------------------------------------|
| W2D1 | Mon 13 Jul 2026 | Tasker/KYC APIs             | Implement TaskerProfile, KYC use cases, Smile ID adapter shell, KYC status and admin re-verification.       | Unblocks mobile Tasker activation/admin KYC. | feat(kyc): implement tasker activation contracts        |
| W2D2 | Tue 14 Jul 2026 | Catalog/task draft APIs     | Implement categories/types, task draft, amount validation, required arrival time.                           | Unblocks mobile task creation.               | feat(tasks): implement catalog and task draft           |
| W2D3 | Wed 15 Jul 2026 | Location/media APIs         | Implement geocode, pin confirmation, task site Nigeria validation, media signed upload/finalize.            | Unblocks mobile location/proof.              | feat(tasks): implement location and media contracts     |
| W2D4 | Thu 16 Jul 2026 | Payment/escrow APIs         | Implement payment intent, verify, Paystack/Moniepoint adapter shell, ProviderWebhookEvent, escrow creation. | Unblocks mobile funding.                     | feat(payments): implement payment and escrow foundation |
| W2D5 | Fri 17 Jul 2026 | Broadcast/direct offer APIs | Implement broadcast, favorites, direct offers, FCM notification job shell.                                  | Unblocks mobile discovery/direct offer.      | feat(matching): implement broadcast and direct offers   |

</div>

<div class="eyebrow">

Week 3

</div>

### Week 3 - Discovery, Matching And Active Task Start

**Goal:** Build public discovery, Tasker interest, Task Owner selection and the first half of active execution.

**Week exit:** A funded task can move from broadcast/direct offer through Tasker interest, Task Owner acceptance and active task start with chat/tracking foundations.

<div class="table-wrap">

| Day  | Date            | Workstream                | Execution Scope                                                                                                | Dependency                          | Commit / Output Rule                                     |
|------|-----------------|---------------------------|----------------------------------------------------------------------------------------------------------------|-------------------------------------|----------------------------------------------------------|
| W3D1 | Mon 20 Jul 2026 | Discovery APIs            | Implement Tasker task list, location filter, nearest-first sorting, limited public preview.                    | Unblocks mobile Tasker discovery.   | feat(discovery): implement task browsing                 |
| W3D2 | Tue 21 Jul 2026 | Interest/accept APIs      | Implement Tasker interest, arrival confirmation, direct offer accept/decline, eligibility guards.              | Unblocks Tasker commitment.         | feat(matching): implement tasker interest and acceptance |
| W3D3 | Wed 22 Jul 2026 | Candidate/selection APIs  | Implement candidate list with ETA snapshots, Task Owner accept/reject, rejection logging.                      | Unblocks Task Owner selection.      | feat(matching): implement candidate selection            |
| W3D4 | Thu 23 Jul 2026 | Task execution state APIs | Implement start journey, arrived, begin, state guards and TaskStatusEvent.                                     | Unblocks active task screen.        | feat(tasks): implement execution state transitions       |
| W3D5 | Fri 24 Jul 2026 | Socket/chat/tracking      | Implement Socket.IO auth, task rooms, support rooms shell, tracking events, ETA guard, chat persistence queue. | Unblocks active task communication. | feat(socket): implement task chat and tracking           |

</div>

<div class="eyebrow">

Week 4

</div>

### Week 4 - Completion, Exceptions, Trust And Finance

**Goal:** Close the task lifecycle with completion, settlement, cancellation, no-show, reports, ratings, favorites, wallet, withdrawal and support.

**Week exit:** A task can finish cleanly or enter a governed exception path; affected wallet, payout, report and admin review states are visible.

<div class="table-wrap">

| Day  | Date            | Workstream               | Execution Scope                                                                                               | Dependency                              | Commit / Output Rule                                      |
|------|-----------------|--------------------------|---------------------------------------------------------------------------------------------------------------|-----------------------------------------|-----------------------------------------------------------|
| W4D1 | Mon 27 Jul 2026 | Completion/settlement    | Implement completion proof, request completion, confirm completion, commission snapshot, escrow release/hold. | Unblocks settlement.                    | feat(settlement): implement completion and escrow release |
| W4D2 | Tue 28 Jul 2026 | Cancellation/reports     | Implement cancellation, no-show, reports, warning/strike, settlement hold use cases.                          | Unblocks exception flows/admin reports. | feat(risk): implement cancellation reports and penalties  |
| W4D3 | Wed 29 Jul 2026 | Ratings/favorites/rebook | Implement ratings, review moderation foundation, favorite add/remove, rebook.                                 | Unblocks retention flows.               | feat(retention): implement ratings favorites and rebook   |
| W4D4 | Thu 30 Jul 2026 | Wallet/withdrawal        | Implement wallets, ledger, payout account, PIN-confirmed withdrawal, payout batch models.                     | Unblocks finance flows.                 | feat(finance): implement wallet and withdrawal            |
| W4D5 | Fri 31 Jul 2026 | Support/emergency        | Implement support sessions, emergency support, support socket completion, case linking.                       | Unblocks support flows/admin support.   | feat(support): implement support and emergency            |

</div>

<div class="eyebrow">

Week 5

</div>

### Week 5 - Operational Integration, Recovery And Full Flow QA

**Goal:** Complete secondary flows, operational admin coverage, provider validation, recovery behavior and end-to-end flow QA.

**Week exit:** All planned flows have working happy paths and documented exception paths on staging with defect lists by flow/module.

<div class="table-wrap">

| Day  | Date           | Workstream                     | Execution Scope                                                                                       | Dependency                                    | Commit / Output Rule                                |
|------|----------------|--------------------------------|-------------------------------------------------------------------------------------------------------|-----------------------------------------------|-----------------------------------------------------|
| W5D1 | Mon 3 Aug 2026 | Admin operational APIs         | Implement admin users, tasks, finance, reports, media, ratings, config APIs.                          | Unblocks admin complete modules.              | feat(admin): implement operational APIs             |
| W5D2 | Tue 4 Aug 2026 | Referral and notification APIs | Implement referral reward tracking, notifications list/read, announcements.                           | Unblocks mobile referral/admin announcements. | feat(growth): implement referral and notifications  |
| W5D3 | Wed 5 Aug 2026 | Provider hardening             | Validate Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, object storage in staging. | Unblocks provider QA.                         | fix(providers): harden staging integrations         |
| W5D4 | Thu 6 Aug 2026 | Operations/monitoring          | Implement use-case health, queue audit, provider request logs, metrics, backup status.                | Unblocks admin monitoring.                    | feat(ops): implement use case health and monitoring |
| W5D5 | Fri 7 Aug 2026 | Integrated defect pass         | Fix defects from mobile/admin full-flow QA, contract mismatches, state recovery issues.               | All teams integration.                        | fix(integration): resolve full flow defects         |

</div>

<div class="eyebrow">

Week 6

</div>

### Week 6 - Hardening, Security And Performance

**Goal:** Fix integration defects, harden performance/security/provider behavior, improve recovery paths and close major technical gaps.

**Week exit:** Critical defects from Week 5 are resolved or owned, and core flows are stable enough for release-candidate preparation.

<div class="table-wrap">

| Day  | Date            | Workstream                         | Execution Scope                                                                                     | Dependency                   | Commit / Output Rule                                |
|------|-----------------|------------------------------------|-----------------------------------------------------------------------------------------------------|------------------------------|-----------------------------------------------------|
| W6D1 | Mon 10 Aug 2026 | Security and idempotency hardening | Review auth, PIN, TOTP, webhooks, ledger idempotency, admin audit, rate limits.                     | Release hardening.           | fix(security): harden auth webhooks and idempotency |
| W6D2 | Tue 11 Aug 2026 | Performance/load pass              | Load test critical endpoints, socket rooms, queues, DB indexes, backup jobs.                        | Release performance.         | perf(api): optimize critical flows                  |
| W6D3 | Wed 12 Aug 2026 | Provider recovery hardening        | Harden payment/KYC/maps/FCM/media retry, timeout, reconciliation and status recovery paths.         | Provider staging validation. | fix(providers): harden recovery paths               |
| W6D4 | Thu 13 Aug 2026 | Security review fixes              | Fix findings from webhook, PIN, TOTP, RBAC, media permission, masked-call and log-scrubbing review. | Security review.             | fix(security): resolve privacy and access findings  |
| W6D5 | Fri 14 Aug 2026 | Hardening review                   | Close major backend defects and produce release-candidate blocker list.                             | All backend modules.         | chore(release): prepare backend blocker list        |

</div>

<div class="eyebrow">

Week 7

</div>

### Week 7 - Release Candidate Preparation And Operational Dry Runs

**Goal:** Prepare mobile, admin and backend release candidates while running provider, payout, monitoring, backup and support dry runs.

**Week exit:** Release candidates are available on staging with provider validation evidence, backup restore proof and operational handover notes.

<div class="table-wrap">

| Day  | Date            | Workstream                            | Execution Scope                                                                                                    | Dependency                      | Commit / Output Rule                              |
|------|-----------------|---------------------------------------|--------------------------------------------------------------------------------------------------------------------|---------------------------------|---------------------------------------------------|
| W7D1 | Mon 17 Aug 2026 | Release candidate backend preparation | Freeze API contracts, generate OpenAPI, migration notes and environment checklist.                                 | Frontend RC prep.               | chore(release): prepare backend release candidate |
| W7D2 | Tue 18 Aug 2026 | Backup and restore dry run            | Run Postgres backup, object storage upload, restore to staging/temp database and evidence capture.                 | Backup storage configured.      | chore(ops): prove backup restore flow             |
| W7D3 | Wed 19 Aug 2026 | Payout and finance dry run            | Run payout batch, ledger consistency, reconciliation, failed/partial transfer and disputed Tasker exclusion tests. | Finance provider staging.       | test(finance): validate payout batch dry run      |
| W7D4 | Thu 20 Aug 2026 | Provider validation report            | Finalize Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, storage and Shorebird evidence.         | All provider staging endpoints. | docs(providers): publish validation report        |
| W7D5 | Fri 21 Aug 2026 | Backend release candidate             | Tag backend release candidate and hand over to formal QA.                                                          | Stable staging.                 | chore(release): tag backend release candidate     |

</div>

<div class="eyebrow">

Week 8

</div>

### Week 8 - Stabilization, Go-Live Rehearsal And Build Freeze

**Goal:** Complete final defect pass, go-live rehearsal, documentation handover and controlled build freeze before formal testing starts.

**Week exit:** Builds are frozen for the two-week testing window. Only blocker fixes are allowed after this point.

<div class="table-wrap">

| Day  | Date            | Workstream                | Execution Scope                                                                                               | Dependency               | Commit / Output Rule                         |
|------|-----------------|---------------------------|---------------------------------------------------------------------------------------------------------------|--------------------------|----------------------------------------------|
| W8D1 | Mon 24 Aug 2026 | Stabilization sprint      | Apply approved release-candidate fixes only.                                                                  | RC defect list.          | fix(release): resolve approved rc defects    |
| W8D2 | Tue 25 Aug 2026 | Final backend defect pass | Re-test fixed defects, run migrations, queues, sockets, webhooks and financial consistency checks.            | Stable staging.          | test(release): verify backend critical paths |
| W8D3 | Wed 26 Aug 2026 | Go-live rehearsal         | Run production-style deployment rehearsal, rollback rehearsal, backup restore proof and provider smoke tests. | Production-like staging. | chore(release): run go live rehearsal        |
| W8D4 | Thu 27 Aug 2026 | Backend handover          | Finalize runbooks, env checklist, provider escalation notes, monitoring alerts and support handover.          | Final docs.              | docs(ops): finalize backend handover         |
| W8D5 | Fri 28 Aug 2026 | Backend build freeze      | Freeze backend build for formal testing weeks.                                                                | Stable staging.          | chore(release): freeze backend build         |

</div>

</div>

<div id="testing" class="section section">

<div class="section-num">

05

</div>

<div class="eyebrow">

Testing

</div>

## Two-Week Testing Plan By Week

Testing is split into regression/environment verification first, then UAT, recovery, security and go-live decision readiness.

<div class="eyebrow">

Testing Week 1

</div>

### Testing Week 1 - Regression And Environment Verification

**Goal:** Verify environments, providers and complete cross-team regressions for identity, KYC, task, payment, matching, finance, support and admin operations.

**Week exit:** Critical regressions are known, prioritized and either fixed or formally accepted for UAT decision-making.

<div class="table-wrap">

| Day  | Date            | Focus                         | Execution Scope                                                                                        | Primary Owners           |
|------|-----------------|-------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------|
| T1D1 | Mon 31 Aug 2026 | Smoke and environment         | Verify staging API/admin/socket/mobile builds, env vars, migrations, seed data, provider sandbox keys. | All teams                |
| T1D2 | Tue 1 Sep 2026  | Identity/KYC regression       | Test registration, login, OTP, social login, profile, PIN, sessions, KYC and admin KYC review.         | Mobile + Backend + Admin |
| T1D3 | Wed 2 Sep 2026  | Task/payment regression       | Test task creation, location, media, payment, webhook, escrow, broadcast and direct offer.             | Mobile + Backend         |
| T1D4 | Thu 3 Sep 2026  | Matching/execution regression | Test discovery, interest, accept/reject, start journey, arrived, begin, chat, tracking and completion. | All teams                |
| T1D5 | Fri 4 Sep 2026  | Finance/support regression    | Test wallet, withdrawal, payout batch, report, support live chat, emergency and admin resolution.      | All teams                |

</div>

<div class="eyebrow">

Testing Week 2

</div>

### Testing Week 2 - UAT, Recovery, Security And Go-Live Decision

**Goal:** Run UAT, recovery/load/offline testing, security/privacy/provider checks, release candidate verification and go-live decision preparation.

**Week exit:** Go/no-go pack includes known issues, rollback notes, backup restore proof and provider validation proof.

<div class="table-wrap">

| Day  | Date            | Focus                          | Execution Scope                                                                                                 | Primary Owners                |
|------|-----------------|--------------------------------|-----------------------------------------------------------------------------------------------------------------|-------------------------------|
| T2D1 | Mon 7 Sep 2026  | UAT round 1                    | Run full user journeys as Task Owner, Tasker and Admin with documented defects.                                 | Project Lead + all teams      |
| T2D2 | Tue 8 Sep 2026  | Recovery/load/offline          | Test app resume, socket reconnect, payment return, KYC return, provider delays, queue retries, low-end Android. | Mobile + Backend              |
| T2D3 | Wed 9 Sep 2026  | Security/privacy/provider      | Test PIN, TOTP, RBAC, webhook signatures, media permissions, phone masking, Sentry scrubbing.                   | Backend + Admin + Mobile      |
| T2D4 | Thu 10 Sep 2026 | Release candidate verification | Re-run critical happy paths and exception paths after fixes.                                                    | All teams                     |
| T2D5 | Fri 11 Sep 2026 | Go-live decision pack          | Produce go/no-go checklist, known issues, rollback notes, backup restore proof and provider validation proof.   | Project Lead + Technical Lead |

</div>

</div>

<div id="codex" class="section section">

<div class="section-num">

06

</div>

<div class="eyebrow">

Codex

</div>

## Codex Execution Instructions

<div class="code-block">

<div class="code-title">

Backend AI Task Block

</div>

    Task ID:
    Team:
    Flow IDs:
    Depends on:
    Required documents:
    Inputs:
    Implementation scope:
    Files/modules likely affected:
    API/socket dependencies:
    Data models needed:
    Acceptance criteria:
    Tests required:
    Do not do:
    Commit message:

</div>

<div class="table-wrap">

| Instruction       | Required Behavior                                                                                                                         |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Read order        | Read API & Socket Contract, Data Model, Provider Cost Control, Mobile Build Plan, then this backend build plan.                           |
| Stubs first       | When frontend is waiting, publish contract stubs with correct response/error shape before full provider logic.                            |
| Use case per task | Implement one use case or tightly related use-case group at a time. Track use-case health.                                                |
| Tests             | Add tests for success, validation failure, auth failure, forbidden state, duplicate/idempotent request and provider retry.                |
| Migrations        | Schema changes must be feature-named, reversible where practical and aligned to Document 7.                                               |
| Do not do         | Do not bypass use cases from admin, mutate wallet without ledger entry, trust frontend payment redirect, or call paid providers in loops. |

</div>

</div>

</div>

<div class="footer-inner">

<div>

#### Work2Cash

Backend Build Execution Plan v1 for Codex and AI-agent execution.

</div>

<div>

#### Portal Page

`Backend Build Plan v1`

</div>

<div>

#### Guard Requirement

Protected HTML documents must include the documentation auth guard script before closing body.

</div>

</div>
