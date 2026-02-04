"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Play } from "lucide-react";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Heading } from "@/shared/components/ui/Heading";
import { Text } from "@/shared/components/ui/Text";
import { cn } from "@/lib/utils";

export function HowWeWork() {
  const t = useTranslations("howWeWork");

  return (
    <section id="how-we-work" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title={`${t("titlePrefix")} ${t("titleHighlight")}`}
          dotsPosition="right"
          className="mb-10"
        />

        {/* One container: grid — left 1/4, middle (blue, taller) 1/4, right (white) 1/2 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_2fr] gap-0 min-h-[420px] overflow-visible pt-10">
          {/* Left: video placeholder 1/2 height + navy block 1/2 height with single icon */}
          <div className="flex flex-col rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none overflow-hidden shadow-lg h-full min-h-[420px]">
            {/* Video area: 1/2 of card height */}
            <div className="relative flex-[0_0_50%] min-h-[180px] bg-[#262D3D] flex items-center justify-center">
              <button
                type="button"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-blue hover:bg-white/95 transition-colors"
                aria-label="Play video"
              >
                <Play className="h-7 w-7 fill-current ml-1" />
              </button>
            </div>
            {/* Navy content: 1/2 height, single centered icon */}
            <div className="flex flex-1 flex-col flex-[0_0_50%] bg-brand-navy items-center justify-center p-6 min-h-0">
              <Image
                src="/images/how-we-work.svg"
                alt=""
                width={120}
                height={120}
                className="h-20 w-20 md:h-[120px] md:w-[120px] brightness-0 invert"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Middle: bright blue section — taller, centered and on top of left/right */}
          <div className="hidden lg:block relative min-h-[420px] overflow-visible">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex flex-col min-h-[520px] z-10 rounded-2xl overflow-hidden bg-brand-blue shadow-xl p-6 md:p-8">
              <Heading level="h4" className="text-white mb-3 font-extrabold text-center">
                {t("middle.caseHeader")}
              </Heading>
              <div className="mx-auto w-8 h-[1px] bg-white rounded-full mb-4" aria-hidden="true" />
              <Text className="text-white/95 text-base flex-1 mb-6">
                {t("middle.description")}
              </Text>
            </div>
          </div>

          {/* Right: white section */}
          <div className="flex flex-col rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none overflow-hidden bg-white shadow-lg p-6 md:p-8 min-h-[420px]">
            <Heading level="h4" className="text-brand-navy mb-3 font-extrabold">
              {t("right.caseHeader")}
            </Heading>
            <Text className="text-brand-black text-lg mb-6">
              {t("right.description")}
            </Text>
            <ul className="space-y-3 pl-6 md:pl-8">
              {[0, 1, 2].map((i) => (
                <li key={i} className="flex gap-3 items-center">
                  <Image
                    src={i % 2 === 0 ? "/images/dots-left.svg" : "/images/dots-right.svg"}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 shrink-0 mt-0.5 rotate-180"
                    aria-hidden="true"
                  />
                  <Text className="text-brand-navy/90 text-base" as="span">
                    {t(`right.bullets.${i}`)}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
