"use client";
import Image from "next/image";
import React from "react";
import Manila from "@/app/assets/images/manila.jpg";
import RoundTrip from "@/app/utils/json/RoundTrip.json";

export default function RoundTripCard() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-20">
      {RoundTrip.map((data, id) => {
        return (
          <div className="group border bg-white rounded-3xl" key={id}>
            <Image
              className="round-card-img rounded-3xl"
              alt="example"
              src={Manila}
              width={0}
              height={0}
              priority
            />
            <div className="p-3">
              <h4 className="text-lg text-end font-extrabold Poppins">
                {data.price}
              </h4>
              <h4 className="text-base Poppins font-bold">
                {data.from} to {data.to}
              </h4>
              <p className="text-xs Poppins text-zinc-500 mt-2">
                {data.tripType}
              </p>
              <p className="text-xs Poppins text-zinc-500">{data.duration}</p>
              <div className="flex Poppins mt-4 justify-end">
                <button className="bg-blue-950 p-2 rounded-lg text-sm text-white hover:bg-blue-800">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
