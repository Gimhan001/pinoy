import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import thankYou from "@/app/assets/images/thankYou.webp";
import Script from "next/script";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Feed Back | Pinoy",
  description: "Travel anywahere It is All About Travel ",
};

const inter = Inter({ subsets: ["latin"] });

export default function FeedBack() {
  return (
    <>
      <Head>
        <script>
          {`
            gtag('event', 'conversion',{" "}
          {"send_to": "AW-11358860077/RQCSCILlxu8YEK3mqagq"});
            `}
        </script>

        <script src="https://www.googletagmanager.com/gtag/js?id=AW-11358860077" />
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11358860077');
        `}
        </script>
      </Head>
      <main className={inter.className}>
        <Image src={thankYou} alt="Thank you" />
        <div className="container mx-auto p-4 grid justify-items-center border rounded-xl shadow-2xl ">
          <div className="group p-8  px-8">
            <h2 className="text-center text-3xl font-bold uppercase">
              Thank You...!!!
            </h2>
            <p className="text-center text-base mt-8">
              We will contact you soon..
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
