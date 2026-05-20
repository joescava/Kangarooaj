import { useEffect, type ReactNode } from "react";
import { hasAnalyticsConsent } from "../../modules/consent/hooks/useConsent";
import {
  initGA,
  observeScrollDepth,
  trackPageView,
} from "../../shared/lib/analytics";
import { observeWebVitals } from "../../shared/lib/web-vitals";

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
