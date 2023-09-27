'use client'

import React from "react";
import Image from "next/image";
import PopularDestination from "@/app/utils/json/PopularDestination.json";
import imgUrl from "@/app/assets/images/1.png";
import Link from "next/link";

export default function PopularDestinations(props: {id: number; destination: string; image: string;}) {
    return (
      <div className="group bg-transparent rounded-lg p-6" key={props.id}>
        <img
          className="mx-auto rounded-3xl mb-3 hover:shadow-2xl"
          src= {props.image}
          alt="Popular Destitinations"
        />
        <h1 className="text-2xl font-extrabold text-center -mt-52 mb-36  text-white">{props.destination}</h1>
        <div className="grid justify-items-center mb-2">
          <Link key={props.id} href={`/popular-destinations/${props.id}`}>
            <button className="text-xs p-3 px-4 rounded-lg bg-blue-950 hover:bg-blue-800 text-white">Read Now</button>
          </Link>
        </div>
      </div>
    );
}
