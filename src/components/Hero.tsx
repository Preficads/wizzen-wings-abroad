import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Background Shape */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          viewBox="0 0 1200 800"
          className="absolute bottom-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z"
            fill="hsl(var(--secondary))"
            opacity="0.3"
          />
        </svg>
        <svg
          viewBox="0 0 1200 800"
          className="absolute bottom-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,500 C400,350 800,600 1200,450 L1200,800 L0,800 Z"
            fill="hsl(var(--accent-soft))"
            opacity="0.2"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-soft border border-accent/20">
              <Award className="h-4 w-4 text-accent mr-2" />
              <span className="text-sm font-medium text-accent-foreground">
                German Visa Experts
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-snug">
              <span className="text-foreground">Give wings to your</span>
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Education & Immigration
              </span>
              <br />
              <span className="text-primary">
                Dreams with Wizzen Overseas
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Your trusted partner for a seamless immigration journey to
              Europe. From visa processing to university enrollment, we guide
              you every step of the way.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" className="group">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Request Call Back
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-primary">
                  5+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-primary">
                  1000+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Successful Cases
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-primary">
                  900+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Satisfied Clients
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative animate-slide-in flex justify-center lg:justify-end">
            <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none w-full">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-accent relative">
                <img
                  src={heroImage}
                  alt="Professional woman with travel suitcase representing study abroad opportunities"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Labels */}
              <div className="absolute -top-6 left-2 sm:-top-4 sm:-left-4 bg-accent text-accent-foreground px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-soft animate-float">
                🇩🇪 German Visa Expert
              </div>
              <div
                className="absolute -bottom-6 right-2 sm:-bottom-4 sm:-right-4 bg-primary text-primary-foreground px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-warm animate-float"
                style={{ animationDelay: "1s" }}
              >
                Study in Europe
              </div>

              {/* Rating Badge */}
              <div className="absolute top-6 -right-4 sm:top-8 sm:-right-8 bg-background border border-border p-3 sm:p-4 rounded-2xl shadow-soft">
                <div className="flex items-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 sm:h-4 sm:w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <div className="text-xs sm:text-sm font-medium">4.9/5 Rating</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">
                  900+ Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
