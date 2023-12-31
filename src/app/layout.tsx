import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Script from "next/script";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/app/lib/AntdRegistry";
import Header from "@/app/components/header/page";
import Footer from "./components/footer/Footer";
import SocialMedia from "./components/buttons/float-button/SocialMedia";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pinoy Travels | Philippines travel agents in uk",
  description:
    "Planning your trip back to Philippines from the UK? We're the UK's top Filipino travel agency, proudly owned by Aero Travels. Book now!",
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

        <Script id="google-analytics">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PVR9M5TZ');
            `}
        </Script>

      </head>
      <body className={inter.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PVR9M5TZ"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <StyledComponentsRegistry>
          <Header />
          <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
          {children}
          <SocialMedia />
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
