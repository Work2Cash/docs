---
id: TECH-CONTRACTS-001
title: API, Socket and OpenAPI Reference
type: technical-reference-agent-pack
audience: Mobile, Admin, Backend, QA and AI agents
owner: Backend Lead
reviewers: Technical Lead, Mobile Lead, Admin Lead, QA
status: in-review
version: 1.0
last_reviewed: 2026-07-17
authority: Approved standalone flows, approved contract decisions and provisional Main Enterprise Architecture
generated_from: content/technical/contracts.json
do_not_edit: true
---

# API, Socket and OpenAPI Reference

> Generated focused agent pack. Edit `content/technical/contracts.json`, then run `node scripts/generate-technical-docs.js`.

## Purpose

One implementation reference for REST endpoints, socket events, provider callbacks and worker queues. Records are independently linkable; unresolved shapes are explicit blockers rather than implied permission to guess.

## How to use this pack

Use only the record required by the assigned flow or daily task. A named gap blocks that portion of implementation. Do not infer missing paths, fields, provider behavior or product rules from adjacent records.

## Authority notes

- Approved referral and KYC decisions override the wider provisional legacy table.
- A provisional record describes the intended boundary but may still contain named request, response or model gaps.

## Shared rules

- Do not invent a path, DTO, field, permission, error, provider behavior or state transition.
- REST and persisted records remain the source of truth for durable state changes.
- Frontend payment redirects are not final payment proof.
- Direct offers use REST and normal notifications, not sockets.
- Referral has no public credit mutation and no referral socket.

---

## API-104 — DELETE /admin/auth/sessions/{sessionId}

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Revoke an admin session.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | DELETE /admin/auth/sessions/{sessionId} |
| Actor | Admin |
| Authentication | Admin token + TOTP |
| Idempotency | Yes |
| Flow references | AF-17 |
| Implementation status | Planned / not verified against running code |

### Rules

- High-impact security action; audit required.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- AF-17

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-106 — GET /admin/admin-users

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

List admin users.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /admin/admin-users |
| Actor | Admin Owner/Technical Lead |
| Authentication | Admin token |
| Idempotency | No |
| Flow references | AF-17 |
| Implementation status | Planned / not verified against running code |

### Rules

- Separate from platform user management.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- AF-17

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-128 — GET /admin/audit-logs

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Search privileged actions and system audit events.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /admin/audit-logs |
| Actor | Admin Risk |
| Authentication | Admin token |
| Idempotency | No |
| Flow references | Audit |
| Implementation status | Planned / not verified against running code |

### Rules

- Immutable audit trail.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Audit

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-103 — GET /admin/auth/sessions

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

List admin sessions and devices.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /admin/auth/sessions |
| Actor | Admin |
| Authentication | Admin token |
| Idempotency | No |
| Flow references | AF-17 |
| Implementation status | Planned / not verified against running code |

### Rules

- Used by admin security and audit review.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- AF-17

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-126 — GET /admin/config

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Read remote config values.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /admin/config |
| Actor | Admin Ops |
| Authentication | Admin token |
| Idempotency | No |
| Flow references | Remote Config |
| Implementation status | Planned / not verified against running code |

### Rules

- Config lives in admin dashboard, not external remote-config provider.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Remote Config

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-114 — GET /admin/dashboard

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Return operating dashboard summary.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /admin/dashboard |
| Actor | Admin |
| Authentication | Admin token |
| Idempotency | No |
| Flow references | Admin Home |
| Implementation status | Planned / not verified against running code |

### Rules

- Role-filtered metrics.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Admin Home

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-121 — GET /admin/finance/transactions

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

List payments, escrow, wallet entries, transfers, and receipts.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /admin/finance/transactions |
| Actor | Admin Finance |
| Authentication | Admin token |
| Idempotency | No |
| Flow references | Finance |
| Implementation status | Planned / not verified against running code |

### Rules

- Supports receipt/transaction review.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Finance

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-113 — GET /admin/permissions

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

List available permission keys.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /admin/permissions |
| Actor | Admin Owner/Technical Lead |
| Authentication | Admin token |
| Idempotency | No |
| Flow references | AF-17 |
| Implementation status | Planned / not verified against running code |

### Rules

- Permission keys should be stable and code-owned.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- AF-17

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-133 — GET /admin/referrals

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | approved-reference |
| Source | Referral Contract Group |

### In plain English

Returns the permission-filtered referral review queue for AF-15.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /admin/referrals |
| Authority | Approved CONTRACT-REFERRAL-001 decision |
| Detailed contract | Referral Contract Group |
| Implementation status | Approved contract; implementation not verified |

### Rules

- Use the complete request, response, permission, concurrency, idempotency and error rules in the approved source.
- This approved record overrides the less-specific legacy contract table.

### Dependencies

- Referral Contract Group
- Approved standalone flows

### Known gaps or decisions required

- OpenAPI component schemas must be completed from the approved examples before generated clients are treated as final.


---

## API-134 — GET /admin/referrals/{attributionId}

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | approved-reference |
| Source | Referral Contract Group |

### In plain English

Returns one safe referral decision record with referrer/referred-user summaries, attribution history, authoritative paid-task qualification evidence, reward state, wallet-credit reference, risk-review link and prior decisions.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /admin/referrals/{attributionId} |
| Authority | Approved CONTRACT-REFERRAL-001 decision |
| Detailed contract | Referral Contract Group |
| Implementation status | Approved contract; implementation not verified |

### Rules

- Use the complete request, response, permission, concurrency, idempotency and error rules in the approved source.
- This approved record overrides the less-specific legacy contract table.

### Dependencies

- Referral Contract Group
- Approved standalone flows

### Known gaps or decisions required

- OpenAPI component schemas must be completed from the approved examples before generated clients are treated as final.


---

## API-110 — GET /admin/roles

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

List roles and permissions.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /admin/roles |
| Actor | Admin Owner/Technical Lead |
| Authentication | Admin token |
| Idempotency | No |
| Flow references | AF-17 |
| Implementation status | Planned / not verified against running code |

### Rules

- Used by RBAC screens.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- AF-17

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-118 — GET /admin/tasks

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Search and filter tasks.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /admin/tasks |
| Actor | Admin Ops |
| Authentication | Admin token |
| Idempotency | No |
| Flow references | Task Ops |
| Implementation status | Planned / not verified against running code |

### Rules

- Includes state, city/zone, owner, tasker, payment state.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Task Ops

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-119 — GET /admin/tasks/{taskId}

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

View task details and timeline.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /admin/tasks/{taskId} |
| Actor | Admin Ops |
| Authentication | Admin token |
| Idempotency | No |
| Flow references | Task Ops |
| Implementation status | Planned / not verified against running code |

### Rules

- Media access is permission-controlled.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Task Ops

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-129 — GET /admin/use-case-health

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

View use case invocation, last used, success/failure state.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /admin/use-case-health |
| Actor | Technical/Admin |
| Authentication | Admin token |
| Idempotency | No |
| Flow references | Use Case Health |
| Implementation status | Planned / not verified against running code |

### Rules

- Backed by backend use case tracking.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Use Case Health

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-115 — GET /admin/users

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Search users and account states.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /admin/users |
| Actor | Admin Support/Risk |
| Authentication | Admin token |
| Idempotency | No |
| Flow references | User Admin |
| Implementation status | Planned / not verified against running code |

### Rules

- No raw secrets or full payment data.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- User Admin

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-116 — GET /admin/users/{userId}

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | approved-reference |
| Source | KYC Review Contract Group |

### In plain English

Returns permission-gated user, Tasker and KYC summary context when AF-04 is entered from User Management. It is not the dedicated evidence/detail contract.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /admin/users/{userId} |
| Authority | Approved Phase 1 KYC review contract decision |
| Detailed contract | KYC Review Contract Group |
| Implementation status | Approved contract; implementation not verified |

### Rules

- Use the complete request, response, permission, concurrency, idempotency and error rules in the approved source.
- This approved record overrides the less-specific legacy contract table.

### Dependencies

- KYC Review Contract Group
- Approved standalone flows

### Known gaps or decisions required

- OpenAPI component schemas must be completed from the approved examples before generated clients are treated as final.


---

## API-108 — PATCH /admin/admin-users/{adminUserId}

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Update admin user status, metadata, or assigned roles.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | PATCH /admin/admin-users/{adminUserId} |
| Actor | Admin Owner/Technical Lead |
| Authentication | Admin token + TOTP |
| Idempotency | No |
| Flow references | AF-17 |
| Implementation status | Planned / not verified against running code |

### Rules

- No direct database edits for admin access.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- AF-17

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-127 — PATCH /admin/config/{key}

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Update feature flags, thresholds, or platform caps.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | PATCH /admin/config/{key} |
| Actor | Admin Ops Lead |
| Authentication | Admin token + TOTP |
| Idempotency | Yes |
| Flow references | Remote Config |
| Implementation status | Planned / not verified against running code |

### Rules

- Changes require audit log.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Remote Config

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-112 — PATCH /admin/roles/{roleId}

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Update role permissions.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | PATCH /admin/roles/{roleId} |
| Actor | Admin Owner/Technical Lead |
| Authentication | Admin token + TOTP |
| Idempotency | No |
| Flow references | AF-17 |
| Implementation status | Planned / not verified against running code |

### Rules

- Must prevent removing last effective platform owner access.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- AF-17

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-107 — POST /admin/admin-users

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Invite or create admin user.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/admin-users |
| Actor | Admin Owner/Technical Lead |
| Authentication | Admin token + TOTP |
| Idempotency | Yes |
| Flow references | AF-17 |
| Implementation status | Planned / not verified against running code |

### Rules

- Requires role assignment and audit reason.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- AF-17

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-109 — POST /admin/admin-users/{adminUserId}/disable

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Disable an admin account.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/admin-users/{adminUserId}/disable |
| Actor | Admin Owner/Technical Lead |
| Authentication | Admin token + TOTP |
| Idempotency | Yes |
| Flow references | AF-17 |
| Implementation status | Planned / not verified against running code |

### Rules

- Revokes active sessions and records audit event.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- AF-17

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-124 — POST /admin/announcements

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Create notification or announcement campaign.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/announcements |
| Actor | Admin Ops |
| Authentication | Admin token |
| Idempotency | Yes |
| Flow references | Announcements |
| Implementation status | Planned / not verified against running code |

### Rules

- Channels: FCM, in-app, email, critical SMS only.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Announcements

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-099 — POST /admin/auth/login

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Authenticate admin user with email/password.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/auth/login |
| Actor | Admin |
| Authentication | Public admin |
| Idempotency | No |
| Flow references | AF-01 |
| Implementation status | Planned / not verified against running code |

### Rules

- If password is valid, require TOTP before issuing full admin session.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- AF-01

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-105 — POST /admin/auth/logout

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Invalidate current admin session.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/auth/logout |
| Actor | Admin |
| Authentication | Admin token |
| Idempotency | Yes |
| Flow references | AF-01 |
| Implementation status | Planned / not verified against running code |

### Rules

- Client clears local admin session state.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- AF-01

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-101 — POST /admin/auth/totp/enroll

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Enroll TOTP for an admin account.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/auth/totp/enroll |
| Actor | Admin |
| Authentication | Admin token or invite token |
| Idempotency | Yes |
| Flow references | Admin Security |
| Implementation status | Planned / not verified against running code |

### Rules

- Only allowed during approved setup/recovery path.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Admin Security

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-102 — POST /admin/auth/totp/recovery-codes

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Generate or rotate recovery codes.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/auth/totp/recovery-codes |
| Actor | Admin |
| Authentication | Admin token + TOTP |
| Idempotency | Yes |
| Flow references | Admin Security |
| Implementation status | Planned / not verified against running code |

### Rules

- Display once; store hashed codes only.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Admin Security

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-100 — POST /admin/auth/totp/verify

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Verify TOTP challenge during login or sensitive operation.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/auth/totp/verify |
| Actor | Admin |
| Authentication | Admin pre-session or admin token |
| Idempotency | Yes |
| Flow references | AF-01 |
| Implementation status | Planned / not verified against running code |

### Rules

- Required for admin login completion and high-impact actions.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- AF-01

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-135 — POST /admin/referrals/{attributionId}/approve

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | approved-reference |
| Source | Referral Contract Group |

### In plain English

Approved contract record from Referral Contract Group.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/referrals/{attributionId}/approve |
| Authority | Approved CONTRACT-REFERRAL-001 decision |
| Detailed contract | Referral Contract Group |
| Implementation status | Approved contract; implementation not verified |

### Rules

- Use the complete request, response, permission, concurrency, idempotency and error rules in the approved source.
- This approved record overrides the less-specific legacy contract table.

### Dependencies

- Referral Contract Group
- Approved standalone flows

### Known gaps or decisions required

- OpenAPI component schemas must be completed from the approved examples before generated clients are treated as final.


---

## API-136 — POST /admin/referrals/{attributionId}/hold

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | approved-reference |
| Source | Referral Contract Group |

### In plain English

Approved contract record from Referral Contract Group.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/referrals/{attributionId}/hold |
| Authority | Approved CONTRACT-REFERRAL-001 decision |
| Detailed contract | Referral Contract Group |
| Implementation status | Approved contract; implementation not verified |

### Rules

- Use the complete request, response, permission, concurrency, idempotency and error rules in the approved source.
- This approved record overrides the less-specific legacy contract table.

### Dependencies

- Referral Contract Group
- Approved standalone flows

### Known gaps or decisions required

- OpenAPI component schemas must be completed from the approved examples before generated clients are treated as final.


---

## API-137 — POST /admin/referrals/{attributionId}/reject

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | approved-reference |
| Source | Referral Contract Group |

### In plain English

Approved contract record from Referral Contract Group.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/referrals/{attributionId}/reject |
| Authority | Approved CONTRACT-REFERRAL-001 decision |
| Detailed contract | Referral Contract Group |
| Implementation status | Approved contract; implementation not verified |

### Rules

- Use the complete request, response, permission, concurrency, idempotency and error rules in the approved source.
- This approved record overrides the less-specific legacy contract table.

### Dependencies

- Referral Contract Group
- Approved standalone flows

### Known gaps or decisions required

- OpenAPI component schemas must be completed from the approved examples before generated clients are treated as final.


---

## API-111 — POST /admin/roles

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Create a role.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/roles |
| Actor | Admin Owner/Technical Lead |
| Authentication | Admin token + TOTP |
| Idempotency | Yes |
| Flow references | AF-17 |
| Implementation status | Planned / not verified against running code |

### Rules

- Requires permission set and reason.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- AF-17

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-117 — POST /admin/users/{userId}/suspend

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Admin operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Suspend account after verified risk rule.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/users/{userId}/suspend |
| Actor | Admin Risk |
| Authentication | Admin token + TOTP |
| Idempotency | Yes |
| Flow references | Risk |
| Implementation status | Planned / not verified against running code |

### Rules

- Requires reason and audit log.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Risk

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-032 — GET /catalog/categories

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Catalog and coverage |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

List active task categories and display order.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /catalog/categories |
| Actor | User/Admin |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Task Creation |
| Implementation status | Planned / not verified against running code |

### Rules

- MVP categories: Home, Errands, Office, Support.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Task Creation

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-033 — GET /catalog/task-types

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Catalog and coverage |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

List task types under each category.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /catalog/task-types |
| Actor | User/Admin |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Task Creation |
| Implementation status | Planned / not verified against running code |

### Rules

- Client should cache and refresh on app boot.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Task Creation

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-035 — PATCH /admin/catalog/categories/{categoryId}

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Catalog and coverage |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Update labels, ordering, and visibility.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | PATCH /admin/catalog/categories/{categoryId} |
| Actor | Admin |
| Authentication | Admin token |
| Idempotency | No |
| Flow references | Admin Catalog |
| Implementation status | Planned / not verified against running code |

### Rules

- Renames should preserve stable IDs.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Admin Catalog

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-034 — POST /admin/catalog/categories

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Catalog and coverage |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Create category or task type.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/catalog/categories |
| Actor | Admin |
| Authentication | Admin token |
| Idempotency | Yes |
| Flow references | Admin Catalog |
| Implementation status | Planned / not verified against running code |

### Rules

- Use carefully; affects mobile task creation.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Admin Catalog

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-037 — POST /admin/catalog/categories/{categoryId}/archive

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Catalog and coverage |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Archive unused or retired category.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/catalog/categories/{categoryId}/archive |
| Actor | Admin |
| Authentication | Admin token |
| Idempotency | Yes |
| Flow references | Admin Catalog |
| Implementation status | Planned / not verified against running code |

### Rules

- Hard delete only unused drafts.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Admin Catalog

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-036 — POST /admin/catalog/categories/{categoryId}/disable

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Catalog and coverage |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Disable category for new tasks.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/catalog/categories/{categoryId}/disable |
| Actor | Admin |
| Authentication | Admin token |
| Idempotency | Yes |
| Flow references | Admin Catalog |
| Implementation status | Planned / not verified against running code |

### Rules

- Existing tasks remain valid.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Admin Catalog

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## SOCKET-014 — /presence · presence.heartbeat

| Field | Value |
| --- | --- |
| Type | socket-event |
| Domain | Communication and realtime |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Maintain online/available state.

### At a glance

| Field | Value |
| --- | --- |
| Namespace | /presence |
| Event | presence.heartbeat |
| Direction | Client -> Server |
| Actors | User/Admin |
| Persistence | Latest state |

### Rules

- Socket delivery is never the sole source of durable business truth.
- After reconnect, clients rejoin authorized rooms and reconcile through REST.

### Dependencies

- Authorized socket session
- Latest state

### Known gaps or decisions required

- Payload schema and acknowledgement errors require explicit review before implementation.


---

## SOCKET-015 — /presence · presence.updated

| Field | Value |
| --- | --- |
| Type | socket-event |
| Domain | Communication and realtime |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Broadcast presence changes where relevant.

### At a glance

| Field | Value |
| --- | --- |
| Namespace | /presence |
| Event | presence.updated |
| Direction | Server -> Client |
| Actors | Authorized viewers |
| Persistence | No |

### Rules

- Socket delivery is never the sole source of durable business truth.
- After reconnect, clients rejoin authorized rooms and reconcile through REST.

### Dependencies

- Authorized socket session
- No

### Known gaps or decisions required

- Payload schema and acknowledgement errors require explicit review before implementation.


---

## SOCKET-010 — /support · support.assignment.updated

| Field | Value |
| --- | --- |
| Type | socket-event |
| Domain | Communication and realtime |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Notify support agent assignment or reassignment.

### At a glance

| Field | Value |
| --- | --- |
| Namespace | /support |
| Event | support.assignment.updated |
| Direction | Server -> Client |
| Actors | User, Support Admin |
| Persistence | Yes |

### Rules

- Socket delivery is never the sole source of durable business truth.
- After reconnect, clients rejoin authorized rooms and reconcile through REST.

### Dependencies

- Authorized socket session
- Yes

### Known gaps or decisions required

- Payload schema and acknowledgement errors require explicit review before implementation.


---

## SOCKET-009 — /support · support.message.new

| Field | Value |
| --- | --- |
| Type | socket-event |
| Domain | Communication and realtime |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Deliver support message.

### At a glance

| Field | Value |
| --- | --- |
| Namespace | /support |
| Event | support.message.new |
| Direction | Server -> Client |
| Actors | User, Support Admin |
| Persistence | Already queued for save |

### Rules

- Socket delivery is never the sole source of durable business truth.
- After reconnect, clients rejoin authorized rooms and reconcile through REST.

### Dependencies

- Authorized socket session
- Already queued for save

### Known gaps or decisions required

- Payload schema and acknowledgement errors require explicit review before implementation.


---

## SOCKET-008 — /support · support.message.send

| Field | Value |
| --- | --- |
| Type | socket-event |
| Domain | Communication and realtime |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Send support live chat message.

### At a glance

| Field | Value |
| --- | --- |
| Namespace | /support |
| Event | support.message.send |
| Direction | Client -> Server |
| Actors | User, Support Admin |
| Persistence | Async PostgreSQL save |

### Rules

- Socket delivery is never the sole source of durable business truth.
- After reconnect, clients rejoin authorized rooms and reconcile through REST.

### Dependencies

- Authorized socket session
- Async PostgreSQL save

### Known gaps or decisions required

- Payload schema and acknowledgement errors require explicit review before implementation.


---

## SOCKET-007 — /support · support.session.join

| Field | Value |
| --- | --- |
| Type | socket-event |
| Domain | Communication and realtime |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Join support live chat session.

### At a glance

| Field | Value |
| --- | --- |
| Namespace | /support |
| Event | support.session.join |
| Direction | Client -> Server |
| Actors | User, Support Admin |
| Persistence | No |

### Rules

- Socket delivery is never the sole source of durable business truth.
- After reconnect, clients rejoin authorized rooms and reconcile through REST.

### Dependencies

- Authorized socket session
- No

### Known gaps or decisions required

- Payload schema and acknowledgement errors require explicit review before implementation.


---

## SOCKET-003 — /task · task.chat.new

| Field | Value |
| --- | --- |
| Type | socket-event |
| Domain | Communication and realtime |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Deliver new chat message.

### At a glance

| Field | Value |
| --- | --- |
| Namespace | /task |
| Event | task.chat.new |
| Direction | Server -> Client |
| Actors | Task Owner, Tasker |
| Persistence | Already queued for save |

### Rules

- Socket delivery is never the sole source of durable business truth.
- After reconnect, clients rejoin authorized rooms and reconcile through REST.

### Dependencies

- Authorized socket session
- Already queued for save

### Known gaps or decisions required

- Payload schema and acknowledgement errors require explicit review before implementation.


---

## SOCKET-004 — /task · task.chat.read

| Field | Value |
| --- | --- |
| Type | socket-event |
| Domain | Communication and realtime |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Mark messages read and broadcast read receipt.

### At a glance

| Field | Value |
| --- | --- |
| Namespace | /task |
| Event | task.chat.read |
| Direction | Both |
| Actors | Task Owner, Tasker |
| Persistence | Yes |

### Rules

- Socket delivery is never the sole source of durable business truth.
- After reconnect, clients rejoin authorized rooms and reconcile through REST.

### Dependencies

- Authorized socket session
- Yes

### Known gaps or decisions required

- Payload schema and acknowledgement errors require explicit review before implementation.


---

## SOCKET-002 — /task · task.chat.send

| Field | Value |
| --- | --- |
| Type | socket-event |
| Domain | Communication and realtime |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Send task chat message after task is accepted.

### At a glance

| Field | Value |
| --- | --- |
| Namespace | /task |
| Event | task.chat.send |
| Direction | Client -> Server |
| Actors | Task Owner, Tasker |
| Persistence | Async PostgreSQL save |

### Rules

- Socket delivery is never the sole source of durable business truth.
- After reconnect, clients rejoin authorized rooms and reconcile through REST.

### Dependencies

- Authorized socket session
- Async PostgreSQL save

### Known gaps or decisions required

- Payload schema and acknowledgement errors require explicit review before implementation.


---

## SOCKET-005 — /task · task.chat.typing

| Field | Value |
| --- | --- |
| Type | socket-event |
| Domain | Communication and realtime |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Transient typing indicator.

### At a glance

| Field | Value |
| --- | --- |
| Namespace | /task |
| Event | task.chat.typing |
| Direction | Both |
| Actors | Task Owner, Tasker |
| Persistence | No |

### Rules

- Socket delivery is never the sole source of durable business truth.
- After reconnect, clients rejoin authorized rooms and reconcile through REST.

### Dependencies

- Authorized socket session
- No

### Known gaps or decisions required

- Payload schema and acknowledgement errors require explicit review before implementation.


---

## SOCKET-001 — /task · task.room.join

| Field | Value |
| --- | --- |
| Type | socket-event |
| Domain | Communication and realtime |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Join task room after membership/state authorization.

### At a glance

| Field | Value |
| --- | --- |
| Namespace | /task |
| Event | task.room.join |
| Direction | Client -> Server |
| Actors | Task Owner, Tasker |
| Persistence | No |

### Rules

- Socket delivery is never the sole source of durable business truth.
- After reconnect, clients rejoin authorized rooms and reconcile through REST.

### Dependencies

- Authorized socket session
- No

### Known gaps or decisions required

- Payload schema and acknowledgement errors require explicit review before implementation.


---

## SOCKET-006 — /task · task.voice.created

| Field | Value |
| --- | --- |
| Type | socket-event |
| Domain | Communication and realtime |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Notify that a voice note media object is ready.

### At a glance

| Field | Value |
| --- | --- |
| Namespace | /task |
| Event | task.voice.created |
| Direction | Server -> Client |
| Actors | Task Owner, Tasker |
| Persistence | Media metadata saved |

### Rules

- Socket delivery is never the sole source of durable business truth.
- After reconnect, clients rejoin authorized rooms and reconcile through REST.

### Dependencies

- Authorized socket session
- Media metadata saved

### Known gaps or decisions required

- Payload schema and acknowledgement errors require explicit review before implementation.


---

## SOCKET-013 — /tracking · tracking.eta.updated

| Field | Value |
| --- | --- |
| Type | socket-event |
| Domain | Communication and realtime |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Send ETA after backend guard permits paid refresh.

### At a glance

| Field | Value |
| --- | --- |
| Namespace | /tracking |
| Event | tracking.eta.updated |
| Direction | Server -> Client |
| Actors | Task Owner, Tasker |
| Persistence | Yes |

### Rules

- Socket delivery is never the sole source of durable business truth.
- After reconnect, clients rejoin authorized rooms and reconcile through REST.

### Dependencies

- Authorized socket session
- Yes

### Known gaps or decisions required

- Payload schema and acknowledgement errors require explicit review before implementation.


---

## SOCKET-011 — /tracking · tracking.location.update

| Field | Value |
| --- | --- |
| Type | socket-event |
| Domain | Communication and realtime |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Stream Tasker GPS while accepted/en route/arrived/in progress.

### At a glance

| Field | Value |
| --- | --- |
| Namespace | /tracking |
| Event | tracking.location.update |
| Direction | Tasker -> Server |
| Actors | Tasker |
| Persistence | Latest state + sampled audit |

### Rules

- Socket delivery is never the sole source of durable business truth.
- After reconnect, clients rejoin authorized rooms and reconcile through REST.

### Dependencies

- Authorized socket session
- Latest state + sampled audit

### Known gaps or decisions required

- Payload schema and acknowledgement errors require explicit review before implementation.


---

## SOCKET-012 — /tracking · tracking.location.updated

| Field | Value |
| --- | --- |
| Type | socket-event |
| Domain | Communication and realtime |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Send allowed live location update.

### At a glance

| Field | Value |
| --- | --- |
| Namespace | /tracking |
| Event | tracking.location.updated |
| Direction | Server -> Client |
| Actors | Task Owner |
| Persistence | No |

### Rules

- Socket delivery is never the sole source of durable business truth.
- After reconnect, clients rejoin authorized rooms and reconcile through REST.

### Dependencies

- Authorized socket session
- No

### Known gaps or decisions required

- Payload schema and acknowledgement errors require explicit review before implementation.


---

## API-088 — GET /notifications

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Communication and support |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

List in-app notifications.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /notifications |
| Actor | User |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Notifications |
| Implementation status | Planned / not verified against running code |

### Rules

- FCM wakes device; in-app list provides durable state.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Notifications

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-091 — GET /tasks/{taskId}/call-sessions/active

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Communication and support |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Return active masked call session if one exists.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /tasks/{taskId}/call-sessions/active |
| Actor | Task Owner/Tasker |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Masked Calls |
| Implementation status | Planned / not verified against running code |

### Rules

- Only available for accepted, en route, arrived, in progress, completion, or valid dispute window states.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Masked Calls

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-093 — GET /tasks/{taskId}/communications

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Communication and support |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Return communication summary for task chat, voice notes, masked call sessions, and audit flags.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /tasks/{taskId}/communications |
| Actor | Task Owner/Tasker/Admin |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Communication Audit |
| Implementation status | Planned / not verified against running code |

### Rules

- Admin sees policy/audit metadata according to permission; users see their task communication scope.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Communication Audit

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-089 — POST /notifications/{notificationId}/read

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Communication and support |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Mark notification read.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /notifications/{notificationId}/read |
| Actor | User |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Notifications |
| Implementation status | Planned / not verified against running code |

### Rules

- Idempotent by notification ID.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Notifications

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-087 — POST /support/emergency

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Communication and support |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Open emergency support request.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /support/emergency |
| Actor | User |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Emergency Support |
| Implementation status | Planned / not verified against running code |

### Rules

- Priority routing for safety-related cases.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Emergency Support

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-086 — POST /support/sessions

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Communication and support |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Open support live chat session.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /support/sessions |
| Actor | User |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Support Chat |
| Implementation status | Planned / not verified against running code |

### Rules

- Live chat uses socket events after session creation.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Support Chat

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-090 — POST /tasks/{taskId}/call-sessions

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Communication and support |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Create or retrieve a masked call session for an eligible task state.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /tasks/{taskId}/call-sessions |
| Actor | Task Owner/Tasker |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Masked Calls |
| Implementation status | Planned / not verified against running code |

### Rules

- Returns Work2Cash proxy number; never returns real recipient number.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Masked Calls

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-092 — POST /tasks/{taskId}/call-sessions/{sessionId}/end

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Communication and support |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Close a masked call session.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /tasks/{taskId}/call-sessions/{sessionId}/end |
| Actor | Task Owner/Tasker/System |
| Authentication | Access token or provider callback |
| Idempotency | Yes |
| Flow references | Masked Calls |
| Implementation status | Planned / not verified against running code |

### Rules

- Used when task ends, session expires, or provider reports call completion.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Masked Calls

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-094 — POST /tasks/{taskId}/voice-notes

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Communication and support |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Finalize uploaded voice note metadata for task chat.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /tasks/{taskId}/voice-notes |
| Actor | Task Owner/Tasker |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Voice Notes |
| Implementation status | Planned / not verified against running code |

### Rules

- Actual delivery notification is socket-based after media metadata is stored.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Voice Notes

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-018 — DELETE /me/addresses/{addressId}

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Remove saved address from future use.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | DELETE /me/addresses/{addressId} |
| Actor | User |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Address Book |
| Implementation status | Planned / not verified against running code |

### Rules

- Soft delete preferred.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Address Book

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-026 — DELETE /me/sessions/{sessionId}

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Revoke another device session.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | DELETE /me/sessions/{sessionId} |
| Actor | User |
| Authentication | Access token + PIN |
| Idempotency | Yes |
| Flow references | Device Management |
| Implementation status | Planned / not verified against running code |

### Rules

- Sensitive action.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Device Management

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-012 — GET /me

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Return authenticated user, mode, KYC, profile completeness, wallets, and next actions.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /me |
| Actor | User |
| Authentication | Access token |
| Idempotency | No |
| Flow references | App Boot |
| Implementation status | Planned / not verified against running code |

### Rules

- This is the mobile source of truth after login and socket reconnect.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- App Boot

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-015 — GET /me/addresses

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

List saved addresses for task posting and profile convenience.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /me/addresses |
| Actor | User |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Address Book |
| Implementation status | Planned / not verified against running code |

### Rules

- Exact addresses are private user data.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Address Book

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-019 — GET /me/notification-preferences

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Return push, email, SMS, and announcement preference settings.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /me/notification-preferences |
| Actor | User |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Preferences |
| Implementation status | Planned / not verified against running code |

### Rules

- Critical safety/payment messages may bypass marketing preferences.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Preferences

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-025 — GET /me/sessions

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

List active devices and sessions.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /me/sessions |
| Actor | User |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Device Management |
| Implementation status | Planned / not verified against running code |

### Rules

- Admin can also view risk metadata, not raw tokens.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Device Management

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-017 — PATCH /me/addresses/{addressId}

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Update saved address metadata.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | PATCH /me/addresses/{addressId} |
| Actor | User |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Address Book |
| Implementation status | Planned / not verified against running code |

### Rules

- Do not use this to alter historical task site records.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Address Book

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-020 — PATCH /me/notification-preferences

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Update notification preferences.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | PATCH /me/notification-preferences |
| Actor | User |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Preferences |
| Implementation status | Planned / not verified against running code |

### Rules

- SMS critical-only rule remains controlled by platform policy.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Preferences

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-013 — PATCH /me/profile

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Update profile fields such as name, photo, gender, and contact metadata.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | PATCH /me/profile |
| Actor | User |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Complete Profile |
| Implementation status | Planned / not verified against running code |

### Rules

- Changing email/phone is a sensitive action and requires PIN.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Complete Profile

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-002 — POST /auth/login

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Authenticate with password and issue access/refresh tokens.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /auth/login |
| Actor | Guest |
| Authentication | Public |
| Idempotency | No |
| Flow references | Login |
| Implementation status | Planned / not verified against running code |

### Rules

- Returns nextRequiredAction when KYC, profile, PIN, or mode setup is incomplete.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Login

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-010 — POST /auth/logout

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Invalidate the current session.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /auth/logout |
| Actor | User |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Logout |
| Implementation status | Planned / not verified against running code |

### Rules

- Client clears local tokens after success.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Logout

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-011 — POST /auth/logout-all

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Revoke all sessions for the user.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /auth/logout-all |
| Actor | User |
| Authentication | Access token + PIN |
| Idempotency | Yes |
| Flow references | Security |
| Implementation status | Planned / not verified against running code |

### Rules

- Sensitive action; requires PIN.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Security

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-005 — POST /auth/otp/send

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Send OTP for email, phone, recovery, or sensitive verification fallback.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /auth/otp/send |
| Actor | Guest/User |
| Authentication | Conditional |
| Idempotency | Yes by purpose+recipient |
| Flow references | OTP Subflow |
| Implementation status | Planned / not verified against running code |

### Rules

- Email is attempted first; Termii SMS is fallback.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- OTP Subflow

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-006 — POST /auth/otp/verify

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Verify OTP and mark the verification purpose as complete.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /auth/otp/verify |
| Actor | Guest/User |
| Authentication | Conditional |
| Idempotency | Yes |
| Flow references | OTP Subflow |
| Implementation status | Planned / not verified against running code |

### Rules

- OTP is not used as the default sensitive-action confirmation; PIN is.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- OTP Subflow

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-007 — POST /auth/password/forgot

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Start password reset using email first then SMS fallback.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /auth/password/forgot |
| Actor | Guest |
| Authentication | Public |
| Idempotency | Yes |
| Flow references | Password Recovery |
| Implementation status | Planned / not verified against running code |

### Rules

- Response must not reveal whether account exists.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Password Recovery

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-008 — POST /auth/password/reset

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Complete password reset after valid OTP/recovery token.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /auth/password/reset |
| Actor | Guest |
| Authentication | Public |
| Idempotency | Yes |
| Flow references | Password Recovery |
| Implementation status | Planned / not verified against running code |

### Rules

- Revokes old refresh tokens after success.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Password Recovery

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-009 — POST /auth/refresh

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Rotate refresh token and issue a fresh access token.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /auth/refresh |
| Actor | User |
| Authentication | Refresh token |
| Idempotency | Yes |
| Flow references | Session Recovery |
| Implementation status | Planned / not verified against running code |

### Rules

- Reuse detection must revoke compromised token family.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Session Recovery

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-001 — POST /auth/register

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | approved-reference |
| Source | Referral Contract Group |

### In plain English

Captures referral attribution as part of the existing registration transaction without creating a separate unauthenticated attribution endpoint.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /auth/register |
| Authority | Approved CONTRACT-REFERRAL-001 decision |
| Detailed contract | Referral Contract Group |
| Implementation status | Approved contract; implementation not verified |

### Rules

- Use the complete request, response, permission, concurrency, idempotency and error rules in the approved source.
- This approved record overrides the less-specific legacy contract table.

### Dependencies

- Referral Contract Group
- Approved standalone flows

### Known gaps or decisions required

- OpenAPI component schemas must be completed from the approved examples before generated clients are treated as final.


---

## API-004 — POST /auth/social/apple

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Authenticate or create account using Apple identity.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /auth/social/apple |
| Actor | Guest |
| Authentication | Public |
| Idempotency | Recommended |
| Flow references | Social Auth |
| Implementation status | Planned / not verified against running code |

### Rules

- Required for iOS if social login is offered.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Social Auth

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-003 — POST /auth/social/google

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Authenticate or create account using Google identity.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /auth/social/google |
| Actor | Guest |
| Authentication | Public |
| Idempotency | Recommended |
| Flow references | Social Auth |
| Implementation status | Planned / not verified against running code |

### Rules

- Facebook is excluded from MVP.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Social Auth

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-016 — POST /me/addresses

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Create a saved address from manual entry or GPS-confirmed pin.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /me/addresses |
| Actor | User |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Address Book |
| Implementation status | Planned / not verified against running code |

### Rules

- Manual address must be geocoded and confirmed on map.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Address Book

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-014 — POST /me/mode

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Switch visible app mode between Task Owner and Tasker.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /me/mode |
| Actor | User |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Mode Switch |
| Implementation status | Planned / not verified against running code |

### Rules

- Use the accepted field name: mode.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Mode Switch

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-024 — POST /me/security-pin/reset/confirm

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Set new PIN after reset verification.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /me/security-pin/reset/confirm |
| Actor | User |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | PIN Reset |
| Implementation status | Planned / not verified against running code |

### Rules

- Revoke sessions if risk score requires it.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- PIN Reset

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-023 — POST /me/security-pin/reset/start

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Start PIN reset through OTP and risk checks.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /me/security-pin/reset/start |
| Actor | User |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | PIN Reset |
| Implementation status | Planned / not verified against running code |

### Rules

- OTP is used for PIN recovery, not routine confirmations.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- PIN Reset

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-021 — POST /me/security-pin/setup

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Create first security PIN after identity/contact checks.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /me/security-pin/setup |
| Actor | User |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | PIN Setup |
| Implementation status | Planned / not verified against running code |

### Rules

- PIN is required for withdrawals and sensitive actions.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- PIN Setup

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-022 — POST /me/security-pin/verify

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Identity and sessions |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Verify PIN for a sensitive operation.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /me/security-pin/verify |
| Actor | User |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Sensitive Action |
| Implementation status | Planned / not verified against running code |

### Rules

- Never return or log the PIN.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Sensitive Action

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-083 — DELETE /favorites/taskers/{taskerId}

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Matching |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Remove favorite Tasker.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | DELETE /favorites/taskers/{taskerId} |
| Actor | Task Owner |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Favorites |
| Implementation status | Planned / not verified against running code |

### Rules

- Soft remove using status.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Favorites

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-081 — GET /favorites/taskers

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Matching |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

List favorite Taskers.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /favorites/taskers |
| Actor | Task Owner |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Favorites |
| Implementation status | Planned / not verified against running code |

### Rules

- Used for direct offer selection.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Favorites

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-046 — GET /task-owner/tasks/{taskId}/candidates

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Matching |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

List interested/available Taskers with ETA and profile summary.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /task-owner/tasks/{taskId}/candidates |
| Actor | Task Owner |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Select Tasker |
| Implementation status | Planned / not verified against running code |

### Rules

- Task Owner decides based on ETA; platform does not auto-reject by default.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Select Tasker

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-057 — GET /tasker/tasks

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Matching |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

List available tasks sorted nearest first with location filtering.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /tasker/tasks |
| Actor | Tasker |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Find Tasks |
| Implementation status | Planned / not verified against running code |

### Rules

- Tasker must be in Nigeria to accept tasks.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Find Tasks

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-082 — POST /favorites/taskers

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Matching |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Add Tasker to favorites.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /favorites/taskers |
| Actor | Task Owner |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Favorites |
| Implementation status | Planned / not verified against running code |

### Rules

- Usually offered after rating.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Favorites

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-045 — POST /task-owner/tasks/{taskId}/direct-offers

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Matching |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Send direct offer to a favorite Tasker.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /task-owner/tasks/{taskId}/direct-offers |
| Actor | Task Owner |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Direct Offer |
| Implementation status | Planned / not verified against running code |

### Rules

- Direct offers are REST/FCM, not socket-based.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Direct Offer

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-059 — POST /tasker/tasks/{taskId}/interest

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Matching |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Declare interest and confirm ability to arrive by required time.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /tasker/tasks/{taskId}/interest |
| Actor | Tasker |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Task Interest |
| Implementation status | Planned / not verified against running code |

### Rules

- Task Owner sees ETA and decides.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Task Interest

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-070 — POST /payments/verify

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Payments and escrow |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Verify payment redirect/status from client side.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /payments/verify |
| Actor | Task Owner |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Payment |
| Implementation status | Planned / not verified against running code |

### Rules

- Backend must still trust webhooks as final authority.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Payment

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-072 — POST /webhooks/moniepoint

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Payments and escrow |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Receive Moniepoint payment/transfer events.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /webhooks/moniepoint |
| Actor | Provider |
| Authentication | Signature |
| Idempotency | Provider event ID |
| Flow references | Webhook |
| Implementation status | Planned / not verified against running code |

### Rules

- Must be idempotent.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Webhook

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-071 — POST /webhooks/paystack

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Payments and escrow |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Receive Paystack payment/transfer events.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /webhooks/paystack |
| Actor | Provider |
| Authentication | Signature |
| Idempotency | Provider event ID |
| Flow references | Webhook |
| Implementation status | Planned / not verified against running code |

### Rules

- Use raw body signature verification and async processing.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Webhook

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## JOB-008 — audit.queue

| Field | Value |
| --- | --- |
| Type | queue |
| Domain | Providers, webhooks, queues and jobs |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Persist admin/security/provider/use case audit events.

### At a glance

| Field | Value |
| --- | --- |
| Producer | All services |
| Consumer | Audit worker |
| Idempotent | Yes |

### Rules

- Queue payloads contain stable IDs and correlation metadata, not secrets or large provider payloads.
- Retries must preserve idempotency and record terminal failure evidence.

### Dependencies

- BullMQ
- Valkey
- Audit worker

### Known gaps or decisions required

- Retry count, backoff, dead-letter and alert thresholds require operational confirmation.


---

## JOB-006 — chat.queue

| Field | Value |
| --- | --- |
| Type | queue |
| Domain | Providers, webhooks, queues and jobs |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Persist task/support messages and delivery/read states.

### At a glance

| Field | Value |
| --- | --- |
| Producer | Socket gateway |
| Consumer | Chat persistence worker |
| Idempotent | Yes |

### Rules

- Queue payloads contain stable IDs and correlation metadata, not secrets or large provider payloads.
- Retries must preserve idempotency and record terminal failure evidence.

### Dependencies

- BullMQ
- Valkey
- Chat persistence worker

### Known gaps or decisions required

- Retry count, backoff, dead-letter and alert thresholds require operational confirmation.


---

## JOB-003 — kyc.queue

| Field | Value |
| --- | --- |
| Type | queue |
| Domain | Providers, webhooks, queues and jobs |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Smile ID job submission and callback handling.

### At a glance

| Field | Value |
| --- | --- |
| Producer | KYC API, webhooks |
| Consumer | KYC worker |
| Idempotent | Yes |

### Rules

- Queue payloads contain stable IDs and correlation metadata, not secrets or large provider payloads.
- Retries must preserve idempotency and record terminal failure evidence.

### Dependencies

- BullMQ
- Valkey
- KYC worker

### Known gaps or decisions required

- Retry count, backoff, dead-letter and alert thresholds require operational confirmation.


---

## JOB-007 — maps.queue

| Field | Value |
| --- | --- |
| Type | queue |
| Domain | Providers, webhooks, queues and jobs |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Geocoding, ETA refresh, route cost guard.

### At a glance

| Field | Value |
| --- | --- |
| Producer | Task/tracking APIs |
| Consumer | Maps worker |
| Idempotent | Yes |

### Rules

- Queue payloads contain stable IDs and correlation metadata, not secrets or large provider payloads.
- Retries must preserve idempotency and record terminal failure evidence.

### Dependencies

- BullMQ
- Valkey
- Maps worker

### Known gaps or decisions required

- Retry count, backoff, dead-letter and alert thresholds require operational confirmation.


---

## JOB-004 — matching.queue

| Field | Value |
| --- | --- |
| Type | queue |
| Domain | Providers, webhooks, queues and jobs |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Broadcast task, direct offers, candidate update jobs.

### At a glance

| Field | Value |
| --- | --- |
| Producer | Task APIs |
| Consumer | Matching worker |
| Idempotent | Yes |

### Rules

- Queue payloads contain stable IDs and correlation metadata, not secrets or large provider payloads.
- Retries must preserve idempotency and record terminal failure evidence.

### Dependencies

- BullMQ
- Valkey
- Matching worker

### Known gaps or decisions required

- Retry count, backoff, dead-letter and alert thresholds require operational confirmation.


---

## JOB-009 — media.queue

| Field | Value |
| --- | --- |
| Type | queue |
| Domain | Providers, webhooks, queues and jobs |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Moderation, thumbnailing, permission indexing.

### At a glance

| Field | Value |
| --- | --- |
| Producer | Media API |
| Consumer | Media worker |
| Idempotent | Yes |

### Rules

- Queue payloads contain stable IDs and correlation metadata, not secrets or large provider payloads.
- Retries must preserve idempotency and record terminal failure evidence.

### Dependencies

- BullMQ
- Valkey
- Media worker

### Known gaps or decisions required

- Retry count, backoff, dead-letter and alert thresholds require operational confirmation.


---

## JOB-001 — notification.queue

| Field | Value |
| --- | --- |
| Type | queue |
| Domain | Providers, webhooks, queues and jobs |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

FCM, in-app, email, and critical SMS sends.

### At a glance

| Field | Value |
| --- | --- |
| Producer | API, workers, admin |
| Consumer | Notification worker |
| Idempotent | Yes |

### Rules

- Queue payloads contain stable IDs and correlation metadata, not secrets or large provider payloads.
- Retries must preserve idempotency and record terminal failure evidence.

### Dependencies

- BullMQ
- Valkey
- Notification worker

### Known gaps or decisions required

- Retry count, backoff, dead-letter and alert thresholds require operational confirmation.


---

## JOB-002 — payment.queue

| Field | Value |
| --- | --- |
| Type | queue |
| Domain | Providers, webhooks, queues and jobs |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Verify payments, update escrow, reconcile provider events.

### At a glance

| Field | Value |
| --- | --- |
| Producer | Webhooks, API |
| Consumer | Payment worker |
| Idempotent | Yes |

### Rules

- Queue payloads contain stable IDs and correlation metadata, not secrets or large provider payloads.
- Retries must preserve idempotency and record terminal failure evidence.

### Dependencies

- BullMQ
- Valkey
- Payment worker

### Known gaps or decisions required

- Retry count, backoff, dead-letter and alert thresholds require operational confirmation.


---

## WEBHOOK-004 — POST /webhooks/calls/provider

| Field | Value |
| --- | --- |
| Type | webhook |
| Domain | Providers, webhooks, queues and jobs |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Receives Inbound proxy call, call bridged, call ended, recording metadata if enabled from Masked Call Provider.

### At a glance

| Field | Value |
| --- | --- |
| Provider | Masked Call Provider |
| Endpoint | /webhooks/calls/provider |
| Validation | Verify provider signature and source. |
| Idempotency key | Call session ID + provider call ID. |
| Processing | Return routing instruction only for valid task-bound session. |

### Rules

- Treat provider callbacks as untrusted until signature, duplicate and state-transition checks pass.
- Persist accepted events before asynchronous processing.

### Dependencies

- Masked Call Provider
- ProviderWebhookEvent
- Queue worker

### Known gaps or decisions required

- Provider-specific request schema and signature test vectors require sandbox evidence.


---

## WEBHOOK-003 — POST /webhooks/smile-id

| Field | Value |
| --- | --- |
| Type | webhook |
| Domain | Providers, webhooks, queues and jobs |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Receives KYC approved, rejected, pending, failed from Smile ID.

### At a glance

| Field | Value |
| --- | --- |
| Provider | Smile ID |
| Endpoint | /webhooks/smile-id |
| Validation | Verify Smile ID callback signature where available. |
| Idempotency key | Smile job/user reference. |
| Processing | Update KYC attempt and notify user/admin. |

### Rules

- Treat provider callbacks as untrusted until signature, duplicate and state-transition checks pass.
- Persist accepted events before asynchronous processing.

### Dependencies

- Smile ID
- ProviderWebhookEvent
- Queue worker

### Known gaps or decisions required

- Provider-specific request schema and signature test vectors require sandbox evidence.


---

## JOB-010 — report.queue

| Field | Value |
| --- | --- |
| Type | queue |
| Domain | Providers, webhooks, queues and jobs |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Penalty review timers, escalation, settlement holds.

### At a glance

| Field | Value |
| --- | --- |
| Producer | Report/Admin APIs |
| Consumer | Report worker |
| Idempotent | Yes |

### Rules

- Queue payloads contain stable IDs and correlation metadata, not secrets or large provider payloads.
- Retries must preserve idempotency and record terminal failure evidence.

### Dependencies

- BullMQ
- Valkey
- Report worker

### Known gaps or decisions required

- Retry count, backoff, dead-letter and alert thresholds require operational confirmation.


---

## JOB-005 — wallet.queue

| Field | Value |
| --- | --- |
| Type | queue |
| Domain | Providers, webhooks, queues and jobs |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1 |

### In plain English

Ledger entries, escrow release, holds, withdrawals.

### At a glance

| Field | Value |
| --- | --- |
| Producer | Payment/Task/Withdrawal APIs |
| Consumer | Wallet worker |
| Idempotent | Yes |

### Rules

- Queue payloads contain stable IDs and correlation metadata, not secrets or large provider payloads.
- Retries must preserve idempotency and record terminal failure evidence.

### Dependencies

- BullMQ
- Valkey
- Wallet worker

### Known gaps or decisions required

- Retry count, backoff, dead-letter and alert thresholds require operational confirmation.


---

## API-130 — GET /referrals/me

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Referral Contract Group |
| Status | approved-reference |
| Source | Referral Contract Group |

### In plain English

Returns the signed-in user's referral code, native-share URL and aggregate progress/reward summary for MF-17.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /referrals/me |
| Authority | Approved CONTRACT-REFERRAL-001 decision |
| Detailed contract | Referral Contract Group |
| Implementation status | Approved contract; implementation not verified |

### Rules

- Use the complete request, response, permission, concurrency, idempotency and error rules in the approved source.
- This approved record overrides the less-specific legacy contract table.

### Dependencies

- Referral Contract Group
- Approved standalone flows

### Known gaps or decisions required

- OpenAPI component schemas must be completed from the approved examples before generated clients are treated as final.


---

## API-131 — GET /referrals/me/attributions

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Referral Contract Group |
| Status | approved-reference |
| Source | Referral Contract Group |

### In plain English

Returns only referrals attributed to the signed-in user, including paid-task progress and reward status.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /referrals/me/attributions |
| Authority | Approved CONTRACT-REFERRAL-001 decision |
| Detailed contract | Referral Contract Group |
| Implementation status | Approved contract; implementation not verified |

### Rules

- Use the complete request, response, permission, concurrency, idempotency and error rules in the approved source.
- This approved record overrides the less-specific legacy contract table.

### Dependencies

- Referral Contract Group
- Approved standalone flows

### Known gaps or decisions required

- OpenAPI component schemas must be completed from the approved examples before generated clients are treated as final.


---

## API-125 — GET /admin/ratings

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Reports and risk |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Review ratings and reported reviews.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /admin/ratings |
| Actor | Admin Ops/Risk |
| Authentication | Admin token |
| Idempotency | No |
| Flow references | Ratings |
| Implementation status | Planned / not verified against running code |

### Rules

- Unsafe or invalid content can be removed.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Ratings

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-122 — GET /admin/reports

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Reports and risk |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

List reports/disputes.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /admin/reports |
| Actor | Admin Support/Risk |
| Authentication | Admin token |
| Idempotency | No |
| Flow references | Reports |
| Implementation status | Planned / not verified against running code |

### Rules

- No live dispute chat; support chat remains separate.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Reports

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-085 — GET /reports/{reportId}

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Reports and risk |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Return report status and allowed next action.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /reports/{reportId} |
| Actor | User/Admin |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Reports |
| Implementation status | Planned / not verified against running code |

### Rules

- User sees only own report scope.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Reports

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-138 — POST /admin/referrals/{attributionId}/escalate-risk

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Reports and risk |
| Status | approved-reference |
| Source | Referral Contract Group |

### In plain English

Approved contract record from Referral Contract Group.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/referrals/{attributionId}/escalate-risk |
| Authority | Approved CONTRACT-REFERRAL-001 decision |
| Detailed contract | Referral Contract Group |
| Implementation status | Approved contract; implementation not verified |

### Rules

- Use the complete request, response, permission, concurrency, idempotency and error rules in the approved source.
- This approved record overrides the less-specific legacy contract table.

### Dependencies

- Referral Contract Group
- Approved standalone flows

### Known gaps or decisions required

- OpenAPI component schemas must be completed from the approved examples before generated clients are treated as final.


---

## API-123 — POST /admin/reports/{reportId}/resolve

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Reports and risk |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Resolve report with outcome, penalty, hold, or dismissal.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/reports/{reportId}/resolve |
| Actor | Admin Support/Risk |
| Authentication | Admin token + TOTP where high impact |
| Idempotency | Yes |
| Flow references | Reports |
| Implementation status | Planned / not verified against running code |

### Rules

- Contested penalties can remain pending until review/timeout.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Reports

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-051 — POST /task-owner/tasks/{taskId}/report

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Reports and risk |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Report issue linked to a task.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /task-owner/tasks/{taskId}/report |
| Actor | Task Owner |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Report |
| Implementation status | Planned / not verified against running code |

### Rules

- Options include off-platform solicitation and no-show.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Report

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-080 — POST /tasks/{taskId}/ratings

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Reports and risk |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Submit rating and review after completed task.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /tasks/{taskId}/ratings |
| Actor | Task Owner/Tasker |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Ratings |
| Implementation status | Planned / not verified against running code |

### Rules

- Task Owner can add Tasker to favorites during rating.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Ratings

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-084 — POST /tasks/{taskId}/reports

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Reports and risk |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Create report/dispute linked to a task.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /tasks/{taskId}/reports |
| Actor | User |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Reports |
| Implementation status | Planned / not verified against running code |

### Rules

- Reports can cover payment, safety, no-show, poor work, off-platform solicitation, or completion refusal.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Reports

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-095 — GET /health

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | System operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Basic liveness check.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /health |
| Actor | Load balancer |
| Authentication | Public/internal |
| Idempotency | No |
| Flow references | Ops |
| Implementation status | Planned / not verified against running code |

### Rules

- No database dependency.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Ops

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-097 — GET /metrics

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | System operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Expose service metrics for monitoring.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /metrics |
| Actor | Monitoring |
| Authentication | Internal |
| Idempotency | No |
| Flow references | Ops |
| Implementation status | Planned / not verified against running code |

### Rules

- Do not expose publicly.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Ops

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-096 — GET /ready

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | System operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Readiness check for API dependencies.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /ready |
| Actor | Load balancer |
| Authentication | Internal |
| Idempotency | No |
| Flow references | Ops |
| Implementation status | Planned / not verified against running code |

### Rules

- Checks database, Valkey, queues, and critical adapters.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Ops

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-098 — GET /version

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | System operations |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Return deployed API version and compatibility metadata.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /version |
| Actor | Client/Admin |
| Authentication | Public |
| Idempotency | No |
| Flow references | App Compatibility |
| Implementation status | Planned / not verified against running code |

### Rules

- Useful for Shorebird/client support.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- App Compatibility

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-041 — POST /task-owner/tasks/{taskId}/location/confirm-pin

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task creation |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Confirm exact map pin before posting.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /task-owner/tasks/{taskId}/location/confirm-pin |
| Actor | Task Owner |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Location Subflow |
| Implementation status | Planned / not verified against running code |

### Rules

- Exact address remains hidden publicly.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Location Subflow

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-040 — POST /task-owner/tasks/{taskId}/location/geocode

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task creation |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Convert manual address to coordinates.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /task-owner/tasks/{taskId}/location/geocode |
| Actor | Task Owner |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Location Subflow |
| Implementation status | Planned / not verified against running code |

### Rules

- Task site must be in Nigeria.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Location Subflow

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-042 — POST /task-owner/tasks/{taskId}/media

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task creation |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Upload proof of work to be done.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /task-owner/tasks/{taskId}/media |
| Actor | Task Owner |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Proof Media |
| Implementation status | Planned / not verified against running code |

### Rules

- Photos/videos up to 50MB each; permission-controlled access.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Proof Media

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-043 — POST /task-owner/tasks/{taskId}/payment-intent

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task creation |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Create Paystack or Moniepoint payment session.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /task-owner/tasks/{taskId}/payment-intent |
| Actor | Task Owner |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Payment |
| Implementation status | Planned / not verified against running code |

### Rules

- Task Owner sees task amount and processing fee separately.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Payment

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-038 — POST /task-owner/tasks/drafts

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task creation |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Create a draft task.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /task-owner/tasks/drafts |
| Actor | Task Owner |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Post Task |
| Implementation status | Planned / not verified against running code |

### Rules

- Minimum task amount is NGN 2,000.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Post Task

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-058 — GET /tasker/tasks/{taskId}

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task execution |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Return public task details, limited media summary, distance, and arrival requirement.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /tasker/tasks/{taskId} |
| Actor | Tasker |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Task Detail |
| Implementation status | Planned / not verified against running code |

### Rules

- Exact address and full proof media are restricted until acceptance/payment rules pass.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Task Detail

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-120 — POST /admin/tasks/{taskId}/force-cancel

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task execution |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Force cancel task with elevated permission.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/tasks/{taskId}/force-cancel |
| Actor | Admin Ops Lead |
| Authentication | Admin token + TOTP |
| Idempotency | Yes |
| Flow references | Controlled Force Cancel |
| Implementation status | Planned / not verified against running code |

### Rules

- Admin must not reassign under any condition.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Controlled Force Cancel

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-044 — POST /task-owner/tasks/{taskId}/broadcast

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task execution |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Move a funded task into public broadcast.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /task-owner/tasks/{taskId}/broadcast |
| Actor | Task Owner |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Broadcast |
| Implementation status | Planned / not verified against running code |

### Rules

- Task appears nearest-first to eligible Taskers.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Broadcast

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-050 — POST /task-owner/tasks/{taskId}/cancel

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task execution |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Cancel task under current state rules.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /task-owner/tasks/{taskId}/cancel |
| Actor | Task Owner |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Cancellation |
| Implementation status | Planned / not verified against running code |

### Rules

- Penalty/warning depends on task state.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Cancellation

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-049 — POST /task-owner/tasks/{taskId}/confirm-completion

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task execution |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Approve completed task and release escrow if no hold applies.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /task-owner/tasks/{taskId}/confirm-completion |
| Actor | Task Owner |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Completion |
| Implementation status | Planned / not verified against running code |

### Rules

- If refused, Tasker can report/dispute for admin review.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Completion

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-052 — POST /task-owner/tasks/{taskId}/rebook

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task execution |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Create repeat task from a previous completed task.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /task-owner/tasks/{taskId}/rebook |
| Actor | Task Owner |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Rebook |
| Implementation status | Planned / not verified against running code |

### Rules

- Can target favorite Tasker or broadcast again.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Rebook

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-060 — POST /tasker/tasks/{taskId}/accept

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task execution |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Accept direct offer or accepted assignment where state allows.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /tasker/tasks/{taskId}/accept |
| Actor | Tasker |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Accept Task |
| Implementation status | Planned / not verified against running code |

### Rules

- Must pass KYC, location, strike, and availability checks.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Accept Task

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-063 — POST /tasker/tasks/{taskId}/arrived

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task execution |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Mark arrival at task site.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /tasker/tasks/{taskId}/arrived |
| Actor | Tasker |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Execution |
| Implementation status | Planned / not verified against running code |

### Rules

- Task Owner can report late/no-show after grace window if needed.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Execution

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-064 — POST /tasker/tasks/{taskId}/begin

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task execution |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Begin the task after arrival.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /tasker/tasks/{taskId}/begin |
| Actor | Tasker |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Execution |
| Implementation status | Planned / not verified against running code |

### Rules

- This is the Begin Task button in app.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Execution

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-067 — POST /tasker/tasks/{taskId}/cancel

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task execution |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Cancel accepted task.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /tasker/tasks/{taskId}/cancel |
| Actor | Tasker |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Cancellation |
| Implementation status | Planned / not verified against running code |

### Rules

- After accepting, Tasker receives one warning; no-show is one strike.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Cancellation

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-065 — POST /tasker/tasks/{taskId}/completion-proof

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task execution |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Upload proof of work done.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /tasker/tasks/{taskId}/completion-proof |
| Actor | Tasker |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Completion Proof |
| Implementation status | Planned / not verified against running code |

### Rules

- Photos/videos up to 50MB each.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Completion Proof

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-061 — POST /tasker/tasks/{taskId}/decline

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task execution |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Decline direct offer or withdraw interest before commitment.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /tasker/tasks/{taskId}/decline |
| Actor | Tasker |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Decline |
| Implementation status | Planned / not verified against running code |

### Rules

- No penalty before accepted assignment.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Decline

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-066 — POST /tasker/tasks/{taskId}/request-completion

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task execution |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Ask Task Owner to approve completed work.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /tasker/tasks/{taskId}/request-completion |
| Actor | Tasker |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Completion |
| Implementation status | Planned / not verified against running code |

### Rules

- If Task Owner refuses, Tasker can raise report/dispute.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Completion

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-062 — POST /tasker/tasks/{taskId}/start-journey

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task execution |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Mark movement toward task site.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /tasker/tasks/{taskId}/start-journey |
| Actor | Tasker |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Execution |
| Implementation status | Planned / not verified against running code |

### Rules

- Enables live tracking and movement-stage rejection window.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Execution

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-039 — PATCH /task-owner/tasks/{taskId}

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task Owner |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Update task title, category, description, budget, required arrival time, and visibility while editable.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | PATCH /task-owner/tasks/{taskId} |
| Actor | Task Owner |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Post Task |
| Implementation status | Planned / not verified against running code |

### Rules

- After payment/broadcast, allowed fields narrow by state.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Post Task

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-047 — POST /task-owner/tasks/{taskId}/accept-tasker

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task Owner |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Accept a Tasker for the task.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /task-owner/tasks/{taskId}/accept-tasker |
| Actor | Task Owner |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Select Tasker |
| Implementation status | Planned / not verified against running code |

### Rules

- Unlocks exact address and communication permissions.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Select Tasker

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-048 — POST /task-owner/tasks/{taskId}/reject-tasker

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Task Owner |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Reject a Tasker before movement or within allowed movement grace window.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /task-owner/tasks/{taskId}/reject-tasker |
| Actor | Task Owner |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Select Tasker |
| Implementation status | Planned / not verified against running code |

### Rules

- Repeated movement-stage rejection creates risk flag.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Select Tasker

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-140 — GET /admin/kyc

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Tasker activation and KYC |
| Status | approved-reference |
| Source | KYC Review Contract Group |

### In plain English

Returns the operational KYC queue. It supplies summary fields only and never returns protected evidence.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /admin/kyc |
| Authority | Approved Phase 1 KYC review contract decision |
| Detailed contract | KYC Review Contract Group |
| Implementation status | Approved contract; implementation not verified |

### Rules

- Use the complete request, response, permission, concurrency, idempotency and error rules in the approved source.
- This approved record overrides the less-specific legacy contract table.

### Dependencies

- KYC Review Contract Group
- Approved standalone flows

### Known gaps or decisions required

- OpenAPI component schemas must be completed from the approved examples before generated clients are treated as final.


---

## API-141 — GET /admin/kyc/{kycId}

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Tasker activation and KYC |
| Status | approved-reference |
| Source | KYC Review Contract Group |

### In plain English

Returns the complete safe decision context for one case. Protected evidence uses time-limited references only when the admin also has kyc.evidence.read.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /admin/kyc/{kycId} |
| Authority | Approved Phase 1 KYC review contract decision |
| Detailed contract | KYC Review Contract Group |
| Implementation status | Approved contract; implementation not verified |

### Rules

- Use the complete request, response, permission, concurrency, idempotency and error rules in the approved source.
- This approved record overrides the less-specific legacy contract table.

### Dependencies

- KYC Review Contract Group
- Approved standalone flows

### Known gaps or decisions required

- OpenAPI component schemas must be completed from the approved examples before generated clients are treated as final.


---

## API-030 — GET /kyc/status

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Tasker activation and KYC |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Return current KYC state and allowed next action.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /kyc/status |
| Actor | User |
| Authentication | Access token |
| Idempotency | No |
| Flow references | KYC |
| Implementation status | Planned / not verified against running code |

### Rules

- Mobile polls only at controlled points; push/notification can inform completion.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- KYC

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-142 — POST /admin/kyc/{kycId}/approve

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Tasker activation and KYC |
| Status | approved-reference |
| Source | KYC Review Contract Group |

### In plain English

Records that the verified evidence satisfies KYC policy and recalculates Tasker activation eligibility.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/kyc/{kycId}/approve |
| Authority | Approved Phase 1 KYC review contract decision |
| Detailed contract | KYC Review Contract Group |
| Implementation status | Approved contract; implementation not verified |

### Rules

- Use the complete request, response, permission, concurrency, idempotency and error rules in the approved source.
- This approved record overrides the less-specific legacy contract table.

### Dependencies

- KYC Review Contract Group
- Approved standalone flows

### Known gaps or decisions required

- OpenAPI component schemas must be completed from the approved examples before generated clients are treated as final.


---

## API-145 — POST /admin/kyc/{kycId}/escalate-risk

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Tasker activation and KYC |
| Status | approved-reference |
| Source | KYC Review Contract Group |

### In plain English

Hands suspicious or ambiguous identity behavior to AF-14 without falsely approving or rejecting KYC.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/kyc/{kycId}/escalate-risk |
| Authority | Approved Phase 1 KYC review contract decision |
| Detailed contract | KYC Review Contract Group |
| Implementation status | Approved contract; implementation not verified |

### Rules

- Use the complete request, response, permission, concurrency, idempotency and error rules in the approved source.
- This approved record overrides the less-specific legacy contract table.

### Dependencies

- KYC Review Contract Group
- Approved standalone flows

### Known gaps or decisions required

- OpenAPI component schemas must be completed from the approved examples before generated clients are treated as final.


---

## API-146 — POST /admin/kyc/{kycId}/reconcile

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Tasker activation and KYC |
| Status | approved-reference |
| Source | KYC Review Contract Group |

### In plain English

Queues one controlled check of the latest Smile ID attempt when verified provider truth is delayed or inconsistent.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/kyc/{kycId}/reconcile |
| Authority | Approved Phase 1 KYC review contract decision |
| Detailed contract | KYC Review Contract Group |
| Implementation status | Approved contract; implementation not verified |

### Rules

- Use the complete request, response, permission, concurrency, idempotency and error rules in the approved source.
- This approved record overrides the less-specific legacy contract table.

### Dependencies

- KYC Review Contract Group
- Approved standalone flows

### Known gaps or decisions required

- OpenAPI component schemas must be completed from the approved examples before generated clients are treated as final.


---

## API-143 — POST /admin/kyc/{kycId}/reject

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Tasker activation and KYC |
| Status | approved-reference |
| Source | KYC Review Contract Group |

### In plain English

Records a verified non-correctable policy failure. Correctable evidence problems must use re-verification instead.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/kyc/{kycId}/reject |
| Authority | Approved Phase 1 KYC review contract decision |
| Detailed contract | KYC Review Contract Group |
| Implementation status | Approved contract; implementation not verified |

### Rules

- Use the complete request, response, permission, concurrency, idempotency and error rules in the approved source.
- This approved record overrides the less-specific legacy contract table.

### Dependencies

- KYC Review Contract Group
- Approved standalone flows

### Known gaps or decisions required

- OpenAPI component schemas must be completed from the approved examples before generated clients are treated as final.


---

## API-031 — POST /admin/kyc/{kycId}/request-reverification

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Tasker activation and KYC |
| Status | approved-reference |
| Source | KYC Review Contract Group |

### In plain English

Records a correctable problem and tells the Tasker which accepted steps must be repeated.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/kyc/{kycId}/request-reverification |
| Authority | Approved Phase 1 KYC review contract decision |
| Detailed contract | KYC Review Contract Group |
| Implementation status | Approved contract; implementation not verified |

### Rules

- Use the complete request, response, permission, concurrency, idempotency and error rules in the approved source.
- This approved record overrides the less-specific legacy contract table.

### Dependencies

- KYC Review Contract Group
- Approved standalone flows

### Known gaps or decisions required

- OpenAPI component schemas must be completed from the approved examples before generated clients are treated as final.


---

## API-029 — POST /kyc/face-capture

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Tasker activation and KYC |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Submit biometric face capture reference or uploaded media.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /kyc/face-capture |
| Actor | User |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | KYC |
| Implementation status | Planned / not verified against running code |

### Rules

- Use signed upload flow if media is large.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- KYC

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-028 — POST /kyc/nin-bvn

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Tasker activation and KYC |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Submit NIN or BVN for verification through Smile ID adapter.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /kyc/nin-bvn |
| Actor | User |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | KYC |
| Implementation status | Planned / not verified against running code |

### Rules

- Provider payloads must be encrypted at rest where required.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- KYC

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-027 — POST /kyc/start

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Tasker activation and KYC |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Open a KYC attempt for Tasker activation.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /kyc/start |
| Actor | User |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Tasker Activation |
| Implementation status | Planned / not verified against running code |

### Rules

- Taskers cannot accept tasks until KYC is approved.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Tasker Activation

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-053 — GET /tasker/profile

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Tasker |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Return Tasker profile, KYC state, skills, ratings, payout readiness, and availability.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /tasker/profile |
| Actor | Tasker |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Tasker Home |
| Implementation status | Planned / not verified against running code |

### Rules

- Requires unified user account.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Tasker Home

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-055 — PATCH /tasker/preferences

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Tasker |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Update work preferences and max travel radius.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | PATCH /tasker/preferences |
| Actor | Tasker |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Availability |
| Implementation status | Planned / not verified against running code |

### Rules

- Auto accept remains deferred.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Availability

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-054 — PATCH /tasker/profile

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Tasker |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Update skills, bio, task categories, service locations, and profile metadata.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | PATCH /tasker/profile |
| Actor | Tasker |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Tasker Profile |
| Implementation status | Planned / not verified against running code |

### Rules

- Tasker activation requires KYC.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Tasker Profile

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-056 — POST /tasker/availability

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Tasker |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Set available/unavailable status.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /tasker/availability |
| Actor | Tasker |
| Authentication | Access token |
| Idempotency | Yes |
| Flow references | Availability |
| Implementation status | Planned / not verified against running code |

### Rules

- Tasker location is required while active.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Availability

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-073 — GET /tasker/payout-account

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Wallets and payouts |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Return payout account setup status.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /tasker/payout-account |
| Actor | Tasker |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Payout Setup |
| Implementation status | Planned / not verified against running code |

### Rules

- Do not expose full bank details.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Payout Setup

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-076 — GET /tasker/withdrawals

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Wallets and payouts |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

List withdrawal requests and batch status.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /tasker/withdrawals |
| Actor | Tasker |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Withdrawal |
| Implementation status | Planned / not verified against running code |

### Rules

- Payout dates are 14th and 28th.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Withdrawal

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-068 — GET /wallets

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Wallets and payouts |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Return Task Owner wallet and Tasker wallet summaries.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /wallets |
| Actor | User |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Wallet |
| Implementation status | Planned / not verified against running code |

### Rules

- Wallets are separate even though account is unified.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Wallet

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-069 — GET /wallets/{walletId}/ledger

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Wallets and payouts |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Return wallet ledger entries.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | GET /wallets/{walletId}/ledger |
| Actor | User/Admin |
| Authentication | Access token |
| Idempotency | No |
| Flow references | Wallet |
| Implementation status | Planned / not verified against running code |

### Rules

- Admin access is permission-controlled.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Wallet

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-077 — POST /admin/payout-batches

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Wallets and payouts |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Create payout batch for eligible withdrawal requests.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/payout-batches |
| Actor | Admin Finance |
| Authentication | Admin token |
| Idempotency | Yes |
| Flow references | Finance Admin |
| Implementation status | Planned / not verified against running code |

### Rules

- Bulk transfer through Paystack or Moniepoint.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Finance Admin

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-078 — POST /admin/payout-batches/{batchId}/approve

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Wallets and payouts |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Approve prepared payout batch.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/payout-batches/{batchId}/approve |
| Actor | Admin Finance |
| Authentication | Admin token + TOTP |
| Idempotency | Yes |
| Flow references | Finance Admin |
| Implementation status | Planned / not verified against running code |

### Rules

- Disputed Taskers require admin authorization.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Finance Admin

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-079 — POST /admin/payout-batches/{batchId}/mark-processed

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Wallets and payouts |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Finalize payout batch after provider processing.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /admin/payout-batches/{batchId}/mark-processed |
| Actor | Admin Finance |
| Authentication | Admin token + TOTP |
| Idempotency | Yes |
| Flow references | Finance Admin |
| Implementation status | Planned / not verified against running code |

### Rules

- Record provider references per item.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Finance Admin

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-074 — POST /tasker/payout-account

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Wallets and payouts |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Add or change Tasker payout account.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /tasker/payout-account |
| Actor | Tasker |
| Authentication | Access token + PIN |
| Idempotency | Yes |
| Flow references | Payout Setup |
| Implementation status | Planned / not verified against running code |

### Rules

- Sensitive action.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Payout Setup

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.


---

## API-075 — POST /tasker/withdrawals

| Field | Value |
| --- | --- |
| Type | endpoint |
| Domain | Wallets and payouts |
| Status | provisional |
| Source | Legacy API and Socket Contract Specification v1, migrated as provisional evidence |

### In plain English

Request withdrawal into next eligible payout batch.

### At a glance

| Field | Value |
| --- | --- |
| Method and path | POST /tasker/withdrawals |
| Actor | Tasker |
| Authentication | Access token + PIN |
| Idempotency | Yes |
| Flow references | Withdrawal |
| Implementation status | Planned / not verified against running code |

### Rules

- Minimum withdrawal is NGN 1,000.
- Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.

### Dependencies

- Withdrawal

### Known gaps or decisions required

- Request and response component schemas require explicit review before implementation.
- Endpoint-to-model traceability must be confirmed where the legacy table did not name records.

