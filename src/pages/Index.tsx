import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GallerySection } from "@/components/GallerySection";
import { StatsSection } from "@/components/StatsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
