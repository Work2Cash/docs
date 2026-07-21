#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const SOURCE_ROOT = path.join(ROOT, "content", "technical");
const HTML_ROOT = path.join(ROOT, "documents", "technical");
const AGENT_ROOT = path.join(ROOT, "documents", "agent-md", "technical");
const CHECK_ONLY = process.argv.includes("--check");
const FAMILY_SLUGS = ["contracts", "data", "platform", "screens"];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function slug(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "record";
}

function relativeUrl(fromFile, toFile) {
  return path.relative(path.dirname(fromFile), toFile).split(path.sep).join("/") || path.basename(toFile);
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function validateFamily(family) {
  const required = ["id", "slug", "title", "description", "audience", "owner", "reviewers", "status", "version", "lastReviewed", "authority", "sourceNotes", "sharedRules", "records"];
  const missing = required.filter((key) => family[key] === undefined || family[key] === null || family[key] === "");
  if (missing.length) throw new Error(`${family.slug || "unknown family"}: missing ${missing.join(", ")}`);
  if (!Array.isArray(family.records) || !family.records.length) throw new Error(`${family.slug}: no records`);

  const ids = new Set();
  for (const record of family.records) {
    const recordRequired = ["id", "type", "title", "domain", "status", "summary", "facts", "rules", "dependencies", "gaps", "source"];
    const recordMissing = recordRequired.filter((key) => record[key] === undefined || record[key] === null || record[key] === "");
    if (recordMissing.length) throw new Error(`${family.slug}/${record.id || record.title}: missing ${recordMissing.join(", ")}`);
    if (ids.has(record.id)) throw new Error(`${family.slug}: duplicate record id ${record.id}`);
    ids.add(record.id);
    if (!Array.isArray(record.facts) || record.facts.some((fact) => !fact.label || !fact.value)) {
      throw new Error(`${family.slug}/${record.id}: invalid facts`);
    }
  }
}

function metadataHtml(family) {
  return `<dl class="technical-metadata">
    <div><dt>Owner</dt><dd>${escapeHtml(family.owner)}</dd></div>
    <div><dt>Reviewers</dt><dd>${escapeHtml(family.reviewers.join(", "))}</dd></div>
    <div><dt>Authority</dt><dd>${escapeHtml(family.authority)}</dd></div>
    <div><dt>Last reviewed</dt><dd>${escapeHtml(family.lastReviewed)}</dd></div>
  </dl>`;
}

function recordHtml(record) {
  const id = slug(record.id);
  const facts = record.facts.map((fact) => `<div><dt>${escapeHtml(fact.label)}</dt><dd>${escapeHtml(fact.value)}</dd></div>`).join("");
  const rules = record.rules.map((rule) => `<li>${escapeHtml(rule)}</li>`).join("");
  const dependencies = record.dependencies.map((dependency) => `<li>${escapeHtml(dependency)}</li>`).join("");
  const gaps = record.gaps.length
    ? `<section class="record-gaps" aria-label="Known gaps"><h4>Known gaps or decisions required</h4><ul>${record.gaps.map((gap) => `<li>${escapeHtml(gap)}</li>`).join("")}</ul></section>`
    : "";
  const recovery = record.recovery
    ? `<section><h4>Failure, fallback and disablement</h4><dl class="record-facts">
        <div><dt>Failure state</dt><dd>${escapeHtml(record.recovery.failure)}</dd></div>
        <div><dt>Fallback</dt><dd>${escapeHtml(record.recovery.fallback)}</dd></div>
        <div><dt>Disablement</dt><dd>${escapeHtml(record.recovery.disablement)}</dd></div>
      </dl></section>`
    : "";
  const schema = record.schema
    ? `<section><h4>Prisma execution baseline</h4><pre><code class="language-prisma">${escapeHtml(record.schema)}</code></pre></section>`
    : "";

  return `<details class="technical-record" id="${id}" data-technical-record data-domain="${escapeHtml(record.domain)}">
    <summary>
      <span class="technical-record-id">${escapeHtml(record.id)}</span>
      <span class="technical-record-title">${escapeHtml(record.title)}</span>
      <span class="technical-record-badges"><span>${escapeHtml(record.domain)}</span><span class="status status-${slug(record.status)}">${escapeHtml(record.status)}</span></span>
    </summary>
    <div class="technical-record-body">
      <p class="record-summary">${escapeHtml(record.summary)}</p>
      <section><h4>At a glance</h4><dl class="record-facts">${facts}</dl></section>
      <div class="record-columns">
        <section><h4>Rules</h4><ul>${rules}</ul></section>
        <section><h4>Dependencies</h4><ul>${dependencies}</ul></section>
      </div>
      ${recovery}
      ${gaps}
      ${schema}
      <p class="record-source"><strong>Source:</strong> ${escapeHtml(record.source)}</p>
      <a class="record-anchor" href="#${id}">Link directly to this record</a>
    </div>
  </details>`;
}

function renderFamilyHtml(family) {
  const outputFile = path.join(HTML_ROOT, `${family.slug}.html`);
  const homeUrl = relativeUrl(outputFile, path.join(ROOT, "index.html"));
  const indexUrl = relativeUrl(outputFile, path.join(HTML_ROOT, "index.html"));
  const cssUrl = relativeUrl(outputFile, path.join(ROOT, "assets", "css", "pilot-docs.css"));
  const guardUrl = relativeUrl(outputFile, path.join(ROOT, "assets", "js", "guard.js"));
  const filterUrl = relativeUrl(outputFile, path.join(ROOT, "assets", "js", "technical-library.js"));
  const agentUrl = relativeUrl(outputFile, path.join(AGENT_ROOT, `${family.slug}.md`));
  const openapiUrl = relativeUrl(outputFile, path.join(HTML_ROOT, "openapi", "work2cash-v1.json"));
  const domains = [...new Set(family.records.map((record) => record.domain))].sort();
  const statuses = new Map();
  for (const record of family.records) statuses.set(record.status, (statuses.get(record.status) || 0) + 1);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(family.description)}">
  <title>${escapeHtml(family.title)} | Work2Cash Docs</title>
  <link rel="stylesheet" href="${cssUrl}">
  <script src="${guardUrl}"></script>
</head>
<body>
  <a class="skip-link" href="#content">Skip to technical records</a>
  <header class="site-header">
    <a class="brand" href="${homeUrl}">Work2Cash Docs</a>
    <nav aria-label="Technical reference navigation">
      <a href="${indexUrl}">Technical reference</a>
      <a href="${agentUrl}" download>Download agent pack</a>
      ${family.slug === "contracts" ? `<a href="${openapiUrl}" download>Download OpenAPI</a>` : ""}
    </nav>
  </header>
  <main id="content" class="technical-shell" tabindex="-1">
    <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="${indexUrl}">Technical Reference</a><span aria-hidden="true">/</span><span>${escapeHtml(family.title)}</span></nav>
    <header class="document-hero technical-hero">
      <div class="eyebrow">Phase 4 · Consolidated technical library</div>
      <h1>${escapeHtml(family.title)}</h1>
      <p class="audience">${escapeHtml(family.description)}</p>
      <div class="status-row"><span class="status status-${slug(family.status)}">${escapeHtml(family.status)}</span><span>Version ${escapeHtml(family.version)}</span><span>${family.records.length} records</span></div>
    </header>

    <section class="technical-intro" aria-labelledby="how-to-use-title">
      <div>
        <h2 id="how-to-use-title">How to use this page</h2>
        <p>Search by name, path, model, provider, screen or rule. Filter by domain, then open only the record required for the current task. Every record has its own direct link.</p>
        <ul>${family.sourceNotes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}</ul>
      </div>
      ${metadataHtml(family)}
    </section>

    <section class="technical-rules" aria-labelledby="shared-rules-title">
      <h2 id="shared-rules-title">Rules that apply to every record</h2>
      <ul>${family.sharedRules.map((rule) => `<li>${escapeHtml(rule)}</li>`).join("")}</ul>
    </section>

    <section class="technical-controls" aria-label="Find technical records">
      <label><span>Search</span><input type="search" data-technical-search placeholder="Search ${escapeHtml(family.title.toLowerCase())}" autocomplete="off"></label>
      <label><span>Domain</span><select data-technical-domain><option value="">All domains</option>${domains.map((domain) => `<option value="${escapeHtml(domain)}">${escapeHtml(domain)}</option>`).join("")}</select></label>
      <div class="technical-result-count" data-technical-result-count aria-live="polite">${family.records.length} records shown</div>
    </section>

    <section class="technical-status-summary" aria-label="Record status summary">
      ${[...statuses].map(([status, count]) => `<span><strong>${count}</strong> ${escapeHtml(status)}</span>`).join("")}
    </section>

    <section class="technical-record-list" aria-label="${escapeHtml(family.title)} records">
      ${family.records.map(recordHtml).join("\n")}
      <div class="technical-empty" data-technical-empty hidden><h2>No matching records</h2><p>Clear the search or select another domain.</p></div>
    </section>
  </main>
  <footer>Work2Cash technical reference · Generated from <code>content/technical/${escapeHtml(family.slug)}.json</code></footer>
  <script src="${filterUrl}"></script>
</body>
</html>
`;
}

function renderIndexHtml(families) {
  const outputFile = path.join(HTML_ROOT, "index.html");
  const homeUrl = relativeUrl(outputFile, path.join(ROOT, "index.html"));
  const cssUrl = relativeUrl(outputFile, path.join(ROOT, "assets", "css", "pilot-docs.css"));
  const guardUrl = relativeUrl(outputFile, path.join(ROOT, "assets", "js", "guard.js"));
  const total = families.reduce((sum, family) => sum + family.records.length, 0);
  const cards = families.map((family) => {
    const types = [...new Set(family.records.map((record) => record.type))].map((type) => type.replaceAll("-", " ")).join(", ");
    return `<article class="technical-family-card">
      <div class="eyebrow">${escapeHtml(family.id)}</div>
      <h2><a href="${escapeHtml(family.slug)}.html">${escapeHtml(family.title)}</a></h2>
      <p>${escapeHtml(family.description)}</p>
      <div class="status-row"><span class="status status-${slug(family.status)}">${escapeHtml(family.status)}</span><span>${family.records.length} records</span></div>
      <p class="technical-card-types">${escapeHtml(types)}</p>
      <a class="technical-card-action" href="${escapeHtml(family.slug)}.html">Open focused reference</a>
    </article>`;
  }).join("\n");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Work2Cash consolidated Phase 4 technical reference library.">
  <title>Technical Reference Library | Work2Cash Docs</title>
  <link rel="stylesheet" href="${cssUrl}">
  <script src="${guardUrl}"></script>
</head>
<body>
  <a class="skip-link" href="#content">Skip to technical library</a>
  <header class="site-header"><a class="brand" href="${homeUrl}">Work2Cash Docs</a><nav aria-label="Document navigation"><a href="${homeUrl}">Portal home</a><a href="../document-registry.html">Document registry</a></nav></header>
  <main id="content" class="index-shell" tabindex="-1">
    <header class="index-hero"><div class="eyebrow">Phase 4 · Technical reference migration</div><h1>Technical Reference Library</h1><p>Four focused references, ${total} independently linkable records and one OpenAPI baseline—without making the team navigate hundreds of documents.</p></header>

    <section class="technical-route-panel" aria-labelledby="choose-reference-title">
      <h2 id="choose-reference-title">Open only what your work needs</h2>
      <div class="role-route-grid">
        <article><strong>Mobile or Admin</strong><span>Start with Screens, then follow the exact Contract anchor.</span></article>
        <article><strong>Backend</strong><span>Start with Contracts, then open the named Data records.</span></article>
        <article><strong>Infrastructure</strong><span>Use Platform Architecture and Operations.</span></article>
        <article><strong>QA</strong><span>Use the task's Flow, Contract, Screen and Data anchors.</span></article>
      </div>
    </section>

    <section class="technical-family-grid" aria-label="Technical reference families">${cards}</section>

    <section class="notice" aria-labelledby="authority-warning">
      <h2 id="authority-warning">Authority and gaps</h2>
      <p>Approved flow and contract decisions control their named behavior. Other migrated records remain provisional or in review. A visible gap is a blocker to that portion of implementation, not permission to invent it.</p>
    </section>
  </main>
  <footer>Work2Cash Phase 4 consolidated technical reference</footer>
</body>
</html>
`;
}

function markdownTable(rows) {
  if (!rows.length) return "";
  return `| Field | Value |\n| --- | --- |\n${rows.map((row) => `| ${String(row.label).replaceAll("|", "\\|")} | ${String(row.value).replaceAll("|", "\\|").replace(/\n/g, " ")} |`).join("\n")}`;
}

function renderAgentMarkdown(family) {
  const records = family.records.map((record) => {
    const recovery = record.recovery
      ? `\n### Failure, fallback and disablement\n\n${markdownTable([
          { label: "Failure state", value: record.recovery.failure },
          { label: "Fallback", value: record.recovery.fallback },
          { label: "Disablement", value: record.recovery.disablement },
        ])}\n`
      : "";
    const schema = record.schema ? `\n### Prisma execution baseline\n\n\`\`\`prisma\n${record.schema}\n\`\`\`\n` : "";
    return `## ${record.id} — ${record.title}

| Field | Value |
| --- | --- |
| Type | ${record.type} |
| Domain | ${record.domain} |
| Status | ${record.status} |
| Source | ${record.source.replaceAll("|", "\\|")} |

### In plain English

${record.summary}

### At a glance

${markdownTable(record.facts)}

### Rules

${record.rules.map((rule) => `- ${rule}`).join("\n")}

### Dependencies

${record.dependencies.map((dependency) => `- ${dependency}`).join("\n")}
${recovery}
### Known gaps or decisions required

${record.gaps.length ? record.gaps.map((gap) => `- ${gap}`).join("\n") : "- None recorded."}
${schema}`;
  }).join("\n\n---\n\n");

  return `---
id: ${family.id}
title: ${family.title}
type: technical-reference-agent-pack
audience: ${family.audience}
owner: ${family.owner}
reviewers: ${family.reviewers.join(", ")}
status: ${family.status}
version: ${family.version}
last_reviewed: ${family.lastReviewed}
authority: ${family.authority}
generated_from: content/technical/${family.slug}.json
do_not_edit: true
---

# ${family.title}

> Generated focused agent pack. Edit \`content/technical/${family.slug}.json\`, then run \`node scripts/generate-technical-docs.js\`.

## Purpose

${family.description}

## How to use this pack

Use only the record required by the assigned flow or daily task. A named gap blocks that portion of implementation. Do not infer missing paths, fields, provider behavior or product rules from adjacent records.

## Authority notes

${family.sourceNotes.map((note) => `- ${note}`).join("\n")}

## Shared rules

${family.sharedRules.map((rule) => `- ${rule}`).join("\n")}

---

${records}
`;
}

function openApiFromContracts(contracts) {
  const records = contracts.records.filter((record) => ["endpoint", "webhook"].includes(record.type) && record.method && record.path);
  const paths = {};

  for (const record of records) {
    const method = record.method.toLowerCase();
    paths[record.path] ||= {};
    if (paths[record.path][method]) throw new Error(`OpenAPI duplicate: ${record.method} ${record.path}`);
    paths[record.path][method] = {
      operationId: `${method}_${slug(record.path).replaceAll("-", "_")}`,
      summary: record.summary,
      tags: [record.domain],
      security: /Not recorded|Unauthenticated|Provider signature/i.test(record.auth)
        ? []
        : [{ bearerAuth: [] }],
      responses: {
        "200": { description: "Successful response. Exact component schema is controlled by the reviewed contract record." },
        default: { description: "Standard Work2Cash error envelope." },
      },
      "x-work2cash-id": record.id,
      "x-work2cash-status": record.status,
      "x-work2cash-authority": record.authority || contracts.authority,
      "x-work2cash-actor": record.actor,
      "x-work2cash-auth": record.auth,
      "x-work2cash-idempotency": record.idempotency,
      "x-work2cash-gaps": record.gaps,
    };
  }

  return {
    openapi: "3.1.0",
    info: {
      title: "Work2Cash API Contract Baseline",
      version: contracts.version,
      description: "Generated from the Phase 4 consolidated contract source. Approved-reference operations control their named decisions; provisional operations retain explicit gaps and must not be implemented by guesswork.",
    },
    servers: [
      { url: "https://api-staging.work2cash.ng", description: "Staging" },
      { url: "https://api.work2cash.ng", description: "Production" },
    ],
    tags: [...new Set(records.map((record) => record.domain))].sort().map((name) => ({ name })),
    paths,
    components: {
      securitySchemes: {
        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      },
      schemas: {
        ErrorEnvelope: {
          type: "object",
          required: ["error", "meta"],
          properties: {
            error: {
              type: "object",
              required: ["code", "message"],
              properties: {
                code: { type: "string" },
                message: { type: "string" },
                details: { type: ["object", "null"], additionalProperties: true },
              },
            },
            meta: {
              type: "object",
              required: ["requestId"],
              properties: { requestId: { type: "string" } },
            },
          },
        },
      },
    },
  };
}

function gapRegisterMarkdown(families) {
  const rows = families.flatMap((family) => family.records.flatMap((record) =>
    record.gaps.map((gap, index) => ({
      id: `${record.id}-G${index + 1}`,
      family: family.title,
      record: `${record.id} — ${record.title}`,
      status: "Open",
      gap,
    })),
  ));
  return `# Phase 4 Technical Gap Register

> Generated from the four canonical Phase 4 technical sources. A listed gap blocks only the affected decision or implementation detail; it does not invalidate unrelated approved behavior.

| Gap ID | Family | Record | Status | Gap or decision required |
| --- | --- | --- | --- | --- |
${rows.map((row) => `| ${row.id} | ${row.family} | ${row.record.replaceAll("|", "\\|")} | ${row.status} | ${row.gap.replaceAll("|", "\\|")} |`).join("\n")}
`;
}

function inventoryMarkdown(families) {
  const rows = families.flatMap((family) => family.records.map((record) =>
    `| ${record.id} | ${family.title} | ${record.type} | ${record.domain} | ${record.status} | ${record.source.replaceAll("|", "\\|")} |`,
  ));
  return `# Phase 4 Technical Migration Inventory

> Generated inventory for the consolidated technical-reference migration. These are records inside four source families, not standalone required-reading documents.

| Record | Family | Type | Domain | Status | Migrated source |
| --- | --- | --- | --- | --- | --- |
${rows.join("\n")}
`;
}

function expectedOutputs(families) {
  const expected = new Map();
  expected.set(path.join(HTML_ROOT, "index.html"), renderIndexHtml(families));
  for (const family of families) {
    expected.set(path.join(HTML_ROOT, `${family.slug}.html`), renderFamilyHtml(family));
    expected.set(path.join(AGENT_ROOT, `${family.slug}.md`), renderAgentMarkdown(family));
  }
  const contracts = families.find((family) => family.slug === "contracts");
  expected.set(
    path.join(HTML_ROOT, "openapi", "work2cash-v1.json"),
    JSON.stringify(openApiFromContracts(contracts), null, 2) + "\n",
  );
  expected.set(path.join(ROOT, "logs", "phase-4-technical-gap-register.md"), gapRegisterMarkdown(families));
  expected.set(path.join(ROOT, "logs", "phase-4-technical-migration-inventory.md"), inventoryMarkdown(families));
  return expected;
}

function validateOutputs(families, expected) {
  const allIds = new Set();
  for (const family of families) {
    for (const record of family.records) {
      if (allIds.has(record.id)) throw new Error(`Duplicate cross-family record id: ${record.id}`);
      allIds.add(record.id);
    }
  }

  const contracts = families.find((family) => family.slug === "contracts");
  const openapi = JSON.parse(expected.get(path.join(HTML_ROOT, "openapi", "work2cash-v1.json")));
  const openApiOperations = new Set();
  for (const [endpoint, methods] of Object.entries(openapi.paths)) {
    for (const method of Object.keys(methods)) openApiOperations.add(`${method.toUpperCase()} ${endpoint}`);
  }
  const missing = contracts.records
    .filter((record) => ["endpoint", "webhook"].includes(record.type) && record.method && record.path)
    .map((record) => `${record.method} ${record.path}`)
    .filter((operation) => !openApiOperations.has(operation));
  if (missing.length) throw new Error(`OpenAPI missing operations: ${missing.join(", ")}`);

  const forbidden = [
    { pattern: /\/admin\/tasks\/[^/\s]+\/reassign/i, label: "admin task reassignment endpoint" },
    { pattern: /\bOPay\b/i, label: "OPay" },
    { pattern: /Facebook login (?:is )?(?:available|supported|allowed|enabled)/i, label: "supported Facebook login" },
  ];
  for (const [file, contents] of expected) {
    if (file.endsWith(".md") && /<\s*(div|span|section|article|details)\b/i.test(contents)) {
      throw new Error(`${path.relative(ROOT, file)} contains decorative HTML`);
    }
    for (const rule of forbidden) {
      if (rule.pattern.test(contents)) throw new Error(`${path.relative(ROOT, file)} contains forbidden ${rule.label}`);
    }
  }
}

function run() {
  const library = readJson(path.join(SOURCE_ROOT, "library.json"));
  const families = FAMILY_SLUGS.map((familySlug) => readJson(path.join(SOURCE_ROOT, `${familySlug}.json`)));
  for (const family of families) validateFamily(family);
  if (library.families.length !== families.length) throw new Error("Library metadata does not match technical source families");

  const expected = expectedOutputs(families);
  validateOutputs(families, expected);

  if (CHECK_ONLY) {
    const problems = [];
    for (const [file, contents] of expected) {
      if (!fs.existsSync(file)) problems.push(`missing: ${path.relative(ROOT, file)}`);
      else if (fs.readFileSync(file, "utf8") !== contents) problems.push(`stale: ${path.relative(ROOT, file)}`);
    }
    if (problems.length) throw new Error(`Technical documentation drift:\n${problems.map((problem) => `- ${problem}`).join("\n")}`);
    console.log(`Phase 4 technical library is current: 5 human pages, 4 agent packs, 1 OpenAPI specification and ${families.reduce((sum, family) => sum + family.records.length, 0)} records checked.`);
    return;
  }

  for (const [file, contents] of expected) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, contents);
  }
  console.log(`Generated the Phase 4 technical library: 5 human pages, 4 agent packs, 1 OpenAPI specification and ${families.reduce((sum, family) => sum + family.records.length, 0)} independently linkable records.`);
}

try {
  run();
} catch (error) {
  console.error(`Phase 4 technical generation failed: ${error.message}`);
  process.exitCode = 1;
}
