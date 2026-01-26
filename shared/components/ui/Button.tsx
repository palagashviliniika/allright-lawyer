"use client";

import { cn, handleSmoothScroll } from "@/lib/utils";
import { buttonBaseStyles, buttonVariantStyles } from "@/shared/styles";

type ButtonVariant = keyof typeof buttonVariantStyles;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function Button({
  variant = "primary",
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const styles = cn(buttonBaseStyles, buttonVariantStyles[variant], className);

  if (href) {
    return (
      <a 
        href={href} 
        className={styles}
        onClick={href.startsWith("#") ? (e) => handleSmoothScroll(e, href) : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={props.type || "button"} className={styles} {...props}>
      {children}
    </button>
  );
}

