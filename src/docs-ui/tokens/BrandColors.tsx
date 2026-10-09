'use client';

import { brand } from '@tampere/treds';
import { Swatch } from './ColorPalette';

export function BrandColors() {
  return (
    <div className="swatches">
      {Object.entries(brand.blue).map(([name, hex]) => (
        <Swatch key={name} label={name} hex={hex} />
      ))}
    </div>
  );
}
