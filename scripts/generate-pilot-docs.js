#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const FLOW_MODE = process.argv.includes("--flows");
const SOURCE_ROOT = path.join(ROOT, "content", FLOW_MODE ? "flows" : "pilots");
const HTML_ROOT = path.join(ROOT, "documents", FLOW_MODE ? "flows" : "pilots");
const AGENT_ROOT = path.join(ROOT, "documents", "agent-md", FLOW_MODE ? "flows" : "pilots");
const CHECK_ONLY = process.argv.includes("--check");
const COLLECTION_LABEL = FLOW_MODE ? "Phase 2 flows" : "Phase 1 pilots";
const COLLECTION_SHORT = FLOW_MODE ? "Flows" : "Pilots";
const GENERATOR_COMMAND = FLOW_MODE ? "node scripts/generate-flow-docs.js" : "node scripts/generate-pilot-docs.js";

const REQUIRED_METADATA = [
  "id",
  "title",
  "type",
  "audience",
  "owner",
  "reviewers",
  "status",
  "version",
  "last_reviewed",
  "authority",
  "related",
];

const REQUIRED_SECTIONS = {
  "main-flow": [
    "In plain English",
    "Why this flow exists",
    "People and systems involved",
    "Before this flow begins",
    "Entry points",
    "Information required",
    "Dependencies explained",
    "Verbal walkthrough",
    "Decision branches",
    "Records and state changes",
    "Side effects",
    "Possible endings",
    "What happens next",
    "Failure and recovery",
    "Business rules",
    "Forbidden behavior",
    "Screen sequence",
    "Implementation map",
    "Acceptance criteria",
    "Required tests",
    "Out of scope",
  ],
  "reusable-subflow": [
    "In plain English",
    "Why it is reusable",
    "Called by",
    "Inputs",
    "Steps",
    "Outputs",
    "Success return behavior",
    "Failure return behavior",
    "Permissions and sensitive data",
    "Implementation map",
    "Acceptance criteria",
    "Required tests",
  ],
  "api-contract-group": [
    "In plain English",
    "Why this group exists",
    "Contract status summary",
    "Shared access and safety rules",
    "State and side effects",
    "Required contract tests",
  ],
  "data-domain": [
    "In plain English",
    "Why this domain exists",
    "Domain relationship",
    "State transitions",
    "Privacy, access and retention",
    "Traceability",
    "Implementation and migration status",
    "Required tests",
  ],
  "qa-suite": [
    "Purpose",
    "Current readiness",
    "Traceability",
    "Shared setup",
    "Suite completion checklist",
  ],
};

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function relativeUrl(fromFile, toFile) {
  const value = toPosix(path.relative(path.dirname(fromFile), toFile));
  return value || path.basename(toFile);
}

function walkMarkdown(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const target = path.join(directory, entry.name);
      if (entry.isDirectory()) return walkMarkdown(target);
      return entry.isFile() && entry.name.endsWith(".md") ? [target] : [];
    })
    .sort();
}

function parseDocument(file) {
  const raw = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n+([\s\S]*)$/);
  if (!match) {
    throw new Error(`${toPosix(path.relative(ROOT, file))}: missing YAML-style front matter`);
  }

  const metadata = {};
  for (const line of match[1].split("\n")) {
    const separator = line.indexOf(":");
    if (separator < 1) throw new Error(`${file}: invalid metadata line: ${line}`);
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    metadata[key] = value;
  }

  const missing = REQUIRED_METADATA.filter((key) => !metadata[key]);
  if (missing.length) {
    throw new Error(`${toPosix(path.relative(ROOT, file))}: missing metadata: ${missing.join(", ")}`);
  }

  const body = match[2].trimEnd() + "\n";
  if (!body.startsWith("# ")) {
    throw new Error(`${toPosix(path.relative(ROOT, file))}: body must start with one H1 heading`);
  }

  const document = {
    source: file,
    relative: toPosix(path.relative(SOURCE_ROOT, file)),
    metadata,
    body,
  };
  validateSourceStructure(document);
  return document;
}

function validateSourceStructure(document) {
  const required = REQUIRED_SECTIONS[document.metadata.type];
  if (!required) {
    throw new Error(`${document.relative}: unsupported canonical document type: ${document.metadata.type}`);
  }
  const headings = [...document.body.matchAll(/^##\s+(.+)$/gm)].map((match) => match[1].trim());
  const missing = required.filter((heading) => !headings.includes(heading));
  if (missing.length) {
    throw new Error(`${document.relative}: missing required sections: ${missing.join(", ")}`);
  }
  if (document.metadata.status === "approved" && !document.metadata.next_review) {
    throw new Error(`${document.relative}: approved canonical documents require next_review metadata`);
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function slugBase(value) {
  const slug = value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return slug || "section";
}

function inlineMarkdown(value) {
  const code = [];
  let html = escapeHtml(value).replace(/`([^`]+)`/g, (_match, content) => {
    const token = `@@CODE${code.length}@@`;
    code.push(`<code>${content}</code>`);
    return token;
  });

  html = html
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, href) => {
      const safeHref = /^(https?:|mailto:|#|\.\.?\/)/.test(href) ? href : "#";
      const external = /^https?:/.test(safeHref) ? ' rel="noreferrer"' : "";
      return `<a href="${escapeHtml(safeHref)}"${external}>${label}</a>`;
    })
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");

  return html.replace(/@@CODE(\d+)@@/g, (_match, index) => code[Number(index)]);
}

function splitTableRow(line) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
}

function isTableSeparator(line) {
  const cells = splitTableRow(line);
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function isBlockStart(lines, index) {
  const line = lines[index] || "";
  const next = lines[index + 1] || "";
  return !line.trim()
    || /^#{1,6}\s+/.test(line)
    || /^```/.test(line)
    || /^>\s?/.test(line)
    || /^[-*]\s+/.test(line)
    || /^\d+\.\s+/.test(line)
    || /^---+$/.test(line.trim())
    || (line.includes("|") && isTableSeparator(next));
}

function renderMarkdown(markdown, options = {}) {
  const stripFirstHeading = options.stripFirstHeading === true;
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const headings = [];
  const usedSlugs = new Map();
  const output = [];
  let index = 0;
  let firstHeadingSeen = false;

  function uniqueSlug(title) {
    const base = slugBase(title);
    const count = usedSlugs.get(base) || 0;
    usedSlugs.set(base, count + 1);
    return count ? `${base}-${count + 1}` : base;
  }

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const title = heading[2].trim();
      const id = uniqueSlug(title);
      if (!(stripFirstHeading && !firstHeadingSeen && level === 1)) {
        output.push(`<h${level} id="${id}">${inlineMarkdown(title)}</h${level}>`);
        if (level >= 2 && level <= 3) headings.push({ level, title, id });
      }
      firstHeadingSeen = true;
      index += 1;
      continue;
    }

    const fence = line.match(/^```([^\s]*)\s*$/);
    if (fence) {
      const language = fence[1] ? ` class="language-${escapeHtml(fence[1])}"` : "";
      const codeLines = [];
      index += 1;
      while (index < lines.length && !/^```\s*$/.test(lines[index])) {
        codeLines.push(lines[index]);
        index += 1;
      }
      if (index >= lines.length) throw new Error("Unclosed fenced code block");
      output.push(`<pre><code${language}>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
      index += 1;
      continue;
    }

    if (line.includes("|") && isTableSeparator(lines[index + 1] || "")) {
      const header = splitTableRow(line);
      index += 2;
      const rows = [];
      while (index < lines.length && lines[index].trim() && lines[index].includes("|")) {
        rows.push(splitTableRow(lines[index]));
        index += 1;
      }
      const width = header.length;
      if (rows.some((row) => row.length !== width)) {
        throw new Error(`Table has inconsistent column count near: ${line}`);
      }
      output.push(
        '<div class="table-wrap" tabindex="0"><table><thead><tr>'
        + header.map((cell) => `<th scope="col">${inlineMarkdown(cell)}</th>`).join("")
        + "</tr></thead><tbody>"
        + rows.map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`).join("")
        + "</tbody></table></div>",
      );
      continue;
    }

    const listMatch = line.match(/^([-*]|\d+\.)\s+(.+)$/);
    if (listMatch) {
      const ordered = /\d+\./.test(listMatch[1]);
      const tag = ordered ? "ol" : "ul";
      const items = [];
      while (index < lines.length) {
        const itemMatch = lines[index].match(ordered ? /^\d+\.\s+(.+)$/ : /^[-*]\s+(.+)$/);
        if (!itemMatch) break;
        let content = itemMatch[1];
        const task = content.match(/^\[([ xX])\]\s+(.+)$/);
        if (task) {
          const checked = task[1].toLowerCase() === "x";
          content = `<input type="checkbox" disabled${checked ? " checked" : ""} aria-label="${checked ? "Completed" : "Not completed"}"> ${inlineMarkdown(task[2])}`;
          items.push(`<li class="task-item">${content}</li>`);
        } else {
          items.push(`<li>${inlineMarkdown(content)}</li>`);
        }
        index += 1;
      }
      output.push(`<${tag}>${items.join("")}</${tag}>`);
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quote = [];
      while (index < lines.length && /^>\s?/.test(lines[index])) {
        quote.push(lines[index].replace(/^>\s?/, ""));
        index += 1;
      }
      output.push(`<blockquote><p>${inlineMarkdown(quote.join(" "))}</p></blockquote>`);
      continue;
    }

    if (/^---+$/.test(line.trim())) {
      output.push("<hr>");
      index += 1;
      continue;
    }

    const paragraph = [line.trim()];
    index += 1;
    while (index < lines.length && !isBlockStart(lines, index)) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    output.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
  }

  return { html: output.join("\n"), headings };
}

function humanLabel(value) {
  return value
    .replaceAll("-", " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function renderToc(headings) {
  if (!headings.length) return "";
  return `<nav class="toc" aria-labelledby="toc-title">
    <h2 id="toc-title">On this page</h2>
    <ol>${headings.map((heading) => `<li class="toc-level-${heading.level}"><a href="#${heading.id}">${escapeHtml(heading.title)}</a></li>`).join("")}</ol>
  </nav>`;
}

function renderHtmlDocument(document) {
  const htmlFile = path.join(HTML_ROOT, document.relative.replace(/\.md$/, ".html"));
  const agentFile = path.join(AGENT_ROOT, document.relative);
  const homeUrl = relativeUrl(htmlFile, path.join(ROOT, "index.html"));
  const collectionHomeUrl = relativeUrl(htmlFile, path.join(HTML_ROOT, "index.html"));
  const cssUrl = relativeUrl(htmlFile, path.join(ROOT, "assets", "css", "pilot-docs.css"));
  const guardUrl = relativeUrl(htmlFile, path.join(ROOT, "assets", "js", "guard.js"));
  const agentUrl = relativeUrl(htmlFile, agentFile);
  const sourceLabel = toPosix(path.relative(ROOT, document.source));
  const rendered = renderMarkdown(document.body, { stripFirstHeading: true });
  const trail = document.relative.replace(/\.md$/, "").split("/");
  const section = trail.length > 1 ? humanLabel(trail.slice(0, -1).join(" / ")) : COLLECTION_SHORT;

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(document.metadata.title)} — Work2Cash ${escapeHtml(COLLECTION_LABEL)} documentation.">
  <title>${escapeHtml(document.metadata.id)} — ${escapeHtml(document.metadata.title)} | Work2Cash Docs</title>
  <link rel="stylesheet" href="${cssUrl}">
  <script src="${guardUrl}"></script>
</head>
<body>
  <a class="skip-link" href="#content">Skip to document</a>
  <header class="site-header">
    <a class="brand" href="${homeUrl}">Work2Cash Docs</a>
    <nav aria-label="Document navigation">
      <a href="${collectionHomeUrl}">${escapeHtml(COLLECTION_LABEL)}</a>
      <a href="${agentUrl}" download>Download agent Markdown</a>
    </nav>
  </header>
  <div class="page-shell">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="${collectionHomeUrl}">${escapeHtml(COLLECTION_SHORT)}</a><span aria-hidden="true">/</span><span>${escapeHtml(section)}</span>
    </nav>
    <header class="document-hero">
      <div class="eyebrow">${escapeHtml(document.metadata.type)} · ${escapeHtml(document.metadata.id)}</div>
      <h1>${escapeHtml(document.metadata.title)}</h1>
      <p class="audience"><strong>Written for:</strong> ${escapeHtml(document.metadata.audience)}</p>
      <div class="status-row">
        <span class="status status-${slugBase(document.metadata.status)}">${escapeHtml(document.metadata.status)}</span>
        <span>Version ${escapeHtml(document.metadata.version)}</span>
        <span>Reviewed ${escapeHtml(document.metadata.last_reviewed)}</span>
${document.metadata.next_review ? `        <span>Next review ${escapeHtml(document.metadata.next_review)}</span>\n` : ""}      </div>
    </header>
    <div class="document-grid">
      <aside>
        ${renderToc(rendered.headings)}
        <section class="metadata" aria-labelledby="metadata-title">
          <h2 id="metadata-title">Document details</h2>
          <dl>
            <dt>Owner</dt><dd>${escapeHtml(document.metadata.owner)}</dd>
            <dt>Reviewers</dt><dd>${escapeHtml(document.metadata.reviewers)}</dd>
            <dt>Authority</dt><dd>${escapeHtml(document.metadata.authority)}</dd>
            <dt>Related</dt><dd>${escapeHtml(document.metadata.related)}</dd>
          </dl>
        </section>
      </aside>
      <main id="content" class="document-content" tabindex="-1">
        <p class="generated-note"><strong>${escapeHtml(COLLECTION_LABEL)}:</strong> This page is generated from <code>${escapeHtml(sourceLabel)}</code>. Edit the canonical Markdown source, not this HTML file.</p>
        ${rendered.html}
      </main>
    </div>
  </div>
  <footer>Work2Cash documentation · ${escapeHtml(COLLECTION_LABEL)}</footer>
</body>
</html>
`;
}

function renderAgentDocument(document) {
  const sourceLabel = toPosix(path.relative(ROOT, document.source));
  const metadataLines = Object.entries(document.metadata).map(([key, value]) => `${key}: ${value}`);
  metadataLines.push(`generated_from: ${sourceLabel}`, "do_not_edit: true");
  return `---\n${metadataLines.join("\n")}\n---\n\n> Generated agent document. Edit \`${sourceLabel}\` and rerun \`${GENERATOR_COMMAND}\`.\n\n${document.body}`;
}

function renderHtmlIndex(documents) {
  const indexFile = path.join(HTML_ROOT, "index.html");
  const homeUrl = relativeUrl(indexFile, path.join(ROOT, "index.html"));
  const cssUrl = relativeUrl(indexFile, path.join(ROOT, "assets", "css", "pilot-docs.css"));
  const guardUrl = relativeUrl(indexFile, path.join(ROOT, "assets", "js", "guard.js"));
  const cards = documents.map((document) => {
    const target = document.relative.replace(/\.md$/, ".html");
    return `<article class="pilot-card">
      <div class="eyebrow">${escapeHtml(document.metadata.type)} · ${escapeHtml(document.metadata.id)}</div>
      <h2><a href="${target}">${escapeHtml(document.metadata.title)}</a></h2>
      <p>${escapeHtml(document.metadata.audience)}</p>
      <div class="status-row"><span class="status status-${slugBase(document.metadata.status)}">${escapeHtml(document.metadata.status)}</span><span>v${escapeHtml(document.metadata.version)}</span></div>
    </article>`;
  }).join("\n");

  const title = FLOW_MODE ? "Phase 2 Flow Library" : "Phase 1 Documentation Pilots";
  const description = FLOW_MODE
    ? "Standalone flows migrated with the approved Phase 1 structure. The library grows batch by batch until it replaces the legacy combined catalogues."
    : "These pilots test a structure that lets a reader understand one flow or technical area without repeatedly searching other documents. They are not yet replacements for the active catalogues.";
  const notice = FLOW_MODE
    ? "Migration is in progress. A flow is usable as a Phase 2 migration source only when its page status and migration-inventory record say so; missing flows remain in the legacy catalogues."
    : "The Phase 1 usability, visual and subject-matter reviews are complete. These are approved reference documents for Phase 2 migration, but they do not replace the complete flow catalogues yet.";
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(title)} — Work2Cash documentation.">
  <title>${escapeHtml(title)} | Work2Cash Docs</title>
  <link rel="stylesheet" href="${cssUrl}">
  <script src="${guardUrl}"></script>
</head>
<body>
  <a class="skip-link" href="#content">Skip to documents</a>
  <header class="site-header"><a class="brand" href="${homeUrl}">Work2Cash Docs</a><nav aria-label="Document navigation"><a href="${homeUrl}">Portal home</a></nav></header>
  <main id="content" class="index-shell" tabindex="-1">
    <header class="index-hero">
      <div class="eyebrow">Documentation restructuring · ${FLOW_MODE ? "Phase 2" : "Phase 1"}</div>
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(description)}</p>
    </header>
    <section class="notice" aria-labelledby="collection-status"><h2 id="collection-status">${FLOW_MODE ? "Migration status" : "Pilot status"}</h2><p>${escapeHtml(notice)}</p></section>
    <div class="pilot-grid">${cards}</div>
  </main>
  <footer>Work2Cash documentation · Generated from canonical Markdown sources</footer>
</body>
</html>
`;
}

function renderAgentIndex(documents) {
  const rows = documents.map((document) => {
    const target = document.relative;
    return `| ${document.metadata.id} | [${document.metadata.title}](${target}) | ${document.metadata.type} | ${document.metadata.status} |`;
  }).join("\n");
  return `# Work2Cash ${FLOW_MODE ? "Phase 2 flow" : "Phase 1 pilot"} agent Markdown

These files are generated from the canonical sources in \`${FLOW_MODE ? "content/flows/" : "content/pilots/"}\`. Do not edit generated files directly.

| ID | Document | Type | Status |
| --- | --- | --- | --- |
${rows}

Regenerate with \`${GENERATOR_COMMAND}\`. Validate without writing with \`${GENERATOR_COMMAND} --check\`.
`;
}

function buildExpected(documents) {
  const expected = new Map();
  for (const document of documents) {
    expected.set(path.join(HTML_ROOT, document.relative.replace(/\.md$/, ".html")), renderHtmlDocument(document));
    expected.set(path.join(AGENT_ROOT, document.relative), renderAgentDocument(document));
  }
  expected.set(path.join(HTML_ROOT, "index.html"), renderHtmlIndex(documents));
  expected.set(path.join(AGENT_ROOT, "README.md"), renderAgentIndex(documents));
  return expected;
}

function contentsFor(file, expected) {
  if (expected.has(file)) return expected.get(file);
  if (fs.existsSync(file) && fs.statSync(file).isFile()) return fs.readFileSync(file, "utf8");
  return null;
}

function idsIn(html) {
  const ids = [];
  for (const match of html.matchAll(/\sid="([^"]+)"/g)) ids.push(match[1]);
  return ids;
}

function validateExpected(expected) {
  const problems = [];

  for (const [file, contents] of expected) {
    const label = toPosix(path.relative(ROOT, file));

    if (file.endsWith(".md") && /<(?:div|section|table|script|style|span|br|details|summary)\b/i.test(contents)) {
      problems.push(`${label}: agent Markdown contains presentation HTML`);
    }

    if (!file.endsWith(".html")) continue;
    if (!/<script src="[^"]*assets\/js\/guard\.js"><\/script>/.test(contents)) {
      problems.push(`${label}: document guard script is missing`);
    }

    const ownIds = idsIn(contents);
    const duplicateIds = ownIds.filter((id, index) => ownIds.indexOf(id) !== index);
    if (duplicateIds.length) {
      problems.push(`${label}: duplicate HTML ids: ${[...new Set(duplicateIds)].join(", ")}`);
    }

    for (const match of contents.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
      const reference = match[1];
      if (/^(?:https?:|mailto:|tel:|data:|javascript:)/.test(reference)) continue;

      const [rawTarget, rawFragment] = reference.split("#", 2);
      const cleanTarget = rawTarget.split("?", 1)[0];
      const targetFile = cleanTarget
        ? path.resolve(path.dirname(file), decodeURIComponent(cleanTarget))
        : file;
      const targetContents = contentsFor(targetFile, expected);

      if (targetContents === null) {
        problems.push(`${label}: broken local reference ${reference}`);
        continue;
      }

      if (rawFragment && targetFile.endsWith(".html")) {
        const targetIds = idsIn(targetContents);
        if (!targetIds.includes(decodeURIComponent(rawFragment))) {
          problems.push(`${label}: missing anchor ${reference}`);
        }
      }
    }
  }

  if (problems.length) {
    throw new Error(`generated-output validation failed:\n${problems.map((item) => `- ${item}`).join("\n")}`);
  }
}

function existingGeneratedFiles() {
  const html = fs.existsSync(HTML_ROOT)
    ? walkByExtension(HTML_ROOT, ".html")
    : [];
  const markdown = fs.existsSync(AGENT_ROOT)
    ? walkByExtension(AGENT_ROOT, ".md")
    : [];
  return [...html, ...markdown];
}

function walkByExtension(directory, extension) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return walkByExtension(target, extension);
    return entry.isFile() && entry.name.endsWith(extension) ? [target] : [];
  });
}

function check(expected) {
  const problems = [];
  for (const [file, contents] of expected) {
    if (!fs.existsSync(file)) {
      problems.push(`missing: ${toPosix(path.relative(ROOT, file))}`);
    } else if (fs.readFileSync(file, "utf8") !== contents) {
      problems.push(`stale: ${toPosix(path.relative(ROOT, file))}`);
    }
  }
  for (const file of existingGeneratedFiles()) {
    if (!expected.has(file)) problems.push(`orphaned: ${toPosix(path.relative(ROOT, file))}`);
  }
  if (problems.length) {
    console.error(`${COLLECTION_LABEL} documentation check failed:\n` + problems.map((item) => `- ${item}`).join("\n"));
    process.exitCode = 1;
    return;
  }
  console.log(`${COLLECTION_LABEL} documentation is current: ${expected.size} generated files checked.`);
}

function write(expected) {
  for (const file of existingGeneratedFiles()) {
    if (!expected.has(file)) fs.rmSync(file);
  }
  for (const [file, contents] of expected) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, contents);
  }
  console.log(`Generated ${expected.size} files from ${documents.length} canonical ${FLOW_MODE ? "flow" : "pilot"} sources.`);
}

let documents;
try {
  documents = walkMarkdown(SOURCE_ROOT).map(parseDocument);
  if (!documents.length) throw new Error(`No canonical ${FLOW_MODE ? "flow" : "pilot"} documents found`);
  const ids = new Set();
  for (const document of documents) {
    if (ids.has(document.metadata.id)) throw new Error(`Duplicate document id: ${document.metadata.id}`);
    ids.add(document.metadata.id);
  }
  const expected = buildExpected(documents);
  validateExpected(expected);
  if (CHECK_ONLY) check(expected);
  else write(expected);
} catch (error) {
  console.error(`${COLLECTION_LABEL} documentation generation failed: ${error.message}`);
  process.exitCode = 1;
}
