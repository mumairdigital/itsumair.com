import type { Metadata } from "next";
import { Icon } from "@/components/core/Icon";
import { Button } from "@/components/core/Button";
import { PageHero } from "@/components/site/PageHero";
import { BOOKING_EMBED_URL, BOOKING_PAGE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a free call",
  description: "Book a free 30-minute call. I'll look at your site and tell you honestly where the biggest opportunity is.",
};

const POINTS = ["30 minutes, over Google Meet", "Free, with no sales script", "Please have your website address ready"];

export default function BookPage() {
  return (
    <>
      <PageHero eyebrow="Book a call" title={<>Pick a time that <span style={{ color: "var(--brand)" }}>suits you.</span></>} lead="A free 30-minute call about your business and goals. Available Monday to Friday." />
      <section style={{ paddingBottom: "var(--section-y-tight)" }}>
        <div className="mu-container" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: "12px 32px", color: "var(--text-body)" }}>
            {POINTS.map((p) => (
              <li key={p} style={{ display: "flex", gap: 8, alignItems: "center" }}><Icon name="check" size={18} color="var(--brand)" />{p}</li>
            ))}
          </ul>
          <div style={{ background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)", overflow: "hidden" }}>
            <iframe src={BOOKING_EMBED_URL} title="Book a free call with Muhammad Umair" style={{ border: 0, width: "100%", height: 760, display: "block" }} loading="lazy" />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", color: "var(--text-muted)", fontSize: 14 }}>
            <span>Calendar not loading?</span>
            <Button variant="secondary" size="sm" iconRight="arrow-up-right" href={BOOKING_PAGE_URL} target="_blank" rel="noopener noreferrer">Open the booking page</Button>
          </div>
        </div>
      </section>
    </>
  );
}
