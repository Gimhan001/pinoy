"use client";

import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import toast from "react-hot-toast";


const { TextArea } = Input;

type FieldType = {
  fname?: string;
  lname?: string;
  email?: string;
  mobile?: number;
  subject?: string;
  message?: string;
};


const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const onFinish = async (data: FieldType) => {
    setIsLoading(true);
    console.log(data)
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: (data.email? data.email : ''),
        fname: (data.fname? data.fname : '') ,
        lname: (data.lname? data.lname : '') ,
        subject: (data.subject? data.subject : ''),
        message: (data.message? data.message : ''),
        mobile: (data.mobile? data.mobile : ''),
      }),
    });
  
    if(response.status === 200) {
      toast.success(`Hey ${data.fname} your message send successfully..!`)
      setIsLoading(false);
    } else {
      toast.error("Something went wrong.!")
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
      name="contactForm"
      initialValues={{ remember: false }}
      onFinish={onFinish}
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
          rules={[{ required: true, message: "Please input your mobile!" }]}
        >
          <Input placeholder="Mobile Number" style={{fontFamily: "inter"}} type="number" minLength={10} maxLength={11} />
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
          <Button
            className=""
            style={{fontFamily: "inter"}}
            type="primary"
            htmlType="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default Contact;
