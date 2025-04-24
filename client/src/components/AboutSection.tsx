export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white section-fade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 font-accent">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Data analytics visualization" 
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
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
              I'm actively looking for opportunities in data analysis, business analysis, or digital strategy roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
