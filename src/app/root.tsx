import type { ReactNode } from "react";
import { AnalyticsProvider } from "./providers/AnalyticsProvider";
import { QueryProvider } from "./providers/QueryProvider";
import { RegionProvider } from "./providers/RegionProvider";

export function AppRoot({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <RegionProvider>
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </RegionProvider>
    </QueryProvider>
  );
}
