---
id: ASF-11
title: Empty Loading and Error Recovery
type: reusable-subflow
audience: Non-technical operations, Junior admin developers, Product, QA, AI agents
owner: Admin Lead
reviewers: Product Lead, Technical Lead, Backend Lead, QA
status: in-review
version: 0.1
last_reviewed: 2026-07-17
authority: Admin Flow Catalogue v1, Admin Build Plan v1 and API and Socket Contract Specification v1
related: AF-01 to AF-24, ASF-01 Admin Login and TOTP Verification, ASF-02 RBAC Permission Gate
generated_from: content/flows/admin/subflows/ASF-11-empty-loading-error-recovery.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/admin/subflows/ASF-11-empty-loading-error-recovery.md` and rerun `node scripts/generate-flow-docs.js`.

# ASF-11 — Empty, Loading and Error Recovery

## In plain English

This subflow gives every admin page the same understandable states while data is loading, when no records match and when an operation fails. It prevents blank screens, duplicate submissions and errors that leave an operator unsure whether anything changed.

## Why it is reusable

All 24 admin flows fetch information or submit actions. Reusing one pattern makes loading and recovery predictable: fetches use a skeleton shaped like the arriving page, while POST and PATCH actions use a blur overlay with the spinning Work2Cash logo until the backend returns a confirmed result.

## Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| AF-01 to AF-24 | A page or record starts a GET/fetch request. | The calling page with data, an intentional empty state or a recoverable error. |
| AF-01 to AF-24 | An admin submits a POST or PATCH action. | The calling action's confirmed result, validation correction or safe retry state. |
| Any protected admin page | Authentication or permission becomes invalid while loading. | ASF-01 for missing/expired authentication, or the ASF-02 forbidden state for insufficient permission. |

## Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| Request kind | Calling page | Distinguish fetch from mutation so the correct blocking behavior is used. |
| Request state | API client | Loading, success, intentional empty, validation error, permission/auth error, retryable failure or unknown outcome. |
| Previous confirmed data | Calling page cache/state | Must remain visibly stale or be replaced only when the new response is authoritative. |
| Retry action | Calling flow | Must repeat only a safe request; mutation retries follow that contract's idempotency rules. |

## Steps

1. **Calling page:** Classifies the operation as a fetch or a state-changing submission.
2. **Dashboard:** Shows a page-shaped skeleton for a fetch, or a blur overlay and spinning Work2Cash logo for a POST/PATCH submission.
3. **Dashboard:** Prevents duplicate submission while a mutation is in flight.
4. **Backend/API client:** Returns confirmed data, an intentional empty result, a validation problem, an authentication/permission problem or a failure.
5. **Dashboard:** Replaces the loading state with the matching result and explains the next safe action in plain language.
6. **Admin:** Corrects input, narrows/clears filters, signs in again, returns to an allowed page or retries when the operation is safe to repeat.
7. **Calling flow:** Resumes at the step that requested the data or action; it never assumes an unknown mutation succeeded.

## Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Loaded view | Calling admin flow | Authoritative data is ready to use. |
| Intentional empty state | Admin operator | The request succeeded but no records match; this is not a system failure. |
| Field or business validation state | Calling form/action | Nothing was applied; the admin can correct documented input. |
| Authentication or permission handoff | ASF-01 or ASF-02 | Access must be restored or the action remains forbidden. |
| Retryable error | Calling flow | The operation did not produce a confirmed result and may be retried under its contract. |
| Unknown mutation outcome | Calling flow and reconciliation path | The UI must fetch authoritative state before offering another mutation. |

## Success return behavior

For a fetch, the calling flow receives authoritative data or an intentional empty result and continues. For a mutation, the overlay closes only after a confirmed response, then the calling flow refreshes or displays the authoritative resulting state.

## Failure return behavior

The subflow keeps the admin in a safe state and states whether anything changed. Validation failures return to the relevant fields. Authentication failures call ASF-01. Permission failures remain forbidden. Network or provider ambiguity after a mutation triggers authoritative refetch or the named reconciliation flow; the UI must not blindly submit the action again.

## Permissions and sensitive data

- Loading and error components must not render protected cached data after authentication or permission is lost.
- Errors show safe operator guidance, not stack traces, provider secrets, raw payloads or sensitive personal data.
- A disabled button or overlay is not authorization; backend permission checks remain mandatory.
- Empty states must distinguish “no matching records” from “you are not allowed to view these records.”
- Monitoring identifiers may be shown when safe, but secrets and raw identity/payment evidence remain hidden.

## Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared skeleton, empty state, blur overlay, spinner, error and retry components | Provide consistent visible state and prevent duplicate interaction. |
| API client | Shared request/error classification | Preserve status and error meaning without treating frontend state as backend truth. |
| Auth | ASF-01 | Repair missing or expired admin authentication. |
| Permission | ASF-02 | Show the correct forbidden state without leaking protected data. |
| Recovery | Calling flow or ASF-10 Provider Reconciliation and Retry | Resolve ambiguous state using the domain's authoritative read/reconciliation behavior. |

## Acceptance criteria

- [ ] Every fetch shows a page-shaped loading state, then data, intentional empty or a clear recoverable error.
- [ ] Every POST/PATCH submission blocks duplicate interaction until a confirmed response or safe recovery state exists.
- [ ] Empty, forbidden, unauthenticated and failed states are visually and verbally distinct.
- [ ] Unknown mutation outcomes are reconciled or refetched rather than assumed successful or retried blindly.
- [ ] Errors expose no stack trace, provider secret or protected record content.
- [ ] Every state returns control to a named step or recovery path in the calling flow.

## Required tests

- [ ] Fetch success, slow loading, intentional empty and retryable failure.
- [ ] Mutation success, validation failure, duplicate-click prevention and network interruption.
- [ ] Expired authentication and insufficient permission during fetch and mutation.
- [ ] Unknown mutation outcome followed by authoritative refetch/reconciliation.
- [ ] Protected cached-data removal after access loss.
- [ ] Error redaction and accessible loading/status announcements.
