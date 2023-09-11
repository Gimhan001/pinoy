"use client";

import Image from "next/image";
import Link from "next/link";
import navBrand from "@/app/assets/images/navBrand.png";
import { useState } from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link className="flex flex-center uppercase" href="/">
        Home
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link className="flex flex-center uppercase" href="/offers">
        Offers
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link className="flex flex-center uppercase" href="/about">
        About
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link className="flex flex-center uppercase" href="/contact">
        Conatct
      </Link>
    ),
  },
];

export default function Page() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <nav className="flex gap-3 w-full text-white p-4 sticky top-0 navBar z-40 lg:rounded-br-3xl lg:rounded-bl-3xl">
      <Link className="flex flex-center gap-2" href="/">
        <Image
          src={navBrand}
          alt="Pinoy"
          width={150}
          height={110}
          className="nav-brand"
          priority
        />
      </Link>

      <div className="sm:flex hidden text-end mx-auto gap-3 md:gap-5 justify-center">
        <Link className="group flex flex-center uppercase" href="/">
          Home
        </Link>
        <Link className="group flex flex-center uppercase" href="/offers">
          Offers
        </Link>
        <Link className="group flex flex-center uppercase" href="/about">
          About
        </Link>
        <Link className="group flex flex-center uppercase" href="/contact">
          Conatct
        </Link>
      </div>
      <div className="sm:flex hidden">
        <p>
          <small>
            Call Now
            <a className="ml-2" href="tel:+12345678">
              1-895-884-0175
            </a>
          </small>
        </p>
      </div>

      {/* Mobile Nav */}
      <div className="sm:hidden flex relative ml-auto">
        <div className="flex">
          <Dropdown className="" menu={{ items }}>
            <svg
              onClick={(e) => e.preventDefault()}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}
