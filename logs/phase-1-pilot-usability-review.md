# Phase 1 Pilot Usability Review

Use this log to validate whether the Phase 1 documentation pilots work for the two intended reader groups. Do not coach participants toward answers and do not let them open the old catalogues while completing the first pass.

## Review status

- [x] Automated structure and generated-output validation passed on 17 July 2026.
- [x] Existing HTML document-guard validation passed on 17 July 2026.
- [x] AF-04 flow, contract, data and QA pilots approved as v0.2 migration references on 17 July 2026.
- [x] Desktop visual review approved on 17 July 2026.
- [x] Mobile-width visual review approved on 17 July 2026.
- [x] Non-technical reader session completed and accepted on 17 July 2026.
- [x] Junior-developer session completed and accepted on 17 July 2026.
- [x] Reader findings reviewed; neither representative requested a template or pilot correction.
- [x] Product and Technical Lead approval recorded on 17 July 2026.

The repository owner confirmed approval of the desktop and mobile-width presentation on 17 July 2026. Specific devices, viewport dimensions and reviewer names were not supplied and are not inferred.

## Recorded usability outcome — 17 July 2026

The repository owner reported that the two pilot documents were reviewed by the intended representatives: one non-technical team member reviewed MF-06 and one junior developer reviewed AF-04. Both representatives found the new flow-document structure clear, approved keeping the format and requested no changes.

This is sufficient evidence for the two reader-usability gates. Names, devices, answer-by-answer scores and exact quotations were not supplied, so they are intentionally not invented in this record. The unfilled protocol tables below remain available for more detailed future sessions and do not invalidate the recorded acceptance.

| Representative | Document reviewed | Reported decision | Requested correction |
| --- | --- | --- | --- |
| Non-technical team member | `documents/pilots/flows/mobile/MF-06-create-and-fund-task.html` | Clear; retain the new format | None reported |
| Junior developer | `documents/pilots/flows/admin/AF-04-kyc-review.html` | Ready; retain the new format | None reported |

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

- [x] Representative accepted the document as clear and requested that the format be retained.
- [x] No misunderstanding or safety-critical concern was reported.
- [ ] Answer-by-answer score was not supplied.
- [ ] Numeric clarity rating was not supplied.

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

- [x] Representative accepted the document as understandable and ready to retain as the flow format.
- [x] No misunderstanding, invented alternative or safety-critical concern was reported.
- [ ] Answer-by-answer score was not supplied.
- [ ] Numeric clarity and implementation-readiness rating was not supplied.

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
| None reported | Both | Not applicable | None | Retain the approved format | Not applicable | Closed |

## Sign-off

| Role | Name | Decision | Date | Conditions or follow-up |
| --- | --- | --- | --- | --- |
| Product Lead | Name not recorded | Approve | 17 July 2026 | Approval confirmed by repository owner |
| Technical Lead | Name not recorded | Approve | 17 July 2026 | Approval confirmed by repository owner |
| Non-technical representative | Name not recorded | Clear—retain format | 17 July 2026 | No correction reported; recorded from repository-owner report |
| Junior-developer representative | Name not recorded | Ready—retain format | 17 July 2026 | No correction reported; recorded from repository-owner report |

All Phase 1 usability, visual, lead and subject-matter approval gates are complete. The approved set is ready to serve as the Phase 2 migration reference.
