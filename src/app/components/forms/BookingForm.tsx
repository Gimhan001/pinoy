"use client"

import React, { useState } from "react";
import { InputNumber } from "antd";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type FieldType = {
  fname?: string;
  email?: string;
  mobile?: string;
};

const BookingForm = ({
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
}) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const onFinish = async (data: FieldType) => {
    if(searchParams.from == "" || searchParams.to == "" || searchParams.departureDate == "" || searchParams.returnDate == "" ) {
      setIsLoading(false);
      toast.error("Please Enter the invalid details");
    } else {
    setIsLoading(true);
    console.log(data);
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: "EnquryForm",
        from: searchParams.from ? searchParams.from : "",
        to: searchParams.to ? searchParams.to : "",
        content: "Search Enquiry",
        email: data.email ? data.email : "",
        fname: data.fname ? data.fname : "",
        mobile: data.mobile ? data.mobile : "",
        departureAirport: searchParams.from ? searchParams.from : "",
        destinationAirPort: searchParams.to
          ? searchParams.to
          : "",
        departureDate: searchParams.departureDate ? searchParams.departureDate : "",
        returnsDate: searchParams.returnDate ? searchParams.returnDate : "",
        price: "",
        tripType: searchParams.tripType ? searchParams.tripType : "",
        cabinClass: searchParams.cabinClass ? searchParams.cabinClass : "",
        adults: searchParams.adults,
        childrens: searchParams.children ? searchParams.children : 0,
        infants: searchParams.infants ? searchParams.infants : 0,
        airLine: ""
      }),
    });

    const res = await fetch("https://api.leadsquared.com/v2/LeadManagement.svc/Lead.Create?accessKey=u$rbfac260a7fd0838f55b4a3cac28d49a7&secretKey=5ef2ff8221566362f83d13d19359516d695edfe4", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        {Attribute: "FirstName",
        Value: data.fname ? data.fname : ""},
        {Attribute: "mx_Departure",
        Value: searchParams.from ? searchParams.from  : ""},
        {Attribute: "mx_Destinations",
          Value: searchParams.to ? searchParams.to : ""},
        {Attribute: "mx_Departure_Date",
          Value: searchParams.departureDate ? searchParams.departureDate : ""},
        {Attribute: "mx_Return_Date",
          Value: searchParams.returnDate ? searchParams.returnDate : ""},
        {Attribute: "Mobile",
          Value: data.mobile ? data.mobile : ""},
        {Attribute: "EmailAddress",
          Value: data.email ? data.email : ""},
        {Attribute: "mx_Promo_price",
          Value: ""},
        {Attribute: "mx_Class",
          Value: searchParams.cabinClass ? searchParams.cabinClass : ""},
        {Attribute: "mx_Trip_Type",
          Value: searchParams.tripType ? searchParams.tripType : ""},
        {Attribute: "mx_Number_of_Adults",
          Value: searchParams.adults},
        {Attribute: "mx_Number_of_Child",
          Value: searchParams.children ? searchParams.children : 0},
        {Attribute: "mx_Number_of_Infant",
          Value: searchParams.infants ? searchParams.infants : 0},

      ]),
    });

    if (response.status === 200 && res.status === 200) {
      toast.success(`Hey ${data.fname} your enquiry send successfully..!`);
      setIsLoading(false);
      router.replace("/feed-back");
    } else {
      toast.error("Something went wrong.!");
      setIsLoading(false);
    }

    const details = await response.json();
    console.log(details);

    const leadDetails = await res.json();
    console.log("Lead Details"+ leadDetails);
  }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="bookingForm"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="group grid lg:grid-cols-2 gap-x-4">
        
      
        <Form.Item<FieldType>
          name="fname"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input
            className="inter"
            style={{ fontFamily: "inter" }}
            placeholder="First Name"
          />
        </Form.Item>
      </div>
      <div className="container grid lg:grid-cols-2 gap-x-4">
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            placeholder="Email Address"
            style={{ fontFamily: "inter" }}
            type="email"
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="mobile"
          rules={[{ required: true, message: "Please input your mobile!" }]}
        >
          <InputNumber
            placeholder="Mobile Number"
            minLength={10}
            maxLength={11}
            style={{ fontFamily: "inter", width: "100%" }}
          />
        </Form.Item>
      </div>

      <div className="grid lg:grid-cols-6">
        <Form.Item>
          <Button
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

export default BookingForm;
