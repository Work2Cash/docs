#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const SOURCE_ROOT = path.join(ROOT, "content", "assurance");
const HTML_ROOT = path.join(ROOT, "documents", "assurance");
const AGENT_ROOT = path.join(ROOT, "documents", "agent-md", "assurance");
const CHECK_ONLY = process.argv.includes("--check");
const FAMILY_SLUGS = ["qa-release", "legal-compliance", "decisions-governance"];

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

function referencesHtml(family) {
  if (!family.officialReferences?.length) return "";
  return `<section class="technical-rules assurance-references" aria-labelledby="official-references-title">
    <h2 id="official-references-title">Official legal reference points</h2>
    <p>These links identify primary reference material only. They do not replace qualified legal interpretation or approval.</p>
    <ul>${family.officialReferences.map((reference) => `<li><a href="${escapeHtml(reference.url)}" rel="noreferrer">${escapeHtml(reference.title)}</a><br><span>${escapeHtml(reference.note)}</span></li>`).join("")}</ul>
  </section>`;
}

function recordHtml(record) {
  const id = slug(record.id);
  const facts = record.facts.map((fact) => `<div><dt>${escapeHtml(fact.label)}</dt><dd>${escapeHtml(fact.value)}</dd></div>`).join("");
  const rules = record.rules.map((rule) => `<li>${escapeHtml(rule)}</li>`).join("");
  const dependencies = record.dependencies.map((dependency) => `<li>${escapeHtml(dependency)}</li>`).join("");
  const gaps = record.gaps.length
    ? `<section class="record-gaps" aria-label="Open evidence or decisions"><h4>Open evidence, review or decisions</h4><ul>${record.gaps.map((gap) => `<li>${escapeHtml(gap)}</li>`).join("")}</ul></section>`
    : `<section class="record-complete-note"><strong>No open migration gap recorded.</strong> Execution or release evidence may still be task-specific.</section>`;

  return `<details class="technical-record assurance-record" id="${id}" data-technical-record data-domain="${escapeHtml(record.domain)}">
    <summary>
      <span class="technical-record-id">${escapeHtml(record.id)}</span>
      <span class="technical-record-title">${escapeHtml(record.title)}</span>
      <span class="technical-record-badges"><span>${escapeHtml(record.domain)}</span><span class="status status-${slug(record.status)}">${escapeHtml(record.status)}</span></span>
    </summary>
    <div class="technical-record-body">
      <p class="record-summary">${escapeHtml(record.summary)}</p>
      <section><h4>At a glance</h4><dl class="record-facts">${facts}</dl></section>
      <div class="record-columns">
        <section><h4>Requirements and controls</h4><ul>${rules}</ul></section>
        <section><h4>Dependencies and traceability</h4><ul>${dependencies}</ul></section>
      </div>
      ${gaps}
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
  <a class="skip-link" href="#content">Skip to assurance records</a>
  <header class="site-header">
    <a class="brand" href="${homeUrl}">Work2Cash Docs</a>
    <nav aria-label="Assurance navigation"><a href="${indexUrl}">Assurance and governance</a><a href="${agentUrl}" download>Download agent pack</a></nav>
  </header>
  <main id="content" class="technical-shell" tabindex="-1">
    <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="${indexUrl}">Assurance and Governance</a><span aria-hidden="true">/</span><span>${escapeHtml(family.title)}</span></nav>
    <header class="document-hero technical-hero assurance-hero">
      <div class="eyebrow">Phase 5 · Consolidated assurance and governance</div>
      <h1>${escapeHtml(family.title)}</h1>
      <p class="audience">${escapeHtml(family.description)}</p>
      <div class="status-row"><span class="status status-${slug(family.status)}">${escapeHtml(family.status)}</span><span>Version ${escapeHtml(family.version)}</span><span>${family.records.length} records</span></div>
    </header>

    <section class="technical-intro" aria-labelledby="how-to-use-title">
      <div>
        <h2 id="how-to-use-title">How to use this page</h2>
        <p>Search or filter, then open only the test, clause, decision, risk or release record required for the current work. Every record has a stable direct link.</p>
        <ul>${family.sourceNotes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}</ul>
      </div>
      ${metadataHtml(family)}
    </section>

    <section class="technical-rules assurance-rules" aria-labelledby="shared-rules-title">
      <h2 id="shared-rules-title">Controls that apply to every record</h2>
      <ul>${family.sharedRules.map((rule) => `<li>${escapeHtml(rule)}</li>`).join("")}</ul>
    </section>
    ${referencesHtml(family)}

    <section class="technical-controls assurance-controls" aria-label="Find assurance records">
      <label><span>Search</span><input type="search" data-technical-search placeholder="Search ${escapeHtml(family.title.toLowerCase())}" autocomplete="off"></label>
      <label><span>Domain</span><select data-technical-domain><option value="">All domains</option>${domains.map((domain) => `<option value="${escapeHtml(domain)}">${escapeHtml(domain)}</option>`).join("")}</select></label>
      <div class="technical-result-count" data-technical-result-count aria-live="polite">${family.records.length} records shown</div>
    </section>

    <section class="technical-status-summary" aria-label="Record status summary">${[...statuses].map(([status, count]) => `<span><strong>${count}</strong> ${escapeHtml(status)}</span>`).join("")}</section>
    <section class="technical-record-list" aria-label="${escapeHtml(family.title)} records">
      ${family.records.map(recordHtml).join("\n")}
      <div class="technical-empty" data-technical-empty hidden><h2>No matching records</h2><p>Clear the search or select another domain.</p></div>
    </section>
  </main>
  <footer>Work2Cash assurance and governance · Generated from <code>content/assurance/${escapeHtml(family.slug)}.json</code></footer>
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
  const cards = families.map((family) => `<article class="technical-family-card assurance-family-card">
    <div class="eyebrow">${escapeHtml(family.id)}</div>
    <h2><a href="${escapeHtml(family.slug)}.html">${escapeHtml(family.title)}</a></h2>
    <p>${escapeHtml(family.description)}</p>
    <div class="status-row"><span class="status status-${slug(family.status)}">${escapeHtml(family.status)}</span><span>${family.records.length} records</span></div>
    <a class="technical-card-action" href="${escapeHtml(family.slug)}.html">Open focused register</a>
  </article>`).join("\n");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Work2Cash consolidated Phase 5 assurance and governance library.">
  <title>Assurance and Governance | Work2Cash Docs</title>
  <link rel="stylesheet" href="${cssUrl}">
  <script src="${guardUrl}"></script>
</head>
<body>
  <a class="skip-link" href="#content">Skip to assurance library</a>
  <header class="site-header"><a class="brand" href="${homeUrl}">Work2Cash Docs</a><nav aria-label="Document navigation"><a href="${homeUrl}">Portal home</a><a href="../document-registry.html">Document registry</a></nav></header>
  <main id="content" class="index-shell" tabindex="-1">
    <header class="index-hero assurance-index-hero"><div class="eyebrow">Phase 5 · Assurance and governance</div><h1>Assurance and Governance</h1><p>Three focused registers, ${total} anchored records and no standalone test-case, legal-clause or decision-document explosion.</p></header>

    <section class="technical-route-panel" aria-labelledby="choose-register-title">
      <h2 id="choose-register-title">Choose the evidence question</h2>
      <div class="role-route-grid assurance-route-grid">
        <article><strong>Is it tested and releasable?</strong><span>Open QA and Release Assurance.</span></article>
        <article><strong>Is the wording and control legally aligned?</strong><span>Open Legal and Compliance.</span></article>
        <article><strong>What decision controls this?</strong><span>Open Decisions and Governance.</span></article>
        <article><strong>Do I need everything?</strong><span>No. Open only the exact anchored record linked from the task, flow or review.</span></article>
      </div>
    </section>

    <section class="technical-family-grid assurance-family-grid" aria-label="Assurance and governance families">${cards}</section>

    <section class="notice" aria-labelledby="assurance-warning">
      <h2 id="assurance-warning">Evidence, approval and publication warning</h2>
      <p>Migration does not pass a test, approve a release, provide legal advice or accept an open decision. Only named evidence and authorized review can change those states.</p>
    </section>
  </main>
  <footer>Work2Cash Phase 5 consolidated assurance and governance</footer>
</body>
</html>
`;
}

function markdownTable(rows) {
  return `| Field | Value |\n| --- | --- |\n${rows.map((row) => `| ${String(row.label).replaceAll("|", "\\|")} | ${String(row.value).replaceAll("|", "\\|").replace(/\n/g, " ")} |`).join("\n")}`;
}

function renderAgentMarkdown(family) {
  const references = family.officialReferences?.length
    ? `\n## Official reference points\n\n${family.officialReferences.map((reference) => `- [${reference.title}](${reference.url}) — ${reference.note}`).join("\n")}\n`
    : "";
  const records = family.records.map((record) => `## ${record.id} — ${record.title}

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

### Requirements and controls

${record.rules.map((rule) => `- ${rule}`).join("\n")}

### Dependencies and traceability

${record.dependencies.map((dependency) => `- ${dependency}`).join("\n")}

### Open evidence, review or decisions

${record.gaps.length ? record.gaps.map((gap) => `- ${gap}`).join("\n") : "- No open migration gap recorded. Execution or release evidence may still be task-specific."}
`).join("\n---\n\n");

  return `---
id: ${family.id}
title: ${family.title}
type: assurance-governance-agent-pack
audience: ${family.audience}
owner: ${family.owner}
reviewers: ${family.reviewers.join(", ")}
status: ${family.status}
version: ${family.version}
last_reviewed: ${family.lastReviewed}
authority: ${family.authority}
generated_from: content/assurance/${family.slug}.json
do_not_edit: true
---

# ${family.title}

> Generated focused agent pack. Edit \`content/assurance/${family.slug}.json\`, then run \`node scripts/generate-assurance-docs.js\`.

## Purpose

${family.description}

## How to use this pack

Use only the record required by the assigned task, review or release decision. Migration does not turn Not Run into Passed, a legal draft into approved wording, or an open question into an accepted decision.

## Authority notes

${family.sourceNotes.map((note) => `- ${note}`).join("\n")}

## Shared controls

${family.sharedRules.map((rule) => `- ${rule}`).join("\n")}
${references}
---

${records}
`;
}

function validateAssurance(families, expected) {
  const qa = families.find((family) => family.slug === "qa-release");
  const legal = families.find((family) => family.slug === "legal-compliance");
  const decisions = families.find((family) => family.slug === "decisions-governance");

  const mainFlowIds = [
    ...fs.readdirSync(path.join(ROOT, "content", "flows", "mobile", "main")).filter((file) => file.endsWith(".md")).map((file) => file.match(/^(MF-\d+)/)?.[1]),
    ...fs.readdirSync(path.join(ROOT, "content", "flows", "admin", "main")).filter((file) => file.endsWith(".md")).map((file) => file.match(/^(AF-\d+)/)?.[1]),
  ].filter(Boolean);
  const qaIds = new Set(qa.records.map((record) => record.id));
  const missingFlowSuites = mainFlowIds.filter((id) => !qaIds.has(`QA-${id}`));
  if (missingFlowSuites.length) throw new Error(`QA missing main-flow suites: ${missingFlowSuites.join(", ")}`);

  const releaseGates = qa.records.filter((record) => record.type === "release-gate");
  if (releaseGates.length !== 8) throw new Error(`Expected 8 release gates, found ${releaseGates.length}`);
  if (qa.records.some((record) => /^(passed|approved)$/i.test(record.status))) {
    throw new Error("QA migration cannot mark tests or release gates passed");
  }
  if (legal.records.some((record) => record.status !== "legal-review-required")) {
    throw new Error("Every migrated legal clause must require legal review");
  }
  if (legal.records.some((record) => record.facts.some((fact) => fact.label === "Effective date" && fact.value !== "Not set"))) {
    throw new Error("Legal migration cannot set an effective date");
  }
  if (!decisions.records.some((record) => record.type === "open-question") || !decisions.records.some((record) => record.type === "risk")) {
    throw new Error("Decision family must include open-question and risk registers");
  }

  const forbidden = [
    { pattern: /\bOPay\b/i, label: "OPay" },
    { pattern: /Facebook login (?:is )?(?:available|supported|allowed|enabled)/i, label: "supported Facebook login" },
    { pattern: /Admin (?:may|can) reassign/i, label: "admin reassignment" },
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

function expectedOutputs(families) {
  const expected = new Map();
  expected.set(path.join(HTML_ROOT, "index.html"), renderIndexHtml(families));
  for (const family of families) {
    expected.set(path.join(HTML_ROOT, `${family.slug}.html`), renderFamilyHtml(family));
    expected.set(path.join(AGENT_ROOT, `${family.slug}.md`), renderAgentMarkdown(family));
  }
  return expected;
}

function run() {
  const library = readJson(path.join(SOURCE_ROOT, "library.json"));
  const families = FAMILY_SLUGS.map((familySlug) => readJson(path.join(SOURCE_ROOT, `${familySlug}.json`)));
  for (const family of families) validateFamily(family);
  if (library.families.length !== families.length) throw new Error("Assurance library metadata does not match source families");
  const expected = expectedOutputs(families);
  validateAssurance(families, expected);

  if (CHECK_ONLY) {
    const problems = [];
    for (const [file, contents] of expected) {
      if (!fs.existsSync(file)) problems.push(`missing: ${path.relative(ROOT, file)}`);
      else if (fs.readFileSync(file, "utf8") !== contents) problems.push(`stale: ${path.relative(ROOT, file)}`);
    }
    if (problems.length) throw new Error(`Assurance documentation drift:\n${problems.map((problem) => `- ${problem}`).join("\n")}`);
    console.log(`Phase 5 assurance library is current: 4 human pages, 3 agent packs and ${families.reduce((sum, family) => sum + family.records.length, 0)} records checked.`);
    return;
  }

  for (const [file, contents] of expected) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, contents);
  }
  console.log(`Generated the Phase 5 assurance library: 4 human pages, 3 agent packs and ${families.reduce((sum, family) => sum + family.records.length, 0)} independently linkable records.`);
}

try {
  run();
} catch (error) {
  console.error(`Phase 5 assurance generation failed: ${error.message}`);
  process.exitCode = 1;
}
