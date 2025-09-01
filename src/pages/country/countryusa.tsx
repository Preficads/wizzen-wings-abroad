"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe,
  Briefcase,
  FileText,
  Plane,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CountryUSA() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero + Why USA merged */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden w-full py-20">
        {/* Dark USA Flag Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-gray-900 to-blue-900" />
        <div className="absolute inset-0 bg-black/50" />

        {/* Content Wrapper */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              Unlock Your Future in the USA with Wizzen Overseas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="mt-6 text-lg md:text-xl text-gray-200"
            >
              World-class universities. Global career opportunities. A clear
              pathway to success.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              className="mt-4 text-md md:text-lg text-gray-300"
            >
              As Kerala’s most trusted overseas education consultants, we guide
              you through everything—from selecting the right U.S. university to
              settling in America with confidence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
            >
              <Button className="mt-8 px-8 py-4 text-lg bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl shadow-lg">
                Get Started Today →
              </Button>
            </motion.div>
          </div>

          {/* Why USA inside same section */}
          <div className="mt-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center text-white"
            >
              Why Study in the USA?
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
              {[
                {
                  icon: <GraduationCap className="h-10 w-10 text-blue-300" />,
                  title: "Top-Ranked Universities",
                  desc: "Home to Ivy League and world-leading research institutions.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-green-300" />,
                  title: "Cutting-Edge Research",
                  desc: "Strong industry-academic collaboration with innovation hubs.",
                },
                {
                  icon: <Briefcase className="h-10 w-10 text-orange-300" />,
                  title: "Diverse Programs",
                  desc: "Thousands of courses across every field of study.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-lg border border-white/20 hover:bg-white/20 transition"
                >
                  {item.icon}
                  <h3 className="mt-4 font-semibold text-xl text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-200">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center"
          >
            Programs We Offer
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {[
              {
                icon: <FileText className="h-10 w-10 text-red-500" />,
                title: "Bachelor’s Programs",
                desc: "Choose from a wide range of undergraduate programs in top U.S. universities.",
              },
              {
                icon: <GraduationCap className="h-10 w-10 text-blue-500" />,
                title: "Master’s Programs",
                desc: "Pursue advanced studies with globally recognized master’s degrees.",
              },
              {
                icon: <Plane className="h-10 w-10 text-green-500" />,
                title: "Student Exchange",
                desc: "Gain international exposure through semester-abroad and exchange programs.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
              >
                {item.icon}
                <h3 className="mt-4 font-semibold text-xl">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Pathways Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center"
          >
            Work & Career Pathways
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {[
              {
                icon: <CheckCircle className="h-10 w-10 text-yellow-300" />,
                title: "OPT & CPT Programs",
                desc: "Work while studying with Optional Practical Training and Curricular Practical Training.",
              },
              {
                icon: <Briefcase className="h-10 w-10 text-green-300" />,
                title: "Post-Study Work",
                desc: "Stay back and work in the USA after graduation with extended visa options.",
              },
              {
                icon: <Globe className="h-10 w-10 text-pink-300" />,
                title: "Global Career Opportunities",
                desc: "Leverage your U.S. education for worldwide job placements.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-lg border border-white/20 hover:bg-white/20 transition"
              >
                {item.icon}
                <h3 className="mt-4 font-semibold text-xl">{item.title}</h3>
                <p className="mt-2 text-gray-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {[
              {
                icon: <FileText className="h-10 w-10 text-red-500" />,
                title: "Admission Guidance",
                desc: "End-to-end support for securing admission to top U.S. universities.",
              },
              {
                icon: <Plane className="h-10 w-10 text-blue-500" />,
                title: "Visa Assistance",
                desc: "Expert guidance for smooth and successful visa applications.",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-green-500" />,
                title: "Pre-Departure Support",
                desc: "Orientation, accommodation, and travel arrangements made easy.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
              >
                {item.icon}
                <h3 className="mt-4 font-semibold text-xl">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
