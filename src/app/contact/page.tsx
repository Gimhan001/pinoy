import React from "react";
import Image from "next/image";
import Banner from "@/app/assets/images/about.jpg";
import ContactForm from "@/app/components/forms/ContactForm";
import { Card } from "antd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Pinoy",
  description: "Travel anywahere It is All About Travel ",
};

export default function Contact() {
  return (
    <main className="font-primary">
      <Image src={Banner} alt="Contact" priority/>
      <div className="container mx-auto w-full text-center mt-4 font-primary">
        <h1 className="text-3xl font-black">Contact Us</h1>
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

      <div className="container lg:flex justify-center mx-auto items-center text-center lg:grid-cols-4 px-4 mt-8">
        <div className="group rounded-lg border lg:px-20 py-4 shadow-2xl m-2">
          <h2 className="mb-3 text-2xl text-center mx-auto items-center justify-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mx-auto"
            >
              <path
                fillRule="evenodd"
                d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-4.72 4.72a.75.75 0 11-1.06-1.06l4.72-4.72h-2.69a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>{" "}
          </h2>
          <a href="tel:+1234567890" className="" rel="noopener noreferrer">
            <h4 className="font-bold">+123 4567 890</h4>
          </a>
        </div>
        <div className="group rounded-lg border lg:px-20 py-4 shadow-2xl m-2">
          <h2 className="mb-3 text-2xl text-center mx-auto items-center justify-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mx-auto"
            >
              <path
                fillRule="evenodd"
                d="M5.478 5.559A1.5 1.5 0 016.912 4.5H9A.75.75 0 009 3H6.912a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H15a.75.75 0 000 1.5h2.088a1.5 1.5 0 011.434 1.059l2.213 7.191H17.89a3 3 0 00-2.684 1.658l-.256.513a1.5 1.5 0 01-1.342.829h-3.218a1.5 1.5 0 01-1.342-.83l-.256-.512a3 3 0 00-2.684-1.658H3.265l2.213-7.191z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 01.75.75v6.44l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.72 1.72V3a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>{" "}
          </h2>
          <a
            href="mailto:info@pinoy.co.uk"
            className=""
            rel="noopener noreferrer"
          >
            <h4 className="font-bold">info@pinoy.co.uk</h4>
          </a>
        </div>
        <div className="group rounded-lg border lg:px-16 py-4 shadow-2xl m-2">
          <h2 className="mb-3 text-2xl text-center mx-auto items-center justify-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mx-auto"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>{" "}
          </h2>
          <h4 className="font-bold">+123/ 21, Manila, Philippines</h4>
        </div>
      </div>
      <div className="container lg:flex sm:grid justify-center mx-auto items-center text-center lg:grid-cols-2 px-4 mt-8 mb-8">
      <div className="group rounded-lg border px-10 py-10 md:py-5 xs:py-5  shadow-2xl m-2">
        <h4 className="text-2xl mb-4 text-start font-bold">Get In Touch</h4>
        <ContactForm />
        </div>
      </div>
    </main>
  );
}
