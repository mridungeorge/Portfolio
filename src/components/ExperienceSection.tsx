
import { useState, useEffect } from "react";
import { Briefcase, Calendar, Award, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Experience = {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  icon: JSX.Element;
};

type Certificate = {
  id: number;
  name: string;
  issuer: string;
  date: string;
  icon: JSX.Element;
};

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Systems Analyst",
      company: "Howards Storage World, Sydney",
      period: "May 2024 - Present",
      description: [
        "Microsoft Dynamics 365 Administration: Managed CRM & ERP workflows, automated business processes using Power Automate & Azure Logic Apps.",
        "DevOps & Cloud Optimization: Engineered CI/CD pipelines with Jenkins, GitHub Actions, and Azure DevOps, boosting deployment efficiency by 40%.",
        "Infrastructure as Code: Automated provisioning with Terraform & CloudFormation, reducing manual configurations by 60%.",
        "Security & Compliance: Implemented SIEM solutions (Splunk, Microsoft Sentinel), ensuring compliance with ACSC Essential Eight, NIST frameworks."
      ],
      icon: <Briefcase size={20} className="text-cyber" />
    },
    {
      id: 2,
      title: "AWS DevOps Engineer",
      company: "Aus Biz Consultancy, Sydney",
      period: "Nov 2023 - May 2024",
      description: [
        "Designed serverless architectures with AWS Lambda, API Gateway, and DynamoDB, reducing operational costs by 40%.",
        "Optimized CI/CD automation with AWS CodePipeline, GitLab CI/CD, and containerized deployments.",
        "Strengthened cloud security with IAM policies, AWS WAF, and GuardDuty."
      ],
      icon: <Briefcase size={20} className="text-cyber" />
    },
    {
      id: 3,
      title: "Machine Learning Data Associate",
      company: "Amazon Development Centre, India",
      period: "Sept 2021 - Jan 2022",
      description: [
        "Contributed to AI/ML model training by enhancing Amazon Search Services through data annotation & quality assessments."
      ],
      icon: <Briefcase size={20} className="text-cyber" />
    }
  ];
  
  const certificates: Certificate[] = [
    {
      id: 1,
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: <Award size={20} className="text-tech" />
    },
    {
      id: 2,
      name: "AWS Solution Architect Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: <Award size={20} className="text-tech" />
    },
    {
      id: 3,
      name: "Junior Penetration Tester",
      issuer: "TryHackMe",
      date: "2022",
      icon: <Award size={20} className="text-tech" />
    },
    {
      id: 4,
      name: "DevSecOps Path Completion",
      issuer: "TryHackMe",
      date: "2022",
      icon: <Award size={20} className="text-tech" />
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
    
    const section = document.getElementById("experience");
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="experience" className="py-20 relative bg-dark-lighter/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Experience & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase size={24} className="text-cyber mr-2" />
              Work Experience
            </h3>
            
            <div className="relative pl-8 border-l border-cyber/30">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  className={cn(
                    "mb-8 relative transition-all duration-500 transform",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -left-4 top-0 w-7 h-7 rounded-full bg-dark-light border-2 border-cyber flex items-center justify-center">
                    {exp.icon}
                  </div>
                  
                  <div className="glass p-5 rounded-lg shadow-md">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-xl font-bold">{exp.title}</h4>
                      <div className="flex items-center text-sm text-light-darker">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-tech text-sm mb-3">{exp.company}</p>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex text-sm text-light-darker">
                          <ChevronRight size={16} className="text-cyber mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award size={24} className="text-tech mr-2" />
              Certifications
            </h3>
            
            <div className="grid gap-4">
              {certificates.map((cert, index) => (
                <div 
                  key={cert.id}
                  className={cn(
                    "glass p-5 rounded-lg shadow-md transition-all duration-500 transform",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-dark-lighter mr-3">
                      {cert.icon}
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium">{cert.name}</h4>
                      <div className="flex flex-wrap items-center mt-1">
                        <span className="text-sm text-light-darker">{cert.issuer}</span>
                        <span className="mx-2 text-light-darker">•</span>
                        <span className="text-sm text-light-darker">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
