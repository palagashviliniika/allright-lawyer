"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/shared/enums/navigation";
import { CTAButton } from "@/shared/components/ui/CTAButton";
import { handleSmoothScroll } from "@/lib/utils";

export function Header() {
  const t = useTranslations("navigation");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/allRight-light.svg"
              alt="All Right"
              width={84}
              height={60}
              className="h-[60px] w-auto"
              priority
            />
          </Link>

          <ul className="hidden md:flex items-center gap-8 ml-10">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-white text-lg font-bold hover:text-brand-blue transition-colors whitespace-nowrap cursor-pointer"
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>

          <CTAButton text={t("cta")} href="#contact" className="hidden md:inline-flex" />

          <button
            className="md:hidden p-2 text-white"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
