import { Picture } from "@/components/Picture";

export type ImagePanelProps = {
  image: string;
  alt: string;
  title: string;
  text: string;
  tall?: boolean;
  position?: string;
};

export function ImagePanel({
  image,
  alt,
  title,
  text,
  tall = false,
  position = "center",
}: ImagePanelProps) {
  return (
    <figure className="image-premium-frame group min-h-[360px] sm:min-h-[420px]">
      <Picture
        src={image}
        alt={alt}
        className={`${tall ? "h-[500px] sm:h-[620px]" : "h-[430px] sm:h-[520px]"} w-full object-cover opacity-85 transition duration-700 group-hover:scale-[1.025]`}
        width={2560}
        height={1440}
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
      <figcaption className="absolute bottom-4 left-4 right-4 max-h-[65%] overflow-y-auto rounded-3xl border border-white/10 bg-black/65 p-4 shadow-2xl backdrop-blur-xl md:bottom-6 md:left-6 md:right-6 md:p-6">
        <div className="localized-copy text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
          {title}
        </div>
        <p className="localized-copy mt-2 text-sm leading-6 text-slate-300">
          {text}
        </p>
      </figcaption>
    </figure>
  );
}
