import { defineField, defineType } from "sanity";

export const howWeWork = defineType({
  name: "howWeWork",
  title: "How We Work",
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
      name: "titlePrefix",
      title: "Title (first part)",
      type: "string",
      description: "e.g. 'How' in 'How we work'",
    }),
    defineField({
      name: "titleHighlight",
      title: "Title (highlight part)",
      type: "string",
      description: "e.g. 'we work' in 'How we work'",
    }),
    defineField({
      name: "left",
      title: "Left panel (Cases)",
      type: "object",
      fields: [
        defineField({ name: "caseHeader", title: "Header", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
      ],
    }),
    defineField({
      name: "middle",
      title: "Middle panel (How we work?)",
      type: "object",
      fields: [
        defineField({ name: "caseHeader", title: "Header", type: "string" }),
        defineField({
          name: "bullets",
          title: "Bullet points",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),
    defineField({
      name: "right",
      title: "Right panel (Why All Right?)",
      type: "object",
      fields: [
        defineField({ name: "caseHeader", title: "Header", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
        defineField({
          name: "bullets",
          title: "Bullet points",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),
  ],
  preview: {
    select: { locale: "locale" },
    prepare({ locale }) {
      const lang = locale === "ka" ? "ქართული" : "English";
      return { title: "How We Work", subtitle: lang };
    },
  },
});
