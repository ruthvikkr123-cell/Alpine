export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&h=900&fit=crop" 
                  alt="Professional children's photography session"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute top-8 left-8 bg-background rounded-xl p-6 shadow-lg">
                  <div className="text-5xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm font-medium text-foreground">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="animate-fade-in-up">
              <div className="text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
                Special Care For Kids
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Patience & Expertise That Makes Children Smile
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Our specialized approach to children's photography ensures every session is comfortable, 
                fun, and stress-free. We take multiple shots so you can choose the perfect moment.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Patient & Friendly Staff</h4>
                    <p className="text-muted-foreground">We make children feel comfortable and safe throughout the session</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Multiple Shot Options</h4>
                    <p className="text-muted-foreground">Choose from various poses and expressions to find the perfect photo</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Premium Prints Available</h4>
                    <p className="text-muted-foreground">High-quality framing and album options to preserve memories</p>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-xl p-6 border-l-4 border-primary">
                <p className="text-xl font-medium text-foreground italic">
                  "Not just great photos — we treat every customer like family."
                </p>
                <p className="text-sm text-muted-foreground mt-2">10+ years of trusted service in professional photography</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
