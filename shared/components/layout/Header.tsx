"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/shared/enums/navigation";
import { CTAButton } from "@/shared/components/ui/CTAButton";
import { handleSmoothScroll } from "@/lib/utils";

export function Header() {
  const t = useTranslations("navigation");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    handleSmoothScroll(e, href);
    closeMenu();
  };

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
              type="button"
              className="md:hidden p-2 text-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 top-20 z-40 bg-brand-black md:hidden transition-opacity duration-200 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col gap-6 px-6 py-8">
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-white text-xl font-bold hover:text-brand-blue transition-colors py-2"
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="inline-flex w-full justify-center gap-2 cursor-pointer text-lg font-bold px-8 py-3 text-white rounded-full bg-gradient-to-r from-brand-blue-dark to-brand-blue border border-brand-blue hover:opacity-90 transition-opacity duration-300"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
