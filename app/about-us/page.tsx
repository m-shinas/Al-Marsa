import Link from "next/link";
import { ubuntu_sans } from "../ui/fonts";
import { Metadata } from "next";
import AboutTab from "../ui/AboutTab";

export const metadata: Metadata = {
  title: "About us",
  description: "We Al Marsa Services established on 2007 and trusted name in the world of freight forwarding. We have a global network headquartered in Saudi Arabia.",
  keywords: ["About us", "Vision", "Mission", "Values", "Company Profile"],
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
      <section className="flex justify-between items-center max-lg:flex-col w-full about-section">
        <div className="padding mx-16 flex flex-1 flex-col who-we-are border-y-2 border-y-lima-400 ">
          <div className="border-l-4 border-lima-400 pl-4 mb-6">
            <h2 className="text-2xl sm:text-3xl font-medium text-fruit-salad-600">
              Who we are
            </h2>
          </div>
          <p
            className={`${ubuntu_sans.className} text-base sm:text-xl leading-8 text-white mb-6`}
          >
            We Al Marsa Services is a leading customs clearance and transportation company established on 2007 
            and now a trusted name in the world of freight forwarding. We have leading network all over
            the world, with our headquarters in Saudi Arabia. we understand the complexities of global 
            trade and are committed to delivering exceptional service to our clients by offering comprehensive and customized logistics solutions.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          
        </div>
      </section>
      
      <section className="values-section py-16 place-content-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AboutTab />
        </div>
      </section>
    </main>
  );
}
