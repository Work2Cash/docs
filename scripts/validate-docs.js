#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const REGISTRY_PATH = path.join(ROOT, "governance", "document-registry.json");
const VALID_STATUS = new Set(["draft", "in-review", "approved", "active", "deprecated", "superseded", "archived"]);
const VALID_APPROVAL = new Set(["pending", "approved", "rejected", "not-required"]);
const VALID_PUBLICATION = new Set(["internal", "published", "withdrawn"]);
const VALID_CLASS = new Set(["canonical-source", "generated-output", "legacy-transitional-source", "legacy-derived-frozen"]);
const REQUIRED = ["id", "title", "type", "audience", "owner", "reviewers", "version", "status", "approval", "publication", "lastReviewed", "nextReview", "authority", "artifactClass", "currentSource", "artifacts", "migrationPhase", "supersedes", "tags", "notes"];
const problems = [];

function rel(file) {
  return path.relative(ROOT, file).split(path.sep).join("/");
}

function walk(directory, extension) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(target, extension);
    return entry.isFile() && (!extension || entry.name.endsWith(extension)) ? [target] : [];
  });
}

function resolveLocal(fromFile, reference) {
  const clean = reference.replaceAll("&amp;", "&").split("#", 1)[0].split("?", 1)[0];
  if (!clean) return fromFile;
  if (clean.startsWith("/")) return path.join(ROOT, clean.replace(/^\/docs\/?/, ""));
  return path.resolve(path.dirname(fromFile), decodeURIComponent(clean));
}

function htmlIds(contents) {
  return [...contents.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
}

function validateHtml(file) {
  const contents = fs.readFileSync(file, "utf8");
  const ids = htmlIds(contents);
  const duplicates = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  if (duplicates.length) problems.push(`${rel(file)}: duplicate ids: ${duplicates.join(", ")}`);

  if (rel(file).startsWith("documents/") && !/(?:src|href)="[^"]*assets\/js\/guard\.js"/.test(contents)) {
    problems.push(`${rel(file)}: missing document guard`);
  }

  for (const match of contents.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const reference = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|javascript:)/.test(reference)) continue;
    const target = resolveLocal(file, reference);
    if (!fs.existsSync(target) || !fs.statSync(target).isFile()) {
      problems.push(`${rel(file)}: broken local reference: ${reference}`);
      continue;
    }
    const fragment = reference.includes("#") ? decodeURIComponent(reference.slice(reference.indexOf("#") + 1)) : "";
    if (fragment && target.endsWith(".html")) {
      const targetIds = htmlIds(fs.readFileSync(target, "utf8"));
      if (!targetIds.includes(fragment)) problems.push(`${rel(file)}: missing HTML anchor: ${reference}`);
    }
  }
}

function validateMarkdownLinks(file) {
  const contents = fs.readFileSync(file, "utf8");
  const references = [
    ...[...contents.matchAll(/\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)].map((match) => match[1]),
    ...[...contents.matchAll(/\shref="([^"]+)"/g)].map((match) => match[1]),
  ];
  for (const reference of references) {
    if (/^(?:https?:|mailto:|tel:|data:|javascript:|#)/.test(reference)) continue;
    const target = resolveLocal(file, reference);
    if (!fs.existsSync(target)) problems.push(`${rel(file)}: broken Markdown reference: ${reference}`);
  }
}

function validateRegistry() {
  const registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, "utf8"));
  const ids = new Set();
  const registeredPaths = new Set();

  for (const entry of registry.entries) {
    const missing = REQUIRED.filter((key) => !(key in entry));
    if (missing.length) problems.push(`${entry.id || "unknown registry entry"}: missing fields: ${missing.join(", ")}`);
    if (ids.has(entry.id)) problems.push(`registry: duplicate id ${entry.id}`);
    ids.add(entry.id);
    if (!VALID_STATUS.has(entry.status)) problems.push(`${entry.id}: invalid status ${entry.status}`);
    if (!VALID_APPROVAL.has(entry.approval)) problems.push(`${entry.id}: invalid approval ${entry.approval}`);
    if (!VALID_PUBLICATION.has(entry.publication)) problems.push(`${entry.id}: invalid publication ${entry.publication}`);
    if (!VALID_CLASS.has(entry.artifactClass)) problems.push(`${entry.id}: invalid artifact class ${entry.artifactClass}`);
    if (!Array.isArray(entry.audience) || !entry.audience.length) problems.push(`${entry.id}: audience is required`);
    if (!Array.isArray(entry.reviewers) || !entry.reviewers.length) problems.push(`${entry.id}: reviewers are required`);
    if (!Array.isArray(entry.artifacts)) problems.push(`${entry.id}: artifacts must be an array`);
    if (!Array.isArray(entry.tags) || !entry.tags.length) problems.push(`${entry.id}: at least one tag is required`);
    if (entry.status === "active" && entry.approval !== "approved") problems.push(`${entry.id}: active documents must be approved`);
    if (["approved", "active"].includes(entry.status) && (!entry.lastReviewed || !entry.nextReview)) problems.push(`${entry.id}: approved/active documents require review dates`);
    for (const item of [entry.currentSource, ...(entry.artifacts || [])].filter(Boolean)) {
      registeredPaths.add(item);
      if (!fs.existsSync(path.join(ROOT, item))) problems.push(`${entry.id}: registered path does not exist: ${item}`);
    }
    if (entry.artifactClass === "legacy-transitional-source"
      && entry.currentSource
      && path.dirname(entry.currentSource) === "documents"
      && entry.currentSource.endsWith(".html")) {
      const contents = fs.readFileSync(path.join(ROOT, entry.currentSource), "utf8");
      const statusLabel = entry.status.replaceAll("-", " ").replace(/\b\w/g, (character) => character.toUpperCase());
      const approvalLabel = entry.approval.replaceAll("-", " ").replace(/\b\w/g, (character) => character.toUpperCase());
      const expected = `Lifecycle: <strong>${statusLabel}</strong> · Approval: <strong>${approvalLabel}</strong> · Owner: <strong>${entry.owner}</strong>`;
      if (!contents.includes(expected)) problems.push(`${entry.id}: visible HTML lifecycle banner differs from the registry`);
    }
  }

  const mustBeRegistered = [
    ...walk(path.join(ROOT, "documents"), ".html").filter((file) => path.dirname(file) === path.join(ROOT, "documents")),
    ...walk(path.join(ROOT, "documents", "agent-md"), ".md").filter((file) => path.dirname(file) === path.join(ROOT, "documents", "agent-md")),
  ];
  for (const file of mustBeRegistered) {
    if (!registeredPaths.has(rel(file))) problems.push(`registry coverage: missing top-level published artifact ${rel(file)}`);
  }
}

function validateKnownDrift() {
  const staleChecks = [
    ["OPay", ["documents/screen-to-feature-map-v1.html", "documents/agent-md/screen-to-feature-map-v1.md", "documents/agent-md/work2cash-full-source-of-truth-v1.md"]],
    ["Days available, working hours, max distance, auto-accept", ["documents/screen-to-feature-map-v1.html", "documents/agent-md/screen-to-feature-map-v1.md", "documents/agent-md/work2cash-full-source-of-truth-v1.md"]],
    ["Force cancel / reassign", ["documents/screen-to-feature-map-v1.html", "documents/agent-md/screen-to-feature-map-v1.md", "documents/agent-md/work2cash-full-source-of-truth-v1.md"]],
    ["Planned contract document for REST", ["documents/main-enterprise-architecture-v1.html", "documents/agent-md/main-enterprise-architecture-v1.md", "documents/agent-md/work2cash-full-source-of-truth-v1.md"]],
    ["HTML master architecture draft", ["documents/main-enterprise-architecture-v1.html", "documents/agent-md/main-enterprise-architecture-v1.md", "documents/agent-md/work2cash-full-source-of-truth-v1.md"]],
  ];
  for (const [phrase, files] of staleChecks) {
    for (const file of files) {
      const target = path.join(ROOT, file);
      if (fs.existsSync(target) && fs.readFileSync(target, "utf8").includes(phrase)) problems.push(`${file}: known stale phrase remains: ${phrase}`);
    }
  }

  const rootAgents = fs.readFileSync(path.join(ROOT, "AGENTS.md"), "utf8");
  const downloadAgents = fs.readFileSync(path.join(ROOT, "documents", "downloads", "AGENTS.md"), "utf8");
  if (rootAgents !== downloadAgents) problems.push("documents/downloads/AGENTS.md: downloaded instructions differ from root AGENTS.md");
}

try {
  validateRegistry();
  for (const file of [path.join(ROOT, "index.html"), path.join(ROOT, "404.html"), ...walk(path.join(ROOT, "documents"), ".html")]) validateHtml(file);
  for (const file of [path.join(ROOT, "README.md"), path.join(ROOT, "AGENTS.md"), ...walk(path.join(ROOT, "governance"), ".md")]) validateMarkdownLinks(file);
  validateKnownDrift();

  if (problems.length) {
    console.error(`Documentation validation failed with ${problems.length} problem(s):\n` + problems.map((problem) => `- ${problem}`).join("\n"));
    process.exitCode = 1;
  } else {
    const htmlCount = walk(path.join(ROOT, "documents"), ".html").length;
    console.log(`Documentation validation passed: registry metadata and ${htmlCount + 2} HTML entry points checked.`);
  }
} catch (error) {
  console.error(`Documentation validation crashed: ${error.message}`);
  process.exitCode = 1;
}
