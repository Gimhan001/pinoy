import Image from "next/image";
import Link from "next/link";
import navBrand from "@/app/assets/images/navBrand.png";

export default function Page() {
  return (
    <nav className="flex flex-between gap-3 w-full text-white text-right p-4 sticky top-0 navBar">
      <Link className="flex flex-center gap-2" href="/">
        <Image
          src={navBrand}
          alt="Pinoy"
          width={120}
          height={80}
          className=""
        />
      </Link>
      <Link className="flex flex-center gap-2" href="/">
        Home
      </Link>
      <Link className="flex flex-center gap-2" href="/offers">Offers</Link>
      <Link className="flex flex-center gap-2" href="/about">About</Link>
      <Link className="flex flex-center gap-2" href="/contact">Conatct</Link>
    </nav>
  );
}
