import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/app/lib/AntdRegistry";
import Header from "@/app/components/header/page";
import Footer from "./components/footer/Footer";
import SocialMedia from "./components/buttons/float-button/SocialMedia";

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
          href="./fav.ico"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="./fav.ico"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <SocialMedia />
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
