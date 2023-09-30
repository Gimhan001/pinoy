"use client";

import React, { useState } from "react";
import { Modal, Input, Checkbox, Form } from "antd";
import manila from "@/app/assets/images/loading-icon.gif";
import Image from "next/image";

interface ModalProps {
  id: number;
  tripType: string;
  from: string;
  to: string;
  departure: string;
  returns: string;
  cabinClass: string;
  person: number;
  price: string;
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

export const OffersModal: React.FC<ModalProps> = ({
  id,
  tripType,
  from,
  to,
  departure,
  returns,
  person,
  cabinClass,
  price,
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
        className="bg-blue-950 p-2 rounded-lg text-sm text-white hover:bg-blue-800"
        onClick={showModal}
      >
        Enquire Now
      </button>
      <Modal
        key={id}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        style={{ fontFamily: "Inter" }}
        className=""
        title="Offer Details"
        maskClosable={false}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Image className="mx-auto mb-4 rounded-3xl" width={0} height={150} priority src={manila} alt="offerImg" />
        <div className="grid grid-cols-2 lg:grid-cols-3 mx-auto gap-3">
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Where From</h6>
            <h6>{from}</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Where To</h6>
            <h6>{to}</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Amount</h6>
            <h6>{price}</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Person</h6>
            <h6>{person}</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Class</h6>
            <h6>{cabinClass}</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Trip Type</h6>
            <h6>{tripType}</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Departure Date</h6>
            <h6>{departure}</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">retrun date</h6>
            <h6>{returns}</h6>
          </div>
        </div>
        <div className="mt-4">
          <Form
            name="offersForm"
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
          <button className="bg-blue-900 hover:bg-blue-700 p-1 px-4 rounded-lg text-white ">
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
};
