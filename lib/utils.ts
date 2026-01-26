import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type React from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string, headerHeight: number = 80) {
  if (href.startsWith("#")) {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
}
