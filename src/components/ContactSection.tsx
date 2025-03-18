
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";
import LookingFor from "./contact/LookingFor";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById("contact");
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="contact" className="py-20 relative bg-dark-lighter/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className={cn(
            "transition-all duration-500 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
            <p className="text-light-darker mb-6">
              I'm currently open to new opportunities in DevOps, Cloud Engineering, and Cybersecurity roles. Feel free to reach out!
            </p>
            
            <ContactForm />
          </div>
          
          <div className={cn(
            "transition-all duration-500 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <h3 className="text-2xl font-bold mb-4">Connect & Resources</h3>
            
            <ContactInfo />
            <LookingFor />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
