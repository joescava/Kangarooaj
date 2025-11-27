import clsx from "clsx";
import type { ContainerProps } from "@/types/ui";

export function Container({ className, children, ...rest }: ContainerProps) {
  return (
    <div className={clsx("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)} {...rest}>
      {children}
    </div>
  );
}
