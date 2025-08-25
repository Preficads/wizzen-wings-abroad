import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Globe, Clock, ArrowRight } from "lucide-react";
const branches = [{
  city: "Kozhikode",
  address: "Wizzen Overseas, Near City Center, Kozhikode - 673001",
  phone: "+91 9876543210",
  email: "kozhikode@wizzenoverseas.com"
}, {
  city: "Malappuram",
  address: "Wizzen Overseas, Main Road, Malappuram - 676101",
  phone: "+91 9876543211",
  email: "malappuram@wizzenoverseas.com"
}, {
  city: "Thrissur",
  address: "Wizzen Overseas, City Center, Thrissur - 680001",
  phone: "+91 9876543212",
  email: "thrissur@wizzenoverseas.com"
}, {
  city: "Germany",
  address: "Wizzen Europe Office, Berlin, Germany",
  phone: "+49 123 456789",
  email: "germany@wizzenoverseas.com"
}];
const services = ["Study Abroad Programs", "Immigration Services", "German Visa Processing", "University Admissions", "Work Permits", "Documentation Support"];
const countries = ["Germany", "Latvia", "Austria", "Georgia", "Moldova", "Netherlands"];
export default function Footer() {
  return <footer className="text-primary-foreground bg-zinc-900">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-xl">W</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Wizzen Overseas</h3>
                  <p className="text-sm opacity-80">Education & Immigration</p>
                </div>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Your trusted partner for European education and immigration dreams. 
                With 5+ years of expertise, we guide you every step of the way.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="https://instagram.com/wizzen_overseas_service" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors">
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => <li key={index}>
                  <a href="#services" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Study Destinations</h4>
            <ul className="space-y-3">
              {countries.map((country, index) => <li key={index}>
                  <a href="#countries" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {country}
                  </a>
                </li>)}
            </ul>
            
            {/* Quick Contact */}
            <div className="mt-8 p-4 bg-primary-foreground/5 rounded-lg">
              <h5 className="font-medium mb-2 text-accent">Quick Contact</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-3 w-3 text-accent" />
                  <span className="opacity-90">+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-3 w-3 text-accent" />
                  <span className="opacity-90">info@wizzenoverseas.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Branch Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Branches</h4>
            <div className="space-y-4">
              {branches.map((branch, index) => <div key={index} className="text-sm">
                  <h5 className="font-medium text-accent mb-1">{branch.city}</h5>
                  <div className="space-y-1 opacity-80">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" />
                      <span className="text-xs leading-relaxed">{branch.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-3 w-3" />
                      <span className="text-xs">{branch.phone}</span>
                    </div>
                  </div>
                </div>)}
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-3 bg-primary-foreground/5 rounded-lg">
              <h5 className="font-medium mb-2 text-accent flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Business Hours
              </h5>
              <div className="text-xs opacity-90">
                <div>Mon - Sat: 9:00 AM - 6:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Newsletter Signup */}
        <div className="text-center py-8">
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm opacity-80 mb-6 max-w-md mx-auto">
            Subscribe to get the latest updates on study abroad opportunities and immigration news
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent" />
            <Button variant="accent" className="px-6">
              Subscribe
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Wizzen Overseas. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-accent transition-colors">Refund Policy</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>;
}