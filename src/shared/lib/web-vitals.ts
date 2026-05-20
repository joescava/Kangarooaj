import { trackEvent } from "./analytics";

const observedMetrics = new Set<string>();

function reportMetric(name: string, value: number) {
  if (!Number.isFinite(value)) return;
  trackEvent("web_vital", {
    metric_name: name,
    metric_value: Math.round(value),
  });
}

export function observeWebVitals() {
  if (typeof PerformanceObserver === "undefined") return;
  observeEntryType(
    "largest-contentful-paint",
    "LCP",
    (entry) => entry.startTime,
  );
  observeEntryType("layout-shift", "CLS", (entry) =>
    (entry as PerformanceEntry & { value?: number; hadRecentInput?: boolean })
      .hadRecentInput
      ? 0
      : ((entry as PerformanceEntry & { value?: number }).value ?? 0),
  );
  observeEntryType(
    "event",
    "INP",
    (entry) =>
      (entry as PerformanceEntry & { duration?: number }).duration ?? 0,
  );
}

function observeEntryType(
  type: string,
  name: string,
  getValue: (entry: PerformanceEntry) => number,
) {
  if (observedMetrics.has(name)) return;
  observedMetrics.add(name);
  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries())
        reportMetric(name, getValue(entry));
    });
    observer.observe({ type, buffered: true });
  } catch {
    observedMetrics.delete(name);
  }
}
