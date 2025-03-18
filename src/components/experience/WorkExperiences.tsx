
import { Briefcase } from "lucide-react";
import { Experience } from "@/types/experience";
import ExperienceItem from "./ExperienceItem";

type WorkExperiencesProps = {
  experiences: Experience[];
  isVisible: boolean;
};

const WorkExperiences = ({ experiences, isVisible }: WorkExperiencesProps) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <Briefcase size={24} className="text-cyber mr-2" />
        Work Experience
      </h3>
      
      <div className="relative pl-8 border-l border-cyber/30">
        {experiences.map((exp, index) => (
          <ExperienceItem 
            key={exp.id}
            experience={exp}
            isVisible={isVisible}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkExperiences;
