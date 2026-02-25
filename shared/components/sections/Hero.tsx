"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Heading } from "@/shared/components/ui/Heading";
import { Text } from "@/shared/components/ui/Text";
import { Button } from "@/shared/components/ui/Button";
import { Divider } from "@/shared/components/ui/Divider";

export type HeroData = {
  title?: string | null;
  subtitle?: string | null;
};

export function Hero({ hero }: { hero?: HeroData }) {
    const t = useTranslations("hero");

    const title = hero?.title ?? t("title");
    const description = hero?.subtitle ?? t("description");

    return (
        <section id="about" className="relative pt-20 min-h-[400px] border-b-4 border-brand-blue">
            <div className="absolute inset-0 flex">
                <div className="w-1/6 bg-black" />
                <div className="relative w-5/6">
                    <Image
                        src="/images/hero.webp"
                        alt="Hero background"
                        fill
                        className="object-cover object-center pt-20"
                        priority
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="flex max-w-4xl flex-col items-center text-center md:items-start md:text-left">
                    <Heading
                        level="h5"
                        className="text-white mb-2"
                    >
                        {t("label")}
                    </Heading>

                    <Heading
                        level="h1"
                        className="text-white md:!text-[44px] leading-tight"
                    >
                        {title}
                    </Heading>

                    <Divider />

                    <Text
                        variant="lead"
                        className="text-left text-white mb-8 max-w-3xl"
                    >
                        {description}
                    </Text>

                    <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row">
                        <Button href="#contact" variant="primary" className="w-full md:w-auto">
                            {t("cta")}
                        </Button>
                        <Button href="#contact" variant="outline" className="w-full md:w-auto">
                            {t("ctaSecondary")}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
