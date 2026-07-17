# Work2Cash Week 1 — Foundation, Identity and Contract Availability

> Junior-developer overview. Open your team weekly Markdown for all five days and the agent instructions embedded under each day.

## Week outcome

Create the shared project foundations and unblock mobile and admin with stable auth, profile, PIN, session, admin auth and dashboard contracts.

## Before the week starts

The team's required foundation, repository access, environments and approved references are available.

This numbered week is a position inside each team's plan. The approved delivery order still applies: Admin construction, Mobile and Backend construction, Admin Integration, then cross-platform hardening.

## Day 1 of 5 — Monday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W1D1 — Admin project foundation](admin/week-01-foundation-identity.md#day-1-of-5) | Create Next.js structure, auth layout, design tokens, table/detail/action modal primitives. | `feat(admin): admin project foundation` |
| Backend | [BE-W1D1 — Repo foundation and contracts](backend/week-01-foundation-identity.md#day-1-of-5) | Create NestJS hexagonal structure, Prisma baseline, response/error shapes, OpenAPI shell, health/version endpoints. | `docs(backend): publish initial API contract shell` |
| Mobile | [MOB-W1D1 — Project setup, architecture, design system](mobile/week-01-foundation-identity.md#day-1-of-5) | Create Flutter feature-first structure, app shell, routing, environment config, design tokens, shared loading/error widgets. | `feat(mobile): project setup architecture design system` |

## Day 2 of 5 — Tuesday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W1D2 — Admin auth shell](admin/week-01-foundation-identity.md#day-2-of-5) | Implement login, TOTP challenge, session guard, protected layout. | `feat(admin): admin auth shell` |
| Backend | [BE-W1D2 — Auth contract stubs](backend/week-01-foundation-identity.md#day-2-of-5) | Implement auth/profile/PIN/session DTOs and stub handlers with stable response shapes. | `feat(auth): add auth contract stubs` |
| Mobile | [MOB-W1D2 — First launch and onboarding](mobile/week-01-foundation-identity.md#day-2-of-5) | Implement splash, first launch decision, app update check placeholder, onboarding entry, auth route guards. | `feat(mobile): first launch and onboarding` |

## Day 3 of 5 — Wednesday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W1D3 — Dashboard shell](admin/week-01-foundation-identity.md#day-3-of-5) | Implement dashboard layout with empty/skeleton cards for users, KYC, tasks, finance and use-case health. | `feat(admin): dashboard shell` |
| Backend | [BE-W1D3 — Auth implementation](backend/week-01-foundation-identity.md#day-3-of-5) | Implement register, login, OTP email-first/SMS fallback, refresh rotation, social auth adapter shell. | `feat(auth): implement registration and login` |
| Mobile | [MOB-W1D3 — Registration and login](mobile/week-01-foundation-identity.md#day-3-of-5) | Implement email/phone registration, login, OTP screens, Google/Apple entry points, password recovery screens. | `feat(mobile): registration and login` |

## Day 4 of 5 — Thursday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W1D4 — RBAC UI primitives](admin/week-01-foundation-identity.md#day-4-of-5) | Implement permission gate, forbidden state, reason/audit confirmation modal. | `feat(admin): rbac ui primitives` |
| Backend | [BE-W1D4 — Profile, mode, PIN, sessions](backend/week-01-foundation-identity.md#day-4-of-5) | Implement /me, profile update, mode, PIN setup/verify/reset, device/session revoke. | `feat(identity): implement profile pin and sessions` |
| Mobile | [MOB-W1D4 — Profile, mode, PIN, sessions](mobile/week-01-foundation-identity.md#day-4-of-5) | Implement complete profile, mode switch, PIN setup/verify/reset, device/session management. | `feat(mobile): profile mode pin sessions` |

## Day 5 of 5 — Friday

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
| Admin | [ADM-W1D5 — List/detail primitives](admin/week-01-foundation-identity.md#day-5-of-5) | Implement reusable list, search, filter, pagination, detail panel and export placeholder. | `feat(admin): list detail primitives` |
| Backend | [BE-W1D5 — Admin auth and dashboard stubs](backend/week-01-foundation-identity.md#day-5-of-5) | Implement admin auth/TOTP stubs, dashboard summary stub, RBAC model seed. | `feat(admin): add auth and dashboard stubs` |
| Mobile | [MOB-W1D5 — Task Owner home and notification shell](mobile/week-01-foundation-identity.md#day-5-of-5) | Implement Task Owner home, notification center shell, skeleton states, empty states, app-wide POST/PATCH blur overlay. | `feat(mobile): task owner home and notification shell` |

## End-of-week result

Mobile can complete the app-entry, authentication and profile shell; Admin can enter the protected dashboard shell; Backend has stable response and error shapes plus an OpenAPI shell.

- Demonstrate the working result and one failure/recovery path.
- Record tests and commit identifiers for completed days.
- Carry unfinished work on the original task; do not duplicate it.
