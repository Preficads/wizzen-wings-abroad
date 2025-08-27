"use client";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "John Samual",
    review: "Wizzen made the process smooth. I'm now in Germany studying CS!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Priya Nair",
    review: "Exceptional support! Thanks to Wizzen, I study in Latvia now.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Arjun Kumar",
    review: "Wizzen guided me perfectly through my Austria university journey.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Sneha Menon",
    review: "Studying medicine in Germany was a dream come true with Wizzen!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Aarav Patel",
    review: "Couldn't be happier with the support for my European studies.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Divya Suresh",
    review: "They genuinely care. Amazing service and smooth transition abroad!",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollStep;
      }
      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <section className="w-full bg-black py-10 overflow-hidden">
      <h2 className="text-center text-white text-3xl font-bold mb-8">
        What Our Students Say
      </h2>

      <div
        className="flex space-x-6 animate-scroll px-6 overflow-x-hidden"
        ref={scrollRef}
      >
        {[...testimonials, ...testimonials].map((t, idx) => (
          <div
            key={idx}
            className="min-w-[300px] max-w-[300px] bg-[rgba(0,0,0,0.5)] backdrop-blur-md rounded-lg p-6 text-white shadow-lg"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <div className="flex space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm italic text-gray-200">"{t.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
