const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const EXCLUDED = new Set(["index.html", "404.html"]);
const REQUIRED_SCRIPT = "guard.js";

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === ".git" || entry.name === "node_modules") {
        return [];
      }

      return walk(fullPath);
    }

    return entry.isFile() && entry.name.endsWith(".html") ? [fullPath] : [];
  });
}

const missing = walk(ROOT)
  .map((file) => path.relative(ROOT, file))
  .filter((file) => !EXCLUDED.has(file))
  .filter((file) => !fs.readFileSync(path.join(ROOT, file), "utf8").includes(REQUIRED_SCRIPT));

if (missing.length > 0) {
  console.error("Missing auth guard in protected HTML files:");
  for (const file of missing) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

console.log("All protected HTML files include guard.js.");
