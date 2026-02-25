import { defineField, defineType } from "sanity";

export const trustedClients = defineType({
  name: "trustedClients",
  title: "Trusted Clients",
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
      name: "partners",
      title: "Partners / client logos",
      type: "array",
      description: "Add, remove or reorder. Upload logo image and set the client name (used for alt text).",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              description: "Client or company name (e.g. for alt text)",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "logo",
              title: "Logo",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { name: "name" },
            prepare({ name }) {
              return { title: name || "Partner", subtitle: "Logo" };
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
      return { title: "Trusted Clients", subtitle: lang };
    },
  },
});
