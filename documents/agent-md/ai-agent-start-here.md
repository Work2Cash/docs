# Work2Cash AI Agent Start Here

## Purpose

This folder contains Markdown equivalents of the Work2Cash HTML documentation.

The HTML files are for human reading and presentation. The Markdown files are for Codex and other AI agents because they are easier to parse and cheaper in tokens than full HTML.

## Recommended Agent Workflow

Do not give an agent every document by default.

Use this layered context pattern with files downloaded from the documentation portal UI:

```text
1. Shared Execution Rules from Team Markdown Downloads.
2. The relevant team brief from Team Markdown Downloads:
   - Mobile Team Markdown Brief
   - Admin Team Markdown Brief
   - Backend Team Markdown Brief
3. The relevant weekly execution pack from Weekly Execution Packs.
4. Only the specific source document downloaded from its document page.
```

## Preferred Files For Implementation

- Agent usage guide: download **AGENTS.md Usage Guide** from Team Markdown Downloads.
- Full project context: download **Full Project Markdown** from Team Markdown Downloads.
- Week 1: open **Weekly Execution Packs**, then download **Week 1 - Foundation and Identity**.
- Week 2: open **Weekly Execution Packs**, then download **Week 2 - Tasker, Task Creation and Payment**.
- Week 3: open **Weekly Execution Packs**, then download **Week 3 - Discovery, Matching and Execution Start**.
- Week 4: open **Weekly Execution Packs**, then download **Week 4 - Completion, Finance and Support**.
- Week 5: open **Weekly Execution Packs**, then download **Week 5 - Integration, Recovery and Full Flow QA**.
- Week 6: open **Weekly Execution Packs**, then download **Week 6 - Hardening, Security and Performance**.
- Week 7: open **Weekly Execution Packs**, then download **Week 7 - Release Candidate and Operations Dry Run**.
- Week 8: open **Weekly Execution Packs**, then download **Week 8 - Stabilization and Freeze**.

## When To Use Each Markdown Document

Download each source document from its matching documentation portal page using **Download agent Markdown**.

- **Main Enterprise Architecture v1** - Top-level source of truth for Work2Cash product, architecture, infrastructure, providers, standards and timelines.
- **Screen to Feature Map v1** - Figma screen-to-feature mapping reference.
- **Mobile Flow Catalogue v1** - Closed mobile flows, subflows, dependencies, recovery paths and screen silhouettes.
- **Admin Flow Catalogue v1** - Closed admin web flows, dependencies, recovery paths and dashboard silhouettes.
- **Flow Alignment Review v1** - Comparison and decision tracker across Figma, mobile/admin flows and architecture.
- **Legal & User-Facing Documents Pack v1** - Combined legal and user-facing policy pack for MVP review and publication.
- **API & Socket Contract Specification v1** - REST, socket, webhook, queue, event and response-shape contracts.
- **Data Model & Prisma Schema Planning v1** - Prisma/data-model execution baseline and API-to-model traceability.
- **Provider Integration & Cost Control v1** - Provider strategy, adapter rules, webhooks, validation and cost controls.
- **Mobile Build Plan v1** - Mobile-led Flutter execution plan by week and day.
- **Admin Build Plan v1** - Next.js admin execution plan that follows mobile outcomes.
- **Backend Build Plan v1** - NestJS backend execution plan that follows mobile needs.
- **QA Go-Live Readiness Checklist v1** - Final QA gates, provider validation, blockers, rollback and go/no-go checklist.

## Practical Prompt Pattern

```text
Read these Markdown files only:
- AGENTS.md
- Shared Execution Rules
- Backend Team Markdown Brief
- Week 2 - Tasker, Task Creation and Payment
- API & Socket Contract Specification agent Markdown
- Data Model & Prisma Schema Planning agent Markdown

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
4. Download `AGENTS.md`, the shared execution rules, your team brief, the full project Markdown if needed and the weekly pack for the active build week.
5. Give those Markdown files to Codex or your agent of choice before asking it to implement a task.

Tell the agent: `AGENTS.md explains how to use the Work2Cash Markdown files. Follow it before coding.`

## Important Rule

The Main Enterprise Architecture remains the controlling source of truth. If a Markdown equivalent conflicts with a later accepted decision, stop and ask for clarification before implementation.

Do not use **Full Project Markdown** by default. It is available from **Team Markdown Downloads** for broad project understanding, but weekly packs are the preferred execution context.
