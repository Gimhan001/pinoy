"use client";
import React from "react";
import { FloatButton } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
  PlusOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";

export default function SocialMedia() {
  return (
    <>
      <FloatButton.Group>
        <FloatButton.BackTop
          type="primary"
          icon={<ArrowUpOutlined />}
          style={{ right: 24 }}
        />
      </FloatButton.Group>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ left: 24 }}
        icon={<PlusOutlined />}
      >
        {/* <FloatButton icon={<TwitterOutlined />} /> */}
        <FloatButton
          href="https://www.facebook.com/pinoytravels.uk/"
          target="_blank"
          icon={<FacebookFilled className="" />}
        />
        <FloatButton href="https://www.instagram.com/pinoy.travels.uk/" target="_blank" icon={<InstagramFilled />} />
        <FloatButton href="https://www.youtube.com/channel/UCEVVAsK2H6g4q_WqMjphf4w" target="_blank" icon={<YoutubeFilled />} />
      </FloatButton.Group>
    </>
  );
}
