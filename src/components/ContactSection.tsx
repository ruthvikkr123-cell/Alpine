import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MessageCircle, Clock, Shield, CheckCircle2 } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ready to Capture Your Perfect Moment?
            </h2>
            <p className="text-xl text-muted-foreground">
              Book your session today and experience the Alpine Photo Studio difference
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-background rounded-2xl p-8 shadow-lg animate-fade-in-up">
              <h3 className="text-2xl font-bold text-foreground mb-2">Book Your Session</h3>
              <p className="text-muted-foreground mb-6">Fill out the form below and we'll get back to you shortly</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Required *
                  </label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="passport">Passport Photos</SelectItem>
                      <SelectItem value="kids">Kids Photography</SelectItem>
                      <SelectItem value="family">Family Portraits</SelectItem>
                      <SelectItem value="event">Event Photography</SelectItem>
                      <SelectItem value="corporate">Corporate Photography</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Additional Details
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Booking Request
                </Button>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                  <Shield className="h-4 w-4" />
                  <span>Your information is safe and secure</span>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              {/* Quick Contact */}
              <div className="bg-background rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">Quick Contact</h3>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+919849025010" 
                    className="flex items-center gap-4 p-4 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity"
                  >
                    <Phone className="h-6 w-6" />
                    <div>
                      <div className="text-sm font-medium">Call Us Now</div>
                      <div className="text-lg font-bold">+91 98490 25010</div>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/919849045010" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-success text-white rounded-xl hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle className="h-6 w-6" />
                    <div>
                      <div className="text-sm font-medium">WhatsApp Us</div>
                      <div className="text-lg font-bold">Chat on WhatsApp</div>
                    </div>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-3 text-foreground">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Working Hours</div>
                      <div className="text-sm text-muted-foreground">Mon-Sun: 9 AM - 8 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Book With Us */}
              <div className="bg-background rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">Why Book With Us?</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground">No Advance Payment</div>
                      <div className="text-sm text-muted-foreground">Pay only after you're satisfied with the results</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground">Walk-In Friendly</div>
                      <div className="text-sm text-muted-foreground">No appointment needed for passport photos</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground">Same-Day Delivery</div>
                      <div className="text-sm text-muted-foreground">Get your photos delivered on the same day</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground">Experienced Team</div>
                      <div className="text-sm text-muted-foreground">10+ years of professional photography expertise</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
