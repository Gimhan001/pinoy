import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import {
  faChair,
  faCircleInfo,
  faClock,
  faMartiniGlass,
  faPlane,
  faPlaneDeparture,
  faSuitcaseRolling,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "antd";
import logo from "../../../../public/emirates.png";
import Image from "next/image";
import React from "react";

export default function SearchResultItenary() {
  return (
    <div className="container px-4">
      <div className="bg-white p-4 shadow-md">
        <div className="flex justify-between border-b-2 pb-4">
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faPlane} className="pt-1" />
            <h6 className="text-base font-bold uppercase">departure</h6> -
            <p className="text-xs pt-1 font-bold text-gray-500">
              Manila Airport
            </p>
          </div>
          <div className="gap-2 sm:flex hidden">
            <FontAwesomeIcon icon={faClockFour} className="pt-1" />
            <p className="text-sm font-bold">20H:90M</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="py-2">
          <div className="grid lg:grid-cols-6 gap-6">
              <div className="group sm:grid hidden">
                <Image src={logo} alt="airline-logo" />
              </div>
              <div className="group col-span-4">
                <div className="flex gap-3">
                  <div className="flex-[3]">
                    <div className="">
                      <div>
                        <p className="text-sm font-bold">12:00</p>
                      </div>
                      <div>
                        <p className="text-sm font-base">2023-10-11</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase">
                          London lhr
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-base">Terminal 01</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[6] sm:flex hidden">
                    <Divider>
                      <div className="flex gap-2 bg-slate-200 p-2 rounded-full px-4">
                        <FontAwesomeIcon
                          icon={faClockFour}
                          size="xs"
                          className="pt-1 text-slate-600"
                        />
                        <p className="text-sm font-bold text-slate-600">
                          02H : 90M
                        </p>
                      </div>
                    </Divider>
                  </div>
                  <div className="flex-[3]">
                    <div className="grid">
                      <div>
                        <p className="text-sm font-bold">12:00</p>
                      </div>
                      <div>
                        <p className="text-sm font-base">2023-10-11</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase">Manila mnl</p>
                      </div>
                      <div>
                        <p className="text-xs font-base">Terminal 01</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className=" flex gap-2 mx-auto mb-2">
                  <FontAwesomeIcon icon={faPlaneDeparture} className="" />
                  <p className="text-xs font-bold">Aircraft 221</p>
                </div>
                <div className=" flex gap-2 mx-auto mb-2">
                  <FontAwesomeIcon icon={faMartiniGlass} className="" />
                  <p className="text-xs font-bold">Economy</p>
                </div>
                <div className=" flex gap-2 mx-auto">
                  <FontAwesomeIcon
                    icon={faSuitcaseRolling}
                    color="green"
                    className=""
                  />
                  <p className="text-xs font-bold text-green-600">
                    Check-in Bag 01 PC
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-bese font-bold text-blue-500 px-2">
              Stopover 00H and 25M in Manila Airport
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 mt-6 shadow-md">
        <div className="flex justify-between border-b-2 pb-4">
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faPlane} className="pt-1" />
            <h6 className="text-base font-bold uppercase">return</h6> -
            <p className="text-xs pt-1 font-bold text-gray-500">
              Manila Airport
            </p>
          </div>
          <div className="gap-2 sm:flex hidden">
            <FontAwesomeIcon icon={faClockFour} className="pt-1" />
            <p className="text-sm font-bold">20H:90M</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="py-2">
            <div className="grid lg:grid-cols-6 gap-6">
              <div className="group sm:grid hidden">
                <Image src={logo} alt="airline-logo" />
              </div>
              <div className="group col-span-4">
                <div className="flex gap-3">
                  <div className="flex-[3]">
                    <div className="">
                      <div>
                        <p className="text-sm font-bold">12:00</p>
                      </div>
                      <div>
                        <p className="text-sm font-base">2023-10-11</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase">
                          London lhr
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-base">Terminal 01</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[6] sm:flex hidden">
                    <Divider>
                      <div className="flex gap-2 bg-slate-200 p-2 rounded-full px-4">
                        <FontAwesomeIcon
                          icon={faClockFour}
                          size="xs"
                          className="pt-1 text-slate-600"
                        />
                        <p className="text-sm font-bold text-slate-600">
                          02H : 90M
                        </p>
                      </div>
                    </Divider>
                  </div>
                  <div className="flex-[3]">
                    <div className="grid">
                      <div>
                        <p className="text-sm font-bold">12:00</p>
                      </div>
                      <div>
                        <p className="text-sm font-base">2023-10-11</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase">Manila mnl</p>
                      </div>
                      <div>
                        <p className="text-xs font-base">Terminal 01</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className=" flex gap-2 mx-auto mb-2">
                  <FontAwesomeIcon icon={faPlaneDeparture} className="" />
                  <p className="text-xs font-bold">Aircraft 221</p>
                </div>
                <div className=" flex gap-2 mx-auto mb-2">
                  <FontAwesomeIcon icon={faMartiniGlass} className="" />
                  <p className="text-xs font-bold">Economy</p>
                </div>
                <div className=" flex gap-2 mx-auto">
                  <FontAwesomeIcon
                    icon={faSuitcaseRolling}
                    color="green"
                    className=""
                  />
                  <p className="text-xs font-bold text-green-600">
                    Check-in Bag 01 PC
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-bese font-bold text-blue-500 px-2">
              Stopover 00H and 25M in Manila Airport
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
