# Work2Cash Documentation Editing Policy

## Status

| Field | Value |
| --- | --- |
| Policy ID | GOV-EDIT-001 |
| Status | Active |
| Approval | Approved through Phase 0 execution direction |
| Owner | Technical Lead |
| Reviewers | Product Lead and affected subject-matter owners |
| Effective date | 17 July 2026 |
| Next review | 17 October 2026 |

## Purpose

This policy prevents the human portal, AI-agent files and planning documents from silently describing different products.

## Artifact classes

Every governed document must be registered as one of these classes.

| Class | Meaning | Editing rule |
| --- | --- | --- |
| Canonical source | The approved source from which equivalent outputs are produced. | Edit through a reviewed source change. |
| Generated output | Human HTML, agent Markdown, index or context assembled from canonical sources. | Never edit directly; change the source and regenerate. |
| Legacy transitional source | A manually maintained document that predates the canonical-source model. | Only correctness, navigation and governance fixes are allowed until migration. Do not expand it with duplicated new prose. |
| Legacy derived frozen | An old export or combined bundle without a reproducible generator. | Do not edit for normal documentation work. Regenerate or replace during its scheduled migration; Phase 0 may reconcile critical drift once. |

The machine-readable classification is in `governance/document-registry.json`.

## Canonical-source rule

- Modular structured Markdown is the target canonical format.
- Equivalent human HTML and AI-agent Markdown must come from the same canonical source.
- Generated artifacts must state their source and must be reproducible.
- The Full Project Agent Context is a generated convenience artifact, never a controlling source.
- Team briefs and weekly packs narrow execution scope; they do not override product or architecture decisions.
- Existing legacy HTML/Markdown pairs remain transitional until their phase migration is complete.

## Change authority

- The Technical Lead owns repository integrity, publishing and technical consistency.
- Product behavior changes require Product Lead review.
- Security, privacy, KYC, finance, legal, infrastructure or provider changes require the relevant subject-matter reviewer.
- Team members may propose changes, but publication requires the owner and required reviewers recorded in the registry.
- No reviewer may approve a change outside their subject area merely because they can edit the repository.

## Required change workflow

1. Identify the registry entry and controlling source.
2. State whether the change is clarification, correction or decision change.
3. For a decision change, update the decision/architecture source before dependent flows, contracts, models, plans and QA.
4. Edit canonical sources only. A documented Phase 0 reconciliation is the sole exception for legacy drift repair.
5. Regenerate outputs using the repository scripts.
6. Run `node scripts/validate-docs.js` and every relevant generator in check mode.
7. Record material changes in `governance/review-log.md`.
8. Use one focused commit per coherent documentation change.

## Generated-file freeze

Direct edits are prohibited in:

- `documents/pilots/`
- `documents/agent-md/pilots/`
- `documents/document-registry.html`
- `documents/agent-md/document-registry.md`
- `governance/document-registry.md`

CI verifies these generated artifacts against their sources. A generated-file change without its canonical-source change is invalid.

Legacy derived files are also frozen except for the explicitly recorded Phase 0 reconciliation. Their lack of deterministic generation is technical debt, not permission to maintain duplicate prose.

## Emergency corrections

A security, privacy, payment or dangerous implementation error may be corrected immediately by the Technical Lead. The correction must still identify affected sources, dependent files, reviewer and follow-up approval in the review log.

## Prohibited repository content

Never store API keys, production credentials, passwords, sensitive personal data, raw KYC data, private payment data or confidential operational secrets in this public repository. The client-side portal password is not a security boundary.
