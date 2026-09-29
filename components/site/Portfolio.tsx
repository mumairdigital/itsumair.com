"use client";
import React from "react";
import { Badge } from "@/components/core/Badge";
import { Icon } from "@/components/core/Icon";
import { Button } from "@/components/core/Button";
import { Card } from "@/components/layout/Card";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Tabs } from "@/components/navigation/Tabs";
import { Reveal } from "@/components/motion/Reveal";
import { ProofFrame } from "@/components/motion/ProofFrame";
import { WORK, WORK_FILTERS } from "@/lib/work";

export function Portfolio({ showAllLink = true }: { showAllLink?: boolean }) {
  const [f, setF] = React.useState("All");
  const list = WORK.filter((p) => f === "All" || p.kind === f);
  return (
    <section id="work" style={{ padding: "var(--section-y) 0" }}>
      <div className="mu-container" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <Reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
          <SectionHeader eyebrow="Portfolio" title="Results, not just deliverables" lead="A selection of recent projects. Each one started with a business goal, not a design brief." />
          <Tabs variant="pill" items={WORK_FILTERS} value={f} onChange={setF} />
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,320px),1fr))", gap: "var(--grid-gap)" }}>
          {list.map((p, i) => (
            <Reveal key={p.slug + f} delay={(i % 3) * 80} style={{ display: "flex" }}>
              <Card
                href={`/work/${p.slug}`}
                padding="md"
                style={{ flex: 1 }}
                media={p.cover ? <ProofFrame src={p.cover.src} alt={p.cover.alt} ratio="16/10" chrome={false} fit="cover" position="left top" style={{ borderRadius: 0, border: "none", boxShadow: "none" }} /> : <div style={{ aspectRatio: "16/10", background: "var(--brand-subtle)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(40px,5vw,64px)", letterSpacing: "-.04em", color: "var(--text-brand)" }}>{p.stat}</div>}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                  <Badge tone="brand">{p.tag}</Badge>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>{p.client}</span>
                </div>
                <h3 style={{ fontSize: 22, lineHeight: 1.2 }}>{p.title}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: "auto" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, color: "var(--text-brand)", letterSpacing: "-.03em" }}>{p.stat}</span>
                  <span style={{ fontSize: 14, color: "var(--text-muted)", flex: 1 }}>{p.statLabel}</span>
                  <Icon name="arrow-up-right" size={20} color="var(--text-muted)" />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
        {showAllLink && <div><Button variant="secondary" iconRight="arrow-right" href="/work">All work</Button></div>}
      </div>
    </section>
  );
}
