export function Logo({ compact = false }: { compact?: boolean }) {
  const markSize = compact ? "h-11 w-11" : "h-12 w-12";

  return (
    <div className="flex min-w-0 items-center gap-3">
      <div
        className={`${markSize} grid shrink-0 place-items-center rounded-2xl border border-slate-200 bg-white p-1 shadow-[0_16px_40px_-28px_rgba(15,23,42,.45)] backdrop-blur-md`}
      >
        <svg
          viewBox="0 0 48 48"
          role="img"
          aria-label="Kangaroo AJ S.A.S."
          className="h-full w-full"
        >
          <rect width="48" height="48" rx="12" fill="#07111f" />
          <path
            d="M29.7 11.8c5.4 3.4 7.8 8.9 6.4 14.6-1.6 6.7-7.7 11.2-15.1 11.2H12.4c2.6-1.7 5.7-3 9.1-3.8 5.8-1.3 9.8-4.9 10.7-9.6.6-3.5-.6-6.6-3.3-8.7-2.7 5.3-6.6 9.4-12.2 12.7 3.1-4.4 5.8-9.8 7.5-16.4h5.5Z"
            fill="url(#logo-gold)"
          />
          <path
            d="M31.4 14.2c2.2-.5 4.2-1.5 6-3.1-.5 2.7-1.8 4.8-4.1 6.4"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 30.6c-2.2 2.2-4.5 4.1-6.8 5.8"
            fill="none"
            stroke="#f8fafc"
            strokeOpacity=".72"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="31.6" cy="17.8" r="1.2" fill="#07111f" />
          <defs>
            <linearGradient
              id="logo-gold"
              x1="12.4"
              x2="37.2"
              y1="37.6"
              y2="11.2"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f59e0b" />
              <stop offset=".52" stopColor="#facc15" />
              <stop offset="1" stopColor="#d97706" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="hidden min-w-0 leading-none sm:block">
        <div className="text-[15px] font-bold text-slate-950">KANGAROO</div>
        <div className="mt-1 text-[11px] uppercase text-gold">AJ SAS</div>
      </div>
    </div>
  );
}
