"use client";

import { CaretDownOutlined } from "@ant-design/icons";
import type { CSSProperties } from "react";
import React from "react";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";
import SearchResultItenary from "../layouts/SearchResultItenary";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: (
      <h4 className="text-base font-bold uppercase text-black">
        Flight Details
      </h4>
    ),
    children: <SearchResultItenary />,
    style: panelStyle,
  },
];

const App: React.FC = () => {
  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    // background: "gray",
    borderRadius: "10px",
    fontFamily: "Inter",
    borderTop: "10px",
    borderTopColor: "blue",
    border: "none",
  };

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={[]}
      //   style={{ background: token.colorBgContainer }}
      items={getItems(panelStyle)}
      expandIcon={({ isActive }) => (
        <CaretDownOutlined rotate={isActive ? 180 : 0} />
      )}
      expandIconPosition={"end"}
    />
  );
};

export default App;
