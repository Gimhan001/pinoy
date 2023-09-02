"use client";
import {
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
  TwitterOutlined,
  PlusOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import React from "react";
import { FloatButton } from "antd";
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
        trigger="hover"
        type="primary"
        style={{ left: 24 }}
        icon={<PlusOutlined />}
      >
        <FloatButton icon={<TwitterOutlined />} />
        <FloatButton
          href="https://www.facebook.com"
          icon={<FacebookFilled className="" />}
        />
        <FloatButton icon={<InstagramFilled />} />
        <FloatButton icon={<YoutubeFilled />} />
      </FloatButton.Group>
    </>
  );
}
