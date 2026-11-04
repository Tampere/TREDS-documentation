// Open TREDS issues for the generated "Known issues" lists. An issue belongs to a component
// when its title names it first, after the type prefix: "[BUG] Select: …",
// "[BUG] TextField / Select: …", "[BUG] Select overflows …". `open` holds every open issue, so a
// page can add one from another component and it drops off once closed.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const out = 'src/generated/issues.json';
const repo = 'Tampere/Tampere-design-system';
// Maintainer work (tooling, stories, refactors) isn't a known issue for someone using the component.
const consumerTypes = ['BUG', 'ENHANCEMENT', 'DESIGN', 'FEATURE'];
const storybookOnly = /\b(story|storybook)\b/i;

const names = JSON.parse(readFileSync('src/components.json', 'utf8')).map((c) => c.name);
const name = `(?:${names.join('|')})`;
const subject = new RegExp(`^${name}(?:\\s*/\\s*${name})*\\b`);

async function fetchOpenIssues() {
  const issues = [];
  for (let page = 1; ; page++) {
    const res = await fetch(
      `https://api.github.com/repos/${repo}/issues?state=open&per_page=100&page=${page}`,
      { headers: { Accept: 'application/vnd.github+json' } }
    );
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const batch = await res.json();
    issues.push(...batch.filter((i) => !i.pull_request));
    if (batch.length < 100) return issues;
  }
}

try {
  const byComponent = {};
  const open = {};
  for (const issue of await fetchOpenIssues()) {
    const prefix = issue.title.match(/^\[([A-Z]+)\]\s*/);
    const title = issue.title.slice(prefix?.[0].length ?? 0);
    open[issue.number] = title;
    if (!prefix || !consumerTypes.includes(prefix[1]) || storybookOnly.test(title)) continue;
    const head = title.match(subject)?.[0];
    if (!head) continue;
    for (const component of head.split(/\s*\/\s*/)) {
      (byComponent[component] ??= []).push(issue.number);
    }
  }
  mkdirSync('src/generated', { recursive: true });
  writeFileSync(out, JSON.stringify({ byComponent, open }, null, 2) + '\n');
  const count = Object.values(byComponent).reduce((n, l) => n + l.length, 0);
  console.log(`issues: ${count} open issues across ${Object.keys(byComponent).length} components`);
} catch (error) {
  if (existsSync(out)) {
    console.warn(`issues: ${error.message}, keeping the previous ${out}`);
  } else {
    console.warn(`issues: ${error.message}, component pages show no known issues`);
    mkdirSync('src/generated', { recursive: true });
    writeFileSync(out, JSON.stringify({ byComponent: {}, open: {} }) + '\n');
  }
}
