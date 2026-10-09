# TREDS docs site prototype (Next.js)

Prototype, started 2026-10-08: a TREDS documentation site as a Next.js static export, built
on the *published* `@tampere/treds` package and using TREDS components for its own UI.
Lives under the gitignored `docs/`, so it is not in git.

`@tampere/treds` comes from `vendor/tampere-treds-1.0.0.tgz` (`npm pack` of tag v1.0.0), so
no GitHub Packages token is needed.

## Run (on the Mac)

    npm install
    npm run dev                     # http://localhost:3000/ → /fi/
    npm run build && npm run serve  # static export in out/, as it would be hosted

Search only works in the built site: `npm run build` runs Pagefind over `out/` after
`next build`, and `next dev` has no index. Search is currently not in the header (single-row
AppHeader has no search slot); `DocsSearch` is kept for when it returns.

## Pages (fi + en)

- Aloitus: Johdanto
- Perusteet: Värit, Typografia, Välistys ja asettelu, Ikonit, Design tokenit
- Komponentit: Button
- Footer: Saavutettavuusseloste (draft with placeholders)

## Adding a page

1. Add it to `src/nav.ts` (slug + fi/en title).
2. Add its MDX loaders to `src/content.ts`.
3. Write `src/content/{fi,en}/<name>.mdx`.

## Structure

- `src/nav.ts` — sections and pages; drives routes, sidebar, header nav, breadcrumbs, prev/next.
  Client-safe: no content imports.
- `src/content.ts` — server-only MDX loaders per slug.
- `src/app/[lang]/[[...slug]]/` — one route for every page; `src/app/(root)/` redirects `/` to `/fi/`.
- `src/app/[lang]/site-chrome.tsx` — ThemeProvider, SkipLink, AppHeader, sidebar, Footer.
- `src/docs-ui/` — docs-only components: Sidebar, OnThisPage, PrevNext, DocsSearch, Example,
  Playground, PropsTable, Prose (vertical rhythm + TREDS tokens as CSS custom properties),
  IconGallery, IconSizes.
- `src/docs-ui/tokens/` — Foundations tables, all rendered from the package's own token exports;
  `colorUsage.ts` holds the hand-written usage text.
- `src/examples/` — example components; `<Example>` renders one *and* shows its source (Shiki).
- `scripts/props.mjs` — props from the published `dist/index.d.ts` → `src/generated/*.json`.
- `src/treds.ts` — client-boundary re-export of TREDS for Server Components (TREDS #177).
