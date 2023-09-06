"use client";
import Image from "next/image";
import React from "react";
import Manila from "@/app/assets/images/manila.jpg";
import { Button, Card } from "antd";
import Offers from "@/app/utils/json/Offers.json";

{
  /* <h4 className="text-lg text-end font-extrabold Poppins">{data.price}</h4>
                        <h4 className="text-base Poppins font-bold">{data.from} to {data.to}</h4>
                        <p className="text-xs Poppins text-zinc-500 mt-2">{data.tripType}</p>
                        <p className="text-xs Poppins text-zinc-500">{data.duration}</p>
                        <div className="flex Poppins mt-4 justify-end">
                            <Button type="primary">Book Now</Button>
                        </div> */
}

export default function OffersCard() {
  return (
    <div className="grid lg:grid-cols-4 gap-5">
      {Offers.map((data, id) => {
        return (
          <div className="grid gap-5 border rounded-lg bg-slate-100" key={id}>
            <div className="group">
              <Image className="offer-card-img rounded-lg rounded-br-2xl rounded-bl-2xl" alt="offers" src={Manila} width={0} height={0} />
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
                <Button type="primary">Book Now</Button>
              </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
