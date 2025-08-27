import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Award, Users } from "lucide-react";

const teamMembers = [
  // {
  //   name: "Dr. Akshay Malayil",
  //   role: "CEO & Founder",
  //   specialization: "German Immigration Expert",
  //   experience: "8+ years",
  //   education: "MBA, University of Kerala",
  //   achievements: ["500+ Successful Cases", "German Visa Specialist", "Immigration Law Expert"],
  //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  //   linkedin: "#",
  //   email: "akshay@wizzenoverseas.com"
  // },
  // {
  //   name: "Dr. Fawz Mohammed",
  //   role: "Senior Consultant", 
  //   specialization: "European Education Specialist",
  //   experience: "6+ years",
  //   education: "PhD, European Studies",
  //   achievements: ["300+ University Admissions", "Scholarship Expert", "Student Counselor"],
  //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  //   linkedin: "#",
  //   email: "fawz@wizzenoverseas.com"
  // }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Meet Our <span className="text-accent">Expert Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our experienced professionals are dedicated to making your European education dreams a reality
          </p>
        </div> */}

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="group hover:shadow-accent transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  {/* Profile Image */}
                  <div className="sm:w-1/3 relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 sm:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="sm:w-2/3 p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                      <p className="text-accent font-medium mb-2">{member.role}</p>
                      <Badge variant="outline" className="text-xs">
                        {member.specialization}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm">
                        <Award className="h-4 w-4 text-accent" />
                        <span className="text-muted-foreground">{member.experience} Experience</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="h-4 w-4 text-accent" />
                        <span className="text-muted-foreground">{member.education}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-medium text-primary mb-2">Key Achievements</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.achievements.map((achievement, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center space-x-3 pt-2">
                      <a
                        href={member.linkedin}
                        className="p-2 rounded-full bg-accent-soft hover:bg-accent hover:text-accent-foreground transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-full bg-accent-soft hover:bg-accent hover:text-accent-foreground transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
          {[
            { number: "10+", label: "Expert Counselors", icon: Users },
            { number: "5+", label: "Years Experience", icon: Award },
            { number: "1000+", label: "Students Guided", icon: Users },
            { number: "95%", label: "Success Rate", icon: Award }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center p-6 shadow-soft hover:shadow-accent transition-all duration-300">
                <CardContent className="p-0">
                  <IconComponent className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}