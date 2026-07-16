# Work2Cash Canonical Documentation Templates

These templates define the minimum structure for canonical documentation sources. Human HTML and AI-agent Markdown must be generated from completed canonical sources rather than maintained independently.

## Template rules

- Keep every required section, using `Not applicable — <reason>` when a section genuinely does not apply.
- Expand reference IDs with their names and explain why the referenced item matters.
- Write the plain-language explanation before implementation detail.
- State actors explicitly: user, Task Owner, Tasker, admin, backend, provider or worker.
- Describe next steps conditionally.
- Keep business behavior in the canonical source; presentation belongs in the generator and stylesheet.
- Do not place decorative HTML in canonical sources.
- Do not mark a source `active` until its required reviewers approve it.

## Available templates

- `main-flow-template.md`
- `reusable-subflow-template.md`
- `screen-template.md`
- `build-task-template.md`
- `api-endpoint-template.md`
- `data-model-template.md`
- `provider-template.md`
- `qa-test-case-template.md`
- `architecture-decision-template.md`

## Phase 1 pilot workflow

Canonical pilot sources live in `content/pilots/`. Generated files are deliberately separated:

- Human HTML: `documents/pilots/`
- AI-agent Markdown: `documents/agent-md/pilots/`

After changing a canonical pilot source, run:

```text
node scripts/generate-pilot-docs.js
```

To validate metadata, required sections, generated-file drift, local links, section anchors, document guards and presentation-free agent Markdown without writing files, run:

```text
node scripts/generate-pilot-docs.js --check
```

The GitHub Pages workflow runs the check before deployment. Pilot documents must remain separate from active catalogues until non-technical and junior-developer usability reviews pass.
