import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  FileText, 
  Plane, 
  Building2, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Study Abroad Programs",
    description: "Comprehensive guidance for studying in Europe's top universities",
    features: [
      "University selection assistance",
      "Course recommendation",
      "Application support",
      "Scholarship guidance"
    ],
    color: "text-blue-600"
  },
  {
    icon: FileText,
    title: "Immigration Services",
    description: "Complete immigration support for European countries",
    features: [
      "Visa application processing",
      "Document verification",
      "Legal compliance",
      "Status tracking"
    ],
    color: "text-green-600"
  },
  {
    icon: Plane,
    title: "Work & Visa Support",
    description: "Professional assistance for work permits and visas",
    features: [
      "Work permit applications",
      "Job search guidance",
      "Employer liaison",
      "Settlement support"
    ],
    color: "text-purple-600"
  },
  {
    icon: Building2,
    title: "Documentation & Admissions",
    description: "Expert help with university admissions and documentation",
    features: [
      "Document preparation",
      "University applications",
      "Interview preparation",
      "Admission follow-up"
    ],
    color: "text-orange-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We provide comprehensive services for your European education and immigration journey
          </p>
          
          {/* Service Categories */}
          <div className="inline-flex items-center bg-secondary rounded-full p-2 space-x-2">
            <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
              Immigration
            </span>
            <span className="px-4 py-2 text-muted-foreground rounded-full text-sm">
              Work/Visa
            </span>
            <span className="px-4 py-2 text-muted-foreground rounded-full text-sm">
              Study Abroad
            </span>
            <span className="px-4 py-2 text-muted-foreground rounded-full text-sm">
              Documentation
            </span>
          </div>
        </div>

        {/* Main Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-accent transition-all duration-300 cursor-pointer border-border hover:border-accent/20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-accent-soft">
                    <IconComponent className={`h-8 w-8 text-accent`} />
                  </div>
                  <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Service Highlight */}
        <Card className="bg-gradient-accent text-accent-foreground p-8 shadow-accent animate-fade-in">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-accent-foreground/10 rounded-full">
                    <Globe className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium opacity-90">I'm Looking for</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Study Abroad</h3>
                <p className="text-lg opacity-90 mb-6">
                  Embrace a world of opportunities through immigration.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-accent-foreground/10 rounded-full text-sm">
                    ✈️ Visa Processing
                  </span>
                  <span className="px-3 py-1 bg-accent-foreground/10 rounded-full text-sm">
                    🎓 University Admissions
                  </span>
                  <span className="px-3 py-1 bg-accent-foreground/10 rounded-full text-sm">
                    📄 Documentation
                  </span>
                </div>
              </div>
              <div className="text-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-accent-foreground text-accent border-accent-foreground hover:bg-accent-foreground/90"
                >
                  Apply Online
                </Button>
                <p className="text-sm opacity-75 mt-3">
                  Start your European education journey today
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}