import React from "react";

import { Button, Card } from "antd";
import Image from "next/image";
import Profile from "@/app/assets/images/profile.jpg";

export default function AgentCard(props: {
  contact:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  name:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
}) {
  return (
    <div className="grid p-6">
      <div className="group border bg-slate-100 rounded-lg">
        <Image
          className="round-card-img rounded-lg rounded-br-3xl rounded-bl-3xl"
          alt="Agents"
          src={Profile}
          width={0}
          height={0}
          priority
        />
        <div className="p-3">
          <h4 className="text-lg text-center text-pink-700 font-extrabold">
            {props.name}
          </h4>
          <div className="flex mt-4 justify-end">
            <a href={`tel:${props.contact}`}>
              <button className="bg-blue-950 p-2 rounded-lg text-sm text-white hover:bg-blue-800">
                Call Now
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
    </div>
  );
}
