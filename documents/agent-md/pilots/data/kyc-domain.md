---
id: DATA-KYC
title: Tasker Activation and KYC Data Domain
type: data-domain
audience: Non-technical team, Junior backend/admin developers, Product, QA, AI agents
owner: Backend Team
reviewers: Technical Lead, Product Lead, Security and Privacy, QA
status: pilot-review-ready
version: 0.2
last_reviewed: 2026-07-17
authority: Phase 1 Technical and Product decision for the KYC domain, subordinate to formal architecture approval
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
       -> current KycVerification
       -> KycVerification history
            -> immutable numbered KycAttempt history
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
| `currentKycVerificationId` | Points to the one current KYC case while older cases remain historical. | Optional until KYC starts; unique | Sensitive identity linkage. |
| `maxTravelKm` | Tasker work-preference distance. | Optional | Location preference. |
| `completedTaskCount` | Settled task count used by product rules. | Yes | Operational. |
| `averageRating` | Aggregated marketplace reputation. | Optional | Operational. |

### Constraints and indexes

- `userId` must remain unique so one User cannot have duplicate TaskerProfile records.
- `currentKycVerificationId` is nullable and unique; it points to one case without deleting older cases.
- Index `isActive` and `kycStatus` for eligibility and operations queries.
- `isActive` must not become true merely because the frontend reports completion.
- Changing the current KYC case and the profile's `kycStatus` must happen transactionally.

## KycVerification

### Business meaning

A durable identity-verification case for a Tasker. It owns overall KYC status, operational review state, concurrency version, current decision guidance and an immutable sequence of provider attempts.

### Ownership and lifecycle

| Question | Answer |
| --- | --- |
| Created by | SF-03 KYC start use case. |
| Read by | KYC status recovery, AF-04 review, provider reconciliation and risk investigation. |
| Updated by | Verified provider events, safe reconciliation and authorized audited admin decisions. |
| Ends when | Approved, rejected, failed or replaced by a later explicitly selected case; re-verification normally creates another attempt in the same case. |

### Important fields

| Field | Meaning | Required | Sensitive |
| --- | --- | --- | --- |
| `taskerProfileId` | Tasker being verified. | Yes | Identity linkage. |
| `status` | NOT_STARTED, PENDING, APPROVED, REJECTED, REQUIRES_REVERIFICATION or FAILED. | Yes | Sensitive operational identity result. |
| `reviewState` | UNASSIGNED, IN_REVIEW, WAITING_FOR_PROVIDER, WAITING_FOR_TASKER, WAITING_FOR_RISK or DECIDED. | Yes | Operational review routing. |
| `version` | Optimistic concurrency value used by admin mutations. | Yes | Operational. |
| `latestAttemptNumber` | Highest attempt number created for the case. | Yes | Operational. |
| `requiredSteps` | Current accepted steps the Tasker must repeat after re-verification is requested. | Yes; may be empty | Sensitive operational guidance. |
| `decisionReasonCode` | Stable current decision or routing reason. | Optional until decision/routing | Sensitive operational result. |
| `decisionNoteSafe` | Sanitized guidance safe for authorized admin and, where applicable, Tasker display. | Optional | Sensitive; never raw provider detail. |
| `submittedAt` | First valid submission time. | Optional until submission | Operational. |
| `decidedAt` | Final/manual decision time. | Optional | Operational. |
| `decidedByAdminId` | Admin responsible for a manual final decision. | Optional | Audit linkage. |

### Constraints and indexes

- Index `taskerProfileId`, `status`, `reviewState` and `submittedAt` for Tasker and queue queries.
- Every successful mutation must compare and increment `version` in one transaction.
- `latestAttemptNumber` must be updated in the same transaction that creates an attempt.
- Provider event IDs and internal idempotency keys must prevent duplicate processing.
- The record must not store provider secrets or unnecessary raw provider payloads.

## KycAttempt

### Business meaning

A KycAttempt is one immutable submission to Smile ID inside a KycVerification case. A failed or superseded attempt stays available for audit and recovery; a new submission creates the next number instead of overwriting the earlier provider reference or result.

### Attempt statuses

| Status | Meaning |
| --- | --- |
| CREATED | Internal attempt exists but a provider submission has not completed. |
| SUBMITTED | Required identifier/evidence references were accepted for provider submission. |
| PROVIDER_PENDING | Smile ID accepted the job but has not returned authoritative completion. |
| PROVIDER_APPROVED | Verified provider result passed the configured provider checks. Final KYC activation may still require policy/admin review. |
| PROVIDER_REJECTED | Verified provider result failed a provider check. Admin policy determines reject versus correctable re-verification. |
| FAILED | A verified technical/validation failure ended this attempt. |
| CANCELLED | Attempt was cancelled before an authoritative provider completion. |
| SUPERSEDED | A newer attempt became current; this attempt remains immutable history. |

### Important fields

| Field | Meaning | Constraint |
| --- | --- | --- |
| `verificationId` | Parent KYC case. | Required foreign key. |
| `attemptNumber` | Monotonic sequence within the case: 1, 2, 3 and so on. | Unique with `verificationId`; never reused. |
| `provider` | Provider used for the attempt, currently SMILE_ID. | Required. |
| `identifierType` | NIN or BVN route used without storing the raw identifier here. | Required. |
| `status` | Attempt lifecycle status. | Required. |
| `providerJobId` | Provider job/reference used for callbacks and reconciliation. | Nullable until provider acceptance; unique with provider when present. |
| `providerRequestLogId` | Safe link to observable request/cost metadata. | Optional foreign key/reference. |
| `identityMatch` | Safe normalized MATCH, NO_MATCH, REVIEW_REQUIRED or UNKNOWN result. | Required with UNKNOWN default. |
| `biometricMatch` | Safe normalized biometric outcome. | Required with UNKNOWN default. |
| `failureCode` | Stable sanitized technical/business failure code. | Optional. |
| `failureDetailSafe` | Sanitized operational detail without raw payload or personal identity data. | Optional. |
| `evidenceReference` | Encrypted/restricted reference to provider-managed evidence where policy permits. | Optional and sensitive; never a public URL. |
| `createdAt` | Attempt creation time. | Required and immutable. |
| `submittedAt` | Provider submission time. | Optional until submitted. |
| `providerCompletedAt` | Verified provider completion time. | Optional. |
| `supersededAt` | Time a newer attempt became current. | Optional. |
| `updatedAt` | Last controlled lifecycle update. | Required. |

### Current-attempt rule

- The current attempt is the attempt whose `attemptNumber` equals `KycVerification.latestAttemptNumber`.
- Creating a new attempt locks the verification row, increments `latestAttemptNumber`, marks the previous non-terminal attempt `SUPERSEDED` when appropriate and inserts the new attempt in one transaction.
- Callback processing selects by `provider + providerJobId`, verifies the signature/event and updates only the matching attempt.
- A late callback for an older attempt is recorded but cannot overwrite the current case decision automatically.

### Proposed Prisma baseline

```text
enum KycReviewState {
  UNASSIGNED
  IN_REVIEW
  WAITING_FOR_PROVIDER
  WAITING_FOR_TASKER
  WAITING_FOR_RISK
  DECIDED
}

enum KycAttemptStatus {
  CREATED
  SUBMITTED
  PROVIDER_PENDING
  PROVIDER_APPROVED
  PROVIDER_REJECTED
  FAILED
  CANCELLED
  SUPERSEDED
}

enum KycMatchOutcome {
  UNKNOWN
  MATCH
  NO_MATCH
  REVIEW_REQUIRED
}

model TaskerProfile {
  id                       String           @id @default(cuid())
  userId                   String           @unique
  isActive                 Boolean          @default(false)
  kycStatus                KycStatus        @default(NOT_STARTED)
  currentKycVerificationId String?          @unique
  currentKycVerification   KycVerification? @relation("CurrentTaskerKyc", fields: [currentKycVerificationId], references: [id], onDelete: SetNull)
  kycVerifications         KycVerification[] @relation("TaskerKycHistory")
}

model KycVerification {
  id                    String          @id @default(cuid())
  taskerProfileId       String
  taskerProfile         TaskerProfile   @relation("TaskerKycHistory", fields: [taskerProfileId], references: [id])
  currentForTasker      TaskerProfile?  @relation("CurrentTaskerKyc")
  status                KycStatus       @default(NOT_STARTED)
  reviewState           KycReviewState  @default(UNASSIGNED)
  version               Int             @default(1)
  latestAttemptNumber   Int             @default(0)
  requiredSteps         String[]        @default([])
  decisionReasonCode    String?
  decisionNoteSafe      String?
  submittedAt           DateTime?
  decidedAt             DateTime?
  decidedByAdminId      String?
  createdAt             DateTime        @default(now())
  updatedAt             DateTime        @updatedAt
  attempts              KycAttempt[]

  @@index([taskerProfileId, status])
  @@index([status, reviewState, submittedAt])
}

model KycAttempt {
  id                    String            @id @default(cuid())
  verificationId        String
  verification          KycVerification   @relation(fields: [verificationId], references: [id])
  attemptNumber         Int
  provider              ProviderName      @default(SMILE_ID)
  identifierType        KycIdentifierType
  status                KycAttemptStatus  @default(CREATED)
  providerJobId         String?
  providerRequestLogId  String?
  identityMatch         KycMatchOutcome   @default(UNKNOWN)
  biometricMatch        KycMatchOutcome   @default(UNKNOWN)
  failureCode           String?
  failureDetailSafe     String?
  evidenceReference     String?
  submittedAt           DateTime?
  providerCompletedAt   DateTime?
  supersededAt          DateTime?
  createdAt             DateTime          @default(now())
  updatedAt             DateTime          @updatedAt

  @@unique([verificationId, attemptNumber])
  @@unique([provider, providerJobId])
  @@index([verificationId, status])
}
```

This is the accepted Phase 1 model decision. Phase 4 must merge it into the general Prisma/data-model source and resolve exact relation names against the complete schema before generating a migration.

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
| NOT_STARTED / UNASSIGNED | Valid first submission | PENDING / WAITING_FOR_PROVIDER | TaskerProfile exists; attempt 1 is created transactionally. |
| PENDING / WAITING_FOR_PROVIDER | Verified result needs admin review | PENDING / IN_REVIEW | Current attempt result is verified and safe summary exists. |
| PENDING / IN_REVIEW | Authorized approval | APPROVED / DECIDED | Evidence passes, no risk hold, expected version matches. |
| PENDING / IN_REVIEW | Correctable issue | REQUIRES_REVERIFICATION / WAITING_FOR_TASKER | Reason and required steps are recorded. |
| PENDING / IN_REVIEW | Verified non-correctable failure | REJECTED / DECIDED | Authorized decision/audit and expected version exist. |
| PENDING | Provider/processing failure | FAILED or PENDING | Only verified policy outcome applies; do not guess. |
| REQUIRES_REVERIFICATION / WAITING_FOR_TASKER | New valid submission | PENDING / WAITING_FOR_PROVIDER | Next immutable attempt number is created. |
| Any reviewable state | Risk escalation | KycStatus unchanged / WAITING_FOR_RISK | RiskFlag and audit context are recorded; activation stays blocked. |
| WAITING_FOR_RISK | Risk clears case for KYC review | PENDING / IN_REVIEW | Authorized risk outcome and version update exist. |

## Privacy, access and retention

- KYC identifiers and biometric references are highly sensitive.
- Store the minimum provider metadata needed for operations, audit and reconciliation.
- Prefer provider-managed or restricted object references for biometric evidence.
- Do not return raw NIN, BVN, biometric payloads or provider secrets to normal admin views.
- Evidence access must be role-restricted, time-limited where practical and audited.
- KYC, provider and audit history must not be hard-deleted in normal operations.
- `failureDetailSafe` and decision notes must be sanitized before persistence and logging.
- `evidenceReference` must be encrypted/restricted and must never be returned as a permanent public URL.
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
| TaskerProfile current-case pointer | Defined in Phase 1 pilot | Merge and validate relation naming against the full schema. |
| KycVerification review/version fields | Defined in Phase 1 pilot | Merge into general data model and generate migration. |
| KycAttempt | Defined in Phase 1 pilot | Implement immutable numbered attempts and callback lookup constraints. |
| ProviderWebhookEvent | Documented elsewhere | Verify unique provider event constraint. |
| AdminAuditLog | Documented elsewhere | Verify required KYC action fields and evidence-access audit. |

### Migration sequence

1. Add the three enums and nullable TaskerProfile/KycVerification fields.
2. Create `KycAttempt` without removing any legacy KycVerification fields.
3. Backfill one attempt for every existing submitted verification, preserving safe provider reference, status and timestamps.
4. Set `latestAttemptNumber`, `reviewState`, `version` and each TaskerProfile current-case pointer deterministically.
5. Add unique/index constraints after duplicate provider references are investigated.
6. Deploy application code that reads/writes attempts and concurrency versions.
7. Remove superseded legacy provider fields only in a later reviewed migration after parity evidence passes.

The migration must be reversible before destructive cleanup and must never discard KYC or audit history.

## Required tests

- [ ] One User has at most one TaskerProfile.
- [ ] TaskerProfile cannot activate before KYC and profile rules pass.
- [ ] Valid and invalid KYC state transitions.
- [ ] Attempt numbers are unique, monotonic and created transactionally.
- [ ] Re-verification creates/preserves attempt history rather than overwriting it.
- [ ] Late callback for an older attempt cannot overwrite the current case decision.
- [ ] Duplicate provider events are idempotent.
- [ ] Simultaneous admin review cannot overwrite a newer decision.
- [ ] Exactly one TaskerProfile current-case pointer is selected while historical cases remain readable.
- [ ] Migration backfill preserves provider references, safe outcomes and timestamps.
- [ ] Raw identifiers, biometrics and provider secrets are not returned or logged.
- [ ] Audit records are immutable and complete.
- [ ] Retention and restricted-access behavior follows approved policy.
