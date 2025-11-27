"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-900/80 bg-slate-950/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-emerald-400 text-xs font-bold text-slate-950 shadow-md shadow-brand-500/50">
            KJ
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-50">{siteConfig.shortName}</span>
            <span className="text-[11px] text-slate-400">Soluciones y consultoría</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {siteConfig.navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx("transition hover:text-white", active && "text-brand-300")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex">
          <Link
            href="#contacto"
            className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-white/30 transition hover:bg-slate-100"
          >
            Agenda una llamada
          </Link>
        </div>
      </Container>
    </header>
  );
}
