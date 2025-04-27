
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h2 className="font-display text-xl font-medium">Flicker Flame</h2>
            <p className="text-sm text-muted-foreground">
              Handcrafted candles made with love and care. 
              Our mission is to bring warmth and ambiance to every home.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-base">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="hover:text-primary">All Candles</Link>
              </li>
              <li>
                <Link to="/shop?category=scented" className="hover:text-primary">Scented</Link>
              </li>
              <li>
                <Link to="/shop?category=decorative" className="hover:text-primary">Decorative</Link>
              </li>
              <li>
                <Link to="/shop?category=seasonal" className="hover:text-primary">Seasonal</Link>
              </li>
              <li>
                <Link to="/shop?category=gift-sets" className="hover:text-primary">Gift Sets</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-base">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-primary">About Us</Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-primary">Sustainability</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">Contact</Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-primary">Shipping & Returns</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-base">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/80"
              />
              <Button>
                <Mail className="h-4 w-4 mr-2" /> Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Flicker Flame Emporium. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
