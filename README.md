# TREDS documentation site

The documentation site for the Tampere Design System (TREDS): a Next.js static export, built
on the *published* `@tampere/treds` package and using TREDS components for its own UI.
The library itself lives in [Tampere/Tampere-design-system](https://github.com/Tampere/Tampere-design-system).

`@tampere/treds` comes from `vendor/tampere-treds-1.0.0.tgz` (`npm pack` of tag v1.0.0), so
no GitHub Packages token is needed.

## Run locally

    npm install
    npm run dev                     # http://localhost:3000/ → /en/
    npm run build && npm run serve  # static export in out/, as it would be hosted

Search only works in the built site: `npm run build` runs Pagefind over `out/` after
`next build`, and `next dev` has no index. Search is currently not in the header (single-row
AppHeader has no search slot); `DocsSearch` is kept for when it returns.

## Pages

- Getting started: Introduction
- Foundations: Colours, Typography, Spacing and layout, Icons, Design tokens
- Components: overview + one page per component
- Footer: Accessibility statement (draft with placeholders)

## Languages

The site is English-only, but routes, UI labels and content stay keyed by `Lang` (`src/i18n.ts`).
To add a language, add its code to `languages`: `tsc` then lists every missing translation.
The language switcher appears once there is more than one language. The Finnish content removed
when the site went English-only is in the `finnish-content-snapshot` tag. `components.json`
descriptions are cast rather than type-checked, so check those by hand.

## Adding a page

1. Add it to `src/nav.ts` (slug + title per language).
2. Add its MDX loaders to `src/content.ts`.
3. Write `src/content/<lang>/<name>.mdx`.

## Structure

- `src/nav.ts` — sections and pages; drives routes, sidebar, header nav, breadcrumbs, prev/next.
  Client-safe: no content imports.
- `src/content.ts` — server-only MDX loaders per slug.
- `src/app/[lang]/[[...slug]]/` — one route for every page; `src/app/(root)/` redirects `/` to `/en/`.
- `src/app/[lang]/site-chrome.tsx` — ThemeProvider, SkipLink, AppHeader, sidebar, Footer.
- `src/docs-ui/` — docs-only components: Sidebar, OnThisPage, PrevNext, DocsSearch, Example,
  Playground, PropsTable, Prose (vertical rhythm + TREDS tokens as CSS custom properties),
  IconGallery, IconSizes.
- `src/docs-ui/tokens/` — Foundations tables, all rendered from the package's own token exports;
  `colorUsage.ts` holds the hand-written usage text.
- `src/examples/` — example components; `<Example>` renders one *and* shows its source (Shiki).
- `scripts/props.mjs` — props from the published `dist/index.d.ts` → `src/generated/*.json`.
- `src/treds.ts` — client-boundary re-export of TREDS for Server Components (TREDS #177).

## License

The source code of the TREDS documentation site is licensed under the EUPL-1.2. See the `LICENSE` file for the full licence text.

The City of Tampere branding assets (name, logo, coat of arms and wave pattern) are not covered by the EUPL-1.2 licence. All rights to these assets are reserved by the City of Tampere. Their use must not imply endorsement, sponsorship, affiliation, or any official connection with the City of Tampere without prior written permission.
