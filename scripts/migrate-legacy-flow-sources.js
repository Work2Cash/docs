#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const FLOW_ROOT = path.join(ROOT, "content", "flows");
const CHECK_ONLY = process.argv.includes("--check");
const REVIEW_DATE = "2026-07-17";
const NEXT_REVIEW = "2026-10-17";
const CATALOGUES = [
  { platform: "mobile", file: "documents/agent-md/mobile-flow-catalogue-v1.md", main: "MF-", subflow: "SF-" },
  { platform: "admin", file: "documents/agent-md/admin-flow-catalogue-v1.md", main: "AF-", subflow: "ASF-" },
];
const PILOT_OVERRIDES = new Map([
  ["MF-06", "content/pilots/flows/mobile/MF-06-create-and-fund-task.md"],
  ["AF-04", "content/pilots/flows/admin/AF-04-kyc-review.md"],
]);

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function decode(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&nbsp;", " ");
}

function cleanText(value) {
  return decode(String(value || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " "))
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n")
    .trim();
}

function lines(value) {
  return cleanText(value).split("\n").map((line) => line.trim()).filter(Boolean);
}

function slug(value) {
  return value.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function parseTable(markdown) {
  const tableLines = markdown.split("\n").filter((line) => /^\s*\|/.test(line));
  if (tableLines.length < 3) return [];
  return tableLines.slice(2).map((line) => line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cleanText(cell)));
}

function parseCatalogue(config) {
  const raw = fs.readFileSync(path.join(ROOT, config.file), "utf8");
  const pattern = /^((?:ASF|SF|MF|AF)-\d{2})\n\n#{3,4}\s+(.+)$/gm;
  const matches = [...raw.matchAll(pattern)].filter((match) => match[1].startsWith(config.main) || match[1].startsWith(config.subflow));
  return matches.map((match, index) => {
    const id = match[1];
    const block = raw.slice(match.index, matches[index + 1]?.index || raw.length);
    const kind = id.startsWith(config.main) ? "main" : "subflow";
    const fields = new Map();
    for (const field of block.matchAll(/<td>([\s\S]*?)<\/td>\s*<td>([\s\S]*?)<\/td>/g)) {
      fields.set(cleanText(field[1]), cleanText(field[2]));
    }
    const intro = cleanText(block.match(/\*\*[^*]+\*\*\s*\n\n<\/div>\s*\n\n([\s\S]*?)\n\n<div class="table-wrap">/)?.[1]);
    const happyBlock = block.match(/#### Happy Path\s*\n\n([\s\S]*?)\n\n#### Breakpoints and Recovery/)?.[1] || "";
    const happy = [...happyBlock.matchAll(/^[-*]\s+(.+)$/gm)].map((item) => cleanText(item[1]));
    const recoveryBlock = block.match(/#### Breakpoints and Recovery\s*\n\n([\s\S]*?)(?=\n<div class="flow-head">|\n<div id=|\n## |$)/)?.[1] || "";
    const recovery = parseTable(recoveryBlock).filter((row) => row.length >= 3);
    const screens = [...block.matchAll(/<div class="(?:phone|web)-title">\s*([\s\S]*?)\s*<\/div>/g)].map((item) => cleanText(item[1]));
    const purpose = cleanText(block.match(/\*\*Purpose:\*\*\s*([^\n]+)/)?.[1]);
    const recoveryRole = cleanText(block.match(/\*\*Recovery role:\*\*\s*([^\n]+)/)?.[1]);
    const usedBy = cleanText(block.match(/\*\*Used by:\*\*\s*([^\n]+)/)?.[1]);
    return {
      id,
      title: match[2].trim(),
      platform: config.platform,
      kind,
      legacySource: config.file,
      intro: intro || purpose || `${match[2].trim()} is an approved ${config.platform} ${kind === "main" ? "flow" : "reusable subflow"}.`,
      purpose,
      recoveryRole,
      usedBy,
      fields,
      happy,
      recovery,
      screens,
    };
  });
}

function referenceIds(value) {
  return [...new Set([...String(value || "").matchAll(/\b((?:ASF|SF|MF|AF)-\d{2})\b/g)].map((match) => match[1]))];
}

function fieldLines(flow, name) {
  return lines(flow.fields.get(name) || "");
}

function allReferences(flow) {
  return [...new Set([
    ...referenceIds(flow.fields.get("Depends On")),
    ...referenceIds(flow.fields.get("Calls Subflows")),
    ...referenceIds(flow.fields.get("Possible Next Flows")),
    ...referenceIds(flow.usedBy),
  ])].filter((id) => id !== flow.id);
}

function callersFor(flow, allFlows) {
  return allFlows.filter((candidate) => candidate.id !== flow.id && [
    ...referenceIds(candidate.fields.get("Calls Subflows")),
    ...referenceIds(candidate.fields.get("Depends On")),
    ...referenceIds(candidate.usedBy),
  ].includes(flow.id));
}

function domains(flow) {
  const text = `${flow.id} ${flow.title} ${flow.intro}`.toLowerCase();
  const mappings = [
    [/login|session|totp|security|device/, "Authentication or session record"],
    [/profile|user|tasker activation|kyc/, "User, profile or KYC record"],
    [/task|rebook|catalog|category/, "Task or task-catalog record"],
    [/payment|escrow|wallet|refund|receipt|transaction|withdraw|payout|finance/, "Payment, wallet, escrow or payout record"],
    [/report|dispute|risk|warning|strike|moderation/, "Report, risk or moderation record"],
    [/support|chat|communication|call/, "Support or communication record"],
    [/notification|announcement/, "Notification or preference record"],
    [/rating|review|favorite/, "Rating, review or favorite record"],
    [/referral/, "Referral record"],
    [/config|coverage|availability|preference/, "Configuration or preference record"],
    [/media|evidence/, "Media or evidence record"],
  ];
  const found = mappings.filter(([pattern]) => pattern.test(text)).map(([, name]) => name);
  return found.length ? [...new Set(found)] : ["Relevant domain record"];
}

function forbiddenRules(flow) {
  const text = `${flow.title} ${flow.intro}`.toLowerCase();
  const rules = [
    "Do not invent an endpoint, model, provider behavior or state transition that the approved source does not define.",
    "Do not expose protected personal, identity, payment or operational data merely because a screen can render it.",
    "Do not treat frontend state as authoritative when the backend or provider owns the final result.",
  ];
  if (/payment|escrow|wallet|refund|receipt|transaction|fund/.test(text)) {
    rules.push("Do not treat a frontend payment redirect as final payment proof or introduce card-entry-first UX.");
    rules.push("Do not introduce paid-provider auto-refresh loops; use backend-controlled status and recovery.");
  }
  if (/direct offer/.test(text)) rules.push("Do not make direct offers socket-based; their state is durable REST state.");
  if (/dispute/.test(text)) rules.push("Do not turn disputes into live chat; preserve structured evidence and decisions.");
  if (flow.platform === "admin" && /task/.test(text)) rules.push("Do not add admin task reassignment; only the approved controlled actions are allowed.");
  if (/mode|profile|tasker|task owner/.test(text)) rules.push("Use `mode`; do not introduce `activeMode`.");
  return rules;
}

function metadata(flow, related) {
  const owner = flow.platform === "admin" && flow.kind === "subflow" ? "Admin Lead" : "Product Lead";
  const reviewers = flow.platform === "admin"
    ? "Technical Lead, Admin Lead, Backend Lead, QA"
    : "Technical Lead, Mobile Lead, Backend Lead, QA";
  const authority = `Approved ${flow.platform === "admin" ? "Admin" : "Mobile"} Flow Catalogue v1 behavior and approved Phase 1 standalone format`;
  return `---
id: ${flow.id}
title: ${flow.title}
type: ${flow.kind === "main" ? "main-flow" : "reusable-subflow"}
audience: Non-technical team, Junior ${flow.platform} developers, Product, QA, AI agents
owner: ${owner}
reviewers: ${reviewers}
status: approved
version: 0.1
last_reviewed: ${REVIEW_DATE}
next_review: ${NEXT_REVIEW}
authority: ${authority}
related: ${related.length ? related.join(", ") : "None"}
---`;
}

function bulletList(items, fallback) {
  return (items.length ? items : [fallback]).map((item) => `- ${item}`).join("\n");
}

function tableRows(items, render, fallback) {
  return (items.length ? items : [fallback]).map(render).join("\n");
}

function mainDocument(flow) {
  const dependencies = [...new Set([...fieldLines(flow, "Depends On"), ...fieldLines(flow, "Calls Subflows")])];
  const entry = fieldLines(flow, "Entry Trigger");
  const endings = fieldLines(flow, "Terminal States");
  const next = fieldLines(flow, "Possible Next Flows");
  const steps = flow.happy.length ? flow.happy : [
    `The ${flow.platform === "admin" ? "admin" : "user"} enters ${flow.title}.`,
    "The system loads the approved current state and validates access and prerequisites.",
    "The actor completes the documented action and the backend confirms the resulting state.",
  ];
  const screens = flow.screens.length ? flow.screens : steps.slice(0, 5).map((step, index) => `Step ${index + 1}`);
  const related = allReferences(flow);
  const rules = forbiddenRules(flow);
  const domainRows = domains(flow);
  const decisions = steps.filter((step) => /\bif\b|\bwhen\b|\botherwise\b/i.test(step));
  return `${metadata(flow, related)}

# ${flow.id} — ${flow.title}

## In plain English

${flow.intro}

In normal use, ${steps.map((step) => step.replace(/[.]$/, "").toLowerCase()).join(", then ")}. The endings, next-flow conditions and recovery routes are stated below so this page can be understood on its own.

## Why this flow exists

${flow.intro} This standalone version preserves the approved behavior while making its prerequisites, branches, outcomes and recovery visible without returning to the combined legacy catalogue.

## People and systems involved

| Actor or system | Responsibility in this flow |
| --- | --- |
| ${flow.platform === "admin" ? "Admin operator" : "Work2Cash user"} | Starts the flow, supplies permitted information and chooses the available action. |
| ${flow.platform === "admin" ? "Admin dashboard" : "Mobile application"} | Shows the current state, available choices and safe recovery guidance. |
| Work2Cash backend | Validates authority and prerequisites, applies state changes and returns the authoritative result. |
| QA and operations | Verify the documented endings, failures, privacy rules and handoffs. |

## Before this flow begins

${bulletList(dependencies, "The calling surface is available and can load the authoritative current state.")}
- The actor is authenticated and authorized wherever the approved flow requires it.
- Any record used by the flow must be read from backend truth rather than assumed from an old screen state.

## Entry points

| Entry point | When it is used |
| --- | --- |
${tableRows(entry, (item) => `| ${item} | This condition starts ${flow.id}. |`, "The actor opens the flow from its approved parent screen or recovery route.")}

## Information required

| Information | Why it is needed | Source |
| --- | --- | --- |
| Current authoritative flow state | Prevents the UI from continuing from stale or invented state. | Work2Cash backend and approved domain records. |
| Actor identity and permissions | Limits data and actions to the approved role. | Authenticated session and backend authorization. |
| Flow-specific input for ${flow.title} | Supports the documented action and decision. | Actor, prior flow or approved provider response. |

## Dependencies explained

| Dependency | What it provides here | Required state |
| --- | --- | --- |
${tableRows(dependencies, (item) => `| ${item} | Supplies a prerequisite, reusable behavior or authoritative state required by this flow. | Available and successfully completed where required. |`, "No named flow dependency; the calling surface and authoritative backend state must be available.")}

## Verbal walkthrough

${steps.map((step, index) => `${index + 1}. **${index % 2 === 0 ? (flow.platform === "admin" ? "Admin/System" : "User/System") : "System"}:** ${step}`).join("\n")}

## Decision branches

| Decision | Condition | Result | Next step |
| --- | --- | --- | --- |
${tableRows(decisions, (item, index) => `| Branch ${index + 1} | ${item} | The documented branch result becomes authoritative only after backend confirmation. | Continue to its named ending, recovery or next flow. |`, "No optional branch is named in the approved happy path; failures and terminal outcomes still follow the tables below.")}

## Records and state changes

| Record | Read, create or change | State effect |
| --- | --- | --- |
${domainRows.map((name) => `| ${name} | Read and, when the approved action succeeds, create or change | Stores the confirmed business result represented by the documented terminal state. Exact schema mapping remains controlled by the technical data source. |`).join("\n")}
| Flow checkpoint/status | Read and change | Allows safe resume and prevents an interrupted screen from claiming an unconfirmed result. |

## Side effects

| Type | Effect | Recipient or consumer |
| --- | --- | --- |
| Audit/operational evidence | Records the minimum safe evidence required for the approved action and recovery. | Authorized operations, support or QA. |
| Notification or follow-up | Produced only where the approved flow calls for another person/system to act. | The named next-flow participant or backend worker. |

## Possible endings

| Ending | What it means | User impact | Follow-up required |
| --- | --- | --- | --- |
${tableRows(endings, (item) => `| ${item} | ${flow.id} has reached this approved terminal result. | The actor sees the confirmed result or safe blocked state. | Use only the matching next-flow or recovery condition below. |`, "Completed, safely blocked, failed/retry or abandoned according to backend truth.")}

## What happens next

| Condition | Next flow or destination | Why |
| --- | --- | --- |
${tableRows(next, (item) => `| Select this handoff only after ${flow.id} reaches the ending that requires ${item}; an admin destination also requires RBAC, and a mobile destination requires the backend-required or user-selected action. | ${item} | Continues the approved journey without implying that every ending uses the same destination. |`, "Return to the calling surface only after the backend confirms the current ending; otherwise remain in recovery.")}

## Failure and recovery

| Failure | What the person sees | Recovery | How the original flow resumes |
| --- | --- | --- | --- |
${tableRows(flow.recovery, (row) => `| ${row[0]} | A clear blocked or failed state; no unconfirmed success is shown. | ${row[1]} | ${row[2]} The flow re-enters at the last valid checkpoint. |`, ["Network, validation or state failure", "Safe error without false success", "Retry or named recovery after authoritative state refresh"])}

## Business rules

- Preserve the approved entry trigger, sequence, endings and handoffs from ${flow.legacySource}.
- Backend state is authoritative for permissions, payments, provider results and terminal outcomes.
- A retry must not duplicate a successful mutation or erase a later confirmed state.
- The actor must receive a clear result or named recovery path; blank and ambiguous endings are not acceptable.

## Forbidden behavior

${rules.map((rule) => `- ${rule}`).join("\n")}

## Screen sequence

| Order | Screen | Purpose | Next condition |
| --- | --- | --- | --- |
${screens.map((screen, index) => `| ${index + 1} | ${screen} | Represents step ${Math.min(index + 1, steps.length)} of the approved flow. | Continue only after the current input or backend state is valid. |`).join("\n")}

## Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| API | API and Socket Contract Specification v1, matched by behavior and title during Phase 4 | Provide authoritative reads/mutations. Existing ID-to-title traceability conflicts must not be imported silently. |
| Data | Data Model and Prisma Schema Planning v1 | Store the domain and checkpoint state represented above. |
| UI | ${flow.platform === "admin" ? "Admin dashboard" : "Mobile application"} | Present the sequence, branches, endings and recovery without redefining backend truth. |
| Provider/socket | Only where the approved source explicitly requires it | Supply external/durable events without frontend invention or paid auto-refresh loops. |

## Acceptance criteria

- [ ] A non-technical reader can explain the purpose, prerequisite, sequence, endings and next-flow conditions from this page alone.
- [ ] A junior developer can identify the actor, backend authority, state effect and every recovery/re-entry path.
- [ ] The implementation preserves every approved happy-path step and terminal state.
- [ ] No failure displays success before the authoritative result exists.
- [ ] Every next flow is selected by a stated ending/permission/action condition.

## Required tests

- [ ] Happy path: ${steps.join("; ")}.
${(flow.recovery.length ? flow.recovery : [["Network, validation or state failure"]]).map((row) => `- [ ] Recovery: ${row[0]}.`).join("\n")}
- [ ] Every documented terminal state and next-flow selection condition.
- [ ] Authentication, permission, privacy and stale-state behavior.
- [ ] Retry/re-entry does not duplicate or reverse a confirmed outcome.

## Out of scope

- Redefining the approved product behavior while restructuring it for readability.
- Inventing final endpoint DTOs, database columns or provider behavior where Phase 4 has not reconciled them.
- Implementing application code or claiming that an approved documentation flow is deployed.
`;
}

function subflowDocument(flow, allFlows) {
  const callers = callersFor(flow, allFlows);
  const explicitCallers = flow.usedBy ? [flow.usedBy] : [];
  const callerLabels = callers.map((caller) => `${caller.id} — ${caller.title}`);
  const calledBy = [...new Set([...callerLabels, ...explicitCallers])];
  const inputs = fieldLines(flow, "Depends On");
  const outputs = fieldLines(flow, "Terminal States");
  const next = fieldLines(flow, "Possible Next Flows");
  const steps = flow.happy.length ? flow.happy : [
    "The calling flow passes the current record, actor context and requested operation.",
    `The system validates access and performs ${flow.purpose || flow.title}.`,
    "The subflow returns a confirmed success result or a safe failure/recovery result to the caller.",
  ];
  const related = [...new Set([...allReferences(flow), ...callers.map((caller) => caller.id)])];
  return `${metadata(flow, related)}

# ${flow.id} — ${flow.title}

## In plain English

${flow.intro}${flow.recoveryRole ? ` ${flow.recoveryRole}` : ""}

## Why it is reusable

Multiple approved flows need this behavior or recovery pattern. Keeping it in ${flow.id} gives every caller the same inputs, result meaning, privacy rules and safe return behavior.

## Called by

| Calling flow | When it calls this subflow | Return destination |
| --- | --- | --- |
${tableRows(calledBy, (item) => `| ${item} | When the caller needs ${flow.title.toLowerCase()} to continue or recover safely. | The caller's last valid checkpoint after a confirmed result. |`, "Any approved parent flow that explicitly names this reusable subflow.")}

## Inputs

| Input | Source | Required validation |
| --- | --- | --- |
${tableRows(inputs, (item) => `| ${item} | Calling flow or authoritative backend state | Must exist, belong to the authorized actor and still be current. |`, "Calling-flow context, actor/session and relevant authoritative record")}

## Steps

${steps.map((step, index) => `${index + 1}. **${index === 0 ? "Caller" : "System/Actor"}:** ${step}`).join("\n")}

## Outputs

| Output | Consumer | Meaning |
| --- | --- | --- |
${tableRows(outputs, (item) => `| ${item} | Calling flow | Confirmed terminal result returned by ${flow.id}. |`, "Confirmed success, safe failure/retry or abandoned result")}

## Success return behavior

${next.length ? `After success, ${flow.id} returns control according to: ${next.join("; ")}.` : `${flow.id} returns to the calling flow at its next approved step.`} The caller refreshes authoritative state before presenting the result.

## Failure return behavior

${flow.recovery.length ? flow.recovery.map((row) => `- **${row[0]}:** ${row[1]}. ${row[2]}`).join("\n") : `- ${flow.recoveryRole || "Return a clear safe failure, retry or abandonment result without changing the caller's last confirmed state."}`}
- The caller resumes at its last valid checkpoint and never assumes the subflow succeeded.

## Permissions and sensitive data

- The calling flow's authentication and permission scope continues to apply inside this subflow.
- Return only the minimum result the caller needs; do not leak protected identity, address, evidence, payment or operational data.
- Logs and errors must not contain credentials, secrets, raw provider payloads or unrestricted personal data.
- Frontend loading or navigation is not proof that the backend operation succeeded.

## Implementation map

| Surface | References | Responsibility |
| --- | --- | --- |
| UI | Shared ${flow.platform} subflow component/state | Present consistent input, result and recovery behavior to every caller. |
| API/data | Applicable API and data-domain sources, reconciled during Phase 4 | Validate input and return authoritative, reusable output without inventing an ID mapping. |
| Caller contract | The \`Called by\`, \`Inputs\`, \`Outputs\` and return sections above | Defines how parent flows enter and resume this subflow. |

## Acceptance criteria

- [ ] Every named caller can enter ${flow.id} with a clear input and receive a clear success or safe failure result.
- [ ] Success returns to the caller's named next step; failure returns to its last valid checkpoint.
- [ ] A non-technical reader can explain what the subflow repairs and a junior developer can explain its caller contract.
- [ ] No caller bypasses authentication, permission, privacy or backend-authority rules.

## Required tests

- [ ] Successful use from each caller category.
- [ ] Missing/invalid input and insufficient permission.
- [ ] Network interruption, retry, abandonment and re-entry.
- [ ] Duplicate submission or late result cannot corrupt a later confirmed caller state.
- [ ] Sensitive-data and error-log redaction.
`;
}

function promotePilot(raw) {
  let result = raw.replace(/^status:\s*.+$/m, "status: approved");
  if (!/^next_review:/m.test(result)) result = result.replace(/^(last_reviewed:\s*.+)$/m, `$1\nnext_review: ${NEXT_REVIEW}`);
  return result;
}

function existingIds() {
  const result = new Set();
  function walk(directory) {
    if (!fs.existsSync(directory)) return;
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const target = path.join(directory, entry.name);
      if (entry.isDirectory()) walk(target);
      else if (entry.name.endsWith(".md")) {
        const id = fs.readFileSync(target, "utf8").match(/^id:\s*(.+)$/m)?.[1].trim();
        if (id) result.add(id);
      }
    }
  }
  walk(FLOW_ROOT);
  return result;
}

function targetFor(flow) {
  const directory = path.join(FLOW_ROOT, flow.platform, flow.kind === "main" ? "main" : "subflows");
  return path.join(directory, `${flow.id}-${slug(flow.title)}.md`);
}

function run() {
  const flows = CATALOGUES.flatMap(parseCatalogue);
  const ids = new Set(flows.map((flow) => flow.id));
  if (flows.length !== 72 || ids.size !== 72) throw new Error(`expected 72 unique legacy flows, found ${flows.length} rows and ${ids.size} IDs`);
  const existing = existingIds();
  if (CHECK_ONLY) {
    const missing = flows.filter((flow) => !existing.has(flow.id));
    if (missing.length) throw new Error(`missing canonical flow sources: ${missing.map((flow) => flow.id).join(", ")}`);
    console.log("Legacy flow migration is complete: 72 canonical IDs found.");
    return;
  }

  let created = 0;
  for (const flow of flows) {
    if (existing.has(flow.id)) continue;
    const target = targetFor(flow);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    const pilot = PILOT_OVERRIDES.get(flow.id);
    const contents = pilot
      ? promotePilot(fs.readFileSync(path.join(ROOT, pilot), "utf8"))
      : flow.kind === "main" ? mainDocument(flow) : subflowDocument(flow, flows);
    fs.writeFileSync(target, contents.trimEnd() + "\n");
    existing.add(flow.id);
    created += 1;
  }
  console.log(`Created ${created} canonical flow sources; ${existing.size} total IDs now exist.`);
}

try {
  run();
} catch (error) {
  console.error(`Legacy flow migration failed: ${error.message}`);
  process.exitCode = 1;
}
