export default function SkillsSection() {
  const technicalSkills = [
    "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn",
    "SQL", "MySQL", "PL/SQL", "Oracle SQL Developer",
    "Power BI", "Tableau", "Excel"
  ];

  const softSkills = [
    { name: "Analytical Thinking", percentage: 95 },
    { name: "Problem Solving", percentage: 90 },
    { name: "Presentation & Reporting", percentage: 85 },
    { name: "Stakeholder Collaboration", percentage: 80 }
  ];

  // Group technical skills by category for color-coding
  const getSkillClass = (skill: string) => {
    const pythonSkills = ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"];
    const sqlSkills = ["SQL", "MySQL", "PL/SQL", "Oracle SQL Developer"];
    const visualizationTools = ["Power BI", "Tableau", "Excel"];

    if (pythonSkills.includes(skill)) return "bg-blue-100 text-blue-800";
    if (sqlSkills.includes(skill)) return "bg-green-100 text-green-800";
    if (visualizationTools.includes(skill)) return "bg-purple-100 text-purple-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <section id="skills" className="py-16 bg-gray-50 section-fade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 font-accent">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <i className="fas fa-laptop-code text-primary mr-3"></i> Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`skill-badge px-4 py-2 ${getSkillClass(skill)} rounded-full`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <i className="fas fa-brain text-secondary mr-3"></i> Soft Skills
            </h3>
            <div className="flex flex-col space-y-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-1/2">
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="w-1/2 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
