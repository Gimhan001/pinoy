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
} from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import type { DatePickerProps } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { BookingModal } from "../modals/BookingModal";
import { Inter } from "next/font/google";
import Image from "next/image";
import rightArrow from "@/app/assets/images/right-arrow.png";
import airportList from "@/app/utils/json/AirportList.json";

const inter = Inter({ subsets: ["latin"] });

const classType = [
  { title: 'Common', id: 1 },
  { title: 'Group', id: 2 },
  { title: 'Individual', id: 3 }
];

const mockVal = (str: string, repeat = 1) => ({
  option: classType,
  value: str.repeat(repeat),
});

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

//Dropdown
const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <div>
        <p className="font-bold">Adults</p>
        <InputNumber
          type="number"
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
        <p className="font-bold">Children</p>
        <InputNumber
          type="number"
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
        <p className="font-bold">Infants</p>
        <InputNumber
          type="number"
          placeholder="Infants"
          defaultValue={0}
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
        style={{ width: "100%", fontFamily: "Poppins" }}
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

type initialData = {
  tripType: string;
  from: string;
  to: string;
  departure: Date;
  returns: Date;
  Adults: number;
  childrens: number;
  infants: number;
  cabinClass: string;
};

export default function BookingForm() {
  const [value, setValue] = useState("Return");
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const [options, setOptions] = useState<{ value: string }[]>([]);

  const getPanelValue = (searchText: string) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  //Dropdown
  const handleOpenChange = (flag: boolean) => {
    setOpen(flag);
  };

  const onChangeDeparture: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const onChangeReturn: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className={inter.className}>
      <div className="container mx-auto p-4 lg:-mt-32 z-40">
        <Card className="container shadow-xl" style={{ fontFamily: "Inter", borderRadius: "30px" }}>
          <h5 className="flex flex-row text-xl font-bold text-start capitalize mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2 mt-0.5"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
            Away to your home
          </h5>

          <Radio.Group
            name="triptype"
            id="triptype"
            className=""
            onChange={onChange}
            value={value}
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
                id="from"
                bordered={false}
                options={options}
                style={{ width: "100%", fontFamily: "Inter" }}
                onSelect={onSelect}
                onSearch={(text) => setOptions(getPanelValue(text))}
                placeholder="Where From"
              />
              <AutoComplete
                id="to"
                bordered={false}
                options={options}
                style={{ width: "100%" }}
                onSelect={onSelect}
                onSearch={(text) => setOptions(getPanelValue(text))}
                placeholder="Where to"
              />
            </div>
            <div className="group flex rounded-xl border-2 border-slate-700">
              <DatePicker
                bordered={false}
                placeholder="Departure Date"
                // style={{ width: "100%" }}
                onChange={onChangeDeparture}
              />
              <DatePicker
                bordered={false}
                placeholder="Return Date"
                // style={{ width: "100%" }}
                onChange={onChangeReturn}
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
            <button
              onClick={showModal}
              className="bg-blue-900 p-1 px-8 py-2 rounded-lg text-white"
            >
              Search Flight
            </button>
            <BookingModal
              modalOpen={isModalOpen}
              handleOkk={handleOk}
              handleClose={handleCancel}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
