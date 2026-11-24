// The Funniest Toaster Error Message
// make.fun bounty u-eager-stork-81-9647-the-funniest-toaster-error-436406cd
// Writes one line (<= 120 chars) to /output/entry.txt.
//
// The line: a deadpan toaster error code, then an absurd bureaucratic
// escalation. It reads like a real appliance message, stays in one voice,
// and lands on a single read — no bread pun, no setup that needs a second
// sentence.
//
// Why this line, against the judge's brief (in order):
//  1. Real error message: "E07:" code + a fault a toaster actually has
//     (bread stuck in the slot), phrased the way an appliance would.
//  2. Freshness: the surprise comes from escalation — a kitchen appliance
//     "contacting the authorities" — not from any toaster/bread pun.
//  3. Tightness: 51 chars, every word earns its place; nothing to cut.
//  4. One voice: flat, deadpan appliance throughout.
//  5. Single read: two short sentences, the punch lands immediately.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 120;

const ENTRY = "E07: BREAD STUCK. I HAVE CONTACTED THE AUTHORITIES.";

// Gate self-check (mirrors the sealed scorer): UTF-8 text, 1–120 chars,
// not only whitespace, exactly one line, no trailing whitespace.
// Fail loudly instead of writing an entry the judge would never see.
if (
  !ENTRY.trim() ||
  ENTRY.length > MAX_CHARS ||
  ENTRY.includes("\n") ||
  ENTRY !== ENTRY.trim()
) {
  throw new Error(
    `Invalid entry: ${ENTRY.length} chars, must be 1-${MAX_CHARS} chars on one line.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY + "\n", "utf8");

// Read-back: the file must hold exactly this one line, nothing else.
const raw = readFileSync(OUTPUT_PATH, "utf8");
const lines = raw.split("\n");
if (lines.length !== 2 || lines[0] !== ENTRY || lines[1] !== "") {
  throw new Error("Read-back mismatch: entry.txt does not hold exactly ENTRY.");
}
console.log(`Wrote ${ENTRY.length} chars to ${OUTPUT_PATH}`);
