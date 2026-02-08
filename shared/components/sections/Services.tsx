"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { ServiceCard } from "@/shared/components/ui/ServiceCard";
import { SERVICES } from "@/shared/enums";
import { Heading } from "@/shared/components/ui/Heading";
import { Text } from "@/shared/components/ui/Text";
import { CTAButton } from "@/shared/components/ui/CTAButton";

import "swiper/css";
import "swiper/css/pagination";

export function Services() {
  const t = useTranslations("services");
  const [activeService, setActiveService] = useState<string>(SERVICES[0].key);

  const activeServiceData = SERVICES.find((s) => s.key === activeService);

  return (
    <section id="services" className="overflow-x-hidden py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title={t("title")} dotsPosition="right" />

        {/* Desktop: grid + description panel */}
        <div className="hidden md:block mt-6">
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
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
          <div className="bg-brand-blue rounded-b-2xl p-6 md:p-8">
            <Heading level="h4" className="text-white mb-3">
              {t(`items.${activeService}`)}
            </Heading>
            <Text className="text-white mb-6">
              {t(`descriptions.${activeService}`)}
            </Text>
            <div className="flex justify-end">
              <CTAButton
                text={t("learnMore")}
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

        {/* Mobile: Swiper — one slide = card + description */}
        <div className="md:hidden mt-6 w-full overflow-hidden relative [&_.swiper-slide]:!w-full [&_.swiper-slide]:!max-w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            navigation={{
              prevEl: ".services-prev",
              nextEl: ".services-next",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".services-pagination",
              clickable: true,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="services-swiper !overflow-hidden"
            style={{ width: "100%" }}
          >
            {SERVICES.map((service) => (
              <SwiperSlide key={service.key} className="!h-[440px]">
                <div className="flex h-full flex-col rounded-2xl overflow-hidden shadow-lg">
                  <div className="flex shrink-0 flex-col items-center p-6 rounded-t-2xl bg-gradient-to-b from-brand-blue/40 to-brand-dark">
                    <div className="pb-2 rounded-full">
                      <Image
                        src={service.icon}
                        alt=""
                        width={92}
                        height={92}
                        className="w-16 h-16 brightness-0 invert"
                      />
                    </div>
                    <Text className="text-white text-center font-semibold text-sm">
                      {t(`items.${service.key}`)}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col bg-brand-blue p-6 rounded-b-2xl">
                    <Heading level="h4" className="text-white mb-3 shrink-0">
                      {t(`items.${service.key}`)}
                    </Heading>
                    <div className="flex-1 mb-4">
                      <Text className="text-white text-sm">
                        {t(`descriptions.${service.key}`)}
                      </Text>
                    </div>
                    <div className="flex shrink-0 justify-end">
                      <CTAButton
                        text={t("learnMore")}
                        icon={
                          <Image
                            src={service.buttonIcon}
                            alt=""
                            width={32}
                            height={32}
                            className="w-8 h-8 brightness-0 invert"
                          />
                        }
                        className="border-brand-navy"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className="services-prev absolute left-2 top-1/2 z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-navy/50 flex items-center justify-center text-brand-blue hover:bg-brand-navy/80 hover:text-white transition-colors duration-300 cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            className="services-next absolute right-2 top-1/2 z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-navy/50 flex items-center justify-center text-brand-blue hover:bg-brand-navy/80 hover:text-white transition-colors duration-300 cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          <div className="services-pagination flex justify-center gap-1.5 mt-4 [&_.swiper-pagination-bullet]:!w-2 [&_.swiper-pagination-bullet]:!h-2 [&_.swiper-pagination-bullet]:!opacity-60 [&_.swiper-pagination-bullet-active]:!opacity-100 [&_.swiper-pagination-bullet]:!bg-brand-blue" />
        </div>
      </div>
    </section>
  );
}
