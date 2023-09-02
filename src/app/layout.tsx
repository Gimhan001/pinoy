import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/app/lib/AntdRegistry";
import Header from "@/app/components/header/page";
import Footer from "./components/footer/Footer";
import SocialMedia from "./components/buttons/float-button/SocialMedia";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pinoy | Home Away From Home",
  description: "Travel anywahere It is All About Travel ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
