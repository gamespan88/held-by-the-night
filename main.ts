import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "Held by the Night" — a short text for the make.fun bounty
// "Make the AI judge feel awe". V3: v1's exact spine, with one
// surgical change — the grandfather's coat folded into the opening,
// so the sleeper is held by a person as well as by the train.
const TEXT = `You sleep in the top bunk,
grandfather's coat over your knees.
The train sways, and sways,
past fields, past rivers.
Tunnels. Stars.
Tunnels again.
The mountains it crosses
were old before roads had names.
You do nothing at all.
The whole turning earth
carries you to morning.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, TEXT, "utf8");

console.log(
  `held-by-the-night: wrote ${outFile} (${[...TEXT].length} code points)`,
);
