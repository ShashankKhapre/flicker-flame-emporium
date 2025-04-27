
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our newsletter soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="bg-cream-100 py-16">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-display font-medium mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe for exclusive offers, new candle releases, and seasonal
            inspiration delivered to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex max-w-md mx-auto gap-2">
            <Input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
