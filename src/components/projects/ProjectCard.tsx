
import { useState } from "react";
import { Github, ExternalLink, ArrowRight, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { Project } from "@/types/experience";

interface ProjectCardProps {
  project: Project;
  isVisible: boolean;
  activeProject: number | null;
  index: number;
  setActiveProject: (id: number | null) => void;
  openProjectDetails: (project: Project) => void;
}

const ProjectCard = ({ 
  project, 
  isVisible, 
  activeProject, 
  index,
  setActiveProject, 
  openProjectDetails 
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6 transition-all duration-700 transform cursor-pointer",
        isVisible ? 
          "opacity-100 translate-y-0" : 
          "opacity-0 translate-y-10",
        activeProject === project.id ? 
          "scale-[1.03] shadow-lg shadow-cyber/30 border-cyber/50 z-10" : 
          "hover:scale-[1.02] hover:shadow-md hover:shadow-cyber/20"
      )}
      style={{ 
        transitionDelay: `${(index) * 150}ms`,
        transform: activeProject === project.id ? 
          `scale(1.03) rotate(${(Math.random() * 2 - 1) * 0.5}deg)` : 
          `scale(1) rotate(0deg)`
      }}
      onMouseEnter={() => setActiveProject(project.id)}
      onMouseLeave={() => setActiveProject(null)}
      onClick={() => openProjectDetails(project)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          {project.icon}
          <h3 className="text-xl font-bold ml-2 group-hover:text-cyber transition-colors duration-300">{project.title}</h3>
        </div>
        
        <div className="flex space-x-2">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer"
              className="p-1 rounded hover:bg-dark-light transition-colors duration-300 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} className="text-light-darker hover:text-cyber" />
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noreferrer"
              className="p-1 rounded hover:bg-dark-light transition-colors duration-300 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} className="text-light-darker hover:text-cyber" />
            </a>
          )}
        </div>
      </div>
      
      <p className="text-light-darker mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="text-xs px-2 py-1 rounded-full bg-dark-light text-light-darker hover:bg-dark hover:text-light"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className={cn(
        "mt-4 flex items-center text-cyber transform transition-opacity duration-300",
        activeProject === project.id ? "opacity-100" : "opacity-0"
      )}>
        <span>View Details</span>
        <ArrowRight size={16} className="ml-2 animate-pulse" />
      </div>
    </div>
  );
};

export default ProjectCard;
