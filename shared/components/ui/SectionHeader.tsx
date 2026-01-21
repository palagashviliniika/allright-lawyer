"use client";

import Image from "next/image";
import { Heading } from "./Heading";
import { Divider } from "./Divider";
import { cn } from "@/lib/utils";

type DotsPosition = "left" | "right" | "none";

interface SectionHeaderProps {
  title: string;
  dotsPosition?: DotsPosition;
  className?: string;
  level?: "h2" | "h3" | "h4" | "h5" | "h6";
}

export function SectionHeader({
  title,
  dotsPosition = "none",
  className,
  level = "h3",
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative inline-flex items-center justify-center">
        {dotsPosition === "left" && (
          <Image
            src="/images/dots-left.svg"
            alt=""
            width={80}
            height={80}
            className="absolute -left-8 -top-6 z-0"
            aria-hidden="true"
          />
        )}

        {dotsPosition === "right" && (
          <Image
            src="/images/dots-right.svg"
            alt=""
            width={80}
            height={80}
            className="absolute -right-8 -top-6 z-0"
            aria-hidden="true"
          />
        )}

        <Heading level="h3" className="text-white text-center relative z-10 capitalize">
          {title}
        </Heading>
      </div>

      <Divider className="mt-4" />
    </div>
  );
}

