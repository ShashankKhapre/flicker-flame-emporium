
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  scent?: string;
  type: string;
  size?: string;
  burnTime?: string;
  materials?: string;
  featured?: boolean;
  bestSeller?: boolean;
  new?: boolean;
  stock: number;
  rating: number;
  reviews: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Category = {
  id: string;
  name: string;
  image: string;
  description: string;
};

export type User = {
  id: string;
  email: string;
  name: string;
  wishlist?: Product[];
}
