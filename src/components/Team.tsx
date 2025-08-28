"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Award, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// -------- Gradient & Colors (edit here for theme)
const gradientCard =
  "bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 border-blue-200 shadow-blue-300/40";
const iconColor = "text-blue-800"; // default icon color
const iconHoverColor = "text-orange-500"; // hover color for icons
const numberColor = "text-blue-900";
const labelColor = "text-blue-700";

// -------- Stats Data
const stats = [
  { number: 10, suffix: "+", label: "Expert Counselors", icon: Users },
  { number: 5, suffix: "+", label: "Years Experience", icon: Award },
  { number: 1000, suffix: "+", label: "Students Guided", icon: Users },
  { number: 95, suffix: "%", label: "Success Rate", icon: Award },
];

// -------- Count-up Number
function Counter({
  to,
  from = 0,
  duration = 1.8,
  suffix = "",
}: {
  to: number;
  from?: number;
  duration?: number;
  suffix?: string;
}) {
  const [val, setVal] = useState(from);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, from, to, duration]);

  return (
    <span ref={containerRef}>
      {val}
      {suffix}
    </span>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With years of experience and thousands of successful students, we
            bring the right guidance and trusted support for your study abroad
            journey.
          </p>
        </div>

        {/* Animated Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: [0, -1, 1, 0], // wobble effect
                    transition: { duration: 0.4 },
                  }}
                  className={[
                    gradientCard,
                    "relative overflow-hidden backdrop-blur-md border rounded-2xl",
                    "shadow-lg flex flex-col items-center justify-center text-center h-44 cursor-pointer group",
                  ].join(" ")}
                >
                  {/* Animated Background Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-200 via-blue-100 to-white opacity-30"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />

                  <CardHeader className="p-0 relative z-10">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      {/* Icon with hover color change */}
                      <Icon
                        className={`h-9 w-9 ${iconColor} group-hover:${iconHoverColor} mx-auto mb-2 transition-colors duration-300`}
                      />
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-0 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className={`text-3xl font-bold ${numberColor}`}
                    >
                      <Counter to={stat.number} suffix={stat.suffix} />
                    </motion.div>
                    <div className={`text-sm ${labelColor}`}>{stat.label}</div>
                  </CardContent>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is the cost of studying in Germany?
              </AccordionTrigger>
              <AccordionContent>
                Most public universities have very low or no tuition fees. Budget
                around €8,000–€12,000 per year for living expenses.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you provide IELTS coaching?</AccordionTrigger>
              <AccordionContent>
                Yes, we provide personalized IELTS coaching to help students
                achieve the required band score.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can you help with scholarships?</AccordionTrigger>
              <AccordionContent>
                Absolutely! We help identify and apply for scholarships suitable
                for each student’s profile.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you assist with visa applications?</AccordionTrigger>
              <AccordionContent>
                Yes, our counselors provide complete guidance and documentation
                support for student visas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
