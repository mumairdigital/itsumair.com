"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK;
const CAL_NAMESPACE = "visibility-review";

export function CalEmbed() {
  useEffect(() => {
    if (!CAL_LINK) return;

    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#6700c8" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  if (!CAL_LINK) {
    return (
      <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-dashed border-border bg-background p-8 text-center text-body text-text-secondary">
        Booking calendar connects once NEXT_PUBLIC_CAL_LINK is configured.
      </div>
    );
  }

  return (
    <Cal
      namespace={CAL_NAMESPACE}
      calLink={CAL_LINK}
      style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
