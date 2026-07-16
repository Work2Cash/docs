---
id: FLOW-ID
title: Flow title
type: main-flow
audience: Non-technical team, Junior developers, Product, QA
owner: Product Lead
reviewers: Technical Lead, Relevant team lead, QA
status: draft
version: 0.1
last_reviewed: YYYY-MM-DD
authority: Main Enterprise Architecture
related: Related IDs with names
---

# FLOW-ID — Flow title

## In plain English

Explain the complete flow in one short paragraph without reference codes or unexplained technical language.

## Why this flow exists

Explain the business or user problem this flow solves.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Primary actor | What this actor does |
| Supporting actor/system | What this actor or system does |

## Before this flow begins

- State what has already happened.
- State which records and statuses must exist.
- State permissions, provider readiness and environment requirements.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Entry screen/action/event | Condition that starts the flow |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Required information | Reason | User, database, provider or previous flow |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| ID — Name | Why this flow needs it | State that must be ready |

## Verbal walkthrough

1. **Actor:** Describe the action.
2. **System:** Describe validation or response.
3. Continue through the complete normal path without omitting steps.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Decision name | When this branch applies | What changes | Conditional next action |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Record name | Operation | Exact business effect |

## Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Notification, job, event or audit | What is produced | Who or what receives it |

## Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Terminal state | Plain-language meaning | What the user can do | Required follow-up |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Normal completion condition | ID — Name | Reason for the handoff |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Failure case | Visible outcome | Named recovery steps | Re-entry point |

## Business rules

- List rules that must always hold.

## Forbidden behavior

- List shortcuts, unsafe assumptions and out-of-scope behavior.

## Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Screen ID — Name | Why it exists | What moves the user onward |

## Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | Method and path | What it does for this flow |
| Data | Model names | What they store |
| Provider | Provider name | What it supplies |

## Acceptance criteria

- [ ] Given a stated starting condition, when an actor performs an action, then the expected business outcome occurs.
- [ ] Include success, decision, permission, recovery, privacy and audit expectations.

## Required tests

- [ ] Happy path.
- [ ] Every decision branch.
- [ ] Every documented recovery path.
- [ ] Permission and privacy behavior.
- [ ] Side effects and audit evidence.

## Out of scope

- Explicitly list behavior not included in this flow.

