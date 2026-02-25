import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "locale",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "ქართული", value: "ka" },
          { title: "English", value: "en" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Section title",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "FAQ items",
      type: "array",
      description: "Add, remove or reorder questions and answers.",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { question: "question" },
            prepare({ question }) {
              return {
                title: question ? (question.length > 50 ? question.slice(0, 50) + "…" : question) : "FAQ item",
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { locale: "locale" },
    prepare({ locale }) {
      const lang = locale === "ka" ? "ქართული" : "English";
      return { title: "FAQ", subtitle: lang };
    },
  },
});
