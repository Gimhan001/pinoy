import Image from "next/image";
import React from "react";
import Banner from "@/app/assets/images/about.jpg";

export default function About() {
  return (
    <main>
      <Image src={Banner} alt="About" />
      <div className="container mx-auto w-full text-center mt-4 font-primary">
        <h1 className="">About Us</h1>
        <p className="text-start mt-4 px-4">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>
    </main>
  );
}
