"use client";

import { useTranslations } from "next-intl";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { ServiceCard } from "@/shared/components/ui/ServiceCard";
import { SERVICES } from "@/shared/enums";

export function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="bg-brand-black py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title={t("title")} dotsPosition="right" />

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.key}
              icon={service.icon}
              label={t(`items.${service.key}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

