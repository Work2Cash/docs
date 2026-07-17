# AGENTS.md

This repository is the Work2Cash documentation portal. These rules tell Codex and other AI agents how to select context, resolve authority and execute Mobile, Admin Frontend and Backend tasks safely.

## Start with the registry

Before relying on a document, check `governance/document-registry.md` or the portal **Document Registry** page for its owner, lifecycle, approval, authority and artifact class.

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
4. Build tasks and weekly packs for scheduling only.
5. Generated outputs, which inherit their source authority.
6. Legacy, draft, in-review and combined context artifacts.

The current Main Enterprise Architecture v1 is the designated provisional controlling baseline while formal approval remains pending. If provisional sources conflict on behavior, contracts, data, security, finance, privacy or legal meaning, identify the conflict and request a decision before implementation.

## Minimum implementation context

If an agent receives only a team brief or build plan, it must not give implementation steps yet. It should request:

1. Shared Execution Rules.
2. The relevant team brief.
3. The active weekly execution pack, if a week has been formally selected.
4. The specific flow or domain source required for the task.
5. The relevant API/socket contract.
6. Data-model or provider documentation when the task touches those areas.

Request **Full Project Markdown** only for onboarding, architecture review, cross-document consistency checks or genuinely cross-platform work. Do not require it for normal focused implementation.

If no active week is identified in the registry or execution index, ask the user which week is active rather than assuming from calendar dates.

## Where to download context

- Mobile flows: open **Standalone Flow Library**, select the relevant `MF` or `SF` page and choose **Download agent Markdown**.
- Admin flows: open **Standalone Flow Library**, select the relevant `AF` or `ASF` page and choose **Download agent Markdown**.
- Backend mobile-facing work: use the relevant standalone `MF`/`SF` agent Markdown.
- Backend admin-facing work: use the relevant standalone `AF`/`ASF` agent Markdown.
- Flow relationships: use the generated **Flow Dependency Map**; use the combined catalogue only for broad cross-flow review.
- Shared rules and team briefs: use **Team Markdown Downloads** on the relevant build-plan page.
- Weekly packs: open **Weekly Execution Packs** and select the formally active week.
- Broad context only: use **Full Project Markdown** from Team Markdown Downloads.

## Team context sets

### Mobile

```text
AGENTS.md
Shared Execution Rules
Mobile Team Markdown Brief
[Formally active week] Execution Pack
Relevant Mobile Flow
Relevant API & Socket Contract section
```

Add provider documentation for payment, KYC, FCM, maps, SMS, Sentry, Shorebird or media storage.

### Admin Frontend

```text
AGENTS.md
Shared Execution Rules
Admin Team Markdown Brief
[Formally active week] Execution Pack
Relevant Admin Flow
Relevant API & Socket Contract section
```

Add data-model documentation for model names, enums, audit behavior or admin state transitions.

### Backend

```text
AGENTS.md
Shared Execution Rules
Backend Team Markdown Brief
[Formally active week] Execution Pack
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
- Run `node scripts/validate-docs.js` before handoff.
- Commit feature by feature or fix by fix; do not stack unrelated work.

Examples:

```text
feat(auth): implement email-first otp login
feat(mobile-task): add task location pin confirmation
feat(admin-kyc): implement kyc review queue
fix(wallet): prevent duplicate escrow release
docs(agents): update weekly execution pack
```
