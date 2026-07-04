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
