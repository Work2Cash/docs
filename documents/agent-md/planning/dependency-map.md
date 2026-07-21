# Phase 3 Task Dependency Map

> Generated from all 125 canonical task records stored in 25 team-week source packs. “Start dependencies” must exist before work begins. “Later integration gates” may arrive in a later stage but must pass before connected acceptance.

| Task | Title | Stage | Start dependencies | Later integration gates | Directly unlocks at start | Flow references |
| --- | --- | ---: | --- | --- | --- | --- |
| ADM-W1D1 | Admin project foundation | Stage 1 | None | ADM-INT-01 | ADM-W1D2 | AF-01 |
| ADM-W1D2 | Admin auth shell | Stage 1 | ADM-W1D1 | ADM-INT-01 | ADM-W1D3 | AF-01, ASF-01, ASF-02 |
| ADM-W1D3 | Dashboard shell | Stage 1 | ADM-W1D2 | ADM-INT-01 | ADM-W1D4 | AF-02 |
| ADM-W1D4 | RBAC UI primitives | Stage 1 | ADM-W1D3 | ADM-INT-01 | ADM-W1D5 | ASF-02, ASF-05, ASF-06 |
| ADM-W1D5 | List/detail primitives | Stage 1 | ADM-W1D4 | ADM-INT-01 | ADM-W2D1 | ASF-03, ASF-11 |
| ADM-W2D1 | User management | Stage 1 | ADM-W1D5 | ADM-INT-01 | ADM-INT-01, ADM-W2D2 | AF-03 |
| ADM-W2D2 | KYC Review Operations | Stage 1 | ADM-W2D1 | ADM-INT-02 | ADM-W2D3 | AF-04, ASF-02, ASF-05, ASF-11 |
| ADM-W2D3 | Catalog management | Stage 1 | ADM-W2D2 | ADM-INT-02 | ADM-W2D4 | AF-11 |
| ADM-W2D4 | Task monitor foundation | Stage 1 | ADM-W2D3 | ADM-INT-03 | ADM-W2D5 | AF-05 |
| ADM-W2D5 | Media moderation | Stage 1 | ADM-W2D4 | ADM-INT-02 | ADM-INT-02, ADM-W3D1 | AF-13 |
| ADM-W3D1 | Discovery/matching monitor | Stage 1 | ADM-W2D5 | ADM-INT-03 | ADM-W3D2 | AF-05 |
| ADM-W3D2 | Active task operations | Stage 1 | ADM-W3D1 | ADM-INT-03 | ADM-W3D3 | AF-05 |
| ADM-W3D3 | Controlled force cancel | Stage 1 | ADM-W3D2 | ADM-INT-03 | ADM-W3D4 | AF-05, ASF-06 |
| ADM-W3D4 | Support live chat console | Stage 1 | ADM-W3D3 | ADM-INT-05 | ADM-W3D5 | AF-07 |
| ADM-W3D5 | Communication audit view | Stage 1 | ADM-W3D4 | ADM-INT-05 | ADM-INT-03, ADM-W4D1 | AF-05, AF-14 |
| ADM-W4D1 | Reports/disputes | Stage 1 | ADM-W3D5 | ADM-INT-04 | ADM-W4D2 | AF-06 |
| ADM-W4D2 | Risk/warning/strike | Stage 1 | ADM-W4D1 | ADM-INT-04 | ADM-W4D3 | AF-14 |
| ADM-W4D3 | Ratings/reviews moderation | Stage 1 | ADM-W4D2 | ADM-INT-04 | ADM-W4D4 | AF-22 |
| ADM-W4D4 | Finance transactions | Stage 1 | ADM-W4D3 | ADM-INT-04 | ADM-W4D5 | AF-08, AF-10, AF-24 |
| ADM-W4D5 | Payout batches | Stage 1 | ADM-W4D4 | ADM-INT-04 | ADM-INT-04, ADM-W5D1 | AF-09 |
| ADM-W5D1 | Wallet/refund support | Stage 1 | ADM-W4D5 | ADM-INT-04 | ADM-W5D2 | AF-10 |
| ADM-W5D2 | Notifications/announcements | Stage 1 | ADM-W5D1 | ADM-INT-05 | ADM-W5D3 | AF-21 |
| ADM-W5D3 | Remote config and coverage | Stage 1 | ADM-W5D2 | ADM-INT-05 | ADM-W5D4 | AF-12, AF-16 |
| ADM-W5D4 | Use-case health and monitoring | Stage 1 | ADM-W5D3 | ADM-INT-05 | ADM-W5D5 | AF-19, AF-20 |
| ADM-W5D5 | Audit logs and analytics | Stage 1 | ADM-W5D4 | ADM-INT-05 | ADM-INT-05, ADM-W6D1 | AF-18, AF-23 |
| BE-W1D1 | Repo foundation and contracts | Stage 2 | None | None | BE-W1D2 | FLOW-LIB-001 |
| MOB-W1D1 | Project setup, architecture, design system | Stage 2 | None | BE-W1D1 | MOB-W1D2 | FLOW-LIB-001 |
| BE-W1D2 | Auth contract stubs | Stage 2 | BE-W1D1 | None | BE-W1D3 | MF-01, MF-02, MF-03 |
| MOB-W1D2 | First launch and onboarding | Stage 2 | MOB-W1D1 | BE-W1D2 | MOB-W1D3 | MF-01, SF-10 |
| BE-W1D3 | Auth implementation | Stage 2 | BE-W1D2 | None | BE-W1D4 | MF-02, MF-03, SF-01, SF-13 |
| MOB-W1D3 | Registration and login | Stage 2 | MOB-W1D2 | BE-W1D3 | MOB-W1D4 | MF-02, MF-03, SF-01, SF-11, SF-13 |
| BE-W1D4 | Profile, mode, PIN, sessions | Stage 2 | BE-W1D3 | None | BE-W1D5, BE-W2D1 | SF-02, MF-18, MF-19 |
| MOB-W1D4 | Profile, mode, PIN, sessions | Stage 2 | MOB-W1D3 | BE-W1D4 | ADM-INT-01, MOB-W1D5 | SF-02, MF-18, MF-19 |
| BE-W1D5 | Admin auth and dashboard stubs | Stage 2 | BE-W1D4 | None | ADM-INT-01 | AF-01, AF-02 |
| MOB-W1D5 | Task Owner home and notification shell | Stage 2 | MOB-W1D4 | BE-W1D5 | MOB-W2D1 | MF-04, MF-20 |
| BE-W2D1 | Tasker and KYC APIs | Stage 2 | BE-W1D4 | None | BE-W2D2 | MF-05, SF-03, AF-04 |
| MOB-W2D1 | Tasker Activation and KYC | Stage 2 | MOB-W1D5 | BE-W2D1 | MOB-W2D2 | MF-05, SF-03 |
| BE-W2D2 | Catalog/task draft APIs | Stage 2 | BE-W2D1 | None | BE-W2D3 | MF-06, AF-11 |
| MOB-W2D2 | Catalog and task draft | Stage 2 | MOB-W2D1 | BE-W2D2 | MOB-W2D3 | MF-06 |
| BE-W2D3 | Location/media APIs | Stage 2 | BE-W2D2 | None | BE-W2D4 | MF-06, SF-04, SF-05, AF-13 |
| MOB-W2D3 | Location and media | Stage 2 | MOB-W2D2 | BE-W2D3 | MOB-W2D4 | MF-06, SF-04, SF-05, SF-09 |
| BE-W2D4 | Payment/escrow APIs | Stage 2 | BE-W2D3 | None | BE-W2D5 | MF-06, SF-06, SF-07, AF-08 |
| MOB-W2D4 | Payment and escrow funding | Stage 2 | MOB-W2D3 | BE-W2D4 | MOB-W2D5 | MF-06, SF-06, SF-07, SF-10 |
| BE-W2D5 | Broadcast/direct offer APIs | Stage 2 | BE-W2D4 | None | BE-W3D1 | MF-06, MF-08, AF-21 |
| MOB-W2D5 | Broadcast and direct offer | Stage 2 | MOB-W2D4 | BE-W2D5 | MOB-W3D1 | MF-06, MF-08 |
| BE-W3D1 | Discovery APIs | Stage 2 | BE-W2D5 | None | BE-W3D2 | MF-07, MF-09, AF-05 |
| MOB-W3D1 | Tasker discovery | Stage 2 | MOB-W2D5 | BE-W3D1 | MOB-W3D2 | MF-07, MF-09 |
| BE-W3D2 | Interest/accept APIs | Stage 2 | BE-W3D1 | None | BE-W3D3 | MF-08, MF-09 |
| MOB-W3D2 | Tasker interest and arrival confirmation | Stage 2 | MOB-W3D1 | BE-W3D2 | MOB-W3D3 | MF-08, MF-09 |
| BE-W3D3 | Candidate/selection APIs | Stage 2 | BE-W3D2 | None | BE-W3D4 | MF-07, MF-11, AF-05 |
| MOB-W3D3 | Task Owner candidate selection | Stage 2 | MOB-W3D2 | BE-W3D3 | MOB-W3D4 | MF-07, MF-11 |
| BE-W3D4 | Task execution state APIs | Stage 2 | BE-W3D3 | None | BE-W3D5 | MF-10, AF-05 |
| MOB-W3D4 | Active task status actions | Stage 2 | MOB-W3D3 | BE-W3D4 | MOB-W3D5 | MF-10 |
| BE-W3D5 | Socket/chat/tracking | Stage 2 | BE-W3D4 | None | ADM-INT-03, BE-W4D1 | MF-10, MF-16, AF-05, AF-07 |
| MOB-W3D5 | Chat, tracking, masked call entry | Stage 2 | MOB-W3D4 | BE-W3D5 | ADM-INT-03, MOB-W4D1 | MF-10, MF-16, SF-10 |
| BE-W4D1 | Completion/settlement | Stage 2 | BE-W3D5 | None | BE-W4D2 | MF-14 |
| MOB-W4D1 | Completion and settlement | Stage 2 | MOB-W3D5 | BE-W4D1 | MOB-W4D2 | MF-14, SF-05 |
| BE-W4D2 | Cancellation/reports | Stage 2 | BE-W4D1 | None | BE-W4D3 | MF-12, SF-08, AF-06, AF-14 |
| MOB-W4D2 | Cancellation, no-show, report | Stage 2 | MOB-W4D1 | BE-W4D2 | MOB-W4D3 | MF-12, SF-08 |
| BE-W4D3 | Ratings/favorites/rebook | Stage 2 | BE-W4D2 | None | BE-W4D4 | MF-15, MF-22, MF-24, AF-22 |
| MOB-W4D3 | Ratings, favorites, reviews | Stage 2 | MOB-W4D2 | BE-W4D3 | MOB-W4D4 | MF-15, MF-22 |
| BE-W4D4 | Wallet/withdrawal | Stage 2 | BE-W4D3 | None | ADM-INT-04, BE-W4D5 | MF-13, SF-07, SF-12, AF-08, AF-09, AF-10, AF-24 |
| MOB-W4D4 | Wallet and withdrawal | Stage 2 | MOB-W4D3 | BE-W4D4 | ADM-INT-04, MOB-W4D5 | MF-13, SF-07, SF-12 |
| BE-W4D5 | Support/emergency | Stage 2 | BE-W4D4 | None | BE-W5D1 | MF-16, MF-23, AF-07 |
| MOB-W4D5 | Support and emergency | Stage 2 | MOB-W4D4 | BE-W4D5 | MOB-W5D1 | MF-16, MF-23 |
| BE-W5D1 | Admin operational APIs | Stage 2 | BE-W4D5 | None | ADM-INT-01, BE-W5D2 | AF-03, AF-05, AF-06, AF-08, AF-13, AF-22 |
| MOB-W5D1 | Settings and notification preferences | Stage 2 | MOB-W4D5 | BE-W5D1 | MOB-W5D2 | MF-18, MF-19, MF-20 |
| BE-W5D2 | Referral and notification APIs | Stage 2 | BE-W5D1 | None | BE-W5D3 | MF-17, MF-20, AF-15, AF-21 |
| MOB-W5D2 | Referral and rebook | Stage 2 | MOB-W5D1 | BE-W5D2 | ADM-INT-05, MOB-W5D3 | MF-17, MF-24 |
| BE-W5D3 | Provider hardening | Stage 2 | BE-W5D2 | None | BE-W5D4 | FLOW-LIB-001 |
| MOB-W5D3 | Offline/recovery polish | Stage 2 | MOB-W5D2 | BE-W5D3 | MOB-W5D4 | SF-09, SF-10 |
| BE-W5D4 | Operations/monitoring | Stage 2 | BE-W5D3 | None | ADM-INT-05, BE-W5D5 | AF-19, AF-20 |
| MOB-W5D4 | Provider integration QA | Stage 2 | MOB-W5D3 | BE-W5D4 | MOB-W5D5 | FLOW-LIB-001 |
| BE-W5D5 | Integrated defect pass | Stage 2 | BE-W5D4 | None | BE-W6D1 | FLOW-LIB-001 |
| MOB-W5D5 | Full mobile flow QA | Stage 2 | MOB-W5D4 | BE-W5D5 | MOB-W6D1 | FLOW-LIB-001 |
| ADM-INT-01 | Identity and User Management Integration | Stage 3 | ADM-W2D1, BE-W1D5, BE-W5D1, MOB-W1D4 | None | ADM-INT-02 | AF-01, AF-02, AF-03 |
| ADM-INT-02 | KYC, Catalog and Media Integration | Stage 3 | ADM-INT-01, ADM-W2D5 | None | ADM-INT-03 | AF-04, AF-11, AF-13 |
| ADM-INT-03 | Task Monitoring, Matching and Execution Integration | Stage 3 | ADM-INT-02, ADM-W3D5, BE-W3D5, MOB-W3D5 | None | ADM-INT-04 | AF-05, AF-07, AF-14 |
| ADM-INT-04 | Reports, Finance and Payout Integration | Stage 3 | ADM-INT-03, ADM-W4D5, BE-W4D4, MOB-W4D4 | None | ADM-INT-05 | AF-06, AF-08, AF-10, AF-22, AF-24 |
| ADM-INT-05 | Support, Configuration and Operations Integration | Stage 3 | ADM-INT-04, ADM-W5D5, BE-W5D4, MOB-W5D2 | None | ADM-W6D1 | AF-09, AF-10, AF-12, AF-15, AF-16, AF-18, AF-19, AF-20, AF-21, AF-23 |
| ADM-W6D1 | Admin hardening | Stage 4 | ADM-W5D5, ADM-INT-05 | BE-W6D1, MOB-W6D1 | ADM-W6D2 | FLOW-LIB-001 |
| BE-W6D1 | Security and idempotency hardening | Stage 4 | BE-W5D5 | None | BE-W6D2 | FLOW-LIB-001 |
| MOB-W6D1 | Hardening sprint | Stage 4 | MOB-W5D5 | BE-W6D1 | MOB-W6D2 | FLOW-LIB-001 |
| ADM-W6D2 | Admin performance and table QA | Stage 4 | ADM-W6D1 | BE-W6D2, MOB-W6D2 | ADM-W6D3 | FLOW-LIB-001 |
| BE-W6D2 | Performance/load pass | Stage 4 | BE-W6D1 | None | BE-W6D3 | FLOW-LIB-001 |
| MOB-W6D2 | Performance and device QA | Stage 4 | MOB-W6D1 | BE-W6D2 | MOB-W6D3 | FLOW-LIB-001 |
| ADM-W6D3 | Security and permission review | Stage 4 | ADM-W6D2 | BE-W6D3, MOB-W6D3 | ADM-W6D4 | FLOW-LIB-001 |
| BE-W6D3 | Provider recovery hardening | Stage 4 | BE-W6D2 | None | BE-W6D4 | FLOW-LIB-001 |
| MOB-W6D3 | Provider recovery flows | Stage 4 | MOB-W6D2 | BE-W6D3 | MOB-W6D4 | FLOW-LIB-001 |
| ADM-W6D4 | Operational workflow review | Stage 4 | ADM-W6D3 | BE-W6D4, MOB-W6D4 | ADM-W6D5 | FLOW-LIB-001 |
| BE-W6D4 | Security review fixes | Stage 4 | BE-W6D3 | None | BE-W6D5 | FLOW-LIB-001 |
| MOB-W6D4 | Security and privacy review | Stage 4 | MOB-W6D3 | BE-W6D4 | MOB-W6D5 | FLOW-LIB-001 |
| ADM-W6D5 | Hardening review | Stage 4 | ADM-W6D4 | BE-W6D5, MOB-W6D5 | ADM-W7D1 | FLOW-LIB-001 |
| BE-W6D5 | Hardening review | Stage 4 | BE-W6D4 | None | BE-W7D1 | FLOW-LIB-001 |
| MOB-W6D5 | Hardening review | Stage 4 | MOB-W6D4 | BE-W6D5 | MOB-W7D1 | FLOW-LIB-001 |
| ADM-W7D1 | Admin release candidate preparation | Stage 4 | ADM-W6D5 | BE-W7D1, MOB-W7D1 | ADM-W7D2 | FLOW-LIB-001 |
| BE-W7D1 | Release candidate backend preparation | Stage 4 | BE-W6D5 | None | BE-W7D2 | FLOW-LIB-001 |
| MOB-W7D1 | Release candidate preparation | Stage 4 | MOB-W6D5 | BE-W7D1 | MOB-W7D2 | FLOW-LIB-001 |
| ADM-W7D2 | Finance and payout dry run | Stage 4 | ADM-W7D1 | BE-W7D2, MOB-W7D2 | ADM-W7D3 | FLOW-LIB-001 |
| BE-W7D2 | Backup and restore dry run | Stage 4 | BE-W7D1 | None | BE-W7D3 | FLOW-LIB-001 |
| MOB-W7D2 | Device matrix QA | Stage 4 | MOB-W7D1 | BE-W7D2 | MOB-W7D3 | FLOW-LIB-001 |
| ADM-W7D3 | Support and operations dry run | Stage 4 | ADM-W7D2 | BE-W7D3, MOB-W7D3 | ADM-W7D4 | FLOW-LIB-001 |
| BE-W7D3 | Payout and finance dry run | Stage 4 | BE-W7D2 | None | BE-W7D4 | FLOW-LIB-001 |
| MOB-W7D3 | Operations dry run support | Stage 4 | MOB-W7D2 | BE-W7D3 | MOB-W7D4 | FLOW-LIB-001 |
| ADM-W7D4 | Monitoring and config validation | Stage 4 | ADM-W7D3 | BE-W7D4, MOB-W7D4 | ADM-W7D5 | FLOW-LIB-001 |
| BE-W7D4 | Provider validation report | Stage 4 | BE-W7D3 | None | BE-W7D5 | FLOW-LIB-001 |
| MOB-W7D4 | Provider validation support | Stage 4 | MOB-W7D3 | BE-W7D4 | MOB-W7D5 | FLOW-LIB-001 |
| ADM-W7D5 | Admin release candidate | Stage 4 | ADM-W7D4 | BE-W7D5, MOB-W7D5 | ADM-W8D1 | FLOW-LIB-001 |
| BE-W7D5 | Backend release candidate | Stage 4 | BE-W7D4 | None | BE-W8D1 | FLOW-LIB-001 |
| MOB-W7D5 | Mobile release candidate | Stage 4 | MOB-W7D4 | BE-W7D5 | MOB-W8D1 | FLOW-LIB-001 |
| ADM-W8D1 | Stabilization sprint | Stage 4 | ADM-W7D5 | BE-W8D1, MOB-W8D1 | ADM-W8D2 | FLOW-LIB-001 |
| BE-W8D1 | Stabilization sprint | Stage 4 | BE-W7D5 | None | BE-W8D2 | FLOW-LIB-001 |
| MOB-W8D1 | Stabilization sprint | Stage 4 | MOB-W7D5 | BE-W8D1 | MOB-W8D2 | FLOW-LIB-001 |
| ADM-W8D2 | Final admin defect pass | Stage 4 | ADM-W8D1 | BE-W8D2, MOB-W8D2 | ADM-W8D3 | FLOW-LIB-001 |
| BE-W8D2 | Final backend defect pass | Stage 4 | BE-W8D1 | None | BE-W8D3 | FLOW-LIB-001 |
| MOB-W8D2 | Final defect pass | Stage 4 | MOB-W8D1 | BE-W8D2 | MOB-W8D3 | FLOW-LIB-001 |
| ADM-W8D3 | Go-live rehearsal | Stage 4 | ADM-W8D2 | BE-W8D3, MOB-W8D3 | ADM-W8D4 | FLOW-LIB-001 |
| BE-W8D3 | Go-live rehearsal | Stage 4 | BE-W8D2 | None | BE-W8D4 | FLOW-LIB-001 |
| MOB-W8D3 | Go-live rehearsal | Stage 4 | MOB-W8D2 | BE-W8D3 | MOB-W8D4 | FLOW-LIB-001 |
| ADM-W8D4 | Admin handover | Stage 4 | ADM-W8D3 | BE-W8D4, MOB-W8D4 | ADM-W8D5 | FLOW-LIB-001 |
| BE-W8D4 | Backend handover | Stage 4 | BE-W8D3 | None | BE-W8D5 | FLOW-LIB-001 |
| MOB-W8D4 | Handover and store readiness | Stage 4 | MOB-W8D3 | BE-W8D4 | MOB-W8D5 | FLOW-LIB-001 |
| ADM-W8D5 | Admin build freeze | Stage 4 | ADM-W8D4 | BE-W8D5, MOB-W8D5 | No named start-dependent consumer | FLOW-LIB-001 |
| BE-W8D5 | Backend build freeze | Stage 4 | BE-W8D4 | None | No named start-dependent consumer | FLOW-LIB-001 |
| MOB-W8D5 | Build freeze | Stage 4 | MOB-W8D4 | BE-W8D5 | No named start-dependent consumer | FLOW-LIB-001 |
