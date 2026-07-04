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
