# Legal & User-Facing Documents Pack v1

> AI-agent Markdown equivalent of `legal_user_facing_documents_pack_v1.html`.
>
> Human-readable HTML source: `.Legal & User-Facing Documents Pack v1`.
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
