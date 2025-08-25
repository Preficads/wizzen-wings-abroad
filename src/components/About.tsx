import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe, Users, Award, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About <span className="text-accent">Wizzen Overseas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a premier consulting firm specializing in abroad education, focused on helping students find the right universities in Europe based on their qualifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-in">
            <div className="space-y-6">
              <p className="text-foreground leading-relaxed">
                Wizzen Abroad Studies is a premier consulting firm specializing in abroad education, focused on helping students find the right universities in Europe based on their qualifications. Our services range from initial counseling and documentation to visa processing and post-enrollment support.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a commitment to quality, transparency, and integrity, we ensure a smooth transition for students aiming to study in Europe.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                "Expert guidance for European universities",
                "Complete visa processing support",
                "Post-enrollment assistance",
                "5+ years of proven success",
                "Transparent and quality service"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="primary" size="lg" className="group">
              Learn More About Our Services
            </Button>
          </div>

          {/* Right Column - Stats & Features */}
          <div className="space-y-6 animate-fade-in">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6 shadow-soft hover:shadow-warm transition-all duration-300">
                <CardContent className="p-0">
                  <Globe className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 shadow-soft hover:shadow-warm transition-all duration-300">
                <CardContent className="p-0">
                  <Users className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Students</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 shadow-soft hover:shadow-warm transition-all duration-300">
                <CardContent className="p-0">
                  <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 shadow-soft hover:shadow-warm transition-all duration-300">
                <CardContent className="p-0">
                  <Heart className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary">900+</div>
                  <div className="text-sm text-muted-foreground">Positive Reviews</div>
                </CardContent>
              </Card>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-4">
              <Card className="p-6 shadow-soft">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <Target className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Our Mission</h4>
                      <p className="text-sm text-muted-foreground">
                        To provide comprehensive and personalized guidance that makes international education accessible and achievable for every student.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-soft">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <Globe className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Our Vision</h4>
                      <p className="text-sm text-muted-foreground">
                        To be the leading immigration consultant in Kerala, helping thousands achieve their European education dreams.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}