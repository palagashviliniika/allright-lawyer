export const NAV_LINKS = [
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "whyUs", href: "#why-us" },
  { key: "contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    icon: "/images/icon_fb.svg",
    href: "https://www.facebook.com/Nottesss",
  },
  {
    name: "Instagram",
    icon: "/images/icon_gram.svg",
    href: "https://www.instagram.com/allright.legal/",
  },
  {
    name: "LinkedIn",
    icon: "/images/icon_linked.svg",
    href: "https://www.linkedin.com/company/all-right-%E1%83%98%E1%83%A3%E1%83%A0%E1%83%98%E1%83%93%E1%83%98%E1%83%93%E1%83%9A%E1%83%98-%E1%83%99%E1%83%9D%E1%83%9B%E1%83%9E%E1%83%90%E1%83%9C%E1%83%98%E1%83%90/?viewAsMember=true",
  },
] as const;

/** WhatsApp (wa.me) and Messenger (m.me) for floating contact button */
export const CONTACT_CHAT_LINKS = [
  {
    name: "WhatsApp",
    href: "https://wa.me/995555335509",
    colorClass: "bg-[#25D366] hover:bg-[#20bd5a]",
  },
  {
    name: "Messenger",
    href: "https://m.me/Nottesss",
    colorClass: "bg-[#0084FF] hover:bg-[#0066cc]",
  },
] as const;
