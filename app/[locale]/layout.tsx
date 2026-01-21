import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header } from "@/shared/components/layout/Header";
import "../globals.css";

const firaGO = localFont({
  src: [
    {
      path: "../../shared/fonts/FiraGO-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../shared/fonts/FiraGO-Book.otf",
      weight: "450",
      style: "normal",
    },
    {
      path: "../../shared/fonts/FiraGO-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../shared/fonts/FiraGO-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../shared/fonts/FiraGO-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../shared/fonts/FiraGO-Heavy.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-fira-go",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Allright Law Firm",
  description: "Professional legal services you can trust",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${firaGO.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
