import React from "react";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCircleCheck,
  faCircleInfo,
  faExclamationCircle,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Divider } from "antd";

import {
  InfoCircleOutlined,
  EditOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { SearchResultModal } from "../components/modals/SearchResultModal";
import SearchSteps from "../components/steps/SearchSteps";
import SearchResultCard from "../components/card/SearchResultCard";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function page() {
  return (
    <div className={inter.className}>
      <div className="container mx-auto px-4 mt-12">
        <div className="px-32 my-8 sm:grid hidden">
          <SearchSteps status={"result"} />
        </div>
        <div className="mx-auto px-4 py-6 grid lg:grid-cols-5 gap-3 lg:place-items-center shadow-lg  bg-blue-100 rounded-lg border sm:ps-4">
          <div className="group flex gap-3 border-b-2  border-b-blue-500 py-2">
            <h6 className="text-base font-bold mx-auto">London</h6>
            <FontAwesomeIcon icon={faArrowRight} className="pt-1 mx-auto" />
            <h6 className="text-base font-bold mx-auto">Manila</h6>
          </div>
          <div className="group flex gap-3 border-b-2  border-b-blue-500 py-2">
            <h6 className="text-base font-bold mx-auto">2023-10-11</h6> |{" "}
            <h6 className="text-base font-bold mx-auto">2023-10-11</h6>
          </div>
          <div className="group flex gap-3 border-b-2  border-b-blue-500 py-2">
            <h6 className="text-base font-bold mx-auto">Adults 1</h6>
            <h6 className="text-base font-bold mx-auto">Children 1</h6>
            <h6 className="text-base font-bold mx-auto">Infants 1</h6>
          </div>
          <div className="group border-b-2  border-b-blue-500 py-2">
            <h6 className="text-base font-bold text-center">Economy</h6>
          </div>
          <div className="group">
            <Button
              type="primary"
              style={{ fontFamily: "Inter" }}
              icon={<EditOutlined />}
            >
              Modify Search
            </Button>
          </div>
        </div>

        <div className="">
          <SearchResultCard />
        </div>
      </div>
    </div>
  );
}
