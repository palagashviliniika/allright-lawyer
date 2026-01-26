"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { ServiceCard } from "@/shared/components/ui/ServiceCard";
import { SERVICES } from "@/shared/enums";
import { Heading } from "@/shared/components/ui/Heading";
import { Text } from "@/shared/components/ui/Text";
import { CTAButton } from "@/shared/components/ui/CTAButton";

export function Services() {
  const t = useTranslations("services");
  const tCommon = useTranslations("common");
  const [activeService, setActiveService] = useState<string>(SERVICES[0].key);
  
  const activeServiceData = SERVICES.find((s) => s.key === activeService);

  return (
    <section id="services" className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title={t("title")} dotsPosition="right" />

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.key}
              icon={service.icon}
              label={t(`items.${service.key}`)}
              isActive={activeService === service.key}
              onClick={() => setActiveService(service.key)}
            />
          ))}
        </div>

        {/* Active service info panel */}
        <div className="bg-brand-blue rounded-b-2xl p-6 md:p-8">
          <Heading level="h4" className="text-white mb-3">
            {t(`items.${activeService}`)}
          </Heading>
          <Text className="text-white mb-6">
            {t(`descriptions.${activeService}`)}
          </Text>
          <div className="flex justify-end">
            <CTAButton
              text={tCommon("bookConsultation")}
              icon={
                activeServiceData && (
                  <Image
                    src={activeServiceData.buttonIcon}
                    alt=""
                    width={32}
                    height={32}
                    className="w-8 h-8 brightness-0 invert"
                  />
                )
              }
              className="border-brand-navy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

