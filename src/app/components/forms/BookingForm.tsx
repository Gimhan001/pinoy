"use client";

import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import {
  Radio,
  DatePicker,
  Select,
  Card,
  AutoComplete,
  InputNumber,
  Dropdown,
  MenuProps,
  Space,
  Form,
} from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import type { RangePickerProps } from "antd/es/date-picker";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

const mockVal = (str: string, repeat = 1) => ({
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
      <Form.Item name="adults" label="Adults">
        <InputNumber placeholder="Adults" min={1} max={10} defaultValue={1} />
      </Form.Item>
    ),
  },
  {
    key: "2",
    label: (
      <Form.Item name="children" label="Children">
        <InputNumber placeholder="Children" defaultValue={0} min={0} max={10} />
      </Form.Item>
    ),
  },
  {
    key: "3",
    label: (
      <Form.Item name="infants" label="Infants">
        <InputNumber placeholder="Infants" defaultValue={0} min={0} max={10} />
      </Form.Item>
    ),
  },
];

export default function BookingForm() {
  const [value, setValue] = useState("Return");
  const [open, setOpen] = useState(false);

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

  //date

  const { RangePicker } = DatePicker;

  // eslint-disable-next-line arrow-body-style
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf("day");
  };

  //Dropdown
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "3") {
      setOpen(true);
    }
  };

  const handleOpenChange = (flag: boolean) => {
    setOpen(flag);
  };

  return (
    <Card className="Poppin shadow-3xl">
      <h5 className="text-xl font-bold text-center Poppins capitalize mb-4">
        Away to your home
      </h5>
      <Radio.Group
        className=""
        onChange={onChange}
        value={value}
        style={{ fontFamily: "Poppins" }}
      >
        <Radio value={"Return"}>Return</Radio>
        <Radio value={"One Way"}>One Way</Radio>
        <Radio value={"Multi City"}>Multi City</Radio>
        <Radio value={"Only Direct"}>Only Direct</Radio>
      </Radio.Group>
      <div className="container mx-auro grid lg:grid-cols-5 gap-3 mt-3">
        <div className="group">
          <AutoComplete
            options={options}
            style={{ width: "100%", fontFamily: "Poppins" }}
            onSelect={onSelect}
            onSearch={(text) => setOptions(getPanelValue(text))}
            placeholder="Where From"
          />
        </div>
        <div className="group">
          <AutoComplete
            options={options}
            style={{ width: "100%", fontFamily: "Poppins" }}
            onSelect={onSelect}
            onSearch={(text) => setOptions(getPanelValue(text))}
            placeholder="Where to"
          />
        </div>
        <div className="group">
          <RangePicker
            style={{ width: "100%", fontFamily: "Poppins" }}
            placeholder={["Departure Date", "Return Date"]}
            disabledDate={disabledDate}
          />
        </div>
        <div className="group">
          <Select
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
        </div>
        <div className="group">
          <Dropdown
          className="border p-1 w-full rounded-md"
            menu={{
              items,
            }}
            onOpenChange={handleOpenChange}
            open={open}
          >
            <Space>
              Passengers
              <DownOutlined className="ms-auto"/>
            </Space>
          </Dropdown>
        </div>
      </div>
      <div className="grid justify-center mt-8">
        <button className="bg-blue-500 p-1 px-8 rounded-full Poppins">
          Search
        </button>
      </div>
    </Card>
  );
}
