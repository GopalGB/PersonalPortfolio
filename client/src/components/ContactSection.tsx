import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    { 
      type: "Email", 
      icon: "fas fa-envelope", 
      link: "mailto:nehabagaswar28@gmail.com", 
      value: "nehabagaswar28@gmail.com",
      color: "from-blue-400 to-blue-600"
    },
    { 
      type: "LinkedIn", 
      icon: "fab fa-linkedin-in", 
      link: "https://www.linkedin.com/in/neha-bagaswar", 
      value: "linkedin.com/in/neha-bagaswar",
      color: "from-blue-600 to-blue-800"
    },
    { 
      type: "Location", 
      icon: "fas fa-map-marker-alt", 
      link: null, 
      value: "India",
      color: "from-red-400 to-red-600"
    },
    { 
      type: "GitHub", 
      icon: "fab fa-github", 
      link: "https://github.com/nehabagaswar", 
      value: "github.com/nehabagaswar",
      color: "from-gray-700 to-gray-900"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all the fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
          variant: "default"
        });
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        const error = await response.json();
        throw new Error(error.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-primary/5 to-accent/5 section-fade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 font-accent"
        >
          Contact
        </motion.h2>
        
        <div className="max-w-5xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <div className="text-center mb-8">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-lg text-neutral-light mb-2"
              >
                Ready to transform your data into actionable insights?
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm text-neutral-lightest italic"
              >
                (Don't worry, I speak both data and human languages!)
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 mb-10">
              {contactInfo.map((contact, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center"
                >
                  {contact.link ? (
                    <motion.a 
                      href={contact.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center mb-3 shadow-md group-hover:shadow-lg transition-shadow`}>
                        <i className={`${contact.icon} text-white text-xl`}></i>
                      </div>
                      <span className="text-neutral font-medium group-hover:text-primary transition-colors">{contact.type}</span>
                      <span className="block text-xs text-neutral-lightest mt-1 group-hover:text-primary/70 transition-colors">{contact.value}</span>
                    </motion.a>
                  ) : (
                    <>
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center mb-3 shadow-md`}>
                        <i className={`${contact.icon} text-white text-xl`}></i>
                      </div>
                      <span className="text-neutral font-medium">{contact.type}</span>
                      <span className="block text-xs text-neutral-lightest mt-1">{contact.value}</span>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Contact form */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 p-6 bg-gray-50 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-neutral">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-neutral">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'm interested in discussing a potential project..."
                    className="w-full"
                  />
                </div>
                
                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-6 h-auto bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-colors shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-circle-notch fa-spin mr-2"></i> Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i> Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
              
              <p className="mt-6 text-sm text-neutral-lightest italic text-center">
                Response time may vary depending on how interesting your data problem is!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
