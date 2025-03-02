import Image from "next/image";
import Link from "next/link";

const Nav = () => (
    <nav className="w-full absolute top-0 left-0 pb-5 px-[8%] flex justify-between items-center z-10">
      <ul>
        <li className="list-none inline-block mx-[40px]">
          <Link href="/" className="text-[#fff] text-[17px]">
            Home
          </Link>
        </li>
        <li className="list-none inline-block mx-[40px]">
          <Link href="/services" className="text-[#fff] text-[17px]">
            Services
          </Link>
        </li>
      </ul>
      <div className="notch">
        <Image src="/AL MARSA-small.png" width={130} height={100} alt="Logo" />
      </div>
      <ul>
        <li className="list-none inline-block mx-[40px] ">
          <Link href="/about-us" className="text-[#fff] text-[17px]">
            About us
          </Link>
        </li>
        <li className="list-none inline-block mx-[40px] ">
          <Link href="/contact" className="text-[#fff] text-[17px]">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
);

export default Nav;
