// src/pages/StudyMBBS.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import PlaneBG from "@/assets/Background/PlaneBG.jpg";
import Plane2BG from "@/assets/Background/MbbsGirl.jpg";
import Plane3BG from "@/assets/Background/Plane3.jpg";

// ✅ Flags for featured countries
const flags: Record<string, string> = {
  georgia: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg",
  armenia: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg",
  moldova: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg",
  bosnia: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg",
  azerbaijan: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",
  romania: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
  egypt: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
  poland: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
  bulgaria: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
};

const countries = [
  "Georgia",
  "Armenia",
  "Moldova",
  "Bosnia",
  "Azerbaijan",
  "Romania",
  "Egypt",
  "Poland",
  "Bulgaria",
];


// ✅ Fade-in animation (supports stagger with `custom`)
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function StudyMBBS() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* ===================== Hero Section ===================== */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${Plane2BG})` }}
      >
        <div className="container mx-auto px-0 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="font-extrabold uppercase leading-none"
          >
            {/* Study */}
            <span className="text-white text-6xl md:text-7xl font-medium block leading-none">
              Study
            </span>

            {/* MBBS */}
            <span className="block text-7xl md:text-9xl bg-gradient-to-r from-[#b57e10] via-[#fff3a6] to-[#b57e10] 
                   bg-clip-text text-transparent leading-none -mt-1">
              MBBS
            </span>

            {/* Abroad */}
            <span className="block text-5xl md:text-9xl bg-gradient-to-l from-[#b57e10] via-[#b57e10] to-[#fff3a6] 
                   bg-clip-text text-transparent leading-none -mt-1">
              Abroad
            </span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-4 max-w-lg text-lg text-gray-200"
          >
            Admissions Open 2025 | Top Universities | Hassle-Free Process
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-6 flex gap-4"
          >
            <button className="px-6 py-3 rounded-xl font-semibold text-white 
                   bg-gradient-to-r from-white/20 to-white/10 
                   backdrop-blur-md border border-white/20 shadow-lg 
                   hover:from-white/30 hover:to-white/20 
                   transition-all duration-300 transform hover:scale-105">
              Apply Now
            </button>


            <button
              className="px-6 py-3 rounded-xl font-semibold text-[#fff3a6] 
             border border-white/50 bg-transparent 
             transition-all duration-300 transform hover:scale-105 
             hover:border-white hover:text-white"
            >
              Free Counselling
            </button>



          </motion.div>
        </div>
        <div className="absolute inset-0" />
      </section>

      {/* ===================== Intro Section (mobile overlap fixed) ===================== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Block */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Why Study MBBS Abroad?
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Every year, thousands of Indian students choose to pursue MBBS abroad
              because of affordable tuition, globally recognized universities, and
              world-class infrastructure. With English as the medium of instruction
              and WHO/NMC approved universities, students gain international exposure
              and access to advanced medical training.
            </p>
            <ul className="mt-6 space-y-3 text-gray-800">
              <li>✅ Affordable tuition fees compared to Indian private colleges</li>
              <li>✅ Globally recognized degrees accepted in India & worldwide</li>
              <li>✅ English-medium curriculum with no language barrier</li>
              <li>✅ Hands-on clinical exposure in top hospitals</li>
              <li>✅ Safe campuses & cultural diversity</li>
            </ul>
          </motion.div>

          {/* Image Block */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="order-1 md:order-2 flex justify-center"
          >
            <img
              src={PlaneBG}
              alt="MBBS Abroad"
              className="rounded-2xl shadow-2xl max-w-md mt-6 md:mt-0"
            />
          </motion.div>
        </div>
      </section>

      {/* ===================== Quick Highlights ===================== */}
      <section className="py-16 bg-gray-100">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center"
        >
          Quick Highlights
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 container mx-auto px-6">
          {[
            "WHO & NMC Approved Universities",
            "English-Medium Education",
            "Affordable & Transparent Process",
            "100% Visa & Travel Assistance",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={idx}
              className="text-center bg-white shadow-md p-6 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="block text-2xl">✅</span>
              <p className="mt-2">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== Featured Countries ===================== */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${Plane3BG})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial="hidden"
            whileInView="show"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-white uppercase"
          >
            Featured Countries
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-12">
            {countries.map((country, idx) => (
              <motion.div
                key={country}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                custom={idx}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="backdrop-blur-xl bg-blue-200/20 border border-white/30 rounded-2xl shadow-xl hover:shadow-2xl flex flex-col overflow-hidden"
              >
                <div className="w-full h-28 overflow-hidden">
                  <img
                    src={flags[country.toLowerCase() as keyof typeof flags]}
                    alt={`${country} Flag`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col items-center text-white">
                  <h3 className="text-lg font-bold">{country}</h3>
                  <a
                    href={`/countries/${country.toLowerCase()}`}
                    className="text-orange-300 mt-2 font-medium hover:underline"
                  >
                    Explore →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Eligibility ===================== */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          Eligibility
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-6">
          {[
            {
              icon: "📘",
              title: "Academic Requirement",
              desc: "Minimum 50% in Physics, Chemistry, Biology (PCB).",
            },
            {
              icon: "🎯",
              title: "NEET Qualification",
              desc: "Mandatory as per Indian government rules.",
            },
            {
              icon: "🎂",
              title: "Age Criteria",
              desc: "Minimum age of 17 years by admission time.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-lg bg-white/40 shadow-xl border border-white/30 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== Admission Process ===================== */}
      <section className="py-20 bg-white relative">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          Admission Process
        </motion.h2>

        <div className="relative mt-16 max-w-3xl mx-auto px-6">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-orange-300"></div>
          <div className="space-y-12">
            {[
              "Free Counselling & Country Selection",
              "Application Submission",
              "Offer/Admission Letter from University",
              "Visa Processing",
              "Travel & Accommodation Support",
              "On-Campus Assistance",
            ].map((step, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`relative flex items-center ${idx % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold shadow-lg">
                  {idx + 1}
                </div>
                <div
                  className={`w-[90%] sm:w-[70%] md:w-[45%] backdrop-blur-xl bg-orange-50 border border-orange-100 shadow-md p-6 rounded-xl ${idx % 2 === 0 ? "text-left" : "text-right"
                    }`}
                >
                  <p className="font-medium">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Benefits ===================== */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          Benefits of MBBS Abroad
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-6">
          {[
            "Globally recognized degrees",
            "English-medium education",
            "High-quality infrastructure & hospitals for practice",
            "Affordable compared to private MBBS in India",
            "International exposure & cultural diversity",
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 backdrop-blur-lg bg-white/40 border border-white/30 shadow-lg rounded-xl p-6"
            >
              <span className="text-2xl text-orange-500">✅</span>
              <p>{benefit}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="py-20 bg-white">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          FAQ
        </motion.h2>

        <div className="mt-12 max-w-3xl mx-auto px-6">
          {[
            ["Is NEET mandatory?", "Yes, NEET is mandatory for admission."],
            ["Are degrees valid in India?", "Yes, degrees are recognized in India."],
            [
              "Can I practice in India after MBBS abroad?",
              "Yes, after clearing the necessary screening tests in India.",
            ],
            ["Is the medium of instruction English?", "Yes, the medium of instruction is English."],
            [
              "Do you provide visa and travel support?",
              "Yes, we provide 100% visa and travel assistance.",
            ],
          ].map(([q, a], idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="mb-6 border border-gray-200 rounded-xl shadow-sm"
            >
              <details className="p-6 rounded-xl cursor-pointer backdrop-blur-sm bg-gray-50 hover:bg-gray-100 transition">
                <summary className="font-semibold">{q}</summary>
                <p className="mt-2 text-gray-700">{a}</p>
              </details>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== Contact Us ===================== */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          Contact Us
        </motion.h2>

        <motion.form
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto space-y-6 backdrop-blur-xl bg-white/50 border border-white/30 shadow-xl p-10 rounded-2xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block font-medium">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <div>
            <label htmlFor="country" className="block font-medium">
              Country Interested
            </label>
            <select
              id="country"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-400"
            >
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Submit
          </button>
        </motion.form>
      </section>
    </div>
  );
}
