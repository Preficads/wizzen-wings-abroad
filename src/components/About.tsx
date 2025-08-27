"use client";

import CountUp from "react-countup";

export default function About() {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Soft background blobs (pure CSS/Tailwind, no external lib) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              About <span className="text-purple-400">Wizzen Abroad Studies</span>
            </h2>

            <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              At <span className="text-purple-300 font-semibold">Wizzen Abroad Studies</span>, we
              specialize in guiding students toward their global education dreams.
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
          </div>

          {/* Right Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Card helper: responsive padding and no overflow */}
            <div className="p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-center min-w-0">
              <div className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-blue-400 break-words">
                <CountUp start={0} end={5} duration={2.5} />+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300 mt-2">
                Countries Served
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-center min-w-0">
              <div className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-green-400 break-words">
                <CountUp start={0} end={1000} duration={2.5} />+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300 mt-2">
                Happy Students
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-center min-w-0">
              <div className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-purple-400 break-words">
                <CountUp start={0} end={95} duration={2.5} />%
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300 mt-2">
                Success Rate
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-center min-w-0">
              <div className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-pink-400 break-words">
                <CountUp start={0} end={900} duration={2.5} />+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300 mt-2">
                Positive Reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
