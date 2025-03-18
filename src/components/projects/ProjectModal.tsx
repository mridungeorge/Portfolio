
import { X, Github, ExternalLink } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Project } from "@/types/experience";
import { getProjectDetails, getProjectFeatures } from "@/utils/projectUtils";

interface ProjectModalProps {
  project: Project;
  closeModal: () => void;
}

const ProjectModal = ({ project, closeModal }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={closeModal}
      />
      
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card p-6 lg:p-8 animate-fade-in"
      >
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 rounded-full bg-dark-light hover:bg-dark transition-colors duration-300"
        >
          <X size={20} className="text-light" />
        </button>
        
        <div className="flex items-center mb-6">
          {project.icon}
          <h3 className="text-2xl font-bold ml-3 gradient-text">{project.title}</h3>
        </div>
        
        <div className="space-y-6">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover rounded-lg"
            />
          ) : (
            <div className="h-48 bg-dark-light/50 rounded-lg flex items-center justify-center">
              <p className="text-light-darker">Project Screenshot</p>
            </div>
          )}
          
          <div>
            <h4 className="text-xl font-medium">Overview</h4>
            <p className="text-light-darker mt-2">
              {getProjectDetails(project.title) || project.details || project.description}
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-medium mb-3">Key Features</h4>
            <ul className="list-disc list-inside space-y-1 text-light-darker">
              {getProjectFeatures(project.title).map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-medium mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1.5 rounded-full bg-dark-light/70 text-light-darker"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="btn-cyber flex items-center"
              >
                <Github size={18} className="mr-2" />
                View Code
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer"
                className="btn-tech flex items-center"
              >
                <ExternalLink size={18} className="mr-2" />
                Live Demo
              </a>
            )}
          </div>
          
          <div>
            <h4 className="text-xl font-medium mb-3">Leave a Comment</h4>
            <Textarea 
              placeholder="Share your thoughts about this project..."
              className="bg-dark-lighter border-dark-light focus:border-cyber/50"
            />
            <button className="mt-3 btn-cyber">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
