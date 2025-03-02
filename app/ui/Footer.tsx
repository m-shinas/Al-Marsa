"use client";

import Image from "next/image";
import Link from "next/link";
import { ubuntu_sans } from "./fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const presentYear: number = new Date().getFullYear();

const Footer = () => {

  const pathname = usePathname();

  return (
    <footer className="w-full bg-[#242323]">
      <div className="bg-black rounded-b-[40px] py-12 px-20 flex justify-between items-start gap-10 flex-wrap max-lg:flex-col border-b-2 border-b-lima-400 ">
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image
              src="/AL MARSA-white_full.png"
              width={120}
              height={100}
              alt="Logo"
            />
          </Link>
          <ul>
            <li
              className={`${ubuntu_sans.className} flex justify-start mt-6 text-base text-white sm:max-w-sm`}
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                size="lg"
                className="mr-4"
              />
              P.O. Box 35028 - Dammam, 31488 Kingdom of Saudi Arabia.
            </li>
            <li
              className={`${ubuntu_sans.className} flex justify-start items-center mt-2 text-base leading-7 text-white sm:max-w-sm`}
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" className="mr-4" />
              <Link href="mailto:marketing@almarsacc.com">
                {" "}
                marketing@almarsacc.com{" "}
              </Link>
            </li>
            <li
              className={`${ubuntu_sans.className} flex justify-start items-center mt-2 text-base leading-7 text-white sm:max-w-sm`}
            >
              <FontAwesomeIcon icon={faPhone} size="lg" className="mr-4" />
              <Link href="tel:+966549734590"> +966 54 973 4590 </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-2xl leading-normal font-medium my-6">
            Links
          </h3>
          <ul>
            <li>
              <Link
                href="/"
                className={clsx(`${ubuntu_sans.className} text-base leading-7 text-white hover:text-slate-gray cursor-pointer`,{'text-lima-400 underline underline-offset-4' : pathname === '/'})}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={clsx(`${ubuntu_sans.className} text-base leading-7 text-white hover:text-slate-gray cursor-pointer`,{'text-lima-400 underline underline-offset-4': pathname === '/services'})}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className={clsx(`${ubuntu_sans.className} text-base leading-7 text-white hover:text-slate-gray cursor-pointer`,{'text-lima-400 underline underline-offset-4' : pathname === '/about-us'})}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={clsx(`${ubuntu_sans.className} text-base leading-7 text-white hover:text-slate-gray cursor-pointer`,{'text-lima-400 underline underline-offset-4 ' : pathname === '/contact'})}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-2xl leading-normal font-medium my-6 ">
            Follow us
          </h3>
          <div className="flex gap-4">
            <Link
              href=""
              className="flex justify-center items-center w-12 h-12 rounded-full border transition linear duration-700 border-white text-white hover:bg-malachite hover:text-black hover:border-0"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                size="lg"
                className="align-bottom"
              />
            </Link>
            <Link
              href=""
              className="flex justify-center items-center w-12 h-12 rounded-full border transition linear duration-700 border-white text-white hover:bg-malachite hover:text-black hover:border-0"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
            <Link
              href=""
              className="flex justify-center items-center w-12 h-12 rounded-full border transition linear duration-700 border-white text-white hover:bg-malachite hover:text-black hover:border-0"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${ubuntu_sans.className} bg-[#242323] text-sm text-opacity-60 py-6 text-center text-white`}
      >
        <p>Al Marsa © Copyright {presentYear}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
