"use client";

import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import {
  Radio,
  DatePicker,
  Select,
  Card,
  AutoComplete,
  Input,
  InputNumber,
  Dropdown,
  MenuProps,
  Space,
  Form,
  Modal,
  Button,
} from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import type { DatePickerProps } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
// import { PoweroffOutlined } from '@ant-design/icons';
import { BookingModal } from "../modals/BookingModal";
import { Inter } from "next/font/google";
import Image from "next/image";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import airportList from "@/app/utils/json/AirportList.json";
import Link from "next/link";

const { RangePicker } = DatePicker;

const inter = Inter({ subsets: ["latin"] });

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
  return value;
};

//Dropdown
const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <div>
        <p className="font-bold" style={{ fontFamily: "inter" }}>
          Adults
        </p>
        <InputNumber
          type="number"
          style={{ fontFamily: "inter" }}
          placeholder="Adults"
          min={1}
          max={10}
          defaultValue={1}
        />
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div>
        <p className="font-bold" style={{ fontFamily: "inter" }}>
          Children
        </p>
        <InputNumber
          type="number"
          style={{ fontFamily: "inter" }}
          placeholder="Children"
          defaultValue={0}
          min={0}
          max={10}
        />
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div>
        <p className="font-bold" style={{ fontFamily: "inter" }}>
          Infants
        </p>
        <InputNumber
          type="number"
          style={{ fontFamily: "inter" }}
          placeholder="Infants"
          defaultValue={0}
          onChange={(value: number | null) => value}
          min={0}
          max={10}
        />
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <Select
        className="mb-4"
        defaultValue="Select Class"
        style={{ width: "100%", fontFamily: "inter" }}
        onChange={handleChange}
        options={[
          { value: "economy", label: "Economy" },
          { value: "premiumEconomy", label: "Premium Economy" },
          { value: "business", label: "Business" },
          { value: "firstClass", label: "First Class" },
        ]}
      />
    ),
  },
];

export default function SearchForm() {
  const [tripTypeValue, settripTypeValue] = useState("Return");
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<{ airport: string }[]>([]);
  const [searchDeparture, setSearchDeparture] = useState("");
  const [searchDestination, setSearchDestination] = useState("");

  const onChange = (e: RadioChangeEvent) => {
    settripTypeValue(e.target.value);
  };

  //Dropdown
  const handleOpenChange = (flag: boolean) => {
    setOpen(flag);
  };

  const onChangeDepartureDate: DatePickerProps["onChange"] = (dateString) => {
    const departureDate = dateString;
    return departureDate;
  };

  const onChangeReturn: DatePickerProps["onChange"] = (dateString) => {
    return dateString?.toString;
  };

  const onChangeDeparture = (data: string) => {
    setSearchDeparture(data);
    console.log("search Airport :" + data);
  };

  const onChangeDestination = (data: string) => {
    setSearchDestination(data);
    console.log("search Airport :" + data);
  };

  return (
    <div className={inter.className}>
      <div className="container mx-auto p-4 lg:-mt-32 z-40">
        <Card
          className="container shadow-xl"
          style={{ fontFamily: "Inter", borderRadius: "30px" }}
        >
          <h5 className="flex flex-row text-xl font-bold text-start capitalize mb-4">
            <FontAwesomeIcon className="pr-3" size="lg" icon={faPlane} />
            Away to your home
          </h5>

          <Radio.Group
            className=""
            onChange={onChange}
            value={tripTypeValue}
            style={{ fontFamily: "Inter" }}
          >
            <Radio value={"Return"} style={{ fontFamily: "Inter" }}>
              Return
            </Radio>
            <Radio value={"One Way"} style={{ fontFamily: "Inter" }}>
              One way
            </Radio>
            <Radio value={"Multi City"} style={{ fontFamily: "Inter" }}>
              Multi City
            </Radio>
            <Radio value={"Only Direct"} style={{ fontFamily: "Inter" }}>
              Only Direct
            </Radio>
          </Radio.Group>

          <div className="container mx-auto grid gap-3 lg:grid-cols-4 mt-4">
            <div className="group flex rounded-xl border-2 lg:col-span-2 border-slate-700">
              <AutoComplete
                bordered={false}
                placeholder="Where From"
                options={options.map((item) => ({
                  value: item.airport,
                  option: item.airport,
                }))}
                onSearch={(value) => {
                  setSearchDeparture(value);
                  const filteredOptions = airportList.filter((item) =>
                    item.airport.toLowerCase().includes(value.toLowerCase())
                  );

                  setOptions(filteredOptions);
                }}
                onChange={onChangeDeparture}
                value={searchDeparture}
                style={{ width: "100%" }}
              />

              <AutoComplete
                bordered={false}
                placeholder="Where From"
                options={options.map((item) => ({
                  value: item.airport,
                  option: item.airport,
                }))}
                onSearch={(value) => {
                  setSearchDestination(value);
                  const filteredOptions = airportList.filter((item) =>
                    item.airport.toLowerCase().includes(value.toLowerCase())
                  );

                  setOptions(filteredOptions);
                }}
                onChange={onChangeDestination}
                value={searchDestination}
                style={{ width: "100%" }}
              />
            </div>

            <div className="group flex rounded-xl border-2 border-slate-700">
            <RangePicker
            bordered={false}
            style={{ width: "100%" }}
             />
            </div>
            <div className="group rounded-xl border-2 border-slate-700">
              <Dropdown
                className="p-1 w-full"
                menu={{
                  items,
                }}
                onOpenChange={handleOpenChange}
                open={open}
              >
                <Space>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Travellers
                  <DownOutlined className="ms-auto" />
                </Space>
              </Dropdown>
            </div>
          </div>

          <div className="grid justify-center mt-8">
            <Link
              href={{
                pathname: "/searching-flights/",
                query: {
                  from: "Cambrigde - United Kingdom(CBG)",
                  to: "Cambrigde - United Kingdom(CBG)",
                  departureDate: "10-10-2023",
                  returnDate: "10-10-2023",
                  tripType: tripTypeValue,
                  adults: 1,
                  children: 0,
                  infants: 1,
                  cabinClass: "Economy",
                },
              }}
            >
              <Button
                type="primary"
                icon={<SearchOutlined />}
                style={{ fontFamily: "inter" }}
                className=""
              >
                Search Flight
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
