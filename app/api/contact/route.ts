import { Resend } from "resend";
import { validateContact } from "@/lib/contact";
import { confirmationEmail, ownerEmail } from "@/lib/email-templates";
import { SITE_URL, BOOKING_HREF, WHATSAPP_HREF, WHATSAPP_DISPLAY, CONTACT_EMAIL } from "@/lib/site";

// Simple in-memory limiter: 5 requests per IP per 10 minutes. Resets on cold start; fine for a low-traffic form.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return Response.json({ error: "Too many messages. Please try again in a few minutes." }, { status: 429 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field. Pretend success so bots move on.
  if (body && typeof body === "object" && (body as Record<string, unknown>).company) return Response.json({ ok: true });

  const result = validateContact(body);
  if (!result.ok) return Response.json({ error: result.error }, { status: 400 });
  const { email } = result.data;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("Contact form: RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL must be set.");
    return Response.json({ error: "The form isn't available right now. Please email or WhatsApp me instead." }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const links = { site: SITE_URL, book: SITE_URL + BOOKING_HREF, whatsapp: WHATSAPP_HREF, whatsappDisplay: WHATSAPP_DISPLAY, email: CONTACT_EMAIL };

  // 1) The enquiry, to you. Reply-to is the visitor, so "Reply" answers them directly.
  const mine = ownerEmail(result.data, links);
  const { error } = await resend.emails.send({ from, to, replyTo: email, subject: mine.subject, html: mine.html, text: mine.text });
  if (error) {
    console.error("Contact form: Resend error", error);
    return Response.json({ error: "Something went wrong sending your message. Please email or WhatsApp me instead." }, { status: 502 });
  }

  // 2) A confirmation, to the visitor. Best effort: their message is already with you if this fails.
  const theirs = confirmationEmail(result.data, links);
  const { error: confirmError } = await resend.emails.send({ from, to: email, replyTo: to, subject: theirs.subject, html: theirs.html, text: theirs.text });
  if (confirmError) console.error("Contact form: confirmation email failed", confirmError);

  return Response.json({ ok: true });
}
