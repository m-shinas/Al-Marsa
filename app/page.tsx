import Image from "next/image";
import { ubuntu_sans } from "./ui/fonts";
import Hero from "./ui/Hero";
import ImageCard from "./ui/ImageCard";
import { services } from "./lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="padding flex justify-between items-center max-lg:flex-col gap-10 w-full">
        <div className="flex flex-1 flex-col">
          <h2 className="text-5xl capitalize font-bold lg:max-w-lg">
            Navigating <span className="text-fruit-salad-600">Global Trade,</span> <br />
            Delivering <span className="text-fruit-salad-600">Success</span>
          </h2>
          <p className={`${ubuntu_sans.className} mt-4 lg:max-w-lg info-text`}>
            At <strong className="text-fruit-salad-600">AL MARSA SERVICES,</strong> we specialize in providing seamless transportation and 
            logistics services that guarantee the safe, timely, and cost-effective movement of goods across the globe. With years of 
            experience in freight forwarding and customs clearance, we ensure that your cargo reaches its destination with ease and 
            compliance.
          </p>
          <p className={`${ubuntu_sans.className} mt-6 lg:max-w-lg info-text`}>
            Whether you are shipping by sea, air, or land, Al Marsa is your trusted partner in logistics, dedicated to streamlining your 
            supply chain and simplifying the complexities of international trade.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/AllFreightModes.jpg"
            width={550}
            height={600}
            alt="Global map"
            className="object-cover"
          />
        </div>
      </section>
      <section className="bg-snow-flurry padding-x py-10">
        <h2 className="text-center text-5xl font-bold">
          Customs Clearance & Transportation Services
        </h2>
        <p className={`${ubuntu_sans.className} info-text m-auto mt-4 max-w-lg text-center`}>
          Our diverse portfolio of services ensures that we can tailor solutions to 
          meet the unique needs of each client.
        </p>
        <div className="my-8 flex justify-center flex-wrap gap-6">
          {services.map((service) => (
            <ImageCard key={service.label} {...service}/>
          ))}
        </div>
        
      </section>
      
    </>
      
    
    
  );
}
