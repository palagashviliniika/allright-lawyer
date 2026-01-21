// Heading variants
export const headingStyles = {
  h1: "text-4xl md:text-5xl lg:text-6xl font-bold",
  h2: "text-3xl md:text-4xl lg:text-5xl font-bold",
  h3: "text-2xl md:text-3xl font-bold",
  h4: "text-xl md:text-2xl font-semibold",
  h5: "text-lg md:text-xl font-semibold",
  h6: "text-base md:text-lg font-semibold",
} as const;

// Text variants
export const textStyles = {
  body: "text-base",
  lead: "text-lg md:text-xl",
  small: "text-sm",
  muted: "text-sm text-muted-foreground",
  label: "text-sm font-medium uppercase tracking-wider",
} as const;

// Button variants
export const buttonBaseStyles =
  "inline-flex items-center justify-center font-bold text-lg px-8 py-3 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer";

export const buttonVariantStyles = {
  primary:
    "bg-brand-blue text-white border border-brand-blue hover:bg-brand-blue/90",
  outline:
    "bg-transparent text-white border border-brand-blue hover:bg-brand-blue/10",
} as const;

