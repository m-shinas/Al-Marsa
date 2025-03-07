"use client";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const pathname = usePathname();

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window !== "undefined") {
    // Client-side-only code
    window.addEventListener("scroll", changeBackground);
  }
  

  return (
    <header>
        <nav
          className={`hidden md:flex w-full fixed bg-transparent text-[#fff] transition duration-500 ease-in-out top-0 left-0 px-[8%] justify-between items-center z-10 ${ navbar && "bg-white text-black drop-shadow-md"}`}
        >
        <ul>
          <li className="list-none inline-block mx-[40px]">
            <Link
              href="/"
              className={clsx("text-[17px] hover:text-fruit-salad-400", {
                "text-fruit-salad-400 ": pathname === "/",
              })}
            >
              Home
            </Link>
          </li>
          <li className="list-none inline-block mx-[40px]">
            <Link
              href="/services"
              className={clsx(" text-[17px] hover:text-fruit-salad-400", {
                " text-fruit-salad-400 ": pathname === "/services",
              })}
            >
              Services
            </Link>
          </li>
        </ul>
        <div className="notch">
          <Image src="/AL-MARSA-logo.PNG" width={115} height={85} alt="Logo" />
        </div>
        <ul>
          <li className="list-none inline-block mx-[40px] ">
            <Link
              href="/about-us"
              className={clsx(" text-[17px] hover:text-fruit-salad-400", {
                " text-fruit-salad-400 ": pathname === "/about-us",
              })}
            >
              About us
            </Link>
          </li>
          <li className="list-none inline-block mx-[40px] ">
            <Link
              href="/contact"
              className={clsx(" text-[17px] hover:text-fruit-salad-400", {
                " text-fruit-salad-400 ": pathname === "/contact",
              })}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

       <nav className="md:hidden flex w-full justify-between items-center fixed z-10 px-4 py-2 bg-white drop-shadow-md">
         <Link href="/">
           <Image
            alt="logo-alMarsa"
            src="/AL-MARSA-horizontal.png"
            width={208}
            height={60}
          />
        </Link>
        
        <div className="text-5xl cursor-pointer border-l p-2" onClick={() => setIsMenuOpened(!isMenuOpened)}>
          {isMenuOpened ? <FontAwesomeIcon icon={faXmark} /> :  <FontAwesomeIcon icon={faBars} /> }
        </div>
        <div className={`${isMenuOpened ? 'absolute top-20 left-0 w-full bg-white flex flex-col items-center gap-6 text-lg transform transition duration-300 ease-in' : 'hidden'}`}>
          <ul className="w-full text-center text-base">
            <li className={`m-4 hover:text-fruit-salad-400 border-b ${pathname === '/' && 'text-fruit-salad-400'}`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`m-4 hover:text-fruit-salad-400 border-b ${pathname === '/services' && 'text-fruit-salad-400'}`}>
              <Link href='/services'> Services</Link>
            </li>
            
            <li className={`m-4 hover:text-fruit-salad-400 border-b ${pathname === '/about-us' && 'text-fruit-salad-400'}`}>
              <Link href='/about-us'>About us</Link>
            </li>
            
            <li className={`m-4 hover:text-fruit-salad-400  ${pathname === '/contact' && 'text-fruit-salad-400'}`}>
              <Link href='/contact'>Contact</Link></li>
          </ul>
        </div>
      </nav>
    
    </header>
  );
};

export default Nav;
