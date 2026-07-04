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
