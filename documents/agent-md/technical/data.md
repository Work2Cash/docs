---
id: TECH-DATA-001
title: Data Model Reference
type: technical-reference-agent-pack
audience: Backend, Admin, QA, Security and AI agents
owner: Backend Lead
reviewers: Technical Lead, Data owner, Security and Privacy
status: in-review
version: 1.0
last_reviewed: 2026-07-17
authority: Approved contracts and flows, with the provisional data-model execution baseline
generated_from: content/technical/data.json
do_not_edit: true
---

# Data Model Reference

> Generated focused agent pack. Edit `content/technical/data.json`, then run `node scripts/generate-technical-docs.js`.

## Purpose

A business-first catalogue of models, enums, ownership, privacy and schema readiness. Conceptual records and executable Prisma baselines are clearly distinguished.

## How to use this pack

Use only the record required by the assigned flow or daily task. A named gap blocks that portion of implementation. Do not infer missing paths, fields, provider behavior or product rules from adjacent records.

## Authority notes

- KycAttempt incorporates the approved Phase 1 KYC data-domain reference.
- A planned conceptual model is not permission to invent fields or apply a migration.

## Shared rules

- Use mode, never activeMode.
- Keep one User account; Task Owner and Tasker responsibilities remain explicit.
- Keep Task Owner and Tasker wallets as separate records.
- Ledger entries are immutable evidence; a cached balance is never the only money truth.
- Exact addresses, KYC evidence, phone numbers and payment secrets require restricted access.

---

## MODEL-ADMIN-08 — AdminAuditLog

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Admin and operations |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Immutable admin/security/finance/risk audit record.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Immutable admin/security/finance/risk audit record. |
| Important rule | Every high-impact admin action must write audit reason and actor. |
| Owning domain | Admin and operations |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Legacy Prisma execution baseline exists |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Every high-impact admin action must write audit reason and actor.

### Dependencies

- Admin and operations
- Related contract and flow records

### Known gaps or decisions required

- Confirm every field, relation, retention rule and migration against the implementation before applying Prisma migrations.

### Prisma execution baseline

```prisma
model AdminAuditLog {
  id            String          @id @default(cuid())
  actorAdminId  String?
  action        String
  risk          AdminActionRisk @default(LOW)
  targetType    String?
  targetId      String?
  reason        String?
  requestId     String?
  ipAddress     String?
  metadata      Json?
  createdAt     DateTime        @default(now())

  @@index([actorAdminId, createdAt])
  @@index([targetType, targetId])
  @@index([risk, createdAt])
}
```


---

## MODEL-ADMIN-03 — AdminPermission

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Admin and operations |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

AdminPermission supports the admin and operations domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative AdminPermission record for Admin and operations. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Admin and operations |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Admin and operations
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-ADMIN-02 — AdminRole

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Admin and operations |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

AdminRole supports the admin and operations domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative AdminRole record for Admin and operations. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Admin and operations |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Admin and operations
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-ADMIN-04 — AdminRolePermission

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Admin and operations |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

AdminRolePermission supports the admin and operations domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative AdminRolePermission record for Admin and operations. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Admin and operations |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Admin and operations
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-ADMIN-06 — AdminSession

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Admin and operations |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

AdminSession supports the admin and operations domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative AdminSession record for Admin and operations. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Admin and operations |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Admin and operations
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-ADMIN-07 — AdminTotpCredential

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Admin and operations |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

AdminTotpCredential supports the admin and operations domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative AdminTotpCredential record for Admin and operations. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Admin and operations |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Admin and operations
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-ADMIN-01 — AdminUser

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Admin and operations |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

AdminUser supports the admin and operations domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative AdminUser record for Admin and operations. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Admin and operations |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Admin and operations
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-ADMIN-05 — AdminUserRole

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Admin and operations |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

AdminUserRole supports the admin and operations domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative AdminUserRole record for Admin and operations. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Admin and operations |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Admin and operations
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-CATALOG-04 — PlatformCoverageRule

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Catalog and coverage |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

PlatformCoverageRule supports the catalog and coverage domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative PlatformCoverageRule record for Catalog and coverage. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Catalog and coverage |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Catalog and coverage
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-CATALOG-03 — ServiceZone

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Catalog and coverage |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

ServiceZone supports the catalog and coverage domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative ServiceZone record for Catalog and coverage. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Catalog and coverage |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Catalog and coverage
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-CATALOG-01 — TaskCategory

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Catalog and coverage |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

TaskCategory supports the catalog and coverage domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative TaskCategory record for Catalog and coverage. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Catalog and coverage |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Catalog and coverage
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-CATALOG-02 — TaskType

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Catalog and coverage |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

TaskType supports the catalog and coverage domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative TaskType record for Catalog and coverage. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Catalog and coverage |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Catalog and coverage
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-COMMUNICATION-01 — ChatMessage

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Communication and support |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

ChatMessage supports the communication and support domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative ChatMessage record for Communication and support. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Communication and support |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Legacy Prisma execution baseline exists |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Communication and support
- Related contract and flow records

### Known gaps or decisions required

- Confirm every field, relation, retention rule and migration against the implementation before applying Prisma migrations.

### Prisma execution baseline

```prisma
model ChatMessage {
  id          String      @id @default(cuid())
  taskId      String?
  supportSessionId String?
  senderId    String
  type        MessageType @default(TEXT)
  body        String?
  mediaId     String?
  sentAt      DateTime    @default(now())
  readAt      DateTime?

  @@index([taskId, sentAt])
  @@index([supportSessionId, sentAt])
}
```


---

## MODEL-COMMUNICATION-05 — CommunicationAuditLog

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Communication and support |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

CommunicationAuditLog supports the communication and support domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative CommunicationAuditLog record for Communication and support. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Communication and support |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Communication and support
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-COMMUNICATION-03 — SupportMessage

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Communication and support |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

SupportMessage supports the communication and support domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative SupportMessage record for Communication and support. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Communication and support |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Communication and support
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-COMMUNICATION-02 — SupportSession

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Communication and support |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

SupportSession supports the communication and support domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative SupportSession record for Communication and support. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Communication and support |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Communication and support
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-COMMUNICATION-04 — TaskCallSession

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Communication and support |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Masked proxy call session.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Masked proxy call session. |
| Important rule | Task-bound, time-limited, no real phone numbers exposed. |
| Owning domain | Communication and support |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Legacy Prisma execution baseline exists |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Task-bound, time-limited, no real phone numbers exposed.

### Dependencies

- Communication and support
- Related contract and flow records

### Known gaps or decisions required

- Confirm every field, relation, retention rule and migration against the implementation before applying Prisma migrations.

### Prisma execution baseline

```prisma
model TaskCallSession {
  id                  String      @id @default(cuid())
  taskId              String
  callerUserId        String
  recipientUserId     String
  provider            ProviderName
  proxyNumber         String
  providerSessionId   String?
  status              CallSessionStatus @default(ACTIVE)
  expiresAt           DateTime
  startedAt           DateTime?
  endedAt             DateTime?
  createdAt           DateTime    @default(now())

  @@index([taskId, status])
  @@index([callerUserId, createdAt])
}
```


---

## MODEL-IDENTITY-08 — NotificationPreference

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Identity and access |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

NotificationPreference supports the identity and access domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative NotificationPreference record for Identity and access. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Identity and access |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Identity and access
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-IDENTITY-04 — OtpChallenge

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Identity and access |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

OtpChallenge supports the identity and access domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative OtpChallenge record for Identity and access. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Identity and access |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Identity and access
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-IDENTITY-09 — SavedAddress

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Identity and access |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

SavedAddress supports the identity and access domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative SavedAddress record for Identity and access. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Identity and access |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Identity and access
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-IDENTITY-07 — SecurityPinCredential

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Identity and access |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

SecurityPinCredential supports the identity and access domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative SecurityPinCredential record for Identity and access. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Identity and access |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Identity and access
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-IDENTITY-03 — SocialAccount

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Identity and access |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

SocialAccount supports the identity and access domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative SocialAccount record for Identity and access. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Identity and access |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Identity and access
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-IDENTITY-01 — User

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Identity and access |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Root account identity. A user can be Task Owner, Tasker, or both.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Root account identity. A user can be Task Owner, Tasker, or both. |
| Important rule | Do not split client/tasker auth tables. Keep one account model. |
| Owning domain | Identity and access |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Legacy Prisma execution baseline exists |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Do not split client/tasker auth tables. Keep one account model.

### Dependencies

- Identity and access
- Related contract and flow records

### Known gaps or decisions required

- Confirm every field, relation, retention rule and migration against the implementation before applying Prisma migrations.

### Prisma execution baseline

```prisma
model User {
  id              String      @id @default(cuid())
  email           String?     @unique
  phone           String?     @unique
  displayName     String?
  avatarUrl       String?
  mode            UserMode    @default(TASK_OWNER)
  status          UserStatus  @default(ACTIVE)
  emailVerifiedAt DateTime?
  phoneVerifiedAt DateTime?
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt

  credentials     UserCredential?
  socialAccounts  SocialAccount[]
  sessions        UserSession[]
  taskerProfile   TaskerProfile?
  wallets         Wallet[]
  ownedTasks      Task[]      @relation("TaskOwnerTasks")
  acceptedTasks   Task[]      @relation("AcceptedTaskerTasks")

  @@index([mode, status])
  @@index([createdAt])
}
```


---

## MODEL-IDENTITY-02 — UserCredential

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Identity and access |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

UserCredential supports the identity and access domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative UserCredential record for Identity and access. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Identity and access |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Identity and access
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-IDENTITY-06 — UserDevice

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Identity and access |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

UserDevice supports the identity and access domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative UserDevice record for Identity and access. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Identity and access |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Identity and access
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-IDENTITY-05 — UserSession

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Identity and access |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

UserSession supports the identity and access domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative UserSession record for Identity and access. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Identity and access |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Identity and access
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-OPERATIONS-02 — OutboxEvent

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Providers and jobs |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

OutboxEvent supports the providers and jobs domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative OutboxEvent record for Providers and jobs. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Providers and jobs |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Providers and jobs
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-OPERATIONS-05 — ProviderRequestLog

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Providers and jobs |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

ProviderRequestLog supports the providers and jobs domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative ProviderRequestLog record for Providers and jobs. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Providers and jobs |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Providers and jobs
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-OPERATIONS-03 — QueueJobAudit

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Providers and jobs |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

QueueJobAudit supports the providers and jobs domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative QueueJobAudit record for Providers and jobs. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Providers and jobs |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Providers and jobs
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-OPERATIONS-04 — RemoteConfig

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Providers and jobs |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

RemoteConfig supports the providers and jobs domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative RemoteConfig record for Providers and jobs. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Providers and jobs |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Providers and jobs
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-OPERATIONS-01 — UseCaseExecutionLog

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Providers and jobs |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Backend use-case invocation health record.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Backend use-case invocation health record. |
| Important rule | Tracks use case last used, success/failure, duration and error code. |
| Owning domain | Providers and jobs |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Legacy Prisma execution baseline exists |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Tracks use case last used, success/failure, duration and error code.

### Dependencies

- Providers and jobs
- Related contract and flow records

### Known gaps or decisions required

- Confirm every field, relation, retention rule and migration against the implementation before applying Prisma migrations.

### Prisma execution baseline

```prisma
model UseCaseExecutionLog {
  id            String   @id @default(cuid())
  useCaseName   String
  success       Boolean
  errorCode     String?
  durationMs    Int?
  requestId     String?
  actorId       String?
  resourceType  String?
  resourceId    String?
  lastUsedAt    DateTime @default(now())

  @@index([useCaseName, lastUsedAt])
  @@index([success, useCaseName])
}
```


---

## MODEL-RISK-06 — Rating

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Risk and trust |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Rating supports the risk and trust domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative Rating record for Risk and trust. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Risk and trust |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Risk and trust
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-REFERRAL-02 — ReferralAttribution

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Risk and trust |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

ReferralAttribution supports the risk and trust domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative ReferralAttribution record for Risk and trust. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Risk and trust |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Risk and trust
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-REFERRAL-01 — ReferralCode

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Risk and trust |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

ReferralCode supports the risk and trust domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative ReferralCode record for Risk and trust. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Risk and trust |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Risk and trust
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-REFERRAL-03 — ReferralReward

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Risk and trust |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

ReferralReward supports the risk and trust domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative ReferralReward record for Risk and trust. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Risk and trust |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Risk and trust
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-RISK-07 — ReviewModeration

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Risk and trust |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

ReviewModeration supports the risk and trust domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative ReviewModeration record for Risk and trust. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Risk and trust |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Risk and trust
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-RISK-04 — RiskFlag

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Risk and trust |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

RiskFlag supports the risk and trust domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative RiskFlag record for Risk and trust. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Risk and trust |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Risk and trust
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-RISK-03 — Strike

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Risk and trust |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Strike supports the risk and trust domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative Strike record for Risk and trust. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Risk and trust |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Risk and trust
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-RISK-01 — TaskReport

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Risk and trust |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Structured task-linked report/dispute.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Structured task-linked report/dispute. |
| Important rule | Can cover no-show, refusal, unsafe media, off-platform solicitation, completion refusal. |
| Owning domain | Risk and trust |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Can cover no-show, refusal, unsafe media, off-platform solicitation, completion refusal.

### Dependencies

- Risk and trust
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-RISK-05 — TrustScoreEvent

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Risk and trust |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

TrustScoreEvent supports the risk and trust domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative TrustScoreEvent record for Risk and trust. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Risk and trust |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Risk and trust
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-RISK-02 — Warning

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Risk and trust |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Warning supports the risk and trust domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative Warning record for Risk and trust. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Risk and trust |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Risk and trust
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## ENUM-16 — AdminActionRisk

| Field | Value |
| --- | --- |
| Type | enum |
| Domain | Shared state vocabulary |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Determines TOTP/reason/audit controls.

### At a glance

| Field | Value |
| --- | --- |
| Values | LOW, MEDIUM, HIGH, CRITICAL |
| Purpose | Determines TOTP/reason/audit controls. |
| Change rule | Additions require contract review; renames require data migration and consumer coordination. |

### Rules

- Use the same value in API, database, frontend and QA references.

### Dependencies

- Contracts
- Flows
- QA

### Known gaps or decisions required

- Confirm values against every approved flow before schema freeze.


---

## ENUM-05 — DirectTaskOfferStatus

| Field | Value |
| --- | --- |
| Type | enum |
| Domain | Shared state vocabulary |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Direct favorite offer lifecycle.

### At a glance

| Field | Value |
| --- | --- |
| Values | SENT, VIEWED, ACCEPTED, DECLINED, EXPIRED, CANCELLED, TASKER_UNAVAILABLE |
| Purpose | Direct favorite offer lifecycle. |
| Change rule | Additions require contract review; renames require data migration and consumer coordination. |

### Rules

- Use the same value in API, database, frontend and QA references.

### Dependencies

- Contracts
- Flows
- QA

### Known gaps or decisions required

- Confirm values against every approved flow before schema freeze.


---

## ENUM-10 — EscrowStatus

| Field | Value |
| --- | --- |
| Type | enum |
| Domain | Shared state vocabulary |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Escrow lifecycle.

### At a glance

| Field | Value |
| --- | --- |
| Values | HELD, RELEASED, DISPUTED, REFUNDED, PARTIALLY_REFUNDED |
| Purpose | Escrow lifecycle. |
| Change rule | Additions require contract review; renames require data migration and consumer coordination. |

### Rules

- Use the same value in API, database, frontend and QA references.

### Dependencies

- Contracts
- Flows
- QA

### Known gaps or decisions required

- Confirm values against every approved flow before schema freeze.


---

## ENUM-06 — FavoriteTaskerStatus

| Field | Value |
| --- | --- |
| Type | enum |
| Domain | Shared state vocabulary |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Task Owner favorite Tasker relationship state.

### At a glance

| Field | Value |
| --- | --- |
| Values | ACTIVE, REMOVED, BLOCKED |
| Purpose | Task Owner favorite Tasker relationship state. |
| Change rule | Additions require contract review; renames require data migration and consumer coordination. |

### Rules

- Use the same value in API, database, frontend and QA references.

### Dependencies

- Contracts
- Flows
- QA

### Known gaps or decisions required

- Confirm values against every approved flow before schema freeze.


---

## ENUM-03 — KycStatus

| Field | Value |
| --- | --- |
| Type | enum |
| Domain | Shared state vocabulary |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Controls Tasker activation.

### At a glance

| Field | Value |
| --- | --- |
| Values | NOT_STARTED, PENDING, APPROVED, REJECTED, REQUIRES_REVERIFICATION, FAILED |
| Purpose | Controls Tasker activation. |
| Change rule | Additions require contract review; renames require data migration and consumer coordination. |

### Rules

- Use the same value in API, database, frontend and QA references.

### Dependencies

- Contracts
- Flows
- QA

### Known gaps or decisions required

- Confirm values against every approved flow before schema freeze.


---

## ENUM-09 — PaymentStatus

| Field | Value |
| --- | --- |
| Type | enum |
| Domain | Shared state vocabulary |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Provider collection state.

### At a glance

| Field | Value |
| --- | --- |
| Values | INITIATED, PENDING, SUCCESSFUL, FAILED, EXPIRED, REVERSED |
| Purpose | Provider collection state. |
| Change rule | Additions require contract review; renames require data migration and consumer coordination. |

### Rules

- Use the same value in API, database, frontend and QA references.

### Dependencies

- Contracts
- Flows
- QA

### Known gaps or decisions required

- Confirm values against every approved flow before schema freeze.


---

## ENUM-12 — PayoutBatchStatus

| Field | Value |
| --- | --- |
| Type | enum |
| Domain | Shared state vocabulary |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Bulk payout lifecycle.

### At a glance

| Field | Value |
| --- | --- |
| Values | DRAFT, READY_FOR_APPROVAL, APPROVED, PROCESSING, COMPLETED, PARTIALLY_FAILED, FAILED, CANCELLED |
| Purpose | Bulk payout lifecycle. |
| Change rule | Additions require contract review; renames require data migration and consumer coordination. |

### Rules

- Use the same value in API, database, frontend and QA references.

### Dependencies

- Contracts
- Flows
- QA

### Known gaps or decisions required

- Confirm values against every approved flow before schema freeze.


---

## ENUM-17 — ProviderName

| Field | Value |
| --- | --- |
| Type | enum |
| Domain | Shared state vocabulary |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Provider integration vocabulary.

### At a glance

| Field | Value |
| --- | --- |
| Values | PAYSTACK, MONIEPOINT, SMILE_ID, TERMII, FCM, RESEND, SHOREBIRD, SENTRY, INFOBIP, AFRICAS_TALKING, VONAGE, SINCH, GOOGLE_MAPS |
| Purpose | Provider integration vocabulary. |
| Change rule | Additions require contract review; renames require data migration and consumer coordination. |

### Rules

- Use the same value in API, database, frontend and QA references.

### Dependencies

- Contracts
- Flows
- QA

### Known gaps or decisions required

- Confirm values against every approved flow before schema freeze.


---

## ENUM-15 — StrikeActorType

| Field | Value |
| --- | --- |
| Type | enum |
| Domain | Shared state vocabulary |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Strike owner.

### At a glance

| Field | Value |
| --- | --- |
| Values | TASK_OWNER, TASKER |
| Purpose | Strike owner. |
| Change rule | Additions require contract review; renames require data migration and consumer coordination. |

### Rules

- Use the same value in API, database, frontend and QA references.

### Dependencies

- Contracts
- Flows
- QA

### Known gaps or decisions required

- Confirm values against every approved flow before schema freeze.


---

## ENUM-07 — TaskMediaPurpose

| Field | Value |
| --- | --- |
| Type | enum |
| Domain | Shared state vocabulary |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Determines access and validation rules.

### At a glance

| Field | Value |
| --- | --- |
| Values | OWNER_PROOF, TASKER_COMPLETION_PROOF, REPORT_EVIDENCE, CHAT_VOICE_NOTE, SUPPORT_ATTACHMENT |
| Purpose | Determines access and validation rules. |
| Change rule | Additions require contract review; renames require data migration and consumer coordination. |

### Rules

- Use the same value in API, database, frontend and QA references.

### Dependencies

- Contracts
- Flows
- QA

### Known gaps or decisions required

- Confirm values against every approved flow before schema freeze.


---

## ENUM-08 — TaskMediaStatus

| Field | Value |
| --- | --- |
| Type | enum |
| Domain | Shared state vocabulary |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Moderation and lifecycle state.

### At a glance

| Field | Value |
| --- | --- |
| Values | UPLOADING, ACTIVE, REMOVED, REJECTED |
| Purpose | Moderation and lifecycle state. |
| Change rule | Additions require contract review; renames require data migration and consumer coordination. |

### Rules

- Use the same value in API, database, frontend and QA references.

### Dependencies

- Contracts
- Flows
- QA

### Known gaps or decisions required

- Confirm values against every approved flow before schema freeze.


---

## ENUM-13 — TaskReportStatus

| Field | Value |
| --- | --- |
| Type | enum |
| Domain | Shared state vocabulary |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Report/dispute workflow.

### At a glance

| Field | Value |
| --- | --- |
| Values | OPEN, UNDER_REVIEW, EVIDENCE_REQUESTED, RESOLVED, DISMISSED, ESCALATED |
| Purpose | Report/dispute workflow. |
| Change rule | Additions require contract review; renames require data migration and consumer coordination. |

### Rules

- Use the same value in API, database, frontend and QA references.

### Dependencies

- Contracts
- Flows
- QA

### Known gaps or decisions required

- Confirm values against every approved flow before schema freeze.


---

## ENUM-04 — TaskStatus

| Field | Value |
| --- | --- |
| Type | enum |
| Domain | Shared state vocabulary |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Central task state machine.

### At a glance

| Field | Value |
| --- | --- |
| Values | DRAFT, PENDING_PAYMENT, PAID, DIRECT_OFFER_SENT, DIRECT_OFFER_EXPIRED, BROADCASTING, ACCEPTED, TASKER_EN_ROUTE, ARRIVED, IN_PROGRESS, COMPLETION_REQUESTED, COMPLETED, DISPUTED, CANCELLED, EXPIRED, REFUNDED |
| Purpose | Central task state machine. |
| Change rule | Additions require contract review; renames require data migration and consumer coordination. |

### Rules

- Use the same value in API, database, frontend and QA references.

### Dependencies

- Contracts
- Flows
- QA

### Known gaps or decisions required

- Confirm values against every approved flow before schema freeze.


---

## ENUM-01 — UserMode

| Field | Value |
| --- | --- |
| Type | enum |
| Domain | Shared state vocabulary |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Current app mode. Field name is mode.

### At a glance

| Field | Value |
| --- | --- |
| Values | TASK_OWNER, TASKER |
| Purpose | Current app mode. Field name is mode. |
| Change rule | Additions require contract review; renames require data migration and consumer coordination. |

### Rules

- The field name is mode; activeMode is forbidden.

### Dependencies

- Contracts
- Flows
- QA

### Known gaps or decisions required

- Confirm values against every approved flow before schema freeze.


---

## ENUM-02 — WalletType

| Field | Value |
| --- | --- |
| Type | enum |
| Domain | Shared state vocabulary |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Separates funds by purpose and withdrawal policy.

### At a glance

| Field | Value |
| --- | --- |
| Values | TASK_OWNER, TASKER, PLATFORM, REFERRAL |
| Purpose | Separates funds by purpose and withdrawal policy. |
| Change rule | Additions require contract review; renames require data migration and consumer coordination. |

### Rules

- Use the same value in API, database, frontend and QA references.

### Dependencies

- Contracts
- Flows
- QA

### Known gaps or decisions required

- Confirm values against every approved flow before schema freeze.


---

## ENUM-14 — WarningActorType

| Field | Value |
| --- | --- |
| Type | enum |
| Domain | Shared state vocabulary |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Warning owner.

### At a glance

| Field | Value |
| --- | --- |
| Values | TASK_OWNER, TASKER |
| Purpose | Warning owner. |
| Change rule | Additions require contract review; renames require data migration and consumer coordination. |

### Rules

- Use the same value in API, database, frontend and QA references.

### Dependencies

- Contracts
- Flows
- QA

### Known gaps or decisions required

- Confirm values against every approved flow before schema freeze.


---

## ENUM-11 — WithdrawalStatus

| Field | Value |
| --- | --- |
| Type | enum |
| Domain | Shared state vocabulary |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Withdrawal and batch state.

### At a glance

| Field | Value |
| --- | --- |
| Values | REQUESTED, QUEUED_FOR_BATCH, PROCESSING, SUCCESSFUL, FAILED, REVERSED, FLAGGED, CANCELLED |
| Purpose | Withdrawal and batch state. |
| Change rule | Additions require contract review; renames require data migration and consumer coordination. |

### Rules

- Use the same value in API, database, frontend and QA references.

### Dependencies

- Contracts
- Flows
- QA

### Known gaps or decisions required

- Confirm values against every approved flow before schema freeze.


---

## MODEL-TASK-05 — DirectTaskOffer

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Task marketplace |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

DirectTaskOffer supports the task marketplace domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative DirectTaskOffer record for Task marketplace. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Task marketplace |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Task marketplace
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-TASK-06 — FavoriteTasker

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Task marketplace |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

FavoriteTasker supports the task marketplace domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative FavoriteTasker record for Task marketplace. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Task marketplace |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Task marketplace
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-TASK-01 — Task

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Task marketplace |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Central marketplace work request.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Central marketplace work request. |
| Important rule | Owns status, amount, category, task owner, accepted tasker, timing, privacy boundaries. |
| Owning domain | Task marketplace |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Legacy Prisma execution baseline exists |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Owns status, amount, category, task owner, accepted tasker, timing, privacy boundaries.

### Dependencies

- Task marketplace
- Related contract and flow records

### Known gaps or decisions required

- Confirm every field, relation, retention rule and migration against the implementation before applying Prisma migrations.

### Prisma execution baseline

```prisma
model Task {
  id                String      @id @default(cuid())
  taskOwnerId       String
  taskOwner         User        @relation("TaskOwnerTasks", fields: [taskOwnerId], references: [id])
  acceptedTaskerId  String?
  acceptedTasker    User?       @relation("AcceptedTaskerTasks", fields: [acceptedTaskerId], references: [id])
  categoryId        String
  taskTypeId        String
  title             String
  description       String
  amountKobo        BigInt
  commissionBps     Int         @default(2000)
  status            TaskStatus  @default(DRAFT)
  requiredArrivalAt DateTime?
  acceptedAt        DateTime?
  startedJourneyAt  DateTime?
  arrivedAt         DateTime?
  beganAt           DateTime?
  completedAt       DateTime?
  cancelledAt       DateTime?
  createdAt         DateTime    @default(now())
  updatedAt         DateTime    @updatedAt

  location          TaskLocation?
  media             TaskMedia[]
  interests         TaskInterest[]
  directOffers      DirectTaskOffer[]
  statusEvents      TaskStatusEvent[]
  reports           TaskReport[]
  escrow            Escrow?

  @@index([status, createdAt])
  @@index([taskOwnerId, status])
  @@index([acceptedTaskerId, status])
  @@index([categoryId, status])
}
```


---

## MODEL-TASK-09 — TaskEtaSnapshot

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Task marketplace |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

TaskEtaSnapshot supports the task marketplace domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative TaskEtaSnapshot record for Task marketplace. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Task marketplace |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Task marketplace
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-TASK-04 — TaskInterest

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Task marketplace |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

TaskInterest supports the task marketplace domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative TaskInterest record for Task marketplace. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Task marketplace |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Task marketplace
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-TASK-02 — TaskLocation

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Task marketplace |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Task site address, geocode, pin confirmation and privacy metadata.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Task site address, geocode, pin confirmation and privacy metadata. |
| Important rule | Task site must be in Nigeria. Exact address shown only after eligibility. |
| Owning domain | Task marketplace |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Legacy Prisma execution baseline exists |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Task site must be in Nigeria. Exact address shown only after eligibility.

### Dependencies

- Task marketplace
- Related contract and flow records

### Known gaps or decisions required

- Confirm every field, relation, retention rule and migration against the implementation before applying Prisma migrations.

### Prisma execution baseline

```prisma
model TaskLocation {
  id              String   @id @default(cuid())
  taskId          String   @unique
  task            Task     @relation(fields: [taskId], references: [id])
  countryCode     String   @default("NG")
  state           String?
  city            String?
  addressText     String
  latitude        Decimal  @db.Decimal(10, 7)
  longitude       Decimal  @db.Decimal(10, 7)
  pinConfirmedAt  DateTime?
  geocodeProvider ProviderName?

  @@index([countryCode, state, city])
}
```


---

## MODEL-TASK-03 — TaskMedia

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Task marketplace |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Proof media for work to be done, completion proof, report evidence and voice-note metadata where applicable.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Proof media for work to be done, completion proof, report evidence and voice-note metadata where applicable. |
| Important rule | Photos/videos up to 50MB per file for task proof. Permission-controlled access. |
| Owning domain | Task marketplace |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Photos/videos up to 50MB per file for task proof. Permission-controlled access.

### Dependencies

- Task marketplace
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-TASK-07 — TaskOwnerRejection

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Task marketplace |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

TaskOwnerRejection supports the task marketplace domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative TaskOwnerRejection record for Task marketplace. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Task marketplace |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Task marketplace
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-TASK-08 — TaskStatusEvent

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Task marketplace |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

TaskStatusEvent supports the task marketplace domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative TaskStatusEvent record for Task marketplace. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Task marketplace |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Task marketplace
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-TASK-10 — TaskTrackingSample

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Task marketplace |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

TaskTrackingSample supports the task marketplace domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative TaskTrackingSample record for Task marketplace. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Task marketplace |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Task marketplace
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-TASKER-06 — KycAttempt

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Tasker activation and KYC |
| Status | approved-reference |
| Source | Approved Phase 1 KYC data-domain pilot merged with the legacy data baseline |

### In plain English

KycAttempt supports the tasker activation and kyc domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative KycAttempt record for Tasker activation and KYC. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Tasker activation and KYC |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Approved KYC pilot definition |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Tasker activation and KYC
- Approved KYC data-domain pilot

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-TASKER-05 — KycVerification

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Tasker activation and KYC |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

KycVerification supports the tasker activation and kyc domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative KycVerification record for Tasker activation and KYC. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Tasker activation and KYC |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Legacy Prisma execution baseline exists |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Tasker activation and KYC
- Related contract and flow records

### Known gaps or decisions required

- Confirm every field, relation, retention rule and migration against the implementation before applying Prisma migrations.

### Prisma execution baseline

```prisma
model KycVerification {
  id                String      @id @default(cuid())
  taskerProfileId   String
  taskerProfile     TaskerProfile @relation(fields: [taskerProfileId], references: [id])
  provider          ProviderName @default(SMILE_ID)
  identifierType    KycIdentifierType
  status            KycStatus
  providerJobId     String?
  submittedAt       DateTime    @default(now())
  decidedAt         DateTime?
  failureReason     String?

  @@index([taskerProfileId, status])
  @@index([provider, providerJobId])
}
```


---

## MODEL-TASKER-04 — TaskerAvailabilitySnapshot

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Tasker activation and KYC |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

TaskerAvailabilitySnapshot supports the tasker activation and kyc domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative TaskerAvailabilitySnapshot record for Tasker activation and KYC. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Tasker activation and KYC |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Tasker activation and KYC
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-TASKER-03 — TaskerPreference

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Tasker activation and KYC |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

TaskerPreference supports the tasker activation and kyc domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative TaskerPreference record for Tasker activation and KYC. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Tasker activation and KYC |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Tasker activation and KYC
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-TASKER-01 — TaskerProfile

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Tasker activation and KYC |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Tasker-specific profile, skills, bio, KYC activation and availability readiness.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Tasker-specific profile, skills, bio, KYC activation and availability readiness. |
| Important rule | Only present/active when user wants to earn as Tasker. |
| Owning domain | Tasker activation and KYC |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Legacy Prisma execution baseline exists |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Only present/active when user wants to earn as Tasker.

### Dependencies

- Tasker activation and KYC
- Related contract and flow records

### Known gaps or decisions required

- Confirm every field, relation, retention rule and migration against the implementation before applying Prisma migrations.

### Prisma execution baseline

```prisma
model TaskerProfile {
  id               String       @id @default(cuid())
  userId           String       @unique
  user             User         @relation(fields: [userId], references: [id])
  bio              String?
  isActive         Boolean      @default(false)
  kycStatus        KycStatus    @default(NOT_STARTED)
  maxTravelKm      Int?
  completedTaskCount Int        @default(0)
  averageRating    Decimal?     @db.Decimal(3, 2)
  createdAt        DateTime     @default(now())
  updatedAt        DateTime     @updatedAt

  kycVerifications KycVerification[]
  payoutAccounts   PayoutAccount[]

  @@index([isActive, kycStatus])
}
```


---

## MODEL-TASKER-02 — TaskerSkill

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Tasker activation and KYC |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

TaskerSkill supports the tasker activation and kyc domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative TaskerSkill record for Tasker activation and KYC. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Tasker activation and KYC |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Tasker activation and KYC
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-FINANCE-06 — Escrow

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Wallet, escrow and payouts |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Held funds for a task before completion or dispute outcome.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Held funds for a task before completion or dispute outcome. |
| Important rule | Release, refund and hold transitions must be auditable. |
| Owning domain | Wallet, escrow and payouts |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Legacy Prisma execution baseline exists |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Release, refund and hold transitions must be auditable.

### Dependencies

- Wallet, escrow and payouts
- Related contract and flow records

### Known gaps or decisions required

- Confirm every field, relation, retention rule and migration against the implementation before applying Prisma migrations.

### Prisma execution baseline

```prisma
model Escrow {
  id          String       @id @default(cuid())
  taskId      String       @unique
  task        Task         @relation(fields: [taskId], references: [id])
  amountKobo  BigInt
  status      EscrowStatus @default(HELD)
  heldAt      DateTime     @default(now())
  releasedAt  DateTime?
  refundedAt  DateTime?
}
```


---

## MODEL-FINANCE-03 — Payment

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Wallet, escrow and payouts |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

High-level payment record for provider collection.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | High-level payment record for provider collection. |
| Important rule | Frontend redirect is not final truth; webhook/backend verification is. |
| Owning domain | Wallet, escrow and payouts |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Frontend redirect is not final truth; webhook/backend verification is.

### Dependencies

- Wallet, escrow and payouts
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-FINANCE-04 — PaymentAttempt

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Wallet, escrow and payouts |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

PaymentAttempt supports the wallet, escrow and payouts domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative PaymentAttempt record for Wallet, escrow and payouts. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Wallet, escrow and payouts |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Wallet, escrow and payouts
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-FINANCE-09 — PayoutAccount

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Wallet, escrow and payouts |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

PayoutAccount supports the wallet, escrow and payouts domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative PayoutAccount record for Wallet, escrow and payouts. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Wallet, escrow and payouts |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Wallet, escrow and payouts
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-FINANCE-11 — PayoutBatch

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Wallet, escrow and payouts |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Bulk payout run for eligible withdrawal requests.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Bulk payout run for eligible withdrawal requests. |
| Important rule | Use Paystack/Moniepoint transfer rails; disputed Taskers require authorization. |
| Owning domain | Wallet, escrow and payouts |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Legacy Prisma execution baseline exists |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Use Paystack/Moniepoint transfer rails; disputed Taskers require authorization.

### Dependencies

- Wallet, escrow and payouts
- Related contract and flow records

### Known gaps or decisions required

- Confirm every field, relation, retention rule and migration against the implementation before applying Prisma migrations.

### Prisma execution baseline

```prisma
model PayoutBatch {
  id             String            @id @default(cuid())
  batchDate      DateTime
  status         PayoutBatchStatus @default(DRAFT)
  provider       ProviderName
  totalAmountKobo BigInt           @default(0)
  itemCount      Int               @default(0)
  approvedById   String?
  approvedAt     DateTime?
  createdAt      DateTime          @default(now())

  items          PayoutBatchItem[]

  @@index([batchDate, status])
}
```


---

## MODEL-FINANCE-12 — PayoutBatchItem

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Wallet, escrow and payouts |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

PayoutBatchItem supports the wallet, escrow and payouts domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative PayoutBatchItem record for Wallet, escrow and payouts. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Wallet, escrow and payouts |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Legacy Prisma execution baseline exists |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Wallet, escrow and payouts
- Related contract and flow records

### Known gaps or decisions required

- Confirm every field, relation, retention rule and migration against the implementation before applying Prisma migrations.

### Prisma execution baseline

```prisma
model PayoutBatchItem {
  id                  String            @id @default(cuid())
  payoutBatchId       String
  payoutBatch         PayoutBatch       @relation(fields: [payoutBatchId], references: [id])
  withdrawalRequestId String            @unique
  withdrawalRequest   WithdrawalRequest @relation(fields: [withdrawalRequestId], references: [id])
  status              WithdrawalStatus
  providerReference   String?
  failureReason       String?
}
```


---

## MODEL-FINANCE-05 — ProviderWebhookEvent

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Wallet, escrow and payouts |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

ProviderWebhookEvent supports the wallet, escrow and payouts domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative ProviderWebhookEvent record for Wallet, escrow and payouts. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Wallet, escrow and payouts |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Wallet, escrow and payouts
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-FINANCE-07 — TaskSettlement

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Wallet, escrow and payouts |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

TaskSettlement supports the wallet, escrow and payouts domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative TaskSettlement record for Wallet, escrow and payouts. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Wallet, escrow and payouts |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Wallet, escrow and payouts
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-FINANCE-08 — TaskSettlementHold

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Wallet, escrow and payouts |
| Status | planned |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

TaskSettlementHold supports the wallet, escrow and payouts domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative TaskSettlementHold record for Wallet, escrow and payouts. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Wallet, escrow and payouts |
| Sensitive-data classification | Internal application data; confirm field-level classification |
| Schema status | Conceptual model; executable schema not yet recorded |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Wallet, escrow and payouts
- Related contract and flow records

### Known gaps or decisions required

- Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved.


---

## MODEL-FINANCE-01 — Wallet

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Wallet, escrow and payouts |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Separate wallet per user and wallet type.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Separate wallet per user and wallet type. |
| Important rule | Task Owner wallet and Tasker wallet must be different records. |
| Owning domain | Wallet, escrow and payouts |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Legacy Prisma execution baseline exists |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Task Owner wallet and Tasker wallet must be different records.

### Dependencies

- Wallet, escrow and payouts
- Related contract and flow records

### Known gaps or decisions required

- Confirm every field, relation, retention rule and migration against the implementation before applying Prisma migrations.

### Prisma execution baseline

```prisma
model Wallet {
  id           String     @id @default(cuid())
  userId       String
  user         User       @relation(fields: [userId], references: [id])
  type         WalletType
  currency     String     @default("NGN")
  balanceKobo  BigInt     @default(0)
  lockedKobo   BigInt     @default(0)
  createdAt    DateTime   @default(now())
  updatedAt    DateTime   @updatedAt

  entries      WalletLedgerEntry[]

  @@unique([userId, type, currency])
}
```


---

## MODEL-FINANCE-02 — WalletLedgerEntry

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Wallet, escrow and payouts |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

WalletLedgerEntry supports the wallet, escrow and payouts domain.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Persist the authoritative WalletLedgerEntry record for Wallet, escrow and payouts. |
| Important rule | Only the owning backend module writes this model directly. |
| Owning domain | Wallet, escrow and payouts |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Legacy Prisma execution baseline exists |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Preserve domain ownership and historical integrity.

### Dependencies

- Wallet, escrow and payouts
- Related contract and flow records

### Known gaps or decisions required

- Confirm every field, relation, retention rule and migration against the implementation before applying Prisma migrations.

### Prisma execution baseline

```prisma
model WalletLedgerEntry {
  id                 String   @id @default(cuid())
  walletId           String
  wallet             Wallet   @relation(fields: [walletId], references: [id])
  direction          LedgerDirection
  amountKobo         BigInt
  balanceAfterKobo   BigInt
  reason             LedgerReason
  taskId             String?
  transactionGroupId String
  idempotencyKey     String?  @unique
  createdAt          DateTime @default(now())

  @@index([walletId, createdAt])
  @@index([transactionGroupId])
}
```


---

## MODEL-FINANCE-10 — WithdrawalRequest

| Field | Value |
| --- | --- |
| Type | data-model |
| Domain | Wallet, escrow and payouts |
| Status | execution-baseline |
| Source | Legacy Data Model and Prisma Schema Planning v1 |

### In plain English

Tasker withdrawal request waiting for payout batch.

### At a glance

| Field | Value |
| --- | --- |
| Business responsibility | Tasker withdrawal request waiting for payout batch. |
| Important rule | Minimum NGN 1,000; PIN required; batch dates 14th and 28th. |
| Owning domain | Wallet, escrow and payouts |
| Sensitive-data classification | Sensitive or restricted; apply least privilege and audit rules |
| Schema status | Legacy Prisma execution baseline exists |

### Rules

- Durable state lives in PostgreSQL; Valkey is not the authoritative record.
- State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.
- Minimum NGN 1,000; PIN required; batch dates 14th and 28th.

### Dependencies

- Wallet, escrow and payouts
- Related contract and flow records

### Known gaps or decisions required

- Confirm every field, relation, retention rule and migration against the implementation before applying Prisma migrations.

### Prisma execution baseline

```prisma
model WithdrawalRequest {
  id              String           @id @default(cuid())
  taskerId        String
  walletId        String
  amountKobo      BigInt
  status          WithdrawalStatus @default(REQUESTED)
  payoutBatchItem PayoutBatchItem?
  requestedAt     DateTime         @default(now())
  processedAt     DateTime?
  idempotencyKey  String?          @unique

  @@index([taskerId, status])
  @@index([requestedAt])
}
```

