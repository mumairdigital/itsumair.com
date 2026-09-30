/**
 * Before/after sliders on the home page.
 * REAL PAIRS ONLY: `before` and `after` must be genuine screenshots of the same thing, same size and crop
 * (1600x1000 WebP in /public/proof). Numbers must come from the screenshots or the client's own dashboards.
 * While this list is empty the slider block stays hidden.
 */
export type BAMetric = {
  label: string;
  before: number;
  after: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  /** Show only the after value (e.g. "hours saved" where before is 0) */
  onlyAfter?: boolean;
  /** Override display text, e.g. ["6 hrs", "2 min"] */
  raw?: [string, string];
};

export type BAProject = {
  id: string;
  client: string;
  service: string;
  summary: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  metrics: BAMetric[];
  href?: string;
};

export const SLIDER_PROJECTS: BAProject[] = [];
