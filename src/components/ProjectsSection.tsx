
import { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Server, Database, Code, Cloud, ArrowRight, ArrowLeft, Eye, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: JSX.Element;
  githubUrl?: string;
  liveUrl?: string;
  details?: string;
  image?: string;
};

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<string>("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "TailorWise - AI Cover Letter Generator",
      description: "An AI-powered web application for personalized cover letter generation based on job descriptions and resumes. Features include dynamic job matching, AI-driven text generation, and user-friendly interface.",
      tags: ["express.js", "ai", "fastapi", "node.js", "mongodb"],
      icon: <Code size={24} className="text-cyber" />,
      githubUrl: "https://github.com/mridungeorge/tailorwise",
      liveUrl: "https://tailorwise.example.com",
      details: "TailorWise revolutionizes the job application process by leveraging advanced AI algorithms to analyze job descriptions and resumes, generating perfectly tailored cover letters that highlight relevant skills and experiences. The system uses natural language processing to understand job requirements and machine learning to match candidate qualifications, resulting in highly personalized documents that improve application success rates by up to 40%."
    },
    {
      id: 2,
      title: "AI-Powered Label Generator",
      description: "Advanced label-generation system integrating with Microsoft Dynamics NAV to fetch real-time product data. Features custom label designer, batch printing, AI-driven layout optimization, and universal printer compatibility.",
      tags: ["fastapi", "node.js", "react", "postgresql", "mongodb"],
      icon: <Server size={24} className="text-cyber" />,
      githubUrl: "https://github.com/mridungeorge/label-generator",
      details: "This innovative label generation system seamlessly integrates with Microsoft Dynamics NAV to extract real-time product information, specifications, and inventory data. The application features an intuitive label designer with drag-and-drop functionality, AI-powered layout optimization that automatically arranges content for maximum readability, and support for multiple printer types including Zebra, SATO, and standard office printers. The system's batch processing capability enables the simultaneous printing of thousands of labels while maintaining data accuracy and design consistency."
    },
    {
      id: 3,
      title: "PyExi - No-Code Python Automation",
      description: "A no-code Python automation script generator enabling users to automate file management, web scraping, data processing, and API integrations. Includes AI-powered task-to-script conversion.",
      tags: ["react", "next.js", "python", "aws", "azure", "openai"],
      icon: <Cloud size={24} className="text-cyber" />,
      githubUrl: "https://github.com/mridungeorge/pyexi",
      liveUrl: "https://pyexi.example.com",
      details: "PyExi democratizes Python automation by allowing non-programmers to create powerful scripts through an intuitive no-code interface. Users simply describe tasks in natural language, and PyExi's AI engine converts these descriptions into fully functional Python scripts. The platform supports complex automations including file operations, web data extraction, API integrations, and data transformations. All scripts are securely stored in the cloud with robust encryption and can be scheduled to run at specific intervals or triggered by external events."
    },
    {
      id: 4,
      title: "API-Driven Analytics Platform",
      description: "Business intelligence platform for data visualization, KPI tracking, and AI-powered analytics. Features role-based access control, real-time dashboards, and enterprise ERP integration.",
      tags: ["fastapi", "node.js", "react", "typescript", "postgresql", "mongodb", "tensorflow"],
      icon: <Database size={24} className="text-cyber" />,
      githubUrl: "https://github.com/mridungeorge/analytics-platform",
      details: "This comprehensive analytics platform provides real-time business intelligence through interactive dashboards, customizable reports, and AI-driven insights. The system integrates with enterprise ERP systems including SAP, Oracle, and Microsoft Dynamics to extract and analyze operational data. Features include predictive analytics for sales forecasting, anomaly detection for identifying unusual patterns, and natural language querying that allows users to ask questions about their data in plain English. The platform's role-based access control ensures that sensitive information is only accessible to authorized personnel."
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
  
  // Track mouse position for cursor effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Automatic slider for mobile view
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [filteredProjects.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };
  
  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
    // Freeze scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setShowModal(false);
    // Restore scrolling
    document.body.style.overflow = 'unset';
  };
  
  return (
    <section id="projects" className="py-20 relative">
      {/* Custom cursor effect */}
      <div 
        className="hidden md:block fixed w-8 h-8 rounded-full bg-cyber/20 border border-cyber pointer-events-none z-50 transition-transform duration-100"
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%) scale(${activeProject ? 1.5 : 1})`,
          opacity: isVisible ? 1 : 0
        }}
      />
      
      <div 
        className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark to-transparent z-10"
      />
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center gradient-text">Featured Projects</h2>
        <p className="text-center text-light-darker mb-10 max-w-2xl mx-auto">Explore my latest work showcasing expertise in cloud architecture, AI integration, and automation solutions.</p>
        
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {uniqueTags.map(tag => (
            <button
              key={tag}
              onClick={() => {
                setFilter(tag);
                setCurrentSlide(0);
              }}
              className={cn(
                "px-4 py-1 rounded-full text-sm transition-all duration-300 transform",
                filter === tag
                  ? "bg-cyber/30 text-cyber border border-cyber/50 scale-110"
                  : "bg-dark-lighter text-light-darker border border-dark-light hover:bg-dark-light hover:scale-105"
              )}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {/* Mobile slider view */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {filteredProjects.map((project) => (
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
            {filteredProjects.map((_, index) => (
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
        
        {/* Desktop grid view */}
        <div ref={projectsRef} className="hidden md:grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
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
                    className={cn(
                      "text-xs px-2 py-1 rounded-full transition-all duration-300",
                      filter === tag ? 
                        "bg-cyber/20 text-cyber" : 
                        "bg-dark-light text-light-darker hover:bg-dark hover:text-light"
                    )}
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
          ))}
        </div>
      </div>
      
      {/* Project Details Modal */}
      {showModal && selectedProject && (
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
              {selectedProject.icon}
              <h3 className="text-2xl font-bold ml-3 gradient-text">{selectedProject.title}</h3>
            </div>
            
            <div className="space-y-6">
              <div className="h-48 bg-dark-light/50 rounded-lg flex items-center justify-center">
                <p className="text-light-darker">Project Screenshot</p>
              </div>
              
              <h4 className="text-xl font-medium">Overview</h4>
              <p className="text-light-darker">{selectedProject.details || selectedProject.description}</p>
              
              <div>
                <h4 className="text-xl font-medium mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
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
                {selectedProject.githubUrl && (
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-cyber flex items-center"
                  >
                    <Github size={18} className="mr-2" />
                    View Code
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a 
                    href={selectedProject.liveUrl} 
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
      )}
    </section>
  );
};

export default ProjectsSection;
