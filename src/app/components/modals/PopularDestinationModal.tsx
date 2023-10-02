"use client";

import React, { useState } from "react";
import { Modal, Input, Checkbox, Form } from "antd";
import manila from "@/app/assets/images/loading-icon.gif";
import Image from "next/image";

interface ModalProps {
  id: number;
  departure: string;
  destination: string;
  departureDate: string;
  returnsDate: string;
  cabinClass: string;
  person: string;
  price: string;
  airLine: string,
  departureAirPortCode: string;
  destinationAirportCode: string;
}

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  name?: string;
  email?: string;
  mobile?: string;
};

const PopularDestinationModal: React.FC<ModalProps> = ({
  id,
  departure,
  destination,
  departureDate,
  returnsDate,
  person,
  cabinClass,
  price,
  airLine,
  departureAirPortCode,
  destinationAirportCode
}) => {
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

  return (
    <div>
      <button
        className="text-xs py-2 px-4 rounded-lg bg-blue-950 hover:bg-blue-800 text-white"
        onClick={showModal}
      >
        Enquire Now
      </button>
      <Modal
        key={id}
        okButtonProps={{ style: { display: "none" } }}
        // cancelButtonProps={{ style: { display: "none" } }}
        style={{ fontFamily: "Inter" }}
        className="mx-auto"
        centered
        // title="Enquiry"
        maskClosable={false}
        closable={false}
        open={isModalOpen}
        // onCancel={handleCancel}
        footer={null}
      >

        <div className="grid mb-4">
          <div className="group navBar  p-2">
          <h4 className="text-lg text-center font-bold text-white">Enquiry</h4>
          </div>
        </div>
        {/* <Image className="mx-auto mb-4 rounded-3xl" width={0} height={150} priority src={manila} alt="offerImg" /> */}
        <div className="grid grid-cols-2 mx-auto gap-3">
        <div className="group">
            <h6 className="text-sm font-bold capitalize">Departure AirPort</h6>
            <h6>{departureAirPortCode}</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Destination AirPort</h6>
            <h6>{destinationAirportCode}</h6>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 mx-auto mt-4 gap-3">
          {/* <div className="group">
            <h6 className="text-sm font-bold capitalize">Where From</h6>
            <h6>{from}</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Where To</h6>
            <h6>{to}</h6>
          </div> */}
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Amount</h6>
            <h6>{price}</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Person</h6>
            <h6>{person}</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Air Line</h6>
            <h6>{airLine}</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Class</h6>
            <h6>{cabinClass}</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Departure Date</h6>
            <h6>{departureDate}</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">retrun date</h6>
            <h6>{returnsDate}</h6>
          </div>
        </div>
        <div className="mt-4">
          <Form
            name="popularForm"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{ fontFamily: "Inter" }}
          >
            <Form.Item<FieldType>
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
              style={{ fontFamily: "Inter" }}
            >
              <Input type="text" placeholder="Enter Your Name" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input type="email" placeholder="Enter Email Address" />
            </Form.Item>
            <Form.Item<FieldType>
              label="Mobile"
              name="mobile"
              rules={[
                { required: true, message: "Please input your mobile number!" },
              ]}
            >
              <Input type="number" placeholder="Enter Mobile Number" />
            </Form.Item>
          </Form>
        </div>
        <div className="text-end mt-4">
          <button
            className="border p-1 px-4 rounded-lg mr-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="bg-blue-950 hover:bg-blue-700  p-1 px-4 rounded-lg text-white ">
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default PopularDestinationModal;