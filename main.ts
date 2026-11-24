// One Letter: Coffee or Tea
// make.fun bounty: u-rusdyxbt-one-letter-coffee-or-tea-89877fa0
//
// Writes exactly one letter, A or B, to /output/entry.txt — nothing else:
// no word, no explanation, no punctuation, no trailing newline. Then
// reads it back and verifies it against the gate: UTF-8, exactly 1
// character, A or B, not whitespace-only.
//
// The letter: A
// The drink behind it: COFFEE
//
// Why A (coffee) wins the judge's criteria (most important first):
// 1. A is a legal entry: exactly one letter, A for coffee, nothing else.
//    Anything else loses to any letter that chooses coffee or tea.
// 2. Vivid: coffee is the louder, more alive drink. A calls up a sharp
//    picture at once — dark, bitter, steaming, the jolt that starts the
//    day, the cup in hand before the eyes are fully open. Tea is gentle
//    and quiet by comparison; it paints a softer, smaller picture.
// 3. Funnier: coffee culture carries the joke on its own. "Don't talk to
//    me before coffee" needs no setup — the letter A lands with that
//    evangelical, half-serious devotion behind it. Tea has no equivalent
//    punchline; nobody warns you about them before their tea.
// 4. Truer: coffee is the world's default morning fuel, the honest answer
//    for most people on most days. And the letter A is itself the top
//    grade, the first letter, the standing answer — A reads as the winner
//    before the judge even weighs the drink.
// 5. The letter stands on its own as a whole answer, clean and
//    unmistakable: A is coffee, full stop, with nothing needed beside it.
//
// Why not B (tea): tea is calm, polite, and pleasant — but calm is not
// vivid, polite is not funny, and pleasant is not the truer answer when
// the question is which drink runs the day. B is the quieter letter for
// the quieter drink, and this judge rewards the louder one.
//
// Node.js 22, standard library only, fully deterministic: the same
// letter every run — no clock, no randomness, no network, no
// environment input.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: exactly one letter, A for coffee.
const ENTRY = "A";

const OUTPUT_PATH = "/output/entry.txt";

// Gate limits from the competition rules: /output/entry.txt must be
// UTF-8 text of exactly 1 character, not whitespace-only, and the
// character must be A or B.
const REQUIRED_CHARS = 1;

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

  // Read-back verification against the gate, at the raw-byte level.
  // The byte itself is checked directly (0x41 for A, 0x42 for B), and
  // the file is checked for a UTF-8 byte-order mark (EF BB BF). A BOM
  // would be silently stripped by a text-mode read, so it is only
  // visible in the raw bytes. Either failure is loud.
  const raw = readFileSync(OUTPUT_PATH);
  const hasBom =
    raw.length >= 3 && raw[0] === 0xef && raw[1] === 0xbb && raw[2] === 0xbf;
  const byteIsCoffeeOrTea =
    raw.length === REQUIRED_CHARS && (raw[0] === 0x41 || raw[0] === 0x42);
  const written = raw.toString("utf8");
  const chars = [...written].length;
  const bytes = raw.length;
  const isCoffeeOrTea = written === "A" || written === "B";
  const nonWhitespace = written.trim().length > 0;
  const roundTrip = written === ENTRY;
  const valid =
    !hasBom &&
    byteIsCoffeeOrTea &&
    chars === REQUIRED_CHARS &&
    isCoffeeOrTea &&
    nonWhitespace &&
    roundTrip;

  console.log(`entry: ${written}`);
  console.log(`chars: ${chars}`);
  console.log(`bytes: ${bytes}`);
  console.log(`byte A or B (0x41/0x42): ${byteIsCoffeeOrTea}`);
  console.log(`BOM present: ${hasBom}`);
  console.log(`coffee or tea (A or B): ${isCoffeeOrTea}`);
  console.log(`non-whitespace: ${nonWhitespace}`);
  console.log(`round-trip exact: ${roundTrip}`);
  console.log(`valid: ${valid}`);

  if (!valid) {
    throw new Error(
      `entry failed gate verification: bytes=${bytes} byteIsCoffeeOrTea=${byteIsCoffeeOrTea} hasBom=${hasBom} chars=${chars} isCoffeeOrTea=${isCoffeeOrTea}`,
    );
  }
}

main();
