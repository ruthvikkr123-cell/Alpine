import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

const categories = [
  "All",
  "Kids",
  "Family",
  "Weddings",
  "Passport",
  "Events",
];

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Gallery</h2>
          <p className="text-xl text-muted-foreground">
            Browse through our collection of beautiful moments we've captured
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-square bg-muted flex items-center justify-center">
                <Camera className="h-16 w-16 text-muted-foreground" />
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};
