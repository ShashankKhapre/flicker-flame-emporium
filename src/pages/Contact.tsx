
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <>
      <Header />
      <main className="container py-16">
        <h1 className="text-4xl font-display font-medium mb-6 text-center">Contact Us</h1>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-display mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input placeholder="Your Name" required />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" required />
              </div>
              <div>
                <Input placeholder="Subject" required />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="h-32" required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-display mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-amber-600" />
                  <span>support@flickerflame.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-amber-600" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <span>123 Candle Street, Flame City, FC 12345</span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-display mb-4">Business Hours</h2>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
