"use client";
import GraduationImg from "@/assets/Background/ServiceBG.jpg";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe,
  FileText,
  Plane,
  Users,
  BookOpen,
  DollarSign,
  ShieldCheck,
  Scale,
  Search,
  Briefcase,
  Home,
  FolderOpen,
  University,
  Mic,
  Mail,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "@/components/Footer";

// ✅ Local background image


// 🔹 CountUp Hook
const useCountUp = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
};

// 🔹 Stats Data
const stats = [
  { number: 94, suffix: "%", label: "Visa Success Rate" },
  { number: 650, suffix: "+", label: "Students Abroad" },
];

// 🔹 Services Data (IDs must match Services.tsx)
const services: Record<
  string,
  {
    title: string;
    description: string;
    points: { Icon: any; text: string }[];
    icon: any;
    color: string;
  }
> = {
  "study-abroad": {
    title: "Study Abroad Programs",
    description: "Comprehensive guidance for studying in Europe’s top universities",
    points: [
      { Icon: GraduationCap, text: "University selection assistance" },
      { Icon: BookOpen, text: "Course recommendation" },
      { Icon: FileText, text: "Application support" },
      { Icon: DollarSign, text: "Scholarship guidance" },
    ],
    icon: GraduationCap,
    color: "text-purple-500",
  },
  immigration: {
    title: "Immigration Services",
    description: "Complete immigration support for European countries",
    points: [
      { Icon: FileText, text: "Visa application processing" },
      { Icon: ShieldCheck, text: "Document verification" },
      { Icon: Scale, text: "Legal compliance" },
      { Icon: Search, text: "Status tracking" },
    ],
    icon: Globe,
    color: "text-green-500",
  },
  "work-visa": {
    title: "Work & Visa Support",
    description: "Professional assistance for work permits and visas",
    points: [
      { Icon: FileText, text: "Work permit applications" },
      { Icon: Briefcase, text: "Job search guidance" },
      { Icon: Users, text: "Employer liaison" },
      { Icon: Home, text: "Settlement support" },
    ],
    icon: Plane,
    color: "text-blue-500",
  },
  documentation: {
    title: "Documentation & Admissions",
    description: "Expert help with university admissions and documentation",
    points: [
      { Icon: FolderOpen, text: "Document preparation" },
      { Icon: University, text: "University applications" },
      { Icon: Mic, text: "Interview preparation" },
      { Icon: Mail, text: "Admission follow-up" },
    ],
    icon: FileText,
    color: "text-red-500",
  },
};

// 🔹 Process Steps
const processSteps = [
  { title: "Consultation", icon: CheckCircle },
  { title: "Country Selection", icon: Globe },
  { title: "Application", icon: FileText },
  { title: "Visa Processing", icon: Plane },
  { title: "Settlement", icon: Users },
];

// 🔹 Motion Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.2 },
  }),
};

export default function ServicesPage() {
  const { id } = useParams<{ id: string }>();
  const service = id ? services[id] : null;

  if (!service) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-6">
          Service Not Found
        </h2>
        <Link to="/services">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl flex items-center gap-2 mx-auto">
            <ArrowLeft className="h-5 w-5" /> Back to Services
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="m-0 p-0">
      {/* 🔹 Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <img
          src={GraduationImg}
          alt="Graduation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40"></div>
        <div className="relative z-10 max-w-3xl px-6 text-center">
          <h1
            className="inline-block text-6xl md:text-8xl font-bold drop-shadow-lg
               bg-gradient-to-r from-[#b57e10] via-[#fff3a6] to-[#b57e10]
               bg-clip-text text-transparent leading-[1.2] pb-6 pr-[0.12em] overflow-visible">
            {service.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white max-w-3xl">
            {service.description}
          </p>


          <p className="text-lg text-gray-200">{service.description}</p>
        </div>
      </section>

      {/* 🔹 Stats */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat, i) => {
            const count = useCountUp(stat.number, 2.5);
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl shadow-xl bg-white/20 backdrop-blur-lg border border-white/30 text-center"
              >
                <h2 className="text-5xl font-bold text-blue-600">
                  {count}
                  {stat.suffix}
                </h2>
                <p className="text-gray-800 font-medium mt-2">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 🔹 Service Detail */}
      <section className="py-20 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/20 backdrop-blur-md shadow-xl border border-white/30 rounded-2xl p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <service.icon
                className={`h-12 w-12 ${service.color} drop-shadow-lg`}
              />
              <h2 className="text-2xl font-semibold text-gray-900">
                {service.title}
              </h2>
            </div>
            <p className="text-gray-700 mb-6">{service.description}</p>
            <ul className="space-y-4 text-gray-800">
              {service.points.map((point, j) => {
                const PointIcon = point.Icon;
                return (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: j * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <PointIcon className="w-5 h-5 text-blue-600" />
                    <span>{point.text}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            custom={0}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-14"
          >
            How It Works
          </motion.h2>
          <div className="relative flex flex-col md:flex-row items-center justify-between md:gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={i}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center md:w-1/5"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 shadow-md mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Step {i + 1}
                  </h3>
                  <p className="text-sm text-gray-600">{step.title}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-blue-200"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🔹 Final CTA */}
      <section className="py-20 bg-gray-900/80 text-center relative">
        <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Take The First Step Towards Your Future Abroad
          </motion.h2>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1 }}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg"
          >
            Book Free Consultation
          </motion.a>
        </div>
      </section>

      {/* 🔹 Footer */}
      <Footer />
    </div>
  );
}
