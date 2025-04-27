
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";

const Index = () => {
  // Filter featured products
  const featuredProducts = products.filter((product) => product.featured);
  // Filter bestsellers
  const bestSellers = products.filter((product) => product.bestSeller);
  // Filter new arrivals
  const newArrivals = products.filter((product) => product.new);

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Featured Categories */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-display font-medium mb-3 text-center">
              Shop by Category
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Explore our carefully curated collections of premium candles to find the perfect match for your space and mood.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <FeaturedProducts
          title="Featured Products"
          products={featuredProducts}
          description="Our most popular and highly recommended candles"
        />

        {/* About Section */}
        <section className="py-16 bg-secondary">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-medium mb-4">
                  Handcrafted with Love
                </h2>
                <p className="text-muted-foreground mb-6">
                  At Flicker Flame Emporium, we believe in creating candles that not only
                  illuminate your space but also elevate your senses. Each of our
                  candles is carefully handcrafted using premium ingredients and
                  sustainable practices.
                </p>
                <p className="text-muted-foreground mb-6">
                  From selecting the finest waxes and essential oils to designing
                  elegant vessels that complement any decor, we pay attention to
                  every detail to ensure a clean, long-lasting burn and captivating
                  fragrance experience.
                </p>
                <Button asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                    alt="Handcrafted candle making process"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-amber-100 rounded-lg -z-10"></div>
                <div className="absolute -top-8 -right-8 w-48 h-48 bg-candle-peach rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <FeaturedProducts
          title="Best Sellers"
          products={bestSellers}
          description="Our customers' favorites that keep them coming back"
        />

        {/* New Arrivals */}
        <FeaturedProducts
          title="New Arrivals"
          products={newArrivals}
          description="Fresh additions to our exclusive candle collection"
        />

        {/* Testimonials */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-display font-medium mb-3 text-center">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              We love our customers, and they love our candles
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg border bg-card"
                >
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-amber-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 italic text-muted-foreground">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="mr-3">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <Newsletter />

      </main>
      
      <Footer />
    </>
  );
};

// Sample testimonials data
const testimonials = [
  {
    name: "Sarah M.",
    location: "Portland, OR",
    text: "These candles burn so cleanly and the scents are amazing without being overwhelming. I'm a customer for life!"
  },
  {
    name: "James T.",
    location: "Chicago, IL",
    text: "I bought the Vanilla Bliss for my mother's birthday and she absolutely loved it. The packaging was beautiful too!"
  },
  {
    name: "Emily L.",
    location: "Austin, TX",
    text: "The Lavender Dreams candle has become an essential part of my evening routine. It helps me relax after a long day."
  }
];

export default Index;
