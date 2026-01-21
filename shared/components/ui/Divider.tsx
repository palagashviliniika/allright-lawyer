import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <hr className={cn("border-white my-6 w-12 mx-auto", className)} />
  );
}

