import React from "react";
import Image from "next/image";
import Manila from "@/app/assets/images/manila.jpg";
import PopularDestination from "@/app/utils/json/PopularDestination.json";

export default function PopularDestinations() {
  return PopularDestination.map((data) => {
    return (
      <div className="group border bg-transparent rounded-lg mx-auto hover:shadow-2xl p-2" key={data.id}>
        <Image
          className="mx-auto rounded-lg mb-3"
          src={Manila}
          alt="Popular Destitinations"
          width={0}
          height={0}
        />
        <h5 className="text-lg font-extrabold text-center">{data.place}</h5>
        <p className="text-xs" key={data.briefDes}>
          {data.briefDes}{" "}
        </p>
        <div className="grid justify-items-end mb-2">
          <button className="text-xs">Read More...</button>
        </div>
      </div>
    );
  });
}
