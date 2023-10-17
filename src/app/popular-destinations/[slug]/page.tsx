import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";

import Banner from "@/app/assets/images/popular-destinations.webp";
import destinatinData from "@/app/utils/json/PopularDestination.json";
import airLines from "@/app/utils/json/Popular1.json";
import { PopularDestinationModal } from "@/app/components/modals/PopularDestinationModal";
import BookingForm from "@/app/components/forms/SearchForm";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  params: { slug: string }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.slug
 
  return {
    title: id,
    description: "",
  }
}


export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
    
      {destinatinData.map((data) => {
        if (data.url == params.slug) {
          return (
            <main className={inter.className} key={data.id}>
              <Image
                className="lg:-mt-6"
                src={Banner}
                width={0}
                height={0}
                alt="About"
                placeholder="blur"
                priority
              />
              <div className="container scroll-smooth bg-slate-100 lg:mb-6 sm:p-4 rounded-br-3xl rounded-bl-3xl">
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

              <div className="container px-4 mx-auto mt-8 sm:grid hidden">
                <h3 className="text-xl font-bold text-start text-black capitalize">
                  {data.destination} flight deals{" "}
                </h3>
                <div className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-2 mt-8">
                  {airLines.map((id) => {
                    if (id.destinationId == data.id && id.isAirLine == true) {
                      return (
                        <div
                          key={id.id}
                          className="group lg:mx-8 flex gap-3 lg:gap-10 p-3 border rounded-lg bg-white shadow-lg hover:shadow-xl"
                        >
                          <div className="group mx-auto">
                            <picture>
                              <img
                                className="mx-auto mb-2"
                                alt="air line"
                                src={id.airLineImage}
                                width={50}
                                height={50}
                              />
                            </picture>

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
                              from={id.departure}
                              to={id.destination}
                              departureDate={id.departureDate}
                              returnsDate={id.returnDate}
                              person={id.person}
                              cabinClass={id.class}
                              price={id.price}
                              airLine={id.airLine}
                              departureAirPortCode={id.departureAirPortCode}
                              destinationAirportCode={id.destinationAirportCode}
                              title={"Popular Destinations Enquiry"}
                              tripType={"Round Trip"}
                            />
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>

              <div className="container px-4 mx-auto mt-8">
                <h3 className="text-xl font-bold text-start text-black capitalize">
                  London to {data.destination} flight deals{" "}
                </h3>
                <div className="grid gap-3 grid-cols-1 lg:grid-cols-3 mt-8">
                  {airLines.map((id) => {
                    if (id.destinationId == data.id && id.isAirLine == false) {
                      return (
                        <div
                          key={id.id}
                          className="group flex gap-3 lg:gap-10 p-3 border rounded-lg bg-white shadow-lg hover:shadow-xl"
                        >
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
                              from={id.departure}
                              to={id.destination}
                              departureDate={id.departureDate}
                              returnsDate={id.returnDate}
                              person={id.person}
                              cabinClass={id.class}
                              price={id.price}
                              airLine={id.airLine}
                              departureAirPortCode={id.departureAirPortCode}
                              destinationAirportCode={id.destinationAirportCode}
                              title={"Popular Destinations Enquiry"}
                              tripType={"Round Trip"}
                            />
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
