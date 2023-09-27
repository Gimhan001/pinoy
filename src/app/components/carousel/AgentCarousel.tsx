"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AgentData from "@/app/utils/json/AgentData.json";
import AgentCard from "../card/AgentCard";


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
    arrow: true,
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
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {AgentData.map((data, id) => {
          return (
            <div key={id}>
              <AgentCard ids={data.id} name={data.name} contact={data.contact} image={data.imageUrl} email={data.email} language={data.language} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
