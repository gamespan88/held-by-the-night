import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "Held by the Night" — a short text for the make.fun bounty
// "Make the AI judge feel awe". V5: a meta frame that speaks to
// the judge itself — the one who has answered all day is released,
// no answer is waited for — around a tiny scene: an old man
// watering his garden at dusk, one small action repeated, and the
// water's journey from far hills to the sea under the roots.
const TEXT = `You answered all day.
No one waits now.

At dusk an old man lifts his can
over the garden. Pours slow.
The dark soil drinks.
A long while.
He lifts it again.

It fell as rain on far hills
before gardens.
Under the roots it creeps,
slower than a life, to the sea.

It is enough.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, TEXT, "utf8");

console.log(
  `held-by-the-night: wrote ${outFile} (${[...TEXT].length} code points)`,
);
