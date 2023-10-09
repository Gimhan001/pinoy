"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AgentData from "@/app/utils/json/AgentData.json";
import AgentCard from "../card/AgentCard";
import OffersCard from "../card/OffersCarouselCard";
import OffersData from "@/app/utils/json/Offers.json";
import { OffersModal } from "../modals/OffersModal";

export default function SimpleSlider() {
  var settings = {
    className: "center",
    centerMode: true,
    // dots:true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "30px",
    speed: 1000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {OffersData.map((data, id) => {
          return (
            <div className="grid p-3" key={data.id}>
              <div className="grid rounded-3xl bg-white">
                <div className="group">
                  <picture>
                    <img
                      className="offer-card-img rounded-3xl"
                      alt="offers"
                      src={data.image}
                      width={0}
                      height={0}
                    />
                  </picture>

                  <div className="p-3">
                    <h4 className="text-base font-bold text-gray-500">
                      {data.from} to {data.to}
                    </h4>
                    <p className="text-xs text-zinc-500 mt-2">
                      {data.tripType} | {data.departureDate} -{" "}
                      {data.returnsDate}
                    </p>
                    <h4 className="text-lg font-extrabold">{data.price}</h4>
                    <div className="flex justify-end">
                      <OffersModal
                        id={data.id}
                        title={data.title}
                        tripType={data.tripType}
                        from={data.from}
                        to={data.to}
                        dAirport={data.departureAirPort}
                        deAirport={data.destinationAirPort}
                        departure={data.departureDate}
                        returns={data.returnsDate}
                        person={data.person}
                        cabinClass={data.cabinClass}
                        price={data.price}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
