export const SITE_URL = "https://itsumair.com";
export const SITE_NAME = "Muhammad Umair";
export const CONTACT_EMAIL = "hello@itsumair.com";
export const BOOKING_HREF = "/book";
/** Google Calendar appointment schedule: 30-minute calls, Mon–Fri. */
export const BOOKING_PAGE_URL = "https://calendar.app.google/Y3aC9zKFiL9aLqbh6";
export const BOOKING_EMBED_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3mPFDXvXSA3g6XxhaVaIFQ7q2Lfr3VRtfrt1-3jQ1-7Uf1RY9zY5JOzJPxqbWCeo5go5gKiUDe?gv=true";

/** WhatsApp for urgent enquiries. Digits only, with country code. */
export const WHATSAPP_NUMBER = "923209943057";
export const WHATSAPP_DISPLAY = "+92 320 9943057";
export const WHATSAPP_MESSAGE = "Hi Umair, I have an urgent enquiry about my website / marketing.";
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  { slug: "web-design", icon: "layout-template", title: "Web design", body: "Fast, clear websites built to turn visitors into enquiries." },
  { slug: "seo", icon: "search", title: "SEO & local SEO", body: "Search visibility for the queries your customers actually use, including the map pack." },
  { slug: "marketing", icon: "megaphone", title: "Digital marketing", body: "Focused campaigns and content that bring the right people to your site." },
  { slug: "ai-automation", icon: "workflow", title: "AI solutions & automation", body: "Automations and assistants that take repetitive work off your plate." },
];
