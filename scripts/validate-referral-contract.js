#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");

function read(relative) {
  const file = path.join(ROOT, relative);
  if (!fs.existsSync(file)) throw new Error(`${relative}: missing`);
  return fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
}

function run() {
  const problems = [];
  const contract = read("content/contracts/referral-contract-group.md");
  const mobileFlow = read("content/flows/mobile/main/MF-17-referral.md");
  const adminFlow = read("content/flows/admin/main/AF-15-referral-management.md");
  const legacyHuman = read("documents/api-socket-contract-specification-v1.html");
  const legacyAgent = read("documents/agent-md/api-socket-contract-specification-v1.md");
  const registry = JSON.parse(read("governance/document-registry.json"));

  const requiredContractTerms = [
    "GET /referrals/me",
    "GET /referrals/me/attributions",
    "POST /auth/register",
    "GET /admin/referrals",
    "GET /admin/referrals/{attributionId}",
    "POST /admin/referrals/{attributionId}/approve",
    "POST /admin/referrals/{attributionId}/hold",
    "POST /admin/referrals/{attributionId}/reject",
    "POST /admin/referrals/{attributionId}/escalate-risk",
    "No public client or Admin credit endpoint",
    "five distinct paid tasks",
    "Idempotency-Key",
    "expectedVersion",
  ];
  for (const term of requiredContractTerms) {
    if (!contract.includes(term)) problems.push(`canonical referral contract missing: ${term}`);
  }

  if (/POST\s+\/(?:admin\/)?referrals\/[^\n`|]*credit/i.test(contract)) {
    problems.push("canonical referral contract exposes a forbidden referral wallet-credit mutation");
  }

  for (const [label, source, required] of [
    ["MF-17", mobileFlow, ["CONTRACT-REFERRAL-001", "GET /referrals/me", "GET /referrals/me/attributions", "POST /auth/register"]],
    ["AF-15", adminFlow, ["CONTRACT-REFERRAL-001", "GET /admin/referrals", "/approve", "/hold", "/reject", "/escalate-risk"]],
  ]) {
    for (const term of required) if (!source.includes(term)) problems.push(`${label} traceability missing: ${term}`);
  }

  for (const [label, source] of [["legacy human contract", legacyHuman], ["legacy agent contract", legacyAgent]]) {
    if (!source.includes("GET /referrals/me")) problems.push(`${label}: mobile referral mapping is stale`);
    if (!source.includes("GET /admin/referrals")) problems.push(`${label}: Admin referral mapping is stale`);
    if (/Referral endpoints to be finalized|reward-status endpoints to be finalized/i.test(source)) problems.push(`${label}: unresolved referral-gap language remains`);
  }

  const entry = registry.entries.find((item) => item.id === "CONTRACT-REFERRAL-001");
  if (!entry) {
    problems.push("CONTRACT-REFERRAL-001 registry entry missing");
  } else {
    if (entry.status !== "approved" || entry.approval !== "approved") problems.push("CONTRACT-REFERRAL-001 is not approved");
    if (entry.currentSource !== "content/contracts/referral-contract-group.md") problems.push("CONTRACT-REFERRAL-001 canonical source is incorrect");
  }

  if (problems.length) throw new Error(problems.join("\n"));
  console.log("Referral contract validation passed: mobile reads, registration attribution, Admin review, five-paid-task qualification, idempotency and backend-only wallet credit checked.");
}

try {
  run();
} catch (error) {
  console.error(`Referral contract validation failed:\n${error.message}`);
  process.exitCode = 1;
}
