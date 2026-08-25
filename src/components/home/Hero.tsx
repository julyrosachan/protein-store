import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Truck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 lg:flex-row lg:py-28">
        
        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 self-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 lg:self-start">
            <Zap className="h-4 w-4" />
            <span>Premium Sports Nutrition</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Fuel Your Body.
            <span className="block text-emerald-500">
              Build Your Best Self.
            </span>
          </h1>

          <p className="text-lg leading-8 text-neutral-400">
            Premium protein, creatine, collagen and supplements
            designed to support your everyday performance.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-emerald-400"
            >
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/categories"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-700 px-6 py-3.5 text-sm font-semibold transition hover:bg-neutral-800"
            >
              Explore Categories
            </Link>

          </div>

          {/* Benefits */}
          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-neutral-800 pt-6 text-xs text-neutral-400">
            
            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <ShieldCheck className="h-5 w-5 text-emerald-500" />
              <span>Authentic Products</span>
            </div>

            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <Truck className="h-5 w-5 text-emerald-500" />
              <span>Fast Delivery</span>
            </div>

          </div>
        </div>

        {/* Product Visual */}
        <div className="relative flex h-[420px] w-full max-w-lg items-center justify-center overflow-hidden rounded-3xl bg-neutral-900">
          
          {/* Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

          {/* Product Image */}
          <div className="relative h-[360px] w-full">
            <Image
              src="/images/banners/hero-product.png"
              alt="Premium protein supplement"
              fill
              priority
              className="object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}