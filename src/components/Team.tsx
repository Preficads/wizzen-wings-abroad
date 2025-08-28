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

// -------- Configurable gradient palette (edit these classes to change colors)
const gradientCard =
  "bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 border-blue-200 shadow-blue-300/40";
const iconColor = "text-blue-800";
const numberColor = "text-blue-900";
const labelColor = "text-blue-700";

// -------- Stats data
const stats = [
  { number: 10, suffix: "+", label: "Expert Counselors", icon: Users },
  { number: 5, suffix: "+", label: "Years Experience", icon: Award },
  { number: 1000, suffix: "+", label: "Students Guided", icon: Users },
  { number: 95, suffix: "%", label: "Success Rate", icon: Award },
];

// -------- Robust Counter (animates once when card enters view)
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
  const ref = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(from);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { once: true, margin: "-20% 0px -20% 0px" });

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
      <span ref={ref}>{val}</span>
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
            With years of experience and thousands of successful students, we deliver the right guidance for your study abroad journey.
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
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  className={[
                    gradientCard,
                    "backdrop-blur-md border rounded-2xl",
                    "shadow-lg",
                    "flex flex-col items-center justify-center text-center h-40",
                    "hover:scale-105 transition-transform duration-300",
                  ].join(" ")}
                >
                  <CardHeader className="p-0">
                    <Icon className={`h-8 w-8 ${iconColor} mx-auto mb-2`} />
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className={`text-3xl font-bold ${numberColor}`}>
                      <Counter to={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className={`text-sm ${labelColor}`}>{stat.label}</div>
                  </CardContent>
                </Card>
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
              <AccordionTrigger>What is the cost of studying in Germany?</AccordionTrigger>
              <AccordionContent>
                Most public universities have very low or no tuition fees. Budget roughly €8,000–€12,000 per year for living expenses.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you provide IELTS coaching?</AccordionTrigger>
              <AccordionContent>
                Yes, we provide personalized IELTS coaching to help you reach the required band score.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can you help with scholarships?</AccordionTrigger>
              <AccordionContent>
                Absolutely! We identify and apply for scholarships suitable to your profile.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you assist with visa applications?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer complete guidance and documentation support for student visas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
