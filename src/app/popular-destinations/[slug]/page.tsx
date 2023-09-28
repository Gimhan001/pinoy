import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/app/assets/images/about.jpg";
import destinatinData from "@/app/utils/json/PopularDestination.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About | Pinoy",
  description: "Travel anywahere It is All About Travel ",
};

export default function Page({
  params,
}: {
  params: { slug: string; title: string };
}) {
  return (
    <>
      {destinatinData.map((id) => {
        if (id.id.toString() == params.slug) {
          return (
            <main className={inter.className} key={id.id}>
              <Image
                className="-mt-6"
                src={Banner}
                width={0}
                height={0}
                alt="About"
                priority
              />
              <div className="container mx-auto w-full text-center mt-4">
                <h1 className="text-3xl font-bold">{id.destination}</h1>
                <p className="text-center mt-4 px-4">
                  {id.description}
                </p>
              </div>
              <h1></h1>
            </main>
          );
        }
      })}
    </>
  );
}
