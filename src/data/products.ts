
import { Product, Category } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Vanilla Bliss",
    description: "A warm and inviting vanilla-scented soy candle, perfect for creating a cozy atmosphere in any room. Hand-poured and made with 100% natural ingredients.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "scented",
    scent: "Vanilla",
    type: "soy",
    size: "8oz",
    burnTime: "40-50 hours",
    materials: "Soy wax, cotton wick, essential oils",
    featured: true,
    stock: 25,
    rating: 4.8,
    reviews: 124
  },
  {
    id: "2",
    name: "Lavender Dreams",
    description: "Unwind with the calming scent of lavender. This hand-crafted soy candle promotes relaxation and is perfect for your self-care routine.",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "scented",
    scent: "Lavender",
    type: "soy",
    size: "6oz",
    burnTime: "30-35 hours",
    materials: "Soy wax, cotton wick, lavender essential oil",
    bestSeller: true,
    stock: 18,
    rating: 4.9,
    reviews: 86
  },
  {
    id: "3",
    name: "Rustic Pillar",
    description: "An elegant unscented pillar candle perfect for dinner parties or as a decorative centerpiece. Made with high-quality beeswax for a clean, long-lasting burn.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "decorative",
    type: "beeswax",
    size: "3\" x 6\"",
    burnTime: "70-80 hours",
    materials: "Beeswax, cotton wick",
    stock: 32,
    rating: 4.7,
    reviews: 53
  },
  {
    id: "4",
    name: "Citrus Grove",
    description: "Brighten your space with this energizing blend of citrus scents. Notes of lemon, orange, and grapefruit create a refreshing atmosphere.",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "scented",
    scent: "Citrus",
    type: "coconut-wax",
    size: "9oz",
    burnTime: "45-50 hours",
    materials: "Coconut wax, cotton wick, essential oils",
    stock: 14,
    rating: 4.6,
    reviews: 39
  },
  {
    id: "5",
    name: "Summer Breeze",
    description: "Experience the fresh scent of a summer breeze with this light and airy candle. Perfect for spring and summer days.",
    price: 23.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "scented",
    scent: "Fresh Linen",
    type: "soy",
    size: "8oz",
    burnTime: "40-45 hours",
    materials: "Soy wax, cotton wick, fragrance oils",
    new: true,
    stock: 30,
    rating: 4.5,
    reviews: 17
  },
  {
    id: "6",
    name: "Warm Mahogany",
    description: "A sophisticated blend of mahogany, cedar, and sandalwood creates a warm, inviting atmosphere perfect for living rooms and studies.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "scented",
    scent: "Woody",
    type: "soy-blend",
    size: "12oz",
    burnTime: "60-65 hours",
    materials: "Soy wax blend, cotton wick, premium fragrance",
    stock: 22,
    rating: 4.9,
    reviews: 73
  },
  {
    id: "7",
    name: "Birthday Cake",
    description: "Celebrate with the nostalgic scent of freshly baked birthday cake and vanilla frosting. A fun addition to any celebration.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "scented",
    scent: "Sweet",
    type: "soy",
    size: "4oz",
    burnTime: "20-25 hours",
    materials: "Soy wax, cotton wick, fragrance oils",
    stock: 40,
    rating: 4.7,
    reviews: 28
  },
  {
    id: "8",
    name: "Ocean Waves",
    description: "Bring the beach home with this fresh, oceanic scent. Notes of sea salt and driftwood create a calming, coastal atmosphere.",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "scented",
    scent: "Fresh",
    type: "coconut-wax",
    size: "10oz",
    burnTime: "50-55 hours",
    materials: "Coconut wax, cotton wick, premium fragrance oils",
    featured: true,
    stock: 15,
    rating: 4.8,
    reviews: 92
  }
];

export const categories: Category[] = [
  {
    id: "1",
    name: "Scented",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description: "Explore our range of beautifully scented candles"
  },
  {
    id: "2",
    name: "Decorative",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description: "Statement pieces that look as good as they smell"
  },
  {
    id: "3",
    name: "Seasonal",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description: "Limited edition candles for special occasions"
  },
  {
    id: "4",
    name: "Gift Sets",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description: "Curated collections perfect for gifting"
  }
];

export const types = ["soy", "beeswax", "coconut-wax", "paraffin", "soy-blend"];
export const scents = ["Vanilla", "Lavender", "Citrus", "Fresh Linen", "Woody", "Sweet", "Fresh", "Spiced", "Floral"];
export const sizes = ["4oz", "6oz", "8oz", "9oz", "10oz", "12oz", "3\" x 6\""];
