# AGENTS.md

This repository is the Work2Cash documentation portal. These rules tell Codex and other AI agents how to select context, resolve authority and execute Mobile, Admin Frontend and Backend tasks safely.

## Start with the registry

Before relying on a document, check `governance/document-registry.md` or the portal **Document Registry** page for its owner, lifecycle, approval, authority and artifact class.

- Use the Phase 6 portal reader routes when a person or agent knows the task but not the document name.
- Use portal search for cross-library lookup by ID or term; then open the focused source returned by the search.
- Human-facing HTML is for team reading.
- Clean agent Markdown is for AI context.
- Canonical sources control generated outputs.
- Legacy HTML/Markdown pairs are transitional and may contain duplication or presentation markup.
- The Full Project Markdown bundle is non-canonical and must not resolve conflicts.

## Authority and conflict rules

Use the authority order in `governance/lifecycle-policy.md`:

1. Approved architecture decisions.
2. Active Main Enterprise Architecture for cross-platform rules.
3. Active domain sources for flows, contracts, data, providers, security, legal or operations.
4. Build tasks and generated team weekly packs for scheduling only; legacy planning documents are historical references.
5. Generated outputs, which inherit their source authority.
6. Legacy, draft, in-review and combined context artifacts.

The Phase 4 **Technical Reference Library** is the current reading surface for architecture, contracts, data, providers, operations and screens. Its approved referral and KYC records retain their accepted authority; its other migrated records remain provisional or in review while formal approval is pending. If provisional sources conflict on behavior, contracts, data, security, finance, privacy or legal meaning, identify the conflict and request a decision before implementation.

## Minimum implementation context

If an agent receives only a team brief or build plan, it must not give implementation steps yet. It should request:

1. Shared Execution Rules.
2. The relevant team brief.
3. The active team weekly execution pack and assigned day.
4. The assigned day and embedded agent prompt inside that weekly pack.
5. The specific flow or domain source required for the task.
6. The relevant API/socket contract.
7. Data-model or provider documentation when the task touches those areas.

Request **Full Project Markdown** only for onboarding, architecture review, cross-document consistency checks or genuinely cross-platform work. Do not require it for normal focused implementation.

If no active delivery stage, team week or day is identified, ask which is active rather than assuming from calendar dates or legacy week labels.

## Where to download context

- Mobile flows: open **Standalone Flow Library**, select the relevant `MF` or `SF` page and choose **Download agent Markdown**.
- Admin flows: open **Standalone Flow Library**, select the relevant `AF` or `ASF` page and choose **Download agent Markdown**.
- Backend mobile-facing work: use the relevant standalone `MF`/`SF` agent Markdown.
- Backend admin-facing work: use the relevant standalone `AF`/`ASF` agent Markdown.
- Flow relationships: use the generated **Flow Dependency Map**; use the combined catalogue only for broad cross-flow review.
- Accepted contract-gap decisions: open **Canonical Contract Decision Library**. Referral work must use `CONTRACT-REFERRAL-001` instead of inventing or reviving the former MF-17/AF-15 gap.
- Technical references: open **Phase 4 Technical Reference Library**, choose Contracts, Data, Platform or Screens, then search for and link directly to the required record. Do not read all four families for a focused task.
- Agent technical context: download only the relevant one of `documents/agent-md/technical/contracts.md`, `data.md`, `platform.md` or `screens.md`.
- OpenAPI: use `documents/technical/openapi/work2cash-v1.json`. An operation marked provisional or carrying `x-work2cash-gaps` is not permission to invent its missing schema.
- Assurance and governance: open **Phase 5 Assurance and Governance Library**, choose QA and Release, Legal and Compliance, or Decisions and Governance, then search for and link directly to the required record. Do not read all three families for focused work.
- Agent assurance context: download only the relevant one of `documents/agent-md/assurance/qa-release.md`, `legal-compliance.md` or `decisions-governance.md`. A migrated record does not mean a test passed, legal wording was approved, a release was authorized or an open decision was resolved.
- Build plans: open **Phase 3 Execution Planning Library**, choose the team, then the active week and day.
- Build tasks: use the daily section inside the active team-week HTML page; standalone daily task pages are not generated.
- Agent execution: download the team weekly Markdown; it contains Day 1 through Day 5 and an agent prompt inside each day.
- Shared rules and team briefs: use the repository downloads section or the relevant legacy build-plan download links during transition.
- Legacy weekly packs and combined build plans: use only as migration evidence; they no longer control work.
- Broad context only: use the generated **Full Project Agent Context** from AI-agent downloads. It is a compact non-canonical map for onboarding and cross-document review, not an implementation source.

## Team context sets

### Mobile

```text
AGENTS.md
Shared Execution Rules
Mobile Team Markdown Brief
[Active Mobile week] Focused Execution Pack
[Assigned day and embedded MOB agent prompt]
Relevant Mobile Flow
Relevant API & Socket Contract section
```

Add provider documentation for payment, KYC, FCM, maps, SMS, Sentry, Shorebird or media storage.

### Admin Frontend

```text
AGENTS.md
Shared Execution Rules
Admin Team Markdown Brief
[Active Admin week] Focused Execution Pack
[Assigned day and embedded ADM agent prompt]
Relevant Admin Flow
Relevant API & Socket Contract section
```

Add data-model documentation for model names, enums, audit behavior or admin state transitions.

### Backend

```text
AGENTS.md
Shared Execution Rules
Backend Team Markdown Brief
[Active Backend week] Focused Execution Pack
[Assigned day and embedded BE agent prompt]
Relevant Mobile and/or Admin Flow
Relevant API & Socket Contract section
Relevant Data Model section
```

Add provider documentation for Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, Shorebird, object storage, backups, Valkey or BullMQ.

## Task execution rule

Before implementing, state:

- The controlling source and its registry status.
- The flow or task being implemented.
- Required contracts, models and providers.
- Known gaps or conflicts.
- Acceptance criteria and required tests.

Do not invent missing endpoint paths, model fields, provider behavior or product decisions. A named contract or schema gap is a blocker to that portion of implementation, not permission to guess.

## Forbidden assumptions

- Do not use `activeMode`; use `mode`.
- Do not add Facebook login.
- Do not add card-entry-first payment UX.
- Do not use OPay; MVP payment providers are Paystack and Moniepoint.
- Do not create Tasker auto-accept behavior.
- Do not create admin task reassignment.
- Do not make direct offers socket-based.
- Do not make disputes live chat.
- Do not treat frontend payment redirects as final payment proof.
- Do not expose exact addresses, full proof media, real phone numbers, KYC data or payment secrets.
- Do not introduce paid provider auto-refresh loops.

## Documentation editing

- Follow `governance/editing-policy.md` and `governance/versioning-policy.md`.
- Edit canonical sources, not generated outputs.
- Treat legacy documents as transitional and avoid adding duplicated prose.
- For flow changes, edit `content/flows/`, then run `node scripts/generate-flow-docs.js` and `node scripts/generate-flow-migration-inventory.js`.
- For accepted contract-gap decisions, edit `content/contracts/`, then run `node scripts/generate-contract-docs.js`. Referral changes must also pass `node scripts/validate-referral-contract.js`.
- For consolidated technical-reference changes, edit the relevant source in `content/technical/`, then run `node scripts/generate-technical-docs.js`. Do not edit `documents/technical/`, `documents/agent-md/technical/` or the generated Phase 4 inventories directly.
- For assurance, legal/compliance or decision-governance changes, edit the relevant source in `content/assurance/`, then run `node scripts/generate-assurance-docs.js`. Do not edit `documents/assurance/` or `documents/agent-md/assurance/` directly. Legal records remain internal and non-effective until qualified approval and a separate publication decision.
- For portal reader routes, library cards or glossary changes, edit `content/portal/portal.json`, then run `node scripts/generate-portal.js`. This also regenerates portal search, AI Agent Start Here and Full Project Agent Context.
- For task changes, edit the relevant weekly source in `content/tasks/<team>/week-*.md` (or the Admin Integration Week), then run `node scripts/generate-task-docs.js`, `node scripts/generate-task-migration-inventory.js` and `node scripts/generate-execution-plans.js`.
- Run `node scripts/validate-docs.js` before handoff.
- Run `node scripts/validate-accessibility.js` for portal or human-page changes.
- Commit feature by feature or fix by fix; do not stack unrelated work.

Examples:

```text
feat(auth): implement email-first otp login
feat(mobile-task): add task location pin confirmation
feat(admin-kyc): implement kyc review queue
fix(wallet): prevent duplicate escrow release
docs(agents): update daily execution pack
```
