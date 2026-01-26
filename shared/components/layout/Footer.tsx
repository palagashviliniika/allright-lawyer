"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { NAV_LINKS, SOCIAL_LINKS } from "@/shared/enums/navigation";
import { handleSmoothScroll } from "@/lib/utils";

export function Footer() {
  const t = useTranslations("navigation");

  return (
    <footer className="bg-brand-black py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col gap-4 border-r border-brand-navy">
            <div className="flex items-center gap-3">
              <Image
                src="/images/allRight-light.svg"
                alt="All Right Law Firm"
                width={160}
                height={160}
                className="w-40 h-40"
              />
            </div>
            <p className="text-white text-sm uppercase max-w-40 text-center">
              COPYRIGHT © 2025 <br /> ALL RIGHTS RESERVED.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-r border-brand-navy items-center justify-center">
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-white text-xl font-bold uppercase hover:text-brand-blue transition-colors duration-300 cursor-pointer"
                >
                  {t(link.key)}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
