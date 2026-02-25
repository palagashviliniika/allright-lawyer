import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero",
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
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
    }),
  ],
  preview: {
    select: { locale: "locale", title: "title" },
    prepare({ locale, title }) {
      const lang = locale === "ka" ? "ქართული" : "English";
      return { title: title || "Hero", subtitle: lang };
    },
  },
});
