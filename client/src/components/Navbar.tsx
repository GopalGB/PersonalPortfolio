import { useState, useEffect } from "react";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";

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
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full bg-white bg-opacity-95 shadow-sm z-50 transition-all ${scrolled ? 'shadow-md' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#hero" 
              onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
              className="font-accent font-semibold text-xl text-primary"
            >
              NB
            </motion.a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {["about", "skills", "projects", "experience", "education", "timeline", "contact"].map((item, i) => (
              <motion.a 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                href={`#${item}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item); }}
                className="nav-link hover:text-primary transition-colors capitalize"
              >
                {item}
              </motion.a>
            ))}
          </div>
          <div className="flex md:hidden items-center">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
              className="text-neutral"
              aria-label="Toggle mobile menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </motion.button>
          </div>
        </div>
      </div>
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-white shadow-md overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {["about", "skills", "projects", "experience", "education", "timeline", "contact"].map((item) => (
            <motion.a 
              whileHover={{ x: 5 }}
              key={item}
              href={`#${item}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(item); }}
              className="block px-3 py-2 hover:bg-gray-50 hover:text-primary rounded-md capitalize"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
