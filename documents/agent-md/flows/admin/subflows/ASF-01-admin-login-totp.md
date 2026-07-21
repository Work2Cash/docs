---
id: ASF-01
title: Admin Login and TOTP Verification
type: reusable-subflow
audience: Non-technical operations, Junior admin developers, Backend, Product, QA, AI agents
owner: Technical Lead
reviewers: Product Lead, Admin Lead, Backend Lead, Security and Privacy, QA
status: approved
version: 0.1
last_reviewed: 2026-07-17
next_review: 2026-10-17
authority: Main Enterprise Architecture v1, Admin Flow Catalogue v1 and API and Socket Contract Specification v1
related: AF-01 Admin Entry Login and TOTP, AF-17 Admin Users Roles and Permissions, ASF-11 Empty Loading and Error Recovery
generated_from: content/flows/admin/subflows/ASF-01-admin-login-totp.md
do_not_edit: true
---

> Generated agent document. Edit `content/flows/admin/subflows/ASF-01-admin-login-totp.md` and rerun `node scripts/generate-flow-docs.js`.

# ASF-01 — Admin Login and TOTP Verification

## In plain English

This subflow proves that a person entering the dashboard has a valid admin account, knows the account password and possesses the enrolled authenticator used for the time-based one-time password, or TOTP. It creates a full admin session only after both checks succeed.

## Why it is reusable

AF-01 uses the complete login path. Every protected admin page also relies on the same session guard when a session is missing or expired, and sensitive operations may request TOTP again. Keeping those checks in one subflow prevents individual modules from inventing weaker access behavior.

## Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| AF-01 — Admin Entry, Login and TOTP | An admin opens the dashboard without a valid session. | AF-01 continues to the intended protected page or AF-02 Dashboard Overview. |
| AF-02 to AF-24 | A protected page is opened with no session or an expired session. | The originally requested page after successful login. |
| High-impact admin actions | Policy requires a current TOTP check before the action. | The calling confirmation step; this does not replace its RBAC or reason checks. |

## Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| Admin email and password | Admin login form | Credentials must match an existing enabled AdminUser without revealing which field was wrong. |
| TOTP challenge | Backend pre-session | Challenge must belong to the login attempt and must not be treated as a full admin session. |
| TOTP code | Admin authenticator | Code must pass the backend TOTP and rate-limit checks. |
| Intended protected URL | Dashboard auth guard | Destination must be an allowed internal admin route; never trust an arbitrary external redirect. |
| Admin account state | AdminUser record | Disabled accounts cannot receive a dashboard session. |

## Steps

1. **Admin:** Opens the admin login page, either directly or after the auth guard intercepts a protected route.
2. **Admin:** Enters the admin email and password.
3. **Backend:** Validates the credentials and confirms that the AdminUser is enabled.
4. **Backend:** Returns a limited TOTP challenge rather than a full admin session.
5. **Admin:** Enters the current code from the enrolled authenticator.
6. **Backend:** Verifies the challenge, code and rate limit.
7. **Backend:** Creates the AdminSession and records the login metadata needed for audit and security review.
8. **Dashboard:** Returns the admin to the stored protected route, or to AF-02 when no safe intended route exists.

## Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| TOTP challenge | Admin TOTP screen | Password validation passed, but full admin access has not been granted. |
| Authenticated AdminSession | Dashboard auth guard and protected APIs | Password and TOTP checks passed for an enabled admin. |
| Safe authentication error | Admin login or TOTP screen | Access was not granted; the response does not expose protected account details. |
| Login audit/security metadata | Security monitoring and audit review | A login success or failure can be investigated without logging secrets or TOTP codes. |

## Success return behavior

The subflow returns an authenticated admin session and one safe internal destination. AF-01 then completes at the dashboard or the intended protected page. A sensitive-action TOTP check returns only to the calling action and does not bypass its permission, reason or audit requirements.

## Failure return behavior

Wrong credentials, wrong or expired TOTP, rate limiting and disabled-account checks create no full admin session. The admin remains on the relevant access screen with a safe retry or escalation message. An expired session stores only a safe internal route, returns through AF-01 and resumes that route after a new successful login. Repeated or suspicious failures are available to security monitoring.

## Permissions and sensitive data

- The login endpoint is public only in the limited sense required to accept admin credentials; it grants no admin permission by itself.
- The TOTP verification endpoint accepts an admin pre-session or an already authenticated admin token where policy requires re-verification.
- Passwords, TOTP secrets, TOTP codes, recovery codes and full session tokens must never appear in logs, UI errors or audit metadata.
- TOTP enrollment and recovery are approved security paths outside this subflow; login must not silently enroll or reset TOTP.
- A valid session does not grant every action. ASF-02 RBAC Permission Gate still controls modules and operations.

## Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | `POST /admin/auth/login` | Validate admin credentials and create a limited TOTP challenge, not a full session. |
| API | `POST /admin/auth/totp/verify` | Verify the login or sensitive-action TOTP challenge. |
| API | `POST /admin/auth/logout` | Invalidate the current AdminSession when AF-01 logs out. |
| Data | AdminUser, AdminSession, AdminTotpCredential | Store separate admin identity, session and TOTP credential state. |
| Data | AdminAuditLog | Preserve required admin/security traceability without secrets. |
| UI | Admin login, TOTP verification and auth guard | Collect access proof, show safe states and resume only an allowed internal route. |
| Socket | None | Admin authentication is REST-based; no socket connection is required. |

## Acceptance criteria

- [ ] Valid password alone never creates a full dashboard session.
- [ ] Valid credentials plus valid TOTP create one authenticated AdminSession and route safely.
- [ ] Disabled admins, invalid credentials and invalid TOTP cannot open protected pages.
- [ ] An expired session can return to the original allowed admin route after successful login.
- [ ] Errors and logs expose no password, TOTP secret, code, recovery code or session token.
- [ ] Completing this subflow does not bypass RBAC on the destination page or action.

## Required tests

- [ ] Valid password and TOTP login.
- [ ] Wrong password, unknown account and disabled account with non-revealing errors.
- [ ] Wrong, expired and rate-limited TOTP.
- [ ] Direct protected-route entry and safe return after login.
- [ ] Unsafe or external intended URL is rejected in favor of AF-02.
- [ ] Expired-session recovery and logout invalidation.
- [ ] Secret and token redaction in logs, monitoring and UI errors.
- [ ] Authenticated admin without required RBAC permission remains forbidden at the destination.
