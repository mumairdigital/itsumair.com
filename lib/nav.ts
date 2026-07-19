export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

// Source of truth: itsumair-website-project/02-architecture/sitemap.md + url-structure.md
export const NAV_LINKS: NavLink[] = [
  {
    label: "Services",
    href: "/services/",
    children: [
      { label: "Local SEO", href: "/services/local-seo/" },
      { label: "Google Business Profile", href: "/services/google-business-profile/" },
      { label: "Website Design", href: "/services/website-design/" },
      { label: "Website Maintenance", href: "/services/website-maintenance/" },
    ],
  },
  { label: "Remodelers", href: "/bathroom-remodeler-marketing/" },
  { label: "Results", href: "/results/" },
  { label: "Areas", href: "/areas/" },
  { label: "About", href: "/about/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

export const FOOTER_SERVICE_LINKS: NavLink[] = [
  { label: "Local SEO", href: "/services/local-seo/" },
  { label: "Google Business Profile", href: "/services/google-business-profile/" },
  { label: "Website Design", href: "/services/website-design/" },
  { label: "Website Maintenance", href: "/services/website-maintenance/" },
  { label: "Bathroom Remodeler Marketing", href: "/bathroom-remodeler-marketing/" },
];

export const FOOTER_COMPANY_LINKS: NavLink[] = [
  { label: "About", href: "/about/" },
  { label: "Results", href: "/results/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Areas We Serve", href: "/areas/" },
  { label: "Blog", href: "/blog/" },
];

export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms", href: "/terms/" },
  { label: "Accessibility", href: "/accessibility/" },
];

export const AREA_LINKS: NavLink[] = [
  { label: "Tampa", href: "/areas/tampa/" },
  { label: "St. Petersburg", href: "/areas/st-petersburg/" },
  { label: "Clearwater", href: "/areas/clearwater/" },
  { label: "Largo", href: "/areas/largo/" },
  { label: "Brandon", href: "/areas/brandon/" },
  { label: "Palm Harbor", href: "/areas/palm-harbor/" },
];

export const CONTACT_EMAIL = "hello@itsumair.com";
