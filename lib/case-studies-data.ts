/**
 * Case studies. Clients are deliberately anonymous — never add business names, domains or
 * identifying details. Only use numbers that appear in a screenshot or were supplied by Umair.
 */
export type CaseStudyStat = { value: string; label: string };
export type CaseStudySnapshot = { label: string; value: string };
/** kind "diagram" marks an illustration (not a screenshot), so the page frames and captions it differently. */
export type CaseStudyImage = { src: string; alt: string; kind?: "diagram"; caption?: string };

export type CaseStudy = {
  slug: string;
  tag: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  hubExcerpt: string;
  stats: CaseStudyStat[];
  snapshot: CaseStudySnapshot[];
  problem: string[];
  auditFindings: string[];
  whatIDid: string[];
  results: string[];
  /** Real screenshots. Omit when there is none. */
  images?: CaseStudyImage[];
  servicesUsed: { name: string; href: string }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "uk-retailer-ecommerce-and-local-seo",
    tag: "E-commerce, local SEO & Google Business Profile",
    title: "Building a UK home improvement retailer's online store, then growing its search visibility",
    metaTitle: "UK Home Improvement Retailer: E-Commerce Build + Local SEO | Case Study",
    metaDescription:
      "How I built an e-commerce store with a product calculator for a UK home improvement retailer, then grew its search clicks 13x and its Google Business Profile to over 1,100 calls.",
    hubExcerpt:
      "Built the product structure, product calculator and e-commerce store for a UK home improvement retailer, then ran the local SEO and Business Profile work behind a 13x jump in search clicks and 1,100+ calls.",
    stats: [
      { value: "13×", label: "more search clicks (990 vs. 76), most recent 3 months vs. the 3 before" },
      { value: "~20×", label: "more search impressions (27.6K vs. 1.4K) over the same comparison" },
      { value: "1,116", label: "calls from the Google Business Profile, April to September 2026" },
    ],
    snapshot: [
      { label: "Business type", value: "Home improvement retailer" },
      { label: "Market", value: "United Kingdom" },
      { label: "Services used", value: "Web design, e-commerce, local SEO and Google Business Profile management" },
    ],
    problem: [
      "The business sold a large, visually complex catalogue of home improvement products that most off-the-shelf e-commerce templates handle badly. Customers couldn't browse by the criteria that mattered to them, and couldn't work out how much material a real project needed without calling.",
      "On top of that, the business was barely visible in Google Search or on its Business Profile, so there was no steady stream of new customers arriving to ask those questions in the first place.",
    ],
    auditFindings: [
      "No structured product taxonomy: items weren't organised by the finish, size, material and application filters customers actually shop by",
      "No way for a customer to estimate quantity or cost themselves, so every estimate needed a call",
      "An underused Google Business Profile: thin categorisation, no consistent posting, and a small search footprint",
    ],
    whatIDid: [
      "Designed and built a full product taxonomy so customers could filter by finish, size, material and application",
      "Built a custom product calculator that turns real project dimensions into quantity and cost estimates",
      "Built the end-to-end e-commerce experience: browsing, detail pages with real specifications, and checkout",
      "Ran ongoing local SEO and Business Profile management: listing optimisation, consistent posting, and on-page work targeting real customer searches",
    ],
    results: [
      "Comparing the most recent three months to the three before, search clicks went from 76 to 990 and impressions from roughly 1.4K to 27.6K.",
      "Average CTR and average position moved in a more mixed direction over the same period (CTR from 5.4% to 3.6%, average position from 6 to 12.8). That's a normal side effect of ranking for a much wider set of queries, including longer-tail ones that rank lower on average.",
      "The Business Profile drove 1,116 calls between April and September 2026, about 186 a month, with monthly calls climbing from around 175 in April to roughly 240 in August (read from the chart).",
      "Over the same six months the profile recorded 4,265 interactions in total, and in July alone 324 direction requests, up 41.5% on July 2025.",
    ],
    images: [
      { src: "/proof/gsc-compare.webp", alt: "Search Console comparison: clicks up from 76 to 990 and impressions from 1.4K to 27.6K" },
      { src: "/proof/gbp-calls.webp", alt: "Business Profile: 1,116 calls made between April and September 2026" },
      { src: "/proof/gbp-directions.webp", alt: "Business Profile: 324 direction requests in July 2026, up 41.5% on July 2025" },
      { src: "/proof/gbp-interactions.webp", alt: "Business Profile: 4,265 interactions between April and September 2026" },
    ],
    servicesUsed: [
      { name: "Web design", href: "/services#web-design" },
      { name: "SEO & local SEO", href: "/services#seo" },
    ],
  },
  {
    slug: "uk-airport-transfer-website-rebuild",
    tag: "Full site rebuild & SEO",
    title: "A full Next.js rebuild for a UK airport transfer company, and the search visibility that followed",
    metaTitle: "UK Airport Transfer Company: Website Rebuild & SEO | Case Study",
    metaDescription:
      "A full Next.js rebuild for a UK airport transfer company, with SEO-ready route pages behind a near-tripling of search impressions in 28 days.",
    hubExcerpt:
      "A full Next.js rebuild for a UK airport transfer company: a premium design system, SEO-ready route pages, and impressions up about 2.7× in the latest 28 days.",
    stats: [
      { value: "2.7×", label: "more search impressions (7.99K vs. 2.97K) in the latest 28 days vs. the 28 before" },
      { value: "98", label: "search clicks in the latest 28 days" },
      { value: "Full rebuild", label: "Next.js site, design system, and SEO-ready route pages" },
    ],
    snapshot: [
      { label: "Business type", value: "Airport transfer and travel booking company" },
      { label: "Market", value: "United Kingdom" },
      { label: "Services used", value: "Full website rebuild and technical SEO" },
    ],
    problem: [
      "The company needed a website that could rank and convert, not just exist. Booking sites live or die on trust and on ranking for the specific routes customers search for, and a generic, unstructured site does neither well.",
    ],
    auditFindings: [
      "No dedicated, SEO-structured pages for individual routes, so everything competed for the same few generic terms",
      "No consistent design system, making the site slower to load and harder to maintain",
      "Image assets not optimised for production performance",
    ],
    whatIDid: [
      "Rebuilt the site from scratch on Next.js",
      "Built a premium design system for consistent, fast-loading pages",
      "Built SEO-ready route pages so individual routes could rank on their own merits",
      "Produced and optimised production-ready image assets across the site",
    ],
    results: [
      "In the latest 28-day Search Console view (starting 30 August 2026), the site earned 98 clicks and 7.99K impressions, against 2.97K impressions in the 28 days before: about 2.7× the visibility.",
      "The rebuilt site scores 99 for performance, 100 for accessibility, 100 for best practices and 92 for SEO in PageSpeed Insights, on both desktop and mobile.",
      "Click-through rate settled at 1.2%, which is the normal side effect of appearing for many more, broader searches.",
      "This is a short 28-day window, so it shows momentum after the rebuild and SEO work went live, not a long-term trend.",
    ],
    images: [
      { src: "/proof/website-home-1.webp", alt: "The rebuilt airport transfer site: dark hero with a fixed-price quote form and passenger selector" },
      { src: "/proof/website-home-2.webp", alt: "The rebuilt airport transfer site: trust bar, airport shortcuts and a fixed-fares pricing table" },
      { src: "/proof/website-speed-score.webp", alt: "PageSpeed Insights scores of 99 performance, 100 accessibility, 100 best practices and 92 SEO on desktop and mobile" },
      { src: "/proof/gsc-after.webp", alt: "Search Console, latest 28 days: 98 clicks and 7.99K impressions" },
    ],
    servicesUsed: [
      { name: "Web design", href: "/services#web-design" },
      { name: "SEO & local SEO", href: "/services#seo" },
    ],
  },
  {
    slug: "video-studio-website-and-booking",
    tag: "Custom website & booking system",
    title: "A video editing studio's website, built from scratch with booking built in",
    metaTitle: "Video Editing Studio: Custom Website + Booking System | Case Study",
    metaDescription:
      "How I built a video editing studio's website from scratch, with a proper booking system that sends confirmation emails and generates meeting links automatically.",
    hubExcerpt:
      "A complete website for a video editing studio, built from scratch, with a booking system that confirms by email and creates the meeting link on its own.",
    stats: [
      { value: "From scratch", label: "custom design and build, not a template" },
      { value: "Booking", label: "confirmation emails and meeting links sent automatically" },
      { value: "Creators", label: "made for YouTube and Instagram creators and founder-led brands" },
    ],
    snapshot: [
      { label: "Business type", value: "Video editing and packaging studio" },
      { label: "Audience", value: "YouTube and Instagram creators, founder-led brands" },
      { label: "Services used", value: "Web design, custom build, booking system" },
    ],
    problem: [
      "This studio edits video for YouTube and Instagram creators and founder-led brands. Its work is all about looking sharp and holding attention, so the website had to do the same, and it needed a way for potential clients to book a call without the usual back and forth.",
    ],
    auditFindings: [
      "A site that puts the editing work front and centre",
      "Clear services for different kinds of creators, from long-form to short-form",
      "A booking flow that doesn't depend on emailing back and forth",
    ],
    whatIDid: [
      "Designed and built the whole website from scratch, with no template",
      "Went for a dark, cinematic look with an amber accent, to suit the kind of content the studio makes",
      "Built the main sections: a punchy hero, a scrolling ticker of services, service cards, and a work section split into long-form and short-form edits",
      "Built a proper booking system: pick a time, get a confirmation email straight away, and the meeting link is generated automatically",
    ],
    results: [
      "The studio has a site that fits the work it sells, and a booking flow that runs on its own without anyone stepping in.",
      "New clients can book a call without emailing back and forth, and they get the confirmation and the meeting link straight away.",
      "I'm not putting numbers on this one, because the point was a site and booking flow that look and work properly.",
    ],
    images: [
      { src: "/proof/video-editing-agency-website.webp", alt: "The studio's website: a dark, cinematic hero with a bold headline, service cards, a work section with long-form and short-form edits, and a closing statement" },
    ],
    servicesUsed: [{ name: "Web design", href: "/services#web-design" }],
  },
  {
    slug: "us-plumbing-lead-automation",
    tag: "AI automation & n8n",
    title: "Automating a plumbing company's leads, bookings and follow-ups in n8n",
    metaTitle: "Plumbing Lead Automation with n8n | Case Study",
    metaDescription:
      "How I used n8n to automate lead capture, emergency detection, appointment booking, reminders and review requests for a local plumbing company in the US.",
    hubExcerpt:
      "A local plumbing company wanted new leads, emergency calls and bookings handled without someone chasing each one. I built the whole thing as one n8n workflow.",
    stats: [
      { value: "n8n", label: "one workflow connecting the whole process" },
      { value: "Lead to review", label: "from the first enquiry to the post-service review request" },
      { value: "Emergency path", label: "urgent requests get spotted and handled separately" },
    ],
    snapshot: [
      { label: "Business type", value: "Local plumbing company" },
      { label: "Market", value: "United States, residential customers" },
      { label: "Tools", value: "n8n, OpenAI, WhatsApp, Google Calendar, Gmail, Google Sheets, Notion, Slack" },
    ],
    problem: [
      "This is a local plumbing company in the US that looks after homeowners in its service area. Most of its work starts with an enquiry on the website, and every one of those needed someone to read it, work out what the person wanted, reply, find a time and put it in the calendar.",
      "The tricky bit is emergencies. A burst pipe and a request for a quote in a couple of weeks look the same in an inbox, but they can't be treated the same way. On top of that, reminders and follow-ups are easy to forget when the team is out on jobs. They wanted a better way to handle all of it.",
    ],
    auditFindings: [
      "New leads from the website needing a manual reply",
      "Emergency requests mixed in with normal enquiries",
      "Going back and forth over times, then adding the booking to the calendar by hand",
      "Reminders, follow-ups and review requests depending on someone remembering",
    ],
    whatIDid: [
      "Built it all as one n8n workflow, so lead capture, AI, messaging, the calendar and the sheet talk to each other",
      "A new enquiry comes in from the website form or a Facebook lead, and the workflow picks it up as soon as it lands",
      "AI reads the message and pulls out what the job is and how urgent it sounds",
      "If it looks like an emergency, it goes down its own path: an urgent WhatsApp message, an urgent booking on the calendar and a confirmation email",
      "For normal jobs, the customer gets a WhatsApp message first, then the workflow checks Google Calendar for a free slot",
      "If the slot is free, it books it and sends a confirmation. If not, it suggests other times over WhatsApp",
      "Every lead is added or updated in the CRM, which is a Google Sheet",
      "A reminder goes out 24 hours before the appointment, and after the job a follow-up asks for a review",
      "A few extras run alongside: a thank-you email, a record in Notion, a Slack ping to the team, and a lead source report that updates its own sheet",
    ],
    results: [
      "It takes the repetitive part of handling enquiries off the team, so they can spend their time on the actual plumbing work.",
      "Emergencies get spotted and treated differently from routine requests, instead of waiting in the same pile.",
      "Booking is smoother for customers because they only see times that are really free, and the calendar and sheet update themselves.",
      "Reminders and review requests happen without anyone having to remember. I'm not putting numbers on this one, because the point is fewer things slipping through the cracks.",
    ],
    images: [
      { src: "/proof/n8n-workflow-automation.webp", alt: "The n8n workflow: lead capture, AI extraction, emergency check, urgent and normal booking flows, CRM, reminders and review request" },
    ],
    servicesUsed: [{ name: "AI solutions & automation", href: "/services#ai-automation" }],
  },
  {
    slug: "wordpress-malware-recovery",
    tag: "Technical recovery",
    title: "Tracing a hacked WordPress site's malware to a single database trigger, and rebuilding it clean",
    metaTitle: "Malware Removal & Site Rebuild | Case Study",
    metaDescription:
      "How I traced a WordPress site's infection to a malicious database trigger generating thousands of spam pages, removed it, and rebuilt the site clean.",
    hubExcerpt:
      "A client's WordPress site was hacked through a database trigger generating thousands of spam pages. I traced the infection, rebuilt the site clean, and recovered its search rankings.",
    stats: [
      { value: "Thousands", label: "of spam pages traced to a single malicious database trigger" },
      { value: "Root cause", label: "found and removed, not just the visible symptoms" },
      { value: "Verified clean", label: "before the site was handed back" },
    ],
    snapshot: [
      { label: "Business type", value: "Small business website" },
      { label: "Platform", value: "WordPress" },
      { label: "Services used", value: "Malware removal, indexation recovery, site rebuild" },
    ],
    problem: [
      "A WordPress site was quietly compromised through a malicious database trigger: infected code sitting inside the database rather than in a plugin file, which is why it kept surviving normal cleanup attempts. It was silently generating thousands of spam pages.",
      "Google was indexing those pages. The site's real content was getting buried under junk, putting its entire search presence at risk.",
    ],
    auditFindings: [
      "A malicious trigger embedded directly in the database, not in a theme or plugin file, which is why earlier cleanups hadn't held",
      "Thousands of auto-generated spam pages being created and indexed under the site's own domain",
      "No clean, verified backup to restore from, so the fix had to happen in the live database",
    ],
    whatIDid: [
      "Traced the infection to its root cause inside the database rather than just deleting the spam pages",
      "Removed the malicious trigger and audited the rest of the database and file system",
      "Rebuilt the affected parts of the site clean and requested reindexing through Search Console",
      "Verified the fix held over time before handing the site back",
    ],
    results: [
      "The malicious trigger was fully removed, not just its symptoms, and the rebuild was verified clean before handoff.",
      "The spam pages dropped out of Google's index over the following weeks, and the site's real pages returned to their earlier search visibility.",
    ],
    images: [
      {
        src: "/proof/malware-infection-diagram.svg",
        alt: "Diagram: a hidden database trigger creates thousands of spam pages that Google indexes; the cause was traced, the trigger removed, the site rebuilt clean, and reindexing requested",
        kind: "diagram",
        caption: "How the infection worked and what I did about it. An illustration of the process, not real data.",
      },
    ],
    servicesUsed: [
      { name: "Web design", href: "/services#web-design" },
      { name: "SEO & local SEO", href: "/services#seo" },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
