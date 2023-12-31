import Image from "next/image";
import Banner from "@/app/assets/images/home-n.webp";
import AgentsCarousel from "@/app/components/carousel/AgentCarousel";
import RoundTripCard from "@/app/components/card/RoundTripCard";
import PopularDestinationsCard from "@/app/components/card/PopularDestinationsCard";
import SearchForm from "@/app/components/forms/SearchForm";
import { Inter } from "next/font/google";
import PopularDestination from "@/app/utils/json/PopularDestination.json";
import Link from "next/link";
import chm from "@/app/assets/images/chm.png";
import atol from "@/app/assets/images/atol.png"
import { Button } from "antd";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Image
        className="lg:-mt-6"
        src={Banner}
        alt="Pinoy"
        width={0}
        height={0}
        placeholder="blur"
        priority
      />

      <div className="scroll-smooth bg-slate-100 lg:mb-10 sm:p-4 rounded-br-3xl rounded-bl-3xl">
        <div className="container z-40 lg:p-10 mx-auto">
          <SearchForm />
        </div>
      </div>

      {/* <div className="scroll-smooth mx-auto my-6">
        <div className="container mx-auto">
          <div className="grid justify-items-center">
            <div
              className="trustpilot-widget"
              data-locale="en-GB"
              data-template-id="5419b6a8b0d04a076446a9ad"
              data-businessunit-id="651bc60f16fd9163196492a9"
              data-style-height="40px"
              data-style-width="100%"
              data-theme="light"
              data-min-review-count="10"
              data-without-reviews-preferred-string-id="1"
              data-style-alignment="center"
            >
              <a
                href="https://uk.trustpilot.com/review/pinoytravels.uk"
                target="_blank"
                rel="noopener"
              >
                Trustpilot
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <div className="scroll-smooth mx-auto">
        <div className="scroll-smooth bg-slate-100 p-10 rounded-3xl h-full">
          <div className="container mx-auto">
            <h4 className="text-2xl text-zinc-900 font-bold capitalize mb-4">
              Book with confidence
            </h4>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="group border p-4 rounded-lg bg-rose-100 shadow-md h-24 w-full">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 fill-blue-900"
                  >
                    <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                  </svg>
                  <h5 className="text-sm font-bold capitalize mb-2">
                    Expert Agents
                  </h5>
                </div>
                <div className="ms-8">
                  <p className="text-xs text-blue-700">
                    Get personalized assistance from our experts with 11+ years
                    of experience.
                  </p>
                </div>
              </div>
              <div className="group border p-4 rounded-lg bg-blue-100 shadow-md h-24 w-full">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 fill-blue-900"
                  >
                    <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                  </svg>

                  <h5 className="text-sm font-bold capitalize mb-2">
                    No Hidden Charges
                  </h5>
                </div>
                <div className="ms-8">
                  <p className="text-xs text-blue-700">
                    Cost-effective, affordable and completely transparent with
                    costs.
                  </p>
                </div>
              </div>
              <div className="group border p-4 rounded-lg bg-amber-100 shadow-md h-24 w-full">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 fill-blue-900"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <h5 className="text-sm font-bold capitalize mb-2">
                    Installments
                  </h5>
                </div>
                <div className="ms-8">
                  <p className="text-xs text-blue-700">
                    Book now, pay later-secure your trip with low deposits and
                    easy installments
                  </p>
                </div>
              </div>
              <div className="group border p-4 rounded-lg  bg-green-100 shadow-md h-24 w-full">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 fill-blue-900"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.484 2.17a.75.75 0 011.032 0 11.209 11.209 0 007.877 3.08.75.75 0 01.722.515 12.74 12.74 0 01.635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 01-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 01.722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM12 15a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75H12z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <h5 className="text-sm font-bold capitalize mb-2">
                    Money back guaranteed
                  </h5>
                </div>
                <div className="ms-8">
                  <p className="text-xs text-blue-700">
                    We ensure full refunds in case of cancellations and other
                    issues
                  </p>
                </div>
              </div>
              <div className="group border p-4 rounded-lg bg-fuchsia-100 shadow-md h-24 w-full">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 fill-blue-900"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <h5 className="text-sm font-bold capitalize mb-2">
                    ATOL Protected
                  </h5>
                </div>
                <div className="ms-8">
                  <p className="text-xs text-blue-700">
                    Financial protection for all your bookings with ATOL.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-smooth round-trip mt-6 bg-slate-100 p-10 rounded-3xl h-full">
          <div className="container mx-auto">
            <h4 className="text-2xl text-zinc-900  font-bold capitalize mb-8 ">
              Do not Miss These Round Trip Fares
            </h4>
            <div>
              <RoundTripCard />
            </div>
          </div>
        </div>

        <div className="agent-carousel mt-6 bg-slate-100 p-10 rounded-3xl h-full">
          <div className="container mx-auto">
            <h4 className="text-2xl font-bold capitalize mb-4 text-zinc-900 ">
              our agents
            </h4>
            <div className="mx-auto mt-4 px-4">
              <AgentsCarousel />
            </div>
          </div>

          {/* <div className="bg-slate-100 mt-4 rounded-3xl">
            <div className="container mx-auto">
                <h4 className="text-base font-bold">
                  Why to Book with Call Center
                </h4>
                <p className="text-xs font-normal capitalize text-blue-700">
                  Discover the beauty of pilipines
                </p>
              <div className="grid lg:grid-cols-4 mt-8 gap-3">
                <div className="group border p-4 rounded-lg bg-gradient-to-r from-blue-200 from-10% via-violet-200 via-30% to-blue-200 to-90% shadow-md">
                  <div className="flex gap-3">
                    <Image
                      src={Fram1}
                      width={50}
                      height={50}
                      alt="Travel Experts"
                      priority
                    />
                    <div className="text-blue-700 mt-2">
                      <p className="text-sm capitalize">
                        Expert guidance by our
                      </p>
                      <p className="text-sm font-bold capitalize">
                        Travel experts
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group border p-4 rounded-lg bg-gradient-to-r from-blue-200 from-10% via-violet-200 via-30% to-blue-200 to-90% shadow-md">
                  <div className="flex gap-3">
                    <Image
                      src={Fram2}
                      width={50}
                      height={50}
                      alt="Travel Experts"
                      priority
                    />
                    <div className="text-blue-700 mt-2">
                      <p className="text-sm capitalize">Immediate</p>
                      <p className="text-sm font-bold capitalize">
                        booking confirmation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group border p-4 rounded-lg bg-gradient-to-r from-blue-200 from-10% via-violet-200 via-30% to-blue-200 to-90% shadow-md">
                  <div className="flex gap-3">
                    <Image
                      src={Fram3}
                      width={50}
                      height={50}
                      alt="Travel Experts"
                      priority
                    />
                    <div className="text-blue-700 mt-4">
                      <p className="text-sm capitalize">24-hour</p>
                      <p className="text-sm font-bold capitalize">
                        cancellation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group border p-4 rounded-lg bg-gradient-to-r from-blue-200 from-10% via-violet-200 via-30% to-blue-200 to-90% shadow-md">
                  <div className="flex gap-3">
                    <Image
                      src={Fram4}
                      width={50}
                      height={50}
                      alt="Travel Experts"
                      priority
                    />
                    <div className="text-blue-700 mt-4">
                      <p className="text-sm capitalize">Flexible payment</p>
                      <p className="text-sm font-bold capitalize">plans</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="scroll-smooth mt-6 bg-slate-100 p-10 rounded-3xl">
          <div className="container mx-auto">
            <h4 className="text-2xl font-bold capitalize mb-8 text-zinc-900 ">
              Popular destinations
            </h4>
            <div className="grid lg:grid-cols-3 gap-3 lg:gap-12">
              {PopularDestination.map((id) => {
                if (id.id < 4) {
                  return (
                    <div className="group rounded-3xl" key={id.id}>
                      <PopularDestinationsCard
                        id={id.id}
                        destination={id.destination}
                        image={id.cardImage}
                        url={id.url}
                      />
                    </div>
                  );
                }
              })}
            </div>
            <div className="grid justify-items-center lg:justify-items-end">
              <Link href="/popular-destinations/">
                <Button type="primary" style={{ fontFamily: "inter" }}>
                  Show More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="scroll-smooth mt-6 bg-slate-100 p-10 rounded-3xl">
          <div className="flex gap-4 lg:gap-8 justify-center sm:flex-row">
            <div className="group ">
              <a
                href="https://find-and-update.company-information.service.gov.uk/company/14920973"
                target="_blank"
              >
                <Image src={chm} alt="company house" width={100} height={100} />
              </a>
              <p className="text-xs uppercase">reg no: 14920973</p>
            </div>
            <div className="group ">
              <a
                href="/atolpdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image className="mt-3" src={atol} alt="atol-12116" width={80} height={80} />
              </a>
            </div>
          </div>
        </div>

        <h4 className="container mx-auto uppercase text-center text-blue-600 font-bold text-2xl mt-6">
          Call now on <br className="lg:hidden" />
          <a
            className="text-red-500 hover:text-amber-600"
            href="tel:+442038382020"
          >
            <span className="underline">0203 838 2020</span>
          </a>{" "}
          <br className="lg:hidden" /> to get in touch with us
        </h4>
      </div>
    </main>
  );
}
