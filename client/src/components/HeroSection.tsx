import { scrollToSection } from "@/lib/utils";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl mb-10"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold text-neutral mb-6 font-accent"
            >
              <span className="text-primary">Neha</span> Bagaswar
            </motion.h1>
            <div className="h-14 md:h-16 mb-8">
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
                  'Business & Data Analyst',
                  10000,
                ]}
                wrapper="h2"
                speed={50}
                deletionSpeed={65}
                repeat={Infinity}
                className="text-2xl md:text-3xl font-medium text-neutral-light"
              />
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl mb-8 text-neutral-light max-w-2xl mx-auto leading-relaxed"
            >
              Helping businesses identify trends and opportunities through data analysis.
              <span className="italic text-primary"> (And yes, I actually understand what that means!)</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-lg text-neutral-light font-light mb-10 max-w-xl mx-auto"
            >
              <p>Passionate about leveraging data to drive business decisions and create meaningful impact.</p>
            </motion.div>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1xomx_h9zxz4m5HHlhqfuzR94Ahzv_b5v/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-colors shadow-md text-lg"
            >
              <i className="fas fa-file-alt mr-2"></i> View Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
