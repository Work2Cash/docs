# Work2Cash Week 8 - Stabilization, Go-Live Rehearsal And Build Freeze

## Purpose

This is the focused AI-agent execution pack for Week 8 of the Work2Cash build plan.

Before using this weekly pack with Codex or any AI agent, download the required Markdown files from the documentation portal UI.

Use this file with:

- **AGENTS.md Usage Guide** from **Team Markdown Downloads**.
- **Shared Execution Rules** from **Team Markdown Downloads**.
- The relevant team brief from **Team Markdown Downloads**.
- The relevant flow catalogue from its portal page using **Download agent Markdown**.
- **Full Project Markdown** from **Team Markdown Downloads** when broad context is required.
- Any specific contract, model, provider or source document needed for the task using **Download agent Markdown** on that document page.

Do not load the full HTML documents for normal implementation work.

## Dates

- Start: Mon 24 Aug 2026
- End: Fri 28 Aug 2026
- Build model: 8 weeks development + 2 weeks testing

## Week Goal

Complete final defect pass, go-live rehearsal, documentation handover and controlled build freeze before formal testing starts.

## Week Exit Condition

Builds are frozen for the two-week testing window. Only blocker fixes are allowed after this point.

## Non-Negotiable Rules For This Week

- Use `mode`, not `activeMode`.
- Do not introduce Facebook login.
- Do not introduce card-entry-first payment flows.
- Do not create admin task reassignment.
- Direct offers remain REST/FCM driven, not socket-based.
- Durable task/payment/KYC/wallet state must be REST/database-backed.
- Sensitive actions use PIN confirmation; OTP is for PIN recovery/contact verification.
- Keep commits feature by feature or fix by fix.

## Mobile Tasks

| Day | Date | Workstream | Execution Scope | Dependency | Output Rule |
| --- | --- | --- | --- | --- | --- |
| W8D1 | Mon 24 Aug 2026 | Stabilization sprint | Apply approved release-candidate fixes and polish only. | RC defect list. | No new features. |
| W8D2 | Tue 25 Aug 2026 | Final defect pass | Re-test fixed defects and run critical mobile happy paths. | Stable staging. | Close or classify every mobile defect. |
| W8D3 | Wed 26 Aug 2026 | Go-live rehearsal | Run Task Owner, Tasker and support journeys exactly as launch users will experience them. | Production-like staging. | Document launch rehearsal evidence. |
| W8D4 | Thu 27 Aug 2026 | Handover and store readiness | Confirm legal/help links, app permissions, screenshots/test notes and support handover notes. | Final docs and staging app. | Prepare testing-week handover. |
| W8D5 | Fri 28 Aug 2026 | Build freeze | Freeze mobile build for formal testing weeks. | Stable staging backend. | Only blocker fixes after this point. |


## Backend Tasks

| Day | Date | Workstream | Execution Scope | Dependency | Commit / Output Rule |
| --- | --- | --- | --- | --- | --- |
| W8D1 | Mon 24 Aug 2026 | Stabilization sprint | Apply approved release-candidate fixes only. | RC defect list. | fix(release): resolve approved rc defects |
| W8D2 | Tue 25 Aug 2026 | Final backend defect pass | Re-test fixed defects, run migrations, queues, sockets, webhooks and financial consistency checks. | Stable staging. | test(release): verify backend critical paths |
| W8D3 | Wed 26 Aug 2026 | Go-live rehearsal | Run production-style deployment rehearsal, rollback rehearsal, backup restore proof and provider smoke tests. | Production-like staging. | chore(release): run go live rehearsal |
| W8D4 | Thu 27 Aug 2026 | Backend handover | Finalize runbooks, env checklist, provider escalation notes, monitoring alerts and support handover. | Final docs. | docs(ops): finalize backend handover |
| W8D5 | Fri 28 Aug 2026 | Backend build freeze | Freeze backend build for formal testing weeks. | Stable staging. | chore(release): freeze backend build |


## Admin Tasks

| Day | Date | Workstream | Execution Scope | Dependency | Output Rule |
| --- | --- | --- | --- | --- | --- |
| W8D1 | Mon 24 Aug 2026 | Stabilization sprint | Apply approved admin release-candidate fixes only. | RC defect list. | No new modules. |
| W8D2 | Tue 25 Aug 2026 | Final admin defect pass | Re-test fixed defects and critical admin flows. | Stable staging. | Close or classify every admin defect. |
| W8D3 | Wed 26 Aug 2026 | Go-live rehearsal | Run admin operations exactly as launch support and operations team will use them. | Production-like staging. | Document launch rehearsal evidence. |
| W8D4 | Thu 27 Aug 2026 | Admin handover | Confirm role permissions, runbooks, support notes, payout notes and moderation notes. | Final docs and staging admin. | Prepare testing-week handover. |
| W8D5 | Fri 28 Aug 2026 | Admin build freeze | Freeze admin build for formal testing weeks. | Stable staging. | Only blocker fixes after this point. |


## Cross-Team Dependency Rule

Mobile controls implementation order. Backend must publish contracts/stubs before mobile needs them. Admin follows the operational data created by mobile flows and persisted by backend.

## AI Agent Prompt Template

```text
Read these Markdown files downloaded from the documentation portal UI only:
- Shared Execution Rules
- [Team] Team Markdown Brief
- This weekly execution pack
- [Specific source document downloaded from its portal page]

Do not read HTML files unless I explicitly provide a section.

Task ID:
Team:
Week:
Day:
Flow/use case/module:
Implementation scope:
Acceptance criteria:
Tests required:
Do not do:
Commit message:
```
