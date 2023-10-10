import React from "react";
import Image from "next/image";
import {
  faPhoneVolume,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Banner from "@/app/assets/images/template-cover.jpg";
import ContactForm from "@/app/components/forms/ContactForm";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact | Pinoy",
  description: "Travel anywahere It is All About Travel ",
};

export default function Contact() {
  return (
    <main className={inter.className}>
      <Image
        className="lg:-mt-6"
        src={Banner}
        width={0}
        height={0}
        alt="Contact"
        placeholder="blur"
        priority
      />
      <div className="container mx-auto w-full text-center mt-4 ">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-center mt-4 px-4">
          For inquiries or assistance, don&apos;t hesitate to get in touch with
          our Tagalog and Bisaya-speaking travel experts. We&apos;re here to
          enhance your experience and provide convenience.
        </p>
      </div>

      <div className="container gap-3 grid lg:grid-cols-3 mx-auto mt-10">
        <div className="group px-4">
          <div className="rounded-lg border bg-gradient-to-r from-violet-200 via-sky-200 to-emerald-200  lg:px-20 py-4 shadow-lg mt-2">
            <h2 className="mb-3 text-2xl text-center mx-auto items-center justify-center font-semibold">
            <FontAwesomeIcon
                className=""
                size="lg"
                icon={faPhoneVolume}
                beatFade
              />{" "}
            </h2>
            <a href="tel:+442038382020" className="" rel="noopener noreferrer">
              <h4 className="font-bold text-center">0203 838 2020</h4>
            </a>
          </div>
          <div className="rounded-lg border bg-gradient-to-r from-violet-200 via-sky-200 to-emerald-200  lg:px-20 py-4 shadow-lg mt-6">
            <h2 className="mb-3 text-2xl text-center mx-auto items-center justify-center font-semibold">
            <FontAwesomeIcon
                className=""
                size="lg"
                icon={faEnvelope}
                beatFade
              />{" "}
            </h2>
            <a
              href="mailto:info@pinoy.co.uk"
              className=""
              rel="noopener noreferrer"
            >
              <h4 className="font-bold text-center">info@pinoy.co.uk</h4>
            </a>
          </div>
          <div className="rounded-lg border bg-gradient-to-r from-violet-200 via-sky-200 to-emerald-200  lg:px-10 py-4 shadow-lg mt-6">
            <h2 className="mb-3 text-2xl text-center mx-auto items-center justify-center font-semibold">
            <FontAwesomeIcon
                className=""
                size="lg"
                icon={faLocationDot}
                beatFade
              />{" "}
            </h2>
            <h4 className="font-bold text-center">
              4 Byfield Court Station Road,<br className="lg:hidden" /> West Horndon, Brentwood,<br className="lg:hidden" /> England,
              CM13 3TZ,<br /> United Kingdom
            </h4>
          </div>
        </div>

        <div className="group lg:col-span-2">
          <div className="rounded-lg border bg-slate-200 px-10 py-10 md:py-5 xs:py-5  shadow-2xl m-2">
            <h4 className="text-2xl mb-4 text-start font-bold text-black">
              Get In Touch
            </h4>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
