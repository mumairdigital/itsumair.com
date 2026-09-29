import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = { title: "Terms", description: "Terms for using this website." };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms" />
      <section style={{ paddingBottom: "var(--section-y-tight)" }}>
        <div className="mu-container" style={{ maxWidth: "var(--container-sm)", display: "flex", flexDirection: "column", gap: 20 }}>
          <p>This website is provided for information about my services. Nothing here is a contract or a guarantee of results.</p>
          <h2 className="mu-h3">Results</h2>
          <p>Case studies describe past projects. Results depend on each business, market and starting point, and won&apos;t be the same for everyone.</p>
          <h2 className="mu-h3">Projects</h2>
          <p>Paid work is agreed separately in writing before it starts, including scope, price and timing.</p>
          <h2 className="mu-h3">Content</h2>
          <p>The content and design of this site belong to Muhammad Umair. Please ask before reusing it.</p>
          <h2 className="mu-h3">Contact</h2>
          <p>Questions about these terms: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
          <p style={{ color: "var(--text-muted)", fontSize: 14 }}>A plain-language starting point; have it reviewed before relying on it.</p>
        </div>
      </section>
    </>
  );
}
