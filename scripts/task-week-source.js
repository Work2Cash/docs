"use strict";

const fs = require("node:fs");
const path = require("node:path");

const DAY_NAMES = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function posix(value) {
  return value.split(path.sep).join("/");
}

function metadataFrom(block, label) {
  const metadata = {};
  for (const line of block.split("\n")) {
    const separator = line.indexOf(":");
    if (separator < 1) throw new Error(`${label}: invalid metadata line: ${line}`);
    metadata[line.slice(0, separator).trim()] = line.slice(separator + 1).trim();
  }
  return metadata;
}

function parseTaskWeekSource(file, taskRoot) {
  const raw = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  const outer = raw.match(/^---\n([\s\S]*?)\n---\n+([\s\S]*)$/);
  const label = posix(path.relative(taskRoot, file));
  if (!outer) throw new Error(`${label}: missing weekly front matter`);
  const weekMetadata = metadataFrom(outer[1], label);
  if (weekMetadata.type !== "build-task-week") {
    throw new Error(`${label}: expected type build-task-week, found ${weekMetadata.type || "none"}`);
  }
  if (weekMetadata.days !== "5") throw new Error(`${label}: weekly sources must declare days: 5`);

  const body = outer[2];
  const headings = [...body.matchAll(/^## Day ([1-5]) of 5 — (Monday|Tuesday|Wednesday|Thursday|Friday)$/gm)];
  if (headings.length !== 5) throw new Error(`${label}: expected five Day 1–5 sections, found ${headings.length}`);

  const documents = headings.map((heading, index) => {
    const day = Number(heading[1]);
    if (day !== index + 1 || heading[2] !== DAY_NAMES[day]) {
      throw new Error(`${label}: days must appear once in Monday-to-Friday order`);
    }
    const start = heading.index + heading[0].length;
    const end = index + 1 < headings.length ? headings[index + 1].index : body.length;
    const chunk = body.slice(start, end).trim();
    const task = chunk.match(/^### ((?:MOB|BE|ADM)-W\d+D\d+|ADM-INT-\d{2}) — (.+)\n\n```task-metadata\n([\s\S]*?)\n```\n\n([\s\S]+)$/);
    if (!task) throw new Error(`${label}: Day ${day} has an invalid task block`);
    const metadata = metadataFrom(task[3], `${label} Day ${day}`);
    if (metadata.id !== task[1] || metadata.title !== task[2]) {
      throw new Error(`${label}: Day ${day} heading and task metadata do not match`);
    }
    const expectedDay = metadata.id.startsWith("ADM-INT-")
      ? Number(metadata.id.slice(-2))
      : Number(metadata.id.match(/D(\d+)$/)?.[1]);
    if (expectedDay !== day) throw new Error(`${label}: ${metadata.id} is in Day ${day}`);
    const regular = metadata.id.match(/^(MOB|BE|ADM)-W(\d+)D(\d+)$/);
    if (weekMetadata.week === "integration") {
      if (!metadata.id.startsWith("ADM-INT-")) {
        throw new Error(`${label}: the Integration Week may contain only ADM-INT tasks`);
      }
    } else if (!regular || Number(regular[2]) !== Number(weekMetadata.week)) {
      throw new Error(`${label}: ${metadata.id} does not belong to Week ${weekMetadata.week}`);
    }
    const expectedPrefix = weekMetadata.team === "Mobile"
      ? "MOB"
      : weekMetadata.team === "Backend"
        ? "BE"
        : weekMetadata.team === "Admin Frontend"
          ? "ADM"
          : null;
    if (!expectedPrefix || !metadata.id.startsWith(`${expectedPrefix}-`)) {
      throw new Error(`${label}: ${metadata.id} does not belong to ${weekMetadata.team}`);
    }
    const taskBody = `# ${metadata.id} — ${metadata.title}\n\n${task[4].replace(/^### /gm, "## ").trimEnd()}\n`;
    return {
      source: file,
      relative: `${path.basename(path.dirname(file))}/${metadata.id}.md`,
      metadata,
      body: taskBody,
      weekMetadata,
      day,
    };
  });

  const ids = new Set(documents.map((document) => document.metadata.id));
  if (ids.size !== documents.length) throw new Error(`${label}: duplicate task IDs`);
  return documents;
}

function walkTaskWeekSources(taskRoot) {
  if (!fs.existsSync(taskRoot)) return [];
  const files = fs.readdirSync(taskRoot, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(taskRoot, entry.name);
    if (!entry.isDirectory()) return [];
    return fs.readdirSync(target, { withFileTypes: true })
      .filter((child) => child.isFile() && child.name.endsWith(".md"))
      .map((child) => path.join(target, child.name));
  }).sort();
  return files.flatMap((file) => parseTaskWeekSource(file, taskRoot));
}

module.exports = {
  DAY_NAMES,
  metadataFrom,
  parseTaskWeekSource,
  walkTaskWeekSources,
};
