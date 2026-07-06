# Work2Cash Week 7 - Release Candidate Preparation And Operational Dry Runs

## Purpose

This is the focused AI-agent execution pack for Week 7 of the Work2Cash build plan.

Use this file with:

- `../downloads/shared-ai-agent-execution-rules-v1.md`
- the relevant team brief in `../downloads/`
- the specific contract/model/provider Markdown document needed for the task

Do not load the full HTML documents for normal implementation work.

## Dates

- Start: Mon 17 Aug 2026
- End: Fri 21 Aug 2026
- Build model: 8 weeks development + 2 weeks testing

## Week Goal

Prepare mobile, admin and backend release candidates while running provider, payout, monitoring, backup and support dry runs.

## Week Exit Condition

Release candidates are available on staging with provider validation evidence, backup restore proof and operational handover notes.

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
| W7D1 | Mon 17 Aug 2026 | Release candidate preparation | Prepare Android release candidate configuration, app icon/name/package, permissions and environment mapping. | Production-like staging config. | Package name ng.work2cash.app. |
| W7D2 | Tue 18 Aug 2026 | Device matrix QA | Test priority Android devices, small screens, low memory, poor network and background app-kill recovery. | Staging API/socket. | Create device issue list by flow. |
| W7D3 | Wed 19 Aug 2026 | Operations dry run support | Validate mobile behavior for support live chat, emergency support, reports, payout status and admin-driven outcomes. | Admin/backend staging flows. | Confirm user-facing status copy. |
| W7D4 | Thu 20 Aug 2026 | Provider validation support | Run payment, KYC, maps, FCM, media and Sentry validation from mobile side. | Provider staging endpoints. | Attach evidence to provider validation checklist. |
| W7D5 | Fri 21 Aug 2026 | Mobile release candidate | Generate release candidate build and handover notes for QA testing. | Stable staging backend. | Only approved fixes after RC. |


## Backend Tasks

| Day | Date | Workstream | Execution Scope | Dependency | Commit / Output Rule |
| --- | --- | --- | --- | --- | --- |
| W7D1 | Mon 17 Aug 2026 | Release candidate backend preparation | Freeze API contracts, generate OpenAPI, migration notes and environment checklist. | Frontend RC prep. | chore(release): prepare backend release candidate |
| W7D2 | Tue 18 Aug 2026 | Backup and restore dry run | Run Postgres backup, object storage upload, restore to staging/temp database and evidence capture. | Backup storage configured. | chore(ops): prove backup restore flow |
| W7D3 | Wed 19 Aug 2026 | Payout and finance dry run | Run payout batch, ledger consistency, reconciliation, failed/partial transfer and disputed Tasker exclusion tests. | Finance provider staging. | test(finance): validate payout batch dry run |
| W7D4 | Thu 20 Aug 2026 | Provider validation report | Finalize Paystack, Moniepoint, Smile ID, Google Maps, Termii, FCM, Sentry, storage and Shorebird evidence. | All provider staging endpoints. | docs(providers): publish validation report |
| W7D5 | Fri 21 Aug 2026 | Backend release candidate | Tag backend release candidate and hand over to formal QA. | Stable staging. | chore(release): tag backend release candidate |


## Admin Tasks

| Day | Date | Workstream | Execution Scope | Dependency | Output Rule |
| --- | --- | --- | --- | --- | --- |
| W7D1 | Mon 17 Aug 2026 | Admin release candidate preparation | Prepare protected admin build, environment config and deployment checklist. | Staging/prod env config. | No secrets committed. |
| W7D2 | Tue 18 Aug 2026 | Finance and payout dry run | Run withdrawal queue, payout batch creation/approval/process and partial failure handling. | /admin/payout-batches/*. | Attach payout dry-run evidence. |
| W7D3 | Wed 19 Aug 2026 | Support and operations dry run | Run support live chat, emergency support, reports, KYC review and wallet-support operations. | Support/report/admin APIs. | Confirm support handover steps. |
| W7D4 | Thu 20 Aug 2026 | Monitoring and config validation | Validate use-case health, queue/provider status, remote config, coverage and audit log visibility. | Ops/admin APIs. | Confirm operational dashboard readiness. |
| W7D5 | Fri 21 Aug 2026 | Admin release candidate | Generate admin release candidate and handover notes for QA testing. | Stable staging backend. | Only approved fixes after RC. |


## Cross-Team Dependency Rule

Mobile controls implementation order. Backend must publish contracts/stubs before mobile needs them. Admin follows the operational data created by mobile flows and persisted by backend.

## AI Agent Prompt Template

```text
Read these Markdown files only:
- documents/downloads/shared-ai-agent-execution-rules-v1.md
- documents/downloads/[team]-team-build-brief-v1.md
- documents/agent-md/weeks/week-07-release-candidate-operations-dry-run.md
- documents/agent-md/[specific-source-document].md

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
