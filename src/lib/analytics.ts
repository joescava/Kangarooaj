import { GOOGLE_TAG_MANAGER_HOST } from "@/config/constants";
import { environment } from "@/config/environmentSchema";
import { hasAnalyticsConsent } from "@/features/consent/hooks/useConsent";

type AnalyticsParams = Record<
  string,
  string | number | boolean | null | undefined
>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let initialized = false;

export function initGA() {
  const gaId = environment.VITE_GA_MEASUREMENT_ID;
  if (!gaId || initialized || typeof window === "undefined") return;
  try {
    const script = document.createElement("script");
    script.async = true;
    script.src = `${GOOGLE_TAG_MANAGER_HOST}/gtag/js?id=${gaId}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
    });
    window.gtag("js", new Date());
    window.gtag("config", gaId, { send_page_view: false, anonymize_ip: true });
    initialized = true;
  } catch (error) {
    if (environment.DEV) console.warn(error);
  }
}

function canTrack() {
  return Boolean(
    environment.VITE_GA_MEASUREMENT_ID &&
    typeof window !== "undefined" &&
    hasAnalyticsConsent(),
  );
}

export function trackPageView(path: string) {
  if (!canTrack()) return;
  if (!initialized) initGA();
  window.gtag?.("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (!canTrack()) return;
  if (!initialized) initGA();
  window.gtag?.("event", eventName, params);
}

export function observeScrollDepth() {
  if (typeof window === "undefined") return () => undefined;
  const sent = new Set<number>();
  const marks = [25, 50, 75, 100];
  const onScroll = () => {
    if (!canTrack()) return;
    const doc = document.documentElement;
    const scrollable = Math.max(1, doc.scrollHeight - window.innerHeight);
    const depth = Math.min(
      100,
      Math.round((window.scrollY / scrollable) * 100),
    );
    for (const mark of marks) {
      if (depth >= mark && !sent.has(mark)) {
        sent.add(mark);
        trackEvent(`scroll_depth_${mark}`, { percent: mark });
      }
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();
  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
  };
}
