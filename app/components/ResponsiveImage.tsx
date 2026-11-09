/* eslint-disable @next/next/no-img-element -- Static variants need no runtime image endpoint on GitHub Pages. */
import images from '../lib/responsive-images.json';

type Props = {
  asset: keyof typeof images;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

export function ResponsiveImage({ asset, alt, sizes, className, priority = false }: Props) {
  const image = images[asset];
  const path = (width: number) => `/responsive/${asset}-${width}.webp`;

  return <img
    className={className}
    src={path(image.fallbackWidth)}
    srcSet={image.widths.map((width) => `${path(width)} ${width}w`).join(', ')}
    sizes={sizes}
    width={image.width}
    height={image.height}
    alt={alt}
    loading={priority ? 'eager' : 'lazy'}
    fetchPriority={priority ? 'high' : undefined}
    decoding="async"
  />;
}
