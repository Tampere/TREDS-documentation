# Project Guidance

Guidance for working in this repo, shared with the team via git. Personal preferences belong in `CLAUDE.local.md` (git-ignored). For setup, build settings and the file layout, read [README.md](README.md) first; this file holds the rules the README doesn't.

If this repo is checked out inside a Tampere-design-system clone, that repo's CLAUDE.md loads too. It describes the component library: its Vanilla Extract, Storybook, component-folder and commit-scope rules don't apply here. Where the two conflict, this file wins.

## What this repo is

The documentation site for TREDS (`@tampere/treds`), a Next.js static export (`out/`) hosted on the City of Tampere's Azure. The library lives in [Tampere/Tampere-design-system](https://github.com/Tampere/Tampere-design-system).

The site is built on the **published package**, never the library's source. That's deliberate: the site tests what consumers actually install, and that is how dist-only bugs like TREDS #177 and #181 were found. A bug you hit here is usually a library bug: file it in the TREDS repo rather than working around it silently.

## Commands

- `npm run dev`: regenerates props, then `next dev` on port 3000.
- `npm run build`: regenerates props, `next build`, then Pagefind over `out/`. This is the build contract the hosting pipeline uses.
- `npm run props`: regenerates `src/generated/` (props tables, change history, open issues). It fetches from GitHub, and keeps the previous output when offline.
- `npx tsc --noEmit -p .`: type-check, including every example against the installed package.

There is no ESLint, Prettier or test setup yet. Match the existing style.

## Rules

- **Never hand-write a props table.** Tables come from the package's `dist/index.d.ts` via `scripts/props.mjs`. If a component's props can't be read, link to Storybook instead.
- **`src/nav.ts` must stay client-safe.** Importing content there pulls `node:fs` into the browser bundle and breaks the build. MDX loaders belong in `src/content.ts` (`server-only`).
- **Import TREDS from `src/treds.ts`** in Server Components, not from `@tampere/treds` directly (TREDS #177: the dist has no `'use client'`).
- **Use tokens for design values.** Use the TREDS tokens exposed as CSS custom properties in `src/docs-ui/tokenVars.ts`, not literals.
- **Foundations values are rendered from the package's token exports.** Never copy a hex code or a pixel value into content.

## Writing content

- Write or update a component page with the `component-page` skill (`.claude/skills/component-page/`); `src/content/en/button.mdx` is the reference page.
- English only. No Figma links (the files are access-restricted).
- No meta sentences: no audience labels, taglines, "this value is read from the package" notes, or a second line repeating what a link already says.
- Content files are keyed by bare name, so a component page named like a Foundations page overwrites it (component Typography lives in `typography-component.mdx`). Check `src/content/en/<name>.mdx` doesn't exist before creating it.
- MDX here has no GFM: a Markdown pipe table renders as raw text, so use the docs-ui table components. Wrap `<placeholder>`-style prose in backticks, or MDX parses it as JSX.
- Accessibility guidance says what the developer must do, not what the component does for them. Probe any claim in a browser before writing it, and never copy one from a sibling component.
- `accessibility.mdx` is a draft with placeholders and isn't publishable until the City has filled it in.

## Verifying a change

Before opening a PR:

1. `npx tsc --noEmit -p .`
2. `npm run build`, then `npm run serve` and check the changed pages, including at 320px width.
3. Load the changed pages under `npm run dev` too, and check the console: the static build is production React, so dev-only errors never show there.

## Updating to a new TREDS release

Do this after the TREDS GitHub Release exists: the change history is fetched from the `v<version>` tag.

1. `npm pack` the library at the release tag, replace the tarball in `vendor/`, and update `@tampere/treds` in `package.json` and the README.
2. `npm install`, then `npm run build`. Props tables, change history, "What's new" and known issues update themselves; type errors in `src/examples/` point at breaking changes.
3. Read the release's CHANGELOG entry and update the guidance it affects by hand: changed defaults, behaviour and accessibility.
4. A new component gets a generated stub page until its MDX is written (see the `component-page` skill).

## Git and pull requests

- `main` is protected: every change goes through a PR.
- Branches are `type/short-description`, e.g. `docs/breadcrumbs-default-label`.
- Commits follow Conventional Commits, without an issue scope (this repo has no backlog of its own): `docs: …`, `fix: …`, `feat: …`, `chore: …`.
- If AI was used for the change, end the commit message with a `Co-Authored-By: Claude <noreply@anthropic.com>` trailer.
