"use client";

import { motion } from "framer-motion";

const memberships = [
  { 
    name: "German Education Council", 
    logo: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" 
  },
  { 
    name: "European Association of International Education", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" 
  },
  { name: "ICEF (International Consultants for Education and Fairs)", logo: "🎓" },
  { name: "AIRC (American International Recruitment Council)", logo: "🌍" },
  { name: "Kerala Migration Authority", logo: "🏛️" },
  { name: "Immigration Lawyers Association", logo: "⚖️" }
];

export default function Memberships() {
  return (
    <section className="py-16 bg-gray-100 border-t border-border relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-lg font-medium text-muted-foreground mb-8 tracking-widest uppercase">
            Memberships
          </h3>
        </motion.div>

        {/* Boxes with staggered animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {memberships.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{
                scale: 1.08,
                rotate: 1,
                boxShadow: "0px 12px 40px rgba(0,0,0,0.2)",
              }}
              className="relative p-6 rounded-2xl shadow-lg backdrop-blur-xl 
                         bg-gradient-to-br from-white/60 to-white/20 
                         border border-white/30 cursor-pointer group"
            >
              <div className="flex items-center space-x-4">
                {member.logo.startsWith("http") ? (
                  <motion.img
                    src={member.logo}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover border group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 10 }}
                  />
                ) : (
                  <motion.div
                    className="text-4xl"
                    whileHover={{ rotate: 10, scale: 1.2 }}
                  >
                    {member.logo}
                  </motion.div>
                )}
                <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional certifications */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-6 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {[
            {
              prefix: "Certified by ",
              label: "Ministry of External Affairs",
            },
            {
              prefix: "Authorized by ",
              label: "German Consulate",
            },
            {
              prefix: "Member of ",
              label: "ICEF Global",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.2 }}
              className="px-6 py-3 rounded-full bg-white/40 backdrop-blur-md shadow-sm border border-white/20 hover:bg-white/60 transition-colors duration-300"
            >
              <span className="text-sm font-medium text-muted-foreground">
                {item.prefix}
              </span>
              <span className="text-sm font-semibold text-primary">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
