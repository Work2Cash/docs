---
id: TECH-SCREENS-001
title: Screen-to-Feature Reference
type: technical-reference-agent-pack
audience: Product, Design, Mobile, Admin, Backend, QA and AI agents
owner: Product Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, Backend Lead, QA
status: in-review
version: 1.0
last_reviewed: 2026-07-17
authority: Approved standalone flows and accepted product decisions
generated_from: content/technical/screens.json
do_not_edit: true
---

# Screen-to-Feature Reference

> Generated focused agent pack. Edit `content/technical/screens.json`, then run `node scripts/generate-technical-docs.js`.

## Purpose

A corrected, searchable map of shared, Task Owner, Tasker and Admin screens. Each record states purpose, dependencies, safety rules and unresolved design evidence.

## How to use this pack

Use only the record required by the assigned flow or daily task. A named gap blocks that portion of implementation. Do not infer missing paths, fields, provider behavior or product rules from adjacent records.

## Authority notes

- Known Facebook, generic KYC upload, old category, card-first, auto-accept and admin-reassignment drift is corrected.
- Missing Figma version and screen-transition evidence remains visible as a design-review gap.

## Shared rules

- The approved flow controls behavior; a visual mockup cannot silently change product rules.
- Use Home, Errands, Office and Support as MVP categories.
- Use the Smile ID NIN/BVN and biometric path for Tasker KYC.
- Payments are cardless-first through Paystack and Moniepoint; redirects do not prove payment.
- Taskers do not auto-accept and Admin cannot reassign tasks.

---

## SCREEN-SHARED-01 — Welcome / onboarding

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Introduces the two intents: get help or earn.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Introduces the two intents: get help or earn. |
| Backend/product dependency | Store onboarding intent without splitting the user model. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- MVP
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Store onboarding intent without splitting the user model.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-02 — Role choice

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

User chooses "I need help" or "I want to earn".

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | User chooses "I need help" or "I want to earn". |
| Backend/product dependency | Persist selected app mode and route the user to the correct flow. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- MVP
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Persist selected app mode and route the user to the correct flow.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-03 — Create account

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Full name, email, password, terms agreement, approved Google or Apple sign-in where available.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Full name, email, password, terms agreement, approved Google or Apple sign-in where available. |
| Backend/product dependency | Registration, password hashing, social auth adapters, terms audit. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- MVP Facebook login is excluded.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Registration, password hashing, social auth adapters, terms audit.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-04 — Login / forgot password

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Email or phone login, recovery, reset flow.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Email or phone login, recovery, reset flow. |
| Backend/product dependency | Auth sessions, refresh tokens, OTP reset, resend limits. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- MVP
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Auth sessions, refresh tokens, OTP reset, resend limits.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-05 — OTP verification

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Six-digit verification code.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Six-digit verification code. |
| Backend/product dependency | OTP generation, expiry, retry limits, anti-spam guard. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- MVP
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- OTP generation, expiry, retry limits, anti-spam guard.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-06 — Verify identity

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Complete the accepted Smile ID NIN/BVN and biometric Tasker-verification path.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Complete the accepted Smile ID NIN/BVN and biometric Tasker-verification path. |
| Backend/product dependency | KYC verification and attempt records, Smile ID adapter, consent, safe evidence references and status tracking. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Generic document upload is not the primary MVP identity path.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- KYC verification and attempt records, Smile ID adapter, consent, safe evidence references and status tracking.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-07 — Selfie capture

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Complete the accepted Smile ID NIN/BVN and biometric Tasker-verification path.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Complete the accepted Smile ID NIN/BVN and biometric Tasker-verification path. |
| Backend/product dependency | KYC verification and attempt records, Smile ID adapter, consent, safe evidence references and status tracking. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Generic document upload is not the primary MVP identity path.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- KYC verification and attempt records, Smile ID adapter, consent, safe evidence references and status tracking.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-08 — ID upload

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Complete the accepted Smile ID NIN/BVN and biometric Tasker-verification path.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Complete the accepted Smile ID NIN/BVN and biometric Tasker-verification path. |
| Backend/product dependency | KYC verification and attempt records, Smile ID adapter, consent, safe evidence references and status tracking. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Generic document upload is not the primary MVP identity path.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- KYC verification and attempt records, Smile ID adapter, consent, safe evidence references and status tracking.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-09 — Complete profile

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Phone number, address, state, user photo.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Phone number, address, state, user photo. |
| Backend/product dependency | User profile fields, address relation, state validation. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- MVP
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- User profile fields, address relation, state validation.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-10 — Pricing rule

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Explains fair pricing and underpricing restriction.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Explains fair pricing and underpricing restriction. |
| Backend/product dependency | Category minimum price rules and recommended price ranges. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Trust
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Category minimum price rules and recommended price ranges.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-11 — Home quick task

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Select one of the approved MVP categories: Home, Errands, Office or Support.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Select one of the approved MVP categories: Home, Errands, Office or Support. |
| Backend/product dependency | TaskCategory and TaskType catalog. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Admin must manage categories and pricing rules.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- TaskCategory and TaskType catalog.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-12 — Task details

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

User describes what needs to be done.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | User describes what needs to be done. |
| Backend/product dependency | Task draft creation with structured and free-text fields. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Support attachments and later edits before payment.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Task draft creation with structured and free-text fields.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-13 — Task checklist

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Specific sub-services such as sweeping, dish washing, laundry.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Specific sub-services such as sweeping, dish washing, laundry. |
| Backend/product dependency | Task requirement checklist tied to service category. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Useful for disputes and completion confirmation.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Task requirement checklist tied to service category.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-14 — Set pricing

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

User enters budget and sees platform recommended/minimum range.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | User enters budget and sees platform recommended/minimum range. |
| Backend/product dependency | Pricing engine with minimum price, recommended price, urgency adjustments. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Do not allow underpricing below configured floor.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Pricing engine with minimum price, recommended price, urgency adjustments.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-15 — Task schedule

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Date, time, duration, urgency.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Date, time, duration, urgency. |
| Backend/product dependency | Task window, expiry rules, urgent task flag. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Urgent jobs can affect broadcast priority.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Task window, expiry rules, urgent task flag.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-16 — Location

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Saved address or current location.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Saved address or current location. |
| Backend/product dependency | Address book, coordinates, geocoding cache. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Cache paid geocoding results when terms allow.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Address book, coordinates, geocoding cache.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-17 — Available taskers

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Nearby taskers with ETA, distance, rating, service fit.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Nearby taskers with ETA, distance, rating, service fit. |
| Backend/product dependency | Valkey GEOSEARCH first, paid ETA only after filtering. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Batch ETA requests and enforce quotas.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Valkey GEOSEARCH first, paid ETA only after filtering.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-18 — Booking summary

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Selected task, cost breakdown, secure payment note.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Selected task, cost breakdown, secure payment note. |
| Backend/product dependency | Pending booking, escrow intent, service fee computation. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Show transparent pricing before payment.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Pending booking, escrow intent, service fee computation.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-19 — Make payment

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Use cardless-first Paystack or Moniepoint options such as bank transfer, virtual account or USSD, with wallet where eligible.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Use cardless-first Paystack or Moniepoint options such as bank transfer, virtual account or USSD, with wallet where eligible. |
| Backend/product dependency | Payment initialization, provider reference, webhook reconciliation. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Card-entry-first UX is forbidden; backend webhook/reconciliation owns final payment truth.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Payment initialization, provider reference, webhook reconciliation.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-20 — Payment success / receipt

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Payment received, receipt, QR/download.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Payment received, receipt, QR/download. |
| Backend/product dependency | Ledger credit, escrow hold, receipt generation. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Do not trust the client UI without webhook confirmation.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Ledger credit, escrow hold, receipt generation.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-21 — Task in progress

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Timer, task progress, chat, emergency support.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Timer, task progress, chat, emergency support. |
| Backend/product dependency | Task state machine, WebSocket chat, support escalation. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Works with intermittent connectivity.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Task state machine, WebSocket chat, support escalation.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-22 — Task complete / rating

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Owner confirms completion and rates tasker.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Owner confirms completion and rates tasker. |
| Backend/product dependency | Escrow release, two-sided review, rating aggregation. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Include dispute window before auto-release if needed.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Escrow release, two-sided review, rating aggregation.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-23 — Wallet and transactions

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Balance, funding, transaction history, pending/failed states.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Balance, funding, transaction history, pending/failed states. |
| Backend/product dependency | Double-entry ledger and balance projection. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Never store balance as the only source of truth.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Double-entry ledger and balance projection.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-24 — Messages, notifications, help

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Chat, task alerts, FAQs, support ticket, report issue.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Chat, task alerts, FAQs, support ticket, report issue. |
| Backend/product dependency | Socket.io, FCM, notification inbox, support module. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- FCM wakes devices for task and chat events.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Socket.io, FCM, notification inbox, support module.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-25 — Complete Tasker profile

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Gender, DOB, phone, address, location, state, bank details.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Gender, DOB, phone, address, location, state, bank details. |
| Backend/product dependency | TaskerProfile, KYC gate, payout destination setup. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- MVP
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- TaskerProfile, KYC gate, payout destination setup.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-26 — Select task

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Choose categories and sub-skills the tasker can perform.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Choose categories and sub-skills the tasker can perform. |
| Backend/product dependency | Tasker skills relation and category eligibility. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- MVP
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Tasker skills relation and category eligibility.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-27 — Availability

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Days available, working hours, maximum travel distance and preferred categories; auto-accept is excluded.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Days available, working hours, maximum travel distance and preferred categories; auto-accept is excluded. |
| Backend/product dependency | Availability schedule, service radius, task matching filters. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- MVP Tasker auto-accept is excluded.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Availability schedule, service radius, task matching filters.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-28 — Pricing info

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Minimum acceptable price and pricing guidance.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Minimum acceptable price and pricing guidance. |
| Backend/product dependency | Tasker pricing preference bounded by platform minimum. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Trust
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Tasker pricing preference bounded by platform minimum.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-29 — Enable location

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Allow app to find nearby jobs.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Allow app to find nearby jobs. |
| Backend/product dependency | Location permission, online status, Valkey geo index update. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- MVP
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Location permission, online status, Valkey geo index update.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-30 — Task request

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Incoming job with owner, distance, task details, price, accept/reject.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Incoming job with owner, distance, task details, price, accept/reject. |
| Backend/product dependency | Real-time job offer, expiry, atomic assignment lock. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- MVP
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Real-time job offer, expiry, atomic assignment lock.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-31 — Accepted task / start journey

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Tasker starts movement to task owner.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Tasker starts movement to task owner. |
| Backend/product dependency | Status change to TASKER_EN_ROUTE, GPS stream starts. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- MVP
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Status change to TASKER_EN_ROUTE, GPS stream starts.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-32 — Arrived / start task

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Tasker marks arrival and begins work timer.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Tasker marks arrival and begins work timer. |
| Backend/product dependency | Status transition to ARRIVED then IN_PROGRESS. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- MVP
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Status transition to ARRIVED then IN_PROGRESS.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-33 — Mark completed

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Tasker requests owner confirmation.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Tasker requests owner confirmation. |
| Backend/product dependency | Status changes to AWAITING_OWNER_CONFIRMATION. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- MVP
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Status changes to AWAITING_OWNER_CONFIRMATION.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-34 — Task completed

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Payment released after owner confirms.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Payment released after owner confirms. |
| Backend/product dependency | Wallet credit, ledger settlement, notification. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- MVP
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Wallet credit, ledger settlement, notification.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-35 — Wallet / earnings / withdraw

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Available balance, earned amount, withdrawal amount, fee, PIN.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Available balance, earned amount, withdrawal amount, fee, PIN. |
| Backend/product dependency | Ledger history, withdrawal request, payout adapter, withdrawal PIN. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- MVP
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Ledger history, withdrawal request, payout adapter, withdrawal PIN.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-SHARED-36 — Rate task owner / ratings

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Shared |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Two-sided marketplace reputation.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Signed-out or signed-in user according to the flow |
| Purpose | Two-sided marketplace reputation. |
| Backend/product dependency | Review model for tasker-to-owner and owner-to-tasker reviews. |
| Access or priority | Shared |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Trust
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Shared approved standalone flows
- Review model for tasker-to-owner and owner-to-tasker reviews.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-ADMIN-01 — Dashboard overview

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Admin |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Total users, active tasks, revenue, pending approvals, disputes.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Admin |
| Purpose | Total users, active tasks, revenue, pending approvals, disputes. |
| Backend/product dependency | Analytics aggregation and cached summary metrics. |
| Access or priority | Admin, Operations |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Admin, Operations
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Admin approved standalone flows
- Analytics aggregation and cached summary metrics.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-ADMIN-02 — User management

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Admin |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

List, search, filter, view, suspend, ban users.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Admin |
| Purpose | List, search, filter, view, suspend, ban users. |
| Backend/product dependency | Admin user query APIs and account status workflow. |
| Access or priority | Admin, Support Lead |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Admin, Support Lead
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Admin approved standalone flows
- Admin user query APIs and account status workflow.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-ADMIN-03 — KYC verification

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Admin |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Review selfie, ID, verification status, approve/reject.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Admin |
| Purpose | Review selfie, ID, verification status, approve/reject. |
| Backend/product dependency | KYC moderation workflow, provider data, audit trail. |
| Access or priority | KYC Reviewer, Admin |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- KYC Reviewer, Admin
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Admin approved standalone flows
- KYC moderation workflow, provider data, audit trail.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-ADMIN-04 — Task management

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Admin |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

All tasks by status, category, amount, owner, tasker.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Admin |
| Purpose | All tasks by status, category, amount, owner, tasker. |
| Backend/product dependency | Task search, task timeline, intervention endpoints. |
| Access or priority | Operations |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Operations Admin may force-cancel under policy but cannot reassign or select a replacement Tasker.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Admin approved standalone flows
- Task search, task timeline, intervention endpoints.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-ADMIN-05 — Controlled force cancel

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Admin |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Admin may force-cancel a task under policy; admin cannot select a replacement Tasker.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Admin |
| Purpose | Admin may force-cancel a task under policy; admin cannot select a replacement Tasker. |
| Backend/product dependency | Reason capture, refund/penalty decision, notification. |
| Access or priority | Operations Lead |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Operations Lead Admin may force-cancel under policy but cannot reassign or select a replacement Tasker.
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Admin approved standalone flows
- Reason capture, refund/penalty decision, notification.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-ADMIN-06 — Wallet and escrow

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Admin |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Held funds, wallet activity, task settlement state.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Admin |
| Purpose | Held funds, wallet activity, task settlement state. |
| Backend/product dependency | Ledger query, escrow status, settlement audit trail. |
| Access or priority | Finance |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Finance
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Admin approved standalone flows
- Ledger query, escrow status, settlement audit trail.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-ADMIN-07 — Withdrawals

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Admin |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Approve/reject withdrawal requests.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Admin |
| Purpose | Approve/reject withdrawal requests. |
| Backend/product dependency | Payout approval workflow, payout adapter, withdrawal status. |
| Access or priority | Finance Lead |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Finance Lead
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Admin approved standalone flows
- Payout approval workflow, payout adapter, withdrawal status.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-ADMIN-08 — Disputes and support

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Admin |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Complaint details, evidence, admin decision, resolution tracking.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Admin |
| Purpose | Complaint details, evidence, admin decision, resolution tracking. |
| Backend/product dependency | Support ticket module, dispute states, evidence attachments. |
| Access or priority | Support, Operations |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Support, Operations
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Admin approved standalone flows
- Support ticket module, dispute states, evidence attachments.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-ADMIN-09 — Category and pricing

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Admin |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Create/edit task categories, services, recommended and minimum price.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Admin |
| Purpose | Create/edit task categories, services, recommended and minimum price. |
| Backend/product dependency | Marketplace catalog and pricing rules engine. |
| Access or priority | Admin |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Admin
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Admin approved standalone flows
- Marketplace catalog and pricing rules engine.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-ADMIN-10 — Fraud and risk

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Admin |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Risk alerts, suspicious behavior, top risk factors.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Admin |
| Purpose | Risk alerts, suspicious behavior, top risk factors. |
| Backend/product dependency | Risk score, rule triggers, admin flags, investigation history. |
| Access or priority | Risk, Admin |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Risk, Admin
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Admin approved standalone flows
- Risk score, rule triggers, admin flags, investigation history.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-ADMIN-11 — Roles and permissions

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Admin |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Add admin, create role, permission matrix, 2FA.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Admin |
| Purpose | Add admin, create role, permission matrix, 2FA. |
| Backend/product dependency | RBAC, admin auth, admin audit logs, session security. |
| Access or priority | Super Admin |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Super Admin
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Admin approved standalone flows
- RBAC, admin auth, admin audit logs, session security.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.


---

## SCREEN-ADMIN-12 — Analytics and reports

| Field | Value |
| --- | --- |
| Type | screen |
| Domain | Admin |
| Status | design-source-required |
| Source | Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions |

### In plain English

Revenue, task trend, user growth, top services, reports.

### At a glance

| Field | Value |
| --- | --- |
| Actor | Admin |
| Purpose | Revenue, task trend, user growth, top services, reports. |
| Backend/product dependency | Reporting queries, export, scheduled summary support. |
| Access or priority | Admin, Management |
| Design status | Figma file/version and review evidence not recorded |
| Implementation status | Not verified by this migration |

### Rules

- Admin, Management
- Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.
- Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.

### Dependencies

- Admin approved standalone flows
- Reporting queries, export, scheduled summary support.
- Relevant contract and data-model anchors

### Known gaps or decisions required

- Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.

