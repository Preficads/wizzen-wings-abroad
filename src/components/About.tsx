"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import CountUp from "react-countup";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-accent">Wizzen Overseas</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We are a premier consulting firm specializing in abroad education,
            focused on helping students find the right universities in Europe
            based on their qualifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="leading-relaxed">
                Wizzen Abroad Studies is a premier consulting firm specializing
                in abroad education, focused on helping students find the right
                universities in Europe based on their qualifications. Our
                services range from initial counseling and documentation to visa
                processing and post-enrollment support.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a commitment to quality, transparency, and integrity, we
                ensure a smooth transition for students aiming to study in
                Europe.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                "Expert guidance for European universities",
                "Complete visa processing support",
                "Post-enrollment assistance",
                "5+ years of proven success",
                "Transparent and quality service",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button variant="secondary" size="lg" className="group">
              Learn More About Our Services
            </Button>
          </div>

          {/* Right Stats Section */}
          <div className="grid grid-cols-2 gap-6">
            {/* Countries Served */}
            <div className="p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-center">
              <div className="text-6xl md:text-7xl font-extrabold text-accent">
                <CountUp start={0} end={5} duration={3} enableScrollSpy scrollSpyOnce />+
              </div>
              <div className="text-base text-gray-300 mt-2">
                Countries Served
              </div>
            </div>

            {/* Happy Students */}
            <div className="p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-center">
              <div className="text-6xl md:text-7xl font-extrabold text-green-400">
                <CountUp start={0} end={1000} duration={3} enableScrollSpy scrollSpyOnce />+
              </div>
              <div className="text-base text-gray-300 mt-2">
                Happy Students
              </div>
            </div>

            {/* Success Rate */}
            <div className="p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-center">
              <div className="text-6xl md:text-7xl font-extrabold text-purple-400">
                <CountUp start={0} end={95} duration={3} enableScrollSpy scrollSpyOnce />%
              </div>
              <div className="text-base text-gray-300 mt-2">
                Success Rate
              </div>
            </div>

            {/* Positive Reviews */}
            <div className="p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-center">
              <div className="text-6xl md:text-7xl font-extrabold text-pink-400">
                <CountUp start={0} end={900} duration={3} enableScrollSpy scrollSpyOnce />+
              </div>
              <div className="text-base text-gray-300 mt-2">
                Positive Reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
