// src/pages/country/germany.tsx
"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  GraduationCap,
  Globe,
  Briefcase,
  FileText,
  Plane,
  CheckCircle,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ✅ Counter component (animated count up)
function Counter({ from = 0, to, suffix = "" }: { from?: number; to: number; suffix?: string }) {
  const count = useMotionValue(from);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [to, count]);

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.floor(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [count, suffix]);

  return <span ref={ref} />;
}

export default function Germany() {
  return (
    <div className="bg-white text-gray-900">
      {/* Landing Section */}
      <section className="relative bg-gradient-to-r from-red-900 via-black to-yellow-600 text-white py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Unlock Your Future in <br />Germany with Wizzen Overseas
        </motion.h1>
        <p className="text-lg md:text-xl mb-6">
          World-class education. Strong economy. Clear immigration pathway.
        </p>
        <p className="max-w-2xl mx-auto mb-8 text-gray-200">
          As Kerala’s most trusted European education consultants, we guide you
          through everything—from selecting the right German university to
          settling in Germany with confidence.
        </p>
        <Button
          size="lg"
          className="rounded-2xl bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
        >
          Get Started Today →
        </Button>
      </section>

      {/* Why Germany */}
      <section className="py-10 px-6 bg-gradient-to-r from-red-900 via-black to-yellow-600 text-white">
        <h2 className="text-3xl font-bold text-center mb-12">Why Germany?</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: GraduationCap,
              title: "Affordable, High-Quality Education",
              desc: "World-class academics with low or no tuition fees at public universities.",
            },
            {
              icon: Globe,
              title: "Academic & Industry Excellence",
              desc: "Top-ranked universities with strong industry ties and applied research.",
            },
            {
              icon: FileText,
              title: "Diverse, English-Taught Programs",
              desc: "Engineering, Business, Sciences, and more—many fully taught in English.",
            },
            {
              icon: Briefcase,
              title: "Post-Study Work & Immigration",
              desc: "18-month job-seeker visa and clear PR pathways for skilled professionals.",
            },
            {
              icon: Plane,
              title: "Gateway to Europe",
              desc: "Germany’s central location lets you explore Europe with ease.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "tween", duration: 0.5, delay: i * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 500, damping: 24 }}
                className="rounded-2xl shadow-lg bg-white/10 hover:bg-white/20 transition cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: i * 0.2,
                  }}
                  className="p-6"
                >
                  <item.icon className="h-10 w-10 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.desc}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Programs in Germany */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Programs in Germany
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            "Bachelor’s & Master’s Programs",
            "Diploma & Certificate Courses",
            "Medical & MBBS Pathways",
            "Language & Foundation Courses",
          ].map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.15 }}
              className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <CheckCircle className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="text-lg font-semibold">{program}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Work & Immigration */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Work & Immigration Pathways
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            "Skilled Worker Visas",
            "Job-Seeker Visa (Opportunity Card)",
            "Permanent Residency (PR)",
            "Employer-Sponsored Visas",
          ].map((path, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.15 }}
              className="p-6 rounded-2xl bg-gray-50 shadow hover:shadow-lg cursor-pointer"
            >
              <ShieldCheck className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold">{path}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Germany Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            "University Selection & Admissions Counseling",
            "Visa Documentation Support",
            "SOP & CV Guidance",
            "Pre-Departure Briefing",
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.15 }}
              className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <Users className="h-8 w-8 text-red-600 mb-3" />
              <h3 className="text-lg font-semibold">{service}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Track Record in Germany</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.15 }}
            className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg cursor-pointer"
          >
            <h3 className="text-4xl font-bold text-yellow-600">
              <Counter to={95} suffix="%" />
            </h3>
            <p className="mt-2 text-gray-700">Visa Success Rate</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.15 }}
            className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg cursor-pointer"
          >
            <h3 className="text-4xl font-bold text-yellow-600">
              <Counter to={1000} />+
            </h3>
            <p className="mt-2 text-gray-700">Students Placed Globally</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.15 }}
            className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg cursor-pointer"
          >
            <h3 className="text-4xl font-bold text-yellow-600">
              <Counter to={900} />+
            </h3>
            <p className="mt-2 text-gray-700">Positive Reviews</p>
          </motion.div>
        </div>
      </section>

      {/* Why Wizzen */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Wizzen Abroad Studies?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Kerala’s Reliable European Education Partner",
              desc: "Established in 2019, rooted in trust and a personal touch.",
            },
            {
              title: "End-to-End Guidance",
              desc: "From strategy to onboarding, we guide you at every step.",
            },
            {
              title: "Results-Driven Record",
              desc: "5+ years experience, hundreds of success stories.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.15 }}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-yellow-600 to-red-700 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Begin Your Germany Journey?
        </h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Wizzen Overseas is with you every step of the way—until you take your
          first step on German soil.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            size="lg"
            className="rounded-2xl bg-black hover:bg-gray-800 text-white"
          >
            Schedule a Free Consultation
          </Button>
          <Button
            size="lg"
            className="rounded-2xl bg-white text-black font-semibold hover:bg-gray-200"
          >
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
}
