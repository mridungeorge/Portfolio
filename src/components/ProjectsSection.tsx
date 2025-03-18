
import { useState, useEffect, useRef } from "react";
import { projects } from "@/data/projectsData";
import { Project } from "@/types/experience";
import TagFilter from "./projects/TagFilter";
import ProjectCard from "./projects/ProjectCard";
import ProjectCarousel from "./projects/ProjectCarousel";
import ProjectModal from "./projects/ProjectModal";

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<string>("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
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
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [filteredProjects.length]);
  
  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
  };
  
  return (
    <section id="projects" className="py-20 relative">
      <div 
        className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark to-transparent z-10"
      />
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center gradient-text">Featured Projects</h2>
        <p className="text-center text-light-darker mb-10 max-w-2xl mx-auto">
          Explore my latest work showcasing expertise in cloud architecture, AI integration, and automation solutions.
        </p>
        
        <TagFilter 
          uniqueTags={uniqueTags} 
          filter={filter} 
          setFilter={setFilter} 
          setCurrentSlide={setCurrentSlide} 
        />
        
        <div className="md:hidden">
          <ProjectCarousel 
            projects={filteredProjects}
            isVisible={isVisible}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            openProjectDetails={openProjectDetails}
          />
        </div>
        
        <div ref={projectsRef} className="hidden md:grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isVisible={isVisible}
              activeProject={activeProject}
              index={index}
              setActiveProject={setActiveProject}
              openProjectDetails={openProjectDetails}
            />
          ))}
        </div>
      </div>
      
      {showModal && selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          closeModal={closeModal} 
        />
      )}
    </section>
  );
};

export default ProjectsSection;
