import { Users, Camera, Clock, DollarSign } from "lucide-react";

export const HighlightsSection = () => {
  const highlights = [
    {
      icon: Users,
      title: "Kids Photography Experts",
      description: "Patience and care in capturing your little one's perfect moments. Multiple shots to choose from.",
    },
    {
      icon: Camera,
      title: "Studio & Outdoor Shoots",
      description: "Professional equipment and perfect angles, whether in our premium studio or outdoor locations.",
    },
    {
      icon: Clock,
      title: "Fast Delivery & Editing",
      description: "Quick turnaround without compromising quality. Passport photos ready in 10 minutes.",
    },
    {
      icon: DollarSign,
      title: "Affordable Packages",
      description: "Premium quality at reasonable prices. Value for money with transparent pricing.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Alpine Photo Studio?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Excellence in every shot, backed by years of experience and hundreds of satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
