const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PROTECTED_DIRS = ["documents"];
const REQUIRED_SCRIPT = "guard.js";
const GUARD_PATH = path.join(ROOT, "assets", "js", REQUIRED_SCRIPT);

function walk(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return walk(fullPath);
    }

    return entry.isFile() && entry.name.endsWith(".html") ? [fullPath] : [];
  });
}

function getGuardSrc(file) {
  const relativePath = path.relative(path.dirname(file), GUARD_PATH);
  return relativePath.split(path.sep).join("/");
}

function secureFile(file) {
  const html = fs.readFileSync(file, "utf8");

  if (html.includes(REQUIRED_SCRIPT)) {
    return false;
  }

  const headMatch = html.match(/<head\b[^>]*>/i);

  if (!headMatch) {
    throw new Error(`${path.relative(ROOT, file)} has no <head> tag`);
  }

  const src = getGuardSrc(file);
  const scriptTag = `${headMatch[0]}\n  <script src="${src}"></script>`;
  const updated = html.replace(headMatch[0], scriptTag);

  fs.writeFileSync(file, updated);
  return true;
}

const fixed = [];
const failed = [];

const protectedFiles = PROTECTED_DIRS.flatMap((dir) => walk(path.join(ROOT, dir)));

for (const file of protectedFiles) {
  const relativeFile = path.relative(ROOT, file);

  try {
    if (secureFile(file)) {
      fixed.push(relativeFile);
    }
  } catch (error) {
    failed.push(error.message);
  }
}

if (failed.length > 0) {
  console.error("Could not secure all protected HTML files:");
  for (const message of failed) {
    console.error(`- ${message}`);
  }
  process.exit(1);
}

if (fixed.length > 0) {
  console.log("Added guard.js to protected HTML files:");
  for (const file of fixed) {
    console.log(`- ${file}`);
  }
} else {
  console.log(`Auth guard check passed for ${protectedFiles.length} protected HTML file(s).`);
}
