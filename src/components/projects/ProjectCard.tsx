import { useState } from "react";
import { Github, ExternalLink, ArrowRight, Eye, Edit } from "lucide-react";
import { cn } from "@/lib/utils";
import { Project } from "@/types/experience";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

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
  const { user } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [githubUrl, setGithubUrl] = useState(project.githubUrl || "");

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const saveGithubUrl = async (e: React.FormEvent) => {
    e.stopPropagation();
    
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to save project details",
        variant: "destructive"
      });
      return;
    }

    try {
      // Save GitHub URL to Supabase with the correct types
      const { error } = await supabase
        .from("projects")
        .upsert({
          title: project.title,
          description: project.description,
          tags: project.tags,
          github_url: githubUrl,
          live_url: project.liveUrl,
          user_id: user.id
        });

      if (error) throw error;

      toast({
        title: "GitHub URL saved",
        description: "Project information updated successfully"
      });

      setIsEditing(false);
      // We'd update the local project data here if we were fetching from Supabase
    } catch (error) {
      console.error("Error saving GitHub URL:", error);
      toast({
        title: "Error saving GitHub URL",
        description: error.message || "Please try again later",
        variant: "destructive"
      });
    }
  };

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
          {user && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="p-1 rounded hover:bg-dark-light transition-colors duration-300 z-20"
              onClick={handleEditClick}
            >
              <Edit size={18} className="text-light-darker hover:text-cyber" />
            </Button>
          )}
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
      
      {isEditing ? (
        <form onSubmit={saveGithubUrl} onClick={(e) => e.stopPropagation()} className="mb-4 z-20">
          <div className="mb-2">
            <label htmlFor="githubUrl" className="text-sm text-light-darker">GitHub Repository URL</label>
            <input
              type="url"
              id="githubUrl"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              className="w-full p-2 bg-dark-light rounded border border-dark-lighter text-light focus:border-cyber outline-none"
              placeholder="https://github.com/username/repo"
            />
          </div>
          <div className="flex space-x-2">
            <Button type="submit" variant="default" size="sm" className="bg-cyber hover:bg-cyber/80">
              Save
            </Button>
            <Button type="button" variant="outline" size="sm" onClick={(e) => {
              e.stopPropagation();
              setIsEditing(false);
            }}>
              Cancel
            </Button>
          </div>
        </form>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default ProjectCard;
