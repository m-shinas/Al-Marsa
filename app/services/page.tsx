import Link from "next/link";
import { ubuntu_sans } from "../ui/fonts";
import { serviceListing } from "../lib/data";
import ServiceCard from "../ui/ServiceCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Differnent services provided by Al Marsa Services",
};

export default function Page() {
  return (
    <main>
      <section className="h-[60vh] bg-hero bg-no-repeat bg-cover bg-bottom flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl uppercase py-2 tracking-[2px] mb-4">
          Services
        </h1>
        <div className={`${ubuntu_sans.className} text-sm`}>
          <Link href="/" className="hover:text-slate-gray">
            Home
          </Link>
          <span className="mx-2">{">"}</span>
          <span>Services</span>
        </div>
      </section>

      <section className="bg-[#0a1a24] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-3 md:grid-rows-3">
            {serviceListing.map((service) => (
              <ServiceCard key={service.label} {...service}/>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
