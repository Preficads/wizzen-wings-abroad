const memberships = [
  { name: "German Education Council", logo: "🇩🇪" },
  { name: "European Association of International Education", logo: "🇪🇺" },
  { name: "ICEF (International Consultants for Education and Fairs)", logo: "🎓" },
  { name: "AIRC (American International Recruitment Council)", logo: "🌍" },
  { name: "Kerala Migration Authority", logo: "🏛️" },
  { name: "Immigration Lawyers Association", logo: "⚖️" }
];

export default function Memberships() {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium text-muted-foreground mb-8">Memberships</h3>
        </div>
        
        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {memberships.map((member, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-border hover:border-primary/20 hover:shadow-soft transition-all duration-300 group cursor-pointer"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {member.logo}
              </div>
              <div className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors">
                {member.name}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional certifications */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
          <div className="flex items-center space-x-2 px-4 py-2 bg-secondary rounded-full">
            <span className="text-sm font-medium text-muted-foreground">Certified by</span>
            <span className="text-sm font-semibold text-primary">Ministry of External Affairs</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-secondary rounded-full">
            <span className="text-sm font-medium text-muted-foreground">Authorized by</span>
            <span className="text-sm font-semibold text-primary">German Consulate</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-secondary rounded-full">
            <span className="text-sm font-medium text-muted-foreground">Member of</span>
            <span className="text-sm font-semibold text-primary">ICEF Global</span>
          </div>
        </div>
      </div>
    </section>
  );
}