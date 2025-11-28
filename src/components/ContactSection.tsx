import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MessageCircle, MessageSquare, Clock, Shield, CheckCircle2 } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    hp: "", // honeypot
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusText, setStatusText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("loading");
    setStatusText("Sending your booking request...");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.status === "success") {
        setStatus("success");
        setStatusText("Your booking request has been sent! We will contact you shortly.");

        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
          hp: "",
        });
      } else if (data.status === "ignored") {
        setStatus("success");
        setStatusText("Thank you! (Request filtered as spam safely).");
      } else {
        setStatus("error");
        setStatusText("Something went wrong. Please try again or contact us directly.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setStatusText("Failed to send. Check your internet connection.");
    }
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
                
                {/* Honeypot: hidden anti-bot field */}
                <input
                  type="text"
                  value={formData.hp}
                  onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

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
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
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

                <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Send Booking Request"}
                </Button>

                {status !== "idle" && (
                  <p
                    className={`text-center text-sm ${
                      status === "success"
                        ? "text-green-600"
                        : status === "error"
                        ? "text-red-600"
                        : "text-muted-foreground"
                    }`}
                  >
                    {statusText}
                  </p>
                )}

                <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                  <Shield className="h-4 w-4" />
                  <span>Your information is safe and secure</span>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-background rounded-2xl p-8 shadow-lg animate-fade-in-up">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a href="tel:+919849025010" className="text-muted-foreground hover:text-primary transition-colors">+91 9849025010</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <a href="https://wa.me/919849025010" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">+91 9849025010</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">studio.alpine@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Hours</p>
                      <p className="text-muted-foreground">Mon-Fri: 9AM-6PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-2xl p-8 shadow-lg animate-fade-in-up">
                <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">Professional quality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">Quick turnaround</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">Competitive pricing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">100% satisfaction guarantee</span>
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
