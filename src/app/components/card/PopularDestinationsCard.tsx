'use client'

import React from "react";
import Image from "next/image";
import PopularDestination from "@/app/utils/json/PopularDestination.json";
import imgUrl from "@/app/assets/images/1.png";
import Link from "next/link";

export default function PopularDestinations() {
  return PopularDestination.map((data) => {
    // const imgUrl = `/${data.image}`;
    return (
      <div className="group bg-transparent rounded-lg p-6" key={data.id}>
        <Image
          className="mx-auto rounded-3xl mb-3 hover:shadow-2xl"
          src= {imgUrl}
          alt="Popular Destitinations"
          width={0}
          height={0}
        />
        <h1 className="text-2xl font-extrabold text-center -mt-52 mb-36  text-white">{data.destination}</h1>
        <div className="grid justify-items-center mb-2">
          <Link key={data.id} href={`/popular-destinations/${data.id}`}>
            <button className="text-xs p-3 px-4 rounded-lg bg-blue-500 text-white">Read Now</button>
          </Link>
        </div>
      </div>
    );
  });
}
