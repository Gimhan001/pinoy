import Image from "next/image";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import AboutBanner from "@/app/assets/images/about-new.webp";

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
          Established in 2019 and nestled in West Horndon, Brentwood, Pinoy
          Travels proudly stands as a valued member of the esteemed Aero Travels
          Group. Our roots in the travel industry run deep, specializing in
          flights, hotels, car rentals, travel insurance, holiday packages, and
          last-minute deals. Aero Travels, the driving force behind our success,
          offers unbeatable airfares for flights to the Philippines, ensuring a
          seamless travel experience for our cherished customers.
        </p>
        <p className="text-start mt-4 px-4">
          At Pinoy Travels, we understand that returning to your homeland is not
          just a trip, it's a journey of the heart. As a part of the Aero
          Travels family, let Pinoy Travels be your guide as you return to the
          place where your heart truly belongs.
        </p>

        <h4 className="text-xl font-bold text-start mt-10 px-4 text-black">
          Why Choose Pinoy Travels?
        </h4>
        <p className="text-start mt-3 px-4">
          Our passionate Tagalog and Bisaya-speaking travel agents bring their
          deep travel knowledge to the forefront, providing exceptional service
          that goes beyond the ordinary. We are committed to offering travel
          services at the most competitive airfares to the Philippines,
          consistently surpassing standard industry prices.
        </p>

        <h4 className="text-xl font-bold text-start mt-6 px-4 text-black">
          What we provide?
        </h4>
        <p className="text-start mt-3 px-4">
          At our core, we are dedicated to offering unbeatable value across a
          spectrum of travel services:
          <br />
          • Flights: <br />
          Experience affordability and convenience with our unbeatable airfares.
          <br />
          • Holiday Booking:
          <br />
          Craft unforgettable memories with our holiday packages tailored to
          your desires.
          <br />
          • Visa Consultations:
          <br />
          Navigate the complexities of travel documentation with our expert
          guidance.
          <br />
          • Travel Advice: <br />
          Trust our dedicated team of Filipino travel experts with market
          knowledge to bring you deals spanning a wide range of destinations in
          the Philippines.
          <br />
        </p>
        <p className="text-start px-4">Kausapin Mo Kami!</p>

        <h4 className="text-xl font-bold text-start mt-6 px-4 text-black">
          What Makes Us Unique?
        </h4>
        <p className="text-start mt-3 px-4">
          We set ourselves apart with extraordinary benefits, including free
          cancellations, low deposit bookings, and airfares to the Philippines
          that redefine affordability. Join us on a journey where every detail
          is crafted with care, and every traveler is welcomed home with warmth.
          <br />
          <br />
          Thank you for choosing Pinoy Travels, a proud member of the Aero
          Travels Group.
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
