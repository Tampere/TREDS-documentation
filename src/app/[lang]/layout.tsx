import type { ReactNode } from 'react';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { languages, type Lang } from '@/i18n';
import { SiteChrome } from './site-chrome';
import '../globals.css';

export const dynamicParams = false;

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export const metadata = {
  title: 'TREDS',
  icons: { icon: '/favicon.svg' },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <SiteChrome lang={lang as Lang}>{children}</SiteChrome>
      </body>
    </html>
  );
}
