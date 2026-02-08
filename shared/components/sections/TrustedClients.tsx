"use client";

import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

const CLIENTS = [
  { id: "client1", name: "Grand Electronics", bgColor: "bg-blue-500" },
  { id: "client2", name: "Oukitel", bgColor: "bg-orange-500" },
  { id: "client3", name: "Client 3", bgColor: "bg-white" },
  { id: "client4", name: "Scope", bgColor: "bg-gray-900" },
  { id: "client5", name: "Client 5", bgColor: "bg-white" },
  { id: "client6", name: "Client 6", bgColor: "bg-white" },
  { id: "client7", name: "Client 7", bgColor: "bg-blue-500" },
  { id: "client8", name: "Client 8", bgColor: "bg-orange-500" },
];

export function TrustedClients() {
  const t = useTranslations("trustedClients");

  return (
    <section id="trusted-clients" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title={t("title")} dotsPosition="left" />
      </div>

      <div className="mt-8 max-w-7xl mx-auto px-4 w-full overflow-hidden">
        <div className="flex items-center gap-4 min-w-0">
          <button
            className="clients-prev shrink-0 w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-brand-blue hover:bg-brand-navy/80 hover:text-white transition-colors duration-300 cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <Swiper
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            navigation={{
              prevEl: ".clients-prev",
              nextEl: ".clients-next",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="flex-1 min-w-0"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
          >
            {CLIENTS.map((client) => (
              <SwiperSlide key={client.id}>
                <div
                  className={`${client.bgColor} rounded-full w-36 h-36 md:w-40 md:h-40 mx-auto flex items-center justify-center`}
                >
                  <span className="text-xs text-center px-2 font-semibold text-gray-600">
                    {client.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="clients-next shrink-0 w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-brand-blue hover:bg-brand-navy/80 hover:text-white transition-colors duration-300 cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

