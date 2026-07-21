#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { walkTaskWeekSources } = require("./task-week-source.js");

const ROOT = path.resolve(__dirname, "..");
const WEEK_ROOT = path.join(ROOT, "documents", "agent-md", "weeks");
const TASK_ROOT = path.join(ROOT, "content", "tasks");
const CHECK_ONLY = process.argv.includes("--check");
const REFRESH_GENERATED = process.argv.includes("--refresh-generated");
const REVIEW_DATE = "2026-07-17";
const PILOTS = new Set(["BE-W2D1", "MOB-W2D1", "ADM-W2D2"]);
const INTEGRATION_IDS = new Set(["ADM-INT-01", "ADM-INT-02", "ADM-INT-03", "ADM-INT-04", "ADM-INT-05"]);
const TEAMS = [
  { heading: "Mobile Tasks", name: "Mobile", prefix: "MOB", directory: "mobile", owner: "Mobile Lead", reviewers: "Product Lead, Technical Lead, Backend Lead, QA" },
  { heading: "Backend Tasks", name: "Backend", prefix: "BE", directory: "backend", owner: "Backend Lead", reviewers: "Technical Lead, Mobile Lead, Admin Lead, QA" },
  { heading: "Admin Tasks", name: "Admin Frontend", prefix: "ADM", directory: "admin", owner: "Admin Lead", reviewers: "Product Lead, Technical Lead, Backend Lead, Security and Privacy, QA" },
];

const MOBILE_FLOWS = {
  W1D1: ["FLOW-LIB-001"], W1D2: ["MF-01", "SF-10"], W1D3: ["MF-02", "MF-03", "SF-01", "SF-11", "SF-13"], W1D4: ["SF-02", "MF-18", "MF-19"], W1D5: ["MF-04", "MF-20"],
  W2D1: ["MF-05", "SF-03"], W2D2: ["MF-06"], W2D3: ["MF-06", "SF-04", "SF-05", "SF-09"], W2D4: ["MF-06", "SF-06", "SF-07", "SF-10"], W2D5: ["MF-06", "MF-08"],
  W3D1: ["MF-07", "MF-09"], W3D2: ["MF-08", "MF-09"], W3D3: ["MF-07", "MF-11"], W3D4: ["MF-10"], W3D5: ["MF-10", "MF-16", "SF-10"],
  W4D1: ["MF-14", "SF-05"], W4D2: ["MF-12", "SF-08"], W4D3: ["MF-15", "MF-22"], W4D4: ["MF-13", "SF-07", "SF-12"], W4D5: ["MF-16", "MF-23"],
  W5D1: ["MF-18", "MF-19", "MF-20"], W5D2: ["MF-17", "MF-24"], W5D3: ["SF-09", "SF-10"], W5D4: ["FLOW-LIB-001"], W5D5: ["FLOW-LIB-001"],
};

const ADMIN_FLOWS = {
  W1D1: ["AF-01"], W1D2: ["AF-01", "ASF-01", "ASF-02"], W1D3: ["AF-02"], W1D4: ["ASF-02", "ASF-05", "ASF-06"], W1D5: ["ASF-03", "ASF-11"],
  W2D1: ["AF-03"], W2D2: ["AF-04"], W2D3: ["AF-11"], W2D4: ["AF-05"], W2D5: ["AF-13"],
  W3D1: ["AF-05"], W3D2: ["AF-05"], W3D3: ["AF-05", "ASF-06"], W3D4: ["AF-07"], W3D5: ["AF-05", "AF-14"],
  W4D1: ["AF-06"], W4D2: ["AF-14"], W4D3: ["AF-22"], W4D4: ["AF-08", "AF-10", "AF-24"], W4D5: ["AF-09"],
  W5D1: ["AF-10"], W5D2: ["AF-21"], W5D3: ["AF-12", "AF-16"], W5D4: ["AF-19", "AF-20"], W5D5: ["AF-18", "AF-23"],
};

const BACKEND_FLOWS = {
  W1D1: ["FLOW-LIB-001"], W1D2: ["MF-01", "MF-02", "MF-03"], W1D3: ["MF-02", "MF-03", "SF-01", "SF-13"], W1D4: ["SF-02", "MF-18", "MF-19"], W1D5: ["AF-01", "AF-02"],
  W2D1: ["MF-05", "SF-03", "AF-04"], W2D2: ["MF-06", "AF-11"], W2D3: ["MF-06", "SF-04", "SF-05", "AF-13"], W2D4: ["MF-06", "SF-06", "SF-07", "AF-08"], W2D5: ["MF-06", "MF-08", "AF-21"],
  W3D1: ["MF-07", "MF-09", "AF-05"], W3D2: ["MF-08", "MF-09"], W3D3: ["MF-07", "MF-11", "AF-05"], W3D4: ["MF-10", "AF-05"], W3D5: ["MF-10", "MF-16", "AF-05", "AF-07"],
  W4D1: ["MF-14"], W4D2: ["MF-12", "SF-08", "AF-06", "AF-14"], W4D3: ["MF-15", "MF-22", "MF-24", "AF-22"], W4D4: ["MF-13", "SF-07", "SF-12", "AF-08", "AF-09", "AF-10", "AF-24"], W4D5: ["MF-16", "MF-23", "AF-07"],
};

const ADMIN_BACKEND = {
  W1D1: ["BE-W1D1"], W1D2: ["BE-W1D5"], W1D3: ["BE-W1D5"], W1D4: ["BE-W1D5"], W1D5: ["BE-W1D1"],
  W2D1: ["BE-W5D1"], W2D2: ["BE-W2D1"], W2D3: ["BE-W5D1"], W2D4: ["BE-W5D1"], W2D5: ["BE-W5D1"],
  W3D1: ["BE-W5D1"], W3D2: ["BE-W5D1"], W3D3: ["BE-W5D1"], W3D4: ["BE-W4D5"], W3D5: ["BE-W3D5"],
  W4D1: ["BE-W4D2"], W4D2: ["BE-W4D2"], W4D3: ["BE-W4D3"], W4D4: ["BE-W4D4", "BE-W5D1"], W4D5: ["BE-W4D4", "BE-W5D1"],
  W5D1: ["BE-W5D1"], W5D2: ["BE-W5D2"], W5D3: ["BE-W5D1"], W5D4: ["BE-W5D4"], W5D5: ["BE-W5D4"],
};

const ADMIN_MOBILE = {
  W2D1: ["MOB-W1D4"], W2D2: ["MOB-W2D1"], W2D3: ["MOB-W2D2"], W2D4: ["MOB-W2D4"], W2D5: ["MOB-W2D3"],
  W3D1: ["MOB-W3D3"], W3D2: ["MOB-W3D4"], W3D3: ["MOB-W3D4"], W3D4: ["MOB-W4D5"], W3D5: ["MOB-W3D5"],
  W4D1: ["MOB-W4D2"], W4D2: ["MOB-W4D2"], W4D3: ["MOB-W4D3"], W4D4: ["MOB-W4D4"], W4D5: ["MOB-W4D4"],
  W5D1: ["MOB-W4D4"], W5D2: ["MOB-W5D1"], W5D3: ["MOB-W2D3"], W5D5: ["MOB-W5D5"],
};

function posix(value) { return value.split(path.sep).join("/"); }
function slug(value) { return value.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
function cells(line) { return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim()); }
function unique(values) { return [...new Set(values.filter(Boolean))]; }
function slotParts(slot) { const match = slot.match(/^W(\d+)D(\d+)$/); return { week: Number(match[1]), day: Number(match[2]) }; }
function ordinal(slot) { const { week, day } = slotParts(slot); return week * 10 + day; }

function stageFor(task) {
  if (task.week >= 6) return { id: "cross-platform-hardening-release", order: 4, label: "Stage 4 — Cross-Platform Hardening and Release" };
  if (task.prefix === "ADM") return { id: "admin-ui-construction", order: 1, label: "Stage 1 — Admin UI Construction" };
  return { id: "mobile-backend-construction", order: 2, label: "Stage 2 — Mobile and Backend Construction" };
}

function adminIntegrationOwner(slot) {
  const identity = new Set(["W1D1", "W1D2", "W1D3", "W1D4", "W1D5", "W2D1"]);
  const kycCatalog = new Set(["W2D2", "W2D3", "W2D5"]);
  const taskOperations = new Set(["W2D4", "W3D1", "W3D2", "W3D3"]);
  const finance = new Set(["W4D1", "W4D2", "W4D3", "W4D4", "W4D5", "W5D1"]);
  if (identity.has(slot)) return "ADM-INT-01";
  if (kycCatalog.has(slot)) return "ADM-INT-02";
  if (taskOperations.has(slot)) return "ADM-INT-03";
  if (finance.has(slot)) return "ADM-INT-04";
  return "ADM-INT-05";
}

function parseTasks() {
  const tasks = [];
  const files = fs.readdirSync(WEEK_ROOT).filter((name) => /^week-\d{2}-.+\.md$/.test(name)).sort();
  for (const filename of files) {
    const file = path.join(WEEK_ROOT, filename);
    const raw = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
    for (const team of TEAMS) {
      const marker = `## ${team.heading}\n`;
      const start = raw.indexOf(marker);
      if (start < 0) throw new Error(`${filename}: missing ${team.heading}`);
      const remainder = raw.slice(start + marker.length);
      const next = remainder.search(/^## /m);
      const section = next < 0 ? remainder : remainder.slice(0, next);
      const rows = section.split("\n").filter((line) => /^\| W\d+D\d+ \|/.test(line));
      if (rows.length !== 5) throw new Error(`${filename} ${team.name}: expected 5 task rows, found ${rows.length}`);
      for (const row of rows) {
        const values = cells(row);
        const slot = values[0];
        const parts = slotParts(slot);
        tasks.push({
          id: `${team.prefix}-${slot}`,
          slot,
          week: parts.week,
          day: parts.day,
          date: values[1],
          title: values[2],
          scope: values[3],
          legacyDependency: values[4],
          outputRule: values[5],
          source: posix(path.relative(ROOT, file)),
          ...team,
        });
      }
    }
  }
  if (tasks.length !== 120) throw new Error(`expected 120 tasks, found ${tasks.length}`);
  return tasks.sort((a, b) => a.prefix.localeCompare(b.prefix) || ordinal(a.slot) - ordinal(b.slot));
}

function flowRefs(task) {
  if (task.week >= 6) return ["FLOW-LIB-001"];
  if (task.prefix === "MOB") return MOBILE_FLOWS[task.slot] || ["FLOW-LIB-001"];
  if (task.prefix === "ADM") return ADMIN_FLOWS[task.slot] || ["FLOW-LIB-001"];
  if (task.slot === "W5D1") return ["AF-03", "AF-05", "AF-06", "AF-08", "AF-13", "AF-22"];
  if (task.slot === "W5D2") return ["MF-17", "MF-20", "AF-15", "AF-21"];
  if (task.slot === "W5D3") return ["FLOW-LIB-001"];
  if (task.slot === "W5D4") return ["AF-19", "AF-20"];
  if (task.slot === "W5D5") return ["FLOW-LIB-001"];
  return BACKEND_FLOWS[task.slot] || ["FLOW-LIB-001"];
}

function taskDependencies(task, all) {
  const dependencies = [];
  const sameTeam = all.filter((candidate) => candidate.prefix === task.prefix && ordinal(candidate.slot) < ordinal(task.slot)).sort((a, b) => ordinal(b.slot) - ordinal(a.slot));
  if (sameTeam[0]) dependencies.push(sameTeam[0].id);
  if (task.prefix === "ADM" && task.slot === "W6D1") dependencies.push("ADM-INT-05");
  return unique(dependencies.filter((id) => id !== task.id));
}

function integrationGates(task) {
  if (task.week >= 6) {
    return task.prefix === "BE"
      ? []
      : [`BE-${task.slot}`, ...(task.prefix === "ADM" ? [`MOB-${task.slot}`] : [])];
  }
  if (task.prefix === "MOB") return [`BE-${task.slot}`];
  if (task.prefix === "ADM") return [adminIntegrationOwner(task.slot)];
  return [];
}

function providers(task) {
  const text = `${task.title} ${task.scope} ${task.legacyDependency}`.toLowerCase();
  const found = [];
  if (/kyc|identity|face|nin|bvn/.test(text)) found.push("Smile ID");
  if (/payment|escrow|wallet|withdraw|payout|finance|ledger|receipt|refund/.test(text)) found.push("Paystack and Moniepoint");
  if (/location|geocode|tracking|eta|map/.test(text)) found.push("Google Maps Platform");
  if (/notification|announcement|direct offer|fcm/.test(text)) found.push("Firebase Cloud Messaging");
  if (/otp|sms/.test(text)) found.push("Termii when SMS fallback is required");
  if (/media|upload|voice|attachment|storage|backup/.test(text)) found.push("Approved object storage");
  if (/monitor|sentry|incident|performance|release|stabil|hardening/.test(text)) found.push("Sentry and approved monitoring services where applicable");
  if (/release candidate|build freeze|store|shorebird/.test(text)) found.push("Shorebird or the approved release-distribution path");
  return unique(found);
}

function forbidden(task) {
  const text = `${task.title} ${task.scope}`.toLowerCase();
  const rules = [
    "Do not expand the approved execution scope or invent unavailable contracts, models, provider behavior or repository paths.",
    `Do not violate the legacy output rule: ${task.outputRule}`,
  ];
  if (/payment|escrow|wallet|fund/.test(text)) rules.push("Do not treat a frontend redirect as payment proof or introduce card-entry-first payment UX.");
  if (/direct offer/.test(text)) rules.push("Do not make direct offers socket-based; durable state remains REST/FCM driven.");
  if (/dispute/.test(text)) rules.push("Do not turn disputes into live chat.");
  if (task.prefix === "ADM" && /task|operation/.test(text)) rules.push("Do not add admin task reassignment.");
  if (/profile|mode|tasker|task owner/.test(text)) rules.push("Use `mode`; do not introduce `activeMode`.");
  return rules;
}

function expectedModules(task) {
  if (task.prefix === "BE") return ["Relevant NestJS application/domain module and ports", "Prisma persistence or migration only where the approved data model requires it", "REST, socket, queue or provider adapter named by the scope", "Unit, integration and contract tests"];
  if (task.prefix === "MOB") return ["Relevant Flutter feature, routing and state-management area", "API/socket/provider adapter named by the scope", "Loading, empty, error and recovery presentation", "Unit, widget and integration tests"];
  return ["Relevant Next.js admin feature, protected route and state/query area", "RBAC gate, table/detail/action primitives required by the scope", "API/socket adapter named by the scope", "Component, permission and integration tests"];
}

function automatedTests(task) {
  if (task.prefix === "BE") return ["Unit tests for approved domain decisions, guards and error paths.", "Integration tests for persistence and every named contract or event.", "Authorization, idempotency and audit tests wherever the task mutates protected or financial state.", "Regression test for the legacy output rule and referenced flow endings."];
  if (task.prefix === "MOB") return ["State-management tests for success, loading, empty, failure and recovery.", "Widget tests for validation, permissions and user-visible business guards.", "API/socket contract tests for every named dependency.", "Navigation or integration test proving interruption resumes from backend truth."];
  return ["Component tests for list/detail/action, loading, empty, error and retry states.", "RBAC tests for route, control and direct-request denial behavior.", "Integration tests for each named read or mutation and authoritative refresh.", "Accessibility and audit-reason tests for privileged operations."];
}

function manualTests(task) {
  const base = [`Run the complete ${task.title} outcome in the target environment using non-production data.`, "Exercise one dependency failure and confirm recovery does not show false success.", `Verify the legacy output rule: ${task.outputRule}`];
  if (task.prefix === "MOB") base.push("Verify the critical path on a supported Android device with a slow or interrupted network.");
  if (task.prefix === "ADM") base.push("Verify keyboard operation, permitted and forbidden roles, confirmation copy and audit evidence.");
  if (task.prefix === "BE") base.push("Verify logs, metrics and persisted state contain no secret or unnecessary sensitive data.");
  return base;
}

function commitMessage(task) {
  if (/^(feat|fix|docs|test|chore|perf|refactor)\([^)]+\):\s+/.test(task.outputRule)) return task.outputRule;
  const scope = task.prefix === "MOB" ? "mobile" : task.prefix === "ADM" ? "admin" : "backend";
  return `feat(${scope}): ${slug(task.title).replaceAll("-", " ")}`;
}

function dependencyRows(task, byId) {
  const rows = task.dependencies.map((id) => {
    const dependency = byId.get(id);
    const later = dependency && ordinal(dependency.slot) > ordinal(task.slot);
    const why = dependency ? `Provides ${dependency.title.toLowerCase()} required before this task can be accepted.` : "Provides an approved prerequisite.";
    const evidence = later
      ? `Schedule risk: ${id} is planned later (${dependency.slot}); use an accepted stub or re-sequence before execution.`
      : `${id} is accepted, or its explicitly required contract/stub and evidence are available.`;
    return `| ${id} | ${why} | ${evidence} |`;
  });
  rows.push(`| Legacy dependency | ${task.legacyDependency} | The named contract, state, environment or prior outcome is demonstrably available. |`);
  return rows.join("\n");
}

function integrationRows(task) {
  if (!task.integrationGates.length) {
    return "| No named cross-team gate | This card can be accepted within its own delivery stage after its stated tests and evidence pass. | Accepted card evidence and reviewer decision. |";
  }
  return task.integrationGates.map((id) => {
    if (id.startsWith("ADM-INT-")) {
      return `| ${id} | Owns later connection of this fixture-driven Admin UI to authoritative Mobile/Backend outcomes. | The integration card passes real-contract, permission, recovery and end-to-end checks. |`;
    }
    return `| ${id} | Supplies the real backend or client outcome needed for cross-platform acceptance; it is not a start blocker for this card. | Approved contract-compatible fixtures exist for construction, then the named card passes staging integration and recovery checks. |`;
  }).join("\n");
}

function referenceRows(task) {
  const rows = task.flows.map((ref) => `| ${ref} | Defines approved behavior, states or handoffs that this task must preserve. |`);
  if (task.flows.includes("MF-17") || task.flows.includes("AF-15")) {
    rows.push("| CONTRACT-REFERRAL-001 | Defines exact referral reads, attribution, Admin decisions, idempotency and server-owned reward settlement. |");
  }
  rows.push("| CONTRACT-001 | Supplies the current API/socket baseline; missing exact contracts remain explicit gaps. |");
  rows.push("| DATA-001 | Supplies model, state, audit and persistence expectations where the scope stores data. |");
  if (task.providerList.length) rows.push("| PROVIDER-001 | Supplies adapter, validation, fallback and cost-control rules for named providers. |");
  return rows.join("\n");
}

function render(task, byId, dependants) {
  const referralContracts = task.flows.includes("MF-17") || task.flows.includes("AF-15") ? ["CONTRACT-REFERRAL-001"] : [];
  const related = unique([...task.flows, ...task.dependencies, ...task.integrationGates, ...referralContracts, "CONTRACT-001", "DATA-001", ...(task.providerList.length ? ["PROVIDER-001"] : [])]);
  const providerText = task.providerList.length
    ? `${task.providerList.join(", ")}. Treat availability, credentials, sandbox behavior, timeouts and cost controls as readiness evidence; do not infer them from the schedule.`
    : "No direct external provider is named by this task. If implementation discovers one, stop and add the governed provider dependency before integration.";
  const downstream = dependants.get(task.id) || [];
  const unlocks = downstream.length
    ? downstream.map((id) => `- ${id} can consume this task's accepted output or handoff.`).join("\n")
    : "- The next accepted task in this team's sequence can proceed with this outcome as evidence.";
  return `---
id: ${task.id}
title: ${task.title}
type: build-task
audience: Junior ${task.prefix === "BE" ? "backend" : task.prefix === "MOB" ? "mobile" : "admin"} developers, Team leads, QA, AI agents
owner: ${task.owner}
reviewers: ${task.reviewers}
status: planned
version: ${referralContracts.length ? "0.2" : "0.1"}
last_reviewed: ${REVIEW_DATE}
authority: Approved legacy build-plan and weekly-pack meaning in the approved Phase 3 task-card format
related: ${related.join(", ")}
delivery_stage: ${task.stage.id}
stage_order: ${task.stage.order}
legacy_slot: ${task.slot}
---

# ${task.id} — ${task.title}

## Outcome in plain English

When accepted, the ${task.name} team will have delivered this demonstrable outcome: ${task.scope}

## Why it matters

This work matters because the approved plan names this dependency or handoff: ${task.legacyDependency} Without that input or downstream need, the outcome cannot be accepted confidently. The result must also preserve this output rule: ${task.outputRule}

## Ownership and status

| Field | Value |
| --- | --- |
| Team | ${task.name} |
| Owner | ${task.owner} or assigned developer |
| Reviewer and acceptor | ${task.reviewers} |
| Status | Planned; calendar dates do not activate this task |
| Delivery stage | ${task.stage.label} |
| Scheduled slot | Week ${task.week}, Day ${task.day} — ${task.date} legacy planning date |
| Legacy row | ${task.source}, ${task.slot} |

## Flow and source traceability

| Reference | Why it is needed |
| --- | --- |
${referenceRows(task)}

## Dependencies and readiness

| Dependency | Why needed | Readiness evidence |
| --- | --- | --- |
${dependencyRows(task, byId)}

## Integration and acceptance gates

These gates do not block construction of this card. They must pass before the feature is accepted as connected to real cross-platform behavior.

| Gate | Why it is needed | Acceptance evidence |
| --- | --- | --- |
${integrationRows(task)}

## Required inputs

- Agent Markdown for ${task.flows.join(", ")} or the complete Flow Library when the task spans the platform.
- Approved contract and data-model sections named by the scope.
- Accepted designs, copy, permission rules and test data for ${task.title}.
- The environment, credentials, fixtures and prior-task evidence listed under dependencies.

## Implementation scope

- ${task.scope}
- Preserve the dependency and output rule from the approved legacy row.
- ${task.prefix === "ADM" && task.week <= 5 ? `Build against approved contract-shaped fixtures. Real API and cross-platform connection is owned by ${adminIntegrationOwner(task.slot)}.` : "Keep construction interfaces compatible with the approved contracts so later integration does not redefine this outcome."}
- Include user-visible or operational loading, empty, failure and recovery behavior wherever this task exposes a UI or asynchronous process.
- Update traceability and implementation evidence without redefining approved product behavior.

## Explicitly out of scope

${forbidden(task).map((item) => `- ${item}`).join("\n")}

## Expected modules or files

${expectedModules(task).map((item) => `- ${item}.`).join("\n")}

These are implementation surfaces, not invented repository paths. The implementing team must map them to the actual codebase before editing.

## Security, permissions and audit

- Enforce authorization at the backend boundary and mirror it safely in the client.
- Do not expose secrets, exact addresses, full proof media, real phone numbers, KYC data or payment details outside approved roles and states.
- Record privileged, financial, identity or configuration mutations using the approved audit convention.
- Treat backend/provider persisted state as authoritative after retries, reconnects and app/page reloads.

## Provider dependencies

${providerText}

## Verbal execution guide

First read this card and the referenced flow pages so the desired outcome and forbidden behavior are clear. Confirm every start-readiness row and record any missing input instead of guessing. Implement only the stated scope using approved contract shapes and fixtures where real systems are scheduled later. Exercise success, decision branches, failure and recovery. Treat the separate integration gates as later acceptance work, attach the required evidence, obtain the listed acceptance, update the task status, and hand the result downstream.

## Acceptance criteria

- [ ] The complete legacy execution scope is demonstrably delivered.
- [ ] Every start dependency is ready before construction begins.
- [ ] Contract-compatible fixtures cover each later integration gate without pretending that real integration is complete.
- [ ] Referenced flow behavior, permissions, endings and recovery remain unchanged.
- [ ] The output rule is satisfied: ${task.outputRule}
- [ ] Failure, retry and stale-state behavior cannot display false success.
- [ ] Required tests and evidence pass in the target environment.

## Required automated tests

${automatedTests(task).map((item) => `- [ ] ${item}`).join("\n")}

## Required manual tests

${manualTests(task).map((item) => `- [ ] ${item}`).join("\n")}

## Evidence to attach

- Passing automated-test output with build/commit identifier.
- Redacted screenshots, recordings or request/response examples proving the outcome and one recovery path.
- Dependency, environment and provider validation evidence where applicable.
- Reviewer acceptance, defect links and any residual-risk decision.

## Definition of done

- [ ] Scope and acceptance criteria are complete.
- [ ] Automated and manual tests pass with evidence.
- [ ] Security, permission, audit and provider rules are satisfied.
- [ ] The card is accepted for its stated stage; any later integration gate remains visibly owned and tracked.
- [ ] Documentation, traceability and evidence-based status are updated.

## Blockers and escalation

If a contract, design, environment, provider, permission decision or predecessor is missing, record the blocker, owner, discovery date, impact and next decision. Escalate cross-team contract conflicts to the Technical Lead, product ambiguity to Product, provider/environment issues to Infrastructure and acceptance disputes to the named reviewer. Never hide a blocker by inventing a local substitute.

## What this unlocks

${unlocks}

## Carry-over rule

Move this task to \`carried-over\` only with the unfinished acceptance criteria, evidence gap, blocker owner and destination week recorded. Do not duplicate or rewrite the task in another weekly pack.

## Commit message

\`${commitMessage(task)}\`
`;
}

function existingIds() {
  return new Set(walkTaskWeekSources(TASK_ROOT).map((document) => document.metadata.id));
}

const tasks = parseTasks();
const byId = new Map(tasks.map((task) => [task.id, task]));
for (const task of tasks) {
  task.flows = flowRefs(task);
  task.stage = stageFor(task);
  task.dependencies = taskDependencies(task, tasks);
  task.integrationGates = integrationGates(task);
  task.providerList = providers(task);
  for (const dependency of task.dependencies) if (!byId.has(dependency) && !INTEGRATION_IDS.has(dependency)) throw new Error(`${task.id}: unknown dependency ${dependency}`);
}
const dependants = new Map();
for (const task of tasks) for (const dependency of task.dependencies) {
  if (!dependants.has(dependency)) dependants.set(dependency, []);
  dependants.get(dependency).push(task.id);
}

const before = existingIds();
if (CHECK_ONLY) {
  const missing = tasks.map((task) => task.id).filter((id) => !before.has(id));
  const unknown = [...before].filter((id) => !byId.has(id) && !INTEGRATION_IDS.has(id));
  if (missing.length || unknown.length) throw new Error(`task migration incomplete; missing: ${missing.join(", ") || "none"}; unknown: ${unknown.join(", ") || "none"}`);
  const missingAdditions = [...INTEGRATION_IDS].filter((id) => !before.has(id));
  if (missingAdditions.length) throw new Error(`delivery-order additions missing: ${missingAdditions.join(", ")}`);
  console.log("Legacy task migration is complete: 120 legacy IDs and 5 integration task IDs found.");
} else {
  throw new Error("Daily task-source generation is retired. Edit the canonical team-week packs in content/tasks/ and run the Phase 3 generators.");
}
