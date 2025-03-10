"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpened(false);
  }, [pathname])
  
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

      <nav className={`md:hidden fixed top-0 left-0 w-full z-20 bg-white shadow-xl`}>
          <div className="pr-6 pl-3">
            <div className="flex items-center justify-between">
              <div className="relative z-20">
                <Link href="/">
                  <Image
                    alt="logo-alMarsa"
                    src="/AL-MARSA-horizontal.png"
                    width={208}
                    height={60}
                  />
                </Link>
              </div>
              <div className="flex items-center justify-end border-l ">
                <div className={`${isMenuOpened && 'hamburger'} z-20 p-6 -mr-6 cursor-pointer relative`} onClick={() => setIsMenuOpened(!isMenuOpened)}>
                  <div aria-hidden="true" className="m-auto h-0.5 mt-1 w-6 rounded bg-black transition duration-300"></div>
                  <div aria-hidden="true" className="m-auto h-0.5 mt-1 w-6 rounded bg-black transition duration-300"></div>
                  <div aria-hidden="true" className="m-auto h-0.5 mt-1 w-6 rounded bg-black transition duration-300"></div>
                </div>
                <div className={`${isMenuOpened ? 'translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] bg-white border-r shadow-xl transition duration-300' : 'fixed inset-0 w-[calc(100%-4.5rem)] bg-white border-r shadow-xl transition duration-300 translate-x-[-100%]'} `} >
                  <div className="flex flex-col h-full">
                    <ul className="px-8 pt-20 space-y-4">
                      <li className={` hover:text-fruit-salad-400  ${pathname === '/' && 'text-fruit-salad-400'}`}>
                        <Link href="/">Home</Link>
                      </li>
                      <hr />
                      <li className={` hover:text-fruit-salad-400  ${pathname === '/services' && 'text-fruit-salad-400'}`}>
                        <Link href='/services'> Services</Link>
                      </li>
                      <hr />
                      <li className={` hover:text-fruit-salad-400  ${pathname === '/about-us' && 'text-fruit-salad-400'}`}>
                        <Link href='/about-us'>About us</Link>
                      </li>
                      <hr />
                      <li className={` hover:text-fruit-salad-400  ${pathname === '/contact' && 'text-fruit-salad-400'}`}>
                        <Link href='/contact'>Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </nav>
    
    </header>
  );
};

export default Nav;
