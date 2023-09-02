"use client";

import React from "react";
import { Col, Row } from "antd";
import { Button, Form, Input } from "antd";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const { TextArea } = Input;

type FieldType = {
  fname?: string;
  lname?: string;
  email?: string;
  mobile?: string;
  subject?: string;
  message?: string;
};

const Contact = () => {
  return (
    <Form
      name="contact"
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
          <Input className="Poppins" placeholder="First Name"/>
        </Form.Item>
        <Form.Item<FieldType>
          name="lname"
          rules={[{ required: false, message: "Please input your last name!" }]}
        >
          <Input placeholder="Last Name"/>
        </Form.Item>
      </div>
      <div className="container grid lg:grid-cols-2 gap-x-4">
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email Address" type="email"/>
        </Form.Item>
        <Form.Item<FieldType>
          name="mobile"
          rules={[{ required: false, message: "Please input your mobile!" }]}
        >
          <Input placeholder="Mobile Number" type="number" />
        </Form.Item>
      </div>
      <div className="container grid lg:grid-cols-1">
        <Form.Item<FieldType>
          name="subject"
          rules={[{ required: true, message: "Please input enter subject!" }]}
        >
          <Input placeholder="Subject" type="text" />
        </Form.Item>
      </div>
      <div className="container grid lg:grid-cols-1">
        <Form.Item<FieldType>
          name="message"
          rules={[{ required: true, message: "Please enter Message!" }]}
        >
          <TextArea rows={4} placeholder="Message" maxLength={6} />
        </Form.Item>
      </div>

      <div className="grid lg:grid-cols-6">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default Contact;
