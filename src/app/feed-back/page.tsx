import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Feed Back | Pinoy",
  description: "Travel anywahere It is All About Travel ",
};

const inter = Inter({ subsets: ["latin"] });

export default function FeedBack() {
  return (
    <main className={inter.className}>
      <div className="container mx-auto p-4 grid justify-items-center ">
        <div className="group border p-8 rounded-xl px-8">
          <h4 className="text-center text-2xl font-bold">Thank You...</h4>
          <p className="text-center text-base">We will contact you soon..</p>
        </div>
      </div>
    </main>
  );
}
