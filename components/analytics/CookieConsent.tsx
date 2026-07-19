"use client";

import { Suspense, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { GoogleAnalytics, sendGAEvent } from "@next/third-parties/google";
import { Button } from "@/components/ui/Button";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const CONSENT_STORAGE_KEY = "cookie-consent";

type Consent = "accepted" | "declined";
type ConsentSnapshot = Consent | "undecided";

const listeners = new Set<() => void>();

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): ConsentSnapshot {
  const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return stored === "accepted" || stored === "declined" ? stored : "undecided";
}

// No localStorage during SSR/static generation — the banner simply doesn't render
// server-side and useSyncExternalStore reconciles it against the real client value
// right after hydration, without the setState-in-effect pattern.
function getServerSnapshot(): ConsentSnapshot {
  return "undecided";
}

function setStoredConsent(value: Consent) {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  notifyListeners();
}

/**
 * Sends a page_view on every route change. GA4's gtag.js only fires the automatic
 * page_view once, on initial script load — client-side Next.js navigations need this
 * explicit call (see Next.js docs for next/third-parties/google). Must stay inside a
 * Suspense boundary: useSearchParams would otherwise force every page into dynamic
 * rendering.
 */
function GAPageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    sendGAEvent("event", "page_view", { page_path: query ? `${pathname}?${query}` : pathname });
  }, [pathname, searchParams]);

  return null;
}

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Nothing to ask consent for, and nothing to load.
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      {consent === "accepted" && (
        <>
          <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
          <Suspense fallback={null}>
            <GAPageViewTracker />
          </Suspense>
        </>
      )}

      {consent === "undecided" && (
        <div
          role="region"
          aria-label="Cookie consent"
          className="border-b border-border bg-surface px-4 py-4 sm:px-6"
        >
          <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-small text-text-secondary">
              This site uses analytics cookies to understand traffic. See the{" "}
              <Link href="/privacy-policy/" className="font-semibold text-brand-primary hover:underline">
                privacy policy
              </Link>{" "}
              for details.
            </p>
            <div className="flex shrink-0 gap-3">
              <Button type="button" variant="secondary" size="sm" onClick={() => setStoredConsent("declined")}>
                Decline
              </Button>
              <Button type="button" variant="primary" size="sm" onClick={() => setStoredConsent("accepted")}>
                Accept
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
