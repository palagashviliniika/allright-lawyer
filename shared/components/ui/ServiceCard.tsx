import Image from "next/image";
import { Text } from "./Text";

interface ServiceCardProps {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function ServiceCard({ icon, label, isActive = false, onClick }: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className="relative flex flex-col items-center p-6 rounded-t-2xl bg-gradient-to-b from-brand-blue/40 to-brand-dark cursor-pointer"
    >
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
      {isActive && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white z-10" />
      )}
    </div>
  );
}
