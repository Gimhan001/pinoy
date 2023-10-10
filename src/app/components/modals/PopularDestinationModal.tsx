"use client";

import React, { useState } from "react";
import { Modal, Button } from "antd";
import EnquiryForm from "../forms/EnquiryForm";

interface ModalProps {
  id: number;
  title: string;
  tripType: string;
  from: string;
  to: string;
  departureAirPortCode: string;
  destinationAirportCode: string;
  departureDate: string;
  returnsDate: string;
  cabinClass: string;
  person: string;
  price: string;
  airLine: string;
}


export const PopularDestinationModal: React.FC<ModalProps> = ({
  id,
  title,
  tripType,
  from,
  to,
  departureAirPortCode,
  destinationAirportCode,
  departureDate,
  returnsDate,
  person,
  cabinClass,
  price,
  airLine,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button
        type="primary"
        style={{ fontFamily: "inter" }}
        onClick={showModal}
      >
        Enquire Now
      </Button>
      <Modal
        key={id}
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
        <div className="grid mb-4">
          <div className="group navBar p-2">
          <h4 className="text-lg text-center font-bold text-white">Offers Enquiry</h4>
          </div>
        </div>

        <div className="grid grid-cols-2 mx-auto gap-3 mb-4">
          <div className="group">
            <h6 className="text-sm font-bold capitalize">Departure Airport</h6>
            <h6>{departureAirPortCode}</h6>
          </div>
          <div className="group">
            <h6 className="text-sm font-bold capitalize">
              Destination Airport
            </h6>
            <h6>{destinationAirportCode}</h6>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 mx-auto gap-3">
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
            <h6 className="text-sm font-bold capitalize">Trip Type</h6>
            <h6>{tripType}</h6>
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
          <div className="mb-4">
            <h5 className="text-start test-base font-bold text-black">Passenger Details</h5>
          </div>
          <EnquiryForm
            title={title}
            from={from}
            to={to}
            formName={id}
            modelClose={handleCancel}
            departureAirPort={departureAirPortCode}
            destinationAirPort={destinationAirportCode}
            departureDate={departureDate}
            returnsDate={returnsDate}
            price={price}
            tripType={tripType}
            cabinClass={cabinClass}
            airLine={airLine}
          />
        </div>
      </Modal>
    </div>
  );
};
