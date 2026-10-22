// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

// GitHub Pages: https://<org>.github.io/<repo>/ ; for Azure Static Web Apps set
// DOCS_URL to the site URL and DOCS_BASE_URL to '/'.
const url = process.env.DOCS_URL || 'https://tampere.github.io';
const baseUrl = process.env.DOCS_BASE_URL || '/TREDS-documentation-TEST/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tampere Design System (TREDS)',
  tagline: 'Private documentation for designers, developers, product owners, service designers and procurement teams (draft)',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url,
  baseUrl,

  organizationName: 'Tampere',
  projectName: 'TREDS-documentation-TEST',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Private site: ask search engines not to index it.
  noIndex: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/Tampere/TREDS-documentation-TEST/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        language: ['en'],
        indexBlog: false,
        docsRouteBasePath: '/docs',
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'TREDS',
        logo: {
          alt: 'TREDS logo (placeholder)',
          src: 'img/logo.svg',
        },
        items: [
          {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Documentation'},
          {to: '/docs/getting-started', label: 'Getting Started', position: 'left'},
          {to: '/docs/foundations', label: 'Foundations', position: 'left'},
          {to: '/docs/components', label: 'Components', position: 'left'},
          {to: '/docs/design', label: 'Design', position: 'left'},
          {to: '/docs/development', label: 'Development', position: 'left'},
          {to: '/docs/accessibility', label: 'Accessibility', position: 'left'},
          {to: '/docs/governance', label: 'Governance', position: 'left'},
          {to: '/docs/procurement', label: 'Procurement', position: 'left'},
          {type: 'search', position: 'right'},
          {
            href: 'https://github.com/Tampere/TREDS-documentation-TEST',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {label: 'Getting Started', to: '/docs/getting-started'},
              {label: 'Foundations', to: '/docs/foundations'},
              {label: 'Components', to: '/docs/components'},
              {label: 'Design', to: '/docs/design'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Development', to: '/docs/development'},
              {label: 'Accessibility', to: '/docs/accessibility'},
              {label: 'Governance', to: '/docs/governance'},
              {label: 'Procurement', to: '/docs/procurement'},
            ],
          },
        ],
        copyright: `Tampere Design System (TREDS) internal documentation. Draft placeholder content. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
