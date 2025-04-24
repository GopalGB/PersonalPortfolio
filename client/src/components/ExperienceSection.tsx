import AnimatedSectionTitle from "./AnimatedSectionTitle";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-gray-50 section-fade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSectionTitle title="Experience" colorScheme="amber" />
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 relative">
            <div className="absolute top-8 left-0 w-1 h-4/5 bg-primary rounded-r-full"></div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h3 className="font-semibold text-lg">UI/UX & Digital Analytics Intern</h3>
                <p className="text-primary font-medium">Skill Guru Foundation</p>
                <p className="text-sm text-neutral-lightest">May 2023 – July 2023</p>
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <ul className="space-y-3">
                  <li className="flex">
                    <i className="fas fa-angle-right text-primary mt-1 mr-2"></i>
                    <span>Enhanced user interfaces based on feedback + data analytics.</span>
                  </li>
                  <li className="flex">
                    <i className="fas fa-angle-right text-primary mt-1 mr-2"></i>
                    <span>Created performance reports for stakeholders.</span>
                  </li>
                  <li className="flex">
                    <i className="fas fa-angle-right text-primary mt-1 mr-2"></i>
                    <span>Collaborated across design and marketing teams to implement changes.</span>
                  </li>
                </ul>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">UI/UX</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">Analytics</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">Reporting</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">Collaboration</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-neutral-light">
              Currently seeking new opportunities in data analysis and business intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
