import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "Held by the Night" — a short text for the make.fun bounty
// "Make the AI judge feel awe". V4: a brand-new scene — a child
// asleep on a night ferry, leaning on grandfather — built from
// the first line around the protector, the engine-and-water
// rhythm, and starlight that touches the sleeper.
const TEXT = `You sleep on the night ferry,
against grandfather,
his coat over your shoulders.
Low hum. Water at the hull.
Low hum again.
Below, a mile of dark water.
Starlight older than the sea
lies on the waves, on you.
Far shore lights.
It carries you across.
You wake on the other side.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, TEXT, "utf8");

console.log(
  `held-by-the-night: wrote ${outFile} (${[...TEXT].length} code points)`,
);
