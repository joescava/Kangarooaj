// Helpers de analítica. Aquí puedes conectar Google Analytics, Plausible, etc.

const isBrowser = typeof window !== "undefined";

export function trackPageView(path: string) {
  if (!isBrowser) return;
  // Ejemplo: window.gtag?.("config", "GA_MEASUREMENT_ID", { page_path: path });
}

export function trackEvent(event: string, params?: Record<string, unknown>) {
  if (!isBrowser) return;
  // Ejemplo: window.gtag?.("event", event, params);
}
