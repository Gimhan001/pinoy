"use client";

import React from "react";
import Image from "next/image";
import PopularDestination from "@/app/utils/json/PopularDestination.json";
import imgUrl from "@/app/assets/images/1.png";
import Link from "next/link";
import { Button } from "antd";

export default function PopularDestinations(props: {
  id: number;
  destination: string;
  image: string;
  url: string;
}) {
  return (
    <div className="group bg-transparent p-3 lg:p-6 rounded-3xl" key={props.id}>
      <picture>
        <img
          className="mx-auto rounded-3xl mb-3 hover:shadow-2xl"
          src={props.image}
          alt="Popular Destitinations"
        />
      </picture>

      <h1 className="text-3xl font-extrabold text-center -mt-52 mb-36  text-white">
        {props.destination}
      </h1>
      <div className="grid justify-items-center mb-2">
        <Link key={props.id} href={`/popular-destinations/${props.url}`}>
          <Button type="primary" style={{ fontFamily: "inter" }}>
            Read Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
