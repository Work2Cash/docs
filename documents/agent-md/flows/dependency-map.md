# Work2Cash Flow Dependency Map

> Generated from all canonical sources in `content/flows/`. Use an individual flow page for the verbal explanation and selection conditions.

| ID | Flow | Depends on | Calls reusable subflows | Called by | Possible next flows |
| --- | --- | --- | --- | --- | --- |
| AF-01 | Admin Entry Login and TOTP | ASF-01, ASF-11 | ASF-01, ASF-11 | Not applicable | AF-02, AF-24, ASF-02, AF-17 |
| AF-02 | Admin Dashboard Overview | AF-01, ASF-02, ASF-03, ASF-11 | ASF-02, ASF-03, ASF-11 | Not applicable | AF-03, AF-04, AF-05, AF-08, AF-19 |
| AF-03 | User Management | AF-01, ASF-02, ASF-03, ASF-04, ASF-05 | ASF-02, ASF-03, ASF-04, ASF-05 | Not applicable | AF-04, AF-06, AF-10, AF-14 |
| AF-04 | Tasker and KYC Review | AF-03, ASF-02, ASF-04, ASF-05, ASF-06, ASF-07, ASF-10 | ASF-02, ASF-04, ASF-05, ASF-06, ASF-07, ASF-10 | Not applicable | AF-03, AF-14, AF-19, AF-04 |
| AF-05 | Task Operations Monitoring | ASF-03, ASF-04, ASF-06, ASF-07 | ASF-03, ASF-04, ASF-06, ASF-07 | Not applicable | AF-06, AF-07, AF-08, AF-13, AF-19 |
| AF-06 | Task Report and Dispute Resolution | AF-05, AF-13, AF-14, ASF-06, ASF-05, ASF-07, ASF-09 | ASF-06, ASF-05, ASF-07, ASF-09 | Not applicable | AF-09, AF-10, AF-14 |
| AF-07 | Support Live Chat Operations | AF-03, ASF-09, ASF-04, ASF-05 | ASF-09, ASF-04, ASF-05 | Not applicable | AF-06, AF-08, AF-10, AF-14 |
| AF-08 | Finance: Payments, Escrow and Reconciliation | ASF-10, ASF-03, ASF-04, ASF-08 | ASF-10, ASF-03, ASF-04, ASF-08 | Not applicable | AF-05, AF-09, AF-10, AF-19 |
| AF-09 | Withdrawal and Payout Batch Operations | ASF-10, ASF-03, ASF-04, ASF-05 | ASF-10, ASF-03, ASF-04, ASF-05 | Not applicable | AF-08, AF-14, AF-18 |
| AF-10 | Wallet, Refund and Excess Funding Support | AF-03, AF-08, ASF-04, ASF-05, ASF-09, ASF-10 | ASF-04, ASF-05, ASF-09, ASF-10 | Not applicable | AF-07, AF-08, AF-18 |
| AF-11 | Task Catalog Management | ASF-05, ASF-03, ASF-07 | ASF-05, ASF-03, ASF-07 | Not applicable | AF-16, AF-18 |
| AF-12 | Service Coverage Configuration | ASF-05, AF-16, ASF-07, ASF-11 | ASF-05, ASF-07, ASF-11 | Not applicable | AF-16, AF-05 |
| AF-13 | Task Media Moderation | ASF-06, ASF-05, ASF-07 | ASF-06, ASF-05, ASF-07 | Not applicable | AF-06, AF-14, AF-19 |
| AF-14 | Risk, Trust, Warning and Strike Review | ASF-05, ASF-04, ASF-06, ASF-07 | ASF-05, ASF-04, ASF-06, ASF-07 | Not applicable | AF-03, AF-06, AF-07, AF-18 |
| AF-15 | Referral Management | ASF-03, ASF-04, ASF-05, ASF-07 | ASF-03, ASF-04, ASF-05, ASF-07 | Not applicable | AF-08, AF-14, AF-18 |
| AF-16 | Platform Config and Remote Config | ASF-05, ASF-02, ASF-07 | ASF-05, ASF-02, ASF-07 | Not applicable | AF-11, AF-12, AF-19, AF-18 |
| AF-17 | Admin Users, Roles and Permissions | AF-01, ASF-02, ASF-05, ASF-07 | ASF-02, ASF-05, ASF-07 | Not applicable | AF-18, AF-19 |
| AF-18 | Audit Log Review | ASF-03, ASF-08, ASF-04 | ASF-03, ASF-08, ASF-04 | Not applicable | AF-03, AF-08, AF-14, AF-17 |
| AF-19 | Use Case Health and Background Job Monitoring | ASF-04, ASF-10, ASF-08 | ASF-04, ASF-10, ASF-08 | Not applicable | AF-08, AF-20, AF-18 |
| AF-20 | Monitoring, Backup and Incident Readiness | ASF-04, ASF-08, ASF-11 | ASF-04, ASF-08, ASF-11 | Not applicable | AF-19, AF-07, AF-18 |
| AF-21 | Notifications and Announcements | ASF-05, ASF-02, ASF-07, ASF-11 | ASF-05, ASF-02, ASF-07, ASF-11 | Not applicable | AF-18, AF-19, AF-20 |
| AF-22 | Ratings and Reviews Management | ASF-05, ASF-03, ASF-04, ASF-07 | ASF-05, ASF-03, ASF-04, ASF-07 | Not applicable | AF-06, AF-14, AF-18 |
| AF-23 | Basic Analytics and Reports | ASF-02, ASF-03, ASF-08 | ASF-02, ASF-03, ASF-08 | Not applicable | AF-08, AF-18, AF-19 |
| AF-24 | Receipt and Transaction Review | ASF-03, ASF-04, ASF-08, ASF-10 | ASF-03, ASF-04, ASF-08, ASF-10 | Not applicable | AF-08, AF-10, AF-06, AF-18 |
| ASF-01 | Admin Login and TOTP Verification | None | None | AF-01, AF-02, AF-24 | Return/terminal only |
| ASF-02 | RBAC Permission Gate | None | None | AF-02, AF-03, AF-16, AF-17, AF-21, AF-23, AF-24 | Return/terminal only |
| ASF-03 | List, Search, Filter and Pagination | None | None | AF-02, AF-03, AF-05, AF-08, AF-09, AF-11, AF-15, AF-18, AF-22, AF-23, AF-24 | Return/terminal only |
| ASF-04 | Record Detail Review | None | None | AF-03, AF-04, AF-05, AF-07, AF-08, AF-09, AF-10, AF-14, AF-15, AF-18, AF-19, AF-20, AF-22, AF-24 | Return/terminal only |
| ASF-05 | Reason and Audit Confirmation | None | None | AF-03, AF-06, AF-07, AF-09, AF-10, AF-11, AF-12, AF-13, AF-14, AF-15, AF-16, AF-17, AF-21, AF-22 | Return/terminal only |
| ASF-06 | Evidence and Media Review | None | None | AF-04, AF-05, AF-06, AF-13, AF-14 | Return/terminal only |
| ASF-07 | Status Change and Decision Action | None | None | AF-04, AF-05, AF-06, AF-11, AF-12, AF-13, AF-14, AF-15, AF-16, AF-17, AF-21, AF-22 | Return/terminal only |
| ASF-08 | Export and Report Generation | None | None | AF-08, AF-18, AF-19, AF-20, AF-23, AF-24, AF-09, AF-14 | Return/terminal only |
| ASF-09 | Support Live Chat Assignment | None | None | AF-06, AF-07, AF-10, AF-14 | Return/terminal only |
| ASF-10 | Provider Reconciliation and Retry | None | None | AF-04, AF-08, AF-09, AF-10, AF-19, AF-24 | Return/terminal only |
| ASF-11 | Empty Loading and Error Recovery | None | None | AF-01, AF-24 | Return/terminal only |
| MF-01 | First App Launch and Entry Decision | SF-10 | SF-10 | Not applicable | MF-02, MF-03, MF-04, MF-05 |
| MF-02 | Registration | SF-01, SF-02, SF-10 | SF-01, SF-02, SF-10 | Not applicable | MF-04, MF-05 |
| MF-03 | Login / Session Recovery | SF-01, SF-02, SF-03, SF-10, SF-11, SF-13 | SF-01, SF-02, SF-03, SF-10, SF-11, SF-13 | Not applicable | MF-04, MF-05, MF-06, MF-09 |
| MF-04 | Task Owner Home | SF-10 | SF-10 | Not applicable | MF-06, MF-15, MF-16, MF-05 |
| MF-05 | Tasker Activation | SF-02, SF-03, SF-04, SF-09 | SF-02, SF-03, SF-04, SF-09 | Not applicable | MF-09, MF-13 |
| MF-06 | Task Owner Create and Fund Task | SF-04, SF-05, SF-06, SF-10 | SF-04, SF-05, SF-06, SF-10 | Not applicable | MF-07, MF-08, MF-06, SF-10 |
| MF-07 | Public Discovery and Tasker Interest | SF-04, SF-10 | SF-04, SF-10 | Not applicable | MF-10, MF-11, MF-12 |
| MF-08 | Direct Offer to Favorite Tasker | SF-10 | SF-10 | Not applicable | MF-10, MF-07, MF-12 |
| MF-09 | Tasker Browse and Accept Task | SF-03, SF-04, SF-09 | SF-03, SF-04, SF-09 | Not applicable | MF-10, MF-09 |
| MF-10 | Active Task Execution | SF-05, SF-07, SF-08, SF-10 | SF-05, SF-07, SF-08, SF-10 | Not applicable | MF-14, MF-12, MF-16 |
| MF-11 | Task Owner Rejection | SF-08 | SF-08 | Not applicable | MF-07, MF-08, MF-12 |
| MF-12 | Cancellation / No-Show | SF-08, SF-10 | SF-08, SF-10 | Not applicable | MF-07, MF-14, MF-16 |
| MF-13 | Tasker Withdrawal | SF-10, SF-12 | SF-10, SF-12 | Not applicable | MF-04, MF-09 |
| MF-14 | Completion and Settlement | SF-05, SF-08 | SF-05, SF-08 | Not applicable | MF-15, MF-13, MF-16 |
| MF-15 | Favorites | None | None | Not applicable | MF-08, MF-06 |
| MF-16 | Support Live Chat | SF-05, SF-08, SF-10 | SF-05, SF-08, SF-10 | Not applicable | MF-04, MF-09, MF-12 |
| MF-17 | Referral | MF-02, MF-14 | None | Not applicable | MF-04, MF-13 |
| MF-18 | Profile and Settings Management | SF-01, SF-02, SF-10 | SF-01, SF-02, SF-10 | Not applicable | MF-04, MF-19, MF-20, MF-16 |
| MF-19 | Security and Device Management | SF-01, SF-10 | SF-01, SF-10 | Not applicable | MF-18, MF-13, SF-12 |
| MF-20 | Notification Center and Preferences | SF-10 | SF-10 | Not applicable | MF-04, MF-10, MF-16, MF-18 |
| MF-21 | Tasker Availability and Work Preferences | SF-03, SF-04, SF-09 | SF-03, SF-04, SF-09 | Not applicable | MF-09, MF-10 |
| MF-22 | Ratings and Reviews | SF-08 | SF-08 | Not applicable | MF-15, MF-24, MF-16 |
| MF-23 | Emergency Support | SF-05, SF-08, SF-10 | SF-05, SF-08, SF-10 | Not applicable | MF-16, MF-12, MF-10 |
| MF-24 | Rebook / Repeat Task | SF-04, SF-05, SF-06 | SF-04, SF-05, SF-06 | Not applicable | MF-06, MF-08, MF-07 |
| SF-01 | OTP Verification | None | None | MF-02, MF-03, MF-18, MF-19 | Return/terminal only |
| SF-02 | Complete Profile | None | None | MF-02, MF-03, MF-05, MF-18 | Return/terminal only |
| SF-03 | Tasker KYC | None | None | MF-03, MF-05, MF-09, MF-21 | Return/terminal only |
| SF-04 | Location, Address and Pin Confirmation | None | None | MF-05, MF-06, MF-07, MF-09, MF-21, MF-24 | Return/terminal only |
| SF-05 | Media Upload | None | None | MF-06, MF-10, MF-14, MF-16, MF-23, MF-24 | Return/terminal only |
| SF-06 | Payment and Escrow Funding | None | None | MF-06, MF-24 | Return/terminal only |
| SF-07 | Communication | None | None | MF-10 | Return/terminal only |
| SF-08 | Report / Dispute | None | None | MF-10, MF-11, MF-12, MF-14, MF-16, MF-22, MF-23 | Return/terminal only |
| SF-09 | Permission Recovery | None | None | MF-05, MF-09, MF-21 | Return/terminal only |
| SF-10 | Status Recovery / Resume | None | None | MF-01, MF-02, MF-03, MF-04, MF-06, MF-07, MF-08, MF-10, MF-12, MF-13, MF-16, MF-18, MF-19, MF-20, MF-23 | Return/terminal only |
| SF-11 | Password Recovery | None | None | MF-03 | Return/terminal only |
| SF-12 | Payout Account Setup | None | None | MF-13 | Return/terminal only |
| SF-13 | Google / Apple Social Authentication | None | None | MF-03 | Return/terminal only |
