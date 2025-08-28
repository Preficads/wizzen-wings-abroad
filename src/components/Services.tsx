"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  FileText, 
  Plane, 
  Building2, 
  Globe,
  ArrowRight,
  CheckCircle 
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: GraduationCap,
    title: "Study Abroad Programs",
    description: "Comprehensive guidance for studying in Europe's top universities",
    features: [
      "University selection assistance",
      "Course recommendation",
      "Application support",
      "Scholarship guidance"
    ],
    color: "text-blue-600"
  },
  {
    icon: FileText,
    title: "Immigration Services",
    description: "Complete immigration support for European countries",
    features: [
      "Visa application processing",
      "Document verification",
      "Legal compliance",
      "Status tracking"
    ],
    color: "text-green-600"
  },
  {
    icon: Plane,
    title: "Work & Visa Support",
    description: "Professional assistance for work permits and visas",
    features: [
      "Work permit applications",
      "Job search guidance",
      "Employer liaison",
      "Settlement support"
    ],
    color: "text-purple-600"
  },
  {
    icon: Building2,
    title: "Documentation & Admissions",
    description: "Expert help with university admissions and documentation",
    features: [
      "Document preparation",
      "University applications",
      "Interview preparation",
      "Admission follow-up"
    ],
    color: "text-orange-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            We provide comprehensive services for your European education and immigration journey
          </p>
        </motion.div>

        {/* Main Service Grid with floating animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: index * 0.4,
                  ease: "easeInOut"
                }}
              >
                <Card 
                  className="group cursor-pointer transition-all duration-500 ease-out
                             bg-gradient-to-br from-blue-200/40 to-blue-400/40 
                             backdrop-blur-xl border border-blue-300/30 
                             rounded-2xl 
                             hover:scale-105 hover:border-accent/40"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-blue-300/40 backdrop-blur-md transition-all duration-500 group-hover:bg-accent/40">
                      <IconComponent className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-sm text-gray-800">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                          <span className="text-gray-800">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-gray-400 text-gray-900 transition-all duration-500
                                 hover:bg-accent hover:text-accent-foreground hover:border-accent"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Study Abroad Card with entry animation */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="bg-gradient-accent text-accent-foreground p-8 rounded-2xl shadow-xl">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                {/* Left Content */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-accent-foreground/10 rounded-full">
                      <Globe className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-medium opacity-90">I'm Looking for</span>
                  </div>
                  <h3 className="text-5xl font-bold mb-2 text-white">Study Abroad</h3>
                  <p className="text-lg opacity-90 mb-6">
                    Embrace a world of opportunities through immigration.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-accent-foreground/10 rounded-full text-sm text-white">
                      ✈️ Visa Processing
                    </span>
                    <span className="px-3 py-1 bg-accent-foreground/10 rounded-full text-sm text-white">
                      🎓 University Admissions
                    </span>
                    <span className="px-3 py-1 bg-accent-foreground/10 rounded-full text-sm text-white">
                      📄 Documentation
                    </span>
                  </div>
                </div>

                {/* Right Content with slight delay */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-white text-blue-900 border-white hover:bg-gray-200"
                  >
                    Apply Online
                  </Button>
                  <p className="text-sm opacity-75 mt-3 text-white">
                    Start your European education journey today
                  </p>
                </motion.div>

              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}
