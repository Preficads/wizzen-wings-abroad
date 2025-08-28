import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import wizzenLogo from "@/assets/wizzen_logo.png";
import Popup from "./Popup";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Countries", href: "#", dropdown: true }, // Dropdown item
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

const studyAbroadCountries = [
  { name: "USA", href: "/countries/usa" },
  { name: "UK", href: "/countries/uk" },
  { name: "Canada", href: "/countries/canada" },
  { name: "Australia", href: "/countries/australia" },
  { name: "Germany", href: "/countries/germany" },
];

const immigrationCountries = [
  { name: "Canada PR", href: "/immigration/canada" },
  { name: "Australia PR", href: "/immigration/australia" },
  { name: "New Zealand PR", href: "/immigration/new-zealand" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8 lg:py-4">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="/" className="flex items-center space-x-3">
              <div className="h-10 lg:h-14 flex items-center justify-center">
                <img
                  className="h-10 lg:h-14 w-auto"
                  src={wizzenLogo}
                  alt="Wizzen Logo"
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8 relative">
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.name} <ChevronDown className="h-4 w-4" />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute left-0 top-full mt-2 w-72 rounded-xl bg-white/30 backdrop-blur-lg shadow-xl p-4 animate-fade-in">
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">
                          Study Abroad Countries
                        </h4>
                        <ul className="space-y-1">
                          {studyAbroadCountries.map((country) => (
                            <li key={country.name}>
                              <a
                                href={country.href}
                                className="block px-2 py-1 text-sm rounded hover:bg-white/40 transition"
                                onClick={() => setDropdownOpen(false)}
                              >
                                {country.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4">
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">
                          Immigration / PR Destinations
                        </h4>
                        <ul className="space-y-1">
                          {immigrationCountries.map((country) => (
                            <li key={country.name}>
                              <a
                                href={country.href}
                                className="block px-2 py-1 text-sm rounded hover:bg-white/40 transition"
                                onClick={() => setDropdownOpen(false)}
                              >
                                {country.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              )
            )}
          </div>

          {/* Apply Now (Desktop) */}
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
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 
        ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className="fixed inset-0 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`fixed inset-y-0 right-0 w-11/12 max-w-sm bg-background/95 backdrop-blur-md px-5 py-6 
          transform transition-transform duration-300 ease-in-out 
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between">
            {/* Mobile Logo */}
            <div className="flex items-center space-x-2">
              <img src={wizzenLogo} alt="Wizzen Logo" className="h-8 w-auto" />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-primary text-sm">
                  Wizzen Overseas
                </span>
                <span className="text-[10px] text-muted-foreground">
                  Education & Immigration
                </span>
              </div>
            </div>
            <button
              type="button"
              className="rounded-md p-2 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flow-root overflow-y-auto max-h-[calc(100vh-80px)]">
            <div className="divide-y divide-border/50">
              {/* Nav Links */}
              <div className="space-y-2 py-6">
                {navigation.map((item) =>
                  item.dropdown ? (
                    <div key={item.name} className="space-y-2">
                      <span className="block px-3 py-2 text-base font-medium text-foreground">
                        {item.name}
                      </span>
                      <div className="ml-4 space-y-1">
                        <p className="text-xs text-muted-foreground">
                          Study Abroad
                        </p>
                        {studyAbroadCountries.map((c) => (
                          <a
                            key={c.name}
                            href={c.href}
                            className="block px-3 py-1 text-sm hover:bg-white/20 rounded transition"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {c.name}
                          </a>
                        ))}
                        <p className="text-xs text-muted-foreground mt-2">
                          Immigration / PR
                        </p>
                        {immigrationCountries.map((c) => (
                          <a
                            key={c.name}
                            href={c.href}
                            className="block px-3 py-1 text-sm hover:bg-white/20 rounded transition"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {c.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-white/20 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>

              {/* Contact + Apply */}
              <div className="py-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-accent" />
                  <span className="text-sm text-muted-foreground">
                    +91 9876543210
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <span className="text-sm text-muted-foreground">
                    info@wizzenoverseas.com
                  </span>
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

      {/* Popup */}
      <Popup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}
