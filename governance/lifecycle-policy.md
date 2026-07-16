# Work2Cash Document Lifecycle and Authority Policy

## Lifecycle statuses

| Status | Meaning | May guide implementation? |
| --- | --- | --- |
| Draft | Being authored; important information may be incomplete. | No, except explicitly identified exploration. |
| In review | Published or circulated for validation but not formally approved. | Only as a provisional baseline with blockers and conflicts called out. |
| Approved | Required reviewers accepted the content; activation may still be scheduled. | Yes, when applicable to the task. |
| Active | Approved and currently controlling its documented scope. | Yes. |
| Deprecated | Still available temporarily but a replacement should be used. | Only for maintaining old behavior. |
| Superseded | Replaced by a named document or version. | No. |
| Archived | Retained only for history. | No. |

## Approval statuses

`pending`, `approved`, `rejected` and `not-required` are approval states. Lifecycle and approval are separate, but a document cannot be `active` unless approval is `approved`.

## Publication statuses

`internal`, `published` and `withdrawn` describe availability. A published document may still be in review. Publication alone is not approval.

## Authority order

When two documents disagree, use this order:

1. Formally approved architecture decisions and recorded accepted decision changes.
2. The active Main Enterprise Architecture for cross-platform product and technical rules.
3. The active domain source for its scope: flow, contract, data, provider, security, legal or operations.
4. Active build tasks and weekly packs, which schedule approved behavior but do not redefine it.
5. Generated human and agent outputs, which inherit authority from their sources.
6. Legacy, draft, in-review and combined context artifacts.

If a higher-authority source is only `in-review`, treat it as the designated provisional baseline and report material conflicts instead of silently choosing.

## Current Phase 0 authority state

- The Main Enterprise Architecture v1 is the designated controlling baseline, but formal approval evidence is not recorded; its lifecycle status is therefore `in-review`.
- The other legacy v1 documents are published, provisional supporting baselines with pending approval.
- The document registry and governance policies are active for repository control.
- Phase 1 pilots are drafts and do not replace active or provisional catalogue content.
- The Full Project Markdown bundle is non-canonical and legacy-derived; it must never resolve a conflict by itself.

## Conflict handling

An agent or team member who finds a conflict must:

1. Name both sources and their registry statuses.
2. Apply the authority order when an approved controlling source exists.
3. Stop before implementation when the conflict changes behavior, contracts, data, security, finance, privacy or legal meaning and no approved source resolves it.
4. Record the required decision and affected documents.
5. Update canonical sources and regenerate outputs after approval.
