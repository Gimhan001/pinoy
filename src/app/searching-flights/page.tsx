import React from "react";
import { Suspense } from "react";
import Image from "next/image";
import Banner from "@/app/assets/images/home.jpg";
import { Inter } from "next/font/google";
import BookingForm from "../components/forms/BookingForm";
import {
  faPlaneDeparture,
  faPlaneArrival,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rate } from "antd";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export default function page({
  searchParams,
}: {
  searchParams: {
    from: string;
    to: string;
    departureDate: string;
    returnDate: string;
    tripType: string;
    adults: number;
    children: number;
    infants: number;
    cabinClass: string;
  };
}) {
  return (
    <Suspense fallback={<Loading />}>
      <main className={inter.className}>
        <Image
          className="lg:-mt-6"
          src={Banner}
          alt="Pinoy"
          width={0}
          height={0}
          priority
        />
        <div className="container mx-auto mt-8 px-4">
          <h3 className="text-base font-medium uppercase ">flight - results</h3>
        </div>

        <div className="container mx-auto px-4">
          <div className="container mx-auto mt-8">
            <div className="grid lg:grid-cols-2 lg:gap-x-8 gap-3 mx-auto">
              <div className="group bg-slate-100 place-self-auto rounded-lg p-4">
                <h5 className="text-sm font-sm text-black uppercase">
                  <FontAwesomeIcon className="pr-3" icon={faPlaneDeparture} />
                  {searchParams.from}{" "}
                  <FontAwesomeIcon className="px-3" icon={faArrowRight} />{" "}
                  <FontAwesomeIcon
                    className="pl-1 pr-3"
                    icon={faPlaneArrival}
                  />
                  {searchParams.to}
                </h5>
                <p className="text-xs font-bold mt-1 text-gray-600">
                  {searchParams.departureDate} | {searchParams.returnDate}
                </p>
                <hr className="mt-3" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="group">
                    <p className="text-xs font-bold mt-1 capitalize">
                      trip type
                    </p>
                    <p className="text-xs font-medium mt-1 capitalize">
                      {searchParams.tripType}
                    </p>
                  </div>
                  <div className="group">
                    <p className="text-xs font-bold mt-1 capitalize">class</p>
                    <p className="text-xs font-medium mt-1 capitalize">
                      {searchParams.cabinClass}
                    </p>
                  </div>
                  <div className="group">
                    <p className="text-xs font-bold mt-1 capitalize">
                      passengers
                    </p>
                    <p className="text-xs font-medium mt-1 capitalize">
                      Adult {searchParams.adults}
                    </p>
                    <p className="text-xs font-medium mt-1 capitalize">
                      Childrens {searchParams.children}
                    </p>
                    <p className="text-xs font-medium mt-1 capitalize">
                      Infants {searchParams.infants}
                    </p>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="bg-blue-600">
                  <h3 className="text-white p-3 font-bold ">
                    Fly now to any favourite destinations
                  </h3>
                </div>
                <div className="p-4">
                  <h3>Free Reservations on 24 hours</h3>
                  <p className="text-red-500">* Matt I need Contents</p>
                  <p className="text-red-500">* Matt I need Contents</p>
                  <p className="text-red-500">* Matt I need Contents</p>
                </div>
                <div>
                  {/* <Rate className="" disabled defaultValue={5} /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto p-4 bg-slate-100 mt-4 rounded-2xl">
            <BookingForm
            />
          </div>
        </div>
      </main>
    </Suspense>
  );
}
