
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useUser } from "@/context/UserContext";

const Wishlist = () => {
  const { user } = useUser();

  return (
    <>
      <Header />
      <main className="container py-16">
        <h1 className="text-4xl font-display font-medium mb-6 text-center">My Favorites</h1>
        {user ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {user.wishlist && user.wishlist.length > 0 ? (
              user.wishlist.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">Your wishlist is empty. Start adding your favorite candles!</p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Please log in to view your wishlist.</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Wishlist;
