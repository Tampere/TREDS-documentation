import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const sections = [
  {title: 'Getting Started', to: '/docs/getting-started', text: 'What TREDS is, who should use it, design principles and the adoption process.'},
  {title: 'Foundations', to: '/docs/foundations', text: 'Colors, typography, spacing, icons and accessibility.'},
  {title: 'Components', to: '/docs/components', text: 'Component overview, usage guidelines, do\'s and don\'ts, accessibility considerations.'},
  {title: 'Design', to: '/docs/design', text: 'Figma resources, design workflows and design reviews.'},
  {title: 'Development', to: '/docs/development', text: 'Installation, repository structure, Storybook and release process.'},
  {title: 'Accessibility', to: '/docs/accessibility', text: 'WCAG compliance guidance and accessibility testing checklist.'},
  {title: 'Governance', to: '/docs/governance', text: 'Roles and responsibilities, contribution model and versioning principles.'},
  {title: 'Procurement', to: '/docs/procurement', text: 'Requirements for suppliers and using TREDS in purchased services.'},
];

export default function Home() {
  return (
    <Layout
      title="Tampere Design System (TREDS)"
      description="Private documentation site for the Tampere Design System (draft)">
      <header className={styles.heroBanner}>
        <div className="container">
          <Heading as="h1">Tampere Design System (TREDS)</Heading>
          <p>
            Documentation for designers, developers, product owners, service
            designers and procurement teams working with digital services in
            the City of Tampere.
          </p>
          <Link className="button button--primary button--lg" to="/docs/getting-started">
            Get started
          </Link>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="alert alert--warning margin-bottom--lg" role="note">
          <strong>Draft content.</strong> This site is an initial structure.
          All pages are placeholders and templates and do not contain official
          TREDS guidelines yet.
        </div>
        <div className="row">
          {sections.map(({title, to, text}) => (
            <div key={title} className="col col--3 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <Heading as="h2">{title}</Heading>
                </div>
                <div className="card__body">
                  <p>{text}</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--secondary button--block" to={to}>
                    Open {title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
