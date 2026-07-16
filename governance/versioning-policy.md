# Work2Cash Documentation Versioning Policy

## Version format

Canonical documents use `major.minor` versions.

- Increase the minor version for clarification, structure, traceability or non-behavioral corrections.
- Increase the major version for changes to product behavior, architecture, finance, security, privacy, providers, legal obligations, operational policy or public contracts.
- Generated outputs inherit the canonical source version and must not invent a separate content version.
- Combined context packs carry a generation date and the source versions they contain.

## Review dates

- `lastReviewed` records subject-matter review, not file modification.
- `nextReview` must be assigned when a document becomes approved or active.
- A document with no evidenced review date remains `draft` or `in-review`.
- Passing automated checks does not count as product, legal, security or technical approval.

## Supersession

- A superseding registry entry must name the replaced document.
- Superseded files remain available only when historical traceability is useful.
- Portal navigation must lead readers to the current entry, not silently to a superseded file.
- Archived or superseded agent files must not be included in normal context packs.

## Legacy v1 documents

The existing v1 HTML and agent-Markdown pairs predate deterministic generation. Their version labels remain v1 during Phase 0, but the registry marks them `in-review` and `legacy-transitional-source` or `legacy-derived-frozen`. Publication does not imply formal approval.
