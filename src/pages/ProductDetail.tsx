
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeaturedProducts from "@/components/FeaturedProducts";
import { products } from "@/data/products";
import { Product } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { Heart, Minus, Plus, ShoppingCart, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext";
import { useToast } from "@/components/ui/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const { addToWishlist, user } = useUser();
  const { toast } = useToast();
  const isInWishlist = user?.wishlist?.some((item) => item.id === product?.id);

  // Fetch product and related products
  useEffect(() => {
    const currentProduct = products.find((p) => p.id === id);
    if (currentProduct) {
      setProduct(currentProduct);
      
      // Find related products (same category or type)
      const related = products
        .filter(
          (p) =>
            p.id !== id &&
            (p.category === currentProduct.category ||
              p.type === currentProduct.type ||
              p.scent === currentProduct.scent)
        )
        .slice(0, 4);
      
      setRelatedProducts(related);
    } else {
      // Handle product not found
      toast({
        title: "Product not found",
        description: "The product you are looking for does not exist.",
        variant: "destructive",
      });
    }
  }, [id, toast]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  const handleAddToWishlist = () => {
    if (product) {
      addToWishlist(product);
    }
  };

  if (!product) {
    return (
      <>
        <Header />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-medium mb-4">Product not found</h1>
          <p className="text-muted-foreground mb-6">
            The product you are looking for may have been removed or doesn't exist.
          </p>
          <Button asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="py-8">
        <div className="container">
          {/* Breadcrumbs */}
          <nav className="text-sm text-muted-foreground mb-6">
            <ol className="flex flex-wrap gap-1">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-primary transition-colors"
                >
                  Shop
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li>
                <Link
                  to={`/shop?category=${product.category}`}
                  className="hover:text-primary transition-colors"
                >
                  {product.category}
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li className="text-foreground font-medium">{product.name}</li>
            </ol>
          </nav>

          {/* Product Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      stroke="currentColor"
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-amber-500 fill-amber-500"
                          : "text-gray-300"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z"
                      />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <h1 className="text-3xl font-display font-medium mb-3">
                {product.name}
              </h1>

              <p className="text-2xl font-semibold mb-6">
                {formatCurrency(product.price)}
              </p>

              <p className="text-muted-foreground mb-6">{product.description}</p>

              {/* Product Attributes */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {product.type && (
                  <div>
                    <span className="text-sm text-muted-foreground block">
                      Type
                    </span>
                    <span className="font-medium capitalize">
                      {product.type.replace("-", " ")}
                    </span>
                  </div>
                )}
                {product.scent && (
                  <div>
                    <span className="text-sm text-muted-foreground block">
                      Scent
                    </span>
                    <span className="font-medium">{product.scent}</span>
                  </div>
                )}
                {product.size && (
                  <div>
                    <span className="text-sm text-muted-foreground block">
                      Size
                    </span>
                    <span className="font-medium">{product.size}</span>
                  </div>
                )}
                {product.burnTime && (
                  <div>
                    <span className="text-sm text-muted-foreground block">
                      Burn Time
                    </span>
                    <span className="font-medium">{product.burnTime}</span>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <span className="text-sm text-muted-foreground block mb-2">
                  Quantity
                </span>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      quantity < product.stock && setQuantity(quantity + 1)
                    }
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                  <span className="ml-4 text-sm text-muted-foreground">
                    {product.stock} available
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <Button className="flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={handleAddToWishlist}
                >
                  <Heart
                    className={`mr-2 h-4 w-4 ${
                      isInWishlist ? "fill-amber-500 text-amber-500" : ""
                    }`}
                  />
                  Add to Wishlist
                </Button>
              </div>

              <div className="bg-secondary rounded-md p-4 flex items-start space-x-3">
                <Truck className="h-5 w-5 mt-0.5 text-amber-600" />
                <div>
                  <p className="font-medium">Free Shipping</p>
                  <p className="text-sm text-muted-foreground">
                    On orders over $50. Orders ship within 1-2 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="py-6">
                <div className="space-y-4">
                  <p>{product.description}</p>
                  <p>
                    Our candles are carefully crafted to ensure a clean, long-lasting
                    burn. We use only the highest quality ingredients, including
                    natural waxes and premium fragrance oils, to create products
                    that enhance your home atmosphere.
                  </p>
                  <p>
                    For best results, trim the wick to 1/4 inch before each use and
                    allow the candle to burn until the wax pool reaches the edge of
                    the container on the first burn.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="details" className="py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-4">Product Specifications</h3>
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 text-muted-foreground">Type</td>
                          <td className="py-3 capitalize">
                            {product.type.replace("-", " ")}
                          </td>
                        </tr>
                        {product.scent && (
                          <tr className="border-b">
                            <td className="py-3 text-muted-foreground">Scent</td>
                            <td className="py-3">{product.scent}</td>
                          </tr>
                        )}
                        {product.size && (
                          <tr className="border-b">
                            <td className="py-3 text-muted-foreground">Size</td>
                            <td className="py-3">{product.size}</td>
                          </tr>
                        )}
                        {product.burnTime && (
                          <tr className="border-b">
                            <td className="py-3 text-muted-foreground">
                              Burn Time
                            </td>
                            <td className="py-3">{product.burnTime}</td>
                          </tr>
                        )}
                        {product.materials && (
                          <tr className="border-b">
                            <td className="py-3 text-muted-foreground">
                              Materials
                            </td>
                            <td className="py-3">{product.materials}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h3 className="font-medium mb-4">Care Instructions</h3>
                    <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                      <li>
                        Trim wick to 1/4 inch before each use to prevent smoking
                        and uneven burning.
                      </li>
                      <li>
                        On first burn, allow the wax to melt to the edges to
                        prevent tunneling.
                      </li>
                      <li>
                        Avoid burning for more than 4 hours at a time to maintain
                        quality.
                      </li>
                      <li>
                        Keep away from drafts, children, and pets.
                      </li>
                      <li>
                        Never leave a burning candle unattended.
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="py-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-lg">Customer Reviews</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                              stroke="currentColor"
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-amber-500 fill-amber-500"
                                  : "text-gray-300"
                              }`}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z"
                              />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-muted-foreground">
                          Based on {product.reviews} reviews
                        </span>
                      </div>
                    </div>
                    <Button>Write a Review</Button>
                  </div>

                  {/* Sample reviews */}
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="border-b pb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, j) => (
                            <svg
                              key={j}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill={j < 5 - i ? "currentColor" : "none"}
                              stroke="currentColor"
                              className={`h-4 w-4 ${
                                j < 5 - i
                                  ? "text-amber-500 fill-amber-500"
                                  : "text-gray-300"
                              }`}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z"
                              />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-4 text-sm font-medium">
                          {["Amazing product!", "Love this candle", "Good quality but pricey"][i]}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {["Sara T.", "Michael R.", "Emma L."][i]} - {" "}
                        <span className="text-xs">
                          {new Date(new Date().setDate(new Date().getDate() - i * 10)).toLocaleDateString()}
                        </span>
                      </p>
                      <p className="text-sm">
                        {[
                          "This candle exceeded my expectations! The scent is amazing and fills the entire room without being overwhelming. The burn time is also impressive.",
                          "I've purchased this candle multiple times. The scent is perfect and it burns evenly. Highly recommend!",
                          "The quality is excellent but it's a bit expensive for the size. The fragrance is lovely though.",
                        ][i]}
                      </p>
                    </div>
                  ))}

                  {product.reviews > 3 && (
                    <Button variant="outline" className="w-full">
                      Load More Reviews
                    </Button>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-display font-medium mb-8">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div key={relatedProduct.id}>
                    <Link to={`/product/${relatedProduct.id}`}>
                      <div className="aspect-square rounded-lg overflow-hidden">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-3">
                        <h3 className="font-medium">{relatedProduct.name}</h3>
                        <p className="text-muted-foreground">
                          {formatCurrency(relatedProduct.price)}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductDetail;
