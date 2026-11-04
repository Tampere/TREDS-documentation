import { notFound } from 'next/navigation';
import { allPages, findPage, href } from '@/nav';
import { content } from '@/content';
import { dict, type Lang } from '@/i18n';
import { Breadcrumbs } from '@/treds';
import { OnThisPage } from '@/docs-ui/OnThisPage';
import { PrevNext } from '@/docs-ui/PrevNext';
import { ComponentOverview, ComponentStub, FoundationsOverview } from '@/docs-ui/GeneratedPages';
import { components, componentSlug } from '@/components';

type Params = Promise<{ lang: Lang; slug?: string[] }>;

export function generateStaticParams() {
  return allPages.map((page) => ({
    slug: page.slug ? page.slug.split('/') : [],
  }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { lang, slug } = await params;
  const found = findPage(slug?.join('/') ?? '');
  return { title: found ? `${found.page.title[lang]} – TREDS` : 'TREDS' };
}

export default async function Page({ params }: { params: Params }) {
  const { lang, slug } = await params;
  const found = findPage(slug?.join('/') ?? '');
  if (!found) notFound();
  const { page, section, prev, next } = found;
  const loader = content[page.slug]?.[lang];
  const Content = loader && (await loader()).default;
  const component = components.find((c) => componentSlug(c.name) === page.slug);
  if (!Content && !component && page.slug !== 'components' && page.slug !== 'foundations')
    notFound();
  const t = dict[lang];

  const crumbs = [
    { label: t.home, href: href(lang, '') },
    ...(section && page.slug
      ? [
          {
            label: section.title[lang],
            href: href(lang, section.pages[0].slug),
          },
        ]
      : []),
    ...(page.slug ? [{ label: page.title[lang] }] : []),
  ];

  // The front page has no table of contents or reading order.
  const isHome = page.slug === '';

  return (
    <div className={isHome ? 'doc doc-home' : 'doc'}>
      <div className="doc-main">
        {crumbs.length > 1 && (
          // Wrapper, not className: Breadcrumbs ignores className outside its mobile mode.
          <div className="crumbs">
            <Breadcrumbs items={crumbs} ariaLabel={t.breadcrumbs} />
          </div>
        )}
        <article data-pagefind-body>
          {/* A hand-written page wins; otherwise components get a generated stub. */}
          {Content ? (
            <Content />
          ) : component ? (
            <ComponentStub name={component.name} lang={lang} />
          ) : page.slug === 'foundations' ? (
            <FoundationsOverview lang={lang} />
          ) : (
            <ComponentOverview lang={lang} />
          )}
        </article>
        {!isHome && <PrevNext lang={lang} prev={prev} next={next} />}
      </div>
      {!isHome && <OnThisPage label={t.onThisPage} />}
    </div>
  );
}
