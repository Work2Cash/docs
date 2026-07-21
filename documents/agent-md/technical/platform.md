---
id: TECH-PLATFORM-001
title: Platform Architecture and Operations
type: technical-reference-agent-pack
audience: Infrastructure, Backend, Security, Finance, Operations and AI agents
owner: Technical Lead
reviewers: Infrastructure Lead, Backend Lead, Security, Finance, Operations
status: in-review
version: 1.0
last_reviewed: 2026-07-17
authority: Provisional Main Enterprise Architecture and validated provider decisions
generated_from: content/technical/platform.json
do_not_edit: true
---

# Platform Architecture and Operations

> Generated focused agent pack. Edit `content/technical/platform.json`, then run `node scripts/generate-technical-docs.js`.

## Purpose

Architecture, infrastructure, providers, cost controls, disaster recovery and incident runbooks in one role-filtered reference.

## How to use this pack

Use only the record required by the assigned flow or daily task. A named gap blocks that portion of implementation. Do not infer missing paths, fields, provider behavior or product rules from adjacent records.

## Authority notes

- Commercial prices and provider capabilities are not approved by migration alone; official evidence is required before spend or go-live.
- Production commands, credentials, personal contacts and confidential incident data must remain outside this public repository.

## Shared rules

- PostgreSQL is durable truth; Valkey, queues and sockets are recoverable supporting systems.
- Staging uses sandbox credentials and no production personal data.
- External providers are accessed through adapters with logging, idempotency and disablement controls.
- Backups require off-server storage and successful restore evidence.
- No paid provider auto-refresh loops.

---

## ARCH-01 — System context and responsibility boundary

| Field | Value |
| --- | --- |
| Type | architecture |
| Domain | Architecture |
| Status | provisional-baseline |
| Source | Main Enterprise Architecture v1 |

### In plain English

Flutter mobile and Next.js Admin consume a NestJS API. PostgreSQL owns durable truth; Valkey supports cache, presence, geospatial lookup, queues and socket scaling; workers own background processing; object storage holds controlled media and backup artifacts.

### At a glance

| Field | Value |
| --- | --- |
| Mobile | Flutter application for Task Owner and Tasker modes |
| Admin | Next.js operations dashboard with TOTP and RBAC |
| Backend | NestJS hexagonal modules, REST, Socket.IO, workers and scheduler |
| Durable data | PostgreSQL |
| Transient/fast state | Valkey and BullMQ |

### Rules

- Provider adapters remain outside core use cases.
- Socket and cache state never replace persisted business truth.

### Dependencies

- Approved architecture decisions
- Contracts
- Data model

### Known gaps or decisions required

- Formal architecture approval remains pending.


---

## ARCH-02 — Production topology

| Field | Value |
| --- | --- |
| Type | architecture |
| Domain | Infrastructure |
| Status | provisional-baseline |
| Source | Main Enterprise Architecture v1 and Provider Integration baseline |

### In plain English

The provisional production baseline separates application, data and monitoring responsibilities and uses S3-compatible object storage. Exact network diagrams, region, sizing and failover require infrastructure approval before provisioning.

### At a glance

| Field | Value |
| --- | --- |
| Application plane | API, socket gateway, workers and reverse proxy |
| Data plane | PostgreSQL and privately reachable Valkey |
| Monitoring plane | Logs, metrics, alerts and Sentry integration |
| Storage | DigitalOcean Spaces or approved S3-compatible object storage |

### Rules

- PostgreSQL and Valkey are not publicly exposed.
- Use TLS, hardened SSH, least privilege, firewall rules and separated secrets.

### Dependencies

- DigitalOcean production baseline
- DNS/TLS inventory
- Backup and restore runbooks

### Known gaps or decisions required

- Approved region, IP plan, firewall matrix, capacity test and failover design are not recorded.


---

## ARCH-03 — Staging topology

| Field | Value |
| --- | --- |
| Type | architecture |
| Domain | Infrastructure |
| Status | provisional-baseline |
| Source | Main Enterprise Architecture v1 and Provider Integration baseline |

### In plain English

Staging uses isolated infrastructure, sandbox provider credentials and synthetic data. It must never contain production user, KYC, payment or secret material.

### At a glance

| Field | Value |
| --- | --- |
| Host baseline | Contabo staging baseline recorded in July 2026; revalidate before purchase |
| Provider mode | Sandbox or test credentials only |
| Data | Synthetic or explicitly approved non-production data |
| Backups | Off-server backup required because legacy baseline did not include automatic backup |

### Rules

- Production keys and personal data are forbidden in staging.
- Run restore drills before declaring backup readiness.

### Dependencies

- Infrastructure owner
- Provider sandboxes
- Deployment and restore runbooks

### Known gaps or decisions required

- Private network availability, exact retention and environment access roster require approval.


---

## ARCH-04 — Network, DNS, TLS and secret boundaries

| Field | Value |
| --- | --- |
| Type | architecture |
| Domain | Infrastructure |
| Status | decision-required |
| Source | Main Enterprise Architecture v1 |

### In plain English

Public entry points terminate TLS at controlled reverse proxies; data services remain private. Secrets belong in protected environment/secret storage and are never stored in this documentation repository.

### At a glance

| Field | Value |
| --- | --- |
| Public surfaces | API, Socket and Admin hosts |
| Private services | PostgreSQL, Valkey, workers' internal control paths and backup credentials |
| Secret rule | Environment/secret store only; least privilege and rotation evidence required |

### Rules

- No database or Valkey public exposure.
- Separate staging and production credentials.
- Audit privileged access and secret rotation.

### Dependencies

- DNS owner
- Infrastructure owner
- Security reviewer

### Known gaps or decisions required

- DNS registrar roles, TLS renewal ownership, firewall ports, VPN/private access and rotation schedule require explicit records.


---

## ARCH-05 — Monitoring, capacity and cost controls

| Field | Value |
| --- | --- |
| Type | architecture |
| Domain | Operations |
| Status | provisional-baseline |
| Source | Main Enterprise Architecture v1 and Provider Integration baseline |

### In plain English

Monitor API/socket health, provider calls, payment reconciliation, queues, PostgreSQL, Valkey, backups and budget consumption. Alerts must name an owner and lead to a runbook.

### At a glance

| Field | Value |
| --- | --- |
| Core signals | Availability, latency, error rate, queue age/failure, database saturation, Valkey memory/eviction, backup freshness |
| Provider signals | Request count, duration, failure, duplicate events and estimated cost where known |
| Cost trigger | Unexpected usage or spend requires feature/config review before scaling |

### Rules

- Paid provider calls require budget logging and guards.
- No paid auto-refresh loops.
- An alert without ownership and recovery action is incomplete.

### Dependencies

- Monitoring owner
- Provider catalogue
- Incident runbooks

### Known gaps or decisions required

- Final thresholds, paging rota, dashboards and capacity-test evidence require operational approval.


---

## ARCH-06 — Disaster recovery policy

| Field | Value |
| --- | --- |
| Type | architecture |
| Domain | Recovery |
| Status | provisional-baseline |
| Source | Main Enterprise Architecture v1 |

### In plain English

Recovery prioritizes data integrity, authoritative money state and controlled restoration. Off-server PostgreSQL backups and tested restore procedures are mandatory; server disks alone are not backups.

### At a glance

| Field | Value |
| --- | --- |
| Restore drills | Weekly in staging and monthly after launch in the provisional baseline |
| Evidence | Backup ID, checksum, restore target, duration, validation result and owner |
| Priority | PostgreSQL and money/audit truth before caches, queues or derived views |

### Rules

- Never restore over production without incident authority and a verified recovery point.
- Rebuild transient Valkey state from durable records where possible.

### Dependencies

- PostgreSQL backup/restore runbooks
- Object storage
- Incident commander

### Known gaps or decisions required

- Approved RPO, RTO, backup encryption/key ownership and regional recovery design require formal approval.


---

## PROVIDER-01 — Paystack

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | Payments - Collections |
| Status | selected-unverified |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

Primary collection rail alongside Moniepoint.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | Task Owner cardless payment, bank transfer, payment redirect/status, webhook confirmation. |
| Selection status | Active MVP provider |
| Owner | Backend Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- Verify current pricing, supported channels, webhook signatures and settlement behavior before go-live.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Keep payment or payout pending; reconcile authoritative provider state and never report money success early. |
| Fallback | Moniepoint when validated and enabled |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## PROVIDER-02 — Moniepoint

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | Payments - Collections |
| Status | selected-unverified |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

Primary collection rail alongside Paystack.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | Task Owner payment, provider status, webhook confirmation. |
| Selection status | Active MVP provider |
| Owner | Backend Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- Verify online checkout/API availability, webhook reliability, bank transfer flow and settlement behavior before go-live.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Keep payment or payout pending; reconcile authoritative provider state and never report money success early. |
| Fallback | Paystack when validated and enabled |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## PROVIDER-03 — Paystack Transfers

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | Payouts |
| Status | selected-unverified |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

Transfer rail for Tasker withdrawals where appropriate.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | Bulk payout batch processing on 14th and 28th. |
| Selection status | Active MVP provider |
| Owner | Backend Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- Verify transfer fees, bank coverage, transfer limits, reversal behavior and compliance requirements.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Keep payment or payout pending; reconcile authoritative provider state and never report money success early. |
| Fallback | Moniepoint when validated and enabled |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## PROVIDER-04 — Moniepoint

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | Payouts |
| Status | selected-unverified |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

Transfer rail for payout batches where appropriate.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | Bulk payout batch processing and reconciliation. |
| Selection status | Active MVP provider |
| Owner | Backend Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- Verify transfer API, bulk transfer support, pricing, limits and settlement operations.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Keep payment or payout pending; reconcile authoritative provider state and never report money success early. |
| Fallback | Paystack when validated and enabled |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## PROVIDER-05 — Smile ID

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | KYC |
| Status | selected-unverified |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

Identity verification provider.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | NIN/BVN + biometric face match for Tasker activation. |
| Selection status | Active MVP provider |
| Owner | Backend Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- Verify Nigeria product availability, pricing, callback signatures, required consent wording and data retention requirements.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Keep KYC pending or route to manual review; never activate a Tasker from client or callback text alone. |
| Fallback | No automatic provider swap unless the adapter, product state and operations approval explicitly allow it |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## PROVIDER-06 — Google Maps Platform

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | Maps |
| Status | selected-unverified |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

Paid maps/routing/geocoding provider.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | Geocoding manual address, ETA snapshots, traffic-aware arrival estimate. |
| Selection status | Active MVP provider with strict guard |
| Owner | Backend Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- Distance/route pricing changes frequently. Configure billing alerts and enforce ETA guard.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Use cached coordinates or last permitted ETA and disable paid refresh until the budget/provider guard recovers. |
| Fallback | Cached result, manual address/pin confirmation and guarded later retry |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## PROVIDER-07 — Firebase Cloud Messaging

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | Push Notifications |
| Status | selected-unverified |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

Primary device wake and push notification channel.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | New task alerts, direct offers, chat/support notifications, critical task updates. |
| Selection status | Active MVP provider |
| Owner | Backend Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- Keep FCM tokens fresh and handle aggressive Android background killing.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Persist the notification outcome and allow the app to fetch authoritative state when delivery fails. |
| Fallback | No automatic provider swap unless the adapter, product state and operations approval explicitly allow it |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## PROVIDER-08 — Termii

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | SMS |
| Status | selected-unverified |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

SMS fallback for critical OTP and critical notifications.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | OTP fallback after email, critical account/payment/support messages only. |
| Selection status | Active MVP provider |
| Owner | Backend Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- SMS can become expensive; use only where email/push is insufficient.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Persist the notification outcome and allow the app to fetch authoritative state when delivery fails. |
| Fallback | Email remains primary; support path for critical account recovery |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## PROVIDER-09 — Resend

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | Email |
| Status | candidate |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

Phase 1 transactional email provider.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | OTP email, receipts, account notifications, support emails. |
| Selection status | Phase 1 provider |
| Owner | Backend Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- Use React Email templates and monitor free/pro limits.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Persist the notification outcome and allow the app to fetch authoritative state when delivery fails. |
| Fallback | SendGrid after deferred-provider validation |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## PROVIDER-10 — SendGrid

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | Email |
| Status | deferred |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

Later email provider when volume/deliverability requires it.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | High-volume transactional email and dedicated IP needs. |
| Selection status | Deferred provider |
| Owner | Backend Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- Switch via email adapter without changing use cases.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Persist the notification outcome and allow the app to fetch authoritative state when delivery fails. |
| Fallback | Resend |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## PROVIDER-11 — Sentry

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | Monitoring |
| Status | candidate |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

Error monitoring.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | Backend, Flutter and Next.js error tracking. |
| Selection status | Developer/free plan baseline |
| Owner | Infrastructure Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- Avoid sending PII, KYC payloads, provider secrets or payment-sensitive values.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Sentry failure must produce a visible degraded or retryable state with logged evidence. |
| Fallback | No automatic provider swap unless the adapter, product state and operations approval explicitly allow it |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## PROVIDER-12 — Shorebird

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | Mobile Updates |
| Status | selected-unverified |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

Flutter patch delivery.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | Post-release Dart patch updates where allowed. |
| Selection status | Active mobile provider |
| Owner | Backend Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- Do not use for native changes requiring app store release.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Shorebird failure must produce a visible degraded or retryable state with logged evidence. |
| Fallback | No automatic provider swap unless the adapter, product state and operations approval explicitly allow it |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## PROVIDER-13 — Infobip

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | Masked Calls |
| Status | candidate |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

Primary candidate for proxy dial-in masked calls.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | Task-bound call masking without exposing phone numbers. |
| Selection status | Candidate to validate |
| Owner | Backend Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- Confirm Nigerian voice number availability, local airtime behavior, carrier reliability and pricing.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Disable masked calls and retain chat/voice-note alternatives; never reveal real phone numbers. |
| Fallback | Feature disablement, then the next validated provider candidate; chat remains available |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## PROVIDER-14 — Africa's Talking

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | Masked Calls |
| Status | candidate |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

Secondary candidate for masked calls.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | Fallback voice masking candidate. |
| Selection status | Candidate to validate |
| Owner | Backend Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- Confirm Nigeria number support and proxy dial-in feasibility.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Disable masked calls and retain chat/voice-note alternatives; never reveal real phone numbers. |
| Fallback | Feature disablement, then the next validated provider candidate; chat remains available |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## PROVIDER-15 — Vonage

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | Masked Calls |
| Status | candidate |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

Fallback masked call provider.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | Fallback if local candidates fail. |
| Selection status | Fallback |
| Owner | Backend Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- Do not depend on it until Nigeria voice-capable number support is verified.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Disable masked calls and retain chat/voice-note alternatives; never reveal real phone numbers. |
| Fallback | Feature disablement, then the next validated provider candidate; chat remains available |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## PROVIDER-16 — Sinch

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | Masked Calls |
| Status | candidate |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

Enterprise fallback.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | Fallback if scale/compliance requires enterprise provider. |
| Selection status | Fallback |
| Owner | Backend Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- Likely higher-cost path; validate only if needed.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Disable masked calls and retain chat/voice-note alternatives; never reveal real phone numbers. |
| Fallback | Feature disablement, then the next validated provider candidate; chat remains available |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## PROVIDER-17 — DigitalOcean

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | Hosting |
| Status | selected-unverified |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

Active production hosting baseline.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | App server, data server, monitoring server and Spaces object storage. |
| Selection status | Selected production infrastructure |
| Owner | Infrastructure Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- Use DigitalOcean production sizing and monitor before scaling.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Enter the relevant incident runbook, protect data integrity and restore only from verified evidence. |
| Fallback | No automatic provider swap unless the adapter, product state and operations approval explicitly allow it |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## PROVIDER-18 — DigitalOcean Spaces or S3-compatible storage

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | Object/Backup Storage |
| Status | selected-unverified |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

Media, backup and export storage.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | Task proof media, backups, generated exports. |
| Selection status | Active option |
| Owner | Infrastructure Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- Use signed URLs, lifecycle policies and backup restore tests.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Enter the relevant incident runbook, protect data integrity and restore only from verified evidence. |
| Fallback | No automatic provider swap unless the adapter, product state and operations approval explicitly allow it |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## PROVIDER-19 — WhoGoHost

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | Domain |
| Status | selected-unverified |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

Domain registrar for work2cash.ng.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | Domain purchase and DNS ownership. |
| Selection status | Active provider |
| Owner | Infrastructure Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- Domain baseline: ₦9,200 + 7.5% VAT = ₦690; total ₦9,890 excluding bank transfer/payment charges.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Enter the relevant incident runbook, protect data integrity and restore only from verified evidence. |
| Fallback | No automatic provider swap unless the adapter, product state and operations approval explicitly allow it |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## PROVIDER-20 — Firebase Analytics

| Field | Value |
| --- | --- |
| Type | provider |
| Domain | Analytics |
| Status | deferred |
| Source | Legacy Provider Integration and Cost Control v1; commercial facts require revalidation |

### In plain English

Basic mobile analytics.

### At a glance

| Field | Value |
| --- | --- |
| Work2Cash use | Event-level mobile analytics where useful. |
| Selection status | Deferred/light usage |
| Owner | Backend Lead |
| Sandbox validation | Evidence not recorded in the migrated baseline |
| Production validation | Not approved by this migration |
| Pricing | Legacy July 2026 baseline only; verify against an official source before spend or go-live |

### Rules

- Product analytics is intentionally not a core MVP dependency.
- Use a provider adapter; controllers and use cases do not call provider SDKs directly.
- Never commit keys, secrets, raw provider payloads or production credentials.

### Dependencies

- Provider adapter
- ProviderRequestLog
- Feature/config guard
- Operations owner

### Failure, fallback and disablement

| Field | Value |
| --- | --- |
| Failure state | Firebase Analytics failure must produce a visible degraded or retryable state with logged evidence. |
| Fallback | No automatic provider swap unless the adapter, product state and operations approval explicitly allow it |
| Disablement | Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident. |

### Known gaps or decisions required

- Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.
- Confirm data-processing, retention, webhook/signature and support-escalation terms.


---

## RUNBOOK-01 — Deployment

| Field | Value |
| --- | --- |
| Type | runbook |
| Domain | Operations runbook |
| Status | operational-baseline |
| Source | Phase 4 operational migration based on the provisional architecture baseline |

### In plain English

Deploy an approved artifact after checks and migration review.

### At a glance

| Field | Value |
| --- | --- |
| Owner | Release owner |
| Trigger | Deployment is required or its monitoring alert fires. |
| Safe state | Stop and rollback if health, migrations or smoke tests fail. |
| Evidence | Incident/request ID, actor, timestamps, before/after state, validation result and follow-up owner |

### Rules

- Stop and rollback if health, migrations or smoke tests fail.
- Escalate when authority, data integrity, money state, security or recovery evidence is uncertain.

### Dependencies

- Monitoring/alert
- Named owner
- Relevant architecture/provider record

### Known gaps or decisions required

- Commands, hostnames, credentials and production-specific contacts belong in protected operational systems, not this public repository.


---

## RUNBOOK-02 — Rollback

| Field | Value |
| --- | --- |
| Type | runbook |
| Domain | Operations runbook |
| Status | operational-baseline |
| Source | Phase 4 operational migration based on the provisional architecture baseline |

### In plain English

Freeze further rollout, preserve evidence and restore the last verified application artifact.

### At a glance

| Field | Value |
| --- | --- |
| Owner | Release owner |
| Trigger | Rollback is required or its monitoring alert fires. |
| Safe state | Never reverse an irreversible database change without a reviewed recovery plan. |
| Evidence | Incident/request ID, actor, timestamps, before/after state, validation result and follow-up owner |

### Rules

- Never reverse an irreversible database change without a reviewed recovery plan.
- Escalate when authority, data integrity, money state, security or recovery evidence is uncertain.

### Dependencies

- Monitoring/alert
- Named owner
- Relevant architecture/provider record

### Known gaps or decisions required

- Commands, hostnames, credentials and production-specific contacts belong in protected operational systems, not this public repository.


---

## RUNBOOK-03 — PostgreSQL backup

| Field | Value |
| --- | --- |
| Type | runbook |
| Domain | Operations runbook |
| Status | operational-baseline |
| Source | Phase 4 operational migration based on the provisional architecture baseline |

### In plain English

Create encrypted off-server backup, verify completion/checksum and record freshness.

### At a glance

| Field | Value |
| --- | --- |
| Owner | Infrastructure Lead |
| Trigger | PostgreSQL backup is required or its monitoring alert fires. |
| Safe state | Alert on failure or staleness; server-local files alone do not count. |
| Evidence | Incident/request ID, actor, timestamps, before/after state, validation result and follow-up owner |

### Rules

- Alert on failure or staleness; server-local files alone do not count.
- Escalate when authority, data integrity, money state, security or recovery evidence is uncertain.

### Dependencies

- Monitoring/alert
- Named owner
- Relevant architecture/provider record

### Known gaps or decisions required

- Commands, hostnames, credentials and production-specific contacts belong in protected operational systems, not this public repository.


---

## RUNBOOK-04 — PostgreSQL restore

| Field | Value |
| --- | --- |
| Type | runbook |
| Domain | Operations runbook |
| Status | operational-baseline |
| Source | Phase 4 operational migration based on the provisional architecture baseline |

### In plain English

Restore into an isolated target, validate schema and critical money/audit records, then obtain cutover authority.

### At a glance

| Field | Value |
| --- | --- |
| Owner | Infrastructure Lead |
| Trigger | PostgreSQL restore is required or its monitoring alert fires. |
| Safe state | Do not overwrite production as the first restore test. |
| Evidence | Incident/request ID, actor, timestamps, before/after state, validation result and follow-up owner |

### Rules

- Do not overwrite production as the first restore test.
- Escalate when authority, data integrity, money state, security or recovery evidence is uncertain.

### Dependencies

- Monitoring/alert
- Named owner
- Relevant architecture/provider record

### Known gaps or decisions required

- Commands, hostnames, credentials and production-specific contacts belong in protected operational systems, not this public repository.


---

## RUNBOOK-05 — Provider outage

| Field | Value |
| --- | --- |
| Type | runbook |
| Domain | Operations runbook |
| Status | operational-baseline |
| Source | Phase 4 operational migration based on the provisional architecture baseline |

### In plain English

Mark the provider degraded, preserve pending state, disable unsafe actions and activate only validated fallback.

### At a glance

| Field | Value |
| --- | --- |
| Owner | Backend Lead |
| Trigger | Provider outage is required or its monitoring alert fires. |
| Safe state | Never mark provider work successful because a fallback UI appeared. |
| Evidence | Incident/request ID, actor, timestamps, before/after state, validation result and follow-up owner |

### Rules

- Never mark provider work successful because a fallback UI appeared.
- Escalate when authority, data integrity, money state, security or recovery evidence is uncertain.

### Dependencies

- Monitoring/alert
- Named owner
- Relevant architecture/provider record

### Known gaps or decisions required

- Commands, hostnames, credentials and production-specific contacts belong in protected operational systems, not this public repository.


---

## RUNBOOK-06 — Payment reconciliation

| Field | Value |
| --- | --- |
| Type | runbook |
| Domain | Operations runbook |
| Status | operational-baseline |
| Source | Phase 4 operational migration based on the provisional architecture baseline |

### In plain English

Compare provider events, Payment, ledger and escrow records by reference and request ID.

### At a glance

| Field | Value |
| --- | --- |
| Owner | Finance Operations |
| Trigger | Payment reconciliation is required or its monitoring alert fires. |
| Safe state | Apply idempotent correction through governed finance use cases; never edit balances directly. |
| Evidence | Incident/request ID, actor, timestamps, before/after state, validation result and follow-up owner |

### Rules

- Apply idempotent correction through governed finance use cases; never edit balances directly.
- Escalate when authority, data integrity, money state, security or recovery evidence is uncertain.

### Dependencies

- Monitoring/alert
- Named owner
- Relevant architecture/provider record

### Known gaps or decisions required

- Commands, hostnames, credentials and production-specific contacts belong in protected operational systems, not this public repository.


---

## RUNBOOK-07 — Queue failure or stalled jobs

| Field | Value |
| --- | --- |
| Type | runbook |
| Domain | Operations runbook |
| Status | operational-baseline |
| Source | Phase 4 operational migration based on the provisional architecture baseline |

### In plain English

Identify affected queue/job age, stop duplicate producers if necessary and replay only idempotent jobs.

### At a glance

| Field | Value |
| --- | --- |
| Owner | Backend Lead |
| Trigger | Queue failure or stalled jobs is required or its monitoring alert fires. |
| Safe state | Preserve failed payload references and correlation evidence. |
| Evidence | Incident/request ID, actor, timestamps, before/after state, validation result and follow-up owner |

### Rules

- Preserve failed payload references and correlation evidence.
- Escalate when authority, data integrity, money state, security or recovery evidence is uncertain.

### Dependencies

- Monitoring/alert
- Named owner
- Relevant architecture/provider record

### Known gaps or decisions required

- Commands, hostnames, credentials and production-specific contacts belong in protected operational systems, not this public repository.


---

## RUNBOOK-08 — Object-storage failure

| Field | Value |
| --- | --- |
| Type | runbook |
| Domain | Operations runbook |
| Status | operational-baseline |
| Source | Phase 4 operational migration based on the provisional architecture baseline |

### In plain English

Disable unsafe upload paths, retain metadata in retryable state and verify bucket/network/credentials.

### At a glance

| Field | Value |
| --- | --- |
| Owner | Infrastructure Lead |
| Trigger | Object-storage failure is required or its monitoring alert fires. |
| Safe state | Never expose storage keys or make private evidence public as a workaround. |
| Evidence | Incident/request ID, actor, timestamps, before/after state, validation result and follow-up owner |

### Rules

- Never expose storage keys or make private evidence public as a workaround.
- Escalate when authority, data integrity, money state, security or recovery evidence is uncertain.

### Dependencies

- Monitoring/alert
- Named owner
- Relevant architecture/provider record

### Known gaps or decisions required

- Commands, hostnames, credentials and production-specific contacts belong in protected operational systems, not this public repository.


---

## RUNBOOK-09 — DNS or certificate incident

| Field | Value |
| --- | --- |
| Type | runbook |
| Domain | Operations runbook |
| Status | operational-baseline |
| Source | Phase 4 operational migration based on the provisional architecture baseline |

### In plain English

Confirm ownership, current records, certificate status and blast radius before controlled correction.

### At a glance

| Field | Value |
| --- | --- |
| Owner | Infrastructure Lead |
| Trigger | DNS or certificate incident is required or its monitoring alert fires. |
| Safe state | Protect against unauthorized DNS changes and record every emergency action. |
| Evidence | Incident/request ID, actor, timestamps, before/after state, validation result and follow-up owner |

### Rules

- Protect against unauthorized DNS changes and record every emergency action.
- Escalate when authority, data integrity, money state, security or recovery evidence is uncertain.

### Dependencies

- Monitoring/alert
- Named owner
- Relevant architecture/provider record

### Known gaps or decisions required

- Commands, hostnames, credentials and production-specific contacts belong in protected operational systems, not this public repository.


---

## RUNBOOK-10 — Security incident

| Field | Value |
| --- | --- |
| Type | runbook |
| Domain | Operations runbook |
| Status | operational-baseline |
| Source | Phase 4 operational migration based on the provisional architecture baseline |

### In plain English

Contain access, preserve logs, rotate affected secrets and establish incident command.

### At a glance

| Field | Value |
| --- | --- |
| Owner | Security Lead |
| Trigger | Security incident is required or its monitoring alert fires. |
| Safe state | Do not delete evidence or publish personal/security details in this repository. |
| Evidence | Incident/request ID, actor, timestamps, before/after state, validation result and follow-up owner |

### Rules

- Do not delete evidence or publish personal/security details in this repository.
- Escalate when authority, data integrity, money state, security or recovery evidence is uncertain.

### Dependencies

- Monitoring/alert
- Named owner
- Relevant architecture/provider record

### Known gaps or decisions required

- Commands, hostnames, credentials and production-specific contacts belong in protected operational systems, not this public repository.


---

## RUNBOOK-11 — Data-exposure incident

| Field | Value |
| --- | --- |
| Type | runbook |
| Domain | Operations runbook |
| Status | operational-baseline |
| Source | Phase 4 operational migration based on the provisional architecture baseline |

### In plain English

Stop further exposure, identify affected data/people, preserve evidence and follow notification/legal decision processes.

### At a glance

| Field | Value |
| --- | --- |
| Owner | Privacy and Security Lead |
| Trigger | Data-exposure incident is required or its monitoring alert fires. |
| Safe state | Do not copy exposed data into tickets, chat or documentation. |
| Evidence | Incident/request ID, actor, timestamps, before/after state, validation result and follow-up owner |

### Rules

- Do not copy exposed data into tickets, chat or documentation.
- Escalate when authority, data integrity, money state, security or recovery evidence is uncertain.

### Dependencies

- Monitoring/alert
- Named owner
- Relevant architecture/provider record

### Known gaps or decisions required

- Commands, hostnames, credentials and production-specific contacts belong in protected operational systems, not this public repository.


---

## RUNBOOK-12 — Capacity and cost review

| Field | Value |
| --- | --- |
| Type | runbook |
| Domain | Operations runbook |
| Status | operational-baseline |
| Source | Phase 4 operational migration based on the provisional architecture baseline |

### In plain English

Review utilization, queue age, provider usage and forecast before resizing or enabling paid features.

### At a glance

| Field | Value |
| --- | --- |
| Owner | Infrastructure and Finance |
| Trigger | Capacity and cost review is required or its monitoring alert fires. |
| Safe state | Scaling or provider changes require evidence, owner and budget approval. |
| Evidence | Incident/request ID, actor, timestamps, before/after state, validation result and follow-up owner |

### Rules

- Scaling or provider changes require evidence, owner and budget approval.
- Escalate when authority, data integrity, money state, security or recovery evidence is uncertain.

### Dependencies

- Monitoring/alert
- Named owner
- Relevant architecture/provider record

### Known gaps or decisions required

- Commands, hostnames, credentials and production-specific contacts belong in protected operational systems, not this public repository.

