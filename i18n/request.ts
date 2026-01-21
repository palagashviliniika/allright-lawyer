import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as "en" | "ka")) {
    locale = routing.defaultLocale;
  }

  // Load all message files from the locale folder
  const [metadata, navigation, hero, common, services, whyChooseUs] = await Promise.all([
    import(`@/messages/${locale}/metadata.json`),
    import(`@/messages/${locale}/navigation.json`),
    import(`@/messages/${locale}/hero.json`),
    import(`@/messages/${locale}/common.json`),
    import(`@/messages/${locale}/services.json`),
    import(`@/messages/${locale}/whyChooseUs.json`),
  ]);

  return {
    locale,
    messages: {
      metadata: metadata.default,
      navigation: navigation.default,
      hero: hero.default,
      common: common.default,
      services: services.default,
      whyChooseUs: whyChooseUs.default,
    },
  };
});
