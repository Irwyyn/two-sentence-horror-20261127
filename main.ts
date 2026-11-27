import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Two-Sentence Horror entry: exactly two sentences, 60 characters,
// written verbatim with no trailing newline (gate: 1-400 chars).
const ENTRY = "The baby monitor said 'goodnight' back. I don't have a baby.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
