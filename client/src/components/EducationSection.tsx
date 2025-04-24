export default function EducationSection() {
  const education = [
    {
      degree: "MBA in Marketing & Business Analytics",
      institution: "Nagpur University",
      period: "2023 – 2025",
      activities: ["Business Analytics Club", "Entrepreneurship Development Cell"],
      icon: "fas fa-graduation-cap",
      color: "bg-primary"
    },
    {
      degree: "B.Sc. in Chemistry, Botany, Zoology",
      institution: "Nagpur University",
      period: "2019 – 2022",
      description: "Strong foundation in scientific research methods and analytical thinking.",
      icon: "fas fa-microscope",
      color: "bg-secondary"
    }
  ];

  return (
    <section id="education" className="py-16 bg-white section-fade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 font-accent">Education</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden">
              <div className={`md:w-1/3 ${edu.color} p-6 text-white flex items-center justify-center`}>
                <div className="text-center">
                  <i className={`${edu.icon} text-4xl mb-2`}></i>
                  <div className="font-semibold">{edu.period}</div>
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className={`${index === 0 ? 'text-primary' : 'text-secondary'} font-medium`}>{edu.institution}</p>
                {edu.activities ? (
                  <div className="mt-4">
                    <p className="font-medium">Activities:</p>
                    <ul className="mt-1 space-y-1">
                      {edu.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-center">
                          <i className={`fas fa-circle text-xs ${index === 0 ? 'text-primary' : 'text-secondary'} mr-2`}></i>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="mt-4">
                    <p>{edu.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
