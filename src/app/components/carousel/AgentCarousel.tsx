"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AgentData from "@/app/utils/json/AgentData.json";
import AgentCard from "../card/AgentCard";
import { Button } from "antd";

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
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {AgentData.map((data, id) => {
          return (
            <div className="grid p-6" key={data.id}>
              <div
                className="group border bg-white rounded-2xl p-4"
              >
                <picture>
                  <img
                    className="round-card-img rounded-2xl"
                    alt="Agents"
                    src={data.imageUrl}
                    width={0}
                    height={0}
                  />
                </picture>
                <div className="p-3">
                  <h4 className="text-base text-center text-pink-700 font-extrabold mb-4">
                    {data.name}
                  </h4>
                  <h6 className="text-xs text-center text-blue-800 font-medium mb-2">
                    {data.language}
                  </h6>
                  <div className="flex mt-2 justify-center">
                    <a href={`tel:${data.contact}`}>
                      <Button
                        type="primary"
                        size="small"
                        style={{ fontFamily: "inter" }}
                      >
                        Call Now
                      </Button>
                    </a>
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
