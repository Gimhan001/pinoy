import React from "react";
import Image from "next/image";
import PopularDestination from "@/app/utils/json/PopularDestination.json";
import imgurl from "@/app/assets/images/1.png";


export default function PopularDestinations() {
  return PopularDestination.map((data) => {
    return (
      <div className="group bg-transparent rounded-lg mx-auto p-2" key={data.id}>
        <Image
          className="mx-auto rounded-3xl mb-3 hover:shadow-2xl"
          src= {imgurl}
          alt="Popular Destitinations"
          width={0}
          height={0}
        />
        <h1 className="text-2xl font-extrabold text-center -mt-52 mb-36  text-white">{data.place}</h1>
        <div className="grid justify-items-center mb-2">
          <button className="text-xs p-4 rounded-lg bg-blue-500">Read Now</button>
        </div>
      </div>
    );
  });
}
