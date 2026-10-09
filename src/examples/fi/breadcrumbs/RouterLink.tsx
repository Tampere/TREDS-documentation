'use client';

import Link from 'next/link';
import { Breadcrumbs } from '@tampere/treds';

export default function RouterLink() {
  return (
    <Breadcrumbs
      ariaLabel="Murupolku"
      items={[
        { label: 'Etusivu', linkComponent: (props) => <Link href="/fi/" {...props} /> },
        {
          label: 'Komponentit',
          linkComponent: (props) => <Link href="/fi/components/" {...props} />,
        },
        { label: 'Breadcrumbs' },
      ]}
    />
  );
}
