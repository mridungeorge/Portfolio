
import { useState, useEffect } from "react";
import { Code, Server, Shield, Database, Terminal, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";

type SkillCategory = {
  id: number;
  name: string;
  icon: JSX.Element;
  skills: Skill[];
};

type Skill = {
  name: string;
  level: number; // 1-5
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      name: "Cloud & Infrastructure",
      icon: <Server size={24} className="text-cyber" />,
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
  
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className={cn(
                "glass-card p-6 transition-all duration-500 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-dark-lighter mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-light-darker">{skill.name}</span>
                    </div>
                    <div className="h-2 bg-dark-light rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyber to-tech rounded-full"
                        style={{ 
                          width: `${skill.level * 20}%`,
                          transition: "width 1s ease-in-out",
                          transitionDelay: `${i * 200 + 500}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
