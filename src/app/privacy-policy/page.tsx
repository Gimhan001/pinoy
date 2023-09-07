import React from "react";
import Image from "next/image";
import Banner from "@/app/assets/images/about.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pinoy",
  description: "Travel anywahere It is All About Travel ",
};

export default function PrivacyPolicy() {
  return (
    <main className="">
      <Image src={Banner} alt="privacy-policy" priority />
      <div className="container mx-auto font-primary">
        <div className="w-full text-center mt-4">
          <h1 className="text-3xl font-black capitalize">Privacy policy</h1>
          <p className="text-start mt-4 px-4">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry&apos;s standard dummy text ever since the
          1500s&lsquo; when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries&lsquo;
          but also the leap into electronic typesetting remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages&lsquo; and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </main>
  );
}
