/**
 * Branded transactional emails. Table layout + inline styles for email-client compatibility.
 * Self-contained on purpose (no imports) so it can be previewed outside Next.
 */
export type EmailLinks = { site: string; book: string; whatsapp: string; email: string; whatsappDisplay: string };
export type Enquiry = { name: string; email: string; site?: string; message: string };

const C = {
  brand: "#6700C8",
  brandSubtle: "#F6F0FD",
  ink900: "#18131D",
  ink700: "#3A3340",
  ink500: "#6E6570",
  line: "#EBE7E2",
  page: "#FBF9F6",
  card: "#FFFFFF",
  green: "#12693B",
};
const FONT = "'Helvetica Neue',Helvetica,Arial,sans-serif";

const ESCAPES: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
export const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ESCAPES[c]);

function button(href: string, label: string, primary = true) {
  const bg = primary ? C.brand : C.card;
  const fg = primary ? "#FFFFFF" : C.ink900;
  const border = primary ? C.brand : "#DAD4CE";
  return `<a href="${esc(href)}" style="display:inline-block;background:${bg};color:${fg};border:1px solid ${border};border-radius:10px;padding:13px 22px;font-family:${FONT};font-size:15px;font-weight:600;text-decoration:none;">${esc(label)}</a>`;
}

function shell(preheader: string, body: string, links: EmailLinks) {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>Muhammad Umair</title></head>
<body style="margin:0;padding:0;background:${C.page};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.page};"><tr><td align="center" style="padding:32px 16px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">
    <tr><td style="padding:0 4px 20px;font-family:${FONT};font-size:22px;font-weight:800;letter-spacing:-0.03em;color:${C.ink900};">Muhammad Umair<span style="color:${C.brand};">.</span></td></tr>
    <tr><td style="background:${C.card};border:1px solid ${C.line};border-radius:20px;padding:36px 32px;font-family:${FONT};color:${C.ink700};font-size:16px;line-height:1.6;">
      ${body}
    </td></tr>
    <tr><td style="padding:20px 8px 0;font-family:${FONT};font-size:12px;line-height:1.6;color:${C.ink500};">
      <a href="${esc(links.site)}" style="color:${C.ink500};">${esc(links.site.replace(/^https?:\/\//, ""))}</a> &nbsp;·&nbsp; Web design, SEO &amp; AI automation
    </td></tr>
  </table>
</td></tr></table>
</body></html>`;
}

const label = (t: string) => `<div style="font-family:'Courier New',monospace;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:${C.brand};margin:0 0 8px;">${esc(t)}</div>`;
const h1 = (t: string) => `<h1 style="margin:0 0 16px;font-family:${FONT};font-size:28px;line-height:1.15;letter-spacing:-0.02em;color:${C.ink900};">${t}</h1>`;

/** Email to you: a new enquiry from the contact form. */
export function ownerEmail(e: Enquiry, links: EmailLinks) {
  const row = (k: string, v: string) =>
    `<tr><td style="padding:10px 0;border-top:1px solid ${C.line};width:110px;font-size:13px;color:${C.ink500};vertical-align:top;">${k}</td><td style="padding:10px 0;border-top:1px solid ${C.line};font-size:15px;color:${C.ink900};vertical-align:top;">${v}</td></tr>`;
  const siteRow = e.site ? row("Website", `<a href="${esc(/^https?:\/\//.test(e.site) ? e.site : `https://${e.site}`)}" style="color:${C.brand};">${esc(e.site)}</a>`) : row("Website", "—");
  const html = shell(
    `${e.name} sent an enquiry through your website.`,
    `${label("New enquiry")}
     ${h1(`${esc(e.name)} wants to talk`)}
     <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
       ${row("Name", esc(e.name))}
       ${row("Email", `<a href="mailto:${esc(e.email)}" style="color:${C.brand};">${esc(e.email)}</a>`)}
       ${siteRow}
     </table>
     ${label("Message")}
     <div style="background:${C.brandSubtle};border-radius:12px;padding:18px 20px;color:${C.ink900};font-size:15px;line-height:1.65;">${esc(e.message).replace(/\n/g, "<br>")}</div>
     <div style="margin-top:28px;">${button(`mailto:${e.email}?subject=${encodeURIComponent("Re: your enquiry")}`, `Reply to ${e.name.split(" ")[0]}`)}</div>
     <p style="margin:24px 0 0;font-size:13px;color:${C.ink500};">You can also just hit Reply: it goes straight to ${esc(e.email)}.</p>`,
    links,
  );
  const text = `New enquiry from your website\n\nName: ${e.name}\nEmail: ${e.email}\nWebsite: ${e.site ?? "-"}\n\n${e.message}\n\nReply to this email to respond to ${e.name}.`;
  return { subject: `New enquiry from ${e.name}`, html, text };
}

/** Confirmation to the visitor. Deliberately doesn't echo their message back. */
export function confirmationEmail(e: Enquiry, links: EmailLinks) {
  const first = e.name.split(" ")[0] || "there";
  const step = (n: string, t: string) =>
    `<tr><td style="width:36px;vertical-align:top;padding:0 0 14px;"><div style="width:26px;height:26px;border-radius:13px;background:${C.brandSubtle};color:${C.brand};font-family:'Courier New',monospace;font-size:12px;font-weight:700;line-height:26px;text-align:center;">${n}</div></td><td style="vertical-align:top;padding:2px 0 14px;font-size:15px;color:${C.ink700};">${t}</td></tr>`;
  const html = shell(
    "Thanks for getting in touch. I'll reply personally.",
    `${label("Message received")}
     ${h1(`Thanks, ${esc(first)}. I&rsquo;ve got your message.`)}
     <p style="margin:0 0 24px;">I read every enquiry myself and will reply to <strong style="color:${C.ink900};">${esc(e.email)}</strong> personally, usually within one working day.</p>
     ${label("What happens next")}
     <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 12px;">
       ${step("1", "I look at your message and, if you shared it, your website.")}
       ${step("2", "I reply with an honest view of where the biggest opportunity is.")}
       ${step("3", "If it makes sense, we book a free 30-minute call.")}
     </table>
     <div style="margin:8px 0 28px;">${button(links.book, "Book a free call now")}</div>
     <div style="background:${C.brandSubtle};border-radius:12px;padding:18px 20px;font-size:15px;color:${C.ink900};">
       <strong>Something urgent?</strong> Message or call me on WhatsApp instead: <a href="${esc(links.whatsapp)}" style="color:${C.brand};font-weight:600;white-space:nowrap;">${esc(links.whatsappDisplay)}</a>
     </div>
     <p style="margin:28px 0 0;color:${C.ink700};">Speak soon,<br><strong style="color:${C.ink900};">Muhammad Umair</strong></p>
     <p style="margin:20px 0 0;font-size:12px;color:${C.ink500};">You&rsquo;re receiving this because you sent a message through ${esc(links.site.replace(/^https?:\/\//, ""))}. If that wasn&rsquo;t you, you can ignore this email.</p>`,
    links,
  );
  const text = `Thanks, ${first}. I've got your message.\n\nI read every enquiry myself and will reply to ${e.email} personally, usually within one working day.\n\nWhat happens next:\n1. I look at your message and, if you shared it, your website.\n2. I reply with an honest view of where the biggest opportunity is.\n3. If it makes sense, we book a free 30-minute call.\n\nBook a free call now: ${links.book}\n\nSomething urgent? WhatsApp me: ${links.whatsapp}\n\nSpeak soon,\nMuhammad Umair\n\nYou're receiving this because you sent a message through ${links.site.replace(/^https?:\/\//, "")}. If that wasn't you, you can ignore this email.`;
  return { subject: "Thanks for your message | Muhammad Umair", html, text };
}
