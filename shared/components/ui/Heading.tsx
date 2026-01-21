import { cn } from "@/lib/utils";
import { headingStyles } from "@/shared/styles";

type HeadingLevel = keyof typeof headingStyles;

interface HeadingProps {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
}

export function Heading({
  level = "h1",
  children,
  className,
}: HeadingProps) {
  const Tag = level;

  return (
    <Tag className={cn(headingStyles[level], className)}>
      {children}
    </Tag>
  );
}

