// src/components/CountriesDropdown.tsx

import { Link } from "react-router-dom";

// Array of countries to be displayed on the page
const countries = [
  {
    name: "USA",
    description: "Explore higher education opportunities and career prospects in the United States.",
    href: "/countries/usa",
  },
  {
    name: "UK",
    description: "Discover world-class universities and a rich cultural experience in the United Kingdom.",
    href: "/countries/uk",
  },
  {
    name: "Canada",
    description: "Find out about study programs, post-graduation work permits, and immigration pathways in Canada.",
    href: "/countries/canada",
  },
  {
    name: "Australia",
    description:
      "Study in a country with a vibrant lifestyle and renowned universities. Ideal for students seeking a work-life balance.",
    href: "/countries/australia",
  },
  {
    name: "Germany",
    description: "Learn about tuition-free public universities and a strong job market in Germany.",
    href: "/countries/germany",
  },
  {
    name: "France",
    description: "Experience a unique blend of academic excellence and cultural heritage in France.",
    href: "/countries/france",
  },
  {
    name: "Ireland",
    description: "Study in Ireland, a hub for technology and innovation with a welcoming environment.",
    href: "/countries/ireland",
  },
  {
    name: "New Zealand",
    description:
      "Embark on an academic journey in New Zealand, known for its scenic beauty and quality education.",
    href: "/countries/new-zealand",
  },
];

export default function CountriesDropdown() {
  return (
    <div className="relative min-h-screen bg-background text-foreground py-24 px-4 sm:px-6 lg:px-8">
      {/* Background overlay with blur */}
      <div className="absolute inset-0 bg-[url('/your-bg-image.jpg')] bg-cover bg-center 
        before:absolute before:inset-0 before:bg-background/50 backdrop-blur-2xl" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Study Abroad Destinations
          </h1>
          <p className="mt-4 text-muted-foreground text-lg leading-6">
            Choose from our top study destinations and start your journey towards a global career.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country) => (
            <Link
              key={country.name}
              to={country.href}
              className="group block p-6 rounded-2xl
    bg-gradient-to-br from-black/60 to-black/40 
    backdrop-blur-2xl border border-white/10
    shadow-lg hover:shadow-2xl hover:border-primary/40
    transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-200">
                {country.name}
              </h2>
              <p className="mt-2 text-sm text-white/80 group-hover:text-white">
                {country.description}
              </p>
            </Link>



          ))}
        </div>
      </div>
    </div>
  );
}
