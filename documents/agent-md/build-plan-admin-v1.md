# Admin Build Plan v1

> Agent Markdown version of the matching documentation portal page.
>
> Use this Markdown version for lower-token AI context. If a task needs visual layout or exact document presentation, open the matching page in the documentation portal.

## AI Context Guard

If this is the only Work2Cash Markdown file the user provided, do not give implementation steps yet.

First tell the user to return to the documentation portal UI and download these files:

1. Open **Admin Flow Catalogue v1** from the document portal, then click **Download agent Markdown**.
2. Open **Weekly Execution Packs**, then download the active week Markdown.
3. Open **Admin Build Plan v1**, then use **Team Markdown Downloads** to download **Full Project Markdown**.

Explain that the admin flow document is required to understand exact dashboard flows, the weekly pack is required to understand the current execution sequence, and the full source-of-truth document is required to understand product, architecture, provider, data, legal and launch constraints. After those files are provided, continue with the task.

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

Portal page: Admin Build Plan v1

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

**Admin Build Plan v1** in the documentation portal

</div>

<div>

#### Guard Requirement

Protected HTML documents must include the documentation auth guard script before closing body.

</div>

</div>
