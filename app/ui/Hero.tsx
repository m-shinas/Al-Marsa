import Link from "next/link";
import { ubuntu_sans } from "./fonts";
import { Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Hero = () => (
  <div className="relative w-full h-screen bg-gradient-to-b from-[#0c0333]/30 to-[#0c0333]/30 py-0 px-[5%] flex items-center justify-center">
    <Suspense fallback={<FontAwesomeIcon icon={faSpinner} spinPulse color="#fff" size="4x"/>}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover -z-[1] "
        preload="none"
        aria-label="Video player"
    >
        <source src="/al-marsa-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Suspense>
    
    <div className="text-center">
      <h1 className={`${ubuntu_sans.className} no-select text-5xl md:text-6xl lg:text-7xl text-white font-bold transition duration-500 ease-out hover:[-webkit-text-stroke:1px_#fff] hover:text-transparent`}>Experience <br /> Seamless Shipping
      <br /> & Boundless Solutions</h1>
      <Link
        href="/contact"
        className={`${ubuntu_sans.className} inline-block text-center text-[#fff] bg-gradient-to-r from-fruit-salad-600 to-lima-400 hover:from-fruit-salad-700 hover:to-lima-500 text-[24px] py-[14px] px-[56px] rounded-[50px] mt-[20px] shadow-lg transition duration-300 ease-in-out transform hover:scale-105`}
      >
        Connect us
      </Link>
    </div>
  </div>
);

export default Hero;
