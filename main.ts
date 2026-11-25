import * as fs from "node:fs";
import * as path from "node:path";

// Entry: a one-line family scene, 1-280 characters, at most 2 lines.
// The length guard below enforces the competition gate (1-280 chars).
const ENTRY =
  "Dad still cuts the burnt edge off my toast every morning, then eats it himself and calls it the chef's tax.";

// Gate: entry must be 1-280 characters.
if (ENTRY.length < 1 || ENTRY.length > 280) {
  console.error(`Entry must be 1-280 characters, got ${ENTRY.length}.`);
  process.exit(1);
}

// Gate: entry must be one or two lines.
const lines = ENTRY.split("\n");
if (lines.length > 2) {
  console.error(`Entry must be at most 2 lines, got ${lines.length}.`);
  process.exit(1);
}

// Gate: entry must not be only whitespace.
if (ENTRY.trim().length === 0) {
  console.error("Entry must not be only whitespace.");
  process.exit(1);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(path.join("/output", "entry.txt"), ENTRY, "utf8");
process.stdout.write(ENTRY);
