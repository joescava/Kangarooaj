"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  children: ReactNode;
}

export function Button({ variant = "primary", className, children, ...rest }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-brand-500";
  const variants: Record<string, string> = {
    primary:
      "bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 shadow-md shadow-brand-500/30",
    ghost: "bg-transparent hover:bg-slate-800/60 text-slate-100 border border-slate-700 px-4 py-2",
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}