
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext";
import { formatCurrency } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, user } = useUser();
  const isInWishlist = user?.wishlist?.some((item) => item.id === product.id);

  return (
    <div className="group product-hover-effect relative rounded-lg overflow-hidden border bg-card">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      
      {/* Product Badges */}
      <div className="absolute top-2 left-2 flex flex-col gap-1">
        {product.new && (
          <Badge className="bg-amber-500">New</Badge>
        )}
        {product.bestSeller && (
          <Badge className="bg-amber-700">Best Seller</Badge>
        )}
      </div>
      
      {/* Wishlist Button */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => addToWishlist(product)}
      >
        <Heart className={`h-5 w-5 ${isInWishlist ? 'fill-amber-500 text-amber-500' : ''}`} />
      </Button>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-medium text-base hover:text-primary truncate">
              {product.name}
            </h3>
          </Link>
          <span className="font-semibold">{formatCurrency(product.price)}</span>
        </div>
        
        <div className="mb-3">
          <p className="text-sm text-muted-foreground truncate">
            {product.scent || product.type}
          </p>
          <div className="mt-1 flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "text-amber-500 fill-amber-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">
              ({product.reviews})
            </span>
          </div>
        </div>

        <Button
          className="w-full mt-2"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
        </Button>
      </div>
    </div>
  );
};

// Simple star icon component
const StarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default ProductCard;
