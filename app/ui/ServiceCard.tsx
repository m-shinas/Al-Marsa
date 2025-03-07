import Image from "next/image";
import { ubuntu_sans } from "./fonts";

const ServiceCard = ({
  imgURL,
  label,
  description,
  alt,
}: {
  imgURL: string;
  label: string;
  description: string;
  alt: string;
}) => {
  return (
    <div className="flex flex-col">
      <h2 className="mb-4 border-l-4 border-lima-400 pl-4 text-3xl uppercase">
        {label}
      </h2>
      <div className="mb-4 overflow-hidden">
        <Image
          src={imgURL}
          alt={alt}
          width={350}
          height={400}
          className="h-80 w-full object-cover"
        />
      </div>
      <p className={`${ubuntu_sans.className} mb-6 text-base`}>{description}</p>
    </div>
  );
};

export default ServiceCard;
