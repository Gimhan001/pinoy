import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import thankYou from "@/app/assets/images/thankYou.webp";

export const metadata: Metadata = {
  title: "Feed Back | Pinoy",
  description: "Travel anywahere It is All About Travel ",
};

const inter = Inter({ subsets: ["latin"] });

export default function FeedBack() {
  return (
    <main className={inter.className}>
      <Image src={thankYou} alt="Thank you"/>
      <div className="container mx-auto p-4 grid justify-items-center border rounded-xl shadow-2xl ">
        <div className="group p-8  px-8">
          <h2 className="text-center text-3xl font-bold uppercase">Thank You...!!!</h2>
          <p className="text-center text-base mt-8">We will contact you soon..</p>
        </div>
      </div>
    </main>
  );
}
