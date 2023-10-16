import "../globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pinoy Travels | Filipino travel agency in uk",
  description: "Pinoy Travels - Filipino travel agency in uk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.png"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon.png"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
          <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
          {children}
      </body>
    </html>
  );
}
