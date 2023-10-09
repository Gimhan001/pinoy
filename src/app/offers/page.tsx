import Image from "next/image";
import React from "react";
import Banner from "@/app/assets/images/offers.webp";
import type { Metadata } from "next";
import OffersCard from "../components/card/OffersCard";
import { Inter } from "next/font/google";
import OffersCarousel from "../components/carousel/OffersCarousel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Offers | Pinoy",
  description: "Travel anywahere It is All About Travel ",
};

export default function Offers() {
  return (
    <main className={inter.className}>
      <Image
        className="lg:-mt-6"
        src={Banner}
        width={0}
        height={0}
        alt="Offers"
        priority
      />
      <div className="container mx-auto w-full text-center mt-4">
        <h1 className="text-3xl font-bold">Our Offers</h1>
        <p className="text-center mt-4 px-4">
          Our exclusive offers that cater to your every need. From Philippines
          cheapest flights to special promotions, our offers are designed to
          enhance your experience and save you money. Explore the possibilities
          and book now our exciting deals today.
        </p>
      </div>
      <div className="px-4 mt-8 sm:grid hidden">
        <div className="bg-slate-100 p-10 rounded-3xl">
          <div className="container mx-auto">
            <OffersCard />
          </div>
        </div>
      </div>

      <div className="px-4 mt-8 lg:hidden">
        <div className="bg-slate-100 p-10 rounded-3xl">
          <div className="container mx-auto">
            <OffersCarousel />
          </div>
        </div>
      </div>
    </main>
  );
}
