import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getProblemLabel } from "@/lib/lead-form";

type LeadPayload = {
  name?: string;
  business?: string;
  website?: string;
  contact?: string;
  problem?: string;
  hp?: string;
  source?: "audit" | "contact";
};

// Must be on a domain verified in the Resend dashboard, or sends will fail.
const FROM_ADDRESS = "itsumair.com Leads <leads@itsumair.com>";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = (await request.json()) as LeadPayload;

  // Honeypot: bots fill every field, real users never see this one. Pretend success.
  if (body.hp) {
    return NextResponse.json({ ok: true });
  }

  if (!body.name || !body.business || !body.contact || !body.problem) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL;
  if (!apiKey || !notificationEmail) {
    console.error(
      `${!apiKey ? "RESEND_API_KEY" : "LEAD_NOTIFICATION_EMAIL"} is not configured; lead was not delivered:`,
      body
    );
    return NextResponse.json({ error: "Form is not configured yet." }, { status: 501 });
  }

  const resend = new Resend(apiKey);
  const sourceLabel = body.source === "audit" ? "Free Audit Request" : "Contact Form";
  const isEmail = EMAIL_PATTERN.test(body.contact ?? "");

  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: notificationEmail,
    ...(isEmail ? { replyTo: body.contact } : {}),
    subject: `${sourceLabel}: ${body.business}`,
    text: [
      `Source: ${sourceLabel}`,
      `Name: ${body.name}`,
      `Business: ${body.business}`,
      `Website: ${body.website || "(not provided)"}`,
      `Email or phone: ${body.contact}`,
      `Biggest problem: ${getProblemLabel(body.problem)}`,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend rejected the submission:", error);
    return NextResponse.json({ error: "The email provider rejected the submission." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
