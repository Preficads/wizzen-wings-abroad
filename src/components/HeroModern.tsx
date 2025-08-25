import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export default function HeroModern() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Modern Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient shape */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-hero opacity-20 rounded-full blur-3xl"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-32 right-32 w-24 h-24 bg-gradient-accent opacity-30 rounded-2xl transform rotate-12"></div>
        <div className="absolute top-48 right-16 w-16 h-16 bg-primary opacity-20 rounded-xl transform -rotate-12"></div>
        
        {/* Floating elements */}
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-primary opacity-15 rounded-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Small badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 border border-red-200">
              <span className="text-xs font-medium text-red-600 uppercase tracking-wide">
                Latest Updates
              </span>
            </div>

            {/* Main Heading - ImmiLaw Style */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
                <span className="text-foreground block">Education &</span>
                <span className="text-foreground block">Immigration</span>
                <span className="bg-gradient-primary bg-clip-text text-transparent font-normal">
                  Pathways
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground font-light max-w-lg">
              Expert guidance for your European education and immigration journey
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-black text-white hover:bg-gray-900 rounded-md px-8 py-3 font-medium text-base shadow-card"
              >
                <Phone className="mr-2 h-4 w-4" />
                Get Callback
              </Button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-slide-in">
            {/* Main container with geometric background */}
            <div className="relative">
              {/* Background geometric shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Large background shape */}
                <div className="w-80 h-80 bg-gradient-hero opacity-80 rounded-3xl transform rotate-12"></div>
                
                {/* Floating cards */}
                <div className="absolute -top-8 -left-8 bg-orange-500 text-white p-3 rounded-xl shadow-card transform -rotate-12 animate-float">
                  <div className="text-xs font-medium">Immigrate &</div>
                  <div className="text-xs">Settle</div>
                </div>
                
                <div className="absolute -bottom-8 -right-8 bg-purple-600 text-white p-3 rounded-xl shadow-card transform rotate-12 animate-float" style={{animationDelay: '1s'}}>
                  <div className="text-xs font-medium">Foreign Immigration</div>
                  <div className="text-xs">Lawyers</div>
                </div>
              </div>

              {/* Woman with suitcase image */}
              <div className="relative z-10 flex items-center justify-center">
                <img 
                  src={heroImage} 
                  alt="Professional woman with suitcase representing international education opportunities"
                  className="w-72 h-72 object-cover object-center rounded-2xl shadow-modern"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}