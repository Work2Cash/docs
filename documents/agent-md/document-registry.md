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
| ARCH-001 | Main Enterprise Architecture v1 | superseded | pending | Technical Lead | legacy-derived-frozen | `documents/main-enterprise-architecture-v1.html`; `documents/agent-md/main-enterprise-architecture-v1.md` |
| DESIGN-001 | Screen To Feature Map v1 | superseded | pending | Product Lead | legacy-derived-frozen | `documents/screen-to-feature-map-v1.html`; `documents/agent-md/screen-to-feature-map-v1.md` |
| FLOW-MOBILE-001 | Mobile Flow Catalogue v1 | superseded | approved | Product Lead | legacy-transitional-source | `documents/mobile-flow-catalogue-v1.html`; `documents/agent-md/mobile-flow-catalogue-v1.md` |
| FLOW-ADMIN-001 | Admin Flow Catalogue v1 | superseded | approved | Product Lead | legacy-transitional-source | `documents/admin-flow-catalogue-v1.html`; `documents/agent-md/admin-flow-catalogue-v1.md` |
| FLOW-ALIGN-001 | Flow Alignment Review v1 | in-review | pending | Product Lead | legacy-transitional-source | `documents/flow-alignment-review-v1.html`; `documents/agent-md/flow-alignment-review-v1.md` |
| LEGAL-001 | Legal and User-Facing Documents Pack v1 | in-review | pending | Product Lead | legacy-transitional-source | `documents/legal_user_facing_documents_pack_v1.html`; `documents/agent-md/legal_user_facing_documents_pack_v1.md` |
| CONTRACT-001 | API and Socket Contract Specification v1 | superseded | pending | Backend Lead | legacy-derived-frozen | `documents/api-socket-contract-specification-v1.html`; `documents/agent-md/api-socket-contract-specification-v1.md` |
| CONTRACT-REFERRAL-001 | Referral Contract Group | approved | approved | Backend Lead | canonical-source | `content/contracts/referral-contract-group.md`; `documents/contracts/referral-contract-group.html`; `documents/agent-md/contracts/referral-contract-group.md`; `documents/contracts/index.html`; `documents/agent-md/contracts/README.md`; `scripts/validate-referral-contract.js` |
| DATA-001 | Data Model and Prisma Schema Planning v1 | superseded | pending | Backend Lead | legacy-derived-frozen | `documents/data-model-prisma-schema-planning-v1.html`; `documents/agent-md/data-model-prisma-schema-planning-v1.md` |
| PROVIDER-001 | Provider Integration and Cost Control v1 | superseded | pending | Infrastructure Lead | legacy-derived-frozen | `documents/provider-integration-cost-control-v1.html`; `documents/agent-md/provider-integration-cost-control-v1.md` |
| PLAN-MOBILE-001 | Mobile Build Plan v1 | superseded | approved | Mobile Lead | legacy-transitional-source | `documents/build-plan-mobile-v1.html`; `documents/agent-md/build-plan-mobile-v1.md` |
| PLAN-ADMIN-001 | Admin Build Plan v1 | superseded | approved | Admin Lead | legacy-transitional-source | `documents/build-plan-admin-v1.html`; `documents/agent-md/build-plan-admin-v1.md` |
| PLAN-BACKEND-001 | Backend Build Plan v1 | superseded | approved | Backend Lead | legacy-transitional-source | `documents/build-plan-backend-v1.html`; `documents/agent-md/build-plan-backend-v1.md` |
| QA-001 | QA and Go-Live Readiness Checklist v1 | in-review | pending | QA Lead | legacy-transitional-source | `documents/qa-go-live-readiness-checklist-v1.html`; `documents/agent-md/qa-go-live-readiness-checklist-v1.md` |
| AI-START-001 | AI Agent Start Here | active | approved | Technical Lead | legacy-transitional-source | `documents/agent-md/ai-agent-start-here.md` |
| TEAM-PACKS-001 | Shared Execution Rules and Team Briefs | active | approved | Technical Lead | legacy-transitional-source | `documents/downloads/shared-ai-agent-execution-rules-v1.md`; `documents/downloads/mobile-team-build-brief-v1.md`; `documents/downloads/admin-team-build-brief-v1.md`; `documents/downloads/backend-team-build-brief-v1.md` |
| WEEK-PACKS-001 | Weekly Execution Packs | superseded | approved | Project Lead | legacy-transitional-source | `documents/agent-md/weeks/weekly-execution-index.md`; `documents/agent-md/weeks/week-01-foundation-identity.md`; `documents/agent-md/weeks/week-02-tasker-task-creation-payment.md`; `documents/agent-md/weeks/week-03-discovery-matching-execution-start.md`; `documents/agent-md/weeks/week-04-completion-finance-support.md`; `documents/agent-md/weeks/week-05-integration-recovery-full-flow-qa.md`; `documents/agent-md/weeks/week-06-hardening-security-performance.md`; `documents/agent-md/weeks/week-07-release-candidate-operations-dry-run.md`; `documents/agent-md/weeks/week-08-stabilization-freeze.md` |
| FULL-CONTEXT-001 | Work2Cash Full Project Markdown | in-review | pending | Technical Lead | legacy-derived-frozen | `documents/agent-md/work2cash-full-source-of-truth-v1.md` |
| PILOT-MF06-001 | MF-06 Create and Fund Task Pilot | approved | approved | Product Lead | canonical-source | `content/pilots/flows/mobile/MF-06-create-and-fund-task.md`; `documents/pilots/flows/mobile/MF-06-create-and-fund-task.html`; `documents/agent-md/pilots/flows/mobile/MF-06-create-and-fund-task.md` |
| PILOT-AF04-001 | AF-04 KYC Review Pilot | approved | approved | Product Lead | canonical-source | `content/pilots/flows/admin/AF-04-kyc-review.md`; `documents/pilots/flows/admin/AF-04-kyc-review.html`; `documents/agent-md/pilots/flows/admin/AF-04-kyc-review.md` |
| PILOT-KYC-CONTRACT-001 | KYC Review Contract Group Pilot | approved | approved | Backend Lead | canonical-source | `content/pilots/contracts/kyc-review-contract-group.md`; `documents/pilots/contracts/kyc-review-contract-group.html`; `documents/agent-md/pilots/contracts/kyc-review-contract-group.md` |
| PILOT-KYC-DATA-001 | Tasker Activation and KYC Data Domain Pilot | approved | approved | Backend Lead | canonical-source | `content/pilots/data/kyc-domain.md`; `documents/pilots/data/kyc-domain.html`; `documents/agent-md/pilots/data/kyc-domain.md` |
| PILOT-QA-AF04-001 | AF-04 KYC Review Reference QA Suite | approved | approved | QA Lead | canonical-source | `content/pilots/qa/AF-04-kyc-review-suite.md`; `documents/pilots/qa/AF-04-kyc-review-suite.html`; `documents/agent-md/pilots/qa/AF-04-kyc-review-suite.md` |
| FLOW-LIB-001 | Phase 2 Standalone Flow Library | active | approved | Product Lead | canonical-source | `logs/phase-2-execution-log.md`; `logs/phase-2-flow-migration-inventory.md`; `documents/flows/index.html`; `documents/agent-md/flows/README.md`; `documents/flows/dependency-map.html`; `documents/agent-md/flows/dependency-map.md`; `documents/flows/combined-flow-library.html`; `documents/agent-md/flows/combined-flow-library.md` |
| TASK-LIB-001 | Phase 3 Canonical Build Task and Weekly Execution Library | active | approved | Project Lead | canonical-source | `content/tasks/plan-metadata.json`; `logs/phase-3-task-migration-inventory.md`; `logs/phase-3-execution-log.md`; `documents/planning/index.html`; `documents/agent-md/planning/README.md`; `documents/planning/mobile-build-plan.html`; `documents/planning/admin-build-plan.html`; `documents/planning/backend-build-plan.html`; `documents/planning/qa-traceability.html`; `documents/agent-md/planning/qa-traceability.md` |
| TECH-REF-001 | Phase 4 Consolidated Technical Reference Library | in-review | pending | Technical Lead | canonical-source | `content/technical/library.json`; `content/technical/contracts.json`; `content/technical/data.json`; `content/technical/platform.json`; `content/technical/screens.json`; `documents/technical/index.html`; `documents/technical/contracts.html`; `documents/technical/data.html`; `documents/technical/platform.html`; `documents/technical/screens.html`; `documents/technical/openapi/work2cash-v1.json`; `documents/agent-md/technical/contracts.md`; `documents/agent-md/technical/data.md`; `documents/agent-md/technical/platform.md`; `documents/agent-md/technical/screens.md`; `logs/phase-4-execution-log.md`; `logs/phase-4-technical-migration-inventory.md`; `logs/phase-4-technical-gap-register.md`; `scripts/bootstrap-phase4-technical-sources.js`; `scripts/generate-technical-docs.js` |

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
| Lifecycle | superseded |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | Designated provisional controlling baseline pending formal approval |
| Artifact class | legacy-derived-frozen |
| Current source | `documents/main-enterprise-architecture-v1.html` |
| Other artifacts | `documents/agent-md/main-enterprise-architecture-v1.md` |
| Migration phase | Phase 4 |
| Supersedes | None |
| Tags | architecture |

Frozen Phase 4 migration evidence. Use TECH-REF-001 for current architecture and operations reading. Formal approval of the migrated architecture records remains pending.

### DESIGN-001 — Screen To Feature Map v1

| Field | Value |
| --- | --- |
| Type | design-map |
| Audience | Product, Design, Mobile, Admin, Backend |
| Owner | Product Lead |
| Required reviewers | Technical Lead, Mobile Lead, Admin Lead, Backend Lead |
| Version | 1 |
| Lifecycle | superseded |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | Main Enterprise Architecture v1 |
| Artifact class | legacy-derived-frozen |
| Current source | `documents/screen-to-feature-map-v1.html` |
| Other artifacts | `documents/agent-md/screen-to-feature-map-v1.md` |
| Migration phase | Phase 4 |
| Supersedes | None |
| Tags | design-map |

Frozen Phase 4 migration evidence. Use TECH-REF-001 Screen-to-Feature Reference, where known provider, KYC, category, payment, auto-accept and admin-reassignment drift is corrected and remaining design evidence is marked.

### FLOW-MOBILE-001 — Mobile Flow Catalogue v1

| Field | Value |
| --- | --- |
| Type | flow-catalogue |
| Audience | Product, Mobile, Backend, QA, AI agents |
| Owner | Product Lead |
| Required reviewers | Technical Lead, Mobile Lead, Backend Lead, QA |
| Version | 1 |
| Lifecycle | superseded |
| Approval | approved |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | Not scheduled |
| Authority | Main Enterprise Architecture v1 |
| Artifact class | legacy-transitional-source |
| Current source | `documents/mobile-flow-catalogue-v1.html` |
| Other artifacts | `documents/agent-md/mobile-flow-catalogue-v1.md` |
| Migration phase | Phase 2 |
| Supersedes | None |
| Tags | flow-catalogue |

Approved behavior was migrated into 37 standalone mobile flow sources. Retained only as historical combined evidence; use FLOW-LIB-001.

### FLOW-ADMIN-001 — Admin Flow Catalogue v1

| Field | Value |
| --- | --- |
| Type | flow-catalogue |
| Audience | Product, Admin, Backend, Operations, QA, AI agents |
| Owner | Product Lead |
| Required reviewers | Technical Lead, Admin Lead, Backend Lead, Operations, QA |
| Version | 1 |
| Lifecycle | superseded |
| Approval | approved |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | Not scheduled |
| Authority | Main Enterprise Architecture v1 |
| Artifact class | legacy-transitional-source |
| Current source | `documents/admin-flow-catalogue-v1.html` |
| Other artifacts | `documents/agent-md/admin-flow-catalogue-v1.md` |
| Migration phase | Phase 2 |
| Supersedes | None |
| Tags | flow-catalogue |

Approved behavior was migrated into 35 standalone admin flow sources. Retained only as historical combined evidence; use FLOW-LIB-001.

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
| Lifecycle | superseded |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | Main Enterprise Architecture and approved flows |
| Artifact class | legacy-derived-frozen |
| Current source | `documents/api-socket-contract-specification-v1.html` |
| Other artifacts | `documents/agent-md/api-socket-contract-specification-v1.md` |
| Migration phase | Phase 4 |
| Supersedes | None |
| Tags | technical-contract |

Frozen Phase 4 migration evidence. Use TECH-REF-001 API, Socket and OpenAPI Reference. Approved referral and KYC decisions are merged there with higher authority; remaining contract gaps are explicit.

### CONTRACT-REFERRAL-001 — Referral Contract Group

| Field | Value |
| --- | --- |
| Type | technical-contract-decision |
| Audience | Mobile, Admin, Backend, Finance, Risk, QA, AI agents |
| Owner | Backend Lead |
| Required reviewers | Technical Lead, Mobile Lead, Admin Lead, Product Lead, Finance, Risk, QA |
| Version | 0.1 |
| Lifecycle | approved |
| Approval | approved |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | 2026-10-17 |
| Authority | Repository-owner accepted contract decision based on approved MF-02, MF-14, MF-17 and AF-15 behavior |
| Artifact class | canonical-source |
| Current source | `content/contracts/referral-contract-group.md` |
| Other artifacts | `documents/contracts/referral-contract-group.html`, `documents/agent-md/contracts/referral-contract-group.md`, `documents/contracts/index.html`, `documents/agent-md/contracts/README.md`, `scripts/validate-referral-contract.js` |
| Migration phase | Targeted referral contract-gap resolution before Phase 4 |
| Supersedes | None |
| Tags | referral, contract-decision, MF-17, AF-15, wallet-credit |

Closes the referral code/share, registration attribution, progress, reward-status and Admin review path gap. Registration owns attribution; settlement owns five-paid-task qualification; wallet credit is idempotent backend work; no referral socket or public credit mutation exists.

### DATA-001 — Data Model and Prisma Schema Planning v1

| Field | Value |
| --- | --- |
| Type | data-model |
| Audience | Backend, Admin, QA, AI agents |
| Owner | Backend Lead |
| Required reviewers | Technical Lead, Data owner, Security |
| Version | 1 |
| Lifecycle | superseded |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | Main Enterprise Architecture and approved contracts |
| Artifact class | legacy-derived-frozen |
| Current source | `documents/data-model-prisma-schema-planning-v1.html` |
| Other artifacts | `documents/agent-md/data-model-prisma-schema-planning-v1.md` |
| Migration phase | Phase 4 |
| Supersedes | None |
| Tags | data-model |

Frozen Phase 4 migration evidence. Use TECH-REF-001 Data Model Reference. KycAttempt is merged from the approved pilot and conceptual models remain clearly separated from executable Prisma baselines.

### PROVIDER-001 — Provider Integration and Cost Control v1

| Field | Value |
| --- | --- |
| Type | provider-operations |
| Audience | Backend, Infrastructure, Finance, Operations |
| Owner | Infrastructure Lead |
| Required reviewers | Technical Lead, Backend Lead, Finance, Security |
| Version | 1 |
| Lifecycle | superseded |
| Approval | pending |
| Publication | published |
| Last reviewed | Not recorded |
| Next review | Not scheduled |
| Authority | Main Enterprise Architecture and validated provider contracts |
| Artifact class | legacy-derived-frozen |
| Current source | `documents/provider-integration-cost-control-v1.html` |
| Other artifacts | `documents/agent-md/provider-integration-cost-control-v1.md` |
| Migration phase | Phase 4 |
| Supersedes | None |
| Tags | provider-operations |

Frozen Phase 4 migration evidence. Use TECH-REF-001 Platform Architecture and Operations. Costs and provider capabilities still require dated official validation before purchase or go-live.

### PLAN-MOBILE-001 — Mobile Build Plan v1

| Field | Value |
| --- | --- |
| Type | build-plan |
| Audience | Mobile, Backend, Product, QA |
| Owner | Mobile Lead |
| Required reviewers | Technical Lead, Product Lead, Backend Lead, QA |
| Version | 1 |
| Lifecycle | superseded |
| Approval | approved |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | Not scheduled |
| Authority | Approved flows, contracts and task register |
| Artifact class | legacy-transitional-source |
| Current source | `documents/build-plan-mobile-v1.html` |
| Other artifacts | `documents/agent-md/build-plan-mobile-v1.md` |
| Migration phase | Phase 3 |
| Supersedes | None |
| Tags | build-plan |

Superseded combined Mobile task reference retained as migration evidence. Use TASK-LIB-001 and its generated week-by-week Mobile plan.

### PLAN-ADMIN-001 — Admin Build Plan v1

| Field | Value |
| --- | --- |
| Type | build-plan |
| Audience | Admin, Backend, Product, QA |
| Owner | Admin Lead |
| Required reviewers | Technical Lead, Product Lead, Backend Lead, QA |
| Version | 1 |
| Lifecycle | superseded |
| Approval | approved |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | Not scheduled |
| Authority | Approved flows, contracts and task register |
| Artifact class | legacy-transitional-source |
| Current source | `documents/build-plan-admin-v1.html` |
| Other artifacts | `documents/agent-md/build-plan-admin-v1.md` |
| Migration phase | Phase 3 |
| Supersedes | None |
| Tags | build-plan |

Superseded combined Admin task reference retained as migration evidence. Use TASK-LIB-001 and its generated week-by-week Admin plan.

### PLAN-BACKEND-001 — Backend Build Plan v1

| Field | Value |
| --- | --- |
| Type | build-plan |
| Audience | Backend, Mobile, Admin, Product, QA |
| Owner | Backend Lead |
| Required reviewers | Technical Lead, Product Lead, Mobile Lead, Admin Lead, QA |
| Version | 1 |
| Lifecycle | superseded |
| Approval | approved |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | Not scheduled |
| Authority | Approved flows, contracts and task register |
| Artifact class | legacy-transitional-source |
| Current source | `documents/build-plan-backend-v1.html` |
| Other artifacts | `documents/agent-md/build-plan-backend-v1.md` |
| Migration phase | Phase 3 |
| Supersedes | None |
| Tags | build-plan |

Superseded combined Backend task reference retained as migration evidence. Use TASK-LIB-001 and its generated week-by-week Backend plan.

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
| Lifecycle | active |
| Approval | approved |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | 2026-10-17 |
| Authority | AGENTS.md |
| Artifact class | legacy-transitional-source |
| Current source | `documents/agent-md/ai-agent-start-here.md` |
| Other artifacts | None |
| Migration phase | Phase 3 |
| Supersedes | None |
| Tags | agent-guidance |

Aligned with AGENTS.md and the Phase 3 Team to Week to Day workflow. Use one team-week Markdown and select its embedded daily prompt.

### TEAM-PACKS-001 — Shared Execution Rules and Team Briefs

| Field | Value |
| --- | --- |
| Type | agent-context-pack |
| Audience | Mobile, Admin, Backend, AI agents |
| Owner | Technical Lead |
| Required reviewers | Product Lead, Mobile Lead, Admin Lead, Backend Lead |
| Version | 1 |
| Lifecycle | active |
| Approval | approved |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | 2026-10-17 |
| Authority | AGENTS.md and approved source documents |
| Artifact class | legacy-transitional-source |
| Current source | `documents/downloads/shared-ai-agent-execution-rules-v1.md` |
| Other artifacts | `documents/downloads/mobile-team-build-brief-v1.md`, `documents/downloads/admin-team-build-brief-v1.md`, `documents/downloads/backend-team-build-brief-v1.md` |
| Migration phase | Phase 3 |
| Supersedes | None |
| Tags | agent-context-pack |

Active focused context inputs used with Phase 3 team-week Markdown packs and embedded daily prompts. These packs narrow work; they do not define product behavior.

### WEEK-PACKS-001 — Weekly Execution Packs

| Field | Value |
| --- | --- |
| Type | agent-context-pack |
| Audience | All delivery teams, AI agents |
| Owner | Project Lead |
| Required reviewers | Technical Lead, Product Lead, Team leads |
| Version | 1 |
| Lifecycle | superseded |
| Approval | approved |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | Not scheduled |
| Authority | Approved task register and build plans |
| Artifact class | legacy-transitional-source |
| Current source | `documents/agent-md/weeks/weekly-execution-index.md` |
| Other artifacts | `documents/agent-md/weeks/week-01-foundation-identity.md`, `documents/agent-md/weeks/week-02-tasker-task-creation-payment.md`, `documents/agent-md/weeks/week-03-discovery-matching-execution-start.md`, `documents/agent-md/weeks/week-04-completion-finance-support.md`, `documents/agent-md/weeks/week-05-integration-recovery-full-flow-qa.md`, `documents/agent-md/weeks/week-06-hardening-security-performance.md`, `documents/agent-md/weeks/week-07-release-candidate-operations-dry-run.md`, `documents/agent-md/weeks/week-08-stabilization-freeze.md` |
| Migration phase | Phase 3 |
| Supersedes | None |
| Tags | agent-context-pack |

Superseded manually duplicated weekly packs retained as migration evidence. Use the generated TASK-LIB-001 team packs organized by week and day.

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
| Lifecycle | approved |
| Approval | approved |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | 2026-10-17 |
| Authority | Main Enterprise Architecture and Mobile Flow Catalogue v1 |
| Artifact class | canonical-source |
| Current source | `content/pilots/flows/mobile/MF-06-create-and-fund-task.md` |
| Other artifacts | `documents/pilots/flows/mobile/MF-06-create-and-fund-task.html`, `documents/agent-md/pilots/flows/mobile/MF-06-create-and-fund-task.md` |
| Migration phase | Phase 1 |
| Supersedes | None |
| Tags | main-flow-pilot |

Approved Phase 1 migration reference; it does not replace the complete mobile catalogue until Phase 2 migration and activation.

### PILOT-AF04-001 — AF-04 KYC Review Pilot

| Field | Value |
| --- | --- |
| Type | main-flow-pilot |
| Audience | Non-technical operations, Admin, Backend, QA, AI agents |
| Owner | Product Lead |
| Required reviewers | Technical Lead, Admin Lead, Backend Lead, Risk and Compliance, QA |
| Version | 0.2 |
| Lifecycle | approved |
| Approval | approved |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | 2026-10-17 |
| Authority | Main Enterprise Architecture and Admin Flow Catalogue v1 |
| Artifact class | canonical-source |
| Current source | `content/pilots/flows/admin/AF-04-kyc-review.md` |
| Other artifacts | `documents/pilots/flows/admin/AF-04-kyc-review.html`, `documents/agent-md/pilots/flows/admin/AF-04-kyc-review.md` |
| Migration phase | Phase 1 |
| Supersedes | None |
| Tags | main-flow-pilot, admin, kyc |

Approved standalone Phase 1 migration reference with exact v0.2 technical traceability; it is not a full-catalogue replacement.

### PILOT-KYC-CONTRACT-001 — KYC Review Contract Group Pilot

| Field | Value |
| --- | --- |
| Type | technical-contract-pilot |
| Audience | Admin, Backend, QA, Product, AI agents |
| Owner | Backend Lead |
| Required reviewers | Technical Lead, Admin Lead, Product Lead, Risk and Compliance, QA |
| Version | 0.2 |
| Lifecycle | approved |
| Approval | approved |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | 2026-10-17 |
| Authority | Approved Phase 1 reference decision for AF-04; subject to future formally approved architecture decisions |
| Artifact class | canonical-source |
| Current source | `content/pilots/contracts/kyc-review-contract-group.md` |
| Other artifacts | `documents/pilots/contracts/kyc-review-contract-group.html`, `documents/agent-md/pilots/contracts/kyc-review-contract-group.md` |
| Migration phase | Phase 1 |
| Supersedes | None |
| Tags | technical-contract-pilot, admin, kyc |

Approved Phase 1 reference defining exact v0.2 paths, DTOs, permissions, concurrency, idempotency and reconciliation; Phase 4 merge remains.

### PILOT-KYC-DATA-001 — Tasker Activation and KYC Data Domain Pilot

| Field | Value |
| --- | --- |
| Type | data-domain-pilot |
| Audience | Backend, Admin, Security and Privacy, QA, AI agents |
| Owner | Backend Lead |
| Required reviewers | Technical Lead, Product Lead, Data owner, Security and Privacy, QA |
| Version | 0.2 |
| Lifecycle | approved |
| Approval | approved |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | 2026-10-17 |
| Authority | Approved Phase 1 reference decision for the KYC domain; subject to future formally approved architecture decisions |
| Artifact class | canonical-source |
| Current source | `content/pilots/data/kyc-domain.md` |
| Other artifacts | `documents/pilots/data/kyc-domain.html`, `documents/agent-md/pilots/data/kyc-domain.md` |
| Migration phase | Phase 1 |
| Supersedes | None |
| Tags | data-domain-pilot, kyc, prisma |

Approved Phase 1 reference defining KycVerification review/version and immutable numbered KycAttempt behavior; full-schema merge and migration remain.

### PILOT-QA-AF04-001 — AF-04 KYC Review Reference QA Suite

| Field | Value |
| --- | --- |
| Type | qa-suite-pilot |
| Audience | QA, Admin, Backend, Product, AI agents |
| Owner | QA Lead |
| Required reviewers | Product Lead, Technical Lead, Admin Lead, Backend Lead, Risk and Compliance |
| Version | 0.2 |
| Lifecycle | approved |
| Approval | approved |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | 2026-10-17 |
| Authority | AF-04 v0.2 flow, KYC contract v0.2 and KYC data domain v0.2 |
| Artifact class | canonical-source |
| Current source | `content/pilots/qa/AF-04-kyc-review-suite.md` |
| Other artifacts | `documents/pilots/qa/AF-04-kyc-review-suite.html`, `documents/agent-md/pilots/qa/AF-04-kyc-review-suite.md` |
| Migration phase | Phase 1 |
| Supersedes | None |
| Tags | qa-suite-pilot, admin, kyc |

Approved Phase 1 reference with eleven executable cases; deployed build, migration and provider-fixture evidence remain implementation-stage requirements.

### FLOW-LIB-001 — Phase 2 Standalone Flow Library

| Field | Value |
| --- | --- |
| Type | flow-migration-program |
| Audience | Non-technical teams, Mobile, Admin, Backend, QA, AI agents |
| Owner | Product Lead |
| Required reviewers | Technical Lead, Mobile Lead, Admin Lead, Backend Lead, Security and Privacy, QA |
| Version | 1.0 |
| Lifecycle | active |
| Approval | approved |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | 2026-10-17 |
| Authority | Approved Mobile and Admin Flow Catalogue v1 behavior in the approved Phase 1 standalone format |
| Artifact class | canonical-source |
| Current source | `logs/phase-2-execution-log.md` |
| Other artifacts | `logs/phase-2-flow-migration-inventory.md`, `documents/flows/index.html`, `documents/agent-md/flows/README.md`, `documents/flows/dependency-map.html`, `documents/agent-md/flows/dependency-map.md`, `documents/flows/combined-flow-library.html`, `documents/agent-md/flows/combined-flow-library.md` |
| Migration phase | Phase 2 |
| Supersedes | FLOW-MOBILE-001 and FLOW-ADMIN-001 |
| Tags | flow-library, phase-2, migration |

Active canonical flow family containing all 72 approved standalone sources: 24 mobile main, 13 mobile subflows, 24 admin main and 11 admin subflows. Human/agent indexes, dependency maps and optional combined catalogues are generated.

### TASK-LIB-001 — Phase 3 Canonical Build Task and Weekly Execution Library

| Field | Value |
| --- | --- |
| Type | execution-planning-migration |
| Audience | Junior Mobile developers, Junior Admin developers, Junior Backend developers, Team leads, QA, AI agents |
| Owner | Project Lead |
| Required reviewers | Technical Lead, Product Lead, Mobile Lead, Admin Lead, Backend Lead, QA |
| Version | 1.0 |
| Lifecycle | active |
| Approval | approved |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | 2026-10-17 |
| Authority | Approved flows, accepted contract decisions and approved Phase 3 delivery order |
| Artifact class | canonical-source |
| Current source | `content/tasks/plan-metadata.json` |
| Other artifacts | `logs/phase-3-task-migration-inventory.md`, `logs/phase-3-execution-log.md`, `documents/planning/index.html`, `documents/agent-md/planning/README.md`, `documents/planning/mobile-build-plan.html`, `documents/planning/admin-build-plan.html`, `documents/planning/backend-build-plan.html`, `documents/planning/qa-traceability.html`, `documents/agent-md/planning/qa-traceability.md` |
| Migration phase | Phase 3 |
| Supersedes | PLAN-MOBILE-001, PLAN-ADMIN-001, PLAN-BACKEND-001 and WEEK-PACKS-001 |
| Tags | task-library, weekly-execution, phase-3, junior-developers |

Active planning family with 25 canonical team-week Markdown sources containing 125 task records: 120 migrated legacy tasks plus five Admin integration tasks. Human and agent execution outputs are also weekly; no standalone daily Markdown source, HTML task page or task-agent export is maintained. The primary junior-developer path is Team Build Plan to Week to Day. Every week begins with a Monday-to-Friday five-day map; every day has an explicit start boundary, finish boundary, implementation steps, tests, commit and embedded agent prompt. Delivery order is Admin construction, Mobile and Backend construction, Admin Integration, then cross-platform hardening.

### TECH-REF-001 — Phase 4 Consolidated Technical Reference Library

| Field | Value |
| --- | --- |
| Type | technical-reference-migration |
| Audience | Mobile, Admin, Backend, Infrastructure, Operations, QA, AI agents |
| Owner | Technical Lead |
| Required reviewers | Product Lead, Mobile Lead, Admin Lead, Backend Lead, Infrastructure Lead, Security, Finance, Operations, QA |
| Version | 1.0 |
| Lifecycle | in-review |
| Approval | pending |
| Publication | published |
| Last reviewed | 2026-07-17 |
| Next review | 2026-10-17 |
| Authority | Approved standalone flows and accepted contract decisions, with explicitly marked provisional architecture, contract, schema, provider and design baselines |
| Artifact class | canonical-source |
| Current source | `content/technical/library.json` |
| Other artifacts | `content/technical/contracts.json`, `content/technical/data.json`, `content/technical/platform.json`, `content/technical/screens.json`, `documents/technical/index.html`, `documents/technical/contracts.html`, `documents/technical/data.html`, `documents/technical/platform.html`, `documents/technical/screens.html`, `documents/technical/openapi/work2cash-v1.json`, `documents/agent-md/technical/contracts.md`, `documents/agent-md/technical/data.md`, `documents/agent-md/technical/platform.md`, `documents/agent-md/technical/screens.md`, `logs/phase-4-execution-log.md`, `logs/phase-4-technical-migration-inventory.md`, `logs/phase-4-technical-gap-register.md`, `scripts/bootstrap-phase4-technical-sources.js`, `scripts/generate-technical-docs.js` |
| Migration phase | Phase 4 |
| Supersedes | ARCH-001, DESIGN-001, CONTRACT-001, DATA-001 and PROVIDER-001 |
| Tags | technical-reference, openapi, architecture, contracts, data, providers, screens, phase-4 |

Consolidates the legacy architecture, contract, data, provider and screen families into five human pages, four focused agent packs and one generated OpenAPI baseline. Its 342 anchored records are sections inside those families, not standalone required-reading documents. Approved referral and KYC decisions retain higher authority; provisional gaps remain explicit blockers.


## Pending approvals

- [ ] **ARCH-001 — Main Enterprise Architecture v1:** Product Lead, Infrastructure Lead, Security, Finance, Operations.
- [ ] **DESIGN-001 — Screen To Feature Map v1:** Technical Lead, Mobile Lead, Admin Lead, Backend Lead.
- [ ] **FLOW-ALIGN-001 — Flow Alignment Review v1:** Technical Lead, Mobile Lead, Admin Lead, Backend Lead.
- [ ] **LEGAL-001 — Legal and User-Facing Documents Pack v1:** Legal reviewer, Technical Lead, Privacy reviewer.
- [ ] **CONTRACT-001 — API and Socket Contract Specification v1:** Technical Lead, Mobile Lead, Admin Lead, QA.
- [ ] **DATA-001 — Data Model and Prisma Schema Planning v1:** Technical Lead, Data owner, Security.
- [ ] **PROVIDER-001 — Provider Integration and Cost Control v1:** Technical Lead, Backend Lead, Finance, Security.
- [ ] **QA-001 — QA and Go-Live Readiness Checklist v1:** Technical Lead, Product Lead, Infrastructure Lead, Operations.
- [ ] **FULL-CONTEXT-001 — Work2Cash Full Project Markdown:** Product Lead.
- [ ] **TECH-REF-001 — Phase 4 Consolidated Technical Reference Library:** Product Lead, Mobile Lead, Admin Lead, Backend Lead, Infrastructure Lead, Security, Finance, Operations, QA.

## Legacy migration queue

- [ ] **ARCH-001:** migrate in Phase 4. Frozen Phase 4 migration evidence. Use TECH-REF-001 for current architecture and operations reading. Formal approval of the migrated architecture records remains pending.
- [ ] **DESIGN-001:** migrate in Phase 4. Frozen Phase 4 migration evidence. Use TECH-REF-001 Screen-to-Feature Reference, where known provider, KYC, category, payment, auto-accept and admin-reassignment drift is corrected and remaining design evidence is marked.
- [ ] **FLOW-MOBILE-001:** migrate in Phase 2. Approved behavior was migrated into 37 standalone mobile flow sources. Retained only as historical combined evidence; use FLOW-LIB-001.
- [ ] **FLOW-ADMIN-001:** migrate in Phase 2. Approved behavior was migrated into 35 standalone admin flow sources. Retained only as historical combined evidence; use FLOW-LIB-001.
- [ ] **FLOW-ALIGN-001:** migrate in Phase 5. Provisional decision tracker until decisions are moved into governed records.
- [ ] **LEGAL-001:** migrate in Phase 5. Publication is not legal approval; subject-matter review remains required.
- [ ] **CONTRACT-001:** migrate in Phase 4. Frozen Phase 4 migration evidence. Use TECH-REF-001 API, Socket and OpenAPI Reference. Approved referral and KYC decisions are merged there with higher authority; remaining contract gaps are explicit.
- [ ] **DATA-001:** migrate in Phase 4. Frozen Phase 4 migration evidence. Use TECH-REF-001 Data Model Reference. KycAttempt is merged from the approved pilot and conceptual models remain clearly separated from executable Prisma baselines.
- [ ] **PROVIDER-001:** migrate in Phase 4. Frozen Phase 4 migration evidence. Use TECH-REF-001 Platform Architecture and Operations. Costs and provider capabilities still require dated official validation before purchase or go-live.
- [ ] **PLAN-MOBILE-001:** migrate in Phase 3. Superseded combined Mobile task reference retained as migration evidence. Use TASK-LIB-001 and its generated week-by-week Mobile plan.
- [ ] **PLAN-ADMIN-001:** migrate in Phase 3. Superseded combined Admin task reference retained as migration evidence. Use TASK-LIB-001 and its generated week-by-week Admin plan.
- [ ] **PLAN-BACKEND-001:** migrate in Phase 3. Superseded combined Backend task reference retained as migration evidence. Use TASK-LIB-001 and its generated week-by-week Backend plan.
- [ ] **QA-001:** migrate in Phase 5. Checklist publication does not mean release gates have passed.
- [ ] **AI-START-001:** migrate in Phase 3. Aligned with AGENTS.md and the Phase 3 Team to Week to Day workflow. Use one team-week Markdown and select its embedded daily prompt.
- [ ] **TEAM-PACKS-001:** migrate in Phase 3. Active focused context inputs used with Phase 3 team-week Markdown packs and embedded daily prompts. These packs narrow work; they do not define product behavior.
- [ ] **WEEK-PACKS-001:** migrate in Phase 3. Superseded manually duplicated weekly packs retained as migration evidence. Use the generated TASK-LIB-001 team packs organized by week and day.
- [ ] **FULL-CONTEXT-001:** migrate in Phase 6. Large non-canonical bundle without a current deterministic generator. Use only for broad context.
