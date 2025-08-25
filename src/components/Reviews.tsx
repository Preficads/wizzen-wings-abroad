import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, MapPin, Calendar } from "lucide-react";

const reviews = [
  {
    name: "John Samual",
    location: "Germany",
    program: "Computer Science",
    university: "Technical University of Munich",
    rating: 5,
    date: "2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    review: "With 5 years of dedicated experience, Wizzen Abroad Studies has established itself as a leading immigration consultancy in Kerala, Kozhikode. Specializing in European destinations, we provide comprehensive services for students, professionals, and travelers seeking opportunities abroad.",
    flag: "🇩🇪"
  },
  {
    name: "Priya Nair",
    location: "Latvia",
    program: "Business Administration",
    university: "University of Latvia",
    rating: 5,
    date: "2024",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
    review: "Exceptional service from Wizzen Overseas! They guided me through every step of my application to Latvia. The team was professional, knowledgeable, and always available to answer my questions. Highly recommend their services!",
    flag: "🇱🇻"
  },
  {
    name: "Arjun Kumar",
    location: "Austria",
    program: "Mechanical Engineering",
    university: "Vienna University of Technology",
    rating: 5,
    date: "2023",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    review: "Amazing support throughout my admission process to Austria. The counselors at Wizzen helped me secure admission in my dream university and also assisted with visa processing. Forever grateful!",
    flag: "🇦🇹"
  },
  {
    name: "Sneha Menon",
    location: "Germany",
    program: "Medicine",
    university: "Charité Berlin",
    rating: 5,
    date: "2023",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    review: "Professional and reliable service. Wizzen Overseas made my dream of studying medicine in Germany come true. Their expertise in German visa processes is unmatched. Thank you for everything!",
    flag: "🇩🇪"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gradient-warm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Student <span className="text-accent">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Hear from our successful students who are now pursuing their dreams across Europe
          </p>
          
          {/* Overall Rating */}
          <div className="inline-flex items-center bg-background border border-border rounded-full px-6 py-3 shadow-soft">
            <div className="flex items-center space-x-1 mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-lg font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">900+ Reviews</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="group hover:shadow-accent transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start space-x-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent-soft"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-primary">{review.name}</h3>
                      <span className="text-2xl">{review.flag}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-3 w-3" />
                      <span>{review.location}</span>
                      <Calendar className="h-3 w-3 ml-2" />
                      <span>{review.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Program Info */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    {review.program}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {review.university}
                  </Badge>
                </div>

                {/* Review Text */}
                <div className="relative">
                  <Quote className="absolute -top-1 -left-1 h-6 w-6 text-accent-soft" />
                  <p className="text-muted-foreground leading-relaxed pl-6 italic">
                    "{review.review}"
                  </p>
                </div>

                {/* Verification Badge */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <Badge variant="outline" className="text-xs text-accent border-accent">
                    ✓ Verified Student
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    via Google Reviews
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-accent text-accent-foreground p-8 text-center animate-fade-in">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join hundreds of successful students who trusted Wizzen Overseas with their European education dreams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-accent-foreground text-accent rounded-lg font-semibold hover:bg-accent-foreground/90 transition-colors">
                Share Your Story
              </button>
              <button className="px-8 py-3 border-2 border-accent-foreground/20 text-accent-foreground rounded-lg font-semibold hover:bg-accent-foreground/10 transition-colors">
                Read More Reviews
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}