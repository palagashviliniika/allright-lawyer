import { cn } from "@/lib/utils";
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
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}

