import Image from "next/image";
import { ubuntu_sans } from "./ui/fonts";
import Hero from "./ui/Hero";
import ImageCard from "./ui/ImageCard";
import { services } from "./lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="padding py- flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        <div className="flex flex-1 flex-col">
          <h2 className="text-5xl capitalize font-bold lg:max-w-lg">
            Seamless <span className="text-fruit-salad-600">Shipping,</span> <br />
            Boundless <span className="text-fruit-salad-600">Solutions</span>
          </h2>
          <p className={`${ubuntu_sans.className} mt-4 lg:max-w-lg info-text`}>
            <strong className="text-fruit-salad-600">AL MARSA SERVICES</strong> provides Door to Door, Import and Export Services around the world. 
             We were covering all kind of cargo by sea, air & land. The service is provided 
             at effective cost due to our abilities to negotiate competitive rates with 
             agencies. 
          </p>
          <p className={`${ubuntu_sans.className} mt-6 lg:max-w-lg info-text`}>
             We are also able to monitor all Shipments from its origin to final 
             destination for both importers and exporters with our feasible access system.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/AllFreightModes.jpg"
            width={550}
            height={550}
            alt="Hero"
            className="object-contain"
          />
        </div>
      </section>
      <section className="bg-snow-flurry padding-x py-10">
        <h2 className="text-center text-5xl font-bold">
          Personalised Transportation Freight Forwarding
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
