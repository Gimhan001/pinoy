"use client";
import Image from "next/image";
import React from "react";
import Manila from "@/app/assets/images/manila.jpg";
import { Button, Card } from "antd";
import RoundTrip from "@/app/utils/json/RoundTrip.json";

export default function RoundTripCard() {
  return (
    <div className="grid lg:grid-cols-4 gap-5">
      {RoundTrip.map((data, id) => {
        return (
          <div className="group">
            <Card
              key={id}
              className="rounded-b-2xl shadow-xl"
              cover={<Image alt="example" src={Manila} />}
            >
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
            </Card>
          </div>
        );
      })}
    </div>
  );
}
