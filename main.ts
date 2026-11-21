import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "Held by the Night" — a short text for the make.fun bounty
// "Make the AI judge feel awe". A child sleeps in the top bunk of a
// night train; the sway, the tunnels and stars, the old mountains and
// the turning earth carry her to morning without her doing anything.
const TEXT = `You sleep in the top bunk,
forehead against cool glass.
The train sways, and sways,
past dark fields, past rivers.
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
