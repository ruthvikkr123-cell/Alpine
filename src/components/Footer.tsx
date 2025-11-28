import { Youtube, Instagram, Map } from "lucide-react";
import alpineLogo from "@/assets/alpine-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={alpineLogo} alt="Alpine Photo Studio" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/80 mb-4">
              Capturing moments, creating smiles. Your trusted photography studio for over 25+ years.
            </p>
            <div className="flex gap-4">
              <a href="https://youtube.com/@venu2104?si=HfN1VJ_DY9JwZtuN" target="_blank" rel="noopener noreferrer" className="bg-background/10 hover:bg-background/20 p-2 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/alpine_photo_studio?igsh=eDlvYXI4cnMzaWdl" target="_blank" rel="noopener noreferrer" className="bg-background/10 hover:bg-background/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://maps.app.goo.gl/1szq5JApZD4PeYzh9" target="_blank" rel="noopener noreferrer" className="bg-background/10 hover:bg-background/20 p-2 rounded-full transition-colors">
                <Map className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/80 hover:text-background transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-background/80 hover:text-background transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-background/80">
              <li>Passport Photography</li>
              <li>Kids Photography</li>
              <li>Family Portraits</li>
              <li>Event Photography</li>
              <li>Photo Framing & Editing</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/80">
          <p>© {new Date().getFullYear()} Alpine Photo Studio. All rights reserved.</p>
          <p className="mt-2 text-sm">Where Every Shot is a Memory</p>
        </div>
      </div>
    </footer>
  );
};
