export type ContactPayload = { name: string; email: string; site?: string; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Returns the cleaned payload, or an error message safe to show to the visitor. */
export function validateContact(input: unknown): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (!input || typeof input !== "object") return { ok: false, error: "Invalid request." };
  const o = input as Record<string, unknown>;
  const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const name = str(o.name, 100);
  const email = str(o.email, 200);
  const site = str(o.site, 200);
  const message = str(o.message, 4000);
  if (!name) return { ok: false, error: "Please enter your name." };
  if (!EMAIL_RE.test(email)) return { ok: false, error: "Please enter a valid email address." };
  if (message.length < 5) return { ok: false, error: "Please tell me a little about how I can help." };
  return { ok: true, data: { name, email, site: site || undefined, message } };
}
