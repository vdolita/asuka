import Image from "next/image";

interface ServiceCardProps {
  desc: string;
  img: string;
  link: string;
}

export default function ServiceCard({ desc, img, link }: ServiceCardProps) {
  return (
    <div className="w-full p-2 bg-white rounded">
      <div className="flex flex-col space-y-4">
        <div className="relative">
          <Image
            src={img}
            alt="test"
            width={100}
            height={100}
            sizes="100vw"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div>
          <span className="text-black text-lg">{desc}</span>
        </div>
      </div>
    </div>
  );
}
