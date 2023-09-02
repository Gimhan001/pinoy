import Image from "next/image";
import React from "react";
import Banner from "@/app/assets/images/about.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Pinoy",
  description: "Travel anywahere It is All About Travel ",
};

export default function About() {
  return (
    <main className="">
      <Image src={Banner} alt="About" priority />
      <div className="container mx-auto w-full text-center mt-4 font-primary">
        <h1 className="text-3xl font-black">About Us</h1>
        <p className="text-start mt-4 px-4">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>
      <div className="container grid lg:grid-cols-3 mx-auto mt-4">
        <div className="mx-auto flex items-center justify-center p-4">
          <div className="h-36 w-full hover:shadow-xl transition duration-0  hover:duration-150 rounded-md bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-800  p-1">
            <div className="h-full w-full rounded-md  items-center justify-center   bg-gray-950 back p-4">
            <h1 className="text-xl text-white text-capitalize pb-3">
                Flight Booking
              </h1>
              <p className="text-white">
              We provide flight bookings to passengers from the UK connecting to the world.
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
                We provide tailor made visa consultation which match the needs of
                the customer.
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
          <div className="h-36 w-full rounded-md bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-800 p-1">
            <div className="h-full w-full rounded-md max-w-sm items-center justify-center bg-gray-950 back p-4">
            <h1 className="text-xl text-white text-capitalize pb-3">
                Travel Insurance
              </h1>
              <p className="text-white">
              Travel insurances to cover your holiday from any financial risks.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex items-center justify-center p-4">
          <div className="h-36 w-full rounded-md bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-800  p-1">
            <div className="h-full w-full rounded-md max-w-sm items-center justify-center bg-gray-950 back p-4">
            <h1 className="text-xl text-white text-capitalize pb-3">
                Travel Advice
              </h1>
              <p className="text-white">
              We provide value added travel advice to passengers who are looking to travel..
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
              We provide cruise bookings for passengers who are looking go on a cruise holiday.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
