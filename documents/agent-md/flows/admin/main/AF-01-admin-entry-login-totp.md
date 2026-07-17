---
id: AF-01
title: Admin Entry Login and TOTP
type: main-flow
audience: Non-technical operations, Junior admin developers, Backend, Product, QA, AI agents
owner: Technical Lead
reviewers: Product Lead, Admin Lead, Backend Lead, Security and Privacy, QA
status: in-review
version: 0.1
last_reviewed: 2026-07-17
authority: Main Enterprise Architecture v1, Admin Flow Catalogue v1, API and Socket Contract Specification v1
related: ASF-01 Admin Login and TOTP Verification, ASF-11 Empty Loading and Error Recovery, AF-02 Admin Dashboard Overview, AF-17 Admin Users Roles and Permissions
generated_from: content/flows/admin/main/AF-01-admin-entry-login-totp.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/admin/main/AF-01-admin-entry-login-totp.md` and rerun `node scripts/generate-flow-docs.js`.

# AF-01 — Admin Entry, Login and TOTP

## In plain English

An approved admin enters an email and password, then proves possession of the enrolled authenticator with a TOTP code. Only after both checks pass does Work2Cash create a dashboard session and open the dashboard or the safe protected page the admin originally requested.

## Why this flow exists

The admin dashboard can expose and change sensitive identity, task, finance, risk and configuration information. AF-01 creates one controlled entry path so a password alone, a direct URL or a frontend assumption can never grant operational access.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin | Supplies account credentials and the current TOTP code. |
| Admin dashboard | Shows login/loading/error states, preserves only a safe intended route and guards protected pages. |
| Backend admin authentication | Validates credentials, account status, TOTP challenge and TOTP code, then creates or rejects the session. |
| Admin data domain | Stores AdminUser, AdminSession, AdminTotpCredential and required audit/security metadata. |
| Security monitoring | Detects failed-login or TOTP spikes and suspicious session behavior. |

## Before this flow begins

- The AdminUser must already exist through the controlled AF-17 setup path.
- The admin account must be enabled and have TOTP enrolled.
- Backend admin-auth services and the admin website must be available.
- No protected module may rely on the login screen alone; the backend and route guard must enforce the session.
- Role and permission assignment may already exist, but AF-01 does not promise access to every module.

## Entry points

| Entry point | When it is used |
| --- | --- |
| Admin website login URL | The admin intentionally opens the dashboard without a valid session. |
| Protected admin route | The route guard finds no valid session and sends the admin to login while retaining a safe internal destination. |
| Session-expired state | A protected request reports that the current session is no longer valid. |
| Logout action | An authenticated admin ends the session and returns to the login state. |

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Admin email and password | Establish the first authentication factor. | Admin login form. |
| Enabled AdminUser state | Prevent disabled accounts from creating sessions. | Admin data domain. |
| TOTP challenge and code | Establish the second authentication factor. | Backend pre-session and admin authenticator. |
| Safe intended route | Resume a protected page without creating an open redirect. | Dashboard route guard. |
| Login/security metadata | Support audit and suspicious-access review. | Backend request/session context. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| ASF-01 — Admin Login and TOTP Verification | The reusable password, TOTP, session and safe-return behavior. | Admin exists, is enabled and has TOTP enrolled. |
| ASF-11 — Empty, Loading and Error Recovery | Predictable waiting, error and retry states without duplicate submissions. | Shared components classify fetch and mutation results correctly. |
| Admin auth contracts | `/admin/auth/login`, `/admin/auth/totp/verify` and `/admin/auth/logout`. | Backend routes follow the documented two-stage session rule. |
| Admin data domain | AdminUser, AdminSession, AdminTotpCredential and AdminAuditLog. | Admin identity remains separate from marketplace User identity. |

## Verbal walkthrough

1. **Admin:** Opens the dashboard or a protected admin link.
2. **Dashboard:** Checks for a valid admin session; if none exists, it shows the login page and safely remembers an allowed internal destination.
3. **Admin:** Enters the admin email and password.
4. **Backend:** Verifies the credentials and confirms that the admin account is enabled.
5. **Backend:** Creates a limited TOTP challenge but does not create the full dashboard session yet.
6. **Dashboard:** Shows the TOTP screen; ASF-11 blocks duplicate submission while verification is in progress.
7. **Admin:** Enters the current authenticator code.
8. **Backend:** Verifies the challenge and TOTP code, applies rate limits and creates the AdminSession.
9. **Backend:** Records the required login/security metadata without storing secrets in logs.
10. **Dashboard:** Opens the remembered protected route when it is safe and allowed, otherwise AF-02 Dashboard Overview.
11. **Protected module:** Applies ASF-02 permission checks before showing data or enabling actions.

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Credentials valid? | Email/password do not validate. | No TOTP challenge or full session is usable. | Stay at login with a safe error and permitted retry/cooldown. |
| Admin enabled? | Credentials match but AdminUser is disabled. | No session is created. | Show safe access-blocked guidance; AF-17 controls re-enablement. |
| TOTP valid? | Code/challenge is wrong, expired or rate-limited. | No full session is created. | Stay at TOTP with retry/cooldown or approved recovery guidance. |
| Intended route safe? | Stored destination is missing, external or not an allowed admin route. | Unsafe destination is discarded. | Continue to AF-02 Dashboard Overview. |
| Destination permitted? | Session is valid but role lacks the required permission. | Authentication succeeds, module access does not. | ASF-02 shows the forbidden state or routes to an allowed destination. |
| Admin logs out? | Authenticated admin chooses logout. | Current AdminSession is invalidated. | Return to the AF-01 login state. |

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| AdminUser | Read | Confirms admin identity and enabled/disabled state. |
| AdminTotpCredential | Read/verify | Confirms the second factor without exposing its secret. |
| AdminSession | Create on full success; invalidate on logout | Establishes or ends authenticated dashboard access. |
| AdminAuditLog/security log | Create where required | Preserves safe access traceability and security evidence. |

## Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Security telemetry | Records safe success/failure metadata and detects failure spikes. | Security monitoring and AF-20 incident readiness. |
| Audit evidence | Records required admin access events without credentials or TOTP secrets. | AF-18 Audit Log Review. |
| Route handoff | Restores one safe internal destination. | Requested protected flow or AF-02. |

## Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Dashboard session created | Password and TOTP passed for an enabled admin. | Admin enters an allowed dashboard route. | Destination still applies RBAC. |
| Login failed | Credentials were not accepted. | Admin remains outside the dashboard. | Retry/cooldown or approved recovery. |
| TOTP not verified | Second-factor proof did not pass. | No full session exists. | Retry/cooldown or approved TOTP recovery path. |
| Admin account disabled | Account cannot create a session. | Admin remains blocked. | Authorized AF-17 owner/Technical Lead review. |
| Logged out | Current session was invalidated. | Protected pages are no longer accessible. | Login again to re-enter. |

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Login succeeds with no valid intended route. | AF-02 — Admin Dashboard Overview | Gives the admin the standard operational entry point. |
| Login succeeds with a safe permitted intended route. | The corresponding AF-02 to AF-24 flow | Resumes the work that originally required authentication. |
| Session succeeds but destination permission is missing. | ASF-02 — RBAC Permission Gate | Authentication must not bypass module/action authorization. |
| Admin account is disabled. | AF-17 — Admin Users, Roles and Permissions, handled by an authorized different admin | Access restoration is a controlled admin-governance action. |

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Wrong email/password | Safe login error without account disclosure. | Correct credentials after allowed retry/cooldown. | Restart at credential submission. |
| Missing, wrong or expired TOTP | TOTP error and allowed retry/cooldown. | Enter a current code or use the separately approved recovery path. | Resume at TOTP verification; password is not treated as enough. |
| Network interruption before confirmed login | Loading ends with no claimed session. | Retry the relevant request through ASF-11. | Dashboard rechecks authoritative session state before routing. |
| Session expires on a protected page | Login-required state. | Auth guard calls ASF-01 and stores a safe internal route. | Resume the route after full successful login and permission check. |
| Account disabled | Access-blocked message without protected details. | Authorized AF-17 review by another eligible admin. | A later AF-01 attempt may proceed only after authoritative re-enablement. |
| Suspicious failure spike | Generic safe errors/cooldown. | Security monitoring and incident process investigate. | No bypass; normal AF-01 checks still apply. |

## Business rules

- Password validation must be followed by TOTP verification before a full AdminSession exists.
- Admin authentication is separate from marketplace User authentication.
- Every protected page and API must validate the admin session; a visible page is not proof of authorization.
- Destination modules and actions apply ASF-02 RBAC after authentication.
- Disabled admins cannot log in, and disabling an admin through AF-17 revokes active sessions.
- TOTP enrollment/recovery is a separately approved security path and cannot be improvised inside login.
- Frontend loading state never determines authentication truth; the backend session does.

## Forbidden behavior

- Do not create a full admin session after password validation alone.
- Do not bypass TOTP for a remembered browser or direct protected URL.
- Do not expose whether an email exists, which credential was wrong or why an account is under security review.
- Do not log passwords, TOTP secrets/codes, recovery codes or full session tokens.
- Do not trust an arbitrary return URL or redirect outside the allowed admin application.
- Do not treat successful login as permission for every module or action.
- Do not use sockets for admin authentication.

## Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Admin Login | Collect the first authentication factor. | Valid enabled admin credentials create a limited TOTP challenge. |
| 2 | TOTP Verification | Collect the second authentication factor. | Valid challenge/code creates the full AdminSession. |
| 3 | Session Routing | Validate and consume the safe intended route. | Open permitted route or fall back to AF-02. |
| 4 | Dashboard/Protected Module | Begin authorized admin work. | ASF-02 confirms module/action permissions. |

## Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | `POST /admin/auth/login` | Validate password and issue only a TOTP challenge. |
| API | `POST /admin/auth/totp/verify` | Verify TOTP and create the full admin session. |
| API | `POST /admin/auth/logout` | Invalidate the current admin session. |
| Data | AdminUser, AdminSession, AdminTotpCredential | Store separate admin identity, session and TOTP state. |
| Data | AdminAuditLog | Store required safe traceability. |
| UI | ASF-01 and ASF-11 | Enforce the visible login/TOTP/recovery experience. |
| Permission | ASF-02 | Gate every destination module and action after login. |
| Socket | None | AF-01 requires no socket namespace. |

## Acceptance criteria

- [ ] Given an enabled admin with valid credentials, when TOTP also passes, then one authenticated AdminSession is created.
- [ ] Given valid credentials without valid TOTP, no full admin session or protected route is available.
- [ ] Given a disabled admin, no session is created and the response reveals no protected reason details.
- [ ] Given a safe protected route before login, successful login resumes it only after its RBAC check.
- [ ] Given an unsafe return URL, successful login routes to AF-02 instead.
- [ ] Given an expired session, the admin can authenticate again and resume safely without duplicate actions.
- [ ] Given logout, the current session no longer authorizes protected requests.
- [ ] Authentication errors, UI states, telemetry and audit evidence contain no secrets.

## Required tests

- [ ] Happy path from login through AF-02.
- [ ] Safe protected-route return after successful login.
- [ ] Invalid password, disabled admin, invalid/expired TOTP and rate limiting.
- [ ] Network interruption at credential and TOTP submission.
- [ ] Session expiration and re-entry from a protected flow.
- [ ] Unsafe return URL rejection.
- [ ] Authenticated-but-forbidden destination behavior through ASF-02.
- [ ] Logout and server-side session invalidation.
- [ ] Secret redaction and security/audit evidence.
- [ ] Duplicate submission protection through ASF-11.

## Out of scope

- Creating, inviting, disabling or assigning roles to AdminUsers; AF-17 owns those actions.
- TOTP enrollment, recovery-code generation or TOTP reset implementation.
- Marketplace user registration or login.
- Per-module business operations after the destination permission gate.
- Final session-cookie/token DTO details that are not yet defined in a canonical Phase 4 contract source.
