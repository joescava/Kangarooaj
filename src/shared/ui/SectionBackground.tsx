import type { CSSProperties } from "react";

type SectionBackgroundOverlay = "soft" | "dark" | "strong";

type SectionBackgroundProps = {
  image: string;
  position?: CSSProperties["objectPosition"];
  opacity?: number;
  overlay?: SectionBackgroundOverlay;
  priority?: boolean;
};

export function SectionBackground({
  image,
  position = "center",
  opacity = 0.22,
  overlay = "dark",
  priority = false,
}: SectionBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="h-full w-full scale-[1.04] object-cover"
        style={{
          objectPosition: position,
          opacity,
        }}
      />

      <div className={`absolute inset-0 section-image-overlay-${overlay}`} />
    </div>
  );
}
