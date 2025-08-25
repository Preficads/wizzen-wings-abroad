import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, Clock, DollarSign, Briefcase } from "lucide-react";

const countries = [
  {
    name: "Germany",
    flag: "🇩🇪",
    specialty: "Engineering & Technology",
    programs: ["Engineering", "Computer Science", "Business", "Medicine"],
    duration: "3-4 years",
    fees: "€500-3000/year",
    opportunities: "Strong job market, work permits available",
    featured: true,
    color: "border-red-200 bg-red-50"
  },
  {
    name: "Latvia",
    flag: "🇱🇻",
    specialty: "Business & IT",
    programs: ["Business Administration", "Information Technology", "Economics"],
    duration: "2-3 years",
    fees: "€2000-5000/year",
    opportunities: "EU work rights, growing IT sector",
    featured: false,
    color: "border-purple-200 bg-purple-50"
  },
  {
    name: "Austria",
    flag: "🇦🇹",
    specialty: "Arts & Sciences",
    programs: ["Arts", "Sciences", "Engineering", "Music"],
    duration: "3-4 years",
    fees: "€1500-4000/year",
    opportunities: "High quality of life, EU access",
    featured: false,
    color: "border-orange-200 bg-orange-50"
  },
  {
    name: "Georgia",
    flag: "🇬🇪",
    specialty: "Medical Studies",
    programs: ["Medicine", "Dentistry", "Pharmacy", "Nursing"],
    duration: "4-6 years",
    fees: "$3000-8000/year",
    opportunities: "Affordable education, European recognition",
    featured: false,
    color: "border-blue-200 bg-blue-50"
  },
  {
    name: "Moldova",
    flag: "🇲🇩",
    specialty: "Agriculture & Sciences",
    programs: ["Agriculture", "Veterinary", "Sciences", "Engineering"],
    duration: "3-4 years",
    fees: "€1000-3000/year",
    opportunities: "Low cost of living, EU pathway",
    featured: false,
    color: "border-green-200 bg-green-50"
  }
];

export default function Countries() {
  return (
    <section id="countries" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Key Countries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover your perfect study destination across Europe with our comprehensive country-specific guidance
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {countries.map((country, index) => (
            <Card 
              key={country.name}
              className={`group hover:shadow-accent transition-all duration-300 cursor-pointer animate-fade-in ${
                country.featured ? 'ring-2 ring-accent ring-offset-2 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <span className="text-4xl">{country.flag}</span>
                  <div className="text-left">
                    <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                      {country.name}
                    </CardTitle>
                    {country.featured && (
                      <Badge variant="outline" className="text-accent border-accent">
                        German Visa Expert
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-sm font-medium text-accent">{country.specialty}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Programs */}
                <div>
                  <h4 className="text-sm font-medium text-primary mb-2 flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    Popular Programs
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {country.programs.slice(0, 3).map((program, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {program}
                      </Badge>
                    ))}
                    {country.programs.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{country.programs.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Quick Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      Duration
                    </span>
                    <span className="font-medium">{country.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-muted-foreground">
                      <DollarSign className="h-3 w-3 mr-1" />
                      Fees
                    </span>
                    <span className="font-medium">{country.fees}</span>
                  </div>
                </div>

                {/* Opportunities */}
                <div>
                  <div className="flex items-center text-muted-foreground mb-1">
                    <Briefcase className="h-3 w-3 mr-1" />
                    <span className="text-xs font-medium">Opportunities</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{country.opportunities}</p>
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent"
                >
                  View Details
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}

          {/* Add More Countries Card */}
          <Card className="group hover:shadow-soft transition-all duration-300 cursor-pointer border-dashed border-2 border-muted animate-fade-in">
            <CardContent className="flex flex-col items-center justify-center h-full py-12 text-center">
              <div className="p-4 rounded-full bg-muted mb-4 group-hover:bg-accent-soft transition-colors">
                <MapPin className="h-8 w-8 text-muted-foreground group-hover:text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-2">More Countries</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore opportunities in other European countries
              </p>
              <Button variant="outline" size="sm">
                View All Countries
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Not sure which country is right for you?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our expert counselors will help you choose the perfect destination based on your goals and qualifications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Get Free Consultation
            </Button>
            <Button variant="outline" size="lg">
              Compare Countries
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}