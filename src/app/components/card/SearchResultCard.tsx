"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import { Inter } from "next/font/google";
import {
  faArrowRight,
  faCircleCheck,
  faCircleInfo,
  faExclamationCircle,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Divider } from "antd";
import logo from "../../../../public/emirates.png";
import Image from "next/image";
import {
  InfoCircleOutlined,
  EditOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { SearchResultModal } from '../modals/SearchResultModal';
import { useRouter } from 'next/navigation';

export default function SearchResultCard() {

    const router = useRouter()

    const submit = () => {
      router.push("/test-result");
  
    }
  return (
    <div>
        <div className="grid lg:grid-cols-2 mt-8 gap-4">
          <div className="group border p-4 rounded-lg shadow-sm border-t-4 border-b-4 border-t-blue-500 border-b-gray-300 ">
            <div className="grid">
              <div className="group py-2 flex justify-between">
                <div className="flex  gap-2">
                  <FontAwesomeIcon icon={faPlane} className="pt-1" />
                  <h6 className="text-base font-bold uppercase">departure</h6> -
                  <p className="text-xs pt-1 font-bold text-gray-500">
                    Manila Airport
                  </p>
                </div>
                <div className="lg:hidden">
                  <Image src={logo} alt="airline-logo" />
                </div>
              </div>
              <div className="group border-b-2 py-2 gap-2 flex">
                <div className="grid lg:grid-cols-6 gap-6">
                  <div className="group sm:grid hidden">
                    <Image src={logo} alt="airline-logo" />
                  </div>
                  <div className="group col-span-4">
                    <div className="flex gap-3">
                      <div className="flex-[3]">
                        <div className="grid">
                          <div>
                            <p className="text-sm font-bold">12:00</p>
                          </div>
                          <div>
                            <p className="text-xs font-base">2023-10-11</p>
                          </div>
                          <div>
                            <p className="text-sm font-bold uppercase">
                              London lhr
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-[6]">
                        <Divider>
                          <div className="flex gap-2 bg-slate-200 p-2 rounded-full px-4">
                            <FontAwesomeIcon
                              icon={faPlane}
                              size="xs"
                              className="pt-1 text-slate-600"
                            />
                            <p className="text-sm font-bold text-slate-600">
                              2 stops
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
                            <p className="text-xs font-base">2023-10-11</p>
                          </div>
                          <div>
                            <p className="text-sm font-bold uppercase">
                              Manil mnl
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group flex gap-2 mx-auto">
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      color="green"
                      className=""
                    />
                    <p className="text-xs font-bold text-green-600">
                      Check-in Bagage included!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="group py-2 flex justify-between">
                <div className="flex  gap-2">
                  <FontAwesomeIcon icon={faPlane} className="pt-1" />
                  <h6 className="text-base font-bold uppercase">Return</h6> -
                  <p className="text-xs pt-1 font-bold text-gray-500">
                    Manila Airport
                  </p>
                </div>
                <div className="lg:hidden">
                  <Image src={logo} alt="airline-logo" />
                </div>
              </div>
              <div className="group border-b-2 py-2 gap-2 flex">
                <div className="grid lg:grid-cols-6 gap-6">
                  <div className="group sm:grid hidden">
                    <Image src={logo} alt="airline-logo" />
                  </div>
                  <div className="group col-span-4">
                    <div className="flex gap-3">
                      <div className="flex-[3]">
                        <div className="grid">
                          <div>
                            <p className="text-sm font-bold">12:00</p>
                          </div>
                          <div>
                            <p className="text-xs font-base">2023-10-11</p>
                          </div>
                          <div>
                            <p className="text-sm font-bold uppercase">
                              London lhr
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-[6]">
                        <Divider>
                          <div className="flex gap-2 bg-slate-200 p-2 rounded-full px-4">
                            <FontAwesomeIcon
                              icon={faPlane}
                              size="xs"
                              className="pt-1 text-slate-600"
                            />
                            <p className="text-sm font-bold text-slate-600">
                              2 stops
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
                            <p className="text-xs font-base">2023-10-11</p>
                          </div>
                          <div>
                            <p className="text-sm font-bold uppercase">
                              Manil mnl
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group flex gap-2 mx-auto">
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      color="green"
                      className=""
                    />
                    <p className="text-xs font-bold text-green-600">
                      Check-in Bagage included!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between pt-6">
                <div className="group">
                  <SearchResultModal />
                </div>
                <div className="group flex gap-3">
                  <div className="text-end">
                    <h4 className="text-2xl font-bold text-amber-500">$1234</h4>
                    <p className="text-xs font-medium capitalize">
                      fare per Passenger
                    </p>
                  </div>
                  <button onClick={submit} className="px-8 bg-blue-500 rounded-lg text-lg text-white hover:bg-blue-400">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
