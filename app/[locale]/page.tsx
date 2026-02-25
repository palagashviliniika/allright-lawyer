import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/shared/components/sections/Hero";
import { Services } from "@/shared/components/sections/Services";
import { WhyChooseUs } from "@/shared/components/sections/WhyChooseUs";
import { HowWeWork } from "@/shared/components/sections/HowWeWork";
import { TrustedClients } from "@/shared/components/sections/TrustedClients";
import { FAQ } from "@/shared/components/sections/FAQ";
import { Contact } from "@/shared/components/sections/Contact";
import { client } from "@/lib/sanity";
import { heroQuery, servicesQuery, whyChooseUsQuery, trustedClientsQuery, faqQuery, howWeWorkQuery } from "@/lib/sanity.queries";

type ServicesQueryResult = {
  title?: string | null;
  items?: Array<{ key?: string; title?: string; description?: string }> | null;
} | null;

type WhyChooseUsQueryResult = {
  title?: string | null;
  images?: Array<{ alt?: string; url?: string }> | null;
} | null;

type TrustedClientsQueryResult = {
  title?: string | null;
  partners?: Array<{ name?: string; logoUrl?: string }> | null;
} | null;

type FAQQueryResult = {
  title?: string | null;
  items?: Array<{ question?: string; answer?: string }> | null;
} | null;

type HowWeWorkQueryResult = {
  titlePrefix?: string | null;
  titleHighlight?: string | null;
  left?: { caseHeader?: string; description?: string } | null;
  middle?: { caseHeader?: string; bullets?: string[] | null } | null;
  right?: { caseHeader?: string; description?: string; bullets?: string[] | null } | null;
} | null;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [heroData, servicesData, whyChooseUsData, trustedClientsData, faqData, howWeWorkData] = await Promise.all([
    client.fetch<{ title?: string; subtitle?: string } | null>(heroQuery, { locale }),
    client.fetch<ServicesQueryResult>(servicesQuery, { locale }),
    client.fetch<WhyChooseUsQueryResult>(whyChooseUsQuery, { locale }),
    client.fetch<TrustedClientsQueryResult>(trustedClientsQuery, { locale }),
    client.fetch<FAQQueryResult>(faqQuery, { locale }),
    client.fetch<HowWeWorkQueryResult>(howWeWorkQuery, { locale }),
  ]);

  return (
    <main>
      <Hero hero={heroData ?? undefined} />
      <Services services={servicesData ?? undefined} />
      <WhyChooseUs whyChooseUs={whyChooseUsData ?? undefined} />
      <HowWeWork howWeWork={howWeWorkData ?? undefined} />
      <TrustedClients trustedClients={trustedClientsData ?? undefined} />
      <FAQ faq={faqData ?? undefined} />
      <Contact />
    </main>
  );
}
