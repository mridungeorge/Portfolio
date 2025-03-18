
import { useState, useEffect, useRef } from "react";
import { Code, Server, Shield, Database, Terminal, Workflow, ChevronUp, ChevronDown, Info } from "lucide-react";
import { cn } from "@/lib/utils";

type SkillCategory = {
  id: number;
  name: string;
  icon: JSX.Element;
  skills: Skill[];
  description: string;
};

type Skill = {
  name: string;
  level: number; // 1-5
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  
  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      name: "Cloud & Infrastructure",
      icon: <Server size={24} className="text-cyber" />,
      description: "Expert in designing and managing cloud infrastructure with deep knowledge of AWS and Azure services, containerization, and infrastructure as code tools.",
      skills: [
        { name: "AWS (EC2, S3, Lambda, IAM)", level: 5 },
        { name: "Azure (VMs, Blob, AD, DevOps)", level: 4 },
        { name: "Terraform & CloudFormation", level: 4 },
        { name: "Docker & Kubernetes", level: 4 },
        { name: "Serverless Architecture", level: 4 }
      ]
    },
    {
      id: 2,
      name: "Cybersecurity & Compliance",
      icon: <Shield size={24} className="text-cyber" />,
      description: "Specialized in implementing comprehensive security solutions, threat monitoring, vulnerability assessment, and ensuring compliance with industry frameworks.",
      skills: [
        { name: "SIEM (Splunk, Microsoft Sentinel)", level: 4 },
        { name: "Threat Monitoring", level: 4 },
        { name: "Vulnerability Assessment", level: 3 },
        { name: "Identity & Access Management", level: 4 },
        { name: "Compliance Frameworks (NIST, ACSC)", level: 3 }
      ]
    },
    {
      id: 3,
      name: "DevOps & CI/CD",
      icon: <Workflow size={24} className="text-cyber" />,
      description: "Proficient in establishing efficient CI/CD pipelines, automation workflows, and implementing DevOps best practices for seamless software delivery.",
      skills: [
        { name: "CI/CD Pipelines", level: 5 },
        { name: "Jenkins, GitHub Actions", level: 4 },
        { name: "Infrastructure as Code", level: 4 },
        { name: "GitLab CI/CD", level: 4 },
        { name: "AWS CodePipeline", level: 4 }
      ]
    },
    {
      id: 4,
      name: "Scripting & Automation",
      icon: <Terminal size={24} className="text-cyber" />,
      description: "Skilled in writing efficient scripts and developing automation solutions using various programming languages and tools.",
      skills: [
        { name: "Python", level: 4 },
        { name: "PowerShell", level: 4 },
        { name: "Bash Scripting", level: 3 },
        { name: "Power Automate", level: 4 },
        { name: "Azure Logic Apps", level: 3 }
      ]
    },
    {
      id: 5,
      name: "Databases & Data Management",
      icon: <Database size={24} className="text-cyber" />,
      description: "Experienced in designing, implementing, and managing various database systems and data processing solutions.",
      skills: [
        { name: "PostgreSQL", level: 3 },
        { name: "MongoDB", level: 3 },
        { name: "DynamoDB", level: 4 },
        { name: "SQL Server", level: 3 },
        { name: "Data Analytics", level: 3 }
      ]
    },
    {
      id: 6,
      name: "Programming & Web",
      icon: <Code size={24} className="text-cyber" />,
      description: "Proficient in modern web development technologies, API design, and building responsive, user-friendly applications.",
      skills: [
        { name: "JavaScript & TypeScript", level: 3 },
        { name: "Node.js & Express", level: 3 },
        { name: "React.js", level: 3 },
        { name: "FastAPI", level: 3 },
        { name: "RESTful API Design", level: 4 }
      ]
    }
  ];
  
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
    
    const section = document.getElementById("skills");
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Track mouse position for tooltip positioning
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleCategory = (categoryId: number) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };
  
  const getLevelText = (level: number): string => {
    switch(level) {
      case 1: return "Basic";
      case 2: return "Intermediate";
      case 3: return "Advanced";
      case 4: return "Expert";
      case 5: return "Master";
      default: return "Unknown";
    }
  };
  
  return (
    <section id="skills" className="py-20 relative">
      {/* Tooltip for skill level */}
      {hoveredSkill && (
        <div 
          className="fixed bg-dark-lighter border border-cyber/30 text-light px-3 py-1.5 rounded text-sm z-50 pointer-events-none animate-fade-in"
          style={{ 
            left: `${mousePosition.x + 10}px`, 
            top: `${mousePosition.y + 10}px`,
            maxWidth: '200px'
          }}
        >
          {hoveredSkill}
        </div>
      )}
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3 text-center gradient-text">Technical Skills</h2>
        <p className="text-center text-light-darker mb-12 max-w-2xl mx-auto">Explore my technical proficiencies across various domains, from cloud infrastructure to programming and cybersecurity.</p>
        
        <div ref={skillsContainerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className={cn(
                "glass-card overflow-hidden transition-all duration-700 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                expandedCategory === category.id ? "lg:row-span-2" : ""
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className={cn(
                  "p-6 cursor-pointer transition-all duration-300",
                  expandedCategory === category.id ? "bg-gradient-to-r from-cyber/10 to-transparent" : ""
                )}
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-dark-lighter mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                  <button className="p-1 rounded-full bg-dark-lighter hover:bg-dark-light transition-colors duration-300">
                    {expandedCategory === category.id ? 
                      <ChevronUp size={18} className="text-cyber" /> : 
                      <ChevronDown size={18} className="text-light-darker" />
                    }
                  </button>
                </div>
                
                <div className={cn(
                  "space-y-4 transition-all duration-500",
                  expandedCategory === category.id ? "max-h-[500px] opacity-100" : "max-h-[500px] lg:max-h-[120px] opacity-100"
                )}>
                  {expandedCategory === category.id && (
                    <p className="text-light-darker mb-4">{category.description}</p>
                  )}
                  
                  {category.skills.map((skill, i) => (
                    <div key={i} className={cn(
                      "transition-opacity duration-300",
                      (expandedCategory === null || expandedCategory === category.id || i < 3) ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
                    )}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-light">{skill.name}</span>
                        <span 
                          className="text-xs text-light-darker flex items-center"
                          onMouseEnter={() => setHoveredSkill(getLevelText(skill.level))}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <Info size={12} className="mr-1 text-cyber" />
                          {getLevelText(skill.level)}
                        </span>
                      </div>
                      <div className="h-2 bg-dark-light rounded-full overflow-hidden">
                        <div 
                          className={cn(
                            "h-full rounded-full transition-all",
                            skill.level === 5 ? "bg-gradient-to-r from-cyber via-tech to-cyber animate-pulse" : "bg-gradient-to-r from-cyber to-tech"
                          )}
                          style={{ 
                            width: expandedCategory === category.id || expandedCategory === null ? `${skill.level * 20}%` : "0%",
                            transition: "width 1s cubic-bezier(0.65, 0, 0.35, 1)",
                            transitionDelay: expandedCategory === category.id ? `${i * 100}ms` : `${i * 200 + 500}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  
                  {expandedCategory !== category.id && category.skills.length > 3 && (
                    <div className="text-center pt-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCategory(category.id);
                        }}
                        className="text-xs text-cyber hover:text-tech transition-colors duration-300 flex items-center mx-auto"
                      >
                        <span>Show All Skills</span>
                        <ChevronDown size={12} className="ml-1" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-24 w-48 h-48 bg-cyber/5 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/3 -right-24 w-64 h-64 bg-tech/5 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDuration: '7s' }}></div>
    </section>
  );
};

export default SkillsSection;
