'use client';

import { primitives, Typography } from '@tampere/treds';
import { contrast, isHex } from './utils';

export function ColorPalette() {
  return (
    <div className="palette">
      {Object.entries(primitives.colors).map(([group, stops]) => (
        <section key={group} className="palette-group">
          <Typography variant="h5" component="h3" className="palette-title">
            {group}
          </Typography>
          <div className="swatches">
            {Object.entries(stops)
              .filter(([, hex]) => isHex(hex))
              .map(([stop, hex]) => (
                <Swatch key={stop} label={stop} hex={hex as string} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function Swatch({ label, hex }: { label: string; hex: string }) {
  const onWhite = contrast(hex, '#ffffff');
  return (
    <div className="swatch">
      <div className="swatch-chip" style={{ background: hex }} />
      <Typography variant="caption" component="span" className="swatch-label">
        <code>{label}</code>
        <span>{hex}</span>
        <span title="Contrast against white">{onWhite.toFixed(2)}:1</span>
      </Typography>
    </div>
  );
}
