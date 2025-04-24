export default function ProjectsSection() {
  const projects = [
    {
      title: "COVID-19 Data Insights",
      description: "Analyzed COVID-19 datasets using Python to uncover trends in infection, recovery, and fatality rates.",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      skillCategory: "blue",
      githubLink: "https://github.com/nehabagaswar/Covid-_19-_Data-Analysis_Python-project",
      icon: "fas fa-virus",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "Food Delivery Operational Analytics",
      description: "Used advanced SQL to extract data, identify bottlenecks, and optimize delivery operations.",
      skills: ["SQL", "MySQL", "PostgreSQL"],
      skillCategory: "green",
      githubLink: "https://github.com/nehabagaswar/Food_Delivery_-Data-Analysis_Sql-project",
      icon: "fas fa-utensils",
      gradient: "from-green-500 to-green-700"
    },
    {
      title: "NYC Airbnb Market Insights",
      description: "Combined SQL and Python to segment market trends and rental pricing in NYC.",
      skills: ["Python", "Pandas", "SQL", "Seaborn"],
      skillCategory: "mixed",
      githubLink: "https://github.com/nehabagaswar/NYC_Airnub_Market_Analysis_python_project",
      icon: "fas fa-building",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      title: "Sales Data Performance Analysis",
      description: "Evaluated seasonal sales and product performance with Python + SQL.",
      skills: ["Python", "SQL", "Visualization"],
      skillCategory: "mixed",
      githubLink: "https://github.com/nehabagaswar/Sales_Data_Analysis_python-project",
      icon: "fas fa-chart-line",
      gradient: "from-yellow-500 to-yellow-700"
    },
    {
      title: "Fundamental Data Analysis",
      description: "Cleaned and visualized datasets to practice core Python data skills.",
      skills: ["Python", "Pandas", "NumPy", "Seaborn"],
      skillCategory: "blue",
      githubLink: "https://github.com/nehabagaswar/Data_Analysis_with_pyhton_using_Numpy-Pandas-Data-visualization",
      icon: "fas fa-database",
      gradient: "from-red-500 to-red-700"
    },
    {
      title: "Other Projects",
      description: null,
      skills: [],
      skillCategory: "indigo",
      githubLink: null,
      icon: "fas fa-bullhorn",
      gradient: "from-indigo-500 to-indigo-700",
      otherProjects: [
        {
          name: "Flavoro Campaign Analysis", 
          description: "Marketing analytics for a food delivery platform"
        },
        {
          name: "Novatech Market Research", 
          description: "Competitive analysis for tech industry"
        }
      ]
    }
  ];

  const getSkillClass = (skill: string, category: string) => {
    if (category === "blue" || skill.includes("Python") || skill.includes("Pandas") || skill.includes("NumPy") || skill.includes("Seaborn")) 
      return "bg-blue-100 text-blue-800";
    if (category === "green" || skill.includes("SQL")) 
      return "bg-green-100 text-green-800";
    if (skill.includes("Visualization") || skill.includes("Power") || skill.includes("Tableau")) 
      return "bg-purple-100 text-purple-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <section id="projects" className="py-16 bg-white section-fade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 font-accent">Projects</h2>
        <p className="text-center text-neutral-light mb-12 max-w-3xl mx-auto">
          A collection of data analytics projects showcasing my skills in Python, SQL, data visualization, and analytical problem-solving.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className={`h-40 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className={`${project.icon} text-white text-5xl opacity-30`}></i>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <h3 className="text-white font-semibold text-xl">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                {project.description ? (
                  <>
                    <p className="text-neutral mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.skills.map((skill, sIndex) => (
                        <span 
                          key={sIndex} 
                          className={`px-2 py-1 ${getSkillClass(skill, project.skillCategory)} rounded text-xs`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-primary/80"
                      >
                        <i className="fab fa-github mr-2"></i> View on GitHub
                        <i className="fas fa-arrow-right ml-2 text-xs"></i>
                      </a>
                    )}
                  </>
                ) : (
                  <>
                    <ul className="space-y-3 list-disc list-inside">
                      {project.otherProjects?.map((otherProject, oIndex) => (
                        <li key={oIndex}>
                          <span className="font-medium">{otherProject.name}</span> - {otherProject.description}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 text-sm text-neutral-light italic">
                      These are ongoing or proprietary projects with no public repositories
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
