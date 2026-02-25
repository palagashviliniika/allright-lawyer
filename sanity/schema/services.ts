import { defineField, defineType } from "sanity";

const SERVICE_KEYS = [
  { title: "იურიდიული პირები / Legal", value: "legal" },
  { title: "ფიზიკური პირები / Physical", value: "physical" },
  { title: "აუდიტები / Audits", value: "audits" },
  { title: "სასახლო / Court", value: "court" },
  { title: "უძრავი ქონება / Real Estate", value: "realEstate" },
] as const;

export const services = defineType({
  name: "services",
  title: "Services",
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
      description: "Main heading for the Services section",
    }),
    defineField({
      name: "items",
      title: "Service items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "key",
              title: "Service",
              type: "string",
              options: {
                list: [...SERVICE_KEYS],
                layout: "dropdown",
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
          ],
          preview: {
            select: { key: "key", title: "title" },
            prepare({ key, title }) {
              const label = SERVICE_KEYS.find((k) => k.value === key)?.title ?? key;
              return { title: title || label, subtitle: key };
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(5),
    }),
  ],
  preview: {
    select: { locale: "locale" },
    prepare({ locale }) {
      const lang = locale === "ka" ? "ქართული" : "English";
      return { title: "Services", subtitle: lang };
    },
  },
});
