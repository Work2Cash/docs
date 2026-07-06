# Main Enterprise Architecture v1

> AI-agent Markdown equivalent of `main-enterprise-architecture-v1.html`.
>
> Human-readable HTML source: `.Main Enterprise Architecture v1`.
> Use this Markdown version for lower-token AI context. If a task needs visual layout or exact document presentation, use the HTML page.

<div class="section cover">

<div class="brand-row">

<div class="logo">

W2C

</div>

<div>

**Work2Cash**Traceworka Enterprise Architecture

</div>

</div>

<div class="cover-main">

<div class="label">

Main Enterprise Architecture Document

</div>

# Work2Cash

<div class="cover-subtitle">

Product, platform, infrastructure, engineering, compliance, operations, and go-live architecture for Nigeria-wide launch.

</div>

<div class="meta-grid">

<div class="meta-card">

Prepared For**Traceworka**

</div>

<div class="meta-card">

Version**1.0**

</div>

<div class="meta-card">

Date**2 July 2026**

</div>

<div class="meta-card">

Classification**Investor Ready**

</div>

<div class="meta-card">

Project Leadership**Project Lead**

</div>

<div class="meta-card">

Technical Leadership**Technical Lead**

</div>

<div class="meta-card">

Primary Market**Nigeria**

</div>

<div class="meta-card">

Go-Live Target**14 September 2026**

</div>

</div>

<div class="badges">

<span class="badge">Flutter</span><span class="badge">NestJS</span><span class="badge">Next.js</span><span class="badge">PostgreSQL</span><span class="badge">Valkey</span><span class="badge">BullMQ</span><span class="badge">Socket.io</span>

</div>

</div>

<div class="cover-foot">

<div>

Prepared by Traceworka. Final approval by Traceworka.

</div>

<div>

Document scope: architecture baseline for implementation planning.

</div>

</div>

</div>

<div class="sticky">

<div class="sticky-inner">

**Work2Cash Enterprise Architecture v1.0**

[01](#section-01)[02](#section-02)[03](#section-03)[04](#section-04)[05](#section-05)[06](#section-06)[07](#section-07)[08](#section-08)[09](#section-09)[10](#section-10)[11](#section-11)[12](#section-12)

</div>

</div>

<div role="main">

<div class="section toc">

<div class="eyebrow">

Contents

</div>

## Architecture Document Index

The document is organized from business foundation through product architecture, implementation, operations, risks, and appendices.

<div class="toc-grid">

[01. Executive Foundation](#section-01)[02. Product Scope and Business Rules](#section-02)[03. Actor Flows and Acceptance Criteria](#section-03)[04. System Architecture](#section-04)[05. Data Model and State](#section-05)[06. API, Socket, Events and Jobs](#section-06)[07. Providers, Hosting and Costing](#section-07)[08. Security, Trust and Compliance](#section-08)[09. Engineering Standards](#section-09)[10. Build, QA and Go-Live](#section-10)[11. Risks and Decisions](#section-11)[12. Appendices](#section-12)

</div>

</div>

<div id="section-01" class="section section">

<div class="section-num">

01

</div>

<div class="eyebrow">

Part I

</div>

## Executive Foundation

This section defines the business context, ownership, target market, project constraints, team structure, environments, and success targets for Work2Cash.

<div class="card-grid">

Company

#### Traceworka

Project sponsor, project owner, prepared by entity, and final approver for the Work2Cash architecture baseline.

Project Leadership

#### Project Lead

Owns product coordination, acceptance alignment, and go-live readiness coordination.

Technical Leadership

#### Technical Lead

Owns technical architecture, implementation quality, provider validation, infrastructure, and release readiness.

</div>

<div class="callout blue">

**Document Authority**

This Main Enterprise Architecture Document is the primary source of truth for Work2Cash product behavior, system boundaries, engineering standards, provider strategy, operational controls, launch readiness, and follow-up documents. If a later implementation document conflicts with this document, this document should be treated as the baseline until formally revised.

</div>

<div class="table-wrap">

| Item              | Decision                                                         |
|-------------------|------------------------------------------------------------------|
| Project           | Work2Cash                                                        |
| Classification    | Investor Ready                                                   |
| Version Label     | 1.0                                                              |
| Prepared For / By | Traceworka                                                       |
| Target Market     | Nigeria nationwide                                               |
| Primary Platform  | Flutter Android app first; iOS bundle reserved for later release |
| Admin Platform    | Next.js admin dashboard                                          |
| Backend Platform  | NestJS API using Hexagonal Architecture                          |

</div>

<div class="callout amber">

**Market Constraint**

The platform earns in Naira but pays many infrastructure and provider bills in USD. Frugal engineering, batching, self-hosting, and strict cost guardrails are mandatory.

</div>

<div class="table-wrap">

| Environment           | URL                                         |
|-----------------------|---------------------------------------------|
| Production Website    | https://work2cash.ng                        |
| Production API        | https://api.work2cash.ng                    |
| Production Admin      | https://admin.work2cash.ng                  |
| Production Socket     | https://socket.work2cash.ng                 |
| Staging Website/Admin | https://staging.work2cash.ng                |
| Staging API           | https://api-staging.work2cash.ng            |
| Staging Socket        | https://socket-staging.work2cash.ng         |
| WWW Redirect          | Yes, www should redirect to the root domain |

</div>

<div class="table-wrap">

| Team Area               | Owner / Capacity                                 |
|-------------------------|--------------------------------------------------|
| Backend                 | 1 Backend Engineer                               |
| Mobile                  | 1 Flutter Engineer                               |
| Admin Frontend          | 1 Next.js Engineer                               |
| DevOps / Infrastructure | Technical Lead                                   |
| QA                      | Shared across teams, coordinated by Project Lead |
| Product Decisions       | Project Lead + Project Owner + Technical Lead    |
| Technical Decisions     | Technical Lead                                   |
| Final Go-Live Approval  | Traceworka                                       |

</div>

</div>

<div id="section-02" class="section section">

<div class="section-num">

02

</div>

<div class="eyebrow">

Part II

</div>

## Product Scope and Business Rules

Work2Cash is a unified-user, Nigeria-wide task marketplace. The product allows a user to hire help as a Task Owner and earn as a Tasker after KYC approval.

<div class="card-grid">

Persona

#### Unified User

One account can operate as Task Owner or Tasker. Tasker actions require approved TaskerProfile and KYC.

Payment

#### Escrow-first

Task funds are held before matching or direct offer acceptance. Payment state is confirmed by backend, not frontend redirect.

Discovery

#### Browse plus sort

Taskers can see available tasks sorted nearest first and filter by location. Tasks are not hidden strictly by radius.

</div>

### MVP Scope

<div class="table-wrap">

| Area              | Included                                                                                                                                                                                                                                                                                                                                                   |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Launch Coverage   | Nationwide Nigeria rollout. Task site must be in Nigeria. Tasker must be in Nigeria to accept. Task Owner can be anywhere.                                                                                                                                                                                                                                 |
| Payment Providers | Paystack and Moniepoint                                                                                                                                                                                                                                                                                                                                    |
| MVP Modules       | Auth including password recovery and Google/Apple social login; KYC; Task Owner flow; Tasker flow; wallet/escrow; PIN-confirmed sensitive actions; payout account setup; chat; voice messages; masked calls; notifications; admin operations; support and emergency support; disputes/reports; withdrawals; ratings/reviews; referrals; rebook/repeat task |
| Deferred          | Facebook login, auto-accept tasks, promo codes, subscriptions, loyalty, advanced analytics beyond basic operational reporting, in-app voice calls, multi-country support                                                                                                                                                                                   |

</div>

### Launch Task Categories

<div class="table-wrap">

| Category | Task Types                                                                                                                                                                                                                                                                                                                                                                                                                       |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Home     | House cleaning; Laundry; Ironing; Dish washing; Fetching water; Packing and unpacking items; Arranging storage boxes; Assisting elderly at home; Babysitting (short-term/supervision only); Cooking; Cleaning after small parties or gatherings; Sweeping of compound; Gutter/drainage cleaning; Car wash; Packing of refuse; Clearing of grass/bushes; Trimming of flowers; Watering plants; Clearing drainage around the house |
| Errands  | Market runs; Supermarket shopping; Pharmacy runs; Picking up items; Items delivery; Fuel station runs                                                                                                                                                                                                                                                                                                                            |
| Office   | Office cleaning; Arrange shelves; Post event cleanup; Carrying light office equipment                                                                                                                                                                                                                                                                                                                                            |
| Support  | Event ushering; Helping vendors at events; Assisting at shops during rush hours; Stock inventory                                                                                                                                                                                                                                                                                                                                 |

</div>

### Task Discovery, Location and Privacy Rules

<div class="table-wrap">

| Rule Area          | Source-of-Truth Decision                                                                                                                  |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Task visibility    | Tasks are not hidden strictly by radius. Taskers can browse available tasks sorted nearest first and farthest last.                       |
| Location filtering | Taskers can filter available tasks by location. Radius is used for sorting, filtering, and cost control, not as the only visibility rule. |
| Nigeria boundary   | Task site must be in Nigeria. Tasker must be in Nigeria to accept a task. Task Owner can be anywhere.                                     |
| Arrival time       | Task Owner sets required arrival time. Tasker must confirm they can arrive on or before that time.                                        |
| ETA decision       | Task Owner sees Tasker ETA and decides whether to accept or reject the Tasker. The platform does not automatically reject by ETA in v1.   |
| Address privacy    | Public task listing shows limited details. Exact address and full proof media are not publicly exposed.                                   |

</div>

### Task Proof and Media Rules

<div class="table-wrap">

| Rule              | Decision                                                                                                          |
|-------------------|-------------------------------------------------------------------------------------------------------------------|
| Task Owner proof  | Task Owner must upload proof of work to be done before posting/funding the task.                                  |
| Tasker proof      | Tasker must upload proof of work done after completion/finalization.                                              |
| Supported media   | Photos and videos.                                                                                                |
| Maximum file size | 50MB per file.                                                                                                    |
| Access control    | Media access must be permission-controlled and should use signed URLs or equivalent restricted access.            |
| Admin moderation  | Admin can review and remove unsafe, invalid, unrelated, or policy-violating media. Removal reason must be logged. |

</div>

### Communication Rules

<div class="table-wrap">

| Channel              | Decision                                                                                                                                         |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Chat                 | Task-bound chat is available after task acceptance.                                                                                              |
| Voice messages       | Supported as part of task communication and stored with permission-controlled access.                                                            |
| Masked phone calls   | MVP uses proxy dial-in flow. Real phone numbers must not be exposed.                                                                             |
| Future in-app calls  | Deferred. Can be introduced after MVP if operationally justified.                                                                                |
| Call availability    | Masked calls are task-bound and time-limited. Valid states include accepted, en route/in transit, arrived, in progress, or valid dispute window. |
| Off-platform leakage | Before calls, show: For your protection, keep task communication and payment inside Work2Cash.                                                   |

</div>

### Pricing and Wallet Rules

<div class="table-wrap">

| Rule                      | Decision                                                                                  |
|---------------------------|-------------------------------------------------------------------------------------------|
| Commission Tier           | 20% default; 17.5% after 20 completed tasks; 15% after 50; 12.5% after 100; 10% after 500 |
| Minimum Task Amount       | ₦2,000                                                                                    |
| Minimum Tasker Withdrawal | ₦1,000                                                                                    |
| Processing Fee            | Task Owner pays as separate fee                                                           |
| Tasker Earnings Display   | Gross amount, platform commission, and net earning                                        |
| Task Owner Price Display  | Task amount, service/platform/payment fee, and final payable total                        |
| Referral Reward           | Wallet credit after referred user completes 5 paid tasks                                  |
| Task Owner Wallet         | Cannot withdraw directly by default. Excess funds require support handling.               |
| Tasker Wallet             | Receives earnings and supports withdrawal subject to policy checks.                       |

</div>

### Cancellation, Penalty and Strike Rules

<div class="table-wrap">

| Scenario                                    | Rule                                                    |
|---------------------------------------------|---------------------------------------------------------|
| Task Owner cancels before Tasker accepts    | No penalty                                              |
| Task Owner cancels after Tasker accepts     | No penalty                                              |
| Task Owner cancels while Tasker is en route | 10% penalty + 1 warning                                 |
| Task Owner cancels after Tasker arrives     | 10% penalty + 1 warning                                 |
| Tasker cancels after accepting              | 1 warning                                               |
| Tasker no-shows                             | 1 strike                                                |
| Task Owner no-shows                         | 10% penalty + 1 warning                                 |
| Completion refused by Task Owner            | Tasker raises structured dispute/report; admin resolves |
| Warning conversion                          | 3 warnings = 1 strike                                   |

</div>

<div class="table-wrap">

| Actor      | Strike System                                                                                              |
|------------|------------------------------------------------------------------------------------------------------------|
| Tasker     | Strike 1: cannot accept tasks for 2 days; Strike 2: 1 week; Strike 3: 1 month; Strike 4: account suspended |
| Task Owner | Strike 1-3: trust score reduces; Strike 4: account suspended and must contact support                      |

</div>

</div>

<div id="section-03" class="section section">

<div class="section-num">

03

</div>

<div class="eyebrow">

Part III

</div>

## Actor Flows and Acceptance Criteria

This section converts product flows into testable launch acceptance criteria for Task Owners, Taskers, and admins.

<div class="diagram">

<div class="diagram-head">

#### Cross-Actor Marketplace Flow

Architecture Diagram

</div>

    Task Owner                      Work2Cash Backend                  Tasker
        |                                 |                              |
        | Create task + location          |                              |
        | Upload task proof               |                              |
        | Confirm map pin                 |                              |
        | Set required arrival time       |                              |
        | Pay into escrow --------------> | Verify payment + hold escrow |
        |                                 | Publish task availability --> | Browse tasks sorted by distance
        |                                 |                              | Filter by location
        |                                 |                              | Confirm arrival ability
        | <------------------------------ | ETA + Tasker interest         |
        | Accept/reject Tasker ----------> | Lock accepted Tasker          |
        |                                 | Enable chat/voice/call        |
        | Track arrival + communicate     | <------ live tracking ------> | En route / arrived / in progress
        | Completion review               |                              | Upload completion proof
        | Confirm or report issue ------> | Release escrow or hold review |
        | Rate / favorite Tasker          | Update trust, wallet, history |

The marketplace flow is escrow-led. The Task Owner controls the final Tasker acceptance decision after seeing ETA, while the Tasker must confirm arrival ability before committing.

</div>

### Task Owner Flow

<div class="callout blue">

**Task Owner Intent**

The Task Owner flow is designed to make task posting clear, safe, and evidence-backed. A Task Owner can be anywhere, but the task site must be in Nigeria. The Task Owner must define the work, confirm the location, fund the task, review interested Taskers, and approve completion before final settlement.

</div>

<div class="diagram">

<div class="diagram-head">

#### Task Owner Flow Diagram

Architecture Diagram

</div>

    Register/Login
      -> Complete profile
      -> Create task from approved category
      -> Enter live/manual task address
      -> Geocode manual address when needed
      -> Confirm map pin
      -> Upload proof of work to be done
      -> Set required arrival time
      -> Review task amount + fees
      -> Pay into escrow
      -> Choose public discovery or direct favorite offer
      -> Review Tasker ETA and profile
      -> Accept or reject Tasker
      -> Communicate through chat, voice note, or masked call
      -> Track arrival and task progress
      -> Confirm completion or raise report
      -> Rate Tasker
      -> Optionally add Tasker to favorites

Task Owner rejection is allowed before the Tasker starts moving and within 5 minutes after the Tasker marks en route. Repeated movement-stage rejection is logged and can trigger warnings/risk review.

</div>

<div class="table-wrap">

| Stage            | Explanation                                                                                                                                                                                               | System Responsibility                                                                                             |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| Task Definition  | Task Owner selects an approved category/type, describes the work, provides address, confirms map pin, and uploads proof media.                                                                            | Validate category, geocode address, enforce Nigeria task-site boundary, store proof media securely.               |
| Funding          | Task Owner reviews task amount, platform/service/payment fee, and final payable amount before payment.                                                                                                    | Initialize Paystack/Moniepoint payment, verify backend payment confirmation, create escrow record.                |
| Tasker Selection | Task Owner can use public discovery or direct favorite offer. For public discovery, Taskers browse/filter and express interest. For direct offer, selected favorite Tasker receives API/FCM-driven offer. | Expose limited public task info, calculate ETA, protect exact address/media until acceptance rules are satisfied. |
| Communication    | After acceptance, Task Owner can chat, send/receive voice messages, or call through Work2Cash masked proxy.                                                                                               | Enable Socket.io chat/tracking, create TaskCallSession for masked call, prevent real phone number exposure.       |
| Completion       | Task Owner reviews completion proof, confirms completion, rates Tasker, favorites Tasker, or raises report/dispute.                                                                                       | Release escrow, hold settlement if disputed, update ratings, favorites, trust, wallet, and audit records.         |

</div>

### Tasker Flow

<div class="callout green">

**Tasker Intent**

The Tasker flow is designed around verified earning. A Tasker cannot accept tasks until KYC is approved. Once active, the Tasker can browse available Nigerian tasks, filter by location, confirm arrival ability, perform work, upload completion proof, and withdraw settled earnings.

</div>

<div class="diagram">

<div class="diagram-head">

#### Tasker Flow Diagram

Architecture Diagram

</div>

    Register/Login
      -> Complete profile
      -> Submit KYC
      -> KYC approved
      -> Create/activate TaskerProfile
      -> Select skills/categories
      -> Set availability and travel radius
      -> Browse available tasks sorted nearest first
      -> Filter by location/category/time
      -> Open limited task preview
      -> Confirm ability to arrive by required time
      -> Accept public task or direct offer
      -> Mark en route
      -> Arrive and start task
      -> Communicate through approved channels
      -> Complete work
      -> Upload proof of work done
      -> Request completion
      -> Receive earnings after escrow release
      -> Withdraw Tasker wallet balance

The Tasker must be in Nigeria to accept tasks. If a task has an active issue or dispute, payout can be delayed for that disputed task and may require admin authorization.

</div>

<div class="table-wrap">

| Stage      | Explanation                                                                                                                             | System Responsibility                                                                                    |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| Activation | Tasker completes profile, KYC, skills/categories, availability, and location permission.                                                | Block task acceptance until KYC approved and TaskerProfile active.                                       |
| Discovery  | Tasker sees available tasks sorted nearest first and can filter by location rather than being limited to hidden radius-only visibility. | Return task previews with limited public information and protect private address/proof media.            |
| Commitment | Tasker confirms they can arrive on or before the Task Owner's required arrival time.                                                    | Calculate/display ETA, track confirmation, prevent acceptance outside Nigeria.                           |
| Execution  | Tasker updates state from en route to arrived, in progress, and completion requested.                                                   | Persist task state, stream live tracking, enforce valid transitions and communication availability.      |
| Settlement | Tasker uploads completion proof and receives earning after completion approval or admin resolution.                                     | Release escrow to Tasker wallet, apply commission tier, hold payout only for active issue/dispute cases. |

</div>

### Admin Operations Flow

<div class="callout amber">

**Admin Intent**

The admin dashboard is the operational control center for trust, finance, support, KYC, coverage, configuration, and platform health. Every high-risk action must be permission-controlled, require a reason where appropriate, and create an audit trail.

</div>

<div class="diagram">

<div class="diagram-head">

#### Admin Operations Flow Diagram

Architecture Diagram

</div>

    Admin login
      -> TOTP verification
      -> RBAC permission check
      -> Dashboard overview
          +-- Users and sessions
          +-- Tasker KYC/review
          +-- Active/historical tasks
          +-- Payments, escrow, withdrawals
          +-- Reports/disputes and risk flags
          +-- Support live chat
          +-- Task media review
          +-- Categories and pricing/config
          +-- Coverage controls
          +-- Use case health and background jobs
          +-- Audit logs and monitoring
      -> Action requires reason if high-risk
      -> System writes AdminAuditLog

Admin operations must never bypass finance, KYC, security, or dispute rules arbitrarily. V1 has no arbitrary admin override policy.

</div>

<div class="table-wrap">

| Admin Area        | Explanation                                                                          | Controls                                                                |
|-------------------|--------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| KYC               | Review Tasker identity verification and manual-review cases.                         | KYC Reviewer role, restricted identity data, audit logged decisions.    |
| Finance           | Monitor payments, escrow, wallet ledger, refunds, withdrawals, and reconciliation.   | Finance Admin role, reason-required actions, ledger consistency checks. |
| Reports/Disputes  | Resolve structured task-linked reports with evidence; disputes do not use live chat. | Support/Risk roles, evidence review, resolution audit.                  |
| Support Live Chat | Assist users through operational live support separate from dispute adjudication.    | Support Agent role, session assignment, message persistence.            |
| Media Moderation  | Review and remove unsafe or invalid task proof media.                                | Removal reason, media status update, risk flag for repeated abuse.      |
| Coverage/Config   | Control nationwide service availability by state, city, or custom geo-zone.          | Operations/Super Admin role, change reason, audit log.                  |

</div>

### Product Flow Acceptance Criteria

<div class="table-wrap">

| Flow         | Launch Acceptance Criteria                                                                                                                                                           |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Task Owner   | Can create, geocode, pin-confirm, fund, match/direct-offer, accept/reject Tasker, communicate, confirm, rate, favorite, and report/support.                                          |
| Tasker       | Cannot accept before KYC approval; can browse location-filtered tasks, confirm arrival ability, accept/decline, update states, communicate, upload proof, receive earning, withdraw. |
| Admin        | TOTP/RBAC enforced; can manage users, Taskers, KYC, tasks, finance, reports/disputes, support live chat, categories, coverage config, audit logs, and use case health.               |
| Privacy      | Exact address and full proof media are not public. Real phone numbers are not exposed during task-bound calls.                                                                       |
| Cost Control | Maps ETA is batched/guarded. Provider costs are logged and monitored.                                                                                                                |

</div>

</div>

<div id="section-04" class="section section">

<div class="section-num">

04

</div>

<div class="eyebrow">

Part IV

</div>

## System Architecture

The platform uses NestJS, Flutter, Next.js, PostgreSQL, Valkey, BullMQ, Socket.io, and self-hosted infrastructure with cost-controlled provider integrations.

<div class="diagram">

<div class="diagram-head">

#### System Context

Architecture Diagram

</div>

    Task Owner App / Tasker App (Flutter)
              |
              | REST API, Socket.io, FCM, deep links
              v
    NestJS Backend API + Socket Gateway
              |
              +-- PostgreSQL: permanent source of truth
              +-- Valkey: presence, GEO, queues, cache, socket adapter
              +-- BullMQ: async jobs and retries
              +-- Object Storage: task media, proof files, backups
              |
              +-- Paystack / Moniepoint
              +-- Smile ID
              +-- Termii / Email
              +-- Google Maps
              +-- FCM / Firebase Analytics
              +-- Sentry
              +-- Infobip candidate for masked calls

</div>

<div class="diagram">

<div class="diagram-head">

#### Domain and Deployment Boundary

Architecture Diagram

</div>

    work2cash.ng                 -> public website / static legal pages
    api.work2cash.ng             -> NestJS REST API
    socket.work2cash.ng          -> NestJS Socket.io endpoint
    admin.work2cash.ng           -> Next.js admin dashboard
    staging.work2cash.ng         -> staging website/admin
    api-staging.work2cash.ng     -> staging API
    socket-staging.work2cash.ng  -> staging Socket.io

API and socket use separate public domains but may point to the same NestJS process at launch.

</div>

### Backend Architecture

<div class="table-wrap">

| Layer          | Responsibility                                                                                                           |
|----------------|--------------------------------------------------------------------------------------------------------------------------|
| Domain         | Entities, value objects, business rules, lifecycle policies, wallet/escrow logic, warnings/strikes, task discovery rules |
| Application    | Use cases, params, responses, orchestration, use case tracking, idempotency, authorization checks                        |
| Ports          | Interfaces for providers: payments, KYC, maps, SMS/email, FCM, storage, masked calls                                     |
| Adapters       | Prisma, Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, Infobip candidate, storage                     |
| Infrastructure | Controllers, gateways, workers, cron, webhooks, persistence, proxy config                                                |

</div>

### Service Boundary Rules

<div class="table-wrap">

| Service / Component | Source-of-Truth Boundary                                                                                                                                                                             |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| REST API            | Owns durable business state, authentication, payments, task lifecycle, wallet, KYC, reports, admin actions, and provider webhooks.                                                                   |
| Socket.io           | Owns live task chat, voice message signaling/metadata, support live chat, live tracking, and presence only. It must not become the source of truth for payments, KYC, wallet, or dispute resolution. |
| BullMQ Workers      | Own asynchronous and retryable work such as notifications, provider reconciliation, media processing, escrow settlement, and reports.                                                                |
| Cron/Scheduler      | Owns periodic safeguards such as payment reconciliation, stale task detection, direct offer expiry, backup checks, ledger checks, and SLA breach detection.                                          |
| PostgreSQL          | Permanent source of truth for users, tasks, wallet ledger, KYC state, reports, audit, provider events, and configuration.                                                                            |
| Valkey              | Temporary/fast state for cache, queue backend, online presence, geospatial support, rate limits, offer TTLs, and socket adapter state.                                                               |
| Object Storage      | Stores task proof media, voice message files where required, admin exports, and backup artifacts using permission-controlled access.                                                                 |

</div>

### Mobile Architecture

- Flutter with feature-first clean architecture.
- Explicit use cases, params, entities, models, repositories, datasources, state classes, and UI components.
- Riverpod for state management, with autogenerated providers preferred.
- Offline/retry states must exist for auth, task creation, payment status, chat, task status, and media upload.
- Shorebird used for Flutter OTA patching after proper release validation.

### Admin Frontend Architecture

- Next.js with clean feature-first structure.
- Each feature owns API clients, types, mappers, forms, tables, filters, states, permission checks, and empty/error/loading states.
- Admin modules include users, Taskers, KYC, task operations, finance, withdrawals, reports/disputes, support live chat, risk, categories, coverage config, remote config, audit logs, metrics, and use case health.

</div>

<div id="section-05" class="section section">

<div class="section-num">

05

</div>

<div class="eyebrow">

Part V

</div>

## Data Model and State

The model separates identity, role capability, wallet purpose, policy enforcement, task state, media, communication, provider state, and admin auditability.

### Core Entity Catalogue

<div class="table-wrap">

| Area              | Entities                                                                                                                              |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Identity          | User, UserSession, Device                                                                                                             |
| Tasker Capability | TaskerProfile, KycVerification                                                                                                        |
| Catalog           | TaskCategory, TaskType                                                                                                                |
| Tasks             | Task, TaskLocation, TaskLocationGeocode, TaskOffer, DirectTaskOffer, FavoriteTasker, TaskOwnerRejection                               |
| Proof and Media   | TaskMedia / TaskProof with photos/videos, max 50MB per file, permission-controlled access                                             |
| Tracking          | TaskTrackingEvent; live location stored temporarily in Valkey                                                                         |
| Wallet/Finance    | Wallet, WalletTransaction, EscrowTransaction, Payment, Withdrawal, Refund, TaskSettlementHold / EscrowReleaseDelay                    |
| Communication     | ChatRoom, ChatMessage, VoiceMessage, TaskCallSession, CommunicationAuditLog                                                           |
| Support/Trust     | SupportTicket, SupportLiveChatSession, SupportLiveChatMessage, TaskReport, UserBlock, RiskFlag, UserTrustProfile, PolicyEvent         |
| Admin/Ops         | AdminUser, AdminRole, AdminPermission, AdminAuditLog, SystemConfig, ServiceCoverageConfig, UseCaseLog, WebhookEvent, BackgroundJobLog |

</div>

### User, Tasker and Wallet Separation

<div class="diagram">

<div class="diagram-head">

#### Unified User Model

Architecture Diagram

</div>

    User
      +-- mode: TASK_OWNER | TASKER
      +-- TaskerProfile only when user wants to earn
      +-- Wallet(type=TASK_OWNER)
      +-- Wallet(type=TASKER)

    Task Owner wallet:
      - funds tasks
      - receives refunds/credits
      - cannot self-withdraw by default

    Tasker wallet:
      - receives earnings
      - supports withdrawal

</div>

### Important Status Enums

<div class="table-wrap">

| Enum                  | Values                                                                                                                                                                                                        |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TaskStatus            | DRAFT, PENDING_PAYMENT, PAID, DIRECT_OFFER_SENT, DIRECT_OFFER_EXPIRED, BROADCASTING, ACCEPTED, TASKER_EN_ROUTE, ARRIVED, IN_PROGRESS, COMPLETION_REQUESTED, COMPLETED, DISPUTED, CANCELLED, EXPIRED, REFUNDED |
| DirectTaskOfferStatus | SENT, VIEWED, ACCEPTED, DECLINED, EXPIRED, CANCELLED, TASKER_UNAVAILABLE                                                                                                                                      |
| FavoriteTaskerStatus  | ACTIVE, REMOVED, BLOCKED                                                                                                                                                                                      |
| TaskMediaStatus       | ACTIVE, REMOVED, REJECTED                                                                                                                                                                                     |
| TaskReportStatus      | OPEN, UNDER_REVIEW, EVIDENCE_REQUESTED, RESOLVED, DISMISSED, ESCALATED                                                                                                                                        |
| PaymentStatus         | INITIATED, PENDING, SUCCESSFUL, FAILED, EXPIRED, REVERSED                                                                                                                                                     |
| EscrowStatus          | HELD, RELEASED, DISPUTED, REFUNDED, PARTIALLY_REFUNDED                                                                                                                                                        |
| WithdrawalStatus      | REQUESTED, PROCESSING, SUCCESSFUL, FAILED, REVERSED, FLAGGED, CANCELLED                                                                                                                                       |

</div>

### Task Discovery State Rule

<div class="callout blue">

**Updated Discovery Model**

Taskers can view available tasks sorted nearest first and farthest last, with location filters. Radius is used for ranking, filters, and cost optimization, not as a hard visibility wall.

</div>

### Lifecycle and Data Integrity Rules

<div class="table-wrap">

| Area             | Rule                                                                                                                           |
|------------------|--------------------------------------------------------------------------------------------------------------------------------|
| Task state       | Task transitions must be explicit, validated, and persisted. Invalid state jumps must be rejected.                             |
| Task media       | Media belongs to a task and must have uploader, role, purpose, status, file metadata, permission scope, and moderation fields. |
| Geocoding        | Manual addresses must produce coordinates and a pin confirmation record before posting proceeds.                               |
| Wallet ledger    | Balances must never change without an append-only WalletTransaction record.                                                    |
| Escrow           | Escrow release/refund/hold must be tied to task state, completion, dispute/report outcome, or admin-authorized workflow.       |
| Settlement hold  | Only disputed or active-issue tasks delay payout. Non-disputed Tasker earnings should settle normally.                         |
| Warnings/strikes | Policy events must be role-specific. The same user can have separate Task Owner and Tasker policy histories.                   |
| Audit            | High-risk admin, finance, KYC, policy, media-removal, and configuration actions must create audit records.                     |

</div>

</div>

<div id="section-06" class="section section">

<div class="section-num">

06

</div>

<div class="eyebrow">

Part VI

</div>

## API, Socket, Events and Jobs

Backend contracts are split into REST APIs for durable state, Socket.io for live communication/tracking, webhooks for provider callbacks, and BullMQ/cron for asynchronous reliability.

### REST API Group Index

<div class="table-wrap">

| Group                | Scope                                                                                                                                                                                                                                                                                                                                   |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Auth APIs            | Register/login, password recovery, Google/Apple social authentication, OTP via email first and Termii SMS fallback, refresh token, logout                                                                                                                                                                                               |
| User/Profile APIs    | Current user, profile update, mode switch, saved addresses, notification preferences, security PIN setup/reset, PIN verification for sensitive actions, device/session management                                                                                                                                                       |
| KYC APIs             | Start KYC, submit NIN/BVN, biometric capture reference, status check, admin review sync                                                                                                                                                                                                                                                 |
| Task Catalog APIs    | List/manage categories and task types, pricing/rules                                                                                                                                                                                                                                                                                    |
| Task Owner APIs      | Create draft, geocode/manual location, pin confirm, proof upload, payment intent, broadcast/direct offer, reject Tasker, confirm completion, rate/favorite, report, rebook/repeat task                                                                                                                                                  |
| Tasker APIs          | Profile, skills, availability, working hours, task preferences, maximum travel distance, task browse/filter, accept/decline, en route, arrived, started, completion request, proof upload, rate owner                                                                                                                                   |
| Favorites APIs       | Add/remove/list favorite Taskers, check status                                                                                                                                                                                                                                                                                          |
| Direct Offer APIs    | Send, view, accept, decline, expire, convert to public discovery/broadcast                                                                                                                                                                                                                                                              |
| Wallet/Payment APIs  | Wallets, ledger, payment initialization, webhooks, reconciliation, escrow, payout account setup, PIN-confirmed withdrawal request, refund/support issue                                                                                                                                                                                 |
| Support/Dispute APIs | Structured task report/dispute, support ticket, emergency support, evidence upload, support live chat session setup                                                                                                                                                                                                                     |
| Admin APIs           | TOTP, RBAC, users, Taskers, KYC with request re-verification, tasks with controlled force cancel but no admin reassignment, finance, receipts/transactions, reports, basic analytics, support, notifications/announcements, ratings/reviews moderation, risk, config, categories with disable/archive, coverage, audit, use case health |
| System/Ops APIs      | Health, readiness, metrics, webhook logs, job logs, use case logs                                                                                                                                                                                                                                                                       |

</div>

### Socket Event Scope

<div class="table-wrap">

| Socket Area       | Events / Notes                                                                                      |
|-------------------|-----------------------------------------------------------------------------------------------------|
| Task Chat         | Message send/new/read, typing, voice message metadata, delivery state after task acceptance         |
| Support Live Chat | Support session message events, typing, assignment state. Disputes themselves do not use live chat. |
| Live Tracking     | Tasker location updates while accepted/en route/in progress; paid ETA refresh is guarded.           |
| Presence          | Online state, availability heartbeat, socket reconnection status                                    |

</div>

<div class="callout amber">

**Not Socket-Based**

Direct offers, dispute resolution, payment status, KYC status, withdrawal requests, and durable task state transitions are REST/API-driven and backed by database state.

</div>

### API Response and Error Standard

<div class="table-wrap">

| Contract Area  | Standard                                                                                                                                                        |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Success shape  | `{ success: true, message, data, meta }`                                                                                                                        |
| Error shape    | `{ success: false, message, error: { code, details } }`                                                                                                         |
| Pagination     | List endpoints must expose pagination metadata in `meta`, including page/cursor, limit, total where practical, and next cursor where cursor-based.              |
| Idempotency    | Payment, webhook, wallet, media upload finalization, task state transitions, and settlement endpoints must support idempotency where duplicate calls can occur. |
| Correlation    | REST, socket, worker, and webhook flows should carry requestId/correlationId for logs and use case health tracking.                                             |
| Sensitive data | Responses must not expose KYC secrets, real phone numbers, private addresses before acceptance, provider secrets, OTPs, or hidden media URLs.                   |

</div>

### Socket Contract Rules

<div class="table-wrap">

| Rule           | Decision                                                                                                                                         |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Authentication | Socket connection must authenticate with a valid user token and bind to user/session context.                                                    |
| Authorization  | Joining task rooms requires valid task membership and task state.                                                                                |
| Persistence    | Task chat, support live chat, voice message metadata, and delivery/read receipts are persisted asynchronously where needed.                      |
| Reconnection   | Mobile must refresh task state from REST after reconnect because socket events are not durable source of truth.                                  |
| Scaling        | When multiple API/socket instances exist, Socket.io must use Valkey/Redis adapter and proxy/load-balancer rules must support stable connections. |

</div>

### Masked Call Flow

<div class="diagram">

<div class="diagram-head">

#### Proxy Dial-In Masked Calls

Architecture Diagram

</div>

    User taps "Call via Work2Cash"
      -> Backend creates/retrieves TaskCallSession
      -> App opens phone dialer with Work2Cash proxy number
      -> Caller pays normal airtime
      -> Provider receives inbound call to proxy number
      -> Provider sends webhook to Work2Cash
      -> Work2Cash returns routing instruction
      -> Provider bridges/forwards call to recipient
      -> Recipient sees Work2Cash/proxy number, not caller number

Product wording: Calls use your normal airtime. Work2Cash protects your phone number.

</div>

### Queues and Cron

<div class="table-wrap">

| Queue / Job        | Responsibility                                                                                      |
|--------------------|-----------------------------------------------------------------------------------------------------|
| notification.queue | Email OTP, Termii SMS fallback, FCM notifications, transactional email/SMS fallback                 |
| payment.queue      | Webhook safety retries, payment verification, reconciliation, escrow release/refund                 |
| kyc.queue          | Smile ID status checks, KYC reconciliation, manual review reminders                                 |
| matching.queue     | Task discovery support, offer fan-out, direct offer expiry, re-broadcast logic                      |
| wallet.queue       | Ledger posting, withdrawal processing, failed withdrawal retry, admin-approved refunds              |
| chat.queue         | Persist task chat, support live chat, voice message metadata, delivery/read receipts where required |
| maps.queue         | Batched ETA requests, dual-condition ETA guard checks, route update persistence                     |
| audit.queue        | Admin audit logs, use case logs, security event logs                                                |
| media.queue        | File validation, unsafe media review workflow, temporary upload cleanup                             |
| report.queue       | Finance exports, platform summaries, dashboard aggregates                                           |

</div>

</div>

<div id="section-07" class="section section">

<div class="section-num">

07

</div>

<div class="eyebrow">

Part VII

</div>

## Providers, Hosting and Costing

The infrastructure strategy prioritizes low fixed cost, self-hosting, provider abstraction, and clear fallback paths if latency or provider capability fails.

### Current Approved Production Cost Baseline

Production provider: DigitalOcean. Hetzner is not available for this project and is not the selected production provider. Contabo remains the selected staging baseline.

| Item | Value |
|---|---|
| App server | DigitalOcean Basic Droplet, 16GB RAM, 8 vCPU, 320GB SSD - $96/month |
| Data server | DigitalOcean Basic Droplet, 16GB RAM, 8 vCPU, 320GB SSD - $96/month |
| Monitoring server | DigitalOcean Basic Droplet, 4GB RAM, 2 vCPU, 80GB SSD - $24/month |
| Object storage | DigitalOcean Spaces, 250GiB storage / 1TiB outbound transfer baseline - $5/month |
| Total production baseline | $221/month; ₦353,600/month at ₦1,600/$ |
| Yearly production baseline | $2,652/year; ₦4,243,200/year |

### Current Approved Staging Cost Baseline

Staging provider: Contabo. Selected plan: Cloud 20 with 6 vCPU cores, 12GB RAM, 100GB NVMe, 2 snapshots, 300Mbit/s port, EU region, Ubuntu, AutoBackup disabled and no private networking. Add-on: 250GB Object Storage in European Union.

| Item | Value |
|---|---|
| Monthly staging infrastructure | €10/month: €7.50 Cloud 20 + €2.50 object storage |
| Estimated monthly Naira value | ₦18,000/month using €1 = ₦1,800 |
| Domain first-month cost | ₦9,890: ₦9,200 base + ₦690 VAT |
| First-month direct estimate | ₦27,890 including domain and one Contabo month |
| Safe first-month approval | ₦40,000 for domain, server, object storage, VAT/FX/payment variance and checkout buffer |

> AutoBackup is disabled, so backups must be configured from the server to the 250GB object storage. Server storage alone is not the backup strategy.

### Provider Register

<div class="table-wrap">

| Provider                            | Purpose                                                 | Decision                                      |
|-------------------------------------|---------------------------------------------------------|-----------------------------------------------|
| Paystack                            | Collections, transfers, webhooks, virtual/payment flows | Launch provider                               |
| Moniepoint                          | Collections/payment support                             | Launch provider                               |
| Smile ID                            | NIN/BVN and biometric KYC                               | Tasker KYC provider                           |
| Termii                              | SMS OTP fallback and critical SMS                       | Email first, SMS fallback                     |
| Email Provider                      | OTP and transactional emails                            | Adapter-based; exact provider can evolve      |
| FCM                                 | Push notifications and device wake-up                   | Required for task/direct offer/status wake-up |
| Firebase Analytics                  | Product analytics                                       | Included, not deep-planned for MVP            |
| Sentry                              | Error monitoring                                        | Developer/free plan                           |
| Google Maps                         | Geocoding, ETA, Distance Matrix                         | Use after filtering/batching and cost guard   |
| Shorebird                           | Flutter OTA patching                                    | Included                                      |
| Infobip                             | Masked call proxy dial-in                               | Provisional primary                           |
| Africa's Talking                    | Masked call fallback candidate                          | Secondary                                     |
| Vonage                              | Masked call fallback                                    | Fallback                                      |
| Sinch                               | Masked call enterprise fallback                         | Enterprise fallback                           |
| DigitalOcean Spaces / S3-compatible | Task media and backups                                  | Object/backup storage                         |

</div>

### Hosting Strategy

<div class="callout green">

**Production Strategy**

Use Contabo for lean staging and DigitalOcean for production. DigitalOcean is the active production baseline for app, data, monitoring and object storage.

</div>

<div class="table-wrap">

| Environment | Provider / Plan | Monthly Price | NGN Budget Note | Yearly Budget Note |
|----------------------------|-------------------------------------------------------------------------------|-------------|-------------------------|-----------------------|
| Staging | Contabo Cloud 20 - 6 vCPU, 12GB RAM, 100GB NVMe, 2 snapshots, 300Mbit/s port, EU region, Ubuntu | €7.50/month | ₦13,500/month at €1 = ₦1,800 | Recalculate from live invoice |
| Staging object storage | Contabo 250GB Object Storage - European Union add-on | €2.50/month | ₦4,500/month at €1 = ₦1,800 | Recalculate from live invoice |
| Production App Server | DigitalOcean Basic Droplet - 16GB RAM, 8 vCPU, 320GB SSD | $96/month | ₦153,600/month | ₦1,843,200/year |
| Production Data Server | DigitalOcean Basic Droplet - 16GB RAM, 8 vCPU, 320GB SSD | $96/month | ₦153,600/month | ₦1,843,200/year |
| Production Monitoring Server | DigitalOcean Basic Droplet - 4GB RAM, 2 vCPU, 80GB SSD | $24/month | ₦38,400/month | ₦460,800/year |
| Production Object Storage | DigitalOcean Spaces - 250GiB storage / 1TiB outbound transfer baseline | $5/month | ₦8,000/month | ₦96,000/year |
| Total Production Baseline | DigitalOcean production infrastructure | $221/month | ₦353,600/month | ₦4,243,200/year |

</div>

### Staging to Production Transition

<div class="table-wrap">

| Step | Action                                                                                                                                 |
|------|----------------------------------------------------------------------------------------------------------------------------------------|
| 1    | Freeze staging features and verify all acceptance criteria against staging.                                                            |
| 2    | Provision production app, data, monitoring, object storage, DNS, TLS, firewall, and secrets.                                           |
| 3    | Run production database migrations against empty/seeded production database.                                                           |
| 4    | Seed categories, task types, system config, admin roles, coverage config, and legal URLs.                                              |
| 5    | Configure live Paystack, Moniepoint, Smile ID, Termii, FCM, Sentry, Google Maps, storage, and masked call candidate provider if ready. |
| 6    | Run smoke tests for auth, KYC, task creation, payment, webhook, escrow, chat, media upload, support, admin, backup, and monitoring.    |
| 7    | Perform go-live rehearsal and rollback rehearsal before public release.                                                                |
| 8    | Switch mobile/admin/public traffic to production only after final Traceworka approval.                                                 |

</div>

### Cost Control Rules

- Do not auto-refresh paid APIs aggressively.
- Batch Google Maps requests and use geospatial pre-filtering/ranking before paid ETA calls.
- Use the ETA Cost Guard: paid ETA refresh is allowed only when the 5-minute guard has elapsed and the Tasker has crossed the next 10% total-journey milestone; after refresh, reset the timer and next milestone.
- Track masked call sessions, minutes, failures, provider costs, and task-level usage.
- Self-host PostgreSQL, Valkey, BullMQ, Socket.io, monitoring, and workers while maintaining backup/restore discipline.
- Use monthly provider spending alerts.

### Sources and Pricing Notes

- DigitalOcean pricing checked against official Droplets pricing page for \$96/month 16GB/8vCPU and \$24/month 4GB/2vCPU planning assumptions.
- DigitalOcean Spaces \$5/month planning assumption checked against official Spaces pricing documentation.
- DigitalOcean production pricing baseline is based on Basic Droplet and Spaces planning values; prices still must be revalidated before provisioning because providers can change pricing.
- All provider prices exclude VAT and may change before launch.

</div>

<div id="section-08" class="section section">

<div class="section-num">

08

</div>

<div class="eyebrow">

Part VIII

</div>

## Security, Trust and Compliance

Security design covers identity, admin access, KYC, wallet integrity, media privacy, phone masking, reporting, risk flags, policy enforcement, and Nigeria data protection alignment.

### Security Controls

<div class="table-wrap">

| Area           | Control                                                                                           |
|----------------|---------------------------------------------------------------------------------------------------|
| Authentication | JWT + refresh token rotation, OTP rate limits, device/session tracking                            |
| Admin          | TOTP 2FA, RBAC, high-risk action reason requirement, audit logs                                   |
| KYC            | Smile ID verification, restricted admin access, KYC view audit logging                            |
| Payments       | Webhook signature verification, idempotency, reconciliation jobs, no frontend-only confirmation   |
| Wallet         | Append-only ledger, hourly consistency checks, manual adjustment audit                            |
| Media          | Permission-controlled URLs, admin review/removal, 50MB per file, photos/videos only for MVP       |
| Phone Privacy  | Masked calls only; real numbers not exposed; call sessions are task-bound and time-limited        |
| Infrastructure | Firewall, SSH hardening, Postgres/Valkey private access, encrypted backups                        |
| Logs           | Scrub KYC, OTPs, secrets, payment payloads, phone numbers, and private addresses from logs/Sentry |

</div>

### Reports, Disputes and Risk

- Reports/disputes are structured and task-linked with role/state-specific options.
- Disputes do not use live chat.
- Support live chat is separate and used for operational help.
- Off-platform payment/booking requests are prohibited and reportable.
- Chat and voice notes should support automated flagging where possible.
- Verified off-platform abuse triggers warning/strike.
- Before calls, show: For your protection, keep task communication and payment inside Work2Cash.

### Compliance and Privacy Direction

- Align with Nigeria Data Protection Act / NDPC-aware privacy practices.
- Support access, correction, deletion/deactivation, consent withdrawal for optional processing, and support review of sensitive decisions where applicable.
- Exact retention periods are not locked at architecture stage and must be confirmed during legal review.
- Final legal wording must be reviewed by qualified legal counsel before public launch.
- Static legal pages first; admin-managed legal content later if needed.

### SLA and Disaster Recovery Targets

<div class="table-wrap">

| Area                          | Target                                      |
|-------------------------------|---------------------------------------------|
| KYC Review                    | Within 24 hours                             |
| Withdrawal Processing         | Same day or within 24 hours                 |
| Support First Response        | Within 2 business hours                     |
| Dispute Resolution            | Within 48-72 hours                          |
| Refund / Wallet Issue         | Within 24-48 hours                          |
| Failed Payment Reconciliation | Within 30 minutes to 2 hours                |
| Emergency Support             | Priority queue, target under 15 minutes     |
| RPO                           | 15 minutes to 1 hour                        |
| RTO                           | 2 to 4 hours                                |
| Restore Drill                 | Weekly during staging, monthly after launch |

</div>

### Alert Thresholds

<div class="table-wrap">

| Area       | Alert Rule                                                                                                                             |
|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| Server     | CPU above 80% for 10 minutes; RAM above 85% for 10 minutes; disk above 80%; disk above 90% critical; server unreachable for 2 minutes. |
| API        | Error rate above 2% for 5 minutes; p95 latency above 1.5 seconds for 10 minutes; health/readiness failure.                             |
| PostgreSQL | Backup failed, backup stale, connection usage above 80%, lock wait spike, slow query spike, WAL/archive issue if enabled.              |
| Valkey     | Memory above 80%, evictions detected, unavailable, abnormal queue/presence key growth.                                                 |
| BullMQ     | Critical failed job spike, stalled jobs, payment/wallet/KYC/notification queue backlog.                                                |
| Payments   | Webhook verification failures, reconciliation backlog, pending payments older than expected, escrow/refund/withdrawal failures.        |
| Socket     | Socket service unavailable, reconnect spike, chat/tracking delivery failures.                                                          |
| Security   | Admin failed login spike, TOTP failure spike, suspicious device/session activity, multiple accounts from same device.                  |
| Business   | Dispute spike, cancellation spike, KYC rejection spike, support SLA breach, withdrawal SLA breach.                                     |

</div>

</div>

<div id="section-09" class="section section">

<div class="section-num">

09

</div>

<div class="eyebrow">

Part IX

</div>

## Engineering Standards

Engineering rules define how the Backend, Mobile, and Admin Frontend teams keep the codebase maintainable, observable, testable, and aligned with product decisions.

### Backend Standards

- NestJS with Hexagonal Architecture.
- Every use case has explicit input params, response shape, domain errors, and instrumentation.
- Track use case name, status, durationMs, lastUsedAt, requestId, actor where safe, error code, module, and environment.
- Do not log sensitive KYC, payment, OTP, phone, address, media, or provider secret data.
- Use adapters for Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, storage, and masked call providers.
- Use idempotency for payment, wallet, webhook, media, and critical state transitions.
- Target file size below 400 lines; hard warning above 500 lines.

### Mobile Standards

- Flutter feature-first clean architecture.
- Explicit use cases, params, entities, models, repositories, datasources, and state classes in separate files.
- Riverpod with autogenerated classes preferred.
- Every feature must define idle, loading, success, empty, error, offline, retrying, and permission denied states where relevant.
- Location, camera, microphone, media, notification, and phone permissions must have product-specific justification and graceful denial handling.

### Admin Frontend Standards

- Next.js feature-first architecture with typed API clients and permission-aware routes.
- Every admin table supports loading, empty, error, retry, filters, pagination, and permission denied states.
- Finance, KYC, policy, support, and config actions must request reason where high-risk.
- Audit log visibility must be built into high-risk workflows.

### Commit Message Standard

<div class="table-wrap">

| Type                     | Meaning                                        |
|--------------------------|------------------------------------------------|
| feat(scope): summary     | New feature                                    |
| fix(scope): summary      | Bug fix                                        |
| refactor(scope): summary | Internal restructuring without behavior change |
| perf(scope): summary     | Performance improvement                        |
| test(scope): summary     | Tests added or changed                         |
| docs(scope): summary     | Documentation                                  |
| security(scope): summary | Security change                                |
| infra(scope): summary    | Infrastructure change                          |

</div>

### Frontend State Standards

<div class="table-wrap">

| State            | Required Use                                                                                                           |
|------------------|------------------------------------------------------------------------------------------------------------------------|
| idle             | Initial neutral state before an operation begins.                                                                      |
| loading          | Initial fetch, submit, upload, payment init, KYC init, and action processing.                                          |
| success          | Completed action with visible confirmation or updated data.                                                            |
| empty            | No records, no tasks, no transactions, no tickets, no notifications, or no search results.                             |
| error            | Recoverable failure with useful message and retry where appropriate.                                                   |
| offline          | Network unavailable or action stored for retry where safe.                                                             |
| retrying         | Background retry for payment status, upload, chat persistence, or provider state refresh.                              |
| permissionDenied | Location, camera, microphone, notification, phone, or media permission missing.                                        |
| domain-specific  | paymentPending, paymentFailed, kycPending, kycRejected, taskExpired, noTaskerFound, withdrawalPending, settlementHeld. |

</div>

</div>

<div id="section-10" class="section section">

<div class="section-num">

10

</div>

<div class="eyebrow">

Part X

</div>

## Build, QA and Go-Live

The build system uses contract-first sequencing so backend work does not block mobile/admin, followed by two testing weeks before go-live.

### Timeline

<div class="table-wrap">

| Phase          | Dates                      | Focus                                                                                                         |
|----------------|----------------------------|---------------------------------------------------------------------------------------------------------------|
| Week 1         | 6-10 July 2026             | Setup, architecture foundation, auth/profile foundations, API contracts/stubs                                 |
| Week 2         | 13-17 July 2026            | Tasker activation, KYC, catalog, task creation, location, media and payment foundations                       |
| Week 3         | 20-24 July 2026            | Task discovery, direct offers, Tasker interest, Task Owner selection, active task start, chat and tracking    |
| Week 4         | 27-31 July 2026            | Completion, settlement, cancellations, reports/disputes, ratings, favorites, wallet, withdrawal and support   |
| Week 5         | 3-7 August 2026            | Settings, referral, rebook, operational admin modules, provider integration and full-flow QA                  |
| Week 6         | 10-14 August 2026          | Hardening, performance, security, provider recovery and major defect closure                                  |
| Week 7         | 17-21 August 2026          | Release-candidate preparation, device/browser QA, operations dry runs, payout dry run and provider validation |
| Week 8         | 24-28 August 2026          | Stabilization, final defect pass, go-live rehearsal, handover and build freeze                                |
| Testing Week 1 | 31 August-4 September 2026 | QA, regression, device testing, product-flow acceptance and environment verification                          |
| Testing Week 2 | 7-11 September 2026        | UAT, load/recovery/offline testing, security/privacy/provider testing and go-live decision pack               |
| Go-Live        | 14 September 2026          | Production launch after final approval                                                                        |

</div>

### Contract-First Rule

- Backend publishes OpenAPI, enums, response shapes, socket event names, auth rules, and mock/stub endpoints early.
- Backend tasks are tagged CONTRACT, STUB, REAL, INTEGRATION, or HARDENING.
- Mobile and Admin can build against contracts before full backend logic is complete.
- Use mocks and seeded test data to avoid blocking UI teams.

### Go-Live Blockers

- Payment webhook verification failing.
- Wallet ledger mismatch exists.
- Escrow release/refund untested.
- KYC approval/rejection flow failing.
- Admin TOTP or RBAC broken.
- Postgres backup restore not tested.
- Socket chat/tracking unstable.
- FCM delivery not working.
- Masked call exposes real phone numbers.
- Private task address or proof media exposed publicly.
- Task Owner or Tasker core flow cannot be completed.
- Critical Sentry errors unresolved.

### 30-Day Launch Success Criteria

<div class="table-wrap">

| Metric                            | Target                                                                                                            |
|-----------------------------------|-------------------------------------------------------------------------------------------------------------------|
| Payment success rate              | Above 95%                                                                                                         |
| Escrow ledger mismatch            | 0 mismatches                                                                                                      |
| Critical unresolved Sentry errors | 0 before launch                                                                                                   |
| API uptime                        | Above 99%                                                                                                         |
| Task completion                   | Improves week over week                                                                                           |
| KYC SLA                           | Within 24 hours                                                                                                   |
| Withdrawal SLA                    | Within 24 hours                                                                                                   |
| Support SLA                       | First response within 2 business hours                                                                            |
| Privacy/security                  | No confirmed leakage of phone numbers, KYC data, payment secrets, private task addresses, or protected task media |
| Masked call privacy               | Real phone numbers are not exposed during task-bound calls                                                        |
| Google Maps/API cost              | Spend remains inside budget guard                                                                                 |

</div>

### Launch Metrics

<div class="table-wrap">

| Metric Group | Metrics                                                                                                                                  |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------|
| Acquisition  | Total registered users, new users per day, referral signups, referral conversion rate.                                                   |
| Activation   | Completed profiles, Tasker profile creation, KYC submission, KYC approval rate, active Taskers by location/category.                     |
| Marketplace  | Tasks posted, funded, accepted, completed, cancellation rate, no-show rate, time to Tasker interest, time to acceptance, average ETA.    |
| Finance      | Payment success/failure, webhook delay, pending payments, escrow held value, release success, withdrawal success, ledger mismatch count. |
| Trust/Safety | Reports opened/resolved, dispute rate, warnings, strikes, suspensions, off-platform solicitation reports, blocked users, risk flags.     |
| Support      | Tickets opened, support live chat sessions, first-response time, SLA breaches, emergency support response time.                          |
| Reliability  | API uptime, p95 latency, error rate, socket uptime, reconnect rate, FCM success/failure, job failure rate, backup success.               |
| Cost         | Infrastructure spend, Google Maps spend, SMS/email spend, masked call spend, cost per completed task, provider usage vs budget.          |

</div>

### App Store / Play Store Readiness

<div class="table-wrap">

| Item                   | Decision                                                                      |
|------------------------|-------------------------------------------------------------------------------|
| App Display Name       | Work2Cash                                                                     |
| Android Package Name   | ng.work2cash.app                                                              |
| iOS Bundle ID          | ng.work2cash.app                                                              |
| Support Email          | support@work2cash.ng                                                          |
| Privacy Email          | privacy@work2cash.ng or support@work2cash.ng recommended; avoid generic Gmail |
| Developer Account Name | Work2Cash                                                                     |
| Category               | Business                                                                      |

</div>

</div>

<div id="section-11" class="section section">

<div class="section-num">

11

</div>

<div class="eyebrow">

Part XI

</div>

## Risks and Decisions

This section records key architecture decisions, tradeoffs, unresolved items, and operating risks that must remain visible through build and launch.

### Key Decisions

<div class="table-wrap">

| Decision                             | Reason                                                   | Tradeoff                                                                 |
|--------------------------------------|----------------------------------------------------------|--------------------------------------------------------------------------|
| Unified User model                   | A Nigerian user may hire and earn from the same account  | Permission logic must be enforced through mode, profile, and wallet type |
| Separate API and Socket domains      | Clean routing, scaling, monitoring, and future migration | More DNS/proxy configuration                                             |
| Self-host infrastructure             | Lower fixed cost and control                             | Team owns backups, updates, monitoring, restore drills                   |
| Contabo staging, DigitalOcean production | Contabo keeps staging lean; DigitalOcean is the active production baseline | Monitor production cost and capacity before scaling |
| Task browse sorted by distance       | Avoid hiding useful work strictly by radius              | Tasker and Task Owner decisions must factor ETA and arrival time         |
| Proxy dial-in masked calls           | Protect phone numbers while using normal dialer/airtime  | Provider capability and cost must be validated during development        |
| Static legal pages first             | Safer and faster for MVP                                 | Admin-managed legal content deferred                                     |

</div>

### Risk Register

<div class="table-wrap">

| Risk                    | Impact      | Mitigation                                                                                        |
|-------------------------|-------------|---------------------------------------------------------------------------------------------------|
| USD cost spikes         | High        | Batch paid APIs, use Contabo for lean staging, use DigitalOcean for production, track provider costs, guard Google Maps, monitor masked calls |
| Payment webhook failure | Critical    | Signature verification, webhook logs, reconciliation cron, backend-confirmed state                |
| Wallet ledger mismatch  | Critical    | Append-only ledger, hourly checks, admin reason/audit for manual actions                          |
| Identity fraud          | High        | Smile ID KYC, device/session monitoring, risk flags, admin review                                 |
| Socket instability      | Medium/High | REST is source of truth, reconnect logic, Valkey adapter when scaling                             |
| Phone number leakage    | Critical    | Masked call provider validation, no real number display, task-bound call sessions                 |
| Unsafe task/media       | High        | Approved categories only, media review/removal, reports/risk flags                                |
| Backup failure          | Critical    | Off-server backups, restore drills, backup freshness alerts                                       |

</div>

### Open Decision Register

<div class="table-wrap">

| Decision                            | Current Status                                                                           |
|-------------------------------------|------------------------------------------------------------------------------------------|
| Masked call provider                | Infobip provisional primary; Africa's Talking, Vonage, Sinch remain fallback options     |
| Masked call Nigerian number/pricing | To be confirmed during communication module development                                  |
| Final legal wording                 | Counsel review required before public launch                                             |
| Final retention periods             | Not locked; categories defined and final periods confirmed during legal review           |
| Support staffing                    | Hybrid: Traceworka handles MVP support, dedicated support added when volume/SLA requires |
| Coverage controls                   | Nigeria-wide by default with admin restrictions by state, city, or custom zone           |

</div>

</div>

<div id="section-12" class="section section">

<div class="section-num">

12

</div>

<div class="eyebrow">

Part XII

</div>

## Appendices

Reference lists for document assembly, legal URLs, glossary, and implementation handover.

### Work2Cash Resource Links

<div class="table-wrap">

| Resource                              | Portal Page                                 | Purpose                                                                                                                     |
|---------------------------------------|-------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Main Enterprise Architecture v1       | Main Enterprise Architecture v1        | Top-level source of truth for architecture, product, infrastructure, provider, security, timeline and governance decisions. |
| Mobile Flow Catalogue v1              | Mobile Flow Catalogue v1               | Closed mobile flows, subflows, dependencies, recovery paths and screen silhouettes.                                         |
| Admin Flow Catalogue v1               | Admin Flow Catalogue v1                | Closed admin web flows, dependencies, recovery paths and dashboard silhouettes.                                             |
| Flow Alignment Review v1              | Flow Alignment Review v1               | Comparison and decision tracker for Figma, mobile/admin flow catalogues and architecture alignment.                         |
| Legal & User-Facing Documents Pack    | Legal & User-Facing Documents Pack v1    | Combined legal/user-facing pack. Separate /legal/... pages are not used for MVP docs publishing.                            |
| API & Socket Contract Specification   | API & Socket Contract Specification v1   | Planned contract document for REST, socket, webhook, events, queues and response shapes.                                    |
| Data Model & Prisma Schema Planning   | Data Model & Prisma Schema Planning v1   | Planned entity, relationship, enum and migration planning document.                                                         |
| Provider Integration & Cost Control   | Provider Integration & Cost Control v1   | Planned provider, hosting, pricing, cost guard and operations document.                                                     |
| Build / Implementation Execution Plan | Build / Implementation Execution Plan v1 | Planned team-by-team build timeline and execution tracker.                                                                  |
| QA / Go-Live Readiness Checklist      | QA / Go-Live Readiness Checklist v1      | Planned QA, launch, rollback, provider validation and go-live checklist.                                                    |

</div>

### GitHub Documentation Governance

- Repository name: docs. It is the team-facing Work2Cash documentation portal.
- GitHub Pages deploys through GitHub Actions from a clean \_site folder.
- The deployment artifact should include index.html, documents/, assets/, and optional 404.html.
- GitHub Pages source is GitHub Actions.
- index.html is the password gate landing page. Protected documents use client-side auth guard only; this is soft protection, not server-side security.
- Every protected HTML file under documents/ must include: `<script src="../assets/js/guard.js"></script>`.
- scripts/apply.guard.js must recursively scan protected document pages and fail deployment if a protected HTML file lacks guard.js.
- No secrets, API keys, production credentials, private user data, sensitive payment data, or confidential operational secrets should be stored in the documentation portal.
- Documentation changes enter main through PRs. No direct push to main. Commits should be one clear documentation update at a time.

### Document Assembly Plan

<div class="table-wrap">

| Order | Document                                     | Status                                  |
|-------|----------------------------------------------|-----------------------------------------|
| 1     | Main Enterprise Architecture Document        | Active source of truth                  |
| 2     | Mobile Flow Catalogue                        | Generated and aligned                   |
| 3     | Admin Flow Catalogue                         | Generated and aligned                   |
| 4     | Flow Alignment Review                        | Generated and resolved-decision tracker |
| 5     | Legal & User-Facing Documents Pack           | Combined pack; publish as a protected document page |
| 6     | API & Socket Contract Specification          | Planned                                 |
| 7     | Data Model & Prisma Schema Planning Document | Planned                                 |
| 8     | Provider Integration & Cost Control Document | Planned                                 |
| 9     | Build / Implementation Execution Plan        | Planned                                 |
| 10    | QA / Go-Live Readiness Checklist             | Planned                                 |

</div>

### Combined Legal Pack

<div class="table-wrap">

| Document                              | Location                                           | Publishing Rule                                                                                                                  |
|---------------------------------------|----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| Legal & User-Facing Documents Pack v1 | Legal & User-Facing Documents Pack v1 | Main architecture links to Legal & User-Facing Documents Pack v1. Separate /legal/... pages are not published for MVP docs. |

</div>

### Closed Flow Catalogue Addendum

<div class="table-wrap">

| Area   | Accepted Flow Decisions                                                                                                                                                                                                                                                                                                                                                        |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mobile | SF-11 Password Recovery; SF-12 Payout Account Setup; SF-13 Google/Apple Social Authentication; MF-18 Profile and Settings; MF-19 Security and Device Management with PIN; MF-20 Notification Center and Preferences; MF-21 Tasker Availability and Work Preferences with Auto Accept deferred; MF-22 Ratings and Reviews; MF-23 Emergency Support; MF-24 Rebook / Repeat Task. |
| Admin  | AF-21 Notifications and Announcements; AF-22 Ratings and Reviews Management; AF-23 Basic Analytics and Reports; AF-24 Receipt and Transaction Review; controlled Force Cancel inside AF-05; Request Re-Verification inside AF-04; Disable/Archive category rules inside AF-11; Admin Reassign Task rejected.                                                                   |

</div>

### Glossary

<div class="table-wrap">

| Term                     | Meaning                                                                                                                                         |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Task Owner               | User who creates and funds a task.                                                                                                              |
| Tasker                   | KYC-approved user who can accept and perform tasks.                                                                                             |
| Direct Offer             | Task sent directly to a favorite Tasker through API/FCM, not Socket.io.                                                                         |
| Public Discovery         | Available tasks visible to Taskers, sorted nearest first and filterable by location.                                                            |
| Escrow                   | Held funds released after completion or resolution.                                                                                             |
| Task Proof               | Photo/video proof uploaded by Task Owner before posting and Tasker after completion.                                                            |
| Masked Call              | Task-bound call through Work2Cash proxy number that protects real phone numbers.                                                                |
| ETA Cost Guard           | Paid ETA refresh rule using a 5-minute guard plus the next 10% total-journey milestone. After each refresh, reset the timer and next milestone. |
| PIN Confirmation         | Work2Cash security PIN used for sensitive actions. OTP is used for PIN reset/recovery.                                                          |
| Payout Account           | Tasker withdrawal destination verified before payout requests. Task Owner wallet cannot withdraw directly.                                      |
| Rebook                   | Creates a new task from a completed task while preserving the old task as immutable history.                                                    |
| Emergency Support        | Priority support branch for urgent task, safety, payment, contact, or no-show issues. It does not replace local emergency services.             |
| Disable/Archive Category | Admin catalog action that removes a category/task type from new task creation while preserving historical records.                              |

</div>

### References

- DigitalOcean Droplets pricing: https://www.digitalocean.com/pricing/droplets
- DigitalOcean Spaces pricing: https://docs.digitalocean.com/products/spaces/details/pricing/
- Nigeria Data Protection Commission: https://ndpc.gov.ng/

</div>

</div>

<div class="footer-inner">

<div>

#### Work2Cash

Nigeria-first hyper-local task marketplace for Task Owners and Taskers.

</div>

<div>

#### Ownership

Company, sponsor, owner, prepared by, and final approver: Traceworka.

</div>

<div>

#### Status

HTML master architecture draft. Legal pack regeneration comes after architecture sign-off.

</div>

</div>
