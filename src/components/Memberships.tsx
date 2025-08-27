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
    <section className="py-16 bg-gray-100 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium text-muted-foreground mb-8">
            Memberships
          </h3>
        </div>

        {/* Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {memberships.map((member, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl shadow-lg backdrop-blur-xl 
                         bg-gradient-to-br from-white/40 to-white/10 
                         border border-white/20 hover:scale-105 
                         transition-transform duration-300 cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                {member.logo.startsWith("http") ? (
                  <img
                    src={member.logo}
                    alt={member.name}
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                ) : (
                  <div className="text-4xl">{member.logo}</div>
                )}
                <div className="text-sm font-medium text-foreground">
                  {member.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional certifications */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 items-center">
          <div className="px-6 py-3">
            <span className="text-sm font-medium text-muted-foreground">Certified by </span>
            <span className="text-sm font-semibold text-primary">Ministry of External Affairs</span>
          </div>
          <div className="px-6 py-3">
            <span className="text-sm font-medium text-muted-foreground">Authorized by </span>
            <span className="text-sm font-semibold text-primary">German Consulate</span>
          </div>
          <div className="px-6 py-3">
            <span className="text-sm font-medium text-muted-foreground">Member of </span>
            <span className="text-sm font-semibold text-primary">ICEF Global</span>
          </div>
        </div>

      </div>
    </section>
  );
}
