import logoImg from "@/assets/kangaroo-logo.png";
import { cn } from "@/lib/cn";

type Props = {
  compact?: boolean;
  tone?: "light" | "dark";
};

export function Logo({ compact = false, tone = "light" }: Props) {
  const markSize = compact
    ? "h-9 w-9 sm:h-10 sm:w-10"
    : "h-10 w-10 sm:h-12 sm:w-12";

  return (
    <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
      <div
        className={`${markSize} shrink-0 overflow-hidden rounded-xl bg-transparent`}
      >
        <img
          src={logoImg}
          alt="Kangaroo AJ S.A.S."
          className="h-full w-full object-contain"
          width={48}
          height={58}
        />
      </div>

      <div className="min-w-0 leading-none">
        <div
          className={cn(
            "text-[12px] font-extrabold leading-none sm:text-[15px]",
            tone === "dark" ? "text-white" : "text-slate-950",
          )}
        >
          KANGAROO
        </div>

        <div className="mt-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-gold sm:text-[9px]">
          AJ SAS
        </div>
      </div>
    </div>
  );
}
