
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500673922987-e212871fec22"
          alt="Candles creating a warm atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative h-full flex items-center">
        <div className="max-w-lg text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-4">
            Illuminate Your Space
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover our collection of handcrafted candles made with natural
            ingredients to create the perfect ambiance for any occasion.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link to="/shop">Shop Collection</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-foreground" asChild>
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
