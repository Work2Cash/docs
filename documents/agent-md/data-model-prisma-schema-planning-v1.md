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
