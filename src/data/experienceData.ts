
import { Award, Briefcase, Cloud, Code, Server, Monitor } from "lucide-react";
import { Certificate, Experience } from "@/types/experience";
import React from "react";

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Systems Analyst",
    company: "Howards Storage World, Sydney",
    period: "May 2024 - Present",
    description: [
      "Microsoft Dynamics 365 Administration: Managed CRM & ERP systems, automated workflows using Power Automate & PowerApps, and integrated cloud solutions with Azure Logic Apps.",
      "DevOps & Cloud Management: Built CI/CD pipelines using Jenkins, GitHub Actions, and Azure DevOps, improving deployment efficiency by 40%.",
      "Infrastructure as Code (IaC): Automated provisioning with Terraform & CloudFormation, reducing manual configuration efforts by 60%.",
      "SIEM & Security Monitoring: Deployed Splunk & Microsoft Sentinel for security event monitoring, log analysis, and threat detection.",
      "Cloud Security & Compliance: Implemented ACSC Essential Eight, NIST, and Azure Security Centre policies, ensuring compliance with security frameworks.",
      "Incident Response & Threat Hunting: Integrated Splunk Enterprise Security, AWS GuardDuty, and Azure Defender to detect and mitigate security threats.",
      "Monitoring & Observability: Configured ELK Stack, Prometheus-Grafana, and AWS CloudWatch for real-time system monitoring."
    ],
    icon: React.createElement(Briefcase, { size: 20, className: "text-cyber" })
  },
  {
    id: 2,
    title: "AWS DevOps Engineer",
    company: "Aus Biz Consultancy, Sydney",
    period: "Nov 2023 - May 2024",
    description: [
      "Serverless Cloud Solutions: Designed and deployed AWS Lambda, API Gateway, and DynamoDB architectures, reducing operational costs by 40%.",
      "CI/CD Pipeline Automation: Implemented AWS CodePipeline & GitLab CI/CD, enhancing deployment speed by 60%.",
      "Cloud Security & Governance: Configured AWS IAM, GuardDuty, Security Hub, and WAF to enhance cloud security.",
      "Observability & Logging: Integrated CloudWatch, X-Ray, and Splunk, improving system visibility and debugging efficiency."
    ],
    icon: React.createElement(Briefcase, { size: 20, className: "text-cyber" })
  },
  {
    id: 3,
    title: "Machine Language Data Associate",
    company: "Amazon Development Centre, India",
    period: "Sept 2021 - Jan 2022",
    description: [
      "Provided high-quality data annotation for various workflows, directly contributing to improving Amazon Search services' AI/ML models.",
      "Successfully met SLA, production, and quality targets through meticulous attention to detail and strong analytical skills."
    ],
    icon: React.createElement(Briefcase, { size: 20, className: "text-cyber" })
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: React.createElement(Award, { size: 20, className: "text-tech" })
  },
  {
    id: 2,
    name: "AWS Solution Architect Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: React.createElement(Award, { size: 20, className: "text-tech" })
  },
  {
    id: 3,
    name: "AWS Educate Web Application Development Builder",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: React.createElement(Award, { size: 20, className: "text-tech" })
  },
  {
    id: 4,
    name: "Junior Penetration Tester",
    issuer: "TryHackMe",
    date: "2022",
    icon: React.createElement(Award, { size: 20, className: "text-tech" })
  },
  {
    id: 5,
    name: "DevSecOps Path Completion",
    issuer: "TryHackMe",
    date: "2022",
    icon: React.createElement(Award, { size: 20, className: "text-tech" })
  }
];

export const projects = [
  {
    id: 1,
    title: "DevSecOps Project: Netflix Clone on EKS",
    description: "Led a secure deployment of a Netflix clone application on AWS EKS using Docker, Kubernetes, and Jenkins. Integrated advanced security measures with tools like SonarQube and Trivy. Implemented Prometheus and Grafana for performance monitoring and employed Helm and ArgoCD for automated deployment processes.",
    tags: ["aws", "kubernetes", "docker", "jenkins", "sonarqube", "trivy", "prometheus", "grafana", "helm", "argocd"],
    icon: React.createElement(Cloud, { size: 24, className: "text-cyber" })
  },
  {
    id: 2,
    title: "Cybersecurity Web Application",
    description: "Developed an application simulating cybersecurity threats to enhance awareness. The application provides hands-on experience with common vulnerabilities and defensive techniques.",
    tags: ["node.js", "react.js", "typescript", "bcrypt", "sql", "cybersecurity"],
    icon: React.createElement(Code, { size: 24, className: "text-cyber" })
  },
  {
    id: 3,
    title: "Cloud Infrastructure Deployment in AWS",
    description: "Orchestrated a cloud infrastructure project focused on deploying and monitoring services in AWS, ensuring the robustness and reliability of cloud resources.",
    tags: ["aws", "cloudformation", "terraform", "monitoring", "iam", "security"],
    icon: React.createElement(Server, { size: 24, className: "text-cyber" })
  },
  {
    id: 4,
    title: "OpenTelemetry Astronomy Shop Demo",
    description: "Deployed a microservices-based e-commerce platform with OpenTelemetry for observability. Implemented Kubernetes (EKS, AKS), Terraform, and Prometheus-Grafana for monitoring.",
    tags: ["kubernetes", "eks", "aks", "terraform", "prometheus", "grafana", "opentelemetry", "microservices"],
    icon: React.createElement(Monitor, { size: 24, className: "text-cyber" })
  }
];
