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
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
            gtag('event', 'conversion',{" "}
          {"send_to": "AW-11358860077/RQCSCILlxu8YEK3mqagq"});
            `,
          }}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11358860077"
        ></script>
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11358860077');
            `,
          }}
        />

        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PVR9M5TZ');
            `,
          }}
        />

        {/* <script type="application/ld+json">{`
                "@context": "https://schema.org",
                "@type": "TravelAgency",
                "name":  "Pinoy Travels",
                "image": "https://pinoytravels.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnavBrand.75e2b4b0.png&w=96&q=75",
                "@id": "https://pinoytravels.uk/",
                "url": "https://pinoytravels.uk/",
                "telephone": "0203 838 2020",
                "priceRange": "££",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "4 Byfield Court Station Road,West Horndon",
                  "addressLocality": "Brentwood,England",
                  "postalCode": "CM13 3TZ",
                  "addressCountry": "GB"
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "08:30",
                  "closes":"10:00"
                },
                "sameAs": [
                  "https://www.facebook.com/pinoytravels.uk",
                  "https://www.instagram.com/pinoy.travels.uk/",
                  "https://www.youtube.com/channel/UCEVVAsK2H6g4q_WqMjphf4w",
		              "https://www.pinterest.com/pinoytravelsdata/",
		              "http://www.tiktok.com/@pinoy.travels",
                ]`}</script>

        <script type="application/ld+json">
          {`
            "@context": "http://schema.org",
            "@type": "WebSite",
            "name":"Pinoy Travels",
            "url": "https://pinoytravels.uk/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://pinoytravels.uk/search?q={search_term}",
              "query-input": "required name=search_term"
            }
          `}
        </script> */}

        {/* <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PVR9M5TZ');</script> */}
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
