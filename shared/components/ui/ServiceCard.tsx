import Image from "next/image";
import { Text } from "./Text";

interface ServiceCardProps {
  icon: string;
  label: string;
}

export function ServiceCard({ icon, label }: ServiceCardProps) {
  return (
    <div className="relative group flex flex-col items-center p-6 rounded-t-2xl bg-gradient-to-b from-brand-blue/40 to-brand-dark border-b-4 border-brand-blue transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="pb-2 rounded-full">
        <Image
          src={icon}
          alt=""
          width={92}
          height={92}
          className="w-16 h-16 md:w-[92px] md:h-[92px] brightness-0 invert"
        />
      </div>
      <Text className="text-white text-center font-semibold text-sm md:text-base">
        {label}
      </Text>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-brand-blue" />
    </div>
  );
}
