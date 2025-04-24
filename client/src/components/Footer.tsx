import { scrollToSection } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="py-6 bg-neutral text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© 2025 Neha Bagaswar | Built with 💻 Data & Dedication</p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="mailto:nehabagaswar28@gmail.com" 
              className="text-white hover:text-primary/80 transition-colors"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/neha-bagaswar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-primary/80 transition-colors"
              aria-label="Back to top"
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
