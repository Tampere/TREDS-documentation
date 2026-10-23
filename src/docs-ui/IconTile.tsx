'use client';

import { useEffect, useId, useRef, type ComponentType, type SVGProps } from 'react';
import { Popover } from '@mantine/core';
import { Typography } from '@tampere/treds';
import { iconFileName, iconSvg, saveFile, svgToPng } from './iconFiles';

export interface IconTileLabels {
  actions: string;
  png: string;
  svg: string;
  copy: string;
  copied: (snippet: string) => string;
  downloaded: (fileName: string) => string;
  failed: (fileName: string) => string;
}

interface IconTileProps {
  name: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  opened: boolean;
  onOpenChange: (opened: boolean) => void;
  onStatus: (status: string) => void;
  labels: IconTileLabels;
}

export function IconTile({ name, Icon, opened, onOpenChange, onStatus, labels }: IconTileProps) {
  const menuId = useId();
  const itemRef = useRef<HTMLLIElement>(null);
  const tileRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const label = name.replace(/Icon$/, '');

  function close(returnFocus: boolean) {
    onOpenChange(false);
    if (returnFocus) tileRef.current?.focus();
  }

  // Focus stays on the tile when the menu opens, so Mantine's Escape handling (inside the
  // dropdown only) would miss an Escape pressed right away.
  useEffect(() => {
    if (!opened) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && close(true);
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  });

  async function download(ext: 'png' | 'svg') {
    close(true);
    const fileName = iconFileName(name, ext);
    try {
      const markup = iconSvg(iconRef.current!);
      const blob =
        ext === 'svg' ? new Blob([markup], { type: 'image/svg+xml' }) : await svgToPng(markup);
      saveFile(blob, fileName);
      onStatus(labels.downloaded(fileName));
    } catch (error) {
      console.error(error);
      onStatus(labels.failed(fileName));
    }
  }

  async function copy() {
    close(true);
    const snippet = `<${name} />`;
    try {
      await navigator.clipboard.writeText(snippet);
      onStatus(labels.copied(snippet));
    } catch {
      onStatus(snippet);
    }
  }

  return (
    <li
      ref={itemRef}
      // Tabbing past the menu closes it, so it can't cover the tiles that receive focus next.
      // A mouse click outside leaves relatedTarget null and is Mantine's to handle.
      onBlur={(event) => {
        const next = event.relatedTarget;
        if (opened && next && !itemRef.current?.contains(next)) close(false);
      }}
    >
      <Popover
        opened={opened}
        onChange={(next) => !next && close(false)}
        closeOnEscape={false}
        // Keeps the menu right after its tile in the reading and tab order.
        withinPortal={false}
        withRoles={false}
        position="bottom-start"
        offset={4}
      >
        <Popover.Target>
          <button
            ref={tileRef}
            type="button"
            className="icon-tile"
            aria-label={`${label}: ${labels.actions}`}
            aria-expanded={opened}
            aria-controls={opened ? menuId : undefined}
            onClick={() => onOpenChange(!opened)}
          >
            <Icon ref={iconRef} aria-hidden="true" width={32} className="icon-sample" />
            <Typography variant="caption" component="span" className="icon-name">
              {/* Break between words of the camelCase name, not mid-word. */}
              {label
                .split(/(?=[A-Z])/)
                .flatMap((part, i) => (i === 0 ? [part] : [<wbr key={i} />, part]))}
            </Typography>
          </button>
        </Popover.Target>
        <Popover.Dropdown id={menuId} className="icon-menu">
          <button type="button" onClick={() => download('png')}>
            {labels.png}
          </button>
          <button type="button" onClick={() => download('svg')}>
            {labels.svg}
          </button>
          <div className="icon-menu-divider" />
          <button type="button" onClick={copy}>
            {labels.copy}
          </button>
        </Popover.Dropdown>
      </Popover>
    </li>
  );
}
