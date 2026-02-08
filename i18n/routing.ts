import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ka"],
  defaultLocale: "ka",
});

export type Locale = (typeof routing.locales)[number];

