import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "Held by the Night" — a short text for the make.fun bounty
// "Make the AI judge feel awe". V2: the sleeper is no longer alone —
// a grandfather sleeps opposite, his coat over her knees; the rail
// joints click and sway through the text, starlight older than the
// hills rests on her closed eyes, and the hills rise gently beneath
// the train as morning waits ahead.
const TEXT = `You sleep on the night train,
his coat over your knees.
Grandfather sleeps across.
A click. A long sway.
A click again.
Starlight older than hills
rests on your closed eyes.
Hills rise still, gently,
under the train, under you.
Morning waits in the far fields.
You are carried.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, TEXT, "utf8");

console.log(
  `held-by-the-night: wrote ${outFile} (${[...TEXT].length} code points)`,
);
