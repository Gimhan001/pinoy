import React from "react";

import { Button, Card } from "antd";
import Image from "next/image";
import Profile from '@/app/assets/images/profile.jpg'

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
    <Card
      className="agent-card m-4 rounded-2xl"
      cover={
        <Image
          width={0}
          height={0}
          className="rounded-2xl"
          alt="example"
          src={Profile}
        />
      }
    >
      <p className="text-base font-bold Poppins mb-2">{props.name}</p>
      <div className="grid justify-items-end">
        <Button className="Poppins" href={`tel:${props.contact}`}>
          Call Now
        </Button>
      </div>
      {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
    </Card>
  );
}
