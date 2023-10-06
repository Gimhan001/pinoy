"use client";
import Image from "next/image";
import React from "react";
import Manila from "@/app/assets/images/manila.jpg";
import { Button, Card } from "antd";
import Offers from "@/app/utils/json/Offers.json";
import { OffersModal } from "../modals/OffersModal";

export default function OffersCard(props: {
  id: number;
  from: string;
  to: string;
  tripType: string;
  departure: string;
  price: string;
  person: number;
  cabinClass: string;
  returns: string;
  cardImage: string;
}) {
  return (
    <div className="grid p-3">
      <div className="grid rounded-3xl bg-white" key={props.id}>
        <div className="group">
          <picture>
            <img
              className="offer-card-img rounded-3xl"
              alt="offers"
              src={props.cardImage}
            />
          </picture>

          <div className="p-3">
            <h4 className="text-base font-bold text-gray-500">
              {props.from} to {props.to}
            </h4>
            <p className="text-xs text-zinc-500 mt-2">
              {props.tripType} | {props.departure} - {props.returns}
            </p>
            <h4 className="text-lg font-extrabold">{props.price}</h4>
            <div className="flex justify-end">
              <OffersModal
                id={props.id}
                tripType={props.tripType}
                from={props.from}
                to={props.to}
                departure={props.departure}
                returns={props.returns}
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
