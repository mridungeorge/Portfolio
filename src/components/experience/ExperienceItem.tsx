
import { ChevronRight, Calendar } from "lucide-react";
import { Experience } from "@/types/experience";
import { cn } from "@/lib/utils";

type ExperienceItemProps = {
  experience: Experience;
  isVisible: boolean;
  index: number;
};

const ExperienceItem = ({ experience, isVisible, index }: ExperienceItemProps) => {
  return (
    <div 
      className={cn(
        "mb-8 relative transition-all duration-500 transform",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="absolute -left-4 top-0 w-7 h-7 rounded-full bg-dark-light border-2 border-cyber flex items-center justify-center">
        {experience.icon}
      </div>
      
      <div className="glass p-5 rounded-lg shadow-md">
        <div className="flex flex-wrap justify-between items-start mb-2">
          <h4 className="text-xl font-bold">{experience.title}</h4>
          <div className="flex items-center text-sm text-light-darker">
            <Calendar size={14} className="mr-1" />
            {experience.period}
          </div>
        </div>
        
        <p className="text-tech text-sm mb-3">{experience.company}</p>
        
        <ul className="space-y-2">
          {experience.description.map((item, i) => (
            <li key={i} className="flex text-sm text-light-darker">
              <ChevronRight size={16} className="text-cyber mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
