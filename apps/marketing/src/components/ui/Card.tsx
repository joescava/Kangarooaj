import type { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/40 backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}
