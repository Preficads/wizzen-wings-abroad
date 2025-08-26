import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import wizzenLogo from "@/assets/wizzen_logo.png";
import Popup from "./Popup"; // import Popup

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Countries", href: "#countries" },
  { name: "Team", href: "#team" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="flex items-center space-x-3">
              <div className="h-14 flex items-center justify-center">
                <img className="h-14" src={wizzenLogo} alt="Wizzen Logo" />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {/* Apply Now */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
            <Button
              variant="accent"
              size="sm"
              className="animate-fade-in"
              onClick={() => setPopupOpen(true)}
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
              <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm">
                <div className="flex items-center justify-between">
                  <a href="#" className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">W</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-primary">Wizzen Overseas</span>
                      <span className="text-xs text-muted-foreground">
                        Education & Immigration
                      </span>
                    </div>
                  </a>
                  <button
                    type="button"
                    className="rounded-md p-2.5 text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="mt-6 flow-root">
                  <div className="divide-y divide-border">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>

                    <div className="py-6 space-y-4">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-accent" />
                        <span className="text-sm text-muted-foreground">+91 9876543210</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-accent" />
                        <span className="text-sm text-muted-foreground">info@wizzenoverseas.com</span>
                      </div>
                      <Button
                        variant="accent"
                        className="w-full"
                        onClick={() => {
                          setPopupOpen(true);
                          setMobileMenuOpen(false);
                        }}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* IMPORTANT: Popup mounted OUTSIDE the header */}
      <Popup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}
