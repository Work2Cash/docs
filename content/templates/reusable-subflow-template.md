---
id: SUBFLOW-ID
title: Subflow title
type: reusable-subflow
audience: Non-technical team, Junior developers, Product, QA
owner: Product Lead
reviewers: Technical Lead, Relevant team lead, QA
status: draft
version: 0.1
last_reviewed: YYYY-MM-DD
authority: Main Enterprise Architecture
related: Calling flow IDs with names
---

# SUBFLOW-ID — Subflow title

## In plain English

Explain the reusable behavior and the problem it repairs or completes.

## Why it is reusable

Explain why multiple main flows call this behavior.

## Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| ID — Name | Calling condition | Where control returns |

## Inputs

| Input | Source | Required validation |
| --- | --- | --- |

## Steps

1. **Actor/System:** Complete step.

## Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |

## Success return behavior

Explain how the calling flow resumes after success.

## Failure return behavior

Explain safe failure, retry and abandonment behavior.

## Permissions and sensitive data

- State access, logging and privacy rules.

## Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |

## Acceptance criteria

- [ ] The subflow returns a clear success or safe failure result to every calling flow.

## Required tests

- [ ] Success, invalid input, permission failure, retry and re-entry behavior.

