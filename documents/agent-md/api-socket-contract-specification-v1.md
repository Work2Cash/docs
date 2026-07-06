# API & Socket Contract Specification v1

> AI-agent Markdown equivalent of `api-socket-contract-specification-v1.html`.
>
> Human-readable HTML source: `.API & Socket Contract Specification v1`.
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
| Staging     | Website/Admin | `https://staging.work2cash.ng`        | Staging web/admin surface.                                  | Ultra-lean Contabo staging path; plan and pricing must be revalidated before provisioning.                |
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
- Every protected document page in the GitHub Pages documentation portal includes `../assets/js/guard.js`.
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

#### Portal Page

`API & Socket Contract Specification v1`

</div>

<div>

#### Guard Requirement

Protected HTML documents must include the documentation auth guard script before closing body.

</div>

</div>
