import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from '@/app/lib/AntdRegistry';
import Header from "@/app/components/header/page";

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
      <body className={inter.className}>
      <StyledComponentsRegistry>
        <Header />
        {children}
      </StyledComponentsRegistry>
      </body>
    </html>
  );
}
