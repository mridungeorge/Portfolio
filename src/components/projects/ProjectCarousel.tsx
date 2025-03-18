
import { useState } from "react";
import { Github, ExternalLink, ArrowRight, ArrowLeft, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { Project } from "@/types/experience";

interface ProjectCarouselProps {
  projects: Project[];
  isVisible: boolean;
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  openProjectDetails: (project: Project) => void;
}

const ProjectCarousel = ({ 
  projects, 
  isVisible, 
  currentSlide, 
  setCurrentSlide, 
  openProjectDetails 
}: ProjectCarouselProps) => {
  
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % projects.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + projects.length) % projects.length);
  };
  
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="w-full flex-shrink-0 px-2">
              <div
                className={cn(
                  "glass-card p-6 transition-all duration-500 h-full",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    {project.icon}
                    <h3 className="text-xl font-bold ml-2">{project.title}</h3>
                  </div>
                  
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-1 rounded hover:bg-dark-light transition-colors duration-300"
                      >
                        <Github size={18} className="text-light-darker hover:text-cyber" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-1 rounded hover:bg-dark-light transition-colors duration-300"
                      >
                        <ExternalLink size={18} className="text-light-darker hover:text-cyber" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-light-darker mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 rounded-full bg-dark-light text-light-darker"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => openProjectDetails(project)}
                  className="mt-2 btn-cyber w-full flex items-center justify-center"
                >
                  <span>View Details</span>
                  <Eye size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-4 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              currentSlide === index ? "bg-cyber" : "bg-dark-light"
            )}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-dark-lighter/80 rounded-full p-2 backdrop-blur-md"
        aria-label="Previous project"
      >
        <ArrowLeft size={20} className="text-cyber" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 bg-dark-lighter/80 rounded-full p-2 backdrop-blur-md"
        aria-label="Next project"
      >
        <ArrowRight size={20} className="text-cyber" />
      </button>
    </div>
  );
};

export default ProjectCarousel;
