"use client";

import React, { useState } from "react";
import { Modal, Input, Checkbox, Form } from "antd";

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

export const BookingModal = (props: { initialdata: any }) => {
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
        onClick={showModal}
        className="bg-blue-900 p-1 px-8 rounded-lg text-white "
      >
        Search Flight
      </button>
      <Modal
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        style={{ fontFamily: "Inter" }}
        className=""
        title="Booking Details"
        maskClosable={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="grid lg:grid-cols-3">
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Where From</h6>
            <h6>Colombo</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Where To</h6>
            <h6>Manila</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Where From</h6>
            <h6>1</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Adults</h6>
            <h6>0</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Childrens</h6>
            <h6>0</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Infants</h6>
            <h6>0</h6>
          </div>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Departure Date</h6>
            <h6>01-10-2023</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">retrun date</h6>
            <h6>05-10-2023</h6>
          </div>
        </div>
        <div className="mt-4">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{fontFamily: "Inter"}}
          >
            <Form.Item<FieldType>
              label="Name"
              name="name"
              rules={[
                { required: true, message: "Please input your name!" },
              ]}
              style={{fontFamily: "Inter"}}
            >
              <Input type="text" placeholder="Enter Your Name" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
              ]}
            >
              <Input type="email" placeholder="Enter Email Address"/>
            </Form.Item>
            <Form.Item<FieldType>
              label="Mobile"
              name="mobile"
              rules={[
                { required: true, message: "Please input your mobile number!" },
              ]}
            >
              <Input type="number" placeholder="Enter Mobile Number"/>
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
          <button className="bg-blue-900 p-1 px-4 rounded-lg text-white ">
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
};
