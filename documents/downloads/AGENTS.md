# AGENTS.md

This documentation portal contains the Work2Cash team documents.

Use this file to teach Codex or any other AI coding agent how to read the Work2Cash Markdown documents and execute tasks correctly for Mobile, Admin Frontend and Backend.

## Role Of This Portal

- HTML documents are for human/team reading.
- Markdown documents are for Codex and other AI agents.
- The Main Enterprise Architecture remains the controlling source of truth.
- Teams should download the Markdown files relevant to their work and provide them to their agent of choice.

## AI Context Guard

If an agent receives only one team-specific Markdown brief or build-plan Markdown file, it must not give implementation steps yet. It should first ask the user to return to the documentation portal UI and download the relevant flow Markdown, the active weekly execution pack, and **Full Project Markdown**.

Tell teams where to download the files:

- Mobile: open **Mobile Flow Catalogue v1** and click **Download agent Markdown**.
- Admin: open **Admin Flow Catalogue v1** and click **Download agent Markdown**.
- Backend: open **Mobile Flow Catalogue v1** and click **Download agent Markdown**; for admin-facing backend work, also open **Admin Flow Catalogue v1** and click **Download agent Markdown**.
- Active week: open **Weekly Execution Packs** and download the current week Markdown.
- Full source context: open the relevant team **Build Plan v1** page and use **Team Markdown Downloads** to download **Full Project Markdown**.

## Primary Agent Files

Start here from the documentation portal:

- Open **AI Agent Start Here**.

Use shared rules for every task:

- Open any team build plan page, then use **Team Markdown Downloads** to download **Shared Execution Rules**.

Use the relevant team brief from **Team Markdown Downloads** on the matching build plan page:

- **Mobile Team Markdown Brief**
- **Admin Team Markdown Brief**
- **Backend Team Markdown Brief**

Use weekly packs for focused execution. Open **Weekly Execution Packs** from the portal, then download the active week:

- Week 1 - Foundation and Identity
- Week 2 - Tasker, Task Creation and Payment
- Week 3 - Discovery, Matching and Execution Start
- Week 4 - Completion, Finance and Support
- Week 5 - Integration, Recovery and Full Flow QA
- Week 6 - Hardening, Security and Performance
- Week 7 - Release Candidate and Operations Dry Run
- Week 8 - Stabilization and Freeze

Use full project context only when necessary:

- Use **Team Markdown Downloads** to download **Full Project Markdown**.

## How Teams Should Download And Use The Files

Each team should open its build plan page in the documentation portal and use the **Team Markdown Downloads** section. Flow Markdown files are downloaded from their flow document pages using **Download agent Markdown**.

Download:

1. **AGENTS.md Usage Guide**
2. **Shared Execution Rules**
3. The team-specific brief:
   - Mobile: **Mobile Team Markdown Brief**
   - Admin: **Admin Team Markdown Brief**
   - Backend: **Backend Team Markdown Brief**
4. The weekly execution pack for the current week.
5. Any specific source document needed for the task.

If an agent needs broad project context, provide:

- **Full Project Markdown**

Do not use the full project Markdown by default for every task. It is large. Use weekly packs for focused execution.

## Agent Reading Strategy

For normal implementation tasks, do not read every document.

Use this order:

1. **Shared Execution Rules**
2. The relevant team brief.
3. The relevant weekly pack.
4. The specific source document needed for the task, such as API contracts or data model planning.

Only use **Full Project Markdown** when the task requires broad context across product, architecture, flows, providers, data model, build plan and launch rules.

## Codex Usage Pattern

For Codex, paste or attach the files in this order:

```text
Read these Markdown files only:
1. AGENTS.md
2. Shared Execution Rules
3. [Team] Team Markdown Brief
4. [Current Week] Execution Pack
5. [Specific source document downloaded from its portal page]

Do not read HTML files unless I provide a specific section.

Now execute this task:
[task block]
```

## Mobile Team Agent Context

Use these files for normal mobile implementation:

```text
AGENTS.md
Shared Execution Rules
Mobile Team Markdown Brief
[Current Week] Execution Pack
Mobile Flow Catalogue agent Markdown
API & Socket Contract Specification agent Markdown
```

Add **Provider Integration & Cost Control agent Markdown** when the task touches payment, KYC, FCM, maps, SMS, Sentry, Shorebird or media storage.

## Admin Team Agent Context

Use these files for normal admin implementation:

```text
AGENTS.md
Shared Execution Rules
Admin Team Markdown Brief
[Current Week] Execution Pack
Admin Flow Catalogue agent Markdown
API & Socket Contract Specification agent Markdown
```

Add `Data Model & Prisma Schema Planning agent Markdown` when the task needs model names, enum names, audit expectations or admin state behavior.

## Backend Team Agent Context

Use these files for normal backend implementation:

```text
AGENTS.md
Shared Execution Rules
Backend Team Markdown Brief
[Current Week] Execution Pack
API & Socket Contract Specification agent Markdown
Data Model & Prisma Schema Planning agent Markdown
```

Add **Provider Integration & Cost Control agent Markdown** when the task touches Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, Shorebird, object storage, backups, Valkey or BullMQ.

## Full Context Usage

Use the full source file only for onboarding, architecture review, cross-document consistency checks or tasks where the agent must understand the whole platform.

Download **Full Project Markdown** from **Team Markdown Downloads**.

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
