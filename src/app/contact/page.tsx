import React from "react";
import Image from "next/image";
import Banner from "@/app/assets/images/about.jpg";
import ContactForm  from "@/app/components/forms/ContactForm";

export default function Contact() {
  return (
    <main className="font-primary">
      <Image src={Banner} alt="Contact" />
      <div className="container mx-auto w-full items-center text-center mt-4 font-primary">
        <h1 className="">Contact Us</h1>
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
      <div className="container">
        <ContactForm />
      </div>
    </main>
  );
}
