
// Helper function to get detailed project description
export const getProjectDetails = (title: string): string => {
  // All detailed descriptions are now stored directly in the projects data in projectsData.ts
  return "";
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

    case "DevSecOps Project: Netflix Clone on EKS":
      return ["Integrated advanced security measures", "Used SonarQube and Trivy", "Implemented Prometheus and Grafana monitoring"];
    
    case "Cybersecurity Web Application":
      return ["Simulates cybersecurity threats", "Educational platform for security awareness", "Security best practices implementation"];
    
    case "Cloud Infrastructure Deployment in AWS":
      return ["Robust architecture with IaC", "Comprehensive monitoring", "Automated scaling and resource management"];
    
    case "OpenTelemetry Astronomy Shop Demo":
      return ["Microservices e-commerce architecture", "OpenTelemetry instrumentation", "Implemented with Kubernetes (EKS, AKS)", "Terraform and Prometheus-Grafana monitoring"];
    
    default:
      return ["No specific features available"];
  }
};
