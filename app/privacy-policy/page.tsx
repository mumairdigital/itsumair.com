import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy policy", description: "How this website handles your information." };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" />
      <section style={{ paddingBottom: "var(--section-y-tight)" }}>
        <div className="mu-container" style={{ maxWidth: "var(--container-sm)", display: "flex", flexDirection: "column", gap: 20 }}>
          <p>This site doesn&apos;t use accounts or store your details on its own servers.</p>
          <h2 className="mu-h3">What I receive</h2>
          <p>If you use the contact form, your name, email address, optional website and message are emailed to me through Resend, an email delivery service. I use them only to reply to you and don&apos;t share them with anyone else. The site itself doesn&apos;t store form submissions.</p>
          <p>If you message me on WhatsApp, the conversation is handled by WhatsApp under its own privacy policy. If you book a call, the booking is handled by Google Calendar.</p>
          <h2 className="mu-h3">Cookies and storage</h2>
          <p>The site saves your light or dark theme choice in your browser&apos;s local storage. It isn&apos;t sent anywhere.</p>
          <h2 className="mu-h3">Questions</h2>
          <p>Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> to ask what I hold about you or to have it deleted.</p>
          <p style={{ color: "var(--text-muted)", fontSize: 14 }}>Update this page if analytics are added later.</p>
        </div>
      </section>
    </>
  );
}
