export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  badge?: string;
}