"use client";

import React, { useState } from "react";
import { Modal, Input, Checkbox, Form, Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

import EnquiryForm from "../forms/EnquiryForm";

interface ModalProps {}

export const SearchResultModal: React.FC<ModalProps> = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
      className="flex gap-3 text-violet-500 text-sm border border-violet-500 hover:bg-violet-500 hover:text-white px-4 py-2 rounded-lg"
        style={{ fontFamily: "Inter" }}
        onClick={showModal}
      >
        <InfoCircleOutlined className="mt-1" />
        Show Details
      </button>
      <Modal
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        style={{ fontFamily: "Inter" }}
        className=""
        centered
        maskClosable={false}
        open={isModalOpen}
        onCancel={handleCancel}
        closable={false}
        footer={null}
      >
        Modal
        <Button
        icon={<InfoCircleOutlined />}
        style={{ fontFamily: "Inter" }}
        onClick={handleCancel}
      >
        cancel
      </Button>
      </Modal>
    </div>
  );
};
