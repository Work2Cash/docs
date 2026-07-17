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
3. the active team weekly pack in `planning/weeks/<team>/`
4. the assigned day and embedded agent prompt inside that weekly pack
5. the specific flow, contract, model or provider source named by that day
```

## Preferred Files For Implementation

- Agent usage guide: `../../AGENTS.md`
- Document authority and lifecycle: `document-registry.md`
- Full project context: `work2cash-full-source-of-truth-v1.md`
- Phase 3 planning index: `planning/README.md`
- Mobile plan: `planning/mobile-build-plan.md`
- Admin plan: `planning/admin-build-plan.md`
- Backend plan: `planning/backend-build-plan.md`
- Weekly execution packs: `planning/weeks/<team>/`

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
- `planning/mobile-build-plan.md` - Active Mobile week-by-week entry point.
- `planning/admin-build-plan.md` - Active Admin construction, integration and hardening entry point.
- `planning/backend-build-plan.md` - Active Backend week-by-week entry point.
- `build-plan-mobile-v1.md`, `build-plan-admin-v1.md` and `build-plan-backend-v1.md` - superseded migration evidence.
- `qa-go-live-readiness-checklist-v1.md` - Final QA gates, provider validation, blockers, rollback and go/no-go checklist.

## Practical Prompt Pattern

```text
Read these Markdown files only:
- AGENTS.md
- documents/downloads/shared-ai-agent-execution-rules-v1.md
- documents/downloads/backend-team-build-brief-v1.md
- documents/agent-md/planning/weeks/backend/week-02-tasker-task-creation-payment.md

Do not read the HTML documents unless I provide a specific section.
```

## Team Download Instructions

1. Open the documentation portal.
2. Open **Phase 3 Execution Planning Library**.
3. Choose your team, week and assigned day.
4. Download that team's weekly agent Markdown.
5. Tell the agent which day is active; the matching prompt is embedded under that day.

Tell the agent: `AGENTS.md explains how to use the Work2Cash Markdown files. Follow it before coding.`

## Important Rule

The Main Enterprise Architecture v1 is the designated provisional controlling baseline while formal approval is pending. Follow the authority order in `AGENTS.md` and the registry. If provisional sources conflict on material behavior, stop and request a decision before implementation.

Do not read `work2cash-full-source-of-truth-v1.md` by default and never treat it as independently authoritative. It is a legacy-derived bundle for broad context; focused source documents are preferred.
