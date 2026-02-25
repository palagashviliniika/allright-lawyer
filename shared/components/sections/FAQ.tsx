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

export type FAQData = {
  title?: string | null;
  items?: Array<{ question?: string; answer?: string }> | null;
};

export function FAQ({ faq: faqData }: { faq?: FAQData }) {
  const t = useTranslations("faq");

  const sectionTitle = faqData?.title ?? t("title");
  const cmsItems = faqData?.items?.filter((i) => i.question && i.answer) ?? [];
  const items =
    cmsItems.length > 0
      ? cmsItems.map((i, index) => ({
          id: `cms-${index}`,
          question: i.question!,
          answer: i.answer!,
        }))
      : FAQ_ITEMS.map((item) => ({
          id: item.id,
          question: t(`items.${item.id}.question`),
          answer: t(`items.${item.id}.answer`),
        }));

  return (
    <section id="faq" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
        <SectionHeader
          title={sectionTitle}
          dotsPosition="right"
          className="max-w-[220px] md:max-w-full"
        />

        <div className="mt-8 w-full max-w-3xl">
          <Accordion
            type="single"
            collapsible
            defaultValue={items[0]?.id}
            className="w-full space-y-4"
          >
            {items.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

