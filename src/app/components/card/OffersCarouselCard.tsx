"use client";
import React from "react";

import { OffersModal } from "../modals/OffersModal";

export default function OffersCard(props: {
  id: number;
  title: string;
  departureAirPort: string;
  destinationAirPort: string;
  from: string;
  to: string;
  tripType: string;
  departureDate: string;
  price: string;
  person: number;
  cabinClass: string;
  returnsDate: string;
  cardImage: string;
}) {
  return (
    <div className="grid p-3">
      <div className="grid rounded-3xl bg-white" key={props.id}>
        <div className="group">
          <picture>
            <img
              className="lazyloaded offer-card-img rounded-3xl"
              alt="offers"
              src={props.cardImage}
              loading="lazy"
              width={0}
              height={0}
            />
          </picture>

          <div className="p-3">
            <h4 className="text-base font-bold text-gray-500">
              {props.from} to {props.to}
            </h4>
            <p className="text-xs text-zinc-500 mt-2">
              {props.tripType} | {props.departureDate} - {props.returnsDate}
            </p>
            <h4 className="text-lg font-extrabold">{props.price}</h4>
            <div className="flex justify-end">
              <OffersModal
                id={props.id}
                title={props.title}
                tripType={props.tripType}
                from={props.from}
                to={props.to}
                dAirport={props.departureAirPort}
                deAirport={props.destinationAirPort}
                departure={props.departureDate}
                returns={props.returnsDate}
                person={props.person}
                cabinClass={props.cabinClass}
                price={props.price}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
