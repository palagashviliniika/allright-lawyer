"use client";

import { AnimatePresence, motion } from "framer-motion";

interface AnimatedErrorMessageProps {
  error?: string;
}

export function AnimatedErrorMessage({ error }: AnimatedErrorMessageProps) {
  return (
    <div className="min-h-[20px] mt-1.5">
      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm text-red-300"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
