import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import type { Metadata } from "next";

import Banner from "@/app/assets/images/popular-destinations.webp";
import PopularDestinations from "../components/card/PopularDestinationsCard";
import destinationList from "@/app/utils/json/PopularDestination.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Popular Destinations in Philippines | Pinoy Travels",
  description: "Beloved Philippine destinations - a heartfelt return for you. A journey filled with nostalgia and wonder to reconnect with your roots! Book Now with Pinoy Travels!",
};

const page = () => {
  return (
    <main className={inter.className}>
      <Image
        className="lg:-mt-6"
        src={Banner}
        width={0}
        height={0}
        alt="Popular Destination"
        placeholder="blur"
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
        <div className="grid lg:grid-cols-4">
          {destinationList.map((id) => {
            return (
              <div
                className="group bg-transparent rounded-lg"
                key={id.id}
              >
                <PopularDestinations key={id.id} id={id.id} destination= {id.destination} image= {id.cardImage} url={id.url}/>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default page;
