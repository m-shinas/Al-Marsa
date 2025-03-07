import Link from "next/link";
import { ubuntu_sans } from "../ui/fonts";
import Image from "next/image";
import { Metadata } from "next";
import AboutTab from "../ui/AboutTab";

export const metadata: Metadata = {
  title: "About us",
  description: "Al Marsa Services is a leading customs clearance and transportation company in Saudi Arabia",
};

export default function Page() {

  return (
    <main>
      <section className="h-[60vh] bg-hero bg-no-repeat bg-cover bg-bottom flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl uppercase py-2 tracking-[2px] mb-4">
          About Us
        </h1>
        <div className={`${ubuntu_sans.className} text-sm`}>
          <Link href="/" className="hover:text-slate-gray">
            Home
          </Link>
          <span className="mx-2">{">"}</span>
          <span>About Us</span>
        </div>
      </section>
      <section className="padding flex justify-between items-center max-lg:flex-col gap-10 w-full bg-snow-flurry">
        <div className="flex flex-1 flex-col">
          <div className="border-l-4 border-lima-400 pl-4 mb-6">
            <h2 className="text-3xl  font-medium text-fruit-salad-600">
              Who we are
            </h2>
          </div>
          <p
            className={`${ubuntu_sans.className} text-xl leading-8 text-slate-gray mb-6`}
          >
            We Al Marsa Services is a leading customs clearance and transportation company established on 2007 
            and now a trusted name in the world of freight forwarding. We have leading network all over
            the world, with our headquarters in Saudi Arabia. we understand the complexities of global 
            trade and are committed to delivering exceptional service to our clients by offering comprehensive and customized logistics solutions.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/globe-map.png"
            width={600}
            height={550}
            alt="Hero"
            className="object-fill drop-shadow-3xl hover:drop-shadow-4xl"
          />
        </div>
      </section>
      
      <section className="values-section py-16 h-[60vh] place-content-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AboutTab />
        </div>
      </section>
    </main>
  );
}
