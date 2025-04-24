import { useState, useEffect } from "react";
import { scrollToSection } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full bg-white bg-opacity-95 shadow-sm z-50 transition-all ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
              className="font-accent font-semibold text-xl text-primary"
            >
              NB
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {["about", "skills", "projects", "experience", "education", "contact"].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item); }}
                className="hover:text-primary transition-colors capitalize"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex md:hidden items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-neutral"
              aria-label="Toggle mobile menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden bg-white shadow-md ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {["about", "skills", "projects", "experience", "education", "contact"].map((item) => (
            <a 
              key={item}
              href={`#${item}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(item); }}
              className="block px-3 py-2 hover:bg-gray-50 hover:text-primary rounded-md capitalize"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
