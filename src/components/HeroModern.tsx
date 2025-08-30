"use client";

import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.png"
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";


const textVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, type: "spring", stiffness: 60 },
  }),
};


export default function HeroModern() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background geometric shapes remain same */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-hero opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-32 w-24 h-24 bg-gradient-accent opacity-30 rounded-2xl transform rotate-12"></div>
        <div className="absolute top-48 right-16 w-16 h-16 bg-primary opacity-20 rounded-xl transform -rotate-12"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-primary opacity-15 rounded-3xl"></div>
      </div>

      {/* Content Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-0 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Instagram Badge */}
            <motion.a
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
              href="https://www.instagram.com/wizzen_overseas_service?igsh=MXI3eTF5dzZkNnE4dg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 border border-red-200 hover:bg-red-100 transition cursor-pointer"
            >
              <span className="text-xs font-medium text-red-600 uppercase tracking-wide">
                Latest Updates
              </span>
            </motion.a>

            {/* Main Heading with staggered words */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
                {["Education &", "Immigration"].map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={textVariant}
                    initial="hidden"
                    animate="visible"
                    className="block text-foreground"
                  >
                    {word}
                  </motion.span>
                ))}


                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                  className="bg-gradient-primary bg-clip-text text-transparent text-7xl sm:text-8xl md:text-9xl font-semibold"
                >
                  <Typewriter
                    words={["Pathways"]}
                    loop={false}
                    typeSpeed={120}
                    deleteSpeed={60}
                    cursor
                    cursorStyle="|"
                  />
                </motion.span>
              </h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 70 }}
              className="text-xl text-muted-foreground font-light max-w-lg"
            >
              Expert guidance for your European education and immigration journey
            </motion.p>

            {/* CTA Buttons with pop-in scale */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <motion.a
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, type: "spring", bounce: 0.4 }}
                href="tel:+918281463148"
              >
                <Button
                  variant="default"
                  size="lg"
                  className="bg-black text-white hover:bg-gray-900 rounded-md px-8 py-3 font-medium text-base shadow-card"
                >
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </Button>
              </motion.a>

              <motion.a
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8, type: "spring", bounce: 0.4 }}
                href="https://wa.me/4915731340455"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="flex items-center bg-green-500 text-white px-8 py-6 font-medium hover:bg-green-600">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="mr-2 h-4 w-4"
                  />
                  WhatsApp
                </Button>
              </motion.a>
            </div>
          </div>

          {/* Right Column - Image unchanged */}
          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-60 h-60 sm:w-80 sm:h-80 bg-gradient-hero opacity-80 rounded-3xl animate-rotate-extreme"></div>

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

              {/* Main Hero Image */}
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
