import React from "react";

import { Button, Card } from "antd";
import Image from "next/image";
import rhea from "@/app/assets/images/rhea.jpg";
import melissa from "@/app/assets/images/melissa.jpg";
import april from "@/app/assets/images/april.jpg";
import jovey from "@/app/assets/images/jovey.jpg";

export default function AgentCard(props: {
  contact: string;
  name: string;
    image: string;
    email: string;
    language: string;
})

{

  return (
    <div className="grid p-6">
      <div className="group border bg-white rounded-2xl p-4">
        <Image
          className="round-card-img rounded-2xl"
          alt="Agents"
          src={rhea}
          width={0}
          height={0}
        />
        <div className="p-3">
          <h4 className="text-base text-center text-pink-700 font-extrabold mb-4">
            {props.name}
          </h4>
          <h6 className="text-xs text-center text-slate-400 font-medium mb-2">
              {props.language}
          </h6>
          <h6 className="text-xs text-center text-slate-400 font-medium mb-4">
              {props.email}
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
