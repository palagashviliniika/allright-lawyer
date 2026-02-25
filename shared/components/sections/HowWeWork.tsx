"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Heading } from "@/shared/components/ui/Heading";
import { Text } from "@/shared/components/ui/Text";

export type HowWeWorkData = {
  titlePrefix?: string | null;
  titleHighlight?: string | null;
  left?: { caseHeader?: string; description?: string } | null;
  middle?: { caseHeader?: string; bullets?: string[] | null } | null;
  right?: { caseHeader?: string; description?: string; bullets?: string[] | null } | null;
};

export function HowWeWork({ howWeWork: howWeWorkData }: { howWeWork?: HowWeWorkData }) {
  const t = useTranslations("howWeWork");

  const hasCms =
    howWeWorkData?.titlePrefix != null ||
    howWeWorkData?.titleHighlight != null ||
    howWeWorkData?.left?.caseHeader != null ||
    howWeWorkData?.middle?.caseHeader != null ||
    howWeWorkData?.right?.caseHeader != null;

  const titlePrefix = hasCms ? (howWeWorkData?.titlePrefix ?? "") : t("titlePrefix");
  const titleHighlight = hasCms ? (howWeWorkData?.titleHighlight ?? "") : t("titleHighlight");
  const leftHeader = howWeWorkData?.left?.caseHeader ?? t("left.caseHeader");
  const leftDescription = howWeWorkData?.left?.description ?? t("left.description");
  const middleHeader = howWeWorkData?.middle?.caseHeader ?? t("middle.caseHeader");
  const middleBullets = howWeWorkData?.middle?.bullets?.length
    ? howWeWorkData.middle.bullets!
    : [t("middle.bullets.0"), t("middle.bullets.1")];
  const rightHeader = howWeWorkData?.right?.caseHeader ?? t("right.caseHeader");
  const rightDescription = howWeWorkData?.right?.description ?? t("right.description");
  const rightBullets = howWeWorkData?.right?.bullets?.length
    ? howWeWorkData.right.bullets!
    : [0, 1, 2, 3, 4, 5].map((i) => t(`right.bullets.${i}`));

  return (
    <section id="how-we-work" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title={`${titlePrefix} ${titleHighlight}`.trim() || t("titlePrefix") + " " + t("titleHighlight")}
          dotsPosition="right"
          className="md:mb-10"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_2fr] gap-0 min-h-0 lg:min-h-[420px] overflow-visible pt-10">
          <div className="flex flex-col rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none overflow-hidden bg-brand-navy shadow-lg p-6 md:p-8 min-h-0 lg:min-h-[420px]">
            <Heading level="h4" className="text-white font-extrabold text-center mb-4">
              {leftHeader}
            </Heading>
            <Text className="text-white/95 text-base text-left leading-relaxed">
              {leftDescription}
            </Text>
          </div>

          <div className="relative min-h-0 lg:min-h-[420px] overflow-visible">
            <div className="flex flex-col min-h-0 lg:absolute lg:left-0 lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:min-h-[520px] lg:z-10 rounded-none lg:rounded-2xl overflow-hidden bg-brand-blue shadow-xl p-6 md:p-8">
              <Heading level="h4" className="text-white mb-3 font-extrabold text-center">
                {middleHeader}
              </Heading>
              <div className="mx-auto w-8 h-[1px] bg-white rounded-full mb-4" aria-hidden="true" />
              <ul className="space-y-3 flex-1 mb-6 list-disc list-outside pl-5">
                {middleBullets.map((bullet, i) => (
                  <li key={i} className="marker:text-white pl-1">
                    <Text className="text-white/95 text-base" as="span">
                      {bullet}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none overflow-hidden bg-white shadow-lg p-6 md:p-8 min-h-[420px]">
            <Heading level="h4" className="text-brand-navy mb-3 font-extrabold">
              {rightHeader}
            </Heading>
            <Text className="text-brand-black text-lg mb-6">
              {rightDescription}
            </Text>
            <ul className="space-y-3 pl-6 md:pl-8">
              {rightBullets.map((bullet, i) => (
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
                    {bullet}
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
