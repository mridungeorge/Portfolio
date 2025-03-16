
// Helper function to get detailed project description
export const getProjectDetails = (title: string): string => {
  switch (title) {
    case "TailorWise":
      return "AI-powered web application for personalized cover letter generation based on job descriptions and resumes.";
    
    case "AI-Powered Label Generator":
      return "Advanced label-generation system integrating with Microsoft Dynamics NAV to fetch real-time product data.";
    
    case "PyExi":
      return "A no-code Python automation script generator enabling users to automate file management, web scraping, data processing, and API integrations.";
    
    case "API-Driven Analytics Platform":
      return "Business intelligence platform for data visualization, KPI tracking, and AI-powered analytics.";

    case "Netflix Clone on EKS":
      return "Led a secure deployment of a Netflix clone application on AWS EKS using Docker, Kubernetes, and Jenkins.";
    
    case "Cybersecurity Web Application":
      return "Developed an application simulating cybersecurity threats to enhance awareness.";
    
    case "Cloud Infrastructure on AWS":
      return "Orchestrated a cloud infrastructure project focused on deploying and monitoring services in AWS, ensuring the robustness and reliability of cloud resources.";
    
    case "OpenTelemetry Astronomy Shop":
      return "Deployed a microservices-based e-commerce platform with OpenTelemetry for observability.";
    
    default:
      return "";
  }
};

// Helper function to get project features
export const getProjectFeatures = (title: string): string[] => {
  switch (title) {
    case "TailorWise":
      return ["Dynamic job matching", "AI-driven text generation", "User-friendly interface"];
    
    case "AI-Powered Label Generator":
      return ["Custom label designer", "Batch printing", "AI-driven layout optimization", "Universal printer compatibility"];
    
    case "PyExi":
      return ["AI-powered task-to-script conversion", "API integrations", "Encryption"];
    
    case "API-Driven Analytics Platform":
      return ["Role-based access control", "Real-time dashboards", "Enterprise ERP integration"];

    case "Netflix Clone on EKS":
      return ["Integrated advanced security measures", "Used SonarQube and Trivy", "Implemented Prometheus and Grafana monitoring"];
    
    case "Cybersecurity Web Application":
      return ["Simulates cybersecurity threats", "Educational platform for security awareness", "Security best practices implementation"];
    
    case "Cloud Infrastructure on AWS":
      return ["Robust architecture with IaC", "Comprehensive monitoring", "Automated scaling and resource management"];
    
    case "OpenTelemetry Astronomy Shop":
      return ["Microservices e-commerce architecture", "OpenTelemetry instrumentation", "Implemented with Kubernetes (EKS, AKS)", "Terraform and Prometheus-Grafana monitoring"];
    
    default:
      return ["No specific features available"];
  }
};
