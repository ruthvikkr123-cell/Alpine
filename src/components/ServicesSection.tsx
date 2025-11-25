import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IdCard, Baby, Users, Calendar, Frame } from "lucide-react";

const services = [
  {
    icon: IdCard,
    title: "Passport Photos",
    description: "Fast processing with soft copy available. High-quality, proper guidelines.",
    features: ["10-minute service", "Soft copy included", "All sizes available"],
    price: "₹75 - ₹120",
  },
  {
    icon: Baby,
    title: "Kids Photography",
    description: "Multiple shots to choose from. Patience and comfort guaranteed.",
    features: ["Multiple poses", "Patient approach", "Premium prints available"],
    price: "Starting at ₹2,500",
  },
  {
    icon: Users,
    title: "Family Portraits",
    description: "Studio & outdoor options with professional framing available.",
    features: ["Indoor & outdoor", "Professional framing", "Group packages"],
    price: "Starting at ₹3,500",
  },
  {
    icon: Calendar,
    title: "Event Photography",
    description: "Weddings, birthdays, corporate events - we capture the right moments.",
    features: ["Full event coverage", "Professional editing", "Album creation"],
    price: "Custom packages",
  },
  {
    icon: Frame,
    title: "Photo Framing & Editing",
    description: "High-quality prints, albums, and professional photo editing services.",
    features: ["Premium prints", "Album design", "Photo restoration"],
    price: "Starting at ₹500",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional photography services tailored to capture your special moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{service.price}</span>
                  <Button variant="outline">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            <span className="font-semibold text-foreground">Value for money</span> •{" "}
            <span className="font-semibold text-foreground">Professional quality</span> •{" "}
            <span className="font-semibold text-foreground">Fast service</span>
          </p>
        </div>
      </div>
    </section>
  );
};
