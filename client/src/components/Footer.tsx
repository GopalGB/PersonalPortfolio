import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 bg-neutral text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg font-semibold mb-4"
            >
              Neha Bagaswar
            </motion.h3>
            <p className="text-neutral-lightest mb-2">Business & Data Analyst</p>
            <p className="text-neutral-lightest text-sm italic">Turning numbers into narratives</p>
          </div>
          
          <div className="text-center">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg font-semibold mb-4"
            >
              Quick Links
            </motion.h3>
            <div className="flex flex-col space-y-2">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-neutral-lightest hover:text-white transition-colors"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg font-semibold mb-4"
            >
              Connect
            </motion.h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <motion.a
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                whileHover={{ y: -5, color: "#4DA8FF" }}
                href="mailto:nehabagaswar28@gmail.com"
                className="w-10 h-10 rounded-full bg-neutral-light/20 flex items-center justify-center text-white transition-colors"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </motion.a>
              
              <motion.a
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                whileHover={{ y: -5, color: "#0A66C2" }}
                href="https://www.linkedin.com/in/neha-bagaswar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-light/20 flex items-center justify-center text-white transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </motion.a>
              
              <motion.a
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{ y: -5, color: "#333333" }}
                href="https://github.com/nehabagaswar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-light/20 flex items-center justify-center text-white transition-colors"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </motion.a>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="border-t border-neutral-light/20 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0 text-sm text-neutral-lightest">
            <p>© 2025 Neha Bagaswar | Built with 💻 Data & Dedication <span className="italic">(and a touch of caffeine)</span></p>
          </div>
          <motion.button
            whileHover={{ y: -3 }}
            onClick={() => scrollToSection('hero')}
            className="bg-primary hover:bg-primary/90 transition-colors h-10 w-10 rounded-full flex items-center justify-center shadow-md"
            aria-label="Back to top"
          >
            <i className="fas fa-arrow-up text-white"></i>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
