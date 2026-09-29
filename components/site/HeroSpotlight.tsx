"use client";
import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ProofFrame } from "@/components/motion/ProofFrame";
import { PROOF } from "@/lib/proof";

export function HeroSpotlight() {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % PROOF.length), 3800);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <Reveal delay={200} y={24}>
      <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ position: "relative", aspectRatio: "16/10", marginRight: 36 }}>
          {PROOF.map((p, k) => {
            const d = (k - i + PROOF.length) % PROOF.length;
            return (
              <div key={p.id} aria-hidden={d !== 0} style={{ position: "absolute", inset: 0, transform: `translate(${d * 18}px, ${-d * 18}px) scale(${1 - d * 0.05})`, transformOrigin: "left bottom", opacity: d > 2 ? 0 : 1 - d * 0.25, zIndex: PROOF.length - d, transition: "transform var(--dur-slower) var(--ease-out), opacity var(--dur-slower) var(--ease-out)" }}>
                <ProofFrame src={p.src} alt={p.alt} label={p.label} ratio="2/1" style={{ height: "100%" }} />
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ flex: 1 }} aria-live="polite">
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 30, letterSpacing: "-.03em", color: "var(--text-strong)", lineHeight: 1 }}>
              {PROOF[i].stat} <span style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 15, color: "var(--text-muted)", letterSpacing: 0 }}>{PROOF[i].statLabel}</span>
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", marginTop: 6 }}>{PROOF[i].label}</div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {PROOF.map((p, k) => (
              <button key={p.id} aria-label={`Show result ${k + 1}`} onClick={() => setI(k)} style={{ width: k === i ? 28 : 8, height: 8, borderRadius: 4, border: "none", padding: 0, cursor: "pointer", background: k === i ? "var(--brand)" : "var(--border-default)", transition: "width var(--dur-base) var(--ease-out)" }} />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
