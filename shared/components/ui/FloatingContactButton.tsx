"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { CONTACT_CHAT_LINKS } from "@/shared/enums/navigation";

const iconTransition = { duration: 0.2 };
const optionTransition = { type: "tween" as const, duration: 0.25 };

export function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col-reverse items-end gap-3">
      {/* Main contact toggle (same position/size as scroll-to-top: w-20 h-20) */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-20 h-20 rounded-full bg-brand-blue flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 cursor-pointer overflow-hidden"
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
      >
        <span className="relative w-10 h-10 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={iconTransition}
                className="absolute inset-0 flex items-center justify-center"
              >
                <X className="w-10 h-10" />
              </motion.span>
            ) : (
              <motion.span
                key="chat"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={iconTransition}
                className="absolute inset-0 flex items-center justify-center"
              >
                <MessageCircle className="w-10 h-10" />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </button>

      {/* Options open above the trigger: Messenger, WhatsApp */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.a
              key="messenger"
              href={CONTACT_CHAT_LINKS[1].href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.9 }}
              transition={{ ...optionTransition, delay: 0.05 }}
              className={`w-20 h-20 rounded-full flex items-center justify-center text-white shadow-lg transition-colors ${CONTACT_CHAT_LINKS[1].colorClass}`}
              aria-label={CONTACT_CHAT_LINKS[1].name}
            >
              <Image
                src="/images/messenger.svg"
                alt=""
                width={40}
                height={40}
                className="w-10 h-10 brightness-0 invert"
              />
            </motion.a>
            <motion.a
              key="whatsapp"
              href={CONTACT_CHAT_LINKS[0].href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.9 }}
              transition={{ ...optionTransition, delay: 0.1 }}
              className={`w-20 h-20 rounded-full flex items-center justify-center text-white shadow-lg transition-colors ${CONTACT_CHAT_LINKS[0].colorClass}`}
              aria-label={CONTACT_CHAT_LINKS[0].name}
            >
              <Image
                src="/images/whatsapp.svg"
                alt=""
                width={64}
                height={64}
                className="w-16 h-16 brightness-0 invert"
              />
            </motion.a>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
