"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { WHY_CHOOSE_US_IMAGES } from "@/shared/enums/services";

import "swiper/css";

export function WhyChooseUs() {
  const t = useTranslations("whyChooseUs");
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="why-us" className="py-12 md:py-16 flex flex-col items-center justify-center">
      <div className="max-w-7xl px-6">
        <SectionHeader title={t("title")} dotsPosition="left" />
      </div>

      <div className="mt-8 max-w-7xl mx-auto px-4 w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="why-choose-us-swiper"
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          onSlideChange={(swiper: SwiperType) => {
            setActiveIndex(swiper.realIndex);
          }}
          onSwiper={(swiper: SwiperType) => {
            setActiveIndex(swiper.realIndex);
          }}
        >
          {WHY_CHOOSE_US_IMAGES.map((image, index) => (
            <SwiperSlide key={image.id}>
              <div
                className={`relative h-[380px] md:h-[400px] w-full overflow-hidden rounded-2xl transition-transform duration-300 ${
                  index === activeIndex ? "scale-100" : "scale-90"
                }`}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay for non-active slides */}
                <div
                  className={`absolute inset-0 bg-blue-900/50 transition-opacity duration-300 ${
                    index === activeIndex ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
