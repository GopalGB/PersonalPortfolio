import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSectionTitle from "./AnimatedSectionTitle";

export default function TimelineSection() {
  // Reference for the section
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax scroll effects using Framer Motion
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Timeline milestones data with professional achievements
  const milestones = [
    {
      year: "2023",
      title: "UI/UX & Digital Analytics Intern",
      organization: "Skill Guru Foundation",
      description: "Enhanced user interfaces based on feedback and data analytics, created performance reports, and collaborated across design and marketing teams.",
      skills: ["UI/UX", "Analytics", "Reporting", "Collaboration"],
      icon: "fas fa-laptop-code",
      color: "bg-primary",
      highlight: true
    },
    {
      year: "2023",
      title: "Started MBA Program",
      organization: "Nagpur University",
      description: "Began specialization in Marketing & Business Analytics, developing advanced skills in data-driven business strategy.",
      skills: ["Business Analytics", "Marketing", "Strategy"],
      icon: "fas fa-graduation-cap",
      color: "bg-blue-500"
    },
    {
      year: "2022",
      title: "Data Analysis Project Lead",
      organization: "University Research Team",
      description: "Led analysis of COVID-19 datasets, uncovering critical trends in infection rates that informed public health recommendations.",
      skills: ["Python", "Data Analysis", "Leadership"],
      icon: "fas fa-chart-line",
      color: "bg-purple-500"
    },
    {
      year: "2022",
      title: "Graduated with B.Sc.",
      organization: "Nagpur University",
      description: "Completed Bachelor of Science in Chemistry, Botany, and Zoology with strong foundation in scientific research methods.",
      skills: ["Research", "Scientific Method", "Analysis"],
      icon: "fas fa-microscope",
      color: "bg-secondary"
    },
    {
      year: "2021",
      title: "Market Research Assistant",
      organization: "Local Business Consultancy",
      description: "Conducted market research and utilized analytical tools to identify customer trends for product strategies.",
      skills: ["Market Research", "Data Collection", "Analysis"],
      icon: "fas fa-search",
      color: "bg-amber-500"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-gray-50 to-white section-fade relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSectionTitle title="Professional Journey" colorScheme="purple" />
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center text-neutral-light mb-16 max-w-3xl mx-auto"
        >
          A visual timeline of my key professional milestones and achievements.
          <span className="italic text-primary"> Each step a data point in my career journey!</span>
        </motion.p>
        
        <div className="relative">
          {/* Timeline central line with parallax effect */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary/30 via-primary to-primary/30 h-full rounded-full"
            style={{ 
              scaleY: useTransform(scrollYProgress, [0, 1], [0.1, 1]),
              opacity: useTransform(scrollYProgress, [0, 0.2], [0.3, 1])
            }}
          />
          
          {/* Decorative animated elements */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary/40"
            style={{
              y: useTransform(scrollYProgress, [0, 1], [50, window.innerHeight - 100]),
              x: useTransform(scrollYProgress, [0, 0.5, 1], [-20, 20, -20]),
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
              scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8])
            }}
          />
          
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-secondary/60"
            style={{
              y: useTransform(scrollYProgress, [0, 1], [150, window.innerHeight - 200]),
              x: useTransform(scrollYProgress, [0, 0.5, 1], [15, -15, 15]),
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.7, 0.7, 0]),
              scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6])
            }}
          />
          
          {/* Timeline events */}
          <div className="relative z-10">
            {milestones.map((milestone, index) => {
              // Alternate items left and right
              const isEven = index % 2 === 0;
              const parallaxOffset = isEven ? -30 : 30;
              
              return (
                <motion.div 
                  key={index}
                  className={`mb-16 flex items-center ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-center`}
                  initial={{ opacity: 0, x: isEven ? 50 : -50, y: 0 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    y: useTransform(
                      scrollYProgress, 
                      [0, 1], 
                      [0, parallaxOffset]
                    )
                  }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className={`w-6 h-6 rounded-full ${milestone.color} shadow-lg z-10 border-2 border-white`}></div>
                  </div>
                  
                  {/* Content card */}
                  <motion.div 
                    className={`w-10/12 md:w-5/12 ${isEven ? 'md:mr-12' : 'md:ml-12'} bg-white p-4 md:p-6 rounded-xl shadow-md border border-gray-100 relative`}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Year bubble */}
                    <div className={`hidden md:block absolute ${isEven ? '-left-16' : '-right-16'} top-6 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium`}>
                      {milestone.year}
                    </div>
                    <div className="md:hidden text-xs text-neutral-lightest mb-1">
                      {milestone.year}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-full ${milestone.color} flex items-center justify-center mb-4 shadow-md`}>
                      <i className={`${milestone.icon} text-white`}></i>
                    </div>
                    
                    <h3 className="text-lg font-semibold">{milestone.title}</h3>
                    <p className={`${milestone.highlight ? 'text-primary' : 'text-secondary'} font-medium text-sm mb-2`}>
                      {milestone.organization}
                    </p>
                    <p className="text-neutral-light text-sm mb-4">
                      {milestone.description}
                    </p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {milestone.skills.map((skill, skillIndex) => (
                        <motion.span 
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "rgb(var(--color-primary) / 0.1)",
                            color: "rgb(var(--color-primary))" 
                          }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.2, 
                            delay: 0.4 + (skillIndex * 0.1) 
                          }}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs border border-gray-200 shadow-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Timeline end */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-4 h-4 bg-primary rounded-full"
            style={{ 
              opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]),
              scale: useTransform(scrollYProgress, [0.8, 1], [0.5, 1.5])
            }}
          />
        </div>
        
        {/* Future direction */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-primary font-medium">Looking forward to adding the next milestone...</p>
          <p className="text-sm text-neutral-light mt-1">
            <i className="fas fa-heart text-xs mr-1"></i> Perhaps with your company?
          </p>
        </motion.div>
      </div>
    </section>
  );
}