"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import backgroundGermany from "@/assets/Background/background_germany.jpg";

export default function About() {
  const [startCount, setStartCount] = useState(false);
  const [duration, setDuration] = useState(2.5);

  useEffect(() => {
    setStartCount(true);
    if (window.innerWidth < 640) {
      setDuration(5);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section
      className="relative py-16 sm:py-20 overflow-hidden h-full min-h-screen
      bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.85), rgba(8,16,40,0.9)), url(${backgroundGermany})`,
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute -top-24 -left-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              About <span className="text-purple-400">Wizzen <br />Overseas</span>
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              At{" "}
              <span className="text-purple-300 font-semibold">
                Wizzen Overseas Education & Immigration
              </span>
              , we specialize in guiding students toward their global education dreams.
              With expertise in career counseling, university admissions, visa
              assistance, and language training, we ensure every step of your
              study-abroad journey is smooth and successful.
            </p>
            <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-2xl">
              We partner with top universities and institutions, helping you pick
              the right program for your career goals. With years of experience
              and an industry-leading success rate, we are proud to be trusted
              by students worldwide.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { value: 5, suffix: "+", label: "Countries Served", color: "text-blue-400" },
              { value: 1000, suffix: "+", label: "Happy Students", color: "text-green-400" },
              { value: 95, suffix: "%", label: "Success Rate", color: "text-purple-400" },
              { value: 900, suffix: "+", label: "Positive Reviews", color: "text-pink-400" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-center min-w-0 shadow-lg shadow-black/20"
              >
                <div className={`text-3xl sm:text-4xl md:text-6xl font-extrabold ${stat.color} break-words`}>
                  {startCount && <CountUp end={stat.value} duration={duration} />}
                  {stat.suffix}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-300 mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}