import { motion } from "framer-motion";
import AnimatedSectionTitle from "./AnimatedSectionTitle";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white section-fade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSectionTitle title="About Me" colorScheme="blue" />
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-2/5 lg:pr-12 mb-8 lg:mb-0"
          >
            <div className="bg-gradient-to-br from-primary/5 to-primary/20 rounded-xl p-8 shadow-lg">
              <motion.div 
                initial={{ rotate: 0 }}
                whileHover={{ rotate: -2 }}
                className="mb-6 text-center"
              >
                <i className="fas fa-laptop-code text-6xl text-primary"></i>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="italic text-center text-neutral-light relative"
              >
                <i className="fas fa-quote-left absolute -top-4 -left-2 text-primary/20 text-4xl"></i>
                <p className="mb-2">I don't just analyze data; I translate it into business opportunities.</p>
                <p className="text-xs">
                  <span className="font-semibold block mt-4">Note to self:</span> Remember to also translate it into English for the executives!
                </p>
                <i className="fas fa-quote-right absolute -bottom-4 -right-2 text-primary/20 text-4xl"></i>
              </motion.div>
            </div>
          </motion.div>
          <div className="w-full lg:w-3/5">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg mb-4 bg-gradient-to-r from-primary/10 to-transparent p-3 rounded-lg"
            >
              MBA student with a knack for <span className="text-primary font-medium">turning boring numbers into fascinating stories</span>. Yes, I'm that rare person who gets excited about spreadsheets! 🤓
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-4 bg-gradient-to-r from-accent/10 to-transparent p-3 rounded-lg"
            >
              <p className="text-lg">
                <motion.span
                  initial={{ color: "#4a5568" }}
                  whileInView={{ color: "#3b82f6" }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  className="font-medium"
                >
                  Data wizard
                </motion.span> with Python, SQL, Power BI & Tableau. <span className="italic">(I speak fluent 'Spreadsheet' and can translate it to human!)</span>
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg mb-4"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-emerald-100 text-emerald-800 px-2 py-1 rounded mr-1 mb-1"
              >
                Social Media Analytics
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-1 mb-1"
              >
                Sales Trends
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded mr-1 mb-1"
              >
                Dashboards
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-amber-100 text-amber-800 px-2 py-1 rounded mb-1"
              >
                Operational Analysis
              </motion.span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg font-medium bg-gradient-to-r from-primary/10 to-transparent p-3 rounded-lg"
            >
              Seeking roles in data analysis or digital strategy. <motion.span 
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="italic text-primary"
              >
                (Because I'm weirdly passionate about finding patterns in chaos!)
              </motion.span>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
