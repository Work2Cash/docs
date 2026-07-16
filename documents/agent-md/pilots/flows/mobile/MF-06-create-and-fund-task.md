---
id: MF-06
title: Task Owner Create and Fund Task
type: main-flow
audience: Non-technical team, Junior mobile developers, Backend, Product, QA, AI agents
owner: Product Lead
reviewers: Technical Lead, Mobile Lead, Backend Lead, QA
status: pilot-draft
version: 0.1
last_reviewed: 2026-07-17
authority: Main Enterprise Architecture and Mobile Flow Catalogue v1
related: SF-04 Location Confirmation, SF-05 Media Upload, SF-06 Payment and Escrow, SF-10 Status Recovery, MF-07 Public Discovery, MF-08 Direct Offer
generated_from: content/pilots/flows/mobile/MF-06-create-and-fund-task.md
do_not_edit: true
---

> Generated agent document. Edit `content/pilots/flows/mobile/MF-06-create-and-fund-task.md` and rerun `node scripts/generate-pilot-docs.js`.

# MF-06 — Task Owner Create and Fund Task

## In plain English

A Task Owner describes the work they need, confirms where and when it should happen, uploads proof of the work to be done, reviews the price and fees, and pays through Paystack or Moniepoint. Work2Cash does not publish the task until the backend confirms the payment and holds the task funds in escrow. The Task Owner then chooses either public discovery or a direct offer to a favorite Tasker.

## Why this flow exists

The flow turns a person's request for help into a funded, valid and safe marketplace task. It ensures that Taskers receive enough information to assess the work and that money is secured before matching begins.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Task Owner | Describes the work, confirms the location and time, uploads proof, reviews cost and chooses how to find a Tasker. |
| Mobile app | Guides the Task Owner through the steps, validates inputs and displays backend truth. |
| Backend | Saves the draft, validates business rules, creates payment intent, verifies payment and creates escrow. |
| Google Maps adapter | Converts a manual address to coordinates and supports pin confirmation. |
| Object storage | Receives protected task-proof photos or videos. |
| Paystack or Moniepoint | Collects payment and sends a provider result that the backend verifies. |

## Before this flow begins

- The Task Owner is authenticated.
- The Task Owner profile contains the minimum required identity and contact information.
- The selected task category and task type are active in the approved catalog.
- The task site can be confirmed inside Nigeria.
- At least one approved payment provider is available.
- The mobile app can recover draft, media and payment state from the backend after interruption.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Post Task action | The Task Owner starts a new task from Home or another approved entry point. |
| Resume draft | The Task Owner returns to a previously saved incomplete task. |
| Rebook | MF-24 creates a new draft from a completed task while preserving the original task. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Category and task type | Defines the approved kind of work. | Admin-managed catalog. |
| Description | Tells the Tasker what must be done. | Task Owner. |
| Required arrival time | Allows a Tasker to confirm they can arrive on time. | Task Owner. |
| Confirmed task location | Supports matching, ETA and later address access rules. | GPS or manually entered address confirmed on a map. |
| Proof of work to be done | Gives Taskers and operations evidence of the starting condition. | Task Owner photo or video. |
| Task amount and fees | Shows the full cost before payment. | Backend pricing and fee rules. |
| Payment result | Determines whether the task can proceed to matching. | Backend-verified Paystack or Moniepoint state. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Approved task catalog | Supplies valid categories, task types and any configured minimum amount. | Selected category and task type are enabled for new tasks. |
| SF-04 — Location, Address and Pin Confirmation | Produces an authoritative Nigerian task location from GPS or manual address entry. | Pin is confirmed and passes coverage rules. |
| SF-05 — Media Upload | Uploads and finalizes protected proof media. | Required proof is active and associated with the draft. |
| SF-06 — Payment and Escrow Funding | Creates payment intent, verifies provider truth and creates held escrow. | Payment is backend-confirmed before publishing. |
| SF-10 — Status Recovery and Resume | Restores draft and payment state after app close, network loss or provider return. | Backend state remains authoritative. |

## Verbal walkthrough

1. **Task Owner:** Opens Post Task or resumes an existing draft.
2. **Mobile app:** Loads the current approved categories and task types.
3. **Task Owner:** Selects a category and task type and describes the work.
4. **Backend:** Creates or updates the task draft so progress is not held only in local memory.
5. **Task Owner:** Sets the required arrival time.
6. **Task Owner:** Uses GPS or enters an address manually.
7. **Backend and maps adapter:** Geocode the manual address where necessary, confirm the pin and reject a task site outside Nigeria.
8. **Task Owner:** Uploads the required photo or video showing the work to be done.
9. **Backend and object storage:** Finalize protected media and associate it with the draft.
10. **Mobile app:** Requests and displays the task amount, service or processing fee and total payable amount.
11. **Task Owner:** Confirms the review and chooses Paystack or Moniepoint.
12. **Backend:** Creates an idempotent payment intent and returns the supported provider action.
13. **Provider:** Processes the payment and redirects or reports status.
14. **Backend:** Verifies the provider result or signed webhook. A frontend redirect alone never marks the task paid.
15. **Backend:** Marks successful payment, creates held escrow and makes the funded task eligible for matching.
16. **Task Owner:** Chooses public discovery or a direct offer to a favorite Tasker.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Save and leave | Required details are not complete or the Task Owner chooses to stop. | Draft remains saved and unpublished. | Resume MF-06 later from the last valid checkpoint. |
| Public discovery | Payment and escrow are confirmed and the Task Owner wants eligible Taskers to express interest. | Funded task becomes available through controlled public discovery. | Continue to MF-07 — Public Discovery and Tasker Interest. |
| Direct offer | Payment and escrow are confirmed and the Task Owner selects an eligible favorite Tasker. | A durable direct offer is created. | Continue to MF-08 — Direct Offer to Favorite Tasker. |
| Payment pending | Provider processing or webhook confirmation is incomplete. | Task remains funded-pending and cannot be published. | SF-10 refreshes backend status until success, failure or expiry. |
| Payment failed or expired | Backend-confirmed provider state is failed or expired. | No matching begins and no held escrow is treated as available. | Task Owner can retry through SF-06 with an idempotent new attempt. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task | Create or update | Moves from draft details toward funded matching eligibility. |
| TaskLocation | Create or update before funding | Stores the confirmed task site and Nigeria validation result. |
| TaskMedia | Create and finalize | Stores protected owner proof metadata and access state. |
| PaymentAttempt | Create or update | Tracks one idempotent provider attempt. |
| Payment | Create or update | Stores backend-confirmed provider collection state. |
| ProviderWebhookEvent | Create | Preserves provider callback identity and processing status. |
| Escrow | Create after confirmed payment | Holds task funds before completion or resolution. |
| TaskStatusEvent | Create for important state changes | Preserves the task timeline for recovery and operations. |

## Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Provider request | Creates payment intent with Paystack or Moniepoint. | Selected payment provider. |
| Webhook/verification job | Reconciles provider truth safely and idempotently. | Payment use case and admin finance monitoring. |
| Audit/operations visibility | Makes draft, media, payment and escrow state observable. | Admin task and finance operations. |
| Notification | Confirms funded, pending or failed outcome without claiming success prematurely. | Task Owner. |
| Matching handoff | Broadcasts publicly or creates a direct offer only after funding. | Eligible Taskers or selected favorite Tasker. |

## Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Funded for public discovery | Payment is verified and escrow is held. | Task Owner can wait for eligible Tasker interest. | MF-07 handles discovery and candidate selection. |
| Direct offer created | Payment is verified and an eligible favorite receives a durable offer. | Task Owner sees offer status. | MF-08 handles accept, decline or expiry. |
| Draft saved | The task is incomplete or deliberately paused. | Nothing is published and no Tasker is matched. | Resume MF-06. |
| Payment pending | Provider truth is not final. | Task Owner sees a pending state and safe refresh option. | Status recovery and reconciliation continue. |
| Payment failed or expired | The payment attempt did not fund the task. | Task remains unpublished. | Retry or keep the draft. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Funded task and public matching selected | MF-07 — Public Discovery and Tasker Interest | Eligible Taskers can discover the task and express interest. |
| Funded task and favorite Tasker selected | MF-08 — Direct Offer to Favorite Tasker | The selected Tasker can accept, decline or let the offer expire. |
| Incomplete draft | Draft list or MF-06 resume checkpoint | The Task Owner must finish missing details before payment or matching. |
| Payment unresolved | SF-10 — Status Recovery and Resume | Backend truth must be refreshed before any next business action. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| GPS denied or inaccurate | Location cannot be confirmed automatically. | Explain permission need, allow retry and provide manual address plus pin confirmation. | Return to the location step after a valid pin is confirmed. |
| Address resolves outside Nigeria | The task site is not accepted. | Ask the Task Owner to correct the address or pin. | Continue from location after Nigeria validation passes. |
| Media upload fails | File remains failed or incomplete; submission cannot continue. | Retry, remove or replace the file without duplicating finalized media. | Return to proof review when required media is active. |
| Network fails after draft save | App shows offline/retry state. | Reload the draft from the backend when connectivity returns. | Resume from the last backend-confirmed checkpoint. |
| Provider redirect closes | App must not show confirmed payment. | Fetch payment and task status from the backend. | Continue at pending, failed or funded result returned by the backend. |
| Webhook is delayed or duplicated | Payment remains pending or the duplicate is ignored safely. | Reconciliation uses provider reference and unique event/idempotency rules. | Resume only after one authoritative result is recorded. |
| Provider is unavailable | Selected option is temporarily unavailable. | Preserve the draft and allow an enabled alternate provider or later retry. | Return to payment selection without recreating the task. |

## Business rules

- The task site must be in Nigeria.
- The task must use an approved active category and task type.
- The minimum task amount and configured fee rules must be enforced by the backend.
- Required owner proof media must be finalized before funding completes.
- Exact address and full proof media remain permission-controlled.
- Payment success comes from backend verification or verified provider events, never the redirect screen alone.
- Escrow must be created only from an authoritative successful payment outcome.
- Matching begins only after payment and escrow readiness.
- Public discovery and direct offers are durable REST/database behavior; direct offers are notified through FCM rather than Socket.IO.

## Forbidden behavior

- Do not add Facebook login or unrelated onboarding behavior to this flow.
- Do not make card-entry-first payment the default experience.
- Do not publish an unfunded task.
- Do not call paid map or payment-provider operations in uncontrolled refresh loops.
- Do not expose exact addresses or full proof media publicly.
- Do not treat local mobile state as payment, escrow or task truth.
- Do not reuse a completed task record when rebooking; create a new draft.

## Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Task type selection | Select approved category and task type. | A valid selection is made. |
| 2 | Task details | Describe the work and required arrival time. | Required details pass validation and draft is saved. |
| 3 | Location confirmation | Confirm GPS or manual address on a map. | Nigeria validation and pin confirmation pass. |
| 4 | Proof upload | Add required photo or video. | Required media is finalized. |
| 5 | Price review | Show task amount, fee and total. | Task Owner confirms the review. |
| 6 | Payment | Start provider action and show safe pending/recovery states. | Backend returns funded, pending, failed or expired truth. |
| 7 | Matching choice | Choose public discovery or direct favorite offer. | Funded task is handed to MF-07 or MF-08. |

## Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| Draft API | `POST /task-owner/tasks/drafts`, task update contract | Save progress and validate accepted task fields. |
| Location API | `POST /location/geocode`, `POST /location/confirm-pin` | Produce and confirm an authoritative Nigerian task site. |
| Media API | Task-owner media upload/finalize contracts | Protect and associate required proof media. |
| Payment API | `POST /payment-intent`, payment status/verify contract | Create idempotent provider attempts and return backend truth. |
| Provider callbacks | Paystack and Moniepoint webhooks | Verify signatures, deduplicate events and reconcile payment. |
| Data | Task, TaskLocation, TaskMedia, PaymentAttempt, Payment, ProviderWebhookEvent, Escrow, TaskStatusEvent | Persist durable business state and recovery evidence. |
| Notifications | FCM/in-app where applicable | Report task/payment outcome and matching handoff. |

## Acceptance criteria

- [ ] Given an authenticated Task Owner, when valid task details are entered, the backend saves a recoverable draft.
- [ ] A task site outside Nigeria is rejected before funding.
- [ ] Required proof media must be finalized before the funded task becomes matchable.
- [ ] The Task Owner sees task amount, fee and total before confirming payment.
- [ ] A frontend redirect never marks a task paid without backend verification.
- [ ] Duplicate provider events cannot create duplicate payment, escrow or task transitions.
- [ ] A pending or interrupted payment resumes from backend truth.
- [ ] Public discovery is available only after payment and escrow confirmation.
- [ ] A direct offer is created through durable REST state and notified without making the offer Socket-based.
- [ ] Protected location and media are not exposed to ineligible users.

## Required tests

- [ ] Complete funded public-discovery path.
- [ ] Complete funded direct-offer path.
- [ ] Draft save and resume after app restart.
- [ ] GPS denial and manual-address recovery.
- [ ] Outside-Nigeria location rejection.
- [ ] Media upload retry, replace and duplicate-finalize protection.
- [ ] Payment success, pending, failure, expiry and provider return recovery.
- [ ] Duplicate webhook and duplicate payment-intent idempotency.
- [ ] Provider outage and alternate-provider behavior.
- [ ] Address, media and provider-payload privacy.
- [ ] Admin task/finance visibility after funding.

## Out of scope

- Tasker discovery and candidate selection after publication.
- Task execution, completion and settlement.
- Admin task reassignment, which is forbidden.
- Promo codes, subscriptions, loyalty and other deferred pricing features.
- Automatic Tasker acceptance.
