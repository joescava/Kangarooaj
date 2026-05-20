import type { CSSProperties } from "react";

type PictureProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  width?: number;
  height?: number;
  style?: CSSProperties;
};

export function Picture({
  src,
  alt,
  className,
  loading = "lazy",
  fetchPriority = "auto",
  width,
  height,
  style,
}: PictureProps) {
  return (
    <picture>
      <source srcSet={src} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        width={width}
        height={height}
        decoding="async"
        style={style}
      />
    </picture>
  );
}
