import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

// Countries Data
const countries = [
  {
    name: "Germany",
    description:
      "Known for its world-class universities, research opportunities, and strong economy.",
    flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
  },
  {
    name: "France",
    description: "A top destination for art, fashion, and higher education.",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  },
  {
    name: "Hungary",
    description: "Popular for affordable education and vibrant student life.",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
  },
  {
    name: "Croatia",
    description: "Beautiful landscapes and growing educational institutions.",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
  },
  {
    name: "Armenia",
    description: "Rich culture and affordable education opportunities.",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg",
  },
  {
    name: "Singapore",
    description: "Global hub for technology, business, and innovation.",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
  },
  {
    name: "Canada",
    description: "High-quality education and multicultural environment.",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
  },
  {
    name: "Japan",
    description: "Technological advancement and rich cultural heritage.",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
  },
  {
    name: "South Korea",
    description: "Known for innovation, technology, and strong academics.",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
  },
  {
    name: "Georgia",
    description: "Emerging educational hub with affordable costs.",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg",
  },
  {
    name: "Ukraine",
    description: "Affordable European education with cultural diversity.",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
  },
  {
    name: "Poland",
    description: "Popular for international students and research programs.",
    flag: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
  },
  {
    name: "Turkey",
    description: "Blend of European and Asian culture with quality universities.",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
  },
  {
    name: "Switzerland",
    description: "Home to leading universities and financial institutions.",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
  },
  {
    name: "United States",
    description: "Top-ranked universities and diverse opportunities.",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  },
];

// Marquee effect (infinite sliding rows)
const MarqueeRow = ({ countries, direction = "left" }) => (
  <motion.div
    className="flex space-x-4 sm:space-x-6"
    animate={{ x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"] }}
    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
  >
    {[...countries, ...countries].map((country, idx) => (
      <Card
        key={idx}
        className="flex-shrink-0
          w-36 sm:min-w-[220px] sm:max-w-[220px]
          bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200
          backdrop-blur-md border border-blue-200 
          rounded-2xl shadow-lg shadow-blue-300/40"
      >
        <CardHeader className="p-0">
          <img
            src={country.flag}
            alt={country.name}
            className="w-full h-28 object-cover rounded-t-2xl"
          />
        </CardHeader>
        <CardContent className="p-3 sm:p-4 text-center">
          <CardTitle className="text-base sm:text-lg font-semibold mb-2 text-gray-900">
            {country.name}
          </CardTitle>
          <p className="text-xs sm:text-sm text-gray-700 mb-3">{country.description}</p>
          <Button
            variant="outline"
            size="sm"
            className="w-full bg-white hover:bg-blue-50 text-blue-900 border-blue-200"
          >
            View Details
            <ExternalLink className="ml-2 h-3 w-3" />
          </Button>
        </CardContent>
      </Card>
    ))}
  </motion.div>
);

export default function Countries() {
  return (
    <section
      id="countries"
      className="py-20 bg-gray-100/70 overflow-hidden" // Light gray with low opacity
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Key Countries We Serve
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore top study destinations around the world
          </p>
        </div>

        {/* Two Sliding Rows */}
        <div className="space-y-8">
          <MarqueeRow
            countries={countries.slice(0, Math.ceil(countries.length / 2))}
            direction="left"
          />
          <MarqueeRow
            countries={countries.slice(Math.ceil(countries.length / 2))}
            direction="right"
          />
        </div>
      </div>
    </section>
  );
}
