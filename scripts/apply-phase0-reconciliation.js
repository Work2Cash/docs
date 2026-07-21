#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const DOCUMENTS = path.join(ROOT, "documents");

const hubLinks = {
  "Main Enterprise Architecture v1": "./main-enterprise-architecture-v1.html",
  "Screen To Feature Map v1": "./screen-to-feature-map-v1.html",
  "Mobile Flow Catalogue v1": "./mobile-flow-catalogue-v1.html",
  "Admin Flow Catalogue v1": "./admin-flow-catalogue-v1.html",
  "Flow Alignment Review v1": "./flow-alignment-review-v1.html",
  "Legal & User-Facing Documents Pack v1": "./legal_user_facing_documents_pack_v1.html",
  "API & Socket Contract Specification v1": "./api-socket-contract-specification-v1.html",
  "Data Model & Prisma Schema Planning v1": "./data-model-prisma-schema-planning-v1.html",
  "Provider Integration & Cost Control v1": "./provider-integration-cost-control-v1.html",
  "Mobile Build Plan v1": "./build-plan-mobile-v1.html",
  "Admin Build Plan v1": "./build-plan-admin-v1.html",
  "Backend Build Plan v1": "./build-plan-backend-v1.html",
  "QA / Go-Live Readiness Checklist v1": "./qa-go-live-readiness-checklist-v1.html",
};

const registry = JSON.parse(fs.readFileSync(path.join(ROOT, "governance", "document-registry.json"), "utf8"));
const registryMetadata = Object.fromEntries(registry.entries
  .filter((entry) => entry.artifactClass === "legacy-transitional-source"
    && entry.currentSource
    && path.dirname(entry.currentSource) === "documents"
    && entry.currentSource.endsWith(".html"))
  .map((entry) => [path.basename(entry.currentSource), entry]));

const screenFiles = [
  "documents/screen-to-feature-map-v1.html",
  "documents/agent-md/screen-to-feature-map-v1.md",
  "documents/agent-md/work2cash-full-source-of-truth-v1.md",
];

const architectureFiles = [
  "documents/main-enterprise-architecture-v1.html",
  "documents/agent-md/main-enterprise-architecture-v1.md",
  "documents/agent-md/work2cash-full-source-of-truth-v1.md",
];

function replaceAllIn(file, replacements) {
  let contents = fs.readFileSync(file, "utf8");
  let changes = 0;
  for (const [before, after] of replacements) {
    const matches = contents.split(before).length - 1;
    if (matches) {
      contents = contents.replaceAll(before, after);
      changes += matches;
    }
  }
  if (changes) fs.writeFileSync(file, contents);
  return changes;
}

let linkChanges = 0;
for (const [fileName, entry] of Object.entries(registryMetadata)) {
  const file = path.join(DOCUMENTS, fileName);
  let contents = fs.readFileSync(file, "utf8");
  for (const [label, target] of Object.entries(hubLinks)) {
    const before = `href="${label}"`;
    const after = `href="${target}"`;
    const matches = contents.split(before).length - 1;
    contents = contents.replaceAll(before, after);
    linkChanges += matches;
  }

  const statusLabel = entry.status.replaceAll("-", " ").replace(/\b\w/g, (character) => character.toUpperCase());
  const approvalLabel = entry.approval.replaceAll("-", " ").replace(/\b\w/g, (character) => character.toUpperCase());
  const notice = `<aside data-phase0-registry role="note" style="padding:10px 18px;background:#fff3df;color:#5f3700;border-bottom:1px solid #e9c46a;font:600 13px/1.5 Arial,sans-serif;text-align:center">Lifecycle: <strong>${statusLabel}</strong> · Approval: <strong>${approvalLabel}</strong> · Owner: <strong>${entry.owner}</strong> · <a href="./document-registry.html#${entry.id.toLowerCase()}" style="color:#123b78">View ${entry.id} in the Document Registry</a></aside>`;
  if (contents.includes("data-phase0-registry")) {
    contents = contents.replace(/<aside data-phase0-registry[\s\S]*?<\/aside>/, notice);
  } else {
    contents = contents.replace("<body>", `<body>\n  ${notice}`);
  }
  fs.writeFileSync(file, contents);
}

const screenReplacements = [
  ["OPay", "Moniepoint"],
  ["Days available, working hours, max distance, auto-accept.", "Days available, working hours, maximum travel distance and preferred categories; auto-accept is excluded."],
  ["Force cancel / reassign", "Controlled force cancel"],
  ["Admin cancels or reassigns problematic tasks.", "Admin may force-cancel a task under policy; admin cannot select a replacement Tasker."],
];

let staleChanges = 0;
for (const relative of screenFiles) staleChanges += replaceAllIn(path.join(ROOT, relative), screenReplacements);

const architectureReplacements = [
  ["Planned contract document for REST, socket, webhook, events, queues and response shapes.", "Published contract baseline for REST, socket, webhook, events, queues and response shapes; formal review pending."],
  ["Planned entity, relationship, enum and migration planning document.", "Published entity, relationship, enum and migration baseline; formal review pending."],
  ["Planned provider, hosting, pricing, cost guard and operations document.", "Published provider, hosting, pricing, cost guard and operations baseline; formal review pending."],
  ["Planned team-by-team build timeline and execution tracker.", "Published team-by-team build timeline and execution baseline; formal review pending."],
  ["Planned QA, launch, rollback, provider validation and go-live checklist.", "Published QA, launch, rollback, provider validation and go-live baseline; formal review pending."],
  ["Active source of truth", "Published provisional controlling baseline; formal approval pending"],
  ["Generated and aligned", "Published provisional catalogue; formal approval pending"],
  ["Generated and resolved-decision tracker", "Published provisional decision tracker; formal approval pending"],
  ["Combined pack; publish as a protected document page", "Published protected pack; formal review pending"],
  ["HTML master architecture draft. Legal pack regeneration comes after architecture sign-off.", "Published provisional architecture baseline. Formal product and technical approval remains pending; see the Document Registry."],
];

for (const relative of architectureFiles) {
  const file = path.join(ROOT, relative);
  staleChanges += replaceAllIn(file, architectureReplacements);
  let contents = fs.readFileSync(file, "utf8");
  const before = contents;
  if (relative.endsWith(".html")) {
    contents = contents.replace(/(<tr><td>(?:6|7|8|9|10)<\/td><td>[^<]+<\/td><td>)Planned(<\/td><\/tr>)/g, "$1Published; formal review pending$2");
  } else {
    contents = contents.replace(/^(\|\s*(?:6|7|8|9|10)\s*\|[^\n]*\|\s*)Planned(\s*\|)$/gm, "$1Published; formal review pending$2");
  }
  if (contents !== before) {
    fs.writeFileSync(file, contents);
    staleChanges += 1;
  }
}

console.log(`Phase 0 reconciliation applied: ${linkChanges} navigation links and ${staleChanges} stale-content occurrences corrected.`);
