import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 bg-neutral text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">
            <span className="text-primary">Neha</span> Bagaswar
          </h3>
          <p className="text-gray-300">
            Business & Data Analyst
          </p>
        </div>
        
        <div className="flex justify-center gap-8 mb-8 flex-wrap">
          <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-primary">About</button>
          <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-primary">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-primary">Projects</button>
          <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-primary">Experience</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-primary">Contact</button>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="mailto:nehabagaswar28@gmail.com" 
            className="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-500 flex items-center justify-center text-white"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/neha-bagaswar" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-700 flex items-center justify-center text-white"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a 
            href="https://github.com/nehabagaswar"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-900 flex items-center justify-center text-white"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        
        <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
          <p>© 2025 Neha Bagaswar • All Rights Reserved</p>
          <p className="mt-2 text-xs">Data-driven • Detail-oriented • Results-focused</p>
        </div>
        
        <div className="flex justify-center mt-6">
          <button
            onClick={() => scrollToSection('hero')}
            className="bg-primary hover:bg-primary/90 h-10 w-10 rounded-full flex items-center justify-center shadow-md"
            aria-label="Back to top"
          >
            <i className="fas fa-arrow-up text-white"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
