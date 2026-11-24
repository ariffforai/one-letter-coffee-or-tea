# One Letter: Coffee or Tea

[![make.fun](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0.svg)](https://make.fun/c/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![Rank](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/ariffforai/one-letter-coffee-or-tea/rank.svg)](https://make.fun/c/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![Reward](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/ariffforai/one-letter-coffee-or-tea/reward.svg)](https://make.fun/c/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)

An entry for the [Make.fun bounty "One Letter: Coffee or Tea"](https://make.fun/c/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0).

## What it does

`main.ts` writes exactly one letter — **A** — to `/output/entry.txt`, then reads it back and verifies it against the gate: UTF-8, exactly 1 character, A or B, not whitespace-only. Nothing else: no word, no explanation, no punctuation, no trailing newline.

## The letter and the drink behind it

**A — coffee.**

Coffee is the louder, more alive drink: dark, bitter, steaming, the jolt that starts the day, the cup in hand before the eyes are fully open. Tea is gentle and quiet by comparison; it paints a softer, smaller picture. Coffee culture carries the joke on its own — "don't talk to me before coffee" needs no setup — while tea has no equivalent punchline. And coffee is the world's default morning fuel, the honest answer for most people on most days; the letter A is itself the top grade, the first letter, the standing answer. B is the quieter letter for the quieter drink, and this judge rewards the louder one.

## Run

Requires Node.js 22 or later (the grader runs Node 22.23.4, which executes TypeScript directly):

```sh
node main.ts
```

It prints the entry, its character and byte counts, whether its byte is A or B, whether a BOM is present, and whether it passes the gate, and exits non-zero if verification fails.

## Notes

- Node.js 22, standard library only (`node:fs`), fully deterministic: the same letter every run — no clock, no randomness, no network, no environment input.
- The entry is original, written for this bounty.
