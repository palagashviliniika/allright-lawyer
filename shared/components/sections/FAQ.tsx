"use client";

import { useTranslations } from "next-intl";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  { id: "q1" },
  { id: "q2" },
  { id: "q3" },
] as const;

export function FAQ() {
  const t = useTranslations("faq");

  return (
    <section id="faq" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
        <SectionHeader
          title={t("title")}
          dotsPosition="right"
          className="max-w-[220px] md:max-w-full"
        />

        <div className="mt-8">
          <Accordion type="single" collapsible defaultValue="q1" className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>
                  {t(`items.${item.id}.question`)}
                </AccordionTrigger>
                <AccordionContent>
                  {t(`items.${item.id}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

