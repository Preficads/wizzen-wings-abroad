"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, Globe, GraduationCap, Briefcase, CheckCircle } from "lucide-react";
import HeroBG from "@/assets/hero-bg.jpg"; // Background image

export default function About() {
  const [count, setCount] = useState({ students: 0, visaRate: 0, reviews: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      if (count.students < 1000) setCount((prev) => ({ ...prev, students: prev.students + 10 }));
      if (count.visaRate < 95) setCount((prev) => ({ ...prev, visaRate: prev.visaRate + 1 }));
      if (count.reviews < 900) setCount((prev) => ({ ...prev, reviews: prev.reviews + 10 }));
    }, 50);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <section className="relative min-h-screen text-foreground py-20 px-6 lg:px-20 overflow-hidden">
      {/* Hero Section Background with Increased Height */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center h-[160vh] lg:h-[93vh]"
        style={{
          backgroundImage: `url(${HeroBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16"
        >
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 text-white">
            About <br />
            <span className="text-8xl bg-gradient-to-r from-[#b57e10] via-[#fff3a6] to-[#b57e10] bg-clip-text text-transparent leading-none">
              Wizzen Overseas
            </span>
            <p className="text-x2 text-white font-semibold mt-2">
              Education & Immigration
            </p>
          </h1>
          <p className="text-lg text-gray-400">
            At <span className="font-semibold">Wizzen Overseas Education & Immigration</span>, we specialize in guiding
            students toward their <br />
            global education dreams. With expertise in career counseling, university admissions,<br />
            visa assistance, and language training, we ensure every step of your study-abroad <br />journey is smooth and
            successful. We partner with top universities and institutions, <br />helping you pick the right program for your career goals.
          </p>
        </motion.div>


        {/* Glass Cards Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative py-20 px-6 lg:px-20"
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg p-4 rounded-2xl"
            >
              <Globe className="h-8 w-8 text-[#b57e10] mb-4" />
              <h3 className="text-xl font-semibold bg-gradient-to-r from-[#b57e10] via-[#fff3a6] to-[#b57e10] bg-clip-text text-transparent mb-2">
                Study Abroad Countries
              </h3>
              <p className="text-white text-sm">
                Wizzen offers opportunities to study in top destinations worldwide, including Europe, USA, Canada, UK, Australia, New Zealand, and more.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg p-4 rounded-2xl"
            >
              <Briefcase className="h-8 w-8 text-[#fff3a6] mb-4" />
              <h3 className="text-xl font-semibold bg-gradient-to-r from-[#b57e10] via-[#fff3a6] to-[#b57e10] bg-clip-text text-transparent mb-2">
                Immigration & PR Destinations
              </h3>
              <p className="text-white text-sm">
                We assist in permanent residency (PR) pathways and long-term migration for countries like Canada, Australia, USA, UK, and Schengen countries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg p-4 rounded-2xl"
            >
              <GraduationCap className="h-8 w-8 text-[#b57e10] mb-4" />
              <h3 className="text-xl font-semibold bg-gradient-to-r from-[#b57e10] via-[#fff3a6] to-[#b57e10] bg-clip-text text-transparent mb-2">
                Study Abroad Programs
              </h3>
              <p className="text-white text-sm">
                We offer Bachelor's, Master's, MBBS, Nursing, and other programs, ensuring a perfect match with your career goals.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Impact Section with Counting Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="pt-40">
            <h2 className="text-3xl font-bold text-center mb-10">Our Impact</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <ImpactCard title={`${count.students}+`} text="Students Successfully Placed" />
            <ImpactCard title={`${count.visaRate}%`} text="Visa Success Rate" />
            <ImpactCard title={`${count.reviews}+`} text="Positive Client Reviews" />
          </div>
        </motion.div>

        {/* Study Abroad Countries Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-40"
        >
          <div className="pt-25">
            <h2 className="text-3xl font-bold text-center mb-12">Study Abroad Countries</h2>
          </div>
          <div className="space-y-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Europe (Schengen countries)</h3>
              <p className="text-gray-700 text-lg">
                Germany, France, Italy, Spain, Poland, Hungary, Netherlands, Austria, Czech Republic, Lithuania, Latvia, and more. These countries offer strong educational programs, particularly in engineering, arts, business, and technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">UK & Ireland</h3>
              <p className="text-gray-700 text-lg">
                The UK is home to prestigious institutions, especially in law, business, and medicine. Ireland is recognized for its literature, business, and technology programs, with a rich cultural environment for students.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">USA & Canada</h3>
              <p className="text-gray-700 text-lg">
                The USA and Canada offer world-class education, with opportunities for international students in fields such as business, medicine, engineering, and more. Both countries have a strong job market for skilled professionals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Australia & New Zealand</h3>
              <p className="text-gray-700 text-lg">
                Australia is known for its diverse academic offerings in business, healthcare, and hospitality, while New Zealand offers excellent programs in agriculture, tourism, and research, all with a high standard of living.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Asia</h3>
              <p className="text-gray-700 text-lg">
                Japan, South Korea, Singapore, Malaysia, and the UAE provide strong educational opportunities, particularly in technology, finance, and manufacturing. These countries are home to some of the most advanced industries in the world.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Immigration & PR Destinations Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="pt-18">
            <h2 className="text-3xl font-bold mb-10">Immigration & PR Destinations</h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-gray-700 text-lg mx-auto max-w-3xl"
          >
            The following countries offer strong pathways for permanent residency (PR) through work, study, or skilled migration programs:
            <br />
            Canada, Australia, New Zealand, Schengen countries (Europe), USA, and the UK. These countries not only provide educational opportunities but also offer career advancement and permanent residency options for skilled professionals.

          </motion.p>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Step number="01" title="Career Counseling" text="Personalized guidance to help you choose the right course and country for your career goals." />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Step number="02" title="University Admissions" text="Expert assistance in university applications, SOP preparation, and more." />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Step number="03" title="Visa & Travel Support" text="Complete support for visa applications, travel arrangements, and pre-departure guidance." />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Reusable Impact Card */
function ImpactCard({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      className="bg-blue-100 rounded-2xl shadow-lg p-6 text-center"
    >
      <h3 className="text-5xl font-bold text-blue-700">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{text}</p>
    </motion.div>
  );
}

/* Reusable Step Card */
function Step({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-xl border border-white/20 shadow-lg p-6 text-center">
      <span className="text-4xl font-bold text-primary">{number}</span>
      <h4 className="text-lg font-semibold mt-3">{title}</h4>
      <p className="text-sm text-muted-foreground mt-2">{text}</p>
    </div>
  );
}