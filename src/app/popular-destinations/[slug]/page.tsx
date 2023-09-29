import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/app/assets/images/about.jpg";
import destinatinData from "@/app/utils/json/PopularDestination.json";
import airLines from "@/app/utils/json/Popular1.json";
import PopularDestinationModal from "@/app/components/modals/PopularDestinationModal";
import BookingForm from "@/app/components/forms/BookingForm";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Popular Destinations | Pinoy",
  description: "...",
};

export default function Page({
  params,
}: {
  params: { slug: string; title: string };
}) {
  return (
    <>
      {destinatinData.map((data) => {
        if (data.url == params.slug) {
          return (
            <main className={inter.className} key={data.id}>
              <Image
                className="-mt-6"
                src={Banner}
                width={0}
                height={0}
                alt="About"
                priority
              />
              <div className="scroll-smooth bg-slate-100 lg:mb-6 sm:p-4 rounded-br-3xl rounded-bl-3xl">
                <div className="container z-40 lg:p-2 mx-auto">
                  <BookingForm />
                </div>
              </div>

              <div className="container mx-auto w-full text-center mt-4">
                <h1 className="text-3xl font-bold">{data.title}</h1>
                <p className="text-center mt-4 px-4">{data.description}</p>

                <h4 className="text-xl font-bold text-start mt-10 px-4 text-black">
                  {data.subTitle}
                </h4>
                <p className="text-start mt-3 px-4">{data.subDescription}</p>
              </div>

              <div className="container px-4 mx-auto mt-6 sm:grid hidden">
                <h3 className="text-xl font-bold text-start text-black capitalize">
                  Philippines flight deals{" "}
                </h3>
                <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 mt-8">
                  {airLines.map((id) => {
                    if (id.destinationId == data.id && id.isAirLine == true) {
                      return (
                        <div key={id.id} className="group flex gap-3 lg:gap-10 p-3 border rounded-lg bg-white shadow-lg hover:shadow-xl">
                          <div className="group mx-auto">
                            <img
                              className="mx-auto mb-2"
                              alt="air line"
                              src={id.airLineImage}
                              width={50}
                              height={50}
                            />
                            <h4 className="text-xs text-center mb-1">
                              {id.airLine}
                            </h4>
                          </div>
                          <div className="group mx-auto">
                            <h4 className="text-sm text-black font-bold">
                              {id.departure} to {id.destination}
                            </h4>
                            <h6 className="text-xs text-black">
                              {id.departureDate} | {id.returnDate}
                            </h6>
                            <h6 className="text-xs text-black">{id.person}</h6>
                          </div>
                          <div className="text-center group mx-auto">
                            <h4 className="text-base font-bold mb-2 text-amber-500">
                              {id.price}
                            </h4>
                            <PopularDestinationModal
                              id={id.id}
                              departure={id.departureDate}
                              returns={id.returnDate}
                              person={id.person}
                              cabinClass={id.class}
                              price={id.price}
                              airLine={id.airLine}
                              departureAirPortCode={id.departureAirPortCode}
                              destinationAirportCode={id.destinationAirportCode}
                            />
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>

              <div className="container px-4 mx-auto mt-6">
                <h3 className="text-xl font-bold text-start text-black capitalize">
                  London to Philippines flight deals{" "}
                </h3>
                <div className="grid gap-3 grid-cols-1 lg:grid-cols-3 mt-8">
                  {airLines.map((id) => {
                    if (id.destinationId == data.id && id.isAirLine == false) {
                      return (
                        <div key={id.id} className="group flex gap-3 lg:gap-10 p-3 border rounded-lg bg-white shadow-lg hover:shadow-xl">
                          <div className="group mx-auto">
                            <h4 className="text-sm text-black font-bold">
                              {id.departure} to {id.destination}
                            </h4>
                            <h6 className="text-xs text-black">
                              {id.departureDate} | {id.returnDate}
                            </h6>
                            <h6 className="text-xs text-black">{id.person}</h6>
                          </div>
                          <div className="text-center group mx-auto">
                            <h4 className="text-base font-bold mb-2 text-amber-500">
                              {id.price}
                            </h4>
                            <button className="text-xs py-2 px-4 rounded-lg bg-blue-950 hover:bg-blue-800 text-white">
                              Enquire Now
                            </button>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </main>
          );
        }
      })}
    </>
  );
}
