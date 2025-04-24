import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral mb-4 font-accent">
              <span className="text-primary">Neha</span> Bagaswar
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-neutral-light mb-5">
              Business & Data Analyst | Turning Raw Data into Actionable Insights
            </h2>
            <p className="text-lg mb-8 text-neutral-light">
              Helping businesses grow by transforming raw data into strategic insights.
            </p>
            <a 
              href="https://drive.google.com/file/d/1xomx_h9zxz4m5HHlhqfuzR94Ahzv_b5v/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-colors shadow-md"
            >
              <i className="fas fa-file-alt mr-2"></i> View Resume
            </a>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional headshot of Neha Bagaswar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-white p-4 rounded-full shadow-lg">
                <i className="fas fa-chart-line text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
