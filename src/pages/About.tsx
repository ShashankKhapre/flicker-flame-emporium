
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <main className="container py-16">
        <h1 className="text-4xl font-display font-medium mb-6 text-center">Our Story</h1>
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="prose prose-amber mx-auto">
            <p className="text-lg text-muted-foreground">
              At Flicker Flame Emporium, we believe in creating moments of warmth and tranquility through our handcrafted candles. Each piece is carefully made with attention to detail and sustainable practices.
            </p>
            <h2 className="text-2xl font-display mt-8 mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To illuminate homes and hearts with sustainable, handcrafted candles that bring comfort and joy to every space.
            </p>
            <h2 className="text-2xl font-display mt-8 mb-4">Sustainability</h2>
            <p className="text-muted-foreground">
              We're committed to environmental responsibility through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Using 100% natural and sustainable waxes</li>
              <li>Eco-friendly packaging materials</li>
              <li>Zero-waste manufacturing processes</li>
              <li>Local sourcing when possible</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
