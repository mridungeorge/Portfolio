
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type AdditionalAchievementsProps = {
  isVisible: boolean;
};

const AdditionalAchievements = ({ isVisible }: AdditionalAchievementsProps) => {
  return (
    <div 
      className={cn(
        "glass p-5 rounded-lg shadow-md mt-6 transition-all duration-500 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: "600ms" }}
    >
      <h4 className="text-lg font-medium mb-3">Additional Achievements</h4>
      <ul className="space-y-2">
        <li className="flex text-sm text-light-darker">
          <ChevronRight size={16} className="text-tech mt-0.5 flex-shrink-0" />
          <span>AWS Educate Web Application Development Builder</span>
        </li>
        <li className="flex text-sm text-light-darker">
          <ChevronRight size={16} className="text-tech mt-0.5 flex-shrink-0" />
          <span>Completed 35+ rooms on TryHackMe security platform</span>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalAchievements;
