// Fail-safe default: only a build with DOCS_INDEXABLE=true (production) may be indexed, so
// previews and builds that forget the setting stay out of search results.
export const robots =
  process.env.DOCS_INDEXABLE === 'true' ? undefined : { index: false, follow: false };
