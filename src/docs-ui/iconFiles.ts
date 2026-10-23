// Downloads for people who need an icon as an image, not as code.
const SIZE = 512;

export const iconFileName = (name: string, ext: 'png' | 'svg') =>
  `${name.replace(/(?<=[a-z0-9])(?=[A-Z])/g, '-').toLowerCase()}.${ext}`;

// The icons fill with currentColor, which turns black or invisible once the file leaves the
// page, so the colour the gallery shows is written into the file.
export function iconSvg(svg: SVGSVGElement): string {
  const color = getComputedStyle(svg).getPropertyValue('--icon-default').trim();
  if (!color) throw new Error('--icon-default is not set');
  const copy = svg.cloneNode(true) as SVGSVGElement;
  copy.removeAttribute('aria-hidden');
  copy.setAttribute('width', String(SIZE));
  copy.setAttribute('height', String(SIZE));
  return new XMLSerializer().serializeToString(copy).replaceAll('currentColor', color);
}

export async function svgToPng(markup: string): Promise<Blob> {
  const url = URL.createObjectURL(new Blob([markup], { type: 'image/svg+xml' }));
  try {
    const image = new Image();
    image.src = url;
    await image.decode();
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = SIZE;
    canvas.getContext('2d')!.drawImage(image, 0, 0, SIZE, SIZE);
    return await new Promise((resolve, reject) =>
      canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error('PNG encoding failed'))))
    );
  } finally {
    URL.revokeObjectURL(url);
  }
}

export function saveFile(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.click();
  // click() starts the download asynchronously; revoking right away can cancel it.
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}
