import React, { useState } from 'react';
import { Button, Modal } from 'antd';

export const BookingModal = (props: {initialdata: any}) => {
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
        <button onClick={showModal} className="bg-blue-500 p-1 px-8 rounded-full Poppins">
          Search
        </button>
        <Modal title="Booking Details" maskClosable={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className='grid lg:grid-cols-3'>
          <div className='group'>
            <h6 className='text-sm font-bold capitalize'>Where From</h6>
            <h6>{props.initialdata.from}</h6>
          </div>
          <div className='group'>
            <h6>Where From</h6>
            <h6>{props.initialdata.to}</h6>
          </div>
          <div className='group'>
            <h6>Where From</h6>
            <h6>{props.initialdata.classes}</h6>
          </div>
          <div className='group'>
            <h6>Where From</h6>
            <h6>{props.initialdata.adults}</h6>
          </div>
          <div className='group'>
            <h6>Where From</h6>
            <h6>{props.initialdata.children}</h6>
          </div>
          <div className='group'>
            <h6>Where From</h6>
            <h6>{props.initialdata.infants}</h6>
          </div>
        </div>
        <div className='grid lg:grid-cols-2'>
        <div className='group'>
            <h6>Where From</h6>
            <h6>{props.initialdata.departureDate}</h6>
          </div>
          <div className='group'>
            <h6>Where From</h6>
            <h6>{props.initialdata.returnDate}</h6>
          </div>
        </div>
      </Modal>
    </div>
  )
}
