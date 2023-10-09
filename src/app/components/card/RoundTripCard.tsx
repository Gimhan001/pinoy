"use client";
import Image from "next/image";
import React from "react";
import Manila from "@/app/assets/images/manila.jpg";
import RoundTrip from "@/app/utils/json/RoundTrip.json";
import { RoundTripModal } from "../modals/RoundTripModal";

export default function RoundTripCard() {
  return (
    <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 lg:gap-20 ">
      {RoundTrip.map((data, id) => {
        return (
          <div className="group border bg-white rounded-3xl" key={id}>
            <picture>
              <img
                className="round-card-img rounded-3xl sm:grid hidden"
                alt="Round Trip Img"
                src={data.image}
                width={0}
                height={0}
              />
            </picture>

            <div className="px-4 py-3">
              <div className="grid grid-cols-2">
                <div className="group">
                  <h4 className="text-base font-bold">
                    {data.from} to {data.to}
                  </h4>
                  <p className="text-xs text-zinc-500 mt-2">{data.tripType}</p>
                </div>
                <div className="group">
                  <h4 className="text-xl text-amber-500 text-end font-extrabold">
                    {data.price}
                  </h4>
                </div>
              </div>
              <p className="text-xs text-zinc-500">
                {data.departureDate} | {data.returnsDate}
              </p>
              <div className="flex mt-4 justify-end">
                <RoundTripModal
                  id={data.id}
                  tripType={data.tripType}
                  from={data.from}
                  to={data.to}
                  departureDate={data.departureDate}
                  returnsDate={data.returnsDate}
                  person={data.person}
                  cabinClass={data.cabinClass}
                  price={data.price}
                  title={data.title}
                  dAirport={data.departureAirPort}
                  deAirport={data.destinationAirPort}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
