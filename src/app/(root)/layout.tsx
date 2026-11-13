import type { ReactNode } from 'react';
import { robots } from '@/robots';

export const metadata = { robots };

// A second root layout, only for `/`: [lang]/layout.tsx owns <html lang> for every real page.
export default function RootRedirectLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
