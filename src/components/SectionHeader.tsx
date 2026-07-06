type SectionHeaderProps = { eyebrow: string; title: string; text: string };

export function SectionHeader({ eyebrow, title, text }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="localized-copy text-xs font-semibold uppercase tracking-[0.22em] text-gold sm:tracking-[0.28em]">
        {eyebrow}
      </p>
      <h2 className="localized-copy mt-4 font-display text-[clamp(1.9rem,8vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-[clamp(2rem,4.5vw,4rem)]">
        {title}
      </h2>
      <p className="localized-copy mt-5 max-w-2xl text-[clamp(1rem,2vw,1.3rem)] leading-8 text-slate-600">
        {text}
      </p>
    </div>
  );
}
