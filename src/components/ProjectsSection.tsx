
import { useState, useEffect } from "react";
import { Github, ExternalLink, Server, Database, Code, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: JSX.Element;
  githubUrl?: string;
  liveUrl?: string;
};

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<string>("all");
  
  const projects: Project[] = [
    {
      id: 1,
      title: "TailorWise - AI Cover Letter Generator",
      description: "An AI-powered web application for personalized cover letter generation based on job descriptions and resumes. Features include dynamic job matching, AI-driven text generation, and user-friendly interface.",
      tags: ["express.js", "ai", "fastapi", "node.js", "mongodb"],
      icon: <Code size={24} className="text-cyber" />,
      githubUrl: "https://github.com/mridungeorge/tailorwise",
      liveUrl: "https://tailorwise.example.com"
    },
    {
      id: 2,
      title: "AI-Powered Label Generator",
      description: "Advanced label-generation system integrating with Microsoft Dynamics NAV to fetch real-time product data. Features custom label designer, batch printing, AI-driven layout optimization, and universal printer compatibility.",
      tags: ["fastapi", "node.js", "react", "postgresql", "mongodb"],
      icon: <Server size={24} className="text-cyber" />,
      githubUrl: "https://github.com/mridungeorge/label-generator"
    },
    {
      id: 3,
      title: "PyExi - No-Code Python Automation",
      description: "A no-code Python automation script generator enabling users to automate file management, web scraping, data processing, and API integrations. Includes AI-powered task-to-script conversion.",
      tags: ["react", "next.js", "python", "aws", "azure", "openai"],
      icon: <Cloud size={24} className="text-cyber" />,
      githubUrl: "https://github.com/mridungeorge/pyexi",
      liveUrl: "https://pyexi.example.com"
    },
    {
      id: 4,
      title: "API-Driven Analytics Platform",
      description: "Business intelligence platform for data visualization, KPI tracking, and AI-powered analytics. Features role-based access control, real-time dashboards, and enterprise ERP integration.",
      tags: ["fastapi", "node.js", "react", "typescript", "postgresql", "mongodb", "tensorflow"],
      icon: <Database size={24} className="text-cyber" />,
      githubUrl: "https://github.com/mridungeorge/analytics-platform"
    }
  ];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));
  
  const uniqueTags = ["all", ...Array.from(new Set(projects.flatMap(p => p.tags)))];
  
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
    
    const section = document.getElementById("projects");
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Featured Projects</h2>
        
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {uniqueTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={cn(
                "px-4 py-1 rounded-full text-sm transition-all duration-300",
                filter === tag
                  ? "bg-cyber/30 text-cyber border border-cyber/50"
                  : "bg-dark-lighter text-light-darker border border-dark-light hover:bg-dark-light"
              )}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={cn(
                "glass-card p-6 transition-all duration-500 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                activeProject === project.id ? "scale-[1.02] shadow-lg shadow-cyber/20" : ""
              )}
              style={{ transitionDelay: `${(project.id - 1) * 100}ms` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
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
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs px-2 py-1 rounded-full bg-dark-light text-light-darker"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
