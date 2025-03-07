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


const Footer = () => {
  
  const presentYear: number = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="w-full bg-[#242323]">
      <div className={clsx("bg-black rounded-b-[40px] py-12 px-20 flex justify-between items-start gap-10 flex-wrap max-lg:flex-col border-b-2 border-b-lima-400 ", {
                    "rounded-t-[40px] border-t-2 border-t-lima-400": pathname === "/about-us" || pathname === "/services",
                  })}>
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
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className={clsx(
                  `${ubuntu_sans.className} flex items-center text-base leading-7 text-white hover:text-slate-gray cursor-pointer`,
                  {
                    "text-malachite underline underline-offset-4":
                      pathname === "/",
                  }
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 h-4 w-4"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={clsx(
                  `${ubuntu_sans.className} flex items-center text-base leading-7 text-white hover:text-slate-gray cursor-pointer`,
                  {
                    "text-malachite underline underline-offset-4":
                      pathname === "/services",
                  }
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 h-4 w-4"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className={clsx(
                  `${ubuntu_sans.className} flex items-center text-base leading-7 text-white hover:text-slate-gray cursor-pointer`,
                  {
                    "text-malachite underline underline-offset-4":
                      pathname === "/about-us",
                  }
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 h-4 w-4"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={clsx(
                  `${ubuntu_sans.className} flex items-center text-base leading-7 text-white hover:text-slate-gray cursor-pointer`,
                  {
                    "text-malachite underline underline-offset-4":
                      pathname === "/contact",
                  }
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 h-4 w-4"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
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
            <a className="flex justify-center items-center w-12 h-12 rounded-full border transition linear duration-700 border-white text-white hover:bg-malachite hover:text-black hover:border-0">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a className="flex justify-center items-center w-12 h-12 rounded-full border transition linear duration-700 border-white text-white hover:bg-malachite hover:text-black hover:border-0">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a className="flex justify-center items-center w-12 h-12 rounded-full border transition linear duration-700 border-white text-white hover:bg-malachite hover:text-black hover:border-0">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
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
