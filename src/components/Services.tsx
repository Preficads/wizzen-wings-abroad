"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap,
  FileText,
  Plane,
  Building2,
  ArrowRight,
  CheckCircle,
  ClipboardList,
  BookOpen,
  Wallet,
  Stamp,
  PlaneTakeoff,
  Compass,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceBG from "@/assets/Background/ServiceBG.jpg";

// ✅ Service Data (cards at top)
const services = [
  {
    id: "study-abroad",
    icon: GraduationCap,
    title: "Study Abroad Programs",
    description:
      "Comprehensive guidance for studying in Europe's top universities",
    features: [
      "University selection assistance",
      "Course recommendation",
      "Application support",
      "Scholarship guidance",
    ],
    color: "text-blue-600",
  },
  {
    id: "immigration",
    icon: FileText,
    title: "Immigration Services",
    description: "Complete immigration support for European countries",
    features: [
      "Visa application processing",
      "Document verification",
      "Legal compliance",
      "Status tracking",
    ],
    color: "text-green-600",
  },
  {
    id: "work-visa",
    icon: Plane,
    title: "Work & Visa Support",
    description: "Professional assistance for work permits and visas",
    features: [
      "Work permit applications",
      "Job search guidance",
      "Employer liaison",
      "Settlement support",
    ],
    color: "text-purple-600",
  },
  {
    id: "documentation",
    icon: Building2,
    title: "Documentation & Admissions",
    description: "Expert help with university admissions and documentation",
    features: [
      "Document preparation",
      "University applications",
      "Interview preparation",
      "Admission follow-up",
    ],
    color: "text-orange-600",
  },
];

// ✅ Detailed Descriptions
const detailedServices = [
  {
    icon: ClipboardList,
    title: "Career Counseling & Profile Assessment",
    description:
      "We begin by understanding your academic background, career aspirations, and financial plans. Our experts help you identify the best country, course, and institution that align with your long-term goals.",
  },
  {
    icon: BookOpen,
    title: "University Admissions Assistance",
    description:
      "Our team assists you in preparing strong applications, drafting impactful SOPs, and ensuring timely submissions to top universities. We work closely with you to increase your chances of securing admission to prestigious institutions.",
  },
  {
    icon: Wallet,
    title: "Documentation & Financial Guidance",
    description:
      "We guide you through the complex documentation process, from transcripts and recommendation letters to financial planning. Whether it’s education loans, scholarships, or proof of funds, we ensure you are fully prepared.",
  },
  {
    icon: Stamp,
    title: "Visa Application & Interview Preparation",
    description:
      "Our experts provide complete support for visa applications, ensuring accuracy and compliance with embassy guidelines. We also conduct mock interviews to help you gain confidence and increase your approval chances.",
  },
  {
    icon: PlaneTakeoff,
    title: "Pre-Departure Support",
    description:
      "From travel arrangements, insurance, and forex assistance to cultural orientation sessions, we make sure you are fully equipped before you step into your new country.",
  },
  {
    icon: Compass,
    title: "Post-Arrival & Career Guidance",
    description:
      "Our support doesn’t stop after you land. We assist you with accommodation, part-time job search, and long-term career planning, including immigration and permanent residency (PR) pathways in Europe and beyond.",
  },
];

// ✅ Main Page
export default function Services() {
  return (
    <>
      {/* ✅ Hero Section */}
      <section
        id="services"
        className="relative py-16 sm:py-20 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${ServiceBG})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-30 mx-auto max-w-full sm:max-w-7xl px-6 sm:px-8 lg:px-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-left text-white mb-12 sm:mb-7"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Our <br />
              <span className="bg-gradient-to-r from-[#b57e10] via-[#fff3a6] to-[#b57e10] bg-clip-text text-transparent text-4xl sm:text-6xl lg:text-8xl">
                Services
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl">
              We provide end-to-end solutions for your European education and immigration journey, making the entire process seamless and stress-free. From selecting the right country, university, and course to preparing strong applications and guiding you through visa formalities, our expert team ensures you receive complete support at every stage. We are committed to simplifying complex procedures so you can focus on your goals with confidence. With our personalized approach, we don’t just help you study or move abroad—we help you build a successful future in Europe.
            </p>
          </motion.div>

          {/* Cards Section (Top Services) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Card
                    className="w-full group cursor-pointer transition-all duration-500 ease-out
                  bg-white/10 backdrop-blur-2xl 
                  border border-white/20 shadow-lg
                  rounded-2xl hover:border-yellow-400/50
                  hover:shadow-yellow-400/20"
                  >
                    <CardHeader className="text-center pb-3">
                      <div className="mx-auto mb-3 p-3 rounded-full bg-white/20 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className={`h-7 w-7 ${service.color}`} />
                      </div>
                      <CardTitle className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                        {service.title}
                      </CardTitle>
                      <p className="text-sm text-gray-300">
                        {service.description}
                      </p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-200"
                          >
                            <CheckCircle className="h-3 w-3 text-yellow-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link to={`/services/${service.id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-[#b57e10] text-black hover:bg-yellow-400 hover:text-black"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ✅ White Cards Section (outside hero) */}
      <section className="relative bg-white py-16 sm:py-20 -mt-12 sm:-mt-16">
        <div className="mx-auto max-w-full sm:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {detailedServices.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="p-3 rounded-full bg-black/10">
                        <IconComp className="w-6 h-6 text-gray-700" />
                      </div>
                      <CardTitle className="text-base sm:text-lg font-semibold text-[#430518]">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-black text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
