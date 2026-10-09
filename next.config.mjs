import path from 'node:path';
import createMDX from '@next/mdx';

// Plugins by package name: Turbopack needs serializable MDX options.
const withMDX = createMDX({
  options: {
    rehypePlugins: [['rehype-slug'], ['@shikijs/rehype', { theme: 'github-light-high-contrast' }]],
  },
});

export default withMDX({
  output: 'export',
  trailingSlash: true,
  // The TREDS repo's lockfile one level up would otherwise be picked as the workspace root.
  turbopack: { root: path.resolve('.') },
  pageExtensions: ['ts', 'tsx', 'mdx'],
});
