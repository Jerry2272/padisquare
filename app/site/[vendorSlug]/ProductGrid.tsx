"use client"
import Image from "next/image";
import { useState , useEffect  } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  createdAt: string;
  imgUrl: any
}

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("recent");
  const [page, setPage] = useState(1);

  const perPage = 4; // products per page

  // Filter by search
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort products
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    if (sort === "recent") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sorted.length / perPage);
  const paginated = sorted.slice((page - 1) * perPage, page * perPage);
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    try {
      setTimeout(() => {
        setData(products);
        setLoading(false);
      }, 800);  
    } catch (err) {
      setError("Failed to load products.");
      setLoading(false);
    }
  }, [products]);

  // LOADING STATE 
  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="animate-pulse bg-gray-200 h-48 rounded-lg" />
        ))}
      </div>
    );
  }

  // ERROR STATE  
  if (error) {
    return (
      <div className="text-center py-12 text-red-500 font-medium">
        {error}
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 w-full rounded"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded w-full sm:w-48"
        >
          <option value="recent">Most Recent</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>
      </div>

      {paginated.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
  {paginated.map((product) => (
    <div
      key={product.id}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
    >
      {/* Image Area */}
      <div className="bg-gray-50 h-52 flex items-center justify-center overflow-hidden">
        <Image
          src={product.imgUrl}
          alt={product.name}
          width={180}
          height={180}
          className="object-contain group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="text-md font-semibold text-gray-800 line-clamp-2 min-h-[48px]">
          {product.name}
        </h3>

        <p className="text-[#159C47] font-bold text-lg mt-2">
          ₦{product.price}
        </p>

        {/* Action Button */}
      </div>
    </div>
  ))}
</div>

      )}

      {/* Pagination Buttons */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={() => setPage(p => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="border px-4 py-2 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage(p => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="border px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
