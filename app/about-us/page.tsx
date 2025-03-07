"use client"

import Link from "next/link";
import { ubuntu_sans } from "../ui/fonts";
import Image from "next/image";
import { useState } from "react";

const tabs = [
  {id: "tab1" , label: "Values"},
  {id: "tab2" , label: "Mission"},
  {id: "tab3" , label: "Vision"},
]
  
const tabContent = {
  tab1:(
      "We are guided by our core values of integrity, reliability, and customer satisfaction. We strive to build long-term partnerships with our clients by providing transparent and efficient services."
  ),
  tab2: (
     "Our mission is clear to provide seamless, reliable, and cost-effective logistics solutions, that empower businesses to thrive in the global market."
  ),
  tab3: (
     "To empower businesses globally by providing exceptional, personalized logistics solutions that exceed expectations and foster long-term partnerships."
  )
}
  
export default function Page() {

  const [activeTab, setActiveTab] = useState<string>("tab2")

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
            the world, with our headquarter in Saudi Arabia. we understand the complexities of global 
            trade and are committed to delivering exceptional service to our clients by offering comprehensive and customized logistics solutions.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/Al-MarsaTruck.png"
            width={550}
            height={550}
            alt="Hero"
            className="object-contain drop-shadow-3xl hover:drop-shadow-4xl"
          />
        </div>
      </section>
      
      <section className="values-section py-16 h-[60vh] place-content-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col border-r-2 text-white">
              {tabs.map((tab) => (
                <button key={tab.id} className={`text-xl px-10 py-6 font-bold ${activeTab === tab.id ? 'border-r-4 border-r-lima-400 text-fruit-salad-600': 'text-white hover:text-fruit-salad-600'}`}
                  onClick={() => setActiveTab(tab.id)}>
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="text-white text-center ml-4">
              <p className={`${ubuntu_sans.className} text-lg w-[50vw]`}>
                {tabContent[activeTab as keyof typeof tabContent]}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
