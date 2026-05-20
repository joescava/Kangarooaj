import logoImg from "../../../assets/kangaroo-logo.png";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className="grid place-items-center rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 shadow-2xl backdrop-blur-md">
        <img
          src={logoImg}
          alt="Kangaroo AJ S.A.S."
          className={
            compact ? "h-10 w-10 object-contain" : "h-12 w-12 object-contain"
          }
          width={compact ? 40 : 48}
          height={compact ? 40 : 48}
        />
      </div>
      <div className="hidden min-w-0 leading-none sm:block">
        <div className="text-[15px] font-bold tracking-[0.14em] text-white sm:tracking-[0.16em]">
          KANGAROO
        </div>
        <div className="mt-1 text-[11px] uppercase tracking-[0.32em] text-gold sm:tracking-[0.45em]">
          AJ SAS
        </div>
      </div>
    </div>
  );
}
