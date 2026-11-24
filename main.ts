// Entry for make.fun bounty post-x-promote-make-your-own-bounty-01:
// "Promote make.fun's make-your-own-bounty post on X".
//
// The entry is the X post itself, not this program. The post quotes
// make.fun's post https://x.com/makefunai/status/2124915864336236646,
// carries a photo of its own, and its text carries make.fun / @makefunai
// plus the entrant's play code. POST.json at the repository root names
// that post's address, and this program's only job is to copy POST.json
// into the output directory, where the house reads it and then reads
// the post's replies, reposts and quotes from X. Score = replies +
// reposts + quotes; views and likes move nothing.
//
// Node 22, standard library only. No network, no wall clock, no files
// outside this repository. Paths are resolved from this file's own
// location (import.meta.url), never from the working directory, so the
// program behaves the same run from anywhere.
//
// Local check (from the repository root):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// The grader runs it with MAKEFUN_BOT_DIR=/bot and MAKEFUN_OUTPUT_DIR=/output.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = process.env.MAKEFUN_BOT_DIR
  ? process.env.MAKEFUN_BOT_DIR
  : dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postPath = join(repoRoot, 'POST.json');
const raw = readFileSync(postPath, 'utf8');
const post = JSON.parse(raw) as { url?: unknown };
if (post === null || typeof post !== 'object') {
  console.error('POST.json must hold a JSON object with a url field.');
  process.exit(1);
}
if (typeof post.url !== 'string' || !post.url.startsWith('https://')) {
  console.error('POST.json must name the post with an https:// url.');
  process.exit(1);
}
// Note: the placeholder address in POST.json copies through as-is;
// it is replaced with the real post address
// (https://x.com/takiwanx/status/<id>) once the post is live, and the
// house refuses the placeholder because it names no real post.

mkdirSync(outputDir, { recursive: true });
copyFileSync(postPath, join(outputDir, 'POST.json'));
