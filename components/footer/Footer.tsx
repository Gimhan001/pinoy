"use client";

import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

import payment from "assets/images/payment.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer p-4 mt-8">
      <div className="container grid lg:grid-cols-4 mx-auto">
        <div className="p-2">
          <h2 className="text-lg font-bold mb-4 uppercase">Pinoy Travels</h2>
          <p className="text-sm">
            Pinoy Travel is your trusted Philippines travel agent dedicated to
            bringing you the most affordable flights and holidays to the
            Philippines.
          </p>
        </div>
        <div className="p-2">
          <h2 className="text-lg font-bold uppercase mb-4">Contact</h2>
          <Link className="link" href="/about" as="/about">
            About
          </Link>
          <br />
          <Link className="link" href="/contact" as="/contact">
            Contact
          </Link>
        </div>
        <div className="p-2">
          <h2 className="text-lg font-bold uppercase mb-4">Quick Links</h2>
          <Link className="link" href="/privacy-policy" as="/privacy-policy">
            Privacy Policy
          </Link>
          <br />
          <Link
            className="link"
            href="/terms-and-conditions"
            as="/terms-and-conditions"
          >
            Terms And Condition
          </Link>
          <br />
          <Link className="link" href="/faq" as="/faq">
            FAQ
          </Link>
        </div>
        <div className="p-2">
          <h2 className="text-lg font-bold uppercase mb-4">Connect With Us</h2>
          <div className="mb-3">
            <Link
              href="https://www.facebook.com/pinoytravels.uk/"
              target="_blank"
            >
              <FontAwesomeIcon
                className="pr-3 link"
                size="lg"
                icon={faFacebook}
              />
            </Link>
            <Link
              href="https://www.instagram.com/pinoy.travels.uk/"
              target="_blank"
            >
              <FontAwesomeIcon
                className="pr-3 link"
                size="lg"
                icon={faInstagram}
              />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCEVVAsK2H6g4q_WqMjphf4w"
              target="_blank"
            >
              <FontAwesomeIcon
                className="pr-3 link"
                size="lg"
                icon={faYoutube}
              />
            </Link>
            <Link href="https://www.tiktok.com/@pinoy.travels" target="_blank">
              <FontAwesomeIcon
                className="pr-3 link"
                size="lg"
                icon={faTiktok}
              />
            </Link>
          </div>
          <div>
            <p className="text-base text-white font-bold">We Accept</p>
            <Image
              className=""
              src={payment}
              alt="payment"
              width={180}
              height={150}
              style={{ width: "170px", height: "40px" }}
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs">
          &copy; 2023 <strong>Pinoy Travels Limited</strong>. All Rights
          Reserved.
        </p>
        <p className="text-xs">
          A Subsidiary of{" "}
          <a href="https://aerotravels.co.uk" target="_blank">
            <strong>Aero Travels Group Limited</strong>
          </a>
          .
        </p>
      </div>
    </div>
  );
}
