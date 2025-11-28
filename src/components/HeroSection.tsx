import { Button } from "@/components/ui/button";
import { Calendar, Camera, Star, CheckCircle2 } from "lucide-react";
import bgImage from "@/assets/bg.jpg";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl animate-fade-in">
          {/* Review Badge */}
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full mb-8 shadow-lg">
            <Star className="h-5 w-5 fill-current" />
            <span className="font-semibold">4.9+ Rated by Hundreds of Happy Customers</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Capture Your Best Moments With{" "}
            <span className="text-primary">Alpine Photo Studio</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-white/90 mb-6 font-medium">
            Professional • Friendly • High-Quality Photography
          </p>

          {/* Description */}
          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            From capturing your child's precious smile to fast passport photos in 10 minutes, 
            we deliver excellence with patience and care. Over 25+ years of trusted service.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="text-lg px-8 py-6 gap-2" onClick={() => scrollToSection("contact")}>
              <Calendar className="h-5 w-5" />
              Book Your Shoot Now
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 gap-2 bg-background text-foreground hover:bg-background/90">
              <Camera className="h-5 w-5" />
              Passport Photos in 10 Min
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-2 text-success">
            <CheckCircle2 className="h-5 w-5" />
            <p className="text-white/90 text-base">
              No advance payment required • Walk-in friendly • Same-day delivery available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
