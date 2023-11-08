import React from "react";
import { Inter } from "next/font/google";
import SearchSteps from "../components/steps/SearchSteps";
import SearchResultItenary from "../components/collapse/SearchResultItenary";
import BookingForm from "../components/forms/BookingForm";

const inter = Inter({ subsets: ["latin"] });

export default function page() {
  return (
    <div className={inter.className}>
      <div className="lg:my-8 lg:px-32 sm:grid hidden">
        <SearchSteps status={"details"} />
      </div>
      <div className="container mx-auto lg:px-32 px-4">
        <div className="grid lg:grid-cols-3 gap-3 lg:gap-6 mt-8">
          <div className="group col-span-2">
            <div>
            <SearchResultItenary />
            </div>
            <div className="shadow-md p-4 border-t-4 border-b-2 border-t-blue-500 rounded-lg">
                <h4 className="text-base font-bold uppercase text-black mb-4">Passenger Details</h4>
                <BookingForm searchParams={{
                              from: "",
                              to: "",
                              departureDate: "",
                              returnDate: "",
                              tripType: "",
                              adults: 0,
                              children: 0,
                              infants: 0,
                              cabinClass: ""
                          }} />
            </div>
          </div>
          <div className="group sm:grid hidden max-h-12 sticky">
            <div className=" shadow-md w-full p-4 rounded-lg border-t-4 border-b-2 border-t-blue-500">
              <h4 className="text-lg font-bold uppercase text-black">
                Search details
              </h4>
              <div className="mt-4">
                <h5 className="text-sm font-bold uppercase text-black">
                  London to Manila
                </h5>
                <p className="text-sm font-base text-slate-400">Economy</p>
              </div>
              <div className="mt-1 border-b-2 pb-4">
                <h5 className="text-sm font-medium uppercase text-black">
                  2023-10-12 | 2023-10-25
                </h5>
              </div>
              <div className="mt-4">
                <h5 className="text-sm font-medium uppercase text-black">
                  Passenger(s)
                </h5>
                <div className="pr-40 pl-4 flex justify-between mt-2">
                  <p className="text-sm font-base text-black">Adult(s)</p>
                  <p className="text-sm font-base text-black">01</p>
                </div>
                <div className="pr-40 pl-4 flex justify-between mt-1">
                  <p className="text-sm font-base text-black">Children(s)</p>
                  <p className="text-sm font-base text-black">01</p>
                </div>
                <div className="pr-40 pl-4 flex justify-between mt-1">
                  <p className="text-sm font-base text-black">Infant(s)</p>
                  <p className="text-sm font-base text-black">01</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
