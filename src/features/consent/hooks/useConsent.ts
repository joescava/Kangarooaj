import { CONSENT_STORAGE_KEY } from "../constants/consentStorageKey";
import type { ConsentState } from "../types/consent.types";

export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
}

export function saveConsent(consent: ConsentState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
}

export function hasAnalyticsConsent() {
  return getConsent()?.analytics === true;
}
