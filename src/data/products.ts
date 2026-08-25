import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Whey Protein",
    slug: "whey-protein",
    category: "Protein",
    price: 49.9,
    oldPrice: 59.9,
    rating: 4.9,
    image: "/images/products/protein-1.jpg",
    badge: "BEST SELLER",
  },

  {
    id: 2,
    name: "Creatine Monohydrate",
    slug: "creatine-monohydrate",
    category: "Creatine",
    price: 29.9,
    rating: 4.8,
    image: "/images/products/creatine-1.jpg",
    badge: "POPULAR",
  },

  {
    id: 3,
    name: "Collagen Peptides",
    slug: "collagen-peptides",
    category: "Collagen",
    price: 39.9,
    oldPrice: 44.9,
    rating: 4.7,
    image: "/images/products/collagen-1.jpg",
    badge: "NEW",
  },

  {
    id: 4,
    name: "Pre-Workout",
    slug: "pre-workout",
    category: "Pre-Workout",
    price: 34.9,
    rating: 4.6,
    image: "/images/products/pre-workout-1.jpg",
  },
];