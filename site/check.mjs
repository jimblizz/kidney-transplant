// Validates content.js: terms resolve, order, one peak, no identifying strings.
import { readFileSync, existsSync } from 'node:fs';

await import('./content.js');
const { events, glossary } = globalThis.CONTENT;
const RE = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
const keys = new Set(Object.keys(glossary).map(k => k.toLowerCase()));
const used = new Set();
const errors = [];
let last = -Infinity, peaks = 0;

events.forEach((e, i) => {
  for (const f of ['time', 'label', 'source', 'note', 'explain'])
    if (typeof e[f] !== 'string' || !e[f]) errors.push(`event ${i}: missing ${f}`);
  if (![0, 1, 2].includes(e.milestone)) errors.push(`event ${i}: bad milestone`);
  if (e.milestone === 2) peaks++;
  if (e.at != null) { if (e.at < last) errors.push(`event ${i}: out of order`); last = e.at; }
  for (const s of [e.note, e.explain, e.footnote ?? '', ...(e.detail ?? [])])
    for (const [, shown, key = shown] of s.matchAll(RE)) {
      used.add(key.toLowerCase());
      if (!keys.has(key.toLowerCase())) errors.push(`event ${i}: unknown term "${key}"`);
    }
});
if (peaks !== 1) errors.push(`expected exactly 1 peak milestone, found ${peaks}`);
for (const k of keys) if (!used.has(k)) errors.push(`unused glossary term "${k}"`);

const read = f => existsSync(new URL(f, import.meta.url)) ? readFileSync(new URL(f, import.meta.url), 'utf8') : '';
const blob = (read('./content.js') + read('./index.html')).toLowerCase();
const forbidden = read('./.forbidden').split('\n').map(s => s.trim().toLowerCase()).filter(Boolean);
if (!forbidden.length) errors.push('site/.forbidden missing or empty (see plan Task 1 Step 1)');
for (const w of forbidden) if (blob.includes(w)) errors.push(`forbidden string present: "${w}"`);

if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`OK: ${events.length} events, ${keys.size} terms`);
