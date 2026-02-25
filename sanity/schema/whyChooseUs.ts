import { defineField, defineType } from "sanity";

export const whyChooseUs = defineType({
  name: "whyChooseUs",
  title: "Why Choose Us",
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
      description: "Main heading for the section (optional)",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      description: "Upload and reorder images for the carousel. Add or remove as many as you need.",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
              description: "For accessibility and SEO",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { locale: "locale" },
    prepare({ locale }) {
      const lang = locale === "ka" ? "ქართული" : "English";
      return { title: "Why Choose Us", subtitle: lang };
    },
  },
});
