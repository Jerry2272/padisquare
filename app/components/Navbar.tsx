import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md lg:px-10 px-4 py-2 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-[#159C47]">
        <Image
          src="/padisquare.svg"
          alt="Padisquare Logo"
          width={200}
          height={50}
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6">
        <Link
          href="/"
          className=" hover:text-[#159C47] text-gray-800 font-medium text-lg"
        >
          Home
        </Link>
        <Link
          href="#vendor"
          className=" hover:text-[#159C47] text-gray-800 font-medium text-lg"
        >
          Vendors
        </Link>
      </div>
    </nav>
  );
}
