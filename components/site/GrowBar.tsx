"use client";
import React, { useRef } from "react";
import { useInView, prefersReducedMotion } from "@/components/motion/useInView";

/** A horizontal bar that grows from the left when it scrolls into view (transform only, honours reduced motion). */
export function GrowBar({ pct, tone, delay = 0 }: { pct: number; tone: "before" | "after"; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const on = inView || prefersReducedMotion();
  return (
    <div ref={ref} style={{ height: 14, borderRadius: 999, background: "var(--surface-muted)", overflow: "hidden" }}>
      <div
        style={{
          height: "100%",
          width: `${Math.max(3, Math.min(100, pct))}%`,
          borderRadius: 999,
          background: tone === "after" ? "var(--brand)" : "var(--border-strong)",
          transformOrigin: "left center",
          transform: on ? "scaleX(1)" : "scaleX(0)",
          transition: `transform 1100ms var(--ease-out) ${delay}ms`,
        }}
      />
    </div>
  );
}
