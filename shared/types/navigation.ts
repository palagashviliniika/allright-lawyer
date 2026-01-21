import { NAV_LINKS } from "@/shared/enums/navigation";

export type NavLinkKey = (typeof NAV_LINKS)[number]["key"];

export type NavLink = {
  key: NavLinkKey;
  href: string;
};

