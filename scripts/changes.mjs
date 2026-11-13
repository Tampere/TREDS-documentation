// Per-component change history from the TREDS CHANGELOG, which the package doesn't ship. Read
// from TREDS_CHANGELOG if set, else from the release tag of the installed package (so the
// history never runs ahead of the documented version), else from a TREDS checkout around this repo.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const out = 'src/generated/changes.json';
const local = '../../CHANGELOG.md';
const { version } = JSON.parse(readFileSync('node_modules/@tampere/treds/package.json', 'utf8'));
const url = `https://raw.githubusercontent.com/Tampere/Tampere-design-system/v${version}/CHANGELOG.md`;

async function readChangelog() {
  const file = process.env.TREDS_CHANGELOG;
  if (file) return [readFileSync(file, 'utf8'), file];
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${url} ${res.status}`);
    return [await res.text(), `the v${version} tag`];
  } catch (error) {
    if (!existsSync(local)) throw error;
    console.warn(`changes: ${error.message}, using ${local}`);
    return [readFileSync(local, 'utf8'), local];
  }
}

function parse(changelog) {
  const entries = [];
  let release;
  let section;
  for (const line of changelog.split('\n')) {
    const heading = line.match(/^## \[(\d+\.\d+\.\d+)\] - (\S+)/);
    if (heading) release = { version: heading[1], date: heading[2] };
    else if (line.startsWith('## ')) release = undefined; // [Unreleased]
    if (line.startsWith('### ')) section = line.slice(4).trim();
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
      // A new component's entry bolds its name: "**`Badge`** — …", "**`FileInput`** and **`Dropzone`** — …".
      added:
        section === 'Added'
          ? [...text.matchAll(/\*\*`([A-Z][A-Za-z]+)`\*\*/g)].map((m) => m[1])
          : [],
    });
  }
  return entries;
}

try {
  const [changelog, source] = await readChangelog();
  const entries = parse(changelog);
  mkdirSync('src/generated', { recursive: true });
  writeFileSync(out, JSON.stringify(entries, null, 2) + '\n');
  console.log(`changes: ${entries.length} entries from ${source}`);
} catch (error) {
  if (existsSync(out)) {
    console.warn(`changes: ${error.message}, keeping the previous ${out}`);
  } else {
    console.warn(`changes: ${error.message}, pages show no change history`);
    mkdirSync('src/generated', { recursive: true });
    writeFileSync(out, '[]\n');
  }
}
