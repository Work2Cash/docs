# Phase 1 Pilot Usability Review

Use this log to validate whether the Phase 1 documentation pilots work for the two intended reader groups. Do not coach participants toward answers and do not let them open the old catalogues while completing the first pass.

## Review status

- [x] Automated structure and generated-output validation passed on 17 July 2026.
- [x] Existing HTML document-guard validation passed on 17 July 2026.
- [x] AF-04 flow, contract, data and QA pilots updated to review-ready v0.2 on 17 July 2026.
- [ ] Desktop visual review completed.
- [ ] Mobile-width visual review completed.
- [ ] Non-technical reader session completed.
- [ ] Junior-developer session completed.
- [ ] Findings applied to the templates and canonical pilots.
- [ ] Product and Technical Lead sign-off recorded.

Visual review remains pending because no interactive browser session was available in the audit environment. Do not infer visual approval from the automated HTML checks.

## Documents under review

| Reader | Primary pilot | Supporting pilot documents allowed after the standalone-flow questions |
| --- | --- | --- |
| Non-technical team member | `documents/pilots/flows/mobile/MF-06-create-and-fund-task.html` | None during the first pass; endpoint, data and QA pilots afterward if relevant. |
| Junior admin developer | `documents/pilots/flows/admin/AF-04-kyc-review.html` v0.2 | `contracts/kyc-review-contract-group.html`, `data/kyc-domain.html`, `qa/AF-04-kyc-review-suite.html`. |

## Session rules

- [ ] Record the participant's role and experience without recording unnecessary personal information.
- [ ] Use a current generated pilot page, not the canonical source or an old catalogue page.
- [ ] Allow the participant to use the page table of contents.
- [ ] Do not allow external documentation during the standalone-flow section.
- [ ] Ask the participant to think aloud and explain the flow in their own words.
- [ ] Record every place where the participant searches backward, searches forward or leaves the flow.
- [ ] Record misleading wording separately from missing information.
- [ ] Do not count an answer as correct merely because the participant repeats a heading.

## Session information

| Field | Value |
| --- | --- |
| Date |  |
| Facilitator |  |
| Participant role |  |
| Experience level |  |
| Document and version |  |
| Device and viewport |  |
| Start time |  |
| End time |  |

## Non-technical reader tasks

Ask the participant to read MF-06, then answer verbally without leaving the page.

- [ ] Explain why the flow exists in one or two sentences.
- [ ] Identify who or what participates in the flow.
- [ ] Explain what must already be true before the flow begins.
- [ ] Retell the main sequence from starting a task through the matching choice.
- [ ] Explain the difference between public discovery and a direct offer.
- [ ] Explain what happens when payment is pending, failed or interrupted.
- [ ] Explain why a frontend payment redirect is not final payment proof.
- [ ] Name the possible endings and what each means for the Task Owner.
- [ ] Explain what happens next for each successful matching choice.
- [ ] Identify at least two actions the product must never perform.

### Non-technical pass criteria

- [ ] At least 8 of 10 answers are materially correct.
- [ ] The participant explains prerequisites, the main sequence, at least one branch, one failure recovery and both successful next flows correctly.
- [ ] The participant does not need another document to explain the product behavior.
- [ ] No incorrect answer would create a payment, privacy, escrow or matching safety risk.
- [ ] The participant rates the document at least 4 out of 5 for clarity.

## Junior developer tasks

Ask the participant to read AF-04 first. Supporting pilot documents may be opened only after the standalone questions.

- [ ] Explain the business purpose and entry points.
- [ ] Identify every prerequisite and dependency and explain what each dependency provides.
- [ ] Retell the flow from queue entry through decision, audit, notification and handoff.
- [ ] Explain the approve, reject, re-verification, risk-review and provider-monitoring branches.
- [ ] Identify the records read or changed and the important side effects.
- [ ] Explain stale-review conflict, duplicate provider event and notification-failure recovery.
- [ ] Identify the permission, audit and sensitive-data constraints.
- [ ] Identify the exact queue, detail, approve, reject, re-verification, risk-escalation and reconciliation endpoints.
- [ ] Explain the expected-version, idempotency, permission and provider-cooldown rules.
- [ ] Explain the User, TaskerProfile, KycVerification and KycAttempt relationship.
- [ ] Explain how numbered KycAttempts preserve history and how late callbacks are prevented from overwriting the current case.
- [ ] Select the QA cases needed for happy path, permission, provider delay, duplication and concurrency.
- [ ] Explain what is explicitly out of scope.

### Junior-developer pass criteria

- [ ] At least 11 of 13 answers are materially correct.
- [ ] All safety-critical answers about permission, privacy, state authority, idempotency and audit are correct.
- [ ] The participant uses the documented API paths and model fields without inventing alternatives.
- [ ] The participant can identify prerequisites, sequence, branches, outputs, recovery and tests without opening an old document.
- [ ] Any move from the main flow to a supporting pilot has a clear technical purpose rather than searching for basic flow meaning.
- [ ] The participant rates the main flow at least 4 out of 5 for clarity and implementation readiness.

## Observation log

| Time or section | What the participant tried to understand | What happened | Classification | Proposed correction |
| --- | --- | --- | --- | --- |
|  |  |  | Missing, unclear, misleading, duplicate or navigation |  |

## Answer and confidence record

| Question or task | Correct | Participant confidence 1–5 | Needed backward/forward search | Needed another document | Notes |
| --- | --- | --- | --- | --- | --- |
|  | Yes / Partly / No |  | Yes / No | Yes / No |  |

## Findings and template changes

| Finding | Reader group | Severity | Canonical source or template affected | Agreed change | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | Critical, high, medium or low |  |  |  | Open |

## Sign-off

| Role | Name | Decision | Date | Conditions or follow-up |
| --- | --- | --- | --- | --- |
| Product Lead |  | Approve / Revise |  |  |
| Technical Lead |  | Approve / Revise |  |  |
| Non-technical representative |  | Clear / Not clear |  |  |
| Junior-developer representative |  | Ready / Not ready |  |  |

Phase 1 may close only after both reader sessions pass, high-severity findings are resolved, the generated outputs are refreshed, and the final automated checks pass again.
