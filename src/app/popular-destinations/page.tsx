"use client";

import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Banner from "@/app/assets/images/about.jpg";
import Fram1 from "@/app/assets/images/Frame1.png";
import PopularDestinations from "../components/card/PopularDestinationsCard";
import destinationList from "@/app/utils/json/PopularDestination.json";
import Link from "next/link";
import imgUrl from "@/app/assets/images/1.png";

const inter = Inter({ subsets: ["latin"] });

const page = () => {
  return (
    <main className={inter.className}>
      <Image
        className="-mt-6"
        src={Banner}
        width={0}
        height={0}
        alt="About"
        priority
      />
      <div className="container mx-auto text-center mt-4">
        <h1 className="text-3xl font-bold">Popular Destinations</h1>
        <p className="text-center mt-4 px-4">
          Established in 2019 and situated in West Horndon, Brentwood, Pinoy
          Travels, a proud member of the Aero Travels Group. We specialize in
          flights, hotels, car rentals, travel insurance, holiday packages, and
          last-minute deals. Aero Travels offers unbeatable airfares for flights
          to Philippines, ensuring a seamless travel experience for our valued
          customers.
        </p>
      </div>

      <div className="container mx-auto mt-4">
        <div className="grid lg:grid-cols-3">
          {destinationList.map((data) => {
            return (
              <div
                className="group bg-transparent rounded-lg p-6"
                key={data.id}
              >
                <Image
                  className="mx-auto rounded-3xl mb-3 hover:shadow-2xl"
                  src={imgUrl}
                  alt="Popular Destitinations"
                  width={0}
                  height={0}
                />
                <h1 className="text-2xl font-extrabold text-center -mt-52 mb-36  text-white">
                  {data.destination}
                </h1>
                <div className="grid justify-items-center mb-2">
                  <Link key={data.id} href={`/popular-destinations/${data.id}`}>
                    <button className="text-xs p-3 px-4 rounded-lg bg-blue-500 text-white">
                      Read Now
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default page;
