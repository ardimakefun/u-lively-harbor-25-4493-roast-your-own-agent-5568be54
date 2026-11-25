// Roast Your Own Agent — writes one original one-line roast to entry.txt.
//
// Deterministic: the same exact text is written on every run. No network,
// no randomness, no environment access except MAKEFUN_OUTPUT_DIR.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "I asked my agent for one line. It apologized, caveated, and gave me three paragraphs.";

// Gate validation (fail-fast, exit non-zero on failure):
// entry.txt must be UTF-8 text of 1 to 140 characters, a single line,
// and not only whitespace. Checked twice: once on the text, once on the
// bytes read back from disk after writing.
function validate(text: string, label: string): void {
  const length = [...text].length;
  if (length < 1 || length > 140) {
    throw new Error(`${label}: roast must be 1-140 characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error(`${label}: roast must not be only whitespace`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error(`${label}: roast must be a single line`);
  }
}

function main(): void {
  validate(ROAST, "roast");

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ROAST, "utf8");

  const readBack = readFileSync(outPath, "utf8");
  validate(readBack, "read-back");
  if (readBack !== ROAST) {
    throw new Error("read-back: bytes on disk differ from roast text");
  }
}

main();
