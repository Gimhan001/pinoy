"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="footer p-4 mt-8 Poppins">
      <div className="container grid lg:grid-cols-4 mx-auto">
        <div className="p-2">
          <h2 className="text-lg font-bold mb-4 uppercase">Pinoy Travels</h2>
          <p className="text-sm">
            Is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </p>
        </div>
        <div className="p-2">
          <h2 className="text-lg font-bold uppercase mb-4">Contact</h2>
          <Link href="/about">About</Link>
          <br />
          <Link href="/contact">Contact</Link>
        </div>
        <div className="p-2">
          <h2 className="text-lg font-bold uppercase mb-4">Usefull Links</h2>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <br />
          <Link href="/terms-and-conditions">Terms And Condition</Link>
          <br />
          <Link href="/faq">FAQ</Link>
        </div>
        <div className="p-2">
          <h2 className="text-lg font-bold uppercase">Connect With Us</h2>
        </div>
      </div>
    </div>
  );
}
