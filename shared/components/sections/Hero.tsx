"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Heading } from "@/shared/components/ui/Heading";
import { Text } from "@/shared/components/ui/Text";
import { Button } from "@/shared/components/ui/Button";
import { Divider } from "@/shared/components/ui/Divider";

export function Hero() {
    const t = useTranslations("hero");

    return (
        <section className="relative pt-20 min-h-[400px] border-b-4 border-brand-blue">
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
                <div className="max-w-4xl">
                    <Heading
                        level="h5"
                        className="text-white mb-2 text-center"
                    >
                        {t("label")}
                    </Heading>

                    <Heading
                        level="h1"
                        className="text-white"
                    >
                        {t("title")}
                    </Heading>

                    <Divider />

                    <Text
                        variant="lead"
                        className="text-white mb-8 max-w-3xl"
                    >
                        {t("description")}
                    </Text>

                    <div className="flex flex-wrap gap-4">
                        <Button href="#contact" variant="primary">
                            {t("cta")}
                        </Button>
                        <Button href="#contact" variant="outline">
                            {t("ctaSecondary")}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
