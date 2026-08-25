import Link from "next/link";
import { Search, Heart, ShoppingBag, Menu } from "lucide-react";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-neutral-900"
        >
          PROTEIN
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-black"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5 text-neutral-700">
          <button
            type="button"
            aria-label="Search"
            className="p-1 transition-colors hover:text-black"
          >
            <Search className="h-5 w-5" />
          </button>

          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="p-1 transition-colors hover:text-black"
          >
            <Heart className="h-5 w-5" />
          </Link>

          <Link
            href="/cart"
            aria-label="Cart"
            className="p-1 transition-colors hover:text-black"
          >
            <ShoppingBag className="h-5 w-5" />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Open menu"
            className="p-1 md:hidden transition-colors hover:text-black"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}