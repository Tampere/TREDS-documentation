import { ArrowLeftIcon, ArrowRightIcon, NavigationLink } from '@/treds';
import { dict, type Lang } from '@/i18n';
import { href, type DocPage } from '@/nav';

export function PrevNext({ lang, prev, next }: { lang: Lang; prev?: DocPage; next?: DocPage }) {
  if (!prev && !next) return null;
  const t = dict[lang];
  return (
    <nav aria-label={`${t.previous} / ${t.next}`} className="prev-next" data-pagefind-ignore>
      {prev && (
        <NavigationLink href={href(lang, prev.slug)} startIcon={<ArrowLeftIcon />}>
          <span className="visually-hidden">{t.previous}: </span>
          {prev.title[lang]}
        </NavigationLink>
      )}
      {next && (
        <NavigationLink
          href={href(lang, next.slug)}
          endIcon={<ArrowRightIcon />}
          className="prev-next-next"
        >
          <span className="visually-hidden">{t.next}: </span>
          {next.title[lang]}
        </NavigationLink>
      )}
    </nav>
  );
}
