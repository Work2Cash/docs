# Work2Cash Week 6 — Hardening, Security and Performance

> Junior-developer overview. Open your team weekly Markdown for all five days and the agent instructions embedded under each day.

## Week outcome

Fix integration defects, harden performance, security and provider behavior, improve recovery paths and close major technical gaps.

## Before the week starts

The same team's Week 5 exit result is accepted or any carry-over is explicitly recorded.

This numbered week is a position inside each team's plan. The approved delivery order still applies: Admin construction, Mobile and Backend construction, Admin Integration, then cross-platform hardening.

## Day 1 of 5 — Monday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W6D1 — Admin hardening](admin/week-06-hardening-security-performance.md#day-1-of-5) | Fix defects, tighten RBAC, audit reasons, empty/error/loading states. | `feat(admin): admin hardening` |
| Backend | [BE-W6D1 — Security and idempotency hardening](backend/week-06-hardening-security-performance.md#day-1-of-5) | Review auth, PIN, TOTP, webhooks, ledger idempotency, admin audit, rate limits. | `fix(security): harden auth webhooks and idempotency` |
| Mobile | [MOB-W6D1 — Hardening sprint](mobile/week-06-hardening-security-performance.md#day-1-of-5) | Fix defects from full flow QA, improve copy, skeletons, submit overlays, retry states. | `feat(mobile): hardening sprint` |

## Day 2 of 5 — Tuesday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W6D2 — Admin performance and table QA](admin/week-06-hardening-security-performance.md#day-2-of-5) | Test large lists, filters, pagination and detail loading. | `feat(admin): admin performance and table qa` |
| Backend | [BE-W6D2 — Performance/load pass](backend/week-06-hardening-security-performance.md#day-2-of-5) | Load test critical endpoints, socket rooms, queues, DB indexes, backup jobs. | `perf(api): optimize critical flows` |
| Mobile | [MOB-W6D2 — Performance and device QA](mobile/week-06-hardening-security-performance.md#day-2-of-5) | Profile lower-end Android performance, image/video upload, socket battery/network behavior. | `feat(mobile): performance and device qa` |

## Day 3 of 5 — Wednesday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W6D3 — Security and permission review](admin/week-06-hardening-security-performance.md#day-3-of-5) | Validate TOTP, RBAC, forbidden states, high-impact confirmations and audit capture. | `feat(admin): security and permission review` |
| Backend | [BE-W6D3 — Provider recovery hardening](backend/week-06-hardening-security-performance.md#day-3-of-5) | Harden payment/KYC/maps/FCM/media retry, timeout, reconciliation and status recovery paths. | `fix(providers): harden recovery paths` |
| Mobile | [MOB-W6D3 — Provider recovery flows](mobile/week-06-hardening-security-performance.md#day-3-of-5) | Harden payment return, KYC return, FCM tap recovery, socket reconnect and media upload retry behavior. | `feat(mobile): provider recovery flows` |

## Day 4 of 5 — Thursday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W6D4 — Operational workflow review](admin/week-06-hardening-security-performance.md#day-4-of-5) | Run KYC, task monitor, force cancel, reports, finance, payout and support workflows end to end. | `feat(admin): operational workflow review` |
| Backend | [BE-W6D4 — Security review fixes](backend/week-06-hardening-security-performance.md#day-4-of-5) | Fix findings from webhook, PIN, TOTP, RBAC, media permission, masked-call and log-scrubbing review. | `fix(security): resolve privacy and access findings` |
| Mobile | [MOB-W6D4 — Security and privacy review](mobile/week-06-hardening-security-performance.md#day-4-of-5) | Verify PIN confirmation, permission prompts, private media, exact-address reveal rules and masked-call copy. | `feat(mobile): security and privacy review` |

## Day 5 of 5 — Friday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W6D5 — Hardening review](admin/week-06-hardening-security-performance.md#day-5-of-5) | Close major admin defects and create release-candidate blocker list. | `feat(admin): hardening review` |
| Backend | [BE-W6D5 — Hardening review](backend/week-06-hardening-security-performance.md#day-5-of-5) | Close major backend defects and produce release-candidate blocker list. | `chore(release): prepare backend blocker list` |
| Mobile | [MOB-W6D5 — Hardening review](mobile/week-06-hardening-security-performance.md#day-5-of-5) | Run full mobile smoke test, close major defects and prepare release-candidate checklist. | `feat(mobile): hardening review` |

## End-of-week result

Critical Week 5 defects are resolved or owned, and core flows are stable enough for release-candidate preparation.

- Demonstrate the working result and one failure/recovery path.
- Record tests and commit identifiers for completed days.
- Carry unfinished work on the original task; do not duplicate it.
