"use client";
import {
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
  TwitterOutlined,
  PlusOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        trigger="click"
        type="primary"
        style={{ left: 24 }}
        icon={<PlusOutlined />}
      >
        {/* <FloatButton icon={<TwitterOutlined />} /> */}
        <FloatButton
          href="https://www.facebook.com/pinoytravels.uk/"
          icon={<FacebookFilled className="" />}
        />
        <FloatButton icon={<InstagramFilled />} />
        <FloatButton icon={<YoutubeFilled />} />
      </FloatButton.Group>
    </>
  );
}
