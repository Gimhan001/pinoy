"use client";
import Image from "next/image";
import React, { useState } from "react";
import Manila from "@/app/assets/images/manila.jpg";
import { Button, Card } from "antd";
import Offers from "@/app/utils/json/Offers.json";
import { OffersModal } from "../modals/OffersModal";

export default function OffersCard() {

  return (
    <div className="grid lg:grid-cols-3 p-4 md:grid-cols-2 gap-10">
      {Offers.map((data, id) => {
        return (
          <div
            className="grid gap-5 p-4 border border-gray-500 rounded-lg bg-white"
            key={data.id}
          >
            <div className="group">
              <Image
                className="offer-card-img rounded-2xl"
                alt="offers"
                src={Manila}
                width={0}
                height={0}
              />
              <div className="p-3">
                <h4 className="text-base font-bold text-gray-500">
                  {data.from} to {data.to}
                </h4>
                <p className="text-xs text-zinc-500 mt-2">
                  {data.tripType} | {data.departure} - {data.returns}
                </p>
                {/* <p className="text-xs text-zinc-500">{data.duration}</p> */}
                <h4 className="text-lg font-extrabold">{data.price}</h4>
                <div className="flex mt-4 justify-end">
                  <OffersModal 
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
          </div>
        );
      })}
    </div>
  );
}
