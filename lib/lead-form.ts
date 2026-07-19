export type ProblemOption = {
  label: string;
  value: string;
};

// Shared between the client form (components/forms/LeadForm.tsx) and the
// /api/lead route, which maps the submitted slug back to a readable label.
export const PROBLEM_OPTIONS: ProblemOption[] = [
  { label: "Not showing up on Google Maps", value: "not-showing-up" },
  { label: "Website doesn't bring in calls", value: "website-no-calls" },
  { label: "Paying too much for shared leads", value: "shared-leads" },
  { label: "Not enough reviews", value: "not-enough-reviews" },
  { label: "Not sure what's wrong", value: "not-sure" },
];

export function getProblemLabel(value: string | undefined): string {
  return PROBLEM_OPTIONS.find((option) => option.value === value)?.label ?? value ?? "(not provided)";
}
