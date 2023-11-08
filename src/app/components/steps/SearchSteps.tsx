import React from "react";
import {
  FileSearchOutlined,
  SmileOutlined,
  UnorderedListOutlined,
  SearchOutlined,
  EuroOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import { title } from "process";

interface SearchResultProps {
  status: any;
};

const SearchSteps: React.FC<SearchResultProps> = ({ status }) => {
  return (
    <Steps
      className="text-base font-bold"
      style={{ fontFamily: "Inter" }}
      items={[
        {
          title: "Search",
          status: "finish",
          icon: <SearchOutlined />,
        },
        {
          title: "Search Result",
          status: (status == "result") ? "process"  : "finish",
          icon: <FileSearchOutlined />,
        },
        {
          title: "Travel Details",
          status: ((status == "details") ? "process"  : undefined) || ((status == "result") ? "wait" : undefined),
          icon: <UnorderedListOutlined />,
        },
        {
          title: "Payment",
          status: "wait",
          icon: <EuroOutlined />,
        },
        {
          title: "Done",
          status: "wait",
          icon: <SmileOutlined />,
        },
      ]}
    />
  );
};

export default SearchSteps;
