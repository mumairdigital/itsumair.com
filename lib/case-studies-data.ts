/**
 * Case studies. Clients are deliberately anonymous — never add business names, domains or
 * identifying details. Only use numbers that appear in a screenshot or were supplied by Umair.
 */
export type CaseStudyStat = { value: string; label: string };
export type CaseStudySnapshot = { label: string; value: string };
export type CaseStudyImage = { src: string; alt: string };

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
    servicesUsed: [
      { name: "Web design", href: "/services#web-design" },
      { name: "SEO & local SEO", href: "/services#seo" },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
