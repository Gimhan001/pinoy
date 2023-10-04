"use client";

import React from "react";
import { Col, Row } from "antd";
import { Button, Form, Input } from "antd";
import toast from "react-hot-toast";

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

const email = async (data: FieldType) => {
  console.log(data)
  const response = await fetch('/api/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: data.email,
      fname: data.fname ,
      lname: data.lname ,
      subject: data.subject,
      message: data.message,
      mobile: data.mobile,
    }),
  });

  if(response.status === 200) {
    toast.success(`Hey ${data.fname} your message send Successfully..!`)
  }

  const details = await response.json();
  console.log(details);
};

const Contact = () => {
  return (
    <Form
      name="contact"
      initialValues={{ remember: true }}
      onFinish={email}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="group grid lg:grid-cols-2 gap-x-4">
        <Form.Item<FieldType>
          name="fname"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input className="inter" style={{fontFamily: "inter"}} placeholder="First Name" />
        </Form.Item>
        <Form.Item<FieldType>
          name="lname"
          rules={[{ required: false, message: "Please input your last name!" }]}
        >
          <Input placeholder="Last Name" style={{fontFamily: "inter"}} />
        </Form.Item>
      </div>
      <div className="container grid lg:grid-cols-2 gap-x-4">
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email Address" style={{fontFamily: "inter"}} type="email" />
        </Form.Item>
        <Form.Item<FieldType>
          name="mobile"
          rules={[{ required: false, message: "Please input your mobile!" }]}
        >
          <Input placeholder="Mobile Number" style={{fontFamily: "inter"}} type="number" maxLength={20} />
        </Form.Item>
      </div>
      <div className="container grid lg:grid-cols-1">
        <Form.Item<FieldType>
          name="subject"
          rules={[{ required: true, message: "Please input enter subject!" }]}
        >
          <Input placeholder="Subject" style={{fontFamily: "inter"}} type="text" />
        </Form.Item>
      </div>
      <div className="container grid lg:grid-cols-1">
        <Form.Item<FieldType>
          name="message"
          rules={[{ required: true, message: "Please enter Message!" }]}
        >
          <TextArea rows={4} placeholder="Message" style={{fontFamily: "inter"}}  />
        </Form.Item>
      </div>

      <div className="grid lg:grid-cols-6">
        <Form.Item>
          <button
            className="bg-blue-950 p-2 px-4 rounded-lg text-sm text-white hover:bg-blue-700"
            type="submit"
          >
            Send
          </button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default Contact;
