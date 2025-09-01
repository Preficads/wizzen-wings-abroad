"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Globe, GraduationCap, Briefcase } from "lucide-react";
import HeroBG from "@/assets/hero-bg.jpg"; // Background image

export default function About() {
  const [count, setCount] = useState({ students: 0, visaRate: 0, reviews: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => ({
        students: prev.students < 1000 ? prev.students + 10 : prev.students,
        visaRate: prev.visaRate < 95 ? prev.visaRate + 1 : prev.visaRate,
        reviews: prev.reviews < 900 ? prev.reviews + 10 : prev.reviews,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen text-foreground py-20 px-6 lg:px-20 overflow-hidden">
        {/* Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center h-full"
          style={{
            backgroundImage: `url(${HeroBG})`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
              About <br />
              <span className="text-7xl lg:text-8xl bg-gradient-to-r from-[#b57e10] via-[#fff3a6] to-[#b57e10] bg-clip-text text-transparent leading-none">
                Wizzen
              </span>{" "}
              <span className="text-5xl lg:text-7xl bg-gradient-to-r from-[#b57e10] via-[#fff3a6] to-[#b57e10] bg-clip-text text-transparent leading-none">
                Overseas
              </span>
              <p className="text-xl text-white font-semibold mt-2">
                Education & Immigration
              </p>
            </h1>
            <p className="text-base lg:text-lg text-gray-200 max-w-3xl">
              At{" "}
              <span className="font-semibold">
                Wizzen Overseas Education & Immigration
              </span>
              , we are dedicated to guiding students toward their global education dreams. With expert career counseling, tailored university admission support, 
              and step-by-step visa assistance, we make the study-abroad process smooth and stress-free. We also provide language training to enhance confidence 
              and meet academic or visa requirements. More than just guidance, we ensure every student’s journey abroad is a successful pathway to a brighter future.
            </p>
          </motion.div>

          {/* 3 Cards moved here inside Hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-20"
          >
            <GlassCard
              icon={<Globe className="h-8 w-8 text-[#b57e10] mb-4" />}
              title="Study Abroad Countries"
              text="Wizzen offers opportunities to study in top destinations worldwide, including Europe, USA, Canada, UK, Australia, New Zealand, and more."
            />
            <GlassCard
              icon={<Briefcase className="h-8 w-8 text-[#fff3a6] mb-4" />}
              title="Immigration & PR Destinations"
              text="We assist in permanent residency (PR) pathways and long-term migration for countries like Canada, Australia, USA, UK, and Schengen countries."
            />
            <GlassCard
              icon={<GraduationCap className="h-8 w-8 text-[#b57e10] mb-4" />}
              title="Study Abroad Programs"
              text="We offer Bachelor's, Master's, MBBS, Nursing, and other programs, ensuring a perfect match with your career goals."
            />
          </motion.div>
        </div>
      </section>

      {/* OUR IMPACT */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-10"
          >
            Our Impact
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            <ImpactCard title={`${count.students}+`} text="Students Successfully Placed" />
            <ImpactCard title={`${count.visaRate}%`} text="Visa Success Rate" />
            <ImpactCard title={`${count.reviews}+`} text="Positive Client Reviews" />
          </div>
        </div>
      </section>

      {/* STUDY ABROAD COUNTRIES */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold mb-12">Study Abroad Countries</h2>
          <CountrySection
            title="Europe (Schengen countries)"
            text="Germany, France, Italy, Spain, Poland, Hungary, Netherlands, Austria, Czech Republic, Lithuania, Latvia, and more."
          />
          <CountrySection
            title="UK & Ireland"
            text="Prestigious institutions in law, business, medicine, and technology programs, with rich cultural environments."
          />
          <CountrySection
            title="USA & Canada"
            text="Opportunities in business, medicine, engineering, and more. Both countries have a strong job market for skilled professionals."
          />
          <CountrySection
            title="Australia & New Zealand"
            text="Known for business, healthcare, hospitality, agriculture, tourism, and research programs with a high standard of living."
          />
          <CountrySection
            title="Asia"
            text="Japan, South Korea, Singapore, Malaysia, and the UAE provide strong opportunities, particularly in technology and finance."
          />
        </div>
      </section>

      {/* IMMIGRATION & PR */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Immigration & PR Destinations</h2>
          <p className="text-lg text-gray-700">
            Strong pathways for permanent residency (PR) through work, study, or skilled migration
            programs: Canada, Australia, New Zealand, Schengen countries, USA, and the UK.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Step
              number="01"
              title="Career Counseling"
              text="Personalized guidance to help you choose the right course and country for your career goals."
            />
            <Step
              number="02"
              title="University Admissions"
              text="Expert assistance in university applications, SOP preparation, and more."
            />
            <Step
              number="03"
              title="Visa & Travel Support"
              text="Complete support for visa applications, travel arrangements, and pre-departure guidance."
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* Reusable Glass Card */
function GlassCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg p-6 rounded-2xl text-left"
    >
      {icon}
      <h3 className="text-xl font-semibold bg-gradient-to-r from-[#b57e10] via-[#fff3a6] to-[#b57e10] bg-clip-text text-transparent mb-2">
        {title}
      </h3>
      <p className="text-gray-200">{text}</p>
    </motion.div>
  );
}

/* Reusable Impact Card */
function ImpactCard({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      className="bg-blue-100 rounded-2xl shadow-lg p-6 text-center"
    >
      <h3 className="text-4xl lg:text-5xl font-bold text-blue-700">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{text}</p>
    </motion.div>
  );
}

/* Reusable Country Section */
function CountrySection({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4"
    >
      <h3 className="text-lg lg:text-xl font-semibold text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-700">{text}</p>
    </motion.div>
  );
}

/* Reusable Step Card */
function Step({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-xl border border-white/20 shadow-lg p-6 text-center">
      <span className="text-3xl lg:text-4xl font-bold text-primary">{number}</span>
      <h4 className="text-lg font-semibold mt-3">{title}</h4>
      <p className="text-sm text-muted-foreground mt-2">{text}</p>
    </div>
  );
}
