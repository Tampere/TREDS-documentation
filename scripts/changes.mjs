// Per-component change history from the TREDS CHANGELOG. The package doesn't ship the
// CHANGELOG, so it is read from the repo this demo sits in.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const file = process.env.TREDS_CHANGELOG ?? '../../CHANGELOG.md';
const entries = [];

if (existsSync(file)) {
  let release;
  for (const line of readFileSync(file, 'utf8').split('\n')) {
    const heading = line.match(/^## \[(\d+\.\d+\.\d+)\] - (\S+)/);
    if (heading) release = { version: heading[1], date: heading[2] };
    else if (line.startsWith('## ')) release = undefined; // [Unreleased]
    if (!release || !line.startsWith('- ')) continue;

    const text = line.slice(2);
    const bold = text.match(/^\*\*(.+?)\*\*/);
    // A new-component entry bolds only the name ("**`Badge`** — a non-interactive …"),
    // so its summary continues into the first sentence after the dash.
    const nameOnly = bold && /^`[A-Za-z]+`$/.test(bold[1]);
    const summary = (
      nameOnly
        ? `${bold[1]}: ${
            text
              .slice(bold[0].length)
              .replace(/^\s*—\s*/, '')
              .split(/ \(\[#|\. /)[0]
          }`
        : bold
          ? bold[1]
          : text.split(/ \(\[#|\. /)[0]
    )
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/\.$/, '');
    entries.push({
      ...release,
      summary,
      issue: text.match(/\[#(\d+)\]/)?.[1],
      mentions: [...new Set([...text.matchAll(/`([A-Z][A-Za-z]+)`/g)].map((m) => m[1]))],
    });
  }
} else {
  console.warn(`changes: ${file} not found, component pages show no change history`);
}

mkdirSync('src/generated', { recursive: true });
writeFileSync('src/generated/changes.json', JSON.stringify(entries, null, 2) + '\n');
console.log(`changes: ${entries.length} entries`);
