import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedNavBlocks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const sections = [
    { 
      name: "About", 
      icon: "fas fa-user", 
      color: "from-blue-400 to-blue-600",
      hoverColor: "from-blue-500 to-blue-700",
      textColor: "text-blue-600"
    },
    { 
      name: "Skills", 
      icon: "fas fa-tools", 
      color: "from-teal-400 to-teal-600",
      hoverColor: "from-teal-500 to-teal-700",
      textColor: "text-teal-600"
    },
    { 
      name: "Projects", 
      icon: "fas fa-project-diagram", 
      color: "from-purple-400 to-purple-600",
      hoverColor: "from-purple-500 to-purple-700",
      textColor: "text-purple-600"
    },
    { 
      name: "Experience", 
      icon: "fas fa-briefcase", 
      color: "from-amber-400 to-amber-600",
      hoverColor: "from-amber-500 to-amber-700",
      textColor: "text-amber-600"
    },
    { 
      name: "Education", 
      icon: "fas fa-graduation-cap", 
      color: "from-red-400 to-red-600",
      hoverColor: "from-red-500 to-red-700",
      textColor: "text-red-600"
    },
    { 
      name: "Timeline", 
      icon: "fas fa-history", 
      color: "from-indigo-400 to-indigo-600",
      hoverColor: "from-indigo-500 to-indigo-700",
      textColor: "text-indigo-600"
    },
    { 
      name: "Contact", 
      icon: "fas fa-envelope", 
      color: "from-emerald-400 to-emerald-600",
      hoverColor: "from-emerald-500 to-emerald-700",
      textColor: "text-emerald-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-neutral">
            Explore My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-neutral-light mt-2">
            Navigate through the different sections to learn more about me
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => scrollToSection(section.name.toLowerCase())}
            >
              <div 
                className={`
                  cursor-pointer bg-gradient-to-br ${hoveredIndex === index ? section.hoverColor : section.color} 
                  rounded-lg shadow-md p-4 h-full flex flex-col items-center justify-center
                  transition-all duration-300
                `}
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                  <i className={`${section.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-white font-medium text-center">{section.name}</h3>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hoveredIndex === index ? '80%' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-0.5 bg-white absolute bottom-3"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}