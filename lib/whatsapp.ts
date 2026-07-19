const DEFAULT_MESSAGE =
  "Hi Umair, I'd like to talk about getting more bathroom remodeling leads from Google.";

/**
 * Builds a wa.me deep link with a pre-filled message. The number lives in
 * NEXT_PUBLIC_WHATSAPP_NUMBER so it's never hardcoded in component markup
 * (see 07-development-handoff/claude-code-project-brief.md, contact strategy).
 */
export function getWhatsAppUrl(message: string = DEFAULT_MESSAGE): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
