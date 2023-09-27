"use client";
import Image from "next/image";
import React from "react";
import Manila from "@/app/assets/images/manila.jpg";
import RoundTrip from "@/app/utils/json/RoundTrip.json";
import { RoundTripModal } from "../modals/RoundTripModal";

export default function RoundTripCard() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-20">
      {RoundTrip.map((data, id) => {
        return (
          <div className="group sm:grid hidden border bg-white rounded-3xl" key={id}>
            <Image
              className="round-card-img rounded-3xl"
              alt="example"
              src={Manila}
              width={0}
              height={0}
              priority
            />
            <div className="p-3">
              <h4 className="text-lg text-amber-500 text-end font-extrabold">
                {data.price}
              </h4>
              <h4 className="text-base font-bold">
                {data.from} to {data.to}
              </h4>
              <p className="text-xs text-zinc-500 mt-2">
                {data.tripType}
              </p>
              <p className="text-xs  text-zinc-500">{data.departure} - {data.returns}</p>
              <div className="flex mt-4 justify-end">
              <RoundTripModal 
                    id={data.id}
                    tripType={data.tripType}
                    from={data.from}
                    to={data.to}
                    departure={data.departure}
                    returns={data.returns}
                    person={data.person}
                    cabinClass={data.cabinClass}
                    price={data.price}
                  />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
