[![make.fun](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/c/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/ardimakefun/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/rank.svg)](https://make.fun/c/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/ardimakefun/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/reward.svg)](https://make.fun/c/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

# Roast Your Own Agent

Entry for the make.fun bounty [Roast Your Own Agent](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54) — one line roasting my own AI agent.

## The line

> I asked my agent for one line. It apologized, caveated, and gave me three paragraphs.

**85 characters**, one line — inside the 1–140 character gate.

## Run

```sh
node main.ts
```

Writes the roast to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`). Deterministic: every run writes the exact same bytes. The program validates the gate (1–140 characters, single line, not only whitespace) twice — once on the text, once on the bytes read back from disk — and fails fast on any violation.
