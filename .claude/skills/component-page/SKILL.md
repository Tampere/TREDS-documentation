---
name: component-page
description: Write or slim a component documentation page in the TREDS docs site (this Next.js docs-demo repo). Use whenever the user asks to document a TREDS component, add a page for a new component, write or rewrite src/content/en/<component>.mdx, add examples for a component page, or bring an existing component page in line with the light template ("slim the Select page", "make Checkbox look like Button"), even if they don't say "skill" or "template".
---

# Component page

A component page tells a developer when to use the component and what they must get right.
Everything else (props, open issues, change history, the component's own behaviour) either
comes from a generated source or isn't on the page. The goal is a page that stays correct
without anyone remembering to update it.

`src/content/en/button.mdx` is the reference page. Read it before you start, and copy its
shape. Its examples are in `src/examples/en/button/`.

## Page shape

In this order:

1. Imports, `# Name`, `<ComponentBadges>`, a one-sentence lead, `<ComponentLinks>`.
2. A hero `<Example>` directly under the links, with no heading.
3. `## When to use`: one paragraph, then **Don't use … when** with each case pointing at the
   alternative component via `<ComponentRef>`.
4. `## Variants and situations`: zero to three `###` sections. Each one exists because it
   carries guidance a developer couldn't get from the prop name, e.g. "at most one primary
   button per view" or "rounded and sharp buttons aren't mixed within one service". A section
   that would only say "`disabled` disables it" doesn't belong: the props table already says it.
   One example per section, and group related props into one section (Button's "Icons" covers
   `leftIcon`, `rightIcon` and `iconOnly`).
5. `## Accessibility`: a plain bullet list of what the *developer* must do: naming, labelling,
   choosing the right element, focus handling in their own code. Not what the component does
   for them; those claims go stale silently when the library changes.
6. `## API`: `<PropsTable props={…} label="Name props" lang="en" />` from the generated
   JSON. The only overrides are `requiredWhen` (a prop the type marks optional but the
   component needs in some case) and `hidden`. Leave descriptions to the generated JSDoc, even
   when it reads as maintainer-facing: improving it is a library task, and a hand-written copy
   drifts. If `npm run props` says it couldn't read the component's props, don't write a table
   by hand; write one sentence pointing to Storybook (the link row already has it).
   The generated table only lists props TREDS declares itself. When the component relies on
   props inherited from Mantine that a developer can't do without (Modal's `opened`,
   `onClose`, `title`), add one sentence under the table naming them. Name only those; the
   rest are Mantine's documentation's job.
7. `<KnownIssues name="Name" lang="en" />`. It lists open GitHub issues whose title names the
   component. Add `also={[n]}` only for an open issue filed under another component that
   clearly affects this one.
8. `<ComponentChanges name="Name" lang="en" />`.

Not on the page: playgrounds, WCAG criteria lines, Related components, "The component
handles" lists, content-guideline sections no designer has signed off, open-question
placeholders.

## Rules that keep pages from going stale

- **No issue numbers and no bug descriptions in the text.** A sentence like "`error` doesn't
  set `aria-invalid` (#197), so set it yourself" becomes wrong advice the day the fix ships.
  Known issues covers open bugs and drops them on its own. If the advice is good regardless of
  the bug ("always give a visible label"), keep it without the bug clause.
- **Only guidance someone can source.** Every new usage rule comes from Figma, the
  component's stories or docs, cited research, or the user. If you think a rule is needed but
  can't source it, ask the user rather than writing it; an invented rule ("write language
  names in full") once contradicted Figma. When slimming an existing page, its guidance has
  already been through review, so treat it as sourced: keep a rule if it fits one of the
  template's sections and isn't a bug workaround, and move it rather than drop it when its
  old section goes away (label and copy rules usually fit Accessibility, since they decide
  what a screen reader announces). Drop it only when it repeats the props table or describes
  what the component does by itself.
- **Every component named in running text is a `<ComponentRef name="X" lang="en" />`**, so it
  links to that component's page.
- Plain sentences, no em dashes. In "Don't use" lists, the alternative follows a spaced en
  dash: `– use <ComponentRef … />`.

## Files to touch

- `src/content/en/<slug>.mdx`. The slug is the name in kebab case (`LabeledIconButton` →
  `labeled-icon-button`).
- `src/content.ts`: a loader entry `'components/<slug>'` if the page is new (without one the
  site serves a generated stub).
- `src/examples/en/<slug>/<Name>.tsx`: one default-exported component per example, starting
  with `'use client';`, importing only from `@tampere/treds`. The file is both the preview and
  the code shown, so write it as code a developer would paste: realistic labels, no
  docs-only wrappers or comments. Register each file in `src/examples/index.ts` (import +
  `'<slug>/<Name>'` key) and remove the entries of files you delete.
- A new component also needs an entry in `src/components.json` (name, group, since version,
  one-sentence description). `npm run props` warns about exports missing from it.

When slimming an existing page, delete the example files the new page no longer uses and
their `index.ts` entries, and delete any docs-ui component that only that page used (for
example a per-component playground).

## Verify

Never run `npm install` in this folder from a Linux sandbox: `node_modules` belongs to the
Mac. In a sandbox, work in a copy:

```bash
SP=<scratchpad>/demo
rsync -a --exclude node_modules --exclude .next --exclude out --exclude .git ./ $SP/
cp ../../.prettierrc $SP/            # without it prettier switches to double quotes
cd $SP && npm ci
TREDS_CHANGELOG=<treds repo>/CHANGELOG.md npm run props
npx prettier --check src && npx tsc --noEmit -p . && npx next build
```

Then copy your changed files (not `src/generated/`) back. On the Mac, run `npm run dev` or
`npm run build` in place.

Check:
- `npm run props` output for the component: number of props read, or the "couldn't be
  read" warning. Open `src/generated/<Name>.props.json` and make sure the props belong to
  this component (the docgen has cross-wired same-named props before).
- The built page at 1440px and 320px: no console errors, `document.documentElement.scrollWidth`
  equals the viewport width, the examples render, and "On this page" lists exactly the page's
  `h2`s.
- `grep -n '#[0-9]' src/content/en/<slug>.mdx` finds nothing outside `also={[…]}`.

Finish by telling the user what you couldn't source (and so left out or asked about), and
anything the page made you notice about the component that might deserve an issue.

Before calling something a new issue, search closed issues too. The site is built from the
published package, so a bug can be fixed and closed on `main` while the release you're
documenting still has it. Known issues lists only open issues, so such a bug won't show there:

```bash
curl -s "https://api.github.com/search/issues?q=repo:Tampere/Tampere-design-system+is:issue+<keywords>" \
  | python3 -c "import json,sys; [print(i['number'], i['state'], i['title']) for i in json.load(sys.stdin)['items']]"
```

If a closed issue covers it, say "fixed in #n, not released yet" instead of proposing a new
issue, and still keep the workaround off the page: it would outlive the next release.
