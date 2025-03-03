"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {

  const pathname = usePathname();

  return (
    <nav className="w-full absolute top-0 left-0 pb-5 px-[8%] flex justify-between items-center z-10">
      <ul>
        <li className="list-none inline-block mx-[40px]">
          <Link href="/" className={clsx("text-[#fff] text-[17px]",{' border border-white rounded-[50px] px-5 ': pathname === '/'})}>
            Home
          </Link>
        </li>
        <li className="list-none inline-block mx-[40px]">
          <Link href="/services" className={clsx("text-[#fff] text-[17px]",{' border border-white rounded-[50px] px-5 ': pathname === '/services'})}>
            Services
          </Link>
        </li>
      </ul>
      <div className="notch">
        <Image src="/AL MARSA-logo.png" width={130} height={100} alt="Logo" />
      </div>
      <ul>
        <li className="list-none inline-block mx-[40px] ">
          <Link href="/about-us" className={clsx("text-[#fff] text-[17px]",{' border border-white rounded-[50px] px-5 ': pathname === '/about-us'})}>
            About us
          </Link>
        </li>
        <li className="list-none inline-block mx-[40px] ">
          <Link href="/contact" className={clsx("text-[#fff] text-[17px]",{' border border-white rounded-[50px] px-5 ': pathname === '/contact'})}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
