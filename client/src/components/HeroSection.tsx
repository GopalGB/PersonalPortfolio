import { scrollToSection } from "@/lib/utils";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 mb-10 lg:mb-0"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-neutral mb-4 font-accent"
            >
              <span className="text-primary">Neha</span> Bagaswar
            </motion.h1>
            <div className="h-12 md:h-16 mb-5">
              <TypeAnimation
                sequence={[
                  'Business Analyst',
                  1000,
                  'Wait, more like...',
                  800,
                  'Data Analyst',
                  1000,
                  'Actually, both...',
                  800,
                  'Business & Data Analyst | Turning Raw Data into Actionable Insights',
                  10000,
                ]}
                wrapper="h2"
                speed={50}
                deletionSpeed={65}
                repeat={Infinity}
                className="text-xl md:text-2xl font-medium text-neutral-light"
              />
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg mb-8 text-neutral-light"
            >
              Helping businesses grow by transforming raw data into strategic insights. 
              <span className="italic text-primary"> (And yes, I actually understand what that means!)</span>
            </motion.p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1xomx_h9zxz4m5HHlhqfuzR94Ahzv_b5v/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-colors shadow-md"
            >
              <i className="fas fa-file-alt mr-2"></i> View Resume
            </motion.a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              delay: 0.2,
              duration: 0.6 
            }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional headshot of Neha Bagaswar" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="absolute -bottom-4 -right-4 bg-accent text-white p-4 rounded-full shadow-lg"
              >
                <i className="fas fa-chart-line text-2xl"></i>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
