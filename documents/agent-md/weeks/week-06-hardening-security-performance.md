# Work2Cash Week 6 - Hardening, Security And Performance

## Purpose

This is the focused AI-agent execution pack for Week 6 of the Work2Cash build plan.

Use this file with:

- `../downloads/shared-ai-agent-execution-rules-v1.md`
- the relevant team brief in `../downloads/`
- the specific contract/model/provider Markdown document needed for the task

Do not load the full HTML documents for normal implementation work.

## Dates

- Start: Mon 10 Aug 2026
- End: Fri 14 Aug 2026
- Build model: 8 weeks development + 2 weeks testing

## Week Goal

Fix integration defects, harden performance/security/provider behavior, improve recovery paths and close major technical gaps.

## Week Exit Condition

Critical defects from Week 5 are resolved or owned, and core flows are stable enough for release-candidate preparation.

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
| W6D1 | Mon 10 Aug 2026 | Hardening sprint | Fix defects from full flow QA, improve copy, skeletons, submit overlays, retry states. | No new backend scope except defects. | Keep commits fix by fix. |
| W6D2 | Tue 11 Aug 2026 | Performance and device QA | Profile lower-end Android performance, image/video upload, socket battery/network behavior. | Staging API/socket. | Optimize without changing product rules. |
| W6D3 | Wed 12 Aug 2026 | Provider recovery flows | Harden payment return, KYC return, FCM tap recovery, socket reconnect and media upload retry behavior. | Provider staging endpoints plus REST status endpoints. | Document any provider-specific recovery issue. |
| W6D4 | Thu 13 Aug 2026 | Security and privacy review | Verify PIN confirmation, permission prompts, private media, exact-address reveal rules and masked-call copy. | Stable auth/profile/task APIs. | No sensitive data leakage in logs or UI. |
| W6D5 | Fri 14 Aug 2026 | Hardening review | Run full mobile smoke test, close major defects and prepare release-candidate checklist. | All mobile contracts. | Create release-candidate blocker list. |


## Backend Tasks

| Day | Date | Workstream | Execution Scope | Dependency | Commit / Output Rule |
| --- | --- | --- | --- | --- | --- |
| W6D1 | Mon 10 Aug 2026 | Security and idempotency hardening | Review auth, PIN, TOTP, webhooks, ledger idempotency, admin audit, rate limits. | Release hardening. | fix(security): harden auth webhooks and idempotency |
| W6D2 | Tue 11 Aug 2026 | Performance/load pass | Load test critical endpoints, socket rooms, queues, DB indexes, backup jobs. | Release performance. | perf(api): optimize critical flows |
| W6D3 | Wed 12 Aug 2026 | Provider recovery hardening | Harden payment/KYC/maps/FCM/media retry, timeout, reconciliation and status recovery paths. | Provider staging validation. | fix(providers): harden recovery paths |
| W6D4 | Thu 13 Aug 2026 | Security review fixes | Fix findings from webhook, PIN, TOTP, RBAC, media permission, masked-call and log-scrubbing review. | Security review. | fix(security): resolve privacy and access findings |
| W6D5 | Fri 14 Aug 2026 | Hardening review | Close major backend defects and produce release-candidate blocker list. | All backend modules. | chore(release): prepare backend blocker list |


## Admin Tasks

| Day | Date | Workstream | Execution Scope | Dependency | Output Rule |
| --- | --- | --- | --- | --- | --- |
| W6D1 | Mon 10 Aug 2026 | Admin hardening | Fix defects, tighten RBAC, audit reasons, empty/error/loading states. | All admin contracts. | No new modules. |
| W6D2 | Tue 11 Aug 2026 | Admin performance and table QA | Test large lists, filters, pagination and detail loading. | Staging admin API. | Skeletons for fetch; overlay for actions. |
| W6D3 | Wed 12 Aug 2026 | Security and permission review | Validate TOTP, RBAC, forbidden states, high-impact confirmations and audit capture. | Stable admin auth/RBAC APIs. | No unguarded admin actions. |
| W6D4 | Thu 13 Aug 2026 | Operational workflow review | Run KYC, task monitor, force cancel, reports, finance, payout and support workflows end to end. | Stable backend staging. | No admin reassignment under any condition. |
| W6D5 | Fri 14 Aug 2026 | Hardening review | Close major admin defects and create release-candidate blocker list. | All admin modules. | Only scoped fixes after review. |


## Cross-Team Dependency Rule

Mobile controls implementation order. Backend must publish contracts/stubs before mobile needs them. Admin follows the operational data created by mobile flows and persisted by backend.

## AI Agent Prompt Template

```text
Read these Markdown files only:
- documents/downloads/shared-ai-agent-execution-rules-v1.md
- documents/downloads/[team]-team-build-brief-v1.md
- documents/agent-md/weeks/week-06-hardening-security-performance.md
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
