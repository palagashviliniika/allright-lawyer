"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{
  value: string | null;
  onValueChange: (value: string | null) => void;
  type: "single" | "multiple";
  collapsible: boolean;
} | null>(null);

type AccordionProps = {
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultValue?: string;
  value?: string | string[] | null;
  onValueChange?: (value: string | string[] | null) => void;
  className?: string;
  children: React.ReactNode;
};

function Accordion({
  type = "single",
  collapsible = true,
  defaultValue,
  value: controlledValue,
  onValueChange,
  className,
  children,
}: AccordionProps) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState<string | null>(
    defaultValue ?? null
  );
  const isControlled = controlledValue !== undefined;
  const value = type === "single"
    ? (isControlled ? (Array.isArray(controlledValue) ? controlledValue[0] ?? null : controlledValue) : uncontrolledValue)
    : null;

  const onValueChangeInternal = React.useCallback(
    (next: string | null) => {
      if (type === "single") {
        if (!isControlled) setUncontrolledValue(next);
        onValueChange?.(next);
      }
    },
    [type, isControlled, onValueChange]
  );

  const ctx = React.useMemo(
    () => ({
      value: type === "single" ? value ?? null : null,
      onValueChange: onValueChangeInternal,
      type,
      collapsible,
    }),
    [value, onValueChangeInternal, type, collapsible]
  );

  return (
    <AccordionContext.Provider value={ctx}>
      <div data-slot="accordion" className={cn("w-full", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

type AccordionItemProps = {
  value: string;
  className?: string;
  children: React.ReactNode;
};

function AccordionItem({ value, className, children }: AccordionItemProps) {
  return (
    <div
      data-slot="accordion-item"
      data-state={undefined}
      className={cn("relative w-full min-w-0", className)}
    >
      <AccordionItemContext.Provider value={value}>
        {children}
      </AccordionItemContext.Provider>
    </div>
  );
}

const AccordionItemContext = React.createContext<string | null>(null);

type AccordionTriggerProps = {
  className?: string;
  children: React.ReactNode;
};

function AccordionTrigger({ className, children }: AccordionTriggerProps) {
  const accordion = React.useContext(AccordionContext);
  const itemValue = React.useContext(AccordionItemContext);
  if (!accordion || itemValue === null) return null;

  const isOpen = accordion.value === itemValue;

  const handleClick = () => {
    if (isOpen && accordion.collapsible) {
      accordion.onValueChange(null);
    } else {
      accordion.onValueChange(itemValue);
    }
  };

  return (
    <div className="flex relative w-full min-w-0">
      <button
        type="button"
        data-slot="accordion-trigger"
        data-state={isOpen ? "open" : "closed"}
        onClick={handleClick}
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex min-w-0 flex-1 items-center justify-between gap-4 bg-brand-navy rounded-t-3xl border-b-8 border-brand-blue py-4 px-6 md:px-8 text-white text-left text-base md:text-2xl font-bold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 cursor-pointer w-full",
          className
        )}
      >
        {children}
      </button>
      {/* Triangle arrow - points up when closed, down when open */}
      <div
        className={cn(
          "absolute right-6 md:right-8 -bottom-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-brand-blue pointer-events-none transition-transform duration-200",
          isOpen ? "rotate-180 translate-y-0" : "-translate-y-4"
        )}
      />
    </div>
  );
}

const contentTransition = { duration: 0.25, ease: "easeOut" as const };

type AccordionContentProps = {
  className?: string;
  children: React.ReactNode;
};

function AccordionContent({ className, children }: AccordionContentProps) {
  const accordion = React.useContext(AccordionContext);
  const itemValue = React.useContext(AccordionItemContext);
  if (!accordion || itemValue === null) return null;

  const isOpen = accordion.value === itemValue;

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key={itemValue}
          data-slot="accordion-content"
          data-state="open"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={contentTransition}
          className="overflow-hidden rounded-b-3xl bg-brand-light"
        >
          <div
            className={cn(
              "min-w-0 break-words px-6 md:px-8 pt-6 pb-4 font-medium text-sm md:text-lg",
              className
            )}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
