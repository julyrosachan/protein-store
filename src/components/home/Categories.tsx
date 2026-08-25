import Image from "next/image";
import Link from "next/link";
import { categories } from "../../data/categories";

export default function Categories() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-500">
              Shop by category
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              Find what your body needs
            </h2>
          </div>

          <Link
            href="/categories"
            className="hidden text-sm font-semibold text-neutral-900 transition hover:text-emerald-500 sm:block"
          >
            View all →
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-neutral-100"
            >
              <div className="relative aspect-square">
         <Image
  src={category.image}
  alt={category.name}
  fill
  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
  className="object-cover transition duration-500 group-hover:scale-105"
/>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Category Name */}
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="text-lg font-bold text-white">
                    {category.name}
                  </h3>

                  <span className="text-sm text-white/70">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}