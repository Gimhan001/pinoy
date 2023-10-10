'use client'
import { CaretRightOutlined } from '@ant-design/icons';
import type { CSSProperties } from 'react';
import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import Faqs from '@/app/utils/json/Faqs.json'

    
const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => {

        return Faqs.map((data) => {
        return (
            {
                key: data.key,
                label: data.lable,
                children: data.description,
                style: panelStyle
            }
        );
    });
    
    

    };


export default function faq() {

  const panelStyle: React.CSSProperties = {
    background: 'transparent',
    fontFamily: 'Inter',
  };
  return (
    <div className='mx-4 shadow-xl border bg-slate-50 rounded-lg p-4'>
        <Collapse
      bordered={false}
    //   defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      items={getItems(panelStyle)}
    />
    </div>
  )
}

