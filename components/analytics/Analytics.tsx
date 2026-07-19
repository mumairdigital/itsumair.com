"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { GoogleAnalytics, sendGAEvent } from "@next/third-parties/google";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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

export function Analytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      <Suspense fallback={null}>
        <GAPageViewTracker />
      </Suspense>
    </>
  );
}
