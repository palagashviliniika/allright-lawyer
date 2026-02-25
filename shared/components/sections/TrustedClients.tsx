"use client";

import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { PARTNERS } from "@/shared/enums/services";

import "swiper/css";

export type TrustedClientsData = {
  title?: string | null;
  partners?: Array<{ name?: string; logoUrl?: string }> | null;
};

export function TrustedClients({ trustedClients: trustedClientsData }: { trustedClients?: TrustedClientsData }) {
  const t = useTranslations("trustedClients");

  const sectionTitle = trustedClientsData?.title ?? t("title");
  const cmsPartners = trustedClientsData?.partners?.filter((p) => p.logoUrl) ?? [];
  const partners =
    cmsPartners.length > 0
      ? cmsPartners.map((p, i) => ({
          id: `cms-${i}`,
          name: p.name ?? "",
          src: p.logoUrl!,
        }))
      : PARTNERS.map((p) => ({ id: p.id, name: p.name, src: p.src }));

  return (
    <section id="trusted-clients" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title={sectionTitle} dotsPosition="left" />
      </div>

      <div className="mt-8 max-w-7xl mx-auto px-6 w-full overflow-hidden relative">
        <Swiper
          slidesPerView={2}
          spaceBetween={0}
          loop={partners.length > 1}
          centeredSlides={partners.length <= 2}
          navigation={{
            prevEl: ".clients-prev",
            nextEl: ".clients-next",
          }}
          autoplay={
            partners.length > 1
              ? { delay: 3000, disableOnInteraction: false }
              : false
          }
          modules={[Navigation, Autoplay]}
          className="trusted-clients-swiper w-full !overflow-hidden"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
              centeredSlides: false,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
              centeredSlides: false,
            },
          }}
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="relative w-36 h-36 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 144px, 144px"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          type="button"
          className="clients-prev absolute left-2 top-1/2 z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-brand-blue hover:bg-brand-navy/80 hover:text-white transition-colors duration-300 cursor-pointer"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          type="button"
          className="clients-next absolute right-2 top-1/2 z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-brand-blue hover:bg-brand-navy/80 hover:text-white transition-colors duration-300 cursor-pointer"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
}

