
import React from "react";

export const terminalCommands = {
  help: (
    <div>
      <p>Available commands:</p>
      <ul className="list-disc list-inside mt-1 space-y-1">
        <li><span className="text-cyber">whoami</span> - Display basic information</li>
        <li><span className="text-cyber">skills</span> - List technical skills</li>
        <li><span className="text-cyber">experience</span> - Show work history</li>
        <li><span className="text-cyber">projects</span> - View key projects</li>
        <li><span className="text-cyber">contact</span> - Contact information</li>
        <li><span className="text-cyber">clear</span> - Clear terminal history</li>
      </ul>
    </div>
  ),
  whoami: "Mridun George - DevOps Engineer & System Analyst with 2+ years of experience building secure cloud infrastructure, implementing CI/CD pipelines, and automating business processes.",
  skills: (
    <div>
      <p>Technical Skills:</p>
      <ul className="grid grid-cols-2 gap-1 mt-1">
        <li><span className="text-cyber">▶</span> AWS & Azure</li>
        <li><span className="text-cyber">▶</span> Terraform & CloudFormation</li>
        <li><span className="text-cyber">▶</span> Docker & Kubernetes</li>
        <li><span className="text-cyber">▶</span> Jenkins & GitHub Actions</li>
        <li><span className="text-cyber">▶</span> Splunk & Microsoft Sentinel</li>
        <li><span className="text-cyber">▶</span> Python & PowerShell</li>
        <li><span className="text-cyber">▶</span> Microsoft Dynamics 365</li>
        <li><span className="text-cyber">▶</span> SIEM & Threat Monitoring</li>
      </ul>
    </div>
  ),
  experience: (
    <div>
      <p className="font-bold">Work Experience:</p>
      <div className="mt-2">
        <p className="text-cyber">Systems Analyst | Howards Storage World (May 2024 - Present)</p>
        <ul className="list-disc list-inside ml-4 mt-1">
          <li>Managed Microsoft Dynamics 365 CRM & ERP workflows</li>
          <li>Engineered CI/CD pipelines with Jenkins & Azure DevOps</li>
          <li>Implemented SIEM solutions for security compliance</li>
        </ul>
      </div>
      <div className="mt-2">
        <p className="text-cyber">AWS DevOps Engineer | Aus Biz Consultancy (Nov 2023 - May 2024)</p>
        <ul className="list-disc list-inside ml-4 mt-1">
          <li>Designed serverless architectures with AWS Lambda</li>
          <li>Optimized CI/CD automation with AWS CodePipeline</li>
          <li>Strengthened cloud security with IAM policies & AWS WAF</li>
        </ul>
      </div>
      <div className="mt-2">
        <p className="text-cyber">ML Data Associate | Amazon (Sept 2021 - Jan 2022)</p>
        <ul className="list-disc list-inside ml-4 mt-1">
          <li>Contributed to AI/ML model training for Amazon Search</li>
        </ul>
      </div>
    </div>
  ),
  projects: (
    <div>
      <p className="font-bold">Key Projects:</p>
      
      {/* New projects */}
      <div className="mt-2">
        <p className="text-cyber">Netflix Clone on EKS</p>
        <p className="ml-4">Secure deployment on AWS EKS with CI/CD pipelines</p>
      </div>
      <div className="mt-2">
        <p className="text-cyber">Cybersecurity Web Application</p>
        <p className="ml-4">Educational platform simulating cybersecurity threats</p>
      </div>
      <div className="mt-2">
        <p className="text-cyber">Cloud Infrastructure on AWS</p>
        <p className="ml-4">Robust cloud architecture with IaC and monitoring</p>
      </div>
      <div className="mt-2">
        <p className="text-cyber">OpenTelemetry Astronomy Shop</p>
        <p className="ml-4">Microservices e-commerce with comprehensive observability</p>
      </div>
      
      {/* Original projects */}
      <div className="mt-2">
        <p className="text-cyber">TailorWise - AI Cover Letter Generator</p>
        <p className="ml-4">Express.js backend with AI-based resume matching</p>
      </div>
      <div className="mt-2">
        <p className="text-cyber">AI-Powered Label Generator</p>
        <p className="ml-4">Microsoft Dynamics NAV integration for real-time data</p>
      </div>
      <div className="mt-2">
        <p className="text-cyber">PyExi - No-Code Python Automation</p>
        <p className="ml-4">AI-powered task-to-script conversion tool</p>
      </div>
      <div className="mt-2">
        <p className="text-cyber">API-Driven Analytics Platform</p>
        <p className="ml-4">Business intelligence with AI-powered insights</p>
      </div>
    </div>
  ),
  contact: (
    <div>
      <p className="font-bold">Contact Information:</p>
      <ul className="list-disc list-inside mt-1">
        <li>Email: <a href="mailto:contact@mridungeorge.com" className="text-cyber underline">contact@mridungeorge.com</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/mridungeorge" target="_blank" rel="noopener noreferrer" className="text-cyber underline">linkedin.com/in/mridungeorge</a></li>
        <li>GitHub: <a href="https://github.com/mridungeorge" target="_blank" rel="noopener noreferrer" className="text-cyber underline">github.com/mridungeorge</a></li>
      </ul>
    </div>
  ),
};
