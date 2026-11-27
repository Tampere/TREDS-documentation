# Project Guidance

Guidance for working in this repo, shared with the team via git. Personal preferences belong in `CLAUDE.local.md` (git-ignored). For setup, build settings and the file layout, read [README.md](README.md) first.

If this repo is checked out inside a Tampere-design-system clone, that repo's CLAUDE.md loads too. It describes the component library, and only its Language rule, its comment rule and the accessible-name requirement (every interactive element and landmark has an accessible name and the correct role) apply here. Its Finnish-default rule for UI text doesn't: the site's UI text comes from `src/i18n.ts`. Everything else in it (commands, dependencies, token tiers, file layout, commits, releases) is library-only: this file replaces it.

## What this repo is

The documentation site for TREDS (`@tampere/treds`), a Next.js static export (`out/`). It is to be hosted on the City of Tampere's Azure. The library lives in [Tampere/Tampere-design-system](https://github.com/Tampere/Tampere-design-system).

The site is built on the **published package**, never the library's source, so it tests what consumers actually install: TREDS #177 (the dist has no `'use client'`) only shows up there. A bug you hit here is usually a library bug: file it in the TREDS repo rather than working around it silently.

## Commands

- `npm run dev`: `npm run props`, then `next dev` on port 3000.
- `npm run build`: `npm run props`, `next build`, then Pagefind over `out/`. The hosting pipeline will use this.
- `npm run serve`: serves `out/` on port 3000 too, so stop `next dev` first.
- `npm run props`: regenerates the gitignored `src/generated/`: props tables from the installed package, change history from the TREDS CHANGELOG at the installed version's tag, and open issues from GitHub. If the CHANGELOG fetch fails, the history comes from `../../CHANGELOG.md` when the repo is nested in the library, and that file can be ahead of the installed version; set `TREDS_CHANGELOG` to pin a file. A failed issues fetch keeps the previous list. Run it before `tsc` on a fresh clone.
- `npx tsc --noEmit -p .`: type-check, including every example against the installed package.
- `npm run prettier` formats `src/`, `scripts/` and the root `.mjs` config; `npm run prettier:check` only checks. `.prettierrc` matches the library's.

There is no ESLint or test setup.

**Sandbox:** never run `npm install` in this folder from a Linux sandbox, because `node_modules` belongs to the Mac. Use the copy-to-scratchpad recipe in the `component-page` skill's Verify section.

## Rules

- **Never hand-write a props table.** Tables come from the package's `dist/index.d.ts` via `scripts/props.mjs`. If a component's props can't be read, link to Storybook instead.
- **Server Components import TREDS components from `@/treds`** (`src/treds.ts`), not `@tampere/treds` (#177). That file is a client boundary with an explicit export list, so it only passes components through. Files that need TREDS values (`vars`, tokens) import `@tampere/treds` directly and are `'use client'` files, or modules imported only by them (`tokenVars.ts`). Every example file in `src/examples/` does too, because its source is what readers copy.
- **No literal design values.** In TSX, use `vars` from the package. TREDS's CSS variable names are hashed (#180), so `globals.css` uses the stable custom properties from `src/docs-ui/tokenVars.ts`: add one there if you need it. Breakpoints stay literal because media queries can't use `var()`, and so do column and max widths, which TREDS has no token for. For any other value without a token, file a library issue; never edit the library's token files from here.
- **Never copy a token value (colour, size, spacing) into content.** Foundations tables render it from the package's token exports.
- Write comments that carry the non-obvious why, as `src/treds.ts` and `tokenVars.ts` do.

## Writing content

- Write or update a component page with the `component-page` skill (`.claude/skills/component-page/`).
- English only. No Figma links (the files are access-restricted).
- No meta sentences: no audience labels, taglines, "this value is read from the package" notes, or a second line repeating what a link already says.
- `src/content/en/` is one flat folder. A component whose slug matches a Foundations page needs another file name, mapped in `src/content.ts` (component Typography uses `typography-component.mdx`).
- MDX here has no GFM, so a Markdown pipe table renders as raw text. Build a small `'use client'` component in `src/docs-ui/` from TREDS `Table` parts instead (see `HeaderCollapseTable.tsx`). Wrap `<placeholder>`-style prose in backticks, or MDX parses it as JSX.
- Probe any accessibility claim in a browser before writing it, and never copy one from a sibling component.
- `accessibility.mdx` is a draft with placeholders, and it isn't publishable until the City has filled it in.

## Verifying a change

Before opening a PR:

1. `npm run props`, then `npx tsc --noEmit -p .` and `npm run prettier:check`.
2. `npm run build`, then `npm run serve`, and check the changed pages, including at 320px width.
3. Stop the server, then load the changed pages under `npm run dev` and check the console. The static build is production React, so dev-only warnings and errors never show there.

## Updating to a new TREDS release

Start as soon as the TREDS release PR (`chore/release-vX.Y.Z`) is open, not after publishing. The docs build is the release candidate's acceptance test, and a published version can't be withdrawn from GitHub Packages, so the release PR isn't merged until this repo's PR builds.

**Prepare, on a `chore/treds-vX.Y.Z` branch, while the release PR is open:**

1. Build the tarball from the release branch's head, since the library has no `prepack` and packs whatever `dist/` is on disk. In a clean checkout of that commit: `npm ci && npm run build && npm pack`.
2. Replace the tarball in `vendor/`, then update `@tampere/treds` in `package.json` and the tarball name in the README.
3. Install and run `npm run build` with `TREDS_CHANGELOG` pointing at the release branch's `CHANGELOG.md`, because the `vX.Y.Z` tag doesn't exist yet. In a sandbox, use the skill's scratchpad copy but run `npm install` instead of `npm ci` (the lockfile no longer matches), and copy `package-lock.json` back. Props tables, change history, "What's new" and known issues update themselves. Type errors in `src/examples/` point at breaking changes: update the examples for one the CHANGELOG announces, and report any other one on the release PR before it merges.
4. Add each new component export to `src/components.json`; `npm run props` warns about missing ones. Until you do, it has no page or props table. Once it's in `components.json`, it gets a generated stub page until its MDX is written. If a Server Component uses it, add it to the export list in `src/treds.ts` too.
5. Read the release's CHANGELOG entry and update the guidance it affects by hand: changed defaults, behaviour and accessibility. The published d.ts has no defaults (#179), so props-table defaults come from the hand-kept `DEFAULTS` map in `scripts/props.mjs`: update changed ones and add new components there. Re-check comments that name a TREDS version (e.g. in `src/treds.ts` and `globals.css`).
6. Open the PR as a draft, and link it from the release PR and back. If the release PR gets new commits, repeat from step 1.

**Finish, after the GitHub Release and the publish run:**

7. Pack the `vX.Y.Z` tag the same way and compare it with the vendored tarball (`diff -r` of the two extracted `package/` folders). If they differ, replace the vendored one and rebuild.
8. Run `npm run build` without `TREDS_CHANGELOG`, so the history comes from the tag, then mark the PR ready and merge it.

## Git and pull requests

- `main` is protected: every change goes through a PR.
- Branches are `type/short-description`, e.g. `docs/breadcrumbs-default-label`.
- Commits follow Conventional Commits, without an issue scope (this repo has no backlog of its own): `docs: …`, `fix: …`, `feat: …`, `chore: …`.
- If AI was used for the change, end the commit message with a `Co-Authored-By: Claude <noreply@anthropic.com>` trailer.
