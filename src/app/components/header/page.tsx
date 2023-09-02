"use client";

import Image from "next/image";
import Link from "next/link";
import navBrand from "@/app/assets/images/navBrand.png";

export default function Page() {
  return (
    <nav className="flex gap-3 w-full text-white p-4 sticky top-0 navBar z-40">
      <Link className="flex flex-center gap-2" href="/">
        <Image
          src={navBrand}
          alt="Pinoy"
          width={150}
          height={110}
          className=""
          priority
        />
      </Link>

      <div className="sm:flex hidden text-end ml-auto gap-3 md:gap-5 justify-center">
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
    </nav>
  );
}
