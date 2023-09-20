import React from "react";
import Image from "next/image";
import Banner from "@/app/assets/images/about.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Pinoy",
  description: "Travel anywahere It is All About Travel ",
};

export default function PrivacyPolicy() {
  return (
    <main className="">
      <Image className="-mt-6" src={Banner} width={0} height={0} alt="terms&conditions" priority />
      <div className="container mx-auto">
        <div className="w-full text-center mt-4">
          <h1 className="text-3xl font-bold capitalize">Terms and conditions</h1>
          <p className="text-start mt-4 px-4">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry&apos;s standard dummy text ever since the
          1500s&lsquo; when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
          </p>
        </div>
      </div>
    </main>
  );
}
