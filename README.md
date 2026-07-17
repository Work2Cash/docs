# Work2Cash Documentation

This repository contains the official Work2Cash project documentation for the product, backend, mobile, admin frontend, infrastructure, QA, and stakeholder teams.

The Main Enterprise Architecture v1 document is the designated provisional controlling baseline while formal approval remains pending. Use the Document Registry to check current authority and lifecycle.

## Published Documentation Site

GitHub Pages URL:

https://work2cash.github.io/docs/

## Governance

Repository changes follow `governance/editing-policy.md`, `governance/lifecycle-policy.md` and `governance/versioning-policy.md`.

The machine-readable registry is `governance/document-registry.json`. Human and agent views are generated from it.

Generated outputs must not be edited directly. Run `node scripts/validate-docs.js` before handoff.

## Documentation Generation

| Source | Generated outputs | Command |
| --- | --- | --- |
| `governance/document-registry.json` | Human, agent and HTML registry views | `node scripts/generate-document-registry.js` |
| `content/pilots/` | Approved Phase 1 reference pages | `node scripts/generate-pilot-docs.js` |
| `content/flows/` | Phase 2 standalone flow HTML and agent Markdown | `node scripts/generate-flow-docs.js` |
| Legacy mobile/admin catalogues plus `content/flows/` | Phase 2 migration inventory | `node scripts/generate-flow-migration-inventory.js` |

Add `--check` to any command to verify generated files without rewriting them. Phase 2 migration progress and review gates are recorded in `logs/phase-2-execution-log.md`.

## Legal Documents

The documentation site uses one combined legal document:

- Legal & User-Facing Documents Pack v1

Path:

documents/legal_user_facing_documents_pack_v1.html

This page is protected by the same client-side documentation password gate.

## Security Notice

This repository is public. The GitHub Pages password gate is for team convenience only and is not a true security boundary.

Do not store:

- API keys
- Production passwords
- Provider credentials
- Private financial data
- Sensitive user data
- Internal secrets

## Password generated with 

```js
node -e "const crypto=require('crypto'); console.log(crypto.createHash('sha256').update('YOUR_TEAM_PASSWORD').digest('hex'))"
```
