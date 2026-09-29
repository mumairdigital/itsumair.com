import { Button } from "@/components/core/Button";
import { Reveal } from "@/components/motion/Reveal";
import { BOOKING_HREF } from "@/lib/site";

/** The page's one violet surface. */
export function CtaBand({ title = "Ready to see what this could do for your business?", body = "Book a free call. I'll look at your site and tell you honestly where the biggest opportunity is." }: { title?: string; body?: string }) {
  return (
    <section className="mu-section">
      <div className="mu-container">
        <Reveal>
          <div data-theme="dark" style={{ background: "var(--violet-600)", borderRadius: "var(--radius-xl)", padding: "clamp(40px,6vw,80px)", display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
            <h2 className="mu-h1" style={{ color: "#fff", maxWidth: 720 }}>{title}</h2>
            <p className="mu-lead" style={{ color: "var(--violet-100)", maxWidth: 560 }}>{body}</p>
            <Button size="lg" variant="inverse" iconRight="arrow-right" href={BOOKING_HREF}>Book a free call</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
