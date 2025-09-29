"use client";

import { motion } from "framer-motion";
import { GraduationCap, Globe, BookOpenCheck } from "lucide-react";
import HeroBG from "@/assets/german-bg.jpg"; // Replace with an appropriate German-themed image
import { useEffect, useState } from "react";

export default function LearnGerman() {
  const [count, setCount] = useState({ learners: 0, success: 0, experience: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => ({
        learners: prev.learners < 500 ? prev.learners + 5 : prev.learners,
        success: prev.success < 98 ? prev.success + 1 : prev.success,
        experience: prev.experience < 10 ? prev.experience + 1 : prev.experience,
      }));
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen text-white py-20 px-6 lg:px-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HeroBG})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="relative z-10 max-w-6xl mx-auto text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white"
          >
            <br></br>
            <br></br>
            Learn <br />
            <span className="text-7xl lg:text-8xl bg-gradient-to-r from-[#b57e10] via-[#fff3a6] to-[#b57e10] bg-clip-text text-transparent leading-none">
              German<br></br>
            </span>{" "}
            <span className="text-5xl lg:text-7xl bg-gradient-to-r from-[#b57e10] via-[#fff3a6] to-[#b57e10] bg-clip-text text-transparent leading-none">
              with Wizzen
            </span>
            <p className="text-xl text-white font-semibold mt-2">
              Language Training & Career Growth
            </p>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg lg:text-xl max-w-3xl text-gray-100"
          >
            Master the German language with expert trainers, immersive learning methods, and practical guidance —{" "}
            <span className="font-semibold text-yellow-300">absolutely free when you fly with Wizzen.</span>
            Only students studying abroad independently (not via Wizzen) pay regular course fees.
          </motion.p>
        </div>
      </section>

      {/* WHY LEARN GERMAN */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-8"
          >
            Why Learn German?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-700 mb-12"
          >
            German is one of the most widely spoken languages in Europe and a gateway to top-ranked universities,
            research institutions, and global career opportunities. Proficiency in German not only enhances your academic
            prospects but also opens doors to international networking, cultural understanding, and work placements across Europe.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard
              icon={<Globe className="h-10 w-10 text-yellow-500 mb-4" />}
              title="Global Recognition"
              text="Germany is Europe’s largest economy and home to world-class universities, making German a valuable asset for global careers."
            />
            <InfoCard
              icon={<GraduationCap className="h-10 w-10 text-red-600 mb-4" />}
              title="Study & Scholarships"
              text="German proficiency increases your chances of admission and scholarships at top universities across Europe."
            />
            <InfoCard
              icon={<BookOpenCheck className="h-10 w-10 text-yellow-600 mb-4" />}
              title="Cultural & Career Growth"
              text="Learn to communicate confidently and connect with the culture, people, and professional world of Germany."
            />
          </div>
        </div>
      </section>

      {/* WHY WIZZEN */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-8"
          >
            Why Study German with Wizzen?
          </motion.h2>
          <p className="text-lg text-gray-700 mb-10 max-w-4xl mx-auto">
            At Wizzen, our German language programs are designed by certified trainers and experienced study-abroad experts.
            We focus on practical communication, grammar excellence, and visa interview readiness — all integrated into your
            study abroad journey. When you choose to <span className="font-semibold text-yellow-600">fly with Wizzen</span>,
            your German training comes at no cost. Your focus stays purely on learning and preparation.
          </p>

          <div className="grid gap-8 md:grid-cols-3 mt-12">
            <FeatureCard title="Certified Instructors" text="Native and certified language professionals ensure you master authentic pronunciation and fluency." />
            <FeatureCard title="Flexible Batches" text="Morning and evening schedules for students and professionals." />
            <FeatureCard title="Visa-Focused Learning" text="Our modules prepare you for visa interviews and real-life communication abroad." />
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-12"
          >
            Our German Learning Journey
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            <Step number="01" title="Counseling & Level Test" text="We assess your level (A1–C1) and recommend the right batch." />
            <Step number="02" title="Interactive Classes" text="Live sessions, grammar drills, and conversation practice." />
            <Step number="03" title="Certification & Prep" text="We help you prepare for Goethe or TELC exams." />
            <Step number="04" title="Study Abroad Support" text="From visa to university admission — we guide you at every step." />
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-20 px-6 lg:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-12"
          >
            Our Impact in Language Education
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            <ImpactCard title={`${count.learners}+`} text="Learners Trained Successfully" />
            <ImpactCard title={`${count.success}%`} text="Exam Success Rate" />
            <ImpactCard title={`${count.experience}+`} text="Years of Teaching Experience" />
          </div>
        </div>
      </section>
    </>
  );
}

/* Reusable Components */
function InfoCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-gray-100 p-6 rounded-2xl shadow-md text-center"
    >
      {icon}
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </motion.div>
  );
}

function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
    >
      <h3 className="text-lg font-semibold text-yellow-700 mb-2">{title}</h3>
      <p className="text-gray-700">{text}</p>
    </motion.div>
  );
}

function Step({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-gradient-to-br from-yellow-50 to-red-50 shadow-md p-6 text-center border border-yellow-200"
    >
      <span className="text-4xl font-bold text-yellow-600">{number}</span>
      <h4 className="text-lg font-semibold mt-3 text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600 mt-2">{text}</p>
    </motion.div>
  );
}

function ImpactCard({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100"
    >
      <h3 className="text-4xl font-bold text-yellow-700">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{text}</p>
    </motion.div>
  );
}
