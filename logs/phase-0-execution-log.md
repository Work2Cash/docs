# Phase 0 Execution Log — Stop Further Drift

## Outcome

Phase 0 establishes repository governance and automated drift controls. It does not approve the product, architecture, legal, provider, build-plan or QA content. Those legacy document families remain visibly `in-review` with `pending` approval until their required reviewers sign off.

## Completed work

- [x] Canonical-source model approved as repository policy.
- [x] Canonical, generated, legacy transitional and legacy derived artifact classes defined.
- [x] Direct edits to reproducibly generated outputs prohibited and checked in CI.
- [x] Machine-readable registry created at `governance/document-registry.json`.
- [x] Human and agent registry views generated from the machine-readable registry.
- [x] Lifecycle, approval, publication, versioning, authority and conflict rules defined.
- [x] Every published top-level human HTML and agent Markdown family registered with owner and status.
- [x] All 169 known broken document-hub links repaired.
- [x] AGENTS.md focused-context and Full Project Markdown contradiction resolved.
- [x] Root and downloadable AGENTS.md copies synchronized and validated.
- [x] Known Screen To Feature Map drift corrected: OPay, Tasker auto-accept and admin reassignment.
- [x] Obsolete Planned, Draft and Active source labels corrected in the architecture and legacy bundle copy.
- [x] Repository-wide HTML link, anchor, duplicate-ID, guard and registry metadata validation added.
- [x] Generated registry and Phase 1 pilot drift checks added to deployment CI.
- [x] Portal entry guidance updated to lead with the Document Registry.

## Before and after evidence

| Check | Before Phase 0 | After Phase 0 |
| --- | --- | --- |
| Broken human HTML local references | 169 | 0 |
| Registered published document families | 0 | 25 |
| Document lifecycle policy | Missing | Active |
| Machine-readable registry | Missing | Present and generated into human/agent views |
| AGENTS.md Full Project context rule | Contradictory | Focused context by default; full bundle only for broad work |
| Screen map MVP providers | Included OPay | Paystack and Moniepoint |
| Screen map Tasker availability | Included auto-accept | Explicitly excludes auto-accept |
| Screen map admin task action | Included reassign | Controlled force cancel only; reassignment forbidden |
| Main architecture status wording | Mixed Active, Draft and Planned | Published provisional; formal review pending |

## Automated commands

```text
node scripts/generate-document-registry.js --check
node scripts/generate-pilot-docs.js --check
node scripts/validate-docs.js
node scripts/apply.guard.js
```

## Deliberately unresolved after Phase 0

- [ ] Formal approval of Main Enterprise Architecture v1 by the required product and technical reviewers.
- [ ] Formal subject-matter approval of each legacy v1 document family.
- [ ] Selection of the active execution week by the Project or Technical Lead.
- [ ] Migration of legacy HTML/agent pairs to modular canonical Markdown in later phases.
- [ ] Deterministic regeneration of the Full Project Agent Context in Phase 6.
- [ ] Provider pricing and capability validation before procurement or implementation.
- [x] AF-04 queue/detail/decision/risk/reconciliation contracts defined in the Phase 1 v0.2 pilot; Phase 4 merge and subject review remain.
- [x] Exact KycAttempt schema/lifecycle defined in the Phase 1 v0.2 pilot; Phase 4 merge and implementation remain.

These items do not reopen Phase 0 because Phase 0's purpose is to make their state explicit and prevent new silent drift. They remain blockers for approval, implementation or later phase closure where applicable.
