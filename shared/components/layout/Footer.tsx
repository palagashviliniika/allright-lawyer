"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/shared/enums/navigation";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-brand-black py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-4 border-b border-r-0 border-brand-navy pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-8">
            <div className="flex justify-center">
              <Image
                src="/images/allRight-light.svg"
                alt=""
                width={120}
                height={120}
                className="w-24 h-24 md:w-40 md:h-40"
              />
            </div>
            <p className="text-white text-sm uppercase text-center">
              {t("copyright")} <br /> {t("rightsReserved")}
            </p>
          </div>

          {/* Middle: Company description (no nav) */}
          <div className="flex flex-col items-center justify-center border-b border-r-0 border-brand-navy pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-8">
            <p className="text-white text-lg font-bold uppercase leading-relaxed text-center">
              {t("description")}
            </p>
          </div>

          {/* Right: Social icons */}
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0 md:pl-8">
            <div className="flex items-center justify-center gap-4">
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
                    alt=""
                    width={60}
                    height={60}
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
