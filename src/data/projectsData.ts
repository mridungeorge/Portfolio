
import { Cloud, Code, Server, Monitor } from "lucide-react";
import { Project } from "@/types/experience";
import React from "react";

export const projects: Project[] = [
  {
    id: 1,
    title: "DevSecOps Project: Netflix Clone on EKS",
    description: "Led a secure deployment of a Netflix clone application on AWS EKS using Docker, Kubernetes, and Jenkins. Integrated advanced security measures with tools like SonarQube and Trivy. Implemented Prometheus and Grafana for performance monitoring and employed Helm and ArgoCD for automated deployment processes.",
    tags: ["aws", "kubernetes", "docker", "jenkins", "sonarqube", "trivy", "prometheus", "grafana", "helm", "argocd"],
    icon: React.createElement(Cloud, { size: 24, className: "text-cyber" }),
    githubUrl: "https://github.com/mridungeorge/netflix-eks-devsecops",
    liveUrl: null,
    details: "This comprehensive DevSecOps project involved deploying a Netflix clone on AWS Elastic Kubernetes Service (EKS) with a focus on security throughout the deployment pipeline. The implementation included continuous integration with Jenkins, secure containerization with Docker, and orchestration with Kubernetes. Security was enhanced through SonarQube for code quality analysis and Trivy for container vulnerability scanning. For observability, Prometheus was used to collect metrics and Grafana dashboards were set up for visualization. Helm charts managed Kubernetes resources while ArgoCD provided GitOps-based continuous delivery."
  },
  {
    id: 2,
    title: "Cybersecurity Web Application",
    description: "Developed an application simulating cybersecurity threats to enhance awareness. The application provides hands-on experience with common vulnerabilities and defensive techniques.",
    tags: ["node.js", "react.js", "typescript", "bcrypt", "sql", "cybersecurity"],
    icon: React.createElement(Code, { size: 24, className: "text-cyber" }),
    githubUrl: "https://github.com/mridungeorge/security-awareness-app",
    liveUrl: null,
    details: "This educational platform was designed to raise cybersecurity awareness by simulating common attack vectors in a safe environment. The application demonstrates various vulnerabilities such as SQL injection, XSS attacks, CSRF, and insecure authentication workflows. Users can interact with the platform to understand how these attacks work and how to defend against them. Built with Node.js and React.js, the application implements proper security practices including input validation, password hashing with bcrypt, and prepared SQL statements to demonstrate secure coding practices."
  },
  {
    id: 3,
    title: "Cloud Infrastructure Deployment in AWS",
    description: "Orchestrated a cloud infrastructure project focused on deploying and monitoring services in AWS, ensuring the robustness and reliability of cloud resources.",
    tags: ["aws", "cloudformation", "terraform", "monitoring", "iam", "security"],
    icon: React.createElement(Server, { size: 24, className: "text-cyber" }),
    githubUrl: "https://github.com/mridungeorge/aws-cloud-infrastructure",
    liveUrl: null,
    details: "This project focused on establishing a robust, scalable, and secure AWS cloud infrastructure using Infrastructure as Code principles. The deployment incorporated a multi-tier architecture with proper network segmentation through VPCs, subnets, and security groups. CloudFormation templates and Terraform configurations were used to provision and manage resources consistently across environments. Key components included auto-scaling groups for application resilience, load balancers for traffic distribution, and comprehensive IAM policies for fine-grained access control. Monitoring was implemented using CloudWatch for metrics collection and alerting, with dashboards for real-time visibility into system performance and health."
  },
  {
    id: 4,
    title: "OpenTelemetry Astronomy Shop Demo",
    description: "Deployed a microservices-based e-commerce platform with OpenTelemetry for observability. Implemented Kubernetes (EKS, AKS), Terraform, and Prometheus-Grafana for monitoring.",
    tags: ["kubernetes", "eks", "aks", "terraform", "prometheus", "grafana", "opentelemetry", "microservices"],
    icon: React.createElement(Monitor, { size: 24, className: "text-cyber" }),
    githubUrl: "https://github.com/mridungeorge/opentelemetry-astronomy-shop",
    liveUrl: null,
    details: "This e-commerce demonstration application was built as a microservices architecture selling astronomy-related products. The platform leveraged OpenTelemetry to provide comprehensive observability across all services, capturing traces, metrics, and logs for end-to-end visibility. The infrastructure was deployed across multiple cloud providers using Kubernetes (both EKS on AWS and AKS on Azure) to showcase multi-cloud strategies. Terraform was used for infrastructure provisioning, ensuring consistency across environments. Prometheus collected metrics from all services, while Grafana dashboards provided real-time visualization of system performance, business metrics, and user behavior. The project demonstrates best practices for distributed systems monitoring and observability."
  },
  {
    id: 5,
    title: "TailorWise",
    description: "AI-powered web application for personalized cover letter generation based on job descriptions and resumes.",
    tags: ["express.js", "ai-apis", "fastapi", "node.js", "mongodb"],
    icon: React.createElement(Code, { size: 24, className: "text-cyber" }),
    githubUrl: null,
    liveUrl: null,
    details: "TailorWise is an AI-powered application that helps job seekers create personalized cover letters by analyzing job descriptions and resumes. The system uses advanced natural language processing to match candidate skills with job requirements and generate tailored content that highlights relevant experience."
  },
  {
    id: 6,
    title: "AI-Powered Label Generator",
    description: "Advanced label-generation system integrating with Microsoft Dynamics NAV to fetch real-time product data.",
    tags: ["fastapi", "node.js", "react.js", "postgresql", "mongodb", "zebra-zpl"],
    icon: React.createElement(Server, { size: 24, className: "text-cyber" }),
    githubUrl: null,
    liveUrl: null,
    details: "This label generation system integrates with Microsoft Dynamics NAV to pull real-time product data for creating customized shipping and product labels. The application features an intuitive label designer with AI-driven layout optimization to maximize readability and compliance with industry standards."
  },
  {
    id: 7,
    title: "PyExi",
    description: "A no-code Python automation script generator enabling users to automate file management, web scraping, data processing, and API integrations.",
    tags: ["react.js", "next.js", "python", "fastapi", "aws", "azure", "openai"],
    icon: React.createElement(Code, { size: 24, className: "text-cyber" }),
    githubUrl: null,
    liveUrl: null,
    details: "PyExi is a no-code solution that enables users to generate Python automation scripts through a simple interface. The platform converts natural language task descriptions into functional Python code, allowing non-programmers to automate workflows like file management, data processing, and API integrations."
  },
  {
    id: 8,
    title: "API-Driven Analytics Platform",
    description: "Business intelligence platform for data visualization, KPI tracking, and AI-powered analytics.",
    tags: ["fastapi", "node.js", "react.js", "typescript", "postgresql", "mongodb", "tensorflow"],
    icon: React.createElement(Monitor, { size: 24, className: "text-cyber" }),
    githubUrl: null,
    liveUrl: null,
    details: "This comprehensive analytics platform provides business intelligence through customizable dashboards, KPI tracking, and predictive analytics. The system integrates with enterprise ERP systems to provide real-time insights and features role-based access control for secure data management."
  }
];
