#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { walkTaskWeekSources } = require("./task-week-source.js");

const ROOT = path.resolve(__dirname, "..");
const PORTAL_SOURCE = path.join(ROOT, "content", "portal", "portal.json");
const TASK_ROOT = path.join(ROOT, "content", "tasks");
const SEARCH_OUTPUT = path.join(ROOT, "documents", "search-index.json");
const PORTAL_OUTPUT = path.join(ROOT, "index.html");
const FULL_CONTEXT_OUTPUT = path.join(ROOT, "documents", "agent-md", "work2cash-full-source-of-truth-v1.md");
const AGENT_START_OUTPUT = path.join(ROOT, "documents", "agent-md", "ai-agent-start-here.md");
const CHECK_ONLY = process.argv.includes("--check");

function posix(value) {
  return value.split(path.sep).join("/");
}

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

function walk(directory, extension) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(target, extension);
    return entry.isFile() && (!extension || entry.name.endsWith(extension)) ? [target] : [];
  }).sort();
}

function metadataFrom(block, label) {
  const metadata = {};
  for (const line of block.split("\n")) {
    const separator = line.indexOf(":");
    if (separator < 1) throw new Error(`${label}: invalid metadata line ${line}`);
    metadata[line.slice(0, separator).trim()] = line.slice(separator + 1).trim();
  }
  return metadata;
}

function readMarkdown(file) {
  const raw = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n+([\s\S]*)$/);
  if (!match) throw new Error(`${posix(path.relative(ROOT, file))}: missing front matter`);
  return { metadata: metadataFrom(match[1], posix(path.relative(ROOT, file))), body: match[2] };
}

function section(body, title) {
  const marker = `## ${title}\n`;
  const start = body.indexOf(marker);
  if (start < 0) return "";
  const remainder = body.slice(start + marker.length);
  const next = remainder.search(/^## /m);
  return (next < 0 ? remainder : remainder.slice(0, next)).trim();
}

function plain(markdown) {
  return String(markdown || "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^[-*#>]\s*/gm, "")
    .replace(/\|/g, " ")
    .replace(/\*\*|`|_/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function concise(value, limit = 280) {
  const normalized = plain(value);
  return normalized.length <= limit ? normalized : `${normalized.slice(0, limit - 1).trimEnd()}…`;
}

function rootHref(file, fragment = "") {
  return `./${posix(path.relative(ROOT, file))}${fragment ? `#${fragment}` : ""}`;
}

function currentFlowEntries() {
  const flowRoot = path.join(ROOT, "content", "flows");
  return walk(flowRoot, ".md").map((file) => {
    const document = readMarkdown(file);
    const relative = path.relative(flowRoot, file);
    const human = path.join(ROOT, "documents", "flows", relative.replace(/\.md$/, ".html"));
    const agent = path.join(ROOT, "documents", "agent-md", "flows", relative);
    const metadata = document.metadata;
    return {
      id: metadata.id,
      title: metadata.title,
      description: concise(section(document.body, "In plain English")),
      type: "flow",
      collection: metadata.type === "main-flow" ? "Main flows" : "Reusable subflows",
      audience: metadata.audience,
      status: metadata.status,
      href: rootHref(human),
      agentHref: rootHref(agent),
      keywords: [metadata.type, metadata.related, metadata.owner],
    };
  });
}

function taskEntries() {
  const teamSlug = { Mobile: "mobile", Backend: "backend", "Admin Frontend": "admin" };
  return walkTaskWeekSources(TASK_ROOT).map((document) => {
    const team = teamSlug[document.weekMetadata.team];
    if (!team) throw new Error(`${document.metadata.id}: unknown team ${document.weekMetadata.team}`);
    const basename = path.basename(document.source, ".md");
    const human = path.join(ROOT, "documents", "planning", "weeks", team, `${basename}.html`);
    const agent = path.join(ROOT, "documents", "agent-md", "planning", "weeks", team, `${basename}.md`);
    const outcome = concise(section(document.body, "Outcome in plain English")
      .replace(/^When accepted,[^:]+:\s*/i, ""));
    return {
      id: document.metadata.id,
      title: document.metadata.title,
      description: outcome,
      type: "task",
      collection: `${document.weekMetadata.team} execution`,
      audience: document.metadata.audience,
      status: document.metadata.status,
      href: rootHref(human, `day-${document.day}`),
      agentHref: rootHref(agent, `day-${document.day}-of-5`),
      keywords: [
        document.weekMetadata.title,
        `week ${document.weekMetadata.week}`,
        `day ${document.day}`,
        document.metadata.related,
        document.metadata.delivery_stage,
      ],
    };
  });
}

function recordEntries(sourceDirectory, outputDirectory, agentDirectory, type) {
  return fs.readdirSync(sourceDirectory)
    .filter((file) => file.endsWith(".json") && file !== "library.json")
    .sort()
    .flatMap((file) => {
      const family = JSON.parse(fs.readFileSync(path.join(sourceDirectory, file), "utf8"));
      const human = path.join(outputDirectory, `${family.slug}.html`);
      const agent = path.join(agentDirectory, `${family.slug}.md`);
      return family.records.map((record) => ({
        id: record.id,
        title: record.title,
        description: concise(record.summary),
        type,
        collection: family.title,
        audience: family.audience,
        status: record.status,
        href: rootHref(human, slug(record.id)),
        agentHref: rootHref(agent),
        keywords: [record.type, record.domain, ...(record.dependencies || []), ...(record.gaps || [])],
      }));
    });
}

function contractEntries() {
  const sourceRoot = path.join(ROOT, "content", "contracts");
  return walk(sourceRoot, ".md").map((file) => {
    const document = readMarkdown(file);
    const basename = path.basename(file, ".md");
    const human = path.join(ROOT, "documents", "contracts", `${basename}.html`);
    const agent = path.join(ROOT, "documents", "agent-md", "contracts", `${basename}.md`);
    return {
      id: document.metadata.id,
      title: document.metadata.title,
      description: concise(section(document.body, "In plain English") || section(document.body, "Purpose") || document.body),
      type: "contract",
      collection: "Accepted contract decisions",
      audience: document.metadata.audience,
      status: document.metadata.status,
      href: rootHref(human),
      agentHref: rootHref(agent),
      keywords: [document.metadata.type, document.metadata.related, document.metadata.authority],
    };
  });
}

function libraryEntries(portal) {
  return portal.libraries.map((library) => ({
    id: library.id,
    title: library.label,
    description: library.description,
    type: "library",
    collection: "Reading libraries",
    audience: library.audience,
    status: "current",
    href: library.href,
    keywords: [library.phase],
  }));
}

function glossaryEntries(portal) {
  return portal.glossary.map((item) => ({
    id: `TERM-${slug(item.term).toUpperCase()}`,
    title: item.term,
    description: item.definition,
    type: "glossary",
    collection: "Common terms",
    audience: "Everyone",
    status: "current",
    href: "./index.html#glossary",
    keywords: [],
  }));
}

function buildEntries(portal) {
  return [
    ...libraryEntries(portal),
    ...currentFlowEntries(),
    ...taskEntries(),
    ...contractEntries(),
    ...recordEntries(
      path.join(ROOT, "content", "technical"),
      path.join(ROOT, "documents", "technical"),
      path.join(ROOT, "documents", "agent-md", "technical"),
      "technical"
    ),
    ...recordEntries(
      path.join(ROOT, "content", "assurance"),
      path.join(ROOT, "documents", "assurance"),
      path.join(ROOT, "documents", "agent-md", "assurance"),
      "assurance"
    ),
    ...glossaryEntries(portal),
  ];
}

function countTypes(entries) {
  return entries.reduce((counts, entry) => {
    counts[entry.type] = (counts[entry.type] || 0) + 1;
    return counts;
  }, {});
}

function roleCard(route) {
  return `<article class="route-card" id="route-${escapeHtml(route.id)}">
    <div class="route-audience">${escapeHtml(route.audience)}</div>
    <h3>${escapeHtml(route.label)}</h3>
    <p>${escapeHtml(route.summary)}</p>
    <ol>${route.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
    <a href="${escapeHtml(route.href)}">${escapeHtml(route.startLabel)}</a>
  </article>`;
}

function libraryCard(library) {
  return `<article class="library-card">
    <div class="eyebrow">${escapeHtml(library.phase)}</div>
    <h3>${escapeHtml(library.label)}</h3>
    <p>${escapeHtml(library.description)}</p>
    <a href="${escapeHtml(library.href)}">Open library</a>
  </article>`;
}

function renderPortal(portal, entries) {
  const counts = countTypes(entries);
  const routeCards = portal.readerRoutes.map(roleCard).join("\n");
  const libraryCards = portal.libraries.map(libraryCard).join("\n");
  const glossary = portal.glossary.map((item) => `<div><dt>${escapeHtml(item.term)}</dt><dd>${escapeHtml(item.definition)}</dd></div>`).join("\n");
  const downloads = portal.agentDownloads.map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}<span>${escapeHtml(item.description)}</span></a>`).join("\n");
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(portal.description)}">
  <title>${escapeHtml(portal.title)}</title>
  <link rel="stylesheet" href="./assets/css/portal.css">
  <script src="./assets/js/gate.js" defer></script>
  <script src="./assets/js/portal-search.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#content">Skip to portal content</a>
  <div class="portal-shell">
    <header class="portal-bar">
      <a class="portal-brand" href="./index.html">
        <img class="portal-logo" src="./assets/images/work2cash-logo.png" alt="" width="501" height="501">
        <span class="portal-brand-copy"><strong>Work2Cash Docs</strong><span>One question, one focused reading path</span></span>
      </a>
      <nav aria-label="Portal shortcuts"><a href="./documents/document-registry.html">Document Registry</a><a href="./documents/downloads/AGENTS.md">Agent instructions</a></nav>
    </header>

    <section class="portal-hero" aria-labelledby="portal-title">
      <div class="eyebrow">Phase 6 · Final documentation integration</div>
      <h1 id="portal-title">Find the exact document you need.</h1>
      <p>${escapeHtml(portal.description)}</p>
      <div class="hero-stats" aria-label="Current documentation coverage"><span>${counts.flow} flows</span><span>${counts.task} daily tasks</span><span>${counts.technical} technical records</span><span>${counts.assurance} assurance records</span></div>
    </section>

    <main id="content" tabindex="-1">
      <section id="gate" class="portal-panel gate-panel" aria-labelledby="gate-title">
        <h2 id="gate-title">Enter the team password</h2>
        <p class="section-intro">This soft GitHub Pages gate is for team convenience only. Never place secrets, credentials, private user data, payment details or confidential operational material in this repository.</p>
        <form class="auth-form" id="auth-form">
          <label for="password">Team password</label>
          <input id="password" type="password" autocomplete="current-password" aria-describedby="gate-note" required>
          <button type="submit">Open documentation</button>
          <div class="error" id="error" role="alert" aria-live="polite"></div>
        </form>
        <p class="note" id="gate-note">The repository stores only a SHA-256 comparison hash, not the raw password.</p>
      </section>

      <div id="docs" class="hidden" aria-hidden="true">
        <section class="portal-panel" aria-labelledby="reader-paths-title">
          <h2 id="reader-paths-title">Start with what you need to do</h2>
          <p class="section-intro">Choose one route. You do not need to read the whole repository.</p>
          <div class="route-grid">${routeCards}</div>
        </section>

        <section class="portal-panel search-panel" aria-labelledby="search-title">
          <h2 id="search-title">Search every current library</h2>
          <p class="section-intro">Search IDs and plain-language titles across flows, daily tasks, contracts, technical records, assurance controls and common terms.</p>
          <div class="search-controls">
            <label>Search <input type="search" data-portal-search placeholder="Try MF-06, payment intent, KycAttempt or release gate" autocomplete="off"></label>
            <label>Collection <select data-portal-scope><option value="all">All current records</option><option value="flow">Flows</option><option value="task">Daily tasks</option><option value="contract">Accepted contracts</option><option value="technical">Technical records</option><option value="assurance">Assurance and governance</option><option value="library">Libraries</option><option value="glossary">Common terms</option></select></label>
          </div>
          <div class="search-summary"><span data-portal-result-count aria-live="polite">${entries.length} searchable records available</span><span class="search-status" data-portal-search-status aria-live="polite">Loading the current index…</span></div>
          <div class="search-results" data-portal-results aria-label="Search results"><p class="search-message">Enter at least two characters to search.</p></div>
        </section>

        <section class="portal-panel" aria-labelledby="libraries-title">
          <h2 id="libraries-title">Current reading libraries</h2>
          <p class="section-intro">Superseded documents remain available through the registry as migration evidence, but they are not part of the normal reading path.</p>
          <div class="library-grid">${libraryCards}</div>
        </section>

        <section class="portal-panel" id="glossary" aria-labelledby="glossary-title">
          <h2 id="glossary-title">Common terms</h2>
          <p class="section-intro">Short definitions for readers who should not need to decode repository terminology.</p>
          <dl class="glossary-grid">${glossary}</dl>
        </section>

        <section class="portal-panel" aria-labelledby="agent-downloads-title">
          <h2 id="agent-downloads-title">AI-agent downloads</h2>
          <p class="section-intro">Use focused context for normal work. The full project context is optional and non-canonical.</p>
          <div class="download-grid">${downloads}</div>
        </section>
      </div>
    </main>
    <footer class="portal-footer">Work2Cash documentation portal v${escapeHtml(portal.version)} · Updated ${escapeHtml(portal.updated)} · Generated from <code>content/portal/portal.json</code></footer>
  </div>
</body>
</html>
`;
}

function markdownEscape(value) {
  return String(value).replaceAll("|", "\\|").replace(/\s+/g, " ").trim();
}

function markdownHref(entry) {
  const rootRelative = (entry.agentHref || entry.href).replace(/^\.\//, "");
  const hashIndex = rootRelative.indexOf("#");
  const file = hashIndex >= 0 ? rootRelative.slice(0, hashIndex) : rootRelative;
  const hash = hashIndex >= 0 ? rootRelative.slice(hashIndex) : "";
  return `${posix(path.relative(path.dirname(FULL_CONTEXT_OUTPUT), path.join(ROOT, file)))}${hash}`;
}

function inventoryTable(entries) {
  return `| ID | Record | Collection | Status | Summary |
| --- | --- | --- | --- | --- |
${entries.map((entry) => `| ${markdownEscape(entry.id)} | [${markdownEscape(entry.title)}](${markdownHref(entry)}) | ${markdownEscape(entry.collection)} | ${markdownEscape(entry.status)} | ${markdownEscape(entry.description)} |`).join("\n")}`;
}

function renderFullContext(portal, entries, registry) {
  const grouped = new Map(["library", "flow", "task", "contract", "technical", "assurance", "glossary"].map((type) => [type, entries.filter((entry) => entry.type === type)]));
  const registryIds = new Set(portal.libraries.map((library) => library.id).filter((id) => registry.entries.some((entry) => entry.id === id)));
  const libraryRows = registry.entries
    .filter((entry) => registryIds.has(entry.id))
    .map((entry) => `| ${entry.id} | ${entry.status} | ${entry.approval} | ${entry.authority.replaceAll("|", "\\|")} |`)
    .join("\n");
  return `---
id: FULL-CONTEXT-001
title: Work2Cash Full Project Agent Context
type: generated-agent-context-map
audience: AI agents, Technical leads, Architecture reviewers
owner: Technical Lead
status: active
version: 2.0
last_reviewed: ${portal.updated}
authority: None independently; every record inherits its named canonical source and registry status
generated_from: current canonical flow, task, contract, technical, assurance, registry and portal sources
do_not_edit: true
---

# Work2Cash Full Project Agent Context

> Optional generated cross-project map. This file is not a source of truth and
> must not resolve conflicts. For implementation, use the smallest focused
> context set defined in \`AGENTS.md\`.

## What this file contains

This context maps ${entries.length} current library, flow, task, contract,
technical, assurance and glossary records. It replaces the former 33,399-line
legacy concatenation and contains no presentation HTML.

## Authority order

1. Approved architecture decisions.
2. Active Main Enterprise Architecture for cross-platform rules.
3. Active domain sources for flows, contracts, data, providers, security, legal and operations.
4. Build tasks and generated weekly packs for scheduling only.
5. Generated outputs, which inherit source authority.
6. Legacy, draft, in-review and combined context artifacts.

Do not invent a missing endpoint, model field, provider behavior, product rule
or legal conclusion. Record the gap and request the controlling decision.

## Reader and context routes

${portal.readerRoutes.map((route) => `### ${route.label}\n\n- Audience: ${route.audience}\n- Start: [${route.startLabel}](${posix(path.relative(path.dirname(FULL_CONTEXT_OUTPUT), path.join(ROOT, route.href.replace(/^\.\//, ""))))})\n- Rule: ${route.summary}`).join("\n\n")}

## Current library governance

| Registry ID | Lifecycle | Approval | Authority |
| --- | --- | --- | --- |
${libraryRows}

## Current reading libraries

${inventoryTable(grouped.get("library"))}

## Approved standalone flows

${inventoryTable(grouped.get("flow"))}

## Junior-developer daily tasks

${inventoryTable(grouped.get("task"))}

## Accepted contract decisions

${inventoryTable(grouped.get("contract"))}

## Technical records

${inventoryTable(grouped.get("technical"))}

## Assurance and governance records

${inventoryTable(grouped.get("assurance"))}

## Common terms

${inventoryTable(grouped.get("glossary"))}

## Final context rule

This inventory helps an agent locate the controlling focused source. It does
not make provisional records approved, mark tasks or tests complete, make legal
clauses effective, close risks or authorize release.
`;
}

function renderAgentStart(portal) {
  return `---
id: AI-START-001
title: AI Agent Start Here
type: generated-agent-guidance
audience: AI agents, Developers
owner: Technical Lead
status: active
version: 2.0
last_reviewed: ${portal.updated}
authority: AGENTS.md
generated_from: content/portal/portal.json
do_not_edit: true
---

# AI Agent Start Here

Read \`AGENTS.md\` and the Document Registry before relying on a source.

## Choose the smallest context set

${portal.readerRoutes.map((route) => `- **${route.label}:** ${route.summary}`).join("\n")}

## Implementation minimum

1. Shared Execution Rules.
2. The relevant team brief.
3. The active team-week pack.
4. The assigned day and embedded prompt.
5. The specific flow.
6. The relevant contract.
7. Data-model or provider records only when the task touches them.

If the active delivery stage, team week or day is not identified, ask which is
active. Do not infer it from calendar dates.

## Broad context

Use [Full Project Agent Context](work2cash-full-source-of-truth-v1.md) only for
onboarding, architecture review and cross-document consistency work. It is a
generated non-canonical map, not permission to load every focused pack for a
normal implementation task.
`;
}

function validate(portal, entries, portalHtml) {
  const counts = countTypes(entries);
  const requiredCounts = { flow: 72, task: 125, contract: 1, technical: 342, assurance: 205, library: 6, glossary: portal.glossary.length };
  for (const [type, expected] of Object.entries(requiredCounts)) {
    if (counts[type] !== expected) throw new Error(`Expected ${expected} ${type} records, found ${counts[type] || 0}`);
  }
  const ids = new Set();
  for (const entry of entries) {
    const key = `${entry.type}:${entry.id}`;
    if (ids.has(key)) throw new Error(`Duplicate search key ${key}`);
    ids.add(key);
    if (!entry.title || !entry.description || !entry.href) throw new Error(`${key}: incomplete search record`);
    const targetReference = entry.href.replace(/^\.\//, "");
    const [href, fragment] = targetReference.split("#");
    const targetFile = path.join(ROOT, href);
    if (!fs.existsSync(targetFile)) throw new Error(`${key}: missing target ${entry.href}`);
    if (fragment) {
      const targetContents = targetFile === PORTAL_OUTPUT ? portalHtml : fs.readFileSync(targetFile, "utf8");
      if (!targetContents.includes(`id="${fragment}"`)) throw new Error(`${key}: missing target anchor ${entry.href}`);
    }
    if (entry.agentHref) {
      const agentHref = entry.agentHref.replace(/^\.\//, "").split("#")[0];
      if (!fs.existsSync(path.join(ROOT, agentHref))) throw new Error(`${key}: missing agent target ${entry.agentHref}`);
    }
  }
  for (const route of portal.readerRoutes) {
    if (!route.steps || route.steps.length !== 3) throw new Error(`${route.id}: reader route must contain three steps`);
  }
  if (!portalHtml.includes('id="glossary"')) throw new Error("Portal is missing the glossary anchor");
}

function expectedOutputs() {
  const portal = JSON.parse(fs.readFileSync(PORTAL_SOURCE, "utf8"));
  const registry = JSON.parse(fs.readFileSync(path.join(ROOT, "governance", "document-registry.json"), "utf8"));
  const entries = buildEntries(portal);
  const portalHtml = renderPortal(portal, entries);
  validate(portal, entries, portalHtml);
  const searchIndex = JSON.stringify({
    id: "PORTAL-SEARCH-001",
    version: portal.version,
    updated: portal.updated,
    recordCount: entries.length,
    counts: countTypes(entries),
    entries,
  }, null, 2) + "\n";
  const fullContext = renderFullContext(portal, entries, registry);
  const agentStart = renderAgentStart(portal);
  for (const [label, contents] of [["Full Project Agent Context", fullContext], ["AI Agent Start Here", agentStart]]) {
    if (/<\s*(?:div|span|section|article|details)\b/i.test(contents)) throw new Error(`${label} contains decorative HTML`);
  }
  return new Map([
    [PORTAL_OUTPUT, portalHtml],
    [SEARCH_OUTPUT, searchIndex],
    [FULL_CONTEXT_OUTPUT, fullContext],
    [AGENT_START_OUTPUT, agentStart],
  ]);
}

function run() {
  const expected = expectedOutputs();
  if (CHECK_ONLY) {
    const problems = [];
    for (const [file, contents] of expected) {
      if (!fs.existsSync(file)) problems.push(`missing: ${posix(path.relative(ROOT, file))}`);
      else if (fs.readFileSync(file, "utf8") !== contents) problems.push(`stale: ${posix(path.relative(ROOT, file))}`);
    }
    if (problems.length) throw new Error(`Portal generation drift:\n${problems.map((problem) => `- ${problem}`).join("\n")}`);
    console.log("Phase 6 portal is current: role routes, global search, glossary and two agent context files checked.");
    return;
  }
  for (const [file, contents] of expected) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, contents);
  }
  console.log("Generated the Phase 6 portal, 765-record search index and focused/broad agent entry files.");
}

try {
  run();
} catch (error) {
  console.error(`Phase 6 portal generation failed: ${error.message}`);
  process.exitCode = 1;
}
