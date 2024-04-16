import Image from "next/image";
import { ReactNode } from "react";

interface ServiceCardProps {
  desc: string;
  img: ReactNode;
  link: string;
}

export default function ServiceCard({ desc, img, link }: ServiceCardProps) {
  return (
    <div className="w-full p-2 bg-white rounded">
      <div className="flex flex-col space-y-4">
        <div className="relative">{img}</div>
        <div>
          <span className="text-black text-lg">{desc}</span>
        </div>
      </div>
    </div>
  );
}
