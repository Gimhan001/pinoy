import React from "react";

import { Button, Card } from "antd";
import Image from "next/image";
import dynamic from "next/dynamic";
import rhea from "@/app/assets/images/rhea.jpg";
import melissa from "@/app/assets/images/melissa.jpg";
import april from "@/app/assets/images/april.jpg";
import jovey from "@/app/assets/images/jovey.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

export default function AgentCard(props: {
  ids: number;
  contact: string;
  name: string;
  image: string;
  email: string;
  language: string;
}) {
  return (
    <div className="grid p-6">
      <div className="group border bg-white rounded-2xl p-4" key={props.ids}>
        <img
          className="round-card-img rounded-2xl"
          alt="Agents"
          src={props.image}
        />
        <div className="p-3">
          <h4 className="text-base text-center text-pink-700 font-extrabold mb-4">
            {props.name}
          </h4>
            <h6 className="text-xs text-center text-blue-800 font-medium mb-2">
              {props.language}
            </h6>
          <div className="flex mt-2 justify-center">
            <a href={`tel:${props.contact}`}>
              <button className="bg-blue-950 p-1 px-4 py-2 rounded-lg text-xs text-white hover:bg-blue-800">
                Call Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
