"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AgentData from "@/app/utils/json/AgentData.json";
import AgentCard from "../card/AgentCard";
import OffersCard from "../card/OffersCarouselCard";
import OffersData from "@/app/utils/json/Offers.json";

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
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {OffersData.map((data, id) => {
          return (
            <div key={id}>
              <OffersCard id= {data.id} from={data.from} to={data.to} tripType={data.tripType} person={data.person} departure={data.departure} cabinClass={data.cabinClass} returns={data.returns} price={data.price}/>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}