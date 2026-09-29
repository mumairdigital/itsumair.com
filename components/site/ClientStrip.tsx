import { Marquee } from "@/components/motion/Marquee";

/** Anonymous by design: areas of work, never client names. */
const AREAS = ["Web design", "Local SEO", "Google Business Profile", "E-commerce", "Technical SEO", "Site recovery", "Automation"];

export function ClientStrip() {
  return (
    <section aria-label="Areas of work" style={{ padding: "0 0 var(--section-y-tight)" }}>
      <div className="mu-container" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <span className="mu-eyebrow" style={{ color: "var(--text-muted)", textAlign: "center" }}>Trusted by local businesses and growing teams</span>
        <Marquee duration={45} gap={56}>
          {AREAS.map((n) => (
            <span key={n} style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, letterSpacing: "-.02em", color: "var(--text-faint)", whiteSpace: "nowrap" }}>{n}</span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
