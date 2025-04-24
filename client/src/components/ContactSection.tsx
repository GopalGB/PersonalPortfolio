import { motion } from "framer-motion";
import AnimatedSectionTitle from "./AnimatedSectionTitle";

export default function ContactSection() {
  const contactInfo = [
    { 
      type: "Email", 
      icon: "fas fa-envelope", 
      link: "mailto:nehabagaswar28@gmail.com", 
      value: "nehabagaswar28@gmail.com",
      color: "from-blue-400 to-blue-600"
    },
    { 
      type: "LinkedIn", 
      icon: "fab fa-linkedin-in", 
      link: "https://www.linkedin.com/in/neha-bagaswar", 
      value: "linkedin.com/in/neha-bagaswar",
      color: "from-blue-600 to-blue-800"
    },
    { 
      type: "Location", 
      icon: "fas fa-map-marker-alt", 
      link: null, 
      value: "India",
      color: "from-red-400 to-red-600"
    },
    { 
      type: "GitHub", 
      icon: "fab fa-github", 
      link: "https://github.com/nehabagaswar", 
      value: "github.com/nehabagaswar",
      color: "from-gray-700 to-gray-900"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
    <section id="contact" className="py-16 bg-gradient-to-br from-primary/5 to-accent/5 section-fade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSectionTitle title="Contact" colorScheme="emerald" />
        
        <div className="max-w-5xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <div className="text-center mb-8">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-lg text-neutral-light mb-2"
              >
                Ready to transform your data into actionable insights?
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm text-neutral-lightest italic"
              >
                (Don't worry, I speak both data and human languages!)
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 mb-10">
              {contactInfo.map((contact, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center"
                >
                  {contact.link ? (
                    <motion.a 
                      href={contact.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center mb-3 shadow-md group-hover:shadow-lg transition-shadow`}>
                        <i className={`${contact.icon} text-white text-xl`}></i>
                      </div>
                      <span className="text-neutral font-medium group-hover:text-primary transition-colors">{contact.type}</span>
                      <span className="block text-xs text-neutral-lightest mt-1 group-hover:text-primary/70 transition-colors">{contact.value}</span>
                    </motion.a>
                  ) : (
                    <>
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center mb-3 shadow-md`}>
                        <i className={`${contact.icon} text-white text-xl`}></i>
                      </div>
                      <span className="text-neutral font-medium">{contact.type}</span>
                      <span className="block text-xs text-neutral-lightest mt-1">{contact.value}</span>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Get In Touch Message */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-neutral mb-6">
                Feel free to reach out through any of the contact methods above.
              </p>
              <p className="text-sm text-neutral-lightest italic">
                I'm always open to discussing new projects and opportunities!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
