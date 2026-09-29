import { Icon } from "@/components/core/Icon";
import { WHATSAPP_HREF } from "@/lib/site";

/** Site-wide shortcut for urgent enquiries: opens a WhatsApp chat (message or call from there). */
export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Urgent enquiry? Message or call on WhatsApp"
      className="mu-wa"
    >
      <Icon name="message-circle" size={22} />
      <span className="mu-wa-label">Urgent? WhatsApp me</span>
    </a>
  );
}
