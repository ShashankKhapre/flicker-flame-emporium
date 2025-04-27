
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories } from "@/data/products";
import CategoryCard from "@/components/CategoryCard";

const Categories = () => {
  return (
    <>
      <Header />
      <main className="container py-16">
        <h1 className="text-4xl font-display font-medium mb-3 text-center">
          Our Candle Collections
        </h1>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Explore our carefully curated collections of premium candles to find the perfect match for your space and mood.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Categories;
