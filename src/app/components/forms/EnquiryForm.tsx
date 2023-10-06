"use client";

import React, { useState } from "react";
import {useRouter} from 'next/navigation'
import { Button, Form, Input, InputNumber } from "antd";
import toast from "react-hot-toast";

type FieldType = {
  fname?: string;
  email?: string;
  mobile?: number;
  adults?: number;
  childrens?: number;
  infants?: number;
};

const EnquiryForm = (props: {
  modelClose: any;
  title: string;
  from: string;
  to: string;
  formName: number;
  departureAirPort: string;
  destinationAirPort: string;
  departureDate: string;
  returnsDate: string;
  price: string;
  tripType: string;
  cabinClass: string;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const onFinish = async (data: FieldType) => {
    setIsLoading(true);
    console.log(data);
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.formName ? props.formName : "",
        from: props.from ? props.from : "",
        to: props.to ? props.to : "",
        content: props.title,
        email: data.email ? data.email : "",
        fname: data.fname ? data.fname : "",
        mobile: data.mobile ? data.mobile : "",
        departureAirport: props.departureAirPort ? props.departureAirPort : "",
        destinationAirPort: props.destinationAirPort
          ? props.destinationAirPort
          : "",
        departureDate: props.departureDate ? props.departureDate : "",
        returnsDate: props.returnsDate ? props.returnsDate : "",
        price: props.price ? props.price : "",
        tripType: props.tripType ? props.tripType : "",
        cabinClass: props.cabinClass ? props.cabinClass : "",
        adults: data.adults,
        childrens: data.childrens ? data.childrens : 0,
        infants: data.infants ? data.infants : 0,
      }),
    });

    if (response.status === 200) {
      toast.success(`Hey ${data.fname} your enquiry send successfully..!`);
      setIsLoading(false);
      router.replace("/feed-back");
    } else {
      toast.error("Something went wrong.!");
      setIsLoading(false);
    }

    const details = await response.json();
    console.log(details);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name={`enquiryForm${props.formName}`}
      initialValues={{ remember: false, "adults": 1, "childrens": 0, "infants": 0 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="group grid gap-x-4">
        <Form.Item<FieldType>
          name="fname"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            className="inter"
            style={{ fontFamily: "inter" }}
            placeholder="Enter your Name"
          />
        </Form.Item>
      </div>
      <div className="group lg:grid-cols-2 grid gap-x-4">
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            placeholder="Enter Email Address"
            style={{ fontFamily: "inter" }}
            type="email"
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="mobile"
          rules={[{ required: true, message: "Please input your mobile!" }]}
        >
          <Input
            placeholder="Enter Mobile Number"
            style={{ fontFamily: "inter" }}
            type="number"
            minLength={10}
            maxLength={11}
          />
        </Form.Item>
      </div>
      <div className="group lg:grid-cols-3 grid gap-x-4">
        <Form.Item<FieldType>
          name="adults"
          label="Adults"
          rules={[{ required: true, message: "Please input Adults Count!" }]}
        >
          <Input
            placeholder="Adults"
            style={{ fontFamily: "inter" }}
            type="number"
            max={9}
            min={0}
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="childrens"
          label="Childrens"
          rules={[{ required: false, message: "Please input Children!" }]}
        >
          <Input
            placeholder="Children"
            style={{ fontFamily: "inter" }}
            type="number"
            max={9}
            min={0}
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="infants"
          label="Infants"
          rules={[{ required: false, message: "Please input Infants Count!" }]}
        >
          <Input
            placeholder="Infants"
            style={{ fontFamily: "inter" }}
            type="number"
            max={2}
            min={0}
          />
        </Form.Item>
      </div>
      {/* <div className="container grid lg:grid-cols-1">
        <Form.Item<FieldType>
          name="message"
          rules={[{ required: true, message: "Please enter Message!" }]}
        >
          <TextArea rows={4} placeholder="Message" style={{fontFamily: "inter"}}  />
        </Form.Item>
      </div> */}

      <div className="flex gap-3 mt-4 justify-end">
        <Button onClick={props.modelClose}>Cancel</Button>
        <Form.Item>
          <Button
            className=""
            style={{ fontFamily: "inter" }}
            type="primary"
            htmlType="submit"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Submit"}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default EnquiryForm;
