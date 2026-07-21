---
id: ENDPOINT-ID
title: METHOD /path
type: api-endpoint
audience: Junior developers, Backend, Mobile/Admin consumers, QA, AI agents
owner: Backend Team
reviewers: Technical Lead, Consumer team, QA
status: planned
version: 0.1
last_reviewed: YYYY-MM-DD
authority: API and Socket Contract Specification
related: Flow and model IDs with names
---

# METHOD /path

## Business purpose

Explain what this endpoint accomplishes without HTTP jargon.

## When it is used

State the actor, flow step and preconditions.

## Access and safety

| Field | Requirement |
| --- | --- |
| Actor | Actor |
| Authentication | Requirement |
| Permission | Permission |
| Sensitive data | Handling rule |
| Idempotency | Key and behavior |

## Request

### Headers and path parameters

| Name | Required | Meaning |
| --- | --- | --- |

### Request body

```json
{}
```

## Success response

```json
{}
```

## Expected errors

| Code | Condition | Consumer behavior |
| --- | --- | --- |

## State and side effects

| Effect | Detail |
| --- | --- |
| Records | Read/created/changed records |
| Events/jobs | Produced work |
| Notifications | Recipients |
| Audit | Required evidence |

## Traceability

| Type | Reference | Relationship |
| --- | --- | --- |

## Implementation status

Planned, stubbed, implemented, integrated, tested or deprecated.

## Required tests

- [ ] Success, validation, authentication, permission, state guard, duplicate/idempotent request and side effects.

