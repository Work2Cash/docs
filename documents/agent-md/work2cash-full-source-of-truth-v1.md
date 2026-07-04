# Work2Cash Full Markdown Source Of Truth v1

This file concatenates the AI-readable Markdown equivalents of the Work2Cash documentation set.

Use it only when an agent needs broad project context. For implementation, prefer `ai-agent-start-here.md`, the shared execution rules, the relevant team brief and the relevant weekly pack.


---

# Source Document: Main Enterprise Architecture v1


# Main Enterprise Architecture v1

> AI-agent Markdown equivalent of `main-enterprise-architecture-v1.html`.
>
> Human-readable HTML source: `../main-enterprise-architecture-v1.html`.
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

Use Hetzner first for production because of cost. If Nigerian latency or routing is unacceptable after testing, move the app and data servers together to DigitalOcean London/Frankfurt.

</div>

<div class="table-wrap">

| Environment                | Provider / Plan                                                               | Monthly USD | Monthly NGN @ ₦1,600/\$ | Yearly NGN            |
|----------------------------|-------------------------------------------------------------------------------|-------------|-------------------------|-----------------------|
| Staging                    | Hetzner CX33 - 4 vCPU, 8GB RAM, 80GB SSD                                      | \$10.59     | ₦16,944                 | ₦203,328              |
| Staging + optional storage | CX33 + \$5 storage                                                            | \$15.59     | ₦24,944                 | ₦299,328              |
| Production Primary         | Hetzner CX43 app + CX43 data + CX23 monitoring + \$5 storage                  | \$50.27     | ₦80,432                 | ₦965,184              |
| Production Budget Buffer   | Primary production target buffer                                              | \$60-\$80   | ₦96,000-₦128,000        | ₦1,152,000-₦1,536,000 |
| Production Fallback        | DigitalOcean 16GB/8vCPU app + 16GB/8vCPU data + 4GB/2vCPU monitoring + Spaces | \$221       | ₦353,600                | ₦4,243,200            |

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
- Hetzner pricing baseline is confirmed from Hetzner official source (https://www.hetzner.com/cloud/cost-optimized/); prices still must be revalidated before provisioning because providers can change pricing.
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
| Hetzner first, DigitalOcean fallback | Cost-first production with latency fallback              | Must test Nigerian networks before launch                                |
| Task browse sorted by distance       | Avoid hiding useful work strictly by radius              | Tasker and Task Owner decisions must factor ETA and arrival time         |
| Proxy dial-in masked calls           | Protect phone numbers while using normal dialer/airtime  | Provider capability and cost must be validated during development        |
| Static legal pages first             | Safer and faster for MVP                                 | Admin-managed legal content deferred                                     |

</div>

### Risk Register

<div class="table-wrap">

| Risk                    | Impact      | Mitigation                                                                                        |
|-------------------------|-------------|---------------------------------------------------------------------------------------------------|
| USD cost spikes         | High        | Batch paid APIs, use Hetzner first, track provider costs, guard Google Maps, monitor masked calls |
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

| Resource                              | Docs Repo Path / Link                                 | Purpose                                                                                                                     |
|---------------------------------------|-------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Main Enterprise Architecture v1       | documents/main-enterprise-architecture-v1.html        | Top-level source of truth for architecture, product, infrastructure, provider, security, timeline and governance decisions. |
| Mobile Flow Catalogue v1              | documents/mobile-flow-catalogue-v1.html               | Closed mobile flows, subflows, dependencies, recovery paths and screen silhouettes.                                         |
| Admin Flow Catalogue v1               | documents/admin-flow-catalogue-v1.html                | Closed admin web flows, dependencies, recovery paths and dashboard silhouettes.                                             |
| Flow Alignment Review v1              | documents/flow-alignment-review-v1.html               | Comparison and decision tracker for Figma, mobile/admin flow catalogues and architecture alignment.                         |
| Legal & User-Facing Documents Pack    | documents/legal_user_facing_documents_pack_v1.html    | Combined legal/user-facing pack. Separate /legal/... pages are not used for MVP docs publishing.                            |
| API & Socket Contract Specification   | documents/api-socket-contract-specification-v1.html   | Planned contract document for REST, socket, webhook, events, queues and response shapes.                                    |
| Data Model & Prisma Schema Planning   | documents/data-model-prisma-schema-planning-v1.html   | Planned entity, relationship, enum and migration planning document.                                                         |
| Provider Integration & Cost Control   | documents/provider-integration-cost-control-v1.html   | Planned provider, hosting, pricing, cost guard and operations document.                                                     |
| Build / Implementation Execution Plan | documents/build-implementation-execution-plan-v1.html | Planned team-by-team build timeline and execution tracker.                                                                  |
| QA / Go-Live Readiness Checklist      | documents/qa-go-live-readiness-checklist-v1.html      | Planned QA, launch, rollback, provider validation and go-live checklist.                                                    |

</div>

### GitHub Documentation Governance

- Repository name: docs. It is the team-facing Work2Cash documentation portal.
- GitHub Pages deploys through GitHub Actions from a clean \_site folder.
- The deployment artifact should include index.html, documents/, assets/, and optional 404.html.
- GitHub Pages source is GitHub Actions.
- index.html is the password gate landing page. Protected documents use client-side auth guard only; this is soft protection, not server-side security.
- Every protected HTML file under documents/ must include: `<script src="../assets/js/guard.js"></script>`.
- scripts/apply.guard.js must recursively scan documents/ and fail deployment if a protected HTML file lacks guard.js.
- No secrets, API keys, production credentials, private user data, sensitive payment data, or confidential operational secrets should be stored in the docs repo.
- Documentation changes enter main through PRs. No direct push to main. Commits should be one clear documentation update at a time.

### Document Assembly Plan

<div class="table-wrap">

| Order | Document                                     | Status                                  |
|-------|----------------------------------------------|-----------------------------------------|
| 1     | Main Enterprise Architecture Document        | Active source of truth                  |
| 2     | Mobile Flow Catalogue                        | Generated and aligned                   |
| 3     | Admin Flow Catalogue                         | Generated and aligned                   |
| 4     | Flow Alignment Review                        | Generated and resolved-decision tracker |
| 5     | Legal & User-Facing Documents Pack           | Combined pack; publish under documents/ |
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
| Legal & User-Facing Documents Pack v1 | documents/legal_user_facing_documents_pack_v1.html | Main architecture links to ./legal_user_facing_documents_pack_v1.html. Separate /legal/... pages are not published for MVP docs. |

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
- Hetzner Cloud cost-optimized pricing: https://www.hetzner.com/cloud/cost-optimized/
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


---

# Source Document: Screen To Feature Map


# Screen To Feature Map

> AI-agent Markdown equivalent of `screen-to-feature-map-v1.html`.
>
> Human-readable HTML source: `../screen-to-feature-map-v1.html`.
> Use this Markdown version for lower-token AI context. If a task needs visual layout or exact document presentation, use the HTML page.

<div class="cover">

<div class="logo-row">

<div class="logo">

W2C

</div>

<div class="logo-text">

**Work2Cash** Product Architecture Document System

</div>

</div>

<div class="cover-main">

<div class="eyebrow">

Screen-to-Feature Map

</div>

# Mobile App and Admin Dashboard Feature Breakdown

A structured handover document translating the Figma screens into product features, backend requirements, Flutter modules, admin dashboard modules, and implementation checkpoints.

<div class="divider">

</div>

<div class="meta-grid">

<div class="meta">

ProjectWork2Cash

</div>

<div class="meta">

MarketNigeria

</div>

<div class="meta">

PlatformsFlutter + Next.js Admin

</div>

<div class="meta">

Document DateJuly 1, 2026

</div>

</div>

<div class="badges">

<span class="badge">Task Owner Flow</span> <span class="badge">Tasker Flow</span> <span class="badge">KYC</span> <span class="badge">Wallet and Escrow</span> <span class="badge">Admin Operations</span> <span class="badge">Nigeria-First UX</span>

</div>

</div>

<div class="cover-footer">

<div>

<span class="confidential">Internal</span>

<div>

Prepared for product, engineering, and stakeholder handover.

</div>

</div>

<div>

Design source: Work2Cash Figma export package

</div>

</div>

</div>

<div class="topbar">

**Work2Cash Screen-to-Feature Map** One user identity, dual roles, cardless payments, guarded paid APIs

</div>

<div role="main">

<div id="summary" class="section">

<div class="section-number">

01

</div>

<div class="section-eyebrow">

Big Picture

</div>

# What This Document Converts

The design package contains the user-facing mobile flows, raw mobile screens, admin dashboard screens, and the Work2Cash design token reference. This document maps those visuals into buildable product requirements.

<div class="grid-4">

<div class="stat-card">

<div class="stat">

2

</div>

Mobile lanes: Task Owner and Tasker

</div>

<div class="stat-card">

<div class="stat">

1

</div>

Shared user identity and KYC foundation

</div>

<div class="stat-card">

<div class="stat">

4

</div>

Primary operational engines: tasks, matching, wallet, admin

</div>

<div class="stat-card">

<div class="stat">

0

</div>

Forced card entry as default payment path

</div>

</div>

<div class="diagram">

<div class="flow">

<div class="node">

**Shared Auth**Account, OTP, identity, profile completion.

</div>

<div class="node">

**Task Owner**Post task, fund escrow, track, confirm, rate.

</div>

<div class="node success-node">

**Tasker**Set availability, accept tasks, complete work, withdraw.

</div>

<div class="node warning-node">

**Admin**Verify, moderate, settle, resolve, report.

</div>

<div class="node">

**Platform Core**KYC, wallet ledger, notifications, chat, analytics.

</div>

</div>

</div>

<div class="callout">

<div class="callout-label">

Core Rule

</div>

Work2Cash must be built as one marketplace with one user identity. A user can request help as a Task Owner and later earn as a Tasker after KYC and profile activation.

</div>

<div class="toc-grid">

<div class="toc-card">

[2. Design System](#design-system)Brand colors, typography, and reusable document style.

</div>

<div class="toc-card">

[3. Shared Auth and Identity](#shared)Onboarding, OTP, KYC, profile, and pricing rule education.

</div>

<div class="toc-card">

[4. Task Owner Flow](#owner)Task posting, payment, tracking, completion, wallet, support.

</div>

<div class="toc-card">

[5. Tasker Flow](#tasker)Activation, availability, job requests, completion, earnings.

</div>

<div class="toc-card">

[6. Admin Dashboard](#admin)Platform operations, finance, KYC, dispute, fraud, analytics.

</div>

<div class="toc-card">

[7. Backend Modules](#backend)Domain modules implied by the design surface.

</div>

<div class="toc-card">

[8. Implementation Map](#implementation)Flutter, admin, API, and provider integration boundaries.

</div>

<div class="toc-card">

[9. Final Checklist](#handover)Build readiness checks before tickets are created.

</div>

</div>

</div>

<div id="design-system" class="section">

<div class="section-number">

02

</div>

<div class="section-eyebrow">

Visual Foundation

</div>

# Design System Reference

The document system uses the Work2Cash palette from the design handoff. The visual style is clean, operational, and easy to scan across mobile, tablet, and desktop.

<div class="grid-3">

<div class="card">

### Primary Brand

<span class="pill pill-blue">\#1F6AE1</span>

Use for primary actions, selected states, active highlights, and key document accents.

</div>

<div class="card">

### Header Navy

<span class="pill pill-gray">\#0F2A44</span>

Use for headings, top bars, important text, cover background, and table headers.

</div>

<div class="card">

### Icon Blue

<span class="pill pill-blue">\#5B8DEF</span>

Use for secondary accents, info panels, highlights, and visual hierarchy.

</div>

</div>

<div class="table-wrap">

| Token        | Value     | Usage                                          | Implementation Note                                 |
|--------------|-----------|------------------------------------------------|-----------------------------------------------------|
| Main brand   | `#1F6AE1` | Primary buttons, active states, key highlights | Use consistently for the main call-to-action color. |
| Header color | `#0F2A44` | Headers, top bars, important text              | Use for high contrast and brand authority.          |
| Button text  | `#1D2939` | Primary readable body and strong text          | Use as the default dark text color.                 |
| Helper text  | `#667085` | Captions, hints, helper copy                   | Use for low-emphasis interface text.                |
| Active task  | `#12B76A` | Success, active task, completed states         | Use for positive workflow confirmation.             |
| Error task   | `#F04438` | Error, rejection, failed payment, risky action | Reserve for high-friction or destructive moments.   |

</div>

</div>

<div id="shared" class="section">

<div class="section-number">

03

</div>

<div class="section-eyebrow">

Shared Foundation

</div>

# Auth, Identity, and KYC Screens

These screens belong to the shared user system. They should not create separate Client and Tasker auth tables. They prepare the user for both marketplace roles.

<div class="table-wrap">

| Screen / Area           | Feature Meaning                                                     | Backend Requirement                                                   | Priority                                   |
|-------------------------|---------------------------------------------------------------------|-----------------------------------------------------------------------|--------------------------------------------|
| Welcome / onboarding    | Introduces the two intents: get help or earn.                       | Store onboarding intent without splitting the user model.             | <span class="pill pill-blue">MVP</span>    |
| Role choice             | User chooses "I need help" or "I want to earn".                     | Persist selected app mode and route the user to the correct flow.     | <span class="pill pill-blue">MVP</span>    |
| Create account          | Full name, email, password, terms agreement, optional social login. | Registration, password hashing, social auth adapters, terms audit.    | <span class="pill pill-blue">MVP</span>    |
| Login / forgot password | Email or phone login, recovery, reset flow.                         | Auth sessions, refresh tokens, OTP reset, resend limits.              | <span class="pill pill-blue">MVP</span>    |
| OTP verification        | Six-digit verification code.                                        | OTP generation, expiry, retry limits, anti-spam guard.                | <span class="pill pill-blue">MVP</span>    |
| Verify identity         | Upload selfie and ID document.                                      | KYC session, Smile ID adapter, secure media storage, status tracking. | <span class="pill pill-blue">MVP</span>    |
| Selfie capture          | Camera capture, retake, all-clear state.                            | Image upload, liveness metadata, provider submission queue.           | <span class="pill pill-blue">MVP</span>    |
| ID upload               | ID document scan, rescan, upload document.                          | Document metadata, encrypted storage, verification status.            | <span class="pill pill-blue">MVP</span>    |
| Complete profile        | Phone number, address, state, user photo.                           | User profile fields, address relation, state validation.              | <span class="pill pill-blue">MVP</span>    |
| Pricing rule            | Explains fair pricing and underpricing restriction.                 | Category minimum price rules and recommended price ranges.            | <span class="pill pill-green">Trust</span> |

</div>

<div class="callout warning">

<div class="callout-label">

Identity Rule

</div>

KYC unlocks Tasker Mode. It should not block a regular user from requesting help unless the business later decides that high-risk categories require additional verification.

</div>

</div>

<div id="owner" class="section">

<div class="section-number">

04

</div>

<div class="section-eyebrow">

Task Owner Experience

</div>

# Task Owner Screen-to-Feature Map

The Task Owner lane lets a user describe a task, set a fair budget, pay into escrow using cardless methods, track the tasker, confirm completion, and leave a review.

<div class="diagram">

<div class="flow">

<div class="node">

**Create Task**Category, details, checklist, photos, schedule.

</div>

<div class="node">

**Find Tasker**Redis proximity, filtered candidates, ETA batch.

</div>

<div class="node warning-node">

**Fund Escrow**Virtual account, OPay, USSD, wallet.

</div>

<div class="node">

**Track Work**Map, chat, timer, progress checklist.

</div>

<div class="node success-node">

**Complete**Confirm, release funds, rate tasker.

</div>

</div>

</div>

<div class="table-wrap">

| Screen / Area                 | Feature Meaning                                                               | Backend / Product Requirement                                              | Notes                                                    |
|-------------------------------|-------------------------------------------------------------------------------|----------------------------------------------------------------------------|----------------------------------------------------------|
| Home quick task               | Select task category like home, errands, office/shop, outdoor, event support. | `TaskCategory` and `TaskType` catalog.                                     | Admin must manage categories and pricing rules.          |
| Task details                  | User describes what needs to be done.                                         | Task draft creation with structured and free-text fields.                  | Support attachments and later edits before payment.      |
| Task checklist                | Specific sub-services such as sweeping, dish washing, laundry.                | Task requirement checklist tied to service category.                       | Useful for disputes and completion confirmation.         |
| Set pricing                   | User enters budget and sees platform recommended/minimum range.               | Pricing engine with minimum price, recommended price, urgency adjustments. | Do not allow underpricing below configured floor.        |
| Task schedule                 | Date, time, duration, urgency.                                                | Task window, expiry rules, urgent task flag.                               | Urgent jobs can affect broadcast priority.               |
| Location                      | Saved address or current location.                                            | Address book, coordinates, geocoding cache.                                | Cache paid geocoding results when terms allow.           |
| Available taskers             | Nearby taskers with ETA, distance, rating, service fit.                       | Valkey `GEOSEARCH` first, paid ETA only after filtering.                   | Batch ETA requests and enforce quotas.                   |
| Booking summary               | Selected task, cost breakdown, secure payment note.                           | Pending booking, escrow intent, service fee computation.                   | Show transparent pricing before payment.                 |
| Make payment                  | Bank transfer, virtual account, USSD, OPay, wallet.                           | Payment initialization, provider reference, webhook reconciliation.        | Card entry must not be the default path.                 |
| Payment success / receipt     | Payment received, receipt, QR/download.                                       | Ledger credit, escrow hold, receipt generation.                            | Do not trust the client UI without webhook confirmation. |
| Task in progress              | Timer, task progress, chat, emergency support.                                | Task state machine, WebSocket chat, support escalation.                    | Works with intermittent connectivity.                    |
| Task complete / rating        | Owner confirms completion and rates tasker.                                   | Escrow release, two-sided review, rating aggregation.                      | Include dispute window before auto-release if needed.    |
| Wallet and transactions       | Balance, funding, transaction history, pending/failed states.                 | Double-entry ledger and balance projection.                                | Never store balance as the only source of truth.         |
| Messages, notifications, help | Chat, task alerts, FAQs, support ticket, report issue.                        | Socket.io, FCM, notification inbox, support module.                        | FCM wakes devices for task and chat events.              |

</div>

<div class="callout critical">

<div class="callout-label">

Payment UX Correction

</div>

Any card-looking design should be interpreted as saved funding options, not a forced card form. The default production flow is bank transfer, virtual account, USSD, OPay, and wallet balance.

</div>

</div>

<div id="tasker" class="section">

<div class="section-number">

05

</div>

<div class="section-eyebrow">

Tasker Experience

</div>

# Tasker Screen-to-Feature Map

The Tasker lane activates after KYC and profile setup. It covers availability, task preferences, live job requests, task execution, earnings, withdrawals, and task owner reviews.

<div class="table-wrap">

| Screen / Area                 | Feature Meaning                                                        | Backend / Product Requirement                                       | Priority                                   |
|-------------------------------|------------------------------------------------------------------------|---------------------------------------------------------------------|--------------------------------------------|
| Complete Tasker profile       | Gender, DOB, phone, address, location, state, bank details.            | `TaskerProfile`, KYC gate, payout destination setup.                | <span class="pill pill-blue">MVP</span>    |
| Select task                   | Choose categories and sub-skills the tasker can perform.               | Tasker skills relation and category eligibility.                    | <span class="pill pill-blue">MVP</span>    |
| Availability                  | Days available, working hours, max distance, auto-accept.              | Availability schedule, service radius, task matching filters.       | <span class="pill pill-blue">MVP</span>    |
| Pricing info                  | Minimum acceptable price and pricing guidance.                         | Tasker pricing preference bounded by platform minimum.              | <span class="pill pill-green">Trust</span> |
| Enable location               | Allow app to find nearby jobs.                                         | Location permission, online status, Valkey geo index update.        | <span class="pill pill-blue">MVP</span>    |
| Task request                  | Incoming job with owner, distance, task details, price, accept/reject. | Real-time job offer, expiry, atomic assignment lock.                | <span class="pill pill-blue">MVP</span>    |
| Accepted task / start journey | Tasker starts movement to task owner.                                  | Status change to `TASKER_EN_ROUTE`, GPS stream starts.              | <span class="pill pill-blue">MVP</span>    |
| Arrived / start task          | Tasker marks arrival and begins work timer.                            | Status transition to `ARRIVED` then `IN_PROGRESS`.                  | <span class="pill pill-blue">MVP</span>    |
| Mark completed                | Tasker requests owner confirmation.                                    | Status changes to `AWAITING_OWNER_CONFIRMATION`.                    | <span class="pill pill-blue">MVP</span>    |
| Task completed                | Payment released after owner confirms.                                 | Wallet credit, ledger settlement, notification.                     | <span class="pill pill-blue">MVP</span>    |
| Wallet / earnings / withdraw  | Available balance, earned amount, withdrawal amount, fee, PIN.         | Ledger history, withdrawal request, payout adapter, withdrawal PIN. | <span class="pill pill-blue">MVP</span>    |
| Rate task owner / ratings     | Two-sided marketplace reputation.                                      | Review model for tasker-to-owner and owner-to-tasker reviews.       | <span class="pill pill-green">Trust</span> |

</div>

<div class="callout">

<div class="callout-label">

Race Condition Rule

</div>

When multiple taskers receive the same request, only one tasker can win. The backend must enforce this with a transaction or unique assignment constraint, not only app-side logic.

</div>

</div>

<div id="admin" class="section">

<div class="section-number">

06

</div>

<div class="section-eyebrow">

Platform Operations

</div>

# Admin Dashboard Feature Map

The admin dashboard is not just reporting. It is the operating console for KYC, task intervention, finance reconciliation, disputes, fraud/risk, pricing, roles, and auditability.

<div class="grid-3">

<div class="card">

### User and Tasker Operations

- User management, user details, suspend/ban.
- Tasker management, performance stats, KYC state.
- Ratings, reviews, completion rate, earnings overview.

</div>

<div class="card">

### Finance Operations

- Wallet activity, escrow payments, withdrawal requests.
- Refund management, payment issues, receipts, exports.
- Provider references and reconciliation workflows.

</div>

<div class="card">

### Risk and Governance

- KYC review, document review, face verification.
- Suspicious account flags, fraud/risk management.
- Admin roles, permissions, audit logs, 2FA.

</div>

</div>

<div class="table-wrap">

| Admin Module            | Feature Meaning                                                       | Backend Requirement                                            | Access Control      |
|-------------------------|-----------------------------------------------------------------------|----------------------------------------------------------------|---------------------|
| Dashboard overview      | Total users, active tasks, revenue, pending approvals, disputes.      | Analytics aggregation and cached summary metrics.              | Admin, Operations   |
| User management         | List, search, filter, view, suspend, ban users.                       | Admin user query APIs and account status workflow.             | Admin, Support Lead |
| KYC verification        | Review selfie, ID, verification status, approve/reject.               | KYC moderation workflow, provider data, audit trail.           | KYC Reviewer, Admin |
| Task management         | All tasks by status, category, amount, owner, tasker.                 | Task search, task timeline, intervention endpoints.            | Operations          |
| Force cancel / reassign | Admin cancels or reassigns problematic tasks.                         | Reason capture, refund/penalty decision, notification.         | Operations Lead     |
| Wallet and escrow       | Held funds, wallet activity, task settlement state.                   | Ledger query, escrow status, settlement audit trail.           | Finance             |
| Withdrawals             | Approve/reject withdrawal requests.                                   | Payout approval workflow, payout adapter, withdrawal status.   | Finance Lead        |
| Disputes and support    | Complaint details, evidence, admin decision, resolution tracking.     | Support ticket module, dispute states, evidence attachments.   | Support, Operations |
| Category and pricing    | Create/edit task categories, services, recommended and minimum price. | Marketplace catalog and pricing rules engine.                  | Admin               |
| Fraud and risk          | Risk alerts, suspicious behavior, top risk factors.                   | Risk score, rule triggers, admin flags, investigation history. | Risk, Admin         |
| Roles and permissions   | Add admin, create role, permission matrix, 2FA.                       | RBAC, admin auth, admin audit logs, session security.          | Super Admin         |
| Analytics and reports   | Revenue, task trend, user growth, top services, reports.              | Reporting queries, export, scheduled summary support.          | Admin, Management   |

</div>

</div>

<div id="backend" class="section">

<div class="section-number">

07

</div>

<div class="section-eyebrow">

Engineering Modules

</div>

# Backend Modules Implied by the Screens

The design maps naturally into NestJS modules. The boundaries below are domain boundaries, not just folders. Each module should expose ports for provider-specific adapters.

<div class="code-block">

<div class="code-head">

Suggested NestJS domain modules

Copy

</div>

```
Auth
Users
KYC
TaskerProfile
Categories
PricingRules
Tasks
Matching
GeoTracking
Wallet
Payments
Escrow
Withdrawals
Reviews
Chat
Notifications
Support
Disputes
Admin
RBAC
AuditLogs
Analytics
```

</div>

<div class="grid-2">

<div class="card">

### High-Risk Modules

- Wallet must use a double-entry ledger.
- Payments must be webhook-first and idempotent.
- Task assignment must be atomic.
- KYC data must be encrypted and access-controlled.

</div>

<div class="card">

### Provider Adapter Boundaries

- Smile ID behind `KycProviderPort`.
- Google Maps behind `RoutingProviderPort`.
- Paystack and OPay behind `PaymentProviderPort`.
- FCM behind `PushNotificationPort`.

</div>

</div>

<div class="callout critical">

<div class="callout-label">

Cost Discipline

</div>

Never auto-refresh paid provider calls. The backend should filter with Valkey, batch paid requests, cache safe results, and enforce usage quotas around Google Maps and similar USD-billed services.

</div>

</div>

<div id="implementation" class="section">

<div class="section-number">

08

</div>

<div class="section-eyebrow">

Build Translation

</div>

# Implementation Map

This section translates the screen map into frontend, admin, and API implementation lanes so the team can move from design review to engineering tickets.

<div class="table-wrap">

| Layer          | Suggested Modules                                                                         | Key Risks                                                     | Build Guidance                                                                       |
|----------------|-------------------------------------------------------------------------------------------|---------------------------------------------------------------|--------------------------------------------------------------------------------------|
| Flutter mobile | auth, profile, kyc, task_owner, tasker, wallet, chat, notifications, support, settings    | Background killing, flaky network, payment app switching.     | Use offline-aware states, FCM wakeups, resilient payment return handling.            |
| Next.js admin  | dashboard, users, taskers, kyc, tasks, finance, support, risk, catalog, admins, analytics | Unauthorized admin actions and missing audit trails.          | Use RBAC, action confirmation, reason capture, and audit logging.                    |
| NestJS API     | domain modules listed above with hexagonal ports and adapters                             | Provider lock-in and messy money flow.                        | Keep adapters swappable and ledger operations transactional.                         |
| Valkey         | geo indexes, tasker presence, job offer expiry, rate limits, ephemeral cache              | Using cache as source of truth.                               | Persist durable state in PostgreSQL, use Valkey for fast lookup and transient state. |
| PostgreSQL     | users, taskers, tasks, payments, ledger, reviews, support, audit, admin                   | Weak constraints around assignment, settlement, and identity. | Use constraints, transactions, and append-only ledger entries.                       |

</div>

## Task State Machine

<div class="code-block">

<div class="code-head">

Recommended task lifecycle

Copy

</div>

```
CREATED
FUNDED
BROADCASTING
ACCEPTED
TASKER_EN_ROUTE
ARRIVED
IN_PROGRESS
AWAITING_OWNER_CONFIRMATION
COMPLETED
SETTLED

Side states:
CANCELLED
EXPIRED
NO_TASKER_FOUND
DISPUTED
REFUNDED
```

</div>

<div class="callout success">

<div class="callout-label">

MVP Scope Hint

</div>

The MVP should prioritize auth/KYC, task posting, tasker matching, escrow payment, task execution, chat, notifications, wallet ledger, withdrawals, and minimal admin operations. Advanced analytics, rewards, and deep fraud tooling can follow after the core marketplace is stable.

</div>

</div>

<div id="handover" class="section">

<div class="section-number">

09

</div>

<div class="section-eyebrow">

Final Handover

</div>

# Build Readiness Checklist

Use this before converting the designs into engineering tickets, database schemas, and API contracts.

<div class="grid-2">

<div class="card">

### Product Checklist

- Confirm Task Owner and Tasker screen order.
- Confirm task categories and sub-services for launch.
- Confirm minimum and recommended pricing rules.
- Confirm cardless payment options for MVP.
- Confirm dispute and completion timeout rules.

</div>

<div class="card">

### Engineering Checklist

- Define database entities and state machines.
- Define API endpoints and WebSocket events.
- Define provider ports for KYC, maps, payments, email, push.
- Define wallet ledger and escrow rules.
- Define admin RBAC and audit log coverage.

</div>

</div>

<div class="callout">

<div class="callout-label">

Definition of Done

</div>

This document is ready when every visible screen has a mapped feature, every mapped feature has an owner module, and every high-risk operation has a backend rule that protects money, trust, privacy, and USD provider cost.

</div>

</div>

</div>

<div>

#### Work2Cash

Hyper-local service marketplace for Nigeria, designed around trust, cardless payments, and frugal engineering.

</div>

<div>

#### Document Scope

- Mobile screen map
- Admin dashboard map
- Backend module mapping
- Implementation readiness checklist

</div>

<div>

#### Strategic Constraints

- Minimize USD-billed provider usage
- Prioritize bank transfer, wallet, and USSD flows
- Build for lower-end Android and unreliable connectivity

</div>

<div class="bottom">

Prepared for Work2Cash product and engineering handover Standalone HTML document, no external dependencies

</div>


---

# Source Document: Mobile Flow Catalogue v1


# Mobile Flow Catalogue v1

> AI-agent Markdown equivalent of `mobile-flow-catalogue-v1.html`.
>
> Human-readable HTML source: `../mobile-flow-catalogue-v1.html`.
> Use this Markdown version for lower-token AI context. If a task needs visual layout or exact document presentation, use the HTML page.

<div class="section cover">

<div class="brand-row">

<div class="logo">

W2C

</div>

<div>

**Work2Cash**Mobile Flow Documentation

</div>

</div>

<div class="cover-main">

<div class="label">

Mobile Flow Catalogue

</div>

# Mobile Flows & Subflows

<div class="cover-subtitle">

A non-technical dependency map showing how Work2Cash mobile journeys start, recover, finish, and feed the next journey.

</div>

<div class="meta-grid">

<div class="meta-card">

Project**Work2Cash**

</div>

<div class="meta-card">

Document Version**1.0**

</div>

<div class="meta-card">

Audience**Product, Design, Mobile, Backend, Admin, QA**

</div>

<div class="meta-card">

Primary Source**Main Enterprise Architecture v1**

</div>

</div>

<div class="badges">

<span class="badge">Closed Flows</span><span class="badge">Subflows</span><span class="badge">Dependencies</span><span class="badge">Recovery Paths</span><span class="badge">Mobile App</span>

</div>

</div>

<div class="cover-foot">

<div>

Prepared for Work2Cash team-facing documentation.

</div>

<div>

Place as `documents/mobile-flow-catalogue-v1.html` in the docs repo.

</div>

</div>

</div>

<div class="sticky">

<div class="sticky-inner">

**Work2Cash Mobile Flow Catalogue v1.0**

[01](#section-01)[02](#section-02)[03](#section-03)[04](#section-04)[05](#section-05)[06](#section-06)

</div>

</div>

<div role="main">

<div class="section toc">

<div class="eyebrow">

Contents

</div>

## Mobile Flow Catalogue Index

Use this document to understand how every Work2Cash mobile flow starts, depends on subflows, recovers from breaks, and moves to the next flow.

<div class="toc-grid">

[01. How To Read This Document](#section-01)[02. Mobile Flow Dependency Map](#section-02)[03. Reusable Subflows](#section-03)[04. Main Closed Flows](#section-04)[05. Break Recovery Matrix](#section-05)[06. Implementation Notes](#section-06)

</div>

</div>

<div id="section-01" class="section section">

<div class="section-num">

01

</div>

<div class="eyebrow">

Guide

</div>

## How To Read This Document

This document explains Work2Cash mobile flows in plain language. It shows what starts each flow, what the user must do, what other flows it depends on, how failures are repaired, and what comes next.

<div class="callout blue">

**Source-of-Truth Relationship**

This Mobile Flow Catalogue supports the Main Enterprise Architecture Document. The main architecture remains the top-level source of truth; this document expands the mobile flow details for product, design, backend, mobile, QA, and admin teams.

</div>

<div class="table-wrap">

| Term           | Meaning                                                                                                                                |
|----------------|----------------------------------------------------------------------------------------------------------------------------------------|
| Closed Flow    | A complete journey with a clear start, required steps, decision points, recovery paths, and final state.                               |
| Subflow        | A reusable mini-flow that can stand alone and can also be called by larger flows.                                                      |
| Dependency     | Something the flow needs before it can work correctly, such as login, KYC, profile completion, location, payment, or media upload.     |
| Recovery Flow  | A subflow or main flow that repairs a broken or abandoned flow. Example: Login uses Complete Profile to repair abandoned registration. |
| Terminal State | The final result of a flow, such as Home, Payment Failed, KYC Pending, Task Accepted, Completed, or Support Ticket Opened.             |

</div>

<div class="diagram">

<div class="diagram-head">

#### Simple Example

Flow Diagram

</div>

    Registration
      -> OTP Verification
      -> Create Account
      -> Is Profile Complete?
           Yes -> Home
           No  -> Complete Profile
                  -> Home

    If user exits after account creation:
    Login / Session Recovery
      -> detects incomplete profile
      -> calls Complete Profile
      -> Home

A good flow does not assume everything goes perfectly. It knows how to recover when a user stops halfway.

</div>

</div>

<div id="section-02" class="section section">

<div class="section-num">

02

</div>

<div class="eyebrow">

Map

</div>

## Mobile Flow Dependency Map

This section shows the high-level order of the mobile experience and which flows feed other flows.

<div class="diagram">

<div class="diagram-head">

#### End-to-End Mobile Flow Map

Flow Diagram

</div>

    App Launch
      -> Registration OR Login / Social Login / Session Recovery
          -> Complete Profile if needed
          -> Password Recovery if login fails
          -> Task Owner Home
              -> Create and Fund Task
                  -> Public Discovery
                      -> Tasker Browse / Interest
                      -> Task Owner Accepts Tasker
                  -> Direct Offer to Favorite Tasker
                  -> Active Task Execution
                      -> Completion and Settlement
                      -> Ratings and Reviews
                      -> Favorites
                      -> Rebook / Repeat Task
                      -> Withdrawal for Tasker
              -> Support Live Chat
              -> Emergency Support
              -> Referral
              -> Profile / Security / Notifications

    Tasker path:
    App Launch / Login
      -> Tasker Activation
          -> Complete Profile if needed
          -> Tasker KYC
          -> Availability and Work Preferences
          -> Tasker Browse and Accept Task
          -> Active Task Execution
          -> Completion and Settlement
          -> Payout Account Setup
          -> Withdrawal

The same user can move between Task Owner and Tasker paths, but Tasker earning actions require KYC and active TaskerProfile.

</div>

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr class="header">
<th>Flow ID</th>
<th>Flow</th>
<th>Type</th>
<th>Calls Subflows</th>
<th>Can Lead To</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><a href="#mf-01">MF-01</a></td>
<td>First App Launch and Entry Decision</td>
<td>Entry Flow</td>
<td>SF-10 Status Recovery / Resume</td>
<td>MF-02 Registration<br />
MF-03 Login / Session Recovery<br />
MF-04 Task Owner Home<br />
MF-05 Tasker Activation</td>
</tr>
<tr class="even">
<td><a href="#mf-02">MF-02</a></td>
<td>Registration</td>
<td>Identity Flow</td>
<td>SF-01 OTP Verification<br />
SF-02 Complete Profile<br />
SF-10 Status Recovery / Resume</td>
<td>MF-04 Task Owner Home<br />
MF-05 Tasker Activation</td>
</tr>
<tr class="odd">
<td><a href="#mf-03">MF-03</a></td>
<td>Login / Session Recovery</td>
<td>Identity Recovery Flow</td>
<td>SF-01 OTP Verification<br />
SF-02 Complete Profile<br />
SF-03 Tasker KYC<br />
SF-10 Status Recovery / Resume<br />
SF-11 Password Recovery<br />
SF-13 Google / Apple Social Authentication</td>
<td>MF-04 Task Owner Home<br />
MF-05 Tasker Activation<br />
MF-06 Task Owner Create Task<br />
MF-09 Tasker Browse and Accept Task</td>
</tr>
<tr class="even">
<td><a href="#mf-04">MF-04</a></td>
<td>Task Owner Home</td>
<td>Hub Flow</td>
<td>SF-10 Status Recovery / Resume</td>
<td>MF-06 Task Owner Create and Fund Task<br />
MF-15 Favorites<br />
MF-16 Support Live Chat<br />
MF-05 Tasker Activation</td>
</tr>
<tr class="odd">
<td><a href="#mf-05">MF-05</a></td>
<td>Tasker Activation</td>
<td>Capability Unlock Flow</td>
<td>SF-02 Complete Profile<br />
SF-03 Tasker KYC<br />
SF-04 Location, Address and Pin Confirmation<br />
SF-09 Permission Recovery</td>
<td>MF-09 Tasker Browse and Accept Task<br />
MF-13 Tasker Withdrawal</td>
</tr>
<tr class="even">
<td><a href="#mf-06">MF-06</a></td>
<td>Task Owner Create and Fund Task</td>
<td>Marketplace Creation Flow</td>
<td>SF-04 Location, Address and Pin Confirmation<br />
SF-05 Media Upload<br />
SF-06 Payment and Escrow Funding<br />
SF-10 Status Recovery / Resume</td>
<td>MF-07 Public Discovery and Tasker Interest<br />
MF-08 Direct Offer to Favorite Tasker</td>
</tr>
<tr class="odd">
<td><a href="#mf-07">MF-07</a></td>
<td>Public Discovery and Tasker Interest</td>
<td>Matching Flow</td>
<td>SF-04 Location, Address and Pin Confirmation<br />
SF-10 Status Recovery / Resume</td>
<td>MF-10 Active Task Execution<br />
MF-11 Task Owner Rejection<br />
MF-12 Cancellation / No-Show</td>
</tr>
<tr class="even">
<td><a href="#mf-08">MF-08</a></td>
<td>Direct Offer to Favorite Tasker</td>
<td>Targeted Matching Flow</td>
<td>SF-10 Status Recovery / Resume</td>
<td>MF-10 Active Task Execution<br />
MF-07 Public Discovery and Tasker Interest<br />
MF-12 Cancellation / No-Show</td>
</tr>
<tr class="odd">
<td><a href="#mf-09">MF-09</a></td>
<td>Tasker Browse and Accept Task</td>
<td>Tasker Marketplace Flow</td>
<td>SF-03 Tasker KYC<br />
SF-04 Location, Address and Pin Confirmation<br />
SF-09 Permission Recovery</td>
<td>MF-10 Active Task Execution<br />
MF-09 Tasker Browse and Accept Task</td>
</tr>
<tr class="even">
<td><a href="#mf-10">MF-10</a></td>
<td>Active Task Execution</td>
<td>Execution Flow</td>
<td>SF-05 Media Upload<br />
SF-07 Communication<br />
SF-08 Report / Dispute<br />
SF-10 Status Recovery / Resume</td>
<td>MF-14 Completion and Settlement<br />
MF-12 Cancellation / No-Show<br />
MF-16 Support Live Chat</td>
</tr>
<tr class="odd">
<td><a href="#mf-11">MF-11</a></td>
<td>Task Owner Rejection</td>
<td>Matching Recovery Flow</td>
<td>SF-08 Report / Dispute where rejection is contested</td>
<td>MF-07 Public Discovery and Tasker Interest<br />
MF-08 Direct Offer to Favorite Tasker<br />
MF-12 Cancellation / No-Show</td>
</tr>
<tr class="even">
<td><a href="#mf-12">MF-12</a></td>
<td>Cancellation / No-Show</td>
<td>Exception Flow</td>
<td>SF-08 Report / Dispute<br />
SF-10 Status Recovery / Resume</td>
<td>MF-07 Public Discovery and Tasker Interest<br />
MF-14 Completion and Settlement<br />
MF-16 Support Live Chat</td>
</tr>
<tr class="odd">
<td><a href="#mf-13">MF-13</a></td>
<td>Tasker Withdrawal</td>
<td>Finance Flow</td>
<td>SF-10 Status Recovery / Resume<br />
SF-12 Payout Account Setup</td>
<td>MF-04 Task Owner Home<br />
MF-09 Tasker Browse and Accept Task</td>
</tr>
<tr class="even">
<td><a href="#mf-14">MF-14</a></td>
<td>Completion and Settlement</td>
<td>Settlement Flow</td>
<td>SF-05 Media Upload<br />
SF-08 Report / Dispute</td>
<td>MF-15 Favorites<br />
MF-13 Tasker Withdrawal<br />
MF-16 Support Live Chat</td>
</tr>
<tr class="odd">
<td><a href="#mf-15">MF-15</a></td>
<td>Favorites</td>
<td>Retention Flow</td>
<td>None</td>
<td>MF-08 Direct Offer to Favorite Tasker<br />
MF-06 Task Owner Create and Fund Task</td>
</tr>
<tr class="even">
<td><a href="#mf-16">MF-16</a></td>
<td>Support Live Chat</td>
<td>Support Flow</td>
<td>SF-05 Media Upload<br />
SF-08 Report / Dispute<br />
SF-10 Status Recovery / Resume</td>
<td>MF-04 Task Owner Home<br />
MF-09 Tasker Browse and Accept Task<br />
MF-12 Cancellation / No-Show</td>
</tr>
<tr class="odd">
<td><a href="#mf-17">MF-17</a></td>
<td>Referral</td>
<td>Growth Flow</td>
<td>MF-02 Registration<br />
MF-14 Completion and Settlement</td>
<td>MF-04 Task Owner Home<br />
MF-13 Tasker Withdrawal</td>
</tr>
<tr class="even">
<td><a href="#mf-18">MF-18</a></td>
<td>Profile and Settings Management</td>
<td>Account Flow</td>
<td>SF-01 OTP Verification<br />
SF-02 Complete Profile<br />
SF-10 Status Recovery / Resume</td>
<td>MF-04 Task Owner Home<br />
MF-19 Security and Device Management<br />
MF-20 Notification Center and Preferences<br />
MF-16 Support Live Chat</td>
</tr>
<tr class="odd">
<td><a href="#mf-19">MF-19</a></td>
<td>Security and Device Management</td>
<td>Security Flow</td>
<td>SF-01 OTP Verification<br />
SF-10 Status Recovery / Resume</td>
<td>MF-18 Profile and Settings Management<br />
MF-13 Tasker Withdrawal<br />
SF-12 Payout Account Setup</td>
</tr>
<tr class="even">
<td><a href="#mf-20">MF-20</a></td>
<td>Notification Center and Preferences</td>
<td>Communication Flow</td>
<td>SF-10 Status Recovery / Resume</td>
<td>MF-04 Task Owner Home<br />
MF-10 Active Task Execution<br />
MF-16 Support Live Chat<br />
MF-18 Profile and Settings Management</td>
</tr>
<tr class="odd">
<td><a href="#mf-21">MF-21</a></td>
<td>Tasker Availability and Work Preferences</td>
<td>Tasker Settings Flow</td>
<td>SF-03 Tasker KYC<br />
SF-04 Location, Address and Pin Confirmation<br />
SF-09 Permission Recovery</td>
<td>MF-09 Tasker Browse and Accept Task<br />
MF-10 Active Task Execution</td>
</tr>
<tr class="even">
<td><a href="#mf-22">MF-22</a></td>
<td>Ratings and Reviews</td>
<td>Trust Flow</td>
<td>SF-08 Report / Dispute</td>
<td>MF-15 Favorites<br />
MF-24 Rebook / Repeat Task<br />
MF-16 Support Live Chat</td>
</tr>
<tr class="odd">
<td><a href="#mf-23">MF-23</a></td>
<td>Emergency Support</td>
<td>Priority Support Flow</td>
<td>SF-05 Media Upload<br />
SF-08 Report / Dispute<br />
SF-10 Status Recovery / Resume</td>
<td>MF-16 Support Live Chat<br />
MF-12 Cancellation / No-Show<br />
MF-10 Active Task Execution</td>
</tr>
<tr class="even">
<td><a href="#mf-24">MF-24</a></td>
<td>Rebook / Repeat Task</td>
<td>Retention Flow</td>
<td>SF-04 Location, Address and Pin Confirmation<br />
SF-05 Media Upload<br />
SF-06 Payment and Escrow Funding</td>
<td>MF-06 Task Owner Create and Fund Task<br />
MF-08 Direct Offer to Favorite Tasker<br />
MF-07 Public Discovery and Tasker Interest</td>
</tr>
</tbody>
</table>

</div>

</div>

<div id="section-03" class="section section">

<div class="section-num">

03

</div>

<div class="eyebrow">

Reusable

</div>

## Reusable Subflows

Subflows are independent parts of the app that can be called by many larger flows. They are important because they repair broken journeys and prevent dead ends.

<div class="table-wrap">

| Subflow ID      | Subflow                                | Purpose                                                                                                                          | What It Repairs                                                                                                                                           |
|-----------------|----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| [SF-01](#sf-01) | OTP Verification                       | Confirms that the user controls the email or phone number used for registration, login, or sensitive account action.             | Fixes breaks where a user cannot finish registration/login because identity/contact ownership has not been confirmed.                                     |
| [SF-02](#sf-02) | Complete Profile                       | Collects the minimum profile data required to personalize the app and safely proceed into Task Owner or Tasker workflows.        | Fixes partial registration, abandoned onboarding, and accounts that exist but cannot safely proceed to Home or Tasker activation.                         |
| [SF-03](#sf-03) | Tasker KYC                             | Verifies identity through Smile ID before a user can accept tasks as a Tasker.                                                   | Fixes the gap where a registered user wants to earn but is not yet trusted or approved to enter the marketplace as a Tasker.                              |
| [SF-04](#sf-04) | Location, Address and Pin Confirmation | Converts a live or manually entered task site into a confirmed Nigerian task location.                                           | Fixes broken task creation when GPS is denied, weak, inaccurate, or when manual address must be converted into coordinates.                               |
| [SF-05](#sf-05) | Media Upload                           | Handles proof photos/videos for task creation, completion, reports, and support.                                                 | Fixes evidence gaps where a task cannot be posted, completed, or reviewed because proof media is missing or upload failed.                                |
| [SF-06](#sf-06) | Payment and Escrow Funding             | Funds a task before public discovery or direct offer proceeds.                                                                   | Fixes payment interruption, failed redirect, webhook delay, and cases where frontend thinks payment succeeded but backend has not confirmed it.           |
| [SF-07](#sf-07) | Communication                          | Allows task-bound communication without exposing private phone numbers.                                                          | Fixes coordination problems after acceptance while reducing off-platform leakage and protecting real phone numbers.                                       |
| [SF-08](#sf-08) | Report / Dispute                       | Turns task problems into structured evidence-backed reports for admin review.                                                    | Fixes disputes introduced by cancellation, no-show, refusal to approve, unsafe behavior, or contested penalty cases.                                      |
| [SF-09](#sf-09) | Permission Recovery                    | Guides users when required permissions are denied or unavailable.                                                                | Fixes stalled flows caused by Android permission denial or unavailable device capability.                                                                 |
| [SF-10](#sf-10) | Status Recovery / Resume               | Lets users safely continue after closing the app, losing network, or returning from a provider page.                             | Fixes broken main flows when a user exits midway, network fails, payment redirect returns late, or session expires.                                       |
| [SF-11](#sf-11) | Password Recovery                      | Lets a registered user regain access when they cannot remember their password.                                                   | Fixes broken login where a legitimate user cannot access the app and would otherwise need support intervention.                                           |
| [SF-12](#sf-12) | Payout Account Setup                   | Collects and verifies the Tasker's payout account before withdrawal requests can be made.                                        | Fixes withdrawals that cannot proceed because the Tasker has no verified payout destination.                                                              |
| [SF-13](#sf-13) | Google / Apple Social Authentication   | Lets users register or log in using Google or Apple while preserving Work2Cash profile, phone/contact, KYC, and recovery checks. | Fixes alternate login/account creation paths without bypassing Work2Cash safety, profile, KYC, or recovery requirements. Facebook is not included in MVP. |

</div>

<div class="flow-head">

<div>

SF-01

### OTP Verification

</div>

**Reusable Subflow**

</div>

Confirms that the user controls the email or phone number used for registration, login, or sensitive account action.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Registration, login, session recovery, phone/email update, or sensitive action requires OTP.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>None</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>None</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Completed<br />
Failed/retry<br />
Abandoned<br />
Pending where provider review is involved</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>Returns to the calling parent flow</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### SF-01 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

OTP Channel

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Enter OTP

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Verify OTP

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Resend / Cooldown

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Verified

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### SF-01 Flow Path

Flow Diagram

</div>

    ENTRY: Registration, login, session recovery, phone/email update, or sensitive action requires OTP.

    START -> Send OTP by email first.
    02 -> If email is unavailable or user requests fallback, send Termii SMS.
    03 -> User enters OTP.
    04 -> Backend verifies OTP and rate limit.
    05 -> User proceeds or sees retry/cooldown.

    TERMINAL STATES:
      - Completed
      - Failed/retry
      - Abandoned
      - Pending where provider review is involved

    WHAT COMES AFTER:
      -> Returns to the calling parent flow

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Send OTP by email first.
- If email is unavailable or user requests fallback, send Termii SMS.
- User enters OTP.
- Backend verifies OTP and rate limit.
- User proceeds or sees retry/cooldown.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                                           | Recovery / Subflow That Fixes It                | User Outcome                                                       |
|----------------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------------|
| This subflow fails or is abandoned                       | SF-10 Status Recovery / Resume where applicable | The calling flow returns the user to the last valid checkpoint.    |
| User lacks required permission/contact/provider response | SF-09 Permission Recovery or provider retry     | The app explains the blocker and offers the safest available path. |

</div>

<div class="flow-head">

<div>

SF-02

### Complete Profile

</div>

**Reusable Subflow**

</div>

Collects the minimum profile data required to personalize the app and safely proceed into Task Owner or Tasker workflows.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Registration completes but profile is incomplete, or login finds missing required profile fields.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>None</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>None</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Completed<br />
Failed/retry<br />
Abandoned<br />
Pending where provider review is involved</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>Returns to the calling parent flow</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### SF-02 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Missing Profile

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Profile Form

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Photo Optional

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Review Profile

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Profile Complete

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### SF-02 Flow Path

Flow Diagram

</div>

    ENTRY: Registration completes but profile is incomplete, or login finds missing required profile fields.

    START -> Show missing profile fields.
    02 -> Collect name and required contact/profile details.
    03 -> Optional profile photo where applicable.
    04 -> Validate fields.
    05 -> Mark profile complete.

    TERMINAL STATES:
      - Completed
      - Failed/retry
      - Abandoned
      - Pending where provider review is involved

    WHAT COMES AFTER:
      -> Returns to the calling parent flow

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Show missing profile fields.
- Collect name and required contact/profile details.
- Optional profile photo where applicable.
- Validate fields.
- Mark profile complete.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                                           | Recovery / Subflow That Fixes It                | User Outcome                                                       |
|----------------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------------|
| This subflow fails or is abandoned                       | SF-10 Status Recovery / Resume where applicable | The calling flow returns the user to the last valid checkpoint.    |
| User lacks required permission/contact/provider response | SF-09 Permission Recovery or provider retry     | The app explains the blocker and offers the safest available path. |

</div>

<div class="flow-head">

<div>

SF-03

### Tasker KYC

</div>

**Reusable Subflow**

</div>

Verifies identity through Smile ID before a user can accept tasks as a Tasker.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>User chooses Tasker mode or tries to accept tasks without approved KYC.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>None</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>None</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Completed<br />
Failed/retry<br />
Abandoned<br />
Pending where provider review is involved</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>Returns to the calling parent flow</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### SF-03 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

KYC Intro

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

NIN/BVN

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Face Capture

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Submit KYC

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

KYC Status

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### SF-03 Flow Path

Flow Diagram

</div>

    ENTRY: User chooses Tasker mode or tries to accept tasks without approved KYC.

    START -> Explain KYC requirement.
    02 -> Collect NIN/BVN reference.
    03 -> Capture face/biometric reference.
    04 -> Submit to Smile ID.
    05 -> Show approved, pending, rejected, expired, or manual review state.

    TERMINAL STATES:
      - Completed
      - Failed/retry
      - Abandoned
      - Pending where provider review is involved

    WHAT COMES AFTER:
      -> Returns to the calling parent flow

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Explain KYC requirement.
- Collect NIN/BVN reference.
- Capture face/biometric reference.
- Submit to Smile ID.
- Show approved, pending, rejected, expired, or manual review state.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                                           | Recovery / Subflow That Fixes It                | User Outcome                                                       |
|----------------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------------|
| This subflow fails or is abandoned                       | SF-10 Status Recovery / Resume where applicable | The calling flow returns the user to the last valid checkpoint.    |
| User lacks required permission/contact/provider response | SF-09 Permission Recovery or provider retry     | The app explains the blocker and offers the safest available path. |

</div>

<div class="flow-head">

<div>

SF-04

### Location, Address and Pin Confirmation

</div>

**Reusable Subflow**

</div>

Converts a live or manually entered task site into a confirmed Nigerian task location.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Task Owner creates task, Tasker becomes available, or task/action needs location validation.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>None</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>None</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Completed<br />
Failed/retry<br />
Abandoned<br />
Pending where provider review is involved</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>Returns to the calling parent flow</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### SF-04 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Location Permission

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Live / Manual Address

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Map Pin

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Confirm Pin

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Valid Location

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### SF-04 Flow Path

Flow Diagram

</div>

    ENTRY: Task Owner creates task, Tasker becomes available, or task/action needs location validation.

    START -> Ask for location permission where needed.
    02 -> Use live GPS or manual address entry.
    03 -> Geocode manual address.
    04 -> Show map pin.
    05 -> User confirms pin.
    06 -> Validate task site or Tasker location is in Nigeria.

    TERMINAL STATES:
      - Completed
      - Failed/retry
      - Abandoned
      - Pending where provider review is involved

    WHAT COMES AFTER:
      -> Returns to the calling parent flow

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Ask for location permission where needed.
- Use live GPS or manual address entry.
- Geocode manual address.
- Show map pin.
- User confirms pin.
- Validate task site or Tasker location is in Nigeria.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                                           | Recovery / Subflow That Fixes It                | User Outcome                                                       |
|----------------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------------|
| This subflow fails or is abandoned                       | SF-10 Status Recovery / Resume where applicable | The calling flow returns the user to the last valid checkpoint.    |
| User lacks required permission/contact/provider response | SF-09 Permission Recovery or provider retry     | The app explains the blocker and offers the safest available path. |

</div>

<div class="flow-head">

<div>

SF-05

### Media Upload

</div>

**Reusable Subflow**

</div>

Handles proof photos/videos for task creation, completion, reports, and support.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Task proof, completion proof, support evidence, or report evidence is required.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>None</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>None</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Completed<br />
Failed/retry<br />
Abandoned<br />
Pending where provider review is involved</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>Returns to the calling parent flow</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### SF-05 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Select Media

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Preview File

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Upload Progress

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Upload Result

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Attach Proof

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### SF-05 Flow Path

Flow Diagram

</div>

    ENTRY: Task proof, completion proof, support evidence, or report evidence is required.

    START -> Choose capture or file picker.
    02 -> Validate file type: photo or video.
    03 -> Validate max file size: 50MB per file.
    04 -> Upload with progress.
    05 -> Attach uploaded media to task/report/message.
    06 -> Allow retry, remove, or replace.

    TERMINAL STATES:
      - Completed
      - Failed/retry
      - Abandoned
      - Pending where provider review is involved

    WHAT COMES AFTER:
      -> Returns to the calling parent flow

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Choose capture or file picker.
- Validate file type: photo or video.
- Validate max file size: 50MB per file.
- Upload with progress.
- Attach uploaded media to task/report/message.
- Allow retry, remove, or replace.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                                           | Recovery / Subflow That Fixes It                | User Outcome                                                       |
|----------------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------------|
| This subflow fails or is abandoned                       | SF-10 Status Recovery / Resume where applicable | The calling flow returns the user to the last valid checkpoint.    |
| User lacks required permission/contact/provider response | SF-09 Permission Recovery or provider retry     | The app explains the blocker and offers the safest available path. |

</div>

<div class="flow-head">

<div>

SF-06

### Payment and Escrow Funding

</div>

**Reusable Subflow**

</div>

Funds a task before public discovery or direct offer proceeds.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Task Owner reviews task cost and chooses to fund the task.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>None</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>None</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Completed<br />
Failed/retry<br />
Abandoned<br />
Pending where provider review is involved</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>Returns to the calling parent flow</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### SF-06 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Price Review

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Provider Choice

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Payment Page

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Payment Status

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Escrow Funded

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### SF-06 Flow Path

Flow Diagram

</div>

    ENTRY: Task Owner reviews task cost and chooses to fund the task.

    START -> Show task amount, platform/service fee, payment fee, and total.
    02 -> Choose Paystack or Moniepoint.
    03 -> Start payment.
    04 -> Return to app.
    05 -> Backend verifies payment.
    06 -> Create escrow or show pending/failed state.

    TERMINAL STATES:
      - Completed
      - Failed/retry
      - Abandoned
      - Pending where provider review is involved

    WHAT COMES AFTER:
      -> Returns to the calling parent flow

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Show task amount, platform/service fee, payment fee, and total.
- Choose Paystack or Moniepoint.
- Start payment.
- Return to app.
- Backend verifies payment.
- Create escrow or show pending/failed state.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                                           | Recovery / Subflow That Fixes It                | User Outcome                                                       |
|----------------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------------|
| This subflow fails or is abandoned                       | SF-10 Status Recovery / Resume where applicable | The calling flow returns the user to the last valid checkpoint.    |
| User lacks required permission/contact/provider response | SF-09 Permission Recovery or provider retry     | The app explains the blocker and offers the safest available path. |

</div>

<div class="flow-head">

<div>

SF-07

### Communication

</div>

**Reusable Subflow**

</div>

Allows task-bound communication without exposing private phone numbers.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Task is accepted and enters a valid communication state.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>None</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>None</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Completed<br />
Failed/retry<br />
Abandoned<br />
Pending where provider review is involved</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>Returns to the calling parent flow</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### SF-07 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Task Communication

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Chat

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Voice Note

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Call via Work2Cash

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Call Session

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### SF-07 Flow Path

Flow Diagram

</div>

    ENTRY: Task is accepted and enters a valid communication state.

    START -> Check task membership and state.
    02 -> Enable chat and voice messages.
    03 -> For calls, create/retrieve masked call session.
    04 -> Open phone dialer with Work2Cash proxy number.
    05 -> Persist/audit communication metadata where needed.

    TERMINAL STATES:
      - Completed
      - Failed/retry
      - Abandoned
      - Pending where provider review is involved

    WHAT COMES AFTER:
      -> Returns to the calling parent flow

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Check task membership and state.
- Enable chat and voice messages.
- For calls, create/retrieve masked call session.
- Open phone dialer with Work2Cash proxy number.
- Persist/audit communication metadata where needed.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                                           | Recovery / Subflow That Fixes It                | User Outcome                                                       |
|----------------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------------|
| This subflow fails or is abandoned                       | SF-10 Status Recovery / Resume where applicable | The calling flow returns the user to the last valid checkpoint.    |
| User lacks required permission/contact/provider response | SF-09 Permission Recovery or provider retry     | The app explains the blocker and offers the safest available path. |

</div>

<div class="flow-head">

<div>

SF-08

### Report / Dispute

</div>

**Reusable Subflow**

</div>

Turns task problems into structured evidence-backed reports for admin review.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Task Owner or Tasker reports no-show, unsafe behavior, poor service, payment issue, off-platform request, or completion disagreement.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>None</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>None</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Completed<br />
Failed/retry<br />
Abandoned<br />
Pending where provider review is involved</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>Returns to the calling parent flow</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### SF-08 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Report Reason

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Report Details

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Evidence Upload

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Submit Report

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Report Status

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### SF-08 Flow Path

Flow Diagram

</div>

    ENTRY: Task Owner or Tasker reports no-show, unsafe behavior, poor service, payment issue, off-platform request, or completion disagreement.

    START -> Select task-linked report reason.
    02 -> Add description.
    03 -> Upload evidence if needed.
    04 -> Submit report.
    05 -> Track report status.
    06 -> Admin resolves, dismisses, escalates, or requests evidence.

    TERMINAL STATES:
      - Completed
      - Failed/retry
      - Abandoned
      - Pending where provider review is involved

    WHAT COMES AFTER:
      -> Returns to the calling parent flow

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Select task-linked report reason.
- Add description.
- Upload evidence if needed.
- Submit report.
- Track report status.
- Admin resolves, dismisses, escalates, or requests evidence.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                                           | Recovery / Subflow That Fixes It                | User Outcome                                                       |
|----------------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------------|
| This subflow fails or is abandoned                       | SF-10 Status Recovery / Resume where applicable | The calling flow returns the user to the last valid checkpoint.    |
| User lacks required permission/contact/provider response | SF-09 Permission Recovery or provider retry     | The app explains the blocker and offers the safest available path. |

</div>

<div class="flow-head">

<div>

SF-09

### Permission Recovery

</div>

**Reusable Subflow**

</div>

Guides users when required permissions are denied or unavailable.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Location, camera, microphone, notification, media, or phone permission is denied.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>None</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>None</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Completed<br />
Failed/retry<br />
Abandoned<br />
Pending where provider review is involved</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>Returns to the calling parent flow</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### SF-09 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Permission Blocked

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Why Needed

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Retry Permission

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Open Settings

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Fallback / Exit

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### SF-09 Flow Path

Flow Diagram

</div>

    ENTRY: Location, camera, microphone, notification, media, or phone permission is denied.

    START -> Explain why permission is needed.
    02 -> Offer retry.
    03 -> Open system settings where required.
    04 -> Offer fallback where allowed, such as manual address.
    05 -> Block only the feature that requires the permission.

    TERMINAL STATES:
      - Completed
      - Failed/retry
      - Abandoned
      - Pending where provider review is involved

    WHAT COMES AFTER:
      -> Returns to the calling parent flow

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Explain why permission is needed.
- Offer retry.
- Open system settings where required.
- Offer fallback where allowed, such as manual address.
- Block only the feature that requires the permission.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                                           | Recovery / Subflow That Fixes It                | User Outcome                                                       |
|----------------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------------|
| This subflow fails or is abandoned                       | SF-10 Status Recovery / Resume where applicable | The calling flow returns the user to the last valid checkpoint.    |
| User lacks required permission/contact/provider response | SF-09 Permission Recovery or provider retry     | The app explains the blocker and offers the safest available path. |

</div>

<div class="flow-head">

<div>

SF-10

### Status Recovery / Resume

</div>

**Reusable Subflow**

</div>

Lets users safely continue after closing the app, losing network, or returning from a provider page.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>App opens, reconnects, returns from payment/KYC/provider page, or detects stale local state.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>None</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>None</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Completed<br />
Failed/retry<br />
Abandoned<br />
Pending where provider review is involved</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>Returns to the calling parent flow</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### SF-10 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Resume App

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Fetch Server State

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Compare Local State

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Restore Step

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Continue Flow

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### SF-10 Flow Path

Flow Diagram

</div>

    ENTRY: App opens, reconnects, returns from payment/KYC/provider page, or detects stale local state.

    START -> Fetch current backend state.
    02 -> Compare local state with server state.
    03 -> Show correct next action.
    04 -> Resume flow from the last valid checkpoint.
    05 -> Clear stale local assumptions.

    TERMINAL STATES:
      - Completed
      - Failed/retry
      - Abandoned
      - Pending where provider review is involved

    WHAT COMES AFTER:
      -> Returns to the calling parent flow

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Fetch current backend state.
- Compare local state with server state.
- Show correct next action.
- Resume flow from the last valid checkpoint.
- Clear stale local assumptions.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                                           | Recovery / Subflow That Fixes It                | User Outcome                                                       |
|----------------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------------|
| This subflow fails or is abandoned                       | SF-10 Status Recovery / Resume where applicable | The calling flow returns the user to the last valid checkpoint.    |
| User lacks required permission/contact/provider response | SF-09 Permission Recovery or provider retry     | The app explains the blocker and offers the safest available path. |

</div>

<div class="flow-head">

<div>

SF-11

### Password Recovery

</div>

**Reusable Subflow**

</div>

Lets a registered user regain access when they cannot remember their password.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>User taps Forgot Password from the login screen.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>None</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>None</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Completed<br />
Failed/retry<br />
Abandoned<br />
Pending where provider review is involved</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>Returns to the calling parent flow</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### SF-11 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Forgot Password

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Enter Contact

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Verify OTP

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Set Password

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Return Login

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### SF-11 Flow Path

Flow Diagram

</div>

    ENTRY: User taps Forgot Password from the login screen.

    START -> Enter email or phone number.
    02 -> Show safe account-existence-neutral message.
    03 -> Send OTP by email first, with Termii SMS fallback.
    04 -> Verify OTP.
    05 -> Set new password.
    06 -> Revoke existing sessions.
    07 -> Return user to Login.
    08 -> Login runs normal profile/KYC/status checks.

    TERMINAL STATES:
      - Completed
      - Failed/retry
      - Abandoned
      - Pending where provider review is involved

    WHAT COMES AFTER:
      -> Returns to the calling parent flow

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Enter email or phone number.
- Show safe account-existence-neutral message.
- Send OTP by email first, with Termii SMS fallback.
- Verify OTP.
- Set new password.
- Revoke existing sessions.
- Return user to Login.
- Login runs normal profile/KYC/status checks.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                                           | Recovery / Subflow That Fixes It                | User Outcome                                                       |
|----------------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------------|
| This subflow fails or is abandoned                       | SF-10 Status Recovery / Resume where applicable | The calling flow returns the user to the last valid checkpoint.    |
| User lacks required permission/contact/provider response | SF-09 Permission Recovery or provider retry     | The app explains the blocker and offers the safest available path. |

</div>

<div class="flow-head">

<div>

SF-12

### Payout Account Setup

</div>

**Reusable Subflow**

</div>

Collects and verifies the Tasker's payout account before withdrawal requests can be made.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Tasker opens Wallet/Profile, tries to withdraw without payout details, or changes payout account.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>None</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>None</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Completed<br />
Failed/retry<br />
Abandoned<br />
Pending where provider review is involved</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>Returns to the calling parent flow</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### SF-12 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Payout Account

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Bank Details

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Resolve Name

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Enter PIN

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Saved

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### SF-12 Flow Path

Flow Diagram

</div>

    ENTRY: Tasker opens Wallet/Profile, tries to withdraw without payout details, or changes payout account.

    START -> Select bank/provider.
    02 -> Enter account number.
    03 -> Resolve account name where provider supports it.
    04 -> Show account-name confirmation.
    05 -> Confirm with PIN.
    06 -> Save payout account.
    07 -> Send security notification.
    08 -> Return to wallet or withdrawal flow.

    TERMINAL STATES:
      - Completed
      - Failed/retry
      - Abandoned
      - Pending where provider review is involved

    WHAT COMES AFTER:
      -> Returns to the calling parent flow

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Select bank/provider.
- Enter account number.
- Resolve account name where provider supports it.
- Show account-name confirmation.
- Confirm with PIN.
- Save payout account.
- Send security notification.
- Return to wallet or withdrawal flow.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                                           | Recovery / Subflow That Fixes It                | User Outcome                                                       |
|----------------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------------|
| This subflow fails or is abandoned                       | SF-10 Status Recovery / Resume where applicable | The calling flow returns the user to the last valid checkpoint.    |
| User lacks required permission/contact/provider response | SF-09 Permission Recovery or provider retry     | The app explains the blocker and offers the safest available path. |

</div>

<div class="flow-head">

<div>

SF-13

### Google / Apple Social Authentication

</div>

**Reusable Subflow**

</div>

Lets users register or log in using Google or Apple while preserving Work2Cash profile, phone/contact, KYC, and recovery checks.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>User selects Continue with Google or Continue with Apple from registration/login.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>None</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>None</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Completed<br />
Failed/retry<br />
Abandoned<br />
Pending where provider review is involved</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>Returns to the calling parent flow</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### SF-13 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Choose Provider

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Google / Apple

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Account Link

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

State Checks

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Home / Recovery

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### SF-13 Flow Path

Flow Diagram

</div>

    ENTRY: User selects Continue with Google or Continue with Apple from registration/login.

    START -> Open Google or Apple provider flow.
    02 -> Receive provider identity result.
    03 -> Match or create Work2Cash account safely.
    04 -> Prevent duplicate accounts through account-linking rules.
    05 -> Handle Apple private relay email cases.
    06 -> Run Work2Cash profile, contact, KYC, and active-state checks.
    07 -> Route user to the correct next flow.

    TERMINAL STATES:
      - Completed
      - Failed/retry
      - Abandoned
      - Pending where provider review is involved

    WHAT COMES AFTER:
      -> Returns to the calling parent flow

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Open Google or Apple provider flow.
- Receive provider identity result.
- Match or create Work2Cash account safely.
- Prevent duplicate accounts through account-linking rules.
- Handle Apple private relay email cases.
- Run Work2Cash profile, contact, KYC, and active-state checks.
- Route user to the correct next flow.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                                           | Recovery / Subflow That Fixes It                | User Outcome                                                       |
|----------------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------------|
| This subflow fails or is abandoned                       | SF-10 Status Recovery / Resume where applicable | The calling flow returns the user to the last valid checkpoint.    |
| User lacks required permission/contact/provider response | SF-09 Permission Recovery or provider retry     | The app explains the blocker and offers the safest available path. |

</div>

</div>

<div id="section-04" class="section section">

<div class="section-num">

04

</div>

<div class="eyebrow">

Closed Flows

</div>

## Main Closed Flows

These are the major mobile journeys. Each one has an entry trigger, happy path, dependencies, breakpoints, recovery flows, terminal states, and possible next flows.

<div class="flow-head">

<div>

MF-01

### First App Launch and Entry Decision

</div>

**Entry Flow**

</div>

Decides whether the user should see onboarding, registration, login, or an authenticated home state.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>User opens the Work2Cash mobile app.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Installed app<br />
Network where available<br />
Local session storage</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-10 Status Recovery / Resume</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Guest entry screen<br />
Authenticated Home<br />
Offline/retry state</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-02 Registration<br />
MF-03 Login / Session Recovery<br />
MF-04 Task Owner Home<br />
MF-05 Tasker Activation</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-01 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Splash

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Session Check

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Guest Entry

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Status Recovery

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Home / Login

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-01 Flow Path

Flow Diagram

</div>

    ENTRY: User opens the Work2Cash mobile app.

    START -> Show splash/loading state.
    02 -> Check stored session.
    03 -> If no session, show onboarding/login/register entry.
    04 -> If session exists, run status recovery.
    05 -> Route user to Home or required recovery subflow.

    TERMINAL STATES:
      - Guest entry screen
      - Authenticated Home
      - Offline/retry state

    WHAT COMES AFTER:
      -> MF-02 Registration
      -> MF-03 Login / Session Recovery
      -> MF-04 Task Owner Home
      -> MF-05 Tasker Activation

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Show splash/loading state.
- Check stored session.
- If no session, show onboarding/login/register entry.
- If session exists, run status recovery.
- Route user to Home or required recovery subflow.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break          | Recovery / Subflow That Fixes It | User Outcome                             |
|-------------------------|----------------------------------|------------------------------------------|
| Session expired         | MF-03 Login / Session Recovery   | User logs in again and resumes safely.   |
| Network unavailable     | SF-10 Status Recovery / Resume   | App shows offline state and retries.     |
| User profile incomplete | SF-02 Complete Profile           | User completes missing data before Home. |

</div>

<div class="flow-head">

<div>

MF-02

### Registration

</div>

**Identity Flow**

</div>

Creates a new Work2Cash user account and brings the user to a complete basic profile.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>New user chooses Create Account.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>SF-01 OTP Verification<br />
Backend auth APIs<br />
User table</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-01 OTP Verification<br />
SF-02 Complete Profile<br />
SF-10 Status Recovery / Resume</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Home<br />
OTP failed/rate-limited<br />
Profile incomplete recovery required</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-04 Task Owner Home<br />
MF-05 Tasker Activation</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-02 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Register Details

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

OTP

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Create Account

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Complete Profile

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Home

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-02 Flow Path

Flow Diagram

</div>

    ENTRY: New user chooses Create Account.

    START -> Enter registration details.
    02 -> Run OTP verification.
    03 -> Create user account.
    04 -> Check profile completeness.
    05 -> If incomplete, run Complete Profile.
    06 -> Route user to Home.

    TERMINAL STATES:
      - Home
      - OTP failed/rate-limited
      - Profile incomplete recovery required

    WHAT COMES AFTER:
      -> MF-04 Task Owner Home
      -> MF-05 Tasker Activation

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Enter registration details.
- Run OTP verification.
- Create user account.
- Check profile completeness.
- If incomplete, run Complete Profile.
- Route user to Home.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                                                  | Recovery / Subflow That Fixes It                        | User Outcome                                                       |
|-----------------------------------------------------------------|---------------------------------------------------------|--------------------------------------------------------------------|
| OTP not received or expired                                     | SF-01 OTP Verification                                  | User retries email or SMS fallback.                                |
| User exits after account creation but before profile completion | MF-03 Login / Session Recovery + SF-02 Complete Profile | Login detects incomplete profile and repairs the registration gap. |
| Network fails after submit                                      | SF-10 Status Recovery / Resume                          | App checks whether account was created before retrying.            |

</div>

<div class="flow-head">

<div>

MF-03

### Login / Session Recovery

</div>

**Identity Recovery Flow**

</div>

Authenticates returning users and repairs any incomplete onboarding state left by registration, KYC, or profile setup.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Existing user logs in, session expires, or app resumes with uncertain state.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Existing account<br />
Auth APIs<br />
User/Profile APIs</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-01 OTP Verification<br />
SF-02 Complete Profile<br />
SF-03 Tasker KYC<br />
SF-10 Status Recovery / Resume<br />
SF-11 Password Recovery<br />
SF-13 Google / Apple Social Authentication</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Task Owner Home<br />
Tasker Home<br />
Complete Profile<br />
KYC pending/rejected/manual review<br />
Login failed</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-04 Task Owner Home<br />
MF-05 Tasker Activation<br />
MF-06 Task Owner Create Task<br />
MF-09 Tasker Browse and Accept Task</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-03 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Login Details

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Verify Login

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

State Check

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Profile/KYC Repair

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Home

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-03 Flow Path

Flow Diagram

</div>

    ENTRY: Existing user logs in, session expires, or app resumes with uncertain state.

    START -> Enter login details.
    02 -> Verify credentials/OTP.
    03 -> Fetch current user state.
    04 -> Check profile complete.
    05 -> If profile incomplete, run Complete Profile.
    06 -> Check selected mode.
    07 -> If Tasker mode requires KYC/profile, route to Tasker Activation or KYC status.
    08 -> Otherwise route to Home.

    TERMINAL STATES:
      - Task Owner Home
      - Tasker Home
      - Complete Profile
      - KYC pending/rejected/manual review
      - Login failed

    WHAT COMES AFTER:
      -> MF-04 Task Owner Home
      -> MF-05 Tasker Activation
      -> MF-06 Task Owner Create Task
      -> MF-09 Tasker Browse and Accept Task

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Enter login details.
- Verify credentials/OTP.
- Fetch current user state.
- Check profile complete.
- If profile incomplete, run Complete Profile.
- Check selected mode.
- If Tasker mode requires KYC/profile, route to Tasker Activation or KYC status.
- Otherwise route to Home.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                                           | Recovery / Subflow That Fixes It | User Outcome                                                                                |
|----------------------------------------------------------|----------------------------------|---------------------------------------------------------------------------------------------|
| Profile incomplete from abandoned registration           | SF-02 Complete Profile           | Login repairs the abandoned registration flow.                                              |
| Tasker KYC incomplete                                    | SF-03 Tasker KYC                 | User completes or waits for KYC before Tasker actions.                                      |
| User forgot password                                     | SF-11 Password Recovery          | User resets password through OTP recovery and returns to Login.                             |
| User chooses Google or Apple sign-in                     | Social login branch              | Google/Apple authenticate the user, then Work2Cash runs the same profile/KYC/status checks. |
| Session stale or app was closed during provider callback | SF-10 Status Recovery / Resume   | Backend state decides the correct next screen.                                              |

</div>

<div class="flow-head">

<div>

MF-04

### Task Owner Home

</div>

**Hub Flow**

</div>

Acts as the Task Owner operating hub after login or registration.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>User lands in Task Owner mode with valid profile.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Authenticated user<br />
Profile complete</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-10 Status Recovery / Resume</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Home active<br />
Post Task selected<br />
Support selected<br />
Mode switch selected</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-06 Task Owner Create and Fund Task<br />
MF-15 Favorites<br />
MF-16 Support Live Chat<br />
MF-05 Tasker Activation</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-04 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Task Owner Home

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Active Tasks

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Wallet/Alerts

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Quick Actions

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Next Flow

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-04 Flow Path

Flow Diagram

</div>

    ENTRY: User lands in Task Owner mode with valid profile.

    START -> Show active tasks, wallet/credits, notifications, and quick actions.
    02 -> User can post task, view task history, manage favorites, open support, or switch mode.
    03 -> App refreshes state from backend on launch/reconnect.

    TERMINAL STATES:
      - Home active
      - Post Task selected
      - Support selected
      - Mode switch selected

    WHAT COMES AFTER:
      -> MF-06 Task Owner Create and Fund Task
      -> MF-15 Favorites
      -> MF-16 Support Live Chat
      -> MF-05 Tasker Activation

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Show active tasks, wallet/credits, notifications, and quick actions.
- User can post task, view task history, manage favorites, open support, or switch mode.
- App refreshes state from backend on launch/reconnect.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                                           | Recovery / Subflow That Fixes It | User Outcome                                    |
|----------------------------------------------------------|----------------------------------|-------------------------------------------------|
| Profile becomes incomplete due to missing required field | SF-02 Complete Profile           | User fixes profile before critical actions.     |
| Session expires                                          | MF-03 Login / Session Recovery   | User logs in and returns.                       |
| Network unavailable                                      | SF-10 Status Recovery / Resume   | User sees cached/empty/offline state and retry. |

</div>

<div class="flow-head">

<div>

MF-05

### Tasker Activation

</div>

**Capability Unlock Flow**

</div>

Turns a normal user account into an eligible Tasker account through profile, skills, location readiness, and KYC.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>User taps Become a Tasker or switches to Tasker mode without an active TaskerProfile.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Authenticated user<br />
Profile complete<br />
Smile ID KYC<br />
Task categories</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-02 Complete Profile<br />
SF-03 Tasker KYC<br />
SF-04 Location, Address and Pin Confirmation<br />
SF-09 Permission Recovery</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Tasker active<br />
KYC pending<br />
KYC rejected/manual review<br />
Activation abandoned</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-09 Tasker Browse and Accept Task<br />
MF-13 Tasker Withdrawal</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-05 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Become Tasker

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Tasker Profile

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Skills

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

KYC

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Tasker Home

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-05 Flow Path

Flow Diagram

</div>

    ENTRY: User taps Become a Tasker or switches to Tasker mode without an active TaskerProfile.

    START -> Check profile complete.
    02 -> If incomplete, run Complete Profile.
    03 -> Create or continue TaskerProfile.
    04 -> Select task categories/skills.
    05 -> Set bio, availability, and travel preferences.
    06 -> Run KYC.
    07 -> If approved, set TaskerProfile active.
    08 -> User can enter Tasker Home.

    TERMINAL STATES:
      - Tasker active
      - KYC pending
      - KYC rejected/manual review
      - Activation abandoned

    WHAT COMES AFTER:
      -> MF-09 Tasker Browse and Accept Task
      -> MF-13 Tasker Withdrawal

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Check profile complete.
- If incomplete, run Complete Profile.
- Create or continue TaskerProfile.
- Select task categories/skills.
- Set bio, availability, and travel preferences.
- Run KYC.
- If approved, set TaskerProfile active.
- User can enter Tasker Home.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break             | Recovery / Subflow That Fixes It | User Outcome                                                         |
|----------------------------|----------------------------------|----------------------------------------------------------------------|
| Profile incomplete         | SF-02 Complete Profile           | User completes basic identity/profile first.                         |
| KYC pending/rejected       | SF-03 Tasker KYC                 | Tasker actions remain locked until KYC approved.                     |
| Location permission denied | SF-09 Permission Recovery        | Tasker cannot become available until location requirement is solved. |

</div>

<div class="flow-head">

<div>

MF-06

### Task Owner Create and Fund Task

</div>

**Marketplace Creation Flow**

</div>

Creates a task with location, proof, arrival time, pricing, and escrow funding.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Task Owner taps Post Task.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Authenticated Task Owner<br />
Profile complete<br />
Approved category<br />
Valid Nigerian task site<br />
Payment provider</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-04 Location, Address and Pin Confirmation<br />
SF-05 Media Upload<br />
SF-06 Payment and Escrow Funding<br />
SF-10 Status Recovery / Resume</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Funded task ready for public discovery<br />
Direct offer ready<br />
Payment pending/failed<br />
Draft abandoned</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-07 Public Discovery and Tasker Interest<br />
MF-08 Direct Offer to Favorite Tasker</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-06 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Select Task

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Task Details

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Location Pin

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Proof Upload

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Price Review

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Payment

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

06

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Matching Choice

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

07

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-06 Flow Path

Flow Diagram

</div>

    ENTRY: Task Owner taps Post Task.

    START -> Select category and task type.
    02 -> Describe work.
    03 -> Set task site using live/manual address.
    04 -> Confirm map pin.
    05 -> Upload proof of work to be done.
    06 -> Set required arrival time.
    07 -> Review task amount and fees.
    08 -> Pay through Paystack or Moniepoint.
    ...  -> 2 additional steps continue in the happy-path list

    TERMINAL STATES:
      - Funded task ready for public discovery
      - Direct offer ready
      - Payment pending/failed
      - Draft abandoned

    WHAT COMES AFTER:
      -> MF-07 Public Discovery and Tasker Interest
      -> MF-08 Direct Offer to Favorite Tasker

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Select category and task type.
- Describe work.
- Set task site using live/manual address.
- Confirm map pin.
- Upload proof of work to be done.
- Set required arrival time.
- Review task amount and fees.
- Pay through Paystack or Moniepoint.
- Backend verifies payment and holds escrow.
- Choose public discovery or direct offer.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                            | Recovery / Subflow That Fixes It                                         | User Outcome                                         |
|-------------------------------------------|--------------------------------------------------------------------------|------------------------------------------------------|
| GPS denied or inaccurate                  | SF-04 Location, Address and Pin Confirmation + SF-09 Permission Recovery | User uses retry or manual address and confirms pin.  |
| Proof media upload fails                  | SF-05 Media Upload                                                       | User retries, removes, or replaces file.             |
| Payment redirect closes or webhook delays | SF-06 Payment and Escrow Funding + SF-10 Status Recovery                 | Task remains pending until backend verifies payment. |

</div>

<div class="flow-head">

<div>

MF-07

### Public Discovery and Tasker Interest

</div>

**Matching Flow**

</div>

Lets eligible Taskers find funded public tasks while Task Owners choose based on profile and ETA.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Task Owner chooses public discovery after funding a task.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Funded task<br />
Tasker in Nigeria<br />
Tasker KYC approved<br />
Tasker location available</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-04 Location, Address and Pin Confirmation<br />
SF-10 Status Recovery / Resume</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Tasker accepted<br />
Tasker rejected<br />
Task expires<br />
Task cancelled</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-10 Active Task Execution<br />
MF-11 Task Owner Rejection<br />
MF-12 Cancellation / No-Show</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-07 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Available Task

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Tasker Interest

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

ETA Review

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Owner Decision

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Accepted / Rejected

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-07 Flow Path

Flow Diagram

</div>

    ENTRY: Task Owner chooses public discovery after funding a task.

    START -> Task appears in Tasker available tasks list.
    02 -> Taskers browse tasks sorted nearest first.
    03 -> Taskers filter by location/category/time.
    04 -> Tasker opens limited task preview.
    05 -> Tasker confirms ability to arrive by required time.
    06 -> Backend calculates ETA.
    07 -> Task Owner reviews Tasker profile and ETA.
    08 -> Task Owner accepts or rejects Tasker.

    TERMINAL STATES:
      - Tasker accepted
      - Tasker rejected
      - Task expires
      - Task cancelled

    WHAT COMES AFTER:
      -> MF-10 Active Task Execution
      -> MF-11 Task Owner Rejection
      -> MF-12 Cancellation / No-Show

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Task appears in Tasker available tasks list.
- Taskers browse tasks sorted nearest first.
- Taskers filter by location/category/time.
- Tasker opens limited task preview.
- Tasker confirms ability to arrive by required time.
- Backend calculates ETA.
- Task Owner reviews Tasker profile and ETA.
- Task Owner accepts or rejects Tasker.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                  | Recovery / Subflow That Fixes It | User Outcome                                           |
|---------------------------------|----------------------------------|--------------------------------------------------------|
| Tasker outside Nigeria          | SF-04 Location validation        | Tasker cannot accept until inside Nigeria.             |
| Tasker cannot meet arrival time | Tasker exits flow                | Task remains available to other Taskers.               |
| Task Owner rejects Tasker       | MF-11 Task Owner Rejection       | Task returns to discovery or another Tasker selection. |

</div>

<div class="flow-head">

<div>

MF-08

### Direct Offer to Favorite Tasker

</div>

**Targeted Matching Flow**

</div>

Lets a Task Owner send a funded task directly to a trusted favorite Tasker without public discovery first.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Task Owner chooses favorite Tasker after funding task.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Funded task<br />
FavoriteTasker active<br />
Tasker eligible and in Nigeria<br />
FCM</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-10 Status Recovery / Resume</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Direct offer accepted<br />
Declined<br />
Expired<br />
Converted to public discovery</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-10 Active Task Execution<br />
MF-07 Public Discovery and Tasker Interest<br />
MF-12 Cancellation / No-Show</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-08 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Favorite Taskers

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Select Favorite

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Send Offer

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Tasker Response

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Accepted / Convert

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-08 Flow Path

Flow Diagram

</div>

    ENTRY: Task Owner chooses favorite Tasker after funding task.

    START -> Backend creates DirectTaskOffer.
    02 -> Tasker receives FCM notification.
    03 -> Tasker opens offer.
    04 -> Tasker confirms arrival ability.
    05 -> Tasker accepts or declines through API.
    06 -> If accepted, task locks to Tasker.
    07 -> If declined/expired, Task Owner can send to another favorite, convert to public discovery, or cancel.

    TERMINAL STATES:
      - Direct offer accepted
      - Declined
      - Expired
      - Converted to public discovery

    WHAT COMES AFTER:
      -> MF-10 Active Task Execution
      -> MF-07 Public Discovery and Tasker Interest
      -> MF-12 Cancellation / No-Show

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Backend creates DirectTaskOffer.
- Tasker receives FCM notification.
- Tasker opens offer.
- Tasker confirms arrival ability.
- Tasker accepts or declines through API.
- If accepted, task locks to Tasker.
- If declined/expired, Task Owner can send to another favorite, convert to public discovery, or cancel.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                     | Recovery / Subflow That Fixes It | User Outcome                                                          |
|------------------------------------|----------------------------------|-----------------------------------------------------------------------|
| Tasker does not respond            | Direct offer expiry handling     | Task Owner can retry another favorite or convert to public discovery. |
| Tasker unavailable/outside Nigeria | Offer decline/unavailable state  | Task Owner selects another path.                                      |
| FCM not delivered                  | REST status refresh              | Tasker sees offer when app opens.                                     |

</div>

<div class="flow-head">

<div>

MF-09

### Tasker Browse and Accept Task

</div>

**Tasker Marketplace Flow**

</div>

Lets an active Tasker find and commit to available work.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Tasker opens Tasker Home or receives direct offer notification.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Tasker active<br />
KYC approved<br />
Location available<br />
Task availability</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-03 Tasker KYC<br />
SF-04 Location, Address and Pin Confirmation<br />
SF-09 Permission Recovery</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Task accepted by owner<br />
Waiting for owner decision<br />
Rejected<br />
No eligible tasks</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-10 Active Task Execution<br />
MF-09 Tasker Browse and Accept Task</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-09 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Tasker Home

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Task List

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Task Preview

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Arrival Confirm

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Interest / Accept

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-09 Flow Path

Flow Diagram

</div>

    ENTRY: Tasker opens Tasker Home or receives direct offer notification.

    START -> Confirm TaskerProfile active and KYC approved.
    02 -> Confirm Tasker is in Nigeria.
    03 -> Show available tasks sorted nearest first.
    04 -> Tasker filters by location/category/time.
    05 -> Tasker opens limited preview.
    06 -> Tasker confirms arrival ability.
    07 -> Tasker submits interest or accepts direct offer.
    08 -> Wait for Task Owner acceptance where public discovery applies.

    TERMINAL STATES:
      - Task accepted by owner
      - Waiting for owner decision
      - Rejected
      - No eligible tasks

    WHAT COMES AFTER:
      -> MF-10 Active Task Execution
      -> MF-09 Tasker Browse and Accept Task

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Confirm TaskerProfile active and KYC approved.
- Confirm Tasker is in Nigeria.
- Show available tasks sorted nearest first.
- Tasker filters by location/category/time.
- Tasker opens limited preview.
- Tasker confirms arrival ability.
- Tasker submits interest or accepts direct offer.
- Wait for Task Owner acceptance where public discovery applies.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break             | Recovery / Subflow That Fixes It | User Outcome                                          |
|----------------------------|----------------------------------|-------------------------------------------------------|
| KYC not approved           | SF-03 Tasker KYC                 | Tasker cannot accept until approved.                  |
| Location permission denied | SF-09 Permission Recovery        | Tasker cannot receive/accept tasks while unavailable. |
| Task Owner rejects Tasker  | MF-11 Task Owner Rejection       | Tasker returns to browse list.                        |

</div>

<div class="flow-head">

<div>

MF-10

### Active Task Execution

</div>

**Execution Flow**

</div>

Coordinates the accepted task from journey start to completion request.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Task Owner accepts Tasker or direct offer is accepted.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Accepted task<br />
Funded escrow<br />
Tasker location<br />
Communication permissions where used</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-05 Media Upload<br />
SF-07 Communication<br />
SF-08 Report / Dispute<br />
SF-10 Status Recovery / Resume</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Completion requested<br />
Cancelled<br />
No-show reported<br />
Dispute/report opened</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-14 Completion and Settlement<br />
MF-12 Cancellation / No-Show<br />
MF-16 Support Live Chat</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-10 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Accepted Task

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Start Journey

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

I Have Arrived

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Begin Task

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Completion Proof

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Request Complete

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

06

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-10 Flow Path

Flow Diagram

</div>

    ENTRY: Task Owner accepts Tasker or direct offer is accepted.

    START -> Enable task chat, voice messages, masked calls, and live tracking.
    02 -> Tasker taps Start Journey.
    03 -> ETA guard uses 5 minutes plus 10% journey milestone.
    04 -> Tasker taps I have arrived.
    05 -> Tasker taps Begin Task.
    06 -> Tasker performs work.
    07 -> Tasker uploads proof of work done.
    08 -> Tasker requests completion.
    ...  -> 1 additional steps continue in the happy-path list

    TERMINAL STATES:
      - Completion requested
      - Cancelled
      - No-show reported
      - Dispute/report opened

    WHAT COMES AFTER:
      -> MF-14 Completion and Settlement
      -> MF-12 Cancellation / No-Show
      -> MF-16 Support Live Chat

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Enable task chat, voice messages, masked calls, and live tracking.
- Tasker taps Start Journey.
- ETA guard uses 5 minutes plus 10% journey milestone.
- Tasker taps I have arrived.
- Tasker taps Begin Task.
- Tasker performs work.
- Tasker uploads proof of work done.
- Tasker requests completion.
- Task Owner confirms or reports issue.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                  | Recovery / Subflow That Fixes It                       | User Outcome                                           |
|---------------------------------|--------------------------------------------------------|--------------------------------------------------------|
| Tasker late beyond grace period | MF-12 Cancellation / No-Show or SF-08 Report / Dispute | Task Owner may report late/no-show after grace period. |
| Communication needed            | SF-07 Communication                                    | Task parties coordinate through approved channels.     |
| Completion proof upload fails   | SF-05 Media Upload                                     | Tasker retries before completion request can proceed.  |

</div>

<div class="flow-head">

<div>

MF-11

### Task Owner Rejection

</div>

**Matching Recovery Flow**

</div>

Lets the Task Owner reject a Tasker within controlled rules without breaking the task.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Task Owner rejects an interested or accepted Tasker before movement, or within 5 minutes after Tasker marks en route.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Tasker interest/acceptance state<br />
Task not started<br />
Rejection policy</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-08 Report / Dispute where rejection is contested</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Task returned to matching<br />
Rejection denied<br />
Risk flag/warning recorded</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-07 Public Discovery and Tasker Interest<br />
MF-08 Direct Offer to Favorite Tasker<br />
MF-12 Cancellation / No-Show</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-11 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Tasker Profile/ETA

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Reject Tasker

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Select Reason

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Log Rejection

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Return to Matching

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-11 Flow Path

Flow Diagram

</div>

    ENTRY: Task Owner rejects an interested or accepted Tasker before movement, or within 5 minutes after Tasker marks en route.

    START -> Task Owner taps reject.
    02 -> Select rejection reason.
    03 -> Backend checks task state and rejection window.
    04 -> Log TaskOwnerRejection.
    05 -> If movement-stage rejection repeats, create warning/risk flag.
    06 -> Task returns to discovery/direct-offer options.

    TERMINAL STATES:
      - Task returned to matching
      - Rejection denied
      - Risk flag/warning recorded

    WHAT COMES AFTER:
      -> MF-07 Public Discovery and Tasker Interest
      -> MF-08 Direct Offer to Favorite Tasker
      -> MF-12 Cancellation / No-Show

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Task Owner taps reject.
- Select rejection reason.
- Backend checks task state and rejection window.
- Log TaskOwnerRejection.
- If movement-stage rejection repeats, create warning/risk flag.
- Task returns to discovery/direct-offer options.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                           | Recovery / Subflow That Fixes It  | User Outcome                                      |
|------------------------------------------|-----------------------------------|---------------------------------------------------|
| Rejection attempted after allowed window | SF-08 Report / Dispute or support | User must report issue rather than normal reject. |
| Tasker contests movement-stage rejection | SF-08 Report / Dispute            | Admin reviews evidence and policy events.         |
| Repeated rejection abuse                 | PolicyEvent / RiskFlag            | User warning/risk review is triggered.            |

</div>

<div class="flow-head">

<div>

MF-12

### Cancellation / No-Show

</div>

**Exception Flow**

</div>

Closes or reviews tasks when either party cancels, does not appear, or cannot proceed.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Task Owner or Tasker cancels, reports no-show, or task becomes stale.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Task state<br />
Cancellation policy<br />
Wallet/escrow system</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-08 Report / Dispute<br />
SF-10 Status Recovery / Resume</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Cancelled<br />
Rematch required<br />
Penalty applied<br />
Dispute/report opened</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-07 Public Discovery and Tasker Interest<br />
MF-14 Completion and Settlement<br />
MF-16 Support Live Chat</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-12 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Cancel / No-Show

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Policy Check

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Penalty / Warning

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Escrow Decision

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Closed / Report

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-12 Flow Path

Flow Diagram

</div>

    ENTRY: Task Owner or Tasker cancels, reports no-show, or task becomes stale.

    START -> Identify actor and task state.
    02 -> Apply cancellation/no-show policy.
    03 -> Apply penalty, warning, strike, or no penalty.
    04 -> Update escrow/wallet state.
    05 -> If contested, open report/dispute.
    06 -> Return task to matching or close task depending on state.

    TERMINAL STATES:
      - Cancelled
      - Rematch required
      - Penalty applied
      - Dispute/report opened

    WHAT COMES AFTER:
      -> MF-07 Public Discovery and Tasker Interest
      -> MF-14 Completion and Settlement
      -> MF-16 Support Live Chat

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Identify actor and task state.
- Apply cancellation/no-show policy.
- Apply penalty, warning, strike, or no penalty.
- Update escrow/wallet state.
- If contested, open report/dispute.
- Return task to matching or close task depending on state.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break     | Recovery / Subflow That Fixes It | User Outcome                                            |
|--------------------|----------------------------------|---------------------------------------------------------|
| Contested penalty  | SF-08 Report / Dispute           | Penalty may remain pending until review/timeout.        |
| Tasker no-show     | PolicyEvent strike handling      | Tasker receives strike and task is closed or rematched. |
| Task Owner no-show | Penalty + warning                | Policy event and wallet ledger update are created.      |

</div>

<div class="flow-head">

<div>

MF-13

### Tasker Withdrawal

</div>

**Finance Flow**

</div>

Lets Taskers request earnings withdrawal while Work2Cash batches payouts on agreed payout dates.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Tasker opens wallet and taps withdraw.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Tasker wallet<br />
Completed/settled earnings<br />
Saved payout account<br />
Security PIN<br />
Payout batch schedule<br />
Finance admin operations</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-10 Status Recovery / Resume<br />
SF-12 Payout Account Setup</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Withdrawal queued<br />
Paid<br />
Failed/retry<br />
Flagged/admin review</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-04 Task Owner Home<br />
MF-09 Tasker Browse and Accept Task</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-13 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Tasker Wallet

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Withdraw Amount

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Eligibility Check

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Payout Batch

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Withdrawal Status

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-13 Flow Path

Flow Diagram

</div>

    ENTRY: Tasker opens wallet and taps withdraw.

    START -> Check Tasker wallet balance.
    02 -> Confirm saved payout account or run payout account setup.
    03 -> Validate minimum withdrawal amount: ₦1,000.
    04 -> Confirm withdrawal request with PIN.
    05 -> Check active issue/dispute against Tasker.
    06 -> If no active issue, accept withdrawal request.
    07 -> If disputed, require admin authorization for affected payout.
    08 -> Add eligible request to payout batch.
    ...  -> 2 additional steps continue in the happy-path list

    TERMINAL STATES:
      - Withdrawal queued
      - Paid
      - Failed/retry
      - Flagged/admin review

    WHAT COMES AFTER:
      -> MF-04 Task Owner Home
      -> MF-09 Tasker Browse and Accept Task

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Check Tasker wallet balance.
- Confirm saved payout account or run payout account setup.
- Validate minimum withdrawal amount: ₦1,000.
- Confirm withdrawal request with PIN.
- Check active issue/dispute against Tasker.
- If no active issue, accept withdrawal request.
- If disputed, require admin authorization for affected payout.
- Add eligible request to payout batch.
- Payout batches run on 14th and 28th.
- Admin processes bulk transfer through Paystack/Moniepoint rail.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break           | Recovery / Subflow That Fixes It      | User Outcome                                                                   |
|--------------------------|---------------------------------------|--------------------------------------------------------------------------------|
| Balance below ₦1,000     | Wallet guidance state                 | User cannot submit withdrawal yet.                                             |
| No payout account exists | SF-12 Payout Account Setup            | Tasker adds and confirms payout account before withdrawal.                     |
| PIN forgotten            | MF-19 Security and Device Management  | Tasker resets PIN through OTP recovery before sensitive action.                |
| Active issue/dispute     | Settlement hold / admin authorization | Only affected payout is delayed; non-disputed earnings should settle normally. |
| Bulk transfer fails      | Payment reconciliation/finance retry  | Withdrawal remains failed/retry/flagged until resolved.                        |

</div>

<div class="flow-head">

<div>

MF-14

### Completion and Settlement

</div>

**Settlement Flow**

</div>

Finalizes a task and moves money from escrow according to completion or report outcome.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Tasker requests completion after uploading completion proof.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Completion proof<br />
Escrow record<br />
Wallet ledger<br />
Rating/favorite system</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-05 Media Upload<br />
SF-08 Report / Dispute</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Completed and settled<br />
Settlement held<br />
Refunded/partially refunded<br />
Report resolved</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-15 Favorites<br />
MF-13 Tasker Withdrawal<br />
MF-16 Support Live Chat</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-14 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Completion Request

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Review Proof

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Confirm / Report

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Escrow Release

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Rate / Favorite

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-14 Flow Path

Flow Diagram

</div>

    ENTRY: Tasker requests completion after uploading completion proof.

    START -> Task Owner reviews completion proof.
    02 -> If satisfied, Task Owner confirms completion.
    03 -> Backend releases escrow to Tasker wallet.
    04 -> Commission tier is applied.
    05 -> Both parties can rate.
    06 -> Task Owner can favorite Tasker.
    07 -> If refused, open report/dispute and settlement hold applies to affected task.

    TERMINAL STATES:
      - Completed and settled
      - Settlement held
      - Refunded/partially refunded
      - Report resolved

    WHAT COMES AFTER:
      -> MF-15 Favorites
      -> MF-13 Tasker Withdrawal
      -> MF-16 Support Live Chat

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Task Owner reviews completion proof.
- If satisfied, Task Owner confirms completion.
- Backend releases escrow to Tasker wallet.
- Commission tier is applied.
- Both parties can rate.
- Task Owner can favorite Tasker.
- If refused, open report/dispute and settlement hold applies to affected task.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break              | Recovery / Subflow That Fixes It       | User Outcome                                             |
|-----------------------------|----------------------------------------|----------------------------------------------------------|
| Task Owner refuses approval | SF-08 Report / Dispute                 | Admin reviews and decides release/refund/partial refund. |
| Ledger posting fails        | Wallet reconciliation job              | Task remains pending settlement until fixed.             |
| Completion proof invalid    | SF-08 Report / Dispute or media review | Admin may request evidence or resolve report.            |

</div>

<div class="flow-head">

<div>

MF-15

### Favorites

</div>

**Retention Flow**

</div>

Lets Task Owners save trusted Taskers for future direct offers.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Task Owner completes/rates a Tasker or opens favorite management.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Completed task<br />
Rating flow<br />
FavoriteTasker model</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>None</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Favorite added<br />
Favorite removed<br />
Blocked<br />
Direct offer available</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-08 Direct Offer to Favorite Tasker<br />
MF-06 Task Owner Create and Fund Task</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-15 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Rate Tasker

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Add Favorite

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Favorites List

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Send Direct Offer

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Manage Favorite

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-15 Flow Path

Flow Diagram

</div>

    ENTRY: Task Owner completes/rates a Tasker or opens favorite management.

    START -> Task Owner rates Tasker after completion.
    02 -> Task Owner chooses Add to Favorites.
    03 -> Backend creates FavoriteTasker record.
    04 -> Task Owner can later select favorite when creating task.
    05 -> Task Owner can remove or block favorite.

    TERMINAL STATES:
      - Favorite added
      - Favorite removed
      - Blocked
      - Direct offer available

    WHAT COMES AFTER:
      -> MF-08 Direct Offer to Favorite Tasker
      -> MF-06 Task Owner Create and Fund Task

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Task Owner rates Tasker after completion.
- Task Owner chooses Add to Favorites.
- Backend creates FavoriteTasker record.
- Task Owner can later select favorite when creating task.
- Task Owner can remove or block favorite.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break         | Recovery / Subflow That Fixes It      | User Outcome                                                |
|------------------------|---------------------------------------|-------------------------------------------------------------|
| Task not completed     | Completion and Settlement             | Favorite action appears after valid completion/rating flow. |
| Tasker blocked/removed | Favorite status handling              | Direct offer cannot be sent to removed/blocked favorite.    |
| Tasker unavailable     | MF-08 Direct Offer to Favorite Tasker | Task Owner can choose another favorite or public discovery. |

</div>

<div class="flow-head">

<div>

MF-16

### Support Live Chat

</div>

**Support Flow**

</div>

Provides real-time help for account, wallet, payment, task, KYC, and operational issues.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>User opens support or app routes user to support after a blocking issue.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Authenticated user<br />
Socket connection<br />
Support/admin availability</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-05 Media Upload<br />
SF-08 Report / Dispute<br />
SF-10 Status Recovery / Resume</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Resolved<br />
Ticket opened<br />
Report/dispute opened<br />
Escalated</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-04 Task Owner Home<br />
MF-09 Tasker Browse and Accept Task<br />
MF-12 Cancellation / No-Show</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-16 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Support Entry

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Issue Category

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Live Chat

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Evidence / Ticket

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Resolved / Escalated

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-16 Flow Path

Flow Diagram

</div>

    ENTRY: User opens support or app routes user to support after a blocking issue.

    START -> User selects issue category.
    02 -> Create/open support chat session.
    03 -> Assign support agent where available.
    04 -> User and support chat in real time.
    05 -> Support may resolve, create ticket, request evidence, or direct user to report/dispute flow.
    06 -> Close support session.

    TERMINAL STATES:
      - Resolved
      - Ticket opened
      - Report/dispute opened
      - Escalated

    WHAT COMES AFTER:
      -> MF-04 Task Owner Home
      -> MF-09 Tasker Browse and Accept Task
      -> MF-12 Cancellation / No-Show

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- User selects issue category.
- Create/open support chat session.
- Assign support agent where available.
- User and support chat in real time.
- Support may resolve, create ticket, request evidence, or direct user to report/dispute flow.
- Close support session.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                 | Recovery / Subflow That Fixes It | User Outcome                                                                 |
|--------------------------------|----------------------------------|------------------------------------------------------------------------------|
| No agent immediately available | Support queue/ticket state       | User sees waiting state or ticket created.                                   |
| Issue is task dispute          | SF-08 Report / Dispute           | Support routes user into structured report rather than resolving informally. |
| Socket reconnects              | SF-10 Status Recovery / Resume   | Support session reloads from backend state.                                  |

</div>

<div class="flow-head">

<div>

MF-17

### Referral

</div>

**Growth Flow**

</div>

Rewards users for bringing new users who complete real paid activity.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>User opens referral screen or shares referral code/link.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Authenticated user<br />
Referral tracking<br />
Wallet credit system<br />
Completed paid task count</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>MF-02 Registration<br />
MF-14 Completion and Settlement</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Reward pending<br />
Wallet credit granted<br />
Referral invalid/blocked</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-04 Task Owner Home<br />
MF-13 Tasker Withdrawal</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-17 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Referral Home

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Share Code

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Referred Signup

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

5 Paid Tasks

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Wallet Credit

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-17 Flow Path

Flow Diagram

</div>

    ENTRY: User opens referral screen or shares referral code/link.

    START -> Show referral code/link.
    02 -> User shares referral.
    03 -> New user signs up with referral.
    04 -> System tracks referred user activity.
    05 -> Reward is granted only after referred user completes 5 paid tasks.
    06 -> Wallet credit is issued.

    TERMINAL STATES:
      - Reward pending
      - Wallet credit granted
      - Referral invalid/blocked

    WHAT COMES AFTER:
      -> MF-04 Task Owner Home
      -> MF-13 Tasker Withdrawal

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Show referral code/link.
- User shares referral.
- New user signs up with referral.
- System tracks referred user activity.
- Reward is granted only after referred user completes 5 paid tasks.
- Wallet credit is issued.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                                            | Recovery / Subflow That Fixes It | User Outcome                                      |
|-----------------------------------------------------------|----------------------------------|---------------------------------------------------|
| Referred user signs up but does not complete 5 paid tasks | Referral pending state           | No reward yet.                                    |
| Self-referral/multi-account abuse suspected               | RiskFlag/admin review            | Reward is blocked or reviewed.                    |
| Wallet credit posting fails                               | Wallet reconciliation            | Reward remains pending until ledger is corrected. |

</div>

<div class="flow-head">

<div>

MF-18

### Profile and Settings Management

</div>

**Account Flow**

</div>

Lets users view and manage profile details, saved addresses, notification preferences, support entry, and logout.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>User opens Profile or Settings from the mobile app.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Authenticated user<br />
User/Profile APIs<br />
Security PIN for sensitive changes</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-01 OTP Verification<br />
SF-02 Complete Profile<br />
SF-10 Status Recovery / Resume</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Profile updated<br />
Settings saved<br />
Logout complete<br />
Update blocked/retry</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-04 Task Owner Home<br />
MF-19 Security and Device Management<br />
MF-20 Notification Center and Preferences<br />
MF-16 Support Live Chat</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-18 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Profile

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Edit Details

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Saved Addresses

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Support / Logout

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Saved

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-18 Flow Path

Flow Diagram

</div>

    ENTRY: User opens Profile or Settings from the mobile app.

    START -> Open Profile/Settings.
    02 -> View profile details.
    03 -> Edit allowed profile fields.
    04 -> Manage saved addresses.
    05 -> Open notification preferences.
    06 -> Open help/support.
    07 -> Logout if needed.
    08 -> Sensitive profile changes use PIN and/or verification rules.

    TERMINAL STATES:
      - Profile updated
      - Settings saved
      - Logout complete
      - Update blocked/retry

    WHAT COMES AFTER:
      -> MF-04 Task Owner Home
      -> MF-19 Security and Device Management
      -> MF-20 Notification Center and Preferences
      -> MF-16 Support Live Chat

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Open Profile/Settings.
- View profile details.
- Edit allowed profile fields.
- Manage saved addresses.
- Open notification preferences.
- Open help/support.
- Logout if needed.
- Sensitive profile changes use PIN and/or verification rules.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                              | Recovery / Subflow That Fixes It | User Outcome                                                    |
|---------------------------------------------|----------------------------------|-----------------------------------------------------------------|
| Phone or email change requires verification | SF-01 OTP Verification           | Contact change is not saved until ownership is verified.        |
| Profile becomes incomplete                  | SF-02 Complete Profile           | Required fields are collected before critical actions continue. |
| Session expires while editing               | MF-03 Login / Session Recovery   | User logs in and resumes safely.                                |

</div>

<div class="flow-head">

<div>

MF-19

### Security and Device Management

</div>

**Security Flow**

</div>

Protects sensitive actions with a Work2Cash PIN and lets users manage active devices/sessions.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>User opens Security settings or starts a sensitive action.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Authenticated user<br />
PIN hash stored securely by backend<br />
User/Profile APIs<br />
OTP for PIN reset</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-01 OTP Verification<br />
SF-10 Status Recovery / Resume</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>PIN confirmed<br />
PIN reset<br />
Sensitive action completed<br />
Sensitive action locked<br />
Session revoked</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-18 Profile and Settings Management<br />
MF-13 Tasker Withdrawal<br />
SF-12 Payout Account Setup</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-19 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Security

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Create / Enter PIN

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Devices

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Revoke Session

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Security Saved

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-19 Flow Path

Flow Diagram

</div>

    ENTRY: User opens Security settings or starts a sensitive action.

    START -> Open Security settings.
    02 -> Create or confirm security PIN.
    03 -> View active devices/sessions.
    04 -> Revoke other sessions where needed.
    05 -> For sensitive action, enter PIN.
    06 -> Backend verifies PIN.
    07 -> Action proceeds or rate-limit/cooldown applies.
    08 -> Forgot PIN uses OTP recovery before setting a new PIN.

    TERMINAL STATES:
      - PIN confirmed
      - PIN reset
      - Sensitive action completed
      - Sensitive action locked
      - Session revoked

    WHAT COMES AFTER:
      -> MF-18 Profile and Settings Management
      -> MF-13 Tasker Withdrawal
      -> SF-12 Payout Account Setup

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Open Security settings.
- Create or confirm security PIN.
- View active devices/sessions.
- Revoke other sessions where needed.
- For sensitive action, enter PIN.
- Backend verifies PIN.
- Action proceeds or rate-limit/cooldown applies.
- Forgot PIN uses OTP recovery before setting a new PIN.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                  | Recovery / Subflow That Fixes It | User Outcome                                                       |
|---------------------------------|----------------------------------|--------------------------------------------------------------------|
| PIN forgotten                   | OTP-based PIN reset              | User verifies account and sets a new PIN.                          |
| Too many failed PIN attempts    | Rate limit/cooldown              | Sensitive actions are temporarily locked.                          |
| Device/session revoke attempted | Session management check         | User can revoke other sessions and receives security notification. |

</div>

<div class="flow-head">

<div>

MF-20

### Notification Center and Preferences

</div>

**Communication Flow**

</div>

Lets users view notifications, open related records, and control non-critical notification preferences.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>User opens Notifications or Notification Preferences.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Authenticated user<br />
FCM<br />
Termii SMS fallback for critical messages<br />
Deep links/app links</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-10 Status Recovery / Resume</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Notification opened<br />
Marked read<br />
Preferences saved<br />
Permission blocked</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-04 Task Owner Home<br />
MF-10 Active Task Execution<br />
MF-16 Support Live Chat<br />
MF-18 Profile and Settings Management</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-20 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Notifications

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Open Alert

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Deep Link

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Preferences

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Saved

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-20 Flow Path

Flow Diagram

</div>

    ENTRY: User opens Notifications or Notification Preferences.

    START -> Open notification center.
    02 -> View all/unread notifications.
    03 -> Open a notification.
    04 -> Deep link to related task, payment, support, report, referral, or security screen.
    05 -> Mark as read.
    06 -> Open preferences.
    07 -> Toggle allowed notification categories.
    08 -> Save preferences.

    TERMINAL STATES:
      - Notification opened
      - Marked read
      - Preferences saved
      - Permission blocked

    WHAT COMES AFTER:
      -> MF-04 Task Owner Home
      -> MF-10 Active Task Execution
      -> MF-16 Support Live Chat
      -> MF-18 Profile and Settings Management

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Open notification center.
- View all/unread notifications.
- Open a notification.
- Deep link to related task, payment, support, report, referral, or security screen.
- Mark as read.
- Open preferences.
- Toggle allowed notification categories.
- Save preferences.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                        | Recovery / Subflow That Fixes It | User Outcome                                                                                      |
|---------------------------------------|----------------------------------|---------------------------------------------------------------------------------------------------|
| Push permission denied                | SF-09 Permission Recovery        | User can enable notifications or rely on in-app view and critical SMS fallback.                   |
| Notification target no longer exists  | Status recovery                  | App shows unavailable/expired state and returns to notifications.                                 |
| Critical alert preference is disabled | Preference guard                 | Critical payment, withdrawal, security, dispute, and active-task alerts cannot be fully disabled. |

</div>

<div class="flow-head">

<div>

MF-21

### Tasker Availability and Work Preferences

</div>

**Tasker Settings Flow**

</div>

Lets approved Taskers control when they are available and what work they prefer without using auto-accept.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Tasker opens availability or work preferences.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Approved TaskerProfile<br />
Location permission<br />
Task catalog<br />
Platform travel-radius cap</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-03 Tasker KYC<br />
SF-04 Location, Address and Pin Confirmation<br />
SF-09 Permission Recovery</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Available<br />
Unavailable<br />
Preferences saved<br />
Availability blocked</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-09 Tasker Browse and Accept Task<br />
MF-10 Active Task Execution</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-21 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Availability

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Working Hours

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Preferred Tasks

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Travel Distance

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Available

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-21 Flow Path

Flow Diagram

</div>

    ENTRY: Tasker opens availability or work preferences.

    START -> Confirm TaskerProfile is active and KYC-approved.
    02 -> Set available/unavailable.
    03 -> Set working hours.
    04 -> Select preferred task categories.
    05 -> Set maximum travel distance within platform cap.
    06 -> Confirm location permission while available.
    07 -> Save preferences.
    08 -> Tasker can browse tasks sorted nearest first.

    TERMINAL STATES:
      - Available
      - Unavailable
      - Preferences saved
      - Availability blocked

    WHAT COMES AFTER:
      -> MF-09 Tasker Browse and Accept Task
      -> MF-10 Active Task Execution

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Confirm TaskerProfile is active and KYC-approved.
- Set available/unavailable.
- Set working hours.
- Select preferred task categories.
- Set maximum travel distance within platform cap.
- Confirm location permission while available.
- Save preferences.
- Tasker can browse tasks sorted nearest first.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                    | Recovery / Subflow That Fixes It | User Outcome                                                                       |
|-----------------------------------|----------------------------------|------------------------------------------------------------------------------------|
| Tasker not KYC-approved           | SF-03 Tasker KYC                 | Availability remains locked until KYC is approved.                                 |
| Location permission denied        | SF-09 Permission Recovery        | Tasker cannot be available/active until location is enabled.                       |
| Auto Accept visible in old design | Deferred feature rule            | Auto Accept is not implemented in MVP because Tasker must confirm arrival ability. |

</div>

<div class="flow-head">

<div>

MF-22

### Ratings and Reviews

</div>

**Trust Flow**

</div>

Collects task-bound ratings after completion and feeds trust, favorites, and moderation.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Task reaches completed/settled state or user opens completed task requiring rating.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Completed task<br />
Rating model<br />
FavoriteTasker model<br />
Admin review moderation</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-08 Report / Dispute</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Rating submitted<br />
Review submitted<br />
Favorite added<br />
Rating skipped<br />
Review reported</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-15 Favorites<br />
MF-24 Rebook / Repeat Task<br />
MF-16 Support Live Chat</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-22 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Rate Task

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Review Tags

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Optional Review

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Favorite Option

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Submitted

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-22 Flow Path

Flow Diagram

</div>

    ENTRY: Task reaches completed/settled state or user opens completed task requiring rating.

    START -> Show rating prompt after completion.
    02 -> Task Owner rates Tasker and may add optional review.
    03 -> Task Owner may add Tasker to Favorites.
    04 -> Tasker rates Task Owner and may add optional review.
    05 -> Backend enforces one rating per actor per completed task.
    06 -> Ratings update Tasker display and Task Owner trust profile.
    07 -> Reported reviews route to admin moderation.

    TERMINAL STATES:
      - Rating submitted
      - Review submitted
      - Favorite added
      - Rating skipped
      - Review reported

    WHAT COMES AFTER:
      -> MF-15 Favorites
      -> MF-24 Rebook / Repeat Task
      -> MF-16 Support Live Chat

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Show rating prompt after completion.
- Task Owner rates Tasker and may add optional review.
- Task Owner may add Tasker to Favorites.
- Tasker rates Task Owner and may add optional review.
- Backend enforces one rating per actor per completed task.
- Ratings update Tasker display and Task Owner trust profile.
- Reported reviews route to admin moderation.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                     | Recovery / Subflow That Fixes It | User Outcome                                           |
|------------------------------------|----------------------------------|--------------------------------------------------------|
| User skips rating                  | Pending rating state             | Rating can be shown later from task history.           |
| Review is abusive or false         | Report review/admin moderation   | Admin can hide/remove while preserving internal audit. |
| Low rating indicates serious issue | SF-08 Report / Dispute           | User can open structured report with evidence.         |

</div>

<div class="flow-head">

<div>

MF-23

### Emergency Support

</div>

**Priority Support Flow**

</div>

Creates a high-priority support path for urgent task, safety, payment, contact, or no-show situations.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>User taps Emergency Support from active task, chat, report issue, or support screen.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Authenticated user<br />
Support live chat/ticket system<br />
FCM admin/support alert<br />
Media upload where evidence is attached</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-05 Media Upload<br />
SF-08 Report / Dispute<br />
SF-10 Status Recovery / Resume</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Emergency chat connected<br />
Priority ticket opened<br />
Report/dispute opened<br />
Escalated<br />
Resolved</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-16 Support Live Chat<br />
MF-12 Cancellation / No-Show<br />
MF-10 Active Task Execution</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-23 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Emergency Support

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Safety Guidance

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Category

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Evidence

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Priority Chat

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-23 Flow Path

Flow Diagram

</div>

    ENTRY: User taps Emergency Support from active task, chat, report issue, or support screen.

    START -> Show safety guidance and platform-support limitation.
    02 -> Select emergency category.
    03 -> Attach evidence where useful.
    04 -> Create high-priority support session or ticket.
    05 -> Wake/alert support/admin where operationally possible.
    06 -> User sees waiting or connected state.
    07 -> Support handles, escalates, or links to report/dispute.

    TERMINAL STATES:
      - Emergency chat connected
      - Priority ticket opened
      - Report/dispute opened
      - Escalated
      - Resolved

    WHAT COMES AFTER:
      -> MF-16 Support Live Chat
      -> MF-12 Cancellation / No-Show
      -> MF-10 Active Task Execution

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Show safety guidance and platform-support limitation.
- Select emergency category.
- Attach evidence where useful.
- Create high-priority support session or ticket.
- Wake/alert support/admin where operationally possible.
- User sees waiting or connected state.
- Support handles, escalates, or links to report/dispute.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break            | Recovery / Subflow That Fixes It | User Outcome                                                        |
|---------------------------|----------------------------------|---------------------------------------------------------------------|
| No support agent online   | Priority ticket fallback         | User sees expected response message and ticket state.               |
| Issue is a formal dispute | SF-08 Report / Dispute           | Support routes to structured report instead of informal resolution. |
| Evidence upload fails     | SF-05 Media Upload               | User can retry or continue with text description.                   |

</div>

<div class="flow-head">

<div>

MF-24

### Rebook / Repeat Task

</div>

**Retention Flow**

</div>

Lets Task Owners create a new task from a completed task while keeping the old task immutable.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Task Owner taps Rebook from completed task detail, task history, favorite Tasker profile, or rating completion screen.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Completed task<br />
Task creation APIs<br />
Payment/escrow funding<br />
Favorite/direct offer system</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>SF-04 Location, Address and Pin Confirmation<br />
SF-05 Media Upload<br />
SF-06 Payment and Escrow Funding</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>New task funded<br />
Direct offer sent<br />
Published to discovery<br />
Rebook abandoned</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>MF-06 Task Owner Create and Fund Task<br />
MF-08 Direct Offer to Favorite Tasker<br />
MF-07 Public Discovery and Tasker Interest</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### MF-24 Screen Connection Map

Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Completed Task

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

01

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Rebook

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

02

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Prefilled Task

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

03

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Review / Pay

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

04

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="phone">

<div class="phone-top">

</div>

<div class="phone-title">

Direct / Public

</div>

<div class="skeleton wide">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="phone-button">

</div>

</div>

05

</div>

</div>

These are simplified screen silhouettes. They show the screen relationship and handoff order, not the final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### MF-24 Flow Path

Flow Diagram

</div>

    ENTRY: Task Owner taps Rebook from completed task detail, task history, favorite Tasker profile, or rating completion screen.

    START -> Open completed task.
    02 -> Tap Rebook.
    03 -> App pre-fills task category, task type, description, location, duration, and previous Tasker where available.
    04 -> Task Owner reviews/edits details.
    05 -> Set new required arrival time.
    06 -> Upload fresh proof where work condition may have changed.
    07 -> Review price and fees.
    08 -> Fund escrow again.
    ...  -> 1 additional steps continue in the happy-path list

    TERMINAL STATES:
      - New task funded
      - Direct offer sent
      - Published to discovery
      - Rebook abandoned

    WHAT COMES AFTER:
      -> MF-06 Task Owner Create and Fund Task
      -> MF-08 Direct Offer to Favorite Tasker
      -> MF-07 Public Discovery and Tasker Interest

This diagram shows the normal path, possible endings, and what flow can come next. The detailed recovery paths are listed below.

</div>

#### Happy Path

- Open completed task.
- Tap Rebook.
- App pre-fills task category, task type, description, location, duration, and previous Tasker where available.
- Task Owner reviews/edits details.
- Set new required arrival time.
- Upload fresh proof where work condition may have changed.
- Review price and fees.
- Fund escrow again.
- Send direct offer to same/favorite Tasker or publish to public discovery.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                         | Recovery / Subflow That Fixes It             | User Outcome                                   |
|----------------------------------------|----------------------------------------------|------------------------------------------------|
| Previous Tasker unavailable/restricted | MF-07 Public Discovery and Tasker Interest   | Task Owner can publish to public discovery.    |
| Old location no longer valid           | SF-04 Location, Address and Pin Confirmation | Task Owner confirms or updates task site.      |
| Payment fails                          | SF-06 Payment and Escrow Funding             | New task is not posted until escrow is funded. |

</div>

</div>

<div id="section-05" class="section section">

<div class="section-num">

05

</div>

<div class="eyebrow">

Recovery

</div>

## Break Recovery Matrix

This matrix shows which subflow repairs the issue when a larger flow breaks. This is the core reason for defining subflows separately.

<div class="table-wrap">

| Break / Incomplete Situation                         | Detected By                                | Recovery Flow                                | Why It Matters                                                                    |
|------------------------------------------------------|--------------------------------------------|----------------------------------------------|-----------------------------------------------------------------------------------|
| User registered but exited before completing profile | Login / Session Recovery                   | SF-02 Complete Profile                       | Prevents accounts from being stuck between registration and Home.                 |
| OTP expired or user did not receive OTP              | Registration/Login                         | SF-01 OTP Verification                       | Allows retry, email-first OTP, and Termii SMS fallback.                           |
| User forgot password                                 | Login                                      | SF-11 Password Recovery                      | Lets the user reset password, revokes existing sessions, and returns to Login.    |
| Tasker tries to accept task without KYC              | Tasker Browse and Accept Task              | SF-03 Tasker KYC                             | Protects trust and prevents unverified Taskers from entering the marketplace.     |
| Task Owner manually enters address                   | Create Task                                | SF-04 Location, Address and Pin Confirmation | Converts address to coordinates and confirms task site is in Nigeria.             |
| GPS denied or inaccurate                             | Create Task / Tasker Availability          | SF-09 Permission Recovery + SF-04 Location   | Keeps user informed and offers manual address where allowed.                      |
| Task proof upload fails                              | Create Task / Completion / Report          | SF-05 Media Upload                           | Prevents task posting or completion from continuing without required proof.       |
| Payment provider redirects late or webhook delays    | Create and Fund Task                       | SF-06 Payment + SF-10 Status Recovery        | Prevents false paid state and keeps escrow accurate.                              |
| Tasker withdraws without payout account              | Tasker Withdrawal                          | SF-12 Payout Account Setup                   | Collects verified payout destination before withdrawal request.                   |
| Sensitive action needs confirmation                  | Profile/Security/Withdrawal/Payout Account | MF-19 Security and Device Management         | Requires Work2Cash PIN and supports OTP-based PIN reset.                          |
| User needs urgent support                            | Active Task / Chat / Report Issue          | MF-23 Emergency Support                      | Creates a priority support ticket/session and links evidence/task context.        |
| Task Owner wants repeat work                         | Completed Task / Rating / Favorites        | MF-24 Rebook / Repeat Task                   | Creates a new task from previous details without mutating the old task.           |
| Task Owner refuses completion                        | Completion and Settlement                  | SF-08 Report / Dispute                       | Moves contested completion into admin review instead of silently blocking payout. |
| Tasker has active dispute during withdrawal          | Tasker Withdrawal                          | Settlement hold / Admin authorization        | Only the affected payout is delayed; normal undisputed earnings can still settle. |
| Socket disconnects during chat/support/tracking      | Communication / Support / Active Task      | SF-10 Status Recovery                        | Refreshes authoritative task/support state from REST after reconnect.             |

</div>

</div>

<div id="section-06" class="section section">

<div class="section-num">

06

</div>

<div class="eyebrow">

Implementation

</div>

## Implementation Notes For Teams

This section translates the flow catalogue into practical implementation rules for product, design, mobile, backend, admin, and QA.

<div class="table-wrap">

| Team    | How To Use This Document                                                                                                                                        |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Product | Use flow IDs when describing requirements. Example: MF-06 Create and Fund Task calls SF-04, SF-05, and SF-06.                                                   |
| Design  | Design subflows as reusable screens/components where possible. Complete Profile, KYC, Media Upload, Payment Status, and Permission Recovery should stand alone. |
| Mobile  | Implement each flow as a recoverable state machine. App resume must fetch backend state and continue from the correct checkpoint.                               |
| Backend | Expose APIs that let the app check current state for user, profile, KYC, task, payment, media, wallet, withdrawal, and report flows.                            |
| Admin   | Admin dashboard should understand the outcomes created by mobile flows: reports, media review, KYC states, payout batches, policy events, risk flags.           |
| QA      | Test happy path, abandoned path, denied permission path, failed provider path, network loss, app close/reopen, and recovery for every main flow.                |

</div>

<div class="callout amber">

**Frontend Loading Rule**

For GET/fetch operations, show skeletonized views. For POST/PATCH/critical submit actions, show a blur overlay with a spinning Work2Cash logo so users know the action is being processed.

</div>

<div class="callout red">

**State Recovery Rule**

No mobile flow should depend only on local device memory. After login, reconnect, app resume, payment return, KYC return, or socket reconnect, the app must ask the backend for the current source-of-truth state.

</div>

</div>

</div>

<div class="footer-inner">

<div>

#### Work2Cash

Mobile flow source document for product, implementation, and QA alignment.

</div>

<div>

#### Source of Truth

This expands the Main Enterprise Architecture v1 document and should be linked from it.

</div>

<div>

#### Security

For GitHub Pages docs, include `../assets/js/guard.js` when publishing under `documents/`.

</div>

</div>


---

# Source Document: Admin Flow Catalogue v1


# Admin Flow Catalogue v1

> AI-agent Markdown equivalent of `admin-flow-catalogue-v1.html`.
>
> Human-readable HTML source: `../admin-flow-catalogue-v1.html`.
> Use this Markdown version for lower-token AI context. If a task needs visual layout or exact document presentation, use the HTML page.

<div class="section cover">

<div class="brand-row">

<div class="logo">

W2C

</div>

<div>

**Work2Cash**Admin Web Flow Catalogue

</div>

</div>

<div class="cover-main">

<div class="label">

Internal Product and Operations Document

</div>

# Admin Flow Catalogue v1

A detailed, non-technical map of the Work2Cash admin dashboard flows, subflows, dependencies, recovery paths and web screen relationships.

<div class="meta-grid">

<div class="meta-card">

Project**Work2Cash**

</div>

<div class="meta-card">

Platform**Admin Web Dashboard**

</div>

<div class="meta-card">

Document Type**Flow Catalogue**

</div>

<div class="meta-card">

Version**1.0**

</div>

</div>

<div class="badges">

<span class="badge">Admin Dashboard</span> <span class="badge">Operations</span> <span class="badge">Finance</span> <span class="badge">Trust and Safety</span> <span class="badge">Support</span> <span class="badge">Monitoring</span>

</div>

</div>

<div class="cover-foot">

Recommended repo location: `documents/admin-flow-catalogue-v1.html` Protected docs pages must include `guard.js`

</div>

</div>

<div class="sticky">

<div class="sticky-inner">

**Work2Cash Admin Flow Catalogue**

[Read](#section-01) [Dependencies](#section-02) [Subflows](#section-03) [Flows](#section-04) [Checklist](#section-05)

</div>

</div>

<div role="main">

<div class="section toc">

<div class="eyebrow">

Navigation

</div>

## Document Map

This document exists so product, operations, finance, support and engineering can agree on what each admin flow does, what it depends on, what breaks it, and what fixes the break.

<div class="toc-grid">

[01. How To Read This Document](#section-01)[02. Admin Flow Dependency Summary](#section-02)[03. Reusable Admin Subflows](#section-03)[04. Detailed Admin Flow Catalogue](#section-04)[05. Handover Checklist](#section-05)

</div>

</div>

<div id="section-01" class="section section">

<div class="section-num">

01

</div>

<div class="eyebrow">

Reader Guide

</div>

## How To Read This Document

Each admin flow is written as a closed operational path. A closed flow has a clear start, a clear end, known dependencies, known failure points, and known next flows.

<div class="callout blue">

**Plain-English Rule**

If an admin cannot finish a task because something is missing, failed, or blocked, the document identifies which subflow helps recover that situation.

</div>

<div class="card-grid">

<div class="card">

Flow

#### Main admin journey

A full dashboard process such as resolving a report, reviewing KYC, reconciling payment or creating a payout batch.

</div>

<div class="card">

Subflow

#### Reusable helper path

A smaller shared pattern used inside many flows, such as filtering lists, reviewing evidence, confirming a reason or retrying a provider event.

</div>

<div class="card">

Recovery

#### What fixes a break

The route that helps the admin continue when a main flow is interrupted by missing data, failed provider events, permission issues or disputes.

</div>

</div>

<div class="diagram">

<div class="diagram-head">

#### Admin Flow Reading Model

Flow Diagram

</div>

    Admin enters a dashboard module
      -> Flow starts
      -> Shared subflows are called when needed
      -> Admin reaches a terminal state
      -> Next flow is opened only if the case needs follow-up

The admin dashboard is not one single linear journey. It is a set of controlled operational flows connected by shared subflows.

</div>

</div>

<div id="section-02" class="section section">

<div class="section-num">

02

</div>

<div class="eyebrow">

Dependency Map

</div>

## Admin Flow Dependency Summary

This table shows what each admin flow depends on and what normally comes after it. It is the fastest way to see ordering and operational handoffs.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr class="header">
<th>Flow</th>
<th>Name</th>
<th>Depends On</th>
<th>Possible Next Flows</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>AF-01</td>
<td>Admin Entry, Login and TOTP</td>
<td>Admin account must already exist<br />
TOTP must be enrolled<br />
ASF-01<br />
ASF-11</td>
<td>AF-02 Dashboard Overview</td>
</tr>
<tr class="even">
<td>AF-02</td>
<td>Admin Dashboard Overview</td>
<td>AF-01<br />
ASF-02<br />
ASF-03<br />
ASF-11</td>
<td>AF-03 User Management<br />
AF-04 KYC Review<br />
AF-05 Task Monitoring<br />
AF-08 Finance<br />
AF-19 Use Case Health</td>
</tr>
<tr class="odd">
<td>AF-03</td>
<td>User Management</td>
<td>AF-01<br />
ASF-02<br />
ASF-03<br />
ASF-04<br />
ASF-05</td>
<td>AF-04 KYC Review<br />
AF-06 Report Resolution<br />
AF-10 Wallet Support<br />
AF-14 Risk Review</td>
</tr>
<tr class="even">
<td>AF-04</td>
<td>Tasker and KYC Review</td>
<td>AF-03<br />
Smile ID provider events<br />
ASF-04<br />
ASF-06<br />
ASF-10</td>
<td>AF-03 User Management<br />
AF-14 Risk Review<br />
AF-19 Provider Monitoring</td>
</tr>
<tr class="odd">
<td>AF-05</td>
<td>Task Operations Monitoring</td>
<td>Mobile task lifecycle<br />
Payment funding state<br />
Location and media records<br />
ASF-03<br />
ASF-04<br />
ASF-06</td>
<td>AF-06 Report Resolution<br />
AF-07 Support Chat<br />
AF-08 Finance<br />
AF-13 Media Review<br />
AF-19 Use Case Health</td>
</tr>
<tr class="even">
<td>AF-06</td>
<td>Task Report and Dispute Resolution</td>
<td>AF-05 Task Monitoring<br />
AF-13 Media Review<br />
AF-14 Risk Rules<br />
ASF-06<br />
ASF-05</td>
<td>AF-09 Payout Batch<br />
AF-10 Wallet Support<br />
AF-14 Risk Review</td>
</tr>
<tr class="odd">
<td>AF-07</td>
<td>Support Live Chat Operations</td>
<td>Socket support channel<br />
AF-03 User Management<br />
ASF-09</td>
<td>AF-06 Report Resolution<br />
AF-08 Finance<br />
AF-10 Wallet Support<br />
AF-14 Risk Review</td>
</tr>
<tr class="even">
<td>AF-08</td>
<td>Finance: Payments, Escrow and Reconciliation</td>
<td>Paystack<br />
Moniepoint<br />
Ledger records<br />
Escrow records<br />
ASF-10</td>
<td>AF-05 Task Monitoring<br />
AF-09 Payout Batch<br />
AF-10 Wallet Support<br />
AF-19 Use Case Health</td>
</tr>
<tr class="odd">
<td>AF-09</td>
<td>Withdrawal and Payout Batch Operations</td>
<td>Tasker withdrawal requests<br />
No active issue/dispute for payout eligibility<br />
Paystack/Moniepoint payout rails<br />
ASF-10</td>
<td>AF-08 Finance Reconciliation<br />
AF-14 Risk Review<br />
AF-18 Audit Log Review</td>
</tr>
<tr class="even">
<td>AF-10</td>
<td>Wallet, Refund and Excess Funding Support</td>
<td>AF-03 User Management<br />
AF-08 Finance<br />
Wallet ledger<br />
Support policy</td>
<td>AF-07 Support Chat<br />
AF-08 Finance<br />
AF-18 Audit Log Review</td>
</tr>
<tr class="odd">
<td>AF-11</td>
<td>Task Catalog Management</td>
<td>Product approval<br />
Remote/mobile config publication<br />
ASF-05</td>
<td>AF-16 Remote Config<br />
AF-18 Audit Log Review</td>
</tr>
<tr class="even">
<td>AF-12</td>
<td>Service Coverage Configuration</td>
<td>Nigeria-only operating policy<br />
Geocoding/location rules<br />
ASF-05<br />
AF-16</td>
<td>AF-16 Remote Config<br />
AF-05 Task Monitoring</td>
</tr>
<tr class="odd">
<td>AF-13</td>
<td>Task Media Moderation</td>
<td>TaskProof/TaskMedia records<br />
Report evidence<br />
Permission-controlled media access</td>
<td>AF-06 Report Resolution<br />
AF-14 Risk Review<br />
AF-19 Monitoring</td>
</tr>
<tr class="even">
<td>AF-14</td>
<td>Risk, Trust, Warning and Strike Review</td>
<td>Penalty policy<br />
Report outcomes<br />
Task events<br />
Communication audit flags<br />
ASF-05</td>
<td>AF-03 User Management<br />
AF-06 Report Resolution<br />
AF-07 Support Chat<br />
AF-18 Audit Log Review</td>
</tr>
<tr class="odd">
<td>AF-15</td>
<td>Referral Management</td>
<td>Referral code tracking<br />
Completed paid task count<br />
Wallet credit policy</td>
<td>AF-08 Finance<br />
AF-14 Risk Review<br />
AF-18 Audit Log Review</td>
</tr>
<tr class="even">
<td>AF-16</td>
<td>Platform Config and Remote Config</td>
<td>Technical Lead-approved config list<br />
Environment separation<br />
ASF-05</td>
<td>AF-11 Catalog<br />
AF-12 Coverage<br />
AF-19 Use Case Health<br />
AF-18 Audit Log Review</td>
</tr>
<tr class="odd">
<td>AF-17</td>
<td>Admin Users, Roles and Permissions</td>
<td>AF-01<br />
High-level RBAC permission<br />
ASF-02<br />
ASF-05</td>
<td>AF-18 Audit Log Review<br />
AF-19 Monitoring</td>
</tr>
<tr class="even">
<td>AF-18</td>
<td>Audit Log Review</td>
<td>Audit events from all admin flows<br />
ASF-03<br />
ASF-08</td>
<td>AF-03 User Management<br />
AF-08 Finance<br />
AF-14 Risk Review<br />
AF-17 Admin Users</td>
</tr>
<tr class="odd">
<td>AF-19</td>
<td>Use Case Health and Background Job Monitoring</td>
<td>Backend use case tracking<br />
BullMQ<br />
Valkey<br />
Provider adapters<br />
Sentry</td>
<td>AF-08 Finance<br />
AF-20 Monitoring and Incident Readiness<br />
AF-18 Audit Log Review</td>
</tr>
<tr class="even">
<td>AF-20</td>
<td>Monitoring, Backup and Incident Readiness</td>
<td>Self-hosted services<br />
Backup jobs<br />
Provider status<br />
Technical Lead runbooks</td>
<td>AF-19 Use Case Health<br />
AF-07 Support Chat<br />
AF-18 Audit Log Review</td>
</tr>
<tr class="odd">
<td>AF-21</td>
<td>Notifications and Announcements</td>
<td>FCM<br />
Email provider<br />
Termii for critical SMS only<br />
Notification preferences<br />
ASF-05</td>
<td>AF-18 Audit Log Review<br />
AF-19 Use Case Health<br />
AF-20 Monitoring and Incident Readiness</td>
</tr>
<tr class="even">
<td>AF-22</td>
<td>Ratings and Reviews Management</td>
<td>Task-bound ratings<br />
Completed tasks<br />
Risk/trust profile<br />
Report/dispute system<br />
ASF-05</td>
<td>AF-06 Report Resolution<br />
AF-14 Risk Review<br />
AF-18 Audit Log Review</td>
</tr>
<tr class="odd">
<td>AF-23</td>
<td>Basic Analytics and Reports</td>
<td>Aggregated operational data<br />
RBAC export permissions<br />
Use case logs<br />
Finance/task/support/report records</td>
<td>AF-08 Finance<br />
AF-18 Audit Log Review<br />
AF-19 Use Case Health</td>
</tr>
<tr class="even">
<td>AF-24</td>
<td>Receipt and Transaction Review</td>
<td>Wallet ledger<br />
Payment records<br />
Provider references<br />
Webhook events<br />
RBAC export permissions</td>
<td>AF-08 Finance<br />
AF-10 Wallet Support<br />
AF-06 Report Resolution<br />
AF-18 Audit Log Review</td>
</tr>
</tbody>
</table>

</div>

<div class="callout green">

**Implementation Note**

Backend contracts for the admin dashboard should expose stable list, detail, action, audit and export endpoints early, so the admin frontend can build screen flows without waiting for every provider integration to be complete.

</div>

</div>

<div id="section-03" class="section section">

<div class="section-num">

03

</div>

<div class="eyebrow">

Reusable Building Blocks

</div>

## Reusable Admin Subflows

These subflows are not standalone departments. They are shared dashboard behaviors used inside many admin journeys. They reduce duplicated UX and make admin actions predictable.

<div class="card-grid">

<div class="card">

ASF-01

#### Admin Login and TOTP Verification

**Purpose:** Confirms that the person entering the dashboard is an approved admin and has passed the second-factor check.

**Recovery role:** Repairs broken access caused by expired sessions, wrong passwords, missing TOTP, or an admin trying to open a protected page directly.

**Used by:** AF-01, every protected admin page through the auth guard

</div>

<div class="card">

ASF-02

#### RBAC Permission Gate

**Purpose:** Checks whether the logged-in admin is allowed to view a module or perform a specific action.

**Recovery role:** Prevents unauthorized finance, role, suspension, payout, refund, or configuration actions from being completed.

**Used by:** AF-02 to AF-24

</div>

<div class="card">

ASF-03

#### List, Search, Filter and Pagination

**Purpose:** Provides the shared way admins browse long operational queues and find records quickly.

**Recovery role:** Repairs operational blockage when the list is too large, the admin needs a specific record, or a queue must be narrowed by status, date, city, provider, risk level, or category.

**Used by:** Users, tasks, KYC, reports, finance, payouts, media, referrals, audit logs and monitoring

</div>

<div class="card">

ASF-04

#### Record Detail Review

**Purpose:** Opens the full context of one user, task, payment, withdrawal, report, media item, or provider event.

**Recovery role:** Prevents decisions from being made from summary tables only. It gives the admin enough context before acting.

**Used by:** Most review and operations flows

</div>

<div class="card">

ASF-05

#### Reason and Audit Confirmation

**Purpose:** Requires the admin to provide a reason before high-impact decisions are saved.

**Recovery role:** Creates traceability when an admin suspends a user, rejects KYC, resolves a dispute, retries a payment, changes a wallet, or publishes configuration.

**Used by:** Risk, finance, support, task, KYC, media and settings flows

</div>

<div class="card">

ASF-06

#### Evidence and Media Review

**Purpose:** Lets the admin inspect task proof, completion proof, report evidence, and unsafe uploads.

**Recovery role:** Repairs disputes where the written report is not enough by letting operations inspect photos, videos and metadata.

**Used by:** AF-04, AF-05, AF-06, AF-13, AF-14

</div>

<div class="card">

ASF-07

#### Status Change and Decision Action

**Purpose:** Provides the common approve, reject, resolve, enable, disable, suspend, publish and retry pattern.

**Recovery role:** Keeps admin actions consistent across modules and prevents half-completed decisions from leaving records in unclear states.

**Used by:** KYC, tasks, reports, payouts, refunds, media, risk, referrals, config and monitoring

</div>

<div class="card">

ASF-08

#### Export and Report Generation

**Purpose:** Generates CSV/PDF-style operational exports for finance, disputes, audit, payout and monitoring reviews.

**Recovery role:** Supports management review, reconciliation and external accountant/legal follow-up without giving direct database access.

**Used by:** AF-08, AF-09, AF-14, AF-18, AF-19, AF-20, AF-23, AF-24

</div>

<div class="card">

ASF-09

#### Support Live Chat Assignment

**Purpose:** Assigns incoming live support sessions to an available admin and shows user/task context beside the conversation.

**Recovery role:** Repairs user problems that cannot be solved by automated flows, especially payment confusion, task issues and safety reports.

**Used by:** AF-07, AF-10, AF-14

</div>

<div class="card">

ASF-10

#### Provider Reconciliation and Retry

**Purpose:** Checks provider events against Work2Cash records and retries failed safe operations where allowed.

**Recovery role:** Fixes mismatches from Paystack, Moniepoint, Smile ID, Termii, FCM, masked call provider, webhooks, BullMQ jobs and payout batches.

**Used by:** AF-04, AF-08, AF-09, AF-19

</div>

<div class="card">

ASF-11

#### Empty, Loading and Error Recovery

**Purpose:** Standardizes admin UI states: skeletonized pages for fetching and blur overlay with spinning Work2Cash logo for POST/PATCH actions.

**Recovery role:** Prevents duplicate submissions and makes failed loading states understandable to non-technical operators.

**Used by:** All admin flows

</div>

</div>

</div>

<div id="section-04" class="section section">

<div class="section-num">

04

</div>

<div class="eyebrow">

Flow Catalogue

</div>

## Detailed Admin Flow Catalogue

Each flow below explains the purpose, entry trigger, dependencies, screen silhouettes, normal path, breakpoints, recovery path and what comes after.

<div class="flow-head">

<div>

AF-01

### Admin Entry, Login and TOTP

</div>

**Access Control**

</div>

This flow controls entry into the admin dashboard. It is the first gate before any operational, finance, support, risk or configuration work can happen.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens the admin website or a direct protected document/dashboard URL.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Admin account must already exist<br />
TOTP must be enrolled<br />
ASF-01<br />
ASF-11</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-01 Admin Login and TOTP Verification<br />
ASF-11 Empty, Loading and Error Recovery</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Dashboard session created<br />
Login failed<br />
Admin account disabled</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-02 Dashboard Overview</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-01 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Admin Login

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

TOTP Verify

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Session Created

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Dashboard

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-01 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens the admin website or a direct protected document/dashboard URL.

    START -> Admin lands on the login screen.
    02 -> Admin enters email and password.
    03 -> System validates credentials and confirms the admin account is active.
    04 -> System requests the TOTP code from the admin authenticator app.
    05 -> Admin enters the TOTP code.
    06 -> System creates a secure dashboard session.
    07 -> System records login metadata for audit review.
    08 -> Admin is routed to the dashboard overview.

    TERMINAL STATES:
      - Dashboard session created
      - Login failed
      - Admin account disabled

    WHAT COMES AFTER:
      -> AF-02 Dashboard Overview

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin lands on the login screen.
- Admin enters email and password.
- System validates credentials and confirms the admin account is active.
- System requests the TOTP code from the admin authenticator app.
- Admin enters the TOTP code.
- System creates a secure dashboard session.
- System records login metadata for audit review.
- Admin is routed to the dashboard overview.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                              | Recovery / Subflow That Fixes It                        | Admin Outcome                                         |
|---------------------------------------------|---------------------------------------------------------|-------------------------------------------------------|
| Wrong password                              | ASF-01 blocks login and shows safe error message        | No session is created                                 |
| Missing or wrong TOTP                       | ASF-01 keeps admin on TOTP screen                       | Admin retries or contacts Technical Lead              |
| Direct protected URL opened without session | Auth guard stores intended URL and sends admin to login | Admin returns to intended page after successful login |

</div>

<div class="flow-head">

<div>

AF-02

### Admin Dashboard Overview

</div>

**Operations Hub**

</div>

This is the central landing page for the web dashboard. It shows platform health, important queues, risk signals and shortcuts into operational modules.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin successfully logs in or returns to the dashboard from another module.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>AF-01<br />
ASF-02<br />
ASF-03<br />
ASF-11</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-02 RBAC Permission Gate<br />
ASF-03 List, Search, Filter and Pagination<br />
ASF-11 Empty, Loading and Error Recovery</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Admin remains on dashboard<br />
Admin enters a module<br />
Admin is blocked by permission gate</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-03 User Management<br />
AF-04 KYC Review<br />
AF-05 Task Monitoring<br />
AF-08 Finance<br />
AF-19 Use Case Health</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-02 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Dashboard Overview

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Alert Cards

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Metrics Detail

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Module Drilldown

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-02 Flow Path

Flow Diagram

</div>

    ENTRY: Admin successfully logs in or returns to the dashboard from another module.

    START -> Dashboard loads platform summary cards.
    02 -> System shows active tasks, pending KYC, open reports, support chats, withdrawal requests and failed provider events.
    03 -> Admin reviews alerts sorted by urgency.
    04 -> Admin clicks a metric card or alert.
    05 -> System checks permission for the selected module.
    06 -> Admin is routed to the relevant queue or detail page.

    TERMINAL STATES:
      - Admin remains on dashboard
      - Admin enters a module
      - Admin is blocked by permission gate

    WHAT COMES AFTER:
      -> AF-03 User Management
      -> AF-04 KYC Review
      -> AF-05 Task Monitoring
      -> AF-08 Finance
      -> AF-19 Use Case Health

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Dashboard loads platform summary cards.
- System shows active tasks, pending KYC, open reports, support chats, withdrawal requests and failed provider events.
- Admin reviews alerts sorted by urgency.
- Admin clicks a metric card or alert.
- System checks permission for the selected module.
- Admin is routed to the relevant queue or detail page.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                         | Recovery / Subflow That Fixes It             | Admin Outcome                                         |
|----------------------------------------|----------------------------------------------|-------------------------------------------------------|
| Dashboard metrics fail to load         | ASF-11 shows skeleton then retry/error state | Admin can retry without leaving the dashboard         |
| Admin lacks permission for a metric    | ASF-02 blocks access                         | Metric can be hidden or shown read-only based on role |
| Alert points to deleted/changed record | ASF-04 record review shows unavailable state | Admin returns to dashboard or audit log               |

</div>

<div class="flow-head">

<div>

AF-03

### User Management

</div>

**People Operations**

</div>

This flow lets admins inspect users, understand whether they are Task Owners, Taskers or both, review sessions/devices, and apply account-level controls.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens Users from dashboard, search, support context, report context, or task detail.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>AF-01<br />
ASF-02<br />
ASF-03<br />
ASF-04<br />
ASF-05</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-02 RBAC Permission Gate<br />
ASF-03 List/Search/Filter<br />
ASF-04 Record Detail Review<br />
ASF-05 Reason and Audit Confirmation</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>User reviewed<br />
User status changed<br />
No action taken<br />
Case escalated</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-04 KYC Review<br />
AF-06 Report Resolution<br />
AF-10 Wallet Support<br />
AF-14 Risk Review</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-03 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Users List

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

User Detail

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Sessions and Devices

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Status Action

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Audit Result

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-03 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens Users from dashboard, search, support context, report context, or task detail.

    START -> Admin opens the users list.
    02 -> Admin searches or filters by name, phone, email, role, status, trust/risk state or KYC state.
    03 -> Admin opens a user record.
    04 -> System shows profile, Task Owner wallet, Tasker wallet, sessions, devices, task history, reports and risk events.
    05 -> Admin chooses a permitted action such as view sessions, disable device, suspend/reactivate account or add support note.
    06 -> System requests reason when the action is high-impact.
    07 -> System applies the action and records it in the audit log.

    TERMINAL STATES:
      - User reviewed
      - User status changed
      - No action taken
      - Case escalated

    WHAT COMES AFTER:
      -> AF-04 KYC Review
      -> AF-06 Report Resolution
      -> AF-10 Wallet Support
      -> AF-14 Risk Review

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens the users list.
- Admin searches or filters by name, phone, email, role, status, trust/risk state or KYC state.
- Admin opens a user record.
- System shows profile, Task Owner wallet, Tasker wallet, sessions, devices, task history, reports and risk events.
- Admin chooses a permitted action such as view sessions, disable device, suspend/reactivate account or add support note.
- System requests reason when the action is high-impact.
- System applies the action and records it in the audit log.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                         | Recovery / Subflow That Fixes It             | Admin Outcome                                     |
|----------------------------------------|----------------------------------------------|---------------------------------------------------|
| User cannot be found                   | ASF-03 filters and search states guide admin | Admin can clear filters or escalate to support    |
| Suspension is attempted without reason | ASF-05 blocks save                           | No account state changes until reason is supplied |
| Admin lacks account-control permission | ASF-02 blocks action                         | Admin can still view permitted read-only data     |

</div>

<div class="flow-head">

<div>

AF-04

### Tasker and KYC Review

</div>

**Trust and Compliance**

</div>

This flow manages the operational review of Tasker activation, Smile ID outcomes, identity mismatch cases and manual KYC checks.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens pending KYC queue, failed Smile ID queue, or a Tasker profile from user management.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>AF-03<br />
Smile ID provider events<br />
ASF-04<br />
ASF-06<br />
ASF-10</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-04 Record Detail Review<br />
ASF-06 Evidence and Media Review<br />
ASF-07 Status Change<br />
ASF-10 Provider Reconciliation</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Tasker approved<br />
Tasker rejected<br />
Re-verification requested<br />
Manual review pending</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-03 User Management<br />
AF-14 Risk Review<br />
AF-19 Provider Monitoring</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-04 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

KYC Queue

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Tasker Detail

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Identity Evidence

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Approve or Reject

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Tasker Status

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-04 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens pending KYC queue, failed Smile ID queue, or a Tasker profile from user management.

    START -> Admin opens the KYC queue.
    02 -> Admin filters by pending, failed, manual review, approved or rejected.
    03 -> Admin opens the Tasker KYC detail page.
    04 -> System shows NIN/BVN submission status, biometric match result, profile data, skills and provider event history.
    05 -> Admin reviews identity evidence and failure reasons where available.
    06 -> Admin approves, rejects, requests re-verification, or escalates the case.
    07 -> System updates TaskerProfile activation state and records the decision.

    TERMINAL STATES:
      - Tasker approved
      - Tasker rejected
      - Re-verification requested
      - Manual review pending

    WHAT COMES AFTER:
      -> AF-03 User Management
      -> AF-14 Risk Review
      -> AF-19 Provider Monitoring

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens the KYC queue.
- Admin filters by pending, failed, manual review, approved or rejected.
- Admin opens the Tasker KYC detail page.
- System shows NIN/BVN submission status, biometric match result, profile data, skills and provider event history.
- Admin reviews identity evidence and failure reasons where available.
- Admin approves, rejects, requests re-verification, or escalates the case.
- System updates TaskerProfile activation state and records the decision.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                      | Recovery / Subflow That Fixes It                      | Admin Outcome                                                                             |
|-------------------------------------|-------------------------------------------------------|-------------------------------------------------------------------------------------------|
| Smile ID webhook missing or delayed | ASF-10 provider reconciliation checks provider status | Admin sees whether to wait, retry, or request resubmission                                |
| Evidence is unclear                 | ASF-06 supports manual review                         | Admin can escalate or request resubmission                                                |
| Admin requests re-verification      | ASF-05 requires reason and note                       | Tasker activation remains blocked until the required KYC step is resubmitted and resolved |
| Admin rejects without explanation   | ASF-05 requires reason                                | Tasker receives a clear next step                                                         |

</div>

<div class="flow-head">

<div>

AF-05

### Task Operations Monitoring

</div>

**Marketplace Operations**

</div>

This flow gives admins a live operational view of tasks across creation, funding, acceptance, en route, arrived, in progress, completed, cancelled and disputed states.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens task monitor from dashboard, search, report, support case, or finance record.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Mobile task lifecycle<br />
Payment funding state<br />
Location and media records<br />
ASF-03<br />
ASF-04<br />
ASF-06</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-03 List/Search/Filter<br />
ASF-04 Record Detail Review<br />
ASF-06 Evidence and Media Review<br />
ASF-07 Status Change</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Task reviewed<br />
Task escalated<br />
Task operational action completed</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-06 Report Resolution<br />
AF-07 Support Chat<br />
AF-08 Finance<br />
AF-13 Media Review<br />
AF-19 Use Case Health</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-05 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Task Monitor

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Task Detail

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Timeline and Location

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Operational Action

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Escalation

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-05 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens task monitor from dashboard, search, report, support case, or finance record.

    START -> Admin opens the task monitor.
    02 -> Admin filters by task state, city/zone, category, payment state, Task Owner, Tasker, risk flag or date.
    03 -> Admin opens a task detail page.
    04 -> System shows task summary, timeline, accepted Tasker, arrival commitment, location, payment/escrow state, proof media and communication audit signals.
    05 -> Admin reviews current risk or operational blockage.
    06 -> Admin may force cancel a task where policy permits, with elevated permission, reason, note, impact preview, notifications and audit.
    07 -> Admin escalates to support, report resolution, finance, media review or risk review where needed.

    TERMINAL STATES:
      - Task reviewed
      - Task escalated
      - Task operational action completed

    WHAT COMES AFTER:
      -> AF-06 Report Resolution
      -> AF-07 Support Chat
      -> AF-08 Finance
      -> AF-13 Media Review
      -> AF-19 Use Case Health

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens the task monitor.
- Admin filters by task state, city/zone, category, payment state, Task Owner, Tasker, risk flag or date.
- Admin opens a task detail page.
- System shows task summary, timeline, accepted Tasker, arrival commitment, location, payment/escrow state, proof media and communication audit signals.
- Admin reviews current risk or operational blockage.
- Admin may force cancel a task where policy permits, with elevated permission, reason, note, impact preview, notifications and audit.
- Admin escalates to support, report resolution, finance, media review or risk review where needed.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                          | Recovery / Subflow That Fixes It                                  | Admin Outcome                                                                                                                                 |
|-----------------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Task state looks stuck                  | ASF-04 shows timeline and last backend use case result            | Admin can escalate to AF-19 Use Case Health                                                                                                   |
| Proof media missing                     | ASF-06 shows media requirement state                              | Admin can contact support or move to dispute resolution                                                                                       |
| Payment funded but task not progressing | AF-08 finance and AF-07 support flows handle follow-up            | Admin can resolve user-facing blockage                                                                                                        |
| Task must be force-cancelled            | Elevated permission + ASF-05 reason/audit + policy impact preview | Task is cancelled without bypassing wallet, escrow, penalty, refund or notification rules                                                     |
| Replacement Tasker is needed            | Admin reassignment is blocked                                     | Tasker cancellation or Task Owner rejection returns task to matching/broadcasting where policy allows; admin cannot choose replacement Tasker |

</div>

<div class="flow-head">

<div>

AF-06

### Task Report and Dispute Resolution

</div>

**Trust Operations**

</div>

This flow resolves reports linked to tasks, including refusal to approve completion, unsafe behavior, no-show, off-platform solicitation, proof disputes and cancellation disagreements.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens Reports from dashboard or from a task/user detail page.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>AF-05 Task Monitoring<br />
AF-13 Media Review<br />
AF-14 Risk Rules<br />
ASF-06<br />
ASF-05</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-06 Evidence and Media Review<br />
ASF-05 Reason and Audit Confirmation<br />
ASF-07 Status Change<br />
ASF-09 Support Assignment</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Report resolved<br />
More information requested<br />
Escalated<br />
Timed out by policy</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-09 Payout Batch<br />
AF-10 Wallet Support<br />
AF-14 Risk Review</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-06 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Reports Queue

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Report Detail

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Evidence Review

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Decision

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Resolution Notice

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-06 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens Reports from dashboard or from a task/user detail page.

    START -> Admin opens the report queue.
    02 -> Admin filters by report type, urgency, linked task, user, state or age.
    03 -> Admin opens report detail.
    04 -> System shows linked task, Task Owner, Tasker, timeline, media, cancellation/no-show events, penalties and prior warnings/strikes.
    05 -> Admin reviews evidence and policy rules.
    06 -> Admin selects a resolution: uphold report, reject report, apply warning/strike, release escrow, hold payout, request more info or escalate.
    07 -> System records decision, notifies affected parties and updates related task/wallet/risk states.

    TERMINAL STATES:
      - Report resolved
      - More information requested
      - Escalated
      - Timed out by policy

    WHAT COMES AFTER:
      -> AF-09 Payout Batch
      -> AF-10 Wallet Support
      -> AF-14 Risk Review

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens the report queue.
- Admin filters by report type, urgency, linked task, user, state or age.
- Admin opens report detail.
- System shows linked task, Task Owner, Tasker, timeline, media, cancellation/no-show events, penalties and prior warnings/strikes.
- Admin reviews evidence and policy rules.
- Admin selects a resolution: uphold report, reject report, apply warning/strike, release escrow, hold payout, request more info or escalate.
- System records decision, notifies affected parties and updates related task/wallet/risk states.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                 | Recovery / Subflow That Fixes It                            | Admin Outcome                                    |
|--------------------------------|-------------------------------------------------------------|--------------------------------------------------|
| Report lacks evidence          | ASF-09 support can request more information                 | Report remains pending until evidence or timeout |
| Dispute affects payout         | AF-09 payout batch excludes or holds affected Tasker payout | Non-disputed payouts continue normally           |
| Decision would penalize a user | ASF-05 reason is required                                   | Decision is auditable                            |

</div>

<div class="flow-head">

<div>

AF-07

### Support Live Chat Operations

</div>

**Customer Operations**

</div>

This flow lets admins handle user support conversations from the web dashboard. It is separate from task-user chat and is used when users need direct support.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>User opens live support from the mobile app or admin opens a support case from another module.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Socket support channel<br />
AF-03 User Management<br />
ASF-09</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-09 Support Live Chat Assignment<br />
ASF-04 Record Detail Review<br />
ASF-05 Reason and Audit Confirmation</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Chat closed<br />
Chat escalated<br />
User disconnected<br />
Case linked to another flow</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-06 Report Resolution<br />
AF-08 Finance<br />
AF-10 Wallet Support<br />
AF-14 Risk Review</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-07 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Support Queue

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Assigned Chat

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

User Context

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Support Action

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Close or Escalate

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-07 Flow Path

Flow Diagram

</div>

    ENTRY: User opens live support from the mobile app or admin opens a support case from another module.

    START -> Support queue receives a new chat request.
    02 -> Admin accepts or is assigned the conversation.
    03 -> System displays user profile, recent tasks, payment records, reports and risk notes beside the chat.
    04 -> Admin responds and selects a support category.
    05 -> Admin may link the chat to a task, report, payment or wallet case.
    06 -> Admin closes the chat with a resolution note or escalates to another admin flow.

    TERMINAL STATES:
      - Chat closed
      - Chat escalated
      - User disconnected
      - Case linked to another flow

    WHAT COMES AFTER:
      -> AF-06 Report Resolution
      -> AF-08 Finance
      -> AF-10 Wallet Support
      -> AF-14 Risk Review

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Support queue receives a new chat request.
- Admin accepts or is assigned the conversation.
- System displays user profile, recent tasks, payment records, reports and risk notes beside the chat.
- Admin responds and selects a support category.
- Admin may link the chat to a task, report, payment or wallet case.
- Admin closes the chat with a resolution note or escalates to another admin flow.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break               | Recovery / Subflow That Fixes It    | Admin Outcome                           |
|------------------------------|-------------------------------------|-----------------------------------------|
| No admin is available        | Queue remains visible with SLA age  | Project Lead can reassign or prioritize |
| User raises payment issue    | Admin links chat to AF-08 or AF-10  | Finance context is preserved            |
| User reports unsafe behavior | Admin links chat to AF-06 and AF-14 | Risk context is preserved               |

</div>

<div class="flow-head">

<div>

AF-08

### Finance: Payments, Escrow and Reconciliation

</div>

**Finance Operations**

</div>

This flow tracks Paystack and Moniepoint payments, escrow funding, provider webhooks, ledger entries and failed reconciliation cases.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens finance dashboard from dashboard alert, task detail, support chat or failed provider event.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Paystack<br />
Moniepoint<br />
Ledger records<br />
Escrow records<br />
ASF-10</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-03 List/Search/Filter<br />
ASF-04 Record Detail Review<br />
ASF-10 Provider Reconciliation and Retry<br />
ASF-08 Export</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Payment reconciled<br />
Payment pending<br />
Manual finance review<br />
Provider failure escalated</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-05 Task Monitoring<br />
AF-09 Payout Batch<br />
AF-10 Wallet Support<br />
AF-19 Use Case Health</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-08 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Finance Dashboard

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Payment Detail

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Webhook Log

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Reconcile or Retry

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Ledger Result

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-08 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens finance dashboard from dashboard alert, task detail, support chat or failed provider event.

    START -> Admin opens finance dashboard.
    02 -> Admin filters payments by provider, state, task, user, date, amount or webhook status.
    03 -> Admin opens a payment detail page.
    04 -> System shows provider reference, internal ledger, escrow state, webhook history and task linkage.
    05 -> Admin compares provider event against Work2Cash ledger.
    06 -> Admin retries safe reconciliation or escalates if manual review is required.
    07 -> System records the outcome and updates affected task/wallet states where allowed.

    TERMINAL STATES:
      - Payment reconciled
      - Payment pending
      - Manual finance review
      - Provider failure escalated

    WHAT COMES AFTER:
      -> AF-05 Task Monitoring
      -> AF-09 Payout Batch
      -> AF-10 Wallet Support
      -> AF-19 Use Case Health

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens finance dashboard.
- Admin filters payments by provider, state, task, user, date, amount or webhook status.
- Admin opens a payment detail page.
- System shows provider reference, internal ledger, escrow state, webhook history and task linkage.
- Admin compares provider event against Work2Cash ledger.
- Admin retries safe reconciliation or escalates if manual review is required.
- System records the outcome and updates affected task/wallet states where allowed.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                                        | Recovery / Subflow That Fixes It               | Admin Outcome                         |
|-------------------------------------------------------|------------------------------------------------|---------------------------------------|
| Provider webhook received but ledger not updated      | ASF-10 compares provider and internal state    | Safe retry or manual review           |
| Task Owner says payment was made but task is unfunded | AF-07 support links the case to finance detail | Admin reconciles or requests proof    |
| Provider is down                                      | AF-19 monitors failures and queues retry       | Admin avoids duplicate manual actions |

</div>

<div class="flow-head">

<div>

AF-09

### Withdrawal and Payout Batch Operations

</div>

**Finance Operations**

</div>

This flow manages Tasker withdrawal requests and bulk payout batches. Work2Cash pays eligible Tasker withdrawal requests on the 14th and 28th of each month.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens withdrawal queue or scheduled payout batch day arrives.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Tasker withdrawal requests<br />
No active issue/dispute for payout eligibility<br />
Paystack/Moniepoint payout rails<br />
ASF-10</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-03 List/Search/Filter<br />
ASF-04 Record Detail Review<br />
ASF-05 Reason and Audit Confirmation<br />
ASF-10 Provider Reconciliation</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Batch paid<br />
Batch partially paid<br />
Batch failed<br />
Items held for dispute/admin approval</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-08 Finance Reconciliation<br />
AF-14 Risk Review<br />
AF-18 Audit Log Review</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-09 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Withdrawal Queue

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Payout Batch

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Batch Review

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Bulk Transfer

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Batch Result

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-09 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens withdrawal queue or scheduled payout batch day arrives.

    START -> Admin opens withdrawal queue.
    02 -> System shows pending withdrawal requests, eligible Taskers, held payouts and disputed exclusions.
    03 -> Admin creates or opens the payout batch for the 14th or 28th.
    04 -> System groups eligible requests by provider rail and validates balances.
    05 -> Admin reviews batch totals, exclusions, fees and failed validations.
    06 -> Admin confirms bulk payout action.
    07 -> System sends payout instructions through Paystack or Moniepoint and records provider responses.
    08 -> Admin reviews batch result and retries failed safe items where allowed.

    TERMINAL STATES:
      - Batch paid
      - Batch partially paid
      - Batch failed
      - Items held for dispute/admin approval

    WHAT COMES AFTER:
      -> AF-08 Finance Reconciliation
      -> AF-14 Risk Review
      -> AF-18 Audit Log Review

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens withdrawal queue.
- System shows pending withdrawal requests, eligible Taskers, held payouts and disputed exclusions.
- Admin creates or opens the payout batch for the 14th or 28th.
- System groups eligible requests by provider rail and validates balances.
- Admin reviews batch totals, exclusions, fees and failed validations.
- Admin confirms bulk payout action.
- System sends payout instructions through Paystack or Moniepoint and records provider responses.
- Admin reviews batch result and retries failed safe items where allowed.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                    | Recovery / Subflow That Fixes It                 | Admin Outcome                       |
|-----------------------------------|--------------------------------------------------|-------------------------------------|
| Tasker has active dispute         | Payout item is held until admin authorization    | Non-disputed Taskers remain payable |
| Bulk transfer partially fails     | ASF-10 reconciles item-by-item provider response | Successful items are not duplicated |
| Admin tries payout outside policy | ASF-02 and ASF-05 enforce permission and reason  | Action is blocked or audited        |

</div>

<div class="flow-head">

<div>

AF-10

### Wallet, Refund and Excess Funding Support

</div>

**Finance Support**

</div>

This flow handles Task Owner wallet support, excess deposit cases, escrow questions and refund-like support cases. Task Owners cannot withdraw directly from the app.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Support, finance or user management opens a wallet case.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>AF-03 User Management<br />
AF-08 Finance<br />
Wallet ledger<br />
Support policy</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-04 Record Detail Review<br />
ASF-05 Reason and Audit Confirmation<br />
ASF-09 Support Assignment<br />
ASF-10 Provider Reconciliation</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Case resolved<br />
Manual review pending<br />
User guided to support policy<br />
Provider reconciliation pending</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-07 Support Chat<br />
AF-08 Finance<br />
AF-18 Audit Log Review</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-10 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Wallet Case Queue

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Ledger Review

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Support Request

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Adjustment Decision

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Case Closed

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-10 Flow Path

Flow Diagram

</div>

    ENTRY: Support, finance or user management opens a wallet case.

    START -> Admin opens wallet case queue or a user wallet detail.
    02 -> System shows Task Owner wallet, Tasker wallet, ledger entries, escrow holds and linked tasks.
    03 -> Admin identifies whether the issue is excess funding, failed funding, refund request, duplicate payment or ledger confusion.
    04 -> Admin reviews provider references and task state.
    05 -> Admin decides whether to guide user to use funds on tasks, escalate, or request approved manual handling.
    06 -> System records support resolution and audit reason.

    TERMINAL STATES:
      - Case resolved
      - Manual review pending
      - User guided to support policy
      - Provider reconciliation pending

    WHAT COMES AFTER:
      -> AF-07 Support Chat
      -> AF-08 Finance
      -> AF-18 Audit Log Review

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens wallet case queue or a user wallet detail.
- System shows Task Owner wallet, Tasker wallet, ledger entries, escrow holds and linked tasks.
- Admin identifies whether the issue is excess funding, failed funding, refund request, duplicate payment or ledger confusion.
- Admin reviews provider references and task state.
- Admin decides whether to guide user to use funds on tasks, escalate, or request approved manual handling.
- System records support resolution and audit reason.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                             | Recovery / Subflow That Fixes It             | Admin Outcome                     |
|--------------------------------------------|----------------------------------------------|-----------------------------------|
| User requests direct Task Owner withdrawal | Policy path explains support-only handling   | No direct withdrawal is exposed   |
| Ledger and provider amount disagree        | ASF-10 reconciliation checks source of truth | Case stays pending until resolved |
| Admin adjustment needed                    | ASF-05 requires reason and permission        | Manual decision is auditable      |

</div>

<div class="flow-head">

<div>

AF-11

### Task Catalog Management

</div>

**Product Operations**

</div>

This flow controls the task categories and task types visible in the mobile app, including Home, Errands, Office and Support.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens task catalog settings.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Product approval<br />
Remote/mobile config publication<br />
ASF-05</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-03 List/Search/Filter<br />
ASF-05 Reason and Audit Confirmation<br />
ASF-07 Status Change</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Catalog published<br />
Draft saved<br />
Category/task type disabled<br />
Category/task type archived<br />
Change rejected by validation</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-16 Remote Config<br />
AF-18 Audit Log Review</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-11 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Task Categories

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Task Type Detail

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Create or Edit

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Review

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Publish

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-11 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens task catalog settings.

    START -> Admin opens the task category list.
    02 -> Admin selects a category or creates a new task type.
    03 -> System shows name, description, icon hint, active state, ordering and pricing guidance fields.
    04 -> Admin edits details and reviews how it affects mobile display.
    05 -> Admin publishes the change, saves as draft, disables, or archives the category/task type.
    06 -> System records audit log and makes active catalog available to mobile clients.

    TERMINAL STATES:
      - Catalog published
      - Draft saved
      - Category/task type disabled
      - Category/task type archived
      - Change rejected by validation

    WHAT COMES AFTER:
      -> AF-16 Remote Config
      -> AF-18 Audit Log Review

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens the task category list.
- Admin selects a category or creates a new task type.
- System shows name, description, icon hint, active state, ordering and pricing guidance fields.
- Admin edits details and reviews how it affects mobile display.
- Admin publishes the change, saves as draft, disables, or archives the category/task type.
- System records audit log and makes active catalog available to mobile clients.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                                        | Recovery / Subflow That Fixes It                     | Admin Outcome                                                                   |
|-------------------------------------------------------|------------------------------------------------------|---------------------------------------------------------------------------------|
| Category is disabled while tasks still use it         | System warns before publishing                       | Existing tasks remain readable, new selection can be blocked                    |
| Admin attempts hard delete on used category/task type | System blocks hard delete and offers disable/archive | Historical tasks, receipts, reports, analytics and audit logs keep their labels |
| Duplicate task type                                   | Validation blocks duplicate names within category    | Admin corrects entry                                                            |
| Mobile cache has old catalog                          | AF-16 config/versioning helps refresh clients        | Updated catalog becomes available safely                                        |

</div>

<div class="flow-head">

<div>

AF-12

### Service Coverage Configuration

</div>

**Marketplace Configuration**

</div>

This flow controls where Work2Cash operates. Current product decision is nationwide Nigeria coverage, while task sites must remain within Nigeria.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens coverage settings.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Nigeria-only operating policy<br />
Geocoding/location rules<br />
ASF-05<br />
AF-16</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-05 Reason and Audit Confirmation<br />
ASF-07 Status Change<br />
ASF-11 Empty/Loading/Error Recovery</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Coverage published<br />
Coverage draft saved<br />
Change rejected</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-16 Remote Config<br />
AF-05 Task Monitoring</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-12 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Coverage Settings

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Zone Detail

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Rule Edit

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Confirm

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Published Coverage

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-12 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens coverage settings.

    START -> Admin opens coverage dashboard.
    02 -> System shows active country, states/zones, task posting rules and Tasker acceptance rules.
    03 -> Admin reviews whether a zone is active, restricted or disabled.
    04 -> Admin edits coverage rule within platform policy.
    05 -> System requests confirmation and reason.
    06 -> Coverage change is published and audited.

    TERMINAL STATES:
      - Coverage published
      - Coverage draft saved
      - Change rejected

    WHAT COMES AFTER:
      -> AF-16 Remote Config
      -> AF-05 Task Monitoring

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens coverage dashboard.
- System shows active country, states/zones, task posting rules and Tasker acceptance rules.
- Admin reviews whether a zone is active, restricted or disabled.
- Admin edits coverage rule within platform policy.
- System requests confirmation and reason.
- Coverage change is published and audited.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                          | Recovery / Subflow That Fixes It                                   | Admin Outcome                      |
|-----------------------------------------|--------------------------------------------------------------------|------------------------------------|
| Manual address geocodes outside Nigeria | Coverage rule rejects task site                                    | Task Owner must correct location   |
| Tasker outside Nigeria tries to accept  | Coverage rule blocks acceptance                                    | Tasker sees location requirement   |
| Admin changes active area by mistake    | ASF-05 audit reason and confirmation reduce accidental publication | Change can be traced and corrected |

</div>

<div class="flow-head">

<div>

AF-13

### Task Media Moderation

</div>

**Safety Operations**

</div>

This flow lets admins review uploaded photos and videos for task proof, completion proof, reports and unsafe content.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens media queue or media item from task/report/KYC detail.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>TaskProof/TaskMedia records<br />
Report evidence<br />
Permission-controlled media access</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-06 Evidence and Media Review<br />
ASF-05 Reason and Audit Confirmation<br />
ASF-07 Status Change</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Media kept<br />
Media removed<br />
Media flagged<br />
Escalated to dispute/risk</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-06 Report Resolution<br />
AF-14 Risk Review<br />
AF-19 Monitoring</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-13 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Media Queue

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Media Preview

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Safety Review

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Remove or Keep

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Audit Result

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-13 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens media queue or media item from task/report/KYC detail.

    START -> Admin opens media moderation queue.
    02 -> System shows pending, flagged, removed and reviewed media.
    03 -> Admin opens media preview with linked user, task, report and upload purpose.
    04 -> Admin reviews whether the media is valid, unsafe, unrelated or privacy-sensitive.
    05 -> Admin keeps, removes, flags or escalates the media.
    06 -> System records decision and updates linked task/report/risk context.

    TERMINAL STATES:
      - Media kept
      - Media removed
      - Media flagged
      - Escalated to dispute/risk

    WHAT COMES AFTER:
      -> AF-06 Report Resolution
      -> AF-14 Risk Review
      -> AF-19 Monitoring

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens media moderation queue.
- System shows pending, flagged, removed and reviewed media.
- Admin opens media preview with linked user, task, report and upload purpose.
- Admin reviews whether the media is valid, unsafe, unrelated or privacy-sensitive.
- Admin keeps, removes, flags or escalates the media.
- System records decision and updates linked task/report/risk context.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                 | Recovery / Subflow That Fixes It                                        | Admin Outcome                                       |
|--------------------------------|-------------------------------------------------------------------------|-----------------------------------------------------|
| Video/photo cannot load        | ASF-11 shows retry/error and AF-19 can inspect storage/provider failure | Media review is paused without losing queue context |
| Media is unsafe                | ASF-07 remove/flag action applies policy                                | Risk review can be opened                           |
| Media affects dispute decision | AF-06 receives reviewed evidence                                        | Dispute can proceed with clearer context            |

</div>

<div class="flow-head">

<div>

AF-14

### Risk, Trust, Warning and Strike Review

</div>

**Trust Operations**

</div>

This flow reviews policy violations, warnings, strikes, trust score reductions, Tasker restrictions and account suspensions.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens risk queue from dashboard, report decision, user profile or automated flag.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Penalty policy<br />
Report outcomes<br />
Task events<br />
Communication audit flags<br />
ASF-05</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-04 Record Detail Review<br />
ASF-05 Reason and Audit Confirmation<br />
ASF-06 Evidence Review<br />
ASF-07 Status Change</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>No action<br />
Warning applied<br />
Strike applied<br />
Restriction applied<br />
Account suspended</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-03 User Management<br />
AF-06 Report Resolution<br />
AF-07 Support Chat<br />
AF-18 Audit Log Review</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-14 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Risk Queue

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Trust Profile

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Policy Events

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Warning or Strike

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Restriction Result

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-14 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens risk queue from dashboard, report decision, user profile or automated flag.

    START -> Admin opens risk queue.
    02 -> System shows users with warnings, strikes, repeated movement-stage rejections, no-shows, off-platform solicitation flags and unsafe behavior reports.
    03 -> Admin opens trust profile.
    04 -> System shows policy events, linked tasks/reports, previous warnings/strikes and current restrictions.
    05 -> Admin applies or removes allowed action based on policy.
    06 -> System records warning, strike, restriction, suspension or no-action decision.

    TERMINAL STATES:
      - No action
      - Warning applied
      - Strike applied
      - Restriction applied
      - Account suspended

    WHAT COMES AFTER:
      -> AF-03 User Management
      -> AF-06 Report Resolution
      -> AF-07 Support Chat
      -> AF-18 Audit Log Review

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens risk queue.
- System shows users with warnings, strikes, repeated movement-stage rejections, no-shows, off-platform solicitation flags and unsafe behavior reports.
- Admin opens trust profile.
- System shows policy events, linked tasks/reports, previous warnings/strikes and current restrictions.
- Admin applies or removes allowed action based on policy.
- System records warning, strike, restriction, suspension or no-action decision.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                     | Recovery / Subflow That Fixes It                           | Admin Outcome                   |
|------------------------------------|------------------------------------------------------------|---------------------------------|
| Three warnings convert into strike | Risk flow evaluates threshold and applies next policy step | Restriction period is updated   |
| Tasker reaches Strike 4            | ASF-07 suspension action applies account restriction       | Tasker must contact support     |
| Task Owner reaches Strike 4        | ASF-07 suspension action applies account restriction       | Task Owner must contact support |

</div>

<div class="flow-head">

<div>

AF-15

### Referral Management

</div>

**Growth Operations**

</div>

This flow manages referral rules and checks reward eligibility. Referral reward is wallet credit after the referred user completes five paid tasks.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens referral dashboard or a referral reward alert.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Referral code tracking<br />
Completed paid task count<br />
Wallet credit policy</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-03 List/Search/Filter<br />
ASF-04 Record Detail Review<br />
ASF-05 Reason and Audit Confirmation<br />
ASF-07 Status Change</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Reward credited<br />
Reward pending<br />
Reward held<br />
Reward rejected</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-08 Finance<br />
AF-14 Risk Review<br />
AF-18 Audit Log Review</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-15 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Referral Dashboard

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Reward Rules

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Reward Review

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Abuse Check

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Publish or Resolve

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-15 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens referral dashboard or a referral reward alert.

    START -> Admin opens referral dashboard.
    02 -> System shows referred users, completed paid task counts, pending rewards, credited rewards and suspected abuse.
    03 -> Admin opens a referral record.
    04 -> System shows referrer, referred user, task history and reward state.
    05 -> Admin reviews eligibility or abuse flag.
    06 -> Admin approves, holds, rejects or escalates reward where manual review is needed.

    TERMINAL STATES:
      - Reward credited
      - Reward pending
      - Reward held
      - Reward rejected

    WHAT COMES AFTER:
      -> AF-08 Finance
      -> AF-14 Risk Review
      -> AF-18 Audit Log Review

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens referral dashboard.
- System shows referred users, completed paid task counts, pending rewards, credited rewards and suspected abuse.
- Admin opens a referral record.
- System shows referrer, referred user, task history and reward state.
- Admin reviews eligibility or abuse flag.
- Admin approves, holds, rejects or escalates reward where manual review is needed.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break           | Recovery / Subflow That Fixes It                         | Admin Outcome                         |
|--------------------------|----------------------------------------------------------|---------------------------------------|
| Task count appears wrong | Record detail compares referred user's paid task history | Reward stays pending until verified   |
| Abuse suspected          | Risk flow receives referral abuse context                | Reward can be held                    |
| Wallet credit fails      | AF-08/AF-19 reconciliation handles failure               | Reward is retried safely or escalated |

</div>

<div class="flow-head">

<div>

AF-16

### Platform Config and Remote Config

</div>

**Configuration**

</div>

This flow manages platform switches and values that the admin dashboard controls, including mobile behavior, feature flags, marketplace limits and provider settings that are safe to expose operationally.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens platform configuration.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Technical Lead-approved config list<br />
Environment separation<br />
ASF-05</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-02 RBAC Permission Gate<br />
ASF-05 Reason and Audit Confirmation<br />
ASF-07 Status Change</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Config published<br />
Draft saved<br />
Publish failed<br />
Action blocked</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-11 Catalog<br />
AF-12 Coverage<br />
AF-19 Use Case Health<br />
AF-18 Audit Log Review</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-16 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Remote Config

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Config Detail

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Edit Value

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Confirm Publish

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Config Live

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-16 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens platform configuration.

    START -> Admin opens remote config dashboard.
    02 -> System shows config groups, current values, environment, last publisher and effective date.
    03 -> Admin opens a config detail.
    04 -> Admin edits a value within allowed validation rules.
    05 -> System shows preview and affected flows.
    06 -> Admin confirms publication with reason.
    07 -> System publishes config and records audit log.

    TERMINAL STATES:
      - Config published
      - Draft saved
      - Publish failed
      - Action blocked

    WHAT COMES AFTER:
      -> AF-11 Catalog
      -> AF-12 Coverage
      -> AF-19 Use Case Health
      -> AF-18 Audit Log Review

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens remote config dashboard.
- System shows config groups, current values, environment, last publisher and effective date.
- Admin opens a config detail.
- Admin edits a value within allowed validation rules.
- System shows preview and affected flows.
- Admin confirms publication with reason.
- System publishes config and records audit log.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                 | Recovery / Subflow That Fixes It                 | Admin Outcome                        |
|--------------------------------|--------------------------------------------------|--------------------------------------|
| Admin edits restricted config  | ASF-02 permission and validation block action    | No unsafe configuration is published |
| Config could break mobile flow | Preview lists affected flows before confirmation | Admin can cancel or save draft       |
| Publish fails                  | ASF-11 shows retry/error and AF-19 logs failure  | Previous config remains active       |

</div>

<div class="flow-head">

<div>

AF-17

### Admin Users, Roles and Permissions

</div>

**Internal Governance**

</div>

This flow manages admin accounts, role assignment, permissions and admin access removal. It is separate from marketplace user management.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Authorized admin opens admin user settings.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>AF-01<br />
High-level RBAC permission<br />
ASF-02<br />
ASF-05</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-02 RBAC Permission Gate<br />
ASF-05 Reason and Audit Confirmation<br />
ASF-07 Status Change</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Admin invited<br />
Role updated<br />
Admin disabled<br />
Action blocked</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-18 Audit Log Review<br />
AF-19 Monitoring</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-17 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Admin Users

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Role Detail

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Permission Matrix

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Invite or Disable

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Audit Result

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-17 Flow Path

Flow Diagram

</div>

    ENTRY: Authorized admin opens admin user settings.

    START -> Admin opens admin users list.
    02 -> System shows active, invited, disabled and locked admin accounts.
    03 -> Admin opens admin user or role detail.
    04 -> Admin reviews permission matrix.
    05 -> Admin invites, disables, changes role or rotates access where allowed.
    06 -> System requests reason and records audit log.

    TERMINAL STATES:
      - Admin invited
      - Role updated
      - Admin disabled
      - Action blocked

    WHAT COMES AFTER:
      -> AF-18 Audit Log Review
      -> AF-19 Monitoring

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens admin users list.
- System shows active, invited, disabled and locked admin accounts.
- Admin opens admin user or role detail.
- Admin reviews permission matrix.
- Admin invites, disables, changes role or rotates access where allowed.
- System requests reason and records audit log.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                              | Recovery / Subflow That Fixes It                             | Admin Outcome                            |
|---------------------------------------------|--------------------------------------------------------------|------------------------------------------|
| Admin tries to edit own critical permission | RBAC policy blocks unsafe self-modification where configured | Technical Lead handles exceptional case  |
| Invite email fails                          | AF-19 provider/job monitoring tracks delivery failure        | Admin can resend after issue is resolved |
| Role change lacks reason                    | ASF-05 blocks save                                           | No permission changes are applied        |

</div>

<div class="flow-head">

<div>

AF-18

### Audit Log Review

</div>

**Governance**

</div>

This flow provides traceability for important admin and system actions, including who acted, what changed, when it happened and why.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens audit logs from settings, record detail, finance, risk or governance review.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Audit events from all admin flows<br />
ASF-03<br />
ASF-08</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-03 List/Search/Filter<br />
ASF-04 Record Detail Review<br />
ASF-08 Export and Report Generation</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Audit reviewed<br />
Export generated<br />
Linked record opened</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-03 User Management<br />
AF-08 Finance<br />
AF-14 Risk Review<br />
AF-17 Admin Users</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-18 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Audit Logs

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Filters

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Log Detail

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Export

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Review Complete

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-18 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens audit logs from settings, record detail, finance, risk or governance review.

    START -> Admin opens audit logs.
    02 -> Admin filters by actor, module, action type, date, record ID or severity.
    03 -> Admin opens a log detail.
    04 -> System shows before/after values where available, reason, source IP/session and linked record.
    05 -> Admin exports logs if needed for review.
    06 -> Admin returns to the linked operational flow or closes review.

    TERMINAL STATES:
      - Audit reviewed
      - Export generated
      - Linked record opened

    WHAT COMES AFTER:
      -> AF-03 User Management
      -> AF-08 Finance
      -> AF-14 Risk Review
      -> AF-17 Admin Users

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens audit logs.
- Admin filters by actor, module, action type, date, record ID or severity.
- Admin opens a log detail.
- System shows before/after values where available, reason, source IP/session and linked record.
- Admin exports logs if needed for review.
- Admin returns to the linked operational flow or closes review.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break               | Recovery / Subflow That Fixes It        | Admin Outcome                       |
|------------------------------|-----------------------------------------|-------------------------------------|
| Log list too broad           | ASF-03 filters narrow the review        | Admin finds the target event        |
| Linked record is unavailable | Audit log still preserves action record | Admin can review historical context |
| Export is required           | ASF-08 generates controlled export      | No database access is needed        |

</div>

<div class="flow-head">

<div>

AF-19

### Use Case Health and Background Job Monitoring

</div>

**Technical Operations**

</div>

This flow shows which backend use cases, queues and provider actions are failing. It helps the team detect issues before users report them.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens health dashboard or dashboard alert reports failures.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Backend use case tracking<br />
BullMQ<br />
Valkey<br />
Provider adapters<br />
Sentry</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-04 Record Detail Review<br />
ASF-10 Provider Reconciliation and Retry<br />
ASF-08 Export and Report Generation</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Issue resolved<br />
Retry queued<br />
Escalated to Technical Lead<br />
Incident opened</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-08 Finance<br />
AF-20 Monitoring and Incident Readiness<br />
AF-18 Audit Log Review</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-19 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Use Case Health

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Failure Detail

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Job Logs

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Retry or Escalate

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Resolved

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-19 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens health dashboard or dashboard alert reports failures.

    START -> Admin opens use case health dashboard.
    02 -> System shows backend use cases, last run time, success/failure counts, failed responses, BullMQ queue health and provider error rates.
    03 -> Admin opens a failure detail.
    04 -> System shows request context, affected record, provider response, retry status and last error.
    05 -> Admin retries safe jobs or escalates to Technical Lead.
    06 -> System records retry result and marks issue resolved or still failing.

    TERMINAL STATES:
      - Issue resolved
      - Retry queued
      - Escalated to Technical Lead
      - Incident opened

    WHAT COMES AFTER:
      -> AF-08 Finance
      -> AF-20 Monitoring and Incident Readiness
      -> AF-18 Audit Log Review

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens use case health dashboard.
- System shows backend use cases, last run time, success/failure counts, failed responses, BullMQ queue health and provider error rates.
- Admin opens a failure detail.
- System shows request context, affected record, provider response, retry status and last error.
- Admin retries safe jobs or escalates to Technical Lead.
- System records retry result and marks issue resolved or still failing.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                        | Recovery / Subflow That Fixes It            | Admin Outcome                            |
|---------------------------------------|---------------------------------------------|------------------------------------------|
| Job retry is unsafe                   | System blocks retry and asks for escalation | Technical Lead handles manual decision   |
| Provider is failing repeatedly        | Dashboard groups repeated failures          | Incident path can be opened              |
| Affected record needs business action | Admin opens linked finance/task/KYC flow    | Operational team can resolve user impact |

</div>

<div class="flow-head">

<div>

AF-20

### Monitoring, Backup and Incident Readiness

</div>

**Infrastructure Operations**

</div>

This flow gives the team a non-developer-readable view of service health, backup status, restore readiness and incident response state.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens monitoring page or system alert is raised.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Self-hosted services<br />
Backup jobs<br />
Provider status<br />
Technical Lead runbooks</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-04 Record Detail Review<br />
ASF-08 Export<br />
ASF-11 Empty/Loading/Error Recovery</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Healthy<br />
Degraded<br />
Incident open<br />
Incident closed</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-19 Use Case Health<br />
AF-07 Support Chat<br />
AF-18 Audit Log Review</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-20 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Monitoring Overview

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Alert Detail

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Backup Status

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Incident Checklist

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Closed

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-20 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens monitoring page or system alert is raised.

    START -> Admin opens monitoring overview.
    02 -> System shows API, socket, database, Valkey, queues, storage, backups, external providers and uptime state.
    03 -> Admin opens an alert detail.
    04 -> System shows severity, affected service, time started, user impact and recommended checklist.
    05 -> Admin follows incident checklist or escalates to Technical Lead.
    06 -> Incident notes, status updates and closure summary are recorded.

    TERMINAL STATES:
      - Healthy
      - Degraded
      - Incident open
      - Incident closed

    WHAT COMES AFTER:
      -> AF-19 Use Case Health
      -> AF-07 Support Chat
      -> AF-18 Audit Log Review

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens monitoring overview.
- System shows API, socket, database, Valkey, queues, storage, backups, external providers and uptime state.
- Admin opens an alert detail.
- System shows severity, affected service, time started, user impact and recommended checklist.
- Admin follows incident checklist or escalates to Technical Lead.
- Incident notes, status updates and closure summary are recorded.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                   | Recovery / Subflow That Fixes It                             | Admin Outcome                                   |
|----------------------------------|--------------------------------------------------------------|-------------------------------------------------|
| Backup failed                    | Monitoring displays failed backup and last successful backup | Technical Lead repairs backup before risk grows |
| Database/Valkey service degraded | Incident checklist guides escalation                         | Operational status is tracked                   |
| Provider outage affects users    | Monitoring links to affected flows                           | Support can communicate clear status            |

</div>

<div class="flow-head">

<div>

AF-21

### Notifications and Announcements

</div>

**Communication Operations**

</div>

This flow lets approved admins send operational notices and review notification delivery without using SMS carelessly.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens Notifications or selects Send Announcement from dashboard quick actions.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>FCM<br />
Email provider<br />
Termii for critical SMS only<br />
Notification preferences<br />
ASF-05</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-02 RBAC Permission Gate<br />
ASF-05 Reason and Audit Confirmation<br />
ASF-07 Status Change<br />
ASF-11 Empty/Loading/Error Recovery</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Announcement sent<br />
Scheduled/pending<br />
Partially failed<br />
Blocked<br />
Draft saved</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-18 Audit Log Review<br />
AF-19 Use Case Health<br />
AF-20 Monitoring and Incident Readiness</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-21 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Notifications

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Create Announcement

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Audience and Channel

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Preview

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Delivery Result

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-21 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens Notifications or selects Send Announcement from dashboard quick actions.

    START -> Admin opens notifications dashboard.
    02 -> System shows sent, pending, failed and scheduled notifications.
    03 -> Admin creates announcement.
    04 -> Admin selects audience such as all users, Task Owners, Taskers, active-task users, affected incident users, KYC-pending users, location segment or specific user.
    05 -> Admin selects channel: FCM push, in-app notification, email, or Termii SMS for critical/approved use only.
    06 -> System shows preview, estimated audience, cost warning where SMS applies, and preference impact.
    07 -> Admin confirms send with reason.
    08 -> System sends, records delivery result, and audits the action.

    TERMINAL STATES:
      - Announcement sent
      - Scheduled/pending
      - Partially failed
      - Blocked
      - Draft saved

    WHAT COMES AFTER:
      -> AF-18 Audit Log Review
      -> AF-19 Use Case Health
      -> AF-20 Monitoring and Incident Readiness

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens notifications dashboard.
- System shows sent, pending, failed and scheduled notifications.
- Admin creates announcement.
- Admin selects audience such as all users, Task Owners, Taskers, active-task users, affected incident users, KYC-pending users, location segment or specific user.
- Admin selects channel: FCM push, in-app notification, email, or Termii SMS for critical/approved use only.
- System shows preview, estimated audience, cost warning where SMS applies, and preference impact.
- Admin confirms send with reason.
- System sends, records delivery result, and audits the action.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                               | Recovery / Subflow That Fixes It                        | Admin Outcome                                                |
|----------------------------------------------|---------------------------------------------------------|--------------------------------------------------------------|
| Announcement contains sensitive/private data | Validation and review block unsafe content              | Admin must rewrite message before sending                    |
| SMS selected for non-critical message        | Cost-control rule blocks or requires stronger approval  | SMS spend is protected                                       |
| Delivery partially fails                     | Delivery result list and AF-19 monitoring show failures | Admin can review retry/escalation without duplicate blasting |

</div>

<div class="flow-head">

<div>

AF-22

### Ratings and Reviews Management

</div>

**Trust Operations**

</div>

This flow lets admins review, moderate and audit task-bound ratings and reviews without editing user-written text.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens Ratings &amp; Reviews from sidebar or from a linked user/task/report/risk record.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Task-bound ratings<br />
Completed tasks<br />
Risk/trust profile<br />
Report/dispute system<br />
ASF-05</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-03 List/Search/Filter<br />
ASF-04 Record Detail Review<br />
ASF-05 Reason and Audit Confirmation<br />
ASF-07 Status Change</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Review kept<br />
Review hidden/removed<br />
Review linked to report<br />
Risk flag created<br />
Support escalated</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-06 Report Resolution<br />
AF-14 Risk Review<br />
AF-18 Audit Log Review</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-22 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Ratings & Reviews

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Review Detail

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Linked Task

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Moderation Action

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Audit Result

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-22 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens Ratings & Reviews from sidebar or from a linked user/task/report/risk record.

    START -> Admin opens ratings and reviews list.
    02 -> Admin filters by rating, actor, task, category, report state, date, review status or risk flag.
    03 -> Admin opens review detail.
    04 -> System shows linked task, Task Owner, Tasker, rating, review text, tags, report history and trust/risk context.
    05 -> Admin chooses allowed action: keep, hide/remove, flag for risk, link to report/dispute, warn abusive reviewer, or escalate to support.
    06 -> System requests reason for moderation action.
    07 -> System records audit log and notifies affected user where policy requires.

    TERMINAL STATES:
      - Review kept
      - Review hidden/removed
      - Review linked to report
      - Risk flag created
      - Support escalated

    WHAT COMES AFTER:
      -> AF-06 Report Resolution
      -> AF-14 Risk Review
      -> AF-18 Audit Log Review

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens ratings and reviews list.
- Admin filters by rating, actor, task, category, report state, date, review status or risk flag.
- Admin opens review detail.
- System shows linked task, Task Owner, Tasker, rating, review text, tags, report history and trust/risk context.
- Admin chooses allowed action: keep, hide/remove, flag for risk, link to report/dispute, warn abusive reviewer, or escalate to support.
- System requests reason for moderation action.
- System records audit log and notifies affected user where policy requires.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                        | Recovery / Subflow That Fixes It                                | Admin Outcome                                      |
|---------------------------------------|-----------------------------------------------------------------|----------------------------------------------------|
| Review is abusive or policy-violating | Moderation action hides/removes while preserving internal audit | Public display is cleaned without deleting history |
| Review indicates serious task issue   | AF-06 Report Resolution receives linked context                 | Issue is handled through structured dispute/report |
| Low-rating pattern appears suspicious | AF-14 Risk Review receives pattern context                      | Trust/risk actions can be reviewed                 |

</div>

<div class="flow-head">

<div>

AF-23

### Basic Analytics and Reports

</div>

**Operational Reporting**

</div>

This flow provides MVP read-only reports for marketplace, finance, trust/safety, support and operations. Advanced analytics remains deferred.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens Analytics &amp; Reports from sidebar or dashboard.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Aggregated operational data<br />
RBAC export permissions<br />
Use case logs<br />
Finance/task/support/report records</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-02 RBAC Permission Gate<br />
ASF-03 List/Search/Filter<br />
ASF-08 Export and Report Generation</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Report viewed<br />
Export generated<br />
Export blocked<br />
Investigation opened</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-08 Finance<br />
AF-18 Audit Log Review<br />
AF-19 Use Case Health</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-23 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Reports Dashboard

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Report Filters

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Report Detail

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Export

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Review Complete

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-23 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens Analytics & Reports from sidebar or dashboard.

    START -> Admin opens reports dashboard.
    02 -> Admin selects report group: marketplace, finance, trust/safety, support or operations.
    03 -> System shows read-only metrics for the selected period.
    04 -> Admin filters by date, location, category, provider, status or role where applicable.
    05 -> Admin opens report detail or export preview.
    06 -> System checks export permission and removes raw sensitive data from export.
    07 -> Admin exports where permitted or returns to dashboard.

    TERMINAL STATES:
      - Report viewed
      - Export generated
      - Export blocked
      - Investigation opened

    WHAT COMES AFTER:
      -> AF-08 Finance
      -> AF-18 Audit Log Review
      -> AF-19 Use Case Health

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens reports dashboard.
- Admin selects report group: marketplace, finance, trust/safety, support or operations.
- System shows read-only metrics for the selected period.
- Admin filters by date, location, category, provider, status or role where applicable.
- Admin opens report detail or export preview.
- System checks export permission and removes raw sensitive data from export.
- Admin exports where permitted or returns to dashboard.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                            | Recovery / Subflow That Fixes It                      | Admin Outcome                                                           |
|-------------------------------------------|-------------------------------------------------------|-------------------------------------------------------------------------|
| Admin requests advanced product analytics | MVP scope guard                                       | Advanced analytics remains deferred; basic operational reports continue |
| Export would include sensitive raw data   | Export sanitizer/permission gate                      | Export is blocked or redacted                                           |
| Metrics mismatch source records           | AF-19 Use Case Health and AF-08 Finance can be opened | Team investigates data freshness or reconciliation issue                |

</div>

<div class="flow-head">

<div>

AF-24

### Receipt and Transaction Review

</div>

**Finance Review**

</div>

This flow gives admins a dedicated way to find receipts and transaction trails without manually changing ledger entries from the review screen.

<div class="table-wrap">

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Entry Trigger</td>
<td>Admin opens Receipt &amp; Transactions or follows a payment/wallet/support link.</td>
</tr>
<tr class="even">
<td>Depends On</td>
<td>Wallet ledger<br />
Payment records<br />
Provider references<br />
Webhook events<br />
RBAC export permissions</td>
</tr>
<tr class="odd">
<td>Calls Subflows</td>
<td>ASF-03 List/Search/Filter<br />
ASF-04 Record Detail Review<br />
ASF-08 Export and Report Generation<br />
ASF-10 Provider Reconciliation and Retry</td>
</tr>
<tr class="even">
<td>Terminal States</td>
<td>Receipt viewed<br />
Reference copied<br />
Export generated<br />
Finance/support/dispute escalated</td>
</tr>
<tr class="odd">
<td>Possible Next Flows</td>
<td>AF-08 Finance<br />
AF-10 Wallet Support<br />
AF-06 Report Resolution<br />
AF-18 Audit Log Review</td>
</tr>
</tbody>
</table>

</div>

<div class="screen-flow">

<div class="screen-flow-head">

#### AF-24 Screen Connection Map

Web Screen Silhouette Map

</div>

<div class="screen-flow-body">

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Receipts & Transactions

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**01**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Transaction Search

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**02**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Receipt Detail

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**03**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Webhook Status

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**04**

</div>

<div class="connector" aria-hidden="true">

</div>

<div class="screen-node">

<div class="web-screen">

<div class="browser-bar">

</div>

<div class="web-title">

Escalate / Export

</div>

<div class="web-layout">

<div class="web-side">

</div>

<div class="web-main">

<div class="skeleton hero">

</div>

<div class="skeleton">

</div>

<div class="skeleton short">

</div>

<div class="grid-mini">

</div>

</div>

</div>

</div>

**05**

</div>

</div>

These are simplified web-dashboard silhouettes. They show page relationships and handoff order, not final UI design.

</div>

<div class="diagram">

<div class="diagram-head">

#### AF-24 Flow Path

Flow Diagram

</div>

    ENTRY: Admin opens Receipt & Transactions or follows a payment/wallet/support link.

    START -> Admin opens Receipt & Transactions.
    02 -> Admin searches by transaction ID, task ID, user, provider reference, amount, status or date.
    03 -> Admin opens transaction detail.
    04 -> System shows receipt summary and linked task, user, wallet, escrow, provider reference and webhook/reconciliation state.
    05 -> Admin copies receipt reference or exports where permitted.
    06 -> Admin escalates to finance, support or dispute if action is required.
    07 -> Manual ledger correction is blocked from this screen and routed to wallet/finance action flows.

    TERMINAL STATES:
      - Receipt viewed
      - Reference copied
      - Export generated
      - Finance/support/dispute escalated

    WHAT COMES AFTER:
      -> AF-08 Finance
      -> AF-10 Wallet Support
      -> AF-06 Report Resolution
      -> AF-18 Audit Log Review

This diagram shows the normal path, possible endings, and what flow can come next. The recovery paths are listed below.

</div>

#### Happy Path

- Admin opens Receipt & Transactions.
- Admin searches by transaction ID, task ID, user, provider reference, amount, status or date.
- Admin opens transaction detail.
- System shows receipt summary and linked task, user, wallet, escrow, provider reference and webhook/reconciliation state.
- Admin copies receipt reference or exports where permitted.
- Admin escalates to finance, support or dispute if action is required.
- Manual ledger correction is blocked from this screen and routed to wallet/finance action flows.

#### Breakpoints and Recovery

<div class="table-wrap">

| What Can Break                       | Recovery / Subflow That Fixes It             | Admin Outcome                                          |
|--------------------------------------|----------------------------------------------|--------------------------------------------------------|
| Receipt cannot be found              | Search/filter plus provider reference lookup | Admin can refine search or open finance reconciliation |
| Ledger correction is needed          | Mutation is blocked from receipt review      | Admin routes to AF-08 Finance or AF-10 Wallet Support  |
| Sensitive provider payload requested | Data exposure guard                          | Admin sees only safe operational metadata              |

</div>

</div>

<div id="section-05" class="section section">

<div class="section-num">

05

</div>

<div class="eyebrow">

Handover

</div>

## Admin Flow Handover Checklist

Use this checklist before handing the admin dashboard flow specification to product, backend, admin frontend, QA and operations.

<div class="card-grid">

<div class="card">

Product

#### Flow ownership confirmed

Every dashboard flow has a clear business purpose, terminal state and next-flow rule.

</div>

<div class="card">

Backend

#### API contracts planned

Every admin flow has list, detail, action, audit and provider-recovery requirements identified.

</div>

<div class="card">

Frontend

#### State behavior standardized

GET requests show skeletonized views. POST/PATCH actions use blur overlay with spinning Work2Cash logo.

</div>

<div class="card">

QA

#### Breakpoints testable

Each flow includes failure states and the subflow expected to recover or block safely.

</div>

<div class="card">

Operations

#### Admin outcomes clear

Non-technical team members can understand what action to take and what happens after the action.

</div>

<div class="card">

Governance

#### Audit trail enforced

High-risk changes require reason, permission, and traceable audit records.

</div>

</div>

<div class="callout amber">

**Publishing Rule**

When this file is added to the GitHub documentation repo, place it under documents/admin-flow-catalogue-v1.html and keep the auth guard script included.

</div>

</div>

</div>

<div class="footer-inner">

<div>

#### Work2Cash

Admin web flow catalogue for team-facing documentation.

</div>

<div>

#### Scope

Admin dashboard only. Mobile flows remain in the separate mobile flow catalogue.

</div>

<div>

#### Security Note

Do not place secrets, API keys, production credentials or private user data inside the public docs repository.

</div>

</div>


---

# Source Document: Flow Alignment Review v1


# Flow Alignment Review v1

> AI-agent Markdown equivalent of `flow-alignment-review-v1.html`.
>
> Human-readable HTML source: `../flow-alignment-review-v1.html`.
> Use this Markdown version for lower-token AI context. If a task needs visual layout or exact document presentation, use the HTML page.

<div class="section cover">

<div class="logo">

W2C

</div>

# Flow Alignment Review v1

Comparison of the mobile and admin closed-flow catalogues against the main architecture document and Figma guide exports.

<div class="meta">

Mobile Flow Catalogue Admin Flow Catalogue Main Architecture v1 Figma Mobile/Admin Guides

</div>

</div>

<div class="sticky">

<div class="sticky-inner">

**Work2Cash Alignment Review**

[Coverage](#s1) [Source of Truth](#s2) [Mobile Gaps](#s3) [Admin Gaps](#s4) [Figma Conflicts](#s5)

</div>

</div>

<div role="main">

<div id="s1" class="section section">

<div class="eyebrow">

Section 1

</div>

## Coverage Result

The core marketplace flows are now closed for both mobile and admin. The remaining work is mostly explicit supporting flows, source-of-truth cleanup, and design copy alignment.

<div class="table-wrap">

| Area   | Compared Flow Area                                                                | Status                                   | Action                                                                                            |
|--------|-----------------------------------------------------------------------------------|------------------------------------------|---------------------------------------------------------------------------------------------------|
| Mobile | Auth, OTP, registration, login/session recovery                                   | <span class="badge green">Covered</span> | Password recovery and Google/Apple social auth are now explicit.                                  |
| Mobile | Task Owner create/fund task, proof upload, payment, public discovery/direct offer | <span class="badge green">Covered</span> | Payment copy must remain cardless.                                                                |
| Mobile | Tasker activation, KYC, browse/accept task, active execution                      | <span class="badge green">Covered</span> | KYC screen copy must align with Smile ID NIN/BVN + biometric flow.                                |
| Mobile | Start Journey, I have arrived, Begin Task, completion proof                       | <span class="badge green">Covered</span> | Mobile catalogue already has latest execution steps.                                              |
| Mobile | Cancellation, no-show, report/dispute, settlement hold                            | <span class="badge green">Covered</span> | Good alignment with accepted policy.                                                              |
| Mobile | Favorites and direct offer                                                        | <span class="badge green">Covered</span> | Good alignment with accepted direct-offer decision.                                               |
| Mobile | Support live chat                                                                 | <span class="badge green">Covered</span> | Emergency Support is now an explicit priority flow.                                               |
| Mobile | Profile, security, notifications, availability, ratings, rebook                   | <span class="badge green">Covered</span> | Added as explicit MVP mobile flows.                                                               |
| Admin  | Dashboard, users, KYC, task monitoring                                            | <span class="badge green">Covered</span> | Task monitoring includes controlled force cancel. Admin task reassignment is explicitly rejected. |
| Admin  | Reports/disputes, support live chat, media moderation, risk/warnings/strikes      | <span class="badge green">Covered</span> | Good alignment with policy.                                                                       |
| Admin  | Finance, wallet, refunds, escrow, withdrawal/payout batches                       | <span class="badge green">Covered</span> | Receipt and Transaction Review is now an explicit admin flow.                                     |
| Admin  | Catalog, coverage, config, RBAC, audit, monitoring                                | <span class="badge green">Covered</span> | Notifications/announcements and basic analytics/reporting are now explicit admin flows.           |

</div>

</div>

<div id="s2" class="section section">

<div class="eyebrow">

Section 2

</div>

## Source-of-Truth Corrections

These are corrections needed in the main architecture document so it stays aligned with the accepted decisions and the newer flow catalogues.

<div class="table-wrap">

| Priority                                     | Finding                                                   | Evidence                                                                                                                                        | Required Correction                                                                                                                                 |
|----------------------------------------------|-----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| <span class="badge green">Resolved</span>    | Main architecture ETA guard corrected.                    | Old 10+ minutes / 25% rule has been replaced.                                                                                                   | Main architecture now uses the ETA Cost Guard: 5-minute guard plus next 10% total-journey milestone, then reset timer/milestone after refresh.      |
| <span class="badge green">Resolved</span>    | Main architecture legal publishing corrected.             | Separate /legal/... page list has been removed from the source-of-truth appendix.                                                               | Main architecture now points to the combined legal pack at documents/legal_user_facing_documents_pack_v1.html.                                      |
| <span class="badge green">Resolved</span>    | Main architecture documentation governance added.         | GitHub docs repo setup, soft password gate, auth guard, guard checker, PR governance and resource links are now included.                       | Main architecture now lists the team-facing resource paths for generated and planned documents.                                                     |
| <span class="badge green">Resolved</span>    | Hetzner source wording corrected.                         | Screenshot-baseline wording has been removed.                                                                                                   | Main architecture now states the pricing baseline is confirmed from Hetzner official source while still requiring revalidation before provisioning. |
| <span class="badge amber">Open Design</span> | Figma category names differ from accepted category names. | Figma uses Home-Based, Compound/Outdoor, Office/Shop, Short Term Support/Event Support. Accepted categories are Home, Errands, Office, Support. | Treat Figma labels as visual references only. Product copy and admin catalog should use Home, Errands, Office, Support.                             |

</div>

</div>

<div id="s3" class="section section">

<div class="eyebrow">

Section 3

</div>

## Resolved Mobile Flow Decisions

These mobile flow decisions have been accepted and applied to the mobile closed-flow catalogue. Remaining items are design-copy corrections.

<div class="table-wrap">

| ID                | Flow / Issue                             | Decision Result                                                                  | Status / Next Action                                                                                                                   |
|-------------------|------------------------------------------|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| SF-11             | Password Recovery                        | Approved for MVP and added to mobile catalogue.                                  | Resolved                                                                                                                               |
| SF-13             | Google / Apple Social Authentication     | Google and Apple approved for MVP. Facebook excluded.                            | Resolved                                                                                                                               |
| MF-18             | Profile and Settings Management          | Approved for MVP and added to mobile catalogue.                                  | Resolved                                                                                                                               |
| MF-19             | Security and Device Management           | Approved for MVP. Sensitive actions use PIN; OTP is for recovery/reset.          | Resolved                                                                                                                               |
| MF-20             | Notification Center and Preferences      | Approved for MVP with FCM primary and Termii SMS fallback for critical messages. | Resolved                                                                                                                               |
| MF-21             | Tasker Availability and Work Preferences | Approved for MVP. Auto Accept is deferred.                                       | Resolved                                                                                                                               |
| SF-12             | Payout Account Setup                     | Approved for MVP and connected to withdrawal flow.                               | Resolved                                                                                                                               |
| MF-22             | Ratings and Reviews                      | Approved for MVP and connected to favorites/trust/admin moderation.              | Resolved                                                                                                                               |
| MF-23             | Emergency Support                        | Approved for MVP as priority support branch.                                     | Resolved                                                                                                                               |
| MF-24             | Rebook / Repeat Task                     | Approved for MVP. Creates a new task and preserves old task immutability.        | Resolved                                                                                                                               |
| Design Correction | Cardless Payment UI                      | Figma still includes Add Bank Card / card-linked-to-BVN wording.                 | Replace with Paystack/Moniepoint transfer, USSD, redirect/status or virtual-account style screens.                                     |
| Design Correction | KYC UI                                   | Figma still shows generic upload ID/photo screens.                               | Align primary KYC UI to Smile ID NIN/BVN plus live biometric capture. Keep document upload only as manual exception if later approved. |

</div>

</div>

<div id="s4" class="section section">

<div class="eyebrow">

Section 4

</div>

## Resolved Admin Flow Decisions

These admin flow decisions have been accepted and applied to the admin closed-flow catalogue.

<div class="table-wrap">

| ID           | Flow / Issue                    | Decision Result                                                                                                                     | Status / Next Action |
|--------------|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| AF-21        | Notifications and Announcements | Approved for MVP and added to admin catalogue.                                                                                      | Resolved             |
| AF-22        | Ratings and Reviews Management  | Approved for MVP and added to admin catalogue.                                                                                      | Resolved             |
| AF-23        | Basic Analytics and Reports     | Approved for MVP. Advanced analytics remains deferred.                                                                              | Resolved             |
| AF-24        | Receipt and Transaction Review  | Approved as its own MVP admin flow.                                                                                                 | Resolved             |
| AF-05 Update | Controlled Force Cancel Task    | Approved inside Task Operations Monitoring with elevated permission, reason, impact preview and audit.                              | Resolved             |
| Rejected     | Admin Reassign Task             | Rejected. Admin cannot reassign under any condition. Replacement happens through Tasker cancellation or Task Owner rejection rules. | Resolved             |
| AF-04 Update | Request Re-Verification         | Approved inside KYC review.                                                                                                         | Resolved             |
| AF-11 Update | Category Disable/Archive Rules  | Approved. Hard delete only for unused drafts.                                                                                       | Resolved             |

</div>

</div>

<div id="s5" class="section section">

<div class="eyebrow">

Section 5

</div>

## Figma vs Architecture Conflicts

These are not implementation gaps yet. They are places where the design exports contain older or unapproved product assumptions.

<div class="table-wrap">

| Area            | Figma Shows                                                   | Current Product Decision                                                                                          | Action                                          |
|-----------------|---------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| Payment         | Figma contains card-based screens and card method labels.     | Accepted project direction is cardless Paystack + Moniepoint using transfer/USSD/redirect/status flows.           | Design must be updated before implementation.   |
| KYC             | Figma contains generic document upload and multiple ID types. | Accepted direction is Smile ID NIN/BVN with biometric match. Admin may still need evidence/manual review screens. | Split primary KYC from manual exception review. |
| Task Categories | Figma still has old grouping labels.                          | Accepted categories are Home, Errands, Office, Support.                                                           | Update mobile/admin labels and seed data.       |
| Social Auth     | Figma shows Google/Apple/Facebook.                            | Google and Apple are approved for MVP. Facebook is excluded.                                                      | Remove Facebook from MVP screens.               |
| Analytics       | Admin design includes Analytics & Report.                     | Basic operational reports are included in MVP. Advanced analytics remains deferred.                               | Keep MVP reports simple and read-only.          |

</div>

<div class="callout">

**Recommendation**

Update the flow catalogues first, then update Figma copy/screens to match the accepted source of truth. Do not implement card-based payment or generic document-upload KYC unless those decisions are reopened.

</div>

</div>

</div>

<div>

Recommended docs repo path: `documents/flow-alignment-review-v1.html`

</div>


---

# Source Document: Legal & User-Facing Documents Pack v1


# Legal & User-Facing Documents Pack v1

> AI-agent Markdown equivalent of `legal_user_facing_documents_pack_v1.html`.
>
> Human-readable HTML source: `../legal_user_facing_documents_pack_v1.html`.
> Use this Markdown version for lower-token AI context. If a task needs visual layout or exact document presentation, use the HTML page.

<div class="section cover">

<div class="cover-inner">

<div class="brand-row">

<div class="logo">

W2C

</div>

<div class="brand-meta">

**Work2Cash** Traceworka Product Documentation

</div>

</div>

# Legal & User-Facing Documents Draft

A launch-ready policy baseline for Terms, Privacy, Tasker rules, cancellation, safety, KYC, location, and wallet operations.

<div class="meta-grid">

<div class="meta-card">

Prepared For**Traceworka**

</div>

<div class="meta-card">

Project**Work2Cash**

</div>

<div class="meta-card">

Version**Draft 1.0**

</div>

<div class="meta-card">

Classification**Investor Ready Draft**

</div>

</div>

</div>

</div>

<div class="doc-header">

<div class="doc-header-inner">

**Work2Cash Legal Pack**

[Terms](#terms) [Privacy](#privacy) [Tasker](#tasker) [Cancellation](#refund) [Community](#safety) [KYC](#kyc) [Location](#location) [Payment](#wallet)

</div>

</div>

<div role="main">

<div class="section panel">

<div class="eyebrow">

Important Notice

</div>

## Draft Status

<div class="callout danger">

This document is a product and architecture draft prepared from the Work2Cash planning session. It is not legal advice and should be reviewed by qualified legal counsel before publication or enforcement.

</div>

<div class="grid-2">

<div class="info-card">

**Primary Market**  
Nigeria, with nationwide service coverage and active geofencing to keep posting and matching inside Nigeria.

</div>

<div class="info-card">

**Core Business Model**  
Unified user account, Task Owner and Tasker modes, escrow-backed task payment, and Tasker commission tiers.

</div>

<div class="info-card">

**Payment Providers**  
Paystack and Moniepoint, with Task Owner-paid processing fees and backend-verified payment status.

</div>

<div class="info-card">

**Trust Controls**  
Smile ID KYC, warnings, strikes, support review, structured disputes, admin audit logs, and role-based admin access.

</div>

</div>

<div class="tag-row">

<span class="tag">Terms</span><span class="tag">Privacy</span><span class="tag">Tasker Agreement</span><span class="tag">Safety</span><span class="tag">KYC</span><span class="tag">Wallets</span>

</div>

</div>

<div class="section panel">

<div class="eyebrow">

Contents

</div>

## Document Index

<div class="toc">

[01. Terms of Service](#terms) [02. Privacy Policy](#privacy) [03. Tasker Agreement](#tasker) [04. Cancellation & Refund Policy](#refund) [05. Community & Safety Guidelines](#safety) [06. KYC Consent Notice](#kyc) [07. Location Permission Notice](#location) [08. Payment & Wallet Terms](#wallet)

</div>

</div>

<div id="terms" class="section panel">

<div class="eyebrow">

Document 01

</div>

## Terms of Service

Platform rules for Task Owners, Taskers, administrators, and support operations.

### Purpose and Scope

- These Terms govern the use of Work2Cash, a Nigeria-focused platform that connects Task Owners with nearby Taskers for approved short-duration services.
- Work2Cash provides marketplace, payment, wallet, matching, chat, support, KYC, and operational tools. Work2Cash is not the direct employer of Taskers in the MVP model.
- The platform is designed for use within Nigeria. Users outside Nigeria may be restricted from posting tasks, accepting tasks, or receiving task offers.

### User Roles

- A single account may operate as a Task Owner and as a Tasker.
- Any authenticated user may act as a Task Owner where the user satisfies platform rules.
- A user may act as a Tasker only after completing Tasker profile setup, passing required KYC, and remaining in good standing.
- The active mode selected in the app controls what actions are available to the user at any point in time.

### Account Responsibilities

- Users must provide accurate account, contact, task, payment, and KYC information.
- Users are responsible for protecting their login credentials, OTPs, devices, and sessions.
- Users must not create multiple accounts to bypass restrictions, warnings, strikes, suspensions, referral rules, or payment controls.
- Work2Cash may restrict, review, or suspend accounts where fraud, abuse, unsafe conduct, or policy violations are suspected.

### Task Marketplace Rules

- Task Owners may create tasks from approved task categories and service types.
- Task Owners may pay into escrow before a task is broadcast publicly or sent directly to a favorite Tasker.
- Taskers may accept public task offers or direct task offers only when eligible, available, and not restricted by policy.
- Task chat becomes available only after a task has been accepted.
- REST APIs remain the source of truth for task, payment, wallet, and dispute state. Socket events are used only for real-time support features such as chat, tracking, and presence.

### Payments, Escrow, and Wallets

- Task payments are processed through supported Nigerian payment providers, including Paystack and Moniepoint.
- Payment processing fees are paid by the Task Owner as a separate fee and should be displayed before payment confirmation.
- Task funds are held in escrow until the task reaches an eligible completion or resolution state.
- Task Owner wallet funds are intended for task payments, refunds, credits, and platform use. Direct withdrawal from a Task Owner wallet is disabled by default.
- Tasker wallet funds represent eligible earnings and may be withdrawn according to platform rules.

### Commission and Earnings

- The default platform commission is 20 percent of completed task value.
- Tasker commission improves with settled completed task count: 17.5 percent after 20 tasks, 15 percent after 50 tasks, 12.5 percent after 100 tasks, and 10 percent after 500 tasks.
- The minimum task amount is ₦2,000.
- The minimum Tasker withdrawal amount is ₦1,000.
- Taskers should be shown gross task amount, platform commission, and net earning before accepting eligible work.

### Warnings, Strikes, and Suspension

- Three warnings convert to one strike.
- For Taskers: Strike 1 prevents accepting tasks for 2 days, Strike 2 for 1 week, Strike 3 for 1 month, and Strike 4 suspends the account.
- For Task Owners: Strike 1, Strike 2, and Strike 3 reduce trust score. Strike 4 suspends the account and requires contacting support.
- Warnings, strikes, trust score reductions, penalties, and suspensions must be recorded as policy events.

### Prohibited Conduct

- Users must not request illegal, unsafe, adult, drug-related, weapon-related, violent, fraudulent, or off-platform activities.
- Users must not harass, threaten, abuse, discriminate against, or intimidate other users, Taskers, Task Owners, support agents, or administrators.
- Users must not request payment outside Work2Cash, move platform transactions off-platform, or manipulate task completion status.
- Work2Cash may investigate and restrict users for suspicious activity, repeated complaints, repeated cancellations, no-shows, or fraud signals.

### Disputes and Support

- Task-linked reports and disputes are handled through structured options, evidence upload, admin review, and resolution actions.
- Disputes do not use live chat in v1.
- Users may use support live chat for operational help, urgent support, and account/payment assistance.
- Support and dispute outcomes are subject to platform rules, available evidence, task state, payment state, and audit history.

### Changes and Legal Review

- These draft Terms are intended as a product and architecture policy baseline.
- Final public Terms should be reviewed by qualified legal counsel before launch.
- Work2Cash may update public terms, policies, and operational rules as the platform grows, provided users receive appropriate notice where required.

</div>

<div id="privacy" class="section panel">

<div class="eyebrow">

Document 02

</div>

## Privacy Policy

Data collection, use, security, retention, and user privacy rights.

### Privacy Position

- Work2Cash is designed to follow privacy-by-design and data-minimization practices for the Nigerian market.
- The platform should align with the Nigeria Data Protection Act 2023 and regulatory direction from the Nigeria Data Protection Commission.
- This draft privacy policy defines operational intent and should be reviewed by legal counsel before publication.

### Data We Collect

- Account data: name, phone number, email address, profile photo, account status, referral code, saved addresses, device records, and session records.
- Tasker and KYC data: Tasker profile, skills, categories, availability, NIN or BVN submission reference, biometric verification status, Smile ID results, review status, and admin decision history.
- Task data: task category, task description, task location, task value, selected matching method, assigned Tasker, status history, cancellation records, reports, and completion evidence where used.
- Payment and wallet data: payment references, provider metadata, wallet ledger entries, escrow records, refunds, withdrawals, reconciliation records, and webhook event logs.
- Communication data: task chat messages, support live chat messages, support tickets, and structured dispute/report evidence.
- Operational data: audit logs, use case logs, background job logs, API logs, error logs, security events, and risk flags.

### Why We Use Data

- To create and manage user accounts.
- To verify Taskers and protect marketplace trust.
- To create, match, track, complete, cancel, and resolve tasks.
- To process payments, escrow, wallet credit, withdrawals, refunds, penalties, and referral rewards.
- To provide notifications through email, Termii SMS, Firebase Cloud Messaging, and in-app channels.
- To provide task chat, support live chat, user reports, dispute handling, and safety review.
- To monitor fraud, enforce platform policies, improve reliability, and meet legal, accounting, audit, or regulatory obligations.

### Sensitive Data Handling

- KYC and biometric verification data must be restricted to authorized workflows and authorized administrators.
- NIN, BVN, biometric references, KYC results, payment provider payloads, OTPs, secrets, and webhook secrets must not be exposed in logs, analytics, support screenshots, or Sentry events.
- Sensitive admin views must be role-restricted and audit-logged.
- Backups containing sensitive data should be encrypted and stored off-server.

### Location Data

- Task Owners may use GPS or manual address entry to provide task location.
- Tasker location is required while the Tasker is available or active.
- Live tracking starts from task acceptance or en-route state and stops when the task is completed, cancelled, disputed, or expired.
- Exact task address is shown only after payment and Tasker acceptance.
- Live location is primarily temporary state and should be stored in Valkey where possible. Only important milestones and tracking events should be persisted in PostgreSQL.

### Third-Party Providers

- Work2Cash may share required data with providers that support platform operations, including Paystack, Moniepoint, Smile ID, Termii, Firebase Cloud Messaging, Firebase Analytics, Sentry, Google Maps, Shorebird, and storage/hosting providers.
- Data shared with providers must be limited to what is needed for the specific service.
- Provider integrations should be isolated through backend adapters where practical.

### Retention Rules

- User profile data is retained while an account is active and may be deleted or anonymized after closure unless retention is required.
- KYC records are retained for trust, safety, fraud prevention, regulatory, and dispute reasons.
- Wallet, payment, escrow, refund, withdrawal, and reconciliation records are retained long-term for finance, audit, fraud prevention, and accounting needs.
- Task chat, support chat, and dispute records are retained for support, safety, evidence, and quality review.
- Raw continuous GPS trails should not be stored permanently by default.
- Application debug logs should have shorter retention than audit, security, finance, and KYC records.

### User Rights and Requests

- Users should be able to request access to account data, correction of profile data, account deletion or deactivation, support review of sensitive decisions, and privacy/security support.
- Account deletion does not automatically delete finance, escrow, KYC, dispute, fraud, or audit records that Work2Cash must retain for legal, safety, accounting, or operational reasons.
- Where deletion is limited by retention duties, Work2Cash may deactivate the account and anonymize fields that are not required for retention.

### Security Practices

- Admin access requires TOTP 2FA.
- RBAC must control access to KYC, finance, risk, support, and configuration modules.
- PostgreSQL and Valkey must not be publicly exposed.
- Webhook signatures must be verified.
- Sentry, logs, analytics, push notifications, and support tools must be configured to avoid leaking sensitive user data.

</div>

<div id="tasker" class="section panel">

<div class="eyebrow">

Document 03

</div>

## Tasker Agreement

Rules for earning, profile activation, work quality, and withdrawal eligibility.

### Tasker Activation

- A user becomes eligible to operate as a Tasker only after creating a Tasker profile, selecting supported skills/categories, completing required KYC, and receiving approved/active status.
- KYC verification is mandatory before a Tasker can accept tasks.
- Tasker location access is required while the Tasker is available or active.

### Tasker Responsibilities

- Accept only tasks the Tasker can reasonably complete safely, honestly, and within the expected scope.
- Arrive at the task location as agreed and update task progress accurately.
- Use in-app chat for task-related communication after acceptance.
- Avoid off-platform payment requests, harassment, unsafe behavior, false completion requests, and manipulation of task status.
- Respect Task Owner property, privacy, and safety.

### Offer Handling

- Public task offers may be sent based on location, availability, category match, and platform rules.
- Direct offers may be sent by Task Owners who have favorited a Tasker.
- Direct offers are handled through REST/API state and FCM notification, not Socket.io.
- Taskers may accept or decline eligible offers. Unsafe tasks may be rejected without penalty if properly reported.

### Earnings and Withdrawals

- Tasker earnings become available only after escrow release or eligible admin resolution.
- The minimum Tasker withdrawal amount is ₦1,000.
- The platform commission starts at 20 percent and improves with settled completed task count.
- Cancelled, refunded, disputed-unresolved, test, or fraudulent tasks do not count toward commission tier progression.

### Tasker Warnings and Strikes

- Tasker cancellation after accepting a task creates one warning unless a valid safety exception is accepted.
- Tasker no-show creates one strike.
- Three warnings convert to one strike.
- Strike 1 prevents accepting tasks for 2 days. Strike 2 prevents accepting tasks for 1 week. Strike 3 prevents accepting tasks for 1 month. Strike 4 suspends the account.

</div>

<div id="refund" class="section panel">

<div class="eyebrow">

Document 04

</div>

## Cancellation & Refund Policy

Cancellation, no-show, penalty, refund, and structured dispute rules.

### Cancellation Rules

- Task Owner cancels before Tasker accepts: no penalty.
- Task Owner cancels after Tasker accepts: no penalty.
- Task Owner cancels while Tasker is en route: 10 percent penalty and one warning.
- Task Owner cancels after Tasker arrives: 10 percent penalty and one warning.
- Tasker cancels after accepting: one warning.
- Tasker no-shows: one strike.
- Task Owner no-shows: 10 percent penalty and one warning.

### Task Completion Refusal

- If a task is completed but the Task Owner refuses approval, the Tasker may raise a task-linked report/dispute.
- The admin team reviews evidence and resolves through the structured dispute flow.
- Escrow is released, refunded, partially refunded, or otherwise resolved according to the dispute outcome and platform rules.

### Refund Position

- All funded amounts are expected to be used on tasks.
- If a Task Owner deposits more than the required amount, the Task Owner must contact support for next steps.
- Task Owner wallet withdrawal is disabled by default.
- Refund, excess funding, and wallet issues are handled through support and platform finance workflows.

### Admin Override Position

- No arbitrary admin override is allowed in v1.
- Admins may resolve disputes and support cases only through defined platform workflows.
- High-risk admin actions must require a reason and must be audit-logged.

</div>

<div id="safety" class="section panel">

<div class="eyebrow">

Document 05

</div>

## Community & Safety Guidelines

Marketplace safety, prohibited tasks, reporting, blocking, and risk controls.

### Expected Conduct

- Users must treat each other respectfully and must not harass, threaten, insult, exploit, or intimidate others.
- Task Owners must provide accurate task details and safe access to the task location.
- Taskers must perform accepted work honestly and must not misrepresent task progress or completion.
- Both parties must keep payment and task communication on Work2Cash where the platform requires it.

### Prohibited Task Types

- Illegal activities.
- Adult or sexual services.
- Weapons, violence, intimidation, or coercion-related tasks.
- Drug-related tasks.
- High-risk medical tasks.
- Tasks requiring licensed professionals unless Work2Cash later creates a verified licensed category.
- Overnight stay tasks.
- Tasks involving minors without guardian presence.
- Tasks outside supported categories.
- Tasks requiring unsafe travel or unsafe location access.

### Reports and Disputes

- Reports are treated as structured dispute or safety reports.
- A report/dispute can be linked to a specific task.
- When creating a report, the user selects from a variety of report options.
- Report options depend on task state and reporter role.
- Reports go to the admin/risk/support review queue.

### Blocking

- Task Owners can block Taskers after a task or support case.
- Taskers can block Task Owners after a task or support case.
- Blocking prevents future direct offers and preferred matching.
- Blocking does not remove audit, dispute, payment, support, or task history.

### Automatic Risk Flags

- Multiple failed payment attempts, repeated cancellations, repeated no-shows, repeated disputes, repeated complaints, suspicious withdrawals, device/account abuse, location mismatch, KYC mismatch, and off-platform payment attempts may trigger risk review.
- Complaints should not automatically punish users until reviewed unless the risk is severe.
- Verified safety or fraud issues may lead to warnings, strikes, trust score reduction, restrictions, or suspension.

### Emergency Support

- MVP should include an emergency support escalation path.
- Emergency support can start as a high-priority support ticket/live chat route.
- The target response for emergency support is under 15 minutes.
- Work2Cash support is not a replacement for public emergency services where those services are required.

</div>

<div id="kyc" class="section panel">

<div class="eyebrow">

Document 06

</div>

## KYC Consent Notice

Identity verification consent and Tasker eligibility requirements.

### Why KYC Is Required

- KYC is required to protect Task Owners, Taskers, the platform, and payment flows from identity fraud, impersonation, and unsafe activity.
- A user cannot accept tasks as a Tasker until KYC is approved and the Tasker profile is active.

### Information Used for Verification

- KYC may require NIN or BVN submission, biometric face capture, profile information, device information, and verification results from the KYC provider.
- Smile ID is the planned KYC verification provider.
- Verification results may include approved, rejected, pending, expired, or manual-review status.

### Consent and Review

- By starting KYC, the user consents to Work2Cash processing and sharing required identity verification data with the KYC provider.
- KYC failures may block Tasker activation.
- Suspicious or unclear verification results may be sent to manual review.
- KYC status and decisions may be visible to authorized admins only.

### KYC Security

- KYC data must be restricted, role-protected, and audit-logged when accessed by admins.
- KYC data must not be exposed in ordinary logs, analytics, push messages, Sentry payloads, or customer support exports.
- KYC records may be retained for trust, safety, fraud prevention, regulatory, and dispute reasons.

</div>

<div id="location" class="section panel">

<div class="eyebrow">

Document 07

</div>

## Location Permission Notice

GPS, service coverage, address privacy, and live tracking rules.

### Service Coverage

- Work2Cash supports nationwide rollout across Nigeria.
- The active service boundary is Nigeria.
- Users outside Nigeria cannot post or receive tasks.
- Admin controls may temporarily restrict service in specific cities or zones if operations require it.

### Task Owner Location

- Task Owners may provide task location using GPS or manual address entry.
- Task Owners outside the active service area cannot post tasks.
- Exact address is shown only after payment and Tasker acceptance.

### Tasker Location

- Tasker location is required while available or active.
- Taskers outside the active service area cannot receive offers.
- Taskers may configure a maximum travel radius, subject to platform caps.
- Public broadcast radius defaults to 2km and is capped at 5km.

### Live Tracking

- Live tracking starts from accepted/en-route state and stops when the task is completed, cancelled, disputed, or expired.
- If GPS accuracy is worse than 100 meters, the app should warn the user and retry.
- Live tracking is used for task progress, safety, ETA, and support review.

</div>

<div id="wallet" class="section panel">

<div class="eyebrow">

Document 08

</div>

## Payment & Wallet Terms

Escrow, wallet separation, fees, withdrawals, referrals, and ledger controls.

### Payment Methods

- Work2Cash uses Paystack and Moniepoint as launch payment providers.
- The platform should prioritize cardless payment flows where possible, including transfer and wallet-friendly payment experiences.
- Payment confirmation must be verified by backend systems and not by frontend redirect alone.

### Wallet Separation

- Each user may have a Task Owner wallet and a Tasker wallet.
- Task Owner wallet funds are for task payments, refunds, wallet credit, and platform use.
- Tasker wallet funds are earnings and can be withdrawn when eligible.
- Direct Task Owner wallet withdrawal is disabled by default and requires support handling.

### Escrow Rules

- Task funds are held in escrow after successful payment.
- Escrow may be released after completion approval or eligible admin resolution.
- Escrow may be refunded or partially refunded based on cancellation, report/dispute outcome, or support resolution.
- Escrow and wallet actions must be represented as append-only ledger entries.

### Fees and Commission

- Task Owner pays payment processing fees separately.
- Tasker commission starts at 20 percent and improves through completed, settled task count.
- Tasker earning displays should show gross task amount, commission, and net earning.
- Task Owner price displays should show task amount, service/platform/payment fees, and final total before payment.

### Referrals

- Referral reward is issued as wallet credit.
- Referral reward is granted only after the referred user completes 5 paid tasks.
- Referral rules should be configurable by admin and protected against self-referral or multi-account abuse.

### Ledger and Reconciliation

- Wallet balance must not change without a wallet transaction ledger record.
- Hourly ledger consistency checks should verify balances, escrow, refunds, penalties, withdrawals, and referral credits.
- Webhook events must be stored, verified, and reconciled.
- Manual finance actions must require reason and audit logging.

</div>

<div id="handover" class="section panel">

<div class="eyebrow">

Final Handover

</div>

## Launch Review Checklist

- Legal counsel reviews all public legal pages before launch.
- Terms, Privacy Policy, Tasker Agreement, Cancellation & Refund Policy, Safety Guidelines, KYC Consent, Location Notice, and Payment & Wallet Terms are published.
- App store and Play Store privacy URLs point to the correct public pages.
- Signup, KYC, location, payment, and Tasker onboarding flows display the correct consent notices.
- Admin dashboard can audit KYC, finance, support, policy, and high-risk actions.
- Support team has scripts for excess wallet funding, disputes, emergency support, and suspended accounts.

### Suggested Public URLs

| Document                      | Suggested URL                                  |
|-------------------------------|------------------------------------------------|
| Terms of Service              | https://work2cash.ng/legal/terms               |
| Privacy Policy                | https://work2cash.ng/legal/privacy             |
| Tasker Agreement              | https://work2cash.ng/legal/tasker-agreement    |
| Cancellation & Refund Policy  | https://work2cash.ng/legal/cancellation-refund |
| Community & Safety Guidelines | https://work2cash.ng/legal/safety              |
| KYC Consent Notice            | https://work2cash.ng/legal/kyc-consent         |
| Location Permission Notice    | https://work2cash.ng/legal/location            |
| Payment & Wallet Terms        | https://work2cash.ng/legal/payment-wallet      |

### References

- Nigeria Data Protection Commission: https://ndpc.gov.ng/
- Nigeria Data Protection Act 2023 should be reviewed by counsel against the final public wording.

</div>

</div>

Work2Cash Legal & User-Facing Documents Draft - Prepared for Traceworka - Draft 1.0


---

# Source Document: API & Socket Contract Specification v1


# API & Socket Contract Specification v1

> AI-agent Markdown equivalent of `api-socket-contract-specification-v1.html`.
>
> Human-readable HTML source: `../api-socket-contract-specification-v1.html`.
> Use this Markdown version for lower-token AI context. If a task needs visual layout or exact document presentation, use the HTML page.

<div class="section cover">

<div class="brand-row">

<div class="logo">

W2C

</div>

<div>

**Work2Cash**API & Socket Contract Specification

</div>

</div>

<div class="cover-main">

<div class="label">

Document 6

</div>

# API & Socket Contract Specification

<div class="cover-subtitle">

REST, Socket.IO, webhook, queue, response-shape, security, and handover contracts for the Work2Cash mobile app, admin dashboard, and backend services.

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

Classification**Investor Ready**

</div>

<div class="meta-card">

Primary API**api.work2cash.ng**

</div>

<div class="meta-card">

Socket Host**socket.work2cash.ng**

</div>

<div class="meta-card">

Backend**NestJS Hexagonal**

</div>

<div class="meta-card">

Consumers**Flutter + Next.js**

</div>

</div>

<div class="badges">

<span class="badge">REST Contracts</span> <span class="badge">Socket.IO Events</span> <span class="badge">Provider Webhooks</span> <span class="badge">Idempotency</span> <span class="badge">Nigeria-First Rules</span>

</div>

</div>

<div class="cover-foot">

<div>

Source of truth: Work2Cash Enterprise Architecture v1, Mobile Flow Catalogue v1, Admin Flow Catalogue v1.

</div>

<div>

Public GitHub Pages note: protected pages must include the documentation auth guard.

</div>

</div>

</div>

<div class="sticky">

<div class="sticky-inner">

**Work2Cash API & Socket Spec v1**

[Scope](#scope) [Auth](#auth) [REST](#rest) [Socket](#socket) [Traceability](#traceability) [Webhooks](#webhooks) [Checklist](#handover)

</div>

</div>

<div role="main">

<div class="section toc">

<div class="eyebrow">

Navigation

</div>

## Document Contents

This document is written for backend, mobile, admin frontend, QA, operations, and non-technical stakeholders. It defines what each system can ask for, what it must receive, when real-time sockets are allowed, and which operations must remain durable REST workflows.

<div class="toc-grid">

[01. How To Use This Spec](#scope)[02. Environment And Boundary Map](#environments)[03. Contract Principles](#principles)[04. Authentication, Sessions, And Security](#auth)[05. Response, Error, Pagination, And Idempotency](#standards)[06. REST API Contract Index](#rest)[07. Socket.IO Contract](#socket)[08. Webhook And Provider Callback Contracts](#webhooks)[09. Queue, Job, And Worker Contracts](#queues)[10. DTO, Schema, And Enum Baseline](#schemas)[11. Flow-To-Contract Traceability](#traceability)[12. Admin Contract Rules](#admin)[13. Contract QA And Handover Checklist](#handover)

</div>

</div>

<div id="scope" class="section section">

<div class="section-num">

01

</div>

<div class="eyebrow">

Scope

</div>

## How To Use This Spec

The purpose of this document is to prevent backend, mobile, and admin teams from building against assumptions. Every consumer should know which flow owns which API, which operations are real-time, which operations are durable REST transactions, and which decisions are intentionally deferred.

<div class="card-grid">

<div class="card">

Backend Team

#### Build contracts first

Publish stub endpoints, DTOs, response shapes, errors, and OpenAPI references early enough that mobile and admin are not blocked.

</div>

<div class="card">

Mobile Team

#### Bind flows to contracts

Use REST for state transitions, payments, reports, KYC, and account actions. Use sockets only for chat, support live chat, tracking, and presence.

</div>

<div class="card">

Admin Team

#### Operate from auditability

Admin contracts must preserve role checks, TOTP checks for high-impact actions, reason capture, and immutable audit logs.

</div>

</div>

<div class="callout amber">

**Important boundary**

Socket events are not a substitute for durable business transactions. Payments, KYC, withdrawals, disputes, task state changes, direct offers, and admin actions must be REST/API-driven and database-backed.

</div>

<div class="diagram">

<div class="diagram-head">

#### System Boundary Diagram

API + Socket Split

</div>

    Mobile App                Admin Dashboard
       |                            |
       | REST: commands/query       | REST: operations/query
       v                            v
    https://api.work2cash.ng  <---- Admin auth/RBAC/TOTP
       |
       | Use cases, ports, adapters, workers
       v
    PostgreSQL + Valkey + BullMQ + Provider Adapters
       ^
       | Real-time permitted only for chat, support live chat, tracking, presence
       |
    https://socket.work2cash.ng
       ^
       |
    Mobile App / Admin Support Console

The API host owns durable state. The socket host owns real-time delivery and must reconcile with REST after reconnect.

</div>

</div>

<div id="environments" class="section section">

<div class="section-num">

02

</div>

<div class="eyebrow">

Environments

</div>

## Environment And Boundary Map

Work2Cash separates API and Socket domains so traffic can scale independently while still running on the same NestJS codebase if needed. The split is DNS, routing, deployment, and gateway-level separation; it does not require two unrelated backend applications.

<div class="table-wrap">

| Environment | Surface       | URL                                   | Purpose                                                     | Notes                                           |
|-------------|---------------|---------------------------------------|-------------------------------------------------------------|-------------------------------------------------|
| Production  | Website       | `https://work2cash.ng`                | Public product site and download entry.                     | www redirects to root domain.                   |
| Production  | API           | `https://api.work2cash.ng`            | REST API for mobile, admin, webhooks where provider allows. | Primary durable contract surface.               |
| Production  | Admin         | `https://admin.work2cash.ng`          | Next.js admin dashboard.                                    | Admin TOTP and RBAC required.                   |
| Production  | Socket        | `https://socket.work2cash.ng`         | Socket.IO gateway for real-time features.                   | Uses token auth and Valkey adapter when scaled. |
| Staging     | Website/Admin | `https://staging.work2cash.ng`        | Staging web/admin surface.                                  | Ultra-lean Hetzner staging path.                |
| Staging     | API           | `https://api-staging.work2cash.ng`    | Staging REST API.                                           | Used by staging mobile/admin builds.            |
| Staging     | Socket        | `https://socket-staging.work2cash.ng` | Staging Socket.IO gateway.                                  | Used by staging mobile/admin builds.            |

</div>

<div class="callout">

**Same NestJS server option**

The same NestJS deployment can serve REST and Socket.IO if the reverse proxy routes `api.work2cash.ng` to REST controllers and `socket.work2cash.ng` to the Socket.IO gateway path. Separating domains keeps room for future scale-out without changing mobile/admin contracts.

</div>

</div>

<div id="principles" class="section section">

<div class="section-num">

03

</div>

<div class="eyebrow">

Principles

</div>

## Contract Principles

<div class="card-grid">

<div class="card">

Durable State

#### REST owns decisions

Task acceptance, rejection, cancellation, payment, withdrawal, KYC, report, and admin resolution must be REST commands.

</div>

<div class="card">

Real Time

#### Socket owns presence

Chat, live support messages, tracking updates, and presence are socket events, but source-of-truth recovery still comes from REST.

</div>

<div class="card">

Cost Control

#### Batch and guard paid calls

Google ETA refresh uses the 5-minute plus 10% journey milestone guard. Provider calls must be idempotent and queued where practical.

</div>

<div class="card">

Privacy

#### Reveal only when eligible

Exact address, full proof media, real phone numbers, provider payloads, and payment-sensitive details must be protected.

</div>

<div class="card">

UX

#### Cardless payment by default

Payment UX should prefer bank transfer, USSD, provider redirect/status, and wallet prompts through Paystack and Moniepoint.

</div>

<div class="card">

Audit

#### High-impact actions are traceable

Admin actions, penalties, settlement holds, payout approvals, and security changes must capture actor, reason, requestId, and timestamp.

</div>

</div>

</div>

<div id="auth" class="section section">

<div class="section-num">

04

</div>

<div class="eyebrow">

Security

</div>

## Authentication, Sessions, And Security

Authentication supports password login, Google login, and Apple login. The account model is unified: a user may operate as Task Owner, Tasker, or both. Mode switching uses the accepted `mode` field.

<div class="diagram">

<div class="diagram-head">

#### Auth Lifecycle

Login Recovery

</div>

    Register
      -> OTP verification
      -> Login
      -> KYC if Tasker activation is needed
      -> Complete profile
      -> Setup PIN
      -> Home

    Login
      -> /me returns nextRequiredAction
      -> if KYC incomplete: KYC subflow
      -> if profile incomplete: Complete Profile subflow
      -> if PIN missing: PIN Setup subflow
      -> Home

    Broken registration is repaired by login:
      Login never assumes registration completed perfectly.
      /me tells the app what standalone subflow must run next.

The login flow must solidify broken registration by routing the user into the missing standalone subflow.

</div>

<div class="table-wrap">

| Method                              | Path                    | Actor      | Purpose                                                                  | Auth               | Idempotency                    | Flow Refs         | Notes                                                                           |
|-------------------------------------|-------------------------|------------|--------------------------------------------------------------------------|--------------------|--------------------------------|-------------------|---------------------------------------------------------------------------------|
| <span class="pill blue">POST</span> | `/auth/register`        | Guest      | Create a new account using email or phone details.                       | Public             | Recommended by clientRequestId | Registration      | Must start OTP verification before full access.                                 |
| <span class="pill blue">POST</span> | `/auth/login`           | Guest      | Authenticate with password and issue access/refresh tokens.              | Public             | No                             | Login             | Returns nextRequiredAction when KYC, profile, PIN, or mode setup is incomplete. |
| <span class="pill blue">POST</span> | `/auth/social/google`   | Guest      | Authenticate or create account using Google identity.                    | Public             | Recommended                    | Social Auth       | Facebook is excluded from MVP.                                                  |
| <span class="pill blue">POST</span> | `/auth/social/apple`    | Guest      | Authenticate or create account using Apple identity.                     | Public             | Recommended                    | Social Auth       | Required for iOS if social login is offered.                                    |
| <span class="pill blue">POST</span> | `/auth/otp/send`        | Guest/User | Send OTP for email, phone, recovery, or sensitive verification fallback. | Conditional        | Yes by purpose+recipient       | OTP Subflow       | Email is attempted first; Termii SMS is fallback.                               |
| <span class="pill blue">POST</span> | `/auth/otp/verify`      | Guest/User | Verify OTP and mark the verification purpose as complete.                | Conditional        | Yes                            | OTP Subflow       | OTP is not used as the default sensitive-action confirmation; PIN is.           |
| <span class="pill blue">POST</span> | `/auth/password/forgot` | Guest      | Start password reset using email first then SMS fallback.                | Public             | Yes                            | Password Recovery | Response must not reveal whether account exists.                                |
| <span class="pill blue">POST</span> | `/auth/password/reset`  | Guest      | Complete password reset after valid OTP/recovery token.                  | Public             | Yes                            | Password Recovery | Revokes old refresh tokens after success.                                       |
| <span class="pill blue">POST</span> | `/auth/refresh`         | User       | Rotate refresh token and issue a fresh access token.                     | Refresh token      | Yes                            | Session Recovery  | Reuse detection must revoke compromised token family.                           |
| <span class="pill blue">POST</span> | `/auth/logout`          | User       | Invalidate the current session.                                          | Access token       | Yes                            | Logout            | Client clears local tokens after success.                                       |
| <span class="pill blue">POST</span> | `/auth/logout-all`      | User       | Revoke all sessions for the user.                                        | Access token + PIN | Yes                            | Security          | Sensitive action; requires PIN.                                                 |

</div>

<div class="table-wrap">

| Method                                      | Path                             | Actor | Purpose                                                                                | Auth               | Idempotency | Flow Refs         | Notes                                                                |
|---------------------------------------------|----------------------------------|-------|----------------------------------------------------------------------------------------|--------------------|-------------|-------------------|----------------------------------------------------------------------|
| <span class="pill green-pill">GET</span>    | `/me`                            | User  | Return authenticated user, mode, KYC, profile completeness, wallets, and next actions. | Access token       | No          | App Boot          | This is the mobile source of truth after login and socket reconnect. |
| <span class="pill blue">PATCH</span>        | `/me/profile`                    | User  | Update profile fields such as name, photo, gender, and contact metadata.               | Access token       | No          | Complete Profile  | Changing email/phone is a sensitive action and requires PIN.         |
| <span class="pill blue">POST</span>         | `/me/mode`                       | User  | Switch visible app mode between Task Owner and Tasker.                                 | Access token       | Yes         | Mode Switch       | Use the accepted field name: mode.                                   |
| <span class="pill green-pill">GET</span>    | `/me/addresses`                  | User  | List saved addresses for task posting and profile convenience.                         | Access token       | No          | Address Book      | Exact addresses are private user data.                               |
| <span class="pill blue">POST</span>         | `/me/addresses`                  | User  | Create a saved address from manual entry or GPS-confirmed pin.                         | Access token       | Yes         | Address Book      | Manual address must be geocoded and confirmed on map.                |
| <span class="pill blue">PATCH</span>        | `/me/addresses/{addressId}`      | User  | Update saved address metadata.                                                         | Access token       | No          | Address Book      | Do not use this to alter historical task site records.               |
| <span class="pill amber-pill">DELETE</span> | `/me/addresses/{addressId}`      | User  | Remove saved address from future use.                                                  | Access token       | Yes         | Address Book      | Soft delete preferred.                                               |
| <span class="pill green-pill">GET</span>    | `/me/notification-preferences`   | User  | Return push, email, SMS, and announcement preference settings.                         | Access token       | No          | Preferences       | Critical safety/payment messages may bypass marketing preferences.   |
| <span class="pill blue">PATCH</span>        | `/me/notification-preferences`   | User  | Update notification preferences.                                                       | Access token       | No          | Preferences       | SMS critical-only rule remains controlled by platform policy.        |
| <span class="pill blue">POST</span>         | `/me/security-pin/setup`         | User  | Create first security PIN after identity/contact checks.                               | Access token       | Yes         | PIN Setup         | PIN is required for withdrawals and sensitive actions.               |
| <span class="pill blue">POST</span>         | `/me/security-pin/verify`        | User  | Verify PIN for a sensitive operation.                                                  | Access token       | Yes         | Sensitive Action  | Never return or log the PIN.                                         |
| <span class="pill blue">POST</span>         | `/me/security-pin/reset/start`   | User  | Start PIN reset through OTP and risk checks.                                           | Access token       | Yes         | PIN Reset         | OTP is used for PIN recovery, not routine confirmations.             |
| <span class="pill blue">POST</span>         | `/me/security-pin/reset/confirm` | User  | Set new PIN after reset verification.                                                  | Access token       | Yes         | PIN Reset         | Revoke sessions if risk score requires it.                           |
| <span class="pill green-pill">GET</span>    | `/me/sessions`                   | User  | List active devices and sessions.                                                      | Access token       | No          | Device Management | Admin can also view risk metadata, not raw tokens.                   |
| <span class="pill amber-pill">DELETE</span> | `/me/sessions/{sessionId}`       | User  | Revoke another device session.                                                         | Access token + PIN | Yes         | Device Management | Sensitive action.                                                    |

</div>

<div class="callout red">

**Sensitive action rule**

PIN confirmation is required for changing phone number, changing email, changing password, adding or changing Tasker payout account, requesting withdrawal, high-risk wallet/payment actions, and revoking other sessions. OTP is reserved for PIN reset/recovery and contact verification.

</div>

</div>

<div id="standards" class="section section">

<div class="section-num">

05

</div>

<div class="eyebrow">

Standards

</div>

## Response, Error, Pagination, And Idempotency

Every REST endpoint and socket acknowledgement must use predictable shapes. This allows Flutter, Next.js, QA, and backend tests to share the same mental model.

<div class="two-col">

<div class="code-block">

<div class="code-title">

Success Response

</div>

    {
      "success": true,
      "message": "Task created successfully.",
      "data": {
        "id": "task_123"
      },
      "meta": {
        "requestId": "req_01H...",
        "timestamp": "2026-07-03T10:00:00Z"
      }
    }

</div>

<div class="code-block">

<div class="code-title">

Error Response

</div>

    {
      "success": false,
      "message": "Security PIN is required.",
      "error": {
        "code": "PIN_REQUIRED",
        "details": {
          "action": "REQUEST_WITHDRAWAL"
        }
      },
      "meta": {
        "requestId": "req_01H..."
      }
    }

</div>

</div>

<div class="code-block">

<div class="code-title">

Paginated Response

</div>

    {
      "success": true,
      "message": "Tasks returned.",
      "data": [ ],
      "meta": {
        "requestId": "req_01H...",
        "pagination": {
          "limit": 20,
          "nextCursor": "cursor_abc",
          "total": 153
        }
      }
    }

</div>

<div class="table-wrap">

| Rule                | Required Standard                                                                                                                                      | Reason                                                                                |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| Request correlation | Every API response, socket ack, worker log, and webhook record carries `requestId` or `correlationId`.                                                 | Allows tracing across REST, socket, queues, and providers.                            |
| Idempotency         | Payment, webhook, wallet, media finalization, task state transition, settlement, and payout endpoints must accept or derive idempotency keys.          | Prevents duplicate charges, duplicate ledger entries, and repeated state transitions. |
| Error codes         | Use stable machine-readable codes such as `PIN_REQUIRED`, `KYC_REQUIRED`, `TASK_STATE_INVALID`, `LOCATION_OUTSIDE_NIGERIA`.                            | Flutter and admin can show correct error states.                                      |
| Loading states      | GET/fetch calls should support skeletonized views. POST/PATCH submit states should show blur overlay with spinning Work2Cash logo on frontend clients. | Keeps UX consistent across mobile and admin.                                          |
| Privacy             | Never expose OTPs, PINs, real phone numbers, provider secrets, raw KYC secrets, private addresses before eligibility, or hidden media URLs.            | Protects users and platform trust.                                                    |

</div>

</div>

<div id="rest" class="section section">

<div class="section-num">

06

</div>

<div class="eyebrow">

REST

</div>

## REST API Contract Index

This section maps core mobile and admin flows to REST endpoints. Exact DTOs can evolve during implementation, but the ownership boundaries, state rules, auth requirements, and idempotency rules are source-of-truth constraints.

### KYC And Tasker Activation

<div class="table-wrap">

| Method                                   | Path                                        | Actor | Purpose                                                      | Auth                              | Idempotency | Flow Refs         | Notes                                                                            |
|------------------------------------------|---------------------------------------------|-------|--------------------------------------------------------------|-----------------------------------|-------------|-------------------|----------------------------------------------------------------------------------|
| <span class="pill blue">POST</span>      | `/kyc/start`                                | User  | Open a KYC attempt for Tasker activation.                    | Access token                      | Yes         | Tasker Activation | Taskers cannot accept tasks until KYC is approved.                               |
| <span class="pill blue">POST</span>      | `/kyc/nin-bvn`                              | User  | Submit NIN or BVN for verification through Smile ID adapter. | Access token                      | Yes         | KYC               | Provider payloads must be encrypted at rest where required.                      |
| <span class="pill blue">POST</span>      | `/kyc/face-capture`                         | User  | Submit biometric face capture reference or uploaded media.   | Access token                      | Yes         | KYC               | Use signed upload flow if media is large.                                        |
| <span class="pill green-pill">GET</span> | `/kyc/status`                               | User  | Return current KYC state and allowed next action.            | Access token                      | No          | KYC               | Mobile polls only at controlled points; push/notification can inform completion. |
| <span class="pill blue">POST</span>      | `/admin/kyc/{kycId}/request-reverification` | Admin | Ask user to repeat KYC due to risk, expiry, or mismatch.     | Admin token + TOTP where required | Yes         | Admin KYC         | Must write audit log and reason.                                                 |

</div>

### Catalog And Task Categories

<div class="table-wrap">

| Method                                   | Path                                             | Actor      | Purpose                                        | Auth         | Idempotency | Flow Refs     | Notes                                           |
|------------------------------------------|--------------------------------------------------|------------|------------------------------------------------|--------------|-------------|---------------|-------------------------------------------------|
| <span class="pill green-pill">GET</span> | `/catalog/categories`                            | User/Admin | List active task categories and display order. | Access token | No          | Task Creation | MVP categories: Home, Errands, Office, Support. |
| <span class="pill green-pill">GET</span> | `/catalog/task-types`                            | User/Admin | List task types under each category.           | Access token | No          | Task Creation | Client should cache and refresh on app boot.    |
| <span class="pill blue">POST</span>      | `/admin/catalog/categories`                      | Admin      | Create category or task type.                  | Admin token  | Yes         | Admin Catalog | Use carefully; affects mobile task creation.    |
| <span class="pill blue">PATCH</span>     | `/admin/catalog/categories/{categoryId}`         | Admin      | Update labels, ordering, and visibility.       | Admin token  | No          | Admin Catalog | Renames should preserve stable IDs.             |
| <span class="pill blue">POST</span>      | `/admin/catalog/categories/{categoryId}/disable` | Admin      | Disable category for new tasks.                | Admin token  | Yes         | Admin Catalog | Existing tasks remain valid.                    |
| <span class="pill blue">POST</span>      | `/admin/catalog/categories/{categoryId}/archive` | Admin      | Archive unused or retired category.            | Admin token  | Yes         | Admin Catalog | Hard delete only unused drafts.                 |

</div>

### Task Owner APIs

<div class="table-wrap">

| Method                                   | Path                                              | Actor      | Purpose                                                                                                 | Auth         | Idempotency | Flow Refs        | Notes                                                                      |
|------------------------------------------|---------------------------------------------------|------------|---------------------------------------------------------------------------------------------------------|--------------|-------------|------------------|----------------------------------------------------------------------------|
| <span class="pill blue">POST</span>      | `/task-owner/tasks/drafts`                        | Task Owner | Create a draft task.                                                                                    | Access token | Yes         | Post Task        | Minimum task amount is NGN 2,000.                                          |
| <span class="pill blue">PATCH</span>     | `/task-owner/tasks/{taskId}`                      | Task Owner | Update task title, category, description, budget, required arrival time, and visibility while editable. | Access token | No          | Post Task        | After payment/broadcast, allowed fields narrow by state.                   |
| <span class="pill blue">POST</span>      | `/task-owner/tasks/{taskId}/location/geocode`     | Task Owner | Convert manual address to coordinates.                                                                  | Access token | Yes         | Location Subflow | Task site must be in Nigeria.                                              |
| <span class="pill blue">POST</span>      | `/task-owner/tasks/{taskId}/location/confirm-pin` | Task Owner | Confirm exact map pin before posting.                                                                   | Access token | Yes         | Location Subflow | Exact address remains hidden publicly.                                     |
| <span class="pill blue">POST</span>      | `/task-owner/tasks/{taskId}/media`                | Task Owner | Upload proof of work to be done.                                                                        | Access token | Yes         | Proof Media      | Photos/videos up to 50MB each; permission-controlled access.               |
| <span class="pill blue">POST</span>      | `/task-owner/tasks/{taskId}/payment-intent`       | Task Owner | Create Paystack or Moniepoint payment session.                                                          | Access token | Yes         | Payment          | Task Owner sees task amount and processing fee separately.                 |
| <span class="pill blue">POST</span>      | `/task-owner/tasks/{taskId}/broadcast`            | Task Owner | Move a funded task into public broadcast.                                                               | Access token | Yes         | Broadcast        | Task appears nearest-first to eligible Taskers.                            |
| <span class="pill blue">POST</span>      | `/task-owner/tasks/{taskId}/direct-offers`        | Task Owner | Send direct offer to a favorite Tasker.                                                                 | Access token | Yes         | Direct Offer     | Direct offers are REST/FCM, not socket-based.                              |
| <span class="pill green-pill">GET</span> | `/task-owner/tasks/{taskId}/candidates`           | Task Owner | List interested/available Taskers with ETA and profile summary.                                         | Access token | No          | Select Tasker    | Task Owner decides based on ETA; platform does not auto-reject by default. |
| <span class="pill blue">POST</span>      | `/task-owner/tasks/{taskId}/accept-tasker`        | Task Owner | Accept a Tasker for the task.                                                                           | Access token | Yes         | Select Tasker    | Unlocks exact address and communication permissions.                       |
| <span class="pill blue">POST</span>      | `/task-owner/tasks/{taskId}/reject-tasker`        | Task Owner | Reject a Tasker before movement or within allowed movement grace window.                                | Access token | Yes         | Select Tasker    | Repeated movement-stage rejection creates risk flag.                       |
| <span class="pill blue">POST</span>      | `/task-owner/tasks/{taskId}/confirm-completion`   | Task Owner | Approve completed task and release escrow if no hold applies.                                           | Access token | Yes         | Completion       | If refused, Tasker can report/dispute for admin review.                    |
| <span class="pill blue">POST</span>      | `/task-owner/tasks/{taskId}/cancel`               | Task Owner | Cancel task under current state rules.                                                                  | Access token | Yes         | Cancellation     | Penalty/warning depends on task state.                                     |
| <span class="pill blue">POST</span>      | `/task-owner/tasks/{taskId}/report`               | Task Owner | Report issue linked to a task.                                                                          | Access token | Yes         | Report           | Options include off-platform solicitation and no-show.                     |
| <span class="pill blue">POST</span>      | `/task-owner/tasks/{taskId}/rebook`               | Task Owner | Create repeat task from a previous completed task.                                                      | Access token | Yes         | Rebook           | Can target favorite Tasker or broadcast again.                             |

</div>

### Tasker APIs

<div class="table-wrap">

| Method                                   | Path                                        | Actor  | Purpose                                                                                | Auth         | Idempotency | Flow Refs        | Notes                                                                                  |
|------------------------------------------|---------------------------------------------|--------|----------------------------------------------------------------------------------------|--------------|-------------|------------------|----------------------------------------------------------------------------------------|
| <span class="pill green-pill">GET</span> | `/tasker/profile`                           | Tasker | Return Tasker profile, KYC state, skills, ratings, payout readiness, and availability. | Access token | No          | Tasker Home      | Requires unified user account.                                                         |
| <span class="pill blue">PATCH</span>     | `/tasker/profile`                           | Tasker | Update skills, bio, task categories, service locations, and profile metadata.          | Access token | No          | Tasker Profile   | Tasker activation requires KYC.                                                        |
| <span class="pill blue">PATCH</span>     | `/tasker/preferences`                       | Tasker | Update work preferences and max travel radius.                                         | Access token | No          | Availability     | Auto accept remains deferred.                                                          |
| <span class="pill blue">POST</span>      | `/tasker/availability`                      | Tasker | Set available/unavailable status.                                                      | Access token | Yes         | Availability     | Tasker location is required while active.                                              |
| <span class="pill green-pill">GET</span> | `/tasker/tasks`                             | Tasker | List available tasks sorted nearest first with location filtering.                     | Access token | No          | Find Tasks       | Tasker must be in Nigeria to accept tasks.                                             |
| <span class="pill green-pill">GET</span> | `/tasker/tasks/{taskId}`                    | Tasker | Return public task details, limited media summary, distance, and arrival requirement.  | Access token | No          | Task Detail      | Exact address and full proof media are restricted until acceptance/payment rules pass. |
| <span class="pill blue">POST</span>      | `/tasker/tasks/{taskId}/interest`           | Tasker | Declare interest and confirm ability to arrive by required time.                       | Access token | Yes         | Task Interest    | Task Owner sees ETA and decides.                                                       |
| <span class="pill blue">POST</span>      | `/tasker/tasks/{taskId}/accept`             | Tasker | Accept direct offer or accepted assignment where state allows.                         | Access token | Yes         | Accept Task      | Must pass KYC, location, strike, and availability checks.                              |
| <span class="pill blue">POST</span>      | `/tasker/tasks/{taskId}/decline`            | Tasker | Decline direct offer or withdraw interest before commitment.                           | Access token | Yes         | Decline          | No penalty before accepted assignment.                                                 |
| <span class="pill blue">POST</span>      | `/tasker/tasks/{taskId}/start-journey`      | Tasker | Mark movement toward task site.                                                        | Access token | Yes         | Execution        | Enables live tracking and movement-stage rejection window.                             |
| <span class="pill blue">POST</span>      | `/tasker/tasks/{taskId}/arrived`            | Tasker | Mark arrival at task site.                                                             | Access token | Yes         | Execution        | Task Owner can report late/no-show after grace window if needed.                       |
| <span class="pill blue">POST</span>      | `/tasker/tasks/{taskId}/begin`              | Tasker | Begin the task after arrival.                                                          | Access token | Yes         | Execution        | This is the Begin Task button in app.                                                  |
| <span class="pill blue">POST</span>      | `/tasker/tasks/{taskId}/completion-proof`   | Tasker | Upload proof of work done.                                                             | Access token | Yes         | Completion Proof | Photos/videos up to 50MB each.                                                         |
| <span class="pill blue">POST</span>      | `/tasker/tasks/{taskId}/request-completion` | Tasker | Ask Task Owner to approve completed work.                                              | Access token | Yes         | Completion       | If Task Owner refuses, Tasker can raise report/dispute.                                |
| <span class="pill blue">POST</span>      | `/tasker/tasks/{taskId}/cancel`             | Tasker | Cancel accepted task.                                                                  | Access token | Yes         | Cancellation     | After accepting, Tasker receives one warning; no-show is one strike.                   |

</div>

<div class="diagram">

<div class="diagram-head">

#### Task Lifecycle REST + Socket Split

State Ownership

</div>

    Task Owner creates task draft         REST
    Task Owner confirms location/media    REST
    Task Owner funds task                 REST + Provider webhook
    Task enters broadcast                 REST command + FCM notify
    Tasker shows interest                 REST
    Task Owner accepts/rejects Tasker     REST
    Tasker starts journey                 REST, then tracking socket begins
    Tasker taps I have arrived            REST
    Tasker taps Begin Task                REST
    Chat / tracking / presence            Socket
    Tasker requests completion            REST
    Task Owner approves or reports        REST
    Escrow release or hold                Worker + REST observable state

The task state machine is never driven only by socket events. Socket improves live experience, while REST preserves truth.

</div>

### Wallet, Payment, Escrow, And Payout APIs

<div class="table-wrap">

| Method                                   | Path                                             | Actor         | Purpose                                               | Auth               | Idempotency       | Flow Refs     | Notes                                                     |
|------------------------------------------|--------------------------------------------------|---------------|-------------------------------------------------------|--------------------|-------------------|---------------|-----------------------------------------------------------|
| <span class="pill green-pill">GET</span> | `/wallets`                                       | User          | Return Task Owner wallet and Tasker wallet summaries. | Access token       | No                | Wallet        | Wallets are separate even though account is unified.      |
| <span class="pill green-pill">GET</span> | `/wallets/{walletId}/ledger`                     | User/Admin    | Return wallet ledger entries.                         | Access token       | No                | Wallet        | Admin access is permission-controlled.                    |
| <span class="pill blue">POST</span>      | `/payments/verify`                               | Task Owner    | Verify payment redirect/status from client side.      | Access token       | Yes               | Payment       | Backend must still trust webhooks as final authority.     |
| <span class="pill blue">POST</span>      | `/webhooks/paystack`                             | Provider      | Receive Paystack payment/transfer events.             | Signature          | Provider event ID | Webhook       | Use raw body signature verification and async processing. |
| <span class="pill blue">POST</span>      | `/webhooks/moniepoint`                           | Provider      | Receive Moniepoint payment/transfer events.           | Signature          | Provider event ID | Webhook       | Must be idempotent.                                       |
| <span class="pill green-pill">GET</span> | `/tasker/payout-account`                         | Tasker        | Return payout account setup status.                   | Access token       | No                | Payout Setup  | Do not expose full bank details.                          |
| <span class="pill blue">POST</span>      | `/tasker/payout-account`                         | Tasker        | Add or change Tasker payout account.                  | Access token + PIN | Yes               | Payout Setup  | Sensitive action.                                         |
| <span class="pill blue">POST</span>      | `/tasker/withdrawals`                            | Tasker        | Request withdrawal into next eligible payout batch.   | Access token + PIN | Yes               | Withdrawal    | Minimum withdrawal is NGN 1,000.                          |
| <span class="pill green-pill">GET</span> | `/tasker/withdrawals`                            | Tasker        | List withdrawal requests and batch status.            | Access token       | No                | Withdrawal    | Payout dates are 14th and 28th.                           |
| <span class="pill blue">POST</span>      | `/admin/payout-batches`                          | Admin Finance | Create payout batch for eligible withdrawal requests. | Admin token        | Yes               | Finance Admin | Bulk transfer through Paystack or Moniepoint.             |
| <span class="pill blue">POST</span>      | `/admin/payout-batches/{batchId}/approve`        | Admin Finance | Approve prepared payout batch.                        | Admin token + TOTP | Yes               | Finance Admin | Disputed Taskers require admin authorization.             |
| <span class="pill blue">POST</span>      | `/admin/payout-batches/{batchId}/mark-processed` | Admin Finance | Finalize payout batch after provider processing.      | Admin token + TOTP | Yes               | Finance Admin | Record provider references per item.                      |

</div>

### Ratings, Favorites, Reports, Support, And Notifications

<div class="table-wrap">

| Method                                      | Path                                   | Actor             | Purpose                                        | Auth         | Idempotency | Flow Refs         | Notes                                                                                                    |
|---------------------------------------------|----------------------------------------|-------------------|------------------------------------------------|--------------|-------------|-------------------|----------------------------------------------------------------------------------------------------------|
| <span class="pill blue">POST</span>         | `/tasks/{taskId}/ratings`              | Task Owner/Tasker | Submit rating and review after completed task. | Access token | Yes         | Ratings           | Task Owner can add Tasker to favorites during rating.                                                    |
| <span class="pill green-pill">GET</span>    | `/favorites/taskers`                   | Task Owner        | List favorite Taskers.                         | Access token | No          | Favorites         | Used for direct offer selection.                                                                         |
| <span class="pill blue">POST</span>         | `/favorites/taskers`                   | Task Owner        | Add Tasker to favorites.                       | Access token | Yes         | Favorites         | Usually offered after rating.                                                                            |
| <span class="pill amber-pill">DELETE</span> | `/favorites/taskers/{taskerId}`        | Task Owner        | Remove favorite Tasker.                        | Access token | Yes         | Favorites         | Soft remove using status.                                                                                |
| <span class="pill blue">POST</span>         | `/tasks/{taskId}/reports`              | User              | Create report/dispute linked to a task.        | Access token | Yes         | Reports           | Reports can cover payment, safety, no-show, poor work, off-platform solicitation, or completion refusal. |
| <span class="pill green-pill">GET</span>    | `/reports/{reportId}`                  | User/Admin        | Return report status and allowed next action.  | Access token | No          | Reports           | User sees only own report scope.                                                                         |
| <span class="pill blue">POST</span>         | `/support/sessions`                    | User              | Open support live chat session.                | Access token | Yes         | Support Chat      | Live chat uses socket events after session creation.                                                     |
| <span class="pill blue">POST</span>         | `/support/emergency`                   | User              | Open emergency support request.                | Access token | Yes         | Emergency Support | Priority routing for safety-related cases.                                                               |
| <span class="pill green-pill">GET</span>    | `/notifications`                       | User              | List in-app notifications.                     | Access token | No          | Notifications     | FCM wakes device; in-app list provides durable state.                                                    |
| <span class="pill blue">POST</span>         | `/notifications/{notificationId}/read` | User              | Mark notification read.                        | Access token | Yes         | Notifications     | Idempotent by notification ID.                                                                           |

</div>

### Communication, Voice Notes, And Masked Call APIs

<div class="table-wrap">

| Method                                   | Path                                            | Actor                    | Purpose                                                                                         | Auth                              | Idempotency | Flow Refs           | Notes                                                                                                    |
|------------------------------------------|-------------------------------------------------|--------------------------|-------------------------------------------------------------------------------------------------|-----------------------------------|-------------|---------------------|----------------------------------------------------------------------------------------------------------|
| <span class="pill blue">POST</span>      | `/tasks/{taskId}/call-sessions`                 | Task Owner/Tasker        | Create or retrieve a masked call session for an eligible task state.                            | Access token                      | Yes         | Masked Calls        | Returns Work2Cash proxy number; never returns real recipient number.                                     |
| <span class="pill green-pill">GET</span> | `/tasks/{taskId}/call-sessions/active`          | Task Owner/Tasker        | Return active masked call session if one exists.                                                | Access token                      | No          | Masked Calls        | Only available for accepted, en route, arrived, in progress, completion, or valid dispute window states. |
| <span class="pill blue">POST</span>      | `/tasks/{taskId}/call-sessions/{sessionId}/end` | Task Owner/Tasker/System | Close a masked call session.                                                                    | Access token or provider callback | Yes         | Masked Calls        | Used when task ends, session expires, or provider reports call completion.                               |
| <span class="pill green-pill">GET</span> | `/tasks/{taskId}/communications`                | Task Owner/Tasker/Admin  | Return communication summary for task chat, voice notes, masked call sessions, and audit flags. | Access token                      | No          | Communication Audit | Admin sees policy/audit metadata according to permission; users see their task communication scope.      |
| <span class="pill blue">POST</span>      | `/tasks/{taskId}/voice-notes`                   | Task Owner/Tasker        | Finalize uploaded voice note metadata for task chat.                                            | Access token                      | Yes         | Voice Notes         | Actual delivery notification is socket-based after media metadata is stored.                             |

</div>

### System APIs

<div class="table-wrap">

| Method                                   | Path       | Actor         | Purpose                                                 | Auth            | Idempotency | Flow Refs         | Notes                                                   |
|------------------------------------------|------------|---------------|---------------------------------------------------------|-----------------|-------------|-------------------|---------------------------------------------------------|
| <span class="pill green-pill">GET</span> | `/health`  | Load balancer | Basic liveness check.                                   | Public/internal | No          | Ops               | No database dependency.                                 |
| <span class="pill green-pill">GET</span> | `/ready`   | Load balancer | Readiness check for API dependencies.                   | Internal        | No          | Ops               | Checks database, Valkey, queues, and critical adapters. |
| <span class="pill green-pill">GET</span> | `/metrics` | Monitoring    | Expose service metrics for monitoring.                  | Internal        | No          | Ops               | Do not expose publicly.                                 |
| <span class="pill green-pill">GET</span> | `/version` | Client/Admin  | Return deployed API version and compatibility metadata. | Public          | No          | App Compatibility | Useful for Shorebird/client support.                    |

</div>

</div>

<div id="socket" class="section section">

<div class="section-num">

07

</div>

<div class="eyebrow">

Socket.IO

</div>

## Socket.IO Contract

Socket.IO is self-hosted and used for real-time experiences that benefit from low-latency updates. It is not used for direct offers, payment status truth, KYC status truth, durable dispute resolution, withdrawal requests, or admin finance decisions.

<div class="code-block">

<div class="code-title">

Socket Event Envelope

</div>

    {
      "eventId": "evt_01H...",
      "requestId": "req_01H...",
      "occurredAt": "2026-07-03T10:00:00Z",
      "actor": {
        "userId": "user_123",
        "role": "TASKER"
      },
      "data": { }
    }

</div>

<div class="code-block">

<div class="code-title">

Socket Acknowledgement

</div>

    {
      "success": true,
      "message": "Accepted.",
      "data": {
        "messageId": "msg_123"
      },
      "meta": {
        "requestId": "req_01H..."
      }
    }

</div>

<div class="table-wrap">

| Namespace | Event                      | Direction         | Used By             | Purpose                                                        | Persistence                  |
|-----------|----------------------------|-------------------|---------------------|----------------------------------------------------------------|------------------------------|
| /task     | task.room.join             | Client -\> Server | Task Owner, Tasker  | Join task room after membership/state authorization.           | No                           |
| /task     | task.chat.send             | Client -\> Server | Task Owner, Tasker  | Send task chat message after task is accepted.                 | Async PostgreSQL save        |
| /task     | task.chat.new              | Server -\> Client | Task Owner, Tasker  | Deliver new chat message.                                      | Already queued for save      |
| /task     | task.chat.read             | Both              | Task Owner, Tasker  | Mark messages read and broadcast read receipt.                 | Yes                          |
| /task     | task.chat.typing           | Both              | Task Owner, Tasker  | Transient typing indicator.                                    | No                           |
| /task     | task.voice.created         | Server -\> Client | Task Owner, Tasker  | Notify that a voice note media object is ready.                | Media metadata saved         |
| /support  | support.session.join       | Client -\> Server | User, Support Admin | Join support live chat session.                                | No                           |
| /support  | support.message.send       | Client -\> Server | User, Support Admin | Send support live chat message.                                | Async PostgreSQL save        |
| /support  | support.message.new        | Server -\> Client | User, Support Admin | Deliver support message.                                       | Already queued for save      |
| /support  | support.assignment.updated | Server -\> Client | User, Support Admin | Notify support agent assignment or reassignment.               | Yes                          |
| /tracking | tracking.location.update   | Tasker -\> Server | Tasker              | Stream Tasker GPS while accepted/en route/arrived/in progress. | Latest state + sampled audit |
| /tracking | tracking.location.updated  | Server -\> Client | Task Owner          | Send allowed live location update.                             | No                           |
| /tracking | tracking.eta.updated       | Server -\> Client | Task Owner, Tasker  | Send ETA after backend guard permits paid refresh.             | Yes                          |
| /presence | presence.heartbeat         | Client -\> Server | User/Admin          | Maintain online/available state.                               | Latest state                 |
| /presence | presence.updated           | Server -\> Client | Authorized viewers  | Broadcast presence changes where relevant.                     | No                           |

</div>

<div class="diagram">

<div class="diagram-head">

#### Socket Reconnect Recovery

Source Of Truth

</div>

    Socket disconnects
      -> Client shows reconnecting state
      -> Socket reconnects with access token
      -> Client rejoins authorized rooms
      -> Client calls REST /me and active task endpoint
      -> Client compares REST source-of-truth with local state
      -> Missing messages/tracking summaries are fetched or replayed

After reconnect, the app must reconcile with REST. Socket delivery alone is not treated as final business truth.

</div>

<div class="callout amber">

**ETA refresh guard**

Tasker GPS may stream frequently, but paid ETA refresh is allowed only when the 5-minute guard has elapsed and the next 10% total-journey milestone has been crossed. The 10% journey milestone is the main driver. After refresh, reset the guard timer and next milestone.

</div>

</div>

<div id="webhooks" class="section section">

<div class="section-num">

08

</div>

<div class="eyebrow">

Providers

</div>

## Webhook And Provider Callback Contracts

Provider webhooks are treated as external, untrusted input until signature validation, idempotency checks, and state transition guards pass. Frontend redirects are useful for UX, but webhooks and backend verification own final payment truth.

<div class="table-wrap">

| Provider             | Endpoint                 | Primary Events                                                              | Validation                                          | Idempotency Key                     | Processing Rule                                               |
|----------------------|--------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------|-------------------------------------|---------------------------------------------------------------|
| Paystack             | /webhooks/paystack       | charge.success, transfer.success, transfer.failed                           | Verify provider signature on raw body.              | Paystack event ID/reference.        | Store WebhookEvent then process via payment.queue.            |
| Moniepoint           | /webhooks/moniepoint     | payment.success, payment.failed, transfer.status                            | Verify Moniepoint signature/secret scheme.          | Provider event ID/reference.        | Store first, acknowledge fast, process async.                 |
| Smile ID             | /webhooks/smile-id       | KYC approved, rejected, pending, failed                                     | Verify Smile ID callback signature where available. | Smile job/user reference.           | Update KYC attempt and notify user/admin.                     |
| Masked Call Provider | /webhooks/calls/provider | Inbound proxy call, call bridged, call ended, recording metadata if enabled | Verify provider signature and source.               | Call session ID + provider call ID. | Return routing instruction only for valid task-bound session. |

</div>

<div class="diagram">

<div class="diagram-head">

#### Payment And Webhook Processing

Idempotency

</div>

    Task Owner starts payment
      -> API creates provider payment intent
      -> Client redirects or follows provider instruction
      -> Provider sends webhook to API
      -> API verifies signature against raw body
      -> API stores WebhookEvent using provider event ID
      -> payment.queue processes event
      -> Wallet ledger + escrow update in transaction
      -> Task becomes PAID/BROADCASTING when eligible
      -> User receives notification

Payment processing must be idempotent at webhook, ledger, escrow, and task transition levels.

</div>

<div class="callout">

**Masked call provider rule**

Masked calls use proxy dial-in flow for MVP. The caller pays normal airtime; Work2Cash pays provider-side costs. Real phone numbers must not be exposed. Provider selection is to be confirmed during development, with Infobip as the primary candidate and Africa's Talking, Vonage, and Sinch as fallback options.

</div>

</div>

<div id="queues" class="section section">

<div class="section-num">

09

</div>

<div class="eyebrow">

Workers

</div>

## Queue, Job, And Worker Contracts

BullMQ and Valkey support background work, retries, rate limits, and cost control. Queue payloads should contain stable IDs and correlation metadata, not large provider payloads or sensitive raw secrets.

<div class="table-wrap">

| Queue              | Producer                     | Consumers               | Purpose                                                    | Must Be Idempotent |
|--------------------|------------------------------|-------------------------|------------------------------------------------------------|--------------------|
| notification.queue | API, workers, admin          | Notification worker     | FCM, in-app, email, and critical SMS sends.                | Yes                |
| payment.queue      | Webhooks, API                | Payment worker          | Verify payments, update escrow, reconcile provider events. | Yes                |
| kyc.queue          | KYC API, webhooks            | KYC worker              | Smile ID job submission and callback handling.             | Yes                |
| matching.queue     | Task APIs                    | Matching worker         | Broadcast task, direct offers, candidate update jobs.      | Yes                |
| wallet.queue       | Payment/Task/Withdrawal APIs | Wallet worker           | Ledger entries, escrow release, holds, withdrawals.        | Yes                |
| chat.queue         | Socket gateway               | Chat persistence worker | Persist task/support messages and delivery/read states.    | Yes                |
| maps.queue         | Task/tracking APIs           | Maps worker             | Geocoding, ETA refresh, route cost guard.                  | Yes                |
| audit.queue        | All services                 | Audit worker            | Persist admin/security/provider/use case audit events.     | Yes                |
| media.queue        | Media API                    | Media worker            | Moderation, thumbnailing, permission indexing.             | Yes                |
| report.queue       | Report/Admin APIs            | Report worker           | Penalty review timers, escalation, settlement holds.       | Yes                |

</div>

<div class="code-block">

<div class="code-title">

Worker Job Envelope

</div>

    {
      "jobId": "job_01H...",
      "type": "PAYMENT_WEBHOOK_RECEIVED",
      "correlationId": "req_01H...",
      "actorId": null,
      "resource": {
        "type": "WebhookEvent",
        "id": "wh_123"
      },
      "attempt": 1,
      "createdAt": "2026-07-03T10:00:00Z"
    }

</div>

</div>

<div id="schemas" class="section section">

<div class="section-num">

10

</div>

<div class="eyebrow">

Schemas

</div>

## DTO, Schema, And Enum Baseline

This section captures the contract vocabulary that mobile, admin, and backend should agree on before detailed OpenAPI schemas are generated. DTOs must be split by command/query, and each use case should expose explicit params, result, and error conditions.

<div class="card-grid">

<div class="card">

Enum

#### TaskStatus

DRAFT, PENDING_PAYMENT, PAID, DIRECT_OFFER_SENT, DIRECT_OFFER_EXPIRED, BROADCASTING, ACCEPTED, TASKER_EN_ROUTE, ARRIVED, IN_PROGRESS, COMPLETION_REQUESTED, COMPLETED, DISPUTED, CANCELLED, EXPIRED, REFUNDED

</div>

<div class="card">

Enum

#### DirectTaskOfferStatus

SENT, VIEWED, ACCEPTED, DECLINED, EXPIRED, CANCELLED, TASKER_UNAVAILABLE

</div>

<div class="card">

Enum

#### FavoriteTaskerStatus

ACTIVE, REMOVED, BLOCKED

</div>

<div class="card">

Enum

#### TaskMediaStatus

ACTIVE, REMOVED, REJECTED

</div>

<div class="card">

Enum

#### TaskReportStatus

OPEN, UNDER_REVIEW, EVIDENCE_REQUESTED, RESOLVED, DISMISSED, ESCALATED

</div>

<div class="card">

Enum

#### PaymentStatus

INITIATED, PENDING, SUCCESSFUL, FAILED, EXPIRED, REVERSED

</div>

<div class="card">

Enum

#### EscrowStatus

HELD, RELEASED, DISPUTED, REFUNDED, PARTIALLY_REFUNDED

</div>

<div class="card">

Enum

#### WithdrawalStatus

REQUESTED, PROCESSING, SUCCESSFUL, FAILED, REVERSED, FLAGGED, CANCELLED

</div>

</div>

<div class="code-block">

<div class="code-title">

Create Task Draft DTO Example

</div>

    {
      "categoryId": "cat_home",
      "taskTypeId": "task_house_cleaning",
      "title": "Clean two-bedroom apartment",
      "description": "General cleaning before evening.",
      "amount": 5000,
      "requiredArrivalAt": "2026-07-03T15:00:00+01:00",
      "locationInputMode": "MANUAL_ADDRESS"
    }

</div>

<div class="code-block">

<div class="code-title">

Tasker Interest DTO Example

</div>

    {
      "taskId": "task_123",
      "confirmedCanArriveByRequiredTime": true,
      "currentLocation": {
        "latitude": 7.3775,
        "longitude": 3.9470,
        "accuracyMeters": 24
      }
    }

</div>

<div class="table-wrap">

| Object                | Required Contract Rule                                                   | Notes                                                                                        |
|-----------------------|--------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| TaskMedia             | Supports photos and videos up to 50MB per file.                          | Media access must be permission-controlled. Admin can review/remove unsafe or invalid media. |
| TaskLocationGeocode   | Manual address must geocode to coordinates and be confirmed by user pin. | Task site must be in Nigeria.                                                                |
| TaskCallSession       | Task-bound and time-limited.                                             | Recipient sees Work2Cash/proxy number, not caller real number.                               |
| TaskOwnerRejection    | Logs timing, movement state, reason, and risk impact.                    | Repeated movement-stage rejections trigger warning/risk flag.                                |
| TaskSettlementHold    | Applies only when there is an active issue/dispute.                      | Non-disputed Taskers should receive normal escrow release.                                   |
| CommunicationAuditLog | Captures policy-relevant chat/voice/call metadata.                       | Supports off-platform leakage review without exposing unnecessary private content.           |

</div>

</div>

<div id="traceability" class="section section">

<div class="section-num">

11

</div>

<div class="eyebrow">

Traceability

</div>

## Flow-To-Contract Traceability

This section checks the API and socket contract against the corrected mobile and admin flow catalogues. It is meant to help product, QA, backend, mobile, and admin teams quickly see which endpoints support each flow and where sockets are involved.

### Mobile Main Flow Traceability

<div class="table-wrap">

| Flow  | Name                                     | Primary REST Contracts                                                                                                      | Socket / Realtime Contract                                     | Implementation Note                                                                              |
|-------|------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| MF-01 | Registration                             | /auth/register, /auth/otp/send, /auth/otp/verify, /me, /me/profile, /me/security-pin/setup                                  | Socket not required                                            | Repairs through Login + nextRequiredAction if interrupted.                                       |
| MF-02 | Login                                    | /auth/login, /auth/social/google, /auth/social/apple, /auth/refresh, /me                                                    | Socket connects after auth when needed                         | Routes to KYC, profile, PIN, or Home based on backend state.                                     |
| MF-03 | Onboarding and Mode Setup                | /me, /me/mode, /me/profile                                                                                                  | Socket not required                                            | Uses mode field for Task Owner/Tasker context.                                                   |
| MF-04 | Task Owner Home                          | /me, /notifications, /task-owner/tasks/{taskId}/candidates, task summary endpoints                                          | Presence optional                                              | Shows current tasks, wallet state, notifications, and shortcuts.                                 |
| MF-05 | Tasker Activation                        | /kyc/start, /kyc/nin-bvn, /kyc/face-capture, /kyc/status, /tasker/profile                                                   | Socket not required                                            | Tasker cannot accept tasks until KYC and profile are approved.                                   |
| MF-06 | Create and Fund Task                     | /task-owner/tasks/drafts, /task-owner/tasks/{taskId}, /location/geocode, /location/confirm-pin, /media, /payment-intent     | Socket not required                                            | Payment truth comes from backend verification/webhook, not client redirect alone.                |
| MF-07 | Public Discovery and Tasker Interest     | /tasker/tasks, /tasker/tasks/{taskId}, /tasker/tasks/{taskId}/interest, /task-owner/tasks/{taskId}/candidates               | FCM notification, not socket-required                          | Tasks are visible nearest-first and filterable by location.                                      |
| MF-08 | Direct Offer to Favorite Tasker          | /favorites/taskers, /task-owner/tasks/{taskId}/direct-offers, /tasker/tasks/{taskId}/accept, /tasker/tasks/{taskId}/decline | FCM notification; direct offer is not socket-based             | Direct offer status uses durable REST state.                                                     |
| MF-09 | Tasker Browse and Accept Task            | /tasker/tasks, /tasker/tasks/{taskId}, /tasker/tasks/{taskId}/interest, /tasker/tasks/{taskId}/accept                       | Presence optional                                              | Tasker must be in Nigeria and confirm arrival ability.                                           |
| MF-10 | Active Task Execution                    | /tasker/tasks/{taskId}/start-journey, /arrived, /begin, /completion-proof, /request-completion                              | /tracking, /task                                               | Covers Start Journey, I have arrived, Begin Task, chat, voice notes, masked calls, and tracking. |
| MF-11 | Completion and Settlement                | /task-owner/tasks/{taskId}/confirm-completion, /tasks/{taskId}/ratings, wallet/escrow status endpoints                      | Socket may notify chat/presence, but settlement is REST/worker | Escrow release can be held only for active issues/disputes.                                      |
| MF-12 | Cancellation and No-Show                 | /task-owner/tasks/{taskId}/cancel, /tasker/tasks/{taskId}/cancel, /tasks/{taskId}/reports                                   | Socket can update active task UI                               | Warning/strike and penalty rules are backend-enforced.                                           |
| MF-13 | Tasker Withdrawal                        | /tasker/payout-account, /tasker/withdrawals, /wallets, /wallets/{walletId}/ledger                                           | Socket not required                                            | Requires PIN and enters 14th/28th payout batch.                                                  |
| MF-14 | Task History                             | /task-owner/tasks history endpoint, /tasker/tasks history endpoint, /reports/{reportId}, /wallets/{walletId}/ledger         | Socket not required                                            | Exact endpoint names can be finalized in OpenAPI implementation.                                 |
| MF-15 | Favorites                                | /favorites/taskers, /tasks/{taskId}/ratings, /task-owner/tasks/{taskId}/direct-offers                                       | Socket not required                                            | Task Owner can add favorite after rating and rebook/send direct offer later.                     |
| MF-16 | Support Live Chat                        | /support/sessions, /support/emergency, /support/tickets where added                                                         | /support                                                       | Support chat is socket-based after REST creates session.                                         |
| MF-17 | Notifications                            | /notifications, /notifications/{notificationId}/read, /me/notification-preferences                                          | FCM + optional presence                                        | FCM wakes device; in-app notification list is durable REST state.                                |
| MF-18 | Profile and Settings                     | /me, /me/profile, /me/addresses, /me/notification-preferences                                                               | Socket not required                                            | Sensitive changes require PIN.                                                                   |
| MF-19 | Security and Device Management           | /me/security-pin/setup, /verify, /reset/start, /reset/confirm, /me/sessions                                                 | Socket not required                                            | PIN confirms sensitive actions; OTP only for PIN recovery/contact verification.                  |
| MF-20 | Notification Center and Preferences      | /notifications, /notifications/{notificationId}/read, /me/notification-preferences                                          | FCM                                                            | Critical messages may bypass marketing preference limits.                                        |
| MF-21 | Tasker Availability and Work Preferences | /tasker/profile, /tasker/preferences, /tasker/availability                                                                  | /presence                                                      | Auto accept is deferred; Tasker must confirm ability to arrive.                                  |
| MF-22 | Ratings and Reviews                      | /tasks/{taskId}/ratings, /favorites/taskers                                                                                 | Socket not required                                            | Ratings feed trust, display, favorites, and moderation.                                          |
| MF-23 | Emergency Support                        | /support/emergency, /support/sessions, /tasks/{taskId}/reports, /tasks/{taskId}/media where needed                          | /support                                                       | Creates priority support path and can link to task/report.                                       |
| MF-24 | Rebook / Repeat Task                     | /task-owner/tasks/{taskId}/rebook, /payment-intent, /direct-offers, /broadcast                                              | FCM if direct offer                                            | Creates a new immutable task from prior task details.                                            |

</div>

### Mobile Reusable Subflow Traceability

<div class="table-wrap">

| Subflow | Name                                   | Primary Contracts                                                                                      | Notes                                                                         |
|---------|----------------------------------------|--------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| SF-01   | OTP Verification                       | /auth/otp/send, /auth/otp/verify                                                                       | Email first, Termii SMS fallback.                                             |
| SF-02   | Complete Profile                       | /me, /me/profile                                                                                       | Repairs incomplete registration or login state.                               |
| SF-03   | Tasker KYC                             | /kyc/start, /kyc/nin-bvn, /kyc/face-capture, /kyc/status                                               | Required before Tasker can accept work.                                       |
| SF-04   | Location, Address and Pin Confirmation | /location/geocode, /location/confirm-pin, /me/addresses                                                | Manual address geocodes to coordinates and must be confirmed.                 |
| SF-05   | Media Upload                           | /task-owner/tasks/{taskId}/media, /tasker/tasks/{taskId}/completion-proof, /tasks/{taskId}/voice-notes | Photos/videos/voice note metadata; 50MB file rule for task media.             |
| SF-06   | Payment and Escrow Funding             | /payment-intent, /payments/verify, /webhooks/paystack, /webhooks/moniepoint                            | Webhook/backend verification owns final truth.                                |
| SF-07   | Wallet Ledger                          | /wallets, /wallets/{walletId}/ledger                                                                   | Task Owner wallet and Tasker wallet are separate.                             |
| SF-08   | Report / Dispute                       | /tasks/{taskId}/reports, /reports/{reportId}                                                           | Reports can be task-linked with policy options.                               |
| SF-09   | Permission Recovery                    | /me, relevant flow retry endpoint                                                                      | Client UI flow; backend validates location/media availability where required. |
| SF-10   | Status Recovery / Resume               | /me, active task detail, payment status, KYC status, report status                                     | Required after reconnect, app resume, provider return, or socket reconnect.   |
| SF-11   | Password Recovery                      | /auth/password/forgot, /auth/password/reset                                                            | Email first, SMS fallback.                                                    |
| SF-12   | Payout Account Setup                   | /tasker/payout-account                                                                                 | Requires PIN for add/change.                                                  |
| SF-13   | Google / Apple Social Authentication   | /auth/social/google, /auth/social/apple                                                                | Facebook excluded from MVP.                                                   |

</div>

### Admin Flow Traceability

<div class="table-wrap">

| Flow  | Name                                          | Primary REST Contracts                                                              | Socket / Realtime Contract         | Implementation Note                                                        |
|-------|-----------------------------------------------|-------------------------------------------------------------------------------------|------------------------------------|----------------------------------------------------------------------------|
| AF-01 | Admin Entry, Login and TOTP                   | /admin/auth/login, /admin/auth/totp/verify, /admin/auth/logout                      | Socket not required                | Admin session starts only after TOTP challenge passes.                     |
| AF-02 | Admin Dashboard Overview                      | /admin/dashboard, /admin/use-case-health, /admin/finance/transactions               | Presence optional                  | Role-filtered dashboard summary.                                           |
| AF-03 | User Management                               | /admin/users, /admin/users/{userId}, /admin/users/{userId}/suspend                  | Socket not required                | Platform users, not admin users.                                           |
| AF-04 | Tasker and KYC Review                         | /admin/kyc/{kycId}/request-reverification, /admin/users/{userId}                    | Socket not required                | Admin can request re-verification.                                         |
| AF-05 | Task Operations Monitoring                    | /admin/tasks, /admin/tasks/{taskId}, /admin/tasks/{taskId}/force-cancel             | May observe tracking/chat metadata | Admin can force cancel but must not reassign.                              |
| AF-06 | Task Report and Dispute Resolution            | /admin/reports, /admin/reports/{reportId}/resolve                                   | No dispute live chat               | Reports can link to task and evidence.                                     |
| AF-07 | Support Live Chat Operations                  | /support/sessions plus admin support assignment endpoints when implemented          | /support                           | Support live chat uses socket after REST session exists.                   |
| AF-08 | Finance: Payments, Escrow and Reconciliation  | /admin/finance/transactions, /webhooks/paystack, /webhooks/moniepoint               | Socket not required                | Provider events are reconciled through webhook/payment queue.              |
| AF-09 | Withdrawal and Payout Batch Operations        | /admin/payout-batches, /approve, /mark-processed                                    | Socket not required                | Bulk payout batches on 14th and 28th.                                      |
| AF-10 | Wallet, Refund and Excess Funding Support     | /wallets/{walletId}/ledger, /admin/finance/transactions, report/support endpoints   | Socket not required                | Task Owner cannot withdraw directly; support handles excess funding cases. |
| AF-11 | Task Catalog Management                       | /admin/catalog/categories, /disable, /archive                                       | Socket not required                | Disable/archive affects future task creation.                              |
| AF-12 | Service Coverage Configuration                | /admin/config/{key}, location/coverage config endpoints when implemented            | Socket not required                | Nigeria-only task site policy and location rules.                          |
| AF-13 | Task Media Moderation                         | /admin/tasks/{taskId}, media moderation endpoints when implemented                  | Socket not required                | Admin can review/remove unsafe or invalid media.                           |
| AF-14 | Risk, Trust, Warning and Strike Review        | /admin/reports/{reportId}/resolve, /admin/users/{userId}/suspend, /admin/audit-logs | Socket not required                | Warning/strike outcomes must be auditable.                                 |
| AF-15 | Referral Management                           | Referral endpoints to be finalized in OpenAPI                                       | Socket not required                | Reward after referred user completes 5 paid tasks.                         |
| AF-16 | Platform Config and Remote Config             | /admin/config, /admin/config/{key}                                                  | Socket not required                | Admin dashboard owns remote config sections.                               |
| AF-17 | Admin Users, Roles and Permissions            | /admin/admin-users, /admin/roles, /admin/permissions, /admin/auth/sessions          | Socket not required                | Admin RBAC is separate from platform user roles.                           |
| AF-18 | Audit Log Review                              | /admin/audit-logs                                                                   | Socket not required                | Immutable audit trail for privileged actions.                              |
| AF-19 | Use Case Health and Background Job Monitoring | /admin/use-case-health, /health, /ready, /metrics                                   | Socket not required                | Tracks use case last-used and success/failure.                             |
| AF-20 | Monitoring, Backup and Incident Readiness     | /health, /ready, /metrics, provider status endpoints when implemented               | Socket not required                | Supports self-hosted service readiness.                                    |
| AF-21 | Notifications and Announcements               | /admin/announcements, /notifications                                                | FCM delivery, socket not required  | Channels include FCM, in-app, email, critical SMS only.                    |
| AF-22 | Ratings and Reviews Management                | /admin/ratings, /tasks/{taskId}/ratings                                             | Socket not required                | Unsafe/invalid reviews can be hidden with audit.                           |
| AF-23 | Basic Analytics and Reports                   | /admin/dashboard, /admin/finance/transactions, /admin/use-case-health               | Socket not required                | Advanced analytics remain deferred.                                        |
| AF-24 | Receipt and Transaction Review                | /admin/finance/transactions, /wallets/{walletId}/ledger                             | Socket not required                | Supports payment, transfer, webhook, and receipt review.                   |

</div>

<div class="callout amber">

**Traceability rule**

If a screen or flow is added in Figma, mobile, or admin after this version, the contract matrix must be updated in the same documentation change. This keeps backend implementation order aligned with frontend delivery.

</div>

</div>

<div id="admin" class="section section">

<div class="section-num">

12

</div>

<div class="eyebrow">

Admin

</div>

## Admin Contract Rules

Admin endpoints are not simply wider versions of user endpoints. They require role filtering, TOTP for high-impact operations, audit reasons, and safe defaults. Admin can force cancel where authorized, but admin must not reassign tasks under any condition.

### Admin Authentication And TOTP APIs

<div class="table-wrap">

| Method                                      | Path                               | Actor | Purpose                                                    | Auth                             | Idempotency | Flow Refs      | Notes                                                                 |
|---------------------------------------------|------------------------------------|-------|------------------------------------------------------------|----------------------------------|-------------|----------------|-----------------------------------------------------------------------|
| <span class="pill blue">POST</span>         | `/admin/auth/login`                | Admin | Authenticate admin user with email/password.               | Public admin                     | No          | AF-01          | If password is valid, require TOTP before issuing full admin session. |
| <span class="pill blue">POST</span>         | `/admin/auth/totp/verify`          | Admin | Verify TOTP challenge during login or sensitive operation. | Admin pre-session or admin token | Yes         | AF-01          | Required for admin login completion and high-impact actions.          |
| <span class="pill blue">POST</span>         | `/admin/auth/totp/enroll`          | Admin | Enroll TOTP for an admin account.                          | Admin token or invite token      | Yes         | Admin Security | Only allowed during approved setup/recovery path.                     |
| <span class="pill blue">POST</span>         | `/admin/auth/totp/recovery-codes`  | Admin | Generate or rotate recovery codes.                         | Admin token + TOTP               | Yes         | Admin Security | Display once; store hashed codes only.                                |
| <span class="pill green-pill">GET</span>    | `/admin/auth/sessions`             | Admin | List admin sessions and devices.                           | Admin token                      | No          | AF-17          | Used by admin security and audit review.                              |
| <span class="pill amber-pill">DELETE</span> | `/admin/auth/sessions/{sessionId}` | Admin | Revoke an admin session.                                   | Admin token + TOTP               | Yes         | AF-17          | High-impact security action; audit required.                          |
| <span class="pill blue">POST</span>         | `/admin/auth/logout`               | Admin | Invalidate current admin session.                          | Admin token                      | Yes         | AF-01          | Client clears local admin session state.                              |

</div>

### Admin Users, Roles, And Permissions APIs

<div class="table-wrap">

| Method                                   | Path                                       | Actor                      | Purpose                                                | Auth               | Idempotency | Flow Refs | Notes                                                       |
|------------------------------------------|--------------------------------------------|----------------------------|--------------------------------------------------------|--------------------|-------------|-----------|-------------------------------------------------------------|
| <span class="pill green-pill">GET</span> | `/admin/admin-users`                       | Admin Owner/Technical Lead | List admin users.                                      | Admin token        | No          | AF-17     | Separate from platform user management.                     |
| <span class="pill blue">POST</span>      | `/admin/admin-users`                       | Admin Owner/Technical Lead | Invite or create admin user.                           | Admin token + TOTP | Yes         | AF-17     | Requires role assignment and audit reason.                  |
| <span class="pill blue">PATCH</span>     | `/admin/admin-users/{adminUserId}`         | Admin Owner/Technical Lead | Update admin user status, metadata, or assigned roles. | Admin token + TOTP | No          | AF-17     | No direct database edits for admin access.                  |
| <span class="pill blue">POST</span>      | `/admin/admin-users/{adminUserId}/disable` | Admin Owner/Technical Lead | Disable an admin account.                              | Admin token + TOTP | Yes         | AF-17     | Revokes active sessions and records audit event.            |
| <span class="pill green-pill">GET</span> | `/admin/roles`                             | Admin Owner/Technical Lead | List roles and permissions.                            | Admin token        | No          | AF-17     | Used by RBAC screens.                                       |
| <span class="pill blue">POST</span>      | `/admin/roles`                             | Admin Owner/Technical Lead | Create a role.                                         | Admin token + TOTP | Yes         | AF-17     | Requires permission set and reason.                         |
| <span class="pill blue">PATCH</span>     | `/admin/roles/{roleId}`                    | Admin Owner/Technical Lead | Update role permissions.                               | Admin token + TOTP | No          | AF-17     | Must prevent removing last effective platform owner access. |
| <span class="pill green-pill">GET</span> | `/admin/permissions`                       | Admin Owner/Technical Lead | List available permission keys.                        | Admin token        | No          | AF-17     | Permission keys should be stable and code-owned.            |

</div>

### Admin Operations APIs

<div class="table-wrap">

| Method                                   | Path                                 | Actor              | Purpose                                                                      | Auth                                 | Idempotency | Flow Refs               | Notes                                                                 |
|------------------------------------------|--------------------------------------|--------------------|------------------------------------------------------------------------------|--------------------------------------|-------------|-------------------------|-----------------------------------------------------------------------|
| <span class="pill green-pill">GET</span> | `/admin/dashboard`                   | Admin              | Return operating dashboard summary.                                          | Admin token                          | No          | Admin Home              | Role-filtered metrics.                                                |
| <span class="pill green-pill">GET</span> | `/admin/users`                       | Admin Support/Risk | Search users and account states.                                             | Admin token                          | No          | User Admin              | No raw secrets or full payment data.                                  |
| <span class="pill green-pill">GET</span> | `/admin/users/{userId}`              | Admin Support/Risk | View user profile, mode, wallets summary, KYC, strikes, sessions, and tasks. | Admin token                          | No          | User Detail             | Permission-gated sections.                                            |
| <span class="pill blue">POST</span>      | `/admin/users/{userId}/suspend`      | Admin Risk         | Suspend account after verified risk rule.                                    | Admin token + TOTP                   | Yes         | Risk                    | Requires reason and audit log.                                        |
| <span class="pill green-pill">GET</span> | `/admin/tasks`                       | Admin Ops          | Search and filter tasks.                                                     | Admin token                          | No          | Task Ops                | Includes state, city/zone, owner, tasker, payment state.              |
| <span class="pill green-pill">GET</span> | `/admin/tasks/{taskId}`              | Admin Ops          | View task details and timeline.                                              | Admin token                          | No          | Task Ops                | Media access is permission-controlled.                                |
| <span class="pill blue">POST</span>      | `/admin/tasks/{taskId}/force-cancel` | Admin Ops Lead     | Force cancel task with elevated permission.                                  | Admin token + TOTP                   | Yes         | Controlled Force Cancel | Admin must not reassign under any condition.                          |
| <span class="pill green-pill">GET</span> | `/admin/finance/transactions`        | Admin Finance      | List payments, escrow, wallet entries, transfers, and receipts.              | Admin token                          | No          | Finance                 | Supports receipt/transaction review.                                  |
| <span class="pill green-pill">GET</span> | `/admin/reports`                     | Admin Support/Risk | List reports/disputes.                                                       | Admin token                          | No          | Reports                 | No live dispute chat; support chat remains separate.                  |
| <span class="pill blue">POST</span>      | `/admin/reports/{reportId}/resolve`  | Admin Support/Risk | Resolve report with outcome, penalty, hold, or dismissal.                    | Admin token + TOTP where high impact | Yes         | Reports                 | Contested penalties can remain pending until review/timeout.          |
| <span class="pill blue">POST</span>      | `/admin/announcements`               | Admin Ops          | Create notification or announcement campaign.                                | Admin token                          | Yes         | Announcements           | Channels: FCM, in-app, email, critical SMS only.                      |
| <span class="pill green-pill">GET</span> | `/admin/ratings`                     | Admin Ops/Risk     | Review ratings and reported reviews.                                         | Admin token                          | No          | Ratings                 | Unsafe or invalid content can be removed.                             |
| <span class="pill green-pill">GET</span> | `/admin/config`                      | Admin Ops          | Read remote config values.                                                   | Admin token                          | No          | Remote Config           | Config lives in admin dashboard, not external remote-config provider. |
| <span class="pill blue">PATCH</span>     | `/admin/config/{key}`                | Admin Ops Lead     | Update feature flags, thresholds, or platform caps.                          | Admin token + TOTP                   | Yes         | Remote Config           | Changes require audit log.                                            |
| <span class="pill green-pill">GET</span> | `/admin/audit-logs`                  | Admin Risk         | Search privileged actions and system audit events.                           | Admin token                          | No          | Audit                   | Immutable audit trail.                                                |
| <span class="pill green-pill">GET</span> | `/admin/use-case-health`             | Technical/Admin    | View use case invocation, last used, success/failure state.                  | Admin token                          | No          | Use Case Health         | Backed by backend use case tracking.                                  |

</div>

<div class="callout red">

**No admin reassignment**

If a task has started and cannot continue, it should be closed according to policy and return to broadcasting only through the allowed task/cancellation state path. Admin should not manually reassign to another Tasker.

</div>

</div>

<div id="handover" class="section section">

<div class="section-num">

13

</div>

<div class="eyebrow">

Handover

</div>

## Contract QA And Handover Checklist

Before implementation proceeds into full feature work, each team should confirm that the contract shape is usable. This prevents hidden blockers between backend, mobile, and admin.

- Backend publishes OpenAPI/Swagger for all REST groups listed in this document.
- Backend publishes socket event names, payload examples, ack examples, and room authorization rules.
- Mobile maps each closed mobile flow to its required API and socket contracts.
- Admin maps each closed admin flow to its required API and permission policy.
- Every payment, wallet, webhook, payout, media finalization, and task state transition endpoint has idempotency coverage.
- Every admin high-impact endpoint writes audit logs and captures reason.
- Every protected document page in the GitHub Pages docs repo includes `../assets/js/guard.js`.
- Contract tests cover success, validation failure, auth failure, forbidden state, duplicate request, and provider retry cases.
- Frontend loading standards are implemented: skeletons for fetches and blur overlay with spinning Work2Cash logo for POST/PATCH submissions.
- Privacy review confirms exact address, real phone number, KYC data, provider secrets, and hidden media are not leaked.

<div class="callout green">

**Implementation rule**

Commits should be feature by feature and fix by fix. Do not stack unrelated endpoint groups, socket events, and admin changes in one documentation or implementation commit.

</div>

</div>

</div>

<div class="footer-inner">

<div>

#### Work2Cash

API & Socket Contract Specification v1 for the team-facing documentation portal.

</div>

<div>

#### Document Location

`documents/api-socket-contract-specification-v1.html`

</div>

<div>

#### Guard Requirement

Protected HTML documents must include the documentation auth guard script before closing body.

</div>

</div>


---

# Source Document: Data Model & Prisma Schema Planning v1


# Data Model & Prisma Schema Planning v1

> AI-agent Markdown equivalent of `data-model-prisma-schema-planning-v1.html`.
>
> Human-readable HTML source: `../data-model-prisma-schema-planning-v1.html`.
> Use this Markdown version for lower-token AI context. If a task needs visual layout or exact document presentation, use the HTML page.

<div class="section cover">

<div class="brand-row">

<div class="logo">

W2C

</div>

<div>

**Work2Cash**Data Model & Prisma Schema Execution Baseline

</div>

</div>

<div class="cover-main">

<div class="label">

Document 7

</div>

# Data Model & Prisma Schema Execution Baseline

<div class="cover-subtitle">

Execution-grade source of truth for Work2Cash PostgreSQL and Prisma implementation, covering users, tasks, wallets, escrow, communication, risk, admin operations, providers and auditability.

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

Classification**Investor Ready**

</div>

<div class="meta-card">

Database**PostgreSQL**

</div>

<div class="meta-card">

ORM**Prisma**

</div>

<div class="meta-card">

Architecture**NestJS Hexagonal**

</div>

<div class="meta-card">

Currency Storage**Minor Units**

</div>

</div>

<div class="badges">

<span class="badge">Prisma Execution</span> <span class="badge">PostgreSQL</span> <span class="badge">Wallet Ledger</span> <span class="badge">Task State Machine</span> <span class="badge">Auditability</span>

</div>

</div>

<div class="cover-foot">

<div>

Source of truth: Enterprise Architecture v1, API & Socket Contract v1, Mobile/Admin Flow Catalogues.

</div>

<div>

Target repo location: documents/data-model-prisma-schema-planning-v1.html

</div>

</div>

</div>

<div class="sticky">

<div class="sticky-inner">

**Work2Cash Data Model & Prisma Execution v1**

[Domains](#domain-map) [Entities](#entities) [Traceability](#traceability) [Prisma](#prisma) [Finance](#finance) [Codex](#codex) [Migration](#migration)

</div>

</div>

<div role="main">

<div class="section toc">

<div class="eyebrow">

Navigation

</div>

## Document Contents

This document translates Work2Cash product and API decisions into an execution baseline for database and Prisma implementation. Future Codex prompts should treat the models, relationships, constraints, ownership rules and traceability tables here as implementation requirements unless the architecture source of truth is formally revised.

<div class="toc-grid">

[01. How To Use This Document](#scope)[02. Data Architecture Principles](#principles)[03. Domain Model Map](#domain-map)[04. Core Entity Catalogue](#entities)[05. API-To-Model Traceability](#traceability)[06. Backend Module Ownership](#ownership)[07. Enum And State Catalogue](#enums)[08. Prisma Schema Execution Baseline](#prisma)[09. Relationships And Ownership](#relationships)[10. Indexes, Constraints And Idempotency](#indexes)[11. Finance And Ledger Model](#finance)[12. Privacy, Retention And Access Control](#privacy)[13. Migration And Seed Plan](#migration)[14. Prisma Implementation Rules](#prisma-rules)[15. Codex Execution Instructions](#codex)[16. Implementation Checklist](#handover)

</div>

</div>

<div id="scope" class="section section">

<div class="section-num">

01

</div>

<div class="eyebrow">

Scope

</div>

## How To Use This Document

Use this document to align backend, mobile, admin, QA and operations on what the database must remember. The API contract describes what clients call. This data model document describes what must be persisted to make those contracts reliable, auditable and recoverable.

<div class="card-grid">

<div class="card">

Backend

#### Prisma baseline

Use this as the starting point for schema.prisma, migrations, repositories and use case persistence boundaries.

</div>

<div class="card">

Mobile/Admin

#### State expectations

Use model ownership to understand what can be recovered after login, app resume, payment return and socket reconnect.

</div>

<div class="card">

QA/Ops

#### Audit paths

Use the entity and state tables to build test cases for idempotency, reports, payouts, support and admin actions.

</div>

</div>

<div class="callout amber">

**Execution boundary**

This is not the generated application `schema.prisma` file, but it is the execution baseline for producing it. Codex should preserve these models, relationships, constraints, states and audit rules unless an implementation blocker is documented and approved.

</div>

</div>

<div id="principles" class="section section">

<div class="section-num">

02

</div>

<div class="eyebrow">

Principles

</div>

## Data Architecture Principles

<div class="table-wrap">

| Principle                     | Decision                                                                                                | Reason                                                                          |
|-------------------------------|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| Unified user                  | One User table supports both Task Owner and Tasker behavior.                                            | A Nigerian gig user can hire on one day and earn on another.                    |
| Separate wallets              | Task Owner and Tasker wallets are separate Wallet records.                                              | Task Owner wallet cannot withdraw directly; Tasker wallet supports withdrawals. |
| Money in minor units          | Store money as kobo using BigInt fields such as amountKobo and balanceKobo.                             | Avoids floating point errors and supports precise ledger reconciliation.        |
| State history                 | Important state transitions write event/history records.                                                | Admin, support and QA need full timeline for disputes and reconciliation.       |
| Provider idempotency          | Provider webhook/event IDs and internal idempotency keys must be unique.                                | Prevents duplicate payment, ledger, payout and KYC processing.                  |
| Privacy by design             | Exact address, media URLs, real phone numbers, KYC payloads and provider secrets are access-controlled. | Protects user trust and legal posture.                                          |
| Socket is not source of truth | Socket messages/tracking are persisted or recoverable through REST-backed tables.                       | App reconnect must rebuild authoritative state from database.                   |
| Audit high-risk operations    | Admin, finance, risk, KYC and security decisions write AdminAuditLog or equivalent.                     | Required for controlled operations and investor-ready governance.               |

</div>

</div>

<div id="domain-map" class="section section">

<div class="section-num">

03

</div>

<div class="eyebrow">

Domains

</div>

## Domain Model Map

Work2Cash should be implemented as modular persistence boundaries that match backend use cases. Prisma models can live in one schema file at first, but code ownership should remain domain-based.

<div class="table-wrap">

| Domain                    | Primary Models                                                                                                                                  | Supports                                                                                          |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| Identity and Access       | User, credentials, social accounts, OTP, sessions, devices, security PIN, notification preferences.                                             | Auth, login recovery, sensitive action confirmation, device/session management.                   |
| Tasker Activation         | TaskerProfile, KycVerification, KycAttempt, TaskerPreference, payout readiness flags.                                                           | Smile ID KYC, tasker profile completion, availability lock/unlock.                                |
| Catalog and Coverage      | TaskCategory, TaskType, ServiceZone, PlatformCoverageRule, RemoteConfig.                                                                        | Task category selection, Nigeria-only task site validation, admin catalog controls.               |
| Task Marketplace          | Task, TaskLocation, TaskMedia, TaskInterest, DirectTaskOffer, TaskStatusEvent, TaskOwnerRejection, TaskEtaSnapshot.                             | Post task, public discovery, direct favorite offer, Tasker acceptance, execution state machine.   |
| Wallet, Escrow and Payout | Wallet, WalletLedgerEntry, Payment, PaymentAttempt, Escrow, WithdrawalRequest, PayoutAccount, PayoutBatch, PayoutBatchItem, TaskSettlementHold. | Cardless payment, escrow, commission, withdrawal batches on 14th and 28th.                        |
| Communication             | ChatMessage, SupportSession, SupportMessage, TaskCallSession, CommunicationAuditLog.                                                            | Task chat, support live chat, voice note metadata, masked calls, off-platform leakage monitoring. |
| Risk and Trust            | TaskReport, Warning, Strike, RiskFlag, TrustScoreEvent, Rating, ReviewModeration.                                                               | Cancellations, no-shows, reports/disputes, penalties, ratings, account suspension.                |
| Admin and Operations      | AdminUser, AdminRole, AdminPermission, AdminSession, AdminTotpCredential, AdminAuditLog, UseCaseExecutionLog.                                   | Admin TOTP, RBAC, audit, use-case health dashboard, operations monitoring.                        |
| Provider and Jobs         | ProviderWebhookEvent, OutboxEvent, QueueJobAudit, ProviderRequestLog.                                                                           | Paystack, Moniepoint, Smile ID, masked call provider, idempotency and worker observability.       |

</div>

<div class="diagram">

<div class="diagram-head">

#### High-Level Data Relationship Map

Domain ERD

</div>

    User
      +-- UserCredential / SocialAccount / UserSession / SecurityPinCredential
      +-- TaskerProfile
      |     +-- KycVerification / KycAttempt / PayoutAccount
      +-- Wallet[TASK_OWNER]
      +-- Wallet[TASKER]
      +-- owned Task[]

    Task
      +-- TaskLocation
      +-- TaskMedia[]
      +-- TaskInterest[] / DirectTaskOffer[] / FavoriteTasker
      +-- Escrow -> WalletLedgerEntry[]
      +-- ChatMessage[] / TaskCallSession[]
      +-- TaskReport[] -> Warning / Strike / SettlementHold

    AdminUser
      +-- AdminRole[] / AdminSession / AdminTotpCredential
      +-- AdminAuditLog[]

    ProviderWebhookEvent -> QueueJobAudit -> Payment/KYC/Payout updates

The User is unified, while task ownership, tasker activity, wallets and admin operations remain explicitly separated by relation and type.

</div>

</div>

<div id="entities" class="section section">

<div class="section-num">

04

</div>

<div class="eyebrow">

Entities

</div>

## Core Entity Catalogue

<div class="table-wrap">

| Model               | Responsibility                                                                                               | Important Rule                                                                           |
|---------------------|--------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| User                | Root account identity. A user can be Task Owner, Tasker, or both.                                            | Do not split client/tasker auth tables. Keep one account model.                          |
| TaskerProfile       | Tasker-specific profile, skills, bio, KYC activation and availability readiness.                             | Only present/active when user wants to earn as Tasker.                                   |
| Wallet              | Separate wallet per user and wallet type.                                                                    | Task Owner wallet and Tasker wallet must be different records.                           |
| Task                | Central marketplace work request.                                                                            | Owns status, amount, category, task owner, accepted tasker, timing, privacy boundaries.  |
| TaskLocation        | Task site address, geocode, pin confirmation and privacy metadata.                                           | Task site must be in Nigeria. Exact address shown only after eligibility.                |
| TaskMedia           | Proof media for work to be done, completion proof, report evidence and voice-note metadata where applicable. | Photos/videos up to 50MB per file for task proof. Permission-controlled access.          |
| Payment             | High-level payment record for provider collection.                                                           | Frontend redirect is not final truth; webhook/backend verification is.                   |
| Escrow              | Held funds for a task before completion or dispute outcome.                                                  | Release, refund and hold transitions must be auditable.                                  |
| WithdrawalRequest   | Tasker withdrawal request waiting for payout batch.                                                          | Minimum NGN 1,000; PIN required; batch dates 14th and 28th.                              |
| PayoutBatch         | Bulk payout run for eligible withdrawal requests.                                                            | Use Paystack/Moniepoint transfer rails; disputed Taskers require authorization.          |
| TaskReport          | Structured task-linked report/dispute.                                                                       | Can cover no-show, refusal, unsafe media, off-platform solicitation, completion refusal. |
| TaskCallSession     | Masked proxy call session.                                                                                   | Task-bound, time-limited, no real phone numbers exposed.                                 |
| AdminAuditLog       | Immutable admin/security/finance/risk audit record.                                                          | Every high-impact admin action must write audit reason and actor.                        |
| UseCaseExecutionLog | Backend use-case invocation health record.                                                                   | Tracks use case last used, success/failure, duration and error code.                     |

</div>

### Model Groups

<div class="table-wrap">

| Group         | Models                                                                                                                                                                               |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Identity      | User, UserCredential, SocialAccount, OtpChallenge, UserSession, UserDevice, SecurityPinCredential, NotificationPreference, SavedAddress                                              |
| Tasker        | TaskerProfile, TaskerSkill, TaskerPreference, TaskerAvailabilitySnapshot, KycVerification, KycAttempt                                                                                |
| Catalog       | TaskCategory, TaskType, ServiceZone, PlatformCoverageRule                                                                                                                            |
| Task          | Task, TaskLocation, TaskMedia, TaskInterest, DirectTaskOffer, FavoriteTasker, TaskOwnerRejection, TaskStatusEvent, TaskEtaSnapshot, TaskTrackingSample                               |
| Finance       | Wallet, WalletLedgerEntry, Payment, PaymentAttempt, ProviderWebhookEvent, Escrow, TaskSettlement, TaskSettlementHold, PayoutAccount, WithdrawalRequest, PayoutBatch, PayoutBatchItem |
| Communication | ChatMessage, SupportSession, SupportMessage, TaskCallSession, CommunicationAuditLog                                                                                                  |
| Risk          | TaskReport, Warning, Strike, RiskFlag, TrustScoreEvent, Rating, ReviewModeration                                                                                                     |
| Referral      | ReferralCode, ReferralAttribution, ReferralReward                                                                                                                                    |
| Admin         | AdminUser, AdminRole, AdminPermission, AdminRolePermission, AdminUserRole, AdminSession, AdminTotpCredential, AdminAuditLog                                                          |
| Operations    | UseCaseExecutionLog, OutboxEvent, QueueJobAudit, RemoteConfig, ProviderRequestLog                                                                                                    |

</div>

</div>

<div id="traceability" class="section section">

<div class="section-num">

05

</div>

<div class="eyebrow">

Traceability

</div>

## API-To-Model Traceability

Every accepted API/socket contract must map to persisted models. This table is the implementation bridge between Document 6 and the Prisma schema. If a future endpoint is added, this table must be updated in the same documentation change.

<div class="table-wrap">

| Contract Area                       | API / Socket Contracts                                                                                      | Required Models                                                                                                             | Implementation Requirement                                                                         |
|-------------------------------------|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| Auth and session APIs               | /auth/register, /auth/login, /auth/refresh, /auth/logout, /me/sessions                                      | User, UserCredential, SocialAccount, OtpChallenge, UserSession, UserDevice                                                  | Authentication and session recovery must be reconstructable from persisted session/device records. |
| Security PIN APIs                   | /me/security-pin/setup, /verify, /reset/start, /reset/confirm                                               | SecurityPinCredential, OtpChallenge, UserSession, AdminAuditLog where admin-assisted                                        | PIN hash only. OTP is used for PIN recovery, not normal sensitive-action confirmation.             |
| Profile and mode APIs               | /me, /me/profile, /me/mode, /me/addresses                                                                   | User, SavedAddress, NotificationPreference                                                                                  | The accepted field is mode. Use it consistently across API, database and app state.                |
| KYC APIs                            | /kyc/start, /kyc/nin-bvn, /kyc/face-capture, /kyc/status                                                    | TaskerProfile, KycVerification, KycAttempt, ProviderRequestLog, ProviderWebhookEvent                                        | Tasker acceptance remains blocked until KYC status and profile activation pass.                    |
| Catalog APIs                        | /catalog/categories, /catalog/task-types, /admin/catalog/categories                                         | TaskCategory, TaskType, RemoteConfig, AdminAuditLog                                                                         | Disable/archive states must preserve historical task records.                                      |
| Task Owner task APIs                | /task-owner/tasks/drafts, /location/geocode, /location/confirm-pin, /media, /payment-intent, /broadcast     | Task, TaskLocation, TaskMedia, Payment, PaymentAttempt, Escrow, TaskStatusEvent                                             | Task posting requires location confirmation, proof media and payment/escrow readiness.             |
| Tasker task APIs                    | /tasker/tasks, /interest, /accept, /start-journey, /arrived, /begin, /completion-proof, /request-completion | Task, TaskInterest, TaskStatusEvent, TaskMedia, TaskTrackingSample, TaskEtaSnapshot                                         | Execution buttons map to persisted task status transitions.                                        |
| Direct offer and favorites APIs     | /favorites/taskers, /direct-offers, /rebook                                                                 | FavoriteTasker, DirectTaskOffer, Task, TaskStatusEvent                                                                      | Direct offers are REST/FCM-driven and not socket-based.                                            |
| Wallet and payment APIs             | /wallets, /ledger, /payments/verify, /webhooks/paystack, /webhooks/moniepoint                               | Wallet, WalletLedgerEntry, Payment, PaymentAttempt, ProviderWebhookEvent, Escrow                                            | Webhook verification and ledger updates must be idempotent and transactional.                      |
| Withdrawal and payout APIs          | /tasker/payout-account, /tasker/withdrawals, /admin/payout-batches                                          | PayoutAccount, WithdrawalRequest, PayoutBatch, PayoutBatchItem, WalletLedgerEntry, TaskSettlementHold                       | Withdrawal requires PIN and enters 14th/28th batch workflow.                                       |
| Chat and support socket/API         | /support/sessions plus /task and /support socket namespaces                                                 | ChatMessage, SupportSession, SupportMessage, CommunicationAuditLog                                                          | Socket events are delivery mechanism; persisted rows are source of truth.                          |
| Masked call APIs                    | /tasks/{taskId}/call-sessions, /webhooks/calls/provider                                                     | TaskCallSession, CommunicationAuditLog, ProviderWebhookEvent                                                                | Real phone numbers are never exposed in call session responses.                                    |
| Reports and risk APIs               | /tasks/{taskId}/reports, /admin/reports/{reportId}/resolve                                                  | TaskReport, Warning, Strike, RiskFlag, TrustScoreEvent, TaskSettlementHold, AdminAuditLog                                   | Reports are task-linked and can affect penalties, settlement holds and payout authorization.       |
| Ratings and reviews APIs            | /tasks/{taskId}/ratings, /admin/ratings                                                                     | Rating, ReviewModeration, FavoriteTasker, TrustScoreEvent                                                                   | One rating per actor per completed task.                                                           |
| Admin auth/RBAC APIs                | /admin/auth/login, /admin/auth/totp/verify, /admin/admin-users, /admin/roles, /admin/permissions            | AdminUser, AdminRole, AdminPermission, AdminUserRole, AdminRolePermission, AdminSession, AdminTotpCredential, AdminAuditLog | Admin access is separate from platform user access.                                                |
| Use-case health and operations APIs | /admin/use-case-health, /health, /ready, /metrics                                                           | UseCaseExecutionLog, QueueJobAudit, ProviderRequestLog, OutboxEvent                                                         | Backend use cases must report invocation health.                                                   |

</div>

<div class="callout green">

**Execution requirement**

No model should be added without a traceable reason: an accepted flow, API endpoint, socket persistence need, provider event, worker job, admin operation, audit rule or reporting requirement.

</div>

</div>

<div id="ownership" class="section section">

<div class="section-num">

06

</div>

<div class="eyebrow">

Ownership

</div>

## Backend Module Ownership

The NestJS backend uses hexagonal architecture. Prisma models are persisted by adapters/repositories, while use cases depend on ports. These ownership boundaries prevent shared database access from becoming shared business logic.

<div class="table-wrap">

| Backend Module | Owned Models                                                                                                                                                   | Owns These Use Cases                                                     |
|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| identity       | User, UserCredential, SocialAccount, OtpChallenge, UserSession, UserDevice, SecurityPinCredential, NotificationPreference, SavedAddress                        | Auth, profile, mode, PIN, device/session use cases.                      |
| tasker         | TaskerProfile, TaskerSkill, TaskerPreference, TaskerAvailabilitySnapshot, KycVerification, KycAttempt                                                          | Tasker activation, KYC, availability and work preference use cases.      |
| catalog        | TaskCategory, TaskType, ServiceZone, PlatformCoverageRule, RemoteConfig                                                                                        | Catalog, coverage and admin configuration use cases.                     |
| tasks          | Task, TaskLocation, TaskMedia, TaskInterest, DirectTaskOffer, FavoriteTasker, TaskOwnerRejection, TaskStatusEvent, TaskEtaSnapshot, TaskTrackingSample         | Task Owner and Tasker marketplace use cases.                             |
| finance        | Wallet, WalletLedgerEntry, Payment, PaymentAttempt, Escrow, TaskSettlement, TaskSettlementHold, PayoutAccount, WithdrawalRequest, PayoutBatch, PayoutBatchItem | Payment, escrow, ledger, withdrawal and payout use cases.                |
| communications | ChatMessage, SupportSession, SupportMessage, TaskCallSession, CommunicationAuditLog                                                                            | Task chat, support live chat, masked calls and voice-note metadata.      |
| risk           | TaskReport, Warning, Strike, RiskFlag, TrustScoreEvent, Rating, ReviewModeration                                                                               | Reports, disputes, penalties, trust, moderation and safety use cases.    |
| referrals      | ReferralCode, ReferralAttribution, ReferralReward                                                                                                              | Referral reward after referred user completes 5 paid tasks.              |
| admin          | AdminUser, AdminRole, AdminPermission, AdminRolePermission, AdminUserRole, AdminSession, AdminTotpCredential, AdminAuditLog                                    | Admin auth, RBAC, audit and governance use cases.                        |
| operations     | UseCaseExecutionLog, OutboxEvent, QueueJobAudit, ProviderRequestLog                                                                                            | Workers, provider observability, use-case health and incident readiness. |

</div>

<div class="callout">

**Repository rule**

Only the owning backend module should write to its models directly. Other modules should call a port/use case unless a read-only projection is intentionally exposed.

</div>

</div>

<div id="enums" class="section section">

<div class="section-num">

07

</div>

<div class="eyebrow">

Enums

</div>

## Enum And State Catalogue

Enums should be stable because they become API, admin, QA and reporting vocabulary. Additions are safer than renames. Renames require migration and contract review.

<div class="table-wrap">

| Enum                  | Values                                                                                                                                                                                                        | Purpose                                           |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| UserMode              | TASK_OWNER, TASKER                                                                                                                                                                                            | Current app mode. Field name is mode.             |
| WalletType            | TASK_OWNER, TASKER, PLATFORM, REFERRAL                                                                                                                                                                        | Separates funds by purpose and withdrawal policy. |
| KycStatus             | NOT_STARTED, PENDING, APPROVED, REJECTED, REQUIRES_REVERIFICATION, FAILED                                                                                                                                     | Controls Tasker activation.                       |
| TaskStatus            | DRAFT, PENDING_PAYMENT, PAID, DIRECT_OFFER_SENT, DIRECT_OFFER_EXPIRED, BROADCASTING, ACCEPTED, TASKER_EN_ROUTE, ARRIVED, IN_PROGRESS, COMPLETION_REQUESTED, COMPLETED, DISPUTED, CANCELLED, EXPIRED, REFUNDED | Central task state machine.                       |
| DirectTaskOfferStatus | SENT, VIEWED, ACCEPTED, DECLINED, EXPIRED, CANCELLED, TASKER_UNAVAILABLE                                                                                                                                      | Direct favorite offer lifecycle.                  |
| FavoriteTaskerStatus  | ACTIVE, REMOVED, BLOCKED                                                                                                                                                                                      | Task Owner favorite Tasker relationship state.    |
| TaskMediaPurpose      | OWNER_PROOF, TASKER_COMPLETION_PROOF, REPORT_EVIDENCE, CHAT_VOICE_NOTE, SUPPORT_ATTACHMENT                                                                                                                    | Determines access and validation rules.           |
| TaskMediaStatus       | UPLOADING, ACTIVE, REMOVED, REJECTED                                                                                                                                                                          | Moderation and lifecycle state.                   |
| PaymentStatus         | INITIATED, PENDING, SUCCESSFUL, FAILED, EXPIRED, REVERSED                                                                                                                                                     | Provider collection state.                        |
| EscrowStatus          | HELD, RELEASED, DISPUTED, REFUNDED, PARTIALLY_REFUNDED                                                                                                                                                        | Escrow lifecycle.                                 |
| WithdrawalStatus      | REQUESTED, QUEUED_FOR_BATCH, PROCESSING, SUCCESSFUL, FAILED, REVERSED, FLAGGED, CANCELLED                                                                                                                     | Withdrawal and batch state.                       |
| PayoutBatchStatus     | DRAFT, READY_FOR_APPROVAL, APPROVED, PROCESSING, COMPLETED, PARTIALLY_FAILED, FAILED, CANCELLED                                                                                                               | Bulk payout lifecycle.                            |
| TaskReportStatus      | OPEN, UNDER_REVIEW, EVIDENCE_REQUESTED, RESOLVED, DISMISSED, ESCALATED                                                                                                                                        | Report/dispute workflow.                          |
| WarningActorType      | TASK_OWNER, TASKER                                                                                                                                                                                            | Warning owner.                                    |
| StrikeActorType       | TASK_OWNER, TASKER                                                                                                                                                                                            | Strike owner.                                     |
| AdminActionRisk       | LOW, MEDIUM, HIGH, CRITICAL                                                                                                                                                                                   | Determines TOTP/reason/audit controls.            |
| ProviderName          | PAYSTACK, MONIEPOINT, SMILE_ID, TERMII, FCM, RESEND, SHOREBIRD, SENTRY, INFOBIP, AFRICAS_TALKING, VONAGE, SINCH, GOOGLE_MAPS                                                                                  | Provider integration vocabulary.                  |

</div>

<div class="diagram">

<div class="diagram-head">

#### Task State Machine

Persisted Status

</div>

    DRAFT
      -> PENDING_PAYMENT
      -> PAID
      -> BROADCASTING
      -> ACCEPTED
      -> TASKER_EN_ROUTE
      -> ARRIVED
      -> IN_PROGRESS
      -> COMPLETION_REQUESTED
      -> COMPLETED

    Side paths:
      DIRECT_OFFER_SENT -> DIRECT_OFFER_EXPIRED
      any allowed cancellable state -> CANCELLED
      completion/payment conflict -> DISPUTED
      refund path -> REFUNDED

Every important transition should create TaskStatusEvent with actor, reason, requestId and timestamp.

</div>

</div>

<div id="prisma" class="section section">

<div class="section-num">

08

</div>

<div class="eyebrow">

Prisma

</div>

## Prisma Schema Execution Baseline

The following snippets establish execution direction for the real Prisma schema. Codex may refine field names only when needed for Prisma correctness, but it must preserve the model responsibility, relation direction, state vocabulary, idempotency and audit requirements.

<div class="code-block">

<div class="code-title">

Prisma Generator And Datasource

</div>

    generator client {
      provider = "prisma-client-js"
    }

    datasource db {
      provider = "postgresql"
      url      = env("DATABASE_URL")
    }

</div>

<div class="code-block">

<div class="code-title">

Identity And User Mode

</div>

    model User {
      id              String      @id @default(cuid())
      email           String?     @unique
      phone           String?     @unique
      displayName     String?
      avatarUrl       String?
      mode            UserMode    @default(TASK_OWNER)
      status          UserStatus  @default(ACTIVE)
      emailVerifiedAt DateTime?
      phoneVerifiedAt DateTime?
      createdAt       DateTime    @default(now())
      updatedAt       DateTime    @updatedAt

      credentials     UserCredential?
      socialAccounts  SocialAccount[]
      sessions        UserSession[]
      taskerProfile   TaskerProfile?
      wallets         Wallet[]
      ownedTasks      Task[]      @relation("TaskOwnerTasks")
      acceptedTasks   Task[]      @relation("AcceptedTaskerTasks")

      @@index([mode, status])
      @@index([createdAt])
    }

    enum UserMode {
      TASK_OWNER
      TASKER
    }

</div>

<div class="code-block">

<div class="code-title">

Tasker Profile And KYC

</div>

    model TaskerProfile {
      id               String       @id @default(cuid())
      userId           String       @unique
      user             User         @relation(fields: [userId], references: [id])
      bio              String?
      isActive         Boolean      @default(false)
      kycStatus        KycStatus    @default(NOT_STARTED)
      maxTravelKm      Int?
      completedTaskCount Int        @default(0)
      averageRating    Decimal?     @db.Decimal(3, 2)
      createdAt        DateTime     @default(now())
      updatedAt        DateTime     @updatedAt

      kycVerifications KycVerification[]
      payoutAccounts   PayoutAccount[]

      @@index([isActive, kycStatus])
    }

    model KycVerification {
      id                String      @id @default(cuid())
      taskerProfileId   String
      taskerProfile     TaskerProfile @relation(fields: [taskerProfileId], references: [id])
      provider          ProviderName @default(SMILE_ID)
      identifierType    KycIdentifierType
      status            KycStatus
      providerJobId     String?
      submittedAt       DateTime    @default(now())
      decidedAt         DateTime?
      failureReason     String?

      @@index([taskerProfileId, status])
      @@index([provider, providerJobId])
    }

</div>

<div class="code-block">

<div class="code-title">

Task, Location And State

</div>

    model Task {
      id                String      @id @default(cuid())
      taskOwnerId       String
      taskOwner         User        @relation("TaskOwnerTasks", fields: [taskOwnerId], references: [id])
      acceptedTaskerId  String?
      acceptedTasker    User?       @relation("AcceptedTaskerTasks", fields: [acceptedTaskerId], references: [id])
      categoryId        String
      taskTypeId        String
      title             String
      description       String
      amountKobo        BigInt
      commissionBps     Int         @default(2000)
      status            TaskStatus  @default(DRAFT)
      requiredArrivalAt DateTime?
      acceptedAt        DateTime?
      startedJourneyAt  DateTime?
      arrivedAt         DateTime?
      beganAt           DateTime?
      completedAt       DateTime?
      cancelledAt       DateTime?
      createdAt         DateTime    @default(now())
      updatedAt         DateTime    @updatedAt

      location          TaskLocation?
      media             TaskMedia[]
      interests         TaskInterest[]
      directOffers      DirectTaskOffer[]
      statusEvents      TaskStatusEvent[]
      reports           TaskReport[]
      escrow            Escrow?

      @@index([status, createdAt])
      @@index([taskOwnerId, status])
      @@index([acceptedTaskerId, status])
      @@index([categoryId, status])
    }

    model TaskLocation {
      id              String   @id @default(cuid())
      taskId          String   @unique
      task            Task     @relation(fields: [taskId], references: [id])
      countryCode     String   @default("NG")
      state           String?
      city            String?
      addressText     String
      latitude        Decimal  @db.Decimal(10, 7)
      longitude       Decimal  @db.Decimal(10, 7)
      pinConfirmedAt  DateTime?
      geocodeProvider ProviderName?

      @@index([countryCode, state, city])
    }

</div>

<div class="code-block">

<div class="code-title">

Wallet, Ledger, Escrow And Payment

</div>

    model Wallet {
      id           String     @id @default(cuid())
      userId       String
      user         User       @relation(fields: [userId], references: [id])
      type         WalletType
      currency     String     @default("NGN")
      balanceKobo  BigInt     @default(0)
      lockedKobo   BigInt     @default(0)
      createdAt    DateTime   @default(now())
      updatedAt    DateTime   @updatedAt

      entries      WalletLedgerEntry[]

      @@unique([userId, type, currency])
    }

    model WalletLedgerEntry {
      id                 String   @id @default(cuid())
      walletId           String
      wallet             Wallet   @relation(fields: [walletId], references: [id])
      direction          LedgerDirection
      amountKobo         BigInt
      balanceAfterKobo   BigInt
      reason             LedgerReason
      taskId             String?
      transactionGroupId String
      idempotencyKey     String?  @unique
      createdAt          DateTime @default(now())

      @@index([walletId, createdAt])
      @@index([transactionGroupId])
    }

    model Escrow {
      id          String       @id @default(cuid())
      taskId      String       @unique
      task        Task         @relation(fields: [taskId], references: [id])
      amountKobo  BigInt
      status      EscrowStatus @default(HELD)
      heldAt      DateTime     @default(now())
      releasedAt  DateTime?
      refundedAt  DateTime?
    }

</div>

<div class="code-block">

<div class="code-title">

Payout Batch

</div>

    model WithdrawalRequest {
      id              String           @id @default(cuid())
      taskerId        String
      walletId        String
      amountKobo      BigInt
      status          WithdrawalStatus @default(REQUESTED)
      payoutBatchItem PayoutBatchItem?
      requestedAt     DateTime         @default(now())
      processedAt     DateTime?
      idempotencyKey  String?          @unique

      @@index([taskerId, status])
      @@index([requestedAt])
    }

    model PayoutBatch {
      id             String            @id @default(cuid())
      batchDate      DateTime
      status         PayoutBatchStatus @default(DRAFT)
      provider       ProviderName
      totalAmountKobo BigInt           @default(0)
      itemCount      Int               @default(0)
      approvedById   String?
      approvedAt     DateTime?
      createdAt      DateTime          @default(now())

      items          PayoutBatchItem[]

      @@index([batchDate, status])
    }

    model PayoutBatchItem {
      id                  String            @id @default(cuid())
      payoutBatchId       String
      payoutBatch         PayoutBatch       @relation(fields: [payoutBatchId], references: [id])
      withdrawalRequestId String            @unique
      withdrawalRequest   WithdrawalRequest @relation(fields: [withdrawalRequestId], references: [id])
      status              WithdrawalStatus
      providerReference   String?
      failureReason       String?
    }

</div>

<div class="code-block">

<div class="code-title">

Communication And Masked Calls

</div>

    model TaskCallSession {
      id                  String      @id @default(cuid())
      taskId              String
      callerUserId        String
      recipientUserId     String
      provider            ProviderName
      proxyNumber         String
      providerSessionId   String?
      status              CallSessionStatus @default(ACTIVE)
      expiresAt           DateTime
      startedAt           DateTime?
      endedAt             DateTime?
      createdAt           DateTime    @default(now())

      @@index([taskId, status])
      @@index([callerUserId, createdAt])
    }

    model ChatMessage {
      id          String      @id @default(cuid())
      taskId      String?
      supportSessionId String?
      senderId    String
      type        MessageType @default(TEXT)
      body        String?
      mediaId     String?
      sentAt      DateTime    @default(now())
      readAt      DateTime?

      @@index([taskId, sentAt])
      @@index([supportSessionId, sentAt])
    }

</div>

<div class="code-block">

<div class="code-title">

Admin Audit And Use Case Health

</div>

    model AdminAuditLog {
      id            String          @id @default(cuid())
      actorAdminId  String?
      action        String
      risk          AdminActionRisk @default(LOW)
      targetType    String?
      targetId      String?
      reason        String?
      requestId     String?
      ipAddress     String?
      metadata      Json?
      createdAt     DateTime        @default(now())

      @@index([actorAdminId, createdAt])
      @@index([targetType, targetId])
      @@index([risk, createdAt])
    }

    model UseCaseExecutionLog {
      id            String   @id @default(cuid())
      useCaseName   String
      success       Boolean
      errorCode     String?
      durationMs    Int?
      requestId     String?
      actorId       String?
      resourceType  String?
      resourceId    String?
      lastUsedAt    DateTime @default(now())

      @@index([useCaseName, lastUsedAt])
      @@index([success, useCaseName])
    }

</div>

<div class="callout">

**Geospatial note**

Valkey GEOSEARCH remains the primary live discovery/filtering optimization for active Taskers. PostgreSQL stores authoritative coordinates for task sites, addresses and history. PostGIS can be introduced later only if database-side geospatial queries become necessary.

</div>

</div>

<div id="relationships" class="section section">

<div class="section-num">

09

</div>

<div class="eyebrow">

Relationships

</div>

## Relationships And Ownership

<div class="table-wrap">

| Relationship                          | Cardinality | Rule                                                                                       |
|---------------------------------------|-------------|--------------------------------------------------------------------------------------------|
| User -\> TaskerProfile                | 1:0..1      | A user only gets TaskerProfile when activating earning mode.                               |
| User -\> Wallet                       | 1:N         | At minimum Task Owner wallet and Tasker wallet. Platform/referral wallets can be separate. |
| Task -\> TaskLocation                 | 1:1         | Task location is immutable enough for historical accuracy after funding.                   |
| Task -\> TaskMedia                    | 1:N         | Owner proof, Tasker proof, report evidence and related media.                              |
| Task -\> TaskInterest                 | 1:N         | Public discovery interest from Taskers.                                                    |
| Task -\> DirectTaskOffer              | 1:N         | Direct offer to favorite Tasker; REST/FCM driven.                                          |
| Task -\> Escrow                       | 1:1         | Every funded task should have one escrow record.                                           |
| Task -\> TaskReport                   | 1:N         | Reports/disputes can be linked to task with options.                                       |
| Task -\> ChatMessage                  | 1:N         | Only after acceptance; persisted asynchronously from socket.                               |
| Task -\> TaskCallSession              | 1:N         | Masked call sessions are task-bound and time-limited.                                      |
| WithdrawalRequest -\> PayoutBatchItem | 1:0..1      | A request joins at most one active payout batch item.                                      |
| PayoutBatch -\> PayoutBatchItem       | 1:N         | Bulk transfer file/provider request grouping.                                              |
| AdminUser -\> AdminAuditLog           | 1:N         | Every privileged admin action must be traceable.                                           |

</div>

<div class="callout red">

**No destructive shortcuts**

Do not hard-delete user, task, wallet, payment, KYC, report, payout, or audit records in normal operations. Prefer status transitions, soft deletion, archival markers and restricted access.

</div>

</div>

<div id="indexes" class="section section">

<div class="section-num">

10

</div>

<div class="eyebrow">

Performance

</div>

## Indexes, Constraints And Idempotency

<div class="table-wrap">

| Model                | Index / Constraint Direction                                                                                | Why It Exists                                            |
|----------------------|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| User                 | unique email/phone where present, status, mode                                                              | Fast login, profile lookup and admin search.             |
| SocialAccount        | unique provider + providerAccountId                                                                         | Prevents duplicate Google/Apple identities.              |
| OtpChallenge         | recipient + purpose + expiresAt, consumedAt                                                                 | Rate limit and verification lookup.                      |
| UserSession          | userId + revokedAt, refreshTokenHash unique                                                                 | Session rotation and revocation.                         |
| Task                 | status + createdAt, taskOwnerId + status, acceptedTaskerId + status, categoryId + status, requiredArrivalAt | Mobile home, task browsing, admin task monitoring.       |
| TaskLocation         | taskId unique, countryCode, state, city, latitude/longitude                                                 | Nigeria validation, filtering and admin coverage review. |
| TaskInterest         | unique taskId + taskerId, taskId + status                                                                   | Prevents duplicate interest and supports candidate list. |
| DirectTaskOffer      | unique taskId + taskerId + active status, expiresAt                                                         | Direct offer lifecycle and expiry jobs.                  |
| WalletLedgerEntry    | walletId + createdAt, transactionGroupId, idempotencyKey unique                                             | Ledger history and duplicate protection.                 |
| Payment              | provider + providerReference unique, taskId, status                                                         | Webhook reconciliation.                                  |
| ProviderWebhookEvent | provider + eventId unique, processedAt                                                                      | Webhook idempotency.                                     |
| WithdrawalRequest    | taskerId + status, payoutBatchId, requestedAt                                                               | Batch preparation.                                       |
| PayoutBatchItem      | payoutBatchId + status, withdrawalRequestId unique                                                          | Bulk payout reconciliation.                              |
| TaskReport           | taskId + status, reporterId + createdAt                                                                     | Dispute queues and task detail.                          |
| AdminAuditLog        | actorAdminId + createdAt, targetType + targetId, risk                                                       | Audit investigation.                                     |
| UseCaseExecutionLog  | useCaseName + lastUsedAt, success + useCaseName                                                             | Use-case health dashboard.                               |

</div>

### Concrete Uniqueness And Constraint Requirements

<div class="table-wrap">

| Field / Model                       | Constraint                                                         | Implementation Note                                                          |
|-------------------------------------|--------------------------------------------------------------------|------------------------------------------------------------------------------|
| User.email                          | Unique when present.                                               | Use nullable unique handling supported by PostgreSQL/Prisma.                 |
| User.phone                          | Unique when present.                                               | Phone verification is separate from phone existence.                         |
| SocialAccount                       | Unique provider + providerAccountId.                               | A Google/Apple account cannot attach to multiple users.                      |
| UserCredential.userId               | Unique.                                                            | One password credential record per user.                                     |
| SecurityPinCredential.userId        | Unique.                                                            | One active PIN credential record per user; rotate by updating hash metadata. |
| UserSession.refreshTokenHash        | Unique.                                                            | Supports refresh-token rotation and reuse detection.                         |
| TaskerProfile.userId                | Unique.                                                            | One Tasker profile per user.                                                 |
| Wallet                              | Unique userId + type + currency.                                   | Guarantees separate Task Owner and Tasker wallets without duplicates.        |
| TaskLocation.taskId                 | Unique.                                                            | One authoritative task site per task.                                        |
| TaskInterest                        | Unique taskId + taskerId.                                          | A Tasker cannot express interest twice for the same task.                    |
| DirectTaskOffer                     | Unique active taskId + taskerId.                                   | Prevents duplicate active direct offers to same Tasker.                      |
| FavoriteTasker                      | Unique taskOwnerId + taskerId.                                     | One favorite relationship with status changes.                               |
| Payment.providerReference           | Unique provider + providerReference.                               | Provider payment reference cannot be processed twice.                        |
| ProviderWebhookEvent                | Unique provider + eventId.                                         | Webhook retry-safe processing.                                               |
| WalletLedgerEntry.idempotencyKey    | Unique when present.                                               | Prevents duplicate ledger writes.                                            |
| Escrow.taskId                       | Unique.                                                            | One active escrow accounting container per funded task.                      |
| PayoutAccount                       | Unique active taskerProfileId + provider/bank account fingerprint. | Prevents duplicate payout destination records.                               |
| WithdrawalRequest.idempotencyKey    | Unique when present.                                               | Prevents duplicate withdrawal from request retries.                          |
| PayoutBatchItem.withdrawalRequestId | Unique.                                                            | Withdrawal request can appear in one batch item.                             |
| Rating                              | Unique taskId + raterUserId.                                       | One rating per actor per completed task.                                     |
| AdminUser.email                     | Unique.                                                            | Admin accounts are separate from platform users.                             |
| AdminPermission.key                 | Unique.                                                            | Permission keys are code-owned and stable.                                   |
| AdminRole.name                      | Unique.                                                            | Role names must remain stable across seed/update runs.                       |

</div>

### Idempotency Rules

<div class="table-wrap">

| Area                  | Required Key                                       | Database Enforcement                                           |
|-----------------------|----------------------------------------------------|----------------------------------------------------------------|
| Payment intent        | clientRequestId or idempotencyKey                  | Unique key on PaymentAttempt where practical.                  |
| Provider webhook      | provider + providerEventId                         | Unique composite key on ProviderWebhookEvent.                  |
| Wallet ledger         | idempotencyKey and transactionGroupId              | Unique idempotency key, grouped debit/credit entries.          |
| Task state transition | taskId + targetStatus + requestId where applicable | Use TaskStatusEvent and use case guard.                        |
| Media finalization    | uploadSessionId or mediaId                         | Unique media reference to avoid duplicate proof records.       |
| Withdrawal request    | idempotencyKey                                     | Unique key to avoid duplicate withdrawal request from retries. |
| Payout batch item     | withdrawalRequestId                                | Unique one-batch item per withdrawal request.                  |

</div>

</div>

<div id="finance" class="section section">

<div class="section-num">

11

</div>

<div class="eyebrow">

Finance

</div>

## Finance And Ledger Model

The finance model must be conservative. Balances should be derived from ledger entries and cached on Wallet only inside database transactions. All provider events must be reconciled before wallet/escrow state changes are trusted.

<div class="diagram">

<div class="diagram-head">

#### Escrow And Payout Data Flow

Finance ERD

</div>

    Payment provider webhook
      -> ProviderWebhookEvent(unique provider event)
      -> Payment / PaymentAttempt
      -> Escrow[HELD]
      -> Task BROADCASTING / ACCEPTED / COMPLETED
      -> TaskSettlement calculates commission
      -> WalletLedgerEntry credits Tasker wallet
      -> WithdrawalRequest
      -> PayoutBatchItem
      -> PayoutBatch
      -> Provider transfer reference

Payment collection, escrow release and payout must be separated so disputes can hold only the affected settlement without blocking unrelated earnings.

</div>

<div class="table-wrap">

| Rule                | Data Model Decision                                                                            | Reason                                                                   |
|---------------------|------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| Minimum task amount | Validate amountKobo \>= 200000.                                                                | NGN 2,000 minimum task amount.                                           |
| Minimum withdrawal  | Validate WithdrawalRequest.amountKobo \>= 100000.                                              | NGN 1,000 minimum withdrawal.                                            |
| Commission tiers    | Store commissionBps snapshot on TaskSettlement.                                                | Historical settlements must not change when Tasker crosses a later tier. |
| Processing fee      | Store Task Owner processing/service fee separately from task amount.                           | Task Owner sees task amount and fee separately.                          |
| Task Owner refund   | Represent support-handled excess funding/refund as ledger entries and support case references. | Task Owner cannot withdraw directly by default.                          |
| Disputed payout     | Use TaskSettlementHold linked to task/report/withdrawal where needed.                          | Only affected payout is delayed; non-disputed earnings continue.         |
| Batch payout dates  | PayoutBatch.batchDate should be 14th or 28th policy date.                                      | Supports bulk transfer through Paystack/Moniepoint.                      |

</div>

</div>

<div id="privacy" class="section section">

<div class="section-num">

12

</div>

<div class="eyebrow">

Privacy

</div>

## Privacy, Retention And Access Control

<div class="table-wrap">

| Data Type              | Storage Rule                                                                     | Access Rule                                                         |
|------------------------|----------------------------------------------------------------------------------|---------------------------------------------------------------------|
| KYC identifiers        | Store minimum required metadata; encrypt sensitive provider payload references.  | Only KYC/admin-risk roles through audited access.                   |
| Biometric/face capture | Prefer provider-managed or restricted object storage references.                 | Never expose publicly; access is time-limited and audited.          |
| Exact task address     | TaskLocation stores exact address and coordinates.                               | Only visible after payment and accepted Tasker rules are satisfied. |
| Task media             | Store object key, purpose, status, owner, size, MIME type and moderation status. | Serve through signed URLs or controlled backend proxy.              |
| Real phone numbers     | Stored on User/contact records only.                                             | Never exposed through masked call sessions.                         |
| Chat/support messages  | Persist for dispute and support record.                                          | Access by task participants or support/admin role with audit.       |
| Admin actions          | AdminAuditLog is immutable operational evidence.                                 | Admin review only; no normal deletion path.                         |

</div>

</div>

<div id="migration" class="section section">

<div class="section-num">

13

</div>

<div class="eyebrow">

Migration

</div>

## Migration And Seed Plan

<div class="table-wrap">

| Phase   | Name                       | Models / Migrations                                                                                  | Why This Order                                                  |
|---------|----------------------------|------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| Phase 1 | Foundation                 | Users, credentials, sessions, PIN, admin auth/RBAC, task catalog, remote config.                     | Required before mobile/admin login and screen scaffolding.      |
| Phase 2 | Tasker and KYC             | TaskerProfile, KYC records, preferences, availability, saved addresses.                              | Unblocks Tasker activation and admin KYC review.                |
| Phase 3 | Task Marketplace           | Task, location, media, interest, direct offers, favorites, status events, rejection logs.            | Unblocks create task, discovery, acceptance and execution.      |
| Phase 4 | Finance                    | Wallets, ledger, payments, escrows, withdrawals, payout accounts, payout batches, provider webhooks. | Unblocks payment, escrow and payout flows.                      |
| Phase 5 | Communication and Support  | Chat messages, support sessions/messages, call sessions, communication audit logs.                   | Unblocks chat, support live chat, voice notes and masked calls. |
| Phase 6 | Risk, Reviews and Referral | Reports, warnings, strikes, ratings, risk flags, trust score events, referrals.                      | Unblocks disputes, penalties, trust and referral rewards.       |
| Phase 7 | Operations                 | Use-case logs, outbox events, queue audits, provider request logs, audit dashboards.                 | Unblocks monitoring, incident review and go-live operations.    |

</div>

### Seed Data

<div class="table-wrap">

| Seed Area         | Required Seed Data                                                                                   | Notes                                                           |
|-------------------|------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| Task categories   | Home, Errands, Office, Support and approved task types.                                              | Must match launch task categories.                              |
| Admin roles       | Owner, Operations, Finance, Support, Risk, Readonly.                                                 | Permission keys must be seeded from stable code-owned values.   |
| Remote config     | ETA guard settings, max media size, payout batch dates, commission tiers, location rules.            | Admin dashboard reads/updates config with audit.                |
| Commission tiers  | 20%, 17.5%, 15%, 12.5%, 10% thresholds.                                                              | Use basis points in database.                                   |
| Provider registry | Paystack, Moniepoint, Smile ID, Termii, FCM, Google Maps, Sentry, Shorebird, masked call candidates. | Provider credentials remain environment secrets, not seed data. |

</div>

</div>

<div id="prisma-rules" class="section section">

<div class="section-num">

14

</div>

<div class="eyebrow">

Execution Rules

</div>

## Prisma Implementation Rules

These rules are mandatory for implementation. They prevent Prisma from leaking across the hexagonal architecture and protect finance, provider, task state and admin audit correctness.

<div class="table-wrap">

| Area                | Execution Rule                                                                                                                                                                   |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Repository boundary | Use Prisma only inside persistence adapters/repositories. Use cases must depend on ports, not PrismaClient directly.                                                             |
| Transactions        | Use database transactions for wallet ledger writes, escrow release/refund, payout batch creation, task state changes with side effects, and provider webhook processing.         |
| Money               | Use BigInt/integer minor units for money. Do not use Float for balances, amounts, fees or commission settlement.                                                                 |
| Status transitions  | Do not update Task.status directly from controllers. Route through use cases that validate transition and write TaskStatusEvent.                                                 |
| Soft deletion       | Use status, archivedAt, removedAt, disabledAt or revokedAt for operational records. Avoid hard deletes outside seed cleanup or unused drafts.                                    |
| Provider payloads   | Store provider references and sanitized metadata. Do not store secrets, raw credentials or unnecessary full provider payloads in normal models.                                  |
| JSON fields         | Use Json only for flexible metadata, provider-safe snapshots and audit context. Do not hide core query fields inside Json.                                                       |
| Prisma schema size  | If schema grows large, split with Prisma schema folder support or clear region comments during implementation. Keep generated code files within the project line-limit standard. |
| Migrations          | Every migration must be named by feature, reviewed, and tested against staging backup/restore before production use.                                                             |
| Seeding             | Seed scripts must be idempotent using stable keys/slugs. Do not create duplicate roles, permissions, categories or config keys.                                                  |
| Indexes             | Add indexes during the feature migration that introduces the query pattern. Do not wait until performance issues appear in production.                                           |
| Outbox              | For critical side effects after transaction commit, write OutboxEvent inside the same transaction and process asynchronously.                                                    |

</div>

</div>

<div id="codex" class="section section">

<div class="section-num">

15

</div>

<div class="eyebrow">

Codex

</div>

## Codex Execution Instructions

Use this section directly when asking Codex to implement the schema, migrations, repositories or tests. Codex should treat this document as execution input, not inspiration.

<div class="table-wrap">

| Instruction           | Required Behavior                                                                                                                              |
|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Read order            | Before implementing Prisma schema, read Document 6 API & Socket Contract, this Document 7, and the mobile/admin flow catalogues.               |
| Schema first          | Implement enums and core models before feature repositories. Do not start controllers before model constraints are clear.                      |
| Feature commits       | Commit feature by feature or fix by fix. Do not stack unrelated schema changes, API endpoints and admin UI changes in one commit.              |
| No speculative models | Only add models that support accepted flows, API contracts, audit requirements or provider integration needs.                                  |
| Traceability          | Every new model must map to a flow, endpoint, admin operation, worker, provider event or audit requirement.                                    |
| Tests                 | For each finance, task transition, KYC, report or payout model change, add tests for duplicate/idempotent behavior and invalid state handling. |
| Data safety           | Before destructive migration or column removal, add a reversible migration plan and backup/restore note.                                       |
| Naming                | Use explicit names matching Work2Cash vocabulary: Task Owner, Tasker, mode, TaskStatusEvent, PayoutBatch, TaskSettlementHold.                  |

</div>

<div class="callout red">

**No speculative schema work**

Do not add models, enum values or provider fields because they may be useful later. Add them only when they support an accepted Work2Cash flow, API/socket contract, admin operation, worker, provider event, report, audit trail or go-live requirement.

</div>

</div>

<div id="handover" class="section section">

<div class="section-num">

16

</div>

<div class="eyebrow">

Checklist

</div>

## Implementation Checklist

- API-to-model traceability has been reviewed against Document 6 before schema implementation starts.
- Backend module ownership is followed; PrismaClient is not used directly inside controllers or use cases.
- Prisma schema preserves unified User model and separate Task Owner/Tasker wallet records.
- All money fields use minor units with BigInt or an equivalent integer strategy.
- Task state changes are protected by use case guards and persisted in TaskStatusEvent.
- Payment, webhook, wallet, task transition, withdrawal and payout operations have idempotency constraints.
- Task proof media, completion proof, report evidence and voice-note metadata are permission-controlled.
- Masked call sessions never store or expose real recipient phone number in user-facing responses.
- Admin high-impact actions require TOTP where applicable and write AdminAuditLog.
- UseCaseExecutionLog supports the separate use-case health dashboard.
- Seed data includes launch task categories, commission tiers, provider registry and payout batch rules.
- Migrations are reviewed in phases and no destructive production migration runs without backup and restore testing.

<div class="callout green">

**Repo placement**

Publish this document as `documents/data-model-prisma-schema-planning-v1.html` in the Work2Cash docs repository and link it from the main architecture resource list. The file name can retain planning for continuity, but the document content is now the execution baseline.

</div>

</div>

</div>

<div class="footer-inner">

<div>

#### Work2Cash

Data Model & Prisma Schema Execution Baseline v1 for backend, mobile, admin, QA and operations alignment.

</div>

<div>

#### Document Location

`documents/data-model-prisma-schema-planning-v1.html`

</div>

<div>

#### Guard Requirement

Protected HTML documents must include the documentation auth guard script before closing body.

</div>

</div>


---

# Source Document: Provider Integration & Cost Control v1


# Provider Integration & Cost Control v1

> AI-agent Markdown equivalent of `provider-integration-cost-control-v1.html`.
>
> Human-readable HTML source: `../provider-integration-cost-control-v1.html`.
> Use this Markdown version for lower-token AI context. If a task needs visual layout or exact document presentation, use the HTML page.

<div class="section cover">

<div class="brand-row">

<div class="logo">

W2C

</div>

<div>

**Work2Cash**Provider Integration & Cost Control

</div>

</div>

<div class="cover-main">

<div class="label">

Document 8

</div>

# Provider Integration & Cost Control

<div class="cover-subtitle">

Execution-grade provider integration, adapter, webhook, validation, fallback and cost-control baseline for Work2Cash.

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

Classification**Investor Ready**

</div>

<div class="meta-card">

Primary Market**Nigeria**

</div>

<div class="meta-card">

Cost Strategy**Frugal + Guarded**

</div>

<div class="meta-card">

Payments**Paystack + Moniepoint**

</div>

<div class="meta-card">

Hosting**Hetzner First**

</div>

</div>

<div class="badges">

<span class="badge">Provider Ports</span> <span class="badge">Cost Guards</span> <span class="badge">Webhook Idempotency</span> <span class="badge">Fallback Strategy</span> <span class="badge">Go-Live Validation</span>

</div>

</div>

<div class="cover-foot">

<div>

Source of truth: Enterprise Architecture v1, API & Socket Contract v1, Data Model & Prisma Execution Baseline v1.

</div>

<div>

Target repo location: documents/provider-integration-cost-control-v1.html

</div>

</div>

</div>

<div class="sticky">

<div class="sticky-inner">

**Work2Cash Provider & Cost Control v1**

[Registry](#registry) [Adapters](#adapters) [Webhooks](#webhooks) [Cost](#cost-controls) [Codex](#codex)

</div>

</div>

<div role="main">

<div class="section toc">

<div class="eyebrow">

Navigation

</div>

## Document Contents

This document defines how Work2Cash integrates third-party and self-hosted providers without losing cost control. It is intended for Codex-driven backend, mobile, admin, DevOps and QA execution.

<div class="toc-grid">

[01. How To Use This Document](#scope)[02. Provider Strategy](#strategy)[03. Provider Registry](#registry)[04. Environment And Secret Map](#environment)[05. Adapter And Port Contracts](#adapters)[06. Webhook And Idempotency Rules](#webhooks)[07. Cost Control Rules](#cost-controls)[08. Budget Baselines And Review Gates](#budgets)[09. Provider Validation Gates](#validation)[10. Failure, Fallback And Disablement](#fallback)[11. Monitoring, Logs And Alerts](#monitoring)[12. Codex Execution Instructions](#codex)[13. Implementation Checklist](#handover)

</div>

</div>

<div id="scope" class="section section">

<div class="section-num">

01

</div>

<div class="eyebrow">

Scope

</div>

## How To Use This Document

Use this document when implementing provider adapters, environment variables, webhooks, queues, validation gates, budget guards and operational monitoring. Provider pricing changes often, so this document separates Work2Cash architecture decisions from pricing values that must be revalidated before provisioning or go-live.

<div class="card-grid">

<div class="card">

Backend

#### Ports and adapters

Implement provider integrations behind ports. Use cases should not import provider SDKs directly.

</div>

<div class="card">

DevOps

#### Secrets and budgets

Configure provider credentials, billing alerts, environment isolation, backups and monitoring safely.

</div>

<div class="card">

QA/Product

#### Validation gates

Use provider validation tables as go-live test gates before enabling live traffic.

</div>

</div>

<div class="callout red">

**Cost safety rule**

Never implement paid provider auto-refresh loops. Paid providers must be called through explicit use cases, queues, webhooks, batch jobs, user actions, or guarded refresh logic.

</div>

</div>

<div id="strategy" class="section section">

<div class="section-num">

02

</div>

<div class="eyebrow">

Strategy

</div>

## Provider Strategy

<div class="diagram">

<div class="diagram-head">

#### Provider Boundary

Hexagonal Architecture

</div>

    Controller / Socket Gateway / Worker
      -> Use Case
      -> Port Interface
      -> Provider Adapter
      -> External Provider

    Provider callback
      -> Webhook Controller
      -> Signature Verification
      -> ProviderWebhookEvent
      -> Queue
      -> Use Case
      -> Database State Change

Provider SDKs and HTTP clients stay inside adapters. Use cases own business state transitions.

</div>

<div class="table-wrap">

| Rule                    | Execution Decision                                                                                       | Reason                                                                                                        |
|-------------------------|----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| Provider abstraction    | Every external provider must sit behind a port/interface.                                                | Supports swapping Paystack/Moniepoint, Resend/SendGrid and masked-call providers without rewriting use cases. |
| Staging first           | Every provider must pass staging validation before production credentials are configured.                | Prevents live-money/live-KYC mistakes.                                                                        |
| Webhook first for truth | Payment, transfer, KYC and call provider callbacks must be verified and persisted before state mutation. | Protects against spoofing, duplicate retries and redirect mismatch.                                           |
| Cost visibility         | Every paid provider operation must be logged by provider, use case, resource and requestId.              | Makes USD/variable cost visible before it becomes dangerous.                                                  |
| Fallback safe states    | Provider failure should lead to pending, retry, support, manual review or disabled feature state.        | Avoids false success and silent data corruption.                                                              |

</div>

</div>

<div id="registry" class="section section">

<div class="section-num">

03

</div>

<div class="eyebrow">

Registry

</div>

## Provider Registry

<div class="table-wrap">

| Category               | Provider                                     | Role                                                         | Work2Cash Usage                                                                            | Status                                | Execution Note                                                                                                               |
|------------------------|----------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------------------------------------|---------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Payments - Collections | Paystack                                     | Primary collection rail alongside Moniepoint.                | Task Owner cardless payment, bank transfer, payment redirect/status, webhook confirmation. | Active MVP provider                   | Verify current pricing, supported channels, webhook signatures and settlement behavior before go-live.                       |
| Payments - Collections | Moniepoint                                   | Primary collection rail alongside Paystack.                  | Task Owner payment, provider status, webhook confirmation.                                 | Active MVP provider                   | Verify online checkout/API availability, webhook reliability, bank transfer flow and settlement behavior before go-live.     |
| Payouts                | Paystack Transfers                           | Transfer rail for Tasker withdrawals where appropriate.      | Bulk payout batch processing on 14th and 28th.                                             | Active MVP provider                   | Verify transfer fees, bank coverage, transfer limits, reversal behavior and compliance requirements.                         |
| Payouts                | Moniepoint                                   | Transfer rail for payout batches where appropriate.          | Bulk payout batch processing and reconciliation.                                           | Active MVP provider                   | Verify transfer API, bulk transfer support, pricing, limits and settlement operations.                                       |
| KYC                    | Smile ID                                     | Identity verification provider.                              | NIN/BVN + biometric face match for Tasker activation.                                      | Active MVP provider                   | Verify Nigeria product availability, pricing, callback signatures, required consent wording and data retention requirements. |
| Maps                   | Google Maps Platform                         | Paid maps/routing/geocoding provider.                        | Geocoding manual address, ETA snapshots, traffic-aware arrival estimate.                   | Active MVP provider with strict guard | Distance/route pricing changes frequently. Configure billing alerts and enforce ETA guard.                                   |
| Push Notifications     | Firebase Cloud Messaging                     | Primary device wake and push notification channel.           | New task alerts, direct offers, chat/support notifications, critical task updates.         | Active MVP provider                   | Keep FCM tokens fresh and handle aggressive Android background killing.                                                      |
| SMS                    | Termii                                       | SMS fallback for critical OTP and critical notifications.    | OTP fallback after email, critical account/payment/support messages only.                  | Active MVP provider                   | SMS can become expensive; use only where email/push is insufficient.                                                         |
| Email                  | Resend                                       | Phase 1 transactional email provider.                        | OTP email, receipts, account notifications, support emails.                                | Phase 1 provider                      | Use React Email templates and monitor free/pro limits.                                                                       |
| Email                  | SendGrid                                     | Later email provider when volume/deliverability requires it. | High-volume transactional email and dedicated IP needs.                                    | Deferred provider                     | Switch via email adapter without changing use cases.                                                                         |
| Monitoring             | Sentry                                       | Error monitoring.                                            | Backend, Flutter and Next.js error tracking.                                               | Developer/free plan baseline          | Avoid sending PII, KYC payloads, provider secrets or payment-sensitive values.                                               |
| Mobile Updates         | Shorebird                                    | Flutter patch delivery.                                      | Post-release Dart patch updates where allowed.                                             | Active mobile provider                | Do not use for native changes requiring app store release.                                                                   |
| Masked Calls           | Infobip                                      | Primary candidate for proxy dial-in masked calls.            | Task-bound call masking without exposing phone numbers.                                    | Candidate to validate                 | Confirm Nigerian voice number availability, local airtime behavior, carrier reliability and pricing.                         |
| Masked Calls           | Africa's Talking                             | Secondary candidate for masked calls.                        | Fallback voice masking candidate.                                                          | Candidate to validate                 | Confirm Nigeria number support and proxy dial-in feasibility.                                                                |
| Masked Calls           | Vonage                                       | Fallback masked call provider.                               | Fallback if local candidates fail.                                                         | Fallback                              | Do not depend on it until Nigeria voice-capable number support is verified.                                                  |
| Masked Calls           | Sinch                                        | Enterprise fallback.                                         | Fallback if scale/compliance requires enterprise provider.                                 | Fallback                              | Likely higher-cost path; validate only if needed.                                                                            |
| Hosting                | Hetzner                                      | First-choice production and staging hosting path.            | Self-host NestJS, Postgres, Valkey, BullMQ, monitoring stack where selected.               | First-choice infrastructure           | Latency must be measured from Nigeria before final production commitment.                                                    |
| Hosting                | DigitalOcean                                 | Production fallback if Hetzner latency becomes unacceptable. | Alternative app/data/monitoring server setup and Spaces/S3-compatible storage.             | Fallback infrastructure               | Keep migration plan ready and object storage compatible.                                                                     |
| Object/Backup Storage  | DigitalOcean Spaces or S3-compatible storage | Media, backup and export storage.                            | Task proof media, backups, generated exports.                                              | Active option                         | Use signed URLs, lifecycle policies and backup restore tests.                                                                |
| Domain                 | WhoGoHost                                    | Domain registrar for work2cash.ng.                           | Domain purchase and DNS ownership.                                                         | Active provider                       | Domain baseline: NGN 9,200 + 7.5% VAT = NGN 9,890 excluding bank transfer/payment charges.                                   |
| Analytics              | Firebase Analytics                           | Basic mobile analytics.                                      | Event-level mobile analytics where useful.                                                 | Deferred/light usage                  | Product analytics is intentionally not a core MVP dependency.                                                                |

</div>

</div>

<div id="environment" class="section section">

<div class="section-num">

04

</div>

<div class="eyebrow">

Environment

</div>

## Environment And Secret Map

<div class="table-wrap">

| Surface       | Environment | URL                                 | Purpose                                                       | Secret Rule                                                  |
|---------------|-------------|-------------------------------------|---------------------------------------------------------------|--------------------------------------------------------------|
| API           | Production  | https://api.work2cash.ng            | REST source of truth.                                         | Provider live keys only after go-live approval.              |
| Socket        | Production  | https://socket.work2cash.ng         | Socket.IO for task chat, support chat, tracking and presence. | Token auth and Valkey adapter when scaled.                   |
| Admin         | Production  | https://admin.work2cash.ng          | Operations dashboard.                                         | Admin TOTP and RBAC required.                                |
| API           | Staging     | https://api-staging.work2cash.ng    | Staging REST API.                                             | Sandbox/test keys only.                                      |
| Socket        | Staging     | https://socket-staging.work2cash.ng | Staging socket gateway.                                       | No production user data.                                     |
| Website/Admin | Staging     | https://staging.work2cash.ng        | Staging web/admin surface.                                    | Password-gated documentation remains separate from app auth. |

</div>

### Secret Groups

<div class="table-wrap">

| Provider       | Expected Environment Variables                                                                     | Rule                                                                    |
|----------------|----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| Paystack       | PAYSTACK_SECRET_KEY, PAYSTACK_PUBLIC_KEY, PAYSTACK_WEBHOOK_SECRET, PAYSTACK_BASE_URL               | Staging uses test keys. Production uses live keys only after approval.  |
| Moniepoint     | MONIEPOINT_CLIENT_ID, MONIEPOINT_CLIENT_SECRET, MONIEPOINT_WEBHOOK_SECRET, MONIEPOINT_BASE_URL     | Names can be adjusted to official SDK/API naming during implementation. |
| Smile ID       | SMILE_ID_PARTNER_ID, SMILE_ID_API_KEY, SMILE_ID_WEBHOOK_SECRET, SMILE_ID_BASE_URL                  | Never expose to mobile/admin frontend.                                  |
| Google Maps    | GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_BASE_URL, GOOGLE_MAPS_BUDGET_LIMIT                                | Restrict key by API, domain/IP where possible.                          |
| Termii         | TERMII_API_KEY, TERMII_SENDER_ID, TERMII_BASE_URL                                                  | Use only for fallback/critical SMS.                                     |
| Email          | RESEND_API_KEY, SENDGRID_API_KEY, EMAIL_PROVIDER                                                   | EMAIL_PROVIDER controls adapter selection.                              |
| Firebase       | FCM_SERVER_CREDENTIALS, FIREBASE_PROJECT_ID                                                        | Store server credentials only on backend/worker environment.            |
| Sentry         | SENTRY_DSN_BACKEND, SENTRY_DSN_ADMIN, SENTRY_DSN_FLUTTER, SENTRY_ENVIRONMENT                       | Scrub sensitive data before sending events.                             |
| Shorebird      | SHOREBIRD_TOKEN, SHOREBIRD_APP_ID                                                                  | CI/mobile release context only.                                         |
| Masked Calls   | CALL_PROVIDER, INFOBIP_API_KEY, AFRICAS_TALKING_API_KEY, VONAGE_API_KEY, SINCH_API_KEY             | Only configure provider after validation.                               |
| Object Storage | S3_ENDPOINT, S3_REGION, S3_BUCKET_MEDIA, S3_BUCKET_BACKUPS, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY | Use separate buckets/prefixes for media and backups.                    |

</div>

<div class="callout amber">

**Secret handling**

Raw passwords, API keys, webhook secrets, service account credentials and production provider credentials must never be committed to the docs repo or application repository.

</div>

</div>

<div id="adapters" class="section section">

<div class="section-num">

05

</div>

<div class="eyebrow">

Adapters

</div>

## Adapter And Port Contracts

<div class="table-wrap">

| Port                  | Adapters                                                                                                       | Responsibilities                                                                    | Boundary Rule                                                          |
|-----------------------|----------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| PaymentCollectionPort | PaystackPaymentAdapter, MoniepointPaymentAdapter                                                               | Create payment intent, verify status, parse webhook, normalize provider references. | No task state mutation inside adapter; use case owns state transition. |
| PayoutPort            | PaystackTransferAdapter, MoniepointTransferAdapter                                                             | Create transfer/bulk transfer, verify transfer status, parse payout webhook.        | PayoutBatch use case owns item status and ledger effects.              |
| KycPort               | SmileIdKycAdapter                                                                                              | Start NIN/BVN/biometric job, parse callback, normalize KYC result.                  | KYC adapter must not activate TaskerProfile directly.                  |
| MapsPort              | GoogleMapsAdapter                                                                                              | Geocode address, compute ETA/distance for shortlisted candidates.                   | All paid calls go through guard and budget logger.                     |
| SmsPort               | TermiiSmsAdapter                                                                                               | Send OTP fallback and critical SMS.                                                 | Email-first rule enforced by notification use case.                    |
| EmailPort             | ResendEmailAdapter, SendGridEmailAdapter                                                                       | Send transactional email templates.                                                 | Provider selected by config, not by use case.                          |
| PushNotificationPort  | FcmPushAdapter                                                                                                 | Send push notifications and topic/device messages.                                  | Push must point user to REST state, not carry sensitive payload.       |
| CallMaskingPort       | InfobipCallMaskingAdapter, AfricasTalkingCallMaskingAdapter, VonageCallMaskingAdapter, SinchCallMaskingAdapter | Create proxy call session, route inbound provider call, close session.              | Provider availability must be confirmed before production enablement.  |
| ObjectStoragePort     | S3CompatibleStorageAdapter                                                                                     | Signed upload/download URLs, delete/expire objects, backup storage.                 | Media access must be permission-controlled.                            |
| ErrorMonitoringPort   | SentryMonitoringAdapter                                                                                        | Capture sanitized exceptions and performance traces.                                | No PII/secrets in error payloads.                                      |

</div>

<div class="code-block">

<div class="code-title">

Provider Adapter Pattern

</div>

    export interface PaymentCollectionPort {
      createPaymentIntent(input: CreatePaymentIntentInput): Promise<CreatePaymentIntentResult>;
      verifyPayment(reference: string): Promise<NormalizedPaymentStatus>;
      parseWebhook(rawBody: Buffer, headers: Record<string, string>): Promise<NormalizedWebhookEvent>;
    }

    // Use case owns task/payment/escrow state.
    // Adapter only normalizes provider communication.

</div>

</div>

<div id="webhooks" class="section section">

<div class="section-num">

06

</div>

<div class="eyebrow">

Webhooks

</div>

## Webhook And Idempotency Rules

<div class="table-wrap">

| Rule                   | Execution Requirement                                                           | Why It Matters                                                |
|------------------------|---------------------------------------------------------------------------------|---------------------------------------------------------------|
| Raw body               | Webhook routes must preserve raw request body for signature validation.         | Required for Paystack, Moniepoint and other signed callbacks. |
| Signature verification | Reject webhooks that fail signature verification.                               | Prevents spoofed payment/KYC/call events.                     |
| Idempotency            | Persist provider + eventId/reference in ProviderWebhookEvent before processing. | Allows safe provider retries.                                 |
| Fast acknowledgement   | Store event and queue processing quickly.                                       | Avoids provider timeout and duplicate retry storms.           |
| State guards           | Provider event cannot force invalid task/payment/payout state transition.       | Use use-case state machine guards.                            |
| Audit                  | High-impact provider results write audit/provider request logs.                 | Supports reconciliation and dispute review.                   |
| Replay handling        | Duplicate webhook returns success after confirming previous processing state.   | Provider retries should not create duplicates.                |

</div>

<div class="diagram">

<div class="diagram-head">

#### Webhook Processing

Idempotent Provider Flow

</div>

    Provider sends webhook
      -> Preserve raw body
      -> Verify signature
      -> Insert ProviderWebhookEvent(provider + eventId)
      -> If duplicate: return success with previous state
      -> Queue normalized event
      -> Use case validates state transition
      -> Transaction updates Payment/KYC/Payout/Call state
      -> ProviderRequestLog / AuditLog records result

Provider retries must be safe. Duplicate callbacks must not duplicate ledger entries, task states, payout items or KYC decisions.

</div>

</div>

<div id="cost-controls" class="section section">

<div class="section-num">

07

</div>

<div class="eyebrow">

Cost Control

</div>

## Cost Control Rules

<div class="table-wrap">

| Provider Area      | Forbidden Behavior                                                            | Required Control                                                                                                    | Enforcement                                                                                    |
|--------------------|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| Google Maps        | Do not call paid ETA APIs on every location update.                           | Use Valkey/Redis geospatial filtering first, then ETA only for shortlisted candidates and guarded tracking updates. | 5-minute guard plus next 10% total-journey milestone; reset timer and milestone after refresh. |
| Payments           | Do not trust frontend redirect as final payment truth.                        | Use provider webhook + backend verification before escrow/task state changes.                                       | Idempotent ProviderWebhookEvent and PaymentAttempt records.                                    |
| SMS                | Do not make SMS the first OTP channel.                                        | Email first, Termii SMS fallback only when needed.                                                                  | OTP purpose, rate limit and retry tracking.                                                    |
| Email              | Do not hard-code provider SDK into use cases.                                 | Use EmailPort with Resend adapter first and SendGrid adapter later.                                                 | Provider swap does not affect auth/support use cases.                                          |
| Masked Calls       | Do not expose direct phone numbers.                                           | Use proxy dial-in session and provider callback validation.                                                         | TaskCallSession expiry and valid task state checks.                                            |
| Push Notifications | Do not use push as source of truth.                                           | FCM wakes device; app fetches REST state after open/resume.                                                         | Notification records and deep link targets persist in DB.                                      |
| Hosting            | Do not start with oversized managed services if self-hosting is selected.     | Use separate app/data/monitoring servers for production where feasible; staging remains lean.                       | Monitor CPU/RAM/disk and move to fallback provider if latency or ops burden requires.          |
| Backups            | Do not assume snapshots are enough.                                           | Use scheduled Postgres dumps/WAL strategy, object-storage copy and restore drills.                                  | RPO/RTO targets must be tested before go-live.                                                 |
| Error Monitoring   | Do not send sensitive payloads to Sentry.                                     | Scrub PII, KYC identifiers, payment references where sensitive, phone numbers and provider secrets.                 | Sentry beforeSend/scrubbing rules in all clients.                                              |
| Queues             | Do not execute provider side effects directly in request path when avoidable. | Use BullMQ jobs with idempotent processors for notifications, payments, KYC, maps, media, reports and payouts.      | QueueJobAudit and retry/dead-letter monitoring.                                                |

</div>

### Budget Guards

<div class="table-wrap">

| Cost Area                 | Guard                                                                             | Alert / Action                                                                   | Measurement                                                                      |
|---------------------------|-----------------------------------------------------------------------------------|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| Google Maps monthly spend | Set cloud billing budget and internal Maps usage counter.                         | Alert at 50%, 75%, 90% and hard operational review at 100%.                      | Maps worker records every paid request with purpose and taskId where applicable. |
| SMS spend                 | Track OTP and critical SMS count by purpose.                                      | Alert when SMS fallback rate is unusually high.                                  | High fallback rate may indicate email deliverability or UX issue.                |
| KYC spend                 | Track KYC attempt count, success/failure and duplicate attempts.                  | Block repeated KYC retry abuse and require cooldown/support review where needed. | KYC retries directly affect cost.                                                |
| Email spend               | Track monthly volume by provider and template.                                    | Resend first; SendGrid only after volume/deliverability threshold.               | Avoid noisy transactional emails.                                                |
| Masked call spend         | Track proxy number leases, inbound calls, forwarding minutes and failed sessions. | Feature remains provider-validation gated until Nigeria cost behavior is known.  | Call copy: Calls use your normal airtime. Work2Cash protects your phone number.  |
| Server spend              | Track CPU/RAM/disk/network and backup storage.                                    | Right-size self-hosted servers before scaling up.                                | Infrastructure spend must be reviewed before switching provider.                 |
| Object storage spend      | Track media size, backup size, lifecycle expiry and CDN egress.                   | Enforce 50MB per task media file and cleanup orphaned uploads.                   | Use lifecycle policy for old generated exports/log archives.                     |

</div>

<div class="callout green">

**ETA guard**

Tasker GPS may stream frequently, but paid ETA refresh is allowed only when the 5-minute guard has elapsed and the next 10% total-journey milestone has been crossed. The 10% journey milestone is the main driver. After refresh, reset the guard timer and next milestone.

</div>

</div>

<div id="budgets" class="section section">

<div class="section-num">

08

</div>

<div class="eyebrow">

Budgets

</div>

## Budget Baselines And Review Gates

The table below captures Work2Cash budgeting assumptions. Any external provider pricing must be revalidated from the official provider source before live provisioning, investor reporting or go-live budgeting.

<div class="table-wrap">

| Item                     | Baseline                                          | Execution Note                                                            |
|--------------------------|---------------------------------------------------|---------------------------------------------------------------------------|
| Exchange rate assumption | USD 1 = NGN 1,600                                 | Project budgeting baseline. Revalidate before payments/provisioning.      |
| Domain                   | NGN 9,200 + 7.5% VAT = NGN 9,890                  | WhoGoHost baseline excluding bank transfer/payment charges.               |
| Staging hosting          | Hetzner CX33 baseline from project source         | 4 vCPU, 8GB RAM, 80GB SSD. Revalidate before provisioning.                |
| Production first choice  | Hetzner self-hosted production                    | Selected for cost; latency from Nigeria must be measured.                 |
| Production fallback      | DigitalOcean multi-server production              | Use if Hetzner latency or operational risk becomes unacceptable.          |
| Production budget buffer | USD 60-80 monthly buffer                          | Infrastructure/provider overage buffer from architecture baseline.        |
| Variable provider costs  | Maps, KYC, SMS, email, masked calls, payment fees | Track by use case and alert before budget drift becomes operational risk. |

</div>

<div class="callout amber">

**Pricing verification gate**

Provider pricing is operationally unstable. Before go-live, verify Paystack, Moniepoint, Smile ID, Google Maps, Termii, email, hosting, object storage and masked-call pricing from official provider sources and update this document if the baseline changes.

</div>

</div>

<div id="validation" class="section section">

<div class="section-num">

09

</div>

<div class="eyebrow">

Validation

</div>

## Provider Validation Gates

<div class="table-wrap">

| Provider / Area | Validation Test                                                                                                                                  | Go-Live Rule                                              |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| Paystack        | Can create payment intent, complete bank-transfer/redirect flow, receive signed webhook, reconcile duplicate webhook, and verify payment status. | Required before payment MVP signoff.                      |
| Moniepoint      | Can create payment/collection flow, receive signed webhook, verify status, and reconcile failed/pending cases.                                   | Required before payment MVP signoff.                      |
| Payout batch    | Can generate batch, exclude disputed Taskers, process provider transfer, handle partial failure and retry safely.                                | Required before Tasker withdrawal launch.                 |
| Smile ID        | Can run test KYC, receive callback, map result to KycStatus and request re-verification from admin.                                              | Required before Tasker activation launch.                 |
| Google Maps     | Can geocode manual address, reject non-Nigeria task site, compute ETA, and enforce 5-minute + 10% journey guard.                                 | Required before task matching launch.                     |
| FCM             | Can register device token, send direct offer/task/chat/support notification, and recover state from REST after tap.                              | Required before mobile closed testing.                    |
| Termii          | Can send fallback OTP with rate limit and purpose logging.                                                                                       | Required before auth closed testing.                      |
| Email           | Can send OTP, receipt and support email with template and event logging.                                                                         | Required before auth/payment closed testing.              |
| Sentry          | Can capture sanitized backend/mobile/admin errors without PII/secrets.                                                                           | Required before staging QA.                               |
| Shorebird       | Can patch non-native Flutter issue in staging build and document limitations.                                                                    | Required before mobile release readiness.                 |
| Masked calls    | Can lease/use proxy number, route inbound call, bridge recipient, hide real number and track cost.                                               | Can remain disabled if provider validation is incomplete. |
| Backups         | Can backup Postgres, upload to object storage, restore to staging and confirm RPO/RTO.                                                           | Required before production go-live.                       |

</div>

</div>

<div id="fallback" class="section section">

<div class="section-num">

10

</div>

<div class="eyebrow">

Fallback

</div>

## Failure, Fallback And Disablement

<div class="table-wrap">

| Failure                          | User-Facing State                                       | Backend State                                               | Admin / Ops Action                                              |
|----------------------------------|---------------------------------------------------------|-------------------------------------------------------------|-----------------------------------------------------------------|
| Payment webhook delayed          | Payment pending. User can refresh status.               | Payment remains PENDING; task not broadcast until verified. | Reconcile provider reference from admin finance.                |
| Payment provider down            | Payment option temporarily unavailable.                 | Provider marked degraded by config.                         | Route to alternate provider if enabled.                         |
| KYC provider delayed             | KYC pending review.                                     | KycVerification remains PENDING.                            | Admin can reconcile provider status or request re-verification. |
| Maps API budget risk             | ETA temporarily unavailable or stale.                   | Use last ETA/distance and disable paid refresh.             | Review budget and provider logs.                                |
| FCM delivery failure             | Notification may not appear; app fetches state on open. | Notification failed/retry logged.                           | Retry where useful; do not rely on push for truth.              |
| SMS provider failure             | OTP fallback unavailable; email remains primary.        | OtpChallenge remains pending/failed.                        | Switch provider or support path if critical.                    |
| Masked call provider unavailable | Call via Work2Cash temporarily unavailable.             | TaskCallSession not created or marked failed.               | Disable feature flag and keep chat/voice notes available.       |
| Object storage failure           | Upload/download retry state.                            | TaskMedia remains UPLOADING or failed.                      | Retry job and check storage health.                             |
| Sentry unavailable               | No user-facing impact.                                  | Monitoring degraded.                                        | Use application logs and restore Sentry later.                  |

</div>

</div>

<div id="monitoring" class="section section">

<div class="section-num">

11

</div>

<div class="eyebrow">

Monitoring

</div>

## Monitoring, Logs And Alerts

<div class="table-wrap">

| Signal                 | Required Log / Metric                                                                    | Alert Condition                                 |
|------------------------|------------------------------------------------------------------------------------------|-------------------------------------------------|
| Provider requests      | provider, operation, requestId, resourceId, status, duration, estimatedCost where known. | Error spike, latency spike or cost spike.       |
| Webhook processing     | event received, signature valid/invalid, duplicate, processed, failed.                   | Webhook failure rate or duplicate storm.        |
| Payment reconciliation | pending payments by age, successful payments, failed payments.                           | Pending payment exceeds allowed age.            |
| Maps usage             | paid geocode/ETA requests by purpose and task.                                           | Budget threshold or abnormal refresh frequency. |
| KYC usage              | attempts, success, reject, failed, provider errors.                                      | High failure rate or duplicate attempts.        |
| SMS usage              | OTP sends by purpose, fallback rate, failures.                                           | SMS fallback rate above expected threshold.     |
| Payout batch           | batch status, failed items, partial failures, provider references.                       | Batch stuck or partial failure.                 |
| Queues                 | waiting, active, delayed, failed, dead-letter counts.                                    | Queue backlog or repeated job failure.          |
| Backups                | backup success/failure, size, restore test date.                                         | Missed backup or stale restore drill.           |

</div>

</div>

<div id="codex" class="section section">

<div class="section-num">

12

</div>

<div class="eyebrow">

Codex

</div>

## Codex Execution Instructions

<div class="table-wrap">

| Instruction                  | Required Behavior                                                                                                                                             |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Adapter-first implementation | Create ports and provider adapters. Do not call provider SDKs directly from controllers or use cases.                                                         |
| Idempotency first            | Implement ProviderWebhookEvent and idempotency keys before live payment, payout, KYC or call callbacks.                                                       |
| Sandbox before live          | Every provider must pass staging validation with sandbox/test keys before production credentials are configured.                                              |
| Secrets handling             | Never commit provider keys, webhook secrets, service account JSON, Sentry DSNs with secrets, or production credentials.                                       |
| Cost logging                 | Every paid provider adapter must write ProviderRequestLog or equivalent with provider, operation, resource, success, cost estimate where known and requestId. |
| Feature flags                | Risky provider features such as masked calls must be controlled by admin config/feature flag.                                                                 |
| Fallback paths               | Provider failures must return recoverable states: pending, retry, support, manual review or disabled feature. Do not silently mark success.                   |
| No paid polling loops        | Do not implement auto-refresh loops against paid providers. Use queues, webhooks, status recovery and explicit guarded refresh.                               |
| Frontend behavior            | Provider submit actions use blur overlay with spinning Work2Cash logo; fetches use skeletonized views.                                                        |

</div>

</div>

<div id="handover" class="section section">

<div class="section-num">

13

</div>

<div class="eyebrow">

Checklist

</div>

## Implementation Checklist

- Every provider integration is implemented through a port and adapter.
- Provider credentials are environment-only and are never committed.
- Payment, payout, KYC and call webhooks preserve raw body and verify signature.
- ProviderWebhookEvent idempotency exists before live webhook processing.
- Google Maps ETA guard is implemented before live tracking is enabled.
- Termii SMS is fallback/critical only; email remains OTP first channel.
- Sentry scrubbing removes PII, KYC payloads, phone numbers and provider secrets.
- Payout batch validation covers 14th/28th schedule, disputed Tasker exclusion and partial failure handling.
- Masked calls remain disabled until Nigeria voice/proxy validation passes.
- Backups are restored successfully in staging before production go-live.
- Provider pricing is revalidated from official sources before go-live.

<div class="callout green">

**Repo placement**

Publish this document as `documents/provider-integration-cost-control-v1.html` in the Work2Cash docs repository and link it from the main architecture resource list.

</div>

</div>

</div>

<div class="footer-inner">

<div>

#### Work2Cash

Provider Integration & Cost Control v1 for execution across backend, mobile, admin, DevOps and QA.

</div>

<div>

#### Document Location

`documents/provider-integration-cost-control-v1.html`

</div>

<div>

#### Guard Requirement

Protected HTML documents must include the documentation auth guard script before closing body.

</div>

</div>


---

# Source Document: Mobile Build Plan v1


# Mobile Build Plan v1

> AI-agent Markdown equivalent of `build-plan-mobile-v1.html`.
>
> Human-readable HTML source: `../build-plan-mobile-v1.html`.
> Use this Markdown version for lower-token AI context. If a task needs visual layout or exact document presentation, use the HTML page.

<div class="section cover">

<div class="brand-row">

<div class="logo">

W2C

</div>

<div>

**Work2Cash**Mobile Build Execution Plan

</div>

</div>

<div class="cover-main">

<div class="label">

Document 9A

</div>

# Mobile Build Execution Plan

<div class="cover-subtitle">

Master mobile-led execution plan for Flutter implementation. Backend and admin delivery order must follow this flow sequence.

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

Repo location: documents/build-plan-mobile-v1.html

</div>

</div>

</div>

<div class="sticky">

<div class="sticky-inner">

**Mobile Build Execution Plan v1**

[Principles](#principles) [Dependencies](#dependencies) [Build](#build) [Testing](#testing) [Codex](#codex)

</div>

</div>

<div role="main">

<div class="section toc">

<div class="eyebrow">

Document 9A

</div>

## Mobile Is The Master Build Order

This document controls the product implementation order because the mobile app is the primary user-facing product. Backend must expose contracts in the order mobile needs them. Admin must follow the operational data created by mobile flows.

<div class="toc-grid">

[01. Mobile Build Principles](#principles) [02. Mobile Flow Order](#flow-order) [03. Backend/Admin Dependencies](#dependencies) [04. Eight-Week Build Plan](#build) [05. Two-Week Testing Plan](#testing) [06. Codex Execution Instructions](#codex)

</div>

</div>

<div id="principles" class="section section">

<div class="section-num">

01

</div>

<div class="eyebrow">

Principles

</div>

## Mobile Build Principles

<div class="table-wrap">

| Rule             | Execution Requirement                                                                                                                           |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Architecture     | Use feature-first clean architecture with explicit usecase, params, entities, models, repositories, data sources and screens in separate files. |
| State management | Use Riverpod with preferred autogenerated classes where practical.                                                                              |
| File size        | Keep files under 400-500 lines. Split widgets, use cases and providers before files become hard to review.                                      |
| Loading states   | GET/fetch operations use skeletonized versions of the view. POST/PATCH/critical submits use blur overlay with spinning Work2Cash logo.          |
| Offline/recovery | No flow depends only on local memory. App resume, payment return, KYC return and socket reconnect must call REST source of truth.               |
| Payments         | Do not design card-entry forms. Default to Paystack/Moniepoint cardless redirect/status, bank transfer or wallet-style flows.                   |
| Commits          | Commit feature by feature or fix by fix. Do not stack unrelated features in one commit.                                                         |

</div>

</div>

<div id="flow-order" class="section section">

<div class="section-num">

02

</div>

<div class="eyebrow">

Flow Order

</div>

## Mobile Flow Implementation Order

<div class="table-wrap">

| Order | Flow IDs                   | Mobile Scope                                                                                    | Backend Dependency                                                                |
|-------|----------------------------|-------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| 1     | MF-01, MF-02, MF-03        | App entry, registration, login and session recovery.                                            | Backend auth/profile/PIN contracts must be available as stubs by W1D2.            |
| 2     | MF-18, MF-19, MF-20        | Profile/settings, security PIN, device/session, notification preferences.                       | Backend /me, sessions, PIN and notification preferences required.                 |
| 3     | MF-04, MF-05, MF-21        | Task Owner home, Tasker activation, KYC, availability and preferences.                          | Backend KYC, catalog and Tasker profile APIs required.                            |
| 4     | MF-06                      | Create and fund task with location, media and payment.                                          | Backend task draft, geocode, media and payment intent APIs required.              |
| 5     | MF-07, MF-08, MF-09        | Public discovery, direct offer and Tasker interest/acceptance.                                  | Backend discovery, favorites, direct offer and candidate APIs required.           |
| 6     | MF-10                      | Active task execution with start journey, arrived, begin task, chat, tracking and masked calls. | Backend status APIs and socket namespaces required.                               |
| 7     | MF-11, MF-12, MF-14        | Completion, settlement, cancellation, no-show, task history.                                    | Backend completion, cancellation, reports and history APIs required.              |
| 8     | MF-13, MF-15, MF-22, MF-24 | Withdrawal, favorites, ratings/reviews and rebook.                                              | Backend payout account, withdrawals, ratings, favorites and rebook APIs required. |
| 9     | MF-16, MF-17, MF-23        | Support live chat, referral, emergency support.                                                 | Backend support socket/session, referral and emergency APIs required.             |

</div>

<div class="diagram">

<div class="diagram-head">

#### Mobile-Led Dependency Chain

Build Order

</div>

    Mobile flow order
      -> Backend contract availability
      -> Mobile integration
      -> Admin operational screen
      -> QA acceptance

    Example:
    Create and fund task
      -> task draft/geocode/media/payment APIs
      -> mobile create task screens
      -> admin task monitor + finance review
      -> end-to-end task funding test

Mobile determines product sequence. Backend must be ready in that order; admin follows the data created by mobile.

</div>

</div>

<div id="dependencies" class="section section">

<div class="section-num">

03

</div>

<div class="eyebrow">

Dependencies

</div>

## Backend And Admin Dependency Schedule

### Backend Must Be Available In This Order

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

### Admin Follows These Mobile Outcomes

<div class="table-wrap">

| Order | Admin Flows                                                   | Admin Scope                                                             | Mobile Dependency                                                                                |
|-------|---------------------------------------------------------------|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| A1    | AF-01, AF-02                                                  | Admin auth/TOTP and dashboard shell.                                    | After backend auth/admin stubs exist; independent of mobile UI but must use same auth standards. |
| A2    | AF-03, AF-04                                                  | User management and KYC review.                                         | After mobile auth/profile/KYC flows create data.                                                 |
| A3    | AF-05, AF-13                                                  | Task monitoring and media moderation.                                   | After mobile task creation/media/status flows exist.                                             |
| A4    | AF-08, AF-24                                                  | Finance and receipt/transaction review.                                 | After mobile payment/escrow flows exist.                                                         |
| A5    | AF-06, AF-14                                                  | Reports, disputes, warning/strike/risk.                                 | After mobile cancellation/report/rating flows exist.                                             |
| A6    | AF-09, AF-10                                                  | Payout batch and wallet support.                                        | After mobile withdrawal and wallet flows exist.                                                  |
| A7    | AF-07, AF-21                                                  | Support live chat and notifications/announcements.                      | After support socket/session and notification contracts exist.                                   |
| A8    | AF-11, AF-12, AF-16, AF-17, AF-18, AF-19, AF-20, AF-22, AF-23 | Catalog, coverage, config, RBAC, audit, monitoring, ratings, analytics. | Can mature through W5/W6 as backend operational data stabilizes.                                 |

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

| Day  | Date            | Workstream                                 | Execution Scope                                                                                                              | Dependency                                                                                              | Commit / Output Rule                                        |
|------|-----------------|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| W1D1 | Mon 6 Jul 2026  | Project setup, architecture, design system | Create Flutter feature-first structure, app shell, routing, environment config, design tokens, shared loading/error widgets. | None beyond health/version stubs.                                                                       | Commit app foundation only.                                 |
| W1D2 | Tue 7 Jul 2026  | First launch and onboarding                | Implement splash, first launch decision, app update check placeholder, onboarding entry, auth route guards.                  | /version, /me stub.                                                                                     | No task features yet.                                       |
| W1D3 | Wed 8 Jul 2026  | Registration and login                     | Implement email/phone registration, login, OTP screens, Google/Apple entry points, password recovery screens.                | /auth/register, /auth/login, /auth/otp/send, /auth/otp/verify, /auth/social/google, /auth/social/apple. | Facebook excluded.                                          |
| W1D4 | Thu 9 Jul 2026  | Profile, mode, PIN, sessions               | Implement complete profile, mode switch, PIN setup/verify/reset, device/session management.                                  | /me, /me/profile, /me/mode, /me/security-pin/\*, /me/sessions.                                          | Use the accepted mode field consistently.                   |
| W1D5 | Fri 10 Jul 2026 | Task Owner home and notification shell     | Implement Task Owner home, notification center shell, skeleton states, empty states, app-wide POST/PATCH blur overlay.       | /notifications, /me/notification-preferences.                                                           | Home can use mock/stub task summaries until task APIs land. |

</div>

<div class="eyebrow">

Week 2

</div>

### Week 2 - Tasker Activation, Task Creation And Funding

**Goal:** Build the flows that allow Taskers to become eligible and Task Owners to create, locate, upload proof for and fund tasks.

**Week exit:** Tasker activation/KYC, task catalog, task draft, location, media, payment intent and broadcast/direct offer contracts are usable on staging.

<div class="table-wrap">

| Day  | Date            | Workstream                 | Execution Scope                                                                                                       | Dependency                                                                  | Commit / Output Rule                               |
|------|-----------------|----------------------------|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|----------------------------------------------------|
| W2D1 | Mon 13 Jul 2026 | Tasker activation and KYC  | Implement Tasker activation entry, profile setup, KYC NIN/BVN/face capture screens, KYC status polling/recovery.      | /tasker/profile, /kyc/start, /kyc/nin-bvn, /kyc/face-capture, /kyc/status.  | Tasker cannot browse/accept before approved state. |
| W2D2 | Tue 14 Jul 2026 | Catalog and task draft     | Implement category/type selection, task description, amount, required arrival time and draft saving.                  | /catalog/categories, /catalog/task-types, /task-owner/tasks/drafts.         | Launch categories: Home, Errands, Office, Support. |
| W2D3 | Wed 15 Jul 2026 | Location and media         | Implement GPS/manual address, geocode, pin confirmation, permission recovery, proof media upload UI.                  | /location/geocode, /location/confirm-pin, /task-owner/tasks/{taskId}/media. | Task site must be in Nigeria.                      |
| W2D4 | Thu 16 Jul 2026 | Payment and escrow funding | Implement payment review, task amount + fee breakdown, Paystack/Moniepoint redirect/status, payment pending/recovery. | /payment-intent, /payments/verify, task status endpoint.                    | Do not mark paid from redirect alone.              |
| W2D5 | Fri 17 Jul 2026 | Broadcast and direct offer | Implement funded task publish, favorites entry, direct offer send path, offer pending/expired states.                 | /broadcast, /favorites/taskers, /direct-offers.                             | Direct offers are REST/FCM, not socket-based.      |

</div>

<div class="eyebrow">

Week 3

</div>

### Week 3 - Discovery, Matching And Active Task Start

**Goal:** Build public discovery, Tasker interest, Task Owner selection and the first half of active execution.

**Week exit:** A funded task can move from broadcast/direct offer through Tasker interest, Task Owner acceptance and active task start with chat/tracking foundations.

<div class="table-wrap">

| Day  | Date            | Workstream                               | Execution Scope                                                                                               | Dependency                                                    | Commit / Output Rule                           |
|------|-----------------|------------------------------------------|---------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|------------------------------------------------|
| W3D1 | Mon 20 Jul 2026 | Tasker discovery                         | Implement Tasker task list, nearest-first sorting UI, location filter, limited public task preview.           | /tasker/tasks, /tasker/tasks/{taskId}.                        | Exact address/media hidden before eligibility. |
| W3D2 | Tue 21 Jul 2026 | Tasker interest and arrival confirmation | Implement Tasker confirm-arrival-by-required-time, interest submit, direct offer accept/decline.              | /interest, /accept, /decline.                                 | Tasker must be in Nigeria to accept.           |
| W3D3 | Wed 22 Jul 2026 | Task Owner candidate selection           | Implement candidates list, ETA/profile summary, accept/reject Tasker, movement-stage rejection copy.          | /candidates, /accept-tasker, /reject-tasker.                  | Task Owner decides based on ETA.               |
| W3D4 | Thu 23 Jul 2026 | Active task status actions               | Implement active task screen and Tasker buttons: Start Journey, I have arrived, Begin Task.                   | /start-journey, /arrived, /begin.                             | Persist every state transition through REST.   |
| W3D5 | Fri 24 Jul 2026 | Chat, tracking, masked call entry        | Implement task chat, voice note metadata flow, live tracking UI, masked call button and proxy number display. | /task socket, /tracking socket, /call-sessions, /voice-notes. | Socket reconnect must refresh REST state.      |

</div>

<div class="eyebrow">

Week 4

</div>

### Week 4 - Completion, Exceptions, Trust And Finance

**Goal:** Close the task lifecycle with completion, settlement, cancellation, no-show, reports, ratings, favorites, wallet, withdrawal and support.

**Week exit:** A task can finish cleanly or enter a governed exception path; affected wallet, payout, report and admin review states are visible.

<div class="table-wrap">

| Day  | Date            | Workstream                    | Execution Scope                                                                                             | Dependency                                                                    | Commit / Output Rule                            |
|------|-----------------|-------------------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|-------------------------------------------------|
| W4D1 | Mon 27 Jul 2026 | Completion and settlement     | Implement completion proof upload, request completion, Task Owner approval, settlement pending/held states. | /completion-proof, /request-completion, /confirm-completion, wallets summary. | Dispute can hold affected payout only.          |
| W4D2 | Tue 28 Jul 2026 | Cancellation, no-show, report | Implement cancellation/no-show flows, warning/strike messaging, report/dispute creation and status.         | /cancel, /reports, /reports/{reportId}.                                       | Penalty rules shown before confirmation.        |
| W4D3 | Wed 29 Jul 2026 | Ratings, favorites, reviews   | Implement post-completion rating, review, add favorite, report review entry.                                | /ratings, /favorites/taskers.                                                 | One rating per actor per completed task.        |
| W4D4 | Thu 30 Jul 2026 | Wallet and withdrawal         | Implement wallets, ledger, payout account setup, PIN-confirmed withdrawal, batch-date status.               | /wallets, /ledger, /tasker/payout-account, /tasker/withdrawals.               | Payout batches: 14th and 28th.                  |
| W4D5 | Fri 31 Jul 2026 | Support and emergency         | Implement support live chat, emergency support, ticket/report linking, support attachment flow.             | /support/sessions, /support/emergency, /support socket.                       | No dispute live chat; support chat is separate. |

</div>

<div class="eyebrow">

Week 5

</div>

### Week 5 - Operational Integration, Recovery And Full Flow QA

**Goal:** Complete secondary flows, operational admin coverage, provider validation, recovery behavior and end-to-end flow QA.

**Week exit:** All planned flows have working happy paths and documented exception paths on staging with defect lists by flow/module.

<div class="table-wrap">

| Day  | Date           | Workstream                            | Execution Scope                                                                                                               | Dependency                                                    | Commit / Output Rule                               |
|------|----------------|---------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|----------------------------------------------------|
| W5D1 | Mon 3 Aug 2026 | Settings and notification preferences | Complete settings, notification preferences, session revoke, security copy, critical notification rules.                      | /me/notification-preferences, /me/sessions.                   | Sensitive actions require PIN.                     |
| W5D2 | Tue 4 Aug 2026 | Referral and rebook                   | Implement referral code/share/pending reward, rebook from completed task, direct offer/public repost path.                    | Referral endpoints, /rebook, /payment-intent, /direct-offers. | Reward after referred user completes 5 paid tasks. |
| W5D3 | Wed 5 Aug 2026 | Offline/recovery polish               | Implement app resume recovery, socket reconnect recovery, payment/KYC return recovery, consistent empty/error/offline states. | /me plus active task/payment/KYC/report status endpoints.     | No flow depends only on local memory.              |
| W5D4 | Thu 6 Aug 2026 | Provider integration QA               | Run integrated tests against staging providers, FCM, payment sandbox, KYC sandbox, map/geocode and media upload.              | All provider staging endpoints.                               | Capture issues for backend/provider hardening.     |
| W5D5 | Fri 7 Aug 2026 | Full mobile flow QA                   | Run happy path and exception path for all mobile flows MF-01 to MF-24.                                                        | All mobile API/socket contracts.                              | Create defect list by flow ID.                     |

</div>

<div class="eyebrow">

Week 6

</div>

### Week 6 - Hardening, Security And Performance

**Goal:** Fix integration defects, harden performance/security/provider behavior, improve recovery paths and close major technical gaps.

**Week exit:** Critical defects from Week 5 are resolved or owned, and core flows are stable enough for release-candidate preparation.

<div class="table-wrap">

| Day  | Date            | Workstream                  | Execution Scope                                                                                              | Dependency                                             | Commit / Output Rule                           |
|------|-----------------|-----------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|------------------------------------------------|
| W6D1 | Mon 10 Aug 2026 | Hardening sprint            | Fix defects from full flow QA, improve copy, skeletons, submit overlays, retry states.                       | No new backend scope except defects.                   | Keep commits fix by fix.                       |
| W6D2 | Tue 11 Aug 2026 | Performance and device QA   | Profile lower-end Android performance, image/video upload, socket battery/network behavior.                  | Staging API/socket.                                    | Optimize without changing product rules.       |
| W6D3 | Wed 12 Aug 2026 | Provider recovery flows     | Harden payment return, KYC return, FCM tap recovery, socket reconnect and media upload retry behavior.       | Provider staging endpoints plus REST status endpoints. | Document any provider-specific recovery issue. |
| W6D4 | Thu 13 Aug 2026 | Security and privacy review | Verify PIN confirmation, permission prompts, private media, exact-address reveal rules and masked-call copy. | Stable auth/profile/task APIs.                         | No sensitive data leakage in logs or UI.       |
| W6D5 | Fri 14 Aug 2026 | Hardening review            | Run full mobile smoke test, close major defects and prepare release-candidate checklist.                     | All mobile contracts.                                  | Create release-candidate blocker list.         |

</div>

<div class="eyebrow">

Week 7

</div>

### Week 7 - Release Candidate Preparation And Operational Dry Runs

**Goal:** Prepare mobile, admin and backend release candidates while running provider, payout, monitoring, backup and support dry runs.

**Week exit:** Release candidates are available on staging with provider validation evidence, backup restore proof and operational handover notes.

<div class="table-wrap">

| Day  | Date            | Workstream                    | Execution Scope                                                                                                      | Dependency                      | Commit / Output Rule                              |
|------|-----------------|-------------------------------|----------------------------------------------------------------------------------------------------------------------|---------------------------------|---------------------------------------------------|
| W7D1 | Mon 17 Aug 2026 | Release candidate preparation | Prepare Android release candidate configuration, app icon/name/package, permissions and environment mapping.         | Production-like staging config. | Package name ng.work2cash.app.                    |
| W7D2 | Tue 18 Aug 2026 | Device matrix QA              | Test priority Android devices, small screens, low memory, poor network and background app-kill recovery.             | Staging API/socket.             | Create device issue list by flow.                 |
| W7D3 | Wed 19 Aug 2026 | Operations dry run support    | Validate mobile behavior for support live chat, emergency support, reports, payout status and admin-driven outcomes. | Admin/backend staging flows.    | Confirm user-facing status copy.                  |
| W7D4 | Thu 20 Aug 2026 | Provider validation support   | Run payment, KYC, maps, FCM, media and Sentry validation from mobile side.                                           | Provider staging endpoints.     | Attach evidence to provider validation checklist. |
| W7D5 | Fri 21 Aug 2026 | Mobile release candidate      | Generate release candidate build and handover notes for QA testing.                                                  | Stable staging backend.         | Only approved fixes after RC.                     |

</div>

<div class="eyebrow">

Week 8

</div>

### Week 8 - Stabilization, Go-Live Rehearsal And Build Freeze

**Goal:** Complete final defect pass, go-live rehearsal, documentation handover and controlled build freeze before formal testing starts.

**Week exit:** Builds are frozen for the two-week testing window. Only blocker fixes are allowed after this point.

<div class="table-wrap">

| Day  | Date            | Workstream                   | Execution Scope                                                                               | Dependency                  | Commit / Output Rule                   |
|------|-----------------|------------------------------|-----------------------------------------------------------------------------------------------|-----------------------------|----------------------------------------|
| W8D1 | Mon 24 Aug 2026 | Stabilization sprint         | Apply approved release-candidate fixes and polish only.                                       | RC defect list.             | No new features.                       |
| W8D2 | Tue 25 Aug 2026 | Final defect pass            | Re-test fixed defects and run critical mobile happy paths.                                    | Stable staging.             | Close or classify every mobile defect. |
| W8D3 | Wed 26 Aug 2026 | Go-live rehearsal            | Run Task Owner, Tasker and support journeys exactly as launch users will experience them.     | Production-like staging.    | Document launch rehearsal evidence.    |
| W8D4 | Thu 27 Aug 2026 | Handover and store readiness | Confirm legal/help links, app permissions, screenshots/test notes and support handover notes. | Final docs and staging app. | Prepare testing-week handover.         |
| W8D5 | Fri 28 Aug 2026 | Build freeze                 | Freeze mobile build for formal testing weeks.                                                 | Stable staging backend.     | Only blocker fixes after this point.   |

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

Use this task block for each mobile feature prompt. The required documents must be attached or referenced before execution.

<div class="code-block">

<div class="code-title">

Mobile AI Task Block

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

| Instruction       | Required Behavior                                                                                                               |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------|
| Read order        | Read Mobile Flow Catalogue, API & Socket Contract, Data Model, Provider Cost Control, then this mobile build plan.              |
| Implement by flow | Implement one flow or subflow at a time. Do not combine unrelated screens in one task.                                          |
| Contract handling | Use generated/stub API clients where available. If backend is missing, add typed repository stubs and mark integration blocker. |
| UI states         | Every screen must include loading, empty, error, offline/retry and submit states.                                               |
| Testing           | Add widget/provider/usecase tests where practical and document manual QA steps per flow.                                        |
| Do not do         | Do not add Facebook login, auto-accept, card-entry-first payment, dispute live chat or admin reassignment assumptions.          |

</div>

</div>

</div>

<div class="footer-inner">

<div>

#### Work2Cash

Mobile Build Execution Plan v1 for Codex and AI-agent execution.

</div>

<div>

#### Document Location

`documents/build-plan-mobile-v1.html`

</div>

<div>

#### Guard Requirement

Protected HTML documents must include the documentation auth guard script before closing body.

</div>

</div>


---

# Source Document: Admin Build Plan v1


# Admin Build Plan v1

> AI-agent Markdown equivalent of `build-plan-admin-v1.html`.
>
> Human-readable HTML source: `../build-plan-admin-v1.html`.
> Use this Markdown version for lower-token AI context. If a task needs visual layout or exact document presentation, use the HTML page.

<div class="section cover">

<div class="brand-row">

<div class="logo">

W2C

</div>

<div>

**Work2Cash**Admin Build Execution Plan

</div>

</div>

<div class="cover-main">

<div class="label">

Document 9B

</div>

# Admin Build Execution Plan

<div class="cover-subtitle">

Admin dashboard execution plan that follows mobile outcomes and backend contract readiness.

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

Repo location: documents/build-plan-admin-v1.html

</div>

</div>

</div>

<div class="sticky">

<div class="sticky-inner">

**Admin Build Execution Plan v1**

[Principles](#principles) [Dependencies](#dependencies) [Build](#build) [Testing](#testing) [Codex](#codex)

</div>

</div>

<div role="main">

<div class="section toc">

<div class="eyebrow">

Document 9B

</div>

## Admin Follows Mobile Outcomes

The admin dashboard is an operational control center. It should manage, review and resolve data created by mobile flows. It must not lead product behavior or invent operational shortcuts that mobile/backend do not support.

<div class="toc-grid">

[01. Admin Build Principles](#principles) [02. Mobile Outcome Dependencies](#dependencies) [03. Admin Module Order](#modules) [04. Eight-Week Build Plan](#build) [05. Two-Week Testing Plan](#testing) [06. Codex Execution Instructions](#codex)

</div>

</div>

<div id="principles" class="section section">

<div class="section-num">

01

</div>

<div class="eyebrow">

Principles

</div>

## Admin Build Principles

<div class="table-wrap">

| Rule              | Execution Requirement                                                                                                                                     |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Architecture      | Use a clean feature/module structure for Next.js. Separate routes, components, server actions/API clients, domain types and view models.                  |
| Mobile dependency | Admin screens should be built in the order mobile creates operational data: users/KYC, tasks, payments, reports, payouts, support, config and monitoring. |
| RBAC              | Every page/action must pass permission checks. High-impact actions require reason and TOTP where required.                                                |
| No reassignment   | Admin must not reassign tasks under any condition. Force-cancel is controlled and audited; matching returns to allowed user-driven flow.                  |
| Loading states    | GET/fetch uses skeletonized table/detail views. POST/PATCH actions use blur overlay with spinning Work2Cash logo.                                         |
| Auditability      | Every high-impact action captures actor, reason, target, requestId and timestamp.                                                                         |
| Commits           | Commit module by module or fix by fix. Do not stack unrelated admin modules.                                                                              |

</div>

</div>

<div id="dependencies" class="section section">

<div class="section-num">

02

</div>

<div class="eyebrow">

Dependencies

</div>

## Mobile Outcome Dependencies

<div class="table-wrap">

| Order | Admin Flows                                                   | Admin Scope                                                             | Mobile Dependency                                                                                |
|-------|---------------------------------------------------------------|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| A1    | AF-01, AF-02                                                  | Admin auth/TOTP and dashboard shell.                                    | After backend auth/admin stubs exist; independent of mobile UI but must use same auth standards. |
| A2    | AF-03, AF-04                                                  | User management and KYC review.                                         | After mobile auth/profile/KYC flows create data.                                                 |
| A3    | AF-05, AF-13                                                  | Task monitoring and media moderation.                                   | After mobile task creation/media/status flows exist.                                             |
| A4    | AF-08, AF-24                                                  | Finance and receipt/transaction review.                                 | After mobile payment/escrow flows exist.                                                         |
| A5    | AF-06, AF-14                                                  | Reports, disputes, warning/strike/risk.                                 | After mobile cancellation/report/rating flows exist.                                             |
| A6    | AF-09, AF-10                                                  | Payout batch and wallet support.                                        | After mobile withdrawal and wallet flows exist.                                                  |
| A7    | AF-07, AF-21                                                  | Support live chat and notifications/announcements.                      | After support socket/session and notification contracts exist.                                   |
| A8    | AF-11, AF-12, AF-16, AF-17, AF-18, AF-19, AF-20, AF-22, AF-23 | Catalog, coverage, config, RBAC, audit, monitoring, ratings, analytics. | Can mature through W5/W6 as backend operational data stabilizes.                                 |

</div>

<div class="diagram">

<div class="diagram-head">

#### Admin Dependency Rule

Mobile Outcome First

</div>

    Mobile creates operational data
      -> Backend persists and exposes admin contract
      -> Admin renders list/detail/action view
      -> Admin action writes audit trail

    Admin does not invent states.
    Admin does not bypass task, finance, KYC or risk use cases.

Admin screens must follow mobile and backend state machines.

</div>

</div>

<div id="modules" class="section section">

<div class="section-num">

03

</div>

<div class="eyebrow">

Modules

</div>

## Admin Module Implementation Order

<div class="table-wrap">

| Order | Module                                        | Why This Order                                                     |
|-------|-----------------------------------------------|--------------------------------------------------------------------|
| 1     | Admin auth/TOTP/RBAC shell                    | All admin modules depend on secure access.                         |
| 2     | Dashboard + users                             | Users are created first by mobile auth/profile flows.              |
| 3     | KYC review                                    | Tasker activation creates KYC queues early.                        |
| 4     | Task monitoring + media                       | Task creation/payment/media appear after mobile task creation.     |
| 5     | Finance + transaction review                  | Payment and escrow flows must be reviewable.                       |
| 6     | Reports/risk/ratings                          | Exception and trust flows depend on completed/cancelled task data. |
| 7     | Payout batches/wallet support                 | Withdrawal depends on Tasker wallet and payout account flows.      |
| 8     | Support/notifications/config/audit/monitoring | Operational modules mature once core flows exist.                  |

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

| Day  | Date            | Workstream               | Execution Scope                                                                                          | Dependency                                  | Commit / Output Rule                 |
|------|-----------------|--------------------------|----------------------------------------------------------------------------------------------------------|---------------------------------------------|--------------------------------------|
| W1D1 | Mon 6 Jul 2026  | Admin project foundation | Create Next.js structure, auth layout, design tokens, table/detail/action modal primitives.              | None                                        | Follow Work2Cash design system.      |
| W1D2 | Tue 7 Jul 2026  | Admin auth shell         | Implement login, TOTP challenge, session guard, protected layout.                                        | /admin/auth/login, /admin/auth/totp/verify. | Depends on backend admin auth stubs. |
| W1D3 | Wed 8 Jul 2026  | Dashboard shell          | Implement dashboard layout with empty/skeleton cards for users, KYC, tasks, finance and use-case health. | /admin/dashboard stub.                      | No fake operational decisions.       |
| W1D4 | Thu 9 Jul 2026  | RBAC UI primitives       | Implement permission gate, forbidden state, reason/audit confirmation modal.                             | /admin/roles, /admin/permissions stubs.     | Used by all admin flows.             |
| W1D5 | Fri 10 Jul 2026 | List/detail primitives   | Implement reusable list, search, filter, pagination, detail panel and export placeholder.                | Shared list/detail response shape.          | Foundation for AF-03 to AF-24.       |

</div>

<div class="eyebrow">

Week 2

</div>

### Week 2 - Tasker Activation, Task Creation And Funding

**Goal:** Build the flows that allow Taskers to become eligible and Task Owners to create, locate, upload proof for and fund tasks.

**Week exit:** Tasker activation/KYC, task catalog, task draft, location, media, payment intent and broadcast/direct offer contracts are usable on staging.

<div class="table-wrap">

| Day  | Date            | Workstream              | Execution Scope                                                                                        | Dependency                             | Commit / Output Rule                             |
|------|-----------------|-------------------------|--------------------------------------------------------------------------------------------------------|----------------------------------------|--------------------------------------------------|
| W2D1 | Mon 13 Jul 2026 | User management         | Implement user list/detail with profile, mode, wallets summary, sessions, risk summary.                | /admin/users, /admin/users/{userId}.   | Consumes data from mobile auth/profile.          |
| W2D2 | Tue 14 Jul 2026 | KYC review              | Implement KYC queues, Tasker detail, approve/reject/request re-verification UI.                        | /admin/kyc/\*, /admin/users/{userId}.  | Consumes mobile Tasker activation/KYC outcomes.  |
| W2D3 | Wed 15 Jul 2026 | Catalog management      | Implement categories/types list, create/edit, disable/archive, audit reason.                           | /admin/catalog/categories.             | Supports mobile task creation.                   |
| W2D4 | Thu 16 Jul 2026 | Task monitor foundation | Implement task list/detail shell with status, owner, tasker, payment, location and media placeholders. | /admin/tasks, /admin/tasks/{taskId}.   | Consumes mobile task draft/payment/media states. |
| W2D5 | Fri 17 Jul 2026 | Media moderation        | Implement media review, remove/reject reason and audit action.                                         | Task media/admin moderation endpoints. | Supports proof media governance.                 |

</div>

<div class="eyebrow">

Week 3

</div>

### Week 3 - Discovery, Matching And Active Task Start

**Goal:** Build public discovery, Tasker interest, Task Owner selection and the first half of active execution.

**Week exit:** A funded task can move from broadcast/direct offer through Tasker interest, Task Owner acceptance and active task start with chat/tracking foundations.

<div class="table-wrap">

| Day  | Date            | Workstream                 | Execution Scope                                                                     | Dependency                              | Commit / Output Rule                       |
|------|-----------------|----------------------------|-------------------------------------------------------------------------------------|-----------------------------------------|--------------------------------------------|
| W3D1 | Mon 20 Jul 2026 | Discovery/matching monitor | Add task interest, direct offer, candidates, accept/reject timeline to task detail. | /admin/tasks/{taskId}.                  | Follows mobile matching flows.             |
| W3D2 | Tue 21 Jul 2026 | Active task operations     | Add active status timeline: en route, arrived, in progress, tracking/ETA summary.   | /admin/tasks/{taskId}.                  | Admin observes; does not reassign.         |
| W3D3 | Wed 22 Jul 2026 | Controlled force cancel    | Implement force-cancel action with permission, reason, impact preview and audit.    | /admin/tasks/{taskId}/force-cancel.     | No admin reassignment under any condition. |
| W3D4 | Thu 23 Jul 2026 | Support live chat console  | Implement support queue, conversation view and case linking shell.                  | /support/sessions plus /support socket. | Follows mobile support live chat.          |
| W3D5 | Fri 24 Jul 2026 | Communication audit view   | Show chat/voice/masked call metadata and off-platform flags where permitted.        | /tasks/{taskId}/communications.         | Do not expose unnecessary private content. |

</div>

<div class="eyebrow">

Week 4

</div>

### Week 4 - Completion, Exceptions, Trust And Finance

**Goal:** Close the task lifecycle with completion, settlement, cancellation, no-show, reports, ratings, favorites, wallet, withdrawal and support.

**Week exit:** A task can finish cleanly or enter a governed exception path; affected wallet, payout, report and admin review states are visible.

<div class="table-wrap">

| Day  | Date            | Workstream                 | Execution Scope                                                                        | Dependency                                      | Commit / Output Rule                      |
|------|-----------------|----------------------------|----------------------------------------------------------------------------------------|-------------------------------------------------|-------------------------------------------|
| W4D1 | Mon 27 Jul 2026 | Reports/disputes           | Implement reports queue/detail, linked task evidence, decision actions.                | /admin/reports, /admin/reports/{id}/resolve.    | Follows mobile report/cancellation flows. |
| W4D2 | Tue 28 Jul 2026 | Risk/warning/strike        | Implement warning/strike history, trust impact and suspension action with audit.       | /admin/users/{id}, /admin/reports/{id}/resolve. | Apply accepted warning/strike rules.      |
| W4D3 | Wed 29 Jul 2026 | Ratings/reviews moderation | Implement ratings list, reported review handling and moderation audit.                 | /admin/ratings.                                 | Follows mobile rating flow.               |
| W4D4 | Thu 30 Jul 2026 | Finance transactions       | Implement payments, escrow, wallet ledger, receipts and provider reference review.     | /admin/finance/transactions.                    | Follows mobile payment/settlement.        |
| W4D5 | Fri 31 Jul 2026 | Payout batches             | Implement withdrawal list, payout batch create/approve/process, partial failure state. | /admin/payout-batches/\*.                       | Batch dates 14th and 28th.                |

</div>

<div class="eyebrow">

Week 5

</div>

### Week 5 - Operational Integration, Recovery And Full Flow QA

**Goal:** Complete secondary flows, operational admin coverage, provider validation, recovery behavior and end-to-end flow QA.

**Week exit:** All planned flows have working happy paths and documented exception paths on staging with defect lists by flow/module.

<div class="table-wrap">

| Day  | Date           | Workstream                     | Execution Scope                                                                       | Dependency                                         | Commit / Output Rule                   |
|------|----------------|--------------------------------|---------------------------------------------------------------------------------------|----------------------------------------------------|----------------------------------------|
| W5D1 | Mon 3 Aug 2026 | Wallet/refund support          | Implement wallet support flow for Task Owner excess funds and Tasker payout holds.    | /wallets/{id}/ledger, finance/support endpoints.   | Task Owner cannot withdraw directly.   |
| W5D2 | Tue 4 Aug 2026 | Notifications/announcements    | Implement announcement composer and channel selection.                                | /admin/announcements.                              | Critical SMS only; FCM/in-app primary. |
| W5D3 | Wed 5 Aug 2026 | Remote config and coverage     | Implement platform config, ETA guard, media size, payout dates and coverage controls. | /admin/config.                                     | All changes audited.                   |
| W5D4 | Thu 6 Aug 2026 | Use-case health and monitoring | Implement use-case health, queue/provider status, backup status screens.              | /admin/use-case-health, /health, /ready, /metrics. | Supports backend health visibility.    |
| W5D5 | Fri 7 Aug 2026 | Audit logs and analytics       | Implement audit log review and basic operational analytics/reports.                   | /admin/audit-logs, dashboard/analytics endpoints.  | Advanced analytics remain deferred.    |

</div>

<div class="eyebrow">

Week 6

</div>

### Week 6 - Hardening, Security And Performance

**Goal:** Fix integration defects, harden performance/security/provider behavior, improve recovery paths and close major technical gaps.

**Week exit:** Critical defects from Week 5 are resolved or owned, and core flows are stable enough for release-candidate preparation.

<div class="table-wrap">

| Day  | Date            | Workstream                     | Execution Scope                                                                                 | Dependency                   | Commit / Output Rule                       |
|------|-----------------|--------------------------------|-------------------------------------------------------------------------------------------------|------------------------------|--------------------------------------------|
| W6D1 | Mon 10 Aug 2026 | Admin hardening                | Fix defects, tighten RBAC, audit reasons, empty/error/loading states.                           | All admin contracts.         | No new modules.                            |
| W6D2 | Tue 11 Aug 2026 | Admin performance and table QA | Test large lists, filters, pagination and detail loading.                                       | Staging admin API.           | Skeletons for fetch; overlay for actions.  |
| W6D3 | Wed 12 Aug 2026 | Security and permission review | Validate TOTP, RBAC, forbidden states, high-impact confirmations and audit capture.             | Stable admin auth/RBAC APIs. | No unguarded admin actions.                |
| W6D4 | Thu 13 Aug 2026 | Operational workflow review    | Run KYC, task monitor, force cancel, reports, finance, payout and support workflows end to end. | Stable backend staging.      | No admin reassignment under any condition. |
| W6D5 | Fri 14 Aug 2026 | Hardening review               | Close major admin defects and create release-candidate blocker list.                            | All admin modules.           | Only scoped fixes after review.            |

</div>

<div class="eyebrow">

Week 7

</div>

### Week 7 - Release Candidate Preparation And Operational Dry Runs

**Goal:** Prepare mobile, admin and backend release candidates while running provider, payout, monitoring, backup and support dry runs.

**Week exit:** Release candidates are available on staging with provider validation evidence, backup restore proof and operational handover notes.

<div class="table-wrap">

| Day  | Date            | Workstream                          | Execution Scope                                                                                    | Dependency                 | Commit / Output Rule                     |
|------|-----------------|-------------------------------------|----------------------------------------------------------------------------------------------------|----------------------------|------------------------------------------|
| W7D1 | Mon 17 Aug 2026 | Admin release candidate preparation | Prepare protected admin build, environment config and deployment checklist.                        | Staging/prod env config.   | No secrets committed.                    |
| W7D2 | Tue 18 Aug 2026 | Finance and payout dry run          | Run withdrawal queue, payout batch creation/approval/process and partial failure handling.         | /admin/payout-batches/\*.  | Attach payout dry-run evidence.          |
| W7D3 | Wed 19 Aug 2026 | Support and operations dry run      | Run support live chat, emergency support, reports, KYC review and wallet-support operations.       | Support/report/admin APIs. | Confirm support handover steps.          |
| W7D4 | Thu 20 Aug 2026 | Monitoring and config validation    | Validate use-case health, queue/provider status, remote config, coverage and audit log visibility. | Ops/admin APIs.            | Confirm operational dashboard readiness. |
| W7D5 | Fri 21 Aug 2026 | Admin release candidate             | Generate admin release candidate and handover notes for QA testing.                                | Stable staging backend.    | Only approved fixes after RC.            |

</div>

<div class="eyebrow">

Week 8

</div>

### Week 8 - Stabilization, Go-Live Rehearsal And Build Freeze

**Goal:** Complete final defect pass, go-live rehearsal, documentation handover and controlled build freeze before formal testing starts.

**Week exit:** Builds are frozen for the two-week testing window. Only blocker fixes are allowed after this point.

<div class="table-wrap">

| Day  | Date            | Workstream              | Execution Scope                                                                       | Dependency                    | Commit / Output Rule                  |
|------|-----------------|-------------------------|---------------------------------------------------------------------------------------|-------------------------------|---------------------------------------|
| W8D1 | Mon 24 Aug 2026 | Stabilization sprint    | Apply approved admin release-candidate fixes only.                                    | RC defect list.               | No new modules.                       |
| W8D2 | Tue 25 Aug 2026 | Final admin defect pass | Re-test fixed defects and critical admin flows.                                       | Stable staging.               | Close or classify every admin defect. |
| W8D3 | Wed 26 Aug 2026 | Go-live rehearsal       | Run admin operations exactly as launch support and operations team will use them.     | Production-like staging.      | Document launch rehearsal evidence.   |
| W8D4 | Thu 27 Aug 2026 | Admin handover          | Confirm role permissions, runbooks, support notes, payout notes and moderation notes. | Final docs and staging admin. | Prepare testing-week handover.        |
| W8D5 | Fri 28 Aug 2026 | Admin build freeze      | Freeze admin build for formal testing weeks.                                          | Stable staging.               | Only blocker fixes after this point.  |

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

Admin AI Task Block

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

| Instruction      | Required Behavior                                                                                                |
|------------------|------------------------------------------------------------------------------------------------------------------|
| Read order       | Read Admin Flow Catalogue, API & Socket Contract, Data Model, Provider Cost Control, then this admin build plan. |
| Build by module  | Implement one admin module at a time with route, list, detail, action modal, permissions and tests.              |
| Action safety    | Every high-impact action must have confirmation, reason capture, error state and audit expectation.              |
| No invented APIs | If the API is missing, document blocker and add typed client stub only. Do not fake production behavior.         |
| Tables           | All tables must support loading, empty, error, pagination and filter reset states.                               |
| Do not do        | Do not add task reassignment, direct database controls, unguarded exports or non-audited high-impact actions.    |

</div>

</div>

</div>

<div class="footer-inner">

<div>

#### Work2Cash

Admin Build Execution Plan v1 for Codex and AI-agent execution.

</div>

<div>

#### Document Location

`documents/build-plan-admin-v1.html`

</div>

<div>

#### Guard Requirement

Protected HTML documents must include the documentation auth guard script before closing body.

</div>

</div>


---

# Source Document: Backend Build Plan v1


# Backend Build Plan v1

> AI-agent Markdown equivalent of `build-plan-backend-v1.html`.
>
> Human-readable HTML source: `../build-plan-backend-v1.html`.
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

Repo location: documents/build-plan-backend-v1.html

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

#### Document Location

`documents/build-plan-backend-v1.html`

</div>

<div>

#### Guard Requirement

Protected HTML documents must include the documentation auth guard script before closing body.

</div>

</div>


---

# Source Document: QA / Go-Live Readiness Checklist v1


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
