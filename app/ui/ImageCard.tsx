import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { ubuntu_sans } from "./fonts";
import Link from "next/link";

const ImageCard = ({imgURL, label}: {imgURL: string, label: string}) => {
  return (
      <div className=" sm:w-[250px] sm:min-w-[250px] w-[300px] h-[360px] rounded-[15px] shadow-2xl relative overflow-hidden group">
        <Image src={imgURL} alt="cargo" width={250} height={300} className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-110"/>
          <div className="absolute flex justify-between items-center w-full bottom-4 px-4 ">
            <h3 className={` ${ubuntu_sans.className} text-fruit-salad-100 text-2xl leading-snug font-semibold`}>{label}</h3>
            <Link href="/services" className="w-11 h-11 flex justify-center items-center rounded-full bg-fruit-salad-200 text-fruit-salad-800">
              <FontAwesomeIcon  icon={faArrowRight} className="group-hover:text-xl group-hover:translate-x-1 transition duration-300 ease-linear"/>
            </Link>
          </div>
      </div>
  )
}

export default ImageCard;

