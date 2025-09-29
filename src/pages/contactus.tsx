"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import backgroundGermany from "@/assets/Background/background_germany.jpg";
import Footer from "@/components/Footer"; // ✅ Import Footer

interface Branch {
  name: string;
  address: string;
  phone: string[];
  whatsapp?: string[];
  email?: string;
  website?: string;
  description?: string;
  map: string;
}

const branches: Branch[] = [
  {
    name: "Head Office (Perambra, Kerala)",
    address:
      "BUILDING NO 68A, Opposite St. Francis Church, Perambra, Kerala 673525",
    phone: ["+380995642578", "+4915731340455", "+919539592702"],
    whatsapp: ["+919539592702"],
    email: "info@wizzenabroadstudies.com",
    description:
      "✈️ Guidance throughout Complete Migration Process to Europe | German Visa Experts 🇩🇪 | CEO @dr.akshayy_m",
    map: "https://www.google.com/maps/embed?pb=!...PERAMBRA_LINK_HERE...",
  },
  {
    name: "Malappuram Branch",
    address:
      "Tirur - Edarikode Rd, Mammalippadi, Kottakkal, Perumanna Klari, Kerala 676501",
    phone: ["+918921518403"],
    whatsapp: ["+918921518403"],
    map: "https://www.google.com/maps/embed?pb=!...MALAPPURAM_LINK_HERE...",
  },
  {
    name: "Thrissur Branch",
    address: "Ground floor, Ananya Tower, MG Road, Thrissur, Kerala 680001",
    phone: ["+393757714963", "+917591920550"],
    whatsapp: ["+917591920550"],
    email: "wizzenabroadthrissur@gmail.com",
    description:
      "6+ Years of experience | 100% visa success | 800+ universities Italy, Germany etc.",
    map: "https://www.google.com/maps/embed?pb=!...THRISSUR_LINK_HERE...",
  },
  {
    name: "Kochi Branch",
    address:
      "2nd Floor, Jewel Arcade, Layam Rd, Marine Drive, Ernakulam, Kerala 682011",
    phone: ["+919947550064"],
    whatsapp: ["+919947550064"],
    map: "https://www.google.com/maps/embed?pb=!...KOCHI_LINK_HERE...",
  },
  {
    name: "Care Bridge Berlin International (GmbH)",
    address: "Kochhannstraße 3, Prenzlauer Berg, 10249 Berlin, Germany",
    phone: ["+4915211630015", "+4915218565120"],
    whatsapp: ["+4915218565120"],
    email: "info@carebridgebi.de",
    website: "https://www.carebridgebi.de",
    description:
      "Your gateway to Skilled & Unskilled jobs in Germany 🇩🇪 | Job Placements / Ausbildung / FSP / Aupair",
    map: "https://www.google.com/maps/embed?pb=!...BERLIN_LINK_HERE...",
  },
];

export default function Contact() {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative py-16 sm:py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <img
            src={backgroundGermany}
            alt="Background Germany"
            className="w-full h-auto object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 to-[#081028]/90" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Contact <span className="text-purple-400">Us</span>
            </h2>
            <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
              Reach out to our nearest branch for guidance on study abroad,
              immigration, and career opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Branch Info */}
            <motion.div className="p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-gray-200">
              <h3 className="text-2xl font-bold text-white mb-4">Our Offices</h3>

              <select
                value={selectedBranch.name}
                onChange={(e) =>
                  setSelectedBranch(
                    branches.find((b) => b.name === e.target.value) || branches[0]
                  )
                }
                className="w-full mb-6 p-2 rounded-lg border bg-black/30 text-white"
              >
                {branches.map((b) => (
                  <option key={b.name} value={b.name}>
                    {b.name}
                  </option>
                ))}
              </select>

              <p className="mb-3">
                <span className="font-semibold text-purple-300">📍 Address:</span>{" "}
                {selectedBranch.address}
              </p>

              {selectedBranch.phone.length > 0 && (
                <p className="mb-3">
                  <span className="font-semibold text-purple-300">📞 Phone:</span>{" "}
                  {selectedBranch.phone.map((num, i) => (
                    <a
                      key={i}
                      href={`tel:${num}`}
                      className="text-blue-400 hover:underline mr-3"
                    >
                      {num}
                    </a>
                  ))}
                </p>
              )}

              {selectedBranch.whatsapp && (
                <p className="mb-3">
                  <span className="font-semibold text-green-400">💬 WhatsApp:</span>{" "}
                  {selectedBranch.whatsapp.map((num, i) => (
                    <a
                      key={i}
                      href={`https://wa.me/${num.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:underline mr-3"
                    >
                      {num}
                    </a>
                  ))}
                </p>
              )}

              {selectedBranch.email && (
                <p className="mb-3">
                  <span className="font-semibold text-purple-300">✉️ Email:</span>{" "}
                  <a
                    href={`mailto:${selectedBranch.email}`}
                    className="text-blue-400 hover:underline"
                  >
                    {selectedBranch.email}
                  </a>
                </p>
              )}

              {selectedBranch.website && (
                <p className="mb-3">
                  <span className="font-semibold text-purple-300">🌐 Website:</span>{" "}
                  <a
                    href={selectedBranch.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {selectedBranch.website}
                  </a>
                </p>
              )}

              {selectedBranch.description && (
                <p className="mb-3 text-gray-300">{selectedBranch.description}</p>
              )}

              <div className="mt-6 rounded-xl overflow-hidden border border-white/20">
                <iframe
                  title={selectedBranch.name}
                  src={selectedBranch.map}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div className="p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20">
              {submitted ? (
                <div className="text-center text-green-400 text-lg font-semibold">
                  ✅ Thank you! Your message has been sent.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-200 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black/40 text-white border border-white/20 focus:border-purple-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-200 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black/40 text-white border border-white/20 focus:border-purple-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-200 mb-1">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-black/40 text-white border border-white/20 focus:border-purple-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-200 mb-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-black/40 text-white border border-white/20 focus:border-purple-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✅ Footer at Bottom */}
      <Footer />
    </>
  );
}
