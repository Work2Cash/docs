# Phase 2 Flow Migration Execution Log

## Objective

Migrate all 72 mobile and admin flows from the two legacy combined catalogues into standalone canonical Markdown, generated human HTML and clean agent Markdown using the Phase 1 approved structure.

## Current status — 17 July 2026

Phase 2 is **in progress**.

- [x] Phase 1 reference format approved.
- [x] Full legacy inventory defined: 24 mobile main flows, 13 mobile subflows, 24 admin main flows and 11 admin subflows.
- [x] `scripts/generate-flow-docs.js` added for deterministic Phase 2 generation from `content/flows/`.
- [x] Migration inventory generator and relationship-ID validation added.
- [x] Batch 1 started with the closed Admin Access dependency set.
- [ ] Batch 1 migration review completed.
- [ ] All 72 canonical flow sources created.
- [ ] Human and agent indexes cover all 72 flows.
- [ ] Dependency maps and optional combined catalogues generated.
- [ ] Phase 2 exit criteria validated.

## Migration rules

- The approved Phase 1 templates control document structure.
- Legacy catalogues remain the provisional behavior source until a migrated flow is reviewed.
- Existing architecture, API and data references may be linked; missing contracts must be labeled, not invented.
- Each main flow must include every dependency needed for verbal understanding, plus explicit next-flow conditions and recovery/re-entry behavior.
- Reusable subflows must state all callers, inputs, outputs and return behavior.
- Generated HTML and agent Markdown are never edited directly.
- A migrated page remains `in-review` until its owner and required reviewers accept the standalone result.

## Planned migration batches

| Batch | Scope | Purpose | Status |
| --- | --- | --- | --- |
| 1 | Admin access: AF-01, ASF-01, ASF-11 | Establish login/TOTP and shared loading/error patterns. | In progress: three canonical sources created |
| 2 | Mobile entry and identity: MF-01 to MF-03, SF-01, SF-02, SF-10, SF-11, SF-13 | Close launch, registration, login and recovery dependencies. | Queued |
| 3 | Mobile Tasker activation and task funding: MF-04 to MF-06, SF-03 to SF-06, SF-09 | Migrate home, activation, KYC, location, media and payment foundations. | Queued |
| 4 | Mobile matching and execution: MF-07 to MF-14, SF-07, SF-08 | Migrate discovery, offers, acceptance, execution, cancellation, withdrawal and settlement. | Queued |
| 5 | Mobile retention and account controls: MF-15 to MF-24, SF-12 | Migrate favorites, support, referral, settings, security, notifications, ratings, emergency and repeat-task flows. | Queued |
| 6 | Admin foundation and identity: AF-02 to AF-04, ASF-02 to ASF-06 | Migrate dashboard, users and approved KYC reference into the full library. | Queued |
| 7 | Admin task/support operations: AF-05 to AF-07, ASF-07, ASF-09 | Migrate monitoring, disputes and support live chat. | Queued |
| 8 | Admin finance: AF-08 to AF-10, AF-24, ASF-08, ASF-10 | Migrate payments, payouts, wallets, refunds, receipts and reconciliation. | Queued |
| 9 | Admin catalogue, coverage, media and risk: AF-11 to AF-15 | Migrate operational configuration and trust flows. | Queued |
| 10 | Admin governance, monitoring and reporting: AF-16 to AF-23 | Migrate config, admin access, audit, jobs, incidents, communications, ratings, analytics and reports. | Queued |

## Batch 1 evidence

| Flow | Canonical source | Generated human page | Generated agent page | Status |
| --- | --- | --- | --- | --- |
| AF-01 | `content/flows/admin/main/AF-01-admin-entry-login-totp.md` | `documents/flows/admin/main/AF-01-admin-entry-login-totp.html` | `documents/agent-md/flows/admin/main/AF-01-admin-entry-login-totp.md` | In review |
| ASF-01 | `content/flows/admin/subflows/ASF-01-admin-login-totp.md` | `documents/flows/admin/subflows/ASF-01-admin-login-totp.html` | `documents/agent-md/flows/admin/subflows/ASF-01-admin-login-totp.md` | In review |
| ASF-11 | `content/flows/admin/subflows/ASF-11-empty-loading-error-recovery.md` | `documents/flows/admin/subflows/ASF-11-empty-loading-error-recovery.html` | `documents/agent-md/flows/admin/subflows/ASF-11-empty-loading-error-recovery.md` | In review |

## Batch 1 review checklist

- [ ] Non-technical reviewer can explain why password plus TOTP is required and identify every ending.
- [ ] Junior admin developer can identify the exact auth endpoints, records, permission handoff and recovery behavior.
- [ ] Security/Privacy confirms secret redaction, safe errors, TOTP boundaries and return-route handling.
- [ ] Backend confirms two-stage session behavior and documented models/contracts.
- [ ] Admin Lead confirms the visible login, loading, empty, forbidden and error states.
- [ ] QA confirms every branch and re-entry point is testable.
- [ ] Required corrections applied and outputs regenerated.
- [ ] Batch 1 entries promoted according to lifecycle policy.
