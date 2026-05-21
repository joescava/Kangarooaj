import { useEffect, type ReactNode } from "react";
import { hasAnalyticsConsent } from "@/features/consent/hooks/useConsent";
import { initGA, observeScrollDepth, trackPageView } from "@/lib/analytics";
import { observeWebVitals } from "@/lib/webVitals";

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (hasAnalyticsConsent()) {
      initGA();
      trackPageView(window.location.pathname);
      observeWebVitals();
    }
    const disconnectScrollDepth = observeScrollDepth();
    return disconnectScrollDepth;
  }, []);
  return <>{children}</>;
}
