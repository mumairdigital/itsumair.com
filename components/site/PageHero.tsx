import { Reveal } from "@/components/motion/Reveal";

export function PageHero({ eyebrow, title, lead, children }: { eyebrow?: string; title: React.ReactNode; lead?: string; children?: React.ReactNode }) {
  return (
    <section style={{ padding: "clamp(48px,7vw,104px) 0 var(--section-y-tight)" }}>
      <div className="mu-container" style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
        {eyebrow && <Reveal><span className="mu-eyebrow">{eyebrow}</span></Reveal>}
        <Reveal delay={80}><h1 className="mu-h1" style={{ maxWidth: 900, fontSize: "clamp(38px,5.4vw,72px)" }}>{title}</h1></Reveal>
        {lead && <Reveal delay={160}><p className="mu-lead" style={{ maxWidth: 680 }}>{lead}</p></Reveal>}
        {children && <Reveal delay={240}>{children}</Reveal>}
      </div>
    </section>
  );
}
