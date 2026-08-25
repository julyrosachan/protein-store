import Link from "next/link";

import { products } from "../../data/products";
import ProductCard from "../../components/product/ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-500">
              Featured products
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              Best sellers
            </h2>
          </div>

          <Link
            href="/shop"
            className="hidden text-sm font-semibold text-neutral-900 transition hover:text-emerald-500 sm:block"
          >
            View all →
          </Link>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}