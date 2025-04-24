import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Footer() {
  const links = [
    { name: "About", url: "about" },
    { name: "Skills", url: "skills" },
    { name: "Projects", url: "projects" },
    { name: "Experience", url: "experience" },
    { name: "Contact", url: "contact" }
  ];
  
  const socialLinks = [
    { 
      icon: "fas fa-envelope", 
      url: "mailto:nehabagaswar28@gmail.com", 
      color: "#4DA8FF",
      label: "Email"
    },
    { 
      icon: "fab fa-linkedin-in", 
      url: "https://www.linkedin.com/in/neha-bagaswar", 
      color: "#0A66C2",
      label: "LinkedIn"
    },
    { 
      icon: "fab fa-github", 
      url: "https://github.com/nehabagaswar", 
      color: "#333333",
      label: "GitHub" 
    }
  ];

  return (
    <footer className="py-10 bg-gradient-to-br from-neutral to-neutral-dark text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Logo/Name and Tagline */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-6 text-center"
          >
            <h3 className="text-2xl font-bold mb-1">
              <span className="text-primary">Neha</span> Bagaswar
            </h3>
            <p className="text-neutral-lightest text-sm">
              Business & Data Analyst — <span className="italic">Turning numbers into narratives</span>
            </p>
          </motion.div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {links.map((link, i) => (
              <motion.button
                key={link.name}
                whileHover={{ scale: 1.1, color: "#5FA8D3" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollToSection(link.url)}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </motion.button>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-5 mb-8">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                whileHover={{ 
                  y: -5, 
                  backgroundColor: social.color,
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.2)" 
                }}
                href={social.url}
                target={social.url.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-light/30 flex items-center justify-center text-white transition-all duration-300"
                aria-label={social.label}
              >
                <i className={social.icon}></i>
              </motion.a>
            ))}
          </div>
          
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-neutral-lightest border-t border-neutral-light/20 pt-6 w-full"
          >
            <p>© 2025 Neha Bagaswar • All Rights Reserved</p>
            <p className="text-xs mt-1"><span className="text-primary">💼</span> Data-driven • Detail-oriented • Results-focused</p>
          </motion.div>
          
          {/* Back to top */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
            whileHover={{ y: -5, scale: 1.1 }}
            onClick={() => scrollToSection('hero')}
            className="mt-6 bg-primary hover:bg-primary/90 transition-all h-10 w-10 rounded-full flex items-center justify-center shadow-lg"
            aria-label="Back to top"
          >
            <i className="fas fa-arrow-up text-white"></i>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
