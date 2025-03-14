
import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import WorkExperiences from "./experience/WorkExperiences";
import Certificates from "./experience/Certificates";
import { experiences, certificates } from "@/data/experienceData";

const ExperienceSection = () => {
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
    
    const section = document.getElementById("experience");
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="experience" className="py-20 relative bg-dark-lighter/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Experience & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <WorkExperiences experiences={experiences} isVisible={isVisible} />
          <Certificates certificates={certificates} isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
