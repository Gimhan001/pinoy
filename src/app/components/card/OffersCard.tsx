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
              <img
                className="offer-card-img rounded-2xl z-40"
                alt="offers"
                src={data.image}
              />
              <div className="p-3">
                <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
                <div className="group bg-blue-800 p-4 rounded-lg">
                    <h2 className="text-2xl text-center font-bold text-white uppercase">
                      {data.offer} Off
                    </h2>
                  </div>
                  <div className="group lg:col-span-2">
                    <h4 className="text-base font-bold text-black text-start">
                      {data.from} to {data.to}
                    </h4>
                    <p className="text-xs text-zinc-500 text-start">
                      {data.tripType}
                    </p>
                    <p className="text-xs text-zinc-500 text-start">{data.departure} | {data.returns}</p>
                    <h4 className="text-lg font-extrabold text-start text-amber-500">
                      {data.price}
                    </h4>
                  </div>
                </div>

                <div className="flex justify-end lg:-mt-3 lg:-mb-3">
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
