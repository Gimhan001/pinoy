
import React from "react";
import Image from "next/image";
import Banner from "@/app/assets/images/faq.webp";
import Faq from "../components/collapse/faq";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Pinoy Travels",
  description: "Get answers in a flash! Check out our FAQ for quick info and travel tips. Your questions, our solutions.",
};


export default function FAQ() {

  return (
    <main>
    <Image className="lg:-mt-6" src={Banner} width={0} height={0} placeholder="blur" alt="About" priority />
    <div className="container mx-auto w-full mt-4">
        <h1 className="text-3xl font-bold text-center ">Common Travel FAQ</h1>
        <p className="text-start mt-4 px-4 mb-8">
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
        <Faq />
    </div>
    </main>
  );
}
