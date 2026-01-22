import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/shared/components/sections/Hero";
import { Services } from "@/shared/components/sections/Services";
import { WhyChooseUs } from "@/shared/components/sections/WhyChooseUs";
import { TrustedClients } from "@/shared/components/sections/TrustedClients";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <TrustedClients />
    </main>
  );
}
