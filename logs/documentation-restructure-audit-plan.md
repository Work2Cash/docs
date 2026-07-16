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

- [ ] Repair 169 broken cross-document links across the 13 human HTML documents.
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

- [ ] Rewrite 24 mobile main flows.
- [ ] Rewrite 13 mobile reusable subflows.
- [ ] Rewrite 24 admin main flows.
- [ ] Rewrite 11 admin reusable subflows.
- [ ] Validate MF-06 Create and Fund Task as the mobile reference template.
- [ ] Validate AF-04 Tasker and KYC Review as the admin reference template.
- [ ] Test the reference templates with a non-technical reader.
- [ ] Test the reference templates with a junior developer.
- [ ] Apply approved template corrections before bulk migration.

## Workstream 6: Build Plans

### Current weaknesses to correct

- [ ] Explain why each task exists.
- [ ] Connect every task to its flow or architectural outcome.
- [ ] State previous work and true prerequisites.
- [ ] Replace vague dependencies with named, explained dependencies.
- [ ] Add explicit inputs and outputs.
- [ ] Add acceptance criteria.
- [ ] Add required tests and evidence.
- [ ] Add owner, reviewer and status.
- [ ] Add blocker escalation and carry-over rules.
- [ ] Add what the task unlocks afterward.
- [ ] Remove duplicated task definitions across plans and weekly packs.

### Canonical build-task template

- [ ] Task ID.
- [ ] Title.
- [ ] Team.
- [ ] Owner.
- [ ] Reviewer/acceptor.
- [ ] Status.
- [ ] Plain-language outcome.
- [ ] Why it matters.
- [ ] Flow references.
- [ ] Architecture decision references.
- [ ] Dependencies and readiness checks.
- [ ] Required contracts and data.
- [ ] Implementation scope.
- [ ] Explicitly out of scope.
- [ ] Expected files or modules.
- [ ] Permission, security and audit expectations.
- [ ] Provider dependencies.
- [ ] Acceptance criteria.
- [ ] Required automated tests.
- [ ] Required manual tests.
- [ ] Evidence to attach.
- [ ] Definition of done.
- [ ] What this task unlocks.
- [ ] Commit message.

### Plan outputs

- [ ] Generate the Mobile Build Plan from canonical tasks.
- [ ] Generate the Admin Build Plan from canonical tasks.
- [ ] Generate the Backend Build Plan from canonical tasks.
- [ ] Generate weekly packs from the same canonical tasks.
- [ ] Generate team-specific agent task prompts.
- [ ] Generate QA traceability from task IDs.

## Workstream 7: Weekly Execution Packs

### Required weekly-pack structure

- [ ] Week number, dates, owner and status.
- [ ] Plain-language week outcome.
- [ ] Work completed in the previous week.
- [ ] Carry-over work.
- [ ] Required week-start conditions.
- [ ] Current status by team.
- [ ] Cross-team dependency map.
- [ ] Detailed task cards.
- [ ] Blockers and blocker owners.
- [ ] Decisions required.
- [ ] Risks to the next week.
- [ ] End-of-week demonstration.
- [ ] Exit evidence.
- [ ] Retrospective and follow-up actions.

### Weekly-pack controls

- [ ] Identify the active week on the portal.
- [ ] Distinguish Planned, In Progress, Blocked, In Review, Done and Carried Over.
- [ ] Keep historical weekly packs immutable after closure except for documented corrections.
- [ ] Ensure agent packs include only the relevant team, week, rules and source references.

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

- [ ] Approve the canonical-source model.
- [ ] Freeze direct edits to generated HTML and agent Markdown.
- [ ] Create the document registry.
- [ ] Define document lifecycle statuses.
- [ ] Repair the 169 broken cross-document links.
- [ ] Resolve AGENTS.md context and authority contradictions.
- [ ] Correct known stale product assumptions.
- [ ] Correct stale Planned, Draft, Active and Pending labels.
- [ ] Establish initial link and metadata CI checks.

### Phase 0 exit criteria

- [ ] No known broken document navigation remains.
- [ ] Every active document has an owner and status.
- [ ] Canonical versus generated files are identified.
- [ ] New documentation changes cannot silently increase drift.

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
- [ ] Test the pilots with a non-technical reader.
- [ ] Test the pilots with a junior developer.
- [ ] Revise templates based on observed misunderstandings.

### Phase 1 exit criteria

- [ ] A non-technical reader can explain the pilot flow correctly.
- [ ] A junior developer can identify prerequisites, steps, branches, outputs, recovery and tests without external lookup.
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
- [ ] Desktop and mobile-width visual review completed; the audit environment had no available interactive browser session.
- [ ] Product, Risk/Compliance and team leads resolve the AF-04 approve, reject, queue/detail and reconciliation contract gaps documented by the pilot.
- [ ] Backend and Data owners formally define the `KycAttempt` schema and relationship documented by the pilot.
- [ ] External non-technical usability session completed and evidence recorded.
- [ ] External junior-developer usability session completed and evidence recorded.

Phase 1 remains **in progress** until the two external usability reviews are completed and the templates are revised from observed misunderstandings. The pilots are therefore isolated from the active catalogue rather than presented as approved replacements.

## Phase 2: Flow Migration

- [ ] Migrate all mobile subflows.
- [ ] Migrate all mobile main flows.
- [ ] Migrate all admin subflows.
- [ ] Migrate all admin main flows.
- [ ] Generate flow indexes.
- [ ] Generate dependency maps.
- [ ] Generate combined catalogues for optional reference.
- [ ] Validate all flow relationships.

### Phase 2 exit criteria

- [ ] Every flow passes the standalone-readability checklist.
- [ ] No flow requires code-only dependency lookup for basic understanding.
- [ ] Every possible next flow includes a selection condition.
- [ ] Every documented failure has a recovery and re-entry explanation.

## Phase 3: Execution Planning Migration

- [ ] Create the canonical task register.
- [ ] Migrate Mobile Build Plan tasks.
- [ ] Migrate Admin Build Plan tasks.
- [ ] Migrate Backend Build Plan tasks.
- [ ] Generate all weekly execution packs.
- [ ] Add live statuses, blockers, owners and carry-over.
- [ ] Add evidence and acceptance fields.
- [ ] Link tasks to flows, contracts, models, providers and QA.

### Phase 3 exit criteria

- [ ] Every scheduled task can be executed from its own task card.
- [ ] No task definition is manually duplicated across plans and weekly packs.
- [ ] Cross-team blockers and handoffs are explicit.

## Phase 4: Technical Reference Migration

- [ ] Restructure API and Socket contracts by domain.
- [ ] Add OpenAPI.
- [ ] Restructure data models by domain.
- [ ] Restructure provider documentation.
- [ ] Create infrastructure architecture.
- [ ] Create operations runbooks.
- [ ] Correct and restructure the screen-to-feature map.

### Phase 4 exit criteria

- [ ] Every endpoint and model is independently understandable.
- [ ] Every provider has validation, failure, fallback and ownership data.
- [ ] Infrastructure responsibilities and recovery processes are explicit.
- [ ] Known design conflicts are resolved or clearly marked.

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

- [ ] Approve content templates.
- [ ] Pilot MF-06 and AF-04.
- [ ] Add human and junior-developer Start Here pages.
- [ ] Add the global glossary.
- [ ] Add role-based reading paths.
- [ ] Begin modular flow migration.

### P2: Execution and technical migration

- [ ] Complete all flow migrations.
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

- [ ] A reader can understand any main flow without scrolling to another definition.
- [ ] Every dependency is named and its contribution explained locally.
- [ ] Every next flow includes the condition that leads to it.
- [ ] Every terminal state explains its business and user meaning.
- [ ] Every documented failure includes recovery and re-entry behavior.
- [ ] Every build task can be executed from its own task card.
- [ ] Every endpoint can be understood without reading the entire contract specification.
- [ ] Every data model can be understood in business and technical terms.
- [ ] Every provider has owner, status, cost, failure, fallback and validation evidence.
- [ ] Every QA case is executable and traceable.
- [ ] Every active document has an owner, version, status, approval and review date.
- [ ] All HTML navigation works.
- [ ] Agent Markdown contains no decorative presentation HTML.
- [ ] Human HTML and agent Markdown are generated from the same canonical sources.
- [ ] The Full Project Agent Context is generated, versioned and non-canonical.
- [ ] A non-technical reader can explain the relevant product behavior accurately.
- [ ] A junior developer can explain what to build, why it exists, what it depends on, what changes, how it fails and how completion is verified.
- [ ] Documentation CI prevents structural regressions.

## Progress Tracking

| Phase | Status | Owner | Target | Notes |
| --- | --- | --- | --- | --- |
| Phase 0 - Stop drift | Not started | Technical Lead | TBD | Begin with canonical-source rules and broken links |
| Phase 1 - Templates and pilots | In progress | Product + Technical Lead | TBD | Sources and generation complete; external reader tests and contract decisions remain |
| Phase 2 - Flow migration | Not started | Product + Team Leads | TBD | Mobile and admin catalogues |
| Phase 3 - Execution planning | Not started | Project + Technical Lead | TBD | Canonical task register |
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
