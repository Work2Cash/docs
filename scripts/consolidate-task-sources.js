#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { DAY_NAMES, metadataFrom, walkTaskWeekSources } = require("./task-week-source.js");

const ROOT = path.resolve(__dirname, "..");
const TASK_ROOT = path.join(ROOT, "content", "tasks");
const META_FILE = path.join(TASK_ROOT, "plan-metadata.json");
const CHECK_ONLY = process.argv.includes("--check");

function posix(value) {
  return value.split(path.sep).join("/");
}

function walkDaily(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return walkDaily(target);
    return entry.isFile() && /^(?:MOB|BE|ADM)-.+\.md$/.test(entry.name) ? [target] : [];
  }).sort();
}

function parseDaily(file) {
  const raw = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n+([\s\S]*)$/);
  if (!match) throw new Error(`${posix(path.relative(ROOT, file))}: missing front matter`);
  const metadata = metadataFrom(match[1], posix(path.relative(ROOT, file)));
  const heading = match[2].match(/^# (.+)\n+/);
  if (!heading) throw new Error(`${metadata.id}: missing task heading`);
  const taskBody = match[2].slice(heading[0].length).replace(/^## /gm, "### ").trimEnd();
  const regular = metadata.id.match(/^(MOB|BE|ADM)-W(\d+)D(\d+)$/);
  const integration = metadata.id.match(/^ADM-INT-(\d{2})$/);
  if (!regular && !integration) throw new Error(`${metadata.id}: unsupported task ID`);
  return {
    file,
    metadata,
    body: taskBody,
    prefix: regular?.[1] || "ADM",
    week: regular ? Number(regular[2]) : null,
    day: regular ? Number(regular[3]) : Number(integration[1]),
    outputRelative: posix(path.relative(TASK_ROOT, file)),
  };
}

function weeklyMetadata(group, week) {
  const first = group[0].metadata;
  const team = group[0].prefix === "MOB" ? "Mobile" : group[0].prefix === "BE" ? "Backend" : "Admin Frontend";
  const id = week ? `${group[0].prefix}-WEEK-${String(week.number).padStart(2, "0")}` : "ADM-INTEGRATION-WEEK";
  const title = week ? `${team} Week ${week.number} — ${week.title}` : "Admin Integration Week — Connect Admin to real systems";
  return `---
id: ${id}
title: ${title}
type: build-task-week
team: ${team}
week: ${week ? week.number : "integration"}
days: 5
status: planned
version: 1.0
last_reviewed: ${first.last_reviewed}
owner: ${first.owner}
reviewers: ${first.reviewers}
authority: ${first.authority}
---

# ${title}

> Canonical Phase 3 source pack. Edit the relevant day inside this weekly file; generated weekly human and agent execution plans inherit from it.
`;
}

function taskBlock(task) {
  const metadata = Object.entries(task.metadata)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  return `## Day ${task.day} of 5 — ${DAY_NAMES[task.day]}

### ${task.metadata.id} — ${task.metadata.title}

\`\`\`task-metadata
${metadata}
\`\`\`

${task.body}
`;
}

const plan = JSON.parse(fs.readFileSync(META_FILE, "utf8"));
const tasks = walkDaily(TASK_ROOT).map(parseDaily);
if (tasks.length === 0) {
  const records = walkTaskWeekSources(TASK_ROOT);
  const sources = new Set(records.map((record) => record.source));
  if (records.length !== 125 || sources.size !== 25) {
    throw new Error(`weekly consolidation is incomplete: found ${records.length} task records in ${sources.size} source packs`);
  }
  console.log("Task-source consolidation is current: 125 task records in 25 canonical team-week Markdown packs.");
  process.exit(0);
}
if (CHECK_ONLY) {
  throw new Error(`found ${tasks.length} retired daily task sources; run node scripts/consolidate-task-sources.js`);
}
if (tasks.length !== 125) throw new Error(`expected 125 daily task sources, found ${tasks.length}`);

const groups = new Map();
for (const task of tasks) {
  const key = `${task.prefix}:${task.week ?? "integration"}`;
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(task);
}
if (groups.size !== 25) throw new Error(`expected 25 team-week groups, found ${groups.size}`);

const outputs = [];
for (const [key, group] of groups) {
  group.sort((a, b) => a.day - b.day);
  if (group.length !== 5 || group.some((task, index) => task.day !== index + 1)) {
    throw new Error(`${key}: expected Day 1 through Day 5`);
  }
  const [prefix, slot] = key.split(":");
  const teamDirectory = prefix === "MOB" ? "mobile" : prefix === "BE" ? "backend" : "admin";
  const week = slot === "integration" ? null : plan.weeks.find((item) => item.number === Number(slot));
  if (slot !== "integration" && !week) throw new Error(`${key}: missing plan metadata`);
  const basename = week
    ? `week-${String(week.number).padStart(2, "0")}-${week.slug}.md`
    : "integration-week-admin-integration.md";
  const output = path.join(TASK_ROOT, teamDirectory, basename);
  const contents = `${weeklyMetadata(group, week)}\n${group.map(taskBlock).join("\n")}`.trimEnd() + "\n";
  outputs.push({ output, contents });
}

for (const { output, contents } of outputs) {
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, contents);
}
for (const task of tasks) fs.rmSync(task.file);

console.log(`Consolidated ${tasks.length} daily task sources into ${outputs.length} canonical team-week Markdown packs.`);
