# AGENTS.md

This repository contains the Work2Cash documentation portal.

Use this file to teach Codex or any other AI coding agent how to read the Work2Cash Markdown documents and execute tasks correctly for Mobile, Admin Frontend and Backend.

## Role Of This Repo

- HTML documents are for human/team reading.
- Markdown documents are for Codex and other AI agents.
- The Main Enterprise Architecture remains the controlling source of truth.
- Teams should download the Markdown files relevant to their work and provide them to their agent of choice.

## Primary Agent Files

Start here:

- `documents/agent-md/ai-agent-start-here.md`

Use shared rules for every task:

- `documents/downloads/shared-ai-agent-execution-rules-v1.md`

Use the relevant team brief:

- `documents/downloads/mobile-team-build-brief-v1.md`
- `documents/downloads/admin-team-build-brief-v1.md`
- `documents/downloads/backend-team-build-brief-v1.md`

Use weekly packs for focused execution:

- `documents/agent-md/weeks/week-01-foundation-identity.md`
- `documents/agent-md/weeks/week-02-tasker-task-creation-payment.md`
- `documents/agent-md/weeks/week-03-discovery-matching-execution-start.md`
- `documents/agent-md/weeks/week-04-completion-finance-support.md`
- `documents/agent-md/weeks/week-05-integration-recovery-full-flow-qa.md`
- `documents/agent-md/weeks/week-06-hardening-security-performance.md`
- `documents/agent-md/weeks/week-07-release-candidate-operations-dry-run.md`
- `documents/agent-md/weeks/week-08-stabilization-freeze.md`

Use full project context only when necessary:

- `documents/agent-md/work2cash-full-source-of-truth-v1.md`

## How Teams Should Download And Use The Files

Each team should open its build plan page in the documentation portal and use the **Team Markdown Downloads** section.

Download:

1. `AGENTS.md`
2. `documents/downloads/shared-ai-agent-execution-rules-v1.md`
3. The team-specific brief:
   - Mobile: `documents/downloads/mobile-team-build-brief-v1.md`
   - Admin: `documents/downloads/admin-team-build-brief-v1.md`
   - Backend: `documents/downloads/backend-team-build-brief-v1.md`
4. The weekly execution pack for the current week.
5. Any specific source document needed for the task.

If an agent needs broad project context, provide:

- `documents/agent-md/work2cash-full-source-of-truth-v1.md`

Do not use the full project Markdown by default for every task. It is large. Use weekly packs for focused execution.

## Agent Reading Strategy

For normal implementation tasks, do not read every document.

Use this order:

1. `documents/downloads/shared-ai-agent-execution-rules-v1.md`
2. The relevant team brief.
3. The relevant weekly pack.
4. The specific source document needed for the task, such as API contracts or data model planning.

Only read `work2cash-full-source-of-truth-v1.md` when the task requires broad context across product, architecture, flows, providers, data model, build plan and launch rules.

## Codex Usage Pattern

For Codex, paste or attach the files in this order:

```text
Read these Markdown files only:
1. AGENTS.md
2. documents/downloads/shared-ai-agent-execution-rules-v1.md
3. documents/downloads/[team]-team-build-brief-v1.md
4. documents/agent-md/weeks/[current-week].md
5. documents/agent-md/[specific-source-document].md

Do not read HTML files unless I provide a specific section.

Now execute this task:
[task block]
```

## Mobile Team Agent Context

Use these files for normal mobile implementation:

```text
AGENTS.md
documents/downloads/shared-ai-agent-execution-rules-v1.md
documents/downloads/mobile-team-build-brief-v1.md
documents/agent-md/weeks/[current-week].md
documents/agent-md/mobile-flow-catalogue-v1.md
documents/agent-md/api-socket-contract-specification-v1.md
```

Add `documents/agent-md/provider-integration-cost-control-v1.md` when the task touches payment, KYC, FCM, maps, SMS, Sentry, Shorebird or media storage.

## Admin Team Agent Context

Use these files for normal admin implementation:

```text
AGENTS.md
documents/downloads/shared-ai-agent-execution-rules-v1.md
documents/downloads/admin-team-build-brief-v1.md
documents/agent-md/weeks/[current-week].md
documents/agent-md/admin-flow-catalogue-v1.md
documents/agent-md/api-socket-contract-specification-v1.md
```

Add `documents/agent-md/data-model-prisma-schema-planning-v1.md` when the task needs model names, enum names, audit expectations or admin state behavior.

## Backend Team Agent Context

Use these files for normal backend implementation:

```text
AGENTS.md
documents/downloads/shared-ai-agent-execution-rules-v1.md
documents/downloads/backend-team-build-brief-v1.md
documents/agent-md/weeks/[current-week].md
documents/agent-md/api-socket-contract-specification-v1.md
documents/agent-md/data-model-prisma-schema-planning-v1.md
```

Add `documents/agent-md/provider-integration-cost-control-v1.md` when the task touches Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, Shorebird, object storage, backups, Valkey or BullMQ.

## Full Context Usage

Use the full source file only for onboarding, architecture review, cross-document consistency checks or tasks where the agent must understand the whole platform.

```text
documents/agent-md/work2cash-full-source-of-truth-v1.md
```

For coding tasks, prefer the smaller weekly and team files.

## Forbidden Assumptions

- Do not use `activeMode`; use `mode`.
- Do not add Facebook login.
- Do not add card-entry-first payment UX.
- Do not create admin task reassignment.
- Do not make direct offers socket-based.
- Do not make disputes live chat.
- Do not treat frontend payment redirects as final payment proof.
- Do not expose exact addresses, full proof media, real phone numbers, KYC data or payment secrets.
- Do not introduce paid provider auto-refresh loops.

## Commit Discipline

Commit feature by feature or fix by fix.

Do not stack unrelated work in one commit.

Examples:

```text
feat(auth): implement email-first otp login
feat(mobile-task): add task location pin confirmation
feat(admin-kyc): implement kyc review queue
fix(wallet): prevent duplicate escrow release
docs(agents): update weekly execution pack
```
