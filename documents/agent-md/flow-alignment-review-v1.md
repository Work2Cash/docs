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
