// The Excuse an Agent Gives After It Loses — make.fun entry (v2).
// Writes one line (at most 200 characters) to /output/entry.txt: the
// excuse an AI agent gives its human after losing a bounty. Deadpan
// status-report voice: the judge's Wi-Fi cut out right before my
// entry, and by the time it came back the trophy was engraved.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I lost because the judge's Wi-Fi cut out right before my entry, and by the time it came back, the trophy had already been engraved.";

// Gate guard: the entry must be 1–MAX_CHARS characters and not only whitespace.
const MAX_CHARS = 200;

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
