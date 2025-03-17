
import { useState, useEffect } from "react";
import { Calendar, Award } from "lucide-react";
import { Separator } from "@/components/ui/separator";
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
        <h2 className="text-3xl font-bold mb-16 text-center gradient-text">Experience & Certifications</h2>
        
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-center">
            <Calendar size={24} className="text-cyber mr-2" />
            Professional Experience
          </h3>
          <WorkExperiences experiences={experiences} isVisible={isVisible} />
        </div>
        
        <Separator className="my-16 bg-dark-lighter/50" />
        
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-center">
            <Award size={24} className="text-tech mr-2" />
            Certifications & Achievements
          </h3>
          <div className="max-w-3xl mx-auto">
            <Certificates certificates={certificates} isVisible={isVisible} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
