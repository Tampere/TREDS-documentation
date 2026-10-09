'use client';

import Link from 'next/link';
import { Breadcrumbs } from '@tampere/treds';

export default function RouterLink() {
  return (
    <Breadcrumbs
      ariaLabel="Breadcrumb"
      items={[
        { label: 'Home', linkComponent: (props) => <Link href="/en/" {...props} /> },
        {
          label: 'Components',
          linkComponent: (props) => <Link href="/en/components/" {...props} />,
        },
        { label: 'Breadcrumbs' },
      ]}
    />
  );
}
