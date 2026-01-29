import Link from "next/link";
import Image from "next/image";
import { vendors } from "@/data/vendors";
import Button from "./components/Button";

export default function HomePage() {
  return (
    <main className=" dark:bg-gray-900 dark:text-white">
      <section className="hero container w-full flex flex-col justify-center items-center p-6  h-[90vh] lg:px-44 text-center overflow-hidden mx-auto">
        <h1 className="lg:text-7xl text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Easily explore & shop products from multiple vendors with
          <span className="text-[#159C47]"> Padisquare</span>
        </h1>

        <p className="font-normal lg:text-2xl text-1xl text-center my-6 px-6">
          Padisquare brings the best vendors together in one place. Discover
          amazing products, browse easily, and shop with confidence.
        </p>
       <div>
        <Button children="Explore Vendors"   />
       </div>

      </section>

    <section className="bg-black py-14">
  {/* Section Header */}
  <div className="text-center mb-12" id="vendor">
    <h2 className="text-3xl lg:text-4xl font-bold text-[#159C47] mb-2">
      Start Shopping from the Best Vendors
    </h2>
    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
      Browse trusted stores and find amazing products on Padisquare
    </p>
  </div>

  {/* Vendor Grid */}
  <div className="grid md:grid-cols-3 justify-center items-center gap-8 lg:max-w-6xl mx-auto lg:px-4">
    {vendors.map((vendor) => (
      <Link
        key={vendor.slug}
        href={`/site/${vendor.slug}`}
        className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-2 block text-center"
      >
       <div className="h-52.5">
         <Image
          src={vendor.productImg}
          alt={vendor.name}
          width={200}
          height={20}
          className="mx-auto mb-4 rounded-full p-2"
        />
       </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {vendor.name}
        </h3>
        <p className="text-sm text-gray-500">
          Visit store →
        </p>
      </Link>
    ))}
  </div>
</section>


    </main>
  );
}
