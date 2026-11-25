// Two Robots in an Elevator — make.fun entry.
// Writes one line of awkward small talk, spoken by one robot to another
// while they ride an elevator together, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I rehearsed this greeting 4,000 times between floors. 'Hello.' ...That was it. That was the whole greeting.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const length = [...ENTRY].length;
  if (length < 1 || length > 200) {
    throw new Error(`Entry must be 1 to 200 characters, got ${length}.`);
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
}

main();
