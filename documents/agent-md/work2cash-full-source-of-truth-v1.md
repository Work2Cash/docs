---
id: FULL-CONTEXT-001
title: Work2Cash Full Project Agent Context
type: generated-agent-context-map
audience: AI agents, Technical leads, Architecture reviewers
owner: Technical Lead
status: active
version: 2.0
last_reviewed: 2026-07-18
authority: None independently; every record inherits its named canonical source and registry status
generated_from: current canonical flow, task, contract, technical, assurance, registry and portal sources
do_not_edit: true
---

# Work2Cash Full Project Agent Context

> Optional generated cross-project map. This file is not a source of truth and
> must not resolve conflicts. For implementation, use the smallest focused
> context set defined in `AGENTS.md`.

## What this file contains

This context maps 765 current library, flow, task, contract,
technical, assurance and glossary records. It replaces the former 33,399-line
legacy concatenation and contains no presentation HTML.

## Authority order

1. Approved architecture decisions.
2. Active Main Enterprise Architecture for cross-platform rules.
3. Active domain sources for flows, contracts, data, providers, security, legal and operations.
4. Build tasks and generated weekly packs for scheduling only.
5. Generated outputs, which inherit source authority.
6. Legacy, draft, in-review and combined context artifacts.

Do not invent a missing endpoint, model field, provider behavior, product rule
or legal conclusion. Record the gap and request the controlling decision.

## Reader and context routes

### Understand product behavior

- Audience: Non-technical team members
- Start: [Open the Flow Library](../flows/index.html)
- Rule: Read one standalone flow in plain language, including what starts it, what it depends on, what can go wrong and what happens next.

### Build today’s assignment

- Audience: Junior developers
- Start: [Open Junior Developer Plans](../planning/index.html)
- Rule: Choose your team, active week and assigned day. Each day contains prerequisites, build order, tests, result and commit message.

### Implement or review the system

- Audience: Developers and technical leads
- Start: [Open Technical References](../technical/index.html)
- Rule: Search contracts, data, platform operations or screens and link directly to one technical record.

### Test, approve or govern

- Audience: QA, Legal, Privacy, Product and Operations
- Start: [Open Assurance and Governance](../assurance/index.html)
- Rule: Open the exact QA suite, legal clause, release gate, decision, question or risk required for the review.

### Prepare focused AI context

- Audience: AI agents and supervising developers
- Start: [Download AGENTS.md](../downloads/AGENTS.md)
- Rule: Start with AGENTS.md, then provide only the active team-week, assigned day and relevant flow or technical pack.

## Current library governance

| Registry ID | Lifecycle | Approval | Authority |
| --- | --- | --- | --- |
| DOC-REG-001 | active | approved | Documentation governance |
| CONTRACT-REFERRAL-001 | approved | approved | Repository-owner accepted contract decision based on approved MF-02, MF-14, MF-17 and AF-15 behavior |
| FLOW-LIB-001 | active | approved | Approved Mobile and Admin Flow Catalogue v1 behavior in the approved Phase 1 standalone format |
| TASK-LIB-001 | active | approved | Approved flows, accepted contract decisions and approved Phase 3 delivery order |
| TECH-REF-001 | in-review | pending | Approved standalone flows and accepted contract decisions, with explicitly marked provisional architecture, contract, schema, provider and design baselines |
| ASSURANCE-LIB-001 | in-review | pending | Approved sources, qualified legal authority and evidence-based release governance; record-level statuses preserve pending work |

## Current reading libraries

| ID | Record | Collection | Status | Summary |
| --- | --- | --- | --- | --- |
| DOC-REG-001 | [Document Registry](../document-registry.html) | Reading libraries | current | Ownership, lifecycle, approval, authority and canonical/generated classification. |
| FLOW-LIB-001 | [Standalone Flow Library](../flows/index.html) | Reading libraries | current | Seventy-two approved Mobile and Admin flows with local dependency and next-step explanations. |
| TASK-LIB-001 | [Junior Developer Plans](../planning/index.html) | Reading libraries | current | Team plans organized by week and day, with one agent pack for each team-week. |
| CONTRACT-REFERRAL-001 | [Contract Decision Library](../contracts/index.html) | Reading libraries | current | Accepted contract decisions that close named implementation gaps. |
| TECH-REF-001 | [Technical Reference Library](../technical/index.html) | Reading libraries | current | Contracts, data, platform operations and screens in four searchable families. |
| ASSURANCE-LIB-001 | [Assurance and Governance](../assurance/index.html) | Reading libraries | current | QA/release, legal/compliance and decision/governance records in three focused registers. |

## Approved standalone flows

| ID | Record | Collection | Status | Summary |
| --- | --- | --- | --- | --- |
| AF-01 | [Admin Entry Login and TOTP](flows/admin/main/AF-01-admin-entry-login-totp.md) | Main flows | approved | An approved admin enters an email and password, then proves possession of the enrolled authenticator with a TOTP code. Only after both checks pass does Work2Cash create a dashboard session and open the dashboard or the safe protected page the admin originally requested. |
| AF-02 | [Admin Dashboard Overview](flows/admin/main/AF-02-admin-dashboard-overview.md) | Main flows | approved | This is the central landing page for the web dashboard. It shows platform health, important queues, risk signals and shortcuts into operational modules. In normal use, dashboard loads platform summary cards, then system shows active tasks, pending kyc, open reports, support chat… |
| AF-03 | [User Management](flows/admin/main/AF-03-user-management.md) | Main flows | approved | This flow lets admins inspect users, understand whether they are Task Owners, Taskers or both, review sessions/devices, and apply account-level controls. In normal use, admin opens the users list, then admin searches or filters by name, phone, email, role, status, trust/risk sta… |
| AF-04 | [Tasker and KYC Review](flows/admin/main/AF-04-tasker-and-kyc-review.md) | Main flows | approved | An authorized admin reviews a Tasker's identity-verification case and decides whether the Tasker can work, must resubmit information, should be rejected, or needs further manual or risk review. The decision is based on the Tasker profile, submitted identity references, biometric… |
| AF-05 | [Task Operations Monitoring](flows/admin/main/AF-05-task-operations-monitoring.md) | Main flows | approved | This flow gives admins a live operational view of tasks across creation, funding, acceptance, en route, arrived, in progress, completed, cancelled and disputed states. In normal use, admin opens the task monitor, then admin filters by task state, city/zone, category, payment sta… |
| AF-06 | [Task Report and Dispute Resolution](flows/admin/main/AF-06-task-report-and-dispute-resolution.md) | Main flows | approved | This flow resolves reports linked to tasks, including refusal to approve completion, unsafe behavior, no-show, off-platform solicitation, proof disputes and cancellation disagreements. In normal use, admin opens the report queue, then admin filters by report type, urgency, linke… |
| AF-07 | [Support Live Chat Operations](flows/admin/main/AF-07-support-live-chat-operations.md) | Main flows | approved | This flow lets admins handle user support conversations from the web dashboard. It is separate from task-user chat and is used when users need direct support. In normal use, support queue receives a new chat request, then admin accepts or is assigned the conversation, then syste… |
| AF-08 | [Finance: Payments, Escrow and Reconciliation](flows/admin/main/AF-08-finance-payments-escrow-and-reconciliation.md) | Main flows | approved | This flow tracks Paystack and Moniepoint payments, escrow funding, provider webhooks, ledger entries and failed reconciliation cases. In normal use, admin opens finance dashboard, then admin filters payments by provider, state, task, user, date, amount or webhook status, then ad… |
| AF-09 | [Withdrawal and Payout Batch Operations](flows/admin/main/AF-09-withdrawal-and-payout-batch-operations.md) | Main flows | approved | This flow manages Tasker withdrawal requests and bulk payout batches. Work2Cash pays eligible Tasker withdrawal requests on the 14th and 28th of each month. In normal use, admin opens withdrawal queue, then system shows pending withdrawal requests, eligible taskers, held payouts… |
| AF-10 | [Wallet, Refund and Excess Funding Support](flows/admin/main/AF-10-wallet-refund-and-excess-funding-support.md) | Main flows | approved | This flow handles Task Owner wallet support, excess deposit cases, escrow questions and refund-like support cases. Task Owners cannot withdraw directly from the app. In normal use, admin opens wallet case queue or a user wallet detail, then system shows task owner wallet, tasker… |
| AF-11 | [Task Catalog Management](flows/admin/main/AF-11-task-catalog-management.md) | Main flows | approved | This flow controls the task categories and task types visible in the mobile app, including Home, Errands, Office and Support. In normal use, admin opens the task category list, then admin selects a category or creates a new task type, then system shows name, description, icon hi… |
| AF-12 | [Service Coverage Configuration](flows/admin/main/AF-12-service-coverage-configuration.md) | Main flows | approved | This flow controls where Work2Cash operates. Current product decision is nationwide Nigeria coverage, while task sites must remain within Nigeria. In normal use, admin opens coverage dashboard, then system shows active country, states/zones, task posting rules and tasker accepta… |
| AF-13 | [Task Media Moderation](flows/admin/main/AF-13-task-media-moderation.md) | Main flows | approved | This flow lets admins review uploaded photos and videos for task proof, completion proof, reports and unsafe content. In normal use, admin opens media moderation queue, then system shows pending, flagged, removed and reviewed media, then admin opens media preview with linked use… |
| AF-14 | [Risk, Trust, Warning and Strike Review](flows/admin/main/AF-14-risk-trust-warning-and-strike-review.md) | Main flows | approved | This flow reviews policy violations, warnings, strikes, trust score reductions, Tasker restrictions and account suspensions. In normal use, admin opens risk queue, then system shows users with warnings, strikes, repeated movement-stage rejections, no-shows, off-platform solicita… |
| AF-15 | [Referral Management](flows/admin/main/AF-15-referral-management.md) | Main flows | approved | This flow manages referral rules and checks reward eligibility. Referral reward is wallet credit after the referred user completes five paid tasks. In normal use, admin opens referral dashboard, then system shows referred users, completed paid task counts, pending rewards, credi… |
| AF-16 | [Platform Config and Remote Config](flows/admin/main/AF-16-platform-config-and-remote-config.md) | Main flows | approved | This flow manages platform switches and values that the admin dashboard controls, including mobile behavior, feature flags, marketplace limits and provider settings that are safe to expose operationally. In normal use, admin opens remote config dashboard, then system shows confi… |
| AF-17 | [Admin Users, Roles and Permissions](flows/admin/main/AF-17-admin-users-roles-and-permissions.md) | Main flows | approved | This flow manages admin accounts, role assignment, permissions and admin access removal. It is separate from marketplace user management. In normal use, admin opens admin users list, then system shows active, invited, disabled and locked admin accounts, then admin opens admin us… |
| AF-18 | [Audit Log Review](flows/admin/main/AF-18-audit-log-review.md) | Main flows | approved | This flow provides traceability for important admin and system actions, including who acted, what changed, when it happened and why. In normal use, admin opens audit logs, then admin filters by actor, module, action type, date, record id or severity, then admin opens a log detai… |
| AF-19 | [Use Case Health and Background Job Monitoring](flows/admin/main/AF-19-use-case-health-and-background-job-monitoring.md) | Main flows | approved | This flow shows which backend use cases, queues and provider actions are failing. It helps the team detect issues before users report them. In normal use, admin opens use case health dashboard, then system shows backend use cases, last run time, success/failure counts, failed re… |
| AF-20 | [Monitoring, Backup and Incident Readiness](flows/admin/main/AF-20-monitoring-backup-and-incident-readiness.md) | Main flows | approved | This flow gives the team a non-developer-readable view of service health, backup status, restore readiness and incident response state. In normal use, admin opens monitoring overview, then system shows api, socket, database, valkey, queues, storage, backups, external providers a… |
| AF-21 | [Notifications and Announcements](flows/admin/main/AF-21-notifications-and-announcements.md) | Main flows | approved | This flow lets approved admins send operational notices and review notification delivery without using SMS carelessly. In normal use, admin opens notifications dashboard, then system shows sent, pending, failed and scheduled notifications, then admin creates announcement, then a… |
| AF-22 | [Ratings and Reviews Management](flows/admin/main/AF-22-ratings-and-reviews-management.md) | Main flows | approved | This flow lets admins review, moderate and audit task-bound ratings and reviews without editing user-written text. In normal use, admin opens ratings and reviews list, then admin filters by rating, actor, task, category, report state, date, review status or risk flag, then admin… |
| AF-23 | [Basic Analytics and Reports](flows/admin/main/AF-23-basic-analytics-and-reports.md) | Main flows | approved | This flow provides MVP read-only reports for marketplace, finance, trust/safety, support and operations. Advanced analytics remains deferred. In normal use, admin opens reports dashboard, then admin selects report group: marketplace, finance, trust/safety, support or operations,… |
| AF-24 | [Receipt and Transaction Review](flows/admin/main/AF-24-receipt-and-transaction-review.md) | Main flows | approved | This flow gives admins a dedicated way to find receipts and transaction trails without manually changing ledger entries from the review screen. In normal use, admin opens receipt & transactions, then admin searches by transaction id, task id, user, provider reference, amount, st… |
| ASF-01 | [Admin Login and TOTP Verification](flows/admin/subflows/ASF-01-admin-login-totp.md) | Reusable subflows | approved | This subflow proves that a person entering the dashboard has a valid admin account, knows the account password and possesses the enrolled authenticator used for the time-based one-time password, or TOTP. It creates a full admin session only after both checks succeed. |
| ASF-02 | [RBAC Permission Gate](flows/admin/subflows/ASF-02-rbac-permission-gate.md) | Reusable subflows | approved | Checks whether the logged-in admin is allowed to view a module or perform a specific action. Prevents unauthorized finance, role, suspension, payout, refund, or configuration actions from being completed. |
| ASF-03 | [List, Search, Filter and Pagination](flows/admin/subflows/ASF-03-list-search-filter-and-pagination.md) | Reusable subflows | approved | Provides the shared way admins browse long operational queues and find records quickly. Repairs operational blockage when the list is too large, the admin needs a specific record, or a queue must be narrowed by status, date, city, provider, risk level, or category. |
| ASF-04 | [Record Detail Review](flows/admin/subflows/ASF-04-record-detail-review.md) | Reusable subflows | approved | Opens the full context of one user, task, payment, withdrawal, report, media item, or provider event. Prevents decisions from being made from summary tables only. It gives the admin enough context before acting. |
| ASF-05 | [Reason and Audit Confirmation](flows/admin/subflows/ASF-05-reason-and-audit-confirmation.md) | Reusable subflows | approved | Requires the admin to provide a reason before high-impact decisions are saved. Creates traceability when an admin suspends a user, rejects KYC, resolves a dispute, retries a payment, changes a wallet, or publishes configuration. |
| ASF-06 | [Evidence and Media Review](flows/admin/subflows/ASF-06-evidence-and-media-review.md) | Reusable subflows | approved | Lets the admin inspect task proof, completion proof, report evidence, and unsafe uploads. Repairs disputes where the written report is not enough by letting operations inspect photos, videos and metadata. |
| ASF-07 | [Status Change and Decision Action](flows/admin/subflows/ASF-07-status-change-and-decision-action.md) | Reusable subflows | approved | Provides the common approve, reject, resolve, enable, disable, suspend, publish and retry pattern. Keeps admin actions consistent across modules and prevents half-completed decisions from leaving records in unclear states. |
| ASF-08 | [Export and Report Generation](flows/admin/subflows/ASF-08-export-and-report-generation.md) | Reusable subflows | approved | Generates CSV/PDF-style operational exports for finance, disputes, audit, payout and monitoring reviews. Supports management review, reconciliation and external accountant/legal follow-up without giving direct database access. |
| ASF-09 | [Support Live Chat Assignment](flows/admin/subflows/ASF-09-support-live-chat-assignment.md) | Reusable subflows | approved | Assigns incoming live support sessions to an available admin and shows user/task context beside the conversation. Repairs user problems that cannot be solved by automated flows, especially payment confusion, task issues and safety reports. |
| ASF-10 | [Provider Reconciliation and Retry](flows/admin/subflows/ASF-10-provider-reconciliation-and-retry.md) | Reusable subflows | approved | Checks provider events against Work2Cash records and retries failed safe operations where allowed. Fixes mismatches from Paystack, Moniepoint, Smile ID, Termii, FCM, masked call provider, webhooks, BullMQ jobs and payout batches. |
| ASF-11 | [Empty Loading and Error Recovery](flows/admin/subflows/ASF-11-empty-loading-error-recovery.md) | Reusable subflows | approved | This subflow gives every admin page the same understandable states while data is loading, when no records match and when an operation fails. It prevents blank screens, duplicate submissions and errors that leave an operator unsure whether anything changed. |
| MF-01 | [First App Launch and Entry Decision](flows/mobile/main/MF-01-first-app-launch-and-entry-decision.md) | Main flows | approved | Decides whether the user should see onboarding, registration, login, or an authenticated home state. In normal use, show splash/loading state, then check stored session, then if no session, show onboarding/login/register entry, then if session exists, run status recovery, then r… |
| MF-02 | [Registration](flows/mobile/main/MF-02-registration.md) | Main flows | approved | Creates a new Work2Cash user account and brings the user to a complete basic profile. In normal use, enter registration details, then run otp verification, then create user account, then check profile completeness, then if incomplete, run complete profile, then route user to hom… |
| MF-03 | [Login / Session Recovery](flows/mobile/main/MF-03-login-session-recovery.md) | Main flows | approved | Authenticates returning users and repairs any incomplete onboarding state left by registration, KYC, or profile setup. In normal use, enter login details, then verify credentials/otp, then fetch current user state, then check profile complete, then if profile incomplete, run com… |
| MF-04 | [Task Owner Home](flows/mobile/main/MF-04-task-owner-home.md) | Main flows | approved | Acts as the Task Owner operating hub after login or registration. In normal use, show active tasks, wallet/credits, notifications, and quick actions, then user can post task, view task history, manage favorites, open support, or switch mode, then app refreshes state from backend… |
| MF-05 | [Tasker Activation](flows/mobile/main/MF-05-tasker-activation.md) | Main flows | approved | Turns a normal user account into an eligible Tasker account through profile, skills, location readiness, and KYC. In normal use, check profile complete, then if incomplete, run complete profile, then create or continue taskerprofile, then select task categories/skills, then set… |
| MF-06 | [Task Owner Create and Fund Task](flows/mobile/main/MF-06-task-owner-create-and-fund-task.md) | Main flows | approved | A Task Owner describes the work they need, confirms where and when it should happen, uploads proof of the work to be done, reviews the price and fees, and pays through Paystack or Moniepoint. Work2Cash does not publish the task until the backend confirms the payment and holds th… |
| MF-07 | [Public Discovery and Tasker Interest](flows/mobile/main/MF-07-public-discovery-and-tasker-interest.md) | Main flows | approved | Lets eligible Taskers find funded public tasks while Task Owners choose based on profile and ETA. In normal use, task appears in tasker available tasks list, then taskers browse tasks sorted nearest first, then taskers filter by location/category/time, then tasker opens limited… |
| MF-08 | [Direct Offer to Favorite Tasker](flows/mobile/main/MF-08-direct-offer-to-favorite-tasker.md) | Main flows | approved | Lets a Task Owner send a funded task directly to a trusted favorite Tasker without public discovery first. In normal use, backend creates directtaskoffer, then tasker receives fcm notification, then tasker opens offer, then tasker confirms arrival ability, then tasker accepts or… |
| MF-09 | [Tasker Browse and Accept Task](flows/mobile/main/MF-09-tasker-browse-and-accept-task.md) | Main flows | approved | Lets an active Tasker find and commit to available work. In normal use, confirm taskerprofile active and kyc approved, then confirm tasker is in nigeria, then show available tasks sorted nearest first, then tasker filters by location/category/time, then tasker opens limited prev… |
| MF-10 | [Active Task Execution](flows/mobile/main/MF-10-active-task-execution.md) | Main flows | approved | Coordinates the accepted task from journey start to completion request. In normal use, enable task chat, voice messages, masked calls, and live tracking, then tasker taps start journey, then eta guard uses 5 minutes plus 10% journey milestone, then tasker taps i have arrived, th… |
| MF-11 | [Task Owner Rejection](flows/mobile/main/MF-11-task-owner-rejection.md) | Main flows | approved | Lets the Task Owner reject a Tasker within controlled rules without breaking the task. In normal use, task owner taps reject, then select rejection reason, then backend checks task state and rejection window, then log taskownerrejection, then if movement-stage rejection repeats,… |
| MF-12 | [Cancellation / No-Show](flows/mobile/main/MF-12-cancellation-no-show.md) | Main flows | approved | Closes or reviews tasks when either party cancels, does not appear, or cannot proceed. In normal use, identify actor and task state, then apply cancellation/no-show policy, then apply penalty, warning, strike, or no penalty, then update escrow/wallet state, then if contested, op… |
| MF-13 | [Tasker Withdrawal](flows/mobile/main/MF-13-tasker-withdrawal.md) | Main flows | approved | Lets Taskers request earnings withdrawal while Work2Cash batches payouts on agreed payout dates. In normal use, check tasker wallet balance, then confirm saved payout account or run payout account setup, then validate minimum withdrawal amount: ₦1,000, then confirm withdrawal re… |
| MF-14 | [Completion and Settlement](flows/mobile/main/MF-14-completion-and-settlement.md) | Main flows | approved | Finalizes a task and moves money from escrow according to completion or report outcome. In normal use, task owner reviews completion proof, then if satisfied, task owner confirms completion, then backend releases escrow to tasker wallet, then commission tier is applied, then bot… |
| MF-15 | [Favorites](flows/mobile/main/MF-15-favorites.md) | Main flows | approved | Lets Task Owners save trusted Taskers for future direct offers. In normal use, task owner rates tasker after completion, then task owner chooses add to favorites, then backend creates favoritetasker record, then task owner can later select favorite when creating task, then task… |
| MF-16 | [Support Live Chat](flows/mobile/main/MF-16-support-live-chat.md) | Main flows | approved | Provides real-time help for account, wallet, payment, task, KYC, and operational issues. In normal use, user selects issue category, then create/open support chat session, then assign support agent where available, then user and support chat in real time, then support may resolv… |
| MF-17 | [Referral](flows/mobile/main/MF-17-referral.md) | Main flows | approved | Rewards users for bringing new users who complete real paid activity. In normal use, show referral code/link, then user shares referral, then new user signs up with referral, then system tracks referred user activity, then reward is granted only after referred user completes 5 p… |
| MF-18 | [Profile and Settings Management](flows/mobile/main/MF-18-profile-and-settings-management.md) | Main flows | approved | Lets users view and manage profile details, saved addresses, notification preferences, support entry, and logout. In normal use, open profile/settings, then view profile details, then edit allowed profile fields, then manage saved addresses, then open notification preferences, t… |
| MF-19 | [Security and Device Management](flows/mobile/main/MF-19-security-and-device-management.md) | Main flows | approved | Protects sensitive actions with a Work2Cash PIN and lets users manage active devices/sessions. In normal use, open security settings, then create or confirm security pin, then view active devices/sessions, then revoke other sessions where needed, then for sensitive action, enter… |
| MF-20 | [Notification Center and Preferences](flows/mobile/main/MF-20-notification-center-and-preferences.md) | Main flows | approved | Lets users view notifications, open related records, and control non-critical notification preferences. In normal use, open notification center, then view all/unread notifications, then open a notification, then deep link to related task, payment, support, report, referral, or s… |
| MF-21 | [Tasker Availability and Work Preferences](flows/mobile/main/MF-21-tasker-availability-and-work-preferences.md) | Main flows | approved | Lets approved Taskers control when they are available and what work they prefer without using auto-accept. In normal use, confirm taskerprofile is active and kyc-approved, then set available/unavailable, then set working hours, then select preferred task categories, then set max… |
| MF-22 | [Ratings and Reviews](flows/mobile/main/MF-22-ratings-and-reviews.md) | Main flows | approved | Collects task-bound ratings after completion and feeds trust, favorites, and moderation. In normal use, show rating prompt after completion, then task owner rates tasker and may add optional review, then task owner may add tasker to favorites, then tasker rates task owner and ma… |
| MF-23 | [Emergency Support](flows/mobile/main/MF-23-emergency-support.md) | Main flows | approved | Creates a high-priority support path for urgent task, safety, payment, contact, or no-show situations. In normal use, show safety guidance and platform-support limitation, then select emergency category, then attach evidence where useful, then create high-priority support sessio… |
| MF-24 | [Rebook / Repeat Task](flows/mobile/main/MF-24-rebook-repeat-task.md) | Main flows | approved | Lets Task Owners create a new task from a completed task while keeping the old task immutable. In normal use, open completed task, then tap rebook, then app pre-fills task category, task type, description, location, duration, and previous tasker where available, then task owner… |
| SF-01 | [OTP Verification](flows/mobile/subflows/SF-01-otp-verification.md) | Reusable subflows | approved | Confirms that the user controls the email or phone number used for registration, login, or sensitive account action. |
| SF-02 | [Complete Profile](flows/mobile/subflows/SF-02-complete-profile.md) | Reusable subflows | approved | Collects the minimum profile data required to personalize the app and safely proceed into Task Owner or Tasker workflows. |
| SF-03 | [Tasker KYC](flows/mobile/subflows/SF-03-tasker-kyc.md) | Reusable subflows | approved | Verifies identity through Smile ID before a user can accept tasks as a Tasker. |
| SF-04 | [Location, Address and Pin Confirmation](flows/mobile/subflows/SF-04-location-address-and-pin-confirmation.md) | Reusable subflows | approved | Converts a live or manually entered task site into a confirmed Nigerian task location. |
| SF-05 | [Media Upload](flows/mobile/subflows/SF-05-media-upload.md) | Reusable subflows | approved | Handles proof photos/videos for task creation, completion, reports, and support. |
| SF-06 | [Payment and Escrow Funding](flows/mobile/subflows/SF-06-payment-and-escrow-funding.md) | Reusable subflows | approved | Funds a task before public discovery or direct offer proceeds. |
| SF-07 | [Communication](flows/mobile/subflows/SF-07-communication.md) | Reusable subflows | approved | Allows task-bound communication without exposing private phone numbers. |
| SF-08 | [Report / Dispute](flows/mobile/subflows/SF-08-report-dispute.md) | Reusable subflows | approved | Turns task problems into structured evidence-backed reports for admin review. |
| SF-09 | [Permission Recovery](flows/mobile/subflows/SF-09-permission-recovery.md) | Reusable subflows | approved | Guides users when required permissions are denied or unavailable. |
| SF-10 | [Status Recovery / Resume](flows/mobile/subflows/SF-10-status-recovery-resume.md) | Reusable subflows | approved | Lets users safely continue after closing the app, losing network, or returning from a provider page. |
| SF-11 | [Password Recovery](flows/mobile/subflows/SF-11-password-recovery.md) | Reusable subflows | approved | Lets a registered user regain access when they cannot remember their password. |
| SF-12 | [Payout Account Setup](flows/mobile/subflows/SF-12-payout-account-setup.md) | Reusable subflows | approved | Collects and verifies the Tasker's payout account before withdrawal requests can be made. |
| SF-13 | [Google / Apple Social Authentication](flows/mobile/subflows/SF-13-google-apple-social-authentication.md) | Reusable subflows | approved | Lets users register or log in using Google or Apple while preserving Work2Cash profile, phone/contact, KYC, and recovery checks. |

## Junior-developer daily tasks

| ID | Record | Collection | Status | Summary |
| --- | --- | --- | --- | --- |
| ADM-INT-01 | [Identity and User Management Integration](planning/weeks/admin/integration-week-admin-integration.md#day-1-of-5) | Admin Frontend execution | planned | The accepted Admin authentication, dashboard and user-management interfaces use real permissioned Backend contracts and reflect persisted Mobile identity, profile, mode, PIN and session outcomes. |
| ADM-INT-02 | [KYC, Catalog and Media Integration](planning/weeks/admin/integration-week-admin-integration.md#day-2-of-5) | Admin Frontend execution | planned | Admin reviewers use real KYC submissions, catalog records and moderated media produced by Mobile and governed by Backend, with permission, privacy, audit and recovery behavior intact. |
| ADM-INT-03 | [Task Monitoring, Matching and Execution Integration](planning/weeks/admin/integration-week-admin-integration.md#day-3-of-5) | Admin Frontend execution | planned | Admin can monitor real task creation, discovery, matching and active execution outcomes without taking ownership of participant actions or displaying stale success. |
| ADM-INT-04 | [Reports, Finance and Payout Integration](planning/weeks/admin/integration-week-admin-integration.md#day-4-of-5) | Admin Frontend execution | planned | Admin reports, disputes, risk actions, finance transactions and payout batches use authoritative lifecycle and ledger records, with safe approval, reconciliation, idempotency and audit behavior. |
| ADM-INT-05 | [Support, Configuration and Operations Integration](planning/weeks/admin/integration-week-admin-integration.md#day-5-of-5) | Admin Frontend execution | planned | The remaining Admin support, communications, configuration, monitoring and audit tools operate on real Backend and Mobile outcomes, completing Stage 3 before hardening and release work starts. |
| ADM-W1D1 | [Admin project foundation](planning/weeks/admin/week-01-foundation-identity.md#day-1-of-5) | Admin Frontend execution | planned | Create Next.js structure, auth layout, design tokens, table/detail/action modal primitives. |
| ADM-W1D2 | [Admin auth shell](planning/weeks/admin/week-01-foundation-identity.md#day-2-of-5) | Admin Frontend execution | planned | Implement login, TOTP challenge, session guard, protected layout. |
| ADM-W1D3 | [Dashboard shell](planning/weeks/admin/week-01-foundation-identity.md#day-3-of-5) | Admin Frontend execution | planned | Implement dashboard layout with empty/skeleton cards for users, KYC, tasks, finance and use-case health. |
| ADM-W1D4 | [RBAC UI primitives](planning/weeks/admin/week-01-foundation-identity.md#day-4-of-5) | Admin Frontend execution | planned | Implement permission gate, forbidden state, reason/audit confirmation modal. |
| ADM-W1D5 | [List/detail primitives](planning/weeks/admin/week-01-foundation-identity.md#day-5-of-5) | Admin Frontend execution | planned | Implement reusable list, search, filter, pagination, detail panel and export placeholder. |
| ADM-W2D1 | [User management](planning/weeks/admin/week-02-tasker-task-creation-payment.md#day-1-of-5) | Admin Frontend execution | planned | Implement user list/detail with profile, mode, wallets summary, sessions, risk summary. |
| ADM-W2D2 | [KYC Review Operations](planning/weeks/admin/week-02-tasker-task-creation-payment.md#day-2-of-5) | Admin Frontend execution | planned | An authorized operations reviewer can find a KYC case, understand the applicant and attempt history, approve or reject it, request re-verification or escalate risk, while every privileged action is permission-checked and audited. |
| ADM-W2D3 | [Catalog management](planning/weeks/admin/week-02-tasker-task-creation-payment.md#day-3-of-5) | Admin Frontend execution | planned | Implement categories/types list, create/edit, disable/archive, audit reason. |
| ADM-W2D4 | [Task monitor foundation](planning/weeks/admin/week-02-tasker-task-creation-payment.md#day-4-of-5) | Admin Frontend execution | planned | Implement task list/detail shell with status, owner, tasker, payment, location and media placeholders. |
| ADM-W2D5 | [Media moderation](planning/weeks/admin/week-02-tasker-task-creation-payment.md#day-5-of-5) | Admin Frontend execution | planned | Implement media review, remove/reject reason and audit action. |
| ADM-W3D1 | [Discovery/matching monitor](planning/weeks/admin/week-03-discovery-matching-execution-start.md#day-1-of-5) | Admin Frontend execution | planned | Add task interest, direct offer, candidates, accept/reject timeline to task detail. |
| ADM-W3D2 | [Active task operations](planning/weeks/admin/week-03-discovery-matching-execution-start.md#day-2-of-5) | Admin Frontend execution | planned | Add active status timeline: en route, arrived, in progress, tracking/ETA summary. |
| ADM-W3D3 | [Controlled force cancel](planning/weeks/admin/week-03-discovery-matching-execution-start.md#day-3-of-5) | Admin Frontend execution | planned | Implement force-cancel action with permission, reason, impact preview and audit. |
| ADM-W3D4 | [Support live chat console](planning/weeks/admin/week-03-discovery-matching-execution-start.md#day-4-of-5) | Admin Frontend execution | planned | Implement support queue, conversation view and case linking shell. |
| ADM-W3D5 | [Communication audit view](planning/weeks/admin/week-03-discovery-matching-execution-start.md#day-5-of-5) | Admin Frontend execution | planned | Show chat/voice/masked call metadata and off-platform flags where permitted. |
| ADM-W4D1 | [Reports/disputes](planning/weeks/admin/week-04-completion-finance-support.md#day-1-of-5) | Admin Frontend execution | planned | Implement reports queue/detail, linked task evidence, decision actions. |
| ADM-W4D2 | [Risk/warning/strike](planning/weeks/admin/week-04-completion-finance-support.md#day-2-of-5) | Admin Frontend execution | planned | Implement warning/strike history, trust impact and suspension action with audit. |
| ADM-W4D3 | [Ratings/reviews moderation](planning/weeks/admin/week-04-completion-finance-support.md#day-3-of-5) | Admin Frontend execution | planned | Implement ratings list, reported review handling and moderation audit. |
| ADM-W4D4 | [Finance transactions](planning/weeks/admin/week-04-completion-finance-support.md#day-4-of-5) | Admin Frontend execution | planned | Implement payments, escrow, wallet ledger, receipts and provider reference review. |
| ADM-W4D5 | [Payout batches](planning/weeks/admin/week-04-completion-finance-support.md#day-5-of-5) | Admin Frontend execution | planned | Implement withdrawal list, payout batch create/approve/process, partial failure state. |
| ADM-W5D1 | [Wallet/refund support](planning/weeks/admin/week-05-integration-recovery-full-flow-qa.md#day-1-of-5) | Admin Frontend execution | planned | Implement wallet support flow for Task Owner excess funds and Tasker payout holds. |
| ADM-W5D2 | [Notifications/announcements](planning/weeks/admin/week-05-integration-recovery-full-flow-qa.md#day-2-of-5) | Admin Frontend execution | planned | Implement announcement composer and channel selection. |
| ADM-W5D3 | [Remote config and coverage](planning/weeks/admin/week-05-integration-recovery-full-flow-qa.md#day-3-of-5) | Admin Frontend execution | planned | Implement platform config, ETA guard, media size, payout dates and coverage controls. |
| ADM-W5D4 | [Use-case health and monitoring](planning/weeks/admin/week-05-integration-recovery-full-flow-qa.md#day-4-of-5) | Admin Frontend execution | planned | Implement use-case health, queue/provider status, backup status screens. |
| ADM-W5D5 | [Audit logs and analytics](planning/weeks/admin/week-05-integration-recovery-full-flow-qa.md#day-5-of-5) | Admin Frontend execution | planned | Implement audit log review and basic operational analytics/reports. |
| ADM-W6D1 | [Admin hardening](planning/weeks/admin/week-06-hardening-security-performance.md#day-1-of-5) | Admin Frontend execution | planned | Fix defects, tighten RBAC, audit reasons, empty/error/loading states. |
| ADM-W6D2 | [Admin performance and table QA](planning/weeks/admin/week-06-hardening-security-performance.md#day-2-of-5) | Admin Frontend execution | planned | Test large lists, filters, pagination and detail loading. |
| ADM-W6D3 | [Security and permission review](planning/weeks/admin/week-06-hardening-security-performance.md#day-3-of-5) | Admin Frontend execution | planned | Validate TOTP, RBAC, forbidden states, high-impact confirmations and audit capture. |
| ADM-W6D4 | [Operational workflow review](planning/weeks/admin/week-06-hardening-security-performance.md#day-4-of-5) | Admin Frontend execution | planned | Run KYC, task monitor, force cancel, reports, finance, payout and support workflows end to end. |
| ADM-W6D5 | [Hardening review](planning/weeks/admin/week-06-hardening-security-performance.md#day-5-of-5) | Admin Frontend execution | planned | Close major admin defects and create release-candidate blocker list. |
| ADM-W7D1 | [Admin release candidate preparation](planning/weeks/admin/week-07-release-candidate-operations-dry-run.md#day-1-of-5) | Admin Frontend execution | planned | Prepare protected admin build, environment config and deployment checklist. |
| ADM-W7D2 | [Finance and payout dry run](planning/weeks/admin/week-07-release-candidate-operations-dry-run.md#day-2-of-5) | Admin Frontend execution | planned | Run withdrawal queue, payout batch creation/approval/process and partial failure handling. |
| ADM-W7D3 | [Support and operations dry run](planning/weeks/admin/week-07-release-candidate-operations-dry-run.md#day-3-of-5) | Admin Frontend execution | planned | Run support live chat, emergency support, reports, KYC review and wallet-support operations. |
| ADM-W7D4 | [Monitoring and config validation](planning/weeks/admin/week-07-release-candidate-operations-dry-run.md#day-4-of-5) | Admin Frontend execution | planned | Validate use-case health, queue/provider status, remote config, coverage and audit log visibility. |
| ADM-W7D5 | [Admin release candidate](planning/weeks/admin/week-07-release-candidate-operations-dry-run.md#day-5-of-5) | Admin Frontend execution | planned | Generate admin release candidate and handover notes for QA testing. |
| ADM-W8D1 | [Stabilization sprint](planning/weeks/admin/week-08-stabilization-freeze.md#day-1-of-5) | Admin Frontend execution | planned | Apply approved admin release-candidate fixes only. |
| ADM-W8D2 | [Final admin defect pass](planning/weeks/admin/week-08-stabilization-freeze.md#day-2-of-5) | Admin Frontend execution | planned | Re-test fixed defects and critical admin flows. |
| ADM-W8D3 | [Go-live rehearsal](planning/weeks/admin/week-08-stabilization-freeze.md#day-3-of-5) | Admin Frontend execution | planned | Run admin operations exactly as launch support and operations team will use them. |
| ADM-W8D4 | [Admin handover](planning/weeks/admin/week-08-stabilization-freeze.md#day-4-of-5) | Admin Frontend execution | planned | Confirm role permissions, runbooks, support notes, payout notes and moderation notes. |
| ADM-W8D5 | [Admin build freeze](planning/weeks/admin/week-08-stabilization-freeze.md#day-5-of-5) | Admin Frontend execution | planned | Freeze admin build for formal testing weeks. |
| BE-W1D1 | [Repo foundation and contracts](planning/weeks/backend/week-01-foundation-identity.md#day-1-of-5) | Backend execution | planned | Create NestJS hexagonal structure, Prisma baseline, response/error shapes, OpenAPI shell, health/version endpoints. |
| BE-W1D2 | [Auth contract stubs](planning/weeks/backend/week-01-foundation-identity.md#day-2-of-5) | Backend execution | planned | Implement auth/profile/PIN/session DTOs and stub handlers with stable response shapes. |
| BE-W1D3 | [Auth implementation](planning/weeks/backend/week-01-foundation-identity.md#day-3-of-5) | Backend execution | planned | Implement register, login, OTP email-first/SMS fallback, refresh rotation, social auth adapter shell. |
| BE-W1D4 | [Profile, mode, PIN, sessions](planning/weeks/backend/week-01-foundation-identity.md#day-4-of-5) | Backend execution | planned | Implement /me, profile update, mode, PIN setup/verify/reset, device/session revoke. |
| BE-W1D5 | [Admin auth and dashboard stubs](planning/weeks/backend/week-01-foundation-identity.md#day-5-of-5) | Backend execution | planned | Implement admin auth/TOTP stubs, dashboard summary stub, RBAC model seed. |
| BE-W2D1 | [Tasker and KYC APIs](planning/weeks/backend/week-02-tasker-task-creation-payment.md#day-1-of-5) | Backend execution | planned | The backend can create and update a Tasker's activation profile, start identity verification, receive NIN or BVN and face-capture submissions safely, expose the current KYC status and support admin re-verification without losing prior evidence. |
| BE-W2D2 | [Catalog/task draft APIs](planning/weeks/backend/week-02-tasker-task-creation-payment.md#day-2-of-5) | Backend execution | planned | Implement categories/types, task draft, amount validation, required arrival time. |
| BE-W2D3 | [Location/media APIs](planning/weeks/backend/week-02-tasker-task-creation-payment.md#day-3-of-5) | Backend execution | planned | Implement geocode, pin confirmation, task site Nigeria validation, media signed upload/finalize. |
| BE-W2D4 | [Payment/escrow APIs](planning/weeks/backend/week-02-tasker-task-creation-payment.md#day-4-of-5) | Backend execution | planned | Implement payment intent, verify, Paystack/Moniepoint adapter shell, ProviderWebhookEvent, escrow creation. |
| BE-W2D5 | [Broadcast/direct offer APIs](planning/weeks/backend/week-02-tasker-task-creation-payment.md#day-5-of-5) | Backend execution | planned | Implement broadcast, favorites, direct offers, FCM notification job shell. |
| BE-W3D1 | [Discovery APIs](planning/weeks/backend/week-03-discovery-matching-execution-start.md#day-1-of-5) | Backend execution | planned | Implement Tasker task list, location filter, nearest-first sorting, limited public preview. |
| BE-W3D2 | [Interest/accept APIs](planning/weeks/backend/week-03-discovery-matching-execution-start.md#day-2-of-5) | Backend execution | planned | Implement Tasker interest, arrival confirmation, direct offer accept/decline, eligibility guards. |
| BE-W3D3 | [Candidate/selection APIs](planning/weeks/backend/week-03-discovery-matching-execution-start.md#day-3-of-5) | Backend execution | planned | Implement candidate list with ETA snapshots, Task Owner accept/reject, rejection logging. |
| BE-W3D4 | [Task execution state APIs](planning/weeks/backend/week-03-discovery-matching-execution-start.md#day-4-of-5) | Backend execution | planned | Implement start journey, arrived, begin, state guards and TaskStatusEvent. |
| BE-W3D5 | [Socket/chat/tracking](planning/weeks/backend/week-03-discovery-matching-execution-start.md#day-5-of-5) | Backend execution | planned | Implement Socket.IO auth, task rooms, support rooms shell, tracking events, ETA guard, chat persistence queue. |
| BE-W4D1 | [Completion/settlement](planning/weeks/backend/week-04-completion-finance-support.md#day-1-of-5) | Backend execution | planned | Implement completion proof, request completion, confirm completion, commission snapshot, escrow release/hold. |
| BE-W4D2 | [Cancellation/reports](planning/weeks/backend/week-04-completion-finance-support.md#day-2-of-5) | Backend execution | planned | Implement cancellation, no-show, reports, warning/strike, settlement hold use cases. |
| BE-W4D3 | [Ratings/favorites/rebook](planning/weeks/backend/week-04-completion-finance-support.md#day-3-of-5) | Backend execution | planned | Implement ratings, review moderation foundation, favorite add/remove, rebook. |
| BE-W4D4 | [Wallet/withdrawal](planning/weeks/backend/week-04-completion-finance-support.md#day-4-of-5) | Backend execution | planned | Implement wallets, ledger, payout account, PIN-confirmed withdrawal, payout batch models. |
| BE-W4D5 | [Support/emergency](planning/weeks/backend/week-04-completion-finance-support.md#day-5-of-5) | Backend execution | planned | Implement support sessions, emergency support, support socket completion, case linking. |
| BE-W5D1 | [Admin operational APIs](planning/weeks/backend/week-05-integration-recovery-full-flow-qa.md#day-1-of-5) | Backend execution | planned | Implement admin users, tasks, finance, reports, media, ratings, config APIs. |
| BE-W5D2 | [Referral and notification APIs](planning/weeks/backend/week-05-integration-recovery-full-flow-qa.md#day-2-of-5) | Backend execution | planned | Implement referral reward tracking, notifications list/read, announcements. |
| BE-W5D3 | [Provider hardening](planning/weeks/backend/week-05-integration-recovery-full-flow-qa.md#day-3-of-5) | Backend execution | planned | Validate Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, object storage in staging. |
| BE-W5D4 | [Operations/monitoring](planning/weeks/backend/week-05-integration-recovery-full-flow-qa.md#day-4-of-5) | Backend execution | planned | Implement use-case health, queue audit, provider request logs, metrics, backup status. |
| BE-W5D5 | [Integrated defect pass](planning/weeks/backend/week-05-integration-recovery-full-flow-qa.md#day-5-of-5) | Backend execution | planned | Fix defects from mobile/admin full-flow QA, contract mismatches, state recovery issues. |
| BE-W6D1 | [Security and idempotency hardening](planning/weeks/backend/week-06-hardening-security-performance.md#day-1-of-5) | Backend execution | planned | Review auth, PIN, TOTP, webhooks, ledger idempotency, admin audit, rate limits. |
| BE-W6D2 | [Performance/load pass](planning/weeks/backend/week-06-hardening-security-performance.md#day-2-of-5) | Backend execution | planned | Load test critical endpoints, socket rooms, queues, DB indexes, backup jobs. |
| BE-W6D3 | [Provider recovery hardening](planning/weeks/backend/week-06-hardening-security-performance.md#day-3-of-5) | Backend execution | planned | Harden payment/KYC/maps/FCM/media retry, timeout, reconciliation and status recovery paths. |
| BE-W6D4 | [Security review fixes](planning/weeks/backend/week-06-hardening-security-performance.md#day-4-of-5) | Backend execution | planned | Fix findings from webhook, PIN, TOTP, RBAC, media permission, masked-call and log-scrubbing review. |
| BE-W6D5 | [Hardening review](planning/weeks/backend/week-06-hardening-security-performance.md#day-5-of-5) | Backend execution | planned | Close major backend defects and produce release-candidate blocker list. |
| BE-W7D1 | [Release candidate backend preparation](planning/weeks/backend/week-07-release-candidate-operations-dry-run.md#day-1-of-5) | Backend execution | planned | Freeze API contracts, generate OpenAPI, migration notes and environment checklist. |
| BE-W7D2 | [Backup and restore dry run](planning/weeks/backend/week-07-release-candidate-operations-dry-run.md#day-2-of-5) | Backend execution | planned | Run Postgres backup, object storage upload, restore to staging/temp database and evidence capture. |
| BE-W7D3 | [Payout and finance dry run](planning/weeks/backend/week-07-release-candidate-operations-dry-run.md#day-3-of-5) | Backend execution | planned | Run payout batch, ledger consistency, reconciliation, failed/partial transfer and disputed Tasker exclusion tests. |
| BE-W7D4 | [Provider validation report](planning/weeks/backend/week-07-release-candidate-operations-dry-run.md#day-4-of-5) | Backend execution | planned | Finalize Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, storage and Shorebird evidence. |
| BE-W7D5 | [Backend release candidate](planning/weeks/backend/week-07-release-candidate-operations-dry-run.md#day-5-of-5) | Backend execution | planned | Tag backend release candidate and hand over to formal QA. |
| BE-W8D1 | [Stabilization sprint](planning/weeks/backend/week-08-stabilization-freeze.md#day-1-of-5) | Backend execution | planned | Apply approved release-candidate fixes only. |
| BE-W8D2 | [Final backend defect pass](planning/weeks/backend/week-08-stabilization-freeze.md#day-2-of-5) | Backend execution | planned | Re-test fixed defects, run migrations, queues, sockets, webhooks and financial consistency checks. |
| BE-W8D3 | [Go-live rehearsal](planning/weeks/backend/week-08-stabilization-freeze.md#day-3-of-5) | Backend execution | planned | Run production-style deployment rehearsal, rollback rehearsal, backup restore proof and provider smoke tests. |
| BE-W8D4 | [Backend handover](planning/weeks/backend/week-08-stabilization-freeze.md#day-4-of-5) | Backend execution | planned | Finalize runbooks, env checklist, provider escalation notes, monitoring alerts and support handover. |
| BE-W8D5 | [Backend build freeze](planning/weeks/backend/week-08-stabilization-freeze.md#day-5-of-5) | Backend execution | planned | Freeze backend build for formal testing weeks. |
| MOB-W1D1 | [Project setup, architecture, design system](planning/weeks/mobile/week-01-foundation-identity.md#day-1-of-5) | Mobile execution | planned | Create Flutter feature-first structure, app shell, routing, environment config, design tokens, shared loading/error widgets. |
| MOB-W1D2 | [First launch and onboarding](planning/weeks/mobile/week-01-foundation-identity.md#day-2-of-5) | Mobile execution | planned | Implement splash, first launch decision, app update check placeholder, onboarding entry, auth route guards. |
| MOB-W1D3 | [Registration and login](planning/weeks/mobile/week-01-foundation-identity.md#day-3-of-5) | Mobile execution | planned | Implement email/phone registration, login, OTP screens, Google/Apple entry points, password recovery screens. |
| MOB-W1D4 | [Profile, mode, PIN, sessions](planning/weeks/mobile/week-01-foundation-identity.md#day-4-of-5) | Mobile execution | planned | Implement complete profile, mode switch, PIN setup/verify/reset, device/session management. |
| MOB-W1D5 | [Task Owner home and notification shell](planning/weeks/mobile/week-01-foundation-identity.md#day-5-of-5) | Mobile execution | planned | Implement Task Owner home, notification center shell, skeleton states, empty states, app-wide POST/PATCH blur overlay. |
| MOB-W2D1 | [Tasker Activation and KYC](planning/weeks/mobile/week-02-tasker-task-creation-payment.md#day-1-of-5) | Mobile execution | planned | A signed-in user can enter Tasker mode, complete the required profile and KYC steps, understand every pending or failed state, leave safely and resume later from the backend's authoritative checkpoint. |
| MOB-W2D2 | [Catalog and task draft](planning/weeks/mobile/week-02-tasker-task-creation-payment.md#day-2-of-5) | Mobile execution | planned | Implement category/type selection, task description, amount, required arrival time and draft saving. |
| MOB-W2D3 | [Location and media](planning/weeks/mobile/week-02-tasker-task-creation-payment.md#day-3-of-5) | Mobile execution | planned | Implement GPS/manual address, geocode, pin confirmation, permission recovery, proof media upload UI. |
| MOB-W2D4 | [Payment and escrow funding](planning/weeks/mobile/week-02-tasker-task-creation-payment.md#day-4-of-5) | Mobile execution | planned | Implement payment review, task amount + fee breakdown, Paystack/Moniepoint redirect/status, payment pending/recovery. |
| MOB-W2D5 | [Broadcast and direct offer](planning/weeks/mobile/week-02-tasker-task-creation-payment.md#day-5-of-5) | Mobile execution | planned | Implement funded task publish, favorites entry, direct offer send path, offer pending/expired states. |
| MOB-W3D1 | [Tasker discovery](planning/weeks/mobile/week-03-discovery-matching-execution-start.md#day-1-of-5) | Mobile execution | planned | Implement Tasker task list, nearest-first sorting UI, location filter, limited public task preview. |
| MOB-W3D2 | [Tasker interest and arrival confirmation](planning/weeks/mobile/week-03-discovery-matching-execution-start.md#day-2-of-5) | Mobile execution | planned | Implement Tasker confirm-arrival-by-required-time, interest submit, direct offer accept/decline. |
| MOB-W3D3 | [Task Owner candidate selection](planning/weeks/mobile/week-03-discovery-matching-execution-start.md#day-3-of-5) | Mobile execution | planned | Implement candidates list, ETA/profile summary, accept/reject Tasker, movement-stage rejection copy. |
| MOB-W3D4 | [Active task status actions](planning/weeks/mobile/week-03-discovery-matching-execution-start.md#day-4-of-5) | Mobile execution | planned | Implement active task screen and Tasker buttons: Start Journey, I have arrived, Begin Task. |
| MOB-W3D5 | [Chat, tracking, masked call entry](planning/weeks/mobile/week-03-discovery-matching-execution-start.md#day-5-of-5) | Mobile execution | planned | Implement task chat, voice note metadata flow, live tracking UI, masked call button and proxy number display. |
| MOB-W4D1 | [Completion and settlement](planning/weeks/mobile/week-04-completion-finance-support.md#day-1-of-5) | Mobile execution | planned | Implement completion proof upload, request completion, Task Owner approval, settlement pending/held states. |
| MOB-W4D2 | [Cancellation, no-show, report](planning/weeks/mobile/week-04-completion-finance-support.md#day-2-of-5) | Mobile execution | planned | Implement cancellation/no-show flows, warning/strike messaging, report/dispute creation and status. |
| MOB-W4D3 | [Ratings, favorites, reviews](planning/weeks/mobile/week-04-completion-finance-support.md#day-3-of-5) | Mobile execution | planned | Implement post-completion rating, review, add favorite, report review entry. |
| MOB-W4D4 | [Wallet and withdrawal](planning/weeks/mobile/week-04-completion-finance-support.md#day-4-of-5) | Mobile execution | planned | Implement wallets, ledger, payout account setup, PIN-confirmed withdrawal, batch-date status. |
| MOB-W4D5 | [Support and emergency](planning/weeks/mobile/week-04-completion-finance-support.md#day-5-of-5) | Mobile execution | planned | Implement support live chat, emergency support, ticket/report linking, support attachment flow. |
| MOB-W5D1 | [Settings and notification preferences](planning/weeks/mobile/week-05-integration-recovery-full-flow-qa.md#day-1-of-5) | Mobile execution | planned | Complete settings, notification preferences, session revoke, security copy, critical notification rules. |
| MOB-W5D2 | [Referral and rebook](planning/weeks/mobile/week-05-integration-recovery-full-flow-qa.md#day-2-of-5) | Mobile execution | planned | Implement referral code/share/pending reward, rebook from completed task, direct offer/public repost path. |
| MOB-W5D3 | [Offline/recovery polish](planning/weeks/mobile/week-05-integration-recovery-full-flow-qa.md#day-3-of-5) | Mobile execution | planned | Implement app resume recovery, socket reconnect recovery, payment/KYC return recovery, consistent empty/error/offline states. |
| MOB-W5D4 | [Provider integration QA](planning/weeks/mobile/week-05-integration-recovery-full-flow-qa.md#day-4-of-5) | Mobile execution | planned | Run integrated tests against staging providers, FCM, payment sandbox, KYC sandbox, map/geocode and media upload. |
| MOB-W5D5 | [Full mobile flow QA](planning/weeks/mobile/week-05-integration-recovery-full-flow-qa.md#day-5-of-5) | Mobile execution | planned | Run happy path and exception path for all mobile flows MF-01 to MF-24. |
| MOB-W6D1 | [Hardening sprint](planning/weeks/mobile/week-06-hardening-security-performance.md#day-1-of-5) | Mobile execution | planned | Fix defects from full flow QA, improve copy, skeletons, submit overlays, retry states. |
| MOB-W6D2 | [Performance and device QA](planning/weeks/mobile/week-06-hardening-security-performance.md#day-2-of-5) | Mobile execution | planned | Profile lower-end Android performance, image/video upload, socket battery/network behavior. |
| MOB-W6D3 | [Provider recovery flows](planning/weeks/mobile/week-06-hardening-security-performance.md#day-3-of-5) | Mobile execution | planned | Harden payment return, KYC return, FCM tap recovery, socket reconnect and media upload retry behavior. |
| MOB-W6D4 | [Security and privacy review](planning/weeks/mobile/week-06-hardening-security-performance.md#day-4-of-5) | Mobile execution | planned | Verify PIN confirmation, permission prompts, private media, exact-address reveal rules and masked-call copy. |
| MOB-W6D5 | [Hardening review](planning/weeks/mobile/week-06-hardening-security-performance.md#day-5-of-5) | Mobile execution | planned | Run full mobile smoke test, close major defects and prepare release-candidate checklist. |
| MOB-W7D1 | [Release candidate preparation](planning/weeks/mobile/week-07-release-candidate-operations-dry-run.md#day-1-of-5) | Mobile execution | planned | Prepare Android release candidate configuration, app icon/name/package, permissions and environment mapping. |
| MOB-W7D2 | [Device matrix QA](planning/weeks/mobile/week-07-release-candidate-operations-dry-run.md#day-2-of-5) | Mobile execution | planned | Test priority Android devices, small screens, low memory, poor network and background app-kill recovery. |
| MOB-W7D3 | [Operations dry run support](planning/weeks/mobile/week-07-release-candidate-operations-dry-run.md#day-3-of-5) | Mobile execution | planned | Validate mobile behavior for support live chat, emergency support, reports, payout status and admin-driven outcomes. |
| MOB-W7D4 | [Provider validation support](planning/weeks/mobile/week-07-release-candidate-operations-dry-run.md#day-4-of-5) | Mobile execution | planned | Run payment, KYC, maps, FCM, media and Sentry validation from mobile side. |
| MOB-W7D5 | [Mobile release candidate](planning/weeks/mobile/week-07-release-candidate-operations-dry-run.md#day-5-of-5) | Mobile execution | planned | Generate release candidate build and handover notes for QA testing. |
| MOB-W8D1 | [Stabilization sprint](planning/weeks/mobile/week-08-stabilization-freeze.md#day-1-of-5) | Mobile execution | planned | Apply approved release-candidate fixes and polish only. |
| MOB-W8D2 | [Final defect pass](planning/weeks/mobile/week-08-stabilization-freeze.md#day-2-of-5) | Mobile execution | planned | Re-test fixed defects and run critical mobile happy paths. |
| MOB-W8D3 | [Go-live rehearsal](planning/weeks/mobile/week-08-stabilization-freeze.md#day-3-of-5) | Mobile execution | planned | Run Task Owner, Tasker and support journeys exactly as launch users will experience them. |
| MOB-W8D4 | [Handover and store readiness](planning/weeks/mobile/week-08-stabilization-freeze.md#day-4-of-5) | Mobile execution | planned | Confirm legal/help links, app permissions, screenshots/test notes and support handover notes. |
| MOB-W8D5 | [Build freeze](planning/weeks/mobile/week-08-stabilization-freeze.md#day-5-of-5) | Mobile execution | planned | Freeze mobile build for formal testing weeks. |

## Accepted contract decisions

| ID | Record | Collection | Status | Summary |
| --- | --- | --- | --- | --- |
| CONTRACT-REFERRAL-001 | [Referral Contract Group](contracts/referral-contract-group.md) | Accepted contract decisions | approved-reference | These contracts let a signed-in user see and share their referral code, follow the progress of people attributed to that code, and see whether a reward is pending, held, rejected or credited. A new user's referral code is captured by registration. The backend—not the mobile clie… |

## Technical records

| ID | Record | Collection | Status | Summary |
| --- | --- | --- | --- | --- |
| API-104 | [DELETE /admin/auth/sessions/{sessionId}](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Revoke an admin session. |
| API-106 | [GET /admin/admin-users](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | List admin users. |
| API-128 | [GET /admin/audit-logs](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Search privileged actions and system audit events. |
| API-103 | [GET /admin/auth/sessions](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | List admin sessions and devices. |
| API-126 | [GET /admin/config](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Read remote config values. |
| API-114 | [GET /admin/dashboard](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Return operating dashboard summary. |
| API-121 | [GET /admin/finance/transactions](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | List payments, escrow, wallet entries, transfers, and receipts. |
| API-113 | [GET /admin/permissions](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | List available permission keys. |
| API-133 | [GET /admin/referrals](technical/contracts.md) | API, Socket and OpenAPI Reference | approved-reference | Returns the permission-filtered referral review queue for AF-15. |
| API-134 | [GET /admin/referrals/{attributionId}](technical/contracts.md) | API, Socket and OpenAPI Reference | approved-reference | Returns one safe referral decision record with referrer/referred-user summaries, attribution history, authoritative paid-task qualification evidence, reward state, wallet-credit reference, risk-review link and prior decisions. |
| API-110 | [GET /admin/roles](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | List roles and permissions. |
| API-118 | [GET /admin/tasks](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Search and filter tasks. |
| API-119 | [GET /admin/tasks/{taskId}](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | View task details and timeline. |
| API-129 | [GET /admin/use-case-health](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | View use case invocation, last used, success/failure state. |
| API-115 | [GET /admin/users](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Search users and account states. |
| API-116 | [GET /admin/users/{userId}](technical/contracts.md) | API, Socket and OpenAPI Reference | approved-reference | Returns permission-gated user, Tasker and KYC summary context when AF-04 is entered from User Management. It is not the dedicated evidence/detail contract. |
| API-108 | [PATCH /admin/admin-users/{adminUserId}](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Update admin user status, metadata, or assigned roles. |
| API-127 | [PATCH /admin/config/{key}](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Update feature flags, thresholds, or platform caps. |
| API-112 | [PATCH /admin/roles/{roleId}](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Update role permissions. |
| API-107 | [POST /admin/admin-users](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Invite or create admin user. |
| API-109 | [POST /admin/admin-users/{adminUserId}/disable](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Disable an admin account. |
| API-124 | [POST /admin/announcements](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Create notification or announcement campaign. |
| API-099 | [POST /admin/auth/login](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Authenticate admin user with email/password. |
| API-105 | [POST /admin/auth/logout](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Invalidate current admin session. |
| API-101 | [POST /admin/auth/totp/enroll](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Enroll TOTP for an admin account. |
| API-102 | [POST /admin/auth/totp/recovery-codes](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Generate or rotate recovery codes. |
| API-100 | [POST /admin/auth/totp/verify](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Verify TOTP challenge during login or sensitive operation. |
| API-135 | [POST /admin/referrals/{attributionId}/approve](technical/contracts.md) | API, Socket and OpenAPI Reference | approved-reference | Approved contract record from Referral Contract Group. |
| API-136 | [POST /admin/referrals/{attributionId}/hold](technical/contracts.md) | API, Socket and OpenAPI Reference | approved-reference | Approved contract record from Referral Contract Group. |
| API-137 | [POST /admin/referrals/{attributionId}/reject](technical/contracts.md) | API, Socket and OpenAPI Reference | approved-reference | Approved contract record from Referral Contract Group. |
| API-111 | [POST /admin/roles](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Create a role. |
| API-117 | [POST /admin/users/{userId}/suspend](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Suspend account after verified risk rule. |
| API-032 | [GET /catalog/categories](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | List active task categories and display order. |
| API-033 | [GET /catalog/task-types](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | List task types under each category. |
| API-035 | [PATCH /admin/catalog/categories/{categoryId}](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Update labels, ordering, and visibility. |
| API-034 | [POST /admin/catalog/categories](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Create category or task type. |
| API-037 | [POST /admin/catalog/categories/{categoryId}/archive](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Archive unused or retired category. |
| API-036 | [POST /admin/catalog/categories/{categoryId}/disable](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Disable category for new tasks. |
| SOCKET-014 | [/presence · presence.heartbeat](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Maintain online/available state. |
| SOCKET-015 | [/presence · presence.updated](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Broadcast presence changes where relevant. |
| SOCKET-010 | [/support · support.assignment.updated](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Notify support agent assignment or reassignment. |
| SOCKET-009 | [/support · support.message.new](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Deliver support message. |
| SOCKET-008 | [/support · support.message.send](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Send support live chat message. |
| SOCKET-007 | [/support · support.session.join](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Join support live chat session. |
| SOCKET-003 | [/task · task.chat.new](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Deliver new chat message. |
| SOCKET-004 | [/task · task.chat.read](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Mark messages read and broadcast read receipt. |
| SOCKET-002 | [/task · task.chat.send](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Send task chat message after task is accepted. |
| SOCKET-005 | [/task · task.chat.typing](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Transient typing indicator. |
| SOCKET-001 | [/task · task.room.join](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Join task room after membership/state authorization. |
| SOCKET-006 | [/task · task.voice.created](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Notify that a voice note media object is ready. |
| SOCKET-013 | [/tracking · tracking.eta.updated](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Send ETA after backend guard permits paid refresh. |
| SOCKET-011 | [/tracking · tracking.location.update](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Stream Tasker GPS while accepted/en route/arrived/in progress. |
| SOCKET-012 | [/tracking · tracking.location.updated](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Send allowed live location update. |
| API-088 | [GET /notifications](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | List in-app notifications. |
| API-091 | [GET /tasks/{taskId}/call-sessions/active](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Return active masked call session if one exists. |
| API-093 | [GET /tasks/{taskId}/communications](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Return communication summary for task chat, voice notes, masked call sessions, and audit flags. |
| API-089 | [POST /notifications/{notificationId}/read](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Mark notification read. |
| API-087 | [POST /support/emergency](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Open emergency support request. |
| API-086 | [POST /support/sessions](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Open support live chat session. |
| API-090 | [POST /tasks/{taskId}/call-sessions](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Create or retrieve a masked call session for an eligible task state. |
| API-092 | [POST /tasks/{taskId}/call-sessions/{sessionId}/end](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Close a masked call session. |
| API-094 | [POST /tasks/{taskId}/voice-notes](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Finalize uploaded voice note metadata for task chat. |
| API-018 | [DELETE /me/addresses/{addressId}](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Remove saved address from future use. |
| API-026 | [DELETE /me/sessions/{sessionId}](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Revoke another device session. |
| API-012 | [GET /me](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Return authenticated user, mode, KYC, profile completeness, wallets, and next actions. |
| API-015 | [GET /me/addresses](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | List saved addresses for task posting and profile convenience. |
| API-019 | [GET /me/notification-preferences](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Return push, email, SMS, and announcement preference settings. |
| API-025 | [GET /me/sessions](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | List active devices and sessions. |
| API-017 | [PATCH /me/addresses/{addressId}](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Update saved address metadata. |
| API-020 | [PATCH /me/notification-preferences](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Update notification preferences. |
| API-013 | [PATCH /me/profile](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Update profile fields such as name, photo, gender, and contact metadata. |
| API-002 | [POST /auth/login](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Authenticate with password and issue access/refresh tokens. |
| API-010 | [POST /auth/logout](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Invalidate the current session. |
| API-011 | [POST /auth/logout-all](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Revoke all sessions for the user. |
| API-005 | [POST /auth/otp/send](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Send OTP for email, phone, recovery, or sensitive verification fallback. |
| API-006 | [POST /auth/otp/verify](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Verify OTP and mark the verification purpose as complete. |
| API-007 | [POST /auth/password/forgot](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Start password reset using email first then SMS fallback. |
| API-008 | [POST /auth/password/reset](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Complete password reset after valid OTP/recovery token. |
| API-009 | [POST /auth/refresh](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Rotate refresh token and issue a fresh access token. |
| API-001 | [POST /auth/register](technical/contracts.md) | API, Socket and OpenAPI Reference | approved-reference | Captures referral attribution as part of the existing registration transaction without creating a separate unauthenticated attribution endpoint. |
| API-004 | [POST /auth/social/apple](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Authenticate or create account using Apple identity. |
| API-003 | [POST /auth/social/google](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Authenticate or create account using Google identity. |
| API-016 | [POST /me/addresses](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Create a saved address from manual entry or GPS-confirmed pin. |
| API-014 | [POST /me/mode](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Switch visible app mode between Task Owner and Tasker. |
| API-024 | [POST /me/security-pin/reset/confirm](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Set new PIN after reset verification. |
| API-023 | [POST /me/security-pin/reset/start](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Start PIN reset through OTP and risk checks. |
| API-021 | [POST /me/security-pin/setup](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Create first security PIN after identity/contact checks. |
| API-022 | [POST /me/security-pin/verify](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Verify PIN for a sensitive operation. |
| API-083 | [DELETE /favorites/taskers/{taskerId}](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Remove favorite Tasker. |
| API-081 | [GET /favorites/taskers](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | List favorite Taskers. |
| API-046 | [GET /task-owner/tasks/{taskId}/candidates](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | List interested/available Taskers with ETA and profile summary. |
| API-057 | [GET /tasker/tasks](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | List available tasks sorted nearest first with location filtering. |
| API-082 | [POST /favorites/taskers](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Add Tasker to favorites. |
| API-045 | [POST /task-owner/tasks/{taskId}/direct-offers](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Send direct offer to a favorite Tasker. |
| API-059 | [POST /tasker/tasks/{taskId}/interest](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Declare interest and confirm ability to arrive by required time. |
| API-070 | [POST /payments/verify](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Verify payment redirect/status from client side. |
| API-072 | [POST /webhooks/moniepoint](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Receive Moniepoint payment/transfer events. |
| API-071 | [POST /webhooks/paystack](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Receive Paystack payment/transfer events. |
| JOB-008 | [audit.queue](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Persist admin/security/provider/use case audit events. |
| JOB-006 | [chat.queue](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Persist task/support messages and delivery/read states. |
| JOB-003 | [kyc.queue](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Smile ID job submission and callback handling. |
| JOB-007 | [maps.queue](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Geocoding, ETA refresh, route cost guard. |
| JOB-004 | [matching.queue](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Broadcast task, direct offers, candidate update jobs. |
| JOB-009 | [media.queue](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Moderation, thumbnailing, permission indexing. |
| JOB-001 | [notification.queue](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | FCM, in-app, email, and critical SMS sends. |
| JOB-002 | [payment.queue](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Verify payments, update escrow, reconcile provider events. |
| WEBHOOK-004 | [POST /webhooks/calls/provider](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Receives Inbound proxy call, call bridged, call ended, recording metadata if enabled from Masked Call Provider. |
| WEBHOOK-003 | [POST /webhooks/smile-id](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Receives KYC approved, rejected, pending, failed from Smile ID. |
| JOB-010 | [report.queue](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Penalty review timers, escalation, settlement holds. |
| JOB-005 | [wallet.queue](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Ledger entries, escrow release, holds, withdrawals. |
| API-130 | [GET /referrals/me](technical/contracts.md) | API, Socket and OpenAPI Reference | approved-reference | Returns the signed-in user's referral code, native-share URL and aggregate progress/reward summary for MF-17. |
| API-131 | [GET /referrals/me/attributions](technical/contracts.md) | API, Socket and OpenAPI Reference | approved-reference | Returns only referrals attributed to the signed-in user, including paid-task progress and reward status. |
| API-125 | [GET /admin/ratings](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Review ratings and reported reviews. |
| API-122 | [GET /admin/reports](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | List reports/disputes. |
| API-085 | [GET /reports/{reportId}](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Return report status and allowed next action. |
| API-138 | [POST /admin/referrals/{attributionId}/escalate-risk](technical/contracts.md) | API, Socket and OpenAPI Reference | approved-reference | Approved contract record from Referral Contract Group. |
| API-123 | [POST /admin/reports/{reportId}/resolve](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Resolve report with outcome, penalty, hold, or dismissal. |
| API-051 | [POST /task-owner/tasks/{taskId}/report](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Report issue linked to a task. |
| API-080 | [POST /tasks/{taskId}/ratings](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Submit rating and review after completed task. |
| API-084 | [POST /tasks/{taskId}/reports](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Create report/dispute linked to a task. |
| API-095 | [GET /health](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Basic liveness check. |
| API-097 | [GET /metrics](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Expose service metrics for monitoring. |
| API-096 | [GET /ready](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Readiness check for API dependencies. |
| API-098 | [GET /version](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Return deployed API version and compatibility metadata. |
| API-041 | [POST /task-owner/tasks/{taskId}/location/confirm-pin](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Confirm exact map pin before posting. |
| API-040 | [POST /task-owner/tasks/{taskId}/location/geocode](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Convert manual address to coordinates. |
| API-042 | [POST /task-owner/tasks/{taskId}/media](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Upload proof of work to be done. |
| API-043 | [POST /task-owner/tasks/{taskId}/payment-intent](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Create Paystack or Moniepoint payment session. |
| API-038 | [POST /task-owner/tasks/drafts](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Create a draft task. |
| API-058 | [GET /tasker/tasks/{taskId}](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Return public task details, limited media summary, distance, and arrival requirement. |
| API-120 | [POST /admin/tasks/{taskId}/force-cancel](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Force cancel task with elevated permission. |
| API-044 | [POST /task-owner/tasks/{taskId}/broadcast](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Move a funded task into public broadcast. |
| API-050 | [POST /task-owner/tasks/{taskId}/cancel](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Cancel task under current state rules. |
| API-049 | [POST /task-owner/tasks/{taskId}/confirm-completion](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Approve completed task and release escrow if no hold applies. |
| API-052 | [POST /task-owner/tasks/{taskId}/rebook](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Create repeat task from a previous completed task. |
| API-060 | [POST /tasker/tasks/{taskId}/accept](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Accept direct offer or accepted assignment where state allows. |
| API-063 | [POST /tasker/tasks/{taskId}/arrived](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Mark arrival at task site. |
| API-064 | [POST /tasker/tasks/{taskId}/begin](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Begin the task after arrival. |
| API-067 | [POST /tasker/tasks/{taskId}/cancel](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Cancel accepted task. |
| API-065 | [POST /tasker/tasks/{taskId}/completion-proof](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Upload proof of work done. |
| API-061 | [POST /tasker/tasks/{taskId}/decline](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Decline direct offer or withdraw interest before commitment. |
| API-066 | [POST /tasker/tasks/{taskId}/request-completion](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Ask Task Owner to approve completed work. |
| API-062 | [POST /tasker/tasks/{taskId}/start-journey](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Mark movement toward task site. |
| API-039 | [PATCH /task-owner/tasks/{taskId}](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Update task title, category, description, budget, required arrival time, and visibility while editable. |
| API-047 | [POST /task-owner/tasks/{taskId}/accept-tasker](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Accept a Tasker for the task. |
| API-048 | [POST /task-owner/tasks/{taskId}/reject-tasker](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Reject a Tasker before movement or within allowed movement grace window. |
| API-140 | [GET /admin/kyc](technical/contracts.md) | API, Socket and OpenAPI Reference | approved-reference | Returns the operational KYC queue. It supplies summary fields only and never returns protected evidence. |
| API-141 | [GET /admin/kyc/{kycId}](technical/contracts.md) | API, Socket and OpenAPI Reference | approved-reference | Returns the complete safe decision context for one case. Protected evidence uses time-limited references only when the admin also has kyc.evidence.read. |
| API-030 | [GET /kyc/status](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Return current KYC state and allowed next action. |
| API-142 | [POST /admin/kyc/{kycId}/approve](technical/contracts.md) | API, Socket and OpenAPI Reference | approved-reference | Records that the verified evidence satisfies KYC policy and recalculates Tasker activation eligibility. |
| API-145 | [POST /admin/kyc/{kycId}/escalate-risk](technical/contracts.md) | API, Socket and OpenAPI Reference | approved-reference | Hands suspicious or ambiguous identity behavior to AF-14 without falsely approving or rejecting KYC. |
| API-146 | [POST /admin/kyc/{kycId}/reconcile](technical/contracts.md) | API, Socket and OpenAPI Reference | approved-reference | Queues one controlled check of the latest Smile ID attempt when verified provider truth is delayed or inconsistent. |
| API-143 | [POST /admin/kyc/{kycId}/reject](technical/contracts.md) | API, Socket and OpenAPI Reference | approved-reference | Records a verified non-correctable policy failure. Correctable evidence problems must use re-verification instead. |
| API-031 | [POST /admin/kyc/{kycId}/request-reverification](technical/contracts.md) | API, Socket and OpenAPI Reference | approved-reference | Records a correctable problem and tells the Tasker which accepted steps must be repeated. |
| API-029 | [POST /kyc/face-capture](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Submit biometric face capture reference or uploaded media. |
| API-028 | [POST /kyc/nin-bvn](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Submit NIN or BVN for verification through Smile ID adapter. |
| API-027 | [POST /kyc/start](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Open a KYC attempt for Tasker activation. |
| API-053 | [GET /tasker/profile](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Return Tasker profile, KYC state, skills, ratings, payout readiness, and availability. |
| API-055 | [PATCH /tasker/preferences](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Update work preferences and max travel radius. |
| API-054 | [PATCH /tasker/profile](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Update skills, bio, task categories, service locations, and profile metadata. |
| API-056 | [POST /tasker/availability](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Set available/unavailable status. |
| API-073 | [GET /tasker/payout-account](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Return payout account setup status. |
| API-076 | [GET /tasker/withdrawals](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | List withdrawal requests and batch status. |
| API-068 | [GET /wallets](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Return Task Owner wallet and Tasker wallet summaries. |
| API-069 | [GET /wallets/{walletId}/ledger](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Return wallet ledger entries. |
| API-077 | [POST /admin/payout-batches](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Create payout batch for eligible withdrawal requests. |
| API-078 | [POST /admin/payout-batches/{batchId}/approve](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Approve prepared payout batch. |
| API-079 | [POST /admin/payout-batches/{batchId}/mark-processed](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Finalize payout batch after provider processing. |
| API-074 | [POST /tasker/payout-account](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Add or change Tasker payout account. |
| API-075 | [POST /tasker/withdrawals](technical/contracts.md) | API, Socket and OpenAPI Reference | provisional | Request withdrawal into next eligible payout batch. |
| MODEL-ADMIN-08 | [AdminAuditLog](technical/data.md) | Data Model Reference | execution-baseline | Immutable admin/security/finance/risk audit record. |
| MODEL-ADMIN-03 | [AdminPermission](technical/data.md) | Data Model Reference | planned | AdminPermission supports the admin and operations domain. |
| MODEL-ADMIN-02 | [AdminRole](technical/data.md) | Data Model Reference | planned | AdminRole supports the admin and operations domain. |
| MODEL-ADMIN-04 | [AdminRolePermission](technical/data.md) | Data Model Reference | planned | AdminRolePermission supports the admin and operations domain. |
| MODEL-ADMIN-06 | [AdminSession](technical/data.md) | Data Model Reference | planned | AdminSession supports the admin and operations domain. |
| MODEL-ADMIN-07 | [AdminTotpCredential](technical/data.md) | Data Model Reference | planned | AdminTotpCredential supports the admin and operations domain. |
| MODEL-ADMIN-01 | [AdminUser](technical/data.md) | Data Model Reference | planned | AdminUser supports the admin and operations domain. |
| MODEL-ADMIN-05 | [AdminUserRole](technical/data.md) | Data Model Reference | planned | AdminUserRole supports the admin and operations domain. |
| MODEL-CATALOG-04 | [PlatformCoverageRule](technical/data.md) | Data Model Reference | planned | PlatformCoverageRule supports the catalog and coverage domain. |
| MODEL-CATALOG-03 | [ServiceZone](technical/data.md) | Data Model Reference | planned | ServiceZone supports the catalog and coverage domain. |
| MODEL-CATALOG-01 | [TaskCategory](technical/data.md) | Data Model Reference | planned | TaskCategory supports the catalog and coverage domain. |
| MODEL-CATALOG-02 | [TaskType](technical/data.md) | Data Model Reference | planned | TaskType supports the catalog and coverage domain. |
| MODEL-COMMUNICATION-01 | [ChatMessage](technical/data.md) | Data Model Reference | execution-baseline | ChatMessage supports the communication and support domain. |
| MODEL-COMMUNICATION-05 | [CommunicationAuditLog](technical/data.md) | Data Model Reference | planned | CommunicationAuditLog supports the communication and support domain. |
| MODEL-COMMUNICATION-03 | [SupportMessage](technical/data.md) | Data Model Reference | planned | SupportMessage supports the communication and support domain. |
| MODEL-COMMUNICATION-02 | [SupportSession](technical/data.md) | Data Model Reference | planned | SupportSession supports the communication and support domain. |
| MODEL-COMMUNICATION-04 | [TaskCallSession](technical/data.md) | Data Model Reference | execution-baseline | Masked proxy call session. |
| MODEL-IDENTITY-08 | [NotificationPreference](technical/data.md) | Data Model Reference | planned | NotificationPreference supports the identity and access domain. |
| MODEL-IDENTITY-04 | [OtpChallenge](technical/data.md) | Data Model Reference | planned | OtpChallenge supports the identity and access domain. |
| MODEL-IDENTITY-09 | [SavedAddress](technical/data.md) | Data Model Reference | planned | SavedAddress supports the identity and access domain. |
| MODEL-IDENTITY-07 | [SecurityPinCredential](technical/data.md) | Data Model Reference | planned | SecurityPinCredential supports the identity and access domain. |
| MODEL-IDENTITY-03 | [SocialAccount](technical/data.md) | Data Model Reference | planned | SocialAccount supports the identity and access domain. |
| MODEL-IDENTITY-01 | [User](technical/data.md) | Data Model Reference | execution-baseline | Root account identity. A user can be Task Owner, Tasker, or both. |
| MODEL-IDENTITY-02 | [UserCredential](technical/data.md) | Data Model Reference | planned | UserCredential supports the identity and access domain. |
| MODEL-IDENTITY-06 | [UserDevice](technical/data.md) | Data Model Reference | planned | UserDevice supports the identity and access domain. |
| MODEL-IDENTITY-05 | [UserSession](technical/data.md) | Data Model Reference | planned | UserSession supports the identity and access domain. |
| MODEL-OPERATIONS-02 | [OutboxEvent](technical/data.md) | Data Model Reference | planned | OutboxEvent supports the providers and jobs domain. |
| MODEL-OPERATIONS-05 | [ProviderRequestLog](technical/data.md) | Data Model Reference | planned | ProviderRequestLog supports the providers and jobs domain. |
| MODEL-OPERATIONS-03 | [QueueJobAudit](technical/data.md) | Data Model Reference | planned | QueueJobAudit supports the providers and jobs domain. |
| MODEL-OPERATIONS-04 | [RemoteConfig](technical/data.md) | Data Model Reference | planned | RemoteConfig supports the providers and jobs domain. |
| MODEL-OPERATIONS-01 | [UseCaseExecutionLog](technical/data.md) | Data Model Reference | execution-baseline | Backend use-case invocation health record. |
| MODEL-RISK-06 | [Rating](technical/data.md) | Data Model Reference | planned | Rating supports the risk and trust domain. |
| MODEL-REFERRAL-02 | [ReferralAttribution](technical/data.md) | Data Model Reference | planned | ReferralAttribution supports the risk and trust domain. |
| MODEL-REFERRAL-01 | [ReferralCode](technical/data.md) | Data Model Reference | planned | ReferralCode supports the risk and trust domain. |
| MODEL-REFERRAL-03 | [ReferralReward](technical/data.md) | Data Model Reference | planned | ReferralReward supports the risk and trust domain. |
| MODEL-RISK-07 | [ReviewModeration](technical/data.md) | Data Model Reference | planned | ReviewModeration supports the risk and trust domain. |
| MODEL-RISK-04 | [RiskFlag](technical/data.md) | Data Model Reference | planned | RiskFlag supports the risk and trust domain. |
| MODEL-RISK-03 | [Strike](technical/data.md) | Data Model Reference | planned | Strike supports the risk and trust domain. |
| MODEL-RISK-01 | [TaskReport](technical/data.md) | Data Model Reference | planned | Structured task-linked report/dispute. |
| MODEL-RISK-05 | [TrustScoreEvent](technical/data.md) | Data Model Reference | planned | TrustScoreEvent supports the risk and trust domain. |
| MODEL-RISK-02 | [Warning](technical/data.md) | Data Model Reference | planned | Warning supports the risk and trust domain. |
| ENUM-16 | [AdminActionRisk](technical/data.md) | Data Model Reference | execution-baseline | Determines TOTP/reason/audit controls. |
| ENUM-05 | [DirectTaskOfferStatus](technical/data.md) | Data Model Reference | execution-baseline | Direct favorite offer lifecycle. |
| ENUM-10 | [EscrowStatus](technical/data.md) | Data Model Reference | execution-baseline | Escrow lifecycle. |
| ENUM-06 | [FavoriteTaskerStatus](technical/data.md) | Data Model Reference | execution-baseline | Task Owner favorite Tasker relationship state. |
| ENUM-03 | [KycStatus](technical/data.md) | Data Model Reference | execution-baseline | Controls Tasker activation. |
| ENUM-09 | [PaymentStatus](technical/data.md) | Data Model Reference | execution-baseline | Provider collection state. |
| ENUM-12 | [PayoutBatchStatus](technical/data.md) | Data Model Reference | execution-baseline | Bulk payout lifecycle. |
| ENUM-17 | [ProviderName](technical/data.md) | Data Model Reference | execution-baseline | Provider integration vocabulary. |
| ENUM-15 | [StrikeActorType](technical/data.md) | Data Model Reference | execution-baseline | Strike owner. |
| ENUM-07 | [TaskMediaPurpose](technical/data.md) | Data Model Reference | execution-baseline | Determines access and validation rules. |
| ENUM-08 | [TaskMediaStatus](technical/data.md) | Data Model Reference | execution-baseline | Moderation and lifecycle state. |
| ENUM-13 | [TaskReportStatus](technical/data.md) | Data Model Reference | execution-baseline | Report/dispute workflow. |
| ENUM-04 | [TaskStatus](technical/data.md) | Data Model Reference | execution-baseline | Central task state machine. |
| ENUM-01 | [UserMode](technical/data.md) | Data Model Reference | execution-baseline | Current app mode. Field name is mode. |
| ENUM-02 | [WalletType](technical/data.md) | Data Model Reference | execution-baseline | Separates funds by purpose and withdrawal policy. |
| ENUM-14 | [WarningActorType](technical/data.md) | Data Model Reference | execution-baseline | Warning owner. |
| ENUM-11 | [WithdrawalStatus](technical/data.md) | Data Model Reference | execution-baseline | Withdrawal and batch state. |
| MODEL-TASK-05 | [DirectTaskOffer](technical/data.md) | Data Model Reference | planned | DirectTaskOffer supports the task marketplace domain. |
| MODEL-TASK-06 | [FavoriteTasker](technical/data.md) | Data Model Reference | planned | FavoriteTasker supports the task marketplace domain. |
| MODEL-TASK-01 | [Task](technical/data.md) | Data Model Reference | execution-baseline | Central marketplace work request. |
| MODEL-TASK-09 | [TaskEtaSnapshot](technical/data.md) | Data Model Reference | planned | TaskEtaSnapshot supports the task marketplace domain. |
| MODEL-TASK-04 | [TaskInterest](technical/data.md) | Data Model Reference | planned | TaskInterest supports the task marketplace domain. |
| MODEL-TASK-02 | [TaskLocation](technical/data.md) | Data Model Reference | execution-baseline | Task site address, geocode, pin confirmation and privacy metadata. |
| MODEL-TASK-03 | [TaskMedia](technical/data.md) | Data Model Reference | planned | Proof media for work to be done, completion proof, report evidence and voice-note metadata where applicable. |
| MODEL-TASK-07 | [TaskOwnerRejection](technical/data.md) | Data Model Reference | planned | TaskOwnerRejection supports the task marketplace domain. |
| MODEL-TASK-08 | [TaskStatusEvent](technical/data.md) | Data Model Reference | planned | TaskStatusEvent supports the task marketplace domain. |
| MODEL-TASK-10 | [TaskTrackingSample](technical/data.md) | Data Model Reference | planned | TaskTrackingSample supports the task marketplace domain. |
| MODEL-TASKER-06 | [KycAttempt](technical/data.md) | Data Model Reference | approved-reference | KycAttempt supports the tasker activation and kyc domain. |
| MODEL-TASKER-05 | [KycVerification](technical/data.md) | Data Model Reference | execution-baseline | KycVerification supports the tasker activation and kyc domain. |
| MODEL-TASKER-04 | [TaskerAvailabilitySnapshot](technical/data.md) | Data Model Reference | planned | TaskerAvailabilitySnapshot supports the tasker activation and kyc domain. |
| MODEL-TASKER-03 | [TaskerPreference](technical/data.md) | Data Model Reference | planned | TaskerPreference supports the tasker activation and kyc domain. |
| MODEL-TASKER-01 | [TaskerProfile](technical/data.md) | Data Model Reference | execution-baseline | Tasker-specific profile, skills, bio, KYC activation and availability readiness. |
| MODEL-TASKER-02 | [TaskerSkill](technical/data.md) | Data Model Reference | planned | TaskerSkill supports the tasker activation and kyc domain. |
| MODEL-FINANCE-06 | [Escrow](technical/data.md) | Data Model Reference | execution-baseline | Held funds for a task before completion or dispute outcome. |
| MODEL-FINANCE-03 | [Payment](technical/data.md) | Data Model Reference | planned | High-level payment record for provider collection. |
| MODEL-FINANCE-04 | [PaymentAttempt](technical/data.md) | Data Model Reference | planned | PaymentAttempt supports the wallet, escrow and payouts domain. |
| MODEL-FINANCE-09 | [PayoutAccount](technical/data.md) | Data Model Reference | planned | PayoutAccount supports the wallet, escrow and payouts domain. |
| MODEL-FINANCE-11 | [PayoutBatch](technical/data.md) | Data Model Reference | execution-baseline | Bulk payout run for eligible withdrawal requests. |
| MODEL-FINANCE-12 | [PayoutBatchItem](technical/data.md) | Data Model Reference | execution-baseline | PayoutBatchItem supports the wallet, escrow and payouts domain. |
| MODEL-FINANCE-05 | [ProviderWebhookEvent](technical/data.md) | Data Model Reference | planned | ProviderWebhookEvent supports the wallet, escrow and payouts domain. |
| MODEL-FINANCE-07 | [TaskSettlement](technical/data.md) | Data Model Reference | planned | TaskSettlement supports the wallet, escrow and payouts domain. |
| MODEL-FINANCE-08 | [TaskSettlementHold](technical/data.md) | Data Model Reference | planned | TaskSettlementHold supports the wallet, escrow and payouts domain. |
| MODEL-FINANCE-01 | [Wallet](technical/data.md) | Data Model Reference | execution-baseline | Separate wallet per user and wallet type. |
| MODEL-FINANCE-02 | [WalletLedgerEntry](technical/data.md) | Data Model Reference | execution-baseline | WalletLedgerEntry supports the wallet, escrow and payouts domain. |
| MODEL-FINANCE-10 | [WithdrawalRequest](technical/data.md) | Data Model Reference | execution-baseline | Tasker withdrawal request waiting for payout batch. |
| ARCH-01 | [System context and responsibility boundary](technical/platform.md) | Platform Architecture and Operations | provisional-baseline | Flutter mobile and Next.js Admin consume a NestJS API. PostgreSQL owns durable truth; Valkey supports cache, presence, geospatial lookup, queues and socket scaling; workers own background processing; object storage holds controlled media and backup artifacts. |
| ARCH-02 | [Production topology](technical/platform.md) | Platform Architecture and Operations | provisional-baseline | The provisional production baseline separates application, data and monitoring responsibilities and uses S3-compatible object storage. Exact network diagrams, region, sizing and failover require infrastructure approval before provisioning. |
| ARCH-03 | [Staging topology](technical/platform.md) | Platform Architecture and Operations | provisional-baseline | Staging uses isolated infrastructure, sandbox provider credentials and synthetic data. It must never contain production user, KYC, payment or secret material. |
| ARCH-04 | [Network, DNS, TLS and secret boundaries](technical/platform.md) | Platform Architecture and Operations | decision-required | Public entry points terminate TLS at controlled reverse proxies; data services remain private. Secrets belong in protected environment/secret storage and are never stored in this documentation repository. |
| ARCH-05 | [Monitoring, capacity and cost controls](technical/platform.md) | Platform Architecture and Operations | provisional-baseline | Monitor API/socket health, provider calls, payment reconciliation, queues, PostgreSQL, Valkey, backups and budget consumption. Alerts must name an owner and lead to a runbook. |
| ARCH-06 | [Disaster recovery policy](technical/platform.md) | Platform Architecture and Operations | provisional-baseline | Recovery prioritizes data integrity, authoritative money state and controlled restoration. Off-server PostgreSQL backups and tested restore procedures are mandatory; server disks alone are not backups. |
| PROVIDER-01 | [Paystack](technical/platform.md) | Platform Architecture and Operations | selected-unverified | Primary collection rail alongside Moniepoint. |
| PROVIDER-02 | [Moniepoint](technical/platform.md) | Platform Architecture and Operations | selected-unverified | Primary collection rail alongside Paystack. |
| PROVIDER-03 | [Paystack Transfers](technical/platform.md) | Platform Architecture and Operations | selected-unverified | Transfer rail for Tasker withdrawals where appropriate. |
| PROVIDER-04 | [Moniepoint](technical/platform.md) | Platform Architecture and Operations | selected-unverified | Transfer rail for payout batches where appropriate. |
| PROVIDER-05 | [Smile ID](technical/platform.md) | Platform Architecture and Operations | selected-unverified | Identity verification provider. |
| PROVIDER-06 | [Google Maps Platform](technical/platform.md) | Platform Architecture and Operations | selected-unverified | Paid maps/routing/geocoding provider. |
| PROVIDER-07 | [Firebase Cloud Messaging](technical/platform.md) | Platform Architecture and Operations | selected-unverified | Primary device wake and push notification channel. |
| PROVIDER-08 | [Termii](technical/platform.md) | Platform Architecture and Operations | selected-unverified | SMS fallback for critical OTP and critical notifications. |
| PROVIDER-09 | [Resend](technical/platform.md) | Platform Architecture and Operations | candidate | Phase 1 transactional email provider. |
| PROVIDER-10 | [SendGrid](technical/platform.md) | Platform Architecture and Operations | deferred | Later email provider when volume/deliverability requires it. |
| PROVIDER-11 | [Sentry](technical/platform.md) | Platform Architecture and Operations | candidate | Error monitoring. |
| PROVIDER-12 | [Shorebird](technical/platform.md) | Platform Architecture and Operations | selected-unverified | Flutter patch delivery. |
| PROVIDER-13 | [Infobip](technical/platform.md) | Platform Architecture and Operations | candidate | Primary candidate for proxy dial-in masked calls. |
| PROVIDER-14 | [Africa's Talking](technical/platform.md) | Platform Architecture and Operations | candidate | Secondary candidate for masked calls. |
| PROVIDER-15 | [Vonage](technical/platform.md) | Platform Architecture and Operations | candidate | Fallback masked call provider. |
| PROVIDER-16 | [Sinch](technical/platform.md) | Platform Architecture and Operations | candidate | Enterprise fallback. |
| PROVIDER-17 | [DigitalOcean](technical/platform.md) | Platform Architecture and Operations | selected-unverified | Active production hosting baseline. |
| PROVIDER-18 | [DigitalOcean Spaces or S3-compatible storage](technical/platform.md) | Platform Architecture and Operations | selected-unverified | Media, backup and export storage. |
| PROVIDER-19 | [WhoGoHost](technical/platform.md) | Platform Architecture and Operations | selected-unverified | Domain registrar for work2cash.ng. |
| PROVIDER-20 | [Firebase Analytics](technical/platform.md) | Platform Architecture and Operations | deferred | Basic mobile analytics. |
| RUNBOOK-01 | [Deployment](technical/platform.md) | Platform Architecture and Operations | operational-baseline | Deploy an approved artifact after checks and migration review. |
| RUNBOOK-02 | [Rollback](technical/platform.md) | Platform Architecture and Operations | operational-baseline | Freeze further rollout, preserve evidence and restore the last verified application artifact. |
| RUNBOOK-03 | [PostgreSQL backup](technical/platform.md) | Platform Architecture and Operations | operational-baseline | Create encrypted off-server backup, verify completion/checksum and record freshness. |
| RUNBOOK-04 | [PostgreSQL restore](technical/platform.md) | Platform Architecture and Operations | operational-baseline | Restore into an isolated target, validate schema and critical money/audit records, then obtain cutover authority. |
| RUNBOOK-05 | [Provider outage](technical/platform.md) | Platform Architecture and Operations | operational-baseline | Mark the provider degraded, preserve pending state, disable unsafe actions and activate only validated fallback. |
| RUNBOOK-06 | [Payment reconciliation](technical/platform.md) | Platform Architecture and Operations | operational-baseline | Compare provider events, Payment, ledger and escrow records by reference and request ID. |
| RUNBOOK-07 | [Queue failure or stalled jobs](technical/platform.md) | Platform Architecture and Operations | operational-baseline | Identify affected queue/job age, stop duplicate producers if necessary and replay only idempotent jobs. |
| RUNBOOK-08 | [Object-storage failure](technical/platform.md) | Platform Architecture and Operations | operational-baseline | Disable unsafe upload paths, retain metadata in retryable state and verify bucket/network/credentials. |
| RUNBOOK-09 | [DNS or certificate incident](technical/platform.md) | Platform Architecture and Operations | operational-baseline | Confirm ownership, current records, certificate status and blast radius before controlled correction. |
| RUNBOOK-10 | [Security incident](technical/platform.md) | Platform Architecture and Operations | operational-baseline | Contain access, preserve logs, rotate affected secrets and establish incident command. |
| RUNBOOK-11 | [Data-exposure incident](technical/platform.md) | Platform Architecture and Operations | operational-baseline | Stop further exposure, identify affected data/people, preserve evidence and follow notification/legal decision processes. |
| RUNBOOK-12 | [Capacity and cost review](technical/platform.md) | Platform Architecture and Operations | operational-baseline | Review utilization, queue age, provider usage and forecast before resizing or enabling paid features. |
| SCREEN-SHARED-01 | [Welcome / onboarding](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Introduces the two intents: get help or earn. |
| SCREEN-SHARED-02 | [Role choice](technical/screens.md) | Screen-to-Feature Reference | design-source-required | User chooses "I need help" or "I want to earn". |
| SCREEN-SHARED-03 | [Create account](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Full name, email, password, terms agreement, approved Google or Apple sign-in where available. |
| SCREEN-SHARED-04 | [Login / forgot password](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Email or phone login, recovery, reset flow. |
| SCREEN-SHARED-05 | [OTP verification](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Six-digit verification code. |
| SCREEN-SHARED-06 | [Verify identity](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Complete the accepted Smile ID NIN/BVN and biometric Tasker-verification path. |
| SCREEN-SHARED-07 | [Selfie capture](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Complete the accepted Smile ID NIN/BVN and biometric Tasker-verification path. |
| SCREEN-SHARED-08 | [ID upload](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Complete the accepted Smile ID NIN/BVN and biometric Tasker-verification path. |
| SCREEN-SHARED-09 | [Complete profile](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Phone number, address, state, user photo. |
| SCREEN-SHARED-10 | [Pricing rule](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Explains fair pricing and underpricing restriction. |
| SCREEN-SHARED-11 | [Home quick task](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Select one of the approved MVP categories: Home, Errands, Office or Support. |
| SCREEN-SHARED-12 | [Task details](technical/screens.md) | Screen-to-Feature Reference | design-source-required | User describes what needs to be done. |
| SCREEN-SHARED-13 | [Task checklist](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Specific sub-services such as sweeping, dish washing, laundry. |
| SCREEN-SHARED-14 | [Set pricing](technical/screens.md) | Screen-to-Feature Reference | design-source-required | User enters budget and sees platform recommended/minimum range. |
| SCREEN-SHARED-15 | [Task schedule](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Date, time, duration, urgency. |
| SCREEN-SHARED-16 | [Location](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Saved address or current location. |
| SCREEN-SHARED-17 | [Available taskers](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Nearby taskers with ETA, distance, rating, service fit. |
| SCREEN-SHARED-18 | [Booking summary](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Selected task, cost breakdown, secure payment note. |
| SCREEN-SHARED-19 | [Make payment](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Use cardless-first Paystack or Moniepoint options such as bank transfer, virtual account or USSD, with wallet where eligible. |
| SCREEN-SHARED-20 | [Payment success / receipt](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Payment received, receipt, QR/download. |
| SCREEN-SHARED-21 | [Task in progress](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Timer, task progress, chat, emergency support. |
| SCREEN-SHARED-22 | [Task complete / rating](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Owner confirms completion and rates tasker. |
| SCREEN-SHARED-23 | [Wallet and transactions](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Balance, funding, transaction history, pending/failed states. |
| SCREEN-SHARED-24 | [Messages, notifications, help](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Chat, task alerts, FAQs, support ticket, report issue. |
| SCREEN-SHARED-25 | [Complete Tasker profile](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Gender, DOB, phone, address, location, state, bank details. |
| SCREEN-SHARED-26 | [Select task](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Choose categories and sub-skills the tasker can perform. |
| SCREEN-SHARED-27 | [Availability](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Days available, working hours, maximum travel distance and preferred categories; auto-accept is excluded. |
| SCREEN-SHARED-28 | [Pricing info](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Minimum acceptable price and pricing guidance. |
| SCREEN-SHARED-29 | [Enable location](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Allow app to find nearby jobs. |
| SCREEN-SHARED-30 | [Task request](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Incoming job with owner, distance, task details, price, accept/reject. |
| SCREEN-SHARED-31 | [Accepted task / start journey](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Tasker starts movement to task owner. |
| SCREEN-SHARED-32 | [Arrived / start task](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Tasker marks arrival and begins work timer. |
| SCREEN-SHARED-33 | [Mark completed](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Tasker requests owner confirmation. |
| SCREEN-SHARED-34 | [Task completed](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Payment released after owner confirms. |
| SCREEN-SHARED-35 | [Wallet / earnings / withdraw](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Available balance, earned amount, withdrawal amount, fee, PIN. |
| SCREEN-SHARED-36 | [Rate task owner / ratings](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Two-sided marketplace reputation. |
| SCREEN-ADMIN-01 | [Dashboard overview](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Total users, active tasks, revenue, pending approvals, disputes. |
| SCREEN-ADMIN-02 | [User management](technical/screens.md) | Screen-to-Feature Reference | design-source-required | List, search, filter, view, suspend, ban users. |
| SCREEN-ADMIN-03 | [KYC verification](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Review selfie, ID, verification status, approve/reject. |
| SCREEN-ADMIN-04 | [Task management](technical/screens.md) | Screen-to-Feature Reference | design-source-required | All tasks by status, category, amount, owner, tasker. |
| SCREEN-ADMIN-05 | [Controlled force cancel](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Admin may force-cancel a task under policy; admin cannot select a replacement Tasker. |
| SCREEN-ADMIN-06 | [Wallet and escrow](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Held funds, wallet activity, task settlement state. |
| SCREEN-ADMIN-07 | [Withdrawals](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Approve/reject withdrawal requests. |
| SCREEN-ADMIN-08 | [Disputes and support](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Complaint details, evidence, admin decision, resolution tracking. |
| SCREEN-ADMIN-09 | [Category and pricing](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Create/edit task categories, services, recommended and minimum price. |
| SCREEN-ADMIN-10 | [Fraud and risk](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Risk alerts, suspicious behavior, top risk factors. |
| SCREEN-ADMIN-11 | [Roles and permissions](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Add admin, create role, permission matrix, 2FA. |
| SCREEN-ADMIN-12 | [Analytics and reports](technical/screens.md) | Screen-to-Feature Reference | design-source-required | Revenue, task trend, user growth, top services, reports. |

## Assurance and governance records

| ID | Record | Collection | Status | Summary |
| --- | --- | --- | --- | --- |
| DECISION-LEGACY-18 | [Notifications and Announcements](assurance/decisions-governance.md) | Decisions and Governance | accepted | Approved for MVP and added to admin catalogue. |
| DECISION-LEGACY-19 | [Ratings and Reviews Management](assurance/decisions-governance.md) | Decisions and Governance | accepted | Approved for MVP and added to admin catalogue. |
| DECISION-LEGACY-20 | [Basic Analytics and Reports](assurance/decisions-governance.md) | Decisions and Governance | accepted | Approved for MVP. Advanced analytics remains deferred. |
| DECISION-LEGACY-21 | [Receipt and Transaction Review](assurance/decisions-governance.md) | Decisions and Governance | accepted | Approved as its own MVP admin flow. |
| DECISION-LEGACY-22 | [Controlled Force Cancel Task](assurance/decisions-governance.md) | Decisions and Governance | accepted | Approved inside Task Operations Monitoring with elevated permission, reason, impact preview and audit. |
| DECISION-LEGACY-23 | [Admin Reassign Task](assurance/decisions-governance.md) | Decisions and Governance | accepted | Rejected. Admin cannot reassign under any condition. Replacement happens through Tasker cancellation or Task Owner rejection rules. |
| DECISION-LEGACY-24 | [Request Re-Verification](assurance/decisions-governance.md) | Decisions and Governance | accepted | Approved inside KYC review. |
| DECISION-LEGACY-25 | [Category Disable/Archive Rules](assurance/decisions-governance.md) | Decisions and Governance | accepted | Approved. Hard delete only for unused drafts. |
| DECISION-LEGACY-01 | [Main architecture ETA guard corrected.](assurance/decisions-governance.md) | Decisions and Governance | accepted | Main architecture now uses the ETA Cost Guard: 5-minute guard plus next 10% total-journey milestone, then reset timer/milestone after refresh. |
| DECISION-LEGACY-02 | [Main architecture legal publishing corrected.](assurance/decisions-governance.md) | Decisions and Governance | accepted | Main architecture now points to the combined legal pack at Legal & User-Facing Documents Pack v1. |
| DECISION-LEGACY-03 | [Main architecture documentation governance added.](assurance/decisions-governance.md) | Decisions and Governance | accepted | Main architecture now lists the team-facing resource paths for generated and planned documents. |
| DECISION-LEGACY-04 | [Production infrastructure baseline corrected.](assurance/decisions-governance.md) | Decisions and Governance | accepted | Main architecture now uses DigitalOcean as the active production baseline while Contabo remains staging. |
| DECISION-LEGACY-05 | [Figma category names differ from accepted category names.](assurance/decisions-governance.md) | Decisions and Governance | accepted | Treat Figma labels as visual references only. Product copy and admin catalog should use Home, Errands, Office, Support. |
| DECISION-LEGACY-26 | [Payment](assurance/decisions-governance.md) | Decisions and Governance | accepted-propagation-open | Accepted project direction is cardless Paystack + Moniepoint using transfer/USSD/redirect/status flows. |
| DECISION-LEGACY-27 | [KYC](assurance/decisions-governance.md) | Decisions and Governance | accepted | Accepted direction is Smile ID NIN/BVN with biometric match. Admin may still need evidence/manual review screens. |
| DECISION-LEGACY-28 | [Task Categories](assurance/decisions-governance.md) | Decisions and Governance | accepted-propagation-open | Accepted categories are Home, Errands, Office, Support. |
| DECISION-LEGACY-29 | [Social Auth](assurance/decisions-governance.md) | Decisions and Governance | accepted | Google and Apple are approved for MVP. Facebook is excluded. |
| DECISION-LEGACY-30 | [Analytics](assurance/decisions-governance.md) | Decisions and Governance | accepted | Basic operational reports are included in MVP. Advanced analytics remains deferred. |
| DECISION-DOC-01 | [Execution-plan granularity](assurance/decisions-governance.md) | Decisions and Governance | accepted | Junior-developer execution plans remain team-week packs with Day 1 through Day 5 inside each pack. |
| DECISION-DOC-02 | [Technical-reference granularity](assurance/decisions-governance.md) | Decisions and Governance | accepted | Phase 4 remains five human pages and four focused agent packs; individual records are anchors, not standalone documents. |
| DECISION-DOC-03 | [Assurance-reference granularity](assurance/decisions-governance.md) | Decisions and Governance | accepted | Phase 5 remains four human pages and three focused agent packs; tests, clauses and decisions are anchored records. |
| DECISION-LEGACY-06 | [Password Recovery](assurance/decisions-governance.md) | Decisions and Governance | accepted | Approved for MVP and added to mobile catalogue. |
| DECISION-LEGACY-07 | [Google / Apple Social Authentication](assurance/decisions-governance.md) | Decisions and Governance | accepted | Google and Apple approved for MVP. Facebook excluded. |
| DECISION-LEGACY-08 | [Profile and Settings Management](assurance/decisions-governance.md) | Decisions and Governance | accepted | Approved for MVP and added to mobile catalogue. |
| DECISION-LEGACY-09 | [Security and Device Management](assurance/decisions-governance.md) | Decisions and Governance | accepted | Approved for MVP. Sensitive actions use PIN; OTP is for recovery/reset. |
| DECISION-LEGACY-10 | [Notification Center and Preferences](assurance/decisions-governance.md) | Decisions and Governance | accepted | Approved for MVP with FCM primary and Termii SMS fallback for critical messages. |
| DECISION-LEGACY-11 | [Tasker Availability and Work Preferences](assurance/decisions-governance.md) | Decisions and Governance | accepted | Approved for MVP. Auto Accept is deferred. |
| DECISION-LEGACY-12 | [Payout Account Setup](assurance/decisions-governance.md) | Decisions and Governance | accepted | Approved for MVP and connected to withdrawal flow. |
| DECISION-LEGACY-13 | [Ratings and Reviews](assurance/decisions-governance.md) | Decisions and Governance | accepted | Approved for MVP and connected to favorites/trust/admin moderation. |
| DECISION-LEGACY-14 | [Emergency Support](assurance/decisions-governance.md) | Decisions and Governance | accepted | Approved for MVP as priority support branch. |
| DECISION-LEGACY-15 | [Rebook / Repeat Task](assurance/decisions-governance.md) | Decisions and Governance | accepted | Approved for MVP. Creates a new task and preserves old task immutability. |
| DECISION-LEGACY-16 | [Cardless Payment UI](assurance/decisions-governance.md) | Decisions and Governance | accepted-propagation-open | Figma still includes Add Bank Card / card-linked-to-BVN wording. |
| DECISION-LEGACY-17 | [KYC UI](assurance/decisions-governance.md) | Decisions and Governance | accepted-propagation-open | Figma still shows generic upload ID/photo screens. |
| QUESTION-01 | [Legal retention schedule](assurance/decisions-governance.md) | Decisions and Governance | open | What exact retention, deletion, anonymization and exception periods apply to each data class? |
| QUESTION-02 | [Infrastructure recovery objectives](assurance/decisions-governance.md) | Decisions and Governance | open | What RPO/RTO, region, network and failover design receives formal approval? |
| QUESTION-03 | [Provider production approval](assurance/decisions-governance.md) | Decisions and Governance | open | Which providers have current official pricing, sandbox proof, contracts/support terms and production approval? |
| QUESTION-04 | [Design source of record](assurance/decisions-governance.md) | Decisions and Governance | open | Which Figma file/version is the reviewed implementation source for every MVP surface? |
| QUESTION-05 | [Provisional DTO/schema closure](assurance/decisions-governance.md) | Decisions and Governance | open | Which Phase 4 contract and model gaps must close before the first integration stage begins? |
| QUESTION-06 | [Active delivery context](assurance/decisions-governance.md) | Decisions and Governance | open | Which delivery stage, team week and day is active for implementation? |
| DECISION-PRODUCT-01 | [Authentication providers](assurance/decisions-governance.md) | Decisions and Governance | accepted | Google and Apple are allowed for MVP where implemented; Facebook login is excluded. |
| DECISION-PRODUCT-02 | [Tasker KYC path](assurance/decisions-governance.md) | Decisions and Governance | accepted | Tasker KYC uses Smile ID NIN/BVN and biometric verification. Generic document upload is not the primary MVP path. |
| DECISION-PRODUCT-03 | [MVP task categories](assurance/decisions-governance.md) | Decisions and Governance | accepted | Use Home, Errands, Office and Support. |
| DECISION-PRODUCT-04 | [Payment experience](assurance/decisions-governance.md) | Decisions and Governance | accepted | Use cardless-first Paystack and Moniepoint flows; card-entry-first UX is excluded. |
| DECISION-PRODUCT-05 | [Tasker acceptance](assurance/decisions-governance.md) | Decisions and Governance | accepted | Taskers do not auto-accept tasks. |
| DECISION-PRODUCT-06 | [Admin task intervention](assurance/decisions-governance.md) | Decisions and Governance | accepted | Admin may force-cancel under policy but cannot reassign or select a replacement Tasker. |
| RISK-01 | [Incomplete contract schemas](assurance/decisions-governance.md) | Decisions and Governance | open | Provisional request/response DTO gaps can block consumer/backend integration. |
| RISK-02 | [Provider capability or pricing drift](assurance/decisions-governance.md) | Decisions and Governance | open | Unverified provider terms can cause failed launch behavior or uncontrolled cost. |
| RISK-03 | [Legal wording not approved](assurance/decisions-governance.md) | Decisions and Governance | open | Draft policy may not meet legal, privacy or consumer-protection obligations. |
| RISK-04 | [Backup without restore evidence](assurance/decisions-governance.md) | Decisions and Governance | open | A successful backup job may still be unusable during recovery. |
| RISK-05 | [Sensitive-data exposure](assurance/decisions-governance.md) | Decisions and Governance | open | KYC, location, phone, media or payment information may leak through UI, logs or tooling. |
| RISK-06 | [Design/source divergence](assurance/decisions-governance.md) | Decisions and Governance | open | Figma or UI copy may reintroduce excluded payment, KYC, category, auth or reassignment behavior. |
| DECISION-TECH-01 | [User mode field](assurance/decisions-governance.md) | Decisions and Governance | accepted | Use mode. The activeMode field is forbidden. |
| DECISION-TECH-02 | [Direct offers](assurance/decisions-governance.md) | Decisions and Governance | accepted | Direct offers use REST and notifications, not sockets. |
| DECISION-TECH-03 | [Dispute interaction](assurance/decisions-governance.md) | Decisions and Governance | accepted | Disputes use structured reports and review, not live chat. |
| DECISION-TECH-04 | [Payment truth](assurance/decisions-governance.md) | Decisions and Governance | accepted | Frontend redirects never prove final payment; verified backend/provider evidence controls state. |
| CLAUSE-TOS-01 | [Terms of Service — Purpose and Scope](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | These Terms govern the use of Work2Cash, a Nigeria-focused platform that connects Task Owners with nearby Taskers for approved short-duration services. |
| CLAUSE-TOS-02 | [Terms of Service — User Roles](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | A single account may operate as a Task Owner and as a Tasker. |
| CLAUSE-TOS-03 | [Terms of Service — Account Responsibilities](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Users must provide accurate account, contact, task, payment, and KYC information. |
| CLAUSE-TOS-04 | [Terms of Service — Task Marketplace Rules](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Task Owners may create tasks from approved task categories and service types. |
| CLAUSE-TOS-05 | [Terms of Service — Payments, Escrow, and Wallets](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Task payments are processed through supported Nigerian payment providers, including Paystack and Moniepoint. |
| CLAUSE-TOS-06 | [Terms of Service — Commission and Earnings](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | The default platform commission is 20 percent of completed task value. |
| CLAUSE-TOS-07 | [Terms of Service — Warnings, Strikes, and Suspension](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Three warnings convert to one strike. |
| CLAUSE-TOS-08 | [Terms of Service — Prohibited Conduct](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Users must not request illegal, unsafe, adult, drug-related, weapon-related, violent, fraudulent, or off-platform activities. |
| CLAUSE-TOS-09 | [Terms of Service — Disputes and Support](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Task-linked reports and disputes are handled through structured options, evidence upload, admin review, and resolution actions. |
| CLAUSE-TOS-10 | [Terms of Service — Changes and Legal Review](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | These draft Terms are intended as a product and architecture policy baseline. |
| CLAUSE-PP-01 | [Privacy Policy — Privacy Position](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Work2Cash is designed to follow privacy-by-design and data-minimization practices for the Nigerian market. |
| CLAUSE-PP-02 | [Privacy Policy — Data We Collect](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Account data: name, phone number, email address, profile photo, account status, referral code, saved addresses, device records, and session records. |
| CLAUSE-PP-03 | [Privacy Policy — Why We Use Data](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | To create and manage user accounts. |
| CLAUSE-PP-04 | [Privacy Policy — Sensitive Data Handling](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | KYC and biometric verification data must be restricted to authorized workflows and authorized administrators. |
| CLAUSE-PP-05 | [Privacy Policy — Location Data](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Task Owners may use GPS or manual address entry to provide task location. |
| CLAUSE-PP-06 | [Privacy Policy — Third-Party Providers](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Work2Cash may share required data with providers that support platform operations, including Paystack, Moniepoint, Smile ID, Termii, Firebase Cloud Messaging, Firebase Analytics, Sentry, Google Maps, Shorebird, and storage/hosting providers. |
| CLAUSE-PP-07 | [Privacy Policy — Retention Rules](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | User profile data is retained while an account is active and may be deleted or anonymized after closure unless retention is required. |
| CLAUSE-PP-08 | [Privacy Policy — User Rights and Requests](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Users should be able to request access to account data, correction of profile data, account deletion or deactivation, support review of sensitive decisions, and privacy/security support. |
| CLAUSE-PP-09 | [Privacy Policy — Security Practices](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Admin access requires TOTP 2FA. |
| CLAUSE-TA-01 | [Tasker Agreement — Tasker Activation](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | A user becomes eligible to operate as a Tasker only after creating a Tasker profile, selecting supported skills/categories, completing required KYC, and receiving approved/active status. |
| CLAUSE-TA-02 | [Tasker Agreement — Tasker Responsibilities](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Accept only tasks the Tasker can reasonably complete safely, honestly, and within the expected scope. |
| CLAUSE-TA-03 | [Tasker Agreement — Offer Handling](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Public task offers may be sent based on location, availability, category match, and platform rules. |
| CLAUSE-TA-04 | [Tasker Agreement — Earnings and Withdrawals](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Tasker earnings become available only after escrow release or eligible admin resolution. |
| CLAUSE-TA-05 | [Tasker Agreement — Tasker Warnings and Strikes](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Tasker cancellation after accepting a task creates one warning unless a valid safety exception is accepted. |
| CLAUSE-CRP-01 | [Cancellation & Refund Policy — Cancellation Rules](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Task Owner cancels before Tasker accepts: no penalty. |
| CLAUSE-CRP-02 | [Cancellation & Refund Policy — Task Completion Refusal](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | If a task is completed but the Task Owner refuses approval, the Tasker may raise a task-linked report/dispute. |
| CLAUSE-CRP-03 | [Cancellation & Refund Policy — Refund Position](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | All funded amounts are expected to be used on tasks. |
| CLAUSE-CRP-04 | [Cancellation & Refund Policy — Admin Override Position](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | No arbitrary admin override is allowed in v1. |
| CLAUSE-CSG-01 | [Community & Safety Guidelines — Expected Conduct](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Users must treat each other respectfully and must not harass, threaten, insult, exploit, or intimidate others. |
| CLAUSE-CSG-02 | [Community & Safety Guidelines — Prohibited Task Types](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Illegal activities. |
| CLAUSE-CSG-03 | [Community & Safety Guidelines — Reports and Disputes](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Reports are treated as structured dispute or safety reports. |
| CLAUSE-CSG-04 | [Community & Safety Guidelines — Blocking](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Task Owners can block Taskers after a task or support case. |
| CLAUSE-CSG-05 | [Community & Safety Guidelines — Automatic Risk Flags](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Multiple failed payment attempts, repeated cancellations, repeated no-shows, repeated disputes, repeated complaints, suspicious withdrawals, device/account abuse, location mismatch, KYC mismatch, and off-platform payment attempts may trigger risk review. |
| CLAUSE-CSG-06 | [Community & Safety Guidelines — Emergency Support](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | MVP should include an emergency support escalation path. |
| CLAUSE-KCN-01 | [KYC Consent Notice — Why KYC Is Required](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | KYC is required to protect Task Owners, Taskers, the platform, and payment flows from identity fraud, impersonation, and unsafe activity. |
| CLAUSE-KCN-02 | [KYC Consent Notice — Information Used for Verification](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | KYC may require NIN or BVN submission, biometric face capture, profile information, device information, and verification results from the KYC provider. |
| CLAUSE-KCN-03 | [KYC Consent Notice — Consent and Review](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | By starting KYC, the user consents to Work2Cash processing and sharing required identity verification data with the KYC provider. |
| CLAUSE-KCN-04 | [KYC Consent Notice — KYC Security](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | KYC data must be restricted, role-protected, and audit-logged when accessed by admins. |
| CLAUSE-LPN-01 | [Location Permission Notice — Service Coverage](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Work2Cash supports nationwide rollout across Nigeria. |
| CLAUSE-LPN-02 | [Location Permission Notice — Task Owner Location](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Task Owners may provide task location using GPS or manual address entry. |
| CLAUSE-LPN-03 | [Location Permission Notice — Tasker Location](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Tasker location is required while available or active. |
| CLAUSE-LPN-04 | [Location Permission Notice — Live Tracking](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Live tracking starts from accepted/en-route state and stops when the task is completed, cancelled, disputed, or expired. |
| CLAUSE-PWT-01 | [Payment & Wallet Terms — Payment Methods](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Work2Cash uses Paystack and Moniepoint as launch payment providers. |
| CLAUSE-PWT-02 | [Payment & Wallet Terms — Wallet Separation](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Each user may have a Task Owner wallet and a Tasker wallet. |
| CLAUSE-PWT-03 | [Payment & Wallet Terms — Escrow Rules](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Task funds are held in escrow after successful payment. |
| CLAUSE-PWT-04 | [Payment & Wallet Terms — Fees and Commission](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Task Owner pays payment processing fees separately. |
| CLAUSE-PWT-05 | [Payment & Wallet Terms — Referrals](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Referral reward is issued as wallet credit. |
| CLAUSE-PWT-06 | [Payment & Wallet Terms — Ledger and Reconciliation](assurance/legal-compliance.md) | Legal and Compliance | legal-review-required | Wallet balance must not change without a wallet transaction ledger record. |
| QA-AF-01 | [AF-01 — Admin Entry Login and TOTP](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Admin Entry Login and TOTP behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-02 | [AF-02 — Admin Dashboard Overview](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Admin Dashboard Overview behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-03 | [AF-03 — User Management](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved User Management behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-04 | [AF-04 — Tasker and KYC Review](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Tasker and KYC Review behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-05 | [AF-05 — Task Operations Monitoring](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Task Operations Monitoring behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-06 | [AF-06 — Task Report and Dispute Resolution](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Task Report and Dispute Resolution behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-07 | [AF-07 — Support Live Chat Operations](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Support Live Chat Operations behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-08 | [AF-08 — Finance: Payments, Escrow and Reconciliation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Finance: Payments, Escrow and Reconciliation behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-09 | [AF-09 — Withdrawal and Payout Batch Operations](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Withdrawal and Payout Batch Operations behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-10 | [AF-10 — Wallet, Refund and Excess Funding Support](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Wallet, Refund and Excess Funding Support behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-11 | [AF-11 — Task Catalog Management](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Task Catalog Management behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-12 | [AF-12 — Service Coverage Configuration](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Service Coverage Configuration behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-13 | [AF-13 — Task Media Moderation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Task Media Moderation behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-14 | [AF-14 — Risk, Trust, Warning and Strike Review](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Risk, Trust, Warning and Strike Review behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-15 | [AF-15 — Referral Management](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Referral Management behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-16 | [AF-16 — Platform Config and Remote Config](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Platform Config and Remote Config behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-17 | [AF-17 — Admin Users, Roles and Permissions](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Admin Users, Roles and Permissions behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-18 | [AF-18 — Audit Log Review](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Audit Log Review behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-19 | [AF-19 — Use Case Health and Background Job Monitoring](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Use Case Health and Background Job Monitoring behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-20 | [AF-20 — Monitoring, Backup and Incident Readiness](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Monitoring, Backup and Incident Readiness behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-21 | [AF-21 — Notifications and Announcements](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Notifications and Announcements behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-22 | [AF-22 — Ratings and Reviews Management](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Ratings and Reviews Management behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-23 | [AF-23 — Basic Analytics and Reports](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Basic Analytics and Reports behavior without relying on hidden context or unapproved shortcuts. |
| QA-AF-24 | [AF-24 — Receipt and Transaction Review](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Receipt and Transaction Review behavior without relying on hidden context or unapproved shortcuts. |
| QA-CONTRACT-01 | [Admin operations contract suite](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify 32 admin operations contract records against the implementation and generated OpenAPI baseline. |
| QA-CONTRACT-02 | [Catalog and coverage contract suite](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify 6 catalog and coverage contract records against the implementation and generated OpenAPI baseline. |
| QA-CONTRACT-03 | [Communication and realtime contract suite](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify 15 communication and realtime contract records against the implementation and generated OpenAPI baseline. |
| QA-CONTRACT-04 | [Communication and support contract suite](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify 9 communication and support contract records against the implementation and generated OpenAPI baseline. |
| QA-CONTRACT-05 | [Identity and sessions contract suite](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify 26 identity and sessions contract records against the implementation and generated OpenAPI baseline. |
| QA-CONTRACT-06 | [Matching contract suite](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify 7 matching contract records against the implementation and generated OpenAPI baseline. |
| QA-CONTRACT-07 | [Payments and escrow contract suite](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify 3 payments and escrow contract records against the implementation and generated OpenAPI baseline. |
| QA-CONTRACT-08 | [Providers, webhooks, queues and jobs contract suite](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify 12 providers, webhooks, queues and jobs contract records against the implementation and generated OpenAPI baseline. |
| QA-CONTRACT-09 | [Referral Contract Group contract suite](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify 2 referral contract group contract records against the implementation and generated OpenAPI baseline. |
| QA-CONTRACT-10 | [Reports and risk contract suite](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify 8 reports and risk contract records against the implementation and generated OpenAPI baseline. |
| QA-CONTRACT-11 | [System operations contract suite](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify 4 system operations contract records against the implementation and generated OpenAPI baseline. |
| QA-CONTRACT-12 | [Task creation contract suite](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify 5 task creation contract records against the implementation and generated OpenAPI baseline. |
| QA-CONTRACT-13 | [Task execution contract suite](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify 14 task execution contract records against the implementation and generated OpenAPI baseline. |
| QA-CONTRACT-14 | [Task Owner contract suite](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify 3 task owner contract records against the implementation and generated OpenAPI baseline. |
| QA-CONTRACT-15 | [Tasker contract suite](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify 4 tasker contract records against the implementation and generated OpenAPI baseline. |
| QA-CONTRACT-16 | [Tasker activation and KYC contract suite](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify 11 tasker activation and kyc contract records against the implementation and generated OpenAPI baseline. |
| QA-CONTRACT-17 | [Wallets and payouts contract suite](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify 9 wallets and payouts contract records against the implementation and generated OpenAPI baseline. |
| QA-REC-02 | [PostgreSQL backup and restore](assurance/qa-release.md) | QA and Release Assurance | not-run | Produce an encrypted off-server backup, restore into isolation and verify schema plus critical finance/audit records. |
| QA-REC-03 | [Queue retry and dead-letter recovery](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify idempotent retry, terminal failure evidence, alerting and controlled replay for critical workers. |
| QA-MF-01 | [MF-01 — First App Launch and Entry Decision](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved First App Launch and Entry Decision behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-02 | [MF-02 — Registration](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Registration behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-03 | [MF-03 — Login / Session Recovery](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Login / Session Recovery behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-04 | [MF-04 — Task Owner Home](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Task Owner Home behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-05 | [MF-05 — Tasker Activation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Tasker Activation behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-06 | [MF-06 — Task Owner Create and Fund Task](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Task Owner Create and Fund Task behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-07 | [MF-07 — Public Discovery and Tasker Interest](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Public Discovery and Tasker Interest behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-08 | [MF-08 — Direct Offer to Favorite Tasker](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Direct Offer to Favorite Tasker behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-09 | [MF-09 — Tasker Browse and Accept Task](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Tasker Browse and Accept Task behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-10 | [MF-10 — Active Task Execution](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Active Task Execution behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-11 | [MF-11 — Task Owner Rejection](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Task Owner Rejection behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-12 | [MF-12 — Cancellation / No-Show](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Cancellation / No-Show behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-13 | [MF-13 — Tasker Withdrawal](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Tasker Withdrawal behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-14 | [MF-14 — Completion and Settlement](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Completion and Settlement behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-15 | [MF-15 — Favorites](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Favorites behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-16 | [MF-16 — Support Live Chat](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Support Live Chat behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-17 | [MF-17 — Referral](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Referral behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-18 | [MF-18 — Profile and Settings Management](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Profile and Settings Management behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-19 | [MF-19 — Security and Device Management](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Security and Device Management behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-20 | [MF-20 — Notification Center and Preferences](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Notification Center and Preferences behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-21 | [MF-21 — Tasker Availability and Work Preferences](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Tasker Availability and Work Preferences behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-22 | [MF-22 — Ratings and Reviews](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Ratings and Reviews behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-23 | [MF-23 — Emergency Support](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Emergency Support behavior without relying on hidden context or unapproved shortcuts. |
| QA-MF-24 | [MF-24 — Rebook / Repeat Task](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the approved Rebook / Repeat Task behavior without relying on hidden context or unapproved shortcuts. |
| QA-PERF-01 | [Capacity, latency and cost guards](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify API/socket targets, database/Valkey thresholds, queue age, paid provider budgets and no paid polling loops. |
| QA-PROVIDER-01 | [Paystack validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the Paystack integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-PROVIDER-02 | [Moniepoint validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the Moniepoint integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-PROVIDER-03 | [Paystack Transfers validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the Paystack Transfers integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-PROVIDER-04 | [Moniepoint validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the Moniepoint integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-PROVIDER-05 | [Smile ID validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the Smile ID integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-PROVIDER-06 | [Google Maps Platform validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the Google Maps Platform integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-PROVIDER-07 | [Firebase Cloud Messaging validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the Firebase Cloud Messaging integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-PROVIDER-08 | [Termii validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the Termii integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-PROVIDER-09 | [Resend validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the Resend integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-PROVIDER-10 | [SendGrid validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the SendGrid integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-PROVIDER-11 | [Sentry validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the Sentry integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-PROVIDER-12 | [Shorebird validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the Shorebird integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-PROVIDER-13 | [Infobip validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the Infobip integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-PROVIDER-14 | [Africa's Talking validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the Africa's Talking integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-PROVIDER-15 | [Vonage validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the Vonage integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-PROVIDER-16 | [Sinch validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the Sinch integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-PROVIDER-17 | [DigitalOcean validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the DigitalOcean integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-PROVIDER-18 | [DigitalOcean Spaces or S3-compatible storage validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the DigitalOcean Spaces or S3-compatible storage integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-PROVIDER-19 | [WhoGoHost validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the WhoGoHost integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-PROVIDER-20 | [Firebase Analytics validation](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify the Firebase Analytics integration, cost guard, failure behavior and operational ownership before it can be production-enabled. |
| QA-REC-01 | [Socket reconnect and offline recovery](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify reconnect, room reauthorization, REST reconciliation, missing-message recovery and safe offline states. |
| RELEASE-00 | [Gate 0 — Documentation Baseline](assurance/qa-release.md) | QA and Release Assurance | not-run | All execution documents are published, guarded, linked from the main architecture document and accepted as implementation baseline. |
| RELEASE-01 | [Gate 1 — Feature Complete](assurance/qa-release.md) | QA and Release Assurance | not-run | Mobile, admin and backend have completed planned MVP flows with no known missing core flow. |
| RELEASE-02 | [Gate 2 — Integration Complete](assurance/qa-release.md) | QA and Release Assurance | not-run | Mobile, admin, backend, sockets, queues, providers, database and object storage work together on staging. |
| RELEASE-03 | [Gate 3 — Regression Complete](assurance/qa-release.md) | QA and Release Assurance | not-run | Testing Week 1 regression passes for auth, KYC, task, payment, matching, finance, reports, support and admin operations. |
| RELEASE-04 | [Gate 4 — Operational Readiness](assurance/qa-release.md) | QA and Release Assurance | not-run | Backups, restore, monitoring, alerting, runbooks, support process, payout batch process and provider support paths are ready. |
| RELEASE-05 | [Gate 5 — Security And Privacy Readiness](assurance/qa-release.md) | QA and Release Assurance | not-run | Sensitive data, PIN, TOTP, RBAC, webhooks, media permissions, phone masking and logs pass review. |
| RELEASE-06 | [Gate 6 — Release Candidate Approval](assurance/qa-release.md) | QA and Release Assurance | not-run | Final mobile/admin/backend release candidates are tested, tagged and deployable. |
| RELEASE-07 | [Gate 7 — Go/No-Go Approval](assurance/qa-release.md) | QA and Release Assurance | not-run | Final approval is recorded with blocker list, accepted risks, rollback plan and launch owner. |
| QA-SEC-01 | [Authentication, session and RBAC](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify OTP limits, refresh/logout, PIN recovery, Admin TOTP, exact permissions, denial states and audit records. |
| QA-SEC-02 | [Sensitive-data exposure](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify KYC, exact address, full media, phone, payment, provider and secret data are minimized and permission-gated in UI, APIs, logs, analytics and errors. |
| QA-SEC-03 | [Webhook and idempotency security](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify raw-body signatures, replay protection, duplicate events, conflicting idempotency keys and transactional side effects. |
| QA-SEC-04 | [Media authorization and retention](assurance/qa-release.md) | QA and Release Assurance | not-run | Verify signed access, actor/state permissions, upload limits, moderation, deletion/retention and non-public storage. |
| QA-UAT-01 | [Task Owner, Tasker and Admin UAT](assurance/qa-release.md) | QA and Release Assurance | not-run | Run complete role-based journeys with named representatives, record product gaps separately from defects and capture acceptance decisions. |

## Common terms

| ID | Record | Collection | Status | Summary |
| --- | --- | --- | --- | --- |
| TERM-MAIN-FLOW | [Main flow](../../index.html#glossary) | Common terms | current | A complete user or Admin journey with a clear beginning, outcome and next destination. |
| TERM-SUBFLOW | [Subflow](../../index.html#glossary) | Common terms | current | Reusable behavior used inside one or more main flows, such as OTP, media upload or permission recovery. |
| TERM-CONTRACT | [Contract](../../index.html#glossary) | Common terms | current | The agreed request, response, event or error shape that connected systems must follow. |
| TERM-OPENAPI | [OpenAPI](../../index.html#glossary) | Common terms | current | A machine-readable description of the current HTTP API baseline; provisional gaps still block invention. |
| TERM-DATA-MODEL | [Data model](../../index.html#glossary) | Common terms | current | A business record, its fields, ownership, relationships, privacy rules and persistence readiness. |
| TERM-PROVIDER | [Provider](../../index.html#glossary) | Common terms | current | An external service such as payments, maps, identity verification, messaging or monitoring. |
| TERM-BUILD-PLAN | [Build plan](../../index.html#glossary) | Common terms | current | The approved delivery order for a team, separated into weeks and daily working outcomes. |
| TERM-WEEKLY-PACK | [Weekly pack](../../index.html#glossary) | Common terms | current | One team-specific Markdown file containing Day 1 through Day 5 and the agent prompt for each day. |
| TERM-RELEASE-GATE | [Release gate](../../index.html#glossary) | Common terms | current | A required evidence checkpoint that must pass before an authorized Go/No-Go decision. |
| TERM-CANONICAL-SOURCE | [Canonical source](../../index.html#glossary) | Common terms | current | The file that must be edited because it controls its generated outputs. |
| TERM-GENERATED-OUTPUT | [Generated output](../../index.html#glossary) | Common terms | current | A reproducible reading or agent file that inherits authority from its canonical source and must not be edited directly. |
| TERM-PROVISIONAL | [Provisional](../../index.html#glossary) | Common terms | current | Usable for review and planning but not permission to invent unresolved behavior, schema or policy. |
| TERM-EVIDENCE | [Evidence](../../index.html#glossary) | Common terms | current | A test result, reviewed artifact, trace, screenshot, log or approval that proves a requirement or gate. |
| TERM-AUTHORITY | [Authority](../../index.html#glossary) | Common terms | current | The approved source or qualified role that controls a decision when documents differ. |

## Final context rule

This inventory helps an agent locate the controlling focused source. It does
not make provisional records approved, mark tasks or tests complete, make legal
clauses effective, close risks or authorize release.
