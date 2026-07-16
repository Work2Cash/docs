---
id: DATA-KYC
title: Tasker Activation and KYC Data Domain
type: data-domain
audience: Non-technical team, Junior backend/admin developers, Product, QA, AI agents
owner: Backend Team
reviewers: Technical Lead, Product Lead, Security and Privacy, QA
status: pilot-draft-with-gaps
version: 0.1
last_reviewed: 2026-07-17
authority: Data Model and Prisma Schema Execution Baseline v1
related: SF-03 Tasker KYC, MF-05 Tasker Activation, AF-04 Tasker and KYC Review, KYC Review Contract Group
generated_from: content/pilots/data/kyc-domain.md
do_not_edit: true
---

> Generated agent document. Edit `content/pilots/data/kyc-domain.md` and rerun `node scripts/generate-pilot-docs.js`.

# Tasker Activation and KYC Data Domain

## In plain English

This domain records whether a person who wants to work as a Tasker has completed the required profile and identity checks. It preserves provider attempts and admin decisions so Work2Cash can recover from delays, investigate fraud and explain why Tasker work access is allowed or blocked.

## Why this domain exists

The general User account is not enough to prove a person may perform tasks. Work2Cash needs separate Tasker readiness and KYC history without creating a separate login identity or exposing sensitive provider data.

## Domain relationship

```text
User
  -> TaskerProfile
       -> KycVerification
            -> KycAttempt (required by the catalogue; baseline fields still need completion)
       -> PayoutAccount

Smile ID callback
  -> ProviderWebhookEvent
  -> KYC use case
  -> KycVerification status
  -> TaskerProfile activation eligibility
  -> AdminAuditLog for manual decisions
```

## TaskerProfile

### Business meaning

The Tasker-specific extension of one Work2Cash User. It stores readiness to earn, selected work information and an activation summary.

### Ownership and lifecycle

| Question | Answer |
| --- | --- |
| Created by | MF-05 Tasker Activation when a user chooses to earn. |
| Read by | Mobile Tasker mode, matching eligibility, AF-03 User Management and AF-04 KYC Review. |
| Updated by | Accepted Tasker profile, KYC and operational use cases; never directly from a controller or admin database control. |
| Active when | Required profile rules pass and KYC is approved with no blocking restriction. |
| Retained when | The user stops working or is restricted; historical relationships remain available for audit and disputes. |

### Important fields

| Field | Meaning | Required | Sensitive |
| --- | --- | --- | --- |
| `userId` | Links the Tasker role to the one unified User account. | Yes and unique | Personal linkage. |
| `bio` | Tasker-provided work introduction. | Optional | No, subject to moderation. |
| `isActive` | Summary of whether Tasker work actions are currently available. | Yes | Operational. |
| `kycStatus` | Current KYC summary used for access decisions. | Yes | Sensitive operational identity status. |
| `maxTravelKm` | Tasker work-preference distance. | Optional | Location preference. |
| `completedTaskCount` | Settled task count used by product rules. | Yes | Operational. |
| `averageRating` | Aggregated marketplace reputation. | Optional | Operational. |

### Constraints and indexes

- `userId` must remain unique so one User cannot have duplicate TaskerProfile records.
- Index `isActive` and `kycStatus` for eligibility and operations queries.
- `isActive` must not become true merely because the frontend reports completion.

## KycVerification

### Business meaning

One provider-backed identity-verification case for a Tasker, including the identifier route, provider job reference, status and safe outcome information.

### Ownership and lifecycle

| Question | Answer |
| --- | --- |
| Created by | SF-03 KYC start use case. |
| Read by | KYC status recovery, AF-04 review, provider reconciliation and risk investigation. |
| Updated by | Verified provider events, safe reconciliation and authorized audited admin decisions. |
| Ends when | Approved, rejected, failed or superseded by an explicitly linked re-verification attempt; never silently deleted. |

### Important fields

| Field | Meaning | Required | Sensitive |
| --- | --- | --- | --- |
| `taskerProfileId` | Tasker being verified. | Yes | Identity linkage. |
| `provider` | Identity provider, currently Smile ID. | Yes | Operational. |
| `identifierType` | Accepted identity route such as NIN or BVN. | Yes | Sensitive category; raw value should not be exposed here unnecessarily. |
| `status` | NOT_STARTED, PENDING, APPROVED, REJECTED, REQUIRES_REVERIFICATION or FAILED. | Yes | Sensitive operational identity result. |
| `providerJobId` | Safe provider reference used for reconciliation. | Optional until created | Sensitive operational reference. |
| `submittedAt` | Submission time. | Yes | Operational. |
| `decidedAt` | Final/manual decision time. | Optional | Operational. |
| `failureReason` | Sanitized reason suitable for operations. | Optional | Potentially sensitive; must be sanitized. |

### Constraints and indexes

- Index `taskerProfileId` and `status` for Tasker and queue queries.
- Index `provider` and `providerJobId` for reconciliation.
- Provider event IDs and internal idempotency keys must prevent duplicate processing.
- The record must not store provider secrets or unnecessary raw provider payloads.

## KycAttempt gap

The model catalogue and flow requirements reference `KycAttempt`, but the current Prisma baseline snippet does not define its exact fields. The domain requires an explicit attempt record so resubmission history is not overwritten.

Before implementation:

- [ ] Define the relationship between KycVerification and KycAttempt.
- [ ] Define attempt number or stable attempt identity.
- [ ] Define provider job/reference uniqueness.
- [ ] Define submitted, completed and failure timestamps.
- [ ] Define sanitized failure and requested-step fields.
- [ ] Define which attempt is current without deleting history.
- [ ] Define retention and restricted-access rules.
- [ ] Add API-to-model traceability and migrations.

## Supporting records

| Model | Meaning in this domain | Key rule |
| --- | --- | --- |
| User | One account identity shared by Task Owner and Tasker modes. | Do not create a second login user for Tasker. |
| ProviderRequestLog | Safe record of provider calls and outcomes. | Never store secrets; cost and request ID must be observable. |
| ProviderWebhookEvent | Deduplicated provider callback record. | `provider + eventId` must be unique. |
| RiskFlag | Identity or behavior concern requiring specialist review. | Access and resolution are audited. |
| AdminAuditLog | Immutable evidence of manual review actions. | Capture actor, action, target, reason, request ID and timestamp. |

## State transitions

| From | Action | To | Guard |
| --- | --- | --- | --- |
| NOT_STARTED | Valid KYC start | PENDING | TaskerProfile exists and consent/input rules pass. |
| PENDING | Verified provider approval or authorized review | APPROVED | Provider/evidence and risk rules pass. |
| PENDING | Correctable evidence issue | REQUIRES_REVERIFICATION | Authorized reason and required next step are recorded. |
| PENDING | Verified non-correctable failure | REJECTED | Authorized decision and audit evidence exist. |
| PENDING | Provider/processing failure | FAILED or remains PENDING according to policy | Failure is verified; do not guess outcome. |
| REQUIRES_REVERIFICATION | New valid submission | PENDING | New attempt is preserved and linked. |
| Any reviewable state | Risk escalation | Manual/risk handling without false activation | RiskFlag and audit context are recorded. |

## Privacy, access and retention

- KYC identifiers and biometric references are highly sensitive.
- Store the minimum provider metadata needed for operations, audit and reconciliation.
- Prefer provider-managed or restricted object references for biometric evidence.
- Do not return raw NIN, BVN, biometric payloads or provider secrets to normal admin views.
- Evidence access must be role-restricted, time-limited where practical and audited.
- KYC, provider and audit history must not be hard-deleted in normal operations.
- Final retention periods require legal approval and must be applied consistently to primary data and backups.

## Traceability

| Type | Reference | Relationship |
| --- | --- | --- |
| Mobile flow | MF-05 — Tasker Activation and SF-03 — Tasker KYC | Creates profile and provider-backed verification attempts. |
| Admin flow | AF-04 — Tasker and KYC Review | Reads evidence and applies authorized audited decisions. |
| Contract | KYC Review Contract Group | Supplies safe admin reads, decisions and provider reconciliation. |
| Provider | Smile ID | Produces identity and biometric verification result. |
| QA | AF-04 KYC Review Reference Suite | Verifies lifecycle, privacy, permissions, recovery and audit. |

## Implementation and migration status

| Item | Status | Required action |
| --- | --- | --- |
| TaskerProfile baseline | Documented | Validate implementation against accepted activation rules. |
| KycVerification baseline | Documented | Add explicit concurrency/version behavior and decision metadata if needed. |
| KycAttempt | Contract/model gap | Define before re-verification implementation. |
| ProviderWebhookEvent | Documented elsewhere | Verify unique provider event constraint. |
| AdminAuditLog | Documented elsewhere | Verify required KYC action fields and evidence-access audit. |

## Required tests

- [ ] One User has at most one TaskerProfile.
- [ ] TaskerProfile cannot activate before KYC and profile rules pass.
- [ ] Valid and invalid KYC state transitions.
- [ ] Re-verification creates/preserves attempt history rather than overwriting it.
- [ ] Duplicate provider events are idempotent.
- [ ] Simultaneous admin review cannot overwrite a newer decision.
- [ ] Raw identifiers, biometrics and provider secrets are not returned or logged.
- [ ] Audit records are immutable and complete.
- [ ] Retention and restricted-access behavior follows approved policy.
