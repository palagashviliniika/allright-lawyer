export type ServicesQueryResult = {
  title?: string | null;
  items?: Array<{ key?: string; title?: string; description?: string }> | null;
} | null;

export type WhyChooseUsQueryResult = {
  title?: string | null;
  images?: Array<{ alt?: string; url?: string }> | null;
} | null;

export type TrustedClientsQueryResult = {
  title?: string | null;
  partners?: Array<{ name?: string; logoUrl?: string }> | null;
} | null;

export type FAQQueryResult = {
  title?: string | null;
  items?: Array<{ question?: string; answer?: string }> | null;
} | null;

export type HowWeWorkQueryResult = {
  titlePrefix?: string | null;
  titleHighlight?: string | null;
  left?: { caseHeader?: string; description?: string } | null;
  middle?: { caseHeader?: string; bullets?: string[] | null } | null;
  right?: { caseHeader?: string; description?: string; bullets?: string[] | null } | null;
} | null;
