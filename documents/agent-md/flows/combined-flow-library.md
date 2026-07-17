# Work2Cash Combined Standalone Flow Catalogue

> Optional generated reference containing all 72 standalone flows. Prefer individual pages for normal reading and focused AI context.

## AF-01 — Admin Entry Login and TOTP

> Status: approved; version 0.1; owner: Technical Lead.

### In plain English

An approved admin enters an email and password, then proves possession of the enrolled authenticator with a TOTP code. Only after both checks pass does Work2Cash create a dashboard session and open the dashboard or the safe protected page the admin originally requested.

### Why this flow exists

The admin dashboard can expose and change sensitive identity, task, finance, risk and configuration information. AF-01 creates one controlled entry path so a password alone, a direct URL or a frontend assumption can never grant operational access.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin | Supplies account credentials and the current TOTP code. |
| Admin dashboard | Shows login/loading/error states, preserves only a safe intended route and guards protected pages. |
| Backend admin authentication | Validates credentials, account status, TOTP challenge and TOTP code, then creates or rejects the session. |
| Admin data domain | Stores AdminUser, AdminSession, AdminTotpCredential and required audit/security metadata. |
| Security monitoring | Detects failed-login or TOTP spikes and suspicious session behavior. |

### Before this flow begins

- The AdminUser must already exist through the controlled AF-17 setup path.
- The admin account must be enabled and have TOTP enrolled.
- Backend admin-auth services and the admin website must be available.
- No protected module may rely on the login screen alone; the backend and route guard must enforce the session.
- Role and permission assignment may already exist, but AF-01 does not promise access to every module.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin website login URL | The admin intentionally opens the dashboard without a valid session. |
| Protected admin route | The route guard finds no valid session and sends the admin to login while retaining a safe internal destination. |
| Session-expired state | A protected request reports that the current session is no longer valid. |
| Logout action | An authenticated admin ends the session and returns to the login state. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Admin email and password | Establish the first authentication factor. | Admin login form. |
| Enabled AdminUser state | Prevent disabled accounts from creating sessions. | Admin data domain. |
| TOTP challenge and code | Establish the second authentication factor. | Backend pre-session and admin authenticator. |
| Safe intended route | Resume a protected page without creating an open redirect. | Dashboard route guard. |
| Login/security metadata | Support audit and suspicious-access review. | Backend request/session context. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| ASF-01 — Admin Login and TOTP Verification | The reusable password, TOTP, session and safe-return behavior. | Admin exists, is enabled and has TOTP enrolled. |
| ASF-11 — Empty, Loading and Error Recovery | Predictable waiting, error and retry states without duplicate submissions. | Shared components classify fetch and mutation results correctly. |
| Admin auth contracts | `/admin/auth/login`, `/admin/auth/totp/verify` and `/admin/auth/logout`. | Backend routes follow the documented two-stage session rule. |
| Admin data domain | AdminUser, AdminSession, AdminTotpCredential and AdminAuditLog. | Admin identity remains separate from marketplace User identity. |

### Verbal walkthrough

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

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Credentials valid? | Email/password do not validate. | No TOTP challenge or full session is usable. | Stay at login with a safe error and permitted retry/cooldown. |
| Admin enabled? | Credentials match but AdminUser is disabled. | No session is created. | Show safe access-blocked guidance; AF-17 controls re-enablement. |
| TOTP valid? | Code/challenge is wrong, expired or rate-limited. | No full session is created. | Stay at TOTP with retry/cooldown or approved recovery guidance. |
| Intended route safe? | Stored destination is missing, external or not an allowed admin route. | Unsafe destination is discarded. | Continue to AF-02 Dashboard Overview. |
| Destination permitted? | Session is valid but role lacks the required permission. | Authentication succeeds, module access does not. | ASF-02 shows the forbidden state or routes to an allowed destination. |
| Admin logs out? | Authenticated admin chooses logout. | Current AdminSession is invalidated. | Return to the AF-01 login state. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| AdminUser | Read | Confirms admin identity and enabled/disabled state. |
| AdminTotpCredential | Read/verify | Confirms the second factor without exposing its secret. |
| AdminSession | Create on full success; invalidate on logout | Establishes or ends authenticated dashboard access. |
| AdminAuditLog/security log | Create where required | Preserves safe access traceability and security evidence. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Security telemetry | Records safe success/failure metadata and detects failure spikes. | Security monitoring and AF-20 incident readiness. |
| Audit evidence | Records required admin access events without credentials or TOTP secrets. | AF-18 Audit Log Review. |
| Route handoff | Restores one safe internal destination. | Requested protected flow or AF-02. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Dashboard session created | Password and TOTP passed for an enabled admin. | Admin enters an allowed dashboard route. | Destination still applies RBAC. |
| Login failed | Credentials were not accepted. | Admin remains outside the dashboard. | Retry/cooldown or approved recovery. |
| TOTP not verified | Second-factor proof did not pass. | No full session exists. | Retry/cooldown or approved TOTP recovery path. |
| Admin account disabled | Account cannot create a session. | Admin remains blocked. | Authorized AF-17 owner/Technical Lead review. |
| Logged out | Current session was invalidated. | Protected pages are no longer accessible. | Login again to re-enter. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Login succeeds with no valid intended route. | AF-02 — Admin Dashboard Overview | Gives the admin the standard operational entry point. |
| Login succeeds with a safe permitted intended route. | The corresponding AF-02 to AF-24 flow | Resumes the work that originally required authentication. |
| Session succeeds but destination permission is missing. | ASF-02 — RBAC Permission Gate | Authentication must not bypass module/action authorization. |
| Admin account is disabled. | AF-17 — Admin Users, Roles and Permissions, handled by an authorized different admin | Access restoration is a controlled admin-governance action. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Wrong email/password | Safe login error without account disclosure. | Correct credentials after allowed retry/cooldown. | Restart at credential submission. |
| Missing, wrong or expired TOTP | TOTP error and allowed retry/cooldown. | Enter a current code or use the separately approved recovery path. | Resume at TOTP verification; password is not treated as enough. |
| Network interruption before confirmed login | Loading ends with no claimed session. | Retry the relevant request through ASF-11. | Dashboard rechecks authoritative session state before routing. |
| Session expires on a protected page | Login-required state. | Auth guard calls ASF-01 and stores a safe internal route. | Resume the route after full successful login and permission check. |
| Account disabled | Access-blocked message without protected details. | Authorized AF-17 review by another eligible admin. | A later AF-01 attempt may proceed only after authoritative re-enablement. |
| Suspicious failure spike | Generic safe errors/cooldown. | Security monitoring and incident process investigate. | No bypass; normal AF-01 checks still apply. |

### Business rules

- Password validation must be followed by TOTP verification before a full AdminSession exists.
- Admin authentication is separate from marketplace User authentication.
- Every protected page and API must validate the admin session; a visible page is not proof of authorization.
- Destination modules and actions apply ASF-02 RBAC after authentication.
- Disabled admins cannot log in, and disabling an admin through AF-17 revokes active sessions.
- TOTP enrollment/recovery is a separately approved security path and cannot be improvised inside login.
- Frontend loading state never determines authentication truth; the backend session does.

### Forbidden behavior

- Do not create a full admin session after password validation alone.
- Do not bypass TOTP for a remembered browser or direct protected URL.
- Do not expose whether an email exists, which credential was wrong or why an account is under security review.
- Do not log passwords, TOTP secrets/codes, recovery codes or full session tokens.
- Do not trust an arbitrary return URL or redirect outside the allowed admin application.
- Do not treat successful login as permission for every module or action.
- Do not use sockets for admin authentication.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Admin Login | Collect the first authentication factor. | Valid enabled admin credentials create a limited TOTP challenge. |
| 2 | TOTP Verification | Collect the second authentication factor. | Valid challenge/code creates the full AdminSession. |
| 3 | Session Routing | Validate and consume the safe intended route. | Open permitted route or fall back to AF-02. |
| 4 | Dashboard/Protected Module | Begin authorized admin work. | ASF-02 confirms module/action permissions. |

### Implementation map

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

### Acceptance criteria

- [ ] Given an enabled admin with valid credentials, when TOTP also passes, then one authenticated AdminSession is created.
- [ ] Given valid credentials without valid TOTP, no full admin session or protected route is available.
- [ ] Given a disabled admin, no session is created and the response reveals no protected reason details.
- [ ] Given a safe protected route before login, successful login resumes it only after its RBAC check.
- [ ] Given an unsafe return URL, successful login routes to AF-02 instead.
- [ ] Given an expired session, the admin can authenticate again and resume safely without duplicate actions.
- [ ] Given logout, the current session no longer authorizes protected requests.
- [ ] Authentication errors, UI states, telemetry and audit evidence contain no secrets.

### Required tests

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

### Out of scope

- Creating, inviting, disabling or assigning roles to AdminUsers; AF-17 owns those actions.
- TOTP enrollment, recovery-code generation or TOTP reset implementation.
- Marketplace user registration or login.
- Per-module business operations after the destination permission gate.
- Final session-cookie/token DTO details that are not yet defined in a canonical Phase 4 contract source.

---

## AF-02 — Admin Dashboard Overview

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This is the central landing page for the web dashboard. It shows platform health, important queues, risk signals and shortcuts into operational modules.

In normal use, dashboard loads platform summary cards, then system shows active tasks, pending kyc, open reports, support chats, withdrawal requests and failed provider events, then admin reviews alerts sorted by urgency, then admin clicks a metric card or alert, then system checks permission for the selected module, then admin is routed to the relevant queue or detail page. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This is the central landing page for the web dashboard. It shows platform health, important queues, risk signals and shortcuts into operational modules. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- AF-01
- ASF-02
- ASF-03
- ASF-11
- ASF-02 RBAC Permission Gate
- ASF-03 List, Search, Filter and Pagination
- ASF-11 Empty, Loading and Error Recovery
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin successfully logs in or returns to the dashboard from another module. | This condition starts AF-02. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Admin Dashboard Overview | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| AF-01 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-02 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-11 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-02 RBAC Permission Gate | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 List, Search, Filter and Pagination | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-11 Empty, Loading and Error Recovery | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Dashboard loads platform summary cards.
2. **System:** System shows active tasks, pending KYC, open reports, support chats, withdrawal requests and failed provider events.
3. **Admin/System:** Admin reviews alerts sorted by urgency.
4. **System:** Admin clicks a metric card or alert.
5. **Admin/System:** System checks permission for the selected module.
6. **System:** Admin is routed to the relevant queue or detail page.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Report, risk or moderation record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Admin remains on dashboard | AF-02 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Admin enters a module | AF-02 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Admin is blocked by permission gate | AF-02 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-02 reaches the ending that requires AF-03 User Management; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-03 User Management | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-02 reaches the ending that requires AF-04 KYC Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-04 KYC Review | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-02 reaches the ending that requires AF-05 Task Monitoring; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-05 Task Monitoring | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-02 reaches the ending that requires AF-08 Finance; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-08 Finance | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-02 reaches the ending that requires AF-19 Use Case Health; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-19 Use Case Health | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Dashboard metrics fail to load | A clear blocked or failed state; no unconfirmed success is shown. | ASF-11 shows skeleton then retry/error state | Admin can retry without leaving the dashboard The flow re-enters at the last valid checkpoint. |
| Admin lacks permission for a metric | A clear blocked or failed state; no unconfirmed success is shown. | ASF-02 blocks access | Metric can be hidden or shown read-only based on role The flow re-enters at the last valid checkpoint. |
| Alert points to deleted/changed record | A clear blocked or failed state; no unconfirmed success is shown. | ASF-04 record review shows unavailable state | Admin returns to dashboard or audit log The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Dashboard Overview | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Alert Cards | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Metrics Detail | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Module Drilldown | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Dashboard loads platform summary cards.; System shows active tasks, pending KYC, open reports, support chats, withdrawal requests and failed provider events.; Admin reviews alerts sorted by urgency.; Admin clicks a metric card or alert.; System checks permission for the selected module.; Admin is routed to the relevant queue or detail page..
- [ ] Recovery: Dashboard metrics fail to load.
- [ ] Recovery: Admin lacks permission for a metric.
- [ ] Recovery: Alert points to deleted/changed record.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-03 — User Management

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow lets admins inspect users, understand whether they are Task Owners, Taskers or both, review sessions/devices, and apply account-level controls.

In normal use, admin opens the users list, then admin searches or filters by name, phone, email, role, status, trust/risk state or kyc state, then admin opens a user record, then system shows profile, task owner wallet, tasker wallet, sessions, devices, task history, reports and risk events, then admin chooses a permitted action such as view sessions, disable device, suspend/reactivate account or add support note, then system requests reason when the action is high-impact, then system applies the action and records it in the audit log. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow lets admins inspect users, understand whether they are Task Owners, Taskers or both, review sessions/devices, and apply account-level controls. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- AF-01
- ASF-02
- ASF-03
- ASF-04
- ASF-05
- ASF-02 RBAC Permission Gate
- ASF-03 List/Search/Filter
- ASF-04 Record Detail Review
- ASF-05 Reason and Audit Confirmation
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens Users from dashboard, search, support context, report context, or task detail. | This condition starts AF-03. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for User Management | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| AF-01 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-02 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-02 RBAC Permission Gate | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 List/Search/Filter | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens the users list.
2. **System:** Admin searches or filters by name, phone, email, role, status, trust/risk state or KYC state.
3. **Admin/System:** Admin opens a user record.
4. **System:** System shows profile, Task Owner wallet, Tasker wallet, sessions, devices, task history, reports and risk events.
5. **Admin/System:** Admin chooses a permitted action such as view sessions, disable device, suspend/reactivate account or add support note.
6. **System:** System requests reason when the action is high-impact.
7. **Admin/System:** System applies the action and records it in the audit log.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | System requests reason when the action is high-impact. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Authentication or session record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Rating, review or favorite record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| User reviewed | AF-03 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| User status changed | AF-03 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| No action taken | AF-03 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Case escalated | AF-03 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-03 reaches the ending that requires AF-04 KYC Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-04 KYC Review | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-03 reaches the ending that requires AF-06 Report Resolution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-06 Report Resolution | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-03 reaches the ending that requires AF-10 Wallet Support; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-10 Wallet Support | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-03 reaches the ending that requires AF-14 Risk Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-14 Risk Review | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| User cannot be found | A clear blocked or failed state; no unconfirmed success is shown. | ASF-03 filters and search states guide admin | Admin can clear filters or escalate to support The flow re-enters at the last valid checkpoint. |
| Suspension is attempted without reason | A clear blocked or failed state; no unconfirmed success is shown. | ASF-05 blocks save | No account state changes until reason is supplied The flow re-enters at the last valid checkpoint. |
| Admin lacks account-control permission | A clear blocked or failed state; no unconfirmed success is shown. | ASF-02 blocks action | Admin can still view permitted read-only data The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not add admin task reassignment; only the approved controlled actions are allowed.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Users List | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | User Detail | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Sessions and Devices | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Status Action | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Audit Result | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens the users list.; Admin searches or filters by name, phone, email, role, status, trust/risk state or KYC state.; Admin opens a user record.; System shows profile, Task Owner wallet, Tasker wallet, sessions, devices, task history, reports and risk events.; Admin chooses a permitted action such as view sessions, disable device, suspend/reactivate account or add support note.; System requests reason when the action is high-impact.; System applies the action and records it in the audit log..
- [ ] Recovery: User cannot be found.
- [ ] Recovery: Suspension is attempted without reason.
- [ ] Recovery: Admin lacks account-control permission.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-04 — Tasker and KYC Review

> Status: approved; version 0.2; owner: Product Lead.

### In plain English

An authorized admin reviews a Tasker's identity-verification case and decides whether the Tasker can work, must resubmit information, should be rejected, or needs further manual or risk review. The decision is based on the Tasker profile, submitted identity references, biometric result and Smile ID provider history. Every decision requires the correct permission and an audit record.

### Why this flow exists

Work2Cash must prevent unverified or suspicious people from accepting tasks while giving legitimate Taskers a clear path through delayed, failed or mismatched KYC results.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| KYC admin | Reviews identity evidence and selects an allowed decision. |
| Risk admin | Reviews suspicious identity, device or behavior signals when escalated. |
| Admin dashboard | Shows queues, protected evidence, provider history and controlled actions. |
| Backend | Enforces RBAC, state transitions, reason capture, audit and Tasker activation rules. |
| Smile ID adapter | Supplies provider job status, match outcome and safe failure information. |
| Notification worker | Tells the Tasker the outcome and required next step. |

### Before this flow begins

- A Work2Cash user and TaskerProfile already exist.
- The Tasker has started or submitted KYC through the mobile activation flow.
- A KycVerification record is pending, rejected, failed, requires re-verification or needs manual review.
- Smile ID provider events or status information are available, delayed or explicitly missing.
- The admin is authenticated through admin login and TOTP and has the required KYC permissions.
- Protected KYC evidence is available only through audited, permission-controlled access.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Pending KYC queue | A new verification needs an operational decision. |
| Failed/provider-delay queue | Smile ID returned a failure or has not returned a usable result. |
| User Management Tasker detail | Support, operations or risk opens the Tasker's linked KYC record. |
| Re-verification return | A Tasker resubmits after an earlier request. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Tasker profile and user status | Confirms the account and activation context. | User and TaskerProfile records. |
| NIN or BVN submission status | Shows which accepted identity route was used. | KycVerification metadata and provider request history. |
| Biometric match result | Helps confirm the submitting person matches the identity record. | Smile ID result. |
| Provider job and event history | Explains pending, delayed, failed or duplicate callbacks. | ProviderRequestLog and ProviderWebhookEvent. |
| Previous admin decisions | Prevents contradictory repeated actions. | AdminAuditLog and KYC history. |
| Risk signals | Determines whether normal KYC review is sufficient. | Risk flags, session/device summary and related reports where permitted. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| AF-03 — User Management | Supplies the Tasker account, profile and linked operational context. | User and TaskerProfile can be viewed by the admin's role. |
| ASF-02 — RBAC Permission Gate | Blocks unauthorized viewing or decision actions. | Admin has view permission and the specific action permission. |
| ASF-04 — Record Detail Review | Presents the complete KYC case instead of a queue summary alone. | Linked records load without exposing raw secrets. |
| ASF-05 — Reason and Audit Confirmation | Requires a reason and note for rejection, re-verification or escalation. | Required fields are complete before mutation. |
| ASF-06 — Evidence and Media Review | Displays protected identity evidence where policy allows. | Access is time-limited, audited and role-restricted. |
| ASF-07 — Status Change and Decision Action | Applies an allowed KYC transition consistently. | Current status permits the selected transition. |
| ASF-10 — Provider Reconciliation and Retry | Checks Smile ID when provider results are missing or inconsistent. | Retry or status lookup is safe and cost-controlled. |

### Verbal walkthrough

1. **Admin:** Opens the pending, failed or manual-review KYC queue, or enters from User Management.
2. **Admin dashboard:** Checks the admin session and KYC view permission before showing records.
3. **Admin:** Filters by pending, failed, re-verification, approved, rejected or manual-review status.
4. **Admin:** Opens one Tasker's KYC case.
5. **Backend:** Returns the Tasker profile, safe identity-verification metadata, biometric result, provider history and previous decisions permitted for that role.
6. **Admin:** Reviews the profile information, identity route, biometric match and provider failure reasons.
7. **Admin:** If the provider result is missing or inconsistent, runs controlled reconciliation rather than guessing the outcome.
8. **Backend/provider adapter:** Checks the provider result safely and updates the case only from verified information.
9. **Admin:** Selects approve, reject, request re-verification or escalate to manual/risk review.
10. **Admin dashboard:** Requests a reason and note where the decision is high impact.
11. **Backend:** Rechecks permission and current state, applies one valid transition and writes the audit record.
12. **Backend:** Activates the Tasker only when the approved KYC and profile rules pass; other outcomes keep Tasker work actions blocked.
13. **Notification worker:** Sends the Tasker an outcome and safe next step without exposing provider internals or sensitive data.
14. **Admin dashboard:** Shows the final status and the appropriate return or escalation destination.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Approve | Verified identity and biometric result satisfy policy with no unresolved risk blocker. | KYC becomes approved and Tasker activation may become eligible. | Return to AF-03 User Management or the KYC queue. |
| Reject | Evidence or verified provider result fails an accepted policy rule and cannot be corrected by simple resubmission. | KYC becomes rejected; Tasker work actions remain blocked. | Return to AF-03 and allow support/risk follow-up where required. |
| Request re-verification | Evidence is incomplete, expired, unclear or correctable. | KYC becomes requires-reverification and records the requested correction. | Tasker resubmits through the mobile KYC subflow, then the case returns to AF-04. |
| Manual/risk escalation | Identity mismatch, fraud signal or policy ambiguity needs specialist review. | Case remains blocked in manual/risk review. | Continue to AF-14 — Risk Review. |
| Provider monitoring | Smile ID response is missing, delayed or inconsistent and reconciliation cannot close it. | Case remains pending without false approval or rejection. | Continue to AF-19 — Provider Monitoring. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| User | Read | Supplies account and contact context without exposing credentials. |
| TaskerProfile | Read and conditionally change | `isActive` remains false unless KYC and profile rules pass. |
| KycVerification | Read and change | Moves through KycStatus plus the separate operational review state; version prevents stale overwrite. |
| KycAttempt | Read and create when a new submission occurs | Preserves attempt history instead of overwriting evidence. |
| ProviderRequestLog | Read | Shows safe request and status history. |
| ProviderWebhookEvent | Read and process idempotently | Prevents duplicate callbacks from applying duplicate decisions. |
| RiskFlag | Read or create on escalation | Preserves identity-risk context for AF-14. |
| AdminAuditLog | Create | Records actor, action, target, reason, request ID and timestamp. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Notification | Sends approved, rejected, re-verification or pending/manual-review guidance. | Tasker. |
| Provider reconciliation | Checks delayed or inconsistent Smile ID status safely. | KYC use case and AF-19 monitoring. |
| Audit | Records every high-impact decision and evidence access where required. | Audit and governance review. |
| Risk handoff | Creates or links identity-risk context. | AF-14 Risk Review. |
| Activation change | Unlocks Tasker actions only after all approved conditions pass. | Mobile Tasker experience and matching eligibility. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Tasker approved | Identity requirements passed and no blocking risk remains. | Tasker may become eligible to work after remaining profile rules pass. | Return to User Management or queue. |
| Tasker rejected | The verification failed a non-correctable or policy-defined rule. | Tasker work actions remain blocked and receives an explanation/next step. | Support or risk review if disputed. |
| Re-verification requested | The Tasker can correct or resubmit required information. | Tasker remains blocked until resubmission succeeds. | Mobile KYC subflow returns the case to AF-04. |
| Manual review pending | A specialist decision is still required. | Tasker remains blocked without being falsely rejected. | AF-14 Risk Review. |
| Provider result pending | Provider truth is not available or consistent. | Tasker remains pending. | AF-19 Provider Monitoring and later AF-04 resume. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Normal approval, rejection or recorded re-verification request | AF-03 — User Management or KYC queue | Admin returns to account/queue operations after the decision is safely recorded. |
| Suspicious identity, fraud or device behavior | AF-14 — Risk, Trust, Warning and Strike Review | Risk specialists need the linked evidence and decision context. |
| Missing or inconsistent Smile ID outcome | AF-19 — Use Case and Provider Health Monitoring | Technical operations must investigate provider or worker failure. |
| Tasker resubmits requested information | AF-04 — Tasker and KYC Review | The new attempt requires a fresh controlled review. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Smile ID callback is missing or delayed | Case remains pending with provider status unavailable. | Run ASF-10 reconciliation; if unresolved, open AF-19 without guessing. | Return to the same KYC detail after verified status arrives. |
| Duplicate provider event | No duplicate visible decision should occur. | Idempotency ignores or records the duplicate safely. | Continue with the single authoritative case state. |
| Protected evidence cannot load | Evidence panel shows a permission-safe error. | Retry signed access or escalate storage/provider health; do not approve without required evidence. | Reload the same case when evidence is available. |
| Admin lacks view permission | Queue or protected fields remain unavailable. | Show a clear forbidden state and request the correct role through governance. | Reopen after permission is formally granted. |
| Admin lacks decision permission | Detail may remain read-only; mutation is blocked. | Route to an authorized reviewer without sharing unsafe exports. | Authorized admin continues from the same case. |
| State changed while admin was reviewing | Save returns a conflict/current-state response. | Refresh record and reconsider the decision against current state. | Resume at detail review; never overwrite the newer decision. |
| Decision lacks required reason | Confirmation cannot submit. | Show the required reason/note fields. | Resume at decision confirmation. |
| Notification delivery fails | Decision remains valid; delivery failure is visible operationally. | Queue safe retry and preserve in-app/backend status truth. | Tasker sees current status when the app refreshes. |

### Business rules

- Tasker work actions remain locked until approved KYC and profile activation rules pass.
- KYC evidence and identifiers are sensitive and role-restricted.
- Admin decisions must use verified backend/provider state.
- Rejection, re-verification and escalation require a clear reason and audit trail.
- Provider callbacks and retries must be idempotent.
- Evidence access and high-impact actions must be auditable.
- A delayed provider result produces pending/manual review, not guessed approval or rejection.
- Tasker-facing messages explain the next step without exposing internal provider payloads.

### Forbidden behavior

- Do not approve KYC from a queue summary without required detail.
- Do not expose raw NIN, BVN, biometric payloads, provider secrets or unnecessary KYC data.
- Do not let a frontend-only status activate a Tasker.
- Do not overwrite newer decisions after a stale-review conflict.
- Do not hard-delete KYC history or audit records.
- Do not retry paid provider operations in uncontrolled loops.
- Do not treat disputes as live chat or use this flow to reassign tasks.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | KYC queue | Find pending, failed, re-verification or manual-review cases. | Admin selects a case they may view. |
| 2 | Tasker/KYC detail | Show profile, safe identity metadata, provider history and previous decisions. | Required context loads successfully. |
| 3 | Evidence review | Inspect protected evidence and biometric/provider result. | Admin has sufficient verified information or triggers reconciliation. |
| 4 | Decision confirmation | Select allowed outcome, capture reason/note and preview impact. | Permission and state validation pass. |
| 5 | KYC status result | Show recorded outcome, notification state and handoff. | Admin returns to queue/User Management or escalates. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| User detail API | `GET /admin/users/{userId}` | Supplies permission-gated user, Tasker and KYC context. |
| KYC queue API | `GET /admin/kyc` | Lists safe KYC summaries with status, review-state and date filters. |
| KYC detail API | `GET /admin/kyc/{kycId}` | Supplies safe case, attempt, decision, risk and reconciliation context plus allowed actions. |
| Approve API | `POST /admin/kyc/{kycId}/approve` | Applies an idempotent, version-guarded approval and recalculates Tasker activation. |
| Reject API | `POST /admin/kyc/{kycId}/reject` | Applies a reasoned non-correctable rejection and keeps Tasker work access blocked. |
| Re-verification API | `POST /admin/kyc/{kycId}/request-reverification` | Records a reasoned re-verification decision. |
| Risk escalation API | `POST /admin/kyc/{kycId}/escalate-risk` | Links AF-14 while preserving truthful pending KYC state. |
| Provider reconciliation API | `POST /admin/kyc/{kycId}/reconcile` | Queues one asynchronous, cooldown-controlled Smile ID check. |
| Data | User, TaskerProfile, KycVerification, KycAttempt, ProviderRequestLog, ProviderWebhookEvent, RiskFlag, AdminAuditLog | Persists identity, provider, risk and audit history. |
| Notification | In-app/FCM/email according to policy | Communicates safe outcome and next action. |

### Acceptance criteria

- [ ] An authorized admin can find and open a KYC case with the context required for a decision.
- [ ] Unauthorized admins see a clear forbidden or redacted state.
- [ ] Sensitive identifiers, biometric data and provider secrets are not exposed unnecessarily.
- [ ] Missing or inconsistent Smile ID results remain pending and can be reconciled safely.
- [ ] Approve, reject, request re-verification and escalation enforce valid current-state transitions.
- [ ] High-impact outcomes capture actor, reason, target, request ID and timestamp.
- [ ] Tasker activation remains blocked unless approved KYC and profile rules pass.
- [ ] The Tasker receives a safe outcome and next step.
- [ ] Duplicate provider events and duplicate action submissions do not duplicate state changes.
- [ ] A stale-review conflict cannot overwrite a newer decision.

### Required tests

- [ ] Approved KYC happy path.
- [ ] Rejection with required reason and Tasker notification.
- [ ] Request re-verification and successful resubmission return.
- [ ] Manual/risk escalation.
- [ ] Missing, delayed, failed and duplicate Smile ID event handling.
- [ ] View permission, action permission and protected-field redaction.
- [ ] State conflict from simultaneous review.
- [ ] Duplicate action idempotency.
- [ ] Evidence-access failure and recovery.
- [ ] Notification failure without rolling back the authoritative decision.
- [ ] Audit record completeness.

### Out of scope

- Mobile collection of KYC information, which belongs to the Tasker activation/KYC subflow.
- General user suspension unrelated to the KYC decision.
- Task matching, execution or reassignment.
- Direct editing of provider payloads or database records.

---

## AF-05 — Task Operations Monitoring

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow gives admins a live operational view of tasks across creation, funding, acceptance, en route, arrived, in progress, completed, cancelled and disputed states.

In normal use, admin opens the task monitor, then admin filters by task state, city/zone, category, payment state, task owner, tasker, risk flag or date, then admin opens a task detail page, then system shows task summary, timeline, accepted tasker, arrival commitment, location, payment/escrow state, proof media and communication audit signals, then admin reviews current risk or operational blockage, then admin may force cancel a task where policy permits, with elevated permission, reason, note, impact preview, notifications and audit, then admin escalates to support, report resolution, finance, media review or risk review where needed. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow gives admins a live operational view of tasks across creation, funding, acceptance, en route, arrived, in progress, completed, cancelled and disputed states. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Mobile task lifecycle
- Payment funding state
- Location and media records
- ASF-03
- ASF-04
- ASF-06
- ASF-03 List/Search/Filter
- ASF-04 Record Detail Review
- ASF-06 Evidence and Media Review
- ASF-07 Status Change
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens task monitor from dashboard, search, report, support case, or finance record. | This condition starts AF-05. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Task Operations Monitoring | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Mobile task lifecycle | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Payment funding state | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Location and media records | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-06 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 List/Search/Filter | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-06 Evidence and Media Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-07 Status Change | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens the task monitor.
2. **System:** Admin filters by task state, city/zone, category, payment state, Task Owner, Tasker, risk flag or date.
3. **Admin/System:** Admin opens a task detail page.
4. **System:** System shows task summary, timeline, accepted Tasker, arrival commitment, location, payment/escrow state, proof media and communication audit signals.
5. **Admin/System:** Admin reviews current risk or operational blockage.
6. **System:** Admin may force cancel a task where policy permits, with elevated permission, reason, note, impact preview, notifications and audit.
7. **Admin/System:** Admin escalates to support, report resolution, finance, media review or risk review where needed.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Report, risk or moderation record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Task reviewed | AF-05 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Task escalated | AF-05 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Task operational action completed | AF-05 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-05 reaches the ending that requires AF-06 Report Resolution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-06 Report Resolution | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-05 reaches the ending that requires AF-07 Support Chat; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-07 Support Chat | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-05 reaches the ending that requires AF-08 Finance; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-08 Finance | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-05 reaches the ending that requires AF-13 Media Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-13 Media Review | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-05 reaches the ending that requires AF-19 Use Case Health; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-19 Use Case Health | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Task state looks stuck | A clear blocked or failed state; no unconfirmed success is shown. | ASF-04 shows timeline and last backend use case result | Admin can escalate to AF-19 Use Case Health The flow re-enters at the last valid checkpoint. |
| Proof media missing | A clear blocked or failed state; no unconfirmed success is shown. | ASF-06 shows media requirement state | Admin can contact support or move to dispute resolution The flow re-enters at the last valid checkpoint. |
| Payment funded but task not progressing | A clear blocked or failed state; no unconfirmed success is shown. | AF-08 finance and AF-07 support flows handle follow-up | Admin can resolve user-facing blockage The flow re-enters at the last valid checkpoint. |
| Task must be force-cancelled | A clear blocked or failed state; no unconfirmed success is shown. | Elevated permission + ASF-05 reason/audit + policy impact preview | Task is cancelled without bypassing wallet, escrow, penalty, refund or notification rules The flow re-enters at the last valid checkpoint. |
| Replacement Tasker is needed | A clear blocked or failed state; no unconfirmed success is shown. | Admin reassignment is blocked | Tasker cancellation or Task Owner rejection returns task to matching/broadcasting where policy allows; admin cannot choose replacement Tasker The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not treat a frontend payment redirect as final payment proof or introduce card-entry-first UX.
- Do not introduce paid-provider auto-refresh loops; use backend-controlled status and recovery.
- Do not turn disputes into live chat; preserve structured evidence and decisions.
- Do not add admin task reassignment; only the approved controlled actions are allowed.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Task Monitor | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Task Detail | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Timeline and Location | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Operational Action | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Escalation | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens the task monitor.; Admin filters by task state, city/zone, category, payment state, Task Owner, Tasker, risk flag or date.; Admin opens a task detail page.; System shows task summary, timeline, accepted Tasker, arrival commitment, location, payment/escrow state, proof media and communication audit signals.; Admin reviews current risk or operational blockage.; Admin may force cancel a task where policy permits, with elevated permission, reason, note, impact preview, notifications and audit.; Admin escalates to support, report resolution, finance, media review or risk review where needed..
- [ ] Recovery: Task state looks stuck.
- [ ] Recovery: Proof media missing.
- [ ] Recovery: Payment funded but task not progressing.
- [ ] Recovery: Task must be force-cancelled.
- [ ] Recovery: Replacement Tasker is needed.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-06 — Task Report and Dispute Resolution

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow resolves reports linked to tasks, including refusal to approve completion, unsafe behavior, no-show, off-platform solicitation, proof disputes and cancellation disagreements.

In normal use, admin opens the report queue, then admin filters by report type, urgency, linked task, user, state or age, then admin opens report detail, then system shows linked task, task owner, tasker, timeline, media, cancellation/no-show events, penalties and prior warnings/strikes, then admin reviews evidence and policy rules, then admin selects a resolution: uphold report, reject report, apply warning/strike, release escrow, hold payout, request more info or escalate, then system records decision, notifies affected parties and updates related task/wallet/risk states. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow resolves reports linked to tasks, including refusal to approve completion, unsafe behavior, no-show, off-platform solicitation, proof disputes and cancellation disagreements. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- AF-05 Task Monitoring
- AF-13 Media Review
- AF-14 Risk Rules
- ASF-06
- ASF-05
- ASF-06 Evidence and Media Review
- ASF-05 Reason and Audit Confirmation
- ASF-07 Status Change
- ASF-09 Support Assignment
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens Reports from dashboard or from a task/user detail page. | This condition starts AF-06. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Task Report and Dispute Resolution | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| AF-05 Task Monitoring | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| AF-13 Media Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| AF-14 Risk Rules | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-06 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-06 Evidence and Media Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-07 Status Change | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-09 Support Assignment | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens the report queue.
2. **System:** Admin filters by report type, urgency, linked task, user, state or age.
3. **Admin/System:** Admin opens report detail.
4. **System:** System shows linked task, Task Owner, Tasker, timeline, media, cancellation/no-show events, penalties and prior warnings/strikes.
5. **Admin/System:** Admin reviews evidence and policy rules.
6. **System:** Admin selects a resolution: uphold report, reject report, apply warning/strike, release escrow, hold payout, request more info or escalate.
7. **Admin/System:** System records decision, notifies affected parties and updates related task/wallet/risk states.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Report, risk or moderation record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Report resolved | AF-06 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| More information requested | AF-06 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Escalated | AF-06 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Timed out by policy | AF-06 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-06 reaches the ending that requires AF-09 Payout Batch; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-09 Payout Batch | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-06 reaches the ending that requires AF-10 Wallet Support; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-10 Wallet Support | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-06 reaches the ending that requires AF-14 Risk Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-14 Risk Review | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Report lacks evidence | A clear blocked or failed state; no unconfirmed success is shown. | ASF-09 support can request more information | Report remains pending until evidence or timeout The flow re-enters at the last valid checkpoint. |
| Dispute affects payout | A clear blocked or failed state; no unconfirmed success is shown. | AF-09 payout batch excludes or holds affected Tasker payout | Non-disputed payouts continue normally The flow re-enters at the last valid checkpoint. |
| Decision would penalize a user | A clear blocked or failed state; no unconfirmed success is shown. | ASF-05 reason is required | Decision is auditable The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not turn disputes into live chat; preserve structured evidence and decisions.
- Do not add admin task reassignment; only the approved controlled actions are allowed.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Reports Queue | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Report Detail | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Evidence Review | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Decision | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Resolution Notice | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens the report queue.; Admin filters by report type, urgency, linked task, user, state or age.; Admin opens report detail.; System shows linked task, Task Owner, Tasker, timeline, media, cancellation/no-show events, penalties and prior warnings/strikes.; Admin reviews evidence and policy rules.; Admin selects a resolution: uphold report, reject report, apply warning/strike, release escrow, hold payout, request more info or escalate.; System records decision, notifies affected parties and updates related task/wallet/risk states..
- [ ] Recovery: Report lacks evidence.
- [ ] Recovery: Dispute affects payout.
- [ ] Recovery: Decision would penalize a user.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-07 — Support Live Chat Operations

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow lets admins handle user support conversations from the web dashboard. It is separate from task-user chat and is used when users need direct support.

In normal use, support queue receives a new chat request, then admin accepts or is assigned the conversation, then system displays user profile, recent tasks, payment records, reports and risk notes beside the chat, then admin responds and selects a support category, then admin may link the chat to a task, report, payment or wallet case, then admin closes the chat with a resolution note or escalates to another admin flow. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow lets admins handle user support conversations from the web dashboard. It is separate from task-user chat and is used when users need direct support. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Socket support channel
- AF-03 User Management
- ASF-09
- ASF-09 Support Live Chat Assignment
- ASF-04 Record Detail Review
- ASF-05 Reason and Audit Confirmation
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| User opens live support from the mobile app or admin opens a support case from another module. | This condition starts AF-07. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Support Live Chat Operations | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Socket support channel | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| AF-03 User Management | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-09 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-09 Support Live Chat Assignment | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Support queue receives a new chat request.
2. **System:** Admin accepts or is assigned the conversation.
3. **Admin/System:** System displays user profile, recent tasks, payment records, reports and risk notes beside the chat.
4. **System:** Admin responds and selects a support category.
5. **Admin/System:** Admin may link the chat to a task, report, payment or wallet case.
6. **System:** Admin closes the chat with a resolution note or escalates to another admin flow.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Support or communication record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Chat closed | AF-07 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Chat escalated | AF-07 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| User disconnected | AF-07 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Case linked to another flow | AF-07 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-07 reaches the ending that requires AF-06 Report Resolution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-06 Report Resolution | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-07 reaches the ending that requires AF-08 Finance; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-08 Finance | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-07 reaches the ending that requires AF-10 Wallet Support; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-10 Wallet Support | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-07 reaches the ending that requires AF-14 Risk Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-14 Risk Review | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| No admin is available | A clear blocked or failed state; no unconfirmed success is shown. | Queue remains visible with SLA age | Project Lead can reassign or prioritize The flow re-enters at the last valid checkpoint. |
| User raises payment issue | A clear blocked or failed state; no unconfirmed success is shown. | Admin links chat to AF-08 or AF-10 | Finance context is preserved The flow re-enters at the last valid checkpoint. |
| User reports unsafe behavior | A clear blocked or failed state; no unconfirmed success is shown. | Admin links chat to AF-06 and AF-14 | Risk context is preserved The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not add admin task reassignment; only the approved controlled actions are allowed.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Support Queue | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Assigned Chat | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | User Context | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Support Action | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Close or Escalate | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Support queue receives a new chat request.; Admin accepts or is assigned the conversation.; System displays user profile, recent tasks, payment records, reports and risk notes beside the chat.; Admin responds and selects a support category.; Admin may link the chat to a task, report, payment or wallet case.; Admin closes the chat with a resolution note or escalates to another admin flow..
- [ ] Recovery: No admin is available.
- [ ] Recovery: User raises payment issue.
- [ ] Recovery: User reports unsafe behavior.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-08 — Finance: Payments, Escrow and Reconciliation

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow tracks Paystack and Moniepoint payments, escrow funding, provider webhooks, ledger entries and failed reconciliation cases.

In normal use, admin opens finance dashboard, then admin filters payments by provider, state, task, user, date, amount or webhook status, then admin opens a payment detail page, then system shows provider reference, internal ledger, escrow state, webhook history and task linkage, then admin compares provider event against work2cash ledger, then admin retries safe reconciliation or escalates if manual review is required, then system records the outcome and updates affected task/wallet states where allowed. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow tracks Paystack and Moniepoint payments, escrow funding, provider webhooks, ledger entries and failed reconciliation cases. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Paystack
- Moniepoint
- Ledger records
- Escrow records
- ASF-10
- ASF-03 List/Search/Filter
- ASF-04 Record Detail Review
- ASF-10 Provider Reconciliation and Retry
- ASF-08 Export
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens finance dashboard from dashboard alert, task detail, support chat or failed provider event. | This condition starts AF-08. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Finance: Payments, Escrow and Reconciliation | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Paystack | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Moniepoint | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Ledger records | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Escrow records | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-10 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 List/Search/Filter | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-10 Provider Reconciliation and Retry | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-08 Export | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens finance dashboard.
2. **System:** Admin filters payments by provider, state, task, user, date, amount or webhook status.
3. **Admin/System:** Admin opens a payment detail page.
4. **System:** System shows provider reference, internal ledger, escrow state, webhook history and task linkage.
5. **Admin/System:** Admin compares provider event against Work2Cash ledger.
6. **System:** Admin retries safe reconciliation or escalates if manual review is required.
7. **Admin/System:** System records the outcome and updates affected task/wallet states where allowed.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | Admin retries safe reconciliation or escalates if manual review is required. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Payment, wallet, escrow or payout record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Payment reconciled | AF-08 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Payment pending | AF-08 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Manual finance review | AF-08 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Provider failure escalated | AF-08 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-08 reaches the ending that requires AF-05 Task Monitoring; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-05 Task Monitoring | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-08 reaches the ending that requires AF-09 Payout Batch; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-09 Payout Batch | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-08 reaches the ending that requires AF-10 Wallet Support; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-10 Wallet Support | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-08 reaches the ending that requires AF-19 Use Case Health; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-19 Use Case Health | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Provider webhook received but ledger not updated | A clear blocked or failed state; no unconfirmed success is shown. | ASF-10 compares provider and internal state | Safe retry or manual review The flow re-enters at the last valid checkpoint. |
| Task Owner says payment was made but task is unfunded | A clear blocked or failed state; no unconfirmed success is shown. | AF-07 support links the case to finance detail | Admin reconciles or requests proof The flow re-enters at the last valid checkpoint. |
| Provider is down | A clear blocked or failed state; no unconfirmed success is shown. | AF-19 monitors failures and queues retry | Admin avoids duplicate manual actions The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not treat a frontend payment redirect as final payment proof or introduce card-entry-first UX.
- Do not introduce paid-provider auto-refresh loops; use backend-controlled status and recovery.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Finance Dashboard | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Payment Detail | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Webhook Log | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Reconcile or Retry | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Ledger Result | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens finance dashboard.; Admin filters payments by provider, state, task, user, date, amount or webhook status.; Admin opens a payment detail page.; System shows provider reference, internal ledger, escrow state, webhook history and task linkage.; Admin compares provider event against Work2Cash ledger.; Admin retries safe reconciliation or escalates if manual review is required.; System records the outcome and updates affected task/wallet states where allowed..
- [ ] Recovery: Provider webhook received but ledger not updated.
- [ ] Recovery: Task Owner says payment was made but task is unfunded.
- [ ] Recovery: Provider is down.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-09 — Withdrawal and Payout Batch Operations

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow manages Tasker withdrawal requests and bulk payout batches. Work2Cash pays eligible Tasker withdrawal requests on the 14th and 28th of each month.

In normal use, admin opens withdrawal queue, then system shows pending withdrawal requests, eligible taskers, held payouts and disputed exclusions, then admin creates or opens the payout batch for the 14th or 28th, then system groups eligible requests by provider rail and validates balances, then admin reviews batch totals, exclusions, fees and failed validations, then admin confirms bulk payout action, then system sends payout instructions through paystack or moniepoint and records provider responses, then admin reviews batch result and retries failed safe items where allowed. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow manages Tasker withdrawal requests and bulk payout batches. Work2Cash pays eligible Tasker withdrawal requests on the 14th and 28th of each month. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Tasker withdrawal requests
- No active issue/dispute for payout eligibility
- Paystack/Moniepoint payout rails
- ASF-10
- ASF-03 List/Search/Filter
- ASF-04 Record Detail Review
- ASF-05 Reason and Audit Confirmation
- ASF-10 Provider Reconciliation
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens withdrawal queue or scheduled payout batch day arrives. | This condition starts AF-09. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Withdrawal and Payout Batch Operations | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Tasker withdrawal requests | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| No active issue/dispute for payout eligibility | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Paystack/Moniepoint payout rails | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-10 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 List/Search/Filter | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-10 Provider Reconciliation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens withdrawal queue.
2. **System:** System shows pending withdrawal requests, eligible Taskers, held payouts and disputed exclusions.
3. **Admin/System:** Admin creates or opens the payout batch for the 14th or 28th.
4. **System:** System groups eligible requests by provider rail and validates balances.
5. **Admin/System:** Admin reviews batch totals, exclusions, fees and failed validations.
6. **System:** Admin confirms bulk payout action.
7. **Admin/System:** System sends payout instructions through Paystack or Moniepoint and records provider responses.
8. **System:** Admin reviews batch result and retries failed safe items where allowed.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Payment, wallet, escrow or payout record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Batch paid | AF-09 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Batch partially paid | AF-09 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Batch failed | AF-09 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Items held for dispute/admin approval | AF-09 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-09 reaches the ending that requires AF-08 Finance Reconciliation; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-08 Finance Reconciliation | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-09 reaches the ending that requires AF-14 Risk Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-14 Risk Review | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-09 reaches the ending that requires AF-18 Audit Log Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-18 Audit Log Review | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Tasker has active dispute | A clear blocked or failed state; no unconfirmed success is shown. | Payout item is held until admin authorization | Non-disputed Taskers remain payable The flow re-enters at the last valid checkpoint. |
| Bulk transfer partially fails | A clear blocked or failed state; no unconfirmed success is shown. | ASF-10 reconciles item-by-item provider response | Successful items are not duplicated The flow re-enters at the last valid checkpoint. |
| Admin tries payout outside policy | A clear blocked or failed state; no unconfirmed success is shown. | ASF-02 and ASF-05 enforce permission and reason | Action is blocked or audited The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not add admin task reassignment; only the approved controlled actions are allowed.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Withdrawal Queue | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Payout Batch | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Batch Review | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Bulk Transfer | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Batch Result | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens withdrawal queue.; System shows pending withdrawal requests, eligible Taskers, held payouts and disputed exclusions.; Admin creates or opens the payout batch for the 14th or 28th.; System groups eligible requests by provider rail and validates balances.; Admin reviews batch totals, exclusions, fees and failed validations.; Admin confirms bulk payout action.; System sends payout instructions through Paystack or Moniepoint and records provider responses.; Admin reviews batch result and retries failed safe items where allowed..
- [ ] Recovery: Tasker has active dispute.
- [ ] Recovery: Bulk transfer partially fails.
- [ ] Recovery: Admin tries payout outside policy.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-10 — Wallet, Refund and Excess Funding Support

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow handles Task Owner wallet support, excess deposit cases, escrow questions and refund-like support cases. Task Owners cannot withdraw directly from the app.

In normal use, admin opens wallet case queue or a user wallet detail, then system shows task owner wallet, tasker wallet, ledger entries, escrow holds and linked tasks, then admin identifies whether the issue is excess funding, failed funding, refund request, duplicate payment or ledger confusion, then admin reviews provider references and task state, then admin decides whether to guide user to use funds on tasks, escalate, or request approved manual handling, then system records support resolution and audit reason. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow handles Task Owner wallet support, excess deposit cases, escrow questions and refund-like support cases. Task Owners cannot withdraw directly from the app. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- AF-03 User Management
- AF-08 Finance
- Wallet ledger
- Support policy
- ASF-04 Record Detail Review
- ASF-05 Reason and Audit Confirmation
- ASF-09 Support Assignment
- ASF-10 Provider Reconciliation
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Support, finance or user management opens a wallet case. | This condition starts AF-10. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Wallet, Refund and Excess Funding Support | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| AF-03 User Management | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| AF-08 Finance | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Wallet ledger | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Support policy | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-09 Support Assignment | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-10 Provider Reconciliation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens wallet case queue or a user wallet detail.
2. **System:** System shows Task Owner wallet, Tasker wallet, ledger entries, escrow holds and linked tasks.
3. **Admin/System:** Admin identifies whether the issue is excess funding, failed funding, refund request, duplicate payment or ledger confusion.
4. **System:** Admin reviews provider references and task state.
5. **Admin/System:** Admin decides whether to guide user to use funds on tasks, escalate, or request approved manual handling.
6. **System:** System records support resolution and audit reason.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Payment, wallet, escrow or payout record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Support or communication record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Case resolved | AF-10 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Manual review pending | AF-10 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| User guided to support policy | AF-10 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Provider reconciliation pending | AF-10 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-10 reaches the ending that requires AF-07 Support Chat; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-07 Support Chat | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-10 reaches the ending that requires AF-08 Finance; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-08 Finance | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-10 reaches the ending that requires AF-18 Audit Log Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-18 Audit Log Review | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| User requests direct Task Owner withdrawal | A clear blocked or failed state; no unconfirmed success is shown. | Policy path explains support-only handling | No direct withdrawal is exposed The flow re-enters at the last valid checkpoint. |
| Ledger and provider amount disagree | A clear blocked or failed state; no unconfirmed success is shown. | ASF-10 reconciliation checks source of truth | Case stays pending until resolved The flow re-enters at the last valid checkpoint. |
| Admin adjustment needed | A clear blocked or failed state; no unconfirmed success is shown. | ASF-05 requires reason and permission | Manual decision is auditable The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not treat a frontend payment redirect as final payment proof or introduce card-entry-first UX.
- Do not introduce paid-provider auto-refresh loops; use backend-controlled status and recovery.
- Do not add admin task reassignment; only the approved controlled actions are allowed.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Wallet Case Queue | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Ledger Review | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Support Request | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Adjustment Decision | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Case Closed | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens wallet case queue or a user wallet detail.; System shows Task Owner wallet, Tasker wallet, ledger entries, escrow holds and linked tasks.; Admin identifies whether the issue is excess funding, failed funding, refund request, duplicate payment or ledger confusion.; Admin reviews provider references and task state.; Admin decides whether to guide user to use funds on tasks, escalate, or request approved manual handling.; System records support resolution and audit reason..
- [ ] Recovery: User requests direct Task Owner withdrawal.
- [ ] Recovery: Ledger and provider amount disagree.
- [ ] Recovery: Admin adjustment needed.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-11 — Task Catalog Management

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow controls the task categories and task types visible in the mobile app, including Home, Errands, Office and Support.

In normal use, admin opens the task category list, then admin selects a category or creates a new task type, then system shows name, description, icon hint, active state, ordering and pricing guidance fields, then admin edits details and reviews how it affects mobile display, then admin publishes the change, saves as draft, disables, or archives the category/task type, then system records audit log and makes active catalog available to mobile clients. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow controls the task categories and task types visible in the mobile app, including Home, Errands, Office and Support. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Product approval
- Remote/mobile config publication
- ASF-05
- ASF-03 List/Search/Filter
- ASF-05 Reason and Audit Confirmation
- ASF-07 Status Change
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens task catalog settings. | This condition starts AF-11. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Task Catalog Management | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Product approval | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Remote/mobile config publication | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 List/Search/Filter | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-07 Status Change | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens the task category list.
2. **System:** Admin selects a category or creates a new task type.
3. **Admin/System:** System shows name, description, icon hint, active state, ordering and pricing guidance fields.
4. **System:** Admin edits details and reviews how it affects mobile display.
5. **Admin/System:** Admin publishes the change, saves as draft, disables, or archives the category/task type.
6. **System:** System records audit log and makes active catalog available to mobile clients.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Support or communication record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Catalog published | AF-11 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Draft saved | AF-11 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Category/task type disabled | AF-11 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Category/task type archived | AF-11 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Change rejected by validation | AF-11 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-11 reaches the ending that requires AF-16 Remote Config; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-16 Remote Config | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-11 reaches the ending that requires AF-18 Audit Log Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-18 Audit Log Review | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Category is disabled while tasks still use it | A clear blocked or failed state; no unconfirmed success is shown. | System warns before publishing | Existing tasks remain readable, new selection can be blocked The flow re-enters at the last valid checkpoint. |
| Admin attempts hard delete on used category/task type | A clear blocked or failed state; no unconfirmed success is shown. | System blocks hard delete and offers disable/archive | Historical tasks, receipts, reports, analytics and audit logs keep their labels The flow re-enters at the last valid checkpoint. |
| Duplicate task type | A clear blocked or failed state; no unconfirmed success is shown. | Validation blocks duplicate names within category | Admin corrects entry The flow re-enters at the last valid checkpoint. |
| Mobile cache has old catalog | A clear blocked or failed state; no unconfirmed success is shown. | AF-16 config/versioning helps refresh clients | Updated catalog becomes available safely The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not add admin task reassignment; only the approved controlled actions are allowed.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Task Categories | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Task Type Detail | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Create or Edit | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Review | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Publish | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens the task category list.; Admin selects a category or creates a new task type.; System shows name, description, icon hint, active state, ordering and pricing guidance fields.; Admin edits details and reviews how it affects mobile display.; Admin publishes the change, saves as draft, disables, or archives the category/task type.; System records audit log and makes active catalog available to mobile clients..
- [ ] Recovery: Category is disabled while tasks still use it.
- [ ] Recovery: Admin attempts hard delete on used category/task type.
- [ ] Recovery: Duplicate task type.
- [ ] Recovery: Mobile cache has old catalog.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-12 — Service Coverage Configuration

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow controls where Work2Cash operates. Current product decision is nationwide Nigeria coverage, while task sites must remain within Nigeria.

In normal use, admin opens coverage dashboard, then system shows active country, states/zones, task posting rules and tasker acceptance rules, then admin reviews whether a zone is active, restricted or disabled, then admin edits coverage rule within platform policy, then system requests confirmation and reason, then coverage change is published and audited. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow controls where Work2Cash operates. Current product decision is nationwide Nigeria coverage, while task sites must remain within Nigeria. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Nigeria-only operating policy
- Geocoding/location rules
- ASF-05
- AF-16
- ASF-05 Reason and Audit Confirmation
- ASF-07 Status Change
- ASF-11 Empty/Loading/Error Recovery
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens coverage settings. | This condition starts AF-12. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Service Coverage Configuration | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Nigeria-only operating policy | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Geocoding/location rules | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| AF-16 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-07 Status Change | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-11 Empty/Loading/Error Recovery | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens coverage dashboard.
2. **System:** System shows active country, states/zones, task posting rules and Tasker acceptance rules.
3. **Admin/System:** Admin reviews whether a zone is active, restricted or disabled.
4. **System:** Admin edits coverage rule within platform policy.
5. **Admin/System:** System requests confirmation and reason.
6. **System:** Coverage change is published and audited.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Configuration or preference record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Coverage published | AF-12 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Coverage draft saved | AF-12 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Change rejected | AF-12 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-12 reaches the ending that requires AF-16 Remote Config; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-16 Remote Config | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-12 reaches the ending that requires AF-05 Task Monitoring; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-05 Task Monitoring | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Manual address geocodes outside Nigeria | A clear blocked or failed state; no unconfirmed success is shown. | Coverage rule rejects task site | Task Owner must correct location The flow re-enters at the last valid checkpoint. |
| Tasker outside Nigeria tries to accept | A clear blocked or failed state; no unconfirmed success is shown. | Coverage rule blocks acceptance | Tasker sees location requirement The flow re-enters at the last valid checkpoint. |
| Admin changes active area by mistake | A clear blocked or failed state; no unconfirmed success is shown. | ASF-05 audit reason and confirmation reduce accidental publication | Change can be traced and corrected The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not add admin task reassignment; only the approved controlled actions are allowed.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Coverage Settings | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Zone Detail | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Rule Edit | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Confirm | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Published Coverage | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens coverage dashboard.; System shows active country, states/zones, task posting rules and Tasker acceptance rules.; Admin reviews whether a zone is active, restricted or disabled.; Admin edits coverage rule within platform policy.; System requests confirmation and reason.; Coverage change is published and audited..
- [ ] Recovery: Manual address geocodes outside Nigeria.
- [ ] Recovery: Tasker outside Nigeria tries to accept.
- [ ] Recovery: Admin changes active area by mistake.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-13 — Task Media Moderation

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow lets admins review uploaded photos and videos for task proof, completion proof, reports and unsafe content.

In normal use, admin opens media moderation queue, then system shows pending, flagged, removed and reviewed media, then admin opens media preview with linked user, task, report and upload purpose, then admin reviews whether the media is valid, unsafe, unrelated or privacy-sensitive, then admin keeps, removes, flags or escalates the media, then system records decision and updates linked task/report/risk context. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow lets admins review uploaded photos and videos for task proof, completion proof, reports and unsafe content. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- TaskProof/TaskMedia records
- Report evidence
- Permission-controlled media access
- ASF-06 Evidence and Media Review
- ASF-05 Reason and Audit Confirmation
- ASF-07 Status Change
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens media queue or media item from task/report/KYC detail. | This condition starts AF-13. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Task Media Moderation | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| TaskProof/TaskMedia records | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Report evidence | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Permission-controlled media access | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-06 Evidence and Media Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-07 Status Change | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens media moderation queue.
2. **System:** System shows pending, flagged, removed and reviewed media.
3. **Admin/System:** Admin opens media preview with linked user, task, report and upload purpose.
4. **System:** Admin reviews whether the media is valid, unsafe, unrelated or privacy-sensitive.
5. **Admin/System:** Admin keeps, removes, flags or escalates the media.
6. **System:** System records decision and updates linked task/report/risk context.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Report, risk or moderation record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Rating, review or favorite record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Media or evidence record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Media kept | AF-13 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Media removed | AF-13 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Media flagged | AF-13 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Escalated to dispute/risk | AF-13 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-13 reaches the ending that requires AF-06 Report Resolution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-06 Report Resolution | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-13 reaches the ending that requires AF-14 Risk Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-14 Risk Review | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-13 reaches the ending that requires AF-19 Monitoring; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-19 Monitoring | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Video/photo cannot load | A clear blocked or failed state; no unconfirmed success is shown. | ASF-11 shows retry/error and AF-19 can inspect storage/provider failure | Media review is paused without losing queue context The flow re-enters at the last valid checkpoint. |
| Media is unsafe | A clear blocked or failed state; no unconfirmed success is shown. | ASF-07 remove/flag action applies policy | Risk review can be opened The flow re-enters at the last valid checkpoint. |
| Media affects dispute decision | A clear blocked or failed state; no unconfirmed success is shown. | AF-06 receives reviewed evidence | Dispute can proceed with clearer context The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not add admin task reassignment; only the approved controlled actions are allowed.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Media Queue | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Media Preview | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Safety Review | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Remove or Keep | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Audit Result | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens media moderation queue.; System shows pending, flagged, removed and reviewed media.; Admin opens media preview with linked user, task, report and upload purpose.; Admin reviews whether the media is valid, unsafe, unrelated or privacy-sensitive.; Admin keeps, removes, flags or escalates the media.; System records decision and updates linked task/report/risk context..
- [ ] Recovery: Video/photo cannot load.
- [ ] Recovery: Media is unsafe.
- [ ] Recovery: Media affects dispute decision.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-14 — Risk, Trust, Warning and Strike Review

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow reviews policy violations, warnings, strikes, trust score reductions, Tasker restrictions and account suspensions.

In normal use, admin opens risk queue, then system shows users with warnings, strikes, repeated movement-stage rejections, no-shows, off-platform solicitation flags and unsafe behavior reports, then admin opens trust profile, then system shows policy events, linked tasks/reports, previous warnings/strikes and current restrictions, then admin applies or removes allowed action based on policy, then system records warning, strike, restriction, suspension or no-action decision. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow reviews policy violations, warnings, strikes, trust score reductions, Tasker restrictions and account suspensions. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Penalty policy
- Report outcomes
- Task events
- Communication audit flags
- ASF-05
- ASF-04 Record Detail Review
- ASF-05 Reason and Audit Confirmation
- ASF-06 Evidence Review
- ASF-07 Status Change
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens risk queue from dashboard, report decision, user profile or automated flag. | This condition starts AF-14. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Risk, Trust, Warning and Strike Review | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Penalty policy | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Report outcomes | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Task events | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Communication audit flags | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-06 Evidence Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-07 Status Change | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens risk queue.
2. **System:** System shows users with warnings, strikes, repeated movement-stage rejections, no-shows, off-platform solicitation flags and unsafe behavior reports.
3. **Admin/System:** Admin opens trust profile.
4. **System:** System shows policy events, linked tasks/reports, previous warnings/strikes and current restrictions.
5. **Admin/System:** Admin applies or removes allowed action based on policy.
6. **System:** System records warning, strike, restriction, suspension or no-action decision.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Report, risk or moderation record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Rating, review or favorite record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| No action | AF-14 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Warning applied | AF-14 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Strike applied | AF-14 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Restriction applied | AF-14 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Account suspended | AF-14 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-14 reaches the ending that requires AF-03 User Management; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-03 User Management | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-14 reaches the ending that requires AF-06 Report Resolution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-06 Report Resolution | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-14 reaches the ending that requires AF-07 Support Chat; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-07 Support Chat | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-14 reaches the ending that requires AF-18 Audit Log Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-18 Audit Log Review | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Three warnings convert into strike | A clear blocked or failed state; no unconfirmed success is shown. | Risk flow evaluates threshold and applies next policy step | Restriction period is updated The flow re-enters at the last valid checkpoint. |
| Tasker reaches Strike 4 | A clear blocked or failed state; no unconfirmed success is shown. | ASF-07 suspension action applies account restriction | Tasker must contact support The flow re-enters at the last valid checkpoint. |
| Task Owner reaches Strike 4 | A clear blocked or failed state; no unconfirmed success is shown. | ASF-07 suspension action applies account restriction | Task Owner must contact support The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not add admin task reassignment; only the approved controlled actions are allowed.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Risk Queue | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Trust Profile | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Policy Events | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Warning or Strike | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Restriction Result | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens risk queue.; System shows users with warnings, strikes, repeated movement-stage rejections, no-shows, off-platform solicitation flags and unsafe behavior reports.; Admin opens trust profile.; System shows policy events, linked tasks/reports, previous warnings/strikes and current restrictions.; Admin applies or removes allowed action based on policy.; System records warning, strike, restriction, suspension or no-action decision..
- [ ] Recovery: Three warnings convert into strike.
- [ ] Recovery: Tasker reaches Strike 4.
- [ ] Recovery: Task Owner reaches Strike 4.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-15 — Referral Management

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow manages referral rules and checks reward eligibility. Referral reward is wallet credit after the referred user completes five paid tasks.

In normal use, admin opens referral dashboard, then system shows referred users, completed paid task counts, pending rewards, credited rewards and suspected abuse, then admin opens a referral record, then system shows referrer, referred user, task history and reward state, then admin reviews eligibility or abuse flag, then admin approves, holds, rejects or escalates reward where manual review is needed. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow manages referral rules and checks reward eligibility. Referral reward is wallet credit after the referred user completes five paid tasks. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Referral code tracking
- Completed paid task count
- Wallet credit policy
- ASF-03 List/Search/Filter
- ASF-04 Record Detail Review
- ASF-05 Reason and Audit Confirmation
- ASF-07 Status Change
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens referral dashboard or a referral reward alert. | This condition starts AF-15. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Referral Management | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Referral code tracking | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Completed paid task count | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Wallet credit policy | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 List/Search/Filter | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-07 Status Change | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens referral dashboard.
2. **System:** System shows referred users, completed paid task counts, pending rewards, credited rewards and suspected abuse.
3. **Admin/System:** Admin opens a referral record.
4. **System:** System shows referrer, referred user, task history and reward state.
5. **Admin/System:** Admin reviews eligibility or abuse flag.
6. **System:** Admin approves, holds, rejects or escalates reward where manual review is needed.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Payment, wallet, escrow or payout record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Referral record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Reward credited | AF-15 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Reward pending | AF-15 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Reward held | AF-15 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Reward rejected | AF-15 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-15 reaches the ending that requires AF-08 Finance; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-08 Finance | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-15 reaches the ending that requires AF-14 Risk Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-14 Risk Review | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-15 reaches the ending that requires AF-18 Audit Log Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-18 Audit Log Review | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Task count appears wrong | A clear blocked or failed state; no unconfirmed success is shown. | Record detail compares referred user's paid task history | Reward stays pending until verified The flow re-enters at the last valid checkpoint. |
| Abuse suspected | A clear blocked or failed state; no unconfirmed success is shown. | Risk flow receives referral abuse context | Reward can be held The flow re-enters at the last valid checkpoint. |
| Wallet credit fails | A clear blocked or failed state; no unconfirmed success is shown. | AF-08/AF-19 reconciliation handles failure | Reward is retried safely or escalated The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not treat a frontend payment redirect as final payment proof or introduce card-entry-first UX.
- Do not introduce paid-provider auto-refresh loops; use backend-controlled status and recovery.
- Do not add admin task reassignment; only the approved controlled actions are allowed.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Referral Dashboard | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Reward Rules | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Reward Review | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Abuse Check | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Publish or Resolve | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens referral dashboard.; System shows referred users, completed paid task counts, pending rewards, credited rewards and suspected abuse.; Admin opens a referral record.; System shows referrer, referred user, task history and reward state.; Admin reviews eligibility or abuse flag.; Admin approves, holds, rejects or escalates reward where manual review is needed..
- [ ] Recovery: Task count appears wrong.
- [ ] Recovery: Abuse suspected.
- [ ] Recovery: Wallet credit fails.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-16 — Platform Config and Remote Config

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow manages platform switches and values that the admin dashboard controls, including mobile behavior, feature flags, marketplace limits and provider settings that are safe to expose operationally.

In normal use, admin opens remote config dashboard, then system shows config groups, current values, environment, last publisher and effective date, then admin opens a config detail, then admin edits a value within allowed validation rules, then system shows preview and affected flows, then admin confirms publication with reason, then system publishes config and records audit log. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow manages platform switches and values that the admin dashboard controls, including mobile behavior, feature flags, marketplace limits and provider settings that are safe to expose operationally. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Technical Lead-approved config list
- Environment separation
- ASF-05
- ASF-02 RBAC Permission Gate
- ASF-05 Reason and Audit Confirmation
- ASF-07 Status Change
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens platform configuration. | This condition starts AF-16. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Platform Config and Remote Config | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Technical Lead-approved config list | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Environment separation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-02 RBAC Permission Gate | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-07 Status Change | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens remote config dashboard.
2. **System:** System shows config groups, current values, environment, last publisher and effective date.
3. **Admin/System:** Admin opens a config detail.
4. **System:** Admin edits a value within allowed validation rules.
5. **Admin/System:** System shows preview and affected flows.
6. **System:** Admin confirms publication with reason.
7. **Admin/System:** System publishes config and records audit log.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Configuration or preference record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Config published | AF-16 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Draft saved | AF-16 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Publish failed | AF-16 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Action blocked | AF-16 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-16 reaches the ending that requires AF-11 Catalog; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-11 Catalog | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-16 reaches the ending that requires AF-12 Coverage; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-12 Coverage | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-16 reaches the ending that requires AF-19 Use Case Health; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-19 Use Case Health | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-16 reaches the ending that requires AF-18 Audit Log Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-18 Audit Log Review | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Admin edits restricted config | A clear blocked or failed state; no unconfirmed success is shown. | ASF-02 permission and validation block action | No unsafe configuration is published The flow re-enters at the last valid checkpoint. |
| Config could break mobile flow | A clear blocked or failed state; no unconfirmed success is shown. | Preview lists affected flows before confirmation | Admin can cancel or save draft The flow re-enters at the last valid checkpoint. |
| Publish fails | A clear blocked or failed state; no unconfirmed success is shown. | ASF-11 shows retry/error and AF-19 logs failure | Previous config remains active The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Remote Config | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Config Detail | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Edit Value | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Confirm Publish | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Config Live | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens remote config dashboard.; System shows config groups, current values, environment, last publisher and effective date.; Admin opens a config detail.; Admin edits a value within allowed validation rules.; System shows preview and affected flows.; Admin confirms publication with reason.; System publishes config and records audit log..
- [ ] Recovery: Admin edits restricted config.
- [ ] Recovery: Config could break mobile flow.
- [ ] Recovery: Publish fails.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-17 — Admin Users, Roles and Permissions

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow manages admin accounts, role assignment, permissions and admin access removal. It is separate from marketplace user management.

In normal use, admin opens admin users list, then system shows active, invited, disabled and locked admin accounts, then admin opens admin user or role detail, then admin reviews permission matrix, then admin invites, disables, changes role or rotates access where allowed, then system requests reason and records audit log. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow manages admin accounts, role assignment, permissions and admin access removal. It is separate from marketplace user management. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- AF-01
- High-level RBAC permission
- ASF-02
- ASF-05
- ASF-02 RBAC Permission Gate
- ASF-05 Reason and Audit Confirmation
- ASF-07 Status Change
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Authorized admin opens admin user settings. | This condition starts AF-17. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Admin Users, Roles and Permissions | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| AF-01 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| High-level RBAC permission | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-02 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-02 RBAC Permission Gate | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-07 Status Change | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens admin users list.
2. **System:** System shows active, invited, disabled and locked admin accounts.
3. **Admin/System:** Admin opens admin user or role detail.
4. **System:** Admin reviews permission matrix.
5. **Admin/System:** Admin invites, disables, changes role or rotates access where allowed.
6. **System:** System requests reason and records audit log.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Admin invited | AF-17 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Role updated | AF-17 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Admin disabled | AF-17 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Action blocked | AF-17 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-17 reaches the ending that requires AF-18 Audit Log Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-18 Audit Log Review | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-17 reaches the ending that requires AF-19 Monitoring; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-19 Monitoring | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Admin tries to edit own critical permission | A clear blocked or failed state; no unconfirmed success is shown. | RBAC policy blocks unsafe self-modification where configured | Technical Lead handles exceptional case The flow re-enters at the last valid checkpoint. |
| Invite email fails | A clear blocked or failed state; no unconfirmed success is shown. | AF-19 provider/job monitoring tracks delivery failure | Admin can resend after issue is resolved The flow re-enters at the last valid checkpoint. |
| Role change lacks reason | A clear blocked or failed state; no unconfirmed success is shown. | ASF-05 blocks save | No permission changes are applied The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Admin Users | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Role Detail | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Permission Matrix | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Invite or Disable | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Audit Result | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens admin users list.; System shows active, invited, disabled and locked admin accounts.; Admin opens admin user or role detail.; Admin reviews permission matrix.; Admin invites, disables, changes role or rotates access where allowed.; System requests reason and records audit log..
- [ ] Recovery: Admin tries to edit own critical permission.
- [ ] Recovery: Invite email fails.
- [ ] Recovery: Role change lacks reason.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-18 — Audit Log Review

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow provides traceability for important admin and system actions, including who acted, what changed, when it happened and why.

In normal use, admin opens audit logs, then admin filters by actor, module, action type, date, record id or severity, then admin opens a log detail, then system shows before/after values where available, reason, source ip/session and linked record, then admin exports logs if needed for review, then admin returns to the linked operational flow or closes review. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow provides traceability for important admin and system actions, including who acted, what changed, when it happened and why. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Audit events from all admin flows
- ASF-03
- ASF-08
- ASF-03 List/Search/Filter
- ASF-04 Record Detail Review
- ASF-08 Export and Report Generation
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens audit logs from settings, record detail, finance, risk or governance review. | This condition starts AF-18. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Audit Log Review | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Audit events from all admin flows | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-08 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 List/Search/Filter | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-08 Export and Report Generation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens audit logs.
2. **System:** Admin filters by actor, module, action type, date, record ID or severity.
3. **Admin/System:** Admin opens a log detail.
4. **System:** System shows before/after values where available, reason, source IP/session and linked record.
5. **Admin/System:** Admin exports logs if needed for review.
6. **System:** Admin returns to the linked operational flow or closes review.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | Admin exports logs if needed for review. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Rating, review or favorite record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Audit reviewed | AF-18 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Export generated | AF-18 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Linked record opened | AF-18 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-18 reaches the ending that requires AF-03 User Management; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-03 User Management | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-18 reaches the ending that requires AF-08 Finance; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-08 Finance | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-18 reaches the ending that requires AF-14 Risk Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-14 Risk Review | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-18 reaches the ending that requires AF-17 Admin Users; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-17 Admin Users | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Log list too broad | A clear blocked or failed state; no unconfirmed success is shown. | ASF-03 filters narrow the review | Admin finds the target event The flow re-enters at the last valid checkpoint. |
| Linked record is unavailable | A clear blocked or failed state; no unconfirmed success is shown. | Audit log still preserves action record | Admin can review historical context The flow re-enters at the last valid checkpoint. |
| Export is required | A clear blocked or failed state; no unconfirmed success is shown. | ASF-08 generates controlled export | No database access is needed The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Audit Logs | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Filters | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Log Detail | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Export | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Review Complete | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens audit logs.; Admin filters by actor, module, action type, date, record ID or severity.; Admin opens a log detail.; System shows before/after values where available, reason, source IP/session and linked record.; Admin exports logs if needed for review.; Admin returns to the linked operational flow or closes review..
- [ ] Recovery: Log list too broad.
- [ ] Recovery: Linked record is unavailable.
- [ ] Recovery: Export is required.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-19 — Use Case Health and Background Job Monitoring

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow shows which backend use cases, queues and provider actions are failing. It helps the team detect issues before users report them.

In normal use, admin opens use case health dashboard, then system shows backend use cases, last run time, success/failure counts, failed responses, bullmq queue health and provider error rates, then admin opens a failure detail, then system shows request context, affected record, provider response, retry status and last error, then admin retries safe jobs or escalates to technical lead, then system records retry result and marks issue resolved or still failing. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow shows which backend use cases, queues and provider actions are failing. It helps the team detect issues before users report them. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Backend use case tracking
- BullMQ
- Valkey
- Provider adapters
- Sentry
- ASF-04 Record Detail Review
- ASF-10 Provider Reconciliation and Retry
- ASF-08 Export and Report Generation
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens health dashboard or dashboard alert reports failures. | This condition starts AF-19. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Use Case Health and Background Job Monitoring | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Backend use case tracking | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| BullMQ | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Valkey | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Provider adapters | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Sentry | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-10 Provider Reconciliation and Retry | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-08 Export and Report Generation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens use case health dashboard.
2. **System:** System shows backend use cases, last run time, success/failure counts, failed responses, BullMQ queue health and provider error rates.
3. **Admin/System:** Admin opens a failure detail.
4. **System:** System shows request context, affected record, provider response, retry status and last error.
5. **Admin/System:** Admin retries safe jobs or escalates to Technical Lead.
6. **System:** System records retry result and marks issue resolved or still failing.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Report, risk or moderation record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Issue resolved | AF-19 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Retry queued | AF-19 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Escalated to Technical Lead | AF-19 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Incident opened | AF-19 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-19 reaches the ending that requires AF-08 Finance; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-08 Finance | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-19 reaches the ending that requires AF-20 Monitoring and Incident Readiness; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-20 Monitoring and Incident Readiness | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-19 reaches the ending that requires AF-18 Audit Log Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-18 Audit Log Review | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Job retry is unsafe | A clear blocked or failed state; no unconfirmed success is shown. | System blocks retry and asks for escalation | Technical Lead handles manual decision The flow re-enters at the last valid checkpoint. |
| Provider is failing repeatedly | A clear blocked or failed state; no unconfirmed success is shown. | Dashboard groups repeated failures | Incident path can be opened The flow re-enters at the last valid checkpoint. |
| Affected record needs business action | A clear blocked or failed state; no unconfirmed success is shown. | Admin opens linked finance/task/KYC flow | Operational team can resolve user impact The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Use Case Health | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Failure Detail | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Job Logs | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Retry or Escalate | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Resolved | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens use case health dashboard.; System shows backend use cases, last run time, success/failure counts, failed responses, BullMQ queue health and provider error rates.; Admin opens a failure detail.; System shows request context, affected record, provider response, retry status and last error.; Admin retries safe jobs or escalates to Technical Lead.; System records retry result and marks issue resolved or still failing..
- [ ] Recovery: Job retry is unsafe.
- [ ] Recovery: Provider is failing repeatedly.
- [ ] Recovery: Affected record needs business action.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-20 — Monitoring, Backup and Incident Readiness

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow gives the team a non-developer-readable view of service health, backup status, restore readiness and incident response state.

In normal use, admin opens monitoring overview, then system shows api, socket, database, valkey, queues, storage, backups, external providers and uptime state, then admin opens an alert detail, then system shows severity, affected service, time started, user impact and recommended checklist, then admin follows incident checklist or escalates to technical lead, then incident notes, status updates and closure summary are recorded. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow gives the team a non-developer-readable view of service health, backup status, restore readiness and incident response state. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Self-hosted services
- Backup jobs
- Provider status
- Technical Lead runbooks
- ASF-04 Record Detail Review
- ASF-08 Export
- ASF-11 Empty/Loading/Error Recovery
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens monitoring page or system alert is raised. | This condition starts AF-20. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Monitoring, Backup and Incident Readiness | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Self-hosted services | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Backup jobs | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Provider status | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Technical Lead runbooks | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-08 Export | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-11 Empty/Loading/Error Recovery | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens monitoring overview.
2. **System:** System shows API, socket, database, Valkey, queues, storage, backups, external providers and uptime state.
3. **Admin/System:** Admin opens an alert detail.
4. **System:** System shows severity, affected service, time started, user impact and recommended checklist.
5. **Admin/System:** Admin follows incident checklist or escalates to Technical Lead.
6. **System:** Incident notes, status updates and closure summary are recorded.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Relevant domain record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Healthy | AF-20 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Degraded | AF-20 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Incident open | AF-20 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Incident closed | AF-20 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-20 reaches the ending that requires AF-19 Use Case Health; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-19 Use Case Health | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-20 reaches the ending that requires AF-07 Support Chat; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-07 Support Chat | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-20 reaches the ending that requires AF-18 Audit Log Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-18 Audit Log Review | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Backup failed | A clear blocked or failed state; no unconfirmed success is shown. | Monitoring displays failed backup and last successful backup | Technical Lead repairs backup before risk grows The flow re-enters at the last valid checkpoint. |
| Database/Valkey service degraded | A clear blocked or failed state; no unconfirmed success is shown. | Incident checklist guides escalation | Operational status is tracked The flow re-enters at the last valid checkpoint. |
| Provider outage affects users | A clear blocked or failed state; no unconfirmed success is shown. | Monitoring links to affected flows | Support can communicate clear status The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Monitoring Overview | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Alert Detail | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Backup Status | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Incident Checklist | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Closed | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens monitoring overview.; System shows API, socket, database, Valkey, queues, storage, backups, external providers and uptime state.; Admin opens an alert detail.; System shows severity, affected service, time started, user impact and recommended checklist.; Admin follows incident checklist or escalates to Technical Lead.; Incident notes, status updates and closure summary are recorded..
- [ ] Recovery: Backup failed.
- [ ] Recovery: Database/Valkey service degraded.
- [ ] Recovery: Provider outage affects users.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-21 — Notifications and Announcements

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow lets approved admins send operational notices and review notification delivery without using SMS carelessly.

In normal use, admin opens notifications dashboard, then system shows sent, pending, failed and scheduled notifications, then admin creates announcement, then admin selects audience such as all users, task owners, taskers, active-task users, affected incident users, kyc-pending users, location segment or specific user, then admin selects channel: fcm push, in-app notification, email, or termii sms for critical/approved use only, then system shows preview, estimated audience, cost warning where sms applies, and preference impact, then admin confirms send with reason, then system sends, records delivery result, and audits the action. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow lets approved admins send operational notices and review notification delivery without using SMS carelessly. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- FCM
- Email provider
- Termii for critical SMS only
- Notification preferences
- ASF-05
- ASF-02 RBAC Permission Gate
- ASF-05 Reason and Audit Confirmation
- ASF-07 Status Change
- ASF-11 Empty/Loading/Error Recovery
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens Notifications or selects Send Announcement from dashboard quick actions. | This condition starts AF-21. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Notifications and Announcements | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| FCM | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Email provider | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Termii for critical SMS only | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Notification preferences | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-02 RBAC Permission Gate | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-07 Status Change | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-11 Empty/Loading/Error Recovery | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens notifications dashboard.
2. **System:** System shows sent, pending, failed and scheduled notifications.
3. **Admin/System:** Admin creates announcement.
4. **System:** Admin selects audience such as all users, Task Owners, Taskers, active-task users, affected incident users, KYC-pending users, location segment or specific user.
5. **Admin/System:** Admin selects channel: FCM push, in-app notification, email, or Termii SMS for critical/approved use only.
6. **System:** System shows preview, estimated audience, cost warning where SMS applies, and preference impact.
7. **Admin/System:** Admin confirms send with reason.
8. **System:** System sends, records delivery result, and audits the action.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Notification or preference record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Rating, review or favorite record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Announcement sent | AF-21 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Scheduled/pending | AF-21 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Partially failed | AF-21 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Blocked | AF-21 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Draft saved | AF-21 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-21 reaches the ending that requires AF-18 Audit Log Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-18 Audit Log Review | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-21 reaches the ending that requires AF-19 Use Case Health; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-19 Use Case Health | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-21 reaches the ending that requires AF-20 Monitoring and Incident Readiness; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-20 Monitoring and Incident Readiness | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Announcement contains sensitive/private data | A clear blocked or failed state; no unconfirmed success is shown. | Validation and review block unsafe content | Admin must rewrite message before sending The flow re-enters at the last valid checkpoint. |
| SMS selected for non-critical message | A clear blocked or failed state; no unconfirmed success is shown. | Cost-control rule blocks or requires stronger approval | SMS spend is protected The flow re-enters at the last valid checkpoint. |
| Delivery partially fails | A clear blocked or failed state; no unconfirmed success is shown. | Delivery result list and AF-19 monitoring show failures | Admin can review retry/escalation without duplicate blasting The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Notifications | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Create Announcement | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Audience and Channel | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Preview | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Delivery Result | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens notifications dashboard.; System shows sent, pending, failed and scheduled notifications.; Admin creates announcement.; Admin selects audience such as all users, Task Owners, Taskers, active-task users, affected incident users, KYC-pending users, location segment or specific user.; Admin selects channel: FCM push, in-app notification, email, or Termii SMS for critical/approved use only.; System shows preview, estimated audience, cost warning where SMS applies, and preference impact.; Admin confirms send with reason.; System sends, records delivery result, and audits the action..
- [ ] Recovery: Announcement contains sensitive/private data.
- [ ] Recovery: SMS selected for non-critical message.
- [ ] Recovery: Delivery partially fails.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-22 — Ratings and Reviews Management

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow lets admins review, moderate and audit task-bound ratings and reviews without editing user-written text.

In normal use, admin opens ratings and reviews list, then admin filters by rating, actor, task, category, report state, date, review status or risk flag, then admin opens review detail, then system shows linked task, task owner, tasker, rating, review text, tags, report history and trust/risk context, then admin chooses allowed action: keep, hide/remove, flag for risk, link to report/dispute, warn abusive reviewer, or escalate to support, then system requests reason for moderation action, then system records audit log and notifies affected user where policy requires. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow lets admins review, moderate and audit task-bound ratings and reviews without editing user-written text. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Task-bound ratings
- Completed tasks
- Risk/trust profile
- Report/dispute system
- ASF-05
- ASF-03 List/Search/Filter
- ASF-04 Record Detail Review
- ASF-05 Reason and Audit Confirmation
- ASF-07 Status Change
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens Ratings & Reviews from sidebar or from a linked user/task/report/risk record. | This condition starts AF-22. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Ratings and Reviews Management | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Task-bound ratings | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Completed tasks | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Risk/trust profile | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Report/dispute system | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 List/Search/Filter | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-05 Reason and Audit Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-07 Status Change | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens ratings and reviews list.
2. **System:** Admin filters by rating, actor, task, category, report state, date, review status or risk flag.
3. **Admin/System:** Admin opens review detail.
4. **System:** System shows linked task, Task Owner, Tasker, rating, review text, tags, report history and trust/risk context.
5. **Admin/System:** Admin chooses allowed action: keep, hide/remove, flag for risk, link to report/dispute, warn abusive reviewer, or escalate to support.
6. **System:** System requests reason for moderation action.
7. **Admin/System:** System records audit log and notifies affected user where policy requires.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Rating, review or favorite record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Review kept | AF-22 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Review hidden/removed | AF-22 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Review linked to report | AF-22 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Risk flag created | AF-22 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Support escalated | AF-22 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-22 reaches the ending that requires AF-06 Report Resolution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-06 Report Resolution | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-22 reaches the ending that requires AF-14 Risk Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-14 Risk Review | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-22 reaches the ending that requires AF-18 Audit Log Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-18 Audit Log Review | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Review is abusive or policy-violating | A clear blocked or failed state; no unconfirmed success is shown. | Moderation action hides/removes while preserving internal audit | Public display is cleaned without deleting history The flow re-enters at the last valid checkpoint. |
| Review indicates serious task issue | A clear blocked or failed state; no unconfirmed success is shown. | AF-06 Report Resolution receives linked context | Issue is handled through structured dispute/report The flow re-enters at the last valid checkpoint. |
| Low-rating pattern appears suspicious | A clear blocked or failed state; no unconfirmed success is shown. | AF-14 Risk Review receives pattern context | Trust/risk actions can be reviewed The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not add admin task reassignment; only the approved controlled actions are allowed.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Ratings & Reviews | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Review Detail | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Linked Task | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Moderation Action | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Audit Result | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens ratings and reviews list.; Admin filters by rating, actor, task, category, report state, date, review status or risk flag.; Admin opens review detail.; System shows linked task, Task Owner, Tasker, rating, review text, tags, report history and trust/risk context.; Admin chooses allowed action: keep, hide/remove, flag for risk, link to report/dispute, warn abusive reviewer, or escalate to support.; System requests reason for moderation action.; System records audit log and notifies affected user where policy requires..
- [ ] Recovery: Review is abusive or policy-violating.
- [ ] Recovery: Review indicates serious task issue.
- [ ] Recovery: Low-rating pattern appears suspicious.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-23 — Basic Analytics and Reports

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow provides MVP read-only reports for marketplace, finance, trust/safety, support and operations. Advanced analytics remains deferred.

In normal use, admin opens reports dashboard, then admin selects report group: marketplace, finance, trust/safety, support or operations, then system shows read-only metrics for the selected period, then admin filters by date, location, category, provider, status or role where applicable, then admin opens report detail or export preview, then system checks export permission and removes raw sensitive data from export, then admin exports where permitted or returns to dashboard. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow provides MVP read-only reports for marketplace, finance, trust/safety, support and operations. Advanced analytics remains deferred. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Aggregated operational data
- RBAC export permissions
- Use case logs
- Finance/task/support/report records
- ASF-02 RBAC Permission Gate
- ASF-03 List/Search/Filter
- ASF-08 Export and Report Generation
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens Analytics & Reports from sidebar or dashboard. | This condition starts AF-23. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Basic Analytics and Reports | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Aggregated operational data | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| RBAC export permissions | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Use case logs | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Finance/task/support/report records | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-02 RBAC Permission Gate | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 List/Search/Filter | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-08 Export and Report Generation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens reports dashboard.
2. **System:** Admin selects report group: marketplace, finance, trust/safety, support or operations.
3. **Admin/System:** System shows read-only metrics for the selected period.
4. **System:** Admin filters by date, location, category, provider, status or role where applicable.
5. **Admin/System:** Admin opens report detail or export preview.
6. **System:** System checks export permission and removes raw sensitive data from export.
7. **Admin/System:** Admin exports where permitted or returns to dashboard.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Payment, wallet, escrow or payout record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Report, risk or moderation record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Support or communication record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Report viewed | AF-23 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Export generated | AF-23 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Export blocked | AF-23 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Investigation opened | AF-23 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-23 reaches the ending that requires AF-08 Finance; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-08 Finance | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-23 reaches the ending that requires AF-18 Audit Log Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-18 Audit Log Review | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-23 reaches the ending that requires AF-19 Use Case Health; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-19 Use Case Health | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Admin requests advanced product analytics | A clear blocked or failed state; no unconfirmed success is shown. | MVP scope guard | Advanced analytics remains deferred; basic operational reports continue The flow re-enters at the last valid checkpoint. |
| Export would include sensitive raw data | A clear blocked or failed state; no unconfirmed success is shown. | Export sanitizer/permission gate | Export is blocked or redacted The flow re-enters at the last valid checkpoint. |
| Metrics mismatch source records | A clear blocked or failed state; no unconfirmed success is shown. | AF-19 Use Case Health and AF-08 Finance can be opened | Team investigates data freshness or reconciliation issue The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Reports Dashboard | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Report Filters | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Report Detail | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Export | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Review Complete | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens reports dashboard.; Admin selects report group: marketplace, finance, trust/safety, support or operations.; System shows read-only metrics for the selected period.; Admin filters by date, location, category, provider, status or role where applicable.; Admin opens report detail or export preview.; System checks export permission and removes raw sensitive data from export.; Admin exports where permitted or returns to dashboard..
- [ ] Recovery: Admin requests advanced product analytics.
- [ ] Recovery: Export would include sensitive raw data.
- [ ] Recovery: Metrics mismatch source records.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## AF-24 — Receipt and Transaction Review

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

This flow gives admins a dedicated way to find receipts and transaction trails without manually changing ledger entries from the review screen.

In normal use, admin opens receipt & transactions, then admin searches by transaction id, task id, user, provider reference, amount, status or date, then admin opens transaction detail, then system shows receipt summary and linked task, user, wallet, escrow, provider reference and webhook/reconciliation state, then admin copies receipt reference or exports where permitted, then admin escalates to finance, support or dispute if action is required, then manual ledger correction is blocked from this screen and routed to wallet/finance action flows. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

This flow gives admins a dedicated way to find receipts and transaction trails without manually changing ledger entries from the review screen. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Admin operator | Starts the flow, supplies permitted information and chooses the available action. |
| Admin dashboard | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Wallet ledger
- Payment records
- Provider references
- Webhook events
- RBAC export permissions
- ASF-03 List/Search/Filter
- ASF-04 Record Detail Review
- ASF-08 Export and Report Generation
- ASF-10 Provider Reconciliation and Retry
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Admin opens Receipt & Transactions or follows a payment/wallet/support link. | This condition starts AF-24. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Receipt and Transaction Review | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Wallet ledger | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Payment records | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Provider references | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Webhook events | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| RBAC export permissions | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-03 List/Search/Filter | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-04 Record Detail Review | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-08 Export and Report Generation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| ASF-10 Provider Reconciliation and Retry | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **Admin/System:** Admin opens Receipt & Transactions.
2. **System:** Admin searches by transaction ID, task ID, user, provider reference, amount, status or date.
3. **Admin/System:** Admin opens transaction detail.
4. **System:** System shows receipt summary and linked task, user, wallet, escrow, provider reference and webhook/reconciliation state.
5. **Admin/System:** Admin copies receipt reference or exports where permitted.
6. **System:** Admin escalates to finance, support or dispute if action is required.
7. **Admin/System:** Manual ledger correction is blocked from this screen and routed to wallet/finance action flows.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | Admin escalates to finance, support or dispute if action is required. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Payment, wallet, escrow or payout record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Rating, review or favorite record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Receipt viewed | AF-24 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Reference copied | AF-24 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Export generated | AF-24 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Finance/support/dispute escalated | AF-24 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after AF-24 reaches the ending that requires AF-08 Finance; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-08 Finance | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-24 reaches the ending that requires AF-10 Wallet Support; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-10 Wallet Support | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-24 reaches the ending that requires AF-06 Report Resolution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-06 Report Resolution | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after AF-24 reaches the ending that requires AF-18 Audit Log Review; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | AF-18 Audit Log Review | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Receipt cannot be found | A clear blocked or failed state; no unconfirmed success is shown. | Search/filter plus provider reference lookup | Admin can refine search or open finance reconciliation The flow re-enters at the last valid checkpoint. |
| Ledger correction is needed | A clear blocked or failed state; no unconfirmed success is shown. | Mutation is blocked from receipt review | Admin routes to AF-08 Finance or AF-10 Wallet Support The flow re-enters at the last valid checkpoint. |
| Sensitive provider payload requested | A clear blocked or failed state; no unconfirmed success is shown. | Data exposure guard | Admin sees only safe operational metadata The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/admin-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not treat a frontend payment redirect as final payment proof or introduce card-entry-first UX.
- Do not introduce paid-provider auto-refresh loops; use backend-controlled status and recovery.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Receipts & Transactions | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Transaction Search | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Receipt Detail | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Webhook Status | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Escalate / Export | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Admin dashboard | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Admin opens Receipt & Transactions.; Admin searches by transaction ID, task ID, user, provider reference, amount, status or date.; Admin opens transaction detail.; System shows receipt summary and linked task, user, wallet, escrow, provider reference and webhook/reconciliation state.; Admin copies receipt reference or exports where permitted.; Admin escalates to finance, support or dispute if action is required.; Manual ledger correction is blocked from this screen and routed to wallet/finance action flows..
- [ ] Recovery: Receipt cannot be found.
- [ ] Recovery: Ledger correction is needed.
- [ ] Recovery: Sensitive provider payload requested.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## ASF-01 — Admin Login and TOTP Verification

> Status: approved; version 0.1; owner: Technical Lead.

### In plain English

This subflow proves that a person entering the dashboard has a valid admin account, knows the account password and possesses the enrolled authenticator used for the time-based one-time password, or TOTP. It creates a full admin session only after both checks succeed.

### Why it is reusable

AF-01 uses the complete login path. Every protected admin page also relies on the same session guard when a session is missing or expired, and sensitive operations may request TOTP again. Keeping those checks in one subflow prevents individual modules from inventing weaker access behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| AF-01 — Admin Entry, Login and TOTP | An admin opens the dashboard without a valid session. | AF-01 continues to the intended protected page or AF-02 Dashboard Overview. |
| AF-02 to AF-24 | A protected page is opened with no session or an expired session. | The originally requested page after successful login. |
| High-impact admin actions | Policy requires a current TOTP check before the action. | The calling confirmation step; this does not replace its RBAC or reason checks. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| Admin email and password | Admin login form | Credentials must match an existing enabled AdminUser without revealing which field was wrong. |
| TOTP challenge | Backend pre-session | Challenge must belong to the login attempt and must not be treated as a full admin session. |
| TOTP code | Admin authenticator | Code must pass the backend TOTP and rate-limit checks. |
| Intended protected URL | Dashboard auth guard | Destination must be an allowed internal admin route; never trust an arbitrary external redirect. |
| Admin account state | AdminUser record | Disabled accounts cannot receive a dashboard session. |

### Steps

1. **Admin:** Opens the admin login page, either directly or after the auth guard intercepts a protected route.
2. **Admin:** Enters the admin email and password.
3. **Backend:** Validates the credentials and confirms that the AdminUser is enabled.
4. **Backend:** Returns a limited TOTP challenge rather than a full admin session.
5. **Admin:** Enters the current code from the enrolled authenticator.
6. **Backend:** Verifies the challenge, code and rate limit.
7. **Backend:** Creates the AdminSession and records the login metadata needed for audit and security review.
8. **Dashboard:** Returns the admin to the stored protected route, or to AF-02 when no safe intended route exists.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| TOTP challenge | Admin TOTP screen | Password validation passed, but full admin access has not been granted. |
| Authenticated AdminSession | Dashboard auth guard and protected APIs | Password and TOTP checks passed for an enabled admin. |
| Safe authentication error | Admin login or TOTP screen | Access was not granted; the response does not expose protected account details. |
| Login audit/security metadata | Security monitoring and audit review | A login success or failure can be investigated without logging secrets or TOTP codes. |

### Success return behavior

The subflow returns an authenticated admin session and one safe internal destination. AF-01 then completes at the dashboard or the intended protected page. A sensitive-action TOTP check returns only to the calling action and does not bypass its permission, reason or audit requirements.

### Failure return behavior

Wrong credentials, wrong or expired TOTP, rate limiting and disabled-account checks create no full admin session. The admin remains on the relevant access screen with a safe retry or escalation message. An expired session stores only a safe internal route, returns through AF-01 and resumes that route after a new successful login. Repeated or suspicious failures are available to security monitoring.

### Permissions and sensitive data

- The login endpoint is public only in the limited sense required to accept admin credentials; it grants no admin permission by itself.
- The TOTP verification endpoint accepts an admin pre-session or an already authenticated admin token where policy requires re-verification.
- Passwords, TOTP secrets, TOTP codes, recovery codes and full session tokens must never appear in logs, UI errors or audit metadata.
- TOTP enrollment and recovery are approved security paths outside this subflow; login must not silently enroll or reset TOTP.
- A valid session does not grant every action. ASF-02 RBAC Permission Gate still controls modules and operations.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | `POST /admin/auth/login` | Validate admin credentials and create a limited TOTP challenge, not a full session. |
| API | `POST /admin/auth/totp/verify` | Verify the login or sensitive-action TOTP challenge. |
| API | `POST /admin/auth/logout` | Invalidate the current AdminSession when AF-01 logs out. |
| Data | AdminUser, AdminSession, AdminTotpCredential | Store separate admin identity, session and TOTP credential state. |
| Data | AdminAuditLog | Preserve required admin/security traceability without secrets. |
| UI | Admin login, TOTP verification and auth guard | Collect access proof, show safe states and resume only an allowed internal route. |
| Socket | None | Admin authentication is REST-based; no socket connection is required. |

### Acceptance criteria

- [ ] Valid password alone never creates a full dashboard session.
- [ ] Valid credentials plus valid TOTP create one authenticated AdminSession and route safely.
- [ ] Disabled admins, invalid credentials and invalid TOTP cannot open protected pages.
- [ ] An expired session can return to the original allowed admin route after successful login.
- [ ] Errors and logs expose no password, TOTP secret, code, recovery code or session token.
- [ ] Completing this subflow does not bypass RBAC on the destination page or action.

### Required tests

- [ ] Valid password and TOTP login.
- [ ] Wrong password, unknown account and disabled account with non-revealing errors.
- [ ] Wrong, expired and rate-limited TOTP.
- [ ] Direct protected-route entry and safe return after login.
- [ ] Unsafe or external intended URL is rejected in favor of AF-02.
- [ ] Expired-session recovery and logout invalidation.
- [ ] Secret and token redaction in logs, monitoring and UI errors.
- [ ] Authenticated admin without required RBAC permission remains forbidden at the destination.

---

## ASF-02 — RBAC Permission Gate

> Status: approved; version 0.1; owner: Admin Lead.

### In plain English

Checks whether the logged-in admin is allowed to view a module or perform a specific action. Prevents unauthorized finance, role, suspension, payout, refund, or configuration actions from being completed.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in ASF-02 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| AF-02 — Admin Dashboard Overview | When the caller needs rbac permission gate to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-03 — User Management | When the caller needs rbac permission gate to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-16 — Platform Config and Remote Config | When the caller needs rbac permission gate to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-17 — Admin Users, Roles and Permissions | When the caller needs rbac permission gate to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-21 — Notifications and Announcements | When the caller needs rbac permission gate to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-23 — Basic Analytics and Reports | When the caller needs rbac permission gate to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-02 to AF-24 | When the caller needs rbac permission gate to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| Calling-flow context, actor/session and relevant authoritative record | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** The calling flow passes the current record, actor context and requested operation.
2. **System/Actor:** The system validates access and performs Checks whether the logged-in admin is allowed to view a module or perform a specific action..
3. **System/Actor:** The subflow returns a confirmed success result or a safe failure/recovery result to the caller.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Confirmed success, safe failure/retry or abandoned result | Calling flow | Confirmed terminal result returned by ASF-02. |

### Success return behavior

ASF-02 returns to the calling flow at its next approved step. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- Prevents unauthorized finance, role, suspension, payout, refund, or configuration actions from being completed.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared admin subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter ASF-02 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## ASF-03 — List, Search, Filter and Pagination

> Status: approved; version 0.1; owner: Admin Lead.

### In plain English

Provides the shared way admins browse long operational queues and find records quickly. Repairs operational blockage when the list is too large, the admin needs a specific record, or a queue must be narrowed by status, date, city, provider, risk level, or category.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in ASF-03 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| AF-02 — Admin Dashboard Overview | When the caller needs list, search, filter and pagination to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-03 — User Management | When the caller needs list, search, filter and pagination to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-05 — Task Operations Monitoring | When the caller needs list, search, filter and pagination to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-08 — Finance: Payments, Escrow and Reconciliation | When the caller needs list, search, filter and pagination to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-09 — Withdrawal and Payout Batch Operations | When the caller needs list, search, filter and pagination to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-11 — Task Catalog Management | When the caller needs list, search, filter and pagination to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-15 — Referral Management | When the caller needs list, search, filter and pagination to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-18 — Audit Log Review | When the caller needs list, search, filter and pagination to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-22 — Ratings and Reviews Management | When the caller needs list, search, filter and pagination to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-23 — Basic Analytics and Reports | When the caller needs list, search, filter and pagination to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-24 — Receipt and Transaction Review | When the caller needs list, search, filter and pagination to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| Users, tasks, KYC, reports, finance, payouts, media, referrals, audit logs and monitoring | When the caller needs list, search, filter and pagination to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| Calling-flow context, actor/session and relevant authoritative record | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** The calling flow passes the current record, actor context and requested operation.
2. **System/Actor:** The system validates access and performs Provides the shared way admins browse long operational queues and find records quickly..
3. **System/Actor:** The subflow returns a confirmed success result or a safe failure/recovery result to the caller.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Confirmed success, safe failure/retry or abandoned result | Calling flow | Confirmed terminal result returned by ASF-03. |

### Success return behavior

ASF-03 returns to the calling flow at its next approved step. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- Repairs operational blockage when the list is too large, the admin needs a specific record, or a queue must be narrowed by status, date, city, provider, risk level, or category.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared admin subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter ASF-03 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## ASF-04 — Record Detail Review

> Status: approved; version 0.1; owner: Admin Lead.

### In plain English

Opens the full context of one user, task, payment, withdrawal, report, media item, or provider event. Prevents decisions from being made from summary tables only. It gives the admin enough context before acting.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in ASF-04 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| AF-03 — User Management | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-04 — Tasker and KYC Review | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-05 — Task Operations Monitoring | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-07 — Support Live Chat Operations | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-08 — Finance: Payments, Escrow and Reconciliation | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-09 — Withdrawal and Payout Batch Operations | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-10 — Wallet, Refund and Excess Funding Support | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-14 — Risk, Trust, Warning and Strike Review | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-15 — Referral Management | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-18 — Audit Log Review | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-19 — Use Case Health and Background Job Monitoring | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-20 — Monitoring, Backup and Incident Readiness | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-22 — Ratings and Reviews Management | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-24 — Receipt and Transaction Review | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| Most review and operations flows | When the caller needs record detail review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| Calling-flow context, actor/session and relevant authoritative record | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** The calling flow passes the current record, actor context and requested operation.
2. **System/Actor:** The system validates access and performs Opens the full context of one user, task, payment, withdrawal, report, media item, or provider event..
3. **System/Actor:** The subflow returns a confirmed success result or a safe failure/recovery result to the caller.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Confirmed success, safe failure/retry or abandoned result | Calling flow | Confirmed terminal result returned by ASF-04. |

### Success return behavior

ASF-04 returns to the calling flow at its next approved step. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- Prevents decisions from being made from summary tables only. It gives the admin enough context before acting.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared admin subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter ASF-04 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## ASF-05 — Reason and Audit Confirmation

> Status: approved; version 0.1; owner: Admin Lead.

### In plain English

Requires the admin to provide a reason before high-impact decisions are saved. Creates traceability when an admin suspends a user, rejects KYC, resolves a dispute, retries a payment, changes a wallet, or publishes configuration.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in ASF-05 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| AF-03 — User Management | When the caller needs reason and audit confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-06 — Task Report and Dispute Resolution | When the caller needs reason and audit confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-07 — Support Live Chat Operations | When the caller needs reason and audit confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-09 — Withdrawal and Payout Batch Operations | When the caller needs reason and audit confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-10 — Wallet, Refund and Excess Funding Support | When the caller needs reason and audit confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-11 — Task Catalog Management | When the caller needs reason and audit confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-12 — Service Coverage Configuration | When the caller needs reason and audit confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-13 — Task Media Moderation | When the caller needs reason and audit confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-14 — Risk, Trust, Warning and Strike Review | When the caller needs reason and audit confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-15 — Referral Management | When the caller needs reason and audit confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-16 — Platform Config and Remote Config | When the caller needs reason and audit confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-17 — Admin Users, Roles and Permissions | When the caller needs reason and audit confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-21 — Notifications and Announcements | When the caller needs reason and audit confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-22 — Ratings and Reviews Management | When the caller needs reason and audit confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| Risk, finance, support, task, KYC, media and settings flows | When the caller needs reason and audit confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| Calling-flow context, actor/session and relevant authoritative record | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** The calling flow passes the current record, actor context and requested operation.
2. **System/Actor:** The system validates access and performs Requires the admin to provide a reason before high-impact decisions are saved..
3. **System/Actor:** The subflow returns a confirmed success result or a safe failure/recovery result to the caller.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Confirmed success, safe failure/retry or abandoned result | Calling flow | Confirmed terminal result returned by ASF-05. |

### Success return behavior

ASF-05 returns to the calling flow at its next approved step. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- Creates traceability when an admin suspends a user, rejects KYC, resolves a dispute, retries a payment, changes a wallet, or publishes configuration.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared admin subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter ASF-05 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## ASF-06 — Evidence and Media Review

> Status: approved; version 0.1; owner: Admin Lead.

### In plain English

Lets the admin inspect task proof, completion proof, report evidence, and unsafe uploads. Repairs disputes where the written report is not enough by letting operations inspect photos, videos and metadata.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in ASF-06 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| AF-04 — Tasker and KYC Review | When the caller needs evidence and media review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-05 — Task Operations Monitoring | When the caller needs evidence and media review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-06 — Task Report and Dispute Resolution | When the caller needs evidence and media review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-13 — Task Media Moderation | When the caller needs evidence and media review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-14 — Risk, Trust, Warning and Strike Review | When the caller needs evidence and media review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-04, AF-05, AF-06, AF-13, AF-14 | When the caller needs evidence and media review to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| Calling-flow context, actor/session and relevant authoritative record | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** The calling flow passes the current record, actor context and requested operation.
2. **System/Actor:** The system validates access and performs Lets the admin inspect task proof, completion proof, report evidence, and unsafe uploads..
3. **System/Actor:** The subflow returns a confirmed success result or a safe failure/recovery result to the caller.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Confirmed success, safe failure/retry or abandoned result | Calling flow | Confirmed terminal result returned by ASF-06. |

### Success return behavior

ASF-06 returns to the calling flow at its next approved step. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- Repairs disputes where the written report is not enough by letting operations inspect photos, videos and metadata.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared admin subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter ASF-06 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## ASF-07 — Status Change and Decision Action

> Status: approved; version 0.1; owner: Admin Lead.

### In plain English

Provides the common approve, reject, resolve, enable, disable, suspend, publish and retry pattern. Keeps admin actions consistent across modules and prevents half-completed decisions from leaving records in unclear states.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in ASF-07 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| AF-04 — Tasker and KYC Review | When the caller needs status change and decision action to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-05 — Task Operations Monitoring | When the caller needs status change and decision action to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-06 — Task Report and Dispute Resolution | When the caller needs status change and decision action to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-11 — Task Catalog Management | When the caller needs status change and decision action to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-12 — Service Coverage Configuration | When the caller needs status change and decision action to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-13 — Task Media Moderation | When the caller needs status change and decision action to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-14 — Risk, Trust, Warning and Strike Review | When the caller needs status change and decision action to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-15 — Referral Management | When the caller needs status change and decision action to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-16 — Platform Config and Remote Config | When the caller needs status change and decision action to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-17 — Admin Users, Roles and Permissions | When the caller needs status change and decision action to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-21 — Notifications and Announcements | When the caller needs status change and decision action to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-22 — Ratings and Reviews Management | When the caller needs status change and decision action to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| KYC, tasks, reports, payouts, refunds, media, risk, referrals, config and monitoring | When the caller needs status change and decision action to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| Calling-flow context, actor/session and relevant authoritative record | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** The calling flow passes the current record, actor context and requested operation.
2. **System/Actor:** The system validates access and performs Provides the common approve, reject, resolve, enable, disable, suspend, publish and retry pattern..
3. **System/Actor:** The subflow returns a confirmed success result or a safe failure/recovery result to the caller.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Confirmed success, safe failure/retry or abandoned result | Calling flow | Confirmed terminal result returned by ASF-07. |

### Success return behavior

ASF-07 returns to the calling flow at its next approved step. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- Keeps admin actions consistent across modules and prevents half-completed decisions from leaving records in unclear states.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared admin subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter ASF-07 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## ASF-08 — Export and Report Generation

> Status: approved; version 0.1; owner: Admin Lead.

### In plain English

Generates CSV/PDF-style operational exports for finance, disputes, audit, payout and monitoring reviews. Supports management review, reconciliation and external accountant/legal follow-up without giving direct database access.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in ASF-08 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| AF-08 — Finance: Payments, Escrow and Reconciliation | When the caller needs export and report generation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-18 — Audit Log Review | When the caller needs export and report generation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-19 — Use Case Health and Background Job Monitoring | When the caller needs export and report generation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-20 — Monitoring, Backup and Incident Readiness | When the caller needs export and report generation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-23 — Basic Analytics and Reports | When the caller needs export and report generation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-24 — Receipt and Transaction Review | When the caller needs export and report generation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-08, AF-09, AF-14, AF-18, AF-19, AF-20, AF-23, AF-24 | When the caller needs export and report generation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| Calling-flow context, actor/session and relevant authoritative record | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** The calling flow passes the current record, actor context and requested operation.
2. **System/Actor:** The system validates access and performs Generates CSV/PDF-style operational exports for finance, disputes, audit, payout and monitoring reviews..
3. **System/Actor:** The subflow returns a confirmed success result or a safe failure/recovery result to the caller.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Confirmed success, safe failure/retry or abandoned result | Calling flow | Confirmed terminal result returned by ASF-08. |

### Success return behavior

ASF-08 returns to the calling flow at its next approved step. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- Supports management review, reconciliation and external accountant/legal follow-up without giving direct database access.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared admin subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter ASF-08 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## ASF-09 — Support Live Chat Assignment

> Status: approved; version 0.1; owner: Admin Lead.

### In plain English

Assigns incoming live support sessions to an available admin and shows user/task context beside the conversation. Repairs user problems that cannot be solved by automated flows, especially payment confusion, task issues and safety reports.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in ASF-09 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| AF-06 — Task Report and Dispute Resolution | When the caller needs support live chat assignment to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-07 — Support Live Chat Operations | When the caller needs support live chat assignment to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-10 — Wallet, Refund and Excess Funding Support | When the caller needs support live chat assignment to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-07, AF-10, AF-14 | When the caller needs support live chat assignment to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| Calling-flow context, actor/session and relevant authoritative record | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** The calling flow passes the current record, actor context and requested operation.
2. **System/Actor:** The system validates access and performs Assigns incoming live support sessions to an available admin and shows user/task context beside the conversation..
3. **System/Actor:** The subflow returns a confirmed success result or a safe failure/recovery result to the caller.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Confirmed success, safe failure/retry or abandoned result | Calling flow | Confirmed terminal result returned by ASF-09. |

### Success return behavior

ASF-09 returns to the calling flow at its next approved step. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- Repairs user problems that cannot be solved by automated flows, especially payment confusion, task issues and safety reports.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared admin subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter ASF-09 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## ASF-10 — Provider Reconciliation and Retry

> Status: approved; version 0.1; owner: Admin Lead.

### In plain English

Checks provider events against Work2Cash records and retries failed safe operations where allowed. Fixes mismatches from Paystack, Moniepoint, Smile ID, Termii, FCM, masked call provider, webhooks, BullMQ jobs and payout batches.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in ASF-10 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| AF-04 — Tasker and KYC Review | When the caller needs provider reconciliation and retry to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-08 — Finance: Payments, Escrow and Reconciliation | When the caller needs provider reconciliation and retry to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-09 — Withdrawal and Payout Batch Operations | When the caller needs provider reconciliation and retry to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-10 — Wallet, Refund and Excess Funding Support | When the caller needs provider reconciliation and retry to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-19 — Use Case Health and Background Job Monitoring | When the caller needs provider reconciliation and retry to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-24 — Receipt and Transaction Review | When the caller needs provider reconciliation and retry to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| AF-04, AF-08, AF-09, AF-19 | When the caller needs provider reconciliation and retry to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| Calling-flow context, actor/session and relevant authoritative record | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** The calling flow passes the current record, actor context and requested operation.
2. **System/Actor:** The system validates access and performs Checks provider events against Work2Cash records and retries failed safe operations where allowed..
3. **System/Actor:** The subflow returns a confirmed success result or a safe failure/recovery result to the caller.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Confirmed success, safe failure/retry or abandoned result | Calling flow | Confirmed terminal result returned by ASF-10. |

### Success return behavior

ASF-10 returns to the calling flow at its next approved step. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- Fixes mismatches from Paystack, Moniepoint, Smile ID, Termii, FCM, masked call provider, webhooks, BullMQ jobs and payout batches.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared admin subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter ASF-10 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## ASF-11 — Empty Loading and Error Recovery

> Status: approved; version 0.1; owner: Admin Lead.

### In plain English

This subflow gives every admin page the same understandable states while data is loading, when no records match and when an operation fails. It prevents blank screens, duplicate submissions and errors that leave an operator unsure whether anything changed.

### Why it is reusable

All 24 admin flows fetch information or submit actions. Reusing one pattern makes loading and recovery predictable: fetches use a skeleton shaped like the arriving page, while POST and PATCH actions use a blur overlay with the spinning Work2Cash logo until the backend returns a confirmed result.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| AF-01 to AF-24 | A page or record starts a GET/fetch request. | The calling page with data, an intentional empty state or a recoverable error. |
| AF-01 to AF-24 | An admin submits a POST or PATCH action. | The calling action's confirmed result, validation correction or safe retry state. |
| Any protected admin page | Authentication or permission becomes invalid while loading. | ASF-01 for missing/expired authentication, or the ASF-02 forbidden state for insufficient permission. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| Request kind | Calling page | Distinguish fetch from mutation so the correct blocking behavior is used. |
| Request state | API client | Loading, success, intentional empty, validation error, permission/auth error, retryable failure or unknown outcome. |
| Previous confirmed data | Calling page cache/state | Must remain visibly stale or be replaced only when the new response is authoritative. |
| Retry action | Calling flow | Must repeat only a safe request; mutation retries follow that contract's idempotency rules. |

### Steps

1. **Calling page:** Classifies the operation as a fetch or a state-changing submission.
2. **Dashboard:** Shows a page-shaped skeleton for a fetch, or a blur overlay and spinning Work2Cash logo for a POST/PATCH submission.
3. **Dashboard:** Prevents duplicate submission while a mutation is in flight.
4. **Backend/API client:** Returns confirmed data, an intentional empty result, a validation problem, an authentication/permission problem or a failure.
5. **Dashboard:** Replaces the loading state with the matching result and explains the next safe action in plain language.
6. **Admin:** Corrects input, narrows/clears filters, signs in again, returns to an allowed page or retries when the operation is safe to repeat.
7. **Calling flow:** Resumes at the step that requested the data or action; it never assumes an unknown mutation succeeded.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Loaded view | Calling admin flow | Authoritative data is ready to use. |
| Intentional empty state | Admin operator | The request succeeded but no records match; this is not a system failure. |
| Field or business validation state | Calling form/action | Nothing was applied; the admin can correct documented input. |
| Authentication or permission handoff | ASF-01 or ASF-02 | Access must be restored or the action remains forbidden. |
| Retryable error | Calling flow | The operation did not produce a confirmed result and may be retried under its contract. |
| Unknown mutation outcome | Calling flow and reconciliation path | The UI must fetch authoritative state before offering another mutation. |

### Success return behavior

For a fetch, the calling flow receives authoritative data or an intentional empty result and continues. For a mutation, the overlay closes only after a confirmed response, then the calling flow refreshes or displays the authoritative resulting state.

### Failure return behavior

The subflow keeps the admin in a safe state and states whether anything changed. Validation failures return to the relevant fields. Authentication failures call ASF-01. Permission failures remain forbidden. Network or provider ambiguity after a mutation triggers authoritative refetch or the named reconciliation flow; the UI must not blindly submit the action again.

### Permissions and sensitive data

- Loading and error components must not render protected cached data after authentication or permission is lost.
- Errors show safe operator guidance, not stack traces, provider secrets, raw payloads or sensitive personal data.
- A disabled button or overlay is not authorization; backend permission checks remain mandatory.
- Empty states must distinguish “no matching records” from “you are not allowed to view these records.”
- Monitoring identifiers may be shown when safe, but secrets and raw identity/payment evidence remain hidden.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared skeleton, empty state, blur overlay, spinner, error and retry components | Provide consistent visible state and prevent duplicate interaction. |
| API client | Shared request/error classification | Preserve status and error meaning without treating frontend state as backend truth. |
| Auth | ASF-01 | Repair missing or expired admin authentication. |
| Permission | ASF-02 | Show the correct forbidden state without leaking protected data. |
| Recovery | Calling flow or ASF-10 Provider Reconciliation and Retry | Resolve ambiguous state using the domain's authoritative read/reconciliation behavior. |

### Acceptance criteria

- [ ] Every fetch shows a page-shaped loading state, then data, intentional empty or a clear recoverable error.
- [ ] Every POST/PATCH submission blocks duplicate interaction until a confirmed response or safe recovery state exists.
- [ ] Empty, forbidden, unauthenticated and failed states are visually and verbally distinct.
- [ ] Unknown mutation outcomes are reconciled or refetched rather than assumed successful or retried blindly.
- [ ] Errors expose no stack trace, provider secret or protected record content.
- [ ] Every state returns control to a named step or recovery path in the calling flow.

### Required tests

- [ ] Fetch success, slow loading, intentional empty and retryable failure.
- [ ] Mutation success, validation failure, duplicate-click prevention and network interruption.
- [ ] Expired authentication and insufficient permission during fetch and mutation.
- [ ] Unknown mutation outcome followed by authoritative refetch/reconciliation.
- [ ] Protected cached-data removal after access loss.
- [ ] Error redaction and accessible loading/status announcements.

---

## MF-01 — First App Launch and Entry Decision

> Status: approved; version 0.2; owner: Product Lead.

### In plain English

Decides whether the user should see onboarding, registration, login, or an authenticated home state.

In normal use, show splash/loading state, then check stored session, then if no session, show onboarding/login/register entry, then if session exists, run status recovery, then route user to home or required recovery subflow. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Decides whether the user should see onboarding, registration, login, or an authenticated home state. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Installed app
- Network where available
- Local session storage
- SF-10 Status Recovery / Resume
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| User opens the Work2Cash mobile app. | This condition starts MF-01. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for First App Launch and Entry Decision | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Installed app | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Network where available | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Local session storage | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Show splash/loading state.
2. **System:** Check stored session.
3. **User/System:** If no session, show onboarding/login/register entry.
4. **System:** If session exists, run status recovery.
5. **User/System:** Route user to Home or required recovery subflow.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | If no session, show onboarding/login/register entry. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |
| Branch 2 | If session exists, run status recovery. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Authentication or session record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Guest entry screen | MF-01 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Authenticated Home | MF-01 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Offline/retry state | MF-01 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-01 reaches the ending that requires MF-02 Registration; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-02 Registration | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-01 reaches the ending that requires MF-03 Login / Session Recovery; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-03 Login / Session Recovery | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-01 reaches the ending that requires MF-04 Task Owner Home; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-04 Task Owner Home | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-01 reaches the ending that requires MF-05 Tasker Activation; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-05 Tasker Activation | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Session expired | A clear blocked or failed state; no unconfirmed success is shown. | MF-03 Login / Session Recovery | User logs in again and resumes safely. The flow re-enters at the last valid checkpoint. |
| Network unavailable | A clear blocked or failed state; no unconfirmed success is shown. | SF-10 Status Recovery / Resume | App shows offline state and retries. The flow re-enters at the last valid checkpoint. |
| User profile incomplete | A clear blocked or failed state; no unconfirmed success is shown. | SF-02 Complete Profile | User completes missing data before Home. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Splash | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Session Check | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Guest Entry | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Status Recovery | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Home / Login | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | `POST /auth/refresh`; `GET /me` | Restore or verify the session and return the authoritative next action during app entry. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Show splash/loading state.; Check stored session.; If no session, show onboarding/login/register entry.; If session exists, run status recovery.; Route user to Home or required recovery subflow..
- [ ] Recovery: Session expired.
- [ ] Recovery: Network unavailable.
- [ ] Recovery: User profile incomplete.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-02 — Registration

> Status: approved; version 0.2; owner: Product Lead.

### In plain English

Creates a new Work2Cash user account and brings the user to a complete basic profile.

In normal use, enter registration details, then run otp verification, then create user account, then check profile completeness, then if incomplete, run complete profile, then route user to home. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Creates a new Work2Cash user account and brings the user to a complete basic profile. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- SF-01 OTP Verification
- Backend auth APIs
- User table
- SF-02 Complete Profile
- SF-10 Status Recovery / Resume
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| New user chooses Create Account. | This condition starts MF-02. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Registration | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| SF-01 OTP Verification | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Backend auth APIs | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| User table | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-02 Complete Profile | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Enter registration details.
2. **System:** Run OTP verification.
3. **User/System:** Create user account.
4. **System:** Check profile completeness.
5. **User/System:** If incomplete, run Complete Profile.
6. **System:** Route user to Home.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | If incomplete, run Complete Profile. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Home | MF-02 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| OTP failed/rate-limited | MF-02 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Profile incomplete recovery required | MF-02 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-02 reaches the ending that requires MF-04 Task Owner Home; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-04 Task Owner Home | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-02 reaches the ending that requires MF-05 Tasker Activation; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-05 Tasker Activation | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| OTP not received or expired | A clear blocked or failed state; no unconfirmed success is shown. | SF-01 OTP Verification | User retries email or SMS fallback. The flow re-enters at the last valid checkpoint. |
| User exits after account creation but before profile completion | A clear blocked or failed state; no unconfirmed success is shown. | MF-03 Login / Session Recovery + SF-02 Complete Profile | Login detects incomplete profile and repairs the registration gap. The flow re-enters at the last valid checkpoint. |
| Network fails after submit | A clear blocked or failed state; no unconfirmed success is shown. | SF-10 Status Recovery / Resume | App checks whether account was created before retrying. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Register Details | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | OTP | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Create Account | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Complete Profile | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Home | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | `POST /auth/register`; `POST /auth/otp/send`; `POST /auth/otp/verify`; `GET /me`; `PATCH /me/profile`; `POST /me/security-pin/setup` | Create and verify the account, then expose required onboarding actions. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Enter registration details.; Run OTP verification.; Create user account.; Check profile completeness.; If incomplete, run Complete Profile.; Route user to Home..
- [ ] Recovery: OTP not received or expired.
- [ ] Recovery: User exits after account creation but before profile completion.
- [ ] Recovery: Network fails after submit.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-03 — Login / Session Recovery

> Status: approved; version 0.2; owner: Product Lead.

### In plain English

Authenticates returning users and repairs any incomplete onboarding state left by registration, KYC, or profile setup.

In normal use, enter login details, then verify credentials/otp, then fetch current user state, then check profile complete, then if profile incomplete, run complete profile, then check selected mode, then if tasker mode requires kyc/profile, route to tasker activation or kyc status, then otherwise route to home. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Authenticates returning users and repairs any incomplete onboarding state left by registration, KYC, or profile setup. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Existing account
- Auth APIs
- User/Profile APIs
- SF-01 OTP Verification
- SF-02 Complete Profile
- SF-03 Tasker KYC
- SF-10 Status Recovery / Resume
- SF-11 Password Recovery
- SF-13 Google / Apple Social Authentication
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Existing user logs in, session expires, or app resumes with uncertain state. | This condition starts MF-03. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Login / Session Recovery | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Existing account | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Auth APIs | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| User/Profile APIs | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-01 OTP Verification | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-02 Complete Profile | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-03 Tasker KYC | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-11 Password Recovery | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-13 Google / Apple Social Authentication | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Enter login details.
2. **System:** Verify credentials/OTP.
3. **User/System:** Fetch current user state.
4. **System:** Check profile complete.
5. **User/System:** If profile incomplete, run Complete Profile.
6. **System:** Check selected mode.
7. **User/System:** If Tasker mode requires KYC/profile, route to Tasker Activation or KYC status.
8. **System:** Otherwise route to Home.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | If profile incomplete, run Complete Profile. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |
| Branch 2 | If Tasker mode requires KYC/profile, route to Tasker Activation or KYC status. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |
| Branch 3 | Otherwise route to Home. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Authentication or session record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Task Owner Home | MF-03 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Tasker Home | MF-03 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Complete Profile | MF-03 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| KYC pending/rejected/manual review | MF-03 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Login failed | MF-03 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-03 reaches the ending that requires MF-04 Task Owner Home; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-04 Task Owner Home | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-03 reaches the ending that requires MF-05 Tasker Activation; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-05 Tasker Activation | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-03 reaches the ending that requires MF-06 Task Owner Create Task; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-06 Task Owner Create Task | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-03 reaches the ending that requires MF-09 Tasker Browse and Accept Task; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-09 Tasker Browse and Accept Task | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Profile incomplete from abandoned registration | A clear blocked or failed state; no unconfirmed success is shown. | SF-02 Complete Profile | Login repairs the abandoned registration flow. The flow re-enters at the last valid checkpoint. |
| Tasker KYC incomplete | A clear blocked or failed state; no unconfirmed success is shown. | SF-03 Tasker KYC | User completes or waits for KYC before Tasker actions. The flow re-enters at the last valid checkpoint. |
| User forgot password | A clear blocked or failed state; no unconfirmed success is shown. | SF-11 Password Recovery | User resets password through OTP recovery and returns to Login. The flow re-enters at the last valid checkpoint. |
| User chooses Google or Apple sign-in | A clear blocked or failed state; no unconfirmed success is shown. | Social login branch | Google/Apple authenticate the user, then Work2Cash runs the same profile/KYC/status checks. The flow re-enters at the last valid checkpoint. |
| Session stale or app was closed during provider callback | A clear blocked or failed state; no unconfirmed success is shown. | SF-10 Status Recovery / Resume | Backend state decides the correct next screen. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Login Details | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Verify Login | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | State Check | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Profile/KYC Repair | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Home | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | `POST /auth/login`; `POST /auth/social/google`; `POST /auth/social/apple`; `POST /auth/refresh`; `GET /me` | Authenticate or recover the session and route by `nextRequiredAction`. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Enter login details.; Verify credentials/OTP.; Fetch current user state.; Check profile complete.; If profile incomplete, run Complete Profile.; Check selected mode.; If Tasker mode requires KYC/profile, route to Tasker Activation or KYC status.; Otherwise route to Home..
- [ ] Recovery: Profile incomplete from abandoned registration.
- [ ] Recovery: Tasker KYC incomplete.
- [ ] Recovery: User forgot password.
- [ ] Recovery: User chooses Google or Apple sign-in.
- [ ] Recovery: Session stale or app was closed during provider callback.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-04 — Task Owner Home

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Acts as the Task Owner operating hub after login or registration.

In normal use, show active tasks, wallet/credits, notifications, and quick actions, then user can post task, view task history, manage favorites, open support, or switch mode, then app refreshes state from backend on launch/reconnect. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Acts as the Task Owner operating hub after login or registration. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Authenticated user
- Profile complete
- SF-10 Status Recovery / Resume
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| User lands in Task Owner mode with valid profile. | This condition starts MF-04. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Task Owner Home | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Authenticated user | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Profile complete | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Show active tasks, wallet/credits, notifications, and quick actions.
2. **System:** User can post task, view task history, manage favorites, open support, or switch mode.
3. **User/System:** App refreshes state from backend on launch/reconnect.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Authentication or session record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Rating, review or favorite record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Home active | MF-04 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Post Task selected | MF-04 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Support selected | MF-04 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Mode switch selected | MF-04 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-04 reaches the ending that requires MF-06 Task Owner Create and Fund Task; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-06 Task Owner Create and Fund Task | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-04 reaches the ending that requires MF-15 Favorites; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-15 Favorites | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-04 reaches the ending that requires MF-16 Support Live Chat; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-16 Support Live Chat | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-04 reaches the ending that requires MF-05 Tasker Activation; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-05 Tasker Activation | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Profile becomes incomplete due to missing required field | A clear blocked or failed state; no unconfirmed success is shown. | SF-02 Complete Profile | User fixes profile before critical actions. The flow re-enters at the last valid checkpoint. |
| Session expires | A clear blocked or failed state; no unconfirmed success is shown. | MF-03 Login / Session Recovery | User logs in and returns. The flow re-enters at the last valid checkpoint. |
| Network unavailable | A clear blocked or failed state; no unconfirmed success is shown. | SF-10 Status Recovery / Resume | User sees cached/empty/offline state and retry. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Task Owner Home | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Active Tasks | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Wallet/Alerts | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Quick Actions | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Next Flow | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Show active tasks, wallet/credits, notifications, and quick actions.; User can post task, view task history, manage favorites, open support, or switch mode.; App refreshes state from backend on launch/reconnect..
- [ ] Recovery: Profile becomes incomplete due to missing required field.
- [ ] Recovery: Session expires.
- [ ] Recovery: Network unavailable.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-05 — Tasker Activation

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Turns a normal user account into an eligible Tasker account through profile, skills, location readiness, and KYC.

In normal use, check profile complete, then if incomplete, run complete profile, then create or continue taskerprofile, then select task categories/skills, then set bio, availability, and travel preferences, then run kyc, then if approved, set taskerprofile active, then user can enter tasker home. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Turns a normal user account into an eligible Tasker account through profile, skills, location readiness, and KYC. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Authenticated user
- Profile complete
- Smile ID KYC
- Task categories
- SF-02 Complete Profile
- SF-03 Tasker KYC
- SF-04 Location, Address and Pin Confirmation
- SF-09 Permission Recovery
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| User taps Become a Tasker or switches to Tasker mode without an active TaskerProfile. | This condition starts MF-05. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Tasker Activation | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Authenticated user | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Profile complete | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Smile ID KYC | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Task categories | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-02 Complete Profile | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-03 Tasker KYC | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-04 Location, Address and Pin Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-09 Permission Recovery | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Check profile complete.
2. **System:** If incomplete, run Complete Profile.
3. **User/System:** Create or continue TaskerProfile.
4. **System:** Select task categories/skills.
5. **User/System:** Set bio, availability, and travel preferences.
6. **System:** Run KYC.
7. **User/System:** If approved, set TaskerProfile active.
8. **System:** User can enter Tasker Home.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | If incomplete, run Complete Profile. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |
| Branch 2 | If approved, set TaskerProfile active. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Tasker active | MF-05 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| KYC pending | MF-05 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| KYC rejected/manual review | MF-05 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Activation abandoned | MF-05 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-05 reaches the ending that requires MF-09 Tasker Browse and Accept Task; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-09 Tasker Browse and Accept Task | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-05 reaches the ending that requires MF-13 Tasker Withdrawal; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-13 Tasker Withdrawal | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Profile incomplete | A clear blocked or failed state; no unconfirmed success is shown. | SF-02 Complete Profile | User completes basic identity/profile first. The flow re-enters at the last valid checkpoint. |
| KYC pending/rejected | A clear blocked or failed state; no unconfirmed success is shown. | SF-03 Tasker KYC | Tasker actions remain locked until KYC approved. The flow re-enters at the last valid checkpoint. |
| Location permission denied | A clear blocked or failed state; no unconfirmed success is shown. | SF-09 Permission Recovery | Tasker cannot become available until location requirement is solved. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Become Tasker | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Tasker Profile | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Skills | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | KYC | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Tasker Home | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Check profile complete.; If incomplete, run Complete Profile.; Create or continue TaskerProfile.; Select task categories/skills.; Set bio, availability, and travel preferences.; Run KYC.; If approved, set TaskerProfile active.; User can enter Tasker Home..
- [ ] Recovery: Profile incomplete.
- [ ] Recovery: KYC pending/rejected.
- [ ] Recovery: Location permission denied.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-06 — Task Owner Create and Fund Task

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

A Task Owner describes the work they need, confirms where and when it should happen, uploads proof of the work to be done, reviews the price and fees, and pays through Paystack or Moniepoint. Work2Cash does not publish the task until the backend confirms the payment and holds the task funds in escrow. The Task Owner then chooses either public discovery or a direct offer to a favorite Tasker.

### Why this flow exists

The flow turns a person's request for help into a funded, valid and safe marketplace task. It ensures that Taskers receive enough information to assess the work and that money is secured before matching begins.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Task Owner | Describes the work, confirms the location and time, uploads proof, reviews cost and chooses how to find a Tasker. |
| Mobile app | Guides the Task Owner through the steps, validates inputs and displays backend truth. |
| Backend | Saves the draft, validates business rules, creates payment intent, verifies payment and creates escrow. |
| Google Maps adapter | Converts a manual address to coordinates and supports pin confirmation. |
| Object storage | Receives protected task-proof photos or videos. |
| Paystack or Moniepoint | Collects payment and sends a provider result that the backend verifies. |

### Before this flow begins

- The Task Owner is authenticated.
- The Task Owner profile contains the minimum required identity and contact information.
- The selected task category and task type are active in the approved catalog.
- The task site can be confirmed inside Nigeria.
- At least one approved payment provider is available.
- The mobile app can recover draft, media and payment state from the backend after interruption.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Post Task action | The Task Owner starts a new task from Home or another approved entry point. |
| Resume draft | The Task Owner returns to a previously saved incomplete task. |
| Rebook | MF-24 creates a new draft from a completed task while preserving the original task. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Category and task type | Defines the approved kind of work. | Admin-managed catalog. |
| Description | Tells the Tasker what must be done. | Task Owner. |
| Required arrival time | Allows a Tasker to confirm they can arrive on time. | Task Owner. |
| Confirmed task location | Supports matching, ETA and later address access rules. | GPS or manually entered address confirmed on a map. |
| Proof of work to be done | Gives Taskers and operations evidence of the starting condition. | Task Owner photo or video. |
| Task amount and fees | Shows the full cost before payment. | Backend pricing and fee rules. |
| Payment result | Determines whether the task can proceed to matching. | Backend-verified Paystack or Moniepoint state. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Approved task catalog | Supplies valid categories, task types and any configured minimum amount. | Selected category and task type are enabled for new tasks. |
| SF-04 — Location, Address and Pin Confirmation | Produces an authoritative Nigerian task location from GPS or manual address entry. | Pin is confirmed and passes coverage rules. |
| SF-05 — Media Upload | Uploads and finalizes protected proof media. | Required proof is active and associated with the draft. |
| SF-06 — Payment and Escrow Funding | Creates payment intent, verifies provider truth and creates held escrow. | Payment is backend-confirmed before publishing. |
| SF-10 — Status Recovery and Resume | Restores draft and payment state after app close, network loss or provider return. | Backend state remains authoritative. |

### Verbal walkthrough

1. **Task Owner:** Opens Post Task or resumes an existing draft.
2. **Mobile app:** Loads the current approved categories and task types.
3. **Task Owner:** Selects a category and task type and describes the work.
4. **Backend:** Creates or updates the task draft so progress is not held only in local memory.
5. **Task Owner:** Sets the required arrival time.
6. **Task Owner:** Uses GPS or enters an address manually.
7. **Backend and maps adapter:** Geocode the manual address where necessary, confirm the pin and reject a task site outside Nigeria.
8. **Task Owner:** Uploads the required photo or video showing the work to be done.
9. **Backend and object storage:** Finalize protected media and associate it with the draft.
10. **Mobile app:** Requests and displays the task amount, service or processing fee and total payable amount.
11. **Task Owner:** Confirms the review and chooses Paystack or Moniepoint.
12. **Backend:** Creates an idempotent payment intent and returns the supported provider action.
13. **Provider:** Processes the payment and redirects or reports status.
14. **Backend:** Verifies the provider result or signed webhook. A frontend redirect alone never marks the task paid.
15. **Backend:** Marks successful payment, creates held escrow and makes the funded task eligible for matching.
16. **Task Owner:** Chooses public discovery or a direct offer to a favorite Tasker.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Save and leave | Required details are not complete or the Task Owner chooses to stop. | Draft remains saved and unpublished. | Resume MF-06 later from the last valid checkpoint. |
| Public discovery | Payment and escrow are confirmed and the Task Owner wants eligible Taskers to express interest. | Funded task becomes available through controlled public discovery. | Continue to MF-07 — Public Discovery and Tasker Interest. |
| Direct offer | Payment and escrow are confirmed and the Task Owner selects an eligible favorite Tasker. | A durable direct offer is created. | Continue to MF-08 — Direct Offer to Favorite Tasker. |
| Payment pending | Provider processing or webhook confirmation is incomplete. | Task remains funded-pending and cannot be published. | SF-10 refreshes backend status until success, failure or expiry. |
| Payment failed or expired | Backend-confirmed provider state is failed or expired. | No matching begins and no held escrow is treated as available. | Task Owner can retry through SF-06 with an idempotent new attempt. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task | Create or update | Moves from draft details toward funded matching eligibility. |
| TaskLocation | Create or update before funding | Stores the confirmed task site and Nigeria validation result. |
| TaskMedia | Create and finalize | Stores protected owner proof metadata and access state. |
| PaymentAttempt | Create or update | Tracks one idempotent provider attempt. |
| Payment | Create or update | Stores backend-confirmed provider collection state. |
| ProviderWebhookEvent | Create | Preserves provider callback identity and processing status. |
| Escrow | Create after confirmed payment | Holds task funds before completion or resolution. |
| TaskStatusEvent | Create for important state changes | Preserves the task timeline for recovery and operations. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Provider request | Creates payment intent with Paystack or Moniepoint. | Selected payment provider. |
| Webhook/verification job | Reconciles provider truth safely and idempotently. | Payment use case and admin finance monitoring. |
| Audit/operations visibility | Makes draft, media, payment and escrow state observable. | Admin task and finance operations. |
| Notification | Confirms funded, pending or failed outcome without claiming success prematurely. | Task Owner. |
| Matching handoff | Broadcasts publicly or creates a direct offer only after funding. | Eligible Taskers or selected favorite Tasker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Funded for public discovery | Payment is verified and escrow is held. | Task Owner can wait for eligible Tasker interest. | MF-07 handles discovery and candidate selection. |
| Direct offer created | Payment is verified and an eligible favorite receives a durable offer. | Task Owner sees offer status. | MF-08 handles accept, decline or expiry. |
| Draft saved | The task is incomplete or deliberately paused. | Nothing is published and no Tasker is matched. | Resume MF-06. |
| Payment pending | Provider truth is not final. | Task Owner sees a pending state and safe refresh option. | Status recovery and reconciliation continue. |
| Payment failed or expired | The payment attempt did not fund the task. | Task remains unpublished. | Retry or keep the draft. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Funded task and public matching selected | MF-07 — Public Discovery and Tasker Interest | Eligible Taskers can discover the task and express interest. |
| Funded task and favorite Tasker selected | MF-08 — Direct Offer to Favorite Tasker | The selected Tasker can accept, decline or let the offer expire. |
| Incomplete draft | Draft list or MF-06 resume checkpoint | The Task Owner must finish missing details before payment or matching. |
| Payment unresolved | SF-10 — Status Recovery and Resume | Backend truth must be refreshed before any next business action. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| GPS denied or inaccurate | Location cannot be confirmed automatically. | Explain permission need, allow retry and provide manual address plus pin confirmation. | Return to the location step after a valid pin is confirmed. |
| Address resolves outside Nigeria | The task site is not accepted. | Ask the Task Owner to correct the address or pin. | Continue from location after Nigeria validation passes. |
| Media upload fails | File remains failed or incomplete; submission cannot continue. | Retry, remove or replace the file without duplicating finalized media. | Return to proof review when required media is active. |
| Network fails after draft save | App shows offline/retry state. | Reload the draft from the backend when connectivity returns. | Resume from the last backend-confirmed checkpoint. |
| Provider redirect closes | App must not show confirmed payment. | Fetch payment and task status from the backend. | Continue at pending, failed or funded result returned by the backend. |
| Webhook is delayed or duplicated | Payment remains pending or the duplicate is ignored safely. | Reconciliation uses provider reference and unique event/idempotency rules. | Resume only after one authoritative result is recorded. |
| Provider is unavailable | Selected option is temporarily unavailable. | Preserve the draft and allow an enabled alternate provider or later retry. | Return to payment selection without recreating the task. |

### Business rules

- The task site must be in Nigeria.
- The task must use an approved active category and task type.
- The minimum task amount and configured fee rules must be enforced by the backend.
- Required owner proof media must be finalized before funding completes.
- Exact address and full proof media remain permission-controlled.
- Payment success comes from backend verification or verified provider events, never the redirect screen alone.
- Escrow must be created only from an authoritative successful payment outcome.
- Matching begins only after payment and escrow readiness.
- Public discovery and direct offers are durable REST/database behavior; direct offers are notified through FCM rather than Socket.IO.

### Forbidden behavior

- Do not add Facebook login or unrelated onboarding behavior to this flow.
- Do not make card-entry-first payment the default experience.
- Do not publish an unfunded task.
- Do not call paid map or payment-provider operations in uncontrolled refresh loops.
- Do not expose exact addresses or full proof media publicly.
- Do not treat local mobile state as payment, escrow or task truth.
- Do not reuse a completed task record when rebooking; create a new draft.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Task type selection | Select approved category and task type. | A valid selection is made. |
| 2 | Task details | Describe the work and required arrival time. | Required details pass validation and draft is saved. |
| 3 | Location confirmation | Confirm GPS or manual address on a map. | Nigeria validation and pin confirmation pass. |
| 4 | Proof upload | Add required photo or video. | Required media is finalized. |
| 5 | Price review | Show task amount, fee and total. | Task Owner confirms the review. |
| 6 | Payment | Start provider action and show safe pending/recovery states. | Backend returns funded, pending, failed or expired truth. |
| 7 | Matching choice | Choose public discovery or direct favorite offer. | Funded task is handed to MF-07 or MF-08. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| Draft API | `POST /task-owner/tasks/drafts`, task update contract | Save progress and validate accepted task fields. |
| Location API | `POST /location/geocode`, `POST /location/confirm-pin` | Produce and confirm an authoritative Nigerian task site. |
| Media API | Task-owner media upload/finalize contracts | Protect and associate required proof media. |
| Payment API | `POST /payment-intent`, payment status/verify contract | Create idempotent provider attempts and return backend truth. |
| Provider callbacks | Paystack and Moniepoint webhooks | Verify signatures, deduplicate events and reconcile payment. |
| Data | Task, TaskLocation, TaskMedia, PaymentAttempt, Payment, ProviderWebhookEvent, Escrow, TaskStatusEvent | Persist durable business state and recovery evidence. |
| Notifications | FCM/in-app where applicable | Report task/payment outcome and matching handoff. |

### Acceptance criteria

- [ ] Given an authenticated Task Owner, when valid task details are entered, the backend saves a recoverable draft.
- [ ] A task site outside Nigeria is rejected before funding.
- [ ] Required proof media must be finalized before the funded task becomes matchable.
- [ ] The Task Owner sees task amount, fee and total before confirming payment.
- [ ] A frontend redirect never marks a task paid without backend verification.
- [ ] Duplicate provider events cannot create duplicate payment, escrow or task transitions.
- [ ] A pending or interrupted payment resumes from backend truth.
- [ ] Public discovery is available only after payment and escrow confirmation.
- [ ] A direct offer is created through durable REST state and notified without making the offer Socket-based.
- [ ] Protected location and media are not exposed to ineligible users.

### Required tests

- [ ] Complete funded public-discovery path.
- [ ] Complete funded direct-offer path.
- [ ] Draft save and resume after app restart.
- [ ] GPS denial and manual-address recovery.
- [ ] Outside-Nigeria location rejection.
- [ ] Media upload retry, replace and duplicate-finalize protection.
- [ ] Payment success, pending, failure, expiry and provider return recovery.
- [ ] Duplicate webhook and duplicate payment-intent idempotency.
- [ ] Provider outage and alternate-provider behavior.
- [ ] Address, media and provider-payload privacy.
- [ ] Admin task/finance visibility after funding.

### Out of scope

- Tasker discovery and candidate selection after publication.
- Task execution, completion and settlement.
- Admin task reassignment, which is forbidden.
- Promo codes, subscriptions, loyalty and other deferred pricing features.
- Automatic Tasker acceptance.

---

## MF-07 — Public Discovery and Tasker Interest

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Lets eligible Taskers find funded public tasks while Task Owners choose based on profile and ETA.

In normal use, task appears in tasker available tasks list, then taskers browse tasks sorted nearest first, then taskers filter by location/category/time, then tasker opens limited task preview, then tasker confirms ability to arrive by required time, then backend calculates eta, then task owner reviews tasker profile and eta, then task owner accepts or rejects tasker. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Lets eligible Taskers find funded public tasks while Task Owners choose based on profile and ETA. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Funded task
- Tasker in Nigeria
- Tasker KYC approved
- Tasker location available
- SF-04 Location, Address and Pin Confirmation
- SF-10 Status Recovery / Resume
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Task Owner chooses public discovery after funding a task. | This condition starts MF-07. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Public Discovery and Tasker Interest | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Funded task | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Tasker in Nigeria | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Tasker KYC approved | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Tasker location available | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-04 Location, Address and Pin Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Task appears in Tasker available tasks list.
2. **System:** Taskers browse tasks sorted nearest first.
3. **User/System:** Taskers filter by location/category/time.
4. **System:** Tasker opens limited task preview.
5. **User/System:** Tasker confirms ability to arrive by required time.
6. **System:** Backend calculates ETA.
7. **User/System:** Task Owner reviews Tasker profile and ETA.
8. **System:** Task Owner accepts or rejects Tasker.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Tasker accepted | MF-07 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Tasker rejected | MF-07 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Task expires | MF-07 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Task cancelled | MF-07 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-07 reaches the ending that requires MF-10 Active Task Execution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-10 Active Task Execution | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-07 reaches the ending that requires MF-11 Task Owner Rejection; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-11 Task Owner Rejection | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-07 reaches the ending that requires MF-12 Cancellation / No-Show; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-12 Cancellation / No-Show | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Tasker outside Nigeria | A clear blocked or failed state; no unconfirmed success is shown. | SF-04 Location validation | Tasker cannot accept until inside Nigeria. The flow re-enters at the last valid checkpoint. |
| Tasker cannot meet arrival time | A clear blocked or failed state; no unconfirmed success is shown. | Tasker exits flow | Task remains available to other Taskers. The flow re-enters at the last valid checkpoint. |
| Task Owner rejects Tasker | A clear blocked or failed state; no unconfirmed success is shown. | MF-11 Task Owner Rejection | Task returns to discovery or another Tasker selection. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not treat a frontend payment redirect as final payment proof or introduce card-entry-first UX.
- Do not introduce paid-provider auto-refresh loops; use backend-controlled status and recovery.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Available Task | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Tasker Interest | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | ETA Review | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Owner Decision | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Accepted / Rejected | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Task appears in Tasker available tasks list.; Taskers browse tasks sorted nearest first.; Taskers filter by location/category/time.; Tasker opens limited task preview.; Tasker confirms ability to arrive by required time.; Backend calculates ETA.; Task Owner reviews Tasker profile and ETA.; Task Owner accepts or rejects Tasker..
- [ ] Recovery: Tasker outside Nigeria.
- [ ] Recovery: Tasker cannot meet arrival time.
- [ ] Recovery: Task Owner rejects Tasker.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-08 — Direct Offer to Favorite Tasker

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Lets a Task Owner send a funded task directly to a trusted favorite Tasker without public discovery first.

In normal use, backend creates directtaskoffer, then tasker receives fcm notification, then tasker opens offer, then tasker confirms arrival ability, then tasker accepts or declines through api, then if accepted, task locks to tasker, then if declined/expired, task owner can send to another favorite, convert to public discovery, or cancel. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Lets a Task Owner send a funded task directly to a trusted favorite Tasker without public discovery first. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Funded task
- FavoriteTasker active
- Tasker eligible and in Nigeria
- FCM
- SF-10 Status Recovery / Resume
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Task Owner chooses favorite Tasker after funding task. | This condition starts MF-08. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Direct Offer to Favorite Tasker | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Funded task | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| FavoriteTasker active | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Tasker eligible and in Nigeria | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| FCM | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Backend creates DirectTaskOffer.
2. **System:** Tasker receives FCM notification.
3. **User/System:** Tasker opens offer.
4. **System:** Tasker confirms arrival ability.
5. **User/System:** Tasker accepts or declines through API.
6. **System:** If accepted, task locks to Tasker.
7. **User/System:** If declined/expired, Task Owner can send to another favorite, convert to public discovery, or cancel.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | If accepted, task locks to Tasker. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |
| Branch 2 | If declined/expired, Task Owner can send to another favorite, convert to public discovery, or cancel. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Rating, review or favorite record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Direct offer accepted | MF-08 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Declined | MF-08 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Expired | MF-08 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Converted to public discovery | MF-08 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-08 reaches the ending that requires MF-10 Active Task Execution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-10 Active Task Execution | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-08 reaches the ending that requires MF-07 Public Discovery and Tasker Interest; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-07 Public Discovery and Tasker Interest | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-08 reaches the ending that requires MF-12 Cancellation / No-Show; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-12 Cancellation / No-Show | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Tasker does not respond | A clear blocked or failed state; no unconfirmed success is shown. | Direct offer expiry handling | Task Owner can retry another favorite or convert to public discovery. The flow re-enters at the last valid checkpoint. |
| Tasker unavailable/outside Nigeria | A clear blocked or failed state; no unconfirmed success is shown. | Offer decline/unavailable state | Task Owner selects another path. The flow re-enters at the last valid checkpoint. |
| FCM not delivered | A clear blocked or failed state; no unconfirmed success is shown. | REST status refresh | Tasker sees offer when app opens. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not treat a frontend payment redirect as final payment proof or introduce card-entry-first UX.
- Do not introduce paid-provider auto-refresh loops; use backend-controlled status and recovery.
- Do not make direct offers socket-based; their state is durable REST state.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Favorite Taskers | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Select Favorite | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Send Offer | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Tasker Response | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Accepted / Convert | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Backend creates DirectTaskOffer.; Tasker receives FCM notification.; Tasker opens offer.; Tasker confirms arrival ability.; Tasker accepts or declines through API.; If accepted, task locks to Tasker.; If declined/expired, Task Owner can send to another favorite, convert to public discovery, or cancel..
- [ ] Recovery: Tasker does not respond.
- [ ] Recovery: Tasker unavailable/outside Nigeria.
- [ ] Recovery: FCM not delivered.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-09 — Tasker Browse and Accept Task

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Lets an active Tasker find and commit to available work.

In normal use, confirm taskerprofile active and kyc approved, then confirm tasker is in nigeria, then show available tasks sorted nearest first, then tasker filters by location/category/time, then tasker opens limited preview, then tasker confirms arrival ability, then tasker submits interest or accepts direct offer, then wait for task owner acceptance where public discovery applies. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Lets an active Tasker find and commit to available work. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Tasker active
- KYC approved
- Location available
- Task availability
- SF-03 Tasker KYC
- SF-04 Location, Address and Pin Confirmation
- SF-09 Permission Recovery
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Tasker opens Tasker Home or receives direct offer notification. | This condition starts MF-09. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Tasker Browse and Accept Task | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Tasker active | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| KYC approved | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Location available | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Task availability | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-03 Tasker KYC | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-04 Location, Address and Pin Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-09 Permission Recovery | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Confirm TaskerProfile active and KYC approved.
2. **System:** Confirm Tasker is in Nigeria.
3. **User/System:** Show available tasks sorted nearest first.
4. **System:** Tasker filters by location/category/time.
5. **User/System:** Tasker opens limited preview.
6. **System:** Tasker confirms arrival ability.
7. **User/System:** Tasker submits interest or accepts direct offer.
8. **System:** Wait for Task Owner acceptance where public discovery applies.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Task accepted by owner | MF-09 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Waiting for owner decision | MF-09 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Rejected | MF-09 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| No eligible tasks | MF-09 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-09 reaches the ending that requires MF-10 Active Task Execution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-10 Active Task Execution | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-09 reaches the ending that requires MF-09 Tasker Browse and Accept Task; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-09 Tasker Browse and Accept Task | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| KYC not approved | A clear blocked or failed state; no unconfirmed success is shown. | SF-03 Tasker KYC | Tasker cannot accept until approved. The flow re-enters at the last valid checkpoint. |
| Location permission denied | A clear blocked or failed state; no unconfirmed success is shown. | SF-09 Permission Recovery | Tasker cannot receive/accept tasks while unavailable. The flow re-enters at the last valid checkpoint. |
| Task Owner rejects Tasker | A clear blocked or failed state; no unconfirmed success is shown. | MF-11 Task Owner Rejection | Tasker returns to browse list. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Tasker Home | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Task List | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Task Preview | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Arrival Confirm | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Interest / Accept | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Confirm TaskerProfile active and KYC approved.; Confirm Tasker is in Nigeria.; Show available tasks sorted nearest first.; Tasker filters by location/category/time.; Tasker opens limited preview.; Tasker confirms arrival ability.; Tasker submits interest or accepts direct offer.; Wait for Task Owner acceptance where public discovery applies..
- [ ] Recovery: KYC not approved.
- [ ] Recovery: Location permission denied.
- [ ] Recovery: Task Owner rejects Tasker.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-10 — Active Task Execution

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Coordinates the accepted task from journey start to completion request.

In normal use, enable task chat, voice messages, masked calls, and live tracking, then tasker taps start journey, then eta guard uses 5 minutes plus 10% journey milestone, then tasker taps i have arrived, then tasker taps begin task, then tasker performs work, then tasker uploads proof of work done, then tasker requests completion, then task owner confirms or reports issue. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Coordinates the accepted task from journey start to completion request. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Accepted task
- Funded escrow
- Tasker location
- Communication permissions where used
- SF-05 Media Upload
- SF-07 Communication
- SF-08 Report / Dispute
- SF-10 Status Recovery / Resume
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Task Owner accepts Tasker or direct offer is accepted. | This condition starts MF-10. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Active Task Execution | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Accepted task | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Funded escrow | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Tasker location | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Communication permissions where used | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-05 Media Upload | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-07 Communication | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-08 Report / Dispute | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Enable task chat, voice messages, masked calls, and live tracking.
2. **System:** Tasker taps Start Journey.
3. **User/System:** ETA guard uses 5 minutes plus 10% journey milestone.
4. **System:** Tasker taps I have arrived.
5. **User/System:** Tasker taps Begin Task.
6. **System:** Tasker performs work.
7. **User/System:** Tasker uploads proof of work done.
8. **System:** Tasker requests completion.
9. **User/System:** Task Owner confirms or reports issue.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Completion requested | MF-10 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Cancelled | MF-10 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| No-show reported | MF-10 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Dispute/report opened | MF-10 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-10 reaches the ending that requires MF-14 Completion and Settlement; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-14 Completion and Settlement | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-10 reaches the ending that requires MF-12 Cancellation / No-Show; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-12 Cancellation / No-Show | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-10 reaches the ending that requires MF-16 Support Live Chat; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-16 Support Live Chat | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Tasker late beyond grace period | A clear blocked or failed state; no unconfirmed success is shown. | MF-12 Cancellation / No-Show or SF-08 Report / Dispute | Task Owner may report late/no-show after grace period. The flow re-enters at the last valid checkpoint. |
| Communication needed | A clear blocked or failed state; no unconfirmed success is shown. | SF-07 Communication | Task parties coordinate through approved channels. The flow re-enters at the last valid checkpoint. |
| Completion proof upload fails | A clear blocked or failed state; no unconfirmed success is shown. | SF-05 Media Upload | Tasker retries before completion request can proceed. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Accepted Task | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Start Journey | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | I Have Arrived | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Begin Task | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Completion Proof | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |
| 6 | Request Complete | Represents step 6 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Enable task chat, voice messages, masked calls, and live tracking.; Tasker taps Start Journey.; ETA guard uses 5 minutes plus 10% journey milestone.; Tasker taps I have arrived.; Tasker taps Begin Task.; Tasker performs work.; Tasker uploads proof of work done.; Tasker requests completion.; Task Owner confirms or reports issue..
- [ ] Recovery: Tasker late beyond grace period.
- [ ] Recovery: Communication needed.
- [ ] Recovery: Completion proof upload fails.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-11 — Task Owner Rejection

> Status: approved; version 0.2; owner: Product Lead.

### In plain English

Lets the Task Owner reject a Tasker within controlled rules without breaking the task.

In normal use, task owner taps reject, then select rejection reason, then backend checks task state and rejection window, then log taskownerrejection, then if movement-stage rejection repeats, create warning/risk flag, then task returns to discovery/direct-offer options. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Lets the Task Owner reject a Tasker within controlled rules without breaking the task. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Tasker interest/acceptance state
- Task not started
- Rejection policy
- SF-08 Report / Dispute where rejection is contested
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Task Owner rejects an interested or accepted Tasker before movement, or within 5 minutes after Tasker marks en route. | This condition starts MF-11. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Task Owner Rejection | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Tasker interest/acceptance state | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Task not started | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Rejection policy | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-08 Report / Dispute where rejection is contested | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Task Owner taps reject.
2. **System:** Select rejection reason.
3. **User/System:** Backend checks task state and rejection window.
4. **System:** Log TaskOwnerRejection.
5. **User/System:** If movement-stage rejection repeats, create warning/risk flag.
6. **System:** Task returns to discovery/direct-offer options.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | If movement-stage rejection repeats, create warning/risk flag. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Task returned to matching | MF-11 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Rejection denied | MF-11 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Risk flag/warning recorded | MF-11 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-11 reaches the ending that requires MF-07 Public Discovery and Tasker Interest; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-07 Public Discovery and Tasker Interest | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-11 reaches the ending that requires MF-08 Direct Offer to Favorite Tasker; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-08 Direct Offer to Favorite Tasker | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-11 reaches the ending that requires MF-12 Cancellation / No-Show; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-12 Cancellation / No-Show | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Rejection attempted after allowed window | A clear blocked or failed state; no unconfirmed success is shown. | SF-08 Report / Dispute or support | User must report issue rather than normal reject. The flow re-enters at the last valid checkpoint. |
| Tasker contests movement-stage rejection | A clear blocked or failed state; no unconfirmed success is shown. | SF-08 Report / Dispute | Admin reviews evidence and policy events. The flow re-enters at the last valid checkpoint. |
| Repeated rejection abuse | A clear blocked or failed state; no unconfirmed success is shown. | PolicyEvent / RiskFlag | User warning/risk review is triggered. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Tasker Profile/ETA | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Reject Tasker | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Select Reason | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Log Rejection | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Return to Matching | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | `GET /task-owner/tasks/{taskId}/candidates`; `POST /task-owner/tasks/{taskId}/reject-tasker`; `POST /task-owner/tasks/{taskId}/report` | Show candidate context, apply controlled rejection and escalate contested cases. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Task Owner taps reject.; Select rejection reason.; Backend checks task state and rejection window.; Log TaskOwnerRejection.; If movement-stage rejection repeats, create warning/risk flag.; Task returns to discovery/direct-offer options..
- [ ] Recovery: Rejection attempted after allowed window.
- [ ] Recovery: Tasker contests movement-stage rejection.
- [ ] Recovery: Repeated rejection abuse.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-12 — Cancellation / No-Show

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Closes or reviews tasks when either party cancels, does not appear, or cannot proceed.

In normal use, identify actor and task state, then apply cancellation/no-show policy, then apply penalty, warning, strike, or no penalty, then update escrow/wallet state, then if contested, open report/dispute, then return task to matching or close task depending on state. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Closes or reviews tasks when either party cancels, does not appear, or cannot proceed. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Task state
- Cancellation policy
- Wallet/escrow system
- SF-08 Report / Dispute
- SF-10 Status Recovery / Resume
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Task Owner or Tasker cancels, reports no-show, or task becomes stale. | This condition starts MF-12. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Cancellation / No-Show | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Task state | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Cancellation policy | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Wallet/escrow system | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-08 Report / Dispute | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Identify actor and task state.
2. **System:** Apply cancellation/no-show policy.
3. **User/System:** Apply penalty, warning, strike, or no penalty.
4. **System:** Update escrow/wallet state.
5. **User/System:** If contested, open report/dispute.
6. **System:** Return task to matching or close task depending on state.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | If contested, open report/dispute. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Rating, review or favorite record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Cancelled | MF-12 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Rematch required | MF-12 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Penalty applied | MF-12 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Dispute/report opened | MF-12 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-12 reaches the ending that requires MF-07 Public Discovery and Tasker Interest; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-07 Public Discovery and Tasker Interest | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-12 reaches the ending that requires MF-14 Completion and Settlement; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-14 Completion and Settlement | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-12 reaches the ending that requires MF-16 Support Live Chat; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-16 Support Live Chat | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Contested penalty | A clear blocked or failed state; no unconfirmed success is shown. | SF-08 Report / Dispute | Penalty may remain pending until review/timeout. The flow re-enters at the last valid checkpoint. |
| Tasker no-show | A clear blocked or failed state; no unconfirmed success is shown. | PolicyEvent strike handling | Tasker receives strike and task is closed or rematched. The flow re-enters at the last valid checkpoint. |
| Task Owner no-show | A clear blocked or failed state; no unconfirmed success is shown. | Penalty + warning | Policy event and wallet ledger update are created. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Cancel / No-Show | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Policy Check | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Penalty / Warning | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Escrow Decision | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Closed / Report | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Identify actor and task state.; Apply cancellation/no-show policy.; Apply penalty, warning, strike, or no penalty.; Update escrow/wallet state.; If contested, open report/dispute.; Return task to matching or close task depending on state..
- [ ] Recovery: Contested penalty.
- [ ] Recovery: Tasker no-show.
- [ ] Recovery: Task Owner no-show.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-13 — Tasker Withdrawal

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Lets Taskers request earnings withdrawal while Work2Cash batches payouts on agreed payout dates.

In normal use, check tasker wallet balance, then confirm saved payout account or run payout account setup, then validate minimum withdrawal amount: ₦1,000, then confirm withdrawal request with pin, then check active issue/dispute against tasker, then if no active issue, accept withdrawal request, then if disputed, require admin authorization for affected payout, then add eligible request to payout batch, then payout batches run on 14th and 28th, then admin processes bulk transfer through paystack/moniepoint rail. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Lets Taskers request earnings withdrawal while Work2Cash batches payouts on agreed payout dates. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Tasker wallet
- Completed/settled earnings
- Saved payout account
- Security PIN
- Payout batch schedule
- Finance admin operations
- SF-10 Status Recovery / Resume
- SF-12 Payout Account Setup
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Tasker opens wallet and taps withdraw. | This condition starts MF-13. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Tasker Withdrawal | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Tasker wallet | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Completed/settled earnings | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Saved payout account | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Security PIN | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Payout batch schedule | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Finance admin operations | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-12 Payout Account Setup | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Check Tasker wallet balance.
2. **System:** Confirm saved payout account or run payout account setup.
3. **User/System:** Validate minimum withdrawal amount: ₦1,000.
4. **System:** Confirm withdrawal request with PIN.
5. **User/System:** Check active issue/dispute against Tasker.
6. **System:** If no active issue, accept withdrawal request.
7. **User/System:** If disputed, require admin authorization for affected payout.
8. **System:** Add eligible request to payout batch.
9. **User/System:** Payout batches run on 14th and 28th.
10. **System:** Admin processes bulk transfer through Paystack/Moniepoint rail.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | If no active issue, accept withdrawal request. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |
| Branch 2 | If disputed, require admin authorization for affected payout. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Payment, wallet, escrow or payout record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Withdrawal queued | MF-13 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Paid | MF-13 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Failed/retry | MF-13 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Flagged/admin review | MF-13 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-13 reaches the ending that requires MF-04 Task Owner Home; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-04 Task Owner Home | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-13 reaches the ending that requires MF-09 Tasker Browse and Accept Task; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-09 Tasker Browse and Accept Task | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Balance below ₦1,000 | A clear blocked or failed state; no unconfirmed success is shown. | Wallet guidance state | User cannot submit withdrawal yet. The flow re-enters at the last valid checkpoint. |
| No payout account exists | A clear blocked or failed state; no unconfirmed success is shown. | SF-12 Payout Account Setup | Tasker adds and confirms payout account before withdrawal. The flow re-enters at the last valid checkpoint. |
| PIN forgotten | A clear blocked or failed state; no unconfirmed success is shown. | MF-19 Security and Device Management | Tasker resets PIN through OTP recovery before sensitive action. The flow re-enters at the last valid checkpoint. |
| Active issue/dispute | A clear blocked or failed state; no unconfirmed success is shown. | Settlement hold / admin authorization | Only affected payout is delayed; non-disputed earnings should settle normally. The flow re-enters at the last valid checkpoint. |
| Bulk transfer fails | A clear blocked or failed state; no unconfirmed success is shown. | Payment reconciliation/finance retry | Withdrawal remains failed/retry/flagged until resolved. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Tasker Wallet | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Withdraw Amount | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Eligibility Check | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Payout Batch | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Withdrawal Status | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Check Tasker wallet balance.; Confirm saved payout account or run payout account setup.; Validate minimum withdrawal amount: ₦1,000.; Confirm withdrawal request with PIN.; Check active issue/dispute against Tasker.; If no active issue, accept withdrawal request.; If disputed, require admin authorization for affected payout.; Add eligible request to payout batch.; Payout batches run on 14th and 28th.; Admin processes bulk transfer through Paystack/Moniepoint rail..
- [ ] Recovery: Balance below ₦1,000.
- [ ] Recovery: No payout account exists.
- [ ] Recovery: PIN forgotten.
- [ ] Recovery: Active issue/dispute.
- [ ] Recovery: Bulk transfer fails.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-14 — Completion and Settlement

> Status: approved; version 0.2; owner: Product Lead.

### In plain English

Finalizes a task and moves money from escrow according to completion or report outcome.

In normal use, task owner reviews completion proof, then if satisfied, task owner confirms completion, then backend releases escrow to tasker wallet, then commission tier is applied, then both parties can rate, then task owner can favorite tasker, then if refused, open report/dispute and settlement hold applies to affected task. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Finalizes a task and moves money from escrow according to completion or report outcome. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Completion proof
- Escrow record
- Wallet ledger
- Rating/favorite system
- SF-05 Media Upload
- SF-08 Report / Dispute
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Tasker requests completion after uploading completion proof. | This condition starts MF-14. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Completion and Settlement | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Completion proof | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Escrow record | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Wallet ledger | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Rating/favorite system | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-05 Media Upload | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-08 Report / Dispute | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Task Owner reviews completion proof.
2. **System:** If satisfied, Task Owner confirms completion.
3. **User/System:** Backend releases escrow to Tasker wallet.
4. **System:** Commission tier is applied.
5. **User/System:** Both parties can rate.
6. **System:** Task Owner can favorite Tasker.
7. **User/System:** If refused, open report/dispute and settlement hold applies to affected task.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | If satisfied, Task Owner confirms completion. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |
| Branch 2 | If refused, open report/dispute and settlement hold applies to affected task. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Payment, wallet, escrow or payout record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Report, risk or moderation record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Completed and settled | MF-14 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Settlement held | MF-14 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Refunded/partially refunded | MF-14 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Report resolved | MF-14 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-14 reaches the ending that requires MF-15 Favorites; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-15 Favorites | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-14 reaches the ending that requires MF-13 Tasker Withdrawal; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-13 Tasker Withdrawal | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-14 reaches the ending that requires MF-16 Support Live Chat; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-16 Support Live Chat | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Task Owner refuses approval | A clear blocked or failed state; no unconfirmed success is shown. | SF-08 Report / Dispute | Admin reviews and decides release/refund/partial refund. The flow re-enters at the last valid checkpoint. |
| Ledger posting fails | A clear blocked or failed state; no unconfirmed success is shown. | Wallet reconciliation job | Task remains pending settlement until fixed. The flow re-enters at the last valid checkpoint. |
| Completion proof invalid | A clear blocked or failed state; no unconfirmed success is shown. | SF-08 Report / Dispute or media review | Admin may request evidence or resolve report. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not treat a frontend payment redirect as final payment proof or introduce card-entry-first UX.
- Do not introduce paid-provider auto-refresh loops; use backend-controlled status and recovery.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Completion Request | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Review Proof | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Confirm / Report | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Escrow Release | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Rate / Favorite | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | `POST /tasker/tasks/{taskId}/completion-proof`; `POST /tasker/tasks/{taskId}/request-completion`; `POST /task-owner/tasks/{taskId}/confirm-completion`; `/tasks/{taskId}/ratings`; wallet/escrow status endpoints | Submit proof, request or confirm completion, settle escrow and enable follow-up rating. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Task Owner reviews completion proof.; If satisfied, Task Owner confirms completion.; Backend releases escrow to Tasker wallet.; Commission tier is applied.; Both parties can rate.; Task Owner can favorite Tasker.; If refused, open report/dispute and settlement hold applies to affected task..
- [ ] Recovery: Task Owner refuses approval.
- [ ] Recovery: Ledger posting fails.
- [ ] Recovery: Completion proof invalid.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-15 — Favorites

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Lets Task Owners save trusted Taskers for future direct offers.

In normal use, task owner rates tasker after completion, then task owner chooses add to favorites, then backend creates favoritetasker record, then task owner can later select favorite when creating task, then task owner can remove or block favorite. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Lets Task Owners save trusted Taskers for future direct offers. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Completed task
- Rating flow
- FavoriteTasker model
- None
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Task Owner completes/rates a Tasker or opens favorite management. | This condition starts MF-15. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Favorites | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Completed task | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Rating flow | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| FavoriteTasker model | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| None | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Task Owner rates Tasker after completion.
2. **System:** Task Owner chooses Add to Favorites.
3. **User/System:** Backend creates FavoriteTasker record.
4. **System:** Task Owner can later select favorite when creating task.
5. **User/System:** Task Owner can remove or block favorite.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | Task Owner can later select favorite when creating task. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Rating, review or favorite record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Favorite added | MF-15 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Favorite removed | MF-15 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Blocked | MF-15 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Direct offer available | MF-15 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-15 reaches the ending that requires MF-08 Direct Offer to Favorite Tasker; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-08 Direct Offer to Favorite Tasker | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-15 reaches the ending that requires MF-06 Task Owner Create and Fund Task; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-06 Task Owner Create and Fund Task | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Task not completed | A clear blocked or failed state; no unconfirmed success is shown. | Completion and Settlement | Favorite action appears after valid completion/rating flow. The flow re-enters at the last valid checkpoint. |
| Tasker blocked/removed | A clear blocked or failed state; no unconfirmed success is shown. | Favorite status handling | Direct offer cannot be sent to removed/blocked favorite. The flow re-enters at the last valid checkpoint. |
| Tasker unavailable | A clear blocked or failed state; no unconfirmed success is shown. | MF-08 Direct Offer to Favorite Tasker | Task Owner can choose another favorite or public discovery. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not make direct offers socket-based; their state is durable REST state.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Rate Tasker | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Add Favorite | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Favorites List | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Send Direct Offer | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Manage Favorite | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Task Owner rates Tasker after completion.; Task Owner chooses Add to Favorites.; Backend creates FavoriteTasker record.; Task Owner can later select favorite when creating task.; Task Owner can remove or block favorite..
- [ ] Recovery: Task not completed.
- [ ] Recovery: Tasker blocked/removed.
- [ ] Recovery: Tasker unavailable.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-16 — Support Live Chat

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Provides real-time help for account, wallet, payment, task, KYC, and operational issues.

In normal use, user selects issue category, then create/open support chat session, then assign support agent where available, then user and support chat in real time, then support may resolve, create ticket, request evidence, or direct user to report/dispute flow, then close support session. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Provides real-time help for account, wallet, payment, task, KYC, and operational issues. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Authenticated user
- Socket connection
- Support/admin availability
- SF-05 Media Upload
- SF-08 Report / Dispute
- SF-10 Status Recovery / Resume
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| User opens support or app routes user to support after a blocking issue. | This condition starts MF-16. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Support Live Chat | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Authenticated user | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Socket connection | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Support/admin availability | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-05 Media Upload | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-08 Report / Dispute | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** User selects issue category.
2. **System:** Create/open support chat session.
3. **User/System:** Assign support agent where available.
4. **System:** User and support chat in real time.
5. **User/System:** Support may resolve, create ticket, request evidence, or direct user to report/dispute flow.
6. **System:** Close support session.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Payment, wallet, escrow or payout record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Support or communication record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Resolved | MF-16 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Ticket opened | MF-16 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Report/dispute opened | MF-16 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Escalated | MF-16 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-16 reaches the ending that requires MF-04 Task Owner Home; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-04 Task Owner Home | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-16 reaches the ending that requires MF-09 Tasker Browse and Accept Task; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-09 Tasker Browse and Accept Task | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-16 reaches the ending that requires MF-12 Cancellation / No-Show; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-12 Cancellation / No-Show | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| No agent immediately available | A clear blocked or failed state; no unconfirmed success is shown. | Support queue/ticket state | User sees waiting state or ticket created. The flow re-enters at the last valid checkpoint. |
| Issue is task dispute | A clear blocked or failed state; no unconfirmed success is shown. | SF-08 Report / Dispute | Support routes user into structured report rather than resolving informally. The flow re-enters at the last valid checkpoint. |
| Socket reconnects | A clear blocked or failed state; no unconfirmed success is shown. | SF-10 Status Recovery / Resume | Support session reloads from backend state. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not treat a frontend payment redirect as final payment proof or introduce card-entry-first UX.
- Do not introduce paid-provider auto-refresh loops; use backend-controlled status and recovery.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Support Entry | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Issue Category | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Live Chat | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Evidence / Ticket | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Resolved / Escalated | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: User selects issue category.; Create/open support chat session.; Assign support agent where available.; User and support chat in real time.; Support may resolve, create ticket, request evidence, or direct user to report/dispute flow.; Close support session..
- [ ] Recovery: No agent immediately available.
- [ ] Recovery: Issue is task dispute.
- [ ] Recovery: Socket reconnects.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-17 — Referral

> Status: approved; version 0.2; owner: Product Lead.

### In plain English

Rewards users for bringing new users who complete real paid activity.

In normal use, show referral code/link, then user shares referral, then new user signs up with referral, then system tracks referred user activity, then reward is granted only after referred user completes 5 paid tasks, then wallet credit is issued. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Rewards users for bringing new users who complete real paid activity. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Authenticated user
- Referral tracking
- Wallet credit system
- Completed paid task count
- MF-02 Registration
- MF-14 Completion and Settlement
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| User opens referral screen or shares referral code/link. | This condition starts MF-17. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Referral | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Authenticated user | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Referral tracking | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Wallet credit system | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Completed paid task count | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| MF-02 Registration | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| MF-14 Completion and Settlement | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Show referral code/link.
2. **System:** User shares referral.
3. **User/System:** New user signs up with referral.
4. **System:** System tracks referred user activity.
5. **User/System:** Reward is granted only after referred user completes 5 paid tasks.
6. **System:** Wallet credit is issued.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Referral record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Reward pending | MF-17 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Wallet credit granted | MF-17 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Referral invalid/blocked | MF-17 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-17 reaches the ending that requires MF-04 Task Owner Home; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-04 Task Owner Home | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-17 reaches the ending that requires MF-13 Tasker Withdrawal; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-13 Tasker Withdrawal | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Referred user signs up but does not complete 5 paid tasks | A clear blocked or failed state; no unconfirmed success is shown. | Referral pending state | No reward yet. The flow re-enters at the last valid checkpoint. |
| Self-referral/multi-account abuse suspected | A clear blocked or failed state; no unconfirmed success is shown. | RiskFlag/admin review | Reward is blocked or reviewed. The flow re-enters at the last valid checkpoint. |
| Wallet credit posting fails | A clear blocked or failed state; no unconfirmed success is shown. | Wallet reconciliation | Reward remains pending until ledger is corrected. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Referral Home | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Share Code | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Referred Signup | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | 5 Paid Tasks | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Wallet Credit | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | Referral REST endpoints are not yet defined; Phase 4 must define code/share, attribution, progress and reward-status contracts | Do not invent paths; preserve the five-paid-task reward rule until OpenAPI defines exact contracts. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Show referral code/link.; User shares referral.; New user signs up with referral.; System tracks referred user activity.; Reward is granted only after referred user completes 5 paid tasks.; Wallet credit is issued..
- [ ] Recovery: Referred user signs up but does not complete 5 paid tasks.
- [ ] Recovery: Self-referral/multi-account abuse suspected.
- [ ] Recovery: Wallet credit posting fails.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-18 — Profile and Settings Management

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Lets users view and manage profile details, saved addresses, notification preferences, support entry, and logout.

In normal use, open profile/settings, then view profile details, then edit allowed profile fields, then manage saved addresses, then open notification preferences, then open help/support, then logout if needed, then sensitive profile changes use pin and/or verification rules. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Lets users view and manage profile details, saved addresses, notification preferences, support entry, and logout. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Authenticated user
- User/Profile APIs
- Security PIN for sensitive changes
- SF-01 OTP Verification
- SF-02 Complete Profile
- SF-10 Status Recovery / Resume
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| User opens Profile or Settings from the mobile app. | This condition starts MF-18. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Profile and Settings Management | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Authenticated user | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| User/Profile APIs | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Security PIN for sensitive changes | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-01 OTP Verification | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-02 Complete Profile | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Open Profile/Settings.
2. **System:** View profile details.
3. **User/System:** Edit allowed profile fields.
4. **System:** Manage saved addresses.
5. **User/System:** Open notification preferences.
6. **System:** Open help/support.
7. **User/System:** Logout if needed.
8. **System:** Sensitive profile changes use PIN and/or verification rules.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | Logout if needed. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Support or communication record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Notification or preference record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Configuration or preference record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Profile updated | MF-18 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Settings saved | MF-18 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Logout complete | MF-18 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Update blocked/retry | MF-18 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-18 reaches the ending that requires MF-04 Task Owner Home; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-04 Task Owner Home | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-18 reaches the ending that requires MF-19 Security and Device Management; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-19 Security and Device Management | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-18 reaches the ending that requires MF-20 Notification Center and Preferences; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-20 Notification Center and Preferences | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-18 reaches the ending that requires MF-16 Support Live Chat; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-16 Support Live Chat | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Phone or email change requires verification | A clear blocked or failed state; no unconfirmed success is shown. | SF-01 OTP Verification | Contact change is not saved until ownership is verified. The flow re-enters at the last valid checkpoint. |
| Profile becomes incomplete | A clear blocked or failed state; no unconfirmed success is shown. | SF-02 Complete Profile | Required fields are collected before critical actions continue. The flow re-enters at the last valid checkpoint. |
| Session expires while editing | A clear blocked or failed state; no unconfirmed success is shown. | MF-03 Login / Session Recovery | User logs in and resumes safely. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Profile | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Edit Details | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Saved Addresses | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Support / Logout | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Saved | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Open Profile/Settings.; View profile details.; Edit allowed profile fields.; Manage saved addresses.; Open notification preferences.; Open help/support.; Logout if needed.; Sensitive profile changes use PIN and/or verification rules..
- [ ] Recovery: Phone or email change requires verification.
- [ ] Recovery: Profile becomes incomplete.
- [ ] Recovery: Session expires while editing.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-19 — Security and Device Management

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Protects sensitive actions with a Work2Cash PIN and lets users manage active devices/sessions.

In normal use, open security settings, then create or confirm security pin, then view active devices/sessions, then revoke other sessions where needed, then for sensitive action, enter pin, then backend verifies pin, then action proceeds or rate-limit/cooldown applies, then forgot pin uses otp recovery before setting a new pin. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Protects sensitive actions with a Work2Cash PIN and lets users manage active devices/sessions. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Authenticated user
- PIN hash stored securely by backend
- User/Profile APIs
- OTP for PIN reset
- SF-01 OTP Verification
- SF-10 Status Recovery / Resume
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| User opens Security settings or starts a sensitive action. | This condition starts MF-19. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Security and Device Management | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Authenticated user | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| PIN hash stored securely by backend | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| User/Profile APIs | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| OTP for PIN reset | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-01 OTP Verification | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Open Security settings.
2. **System:** Create or confirm security PIN.
3. **User/System:** View active devices/sessions.
4. **System:** Revoke other sessions where needed.
5. **User/System:** For sensitive action, enter PIN.
6. **System:** Backend verifies PIN.
7. **User/System:** Action proceeds or rate-limit/cooldown applies.
8. **System:** Forgot PIN uses OTP recovery before setting a new PIN.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Authentication or session record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| PIN confirmed | MF-19 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| PIN reset | MF-19 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Sensitive action completed | MF-19 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Sensitive action locked | MF-19 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Session revoked | MF-19 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-19 reaches the ending that requires MF-18 Profile and Settings Management; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-18 Profile and Settings Management | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-19 reaches the ending that requires MF-13 Tasker Withdrawal; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-13 Tasker Withdrawal | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-19 reaches the ending that requires SF-12 Payout Account Setup; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | SF-12 Payout Account Setup | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| PIN forgotten | A clear blocked or failed state; no unconfirmed success is shown. | OTP-based PIN reset | User verifies account and sets a new PIN. The flow re-enters at the last valid checkpoint. |
| Too many failed PIN attempts | A clear blocked or failed state; no unconfirmed success is shown. | Rate limit/cooldown | Sensitive actions are temporarily locked. The flow re-enters at the last valid checkpoint. |
| Device/session revoke attempted | A clear blocked or failed state; no unconfirmed success is shown. | Session management check | User can revoke other sessions and receives security notification. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Security | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Create / Enter PIN | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Devices | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Revoke Session | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Security Saved | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Open Security settings.; Create or confirm security PIN.; View active devices/sessions.; Revoke other sessions where needed.; For sensitive action, enter PIN.; Backend verifies PIN.; Action proceeds or rate-limit/cooldown applies.; Forgot PIN uses OTP recovery before setting a new PIN..
- [ ] Recovery: PIN forgotten.
- [ ] Recovery: Too many failed PIN attempts.
- [ ] Recovery: Device/session revoke attempted.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-20 — Notification Center and Preferences

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Lets users view notifications, open related records, and control non-critical notification preferences.

In normal use, open notification center, then view all/unread notifications, then open a notification, then deep link to related task, payment, support, report, referral, or security screen, then mark as read, then open preferences, then toggle allowed notification categories, then save preferences. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Lets users view notifications, open related records, and control non-critical notification preferences. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Authenticated user
- FCM
- Termii SMS fallback for critical messages
- Deep links/app links
- SF-10 Status Recovery / Resume
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| User opens Notifications or Notification Preferences. | This condition starts MF-20. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Notification Center and Preferences | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Authenticated user | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| FCM | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Termii SMS fallback for critical messages | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Deep links/app links | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Open notification center.
2. **System:** View all/unread notifications.
3. **User/System:** Open a notification.
4. **System:** Deep link to related task, payment, support, report, referral, or security screen.
5. **User/System:** Mark as read.
6. **System:** Open preferences.
7. **User/System:** Toggle allowed notification categories.
8. **System:** Save preferences.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| User, profile or KYC record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Notification or preference record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Configuration or preference record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Notification opened | MF-20 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Marked read | MF-20 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Preferences saved | MF-20 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Permission blocked | MF-20 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-20 reaches the ending that requires MF-04 Task Owner Home; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-04 Task Owner Home | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-20 reaches the ending that requires MF-10 Active Task Execution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-10 Active Task Execution | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-20 reaches the ending that requires MF-16 Support Live Chat; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-16 Support Live Chat | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-20 reaches the ending that requires MF-18 Profile and Settings Management; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-18 Profile and Settings Management | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Push permission denied | A clear blocked or failed state; no unconfirmed success is shown. | SF-09 Permission Recovery | User can enable notifications or rely on in-app view and critical SMS fallback. The flow re-enters at the last valid checkpoint. |
| Notification target no longer exists | A clear blocked or failed state; no unconfirmed success is shown. | Status recovery | App shows unavailable/expired state and returns to notifications. The flow re-enters at the last valid checkpoint. |
| Critical alert preference is disabled | A clear blocked or failed state; no unconfirmed success is shown. | Preference guard | Critical payment, withdrawal, security, dispute, and active-task alerts cannot be fully disabled. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Notifications | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Open Alert | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Deep Link | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Preferences | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Saved | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Open notification center.; View all/unread notifications.; Open a notification.; Deep link to related task, payment, support, report, referral, or security screen.; Mark as read.; Open preferences.; Toggle allowed notification categories.; Save preferences..
- [ ] Recovery: Push permission denied.
- [ ] Recovery: Notification target no longer exists.
- [ ] Recovery: Critical alert preference is disabled.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-21 — Tasker Availability and Work Preferences

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Lets approved Taskers control when they are available and what work they prefer without using auto-accept.

In normal use, confirm taskerprofile is active and kyc-approved, then set available/unavailable, then set working hours, then select preferred task categories, then set maximum travel distance within platform cap, then confirm location permission while available, then save preferences, then tasker can browse tasks sorted nearest first. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Lets approved Taskers control when they are available and what work they prefer without using auto-accept. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Approved TaskerProfile
- Location permission
- Task catalog
- Platform travel-radius cap
- SF-03 Tasker KYC
- SF-04 Location, Address and Pin Confirmation
- SF-09 Permission Recovery
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Tasker opens availability or work preferences. | This condition starts MF-21. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Tasker Availability and Work Preferences | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Approved TaskerProfile | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Location permission | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Task catalog | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Platform travel-radius cap | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-03 Tasker KYC | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-04 Location, Address and Pin Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-09 Permission Recovery | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Confirm TaskerProfile is active and KYC-approved.
2. **System:** Set available/unavailable.
3. **User/System:** Set working hours.
4. **System:** Select preferred task categories.
5. **User/System:** Set maximum travel distance within platform cap.
6. **System:** Confirm location permission while available.
7. **User/System:** Save preferences.
8. **System:** Tasker can browse tasks sorted nearest first.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Configuration or preference record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Available | MF-21 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Unavailable | MF-21 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Preferences saved | MF-21 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Availability blocked | MF-21 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-21 reaches the ending that requires MF-09 Tasker Browse and Accept Task; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-09 Tasker Browse and Accept Task | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-21 reaches the ending that requires MF-10 Active Task Execution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-10 Active Task Execution | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Tasker not KYC-approved | A clear blocked or failed state; no unconfirmed success is shown. | SF-03 Tasker KYC | Availability remains locked until KYC is approved. The flow re-enters at the last valid checkpoint. |
| Location permission denied | A clear blocked or failed state; no unconfirmed success is shown. | SF-09 Permission Recovery | Tasker cannot be available/active until location is enabled. The flow re-enters at the last valid checkpoint. |
| Auto Accept visible in old design | A clear blocked or failed state; no unconfirmed success is shown. | Deferred feature rule | Auto Accept is not implemented in MVP because Tasker must confirm arrival ability. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Availability | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Working Hours | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Preferred Tasks | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Travel Distance | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Available | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Confirm TaskerProfile is active and KYC-approved.; Set available/unavailable.; Set working hours.; Select preferred task categories.; Set maximum travel distance within platform cap.; Confirm location permission while available.; Save preferences.; Tasker can browse tasks sorted nearest first..
- [ ] Recovery: Tasker not KYC-approved.
- [ ] Recovery: Location permission denied.
- [ ] Recovery: Auto Accept visible in old design.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-22 — Ratings and Reviews

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Collects task-bound ratings after completion and feeds trust, favorites, and moderation.

In normal use, show rating prompt after completion, then task owner rates tasker and may add optional review, then task owner may add tasker to favorites, then tasker rates task owner and may add optional review, then backend enforces one rating per actor per completed task, then ratings update tasker display and task owner trust profile, then reported reviews route to admin moderation. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Collects task-bound ratings after completion and feeds trust, favorites, and moderation. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Completed task
- Rating model
- FavoriteTasker model
- Admin review moderation
- SF-08 Report / Dispute
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Task reaches completed/settled state or user opens completed task requiring rating. | This condition starts MF-22. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Ratings and Reviews | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Completed task | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Rating model | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| FavoriteTasker model | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Admin review moderation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-08 Report / Dispute | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Show rating prompt after completion.
2. **System:** Task Owner rates Tasker and may add optional review.
3. **User/System:** Task Owner may add Tasker to Favorites.
4. **System:** Tasker rates Task Owner and may add optional review.
5. **User/System:** Backend enforces one rating per actor per completed task.
6. **System:** Ratings update Tasker display and Task Owner trust profile.
7. **User/System:** Reported reviews route to admin moderation.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Report, risk or moderation record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Rating, review or favorite record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Rating submitted | MF-22 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Review submitted | MF-22 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Favorite added | MF-22 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Rating skipped | MF-22 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Review reported | MF-22 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-22 reaches the ending that requires MF-15 Favorites; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-15 Favorites | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-22 reaches the ending that requires MF-24 Rebook / Repeat Task; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-24 Rebook / Repeat Task | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-22 reaches the ending that requires MF-16 Support Live Chat; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-16 Support Live Chat | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| User skips rating | A clear blocked or failed state; no unconfirmed success is shown. | Pending rating state | Rating can be shown later from task history. The flow re-enters at the last valid checkpoint. |
| Review is abusive or false | A clear blocked or failed state; no unconfirmed success is shown. | Report review/admin moderation | Admin can hide/remove while preserving internal audit. The flow re-enters at the last valid checkpoint. |
| Low rating indicates serious issue | A clear blocked or failed state; no unconfirmed success is shown. | SF-08 Report / Dispute | User can open structured report with evidence. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Rate Task | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Review Tags | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Optional Review | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Favorite Option | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Submitted | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Show rating prompt after completion.; Task Owner rates Tasker and may add optional review.; Task Owner may add Tasker to Favorites.; Tasker rates Task Owner and may add optional review.; Backend enforces one rating per actor per completed task.; Ratings update Tasker display and Task Owner trust profile.; Reported reviews route to admin moderation..
- [ ] Recovery: User skips rating.
- [ ] Recovery: Review is abusive or false.
- [ ] Recovery: Low rating indicates serious issue.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-23 — Emergency Support

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Creates a high-priority support path for urgent task, safety, payment, contact, or no-show situations.

In normal use, show safety guidance and platform-support limitation, then select emergency category, then attach evidence where useful, then create high-priority support session or ticket, then wake/alert support/admin where operationally possible, then user sees waiting or connected state, then support handles, escalates, or links to report/dispute. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Creates a high-priority support path for urgent task, safety, payment, contact, or no-show situations. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Authenticated user
- Support live chat/ticket system
- FCM admin/support alert
- Media upload where evidence is attached
- SF-05 Media Upload
- SF-08 Report / Dispute
- SF-10 Status Recovery / Resume
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| User taps Emergency Support from active task, chat, report issue, or support screen. | This condition starts MF-23. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Emergency Support | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Authenticated user | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Support live chat/ticket system | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| FCM admin/support alert | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Media upload where evidence is attached | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-05 Media Upload | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-08 Report / Dispute | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-10 Status Recovery / Resume | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Show safety guidance and platform-support limitation.
2. **System:** Select emergency category.
3. **User/System:** Attach evidence where useful.
4. **System:** Create high-priority support session or ticket.
5. **User/System:** Wake/alert support/admin where operationally possible.
6. **System:** User sees waiting or connected state.
7. **User/System:** Support handles, escalates, or links to report/dispute.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Payment, wallet, escrow or payout record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Support or communication record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| Emergency chat connected | MF-23 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Priority ticket opened | MF-23 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Report/dispute opened | MF-23 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Escalated | MF-23 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Resolved | MF-23 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-23 reaches the ending that requires MF-16 Support Live Chat; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-16 Support Live Chat | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-23 reaches the ending that requires MF-12 Cancellation / No-Show; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-12 Cancellation / No-Show | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-23 reaches the ending that requires MF-10 Active Task Execution; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-10 Active Task Execution | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| No support agent online | A clear blocked or failed state; no unconfirmed success is shown. | Priority ticket fallback | User sees expected response message and ticket state. The flow re-enters at the last valid checkpoint. |
| Issue is a formal dispute | A clear blocked or failed state; no unconfirmed success is shown. | SF-08 Report / Dispute | Support routes to structured report instead of informal resolution. The flow re-enters at the last valid checkpoint. |
| Evidence upload fails | A clear blocked or failed state; no unconfirmed success is shown. | SF-05 Media Upload | User can retry or continue with text description. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Do not treat a frontend payment redirect as final payment proof or introduce card-entry-first UX.
- Do not introduce paid-provider auto-refresh loops; use backend-controlled status and recovery.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Emergency Support | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Safety Guidance | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Category | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Evidence | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Priority Chat | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Show safety guidance and platform-support limitation.; Select emergency category.; Attach evidence where useful.; Create high-priority support session or ticket.; Wake/alert support/admin where operationally possible.; User sees waiting or connected state.; Support handles, escalates, or links to report/dispute..
- [ ] Recovery: No support agent online.
- [ ] Recovery: Issue is a formal dispute.
- [ ] Recovery: Evidence upload fails.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## MF-24 — Rebook / Repeat Task

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Lets Task Owners create a new task from a completed task while keeping the old task immutable.

In normal use, open completed task, then tap rebook, then app pre-fills task category, task type, description, location, duration, and previous tasker where available, then task owner reviews/edits details, then set new required arrival time, then upload fresh proof where work condition may have changed, then review price and fees, then fund escrow again, then send direct offer to same/favorite tasker or publish to public discovery. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

### Why this flow exists

Lets Task Owners create a new task from a completed task while keeping the old task immutable. This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

### People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| Work2Cash user | Starts the flow, supplies permitted information and chooses the available action. |
| Mobile application | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

### Before this flow begins

- Completed task
- Task creation APIs
- Payment/escrow funding
- Favorite/direct offer system
- SF-04 Location, Address and Pin Confirmation
- SF-05 Media Upload
- SF-06 Payment and Escrow Funding
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

### Entry points

| Entry point | When it is used |
| --- | --- |
| Task Owner taps Rebook from completed task detail, task history, favorite Tasker profile, or rating completion screen. | This condition starts MF-24. |

### Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for Rebook / Repeat Task | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

### Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
| Completed task | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Task creation APIs | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Payment/escrow funding | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| Favorite/direct offer system | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-04 Location, Address and Pin Confirmation | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-05 Media Upload | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |
| SF-06 Payment and Escrow Funding | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |

### Verbal walkthrough

1. **User/System:** Open completed task.
2. **System:** Tap Rebook.
3. **User/System:** App pre-fills task category, task type, description, location, duration, and previous Tasker where available.
4. **System:** Task Owner reviews/edits details.
5. **User/System:** Set new required arrival time.
6. **System:** Upload fresh proof where work condition may have changed.
7. **User/System:** Review price and fees.
8. **System:** Fund escrow again.
9. **User/System:** Send direct offer to same/favorite Tasker or publish to public discovery.

### Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
| Branch 1 | No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below. | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |

### Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
| Task or task-catalog record | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

### Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

### Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
| New task funded | MF-24 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Direct offer sent | MF-24 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Published to discovery | MF-24 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |
| Rebook abandoned | MF-24 has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |

### What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
| Select this handoff only after MF-24 reaches the ending that requires MF-06 Task Owner Create and Fund Task; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-06 Task Owner Create and Fund Task | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-24 reaches the ending that requires MF-08 Direct Offer to Favorite Tasker; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-08 Direct Offer to Favorite Tasker | Continues the approved journey without implying that every ending uses the same destination. |
| Select this handoff only after MF-24 reaches the ending that requires MF-07 Public Discovery and Tasker Interest; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | MF-07 Public Discovery and Tasker Interest | Continues the approved journey without implying that every ending uses the same destination. |

### Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
| Previous Tasker unavailable/restricted | A clear blocked or failed state; no unconfirmed success is shown. | MF-07 Public Discovery and Tasker Interest | Task Owner can publish to public discovery. The flow re-enters at the last valid checkpoint. |
| Old location no longer valid | A clear blocked or failed state; no unconfirmed success is shown. | SF-04 Location, Address and Pin Confirmation | Task Owner confirms or updates task site. The flow re-enters at the last valid checkpoint. |
| Payment fails | A clear blocked or failed state; no unconfirmed success is shown. | SF-06 Payment and Escrow Funding | New task is not posted until escrow is funded. The flow re-enters at the last valid checkpoint. |

### Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from documents/agent-md/mobile-flow-catalogue-v1.md.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

### Forbidden behavior

- Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.
- Do not expose protected personal, identity, payment or operational data merely because a screen can render it.
- Do not treat frontend state as authoritative when the backend or provider owns the final result.
- Use `mode`; do not introduce `activeMode`.

### Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
| 1 | Completed Task | Represents step 1 of the approved flow. | Continue only after the current input or backend state is valid. |
| 2 | Rebook | Represents step 2 of the approved flow. | Continue only after the current input or backend state is valid. |
| 3 | Prefilled Task | Represents step 3 of the approved flow. | Continue only after the current input or backend state is valid. |
| 4 | Review / Pay | Represents step 4 of the approved flow. | Continue only after the current input or backend state is valid. |
| 5 | Direct / Public | Represents step 5 of the approved flow. | Continue only after the current input or backend state is valid. |

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | Mobile application | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

### Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

### Required tests

- [ ] Happy path: Open completed task.; Tap Rebook.; App pre-fills task category, task type, description, location, duration, and previous Tasker where available.; Task Owner reviews/edits details.; Set new required arrival time.; Upload fresh proof where work condition may have changed.; Review price and fees.; Fund escrow again.; Send direct offer to same/favorite Tasker or publish to public discovery..
- [ ] Recovery: Previous Tasker unavailable/restricted.
- [ ] Recovery: Old location no longer valid.
- [ ] Recovery: Payment fails.
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

### Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.

---

## SF-01 — OTP Verification

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Confirms that the user controls the email or phone number used for registration, login, or sensitive account action.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in SF-01 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| MF-02 — Registration | When the caller needs otp verification to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-03 — Login / Session Recovery | When the caller needs otp verification to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-18 — Profile and Settings Management | When the caller needs otp verification to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-19 — Security and Device Management | When the caller needs otp verification to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| None | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** Send OTP by email first.
2. **System/Actor:** If email is unavailable or user requests fallback, send Termii SMS.
3. **System/Actor:** User enters OTP.
4. **System/Actor:** Backend verifies OTP and rate limit.
5. **System/Actor:** User proceeds or sees retry/cooldown.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Completed | Calling flow | Confirmed terminal result returned by SF-01. |
| Failed/retry | Calling flow | Confirmed terminal result returned by SF-01. |
| Abandoned | Calling flow | Confirmed terminal result returned by SF-01. |
| Pending where provider review is involved | Calling flow | Confirmed terminal result returned by SF-01. |

### Success return behavior

After success, SF-01 returns control according to: Returns to the calling parent flow. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- **This subflow fails or is abandoned:** SF-10 Status Recovery / Resume where applicable. The calling flow returns the user to the last valid checkpoint.
- **User lacks required permission/contact/provider response:** SF-09 Permission Recovery or provider retry. The app explains the blocker and offers the safest available path.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared mobile subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter SF-01 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## SF-02 — Complete Profile

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Collects the minimum profile data required to personalize the app and safely proceed into Task Owner or Tasker workflows.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in SF-02 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| MF-02 — Registration | When the caller needs complete profile to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-03 — Login / Session Recovery | When the caller needs complete profile to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-05 — Tasker Activation | When the caller needs complete profile to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-18 — Profile and Settings Management | When the caller needs complete profile to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| None | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** Show missing profile fields.
2. **System/Actor:** Collect name and required contact/profile details.
3. **System/Actor:** Optional profile photo where applicable.
4. **System/Actor:** Validate fields.
5. **System/Actor:** Mark profile complete.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Completed | Calling flow | Confirmed terminal result returned by SF-02. |
| Failed/retry | Calling flow | Confirmed terminal result returned by SF-02. |
| Abandoned | Calling flow | Confirmed terminal result returned by SF-02. |
| Pending where provider review is involved | Calling flow | Confirmed terminal result returned by SF-02. |

### Success return behavior

After success, SF-02 returns control according to: Returns to the calling parent flow. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- **This subflow fails or is abandoned:** SF-10 Status Recovery / Resume where applicable. The calling flow returns the user to the last valid checkpoint.
- **User lacks required permission/contact/provider response:** SF-09 Permission Recovery or provider retry. The app explains the blocker and offers the safest available path.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared mobile subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter SF-02 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## SF-03 — Tasker KYC

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Verifies identity through Smile ID before a user can accept tasks as a Tasker.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in SF-03 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| MF-03 — Login / Session Recovery | When the caller needs tasker kyc to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-05 — Tasker Activation | When the caller needs tasker kyc to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-09 — Tasker Browse and Accept Task | When the caller needs tasker kyc to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-21 — Tasker Availability and Work Preferences | When the caller needs tasker kyc to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| None | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** Explain KYC requirement.
2. **System/Actor:** Collect NIN/BVN reference.
3. **System/Actor:** Capture face/biometric reference.
4. **System/Actor:** Submit to Smile ID.
5. **System/Actor:** Show approved, pending, rejected, expired, or manual review state.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Completed | Calling flow | Confirmed terminal result returned by SF-03. |
| Failed/retry | Calling flow | Confirmed terminal result returned by SF-03. |
| Abandoned | Calling flow | Confirmed terminal result returned by SF-03. |
| Pending where provider review is involved | Calling flow | Confirmed terminal result returned by SF-03. |

### Success return behavior

After success, SF-03 returns control according to: Returns to the calling parent flow. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- **This subflow fails or is abandoned:** SF-10 Status Recovery / Resume where applicable. The calling flow returns the user to the last valid checkpoint.
- **User lacks required permission/contact/provider response:** SF-09 Permission Recovery or provider retry. The app explains the blocker and offers the safest available path.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared mobile subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter SF-03 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## SF-04 — Location, Address and Pin Confirmation

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Converts a live or manually entered task site into a confirmed Nigerian task location.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in SF-04 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| MF-05 — Tasker Activation | When the caller needs location, address and pin confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-06 — Task Owner Create and Fund Task | When the caller needs location, address and pin confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-07 — Public Discovery and Tasker Interest | When the caller needs location, address and pin confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-09 — Tasker Browse and Accept Task | When the caller needs location, address and pin confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-21 — Tasker Availability and Work Preferences | When the caller needs location, address and pin confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-24 — Rebook / Repeat Task | When the caller needs location, address and pin confirmation to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| None | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** Ask for location permission where needed.
2. **System/Actor:** Use live GPS or manual address entry.
3. **System/Actor:** Geocode manual address.
4. **System/Actor:** Show map pin.
5. **System/Actor:** User confirms pin.
6. **System/Actor:** Validate task site or Tasker location is in Nigeria.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Completed | Calling flow | Confirmed terminal result returned by SF-04. |
| Failed/retry | Calling flow | Confirmed terminal result returned by SF-04. |
| Abandoned | Calling flow | Confirmed terminal result returned by SF-04. |
| Pending where provider review is involved | Calling flow | Confirmed terminal result returned by SF-04. |

### Success return behavior

After success, SF-04 returns control according to: Returns to the calling parent flow. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- **This subflow fails or is abandoned:** SF-10 Status Recovery / Resume where applicable. The calling flow returns the user to the last valid checkpoint.
- **User lacks required permission/contact/provider response:** SF-09 Permission Recovery or provider retry. The app explains the blocker and offers the safest available path.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared mobile subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter SF-04 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## SF-05 — Media Upload

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Handles proof photos/videos for task creation, completion, reports, and support.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in SF-05 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| MF-06 — Task Owner Create and Fund Task | When the caller needs media upload to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-10 — Active Task Execution | When the caller needs media upload to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-14 — Completion and Settlement | When the caller needs media upload to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-16 — Support Live Chat | When the caller needs media upload to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-23 — Emergency Support | When the caller needs media upload to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-24 — Rebook / Repeat Task | When the caller needs media upload to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| None | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** Choose capture or file picker.
2. **System/Actor:** Validate file type: photo or video.
3. **System/Actor:** Validate max file size: 50MB per file.
4. **System/Actor:** Upload with progress.
5. **System/Actor:** Attach uploaded media to task/report/message.
6. **System/Actor:** Allow retry, remove, or replace.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Completed | Calling flow | Confirmed terminal result returned by SF-05. |
| Failed/retry | Calling flow | Confirmed terminal result returned by SF-05. |
| Abandoned | Calling flow | Confirmed terminal result returned by SF-05. |
| Pending where provider review is involved | Calling flow | Confirmed terminal result returned by SF-05. |

### Success return behavior

After success, SF-05 returns control according to: Returns to the calling parent flow. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- **This subflow fails or is abandoned:** SF-10 Status Recovery / Resume where applicable. The calling flow returns the user to the last valid checkpoint.
- **User lacks required permission/contact/provider response:** SF-09 Permission Recovery or provider retry. The app explains the blocker and offers the safest available path.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared mobile subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter SF-05 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## SF-06 — Payment and Escrow Funding

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Funds a task before public discovery or direct offer proceeds.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in SF-06 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| MF-06 — Task Owner Create and Fund Task | When the caller needs payment and escrow funding to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-24 — Rebook / Repeat Task | When the caller needs payment and escrow funding to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| None | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** Show task amount, platform/service fee, payment fee, and total.
2. **System/Actor:** Choose Paystack or Moniepoint.
3. **System/Actor:** Start payment.
4. **System/Actor:** Return to app.
5. **System/Actor:** Backend verifies payment.
6. **System/Actor:** Create escrow or show pending/failed state.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Completed | Calling flow | Confirmed terminal result returned by SF-06. |
| Failed/retry | Calling flow | Confirmed terminal result returned by SF-06. |
| Abandoned | Calling flow | Confirmed terminal result returned by SF-06. |
| Pending where provider review is involved | Calling flow | Confirmed terminal result returned by SF-06. |

### Success return behavior

After success, SF-06 returns control according to: Returns to the calling parent flow. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- **This subflow fails or is abandoned:** SF-10 Status Recovery / Resume where applicable. The calling flow returns the user to the last valid checkpoint.
- **User lacks required permission/contact/provider response:** SF-09 Permission Recovery or provider retry. The app explains the blocker and offers the safest available path.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared mobile subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter SF-06 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## SF-07 — Communication

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Allows task-bound communication without exposing private phone numbers.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in SF-07 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| MF-10 — Active Task Execution | When the caller needs communication to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| None | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** Check task membership and state.
2. **System/Actor:** Enable chat and voice messages.
3. **System/Actor:** For calls, create/retrieve masked call session.
4. **System/Actor:** Open phone dialer with Work2Cash proxy number.
5. **System/Actor:** Persist/audit communication metadata where needed.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Completed | Calling flow | Confirmed terminal result returned by SF-07. |
| Failed/retry | Calling flow | Confirmed terminal result returned by SF-07. |
| Abandoned | Calling flow | Confirmed terminal result returned by SF-07. |
| Pending where provider review is involved | Calling flow | Confirmed terminal result returned by SF-07. |

### Success return behavior

After success, SF-07 returns control according to: Returns to the calling parent flow. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- **This subflow fails or is abandoned:** SF-10 Status Recovery / Resume where applicable. The calling flow returns the user to the last valid checkpoint.
- **User lacks required permission/contact/provider response:** SF-09 Permission Recovery or provider retry. The app explains the blocker and offers the safest available path.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared mobile subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter SF-07 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## SF-08 — Report / Dispute

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Turns task problems into structured evidence-backed reports for admin review.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in SF-08 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| MF-10 — Active Task Execution | When the caller needs report / dispute to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-11 — Task Owner Rejection | When the caller needs report / dispute to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-12 — Cancellation / No-Show | When the caller needs report / dispute to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-14 — Completion and Settlement | When the caller needs report / dispute to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-16 — Support Live Chat | When the caller needs report / dispute to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-22 — Ratings and Reviews | When the caller needs report / dispute to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-23 — Emergency Support | When the caller needs report / dispute to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| None | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** Select task-linked report reason.
2. **System/Actor:** Add description.
3. **System/Actor:** Upload evidence if needed.
4. **System/Actor:** Submit report.
5. **System/Actor:** Track report status.
6. **System/Actor:** Admin resolves, dismisses, escalates, or requests evidence.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Completed | Calling flow | Confirmed terminal result returned by SF-08. |
| Failed/retry | Calling flow | Confirmed terminal result returned by SF-08. |
| Abandoned | Calling flow | Confirmed terminal result returned by SF-08. |
| Pending where provider review is involved | Calling flow | Confirmed terminal result returned by SF-08. |

### Success return behavior

After success, SF-08 returns control according to: Returns to the calling parent flow. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- **This subflow fails or is abandoned:** SF-10 Status Recovery / Resume where applicable. The calling flow returns the user to the last valid checkpoint.
- **User lacks required permission/contact/provider response:** SF-09 Permission Recovery or provider retry. The app explains the blocker and offers the safest available path.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared mobile subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter SF-08 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## SF-09 — Permission Recovery

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Guides users when required permissions are denied or unavailable.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in SF-09 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| MF-05 — Tasker Activation | When the caller needs permission recovery to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-09 — Tasker Browse and Accept Task | When the caller needs permission recovery to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-21 — Tasker Availability and Work Preferences | When the caller needs permission recovery to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| None | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** Explain why permission is needed.
2. **System/Actor:** Offer retry.
3. **System/Actor:** Open system settings where required.
4. **System/Actor:** Offer fallback where allowed, such as manual address.
5. **System/Actor:** Block only the feature that requires the permission.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Completed | Calling flow | Confirmed terminal result returned by SF-09. |
| Failed/retry | Calling flow | Confirmed terminal result returned by SF-09. |
| Abandoned | Calling flow | Confirmed terminal result returned by SF-09. |
| Pending where provider review is involved | Calling flow | Confirmed terminal result returned by SF-09. |

### Success return behavior

After success, SF-09 returns control according to: Returns to the calling parent flow. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- **This subflow fails or is abandoned:** SF-10 Status Recovery / Resume where applicable. The calling flow returns the user to the last valid checkpoint.
- **User lacks required permission/contact/provider response:** SF-09 Permission Recovery or provider retry. The app explains the blocker and offers the safest available path.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared mobile subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter SF-09 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## SF-10 — Status Recovery / Resume

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Lets users safely continue after closing the app, losing network, or returning from a provider page.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in SF-10 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| MF-01 — First App Launch and Entry Decision | When the caller needs status recovery / resume to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-02 — Registration | When the caller needs status recovery / resume to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-03 — Login / Session Recovery | When the caller needs status recovery / resume to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-04 — Task Owner Home | When the caller needs status recovery / resume to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-06 — Task Owner Create and Fund Task | When the caller needs status recovery / resume to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-07 — Public Discovery and Tasker Interest | When the caller needs status recovery / resume to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-08 — Direct Offer to Favorite Tasker | When the caller needs status recovery / resume to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-10 — Active Task Execution | When the caller needs status recovery / resume to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-12 — Cancellation / No-Show | When the caller needs status recovery / resume to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-13 — Tasker Withdrawal | When the caller needs status recovery / resume to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-16 — Support Live Chat | When the caller needs status recovery / resume to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-18 — Profile and Settings Management | When the caller needs status recovery / resume to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-19 — Security and Device Management | When the caller needs status recovery / resume to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-20 — Notification Center and Preferences | When the caller needs status recovery / resume to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |
| MF-23 — Emergency Support | When the caller needs status recovery / resume to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| None | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** Fetch current backend state.
2. **System/Actor:** Compare local state with server state.
3. **System/Actor:** Show correct next action.
4. **System/Actor:** Resume flow from the last valid checkpoint.
5. **System/Actor:** Clear stale local assumptions.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Completed | Calling flow | Confirmed terminal result returned by SF-10. |
| Failed/retry | Calling flow | Confirmed terminal result returned by SF-10. |
| Abandoned | Calling flow | Confirmed terminal result returned by SF-10. |
| Pending where provider review is involved | Calling flow | Confirmed terminal result returned by SF-10. |

### Success return behavior

After success, SF-10 returns control according to: Returns to the calling parent flow. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- **This subflow fails or is abandoned:** SF-10 Status Recovery / Resume where applicable. The calling flow returns the user to the last valid checkpoint.
- **User lacks required permission/contact/provider response:** SF-09 Permission Recovery or provider retry. The app explains the blocker and offers the safest available path.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared mobile subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter SF-10 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## SF-11 — Password Recovery

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Lets a registered user regain access when they cannot remember their password.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in SF-11 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| MF-03 — Login / Session Recovery | When the caller needs password recovery to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| None | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** Enter email or phone number.
2. **System/Actor:** Show safe account-existence-neutral message.
3. **System/Actor:** Send OTP by email first, with Termii SMS fallback.
4. **System/Actor:** Verify OTP.
5. **System/Actor:** Set new password.
6. **System/Actor:** Revoke existing sessions.
7. **System/Actor:** Return user to Login.
8. **System/Actor:** Login runs normal profile/KYC/status checks.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Completed | Calling flow | Confirmed terminal result returned by SF-11. |
| Failed/retry | Calling flow | Confirmed terminal result returned by SF-11. |
| Abandoned | Calling flow | Confirmed terminal result returned by SF-11. |
| Pending where provider review is involved | Calling flow | Confirmed terminal result returned by SF-11. |

### Success return behavior

After success, SF-11 returns control according to: Returns to the calling parent flow. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- **This subflow fails or is abandoned:** SF-10 Status Recovery / Resume where applicable. The calling flow returns the user to the last valid checkpoint.
- **User lacks required permission/contact/provider response:** SF-09 Permission Recovery or provider retry. The app explains the blocker and offers the safest available path.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared mobile subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter SF-11 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## SF-12 — Payout Account Setup

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Collects and verifies the Tasker's payout account before withdrawal requests can be made.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in SF-12 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| MF-13 — Tasker Withdrawal | When the caller needs payout account setup to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| None | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** Select bank/provider.
2. **System/Actor:** Enter account number.
3. **System/Actor:** Resolve account name where provider supports it.
4. **System/Actor:** Show account-name confirmation.
5. **System/Actor:** Confirm with PIN.
6. **System/Actor:** Save payout account.
7. **System/Actor:** Send security notification.
8. **System/Actor:** Return to wallet or withdrawal flow.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Completed | Calling flow | Confirmed terminal result returned by SF-12. |
| Failed/retry | Calling flow | Confirmed terminal result returned by SF-12. |
| Abandoned | Calling flow | Confirmed terminal result returned by SF-12. |
| Pending where provider review is involved | Calling flow | Confirmed terminal result returned by SF-12. |

### Success return behavior

After success, SF-12 returns control according to: Returns to the calling parent flow. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- **This subflow fails or is abandoned:** SF-10 Status Recovery / Resume where applicable. The calling flow returns the user to the last valid checkpoint.
- **User lacks required permission/contact/provider response:** SF-09 Permission Recovery or provider retry. The app explains the blocker and offers the safest available path.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared mobile subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter SF-12 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.

---

## SF-13 — Google / Apple Social Authentication

> Status: approved; version 0.1; owner: Product Lead.

### In plain English

Lets users register or log in using Google or Apple while preserving Work2Cash profile, phone/contact, KYC, and recovery checks.

### Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in SF-13 gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

### Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
| MF-03 — Login / Session Recovery | When the caller needs google / apple social authentication to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |

### Inputs

| Input | Source | Required validation |
| --- | --- | --- |
| None | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |

### Steps

1. **Caller:** Open Google or Apple provider flow.
2. **System/Actor:** Receive provider identity result.
3. **System/Actor:** Match or create Work2Cash account safely.
4. **System/Actor:** Prevent duplicate accounts through account-linking rules.
5. **System/Actor:** Handle Apple private relay email cases.
6. **System/Actor:** Run Work2Cash profile, contact, KYC, and active-state checks.
7. **System/Actor:** Route user to the correct next flow.

### Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
| Completed | Calling flow | Confirmed terminal result returned by SF-13. |
| Failed/retry | Calling flow | Confirmed terminal result returned by SF-13. |
| Abandoned | Calling flow | Confirmed terminal result returned by SF-13. |
| Pending where provider review is involved | Calling flow | Confirmed terminal result returned by SF-13. |

### Success return behavior

After success, SF-13 returns control according to: Returns to the calling parent flow. The caller refreshes authoritative state before presenting the result.

### Failure return behavior

- **This subflow fails or is abandoned:** SF-10 Status Recovery / Resume where applicable. The calling flow returns the user to the last valid checkpoint.
- **User lacks required permission/contact/provider response:** SF-09 Permission Recovery or provider retry. The app explains the blocker and offers the safest available path.
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

### Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

### Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared mobile subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The `Called by`, `Inputs`, `Outputs` and return sections above | Defines how parent flows enter and resume this subflow. |

### Acceptance criteria

- [ ] Every named caller can enter SF-13 with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

### Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.
