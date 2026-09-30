"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { CompareSlider } from "@/components/site/CompareSlider";
import type { BAMetric, BAProject } from "@/lib/before-after";

const Shot = ({ src, alt }: { src: string; alt: string }) => (
  <Image src={src} alt={alt} fill sizes="(max-width: 860px) 100vw, 66vw" style={{ objectFit: "cover", objectPosition: "top" }} />
);

const monoLabel: React.CSSProperties = { fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-muted)" };

function Metric({ m, k }: { m: BAMetric; k: number }) {
  return (
    <Reveal delay={k * 80} style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 16, borderTop: "1px solid var(--border-subtle)" }}>
      <span style={monoLabel}>{m.label}</span>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
        {!m.onlyAfter && (
          <>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, color: "var(--text-faint)", textDecoration: "line-through", textDecorationThickness: 1.5 }}>
              {m.raw ? m.raw[0] : `${m.prefix ?? ""}${m.before}${m.suffix ?? ""}`}
            </span>
            <ArrowRight size={16} strokeWidth={1.75} color="var(--text-faint)" />
          </>
        )}
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(30px,3vw,40px)", letterSpacing: "-.035em", lineHeight: 1, color: "var(--text-brand)" }}>
          {m.raw ? m.raw[1] : <CountUp value={m.after} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />}
        </span>
      </div>
    </Reveal>
  );
}

/** Project picker + drag-to-compare + metrics. Renders nothing until there is at least one real pair. */
export function BeforeAfterSliders({ projects }: { projects: BAProject[] }) {
  const [i, setI] = useState(0);
  if (!projects.length) return null;
  const p = projects[i];

  return (
    <div className="mu-ba-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,4fr) minmax(0,8fr)", gap: "clamp(24px,4vw,56px)", alignItems: "start" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {projects.length > 1 && (
          <div role="tablist" aria-label="Projects" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {projects.map((x, k) => {
              const on = k === i;
              return (
                <button
                  key={x.id}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setI(k)}
                  style={{ textAlign: "left", background: on ? "var(--surface-card)" : "transparent", border: `1px solid ${on ? "var(--border-subtle)" : "transparent"}`, boxShadow: on ? "var(--shadow-sm)" : "none", borderRadius: "var(--radius-md)", padding: "14px 16px", cursor: "pointer", display: "flex", gap: 14, alignItems: "center", font: "inherit" }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: on ? "var(--text-brand)" : "var(--text-faint)" }}>{String(k + 1).padStart(2, "0")}</span>
                  <span style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontWeight: 600, fontSize: 15, color: on ? "var(--text-strong)" : "var(--text-muted)" }}>{x.client}</span>
                    <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{x.service}</span>
                  </span>
                  <ArrowRight size={16} strokeWidth={1.75} color={on ? "var(--brand)" : "transparent"} />
                </button>
              );
            })}
          </div>
        )}
        {projects.length === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ fontWeight: 600, fontSize: 16, color: "var(--text-strong)" }}>{p.client}</span>
            <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{p.service}</span>
          </div>
        )}
        <p key={p.id + "-s"} className="mu-ba-in" style={{ fontSize: 16, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>{p.summary}</p>
        {p.href && (
          <Link href={p.href} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 600, fontSize: 14, color: "var(--text-link)", textDecoration: "none" }}>
            Read the full case study <ArrowUpRight size={18} strokeWidth={1.75} />
          </Link>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <Reveal y={24} key={p.id}>
          <CompareSlider before={<Shot {...p.before} />} after={<Shot {...p.after} />} />
        </Reveal>
        <div key={p.id + "-m"} className="mu-ba-metrics" style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(3, p.metrics.length)},minmax(0,1fr))`, gap: 24 }}>
          {p.metrics.map((m, k) => <Metric key={m.label} m={m} k={k} />)}
        </div>
      </div>
      <style>{`
        @keyframes mu-ba-in{from{opacity:0;transform:translateY(6px)}}
        .mu-ba-in{animation:mu-ba-in 400ms cubic-bezier(.22,1,.36,1)}
        @media (max-width:860px){.mu-ba-grid{grid-template-columns:1fr!important}}
        @media (max-width:560px){.mu-ba-metrics{grid-template-columns:1fr!important}}
        @media (prefers-reduced-motion:reduce){.mu-ba-in{animation:none}}
      `}</style>
    </div>
  );
}
