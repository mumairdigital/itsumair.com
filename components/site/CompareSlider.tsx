"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { useInView, prefersReducedMotion } from "@/components/motion/useInView";

const EASE_OUT = "cubic-bezier(.22,1,.36,1)";
const EASE_IN_OUT = "cubic-bezier(.65,0,.35,1)";

/** Drag (or use arrow keys) to reveal "after" over "before". Both children must share the same size and crop. */
export function CompareSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  defaultValue = 50,
  ratio = "16/10",
  hint = true,
}: {
  before: React.ReactNode;
  after: React.ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
  defaultValue?: number;
  ratio?: string;
  hint?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.4 });
  const [pos, setPos] = useState(defaultValue);
  const [drag, setDrag] = useState(false);
  const [anim, setAnim] = useState(false);
  const set = (v: number) => setPos(Math.max(0, Math.min(100, v)));

  // One-time sweep so visitors can see it's draggable. State is only set from timers, never synchronously.
  useEffect(() => {
    if (!inView || !hint || prefersReducedMotion()) return;
    const seq = [72, 30, defaultValue];
    let i = 0;
    const start = setTimeout(() => setAnim(true), 0);
    const t = setInterval(() => {
      if (i >= seq.length) {
        clearInterval(t);
        setAnim(false);
        return;
      }
      setPos(seq[i++]);
    }, 700);
    return () => {
      clearTimeout(start);
      clearInterval(t);
    };
  }, [inView, hint, defaultValue]);

  const fromEvent = (e: React.PointerEvent) => {
    const r = ref.current!.getBoundingClientRect();
    set(((e.clientX - r.left) / r.width) * 100);
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") { set(pos - 5); e.preventDefault(); }
    if (e.key === "ArrowRight") { set(pos + 5); e.preventDefault(); }
    if (e.key === "Home") set(0);
    if (e.key === "End") set(100);
  };

  const clipT = anim ? `clip-path 700ms ${EASE_IN_OUT}` : "none";
  const leftT = anim ? `left 700ms ${EASE_IN_OUT}` : "none";
  const chip: React.CSSProperties = {
    position: "absolute", top: 16, zIndex: 3, padding: "6px 10px", borderRadius: "var(--radius-sm)",
    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500, letterSpacing: ".1em",
    textTransform: "uppercase", color: "#fff", pointerEvents: "none", transition: "opacity var(--dur-base)",
  };

  return (
    <div ref={ref} style={{ position: "relative", aspectRatio: ratio, borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--bg-sunken)", userSelect: "none", touchAction: "pan-y" }}>
      <div style={{ position: "absolute", inset: 0 }}>{before}</div>
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 0 0 ${pos}%)`, transition: clipT }}>{after}</div>
      <span style={{ ...chip, left: 16, background: "var(--ink-900)", opacity: pos > 12 ? 1 : 0 }}>{beforeLabel}</span>
      <span style={{ ...chip, right: 16, background: "var(--violet-600)", opacity: pos < 88 ? 1 : 0 }}>{afterLabel}</span>
      <div
        role="slider"
        tabIndex={0}
        aria-label="Before and after comparison"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={onKey}
        onPointerDown={(e) => { e.preventDefault(); setAnim(false); setDrag(true); e.currentTarget.setPointerCapture(e.pointerId); fromEvent(e); }}
        onPointerMove={(e) => drag && fromEvent(e)}
        onPointerUp={() => setDrag(false)}
        onPointerCancel={() => setDrag(false)}
        style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: 48, marginLeft: -24, zIndex: 4, cursor: "ew-resize", display: "flex", justifyContent: "center", transition: leftT, touchAction: "none" }}
      >
        <span style={{ width: 2, height: "100%", background: "#fff", boxShadow: "0 0 0 1px rgba(24,19,29,.12)" }} />
        <span style={{ position: "absolute", top: "50%", left: "50%", transform: `translate(-50%,-50%) scale(${drag ? 1.08 : 1})`, width: 48, height: 48, borderRadius: "50%", background: "#fff", color: "var(--violet-700)", boxShadow: "var(--shadow-lg)", display: "flex", alignItems: "center", justifyContent: "center", transition: `transform 120ms ${EASE_OUT}` }}>
          <ChevronsLeftRight size={22} strokeWidth={1.75} />
        </span>
      </div>
    </div>
  );
}
