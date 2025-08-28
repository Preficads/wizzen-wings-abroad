import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.png";
import { Typewriter } from "react-simple-typewriter";

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

        {/* Floating element */}
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-primary opacity-15 rounded-3xl"></div>
      </div>

      {/* Content Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Instagram Badge */}
            <a
              href="https://www.instagram.com/wizzen_overseas_service?igsh=MXI3eTF5dzZkNnE4dg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 border border-red-200 hover:bg-red-100 transition cursor-pointer"
            >
              <span className="text-xs font-medium text-red-600 uppercase tracking-wide">
                Latest Updates
              </span>
            </a>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
                <span className="text-foreground block">Education &</span>
                <span className="text-foreground block">Immigration</span>
                <span className="bg-gradient-primary bg-clip-text text-transparent text-7xl sm:text-8xl md:text-9xl font-semibold">
                  <Typewriter
                    words={["Pathways"]}
                    loop={false}
                    typeSpeed={120}
                    deleteSpeed={60}
                    cursor
                    cursorStyle="|"
                  />
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground font-light max-w-lg">
              Expert guidance for your European education and immigration journey
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              {/* Call Button */}
              <a href="tel:+918281463148">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-black text-white hover:bg-gray-900 rounded-md px-8 py-3 font-medium text-base shadow-card"
                >
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </Button>
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/4915731340455"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-500 text-green-600 hover:bg-green-50 rounded-md px-8 py-3 font-medium text-base shadow-card"
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Germany
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-slide-in">
            <div className="relative">
              {/* Background geometric rotating box */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* ⬇️ Smaller only on mobile */}
                <div className="w-60 h-60 sm:w-80 sm:h-80 bg-gradient-hero opacity-80 rounded-3xl animate-rotate-extreme"></div>

                {/* Floating cards */}
                <div className="absolute top-[350px] left-[20px] sm:top-[450px] sm:left-[50px] bg-orange-600 text-white p-3 rounded-xl shadow-lg transform rotate-6 animate-float">
                  <div className="text-xs font-medium">Immigrate &</div>
                  <div className="text-l">Settle</div>
                </div>

                <div
                  className="absolute top-64 right-2 sm:top-80 sm:right-4 bg-purple-800 text-white p-3 rounded-xl shadow-lg transform rotate-6 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-xs font-medium">Foreign Immigration</div>
                  <div className="text-l">Lawyers</div>
                </div>
              </div>

              {/* Woman with suitcase image */}
              <div className="relative z-10 flex items-center justify-center">
                <img
                  src={heroImage}
                  alt="Professional woman with suitcase representing international education opportunities"
                  className="w-82 h-82 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
