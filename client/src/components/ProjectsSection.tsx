import { motion } from "framer-motion";
import AnimatedSectionTitle from "./AnimatedSectionTitle";

export default function ProjectsSection() {
  const projects = [
    {
      title: "COVID-19 Data Insights",
      description: "Analyzed COVID-19 datasets using Python to uncover critical trends in infection, recovery, and fatality rates, thereby transforming raw public health data into actionable insights.",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      skillCategory: "blue",
      githubLink: "https://github.com/nehabagaswar/Covid-_19-_Data-Analysis_Python-project",
      icon: "fas fa-virus",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "Diwali Sales Performance Analysis",
      description: "Processed and visualized Diwali seasonal sales data to identify peak periods and product performance trends, supporting optimized marketing strategies.",
      skills: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      skillCategory: "blue",
      githubLink: "https://github.com/nehabagaswar/Sales_Data_Analysis_python-project",
      icon: "fas fa-shopping-cart",
      gradient: "from-yellow-500 to-yellow-700"
    },
    {
      title: "Food Delivery Operational Analytics",
      description: "Employed advanced SQL queries to extract and aggregate food delivery data, resulting in the identification of operational bottlenecks and improved logistic efficiencies.",
      skills: ["SQL", "MySQL", "PostgreSQL"],
      skillCategory: "green",
      githubLink: "https://github.com/nehabagaswar/Food_Delivery_-Data-Analysis_Sql-project",
      icon: "fas fa-utensils",
      gradient: "from-green-500 to-green-700"
    },
    {
      title: "NYC Airbnb Market Insights",
      description: "Combined SQL and Python to analyze rental pricing trends and neighborhood performance in NYC, resulting in comprehensive market segmentation insights for strategic planning.",
      skills: ["SQL", "Python", "Pandas", "NumPy", "Seaborn"],
      skillCategory: "mixed",
      githubLink: "https://github.com/nehabagaswar/NYC_Airnub_Market_Analysis_python_project",
      icon: "fas fa-building",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      title: "Sales Data Performance Analysis",
      description: "Integrated SQL-driven data extraction with Python analysis to evaluate seasonal sales trends and product performance, delivering actionable insights that support strategic planning.",
      skills: ["SQL", "Python", "Pandas", "NumPy", "Matplotlib"],
      skillCategory: "mixed",
      githubLink: "https://github.com/nehabagaswar/Sales_Data_Analysis_python-project",
      icon: "fas fa-chart-line",
      gradient: "from-orange-500 to-orange-700"
    },
    {
      title: "Fundamental Data Analysis",
      description: "Demonstrated key data analysis techniques by cleaning, transforming, and visualizing datasets, establishing a robust foundation for data-driven decision-making.",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      skillCategory: "blue",
      githubLink: "https://github.com/nehabagaswar/Data_Analysis_with_pyhton_using_Numpy-Pandas-Data-visualization",
      icon: "fas fa-database",
      gradient: "from-red-500 to-red-700"
    },
    {
      title: "Marketing & Market Research Projects",
      description: null,
      skills: [],
      skillCategory: "indigo",
      githubLink: null,
      icon: "fas fa-bullhorn",
      gradient: "from-indigo-500 to-indigo-700",
      otherProjects: [
        {
          name: "Social Media Marketing Campaign for Flavoro", 
          description: "Executed a targeted campaign by analyzing social media metrics, resulting in increased online engagement and enhanced brand visibility."
        },
        {
          name: "Market Research for Novatech", 
          description: "Conducted comprehensive market research and utilized analytical tools to identify emerging customer trends, directly informing product launch strategies."
        }
      ]
    }
  ];

  const getSkillClass = (skill: string, category: string) => {
    if (category === "blue" || skill.includes("Python") || skill.includes("Pandas") || skill.includes("NumPy") || skill.includes("Seaborn")) 
      return "bg-blue-100 text-blue-800";
    if (category === "green" || skill.includes("SQL")) 
      return "bg-green-100 text-green-800";
    if (skill.includes("Visualization") || skill.includes("Power") || skill.includes("Tableau") || skill.includes("Matplotlib")) 
      return "bg-purple-100 text-purple-800";
    return "bg-gray-100 text-gray-800";
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-16 bg-white section-fade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSectionTitle title="Projects" colorScheme="purple" />
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center text-neutral-light mb-12 max-w-3xl mx-auto"
        >
          A collection of data analytics projects showcasing my skills in Python, SQL, data visualization, and analytical problem-solving. 
          <span className="italic text-primary"> Because who doesn't love a good data-driven story?</span>
        </motion.p>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ y: -8 }}
              className="project-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-full flex flex-col"
            >
              <div className={`h-40 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <motion.div 
                  initial={{ scale: 0.8, rotate: 0 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <i className={`${project.icon} text-white text-5xl opacity-30`}></i>
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-white font-semibold text-xl">{project.title}</h3>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                {project.description ? (
                  <>
                    <p className="text-neutral mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.skills.map((skill, sIndex) => (
                        <motion.span 
                          whileHover={{ scale: 1.1 }}
                          key={sIndex} 
                          className={`px-2 py-1 ${getSkillClass(skill, project.skillCategory)} rounded text-xs skill-badge`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                    {project.githubLink && (
                      <motion.a 
                        whileHover={{ x: 5 }}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-primary/80 mt-auto"
                      >
                        <i className="fab fa-github mr-2"></i> View on GitHub
                        <i className="fas fa-arrow-right ml-2 text-xs"></i>
                      </motion.a>
                    )}
                  </>
                ) : (
                  <>
                    <ul className="space-y-4 list-none flex-grow">
                      {project.otherProjects?.map((otherProject, oIndex) => (
                        <li key={oIndex} className="border-l-2 border-primary/50 pl-4 py-1">
                          <span className="font-semibold text-primary block">{otherProject.name}</span>
                          <p className="mt-1">{otherProject.description}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 text-sm text-neutral-light italic">
                      These are ongoing or proprietary projects with no public repositories yet
                      <span className="block mt-1 text-xs">(Translation: I did the work but can't show the code!)</span>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
