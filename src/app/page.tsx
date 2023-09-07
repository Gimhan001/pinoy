import Image from "next/image";
import Banner from "@/app/assets/images/banner.png";
import AgentCard from "./components/card/AgentCard";
import AgentsCarousel from "./components/carousel/AgentCarousel";
import Fram1 from "@/app/assets/images/Frame1.png";
import Fram2 from "@/app/assets/images/Frame2.png";
import Fram3 from "@/app/assets/images/Frame3.png";
import Fram4 from "@/app/assets/images/Frame4.png";
import SocialMedia from "./components/buttons/float-button/SocialMedia";
import OffersCard from "./components/card/OffersCard";
import RoundTripCard from "./components/card/RoundTripCard";
import Manila from "@/app/assets/images/manila.jpg";
import PopularDestinations from "./components/card/PopularDestinationsCard";
import PopularDestination from "@/app/utils/json/PopularDestination.json";
import BookingForm from "./components/forms/BookingForm";

export default function Home() {
  return (
    <main className="">
      <Image
        src={Banner}
        alt="Pinoy"
        // width={1500}
        priority
      />

      <div className="container mx-auto Poppins px-4 lg:-mt-64 lg:mb-24 z-40">
      <BookingForm />
      </div>



      <div className="container mx-auto px-4 mt-8 Poppins">
        <div className="">
          <h4 className="text-2xl font-bold capitalize">
            Book with confidence
          </h4>
          <div className="grid lg:grid-cols-3 p-4 gap-3">
            <div className="group mt-4">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 fill-blue-900"
                >
                  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                </svg>
                <h5 className="text-lg font-bold capitalize mb-2">
                  get great deils
                </h5>
              </div>
              <div>
                <p className="">Choose from 500+ airlines for low airfares.</p>
              </div>
            </div>
            <div className="group mt-4">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 fill-blue-900"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0 01-.152 1.485h-1.918l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 0118.75 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 01-.262 1.453h-8.37a.75.75 0 01-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 015.25 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84L4.168 6.241H2.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75zm4.878 13.543l1.872-7.662 1.872 7.662h-3.744zm-9.756 0L5.25 8.131l-1.872 7.662h3.744z"
                    clipRule="evenodd"
                  />
                </svg>

                <h5 className="text-lg font-bold capitalize mb-2">
                  Price Match Promise
                </h5>
              </div>
              <div>
                <p>Find low prices to destinations worldwide.</p>
              </div>
            </div>
            <div className="group mt-4">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 fill-blue-900"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clipRule="evenodd"
                  />
                </svg>

                <h5 className="text-lg font-bold capitalize mb-2">
                  Easy Cancellations with CheapOair
                </h5>
              </div>
              <div>
                <p>Convenient self-service options available online.</p>
              </div>
            </div>
            <div className="group mt-4">
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

                <h5 className="text-lg font-bold capitalize mb-2">
                  Expert Guidance
                </h5>
              </div>
              <div>
                <p>Get personalized assistance from our travel experts.</p>
              </div>
            </div>
            <div className="group mt-4">
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

                <h5 className="text-lg font-bold capitalize mb-2">
                  Trusted and Qualified
                </h5>
              </div>
              <div>
                <p>
                  Over a decade of experience and millions of tickets sold every
                  year.
                </p>
              </div>
            </div>
            <div className="group mt-4">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 fill-blue-900"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z"
                    clipRule="evenodd"
                  />
                </svg>

                <h5 className="text-lg font-bold capitalize mb-2">
                  App Benefits
                </h5>
              </div>
              <div>
                <p>Earn 2x points booking through our app.</p>
              </div>
            </div>
            <div className="group mt-4">
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

                <h5 className="text-lg font-bold capitalize mb-2">
                  ATOL Protected
                </h5>
              </div>
              <div>
                <p>
                  All of the flights and flight-inclusive holidays on this
                  website are financially protected
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="round-trip mt-8">
          <h4 className="text-2xl font-bold capitalize mb-8 ">
            Do not Miss These Round Trip Fares
          </h4>
          <div>
            <RoundTripCard />
          </div>
          <p className="mt-4 text-xs italic px-4">
            * All fares above were last found on: Apr 30, 2023 at 2:25 PM. Fares
            are one way or round trip as indicated above. Fares incl. all fuel
            surcharges, taxes and fees and our service fees. Displayed fares are
            based on historical data, are subject to change and cannot be
            guaranteed at the time of booking. See all booking terms and
            conditions.
          </p>
        </div>

        <div className="agent-carousel mt-16 ">
          <h4 className="text-2xl font-bold capitalize mb-4">our agents</h4>
          <p className="pb-4 pl-4">
            Call us 24/7 at{" "}
            <a href="tel:18958840175">
              <span className="underline italic">1-895-884-0175</span>
            </a>{" "}
            or get in touch with Homies
          </p>
          <div className="mx-auto mt-4">
            <AgentsCarousel />
          </div>

          <div className="mt-8">
            <h4 className="text-base font-bold">
              Why to Book with Call Center
            </h4>
            <p className="text-xs font-normal capitalize">
              Discover the beauty of pilipines
            </p>
          </div>
          <div className="grid lg:grid-cols-4 mt-8 gap-3">
            <div className="group rounded-lg border shadow-lg px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-blue-800 hover:bg-gray-100/30">
              <div className="flex">
                <Image
                  src={Fram1}
                  width={50}
                  height={50}
                  alt="Travel Experts"
                  priority
                />
                <div>
                  <p className="text-sm capitalize">Expert guidance by our</p>
                  <p className="text-sm font-bold capitalize">Travel experts</p>
                </div>
              </div>
            </div>
            <div className="group rounded-lg border shadow-lg px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-blue-800 hover:bg-gray-100/30">
              <div className="flex">
                <Image
                  src={Fram2}
                  width={50}
                  height={50}
                  alt="Travel Experts"
                  priority
                />
                <div>
                  <p className="text-sm capitalize">Immediate</p>
                  <p className="text-sm font-bold capitalize">
                    booking confirmation
                  </p>
                </div>
              </div>
            </div>
            <div className="group rounded-lg border shadow-lg px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-blue-800 hover:bg-gray-100/30">
              <div className="flex">
                <Image
                  src={Fram3}
                  width={50}
                  height={50}
                  alt="Travel Experts"
                  priority
                />
                <div>
                  <p className="text-sm capitalize">24-hour</p>
                  <p className="text-sm font-bold capitalize">cancellation</p>
                </div>
              </div>
            </div>
            <div className="group rounded-lg border shadow-lg px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-blue-800 hover:bg-gray-100/30">
              <div className="flex">
                <Image
                  src={Fram4}
                  width={50}
                  height={50}
                  alt="Travel Experts"
                  priority
                />
                <div>
                  <p className="text-sm capitalize">Flexible payment</p>
                  <p className="text-sm font-bold capitalize">plans</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 ">
          <h4 className="text-2xl font-bold capitalize mb-8">
            Popular destinations
          </h4>
          <div className="grid lg:grid-cols-4 gap-5 place-items-center px-4">
                  <PopularDestinations />
          </div>
        </div>
      </div>

      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed flex w-full justify-start border-b border-gray-400 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
