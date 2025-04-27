import { Product, Category } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Coastal Breeze Shell Collection",
    description: "A serene blend of sea salt and coastal florals, adorned with delicate seashells and blue flower petals. Perfect for creating a peaceful beach-inspired atmosphere.",
    price: 32.99,
    image: "/lovable-uploads/b970ea47-0233-4b55-8ede-16ab71f3cb78.png",
    category: "decorative",
    scent: "Ocean Breeze",
    type: "soy",
    size: "8oz",
    burnTime: "40-45 hours",
    materials: "Soy wax, cotton wick, seashells, dried flowers",
    featured: true,
    stock: 25,
    rating: 4.8,
    reviews: 124
  },
  {
    id: "2",
    name: "Wildflower Garden Taper Set",
    description: "Hand-painted botanical tapers featuring delicate wildflowers and soft pastels. Each candle is a unique piece of art perfect for special occasions.",
    price: 45.99,
    image: "/lovable-uploads/6964beb9-055e-4dac-beb3-7b91879678a5.png",
    category: "decorative",
    type: "beeswax",
    size: "10\" taper",
    burnTime: "8-10 hours per candle",
    materials: "Beeswax, cotton wick, natural pigments",
    bestSeller: true,
    stock: 15,
    rating: 4.9,
    reviews: 86
  },
  {
    id: "3",
    name: "Summer Citrus & Herbs",
    description: "A refreshing blend featuring dried citrus slices and fresh herbs, creating a bright and invigorating atmosphere in your space.",
    price: 29.99,
    image: "/lovable-uploads/7ebf9e88-4324-402c-b5c4-3c5057179742.png",
    category: "scented",
    scent: "Citrus & Herb",
    type: "soy",
    size: "6oz",
    burnTime: "30-35 hours",
    materials: "Soy wax, cotton wick, dried citrus, herbs",
    new: true,
    stock: 30,
    rating: 4.7,
    reviews: 53
  },
  {
    id: "4",
    name: "Berry Bliss Collection",
    description: "Luxurious candles featuring real berries suspended in clear wax, offering both beauty and a sweet, fruity fragrance.",
    price: 34.99,
    image: "/lovable-uploads/31cfb566-3899-4329-8ff0-0435a1c070d1.png",
    category: "seasonal",
    scent: "Mixed Berries",
    type: "coconut-wax",
    size: "8oz",
    burnTime: "35-40 hours",
    materials: "Coconut wax, cotton wick, dried berries",
    featured: true,
    stock: 20,
    rating: 4.8,
    reviews: 92
  },
  {
    id: "5",
    name: "Romantic Bow Taper Set",
    description: "Elegant pink and white taper candles adorned with delicate bow designs. Perfect for weddings and romantic occasions.",
    price: 42.99,
    image: "/lovable-uploads/d2f82827-68cb-4a08-85e1-d3a40876ae5c.png",
    category: "decorative",
    type: "paraffin",
    size: "12\" taper",
    burnTime: "10-12 hours per candle",
    materials: "Premium paraffin, cotton wick, non-toxic paint",
    new: true,
    stock: 25,
    rating: 4.6,
    reviews: 45
  },
  {
    id: "6",
    name: "Spiced Orange & Cinnamon",
    description: "A cozy blend of orange, cinnamon, and star anise, perfect for creating a warm and inviting atmosphere during cold seasons.",
    price: 28.99,
    image: "/lovable-uploads/a68a79ca-4614-4842-b850-2cf5f47f5a84.png",
    category: "seasonal",
    scent: "Spiced Orange",
    type: "soy-blend",
    size: "9oz",
    burnTime: "45-50 hours",
    materials: "Soy blend wax, cotton wick, dried orange, spices",
    bestSeller: true,
    stock: 35,
    rating: 4.9,
    reviews: 107
  },
  {
    id: "7",
    name: "Rose Petal Dreams",
    description: "A romantic blend featuring real rose petals and a delicate floral scent, perfect for creating an enchanting atmosphere.",
    price: 36.99,
    image: "/lovable-uploads/e7854075-3523-438b-8ade-a59e87c93814.png",
    category: "scented",
    scent: "Rose Garden",
    type: "soy",
    size: "7oz",
    burnTime: "35-40 hours",
    materials: "Soy wax, cotton wick, dried rose petals",
    featured: true,
    stock: 18,
    rating: 4.7,
    reviews: 64
  },
  {
    id: "8",
    name: "Botanical Garden Collection",
    description: "Each candle in this collection features unique dried flowers and herbs, creating a beautiful display of nature's colors.",
    price: 39.99,
    image: "/lovable-uploads/37beaffb-1e7e-4c46-91a4-fe3e19de10a2.png",
    category: "decorative",
    type: "coconut-wax",
    size: "6oz",
    burnTime: "30-35 hours",
    materials: "Coconut wax, cotton wick, dried botanicals",
    bestSeller: true,
    stock: 22,
    rating: 4.8,
    reviews: 89
  }
];

export const categories: Category[] = [
  {
    id: "1",
    name: "Scented",
    image: "/lovable-uploads/b970ea47-0233-4b55-8ede-16ab71f3cb78.png",
    description: "Luxurious fragranced candles for every mood"
  },
  {
    id: "2",
    name: "Decorative",
    image: "/lovable-uploads/6964beb9-055e-4dac-beb3-7b91879678a5.png",
    description: "Beautiful candles that double as art pieces"
  },
  {
    id: "3",
    name: "Seasonal",
    image: "/lovable-uploads/a68a79ca-4614-4842-b850-2cf5f47f5a84.png",
    description: "Limited edition collections for special occasions"
  },
  {
    id: "4",
    name: "Gift Sets",
    image: "/lovable-uploads/d2f82827-68cb-4a08-85e1-d3a40876ae5c.png",
    description: "Curated collections perfect for gifting"
  }
];

export const types = ["soy", "beeswax", "coconut-wax", "paraffin", "soy-blend"];
export const scents = ["Vanilla", "Lavender", "Citrus", "Fresh Linen", "Woody", "Sweet", "Fresh", "Spiced", "Floral"];
export const sizes = ["4oz", "6oz", "8oz", "9oz", "10oz", "12oz", "3\" x 6\""];
