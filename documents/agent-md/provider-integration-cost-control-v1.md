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
