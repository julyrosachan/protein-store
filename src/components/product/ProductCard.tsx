import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";

import { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100">
        
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold text-white">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white transition hover:bg-neutral-950 hover:text-white"
        >
          <Heart className="h-4 w-4" />
        </button>

  <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100">
  <Link
    href={`/products/${product.slug}`}
    className="absolute inset-0"
  >
    <Image
      src={product.image}
      alt={product.name}
      fill
      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      className="object-cover transition duration-500 group-hover:scale-105"
    />
  </Link>
</div>
      </div>

      {/* Product Info */}
      <div className="mt-4">
        
        <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
          {product.category}
        </p>

        <Link href={`/products/${product.slug}`}>
          <h3 className="mt-1 text-base font-semibold text-neutral-950 transition hover:text-emerald-600">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <Star className="h-4 w-4 fill-current text-yellow-500" />

          <span className="text-sm font-medium">
            {product.rating}
          </span>

          <span className="text-sm text-neutral-400">
            / 5
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold text-neutral-950">
            ${product.price.toFixed(2)}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-neutral-400 line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>

      </div>
    </div>
  );
}