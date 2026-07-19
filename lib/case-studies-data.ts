export type CaseStudyStat = {
  value: string;
  label: string;
};

export type CaseStudySnapshot = {
  label: string;
  value: string;
};

export type CaseStudyImage = {
  src: string;
  alt: string;
};

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
  /** Real screenshots for the "What I Did" / results section. Omit to fall back to ImagePlaceholder. */
  images?: CaseStudyImage[];
  servicesUsed: { name: string; href: string }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "tile-bathroom-showroom-platform",
    tag: "Related work — e-commerce, local SEO & GBP",
    title: "Rebuilding a Tile and Bathroom Showroom's Site, Then Growing Its Search Visibility",
    metaTitle: "Tile & Bathroom Showroom: E-Commerce Build + Local SEO | Case Study",
    metaDescription:
      "Related work: how I built a tile and bathroom showroom's e-commerce platform, then ran local SEO and Google Business Profile work that grew its clicks 13x and calls to 887 in six months.",
    hubExcerpt:
      "Built the product taxonomy, tile calculator, and e-commerce experience for a tile and bathroom showroom, then ran the local SEO and GBP work behind a 13x jump in search clicks.",
    stats: [
      { value: "13x", label: "more Search clicks (990 vs. 76) comparing the most recent 3 months to the 3 before" },
      { value: "~20x", label: "more Search impressions (27.6K vs. 1.4K) over the same comparison" },
      { value: "887", label: "calls placed from the Google Business Profile, Feb–Jul 2026" },
    ],
    snapshot: [
      { label: "Business type", value: "Tile and bathroom showroom retailer" },
      { label: "Market", value: "Product retail and e-commerce" },
      { label: "Services used", value: "Website design, local SEO, and Google Business Profile management" },
      { label: "Note", value: "This is related work, not a bathroom-remodeler marketing client" },
    ],
    problem: [
      "This showroom sold tile and bathroom fixtures, a large, visually complex catalog spanning finishes, sizes, and materials that most off-the-shelf e-commerce templates handle badly. Customers had no way to browse by the criteria that actually mattered to them, and no way to work out how much tile a real bathroom or kitchen project would actually require before calling to ask.",
      "On top of that, the business was barely visible in Google Search or on its Business Profile. Every quantity question, every \"will this finish work in my space,\" every rough budget estimate was a phone call or an in-person visit, and there was no steady stream of search traffic bringing new customers in the door to ask those questions in the first place.",
    ],
    auditFindings: [
      "No structured product taxonomy: tile and fixtures were organized loosely, not by the finish, size, and application filters customers actually shop by",
      "No way for a customer to estimate tile quantity or cost themselves, every estimate required a call",
      "Google Business Profile was underused: thin categorization, no consistent posting, and a search footprint limited to a small number of queries",
    ],
    whatIDid: [
      "Designed and built a full product taxonomy for tile and bathroom fixtures, organized by finish, size, material, and application, so customers could actually filter to what they needed",
      "Built a custom tile calculator that takes real project dimensions and returns quantity and cost estimates, removing the need to call in for a rough number",
      "Built the end-to-end e-commerce experience: product browsing, detail pages with real specifications, and checkout",
      "Ran ongoing local SEO and Google Business Profile management on top of the new site: category and listing optimization, consistent posting, and on-page work targeting the searches real customers use",
    ],
    results: [
      "Comparing the most recent three months to the three months before, Search clicks went from 76 to 990, and impressions went from roughly 1.4K to 27.6K, real growth by any measure.",
      "Average CTR and average position both moved in a more mixed direction over the same period (CTR from 5.4% to 3.6%, average position from roughly 6 to 12.8). That's a normal, honest side effect of ranking for a much wider set of queries: many more searches are now finding the site, including longer-tail ones that rank lower on average, which pulls the averages down even as total traffic grows substantially.",
      "The Google Business Profile drove 887 calls directly from the listing between February and July 2026, climbing from roughly 60 calls early in that window to peaks near 190.",
    ],
    images: [
      {
        src: "/images/case-studies/mh-tiles/gsc-performance-comparison.webp",
        alt: "Google Search Console performance comparison showing total clicks rising from 76 to 990 and impressions rising from about 1.4K to 27.6K between two 3-month periods",
      },
      {
        src: "/images/case-studies/mh-tiles/gbp-calls-impressions.webp",
        alt: "Google Business Profile insights showing 887 calls made from the business profile between February and July 2026",
      },
    ],
    servicesUsed: [
      { name: "Website Design", href: "/services/website-design/" },
      { name: "Local SEO", href: "/services/local-seo/" },
      { name: "Google Business Profile", href: "/services/google-business-profile/" },
    ],
  },
  {
    slug: "ride-core-travel",
    tag: "Related work — full site rebuild & SEO",
    title: "How a Full Next.js Rebuild Grew Ride Core Travel's Search Visibility",
    metaTitle: "Ride Core Travel: Website Rebuild & SEO | Case Study",
    metaDescription:
      "Related work: a full Next.js rebuild for Ride Core Travel, an airport transfer company, with SEO-optimized route pages behind a 28-day jump in Search clicks and impressions.",
    hubExcerpt:
      "A full Next.js rebuild for Ride Core Travel, an airport transfer company: a premium design system, SEO-optimized route pages, and a real jump in Search clicks and impressions within 28 days.",
    stats: [
      { value: "+72%", label: "more Search clicks in 28 days (86 vs. 50 the 28 days before)" },
      { value: "+194%", label: "more Search impressions in 28 days (3.12K vs. 1.06K)" },
      { value: "Full Rebuild", label: "Complete Next.js site, design system, and SEO-optimized route pages" },
    ],
    snapshot: [
      { label: "Business type", value: "Airport transfer and travel booking company (ridecoretravel.co.uk)" },
      { label: "Market", value: "Travel and transportation booking, UK" },
      { label: "Services used", value: "Full website rebuild and technical/local SEO" },
      { label: "Note", value: "This is related work, not a bathroom-remodeler marketing client" },
    ],
    problem: [
      "Ride Core Travel needed a website that could actually rank and convert, not just exist. Booking-style travel sites live or die on trust signals and on ranking for the specific routes and services customers search for, and a generic, unstructured site does neither well.",
    ],
    auditFindings: [
      "No dedicated, SEO-structured pages for individual transfer routes or services, everything competed for the same few generic terms",
      "No consistent design system, making the site slower to load and harder to maintain",
      "Image assets not optimized for production performance",
    ],
    whatIDid: [
      "Rebuilt the site from scratch on Next.js",
      "Built a premium design system for consistent, fast-loading pages across the site",
      "Built SEO-optimized route pages so individual transfer routes and services could rank on their own merits",
      "Produced and optimized production-ready image assets across the site",
    ],
    results: [
      "Comparing the most recent 28 days to the 28 days before, Search clicks went from 50 to 86 (+72%) and impressions went from roughly 1.06K to 3.12K (+194%).",
      "Average CTR and average position moved in a more mixed direction over the same window (CTR from 4.7% to 2.8%, average position from roughly 8.7 to 15.5), the same honest pattern seen when a site starts ranking for a much wider set of queries: real growth in total visibility, with the average pulled down by newly-ranking, longer-tail searches.",
      "This is a short, 28-day comparison window rather than a multi-month one, so it shows early momentum after the rebuild and SEO work went live, not a long-term trend yet.",
    ],
    images: [
      {
        src: "/images/case-studies/ride-core-travel/gsc-performance-comparison.webp",
        alt: "Google Search Console performance comparison showing total clicks rising from 50 to 86 and impressions rising from about 1.06K to 3.12K over a 28-day comparison window",
      },
    ],
    servicesUsed: [
      { name: "Website Design", href: "/services/website-design/" },
      { name: "Local SEO", href: "/services/local-seo/" },
    ],
  },
  {
    slug: "wordpress-rebuild-and-malware-recovery",
    tag: "Related work — technical recovery",
    title: "Tracing a Hacked WordPress Site's Malware to a Single Database Trigger, and Rebuilding It Clean",
    metaTitle: "Malware Removal & Site Rebuild | Case Study",
    metaDescription:
      "Related work: how I traced a WordPress site's infection to a malicious database trigger generating thousands of spam pages, removed it, and rebuilt the site clean.",
    hubExcerpt:
      "A client's WordPress site was hacked through a database trigger generating thousands of spam pages. I traced the infection, rebuilt the site clean, and recovered its search rankings.",
    stats: [
      { value: "Thousands", label: "of spam pages traced to a single malicious database trigger" },
      { value: "Root Cause", label: "found and removed, not just the visible symptoms" },
      { value: "Verified Clean", label: "before the site was handed back" },
    ],
    snapshot: [
      { label: "Business type", value: "Small business website (not a bathroom remodeler)" },
      { label: "Platform", value: "WordPress" },
      { label: "Services used", value: "Malware remediation, indexation recovery, site rebuild" },
      { label: "Note", value: "Client name withheld; this is related, non-bathroom-remodeler technical work" },
    ],
    problem: [
      "A client's WordPress site was quietly compromised through a malicious database trigger, a piece of infected code sitting inside the database itself rather than in a plugin file, which is exactly why it kept surviving normal cleanup attempts. It was silently generating thousands of spam pages under the site's own domain.",
      "Google was indexing those spam pages. The site's real content was getting buried underneath junk that had nothing to do with the actual business, and the longer it went unnoticed, the more it put the site's entire search presence at risk.",
    ],
    auditFindings: [
      "A malicious trigger embedded directly in the WordPress database, not in a theme or plugin file, which is why previous cleanup attempts hadn't held",
      "Thousands of auto-generated spam pages being created and indexed under the site's own domain",
      "No clean, verified backup to safely restore from, meaning the fix had to happen in the live database rather than a simple rollback",
    ],
    whatIDid: [
      "Traced the infection to its root cause inside the database, rather than just removing the visible spam pages it was generating",
      "Removed the malicious trigger and audited the rest of the database and file system for anything else it had touched",
      "Rebuilt the affected parts of the site clean and requested reindexing through Search Console",
      "Verified the fix held over time before handing the site back",
    ],
    results: [
      "The malicious trigger was fully removed, not just its symptoms, and the rebuild was verified clean before handoff.",
      "The spam pages it had generated dropped out of Google's index over the following weeks as reindexing was requested and processed, and the site's real pages returned to their prior search visibility.",
      "This was general technical remediation work, not a bathroom-remodeler SEO campaign, so no Map Pack ranking numbers apply here. The result that matters is the one stated plainly: a compromised site, fully cleaned, with its real search presence recovered.",
    ],
    servicesUsed: [
      { name: "Website Maintenance", href: "/services/website-maintenance/" },
      { name: "Website Design", href: "/services/website-design/" },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
