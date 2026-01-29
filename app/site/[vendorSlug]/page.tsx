import { vendors } from "@/data/vendors";
import { products } from "@/data/products";
import ProductGrid from "./ProductGrid";
import { Metadata } from "next";
import Image from "next/image"; 


//  SEO METADATA  
export async function generateMetadata(
  { params }: { params: { vendorSlug: string } }
): Promise<Metadata> {

  const { vendorSlug } = await params;
  const vendor = vendors.find(v => v.slug === vendorSlug);

  if (!vendor) {
    return {
      title: "Vendor Not Found",
      description: "This vendor does not exist."
    };
  }

  return {
    title: `${vendor.name} Store`,
    description: `Shop quality products from ${vendor.name}.`
  };
} 

// PAGE 

export default async function VendorPage(
  { params }: { params: { vendorSlug: string } }
) {
  const { vendorSlug } = await params;

  const vendor = vendors.find(v => v.slug === vendorSlug);
  if (!vendor) return <div>Vendor not found</div>;

  const vendorProducts = products.filter(p => p.vendorSlug === vendor.slug);

  return (
<div className="lg:px-8 px-4 py-4 dark:text-white dark:bg-gray-900">
  {/* Hero Section */}
  <div className="flex justify-between lg:px-10 px-4 mx-auto"> 
    <Image
        src={vendor.logo}
        alt={`${vendor.name} Logo`}
        width={100}
        height={110}
        className=" object-contain"
      />
        <a href="/" className="flex  items-center">
         <span className="mb-2 text-2xl">←</span> 
         <span>back </span>
    </a>
  </div>
  <section
    style={{ backgroundImage: `url(${vendor.heroBanner})` }}
    className="h-[60vh] bg-contain bg-no-repeat bg-center relative flex items-center justify-center "
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/70"></div>

    {/* Text (above overlay) */}
    <h1 className="relative z-10 text-4xl lg:text-5xl font-bold text-white text-center px-4">
      {vendor.name}
    </h1>
  </section>
 

  {/* Product Grid */}
  <div className="my-6">
    <ProductGrid products={vendorProducts} />
  </div>
</div>


  );
}
