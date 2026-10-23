import type { ReactNode } from 'react';

// A second root layout, only for `/`: [lang]/layout.tsx owns <html lang> for every real page.
export default function RootRedirectLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
