// src/pages/StudyMBBS.tsx
import React from "react";
import PlaneBG from "@/assets/Background/PlaneBG.jpg";
import Plane2BG from "@/assets/Background/Plane2BG.jpg";
import Plane3BG from "@/assets/Background/Plane3.jpg"; // ✅ New background for Featured Countries

// Flag URLs
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

const StudyMBBS: React.FC = () => (
  <div className="font-sans bg-gray-50 text-gray-900">
    {/* Hero Section */}
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${Plane2BG})` }}
    >
      <div className="container mx-auto px-6 relative z-10 text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase">
          Study MBBS Abroad
        </h1>
        <p className="mt-4 max-w-lg text-lg text-gray-200">
          Admissions Open 2025 | Top Universities | Hassle-Free Process
        </p>
        <div className="mt-6 flex gap-4">
          <button className="bg-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
            Apply Now
          </button>
          <button className="border border-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition">
            Free Counselling
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/60"></div>
    </section>

    {/* Quick Highlights */}
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Quick Highlights</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 container mx-auto px-6">
        {[
          "WHO & NMC Approved Universities",
          "English-Medium Education",
          "Affordable & Transparent Process",
          "100% Visa & Travel Assistance",
        ].map((item, idx) => (
          <div
            key={idx}
            className="text-center bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition"
          >
            <span className="block text-2xl">✅</span>
            <p className="mt-2">{item}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Featured Countries with Glass Cards and Full-Width Flag */}
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${Plane3BG})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center text-white uppercase">
          Featured Countries
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-12">
          {countries.map((country) => (
            <div
              key={country}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-500 flex flex-col overflow-hidden"
            >
              {/* Full-width flag at the top */}
              <div className="w-full h-28 overflow-hidden">
                <img
                  src={flags[country.toLowerCase() as keyof typeof flags]}
                  alt={`${country} Flag`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col items-center text-white">
                <h3 className="text-lg font-bold">{country}</h3>
                <a
                  href={`/countries/${country.toLowerCase()}`}
                  className="text-orange-400 mt-2 font-medium hover:underline"
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Eligibility */}
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Eligibility</h2>
      <ul className="list-disc pl-10 mt-6 max-w-2xl mx-auto space-y-3 text-lg">
        <li>Minimum 50% in Physics, Chemistry, Biology (PCB)</li>
        <li>NEET qualification as per Indian rules</li>
        <li>Minimum age: 17 years</li>
      </ul>
    </section>

    {/* Admission Process */}
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center">Admission Process</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto px-6">
        {[
          "Free Counselling & Country Selection",
          "Application Submission",
          "Offer/Admission Letter from University",
          "Visa Processing",
          "Travel & Accommodation Support",
          "On-Campus Assistance",
        ].map((step, idx) => (
          <div key={idx} className="flex items-center">
            <span className="text-orange-500 font-bold mr-4">{idx + 1}.</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Benefits */}
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Benefits of MBBS Abroad</h2>
      <ul className="list-disc pl-10 mt-6 max-w-2xl mx-auto space-y-3 text-lg">
        <li>Globally recognized degrees</li>
        <li>English-medium education</li>
        <li>High-quality infrastructure & hospitals for practice</li>
        <li>Affordable compared to private MBBS in India</li>
        <li>International exposure & cultural diversity</li>
      </ul>
    </section>

    {/* FAQ */}
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center">FAQ</h2>
      <div className="mt-8 space-y-6 max-w-3xl mx-auto px-6">
        {[
          ["Is NEET mandatory?", "Yes, NEET is mandatory for admission."],
          ["Are degrees valid in India?", "Yes, degrees are recognized in India."],
          [
            "Can I practice in India after MBBS abroad?",
            "Yes, after clearing the necessary screening tests in India.",
          ],
          [
            "Is the medium of instruction English?",
            "Yes, the medium of instruction is English.",
          ],
          [
            "Do you provide visa and travel support?",
            "Yes, we provide 100% visa and travel assistance.",
          ],
        ].map(([q, a], idx) => (
          <div key={idx}>
            <h4 className="font-semibold">{q}</h4>
            <p className="text-gray-700">{a}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Contact Us */}
    <section className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Contact Us</h2>
      <form className="mt-8 max-w-2xl mx-auto space-y-6 bg-white shadow-lg p-8 rounded-xl">
        <div>
          <label htmlFor="name" className="block font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 p-3 rounded-lg"
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
            className="w-full border border-gray-300 p-3 rounded-lg"
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
            className="w-full border border-gray-300 p-3 rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="country" className="block font-medium">
            Country Interested
          </label>
          <select id="country" className="w-full border border-gray-300 p-3 rounded-lg">
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Submit
        </button>
      </form>
    </section>
  </div>
);

export default StudyMBBS;
