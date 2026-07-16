# Work2Cash Document Registry

> Generated agent view. Edit `governance/document-registry.json`, then run `node scripts/generate-document-registry.js`.

## Registry control

| Field | Value |
| --- | --- |
| Schema version | 1 |
| Updated | 2026-07-17 |
| Owner | Technical Lead |
| Lifecycle policy | `governance/lifecycle-policy.md` |

## How to read this registry

- **Status** describes lifecycle; publication does not equal approval.
- **Approval** records formal reviewer acceptance.
- **Canonical source** is edited directly and may generate several outputs.
- **Legacy transitional source** is a temporary manually maintained source awaiting migration.
- **Legacy derived frozen** is non-canonical and must not be edited for normal work.
- Check an entry's detailed record below before using it as implementation authority.

## At-a-glance register

| ID | Document | Status | Approval | Owner | Artifact class | Source and artifacts |
| --- | --- | --- | --- | --- | --- | --- |
| DOC-REG-001 | Work2Cash Document Registry | active | approved | Technical Lead | canonical-source | `governance/document-registry.json`; `governance/document-registry.md`; `documents/document-registry.html`; `documents/agent-md/document-registry.md` |
| GOV-POL-001 | Documentation Governance Policies | active | approved | Technical Lead | canonical-source | `governance/editing-policy.md`; `governance/versioning-policy.md`; `governance/lifecycle-policy.md`; `governance/review-log.md` |
| AGENT-GUIDE-001 | Work2Cash AI Agent Repository Instructions | active | approved | Technical Lead | canonical-source | `AGENTS.md`; `documents/downloads/AGENTS.md` |
| ARCH-001 | Main Enterprise Architecture v1 | in-review | pending | Technical Lead | legacy-transitional-source | `documents/main-enterprise-architecture-v1.html`; `documents/agent-md/main-enterprise-architecture-v1.md` |
| DESIGN-001 | Screen To Feature Map v1 | in-review | pending | Product Lead | legacy-transitional-source | `documents/screen-to-feature-map-v1.html`; `documents/agent-md/screen-to-feature-map-v1.md` |
| FLOW-MOBILE-001 | Mobile Flow Catalogue v1 | in-review | pending | Product Lead | legacy-transitional-source | `documents/mobile-flow-catalogue-v1.html`; `documents/agent-md/mobile-flow-catalogue-v1.md` |
| FLOW-ADMIN-001 | Admin Flow Catalogue v1 | in-review | pending | Product Lead | legacy-transitional-source | `documents/admin-flow-catalogue-v1.html`; `documents/agent-md/admin-flow-catalogue-v1.md` |
| FLOW-ALIGN-001 | Flow Alignment Review v1 | in-review | pending | Product Lead | legacy-transitional-source | `documents/flow-alignment-review-v1.html`; `documents/agent-md/flow-alignment-review-v1.md` |
| LEGAL-001 | Legal and User-Facing Documents Pack v1 | in-review | pending | Product Lead | legacy-transitional-source | `documents/legal_user_facing_documents_pack_v1.html`; `documents/agent-md/legal_user_facing_documents_pack_v1.md` |
| CONTRACT-001 | API and Socket Contract Specification v1 | in-review | pending | Backend Lead | legacy-transitional-source | `documents/api-socket-contract-specification-v1.html`; `documents/agent-md/api-socket-contract-specification-v1.md` |
| DATA-001 | Data Model and Prisma Schema Planning v1 | in-review | pending | Backend Lead | legacy-transitional-source | `documents/data-model-prisma-schema-planning-v1.html`; `documents/agent-md/data-model-prisma-schema-planning-v1.md` |
| PROVIDER-001 | Provider Integration and Cost Control v1 | in-review | pending | Infrastructure Lead | legacy-transitional-source | `documents/provider-integration-cost-control-v1.html`; `documents/agent-md/provider-integration-cost-control-v1.md` |
| PLAN-MOBILE-001 | Mobile Build Plan v1 | in-review | pending | Mobile Lead | legacy-transitional-source | `documents/build-plan-mobile-v1.html`; `documents/agent-md/build-plan-mobile-v1.md` |
| PLAN-ADMIN-001 | Admin Build Plan v1 | in-review | pending | Admin Lead | legacy-transitional-source | `documents/build-plan-admin-v1.html`; `documents/agent-md/build-plan-admin-v1.md` |
| PLAN-BACKEND-001 | Backend Build Plan v1 | in-review | pending | Backend Lead | legacy-transitional-source | `documents/build-plan-backend-v1.html`; `documents/agent-md/build-plan-backend-v1.md` |
| QA-001 | QA and Go-Live Readiness Checklist v1 | in-review | pending | QA Lead | legacy-transitional-source | `documents/qa-go-live-readiness-checklist-v1.html`; `documents/agent-md/qa-go-live-readiness-checklist-v1.md` |
| AI-START-001 | AI Agent Start Here | in-review | pending | Technical Lead | legacy-transitional-source | `documents/agent-md/ai-agent-start-here.md` |
| TEAM-PACKS-001 | Shared Execution Rules and Team Briefs | in-review | pending | Technical Lead | legacy-transitional-source | `documents/downloads/shared-ai-agent-execution-rules-v1.md`; `documents/downloads/mobile-team-build-brief-v1.md`; `documents/downloads/admin-team-build-brief-v1.md`; `documents/downloads/backend-team-build-brief-v1.md` |
| WEEK-PACKS-001 | Weekly Execution Packs | in-review | pending | Project Lead | legacy-transitional-source | `documents/agent-md/weeks/weekly-execution-index.md`; `documents/agent-md/weeks/week-01-foundation-identity.md`; `documents/agent-md/weeks/week-02-tasker-task-creation-payment.md`; `documents/agent-md/weeks/week-03-discovery-matching-execution-start.md`; `documents/agent-md/weeks/week-04-completion-finance-support.md`; `documents/agent-md/weeks/week-05-integration-recovery-full-flow-qa.md`; `documents/agent-md/weeks/week-06-hardening-security-performance.md`; `documents/agent-md/weeks/week-07-release-candidate-operations-dry-run.md`; `documents/agent-md/weeks/week-08-stabilization-freeze.md` |
| FULL-CONTEXT-001 | Work2Cash Full Project Markdown | in-review | pending | Technical Lead | legacy-derived-frozen | `documents/agent-md/work2cash-full-source-of-truth-v1.md` |
| PILOT-MF06-001 | MF-06 Create and Fund Task Pilot | draft | pending | Product Lead | canonical-source | `content/pilots/flows/mobile/MF-06-create-and-fund-task.md`; `documents/pilots/flows/mobile/MF-06-create-and-fund-task.html`; `documents/agent-md/pilots/flows/mobile/MF-06-create-and-fund-task.md` |
| PILOT-AF04-001 | AF-04 KYC Review Pilot Set | draft | pending | Product Lead | canonical-source | `content/pilots/flows/admin/AF-04-kyc-review.md`; `content/pilots/contracts/kyc-review-contract-group.md`; `content/pilots/data/kyc-domain.md`; `content/pilots/qa/AF-04-kyc-review-suite.md`; `documents/pilots/flows/admin/AF-04-kyc-review.html`; `documents/pilots/contracts/kyc-review-contract-group.html`; `documents/pilots/data/kyc-domain.html`; `documents/pilots/qa/AF-04-kyc-review-suite.html`; `documents/agent-md/pilots/flows/admin/AF-04-kyc-review.md`; `documents/agent-md/pilots/contracts/kyc-review-contract-group.md`; `documents/agent-md/pilots/data/kyc-domain.md`; `documents/agent-md/pilots/qa/AF-04-kyc-review-suite.md` |

## Detailed records

### DOC-REG-001 — Work2Cash Document Registry

| Field | Value |
| --- | --- |
| Type | governance |
| Audience | All teams, AI agents |
| Owner | Technical Lead |
| Required reviewers | Product Lead |
| Version | 1.0 |
| Lifecycle | active |
| Approval | approved |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | 2026-10-17 |
| Authority | Documentation governance |
| Artifact class | canonical-source |
| Current source | `governance/document-registry.json` |
| Other artifacts | `governance/document-registry.md`, `documents/document-registry.html`, `documents/agent-md/document-registry.md` |
| Migration phase | Phase 0 |
| Supersedes | None |
| Tags | governance |

Machine-readable registry is canonical; Markdown and HTML views are generated.

### GOV-POL-001 — Documentation Governance Policies

| Field | Value |
| --- | --- |
| Type | governance |
| Audience | All contributors, AI agents |
| Owner | Technical Lead |
| Required reviewers | Product Lead |
| Version | 1.0 |
| Lifecycle | active |
| Approval | approved |
| Publication | internal |
| Last reviewed | 2026-07-17 |
| Next review | 2026-10-17 |
| Authority | Documentation governance |
| Artifact class | canonical-source |
| Current source | `governance/editing-policy.md` |
| Other artifacts | `governance/versioning-policy.md`, `governance/lifecycle-policy.md`, `governance/review-log.md` |
| Migration phase | Phase 0 |
| Supersedes | None |
| Tags | governance |

Controls editing, lifecycle, authority, versioning and review evidence.

### AGENT-GUIDE-001 — Work2Cash AI Agent Repository Instructions

| Field | Value |
| --- | --- |
| Type | agent-guidance |
| Audience | AI agents, Developers |
| Owner | Technical Lead |
| Required reviewers | Product Lead, Mobile Lead, Admin Lead, Backend Lead |
| Version | 1.0 |
| Lifecycle | active |
| Approval | approved |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | 2026-10-17 |
| Authority | Documentation governance and active product sources |
| Artifact class | canonical-source |
| Current source | `AGENTS.md` |
| Other artifacts | `documents/downloads/AGENTS.md` |
| Migration phase | Phase 0 |
| Supersedes | None |
| Tags | agent-guidance |

Downloaded copy must be byte-identical to the repository source.

### ARCH-001 — Main Enterprise Architecture v1

| Field | Value |
| --- | --- |
| Type | architecture |
| Audience | All teams, Stakeholders, AI agents |
| Owner | Technical Lead |
| Required reviewers | Product Lead, Infrastructure Lead, Security, Finance, Operations |
| Version | 1 |
| Lifecycle | in-review |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | Designated provisional controlling baseline pending formal approval |
| Artifact class | legacy-transitional-source |
| Current source | `documents/main-enterprise-architecture-v1.html` |
| Other artifacts | `documents/agent-md/main-enterprise-architecture-v1.md` |
| Migration phase | Phase 4 |
| Supersedes | None |
| Tags | architecture |

Formal approval evidence is missing; agent Markdown is a legacy export.

### DESIGN-001 — Screen To Feature Map v1

| Field | Value |
| --- | --- |
| Type | design-map |
| Audience | Product, Design, Mobile, Admin, Backend |
| Owner | Product Lead |
| Required reviewers | Technical Lead, Mobile Lead, Admin Lead, Backend Lead |
| Version | 1 |
| Lifecycle | in-review |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | Main Enterprise Architecture v1 |
| Artifact class | legacy-transitional-source |
| Current source | `documents/screen-to-feature-map-v1.html` |
| Other artifacts | `documents/agent-md/screen-to-feature-map-v1.md` |
| Migration phase | Phase 4 |
| Supersedes | None |
| Tags | design-map |

Phase 0 reconciles known provider, auto-accept and admin-reassignment drift.

### FLOW-MOBILE-001 — Mobile Flow Catalogue v1

| Field | Value |
| --- | --- |
| Type | flow-catalogue |
| Audience | Product, Mobile, Backend, QA, AI agents |
| Owner | Product Lead |
| Required reviewers | Technical Lead, Mobile Lead, Backend Lead, QA |
| Version | 1 |
| Lifecycle | in-review |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | Main Enterprise Architecture v1 |
| Artifact class | legacy-transitional-source |
| Current source | `documents/mobile-flow-catalogue-v1.html` |
| Other artifacts | `documents/agent-md/mobile-flow-catalogue-v1.md` |
| Migration phase | Phase 2 |
| Supersedes | None |
| Tags | flow-catalogue |

Will be split into independently readable canonical flow sources.

### FLOW-ADMIN-001 — Admin Flow Catalogue v1

| Field | Value |
| --- | --- |
| Type | flow-catalogue |
| Audience | Product, Admin, Backend, Operations, QA, AI agents |
| Owner | Product Lead |
| Required reviewers | Technical Lead, Admin Lead, Backend Lead, Operations, QA |
| Version | 1 |
| Lifecycle | in-review |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | Main Enterprise Architecture v1 |
| Artifact class | legacy-transitional-source |
| Current source | `documents/admin-flow-catalogue-v1.html` |
| Other artifacts | `documents/agent-md/admin-flow-catalogue-v1.md` |
| Migration phase | Phase 2 |
| Supersedes | None |
| Tags | flow-catalogue |

Will be split into independently readable canonical flow sources.

### FLOW-ALIGN-001 — Flow Alignment Review v1

| Field | Value |
| --- | --- |
| Type | decision-review |
| Audience | Product, Technical leads, QA |
| Owner | Product Lead |
| Required reviewers | Technical Lead, Mobile Lead, Admin Lead, Backend Lead |
| Version | 1 |
| Lifecycle | in-review |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | Main Enterprise Architecture v1 and approved decisions |
| Artifact class | legacy-transitional-source |
| Current source | `documents/flow-alignment-review-v1.html` |
| Other artifacts | `documents/agent-md/flow-alignment-review-v1.md` |
| Migration phase | Phase 5 |
| Supersedes | None |
| Tags | decision-review |

Provisional decision tracker until decisions are moved into governed records.

### LEGAL-001 — Legal and User-Facing Documents Pack v1

| Field | Value |
| --- | --- |
| Type | legal |
| Audience | Legal, Product, Operations, Users |
| Owner | Product Lead |
| Required reviewers | Legal reviewer, Technical Lead, Privacy reviewer |
| Version | 1 |
| Lifecycle | in-review |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | Applicable law and formally approved product policy |
| Artifact class | legacy-transitional-source |
| Current source | `documents/legal_user_facing_documents_pack_v1.html` |
| Other artifacts | `documents/agent-md/legal_user_facing_documents_pack_v1.md` |
| Migration phase | Phase 5 |
| Supersedes | None |
| Tags | legal |

Publication is not legal approval; subject-matter review remains required.

### CONTRACT-001 — API and Socket Contract Specification v1

| Field | Value |
| --- | --- |
| Type | technical-contract |
| Audience | Mobile, Admin, Backend, QA, AI agents |
| Owner | Backend Lead |
| Required reviewers | Technical Lead, Mobile Lead, Admin Lead, QA |
| Version | 1 |
| Lifecycle | in-review |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | Main Enterprise Architecture and approved flows |
| Artifact class | legacy-transitional-source |
| Current source | `documents/api-socket-contract-specification-v1.html` |
| Other artifacts | `documents/agent-md/api-socket-contract-specification-v1.md` |
| Migration phase | Phase 4 |
| Supersedes | None |
| Tags | technical-contract |

Published contract baseline with known gaps; do not invent missing contracts.

### DATA-001 — Data Model and Prisma Schema Planning v1

| Field | Value |
| --- | --- |
| Type | data-model |
| Audience | Backend, Admin, QA, AI agents |
| Owner | Backend Lead |
| Required reviewers | Technical Lead, Data owner, Security |
| Version | 1 |
| Lifecycle | in-review |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | Main Enterprise Architecture and approved contracts |
| Artifact class | legacy-transitional-source |
| Current source | `documents/data-model-prisma-schema-planning-v1.html` |
| Other artifacts | `documents/agent-md/data-model-prisma-schema-planning-v1.md` |
| Migration phase | Phase 4 |
| Supersedes | None |
| Tags | data-model |

Published execution baseline with unresolved KycAttempt detail.

### PROVIDER-001 — Provider Integration and Cost Control v1

| Field | Value |
| --- | --- |
| Type | provider-operations |
| Audience | Backend, Infrastructure, Finance, Operations |
| Owner | Infrastructure Lead |
| Required reviewers | Technical Lead, Backend Lead, Finance, Security |
| Version | 1 |
| Lifecycle | in-review |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | Main Enterprise Architecture and validated provider contracts |
| Artifact class | legacy-transitional-source |
| Current source | `documents/provider-integration-cost-control-v1.html` |
| Other artifacts | `documents/agent-md/provider-integration-cost-control-v1.md` |
| Migration phase | Phase 4 |
| Supersedes | None |
| Tags | provider-operations |

Costs and provider capabilities require dated validation before purchase or implementation.

### PLAN-MOBILE-001 — Mobile Build Plan v1

| Field | Value |
| --- | --- |
| Type | build-plan |
| Audience | Mobile, Backend, Product, QA |
| Owner | Mobile Lead |
| Required reviewers | Technical Lead, Product Lead, Backend Lead, QA |
| Version | 1 |
| Lifecycle | in-review |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | Approved flows, contracts and task register |
| Artifact class | legacy-transitional-source |
| Current source | `documents/build-plan-mobile-v1.html` |
| Other artifacts | `documents/agent-md/build-plan-mobile-v1.md` |
| Migration phase | Phase 3 |
| Supersedes | None |
| Tags | build-plan |

Calendar dates do not prove work status; active week is not formally recorded.

### PLAN-ADMIN-001 — Admin Build Plan v1

| Field | Value |
| --- | --- |
| Type | build-plan |
| Audience | Admin, Backend, Product, QA |
| Owner | Admin Lead |
| Required reviewers | Technical Lead, Product Lead, Backend Lead, QA |
| Version | 1 |
| Lifecycle | in-review |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | Approved flows, contracts and task register |
| Artifact class | legacy-transitional-source |
| Current source | `documents/build-plan-admin-v1.html` |
| Other artifacts | `documents/agent-md/build-plan-admin-v1.md` |
| Migration phase | Phase 3 |
| Supersedes | None |
| Tags | build-plan |

Calendar dates do not prove work status; active week is not formally recorded.

### PLAN-BACKEND-001 — Backend Build Plan v1

| Field | Value |
| --- | --- |
| Type | build-plan |
| Audience | Backend, Mobile, Admin, Product, QA |
| Owner | Backend Lead |
| Required reviewers | Technical Lead, Product Lead, Mobile Lead, Admin Lead, QA |
| Version | 1 |
| Lifecycle | in-review |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | Approved flows, contracts and task register |
| Artifact class | legacy-transitional-source |
| Current source | `documents/build-plan-backend-v1.html` |
| Other artifacts | `documents/agent-md/build-plan-backend-v1.md` |
| Migration phase | Phase 3 |
| Supersedes | None |
| Tags | build-plan |

Calendar dates do not prove work status; active week is not formally recorded.

### QA-001 — QA and Go-Live Readiness Checklist v1

| Field | Value |
| --- | --- |
| Type | qa-release |
| Audience | QA, All delivery teams, Operations |
| Owner | QA Lead |
| Required reviewers | Technical Lead, Product Lead, Infrastructure Lead, Operations |
| Version | 1 |
| Lifecycle | in-review |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | Approved product scope, contracts and release policy |
| Artifact class | legacy-transitional-source |
| Current source | `documents/qa-go-live-readiness-checklist-v1.html` |
| Other artifacts | `documents/agent-md/qa-go-live-readiness-checklist-v1.md` |
| Migration phase | Phase 5 |
| Supersedes | None |
| Tags | qa-release |

Checklist publication does not mean release gates have passed.

### AI-START-001 — AI Agent Start Here

| Field | Value |
| --- | --- |
| Type | agent-guidance |
| Audience | AI agents, Developers |
| Owner | Technical Lead |
| Required reviewers | Mobile Lead, Admin Lead, Backend Lead |
| Version | 1 |
| Lifecycle | in-review |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | AGENTS.md |
| Artifact class | legacy-transitional-source |
| Current source | `documents/agent-md/ai-agent-start-here.md` |
| Other artifacts | None |
| Migration phase | Phase 3 |
| Supersedes | None |
| Tags | agent-guidance |

Must agree with AGENTS.md; focused context is preferred.

### TEAM-PACKS-001 — Shared Execution Rules and Team Briefs

| Field | Value |
| --- | --- |
| Type | agent-context-pack |
| Audience | Mobile, Admin, Backend, AI agents |
| Owner | Technical Lead |
| Required reviewers | Product Lead, Mobile Lead, Admin Lead, Backend Lead |
| Version | 1 |
| Lifecycle | in-review |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | AGENTS.md and approved source documents |
| Artifact class | legacy-transitional-source |
| Current source | `documents/downloads/shared-ai-agent-execution-rules-v1.md` |
| Other artifacts | `documents/downloads/mobile-team-build-brief-v1.md`, `documents/downloads/admin-team-build-brief-v1.md`, `documents/downloads/backend-team-build-brief-v1.md` |
| Migration phase | Phase 3 |
| Supersedes | None |
| Tags | agent-context-pack |

Context packs narrow work; they do not define product behavior.

### WEEK-PACKS-001 — Weekly Execution Packs

| Field | Value |
| --- | --- |
| Type | agent-context-pack |
| Audience | All delivery teams, AI agents |
| Owner | Project Lead |
| Required reviewers | Technical Lead, Product Lead, Team leads |
| Version | 1 |
| Lifecycle | in-review |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | Approved task register and build plans |
| Artifact class | legacy-transitional-source |
| Current source | `documents/agent-md/weeks/weekly-execution-index.md` |
| Other artifacts | `documents/agent-md/weeks/week-01-foundation-identity.md`, `documents/agent-md/weeks/week-02-tasker-task-creation-payment.md`, `documents/agent-md/weeks/week-03-discovery-matching-execution-start.md`, `documents/agent-md/weeks/week-04-completion-finance-support.md`, `documents/agent-md/weeks/week-05-integration-recovery-full-flow-qa.md`, `documents/agent-md/weeks/week-06-hardening-security-performance.md`, `documents/agent-md/weeks/week-07-release-candidate-operations-dry-run.md`, `documents/agent-md/weeks/week-08-stabilization-freeze.md` |
| Migration phase | Phase 3 |
| Supersedes | None |
| Tags | agent-context-pack |

No active week is formally selected; calendar dates must not be used to infer execution state.

### FULL-CONTEXT-001 — Work2Cash Full Project Markdown

| Field | Value |
| --- | --- |
| Type | agent-context-bundle |
| Audience | AI agents |
| Owner | Technical Lead |
| Required reviewers | Product Lead |
| Version | 1 |
| Lifecycle | in-review |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | None independently; inherits included source authority |
| Artifact class | legacy-derived-frozen |
| Current source | Not recorded |
| Other artifacts | `documents/agent-md/work2cash-full-source-of-truth-v1.md` |
| Migration phase | Phase 6 |
| Supersedes | None |
| Tags | agent-context-bundle |

Large non-canonical bundle without a current deterministic generator. Use only for broad context.

### PILOT-MF06-001 — MF-06 Create and Fund Task Pilot

| Field | Value |
| --- | --- |
| Type | main-flow-pilot |
| Audience | Non-technical teams, Mobile, Backend, QA, AI agents |
| Owner | Product Lead |
| Required reviewers | Technical Lead, Mobile Lead, Backend Lead, Finance, QA |
| Version | 0.1 |
| Lifecycle | draft |
| Approval | pending |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | Not scheduled |
| Authority | Main Enterprise Architecture and Mobile Flow Catalogue v1 |
| Artifact class | canonical-source |
| Current source | `content/pilots/flows/mobile/MF-06-create-and-fund-task.md` |
| Other artifacts | `documents/pilots/flows/mobile/MF-06-create-and-fund-task.html`, `documents/agent-md/pilots/flows/mobile/MF-06-create-and-fund-task.md` |
| Migration phase | Phase 1 |
| Supersedes | None |
| Tags | main-flow-pilot |

Isolated pilot; does not replace the catalogue until usability review and approval.

### PILOT-AF04-001 — AF-04 KYC Review Pilot Set

| Field | Value |
| --- | --- |
| Type | cross-document-pilot |
| Audience | Non-technical operations, Admin, Backend, QA, AI agents |
| Owner | Product Lead |
| Required reviewers | Technical Lead, Admin Lead, Backend Lead, Risk and Compliance, QA |
| Version | 0.1 |
| Lifecycle | draft |
| Approval | pending |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | Not scheduled |
| Authority | Main Enterprise Architecture and Admin Flow Catalogue v1 |
| Artifact class | canonical-source |
| Current source | `content/pilots/flows/admin/AF-04-kyc-review.md` |
| Other artifacts | `content/pilots/contracts/kyc-review-contract-group.md`, `content/pilots/data/kyc-domain.md`, `content/pilots/qa/AF-04-kyc-review-suite.md`, `documents/pilots/flows/admin/AF-04-kyc-review.html`, `documents/pilots/contracts/kyc-review-contract-group.html`, `documents/pilots/data/kyc-domain.html`, `documents/pilots/qa/AF-04-kyc-review-suite.html`, `documents/agent-md/pilots/flows/admin/AF-04-kyc-review.md`, `documents/agent-md/pilots/contracts/kyc-review-contract-group.md`, `documents/agent-md/pilots/data/kyc-domain.md`, `documents/agent-md/pilots/qa/AF-04-kyc-review-suite.md` |
| Migration phase | Phase 1 |
| Supersedes | None |
| Tags | cross-document-pilot |

Isolated pilot with explicit API and KycAttempt blockers.


## Pending approvals

- [ ] **ARCH-001 — Main Enterprise Architecture v1:** Product Lead, Infrastructure Lead, Security, Finance, Operations.
- [ ] **DESIGN-001 — Screen To Feature Map v1:** Technical Lead, Mobile Lead, Admin Lead, Backend Lead.
- [ ] **FLOW-MOBILE-001 — Mobile Flow Catalogue v1:** Technical Lead, Mobile Lead, Backend Lead, QA.
- [ ] **FLOW-ADMIN-001 — Admin Flow Catalogue v1:** Technical Lead, Admin Lead, Backend Lead, Operations, QA.
- [ ] **FLOW-ALIGN-001 — Flow Alignment Review v1:** Technical Lead, Mobile Lead, Admin Lead, Backend Lead.
- [ ] **LEGAL-001 — Legal and User-Facing Documents Pack v1:** Legal reviewer, Technical Lead, Privacy reviewer.
- [ ] **CONTRACT-001 — API and Socket Contract Specification v1:** Technical Lead, Mobile Lead, Admin Lead, QA.
- [ ] **DATA-001 — Data Model and Prisma Schema Planning v1:** Technical Lead, Data owner, Security.
- [ ] **PROVIDER-001 — Provider Integration and Cost Control v1:** Technical Lead, Backend Lead, Finance, Security.
- [ ] **PLAN-MOBILE-001 — Mobile Build Plan v1:** Technical Lead, Product Lead, Backend Lead, QA.
- [ ] **PLAN-ADMIN-001 — Admin Build Plan v1:** Technical Lead, Product Lead, Backend Lead, QA.
- [ ] **PLAN-BACKEND-001 — Backend Build Plan v1:** Technical Lead, Product Lead, Mobile Lead, Admin Lead, QA.
- [ ] **QA-001 — QA and Go-Live Readiness Checklist v1:** Technical Lead, Product Lead, Infrastructure Lead, Operations.
- [ ] **AI-START-001 — AI Agent Start Here:** Mobile Lead, Admin Lead, Backend Lead.
- [ ] **TEAM-PACKS-001 — Shared Execution Rules and Team Briefs:** Product Lead, Mobile Lead, Admin Lead, Backend Lead.
- [ ] **WEEK-PACKS-001 — Weekly Execution Packs:** Technical Lead, Product Lead, Team leads.
- [ ] **FULL-CONTEXT-001 — Work2Cash Full Project Markdown:** Product Lead.
- [ ] **PILOT-MF06-001 — MF-06 Create and Fund Task Pilot:** Technical Lead, Mobile Lead, Backend Lead, Finance, QA.
- [ ] **PILOT-AF04-001 — AF-04 KYC Review Pilot Set:** Technical Lead, Admin Lead, Backend Lead, Risk and Compliance, QA.

## Legacy migration queue

- [ ] **ARCH-001:** migrate in Phase 4. Formal approval evidence is missing; agent Markdown is a legacy export.
- [ ] **DESIGN-001:** migrate in Phase 4. Phase 0 reconciles known provider, auto-accept and admin-reassignment drift.
- [ ] **FLOW-MOBILE-001:** migrate in Phase 2. Will be split into independently readable canonical flow sources.
- [ ] **FLOW-ADMIN-001:** migrate in Phase 2. Will be split into independently readable canonical flow sources.
- [ ] **FLOW-ALIGN-001:** migrate in Phase 5. Provisional decision tracker until decisions are moved into governed records.
- [ ] **LEGAL-001:** migrate in Phase 5. Publication is not legal approval; subject-matter review remains required.
- [ ] **CONTRACT-001:** migrate in Phase 4. Published contract baseline with known gaps; do not invent missing contracts.
- [ ] **DATA-001:** migrate in Phase 4. Published execution baseline with unresolved KycAttempt detail.
- [ ] **PROVIDER-001:** migrate in Phase 4. Costs and provider capabilities require dated validation before purchase or implementation.
- [ ] **PLAN-MOBILE-001:** migrate in Phase 3. Calendar dates do not prove work status; active week is not formally recorded.
- [ ] **PLAN-ADMIN-001:** migrate in Phase 3. Calendar dates do not prove work status; active week is not formally recorded.
- [ ] **PLAN-BACKEND-001:** migrate in Phase 3. Calendar dates do not prove work status; active week is not formally recorded.
- [ ] **QA-001:** migrate in Phase 5. Checklist publication does not mean release gates have passed.
- [ ] **AI-START-001:** migrate in Phase 3. Must agree with AGENTS.md; focused context is preferred.
- [ ] **TEAM-PACKS-001:** migrate in Phase 3. Context packs narrow work; they do not define product behavior.
- [ ] **WEEK-PACKS-001:** migrate in Phase 3. No active week is formally selected; calendar dates must not be used to infer execution state.
- [ ] **FULL-CONTEXT-001:** migrate in Phase 6. Large non-canonical bundle without a current deterministic generator. Use only for broad context.
