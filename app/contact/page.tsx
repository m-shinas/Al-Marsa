import {
  faEnvelopeOpen,
  faLocationDot,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ubuntu_sans } from "../ui/fonts";

export default function Page() {
  return (
    <main>
      <section className="h-[60vh] bg-hero bg-no-repeat bg-cover bg-bottom flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl uppercase py-2 tracking-[2px]">Contact</h1>
      </section>
      <section className="max-w-[1320px] my-0 mx-auto py-0 px-4 text-center">
        <span className="text-4xl font-semibold py-4 relative top-12 bg-white ">
          Get in Touch with Us
        </span>
        <div
          className={`${ubuntu_sans.className} flex max-lg:flex-col justify-around items-center text-center my-8 mx-0 py-8 px-0 rounded-[20px] shadow-3xl`}
        >
          <div className="my-3 mx-0 p-4">
            <span className="block">
              <FontAwesomeIcon
                icon={faMobileAlt}
                className="text-fruit-salad-500 text-4xl pb-4"
              />
            </span>
            <span className="block font-semibold text-lg">Phone No. </span>
            <span className="block text-base font-light opacity-90 pt-1">
              <Link href="tel:+966549734590"> +966 54 973 4590 </Link>
            </span>
          </div>
          <div className="my-3 mx-0 p-4">
            <span className="block">
              <FontAwesomeIcon
                icon={faEnvelopeOpen}
                className="text-fruit-salad-500 text-4xl pb-4"
              />
            </span>
            <span className="block font-semibold text-lg">E-mail </span>
            <span className="block text-base font-light opacity-90 pt-1">
              <Link href="mailto:marketing@almarsacc.com">
                {" "}
                marketing@almarsacc.com{" "}
              </Link>
            </span>
          </div>
          <div className="my-3 mx-0 p-4">
            <span className="block">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-fruit-salad-500 text-4xl pb-4"
              />{" "}
            </span>
            <span className="block font-semibold text-lg"> Address</span>
            <span className="block text-base font-light opacity-90 pt-1">
              P.O. Box 35028 - Dammam <br /> 31488 Kingdom of Saudi Arabia
            </span>
          </div>
        </div>
      </section>
      <section className="my-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3270.3021327901843!2d50.114856675423134!3d26.433893176935847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDI2JzAyLjAiTiA1MMKwMDcnMDIuOCJF!5e1!3m2!1sen!2sin!4v1740671361069!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}
