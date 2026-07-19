export type LeadEmailData = {
  sourceLabel: string;
  name: string;
  business: string;
  website?: string;
  contact: string;
  problemLabel: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, valueHtml: string, isLast = false): string {
  const borderStyle = isLast ? "" : "border-bottom:1px solid #e4e1e8;";
  return `
    <tr>
      <td style="padding:12px 0;${borderStyle}color:#57525e;font-size:13px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;width:130px;vertical-align:top;">${label}</td>
      <td style="padding:12px 0;${borderStyle}color:#14121a;font-size:15px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;vertical-align:top;">${valueHtml}</td>
    </tr>`;
}

/** Branded HTML notification email, matching the site's design tokens (design-tokens-spec.md). */
export function buildLeadEmailHtml(data: LeadEmailData): string {
  const name = escapeHtml(data.name);
  const business = escapeHtml(data.business);
  const contact = escapeHtml(data.contact);
  const problemLabel = escapeHtml(data.problemLabel);
  const sourceLabel = escapeHtml(data.sourceLabel);

  const websiteHtml = data.website
    ? `<a href="https://${escapeHtml(data.website.replace(/^https?:\/\//, ""))}" style="color:#6700c8;text-decoration:none;font-weight:600;">${escapeHtml(data.website)}</a>`
    : `<span style="color:#57525e;">(not provided)</span>`;

  const contactIsEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact);
  const contactHtml = contactIsEmail
    ? `<a href="mailto:${contact}" style="color:#6700c8;text-decoration:none;font-weight:600;">${contact}</a>`
    : `<a href="tel:${contact.replace(/[^\d+]/g, "")}" style="color:#6700c8;text-decoration:none;font-weight:600;">${contact}</a>`;

  return `
<div style="background-color:#faf9fb;padding:32px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4e1e8;">
    <div style="background-color:#6700c8;padding:24px 32px;">
      <span style="color:#ffffff;font-size:20px;font-weight:700;">itsumair<span style="color:#d9b8ff;">.com</span></span>
    </div>
    <div style="padding:32px;">
      <span style="display:inline-block;background-color:#f3e6ff;color:#6700c8;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;padding:4px 12px;border-radius:999px;">${sourceLabel}</span>
      <h1 style="font-size:20px;font-weight:700;color:#14121a;margin:16px 0 24px;">New lead: ${business}</h1>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        ${row("Name", name)}
        ${row("Business", business)}
        ${row("Website", websiteHtml)}
        ${row("Contact", contactHtml)}
        ${row("Biggest problem", `<strong>${problemLabel}</strong>`, true)}
      </table>
    </div>
    <div style="background-color:#faf9fb;padding:16px 32px;border-top:1px solid #e4e1e8;">
      <p style="margin:0;color:#57525e;font-size:12px;">Sent automatically from the itsumair.com ${sourceLabel.toLowerCase()} form.</p>
    </div>
  </div>
</div>`.trim();
}

/** Plain-text fallback for clients that don't render HTML. */
export function buildLeadEmailText(data: LeadEmailData): string {
  return [
    `Source: ${data.sourceLabel}`,
    `Name: ${data.name}`,
    `Business: ${data.business}`,
    `Website: ${data.website || "(not provided)"}`,
    `Contact: ${data.contact}`,
    `Biggest problem: ${data.problemLabel}`,
  ].join("\n");
}
