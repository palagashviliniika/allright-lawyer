import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ka"],
  defaultLocale: "ka",
  localeDetection: false, // Always use defaultLocale for root URL; ignores Accept-Language so everyone gets Georgian first
});

export type Locale = (typeof routing.locales)[number];

