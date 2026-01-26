"use client";

import { cn, handleSmoothScroll } from "@/lib/utils";
import { ReactNode } from "react";

interface CTAButtonProps {
  text: string;
  href?: string;
  icon?: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export function CTAButton({ 
  text, 
  href = "#contact", 
  icon, 
  className,
  type,
  disabled,
  onClick
}: CTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 cursor-pointer text-lg font-bold px-8 py-3 text-white rounded-full whitespace-nowrap shrink-0 bg-gradient-to-r from-brand-blue-dark to-brand-blue border border-brand-blue hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  if (href && !type) {
    return (
      <a
        href={href}
        className={cn(baseClasses, className)}
        onClick={href.startsWith("#") ? (e) => handleSmoothScroll(e, href) : undefined}
      >
        {icon && <span className="flex items-center">{icon}</span>}
        {text}
      </a>
    );
  }

  return (
    <button
      type={type || "button"}
      disabled={disabled}
      onClick={onClick}
      className={cn(baseClasses, className)}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {text}
    </button>
  );
}

