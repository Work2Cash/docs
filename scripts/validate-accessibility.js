#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const problems = [];

function posix(value) {
  return value.split(path.sep).join("/");
}

function walk(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(target);
    return entry.isFile() && entry.name.endsWith(".html") ? [target] : [];
  });
}

function count(contents, pattern) {
  return [...contents.matchAll(pattern)].length;
}

function stripTags(value) {
  return value.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}

function validateControls(file, contents) {
  for (const match of contents.matchAll(/<(input|select|textarea)\b[^>]*>/g)) {
    const tag = match[0];
    if (/type="hidden"/.test(tag)) continue;
    if (/aria-label(?:ledby)?="[^"]+"/.test(tag)) continue;
    const id = tag.match(/\sid="([^"]+)"/)?.[1];
    if (id && new RegExp(`<label\\b[^>]*for="${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`).test(contents)) continue;
    const before = contents.slice(0, match.index);
    const openLabel = before.lastIndexOf("<label");
    const closeLabel = before.lastIndexOf("</label>");
    if (openLabel > closeLabel && contents.indexOf("</label>", match.index) >= 0) continue;
    problems.push(`${posix(path.relative(ROOT, file))}: ${match[1]} has no accessible label`);
  }
}

function validateFile(file) {
  const relative = posix(path.relative(ROOT, file));
  const contents = fs.readFileSync(file, "utf8");
  if (!/^<!doctype html>/i.test(contents.trimStart())) problems.push(`${relative}: missing HTML5 doctype`);
  if (!/<html\b[^>]*\blang="en"/i.test(contents)) problems.push(`${relative}: missing lang="en"`);
  if (!/<meta\s+charset="utf-8"/i.test(contents)) problems.push(`${relative}: missing UTF-8 charset`);
  if (!/<meta\b[^>]*name="viewport"[^>]*content="width=device-width,\s*initial-scale=1"/i.test(contents)) problems.push(`${relative}: missing responsive viewport`);
  if (!/<title>[^<]+<\/title>/i.test(contents)) problems.push(`${relative}: missing non-empty title`);
  if (count(contents, /<h1\b/gi) !== 1) problems.push(`${relative}: expected exactly one h1`);
  if (!/<main\b/i.test(contents)) problems.push(`${relative}: missing main landmark`);
  if (!/class="[^"]*\bskip-link\b[^"]*"/i.test(contents)) problems.push(`${relative}: missing skip link`);
  if (/\stabindex="[1-9]\d*"/i.test(contents)) problems.push(`${relative}: positive tabindex is not allowed`);
  for (const image of contents.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\salt="[^"]*"/i.test(image[0])) problems.push(`${relative}: image is missing alt text`);
  }
  for (const button of contents.matchAll(/<button\b[^>]*>([\s\S]*?)<\/button>/gi)) {
    if (!stripTags(button[1]) && !/aria-label(?:ledby)?="[^"]+"/i.test(button[0])) problems.push(`${relative}: button has no accessible name`);
  }
  validateControls(file, contents);
}

const activeRoots = [
  path.join(ROOT, "documents", "flows"),
  path.join(ROOT, "documents", "planning"),
  path.join(ROOT, "documents", "technical"),
  path.join(ROOT, "documents", "assurance"),
  path.join(ROOT, "documents", "contracts"),
  path.join(ROOT, "documents", "pilots"),
];
const files = [
  path.join(ROOT, "index.html"),
  path.join(ROOT, "documents", "document-registry.html"),
  ...activeRoots.flatMap(walk),
];

for (const file of [...new Set(files)].sort()) validateFile(file);

if (problems.length) {
  console.error(`Accessibility validation failed with ${problems.length} problem(s):\n${problems.map((problem) => `- ${problem}`).join("\n")}`);
  process.exitCode = 1;
} else {
  console.log(`Accessibility validation passed for ${new Set(files).size} current human pages.`);
}
