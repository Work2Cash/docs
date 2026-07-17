#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { walkTaskWeekSources } = require("./task-week-source.js");

const ROOT = path.resolve(__dirname, "..");
const TASK_ROOT = path.join(ROOT, "content", "tasks");
const META_FILE = path.join(TASK_ROOT, "plan-metadata.json");
const HTML_ROOT = path.join(ROOT, "documents", "planning");
const AGENT_ROOT = path.join(ROOT, "documents", "agent-md", "planning");
const CHECK_ONLY = process.argv.includes("--check");
const TEAM_INFO = {
  MOB: { label: "Mobile", slug: "mobile", description: "Flutter delivery ordered around approved mobile flows and authoritative backend state." },
  BE: { label: "Backend", slug: "backend", description: "NestJS, persistence, provider, socket, queue and operational delivery that unblocks Mobile and Admin." },
  ADM: { label: "Admin", slug: "admin", description: "Next.js operations delivery built first with approved fixtures, then connected to persisted Mobile outcomes and permissioned Backend contracts." },
};
const DAY_NAMES = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function posix(value) { return value.split(path.sep).join("/"); }
function escapeHtml(value) { return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;"); }
function inline(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}
function relativeUrl(fromFile, toFile) { return posix(path.relative(path.dirname(fromFile), toFile)) || path.basename(toFile); }
function slotParts(id, metadata = {}) {
  const match = id.match(/-W(\d+)D(\d+)$/);
  if (match) return { week: Number(match[1]), day: Number(match[2]), legacy: true };
  const integration = id.match(/^ADM-INT-(\d+)$/);
  if (integration) return { week: null, day: Number(integration[1]), legacy: false };
  if (metadata.legacy_slot && metadata.legacy_slot !== "none") {
    const legacy = metadata.legacy_slot.match(/^W(\d+)D(\d+)$/);
    if (legacy) return { week: Number(legacy[1]), day: Number(legacy[2]), legacy: true };
  }
  return { week: null, day: 0, legacy: false };
}
function ordinal(task) {
  const stage = Number(task.stage_order || 99);
  const withinStage = task.week == null ? 900 + task.day : task.week * 10 + task.day;
  return stage * 1000 + withinStage;
}
function unique(values) { return [...new Set(values.filter(Boolean))]; }

function walkMarkdown(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walkMarkdown(target) : entry.isFile() && entry.name.endsWith(".md") ? [target] : [];
  }).sort();
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
  return markdown.replace(/^[-*]\s+/gm, "").replace(/\*\*|`/g, "").replace(/\s+/g, " ").trim();
}

function listItems(markdown) {
  return markdown.split("\n")
    .map((line) => line.match(/^-\s+(?:\[[ xX]\]\s+)?(.+)$/)?.[1]?.trim())
    .filter(Boolean);
}

function taskIdsFromFirstTableColumn(markdown) {
  return unique(markdown.split("\n").map((line) => {
    const first = line.match(/^\|\s*((?:(?:MOB|BE|ADM)-W\d+D\d+|ADM-INT-\d{2}))\s*\|/);
    return first?.[1];
  }));
}

function parseTask(document) {
  const { metadata } = document;
  const body = document.body;
  const file = document.source;
  const prefix = metadata.id.split("-")[0];
  if (!TEAM_INFO[prefix]) throw new Error(`${metadata.id}: unknown team prefix`);
  const parts = slotParts(metadata.id, metadata);
  const relative = document.relative;
  const dependencyText = section(body, "Dependencies and readiness");
  const dependencies = taskIdsFromFirstTableColumn(dependencyText).filter((id) => id !== metadata.id);
  const integrationText = section(body, "Integration and acceptance gates");
  const integrationGates = taskIdsFromFirstTableColumn(integrationText).filter((id) => id !== metadata.id);
  const related = unique([...String(metadata.related || "").matchAll(/\b(?:ASF|SF|MF|AF)-\d{2}\b|\bFLOW-LIB-001\b/g)].map((item) => item[0]));
  const scheduled = section(body, "Ownership and status").match(/\| Scheduled slot \| ([^|]+) \|/)?.[1].trim() || (parts.week ? `Week ${parts.week}, Day ${parts.day}` : "No legacy week slot");
  const scope = listItems(section(body, "Implementation scope"));
  const rules = listItems(section(body, "Explicitly out of scope"));
  const automatedTests = listItems(section(body, "Required automated tests"));
  const manualTests = listItems(section(body, "Required manual tests"));
  const acceptance = listItems(section(body, "Acceptance criteria"));
  const unlocks = listItems(section(body, "What this unlocks"));
  const outcome = plain(section(body, "Outcome in plain English"))
    .replace(/^When accepted, the .+? team will have delivered this demonstrable outcome:\s*/i, "");
  return {
    ...metadata,
    prefix,
    team: TEAM_INFO[prefix],
    week: parts.week,
    day: parts.day,
    relative,
    outcome,
    why: plain(section(body, "Why it matters")),
    dependencies,
    integrationGates,
    flows: related,
    references: unique(String(metadata.related || "").split(",").map((item) => item.trim())),
    scheduled,
    scope,
    rules,
    automatedTests,
    manualTests,
    acceptance,
    unlocks,
    commit: plain(section(body, "Commit message")),
  };
}

function validate(tasks, meta) {
  const problems = [];
  const ids = new Set(tasks.map((task) => task.id));
  if (tasks.length !== 125) problems.push(`expected 125 tasks, found ${tasks.length}`);
  if (ids.size !== tasks.length) problems.push("duplicate task IDs found");
  const expectedTeamCounts = { MOB: 40, BE: 40, ADM: 45 };
  for (const prefix of Object.keys(TEAM_INFO)) if (tasks.filter((task) => task.prefix === prefix).length !== expectedTeamCounts[prefix]) problems.push(`${prefix}: expected ${expectedTeamCounts[prefix]} tasks`);
  for (let week = 1; week <= 8; week += 1) if (tasks.filter((task) => task.week === week).length !== 15) problems.push(`legacy week ${week}: expected 15 tasks`);
  for (const task of tasks) {
    for (const dependency of task.dependencies) if (!ids.has(dependency)) problems.push(`${task.id}: unknown dependency ${dependency}`);
    for (const gate of task.integrationGates) if (!ids.has(gate)) problems.push(`${task.id}: unknown integration gate ${gate}`);
    if (!task.outcome) problems.push(`${task.id}: missing outcome`);
    if (!task.delivery_stage || !task.stage_order) problems.push(`${task.id}: missing delivery-stage metadata`);
  }
  if (meta.weeks.length !== 8) problems.push("plan metadata must define 8 weeks");
  if (meta.stages.length !== 4) problems.push("plan metadata must define 4 delivery stages");
  if (problems.length) throw new Error(`execution-plan validation failed:\n${problems.map((item) => `- ${item}`).join("\n")}`);
}

function reverseDependencies(tasks) {
  const map = new Map(tasks.map((task) => [task.id, []]));
  for (const task of tasks) for (const dependency of task.dependencies) map.get(dependency).push(task.id);
  return map;
}

function risks(tasks, byId) {
  return tasks.flatMap((task) => task.dependencies.map((dependencyId) => {
    const dependency = byId.get(dependencyId);
    const timing = ordinal(dependency) - ordinal(task);
    if (timing <= 0) return null;
    return {
      task,
      dependency,
      type: "Start dependency belongs later in the approved delivery order",
      action: "Correct the start dependency or re-sequence the card before activation."
    };
  }).filter(Boolean));
}

function weeklyAgentTaskLink(task, depth = 0) {
  const basename = task.week == null
    ? "integration-week-admin-integration"
    : `week-${String(task.week).padStart(2, "0")}-${task.weekSlug}`;
  return `${"../".repeat(depth)}weeks/${task.team.slug}/${basename}.md#day-${task.day}-of-5`;
}

function weeklyHtmlTaskLink(task, file) {
  const basename = task.week == null
    ? "integration-week-admin-integration"
    : `week-${String(task.week).padStart(2, "0")}-${task.weekSlug}`;
  const target = path.join(HTML_ROOT, "weeks", task.team.slug, `${basename}.html`);
  return `${relativeUrl(file, target)}#day-${task.day}`;
}

function taskRowsMarkdown(tasks, depth) {
  return tasks.map((task) => `| ${task.id} | [${task.title}](${weeklyAgentTaskLink(task, depth)}) | ${task.status} | ${task.dependencies.join(", ") || "None"} | ${task.integrationGates.join(", ") || "None"} | ${task.flows.join(", ") || "FLOW-LIB-001"} |`).join("\n");
}

function weekBasename(week) {
  return `week-${String(week.number).padStart(2, "0")}-${week.slug}`;
}

function renderTeamMarkdown(prefix, tasks, meta) {
  const info = TEAM_INFO[prefix];
  const teamTasks = tasks.filter((task) => task.prefix === prefix).sort((a, b) => ordinal(a) - ordinal(b));
  const weekLinks = meta.weeks.map((week) => {
    const count = teamTasks.filter((task) => task.week === week.number).length;
    return `- [Week ${week.number} — ${week.title}](weeks/${info.slug}/${weekBasename(week)}.md) — ${count} daily tasks`;
  });
  if (prefix === "ADM") {
    weekLinks.splice(5, 0, "- [Integration Week — Connect Admin to real systems](weeks/admin/integration-week-admin-integration.md) — 5 daily tasks");
  }
  return `# Work2Cash ${info.label} Build Plan

> Junior-developer reading path: choose a week, then work through its days in order.

## Delivery position

${prefix === "ADM"
    ? "Admin Weeks 1–5 are built first with approved contract-shaped fixtures. The Integration Week runs after Mobile and Backend Weeks 1–5. Weeks 6–8 are cross-platform hardening and release."
    : `${info.label} Weeks 1–5 start after the Admin construction stage. Weeks 6–8 start after Admin Integration.`}

## Weeks

${weekLinks.join("\n")}

## Daily rule

Open the current team-week Markdown and select one active day. That file contains Day 1 through Day 5 and embeds the agent prompt under each day. Confirm the listed prerequisites, complete the ordered scope, run the stated tests, and use the recommended commit message.

Task status comes from evidence and owner decisions, never from a date. Record a blocker instead of inventing a missing contract, provider behavior or product rule.
`;
}

function renderWeekMarkdown(week, tasks, meta, weekRisks) {
  const selected = tasks.filter((task) => task.week === week.number).sort((a, b) => a.day - b.day || a.prefix.localeCompare(b.prefix));
  const days = [1, 2, 3, 4, 5].map((day) => {
    const rows = selected.filter((task) => task.day === day).map((task) => {
      const pack = `${task.team.slug}/${weekBasename(week)}.md#day-${day}-of-5`;
      return `| ${task.team.label} | [${task.id} — ${task.title}](${pack}) | ${task.outcome} | \`${task.commit}\` |`;
    }).join("\n");
    return `## Day ${day} of 5 — ${DAY_NAMES[day]}

| Team | Daily task | Working result | Recommended commit |
| --- | --- | --- | --- |
${rows}`;
  }).join("\n\n");
  return `# Work2Cash Week ${week.number} — ${week.title}

> Junior-developer overview. Open your team weekly Markdown for all five days and the agent instructions embedded under each day.

## Week outcome

${week.goal}

## Before the week starts

${week.number === 1 ? "The team's required foundation, repository access, environments and approved references are available." : `The same team's Week ${week.number - 1} exit result is accepted or any carry-over is explicitly recorded.`}

This numbered week is a position inside each team's plan. The approved delivery order still applies: Admin construction, Mobile and Backend construction, Admin Integration, then cross-platform hardening.

${days}

## End-of-week result

${week.exit}

- Demonstrate the working result and one failure/recovery path.
- Record tests and commit identifiers for completed days.
- Carry unfinished work on the original task; do not duplicate it.
`;
}

function meaningfulScope(task) {
  const generic = /^(Preserve the dependency|Keep construction interfaces|Include user-visible|Update traceability)/;
  const selected = task.scope.filter((item) => !generic.test(item));
  return (selected.length ? selected : task.scope).slice(0, 4);
}

function ruleText(item) {
  return /^(?:Do not|Never|Use |Follow |Treat |Enforce )/.test(item) ? item : `Do not: ${item}`;
}

function endResult(task) {
  return task.outcome;
}

function dailyReferences(task) {
  return task.references
    .filter((item) => /^(?:ASF|SF|MF|AF|CONTRACT)-/.test(item) || item === "FLOW-LIB-001")
    .sort((a, b) => Number(b.startsWith("CONTRACT-")) - Number(a.startsWith("CONTRACT-")))
    .slice(0, 10);
}

function startSummary(task) {
  return task.dependencies.join(", ") || "Week start conditions";
}

function weekMapMarkdown(tasks) {
  return `| Day | Task | Start only after | End-of-day result | Commit |
| ---: | --- | --- | --- | --- |
${tasks.map((task) => `| Day ${task.day} — ${DAY_NAMES[task.day]} | ${task.id} — ${task.title} | ${startSummary(task)} | ${endResult(task)} | \`${task.commit}\` |`).join("\n")}`;
}

function dailyMarkdown(task) {
  const prerequisites = task.dependencies.length
    ? task.dependencies.map((item) => `- ${item} is accepted or its required interface is demonstrably ready.`)
    : ["- The current week's start conditions and required repository access are ready."];
  const rules = task.rules.slice(0, 3).map(ruleText);
  const tests = unique([...task.automatedTests.slice(0, 2), ...task.manualTests.slice(0, 1)]);
  const references = dailyReferences(task);
  return `## Day ${task.day} of 5

### ${DAY_NAMES[task.day]} — ${task.id}: ${task.title}

> **Day ${task.day} starts only after:** ${startSummary(task)}.  
> **Day ${task.day} finishes only when:** ${endResult(task)}

**Today's goal:** ${task.outcome}

**Why today:** ${task.unlocks[0] || task.why}

**Status:** ${task.status}

### Before you start

${prerequisites.join("\n")}

${task.integrationGates.length ? `**Later integration or acceptance gate:** ${task.integrationGates.join(", ")}. This does not block today's approved construction scope.` : ""}

### Build in this order

${meaningfulScope(task).map((item, index) => `${index + 1}. ${item}`).join("\n")}

### Technical rules

${rules.map((item) => `- ${item}`).join("\n") || "- Follow the linked flow and contract without expanding scope."}
- Required references: ${references.join(", ") || "The current week's canonical day section"}.

### Tests for today

${tests.map((item) => `- [ ] ${item}`).join("\n")}

### End-of-day result

- [ ] ${endResult(task)}
- [ ] Record test evidence and any blocker or carry-over.

**Recommended commit:** \`${task.commit}\`

**What comes next:** ${task.unlocks[0] || "The next day can use this accepted result."}

${renderEmbeddedAgentPrompt(task)}
`;
}

function renderTeamWeekMarkdown(week, prefix, tasks, meta, options = {}) {
  const info = TEAM_INFO[prefix];
  const selected = options.tasks || tasks.filter((task) => task.week === week.number && task.prefix === prefix).sort((a, b) => a.day - b.day);
  const label = options.label || `Week ${week.number}`;
  return `# Work2Cash ${info.label} — ${label}: ${week.title}

> Primary junior-developer and agent pack. This one file contains all five days in execution order.

## Week goal

${week.goal}

## Before the week starts

${options.startCondition || (week.number === 1
    ? "Repository access, development environment, shared rules and the required approved references are ready."
    : `The ${info.label} Week ${week.number - 1} result is accepted, or its unfinished work is explicitly carried over.`)}

## Five-day map

${weekMapMarkdown(selected)}

Complete Day 1 through Day 5 in order. Do not start a later day merely because it appears in this file.

${selected.map((task) => dailyMarkdown(task)).join("\n")}

## Week complete

- [ ] All five ${info.label} daily results work together and the week goal is demonstrable within this team's scope.
- [ ] Every completed day has tests and a commit identifier.
- [ ] Every unfinished item names its blocker, owner and carry-over destination.
`;
}

function renderEmbeddedAgentPrompt(task) {
  const references = task.references.filter((item) => /^(?:ASF|SF|MF|AF|CONTRACT|DATA|PROVIDER)-/.test(item) || item === "FLOW-LIB-001");
  return `### Agent execution prompt for Day ${task.day}

Use only this Day ${task.day} section as the active assignment. Earlier days are prerequisites; later days are not yet active.

Implement **${task.id} — ${task.title}**.

Expected result: ${task.outcome}

Why this task matters: ${task.unlocks[0] || task.why}

#### Required context

1. \`AGENTS.md\`.
2. Shared Execution Rules.
3. ${task.team.label} Team Markdown Brief.
4. The assigned Day ${task.day} section and this embedded prompt.
5. Required references: ${references.join(", ") || "those named in this day's source traceability"}.

#### Before changing code

${task.dependencies.length
    ? task.dependencies.map((item) => `- Confirm ${item} is accepted or its required interface is ready.`).join("\n")
    : "- Confirm the week-start conditions, repository access and required environment are ready."}
- State any missing contract, model, provider, design or environment input as a blocker. Do not invent it.
${task.integrationGates.length ? `- Keep these later integration or acceptance gates visible without treating them as construction prerequisites: ${task.integrationGates.join(", ")}.` : ""}

#### Implement

${meaningfulScope(task).map((item) => `- ${item}`).join("\n")}

#### Guardrails

${task.rules.slice(0, 4).map((item) => `- ${ruleText(item)}`).join("\n") || "- Do not expand the canonical task scope."}

#### Verify

${unique([...task.automatedTests.slice(0, 2), ...task.manualTests.slice(0, 1)]).map((item) => `- [ ] ${item}`).join("\n")}
- [ ] ${endResult(task)}
- [ ] Report changed files, test evidence, blockers and remaining integration gates.

#### Commit

\`${task.commit}\`

Do not mark the task complete without the required evidence and reviewer acceptance.
`;
}

function dependencyMarkdown(tasks, reverse) {
  const rows = tasks.sort((a, b) => ordinal(a) - ordinal(b) || a.prefix.localeCompare(b.prefix)).map((task) => `| ${task.id} | ${task.title} | Stage ${task.stage_order} | ${task.dependencies.join(", ") || "None"} | ${task.integrationGates.join(", ") || "None"} | ${(reverse.get(task.id) || []).join(", ") || "No named start-dependent consumer"} | ${task.flows.join(", ") || "FLOW-LIB-001"} |`).join("\n");
  return `# Phase 3 Task Dependency Map

> Generated from all 125 canonical task records stored in 25 team-week source packs. “Start dependencies” must exist before work begins. “Later integration gates” may arrive in a later stage but must pass before connected acceptance.

| Task | Title | Stage | Start dependencies | Later integration gates | Directly unlocks at start | Flow references |
| --- | --- | ---: | --- | --- | --- | --- |
${rows}
`;
}

function risksMarkdown(allRisks) {
  const label = (task) => `Stage ${task.stage_order}${task.week ? ` / legacy W${task.week}D${task.day}` : ""}`;
  const rows = allRisks.map((risk) => `| ${risk.task.id} | ${risk.dependency.id} | ${label(risk.task)} | ${label(risk.dependency)} | ${risk.type} | ${risk.action} |`).join("\n");
  return `# Phase 3 Cross-Team Schedule Risk Register

> Generated from start dependencies only. Later integration gates are intentionally excluded because the approved staged model allows them to arrive later.

| Consuming task | Dependency | Consumer slot | Dependency slot | Risk | Required action |
| --- | --- | --- | --- | --- | --- |
${rows || "| None | — | — | — | — | Continue normal readiness checks. |"}
`;
}

function integrationGatesMarkdown(tasks) {
  const rows = tasks
    .filter((task) => task.integrationGates.length)
    .sort((a, b) => ordinal(a) - ordinal(b))
    .flatMap((task) => task.integrationGates.map((gate) => `| ${task.id} | ${task.title} | Stage ${task.stage_order} | ${gate} | Must pass before connected cross-platform acceptance; it does not block construction of ${task.id}. |`))
    .join("\n");
  return `# Phase 3 Integration and Acceptance Gate Register

> Generated separately from start dependencies so junior developers can tell what blocks construction from what is deliberately integrated later.

| Consuming task | Title | Construction stage | Later gate | Acceptance meaning |
| --- | --- | ---: | --- | --- |
${rows || "| None | — | — | — | No later integration gates are recorded. |"}
`;
}

function qaTraceabilityMarkdown(tasks) {
  const rows = tasks.sort((a, b) => ordinal(a) - ordinal(b) || a.prefix.localeCompare(b.prefix)).map((task) => {
    const slot = task.week == null ? `Integration Day ${task.day}` : `Week ${task.week}, Day ${task.day}`;
    return `| ${task.id} | ${task.team.label} | ${slot} | ${task.flows.join(", ") || "FLOW-LIB-001"} | ${task.automatedTests[0] || "Canonical task tests"} | ${task.manualTests[0] || "Canonical task manual check"} |`;
  }).join("\n");
  return `# Phase 3 QA Traceability

> Generated from the 125 canonical task records. Open the matching team-week day for the complete test, evidence and agent instructions.

| Task | Team | Scheduled day | Flow coverage | Automated test anchor | Manual test anchor |
| --- | --- | --- | --- | --- | --- |
${rows}
`;
}

function renderStageMarkdown(stage, tasks, meta) {
  const selected = tasks.filter((task) => task.delivery_stage === stage.id).sort((a, b) => ordinal(a) - ordinal(b) || a.prefix.localeCompare(b.prefix));
  const groups = Object.entries(TEAM_INFO).map(([prefix, info]) => {
    const teamTasks = selected.filter((task) => task.prefix === prefix);
    if (!teamTasks.length) return "";
    return `## ${info.label} tasks

| ID | Weekly day section | Status | Start dependencies | Later integration gates | Flow references |
| --- | --- | --- | --- | --- | --- |
${taskRowsMarkdown(teamTasks, 1)}`;
  }).filter(Boolean).join("\n\n");
  return `# Work2Cash Stage ${stage.order} — ${stage.title}

> This is a generated coordination pack. Each linked weekly day section contains the executable scope, tests, evidence and agent prompt.

## Stage identity and status

| Field | Value |
| --- | --- |
| Order | ${stage.order} of ${meta.stages.length} |
| Owner | ${meta.owner} |
| Status | ${meta.activeStage === stage.id ? "Active by recorded owner decision" : "Planned; not formally active"} |
| Task count | ${selected.length} |
| Teams | ${stage.teams.join(", ")} |

## Outcome in plain English

${stage.goal}

## Start conditions

- The Project or Technical Lead formally selects this stage as active.
- Every earlier stage's exit evidence is accepted.
- Each card's start dependencies are ready.
- Later integration gates remain visible but do not block construction unless this is their owning stage.

${groups}

## Stage exit

${stage.exit}

- Every claimed completion has the weekly day's test and reviewer evidence.
- Blocked or carried-over cards name the exact failed start dependency or integration gate.
- No calendar date or legacy week label is used as proof of progress.
`;
}

function renderTeamStageMarkdown(stage, prefix, tasks, meta) {
  const info = TEAM_INFO[prefix];
  const selected = tasks.filter((task) => task.delivery_stage === stage.id && task.prefix === prefix).sort((a, b) => ordinal(a) - ordinal(b));
  return `# Work2Cash Stage ${stage.order} — ${info.label} Focused Execution Pack

> Coordination view generated from ${selected.length} canonical ${info.label} cards assigned to ${stage.title}. Execute work from the linked team-week day, not from this stage summary.

## Stage context

- Goal: ${stage.goal}
- Exit: ${stage.exit}
- Status: ${meta.activeStage === stage.id ? "Active by recorded owner decision" : "Planned; not formally active"}

## Required context set

1. \`AGENTS.md\`.
2. Shared Execution Rules.
3. ${info.label} Team Markdown Brief.
4. This focused stage pack.
5. The assigned team-week day and its referenced sources.

## Tasks

| ID | Weekly day section | Status | Start dependencies | Later integration gates | Flow references |
| --- | --- | --- | --- | --- | --- |
${taskRowsMarkdown(selected, 2)}

## Execution rule

- Confirm start dependencies before construction.
- Treat later integration gates as separately owned acceptance work.
- Attach tests and reviewer evidence before status changes.
- Carry the original day assignment with the exact evidence gap; never duplicate it.
`;
}

function table(headers, rows) {
  return `<div class="table-wrap" tabindex="0"><table><thead><tr>${headers.map((header) => `<th scope="col">${escapeHtml(header)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function htmlPage(file, title, eyebrow, intro, body, agentFile) {
  const css = relativeUrl(file, path.join(ROOT, "assets", "css", "pilot-docs.css"));
  const guard = relativeUrl(file, path.join(ROOT, "assets", "js", "guard.js"));
  const home = relativeUrl(file, path.join(ROOT, "index.html"));
  const planning = relativeUrl(file, path.join(HTML_ROOT, "index.html"));
  const agent = agentFile ? relativeUrl(file, agentFile) : null;
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="${escapeHtml(intro)}"><title>${escapeHtml(title)} | Work2Cash Docs</title><link rel="stylesheet" href="${css}"><script src="${guard}"></script></head>
<body><a class="skip-link" href="#content">Skip to content</a><header class="site-header"><a class="brand" href="${home}">Work2Cash Docs</a><nav aria-label="Document navigation"><a href="${planning}">Execution plans</a>${agent ? `<a href="${agent}" download>Download agent Markdown</a>` : ""}</nav></header>
<div class="page-shell"><header class="document-hero"><div class="eyebrow">${escapeHtml(eyebrow)}</div><h1>${escapeHtml(title)}</h1><p>${escapeHtml(intro)}</p><div class="status-row"><span class="status status-in-review">Phase 3</span><span>Generated from canonical tasks</span></div></header><main id="content" class="document-content" tabindex="-1">${body}</main></div><footer>Work2Cash documentation · Phase 3 execution planning</footer></body></html>\n`;
}

function teamHtml(file, prefix, tasks, meta) {
  const info = TEAM_INFO[prefix];
  const cards = meta.weeks.map((week) => {
    const href = `weeks/${info.slug}/${weekBasename(week)}.html`;
    return `<article class="pilot-card"><div class="eyebrow">Week ${week.number}</div><h3><a href="${href}">${escapeHtml(week.title)}</a></h3><p>Day 1 through Day 5, with tests and commit messages.</p></article>`;
  });
  if (prefix === "ADM") {
    cards.splice(5, 0, `<article class="pilot-card"><div class="eyebrow">Integration Week</div><h3><a href="weeks/admin/integration-week-admin-integration.html">Connect Admin to real systems</a></h3><p>Five days replacing fixtures with permissioned Backend and Mobile outcomes.</p></article>`);
  }
  const body = [
    `<section><h2>How to use this plan</h2><p>Choose a week, then complete its days in order. Each day contains the goal, prerequisites, implementation order, tests, expected result and commit message.</p></section>`,
    `<section><h2>Delivery position</h2><p>${prefix === "ADM" ? "Admin construction runs first. Admin Integration runs after Mobile and Backend construction. Cross-platform hardening follows." : `${info.label} construction starts after Admin construction. Cross-platform hardening starts after Admin Integration.`}</p></section>`,
    `<section><h2>Weeks</h2><div class="pilot-grid">${cards.join("")}</div></section>`,
  ];
  const agent = path.join(AGENT_ROOT, `${info.slug}-build-plan.md`);
  return htmlPage(file, `${info.label} Build Plan`, `Phase 3 · Junior developer`, `Week-by-week and day-by-day ${info.label} implementation plan.`, body.join(""), agent);
}

function stageHtml(file, stage, tasks, meta) {
  const selected = tasks.filter((task) => task.delivery_stage === stage.id).sort((a, b) => ordinal(a) - ordinal(b));
  const body = [
    `<section><h2>Stage identity</h2><p><strong>Stage ${stage.order} of ${meta.stages.length}.</strong> Status: ${meta.activeStage === stage.id ? "Active by recorded decision" : "Planned; not formally active"}.</p><p>${escapeHtml(stage.goal)}</p><p><strong>Exit:</strong> ${escapeHtml(stage.exit)}</p></section>`,
    `<section><h2>How dependencies work</h2><p>Start dependencies must exist before a card begins. Later integration gates may arrive later in the approved sequence but must pass before connected acceptance.</p></section>`,
  ];
  for (const [prefix, info] of Object.entries(TEAM_INFO)) {
    const rows = selected.filter((task) => task.prefix === prefix).map((task) => [
      `<code>${task.id}</code>`,
      `<a href="${weeklyHtmlTaskLink(task, file)}">${escapeHtml(task.title)}</a>`,
      escapeHtml(task.status),
      escapeHtml(task.dependencies.join(", ") || "None"),
      escapeHtml(task.integrationGates.join(", ") || "None"),
    ]);
    if (rows.length) body.push(`<section><h2>${info.label} tasks</h2>${table(["ID", "Weekly day", "Status", "Start dependencies", "Later integration gates"], rows)}</section>`);
  }
  const agent = path.join(AGENT_ROOT, "stages", `stage-${stage.order}-${stage.slug}.md`);
  return htmlPage(file, `Stage ${stage.order} — ${stage.title}`, "Phase 3 · Generated delivery-stage pack", stage.goal, body.join(""), agent);
}

function weekHtml(file, week, tasks, meta, weekRisks) {
  const selected = tasks.filter((task) => task.week === week.number);
  const body = [`<section><h2>Week outcome</h2><p>${escapeHtml(week.goal)}</p><p>This week number is a position inside each team plan; the approved cross-team delivery order still applies.</p></section>`];
  for (let day = 1; day <= 5; day += 1) {
    const rows = selected.filter((task) => task.day === day).map((task) => [
      escapeHtml(task.team.label),
      `<a href="${task.team.slug}/${weekBasename(week)}.html#day-${day}"><code>${task.id}</code> ${escapeHtml(task.title)}</a>`,
      escapeHtml(task.outcome),
      `<code>${escapeHtml(task.commit)}</code>`,
    ]);
    body.push(`<section id="day-${day}"><h2>Day ${day} of 5 — ${DAY_NAMES[day]}</h2>${table(["Team", "Daily task", "Working result", "Commit"], rows)}</section>`);
  }
  body.push(`<section><h2>Week complete</h2><p>${escapeHtml(week.exit)}</p></section>`);
  const agent = path.join(AGENT_ROOT, "weeks", `${weekBasename(week)}.md`);
  return htmlPage(file, `Week ${week.number} — ${week.title}`, "Phase 3 · Generated weekly pack", week.goal, body.join(""), agent);
}

function dailyHtml(task, file) {
  const prerequisites = task.dependencies.length
    ? `<ul>${task.dependencies.map((item) => `<li><code>${escapeHtml(item)}</code> is accepted or its required interface is ready.</li>`).join("")}</ul>`
    : "<p>The week-start conditions and required access are ready.</p>";
  const scope = meaningfulScope(task).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const rules = task.rules.slice(0, 3).map((item) => `<li>${escapeHtml(ruleText(item))}</li>`).join("");
  const tests = unique([...task.automatedTests.slice(0, 2), ...task.manualTests.slice(0, 1)]).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const next = task.day < 5 ? `<a href="#day-${task.day + 1}">Continue to Day ${task.day + 1}</a>` : '<a href="#week-complete">Finish the week</a>';
  return `<section id="day-${task.day}" class="day-plan-card"><div class="eyebrow">Day ${task.day} of 5 · ${DAY_NAMES[task.day]} · ${escapeHtml(task.id)}</div><h2>${DAY_NAMES[task.day]} — ${escapeHtml(task.title)}</h2><div class="day-boundary"><p><strong>Start only after:</strong> ${escapeHtml(startSummary(task))}</p><p><strong>Finish only when:</strong> ${escapeHtml(endResult(task))}</p></div><p><strong>Status:</strong> ${escapeHtml(task.status)}</p><p><strong>Today's goal:</strong> ${escapeHtml(task.outcome)}</p><p><strong>Why today:</strong> ${escapeHtml(task.unlocks[0] || task.why)}</p><h3>Before you start</h3>${prerequisites}${task.integrationGates.length ? `<p><strong>Later integration or acceptance gate:</strong> ${escapeHtml(task.integrationGates.join(", "))}. This does not block today's approved construction scope.</p>` : ""}<h3>Build in this order</h3><ol>${scope}</ol><h3>Technical rules</h3>${rules ? `<ul>${rules}</ul>` : "<p>Follow the linked flow and contract without expanding scope.</p>"}<p><strong>Required references:</strong> ${escapeHtml(dailyReferences(task).join(", ") || "Canonical task source")}</p><h3>Tests for today</h3><ul>${tests}</ul><h3>End-of-day result</h3><p>${escapeHtml(endResult(task))}</p><p><strong>Recommended commit:</strong> <code>${escapeHtml(task.commit)}</code></p><p>The complete agent instructions for this day are embedded in the downloadable weekly Markdown.</p><nav class="day-navigation" aria-label="Day ${task.day} navigation"><a href="#five-day-map">Back to five-day map</a>${next}</nav></section>`;
}

function teamWeekHtml(file, week, prefix, tasks, options = {}) {
  const info = TEAM_INFO[prefix];
  const selected = options.tasks || tasks.filter((task) => task.week === week.number && task.prefix === prefix).sort((a, b) => a.day - b.day);
  const label = options.label || `Week ${week.number}`;
  const mapRows = selected.map((task) => [
    `<a href="#day-${task.day}">Day ${task.day} — ${DAY_NAMES[task.day]}</a>`,
    `<code>${escapeHtml(task.id)}</code> ${escapeHtml(task.title)}`,
    escapeHtml(startSummary(task)),
    escapeHtml(endResult(task)),
    `<code>${escapeHtml(task.commit)}</code>`,
  ]);
  const body = [
    `<section><h2>Week goal</h2><p>${escapeHtml(week.goal)}</p></section>`,
    `<section><h2>Before the week starts</h2><p>${escapeHtml(options.startCondition || (week.number === 1 ? "Repository access, development environment and approved references are ready." : `The ${info.label} Week ${week.number - 1} result is accepted or explicitly carried over.`))}</p></section>`,
    `<section id="five-day-map"><h2>Five-day map</h2><p>Complete Day 1 through Day 5 in order. A later day does not start until its prerequisite result exists.</p>${table(["Day", "Task", "Start only after", "Finish only when", "Commit"], mapRows)}</section>`,
    ...selected.map((task) => dailyHtml(task, file)),
    `<section id="week-complete"><h2>Week complete</h2><p>All five ${escapeHtml(info.label)} daily results work together and the week goal is demonstrable within this team's scope.</p><ul><li>Every completed day has tests and a commit identifier.</li><li>Every unfinished item names its blocker and carry-over destination.</li></ul></section>`,
  ];
  const agent = options.agentFile || path.join(AGENT_ROOT, "weeks", info.slug, `${weekBasename(week)}.md`);
  return htmlPage(file, `${info.label} — ${label}: ${week.title}`, "Phase 3 · Junior developer", "Read one day at a time: prerequisites, implementation order, tests, result and commit.", body.join(""), agent);
}

function markdownSummary(title, intro, markdown) {
  return { title, intro, markdown };
}

function auxiliaryHtml(file, summary, agentFile) {
  const lines = summary.markdown.split("\n").filter(Boolean);
  const header = lines.findIndex((line) => /^\| ---/.test(line));
  let body = `<section><h2>Purpose</h2><p>${escapeHtml(summary.intro)}</p></section>`;
  if (header > 0) {
    const headings = lines[header - 1].replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
    const rows = lines.slice(header + 1).filter((line) => /^\|/.test(line)).map((line) => line.replace(/^\||\|$/g, "").split("|").map((cell) => inline(cell.trim())));
    body += `<section><h2>Generated register</h2>${table(headings, rows)}</section>`;
  }
  return htmlPage(file, summary.title, "Phase 3 · Generated reference", summary.intro, body, agentFile);
}

function indexMarkdown(meta) {
  return `# Phase 3 Execution Planning Library

Choose your team, then choose the current week and day. The team weekly page is the primary junior-developer work surface.

- [Mobile Build Plan](mobile-build-plan.md)
- [Backend Build Plan](backend-build-plan.md)
- [Admin Build Plan](admin-build-plan.md)

## Week overview

${meta.weeks.map((week) => {
    const basename = `${weekBasename(week)}.md`;
    return `- [Week ${week.number} — ${week.title}](weeks/${basename}) — [Mobile](weeks/mobile/${basename}) · [Backend](weeks/backend/${basename}) · [Admin](weeks/admin/${basename})`;
  }).join("\n")}

- [Admin Integration Week](weeks/admin/integration-week-admin-integration.md)

## Coordination references

- Canonical task records are maintained in 25 team-week sources under \`content/tasks/\`; use the matching team-week day as the executable agent context.
- [Task dependency map](dependency-map.md)
- [Integration and acceptance gates](integration-gates.md)
- [Cross-team schedule risks](schedule-risks.md)
- [QA traceability](qa-traceability.md)

Approved delivery order: Admin construction, Mobile and Backend construction, Admin Integration, then cross-platform hardening and release. Dates do not activate work or prove completion.
`;
}

function indexHtml(file, meta) {
  const teamCards = [
    ["Admin Build Plan", "admin-build-plan.html", "Admin construction, integration and hardening."],
    ["Mobile Build Plan", "mobile-build-plan.html", "Mobile construction, hardening and release."],
    ["Backend Build Plan", "backend-build-plan.html", "Backend construction, hardening and release."],
  ];
  const weekCards = meta.weeks.map((week) => [`Week ${week.number} — ${week.title}`, `weeks/${weekBasename(week)}.html`]);
  const body = `<section><h2>Start here</h2><p>Choose your team, then open the current week and day. Each day contains only the prerequisites, implementation order, tests, working result and recommended commit.</p><div class="pilot-grid">${teamCards.map(([title, href, description]) => `<article class="pilot-card"><h3><a href="${href}">${escapeHtml(title)}</a></h3><p>${escapeHtml(description)}</p></article>`).join("")}</div></section><section><h2>Approved delivery order</h2><ol>${meta.stages.map((stage) => `<li><strong>${escapeHtml(stage.title)}</strong> — ${escapeHtml(stage.goal)}</li>`).join("")}</ol></section><section><h2>Cross-team week overviews</h2><div class="pilot-grid">${weekCards.map(([title, href]) => `<article class="pilot-card"><h3><a href="${href}">${escapeHtml(title)}</a></h3><p>Day-by-day overview across all three teams.</p></article>`).join("")}</div></section><section><h2>Coordination references</h2><p><a href="dependency-map.html">Task dependencies</a> · <a href="integration-gates.html">Integration gates</a> · <a href="schedule-risks.html">Schedule risks</a> · <a href="qa-traceability.html">QA traceability</a></p></section>`;
  return htmlPage(file, "Phase 3 Execution Planning Library", "Phase 3 · Junior developer", "Choose a team, week and day. Generated from one canonical 125-task source.", body, path.join(AGENT_ROOT, "README.md"));
}

function existingFiles(root) {
  if (!fs.existsSync(root)) return [];
  return fs.readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(root, entry.name);
    return entry.isDirectory() ? existingFiles(target) : entry.isFile() ? [target] : [];
  });
}

function buildExpected(tasks, meta) {
  const expected = new Map();
  const byId = new Map(tasks.map((task) => [task.id, task]));
  const reverse = reverseDependencies(tasks);
  const allRisks = risks(tasks, byId);
  for (const [prefix, info] of Object.entries(TEAM_INFO)) {
    const htmlFile = path.join(HTML_ROOT, `${info.slug}-build-plan.html`);
    expected.set(path.join(AGENT_ROOT, `${info.slug}-build-plan.md`), renderTeamMarkdown(prefix, tasks, meta));
    expected.set(htmlFile, teamHtml(htmlFile, prefix, tasks, meta));
  }
  for (const stage of meta.stages) {
    const basename = `stage-${stage.order}-${stage.slug}`;
    const markdownFile = path.join(AGENT_ROOT, "stages", `${basename}.md`);
    const htmlFile = path.join(HTML_ROOT, "stages", `${basename}.html`);
    expected.set(markdownFile, renderStageMarkdown(stage, tasks, meta));
    expected.set(htmlFile, stageHtml(htmlFile, stage, tasks, meta));
    for (const [prefix, info] of Object.entries(TEAM_INFO)) {
      const selected = tasks.filter((task) => task.delivery_stage === stage.id && task.prefix === prefix);
      if (selected.length) expected.set(path.join(AGENT_ROOT, "stages", info.slug, `${basename}.md`), renderTeamStageMarkdown(stage, prefix, tasks, meta));
    }
  }
  for (const week of meta.weeks) {
    const basename = weekBasename(week);
    const markdownFile = path.join(AGENT_ROOT, "weeks", `${basename}.md`);
    const htmlFile = path.join(HTML_ROOT, "weeks", `${basename}.html`);
    const weekRisks = allRisks.filter((risk) => risk.task.week === week.number);
    expected.set(markdownFile, renderWeekMarkdown(week, tasks, meta, weekRisks));
    expected.set(htmlFile, weekHtml(htmlFile, week, tasks, meta, weekRisks));
    for (const [prefix, info] of Object.entries(TEAM_INFO)) {
      const teamMarkdown = path.join(AGENT_ROOT, "weeks", info.slug, `${basename}.md`);
      const teamHtmlFile = path.join(HTML_ROOT, "weeks", info.slug, `${basename}.html`);
      expected.set(teamMarkdown, renderTeamWeekMarkdown(week, prefix, tasks, meta));
      expected.set(teamHtmlFile, teamWeekHtml(teamHtmlFile, week, prefix, tasks));
    }
  }
  const integrationStage = meta.stages.find((stage) => stage.id === "admin-integration");
  const integrationTasks = tasks.filter((task) => task.delivery_stage === "admin-integration").sort((a, b) => a.day - b.day);
  const integrationWeek = {
    number: null,
    slug: "admin-integration",
    title: "Connect Admin to real systems",
    goal: integrationStage.goal,
    exit: integrationStage.exit,
  };
  const integrationMarkdown = path.join(AGENT_ROOT, "weeks", "admin", "integration-week-admin-integration.md");
  const integrationHtml = path.join(HTML_ROOT, "weeks", "admin", "integration-week-admin-integration.html");
  const integrationOptions = {
    tasks: integrationTasks,
    label: "Integration Week",
    startCondition: "Admin Weeks 1–5, Mobile Weeks 1–5 and Backend Weeks 1–5 are accepted with real contract and staging evidence.",
    agentFile: integrationMarkdown,
  };
  expected.set(integrationMarkdown, renderTeamWeekMarkdown(integrationWeek, "ADM", tasks, meta, integrationOptions));
  expected.set(integrationHtml, teamWeekHtml(integrationHtml, integrationWeek, "ADM", tasks, integrationOptions));
  const dependency = markdownSummary("Phase 3 Task Dependency Map", "All canonical task dependencies, direct consumers and flow references.", dependencyMarkdown([...tasks], reverse));
  const integration = markdownSummary("Phase 3 Integration and Acceptance Gate Register", "Later cross-team acceptance gates separated from construction-start dependencies.", integrationGatesMarkdown([...tasks]));
  const riskSummary = markdownSummary("Phase 3 Cross-Team Schedule Risk Register", "Only start dependencies that incorrectly point to a later approved delivery stage.", risksMarkdown(allRisks));
  const qaSummary = markdownSummary("Phase 3 QA Traceability", "Task-to-flow and task-to-test traceability for all canonical Phase 3 work.", qaTraceabilityMarkdown([...tasks]));
  expected.set(path.join(AGENT_ROOT, "dependency-map.md"), dependency.markdown);
  expected.set(path.join(HTML_ROOT, "dependency-map.html"), auxiliaryHtml(path.join(HTML_ROOT, "dependency-map.html"), dependency, path.join(AGENT_ROOT, "dependency-map.md")));
  expected.set(path.join(AGENT_ROOT, "integration-gates.md"), integration.markdown);
  expected.set(path.join(HTML_ROOT, "integration-gates.html"), auxiliaryHtml(path.join(HTML_ROOT, "integration-gates.html"), integration, path.join(AGENT_ROOT, "integration-gates.md")));
  expected.set(path.join(AGENT_ROOT, "schedule-risks.md"), riskSummary.markdown);
  expected.set(path.join(HTML_ROOT, "schedule-risks.html"), auxiliaryHtml(path.join(HTML_ROOT, "schedule-risks.html"), riskSummary, path.join(AGENT_ROOT, "schedule-risks.md")));
  expected.set(path.join(AGENT_ROOT, "qa-traceability.md"), qaSummary.markdown);
  expected.set(path.join(HTML_ROOT, "qa-traceability.html"), auxiliaryHtml(path.join(HTML_ROOT, "qa-traceability.html"), qaSummary, path.join(AGENT_ROOT, "qa-traceability.md")));
  expected.set(path.join(AGENT_ROOT, "README.md"), indexMarkdown(meta));
  expected.set(path.join(HTML_ROOT, "index.html"), indexHtml(path.join(HTML_ROOT, "index.html"), meta));
  return expected;
}

function run() {
  const meta = JSON.parse(fs.readFileSync(META_FILE, "utf8"));
  const tasks = walkTaskWeekSources(TASK_ROOT).map(parseTask);
  const weekSlugs = new Map(meta.weeks.map((week) => [week.number, week.slug]));
  for (const task of tasks) {
    if (task.week != null) task.weekSlug = weekSlugs.get(task.week);
  }
  validate(tasks, meta);
  const expected = buildExpected(tasks, meta);
  const roots = [HTML_ROOT, AGENT_ROOT];
  const problems = [];
  if (CHECK_ONLY) {
    for (const [file, contents] of expected) {
      if (!fs.existsSync(file)) problems.push(`missing: ${posix(path.relative(ROOT, file))}`);
      else if (fs.readFileSync(file, "utf8") !== contents) problems.push(`stale: ${posix(path.relative(ROOT, file))}`);
    }
    for (const root of roots) for (const file of existingFiles(root)) if (!expected.has(file)) problems.push(`orphaned: ${posix(path.relative(ROOT, file))}`);
    if (problems.length) throw new Error(`execution planning outputs are not current:\n${problems.map((item) => `- ${item}`).join("\n")}`);
    console.log(`Phase 3 execution plans are current: ${expected.size} generated files checked from ${tasks.length} tasks.`);
    return;
  }
  for (const root of roots) for (const file of existingFiles(root)) if (!expected.has(file)) fs.rmSync(file);
  for (const [file, contents] of expected) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, contents);
  }
  console.log(`Generated ${expected.size} Phase 3 planning files from ${tasks.length} canonical tasks.`);
}

try { run(); } catch (error) { console.error(`Phase 3 execution-plan generation failed: ${error.message}`); process.exitCode = 1; }
