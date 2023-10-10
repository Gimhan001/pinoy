import Image from "next/image";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import AboutBanner from "@/app/assets/images/about.webp";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About | Pinoy",
  description: "Travel anywahere It is All About Travel ",
};

export default function About() {
  return (
    <main className={inter.className}>
      <Image
        className="lg:-mt-6"
        src={AboutBanner}
        width={0}
        height={0}
        alt="About"
        placeholder="blur"
        priority
      />
      <div className="container mx-auto w-full text-center mt-4">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="text-center mt-4 px-4">
          Established in 2019 and situated in West Horndon, Brentwood, Pinoy
          Travels, a proud member of the Aero Travels Group. We specialize in
          flights, hotels, car rentals, travel insurance, holiday packages, and
          last-minute deals. Aero Travels offers unbeatable airfares for flights
          to Philippines, ensuring a seamless travel experience for our valued
          customers. At Pinoy Travels, we understand that returning to
          your homeland is not just a trip. let Pinoy Travels be your guide as
          you return to the place where your heart truly belongs
        </p>

        <h4 className="text-xl font-bold text-start mt-10 px-4 text-black">
          Why Choose Pinoy Travels?
        </h4>
        <p className="text-start mt-3 px-4">
          Our passionate Tagalog and Bisaya-speaking travel agents bring their
          deep travel knowledge to provide exceptional service. We continuously
          strive to offer travel services at the cheapest airfares to
          Philippines, which are lower than standard industry prices.
        </p>

        <h4 className="text-xl font-bold text-start mt-6 px-4 text-black">
          What we provide?
        </h4>
        <p className="text-start mt-3 px-4">
          At our core, we&apos;re committed to offering unbeatable value for
          flights, holiday booking, visa consultation, visa consultations, and
          Travel advice. Our dedicated team of filipino travel experts with a
          knowledge of the market to bring you deals that encompass a wide range
          of destinations in Philippines from cheapest to convenience.
        </p>
        <p className="text-start px-4">Kausapin Mo Kami!</p>

        <h4 className="text-xl font-bold text-start mt-6 px-4 text-black">
          What Makes Us Unique?
        </h4>
        <p className="text-start mt-3 px-4">
          We set ourselves apart with extraordinary benefits like free
          cancellations, low deposit bookings, and airfares to the Philippines
          that redefine affordability.
        </p>
      </div>

      {/* <div className="container grid lg:grid-cols-3 mx-auto mt-4">
        <div className="mx-auto flex items-center justify-center p-4">
          <div className="h-36 w-full hover:shadow-xl transition duration-0  hover:duration-150 rounded-md bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-800  p-1">
            <div className="h-full w-full rounded-md  items-center justify-center   bg-gray-950 back p-4">
              <h1 className="text-xl text-white text-capitalize pb-3">
                Flight Booking
              </h1>
              <p className="text-white">
                We provide flight bookings to passengers from the UK connecting
                to the world.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex items-center justify-center p-4">
          <div className="h-36 w-full rounded-md bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-800  p-1">
            <div className="h-full w-full rounded-md items-center justify-center bg-gray-950 back p-4">
              <h1 className="text-xl text-white text-capitalize pb-3">
                Visa Consultation
              </h1>
              <p className="text-white">
                We provide tailor made visa consultation which match the needs
                of the customer.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex items-center justify-center p-4">
          <div className="h-36 w-full rounded-md bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-800 p-1">
            <div className="h-full w-full rounded-md max-w-sm items-center justify-center bg-gray-950 back p-4">
              <h1 className="text-xl text-white text-capitalize pb-3">
                Holiday booking
              </h1>
              <p className="text-white">
                We provide tailor made holiday bookings which match the needs of
                the customer.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex items-center justify-center p-4">
          <div className="h-36 w-full hover:shadow-xl transition duration-0  hover:duration-150 rounded-md bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-800  p-1">
            <div className="h-full w-full rounded-md  items-center justify-center   bg-gray-950 back p-4">
              <h1 className="text-xl text-white text-capitalize pb-3">
                Travel Insurance
              </h1>
              <p className="text-white">
                Travel insurances to cover dsdsoi your holiday from any
                financial risks.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex items-center justify-center p-4">
          <div className="h-36 w-full hover:shadow-xl transition duration-0  hover:duration-150 rounded-md bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-800  p-1">
            <div className="h-full w-full rounded-md  items-center justify-center   bg-gray-950 back p-4">
              <h1 className="text-xl text-white text-capitalize pb-3">
                Travel Advice
              </h1>
              <p className="text-white">
                We provide value added travel advice to passengers who are
                looking to travel.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex items-center justify-center p-4">
          <div className="h-36 w-full rounded-md bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-800  p-1">
            <div className="h-full w-full rounded-md max-w-sm items-center justify-center bg-gray-950 back p-4">
              <h1 className="text-xl text-white text-capitalize pb-3">
                Cruise Booking
              </h1>
              <p className="text-white">
                We provide cruise bookings for passengers who are looking go on
                a cruise holiday.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
