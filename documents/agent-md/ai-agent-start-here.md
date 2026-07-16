# Work2Cash AI Agent Start Here

## Purpose

This folder contains AI-readable Work2Cash documentation. Check `document-registry.md` before relying on a file.

Some Markdown files are legacy exports containing presentation HTML. They remain transitional until regenerated from canonical sources. Publication does not mean formal approval.

## Recommended Agent Workflow

Do not give an agent every document by default.

Use this layered context pattern:

```text
1. shared-ai-agent-execution-rules-v1.md
2. the relevant team brief:
   - mobile-team-build-brief-v1.md
   - admin-team-build-brief-v1.md
   - backend-team-build-brief-v1.md
3. the relevant weekly execution pack in `weeks/`, only when the active week is formally identified
4. the specific flow, contract, model or provider document needed for the task
```

## Preferred Files For Implementation

- Agent usage guide: `../../AGENTS.md`
- Document authority and lifecycle: `document-registry.md`
- Full project context: `work2cash-full-source-of-truth-v1.md`
- Week 1: `weeks/week-01-foundation-identity.md`
- Week 2: `weeks/week-02-tasker-task-creation-payment.md`
- Week 3: `weeks/week-03-discovery-matching-execution-start.md`
- Week 4: `weeks/week-04-completion-finance-support.md`
- Week 5: `weeks/week-05-integration-recovery-full-flow-qa.md`
- Week 6: `weeks/week-06-hardening-security-performance.md`
- Week 7: `weeks/week-07-release-candidate-operations-dry-run.md`
- Week 8: `weeks/week-08-stabilization-freeze.md`

## When To Use Each Markdown Document

- `main-enterprise-architecture-v1.md` - Top-level source of truth for Work2Cash product, architecture, infrastructure, providers, standards and timelines.
- `screen-to-feature-map-v1.md` - Figma screen-to-feature mapping reference.
- `mobile-flow-catalogue-v1.md` - Closed mobile flows, subflows, dependencies, recovery paths and screen silhouettes.
- `admin-flow-catalogue-v1.md` - Closed admin web flows, dependencies, recovery paths and dashboard silhouettes.
- `flow-alignment-review-v1.md` - Comparison and decision tracker across Figma, mobile/admin flows and architecture.
- `legal_user_facing_documents_pack_v1.md` - Combined legal and user-facing policy pack for MVP review and publication.
- `api-socket-contract-specification-v1.md` - REST, socket, webhook, queue, event and response-shape contracts.
- `data-model-prisma-schema-planning-v1.md` - Prisma/data-model execution baseline and API-to-model traceability.
- `provider-integration-cost-control-v1.md` - Provider strategy, adapter rules, webhooks, validation and cost controls.
- `build-plan-mobile-v1.md` - Mobile-led Flutter execution plan by week and day.
- `build-plan-admin-v1.md` - Next.js admin execution plan that follows mobile outcomes.
- `build-plan-backend-v1.md` - NestJS backend execution plan that follows mobile needs.
- `qa-go-live-readiness-checklist-v1.md` - Final QA gates, provider validation, blockers, rollback and go/no-go checklist.

## Practical Prompt Pattern

```text
Read these Markdown files only:
- AGENTS.md
- documents/downloads/shared-ai-agent-execution-rules-v1.md
- documents/downloads/backend-team-build-brief-v1.md
- documents/agent-md/weeks/week-02-tasker-task-creation-payment.md
- API & Socket Contract Specification v1 agent Markdown
- Data Model & Prisma Schema Planning v1 agent Markdown

Do not read the HTML documents unless I provide a specific section.

Task:
[paste task block here]
```

## Team Download Instructions

1. Open the documentation portal.
2. Go to your team build plan page:
   - Mobile Build Plan
   - Admin Build Plan
   - Backend Build Plan
3. Use the **Team Markdown Downloads** panel.
4. Download `AGENTS.md`, the shared execution rules, your team brief, the specific source documents and the weekly pack only when the active build week is formally identified.
5. Give those Markdown files to Codex or your agent of choice before asking it to implement a task.

Tell the agent: `AGENTS.md explains how to use the Work2Cash Markdown files. Follow it before coding.`

## Important Rule

The Main Enterprise Architecture v1 is the designated provisional controlling baseline while formal approval is pending. Follow the authority order in `AGENTS.md` and the registry. If provisional sources conflict on material behavior, stop and request a decision before implementation.

Do not read `work2cash-full-source-of-truth-v1.md` by default and never treat it as independently authoritative. It is a legacy-derived bundle for broad context; focused source documents are preferred.
