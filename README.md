# Work2Cash Documentation

This repository contains the official Work2Cash project documentation for the product, backend, mobile, admin frontend, infrastructure, QA, and stakeholder teams.

The Main Enterprise Architecture v1 document is the primary source of truth.

## Published Documentation Site

GitHub Pages URL:

https://work2cash.github.io/docs/

## Governance

Only the Technical Lead is allowed to edit, push, merge, or publish documentation changes.

Team members should consume the documents through the GitHub Pages site.

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