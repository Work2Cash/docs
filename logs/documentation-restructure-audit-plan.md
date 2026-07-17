# Work2Cash Documentation Audit and Restructuring Plan

## Document Control

| Field | Value |
| --- | --- |
| Document | Repository-wide documentation audit and restructuring plan |
| Repository | Work2Cash Documentation Portal |
| Created | 16 July 2026 |
| Status | Proposed work plan |
| Primary owner | Technical Lead |
| Supporting owners | Product Lead, Project Lead, Mobile, Admin, Backend, QA, Infrastructure, Operations, Finance, Support and Legal reviewers |
| Controlling authority | Main Enterprise Architecture, subject to formally approved revisions |
| Scope | Human-facing HTML, AI-agent Markdown, portal navigation, governance, generation, validation and every major document family |

## Purpose

This document records the full audit of the Work2Cash documentation repository and the plan for making every part independently understandable and usable by:

- Non-technical team members.
- Junior mobile, admin and backend developers.
- Product, operations, support and finance teams.
- QA and release coordinators.
- Infrastructure and security owners.
- Codex and other AI agents.

The desired outcome is that a reader can navigate directly to a flow, task, endpoint, model, provider, test, policy or architecture section and understand it without repeatedly scrolling elsewhere to decode identifiers or retrieve missing context.

## Audit Summary

The repository contains comprehensive product and technical knowledge, but the information architecture makes isolated reading difficult. Much of the required information already exists; the primary work is to reorganize, clarify, modularize and govern it.

### Confirmed findings

- [x] Repair 169 broken cross-document links across the 13 human HTML documents.
- [ ] Reduce the approximately 2.9 MB agent documentation footprint through focused context packs and clean Markdown.
- [ ] Replace the 33,399-line Full Project Markdown bundle with a generated, versioned agent-context artifact.
- [ ] Split the 13,095-line mobile flow catalogue into independently readable flow and subflow files.
- [ ] Split the 10,254-line admin flow catalogue into independently readable flow and subflow files.
- [ ] Remove decorative HTML from agent Markdown files.
- [ ] Make dependencies understandable without looking up codes elsewhere.
- [ ] Explain next flows conditionally instead of listing destinations without reasons.
- [ ] Convert build-plan rows into independently executable task specifications.
- [ ] Remove duplicated planning content across build plans, weekly packs and the full-project bundle.
- [ ] Establish unambiguous document ownership, status, authority and freshness.
- [ ] Propagate accepted decisions consistently across architecture, flows, screen maps, contracts, models, plans and QA.
- [ ] Add automated checks for navigation, accessibility, metadata, parity and documentation quality.

## Repository-Wide Readability Standard

Every independently readable unit must answer the following questions locally.

- [ ] What is this?
- [ ] Why does it exist?
- [ ] Who uses it?
- [ ] Who owns it?
- [ ] What must already be true?
- [ ] What information, records or permissions does it require?
- [ ] What happens in plain English?
- [ ] Which actor performs each action?
- [ ] What decisions or branches can occur?
- [ ] What records or systems are read, created or changed?
- [ ] What notifications, events, jobs or audit records are produced?
- [ ] What can fail?
- [ ] How is each failure recovered?
- [ ] How does the reader or system return to the original path?
- [ ] What does success mean?
- [ ] What are the possible endings?
- [ ] What happens next, and under which condition?
- [ ] What is deliberately outside the scope?
- [ ] How is completion tested and evidenced?
- [ ] Where can a developer find deeper implementation details?

Cross-references may provide additional depth, but they must not be required merely to understand the current section.

## Target Documentation Model

### Canonical-source model

- [ ] Define modular structured Markdown as the canonical content source.
- [ ] Generate human HTML and agent Markdown from the same source content.
- [ ] Stop manually maintaining equivalent prose independently in HTML and Markdown.
- [ ] Mark all generated artifacts clearly.
- [ ] Prevent direct edits to generated files through CI checks.
- [ ] Generate the Full Project Agent Context from approved source files.
- [ ] Generate focused team, week, flow and domain context packs.

```text
Canonical structured Markdown
  -> Human HTML pages
  -> Clean AI-agent Markdown
  -> Team context packs
  -> Weekly context packs
  -> Full Project Agent Context
```

### Required source metadata

Every canonical document or content unit must include:

- [ ] Stable ID.
- [ ] Title.
- [ ] Document/content type.
- [ ] Intended audiences.
- [ ] Owner.
- [ ] Required reviewers.
- [ ] Version.
- [ ] Lifecycle status.
- [ ] Approval status.
- [ ] Last reviewed date.
- [ ] Next review date.
- [ ] Authority or controlling source.
- [ ] Superseded content, if applicable.
- [ ] Tags and related domains.

### Human HTML output standard

- [ ] Plain-language introduction.
- [ ] At-a-glance summary.
- [ ] Local definitions for unfamiliar terms.
- [ ] Verbal walkthrough before dense tables or diagrams.
- [ ] Optional expandable technical detail.
- [ ] Visual diagrams only where they materially improve understanding.
- [ ] Working breadcrumbs and related-document links.
- [ ] Previous, next, index and back-to-top navigation.
- [ ] Visible owner, version, status and review date.
- [ ] Responsive tables and layouts.
- [ ] Keyboard and screen-reader accessibility.
- [ ] Print-friendly presentation.

### AI-agent Markdown output standard

- [ ] Use clean Markdown without decorative `<div>` or CSS-oriented markup.
- [ ] Keep headings semantically consistent.
- [ ] State source authority and freshness.
- [ ] Expand dependencies by name and purpose.
- [ ] State inputs, outputs and side effects explicitly.
- [ ] Include business rules and forbidden behavior.
- [ ] Include acceptance criteria and required tests.
- [ ] Include concise traceability to relevant flows, contracts, models and providers.
- [ ] Avoid screen silhouettes and presentational material.
- [ ] Remain usable as focused agent context without the full-project bundle.

## Workstream 1: Portal and Repository Entry Points

### Problems to correct

- [ ] Replace the document-library-only experience with guided entry paths.
- [ ] Separate human guidance from AI-agent download instructions.
- [ ] Identify the active execution week prominently.
- [ ] Add site-wide search.
- [ ] Add audience, team, type, status, flow and week filters.
- [ ] Display document status and freshness.
- [ ] Repair all 169 broken internal document-hub links.
- [ ] Add reliable breadcrumbs and return navigation.
- [ ] Add a site-wide glossary entry point.
- [ ] Add missing accessibility features.

### Pages and components to create

- [ ] Human Start Here page.
- [ ] Product and Operations reading path.
- [ ] Non-Technical Stakeholder reading path.
- [ ] Junior Developer Start Here page.
- [ ] Mobile Developer reading path.
- [ ] Admin Developer reading path.
- [ ] Backend Developer reading path.
- [ ] QA reading path.
- [ ] Infrastructure and Security reading path.
- [ ] Finance and Support reading path.
- [ ] Document registry page.
- [ ] Current Week panel.
- [ ] Search and filter interface.

### Portal acceptance checklist

- [ ] A new team member can identify the correct starting page in under one minute.
- [ ] Every document link resolves to a real file or anchor.
- [ ] Every page has a clear route back to the portal and its document-family index.
- [ ] Every page identifies its audience, owner, status and last review date.
- [ ] Keyboard-only navigation works.
- [ ] Heading structure passes accessibility review.
- [ ] Tables remain usable on narrow screens.
- [ ] Print output is readable.

## Workstream 2: README and Onboarding

### Root README fixes

- [ ] Add a concise explanation of Work2Cash.
- [ ] Explain Task Owner and Tasker roles.
- [ ] Explain the documentation repository's purpose.
- [ ] Add a repository map.
- [ ] Link human and developer onboarding paths.
- [ ] Explain document authority and conflict resolution.
- [ ] Explain how documentation changes are proposed and approved.
- [ ] Keep publishing and security instructions, but move implementation detail to the appropriate contributor guide.

### Onboarding content to create

- [ ] Work2Cash in Five Minutes.
- [ ] How the complete marketplace journey works.
- [ ] How Mobile, Admin, Backend and providers interact.
- [ ] Team ownership and collaboration map.
- [ ] Glossary of product and technical terms.
- [ ] Junior Developer repository reading strategy.
- [ ] Definition of done for implementation work.
- [ ] Worked example showing one requirement from product through flow, contract, model, implementation and QA.

## Workstream 3: Main Enterprise Architecture

### Structure fixes

- [ ] Retain the document as the controlling architecture hub.
- [ ] Add an executive plain-language product overview at the beginning.
- [ ] Put key terminology close to first use.
- [ ] Separate stable architecture decisions from volatile cost and provider data.
- [ ] Link detailed documents instead of duplicating their entire contents.
- [ ] Define document lifecycle terms such as Draft, Approved and Active.
- [ ] Remove stale references to existing documents as Planned.
- [ ] Make each architecture section understandable independently.
- [ ] Add a visible decision register and risk register.

### Architecture Decision Records to create

- [ ] Unified user model.
- [ ] Separate Task Owner and Tasker wallets.
- [ ] Escrow-first payment model.
- [ ] REST versus Socket responsibility boundary.
- [ ] Direct offers through REST and FCM.
- [ ] No admin task reassignment.
- [ ] DigitalOcean production baseline.
- [ ] Contabo staging baseline.
- [ ] Provider port and adapter boundary.
- [ ] Masked-call strategy and disablement rule.
- [ ] Cardless-payment-first user experience.

### Architecture section template

- [ ] Business meaning.
- [ ] Decision.
- [ ] Reason.
- [ ] Trade-off.
- [ ] Systems affected.
- [ ] Teams affected.
- [ ] Security and privacy effects.
- [ ] Cost and operations effects.
- [ ] Related flows and contracts.
- [ ] Open questions.
- [ ] Approval and review status.

## Workstream 4: Screen-to-Feature Map

### Content corrections

- [ ] Replace generic primary KYC document-upload behavior with the accepted Smile ID NIN/BVN and biometric path.
- [ ] Remove OPay where it conflicts with the approved Paystack and Moniepoint provider scope.
- [ ] Remove or clearly mark Tasker auto-accept as deferred.
- [ ] Replace old category labels with Home, Errands, Office and Support.
- [ ] Remove Facebook from MVP authentication references.
- [ ] Identify the exact Figma file/version and review date.

### Required screen-record template

- [ ] Screen ID and name.
- [ ] Actor.
- [ ] Plain-language purpose.
- [ ] Entry routes.
- [ ] Preconditions.
- [ ] Information displayed.
- [ ] Available actions.
- [ ] Validation and business rules.
- [ ] Loading, empty, error, offline and permission states.
- [ ] Sensitive-data rules.
- [ ] Previous and next screens.
- [ ] Main flow and subflow relationships.
- [ ] API dependencies.
- [ ] Data-model dependencies.
- [ ] Design status.
- [ ] Implementation status.
- [ ] Acceptance criteria.

### Design-status controls

- [ ] Accepted design.
- [ ] Needs product correction.
- [ ] Product decision overrides design.
- [ ] Deferred.
- [ ] Missing design.
- [ ] Implemented and verified.

## Workstream 5: Mobile and Admin Flow Catalogues

### Catalogue restructuring

- [ ] Create one canonical file per main flow.
- [ ] Create one canonical file per reusable subflow.
- [ ] Keep compact mobile and admin flow indexes.
- [ ] Keep global dependency maps on catalogue index pages.
- [ ] Make every flow independently understandable.
- [ ] Generate combined catalogue pages only as optional reference outputs.
- [ ] Remove screen silhouettes from agent Markdown.
- [ ] Place the verbal walkthrough before visual screen maps in HTML.
- [ ] Remove duplicated Flow Path and Happy Path sections.
- [ ] Eliminate phrases such as "additional steps continue" from flow diagrams.

### Required main-flow template

- [ ] Flow ID, name, domain, status and owner.
- [ ] One-paragraph plain-English explanation.
- [ ] Business problem solved.
- [ ] Primary actor and supporting actors.
- [ ] Before this flow begins.
- [ ] Entry conditions and triggers.
- [ ] Required records and their states.
- [ ] Required permissions.
- [ ] Required provider or system information.
- [ ] Dependencies named and explained locally.
- [ ] Reusable subflows named and explained locally.
- [ ] Complete verbal walkthrough.
- [ ] Actor-labelled steps.
- [ ] Decision branches and selection conditions.
- [ ] Records read, created and changed.
- [ ] Notifications, jobs, events and audit effects.
- [ ] Terminal states explained.
- [ ] Default next step.
- [ ] Conditional next flows with reasons.
- [ ] Breakpoints and recovery.
- [ ] Re-entry into the original flow after recovery.
- [ ] User-facing result.
- [ ] Business rules.
- [ ] Forbidden actions.
- [ ] Screen sequence.
- [ ] API, Socket, model and provider references.
- [ ] Acceptance criteria.
- [ ] Required tests.

### Required subflow template

- [ ] Subflow ID and name.
- [ ] What the subflow does.
- [ ] Why it is reusable.
- [ ] Inputs.
- [ ] Calling flows.
- [ ] Steps.
- [ ] Outputs.
- [ ] Success return behavior.
- [ ] Failure return behavior.
- [ ] Permissions and sensitive-data rules.
- [ ] APIs and models.
- [ ] Acceptance criteria and tests.

### Flow migration checklist

- [x] Rewrite 24 mobile main flows.
- [x] Rewrite 13 mobile reusable subflows.
- [x] Rewrite 24 admin main flows.
- [x] Rewrite 11 admin reusable subflows.
- [x] Validate MF-06 Create and Fund Task as the mobile reference template.
- [x] Validate AF-04 Tasker and KYC Review as the admin reference template.
- [x] Test the reference templates with a non-technical reader.
- [x] Test the reference templates with a junior developer.
- [x] Confirm template corrections before bulk migration; reviewers requested no changes.

## Workstream 6: Build Plans

### Intended reader

- [x] Treat the build plans as technical execution guides for junior developers.
- [x] Organize the primary reading path as **Team Build Plan -> Week -> Day -> Task**.
- [x] Keep each day understandable without requiring the reader to scan other weeks.
- [x] Show only the dependencies and references needed for that day.
- [x] Keep deeper architecture, flow and contract detail behind links instead of repeating it.

### Current weaknesses to correct

- [x] Explain why each task exists.
- [x] Connect every task to its flow or architectural outcome.
- [x] State previous work and true prerequisites.
- [x] Replace vague dependencies with named, explained dependencies.
- [x] Add explicit inputs and outputs.
- [x] Add acceptance criteria.
- [x] Add required tests and evidence.
- [x] Add owner, reviewer and status.
- [x] Add blocker escalation and carry-over rules.
- [x] Add what the task unlocks afterward.
- [x] Remove duplicated task definitions across plans and weekly packs.

### Concise daily task template

- [x] Task ID.
- [x] Title.
- [x] Team.
- [x] Status.
- [x] What you are building today.
- [x] Why it is needed.
- [x] What must already be ready.
- [x] Ordered implementation steps.
- [x] Important technical rules and exclusions.
- [x] Required flow, contract, model or provider links.
- [x] Tests to run.
- [x] What must be working at the end of the day.
- [x] What becomes possible next.
- [x] Recommended end-of-day commit message.

Ownership, review, evidence and blocker details should appear only where they affect
the developer's work. They must not overwhelm the daily instructions.

### Plan outputs

- [x] Generate the Mobile Build Plan as weeks containing day-by-day work.
- [x] Generate the Admin Build Plan as weeks containing day-by-day work.
- [x] Generate the Backend Build Plan as weeks containing day-by-day work.
- [x] Generate each weekly page from the same canonical task records.
- [x] Make the weekly page the primary junior-developer work surface.
- [x] Keep task records inside canonical team-week sources and generate human execution pages only at team-week level.
- [x] Do not generate standalone task-agent Markdown; consolidate executable agent context into the team-week pack.
- [x] Generate one team-specific agent Markdown per week with the five daily prompts embedded.
- [x] Generate QA traceability from task IDs.

## Workstream 7: Weekly Execution Packs

### Required weekly-pack structure

- [x] Week number, title and technical outcome.
- [x] What must be ready before the week begins.
- [x] Day 1 section.
- [x] Day 2 section.
- [x] Day 3 section.
- [x] Day 4 section.
- [x] Day 5 section.
- [x] End-of-week result and demonstration.
- [x] Carry-over work, only when present.

### Required daily structure

- [x] Today's goal.
- [x] What was completed before today.
- [x] Tasks in implementation order.
- [x] Dependencies or blockers that affect today.
- [x] Tests to run today.
- [x] End-of-day working result.
- [x] Recommended commit message for the day's completed work.
- [x] What tomorrow depends on.

### Weekly-pack controls

- [x] Provide team, week and day navigation on the portal without claiming an active schedule.
- [x] Distinguish Planned, In Progress, Blocked, In Review, Done and Carried Over.
- [x] Keep historical weekly packs immutable after closure except for documented corrections.
- [x] Give each team its own focused weekly page.
- [x] Show cross-team dependencies only on the day they affect.
- [x] Avoid repeating full task, flow, contract or model documents inside a weekly page.
- [x] Ensure agent packs include only the relevant team, week, rules and source references.
- [x] Embed a focused agent prompt under each day inside the relevant team-week Markdown.

## Workstream 8: API and Socket Contracts

### Domain split

- [ ] Identity and sessions.
- [ ] Tasker activation and KYC.
- [ ] Catalog and coverage.
- [ ] Task creation.
- [ ] Matching.
- [ ] Task execution.
- [ ] Payments and escrow.
- [ ] Wallets and payouts.
- [ ] Reports and risk.
- [ ] Communication and support.
- [ ] Admin operations.
- [ ] Providers, webhooks, queues and jobs.

### Required endpoint template

- [ ] Method and path.
- [ ] Business purpose.
- [ ] Actor.
- [ ] When it is used.
- [ ] Preconditions.
- [ ] Permissions.
- [ ] Request headers.
- [ ] Request DTO.
- [ ] Example request.
- [ ] Success response DTO.
- [ ] Example response.
- [ ] Expected errors and their meaning.
- [ ] Idempotency behavior.
- [ ] Records read or changed.
- [ ] Events, jobs and notifications.
- [ ] Flow references explained by name.
- [ ] Security and privacy requirements.
- [ ] Implementation status.
- [ ] Required tests.

### Contract tooling

- [ ] Add a machine-readable OpenAPI specification.
- [ ] Validate the OpenAPI specification in CI.
- [ ] Generate or verify client types against the contract.
- [ ] Track endpoint status as Planned, Stubbed, Implemented, Integrated, Tested or Deprecated.
- [ ] Validate flow-to-endpoint traceability.
- [ ] Validate that forbidden endpoints, such as admin reassignment, do not exist.

## Workstream 9: Data Model and Prisma Documentation

### Domain split

- [ ] Identity and access.
- [ ] Tasker activation and KYC.
- [ ] Catalog and coverage.
- [ ] Task marketplace.
- [ ] Wallet, escrow and payouts.
- [ ] Communication and support.
- [ ] Risk and trust.
- [ ] Admin and operations.
- [ ] Providers and jobs.

### Required model template

- [ ] Model name.
- [ ] Plain-language business meaning.
- [ ] Why it exists.
- [ ] Who creates it.
- [ ] Who reads it.
- [ ] Lifecycle.
- [ ] Important fields explained.
- [ ] Relationships.
- [ ] Constraints.
- [ ] Indexes and query reasons.
- [ ] Idempotency requirements.
- [ ] Sensitive-data classification.
- [ ] Access rules.
- [ ] Retention or deletion policy.
- [ ] Endpoints using it.
- [ ] Flows using it.
- [ ] Audit expectations.
- [ ] Example state transition.
- [ ] Migration status.
- [ ] Implementation status.

### Data-document controls

- [ ] Present the business relationship view before Prisma code.
- [ ] Separate conceptual models from executable schema snippets.
- [ ] Rename or clearly label the document as an execution baseline rather than merely planning.
- [ ] Maintain API-to-model and flow-to-model traceability.
- [ ] Validate enum and state names across all documents.

## Workstream 10: Providers, Infrastructure and Cost Control

### Separate document families

- [ ] Provider Integration Catalogue.
- [ ] Infrastructure Architecture.
- [ ] Cost and Budget Register.
- [ ] Operations Runbooks.
- [ ] Disaster Recovery Plan.

### Required provider template

- [ ] Provider and service name.
- [ ] Business purpose.
- [ ] Work2Cash use cases.
- [ ] Selection status.
- [ ] Sandbox validation status.
- [ ] Production validation status.
- [ ] Enabled/disabled status.
- [ ] Owner.
- [ ] Data shared.
- [ ] Sensitive-data considerations.
- [ ] Cost model.
- [ ] Pricing source and verification date.
- [ ] Exchange-rate assumption where applicable.
- [ ] Adapter and secret requirements.
- [ ] Webhook and idempotency rules.
- [ ] Expected failure state.
- [ ] Retry policy.
- [ ] Fallback.
- [ ] Disablement rule.
- [ ] Monitoring and alerts.
- [ ] Support escalation.
- [ ] Go-live evidence.

### Infrastructure documentation

- [ ] System-context diagram.
- [ ] Staging topology.
- [ ] Production topology.
- [ ] Network and firewall boundaries.
- [ ] DNS and TLS inventory.
- [ ] Deployment responsibilities.
- [ ] Database and Valkey exposure rules.
- [ ] Object storage and backup boundaries.
- [ ] Monitoring and alert flow.
- [ ] Capacity assumptions.
- [ ] Scaling triggers.
- [ ] Cost review triggers.

### Operations runbooks

- [ ] Deployment.
- [ ] Rollback.
- [ ] PostgreSQL backup.
- [ ] PostgreSQL restore.
- [ ] Provider outage.
- [ ] Payment reconciliation.
- [ ] Queue failure or stalled jobs.
- [ ] Object-storage failure.
- [ ] DNS or certificate incident.
- [ ] Security incident.
- [ ] Data-exposure incident.
- [ ] Capacity and cost review.

## Workstream 11: QA and Go-Live

### QA document split

- [ ] QA Strategy.
- [ ] Mobile flow acceptance suites.
- [ ] Admin flow acceptance suites.
- [ ] Backend contract suites.
- [ ] Provider validation suites.
- [ ] Security and privacy suites.
- [ ] Infrastructure and recovery suites.
- [ ] UAT scripts.
- [ ] Release evidence register.
- [ ] Go/No-Go decision record.

### Required test-case template

- [ ] Test-case ID.
- [ ] Title.
- [ ] Flow, endpoint, model and task references.
- [ ] Risk and priority.
- [ ] Owner and reviewer.
- [ ] Environment and build version.
- [ ] Preconditions.
- [ ] Seed data.
- [ ] Exact steps.
- [ ] Expected result per step or outcome.
- [ ] Evidence required.
- [ ] Pass, Fail, Blocked or Not Run status.
- [ ] Defect link.
- [ ] Retest result.
- [ ] Acceptance date.

### QA completion controls

- [ ] Every main flow has happy-path tests.
- [ ] Every main flow has decision-branch tests.
- [ ] Every documented breakpoint has a recovery test.
- [ ] Every high-risk admin action has permission and audit tests.
- [ ] Every financial mutation has idempotency and reconciliation tests.
- [ ] Every sensitive-data surface has authorization and exposure tests.
- [ ] Every provider has success, delayed, failed and duplicate-event tests.
- [ ] Release decisions reference concrete evidence.

## Workstream 12: Legal and User-Facing Documents

### Split public policies

- [ ] Terms of Service.
- [ ] Privacy Policy.
- [ ] Tasker Agreement.
- [ ] Cancellation and Refund Policy.
- [ ] Community and Safety Guidelines.
- [ ] KYC Consent Notice.
- [ ] Location Permission Notice.
- [ ] Payment and Wallet Terms.

### Public-policy controls

- [ ] Remove unnecessary REST, Socket and database implementation language from public policies.
- [ ] Add effective date.
- [ ] Add version.
- [ ] Add legal-review status.
- [ ] Add approval status.
- [ ] Add company/controller contact information.
- [ ] Add change history.
- [ ] Resolve retention-period decisions.
- [ ] Verify consistency with actual product behavior.
- [ ] Obtain qualified legal review before publication or enforcement.

### Internal compliance matrix

- [ ] Map each public clause to affected flows.
- [ ] Map each public clause to affected screens.
- [ ] Map each public clause to backend controls.
- [ ] Map each public clause to data retention and access rules.
- [ ] Identify the business owner and legal reviewer.
- [ ] Track implementation and verification evidence.

## Workstream 13: Alignment and Decision Management

### Registers to maintain

- [ ] Product decision register.
- [ ] Architecture decision register.
- [ ] Design conflict register.
- [ ] Open question register.
- [ ] Risk register.
- [ ] Cross-document propagation tracker.

### Required decision fields

- [ ] Decision ID.
- [ ] Question or conflict.
- [ ] Decision.
- [ ] Reason.
- [ ] Trade-off.
- [ ] Decision owner.
- [ ] Approver.
- [ ] Decision date.
- [ ] Status.
- [ ] Affected documents.
- [ ] Affected flows, screens, contracts and models.
- [ ] Implementation status.
- [ ] Closure evidence.

### Closure rule

- [ ] Do not mark a decision Resolved until every affected source, output, design and plan has been updated or explicitly excepted.

## Workstream 14: AGENTS.md and AI Context

### Authority and context fixes

- [ ] Resolve the conflict between requiring Full Project Markdown and avoiding it by default.
- [ ] Rename Full Project Markdown to Full Project Agent Context.
- [ ] Mark it generated and non-canonical.
- [ ] Add generation timestamp.
- [ ] Add source manifest and versions.
- [ ] Add source hashes.
- [ ] Prevent manual editing.
- [ ] Define when full context is truly required.
- [ ] Define the minimal context for Mobile, Admin and Backend tasks.
- [ ] Define how an agent handles conflicting documents.

### Subject authority matrix

- [ ] Product behavior authority.
- [ ] Mobile flow authority.
- [ ] Admin flow authority.
- [ ] API and Socket authority.
- [ ] Data-model authority.
- [ ] Provider and infrastructure authority.
- [ ] Delivery-status authority.
- [ ] Legal wording authority.
- [ ] QA and release-evidence authority.

### Focused context outputs

- [ ] Team context packs.
- [ ] Weekly context packs.
- [ ] Single-flow context packs.
- [ ] Domain context packs.
- [ ] Provider context packs.
- [ ] QA context packs.

## Workstream 15: Governance

### Document lifecycle

- [ ] Define Draft.
- [ ] Define In Review.
- [ ] Define Approved.
- [ ] Define Active.
- [ ] Define Superseded.
- [ ] Define Archived.

### Governance controls

- [ ] Create a complete document registry.
- [ ] Assign owners to every document family.
- [ ] Assign required subject-matter reviewers.
- [ ] Define review cadence.
- [ ] Define approval thresholds for product, architecture, legal, finance and security changes.
- [ ] Create a documentation change-request template.
- [ ] Create a cross-document propagation checklist.
- [ ] Maintain the review log for every active document.
- [ ] Record approval evidence.
- [ ] Archive superseded content without silently deleting history.

### Documentation definition of done

- [ ] Content meets the repository-wide readability standard.
- [ ] Human and agent outputs are regenerated.
- [ ] Links and anchors pass.
- [ ] Metadata is complete.
- [ ] Required reviewers approve.
- [ ] Related documents are updated.
- [ ] Decision propagation is complete.
- [ ] Accessibility checks pass.
- [ ] Agent-context validation passes.
- [ ] Review log is updated.

## Workstream 16: Automated Quality Checks

### CI checks to add

- [ ] Broken link detection.
- [ ] Missing anchor detection.
- [ ] Duplicate HTML ID detection.
- [ ] HTML validation.
- [ ] Markdown linting.
- [ ] Accessibility testing.
- [ ] Required metadata validation.
- [ ] Document status and review-date validation.
- [ ] Unknown flow and subflow reference detection.
- [ ] Unknown task reference detection.
- [ ] Unknown endpoint reference detection.
- [ ] Unknown model reference detection.
- [ ] Unknown provider reference detection.
- [ ] HTML and agent-output generation parity.
- [ ] Generated-file modification detection.
- [ ] Forbidden-assumption detection.
- [ ] Active-week metadata validation.
- [ ] Full Project Agent Context regeneration verification.
- [ ] Guard-script verification.
- [ ] Required site-file verification.

## Recommended Delivery Phases

## Phase 0: Stop Further Drift

- [x] Approve the canonical-source model.
- [x] Freeze direct edits to generated HTML and agent Markdown.
- [x] Create the document registry.
- [x] Define document lifecycle statuses.
- [x] Repair the 169 broken cross-document links.
- [x] Resolve AGENTS.md context and authority contradictions.
- [x] Correct known stale product assumptions.
- [x] Correct stale Planned, Draft, Active and Pending labels.
- [x] Establish initial link and metadata CI checks.

### Phase 0 exit criteria

- [x] No known broken document navigation remains.
- [x] Every active document has an owner and status.
- [x] Canonical versus generated files are identified.
- [x] New documentation changes cannot silently increase drift.

### Phase 0 implementation evidence — 17 July 2026

- [x] Machine-readable source created at `governance/document-registry.json` with generated human and agent views.
- [x] Editing, lifecycle/authority and versioning policies activated in `governance/`.
- [x] All legacy v1 document families classified honestly as transitional or legacy-derived rather than falsely generated.
- [x] Legacy product/technical documents without approval evidence marked `in-review` and `pending` in the registry.
- [x] One-time reconciliation repaired 169 navigation links and 57 known stale-content occurrences.
- [x] Portal guidance now starts with lifecycle and authority rather than treating every published file as approved.
- [x] CI validates registry drift, required metadata, local links, anchors, duplicate IDs, guards, known stale phrases and generated pilots.
- [x] Detailed evidence and residual approvals recorded in `logs/phase-0-execution-log.md`.

Phase 0 is **complete**. Formal approval of legacy content, active-week selection and deterministic migration remain explicitly tracked work for later phases rather than hidden Phase 0 assumptions.

## Phase 1: Templates and Reference Pilots

- [x] Create the main-flow template.
- [x] Create the reusable-subflow template.
- [x] Create the screen template.
- [x] Create the build-task template.
- [x] Create the API endpoint template.
- [x] Create the data-model template.
- [x] Create the provider template.
- [x] Create the QA test-case template.
- [x] Create the architecture-decision template.
- [x] Rewrite MF-06 as the mobile reference flow.
- [x] Rewrite AF-04 as the admin reference flow.
- [x] Create one reference endpoint group.
- [x] Create one reference data-domain document.
- [x] Create one reference QA suite.
- [x] Test the pilots with a non-technical reader.
- [x] Test the pilots with a junior developer.
- [x] Review the templates against observed feedback; both representatives accepted the format and requested no revisions.

### Phase 1 exit criteria

- [x] A non-technical representative accepted the pilot flow as clear and requested that the format be retained.
- [x] A junior-developer representative accepted the pilot flow as understandable and requested that the format be retained.
- [x] Human HTML and agent Markdown can be generated from the same pilot source.

### Phase 1 implementation evidence — 17 July 2026

- [x] Nine canonical templates created in `content/templates/`.
- [x] Canonical MF-06 and AF-04 sources created in `content/pilots/flows/`.
- [x] KYC endpoint-group, data-domain and QA-suite pilot sources created in `content/pilots/`.
- [x] Human pilot index and pages generated in `documents/pilots/`.
- [x] Clean agent Markdown index and documents generated in `documents/agent-md/pilots/`.
- [x] Generator validates metadata, document-type sections, local references, anchors, document guards and agent-Markdown cleanliness.
- [x] GitHub Pages deployment rejects generated pilot drift through `node scripts/generate-pilot-docs.js --check`.
- [x] Repeatable reader-session protocol created in `logs/phase-1-pilot-usability-review.md`.
- [x] Desktop and mobile-width visual review approved; reviewer names and viewport details were not supplied.
- [x] Phase 1 technical/product decision defines AF-04 queue, detail, approve, reject, re-verification, risk-escalation and reconciliation contracts.
- [x] Phase 1 technical/product decision defines the `KycAttempt` schema, relationship, lifecycle, constraints and migration sequence.
- [x] Reviewer decision packet created in `logs/phase-1-af04-review-signoff.md`.
- [x] Product, Technical, Risk/Compliance, Backend, Data, Admin, Security/Privacy and QA approvals recorded for the v0.2 AF-04 pilot set.
- [ ] Phase 4 merges the accepted pilot contracts and KYC models into the general API/OpenAPI and Prisma sources.
- [x] External non-technical usability session completed and acceptance recorded in `logs/phase-1-pilot-usability-review.md`.
- [x] External junior-developer usability session completed and acceptance recorded in `logs/phase-1-pilot-usability-review.md`.

Phase 1 is **complete**. The reader-usability, desktop/mobile visual and subject-matter gates passed with no requested changes, generated outputs pass the final checks, and the five pilot sources are registered as approved Phase 2 migration references. They remain isolated references rather than full-catalogue replacements until Phase 2 migration and activation.

## Phase 2: Flow Migration

- [x] Migrate all mobile subflows.
- [x] Migrate all mobile main flows.
- [x] Migrate all admin subflows.
- [x] Migrate all admin main flows.
- [x] Generate complete flow indexes.
- [x] Generate dependency maps.
- [x] Generate combined catalogues for optional reference.
- [x] Validate all flow IDs and relationships.

### Phase 2 implementation evidence — 17 July 2026

- [x] Complete 72-flow inventory generated in `logs/phase-2-flow-migration-inventory.md`.
- [x] Migration totals verified: 24 mobile main, 13 mobile subflows, 24 admin main and 11 admin subflows.
- [x] `scripts/generate-flow-docs.js` generates Phase 2 human HTML and agent Markdown from `content/flows/`.
- [x] `scripts/generate-flow-migration-inventory.js` detects catalogue-count drift, duplicate IDs and unknown canonical flow references.
- [x] CI rejects stale Phase 2 indexes, pages, agent Markdown and migration inventory.
- [x] Batch 1 Admin Access sources created for AF-01, ASF-01 and ASF-11.
- [x] Batch 1 required reviewer approval recorded; AF-01, ASF-01 and ASF-11 promoted to approved.
- [x] Remaining 69 canonical flow sources created as approved readability transformations.
- [x] Transformation-only approval model recorded; human re-review is required only for detected conflict, lost meaning or behavior change.
- [x] All 150 Phase 2 outputs generated: 72 HTML pages, 72 agent pages, two indexes, two dependency maps and two combined catalogues.

Phase 2 is **complete**. All 72 flows are approved standalone canonical sources, both legacy combined catalogues are superseded, and the human/agent indexes, directional dependency maps and optional combined catalogues are reproducible.

### Phase 2 exit criteria

- [x] Every flow passes the structural standalone-readability checklist.
- [x] No flow requires code-only dependency lookup for basic understanding.
- [x] Every possible next flow includes a selection condition.
- [x] Every documented failure has a recovery and re-entry explanation.

## Phase 3: Execution Planning Migration

- [x] Create the canonical task register behind the generated plans.
- [x] Restructure the Mobile Build Plan by week, then by day.
- [x] Restructure the Admin Build Plan by week, then by day.
- [x] Restructure the Backend Build Plan by week, then by day.
- [x] Give each day a concise, ordered technical task list for junior developers.
- [x] Add only the statuses, blockers and cross-team dependencies relevant to that day.
- [x] Link to flows, contracts, models and providers instead of copying their full content.
- [x] Generate team-specific weekly pages from the canonical tasks.
- [x] Generate team-specific weekly agent Markdown with each scheduled day's prompt embedded.
- [x] Include a recommended commit message for every day.

Phase 3 is **complete**. The active execution-planning library contains 125
canonical tasks, team plans organized by week and day, a separate Admin
Integration Week and 25 team-week agent packs containing 125 embedded day prompts.

### Phase 3 exit criteria

- [x] A junior developer can open one week, select one day and understand what to build.
- [x] Each day explains what must already exist and what the completed work unlocks next.
- [x] Each daily task has clear implementation steps, tests and a working end result.
- [x] Every day includes a recommended commit message.
- [x] Every team-week has one focused agent Markdown containing Day 1 through Day 5 and their prompts.
- [x] No task definition is manually duplicated across plans and weekly packs.
- [x] Cross-team blockers and handoffs appear on the day they matter.

## Phase 4: Technical Reference Migration

- [x] Consolidate the human reading surface into five pages: one technical index and four focused family pages.
- [x] Consolidate agent context into four focused packs rather than generating one file per endpoint, model, provider or screen.
- [x] Restructure API, Socket, webhook and queue contracts into searchable, anchored records inside one contract family.
- [x] Add one generated OpenAPI 3.1 baseline and validate contract-to-operation coverage.
- [x] Restructure models and enums into searchable, anchored records inside one data family.
- [x] Combine provider, architecture, infrastructure, cost, disaster-recovery and operations records inside one platform family.
- [x] Create deployment, rollback, backup, restore, provider, payment, queue, storage, DNS/TLS, security, data-exposure and capacity runbook records.
- [x] Correct and restructure shared, Task Owner, Tasker and Admin screens inside one screen family.
- [x] Keep migration inventories and gap registers under `logs/`; they are governance evidence, not required team reading.
- [x] Link readers directly to records through stable anchors, search and domain filters.

### Phase 4 exit criteria

- [x] Every migrated endpoint, socket event, queue, model, enum, provider, architecture area, runbook and screen is independently linkable and locally understandable.
- [x] Every provider record has ownership, validation state, failure, fallback, disablement and evidence gaps.
- [x] Infrastructure responsibilities, backup/restore boundaries, monitoring and recovery processes are explicit.
- [x] Known design conflicts are corrected; missing Figma, DTO, schema, provider, network and approval evidence is clearly marked.
- [x] The normal portal exposes only five Phase 4 human pages and four focused agent packs.

### Phase 4 implementation evidence — 17 July 2026

- [x] Four canonical technical source families created in `content/technical/`.
- [x] Five human pages generated in `documents/technical/`: index, contracts, data, platform and screens.
- [x] Four clean agent packs generated in `documents/agent-md/technical/`; no decorative HTML is allowed.
- [x] One OpenAPI 3.1 specification generated at `documents/technical/openapi/work2cash-v1.json`.
- [x] 342 legacy technical records migrated as anchored sections rather than standalone documents.
- [x] Approved referral and KYC contract decisions merged with higher authority than the provisional legacy contract table.
- [x] `KycAttempt` merged from the approved Phase 1 data pilot.
- [x] Known Facebook, generic KYC upload, old category, card-first payment, Tasker auto-accept and Admin reassignment drift corrected.
- [x] Phase 4 generation and OpenAPI traceability added to CI.
- [x] Legacy architecture, screen, contract, data and provider pages frozen as superseded migration evidence.

Phase 4 migration implementation is **complete and in review**. The new library
does not convert provisional technical content into approved product or engineering
decisions. Its generated gap register identifies the exact portions that still
require owner or subject-matter approval.

## Phase 5: QA, Legal and Governance Migration

- [ ] Convert QA checklists into traceable executable test cases.
- [ ] Create the release evidence register.
- [ ] Split public legal policies.
- [ ] Create the legal compliance matrix.
- [ ] Complete decision and review registers.
- [ ] Define subject-matter review requirements.

### Phase 5 exit criteria

- [ ] Every main flow has traceable acceptance tests.
- [ ] Every launch decision references evidence.
- [ ] Public policies match actual product behavior.
- [ ] Every active document has completed governance metadata.

## Phase 6: Portal and Generation Completion

- [ ] Rebuild portal navigation around audiences and tasks.
- [ ] Add search and filtering.
- [ ] Publish modular human pages.
- [ ] Publish clean agent context packs.
- [ ] Generate the Full Project Agent Context.
- [ ] Complete accessibility and responsive testing.
- [ ] Complete human usability review.
- [ ] Complete junior-developer usability review.
- [ ] Enable the full CI quality suite.

### Phase 6 exit criteria

- [ ] All outputs are generated from canonical content.
- [ ] All navigation, metadata, accessibility and parity checks pass.
- [ ] Users can locate and understand isolated content without excessive scrolling.

## Priority Backlog

### P0: Immediate integrity and drift controls

- [ ] Repair the 169 broken HTML links.
- [ ] Establish canonical and generated file rules.
- [ ] Resolve AGENTS.md authority/context contradictions.
- [ ] Create the document registry.
- [ ] Correct known stale product decisions.
- [ ] Correct stale status language.
- [ ] Add link and metadata CI checks.

### P1: Readability foundation

- [x] Approve content templates.
- [x] Pilot MF-06 and AF-04.
- [ ] Add human and junior-developer Start Here pages.
- [ ] Add the global glossary.
- [ ] Add role-based reading paths.
- [x] Begin modular flow migration.

### P2: Execution and technical migration

- [x] Complete all flow migrations.
- [ ] Create the canonical task register.
- [ ] Generate build plans and weekly packs.
- [ ] Restructure contracts, models, providers and infrastructure.
- [ ] Add OpenAPI and traceability checks.

### P3: Release, legal and operational maturity

- [ ] Create executable QA suites.
- [ ] Split legal policies.
- [ ] Complete runbooks and disaster recovery documentation.
- [ ] Complete decision and compliance registers.
- [ ] Finish search, filtering, accessibility and usability validation.

## Final Repository Acceptance Criteria

The restructuring is complete only when all of the following are true:

- [x] A reader can understand any main flow without scrolling to another definition.
- [x] Every dependency is named and its contribution explained locally.
- [x] Every next flow includes the condition that leads to it.
- [x] Every terminal state explains its business and user meaning.
- [x] Every documented failure includes recovery and re-entry behavior.
- [ ] Every build task can be executed from its own task card.
- [ ] Every endpoint can be understood without reading the entire contract specification.
- [ ] Every data model can be understood in business and technical terms.
- [ ] Every provider has owner, status, cost, failure, fallback and validation evidence.
- [ ] Every QA case is executable and traceable.
- [ ] Every active document has an owner, version, status, approval and review date.
- [ ] All HTML navigation works.
- [x] Agent Markdown contains no decorative presentation HTML for the active flow library.
- [x] Human HTML and agent Markdown are generated from the same canonical flow sources.
- [ ] The Full Project Agent Context is generated, versioned and non-canonical.
- [ ] A non-technical reader can explain the relevant product behavior accurately.
- [ ] A junior developer can explain what to build, why it exists, what it depends on, what changes, how it fails and how completion is verified.
- [ ] Documentation CI prevents structural regressions.

## Progress Tracking

| Phase | Status | Owner | Target | Notes |
| --- | --- | --- | --- | --- |
| Phase 0 - Stop drift | Complete | Technical Lead | 17 Jul 2026 | Governance, registry, link repair and CI controls established |
| Phase 1 - Templates and pilots | Complete | Product + Technical Lead | 17 Jul 2026 | Approved reference format and five pilot sources ready for Phase 2 migration |
| Phase 2 - Flow migration | Complete | Product + Team Leads | 17 Jul 2026 | All 72 standalone flows active; legacy combined catalogues superseded |
| Phase 3 - Execution planning | Complete | Project + Technical Lead | 17 Jul 2026 | 25 canonical team-week sources containing 125 task records; 25 team-week agent packs with 125 embedded prompts |
| Phase 4 - Technical references | Not started | Technical Lead + Engineers | TBD | Contracts, models, providers and infrastructure |
| Phase 5 - QA, legal and governance | Not started | QA + Legal + Leads | TBD | Evidence and approval maturity |
| Phase 6 - Portal and generation | Not started | Technical Lead | TBD | Final outputs and validation |

## Review Notes

Use this section to record reviews of the restructuring plan.

| Date | Reviewer | Area reviewed | Decision | Required follow-up |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## Change Log

| Date | Change | Author | Approval |
| --- | --- | --- | --- |
| 16 July 2026 | Initial repository-wide audit and restructuring checklist created | Codex, under Technical Lead direction | Pending |
| 17 July 2026 | Phase 1 templates, canonical pilots, generated human/agent outputs and CI drift checks added | Codex, under Product and Technical Lead direction | Pending external usability review |
| 17 July 2026 | Phase 0 governance, registry, 169-link repair, drift reconciliation and repository-wide CI completed | Codex, under Product and Technical Lead direction | Governance active; legacy content approvals pending |
| 17 July 2026 | AF-04 Phase 1 pilots advanced to v0.2 with exact contracts, KycAttempt model and eleven-case QA suite | Codex, under Product and Technical Lead direction | Review-ready; external usability and subject-matter approval pending |
| 17 July 2026 | Non-technical and junior-developer representatives accepted the pilot flow format with no requested corrections | Repository-owner report recorded by Codex | Reader-usability gate approved; visual and subject-matter reviews remain |
| 17 July 2026 | Phase 1 visual, lead and subject-matter approvals confirmed; pilot set promoted to approved migration reference | Repository-owner report recorded by Codex | Phase 1 complete; Phase 2 may begin |
| 17 July 2026 | Phase 2 started with a 72-flow inventory, deterministic generation and the three-source Admin Access batch | Codex, under Product and Technical Lead direction | In progress; Batch 1 review pending |
| 17 July 2026 | Phase 2 Admin Access Batch 1 approved with no requested corrections | Repository-owner report recorded by Codex | AF-01, ASF-01 and ASF-11 approved; Phase 2 continues |
| 17 July 2026 | Transformation-only approval confirmed and remaining 69 flows migrated into the active standalone library | Repository-owner direction implemented by Codex | Phase 2 complete; technical ID/title conflicts deferred explicitly to Phase 4 |
| 17 July 2026 | Six mobile flow-to-contract ID/title collisions reconciled without changing approved behavior | Codex, under Product and Technical Lead direction | Five mappings resolved from existing contracts; the deferred MF-17 referral gap was subsequently closed by CONTRACT-REFERRAL-001 |
| 17 July 2026 | MF-17 and AF-15 referral contract gap closed with CONTRACT-REFERRAL-001 | Repository-owner direction implemented by Codex | Exact referral paths and ownership rules approved; Phase 4 must merge them into OpenAPI |
| 17 July 2026 | Phase 3 migrated 120 legacy tasks, added five Admin integration tasks and generated team plans by week/day with embedded agent prompts | Repository-owner direction implemented by Codex | Phase 3 complete without an additional review gate |
| 17 July 2026 | Clarified every Monday-to-Friday week and consolidated agent context into one Markdown per team-week | Repository-owner direction implemented by Codex | Separate daily prompt files and standalone task-agent exports removed; each weekly Markdown now contains five embedded prompts |
