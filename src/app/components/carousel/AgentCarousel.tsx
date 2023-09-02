'use client'

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AgentData from '@/app/utils/json/AgentData.json';
import AgentCard from "../card/AgentCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const AgentsCarousel = () => {
  return (
    <div className="agent-carousel parent z-30">
      <Carousel
        className="z-30"
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {AgentData.map((data, id) => {
          return (
            <div className="slider" key={id}>
              <AgentCard name={data.name} contact={data.contact}/>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default AgentsCarousel;
