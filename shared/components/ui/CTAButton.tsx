import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CTAButtonProps {
  text: string;
  href?: string;
  icon?: ReactNode;
  className?: string;
}

export function CTAButton({ text, href = "#contact", icon, className }: CTAButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-2 cursor-pointer text-lg font-bold px-8 py-3 text-white rounded-full whitespace-nowrap shrink-0 bg-gradient-to-r from-brand-blue-dark to-brand-blue border border-brand-blue hover:opacity-90 transition-opacity duration-300",
        className
      )}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {text}
    </a>
  );
}

