"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";

import "swiper/css";

// Placeholder images for testing
const IMAGES = [
  {
    id: "img1",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    id: "img2",
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
  },
  {
    id: "img3",
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
  },
  {
    id: "img4",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    id: "img5",
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
  },
  {
    id: "img6",
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
  },
];

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
          {IMAGES.map((image, index) => (
            <SwiperSlide key={image.id}>
              <div
                className={`relative h-[300px] w-full overflow-hidden rounded-2xl transition-transform duration-300 md:h-[400px] ${
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
