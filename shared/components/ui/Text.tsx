import { cn } from "@/lib/utils";
import { textStyles } from "@/shared/styles";

type TextVariant = keyof typeof textStyles;

interface TextProps {
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
}

export function Text({
  variant = "body",
  children,
  className,
  as: Tag = "p",
}: TextProps) {
  return (
    <Tag className={cn(textStyles[variant], className)}>
      {children}
    </Tag>
  );
}

