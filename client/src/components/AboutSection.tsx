import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white section-fade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 font-accent"
        >
          About Me
        </motion.h2>
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
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full lg:w-3/5"
          >
            <p className="text-lg mb-4">
              Hi, I'm Neha Bagaswar, currently pursuing an MBA in Marketing & Business Analytics from Nagpur University. I'm passionate about solving problems using data, turning complex information into meaningful insights for business decision-making.
            </p>
            <p className="text-lg mb-4">
              My skillset spans data wrangling, visualization, and stakeholder-focused reporting using tools like Python (Pandas, NumPy, Seaborn), SQL (MySQL, Oracle), Power BI, and Tableau.
            </p>
            <p className="text-lg mb-4">
              I've worked on projects involving social media analytics, sales data trends, operational analysis, and dashboard development.
            </p>
            <p className="text-lg font-medium">
              I'm actively looking for opportunities in data analysis, business analysis, or digital strategy roles. <span className="italic text-primary text-sm">(Because turning Excel spreadsheets into actionable insights is my idea of fun!)</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
