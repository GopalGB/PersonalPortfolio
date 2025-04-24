export default function ContactSection() {
  const contactInfo = [
    { 
      type: "Email", 
      icon: "fas fa-envelope", 
      link: "mailto:nehabagaswar28@gmail.com", 
      value: "nehabagaswar28@gmail.com" 
    },
    { 
      type: "LinkedIn", 
      icon: "fab fa-linkedin-in", 
      link: "https://www.linkedin.com/in/neha-bagaswar", 
      value: "linkedin.com/in/neha-bagaswar" 
    },
    { 
      type: "Location", 
      icon: "fas fa-map-marker-alt", 
      link: null, 
      value: "India" 
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-primary/5 to-accent/5 section-fade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 font-accent">Contact</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex justify-center space-x-12 mb-10">
              {contactInfo.map((contact, index) => (
                contact.link ? (
                  <a 
                    key={index}
                    href={contact.link} 
                    target={contact.type === "LinkedIn" ? "_blank" : undefined}
                    rel={contact.type === "LinkedIn" ? "noopener noreferrer" : undefined}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <i className={`${contact.icon} text-primary text-xl`}></i>
                    </div>
                    <span className="text-neutral font-medium group-hover:text-primary transition-colors">{contact.type}</span>
                  </a>
                ) : (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <i className={`${contact.icon} text-primary text-xl`}></i>
                    </div>
                    <span className="text-neutral font-medium">{contact.value}</span>
                  </div>
                )
              ))}
            </div>
            
            <div className="text-center">
              <a 
                href="mailto:nehabagaswar28@gmail.com" 
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-colors shadow-md"
              >
                <i className="fas fa-paper-plane mr-2"></i> Get In Touch
              </a>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-lg h-64 rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Data visualization elements" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
