"use client"

import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Banner from "@/app/assets/images/about.jpg";
import Fram1 from "@/app/assets/images/Frame1.png";
import destinationList from "@/app/utils/json/PopularDestination.json";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticPaths() {
  const ids = destinationList.map((data) => data.id);
  
  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

type ClassProps = {
  destinationData: {
    id: number;
    destination: string;
    description: string;
     };
}

  export default function Destination ({ destinationData }: ClassProps) {

  return (
    <main className={inter.className}>
      <Image className="-mt-6" src={Banner} width={0} height={0} alt="About" priority />
      <div className="container mx-auto w-full text-center mt-4">
        <h1 className="text-3xl font-bold">Cebu</h1>
        <p className="text-start mt-4 px-4">
          {/* {destinationData.description} */}
        </p>
      </div>

      {/* <div className="container mx-auto px-4 mt-8 bg-slate-100 p-10 rounded-3xl">
        <h4 className="text-2xl text-zinc-900 font-bold capitalize">
          Air Line and Flight Deals
        </h4>
        <div className="grid lg:grid-cols-2 p-4 gap-3">
          <div className="group border p-4 rounded-lg bg-white shadow-xl">
            <div className="lg:flex gap-2">
              <div className="lg:w-1/5">
                <Image
                  className="mx-auto"
                  src={Fram1}
                  alt="Pinoy"
                  width={50}
                  height={50}
                  priority
                />
                <p className="text-sm text-center">Emirates</p>
              </div>
              <div className="lg:w-2/5 text-center">
                <p className="text-lg font-bold capitalize">London to Cebu</p>
                <p>Economy</p>
              </div>

              <div className="lg:w-2/5 text-center">
                <p className="text-lg font-bold capitalize">$123</p>
                <p className="text-sm mb-1">Per Person</p>
                <button className="bg-blue-900 p-1 px-8 rounded-lg text-white">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 bg-slate-100 p-10 rounded-3xl">
        <h4 className="text-2xl text-zinc-900 font-bold capitalize">
          Flight Deals
        </h4>
        <div className="grid lg:grid-cols-3 p-4 gap-3">
          <div onClick={() => {}} className="group border p-4 rounded-lg bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 shadow-xl">
            <div className="flex gap-2">
              <div className="w-1/2">
                <p className="text-lg font-bold capitalize">London to Cebu</p>
                <p>Economy</p>
              </div>
              <div className="w-1/2 text-center">
                <p className="text-lg font-bold capitalize">$123</p>
                <p className="text-sm mb-1">Per Person</p>
              </div>
            </div>
          </div>
          <div className="group border p-4 rounded-lg bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 shadow-xl">
            <div className="flex gap-2">
              <div className="w-1/2">
                <p className="text-lg font-bold capitalize">London to Cebu</p>
                <p>Economy</p>
              </div>
              <div className="w-1/2 text-center">
                <p className="text-lg font-bold capitalize">$123</p>
                <p className="text-sm mb-1">Per Person</p>
              </div>
            </div>
          </div>
          <div className="group border p-4 rounded-lg bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 shadow-xl">
            <div className="flex gap-2">
              <div className="w-1/2">
                <p className="text-lg font-bold capitalize">London to Cebu</p>
                <p>Economy</p>
              </div>
              <div className="w-1/2 text-center">
                <p className="text-lg font-bold capitalize">$123</p>
                <p className="text-sm mb-1">Per Person</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
};
